'use strict';
const {spawn}=require('node:child_process');const path=require('node:path');
function createWindowsMouse({platform=process.platform,spawnImpl=spawn,onTrace=()=>{},onStatus=()=>{},clickTimeoutMs=8000,onScrollState=()=>{}}={}){
 let scrollRequest=null,scrollSequence=0,scrollBusy=false,wheelActive=false;
 const scrollError=code=>Error('scroll.'+code);
 const setScroll=(active,code)=>{const changed=wheelActive!==active;wheelActive=active;if(changed||!active)onScrollState(active,code);};
 const stopScroll=()=>{if(wheelActive||scrollRequest){child?.stdin.write('STOP-SCROLL\n');scrollRequest?.finish('cancelled');setScroll(false,'stopped');}};
 let clickEpoch=0,clickBusy=false,clickRequest=null,clickSequence=0,closing=false,inputBlocked=false;const waiters=new Set();
 const clickError=code=>Object.assign(Error('desktop.click.'+code),{code});
 const failWaiters=()=>{for(const w of [...waiters])w(false);};
 let child=null,ready=false,pending=null,sequence=0,partial='',diagnosticId=0;
 const write=()=>{if(ready&&pending){onTrace('native-write',diagnosticId);child.stdin.write(pending);pending=null;}};
 const api={
  start(){if(closing||inputBlocked)throw clickError('release-error');if(child)return;if(platform!=='win32')throw Error('Maussteuerung ist nur unter Windows verfügbar.');
   const processChild=spawnImpl('powershell.exe',['-NoLogo','-NoProfile','-NonInteractive','-ExecutionPolicy','Bypass','-File',path.join(__dirname,'scripts','move-pointer.ps1'),'-OwnerPid',String(process.pid)],{windowsHide:true,stdio:['pipe','pipe','pipe']});child=processChild;
   processChild.stdin.on('error',()=>{});processChild.stderr.on('data',()=>{});
   processChild.stdout.on('data',data=>{if(child!==processChild)return;partial+=data.toString('ascii');if(partial.length>2048){api.close();onStatus('Windows-Maussteuerung lieferte ungültige Daten.');return;}const lines=partial.split(/\r?\n/);partial=lines.pop();for(const line of lines){const wheel=line.match(/^WHEEL\|([0-9]+)\|(ok|busy|target|routing|error|cancelled)$/),ended=line.match(/^WHEEL-END\|([0-9]+)\|(limit|target|error|stopped)$/);if(wheel){if(scrollRequest&&Number(wheel[1])===scrollRequest.id)scrollRequest.finish(wheel[2]);}else if(ended){if(Number(ended[1])===scrollSequence)setScroll(false,ended[2]);}else if(line==='RELEASE|ok'){inputBlocked=false;if(closing&&!clickRequest){const old=child;child=null;ready=false;partial='';closing=false;old?.kill();}}else if(line==='RELEASE|error'){inputBlocked=true;}else if(line==='READY'){ready=true;if(waiters.size)onTrace('input-ready',diagnosticId);for(const w of [...waiters])w(true);if(pending)onTrace('helper-ready',diagnosticId);write();}else if(/^CLICK\|[0-9]+\|(?:ok|busy|error|release-error|cancelled)\|[0-9]+\|[0-9]+\|-?[0-9]+\|-?[0-9]+$/.test(line)){const parts=line.split('|');if(clickRequest&&Number(parts[1])===clickRequest.id)clickRequest.finish(parts[2],{pid:Number(parts[3]),window:parts[4],x:Number(parts[5]),y:Number(parts[6])});}else if(/^START\|\d+$/.test(line)){if(Number(line.slice(6))===sequence)onTrace('native-start',diagnosticId);}else if(/^DONE\|\d+$/.test(line)){if(Number(line.slice(5))===sequence){onTrace('native-done',diagnosticId);onStatus('Mausziel erreicht.');}}else if(line.startsWith('ERROR|')){api.stop();onStatus('Windows-Maussteuerung nicht verfügbar. Bitte die Desktop-Sitzung prüfen.');}}});
   const closed=()=>{if(child===processChild){failWaiters();scrollRequest?.finish('error');if(wheelActive)setScroll(false,'error');if(clickRequest){inputBlocked=true;clickRequest.finish('release-error');}child=null;ready=false;pending=null;onStatus('Windows-Maussteuerung beendet.');}};processChild.on('error',closed);processChild.on('close',closed);
  },
  waitForReady(id=0){diagnosticId=Number.isSafeInteger(id)&&id>0?id:0;if(ready){onTrace('input-ready',diagnosticId);return Promise.resolve();}if(!child)return Promise.reject(Error('mouse.inputError'));return new Promise((resolve,reject)=>{const finish=ok=>{clearTimeout(timer);waiters.delete(finish);ok?resolve():reject(Error('mouse.inputError'));};const timer=setTimeout(()=>finish(false),clickTimeoutMs);waiters.add(finish);});},
  scrolling:()=>wheelActive,
  async scroll(direction,continuous=false){
   if(!['up','down'].includes(direction)||typeof continuous!=='boolean')throw scrollError('error');
   if(inputBlocked||closing||clickBusy||scrollBusy)throw scrollError('busy');
   scrollBusy=true;const version=clickEpoch;
   try{
    api.start();
    if(!ready)await new Promise((resolve,reject)=>{const finish=ok=>{clearTimeout(timer);waiters.delete(finish);ok?resolve():reject(scrollError('cancelled'));};const timer=setTimeout(()=>finish(false),clickTimeoutMs);waiters.add(finish);});
    if(version!==clickEpoch||!child||closing)throw scrollError('cancelled');
    return await new Promise((resolve,reject)=>{
     const id=++scrollSequence,processChild=child;
     const finish=code=>{if(scrollRequest?.id!==id)return;clearTimeout(timer);scrollRequest=null;if(code==='ok'){setScroll(continuous,'ok');resolve();}else{setScroll(false,code);reject(scrollError(code));}};
     const timer=setTimeout(()=>{try{processChild.stdin.write('STOP-SCROLL\n');}catch{}finish('error');},clickTimeoutMs);
     scrollRequest={id,finish};try{processChild.stdin.write('SCROLL '+id+' '+direction+' '+(continuous?'slow':'step')+'\n');}catch{try{processChild.stdin.write('STOP-SCROLL\n');}catch{}finish('error');}
    });
   }finally{scrollBusy=false;}
  },
  async click(button){
   if(scrollBusy)throw clickError('busy');stopScroll();
   if(button!=='left'&&button!=='right')throw clickError('error');
   if(inputBlocked)throw clickError('release-error');if(clickBusy||closing)throw clickError('busy');clickBusy=true;const version=clickEpoch;
   try{
    api.start();
    if(!ready)await new Promise((resolve,reject)=>{
     const finish=ok=>{clearTimeout(timer);waiters.delete(finish);ok?resolve():reject(clickError('error'));};
     const timer=setTimeout(()=>finish(false),clickTimeoutMs);timer.unref?.();waiters.add(finish);
    });
    if(version!==clickEpoch||!child||closing)throw clickError('cancelled');
    return await new Promise((resolve,reject)=>{
     const id=++clickSequence,processChild=child;
     const finish=(code,anchor)=>{if(clickRequest?.id!==id)return;clearTimeout(timer);clickRequest=null;if(code==='release-error'){inputBlocked=true;try{processChild.stdin.write('STOP\nRELEASE\n');}catch{}}if(code==='ok')resolve(anchor);else reject(clickError(code));};
     const timer=setTimeout(()=>{processChild.stdin.write('STOP\nRELEASE\n');finish('release-error');},clickTimeoutMs);timer.unref?.();
     clickRequest={id,finish};processChild.stdin.write('CLICK '+id+' '+button+'\n');
    });
   }finally{clickBusy=false;if(closing&&!inputBlocked){const old=child;child=null;ready=false;partial='';old?.kill();closing=false;}}
  },
  move(target,bounds,speed,id=0){
   if(inputBlocked||closing)throw clickError('release-error');if(clickRequest||scrollBusy)throw clickError('busy');stopScroll();
   if(!bounds||!['x','y','width','height'].every(k=>Number.isInteger(bounds[k])&&Math.abs(bounds[k])<=65536)||bounds.width<=0||bounds.height<=0||!Number.isInteger(target?.x)||!Number.isInteger(target?.y)||target.x<bounds.x||target.x>=bounds.x+bounds.width||target.y<bounds.y||target.y>=bounds.y+bounds.height)throw Error('Mausziel liegt außerhalb des gewählten Monitors.');
   if(!Number.isInteger(speed)||speed<200||speed>3000)throw Error('Ungültige Mausgeschwindigkeit.');
   if(pending)onTrace('native-superseded',diagnosticId);diagnosticId=Number.isSafeInteger(id)&&id>0?id:0;
   api.start();pending=`MOVE ${++sequence} ${target.x} ${target.y} ${speed} ${bounds.x} ${bounds.y} ${bounds.width} ${bounds.height}\n`;write();
  },
  stop(){if(wheelActive)setScroll(false,'stopped');scrollRequest?.finish('cancelled');clickEpoch++;failWaiters();pending=null;sequence++;if(child)child.stdin.write(inputBlocked?'STOP\nRELEASE\n':'STOP\n');},
  close(){stopScroll();clickEpoch++;failWaiters();pending=null;if(clickRequest||inputBlocked){closing=true;child?.stdin.write(inputBlocked?'STOP\nRELEASE\n':'STOP\n');return;}ready=false;const old=child;child=null;partial='';old?.kill();}
 };
 return Object.freeze(api);
}
module.exports={createWindowsMouse};

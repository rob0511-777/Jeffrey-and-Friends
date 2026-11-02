'use strict';
const {spawn}=require('node:child_process'),path=require('node:path');
const CODES=new Set(['unsupported','changed','not-found','disabled','ambiguous','provider-error']);
const fail=code=>Object.assign(Error('menu.'+(CODES.has(code)?code:'provider-error')),{code:CODES.has(code)?code:'provider-error'});
function createWindowsContextMenu({platform=process.platform,spawnImpl=spawn,timeoutMs=8000}={}){
 let child=null,partial='',sequence=0,disposed=false;const pending=new Map();
 function reset(){const old=child;child=null;partial='';for(const entry of pending.values()){clearTimeout(entry.timer);entry.reject(fail('provider-error'));}pending.clear();old?.kill();}
 function start(){
  if(child)return;if(disposed||platform!=='win32')throw fail('unsupported');
  const c=spawnImpl('powershell.exe',['-NoLogo','-NoProfile','-NonInteractive','-Mta','-ExecutionPolicy','Bypass','-File',path.join(__dirname,'scripts','context-menu.ps1'),'-OwnerPid',String(process.pid)],{windowsHide:true,stdio:['pipe','pipe','pipe']});child=c;
  c.stdin.on('error',()=>{if(child===c)reset();});c.stderr.on('data',()=>{});c.on('error',()=>{if(child===c)reset();});c.on('close',()=>{if(child===c)reset();});
  c.stdout.on('data',bytes=>{
   if(child!==c)return;partial+=bytes.toString('ascii');if(partial.length>256*1024){reset();return;}
   const lines=partial.split(/\r?\n/);partial=lines.pop();
   for(const line of lines){
    if(line==='ERROR|startup'){reset();return;}
    const m=line.match(/^DATA\|([1-9][0-9]*)\|([A-Za-z0-9+/]+={0,2})$/);if(!m)continue;
    const entry=pending.get(Number(m[1]));if(!entry)continue;pending.delete(Number(m[1]));clearTimeout(entry.timer);
    try{const reply=JSON.parse(Buffer.from(m[2],'base64').toString('utf8'));reply.ok===true?entry.resolve(reply.value):entry.reject(fail(reply.code));}catch{entry.reject(fail('provider-error'));}
   }
  });
 }
 function request(operation,args){
  return new Promise((resolve,reject)=>{try{start();const id=++sequence,timer=setTimeout(()=>reset(),timeoutMs);timer.unref?.();pending.set(id,{resolve,reject,timer});child.stdin.write(JSON.stringify({id,operation,args})+'\n');}catch{reject(fail('unsupported'));}});
 }
 return Object.freeze({
  open(anchor){if(!anchor||!Number.isInteger(anchor.pid)||anchor.pid<=0||typeof anchor.window!=='string'||!/^\d{1,19}$/.test(anchor.window)||!['x','y'].every(k=>Number.isInteger(anchor[k])&&Math.abs(anchor[k])<=65536))return Promise.reject(fail('unsupported'));return request('open',{pid:anchor.pid,window:anchor.window,x:anchor.x,y:anchor.y});},
  inspect:token=>request('inspect',{token}),
  execute(token,item,kind){if(!Number.isInteger(token)||token<=0||!Number.isInteger(item)||item<1||item>100||!['invoke','expand'].includes(kind))throw fail('unsupported');return request('execute',{token,item,kind});},
  close:token=>request('close',{token}),
  dispose(){disposed=true;reset();}
 });
}
module.exports={createWindowsContextMenu};

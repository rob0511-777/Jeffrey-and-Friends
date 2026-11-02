'use strict';
const I18n=require('./i18n.js');
const {createMouseGrid}=require('./mouse-grid.cjs');const {selectMonitor}=require('./desktop-vision.cjs');
function createMouseControl({platform=process.platform,getSnapshot,getOptions,setOpacity,mouse,isAllowed=()=>true,onTrace=()=>{},onChange=()=>{},onActivate=()=>{},onDeactivate=()=>{},waitForOverlay=async()=>{}}){
 let grid=null,epoch=0,lastDepth,running=false;const queue=[];
 const state=()=>({active:!!grid,opacity:getOptions().opacity,...(grid?grid.state():{})});
 const notify=(value,diagnosticId=0)=>{const message=value==='mouse.quadOnly'?I18n.t(value,getOptions().locale):I18n.message(value,getOptions().locale);onChange({...state(),message,...(diagnosticId?{diagnosticId}:{})});return message;};
 const cancelQueued=()=>{for(const job of queue.splice(0)){onTrace('command-cancelled',job.command.diagnosticId||0);job.resolve(I18n.t('mouse.cancelled',getOptions().locale));}};
 const stop=()=>{onTrace('stop',0);epoch++;cancelQueued();mouse.stop();};
 const halt=()=>mouse.stop();
 const exit=message=>{stop();const was=!!grid;grid=null;if(was)onDeactivate();return notify(message||'Koordinatennetz beendet.');};
 const travel=(id=0)=>{const s=grid.state();if(!s.target)throw Error('Bitte zuerst ein Feld auswählen.');mouse.move(s.target,s.monitor.bounds,getOptions().speed,id);};
 const api={active:()=>!!grid,state,stop,
  exit,topologyChanged:()=>exit('Bildschirmkonfiguration geändert. Koordinatennetz bitte neu starten.'),
  reconfigure(){stop();if(grid&&lastDepth!==getOptions().maxDepth){grid=createMouseGrid(grid.state().monitor,{maxDepth:getOptions().maxDepth});lastDepth=getOptions().maxDepth;}notify('Mauseinstellungen übernommen.');},
  async run(command){
   onTrace('queue-start',command.diagnosticId||0);
   if(command.action==='stop'){stop();return notify('Mausbewegung gestoppt.');}
   if(command.action==='exit')return exit();
   if(!isAllowed())throw Error('Maussteuerung ist im Schlafmodus nicht freigegeben.');
   if(command.action==='show'){
    if(platform!=='win32')throw Error('Koordinatennetz ist nur unter Windows verfügbar.');
    if(!grid||command.target?.kind!=='auto'){
     halt();const version=epoch;onTrace('snapshot-start',command.diagnosticId||0);const snapshot=await getSnapshot();onTrace('snapshot-ready',command.diagnosticId||0);if(version!==epoch||!isAllowed())return {cancelled:true};
     const monitor=selectMonitor(snapshot,command.target),next=createMouseGrid(monitor,{maxDepth:getOptions().maxDepth});mouse.start();
     try{await mouse.waitForReady?.(command.diagnosticId||0);}catch(error){if(version!==epoch)return {cancelled:true};mouse.close?.();throw error;}
     if(version!==epoch||!isAllowed())return {cancelled:true};grid=next;lastDepth=getOptions().maxDepth;onActivate();
    }
    const version=epoch;if(getOptions().opacity===0)setOpacity(100);
    notify(I18n.t('mouse.starting',getOptions().locale),command.diagnosticId||0);
    try{await waitForOverlay();}catch(error){if(version!==epoch)return {cancelled:true};exit();throw error;}
    if(version!==epoch||!isAllowed())return {cancelled:true};
    return I18n.t('mouse.active',getOptions().locale);
   }
   if(!grid)throw Error('Bitte zuerst das Koordinatennetz anzeigen.');
   try{
    if(command.action==='hide'){setOpacity(0);return notify('Raster unsichtbar. Koordinatensteuerung bleibt aktiv.');}
    if(command.action==='opacity'){if(!Number.isInteger(command.opacity)||command.opacity<0||command.opacity>100)throw Error('Ungültige Sichtbarkeit.');setOpacity(command.opacity);return notify('Raster-Sichtbarkeit geändert.');}
    if(command.action==='reset'){halt();grid.reset();return notify('Raster auf den vollständigen Monitor zurückgesetzt.');}
    if(command.action==='subdivide'){halt();grid.subdivide();return notify(I18n.t(grid.state().layout==='quarters'?'mouse.subdividedQuad':'mouse.subdividedMatrix',getOptions().locale));}
    if(command.action==='back'){halt();grid.back();if(grid.state().target)travel(command.diagnosticId||0);return notify(I18n.t('mouse.backStep',getOptions().locale));}
    if(command.action==='select'){halt();grid.select(command.cell);if(command.direction)grid.refine(command.direction);travel(command.diagnosticId||0);return notify('Mausziel '+command.cell+' gewählt.');}
    if(command.action==='refine'){halt();grid.refine(command.direction);travel(command.diagnosticId||0);return notify('Mausziel fein positioniert.');}
    if(command.action==='move'){travel(command.diagnosticId||0);return notify('Maus bewegt sich zum letzten Ziel.');}
    throw Error('Unbekannter Maussteuerbefehl.');
   }catch(error){notify(String(error.message).slice(0,180));throw error;}
  }
 };
 function drain(){
  if(running||!queue.length)return;running=true;const job=queue.shift();
  Promise.resolve(api.run(job.command)).then(value=>{const cancelled=value?.cancelled===true;onTrace(cancelled?'command-cancelled':'command-ok',job.command.diagnosticId||0);job.resolve(cancelled?I18n.t('mouse.cancelled',getOptions().locale):value);},error=>{onTrace('command-error',job.command.diagnosticId||0);cancelQueued();job.reject(error);}).finally(()=>{running=false;drain();});
 }
 const {run,...publicApi}=api;
 return Object.freeze({...publicApi,dispatch(command){
  if(command.action==='stop'||command.action==='exit')return api.run(command);
  if(queue.length>=64)return Promise.reject(Error(I18n.t('mouse.busy',getOptions().locale)));
  return new Promise((resolve,reject)=>{queue.push({command,resolve,reject});drain();});
 }});
}
module.exports={createMouseControl};

'use strict';
const path=require('node:path');
function createGridOverlay({BrowserWindow,screen,ipcMain,onTrace=()=>{},onFailure=()=>{},readyTimeoutMs=8000}){
 let win=null,last=null,generation=0,confirmed=0,failed=false,closing=false,wasReady=false;const waiters=new Set();
 function settle(error){for(const w of [...waiters]){clearTimeout(w.timer);waiters.delete(w);error?w.reject(error):w.resolve();}}
 function failure(){if(failed||closing)return;failed=true;const visible=wasReady,old=win;win=null;onTrace('overlay-error',last?.diagnosticId||0);settle(Error('mouse.overlayError'));old?.destroy();if(visible)onFailure();}
 const acknowledge=(event,value)=>{if(!win||event.sender!==win.webContents||value!==generation||!last?.active||last.opacity===0||failed)return;confirmed=generation;wasReady=true;onTrace('overlay-ready',last.diagnosticId||0);settle();};
 ipcMain?.on('robot:mouse-grid-ready',acknowledge);
 function publish(state){
  last=state;
  if(!state.active||state.opacity===0){confirmed=0;settle(Error('mouse.cancelled'));win?.hide();return;}
  generation++;confirmed=0;
  if(!win){
   failed=false;wasReady=false;onTrace('overlay-created',state.diagnosticId||0);
   win=new BrowserWindow({show:false,frame:false,transparent:true,backgroundColor:'#00000000',alwaysOnTop:true,skipTaskbar:true,focusable:false,resizable:false,hasShadow:false,
    webPreferences:{preload:path.join(__dirname,'mouse-grid-preload.cjs'),sandbox:true,contextIsolation:true,nodeIntegration:false,backgroundThrottling:false}});
   const created=win;
   win.setIgnoreMouseEvents(true,{forward:true});win.webContents.setWindowOpenHandler(()=>({action:'deny'}));win.webContents.on('will-navigate',e=>e.preventDefault());
   win.webContents.on('did-finish-load',()=>{if(win!==created)return;onTrace('overlay-loaded',last?.diagnosticId||0);publish(last);});
   win.webContents.on('did-fail-load',()=>{if(win===created)failure();});win.webContents.on('render-process-gone',()=>{if(win===created)failure();});
   const loading=win.loadFile(path.join(__dirname,'mouse-grid.html'));loading?.catch(()=>{if(win===created)failure();});
   win.on('closed',()=>{if(win===created)failure();});
  }
  // Snapshot coordinates are native pixels. Electron bounds are DIP, including
  // each monitor's origin: dividing by scaleFactor alone fails with mixed DPI.
  const bounds=screen.screenToDipRect(null,state.monitor.bounds);
  win.setBounds(bounds,false);
  if(!failed&&!win.webContents.isLoading()){win.webContents.send('robot:mouse-grid-state',{...state,overlayGeneration:generation});win.showInactive();}
 }
 return {publish,waitForReady(){
  if(failed||!win)return Promise.reject(Error('mouse.overlayError'));
  if(confirmed===generation)return Promise.resolve();
  return new Promise((resolve,reject)=>{const w={resolve,reject,timer:null};w.timer=setTimeout(()=>{failure();},readyTimeoutMs);waiters.add(w);});
 },close(){closing=true;last={active:false};settle(Error('mouse.cancelled'));ipcMain?.removeListener('robot:mouse-grid-ready',acknowledge);if(win)win.destroy();win=null;}};
}
module.exports={createGridOverlay};

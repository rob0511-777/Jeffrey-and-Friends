'use strict';
// Run with Electron, not node:test. Only a synthetic grid; no mic, API or native input.
const {app,BrowserWindow,ipcMain,screen}=require('electron');
const {createGridOverlay}=require('../../grid-overlay.cjs'),{createMouseControl}=require('../../mouse-control.cjs'),{parseMouseCommand}=require('../../mouse-commands.js');
const assert=require('node:assert/strict');
app.disableHardwareAcceleration();
let overlay;const phases=[];
app.on('browser-window-created',(_event,win)=>{
 for(const code of ['did-finish-load','did-stop-loading'])win.webContents.on(code,()=>{phases.push({code,loading:win.webContents.isLoading()});});
});
const watchdog=setTimeout(()=>{console.error('GRID_LIFECYCLE_WATCHDOG');app.exit(2);},8000);
app.whenReady().then(async()=>{
 const nativeDpi=typeof screen.screenToDipRect==='function';
 overlay=createGridOverlay({BrowserWindow,ipcMain,screen:nativeDpi?screen:{screenToDipRect:(_w,b)=>b},readyTimeoutMs:2000});
 const snapshot={monitors:[{id:'synthetic',number:1,primary:true,bounds:{x:0,y:0,width:800,height:600}}],cursor:{x:10,y:10}};
 const control=createMouseControl({platform:'win32',getSnapshot:async()=>snapshot,getOptions:()=>({opacity:100,speed:900,maxDepth:4,locale:'de-DE'}),setOpacity(){},mouse:{start(){},waitForReady:async()=>{},stop(){},move(){}},onChange:state=>overlay.publish(state),waitForOverlay:()=>overlay.waitForReady()});
 try{
  for(const command of [{action:'show',target:{kind:'auto'}},parseMouseCommand('Jeffrey, bitte zeig mir das Raster.')]){
   const jobs=await Promise.allSettled([control.dispatch(command),control.dispatch({action:'select',cell:'B3'})]);
   assert.ok(jobs.every(job=>job.status==='fulfilled'),'start-and-queued-selection');await overlay.waitForReady();
   const win=BrowserWindow.getAllWindows()[0];assert.equal(win.isVisible(),true);
   const result=await win.webContents.executeJavaScript('({cells:document.querySelectorAll("#grid > .cell").length,hidden:document.getElementById("content").hidden,targetHidden:document.getElementById("target").hidden})');
   assert.equal(result.cells,20);assert.equal(result.hidden,false);assert.equal(result.targetHidden,false);
   await control.dispatch({action:'exit'});
  }
  console.log(JSON.stringify({code:'GRID_LIFECYCLE_PASS',phases,nativeDpi,platform:process.platform}));
 }catch{console.error(JSON.stringify({code:'GRID_LIFECYCLE_FAIL',phases,nativeDpi}));process.exitCode=1;}
 finally{clearTimeout(watchdog);overlay.close();app.exit(process.exitCode||0);}
}).catch(()=>{console.error('GRID_LIFECYCLE_SETUP_FAIL');app.exit(1);});

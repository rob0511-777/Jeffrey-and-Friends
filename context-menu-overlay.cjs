'use strict';
const path=require('node:path');
function placeMenuPanel(menu,work,count,confirmation=false){
 const gap=8,base=confirmation?200:100,desired=base+Math.min(30,count)*24,bottom=work.y+work.height,right=work.x+work.width;
 const candidates=[
  {x:menu.x+menu.width+gap,y:work.y,width:right-menu.x-menu.width-gap,height:work.height},
  {x:work.x,y:work.y,width:menu.x-work.x-gap,height:work.height},
  {x:work.x,y:menu.y+menu.height+gap,width:work.width,height:bottom-menu.y-menu.height-gap},
  {x:work.x,y:work.y,width:work.width,height:menu.y-work.y-gap}
 ];
 for(let i=0;i<candidates.length;i++){
  const c=candidates[i];if(c.width<220||c.height<base+24)continue;
  const width=Math.min(340,c.width),height=Math.min(desired,c.height),rows=Math.max(1,Math.min(30,count,Math.floor((height-base)/24)));
  const x=i===1?menu.x-gap-width:Math.min(c.x+Math.max(0,menu.x-c.x),c.x+c.width-width);
  const y=i<2?Math.max(work.y,Math.min(menu.y,bottom-height)):c.y;
  return {x:Math.round(x),y:Math.round(y),width:Math.round(width),height:Math.round(height),rows};
 }
 return null;
}
function createContextMenuOverlay({BrowserWindow,screen,onReady=()=>{},onNoSpace=()=>{}}){
 let win=null,last=null;
 function publish(state){
  last=state;if(!state.active||!state.bounds||!state.items.length){if(win&&!win.webContents.isLoading())win.webContents.send('robot:context-menu-state',{active:false,items:[],confirmation:null,uiLocale:state.uiLocale});win?.hide();return 0;}
  const b=state.bounds,physical={x:Math.floor(b.x),y:Math.floor(b.y),width:Math.ceil(b.x+b.width)-Math.floor(b.x),height:Math.ceil(b.y+b.height)-Math.floor(b.y)};
  const menu=screen.screenToDipRect(null,physical),work=screen.getDisplayMatching(menu).workArea,panel=placeMenuPanel(menu,work,state.items.length,!!state.confirmation);
  if(!panel){if(win&&!win.webContents.isLoading())win.webContents.send('robot:context-menu-state',{active:false,items:[],confirmation:null,uiLocale:state.uiLocale});win?.hide();onNoSpace();return 0;}
  if(!win){
   win=new BrowserWindow({show:false,frame:false,transparent:true,backgroundColor:'#00000000',alwaysOnTop:true,skipTaskbar:true,focusable:false,resizable:false,hasShadow:false,
    webPreferences:{preload:path.join(__dirname,'context-menu-preload.cjs'),sandbox:true,contextIsolation:true,nodeIntegration:false,backgroundThrottling:false}});
   win.setIgnoreMouseEvents(true,{forward:true});win.webContents.setWindowOpenHandler(()=>({action:'deny'}));win.webContents.on('will-navigate',e=>e.preventDefault());
   win.webContents.on('did-finish-load',()=>{publish(last);onReady();});win.on('closed',()=>{win=null;});win.loadFile(path.join(__dirname,'context-menu.html'));
  }
  win.setBounds({x:panel.x,y:panel.y,width:panel.width,height:panel.height},false);
  if(!win.webContents.isLoading()){win.webContents.send('robot:context-menu-state',{...state,items:state.items.slice(0,panel.rows),truncated:state.items.length>panel.rows});win.showInactive();}
  return win.webContents.isLoading()?0:panel.rows;
 }
 return {publish,close(){last={active:false};win?.destroy();win=null;}};
}
module.exports={placeMenuPanel,createContextMenuOverlay};

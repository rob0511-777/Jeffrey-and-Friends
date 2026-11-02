'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path'),{EventEmitter}=require('node:events');
const {createGridOverlay}=require('../grid-overlay.cjs'),{createMouseControl}=require('../mouse-control.cjs'),{parseMouseCommand}=require('../mouse-commands.js');
function fixture(){
 const events=new EventEmitter(),ipc=new EventEmitter(),rendererIPC=new EventEmitter(),frames=[],nodes={};let loading=true,visible=false,sends=0;
 const element=()=>({style:{},hidden:false,children:[],append(node){this.children.push(node);},replaceChildren(){this.children=[];}});
 const webContents={on:(...args)=>events.on(...args),isLoading:()=>loading,setWindowOpenHandler(){},send:(channel,state)=>{assert.equal(loading,false);sends++;rendererIPC.emit(channel,{},state);}};
 const win={webContents,setIgnoreMouseEvents(){},setBounds(){},showInactive(){visible=true;},hide(){visible=false;},on(){},loadFile(){},destroy(){visible=false;}};
 const overlay=createGridOverlay({BrowserWindow:function(){return win;},screen:{screenToDipRect:(_w,b)=>b},ipcMain:ipc,readyTimeoutMs:100});
 const ctx=vm.createContext({window:{},innerWidth:800,innerHeight:600,requestAnimationFrame:fn=>frames.push(fn),document:{getElementById:id=>nodes[id]||(nodes[id]=element()),createElement:element},require:name=>{assert.equal(name,'electron');return {contextBridge:{exposeInMainWorld:(key,value)=>ctx.window[key]=value},ipcRenderer:{on:(...args)=>rendererIPC.on(...args),send:(channel,value)=>ipc.emit(channel,{sender:webContents},value)}};}});
 for(const file of ['mouse-grid-preload.cjs','mouse-grid-renderer.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'..',file),'utf8'),ctx);
 const snapshot={monitors:[{id:'test',number:1,primary:true,bounds:{x:0,y:0,width:800,height:600}}],cursor:{x:10,y:10}};
 const control=createMouseControl({platform:'win32',getSnapshot:async()=>snapshot,getOptions:()=>({opacity:100,speed:900,maxDepth:4,locale:'de-DE'}),setOpacity(){},mouse:{start(){},waitForReady:async()=>{},stop(){},move(){}},onChange:state=>overlay.publish(state),waitForOverlay:()=>overlay.waitForReady()});
 return {control,overlay,nodes,frames,get sends(){return sends;},get visible(){return visible;},finish(){events.emit('did-finish-load');},stopLoading(){loading=false;events.emit('did-stop-loading');},draw(){assert.equal(visible,true);for(const fn of frames.splice(0))fn();}};
}
for(const [entry,command]of [['Schaltflächenauftrag',{action:'show',target:{kind:'auto'}}],['Sprachparser',parseMouseCommand('Jeffrey, bitte zeig mir das Raster.')]])test('Electron-Ladereihenfolge: '+entry+' zeigt Raster und bestätigt erst echte Rendererzeichnung',async()=>{
 const f=fixture();let resolved=false;const start=f.control.dispatch(command).then(v=>{resolved=true;return v;});start.catch(()=>{});
 try{
  await new Promise(r=>setImmediate(r));assert.equal(f.visible,false);f.finish();assert.equal(f.sends,0,'did-finish-load can precede loading=false');assert.equal(resolved,false);
  f.stopLoading();assert.equal(f.visible,true,'did-stop-loading must publish and show without requiring another command');assert.equal(f.nodes.grid.children.length,20);assert.equal(resolved,false,'showing alone must not bypass frame acknowledgement');
  f.draw();await start;assert.equal(resolved,true);assert.equal(f.control.active(),true);
 }finally{f.overlay.close();await start.catch(()=>{});}
});
test('Abschluss des Ladevorgangs erhält einen festen inhaltsfreien Diagnosecode',()=>{const rows=[],d=require('../mouse-diagnostics.cjs').createMouseDiagnostics({enabled:true,now:()=>100,sink:r=>rows.push(r)});assert.equal(d.record('overlay-load-stopped',{id:1,transcript:'PRIVATE',windowTitle:'PRIVATE'}),true);assert.equal(rows[0].code,'overlay-load-stopped');assert.doesNotMatch(JSON.stringify(rows),/PRIVATE|windowTitle|transcript"/);});

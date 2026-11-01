'use strict';
const test=require('node:test'),assert=require('node:assert/strict');let create;try{create=require('../mouse-control.cjs').createMouseControl;}catch(e){if(e.code!=='MODULE_NOT_FOUND')throw e;}
const snapshot={monitors:[{id:'left',number:1,primary:false,bounds:{x:-1920,y:0,width:1920,height:1080}},{id:'main',number:2,primary:true,bounds:{x:0,y:0,width:3840,height:2160}}],window:{monitor:'left'},cursor:{x:100,y:100}};
function fixture(extra={}){assert.equal(typeof create,'function');const moves=[],events=[];let stops=0;const options={opacity:100,speed:900,maxDepth:4};const controller=create({platform:'win32',getSnapshot:async()=>snapshot,getOptions:()=>options,setOpacity:value=>{options.opacity=value;},mouse:{start(){},move:(...args)=>moves.push(args),stop:()=>{stops++;},close(){}},isAllowed:()=>true,onChange:s=>events.push(s),...extra});return {controller,moves,events,options,get stops(){return stops;}};}
test('Aktives Raster folgt Fenster-Monitor; unsichtbar bleibt Steuerung aktiv',async()=>{const f=fixture();await f.controller.dispatch({action:'show',target:{kind:'auto'}});assert.equal(f.controller.state().monitor.id,'left');await f.controller.dispatch({action:'hide'});assert.equal(f.options.opacity,0);assert.equal(f.controller.active(),true);await f.controller.dispatch({action:'select',cell:'D4'});assert.equal(f.moves.length,1);assert.ok(f.moves[0][0].x<0);});
test('Stopp und Monitoränderung beenden Bewegung ohne automatischen Neustart',async()=>{const f=fixture();await f.controller.dispatch({action:'show',target:{kind:'number',number:2}});await f.controller.dispatch({action:'select',cell:'A1'});await f.controller.dispatch({action:'stop'});assert.equal(f.controller.active(),true);const before=f.moves.length;f.controller.topologyChanged();assert.equal(f.controller.active(),false);assert.equal(f.moves.length,before);assert.ok(f.stops>0);});
test('Stopp während Monitorauswahl verhindert verspätete Rasteraktivierung',async()=>{let done;const f=fixture({getSnapshot:()=>new Promise(resolve=>{done=resolve;})});const pending=f.controller.dispatch({action:'show',target:{kind:'auto'}});f.controller.stop();done(snapshot);await pending;assert.equal(f.controller.active(),false);});
test('Feldbefehle außerhalb eines aktiven Modus erteilen keine Bewegungserlaubnis',async()=>{const f=fixture();await assert.rejects(f.controller.dispatch({action:'select',cell:'B4'}),/Koordinatennetz/);assert.equal(f.moves.length,0);});
test('Monitorwechsel während ausstehender Initialisierung verhindert ein Raster mit veralteten Grenzen',async()=>{let done;const f=fixture({getSnapshot:()=>new Promise(resolve=>{done=resolve;})});const pending=f.controller.dispatch({action:'show',target:{kind:'auto'}});f.controller.topologyChanged();done(snapshot);await pending;assert.equal(f.controller.active(),false);assert.equal(f.moves.length,0);});
test('Schnelle Feldwahl wartet geordnet auf die laufende Rasterinitialisierung',async()=>{
 let done;const f=fixture({getSnapshot:()=>new Promise(r=>done=r)});
 const start=f.controller.dispatch({action:'show',target:{kind:'auto'}});
 const select=f.controller.dispatch({action:'select',cell:'D4'});
 const results=Promise.allSettled([start,select]);done(snapshot);
 assert.ok((await results).every(r=>r.status==='fulfilled'));assert.equal(f.moves.length,1);assert.equal(f.controller.state().selected,'D4');
});
test('Stopp verwirft auch Feldbefehle hinter einer noch laufenden Rasterinitialisierung',async()=>{
 let done;const f=fixture({getSnapshot:()=>new Promise(r=>done=r)});
 const jobs=[f.controller.dispatch({action:'show',target:{kind:'auto'}}),f.controller.dispatch({action:'select',cell:'B3'})];
 const results=Promise.allSettled(jobs);await f.controller.dispatch({action:'stop'});done(snapshot);await results;
 assert.equal(f.moves.length,0);assert.equal(f.controller.active(),false);
});
test('Diagnose meldet invalidierten Rasterstart als Abbruch und nicht als Erfolg',async()=>{let done;const rows=[],f=fixture({getSnapshot:()=>new Promise(r=>done=r),onTrace:(code,id)=>rows.push({code,id})});const pending=f.controller.dispatch({action:'show',target:{kind:'auto'},diagnosticId:9});f.controller.stop();done(snapshot);await pending;assert.ok(rows.some(r=>r.id===9&&r.code==='command-cancelled'));assert.ok(!rows.some(r=>r.id===9&&r.code==='command-ok'));});

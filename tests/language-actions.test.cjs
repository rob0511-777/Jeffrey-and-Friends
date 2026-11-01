'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),{createRequire}=require('node:module');
const {normalizeSettings}=require('../settings.cjs');
function main(){
 const timers=new Map(),writes=[],sent=[],listened=[],gridEvents=[];let id=0;
 const req=createRequire(path.join(__dirname,'../main.cjs'));
 const ctx=vm.createContext({process,Buffer,URL,console,clearTimeout:id=>timers.delete(id),setTimeout:(fn,delay)=>{timers.set(++id,{fn,delay});return id;},setInterval:()=>1,clearInterval(){},require:name=>name==='electron'?{app:{commandLine:{appendSwitch(){}},requestSingleInstanceLock:()=>false,quit(){}}}:name==='./voicing.cjs'?{listenOnce:locale=>{listened.push(locale);return {promise:Promise.resolve('')};},speak(){}}:name==='node:fs'?{writeFileSync:(_file,value)=>writes.push(JSON.parse(value))}:req(name)});
 vm.runInContext(fs.readFileSync(path.join(__dirname,'../main.cjs'),'utf8')+`
 globalThis.api={setup(value){settings=normalizeSettings(value);file='test-settings.json';controls={isDestroyed:()=>false,setTitle(){},webContents:{isLoading:()=>false,send:(_channel,payload)=>record(payload)}};return {sender:controls.webContents};},grid(){mouseControl={active:()=>true,stop(){},state:()=>({active:true})};gridListener={stop:async()=>true,reset(){},start(){gridEvent('start')}};wakeListener={stop:async()=>true};liveActive=true;liveSessionId='old';},wake:onWakeDetected,words:gridWakeWords,action:handleAction,prepare:prepareLiveMicrophone,listen:doListen,locals(g,w){gridListener={stop:g};wakeListener={stop:w};},live(g,w){liveActive=true;liveSessionId='session';gridListener={stop:g};wakeListener={stop:w};},end(){liveActive=false;}};`,Object.assign(ctx,{record:value=>sent.push(value),gridEvent:value=>gridEvents.push(value)}));
 return {api:ctx.api,writes,sent,listened,gridEvents,async run(delay){const entry=[...timers].find(([_id,t])=>t.delay===delay);assert.ok(entry,'timer '+delay);timers.delete(entry[0]);await entry[1].fn();},save(){for(const [id,t]of timers)if(t.delay===350){timers.delete(id);t.fn();}}};
}
test('Echte Sprach-Einstellungsaktionen speichern beide Felder unabhängig und erhalten Profile sowie Freigaben',()=>{
 const f=main();const initial=normalizeSettings({aiProvider:'local',character:'bronco',memoryEnabled:true,privacyConsents:{version:1,screen:{openai:true},text:{openai:true}}});let event=f.api.setup(initial);
 for(const locale of require('../i18n.js').LOCALES){
  f.api.action(event,{action:'ui-locale',value:locale});f.api.action(event,{action:'conversation-language',value:'ja-JP'});f.save();
  const saved=f.writes.at(-1);assert.equal(saved.uiLocale,locale);assert.equal(saved.conversationLanguage,'ja-JP');assert.deepEqual(saved.characterProfiles,initial.characterProfiles);assert.deepEqual(saved.privacyConsents,initial.privacyConsents);assert.equal(saved.memoryEnabled,true);assert.equal(saved.aiProvider,'local');
  event=f.api.setup(JSON.parse(JSON.stringify(saved)));
 }
 const count=f.writes.length;f.api.action(event,{action:'ui-locale',value:'file:///invalid'});f.save();assert.equal(f.writes.length,count);
});
test('Live-Mikrofonfreigabe wartet auf beide lokalen Erkenner und verweigert unbestätigten Stopp',async()=>{
 const f=main(),event=f.api.setup({});let finishGrid,finishWake,ready=false;
 f.api.live(()=>new Promise(r=>finishGrid=r),()=>new Promise(r=>finishWake=r));const p=f.api.prepare(event).then(()=>{ready=true;});await Promise.resolve();assert.equal(ready,false);finishGrid(true);await Promise.resolve();assert.equal(ready,false);finishWake(true);await p;assert.equal(ready,true);
 f.api.live(async()=>false,async()=>true);await assert.rejects(f.api.prepare(event));
});
test('Mikrofonfreigabe nach Sitzungsende oder von fremdem Renderer wird zurückgewiesen',async()=>{
 const f=main(),event=f.api.setup({});let finish;f.api.live(()=>new Promise(r=>finish=r),async()=>true);
 await assert.rejects(f.api.prepare({sender:{}}));const pending=f.api.prepare(event);f.api.end();finish(true);await assert.rejects(pending);
});

test('Einmaliges Zuhören startet erst nach bestätigter Freigabe des Wakeword-Mikrofons',async()=>{const f=main();f.api.setup({uiLocale:'es-ES'});let finish;f.api.locals(async()=>true,()=>new Promise(r=>finish=r));const p=f.api.listen();await Promise.resolve();assert.equal(f.listened.length,0);finish(true);await p;assert.deepEqual(f.listened,['es-ES']);});

test('Nach Live-Disconnect hört das aktive Raster lokal weiter und OpenAI lässt sich per Wakeword erneut starten',async()=>{const f=main(),event=f.api.setup({wakeEnabled:true,aiProvider:'openai',uiLocale:'en-GB'});f.api.grid();f.api.action(event,{action:'realtime-activity',value:{kind:'closed'}});await f.run(650);assert.deepEqual(f.gridEvents,['start']);assert.deepEqual(Array.from(f.api.words()),['Jeffrey','Hello Jeffrey']);f.api.wake();await f.run(550);assert.ok(f.sent.some(x=>x.action==='realtime-start'&&x.value.fromWake));assert.ok(f.sent.some(x=>x.action==='mouse-state'&&x.value.active));});

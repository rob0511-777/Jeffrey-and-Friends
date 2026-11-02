'use strict';
const {spawn}=require('node:child_process'),path=require('node:path');
const {parseMouseCommand,mouseGrammar}=require('./mouse-commands.js');
const {speechOptions}=require('./mouse-locales.js');
const {parseAction,rejectedGrammar}=require('./desktop-action-commands.js');
const I18n=require('./i18n.js');
const {stopSpeechProcess}=require('./speech-process.cjs');
function createGridListener({platform=process.platform,spawnImpl=spawn,getLocale=()=> 'de-DE',getAdditionalGrammar=()=>[],getRejectedGrammar=()=>rejectedGrammar([],getLocale()),onAction=()=>{},getWakeWords=()=>[],onWake=()=>{},onCommand=()=>{},onStatus=()=>{}}={}){
 let child=null,failed=false,partial='',releasing=null;
 const api={start(){if(child||failed||releasing)return;if(platform!=='win32'){onStatus('Lokale Raster-Spracherkennung benötigt Windows.');return;}
  let c;try{c=spawnImpl('powershell.exe',['-NoLogo','-NoProfile','-NonInteractive','-ExecutionPolicy','Bypass','-File',path.join(__dirname,'scripts','grid-listen.ps1')],{windowsHide:true,stdio:['pipe','pipe','pipe']});}catch{failed=true;onStatus('Lokale Raster-Spracherkennung konnte nicht gestartet werden.');return;}child=c;
  c.stdin.on('error',()=>{});c.stdin.write(JSON.stringify({locale:I18n.locale(getLocale()),...speechOptions(getLocale()),wakeWords:getWakeWords(),commands:[...mouseGrammar(getLocale()),...getAdditionalGrammar()],rejectedCommands:getRejectedGrammar(),names:['Jeffrey','Jeffry','Jeffri','Bronco','Bronko','Kelly','Kelli','Krak','Krack','James','Dscheims']})+'\n');
  c.stderr.on('data',()=>{});c.stdout.on('data',data=>{if(child!==c)return;partial+=data.toString('ascii');if(partial.length>8192){api.stop();failed=true;onStatus('Lokale Raster-Spracherkennung lieferte ungültige Daten.');return;}const lines=partial.split(/\r?\n/);partial=lines.pop();for(const line of lines){if(line==='READY')onStatus(I18n.t('speech.ready',getLocale(),{locale:getLocale()}),{kind:'ready'});else if(line==='WAKE')onWake();else if(line.startsWith('TEXT|')){const encoded=line.slice(5);if(encoded.length>1200||! /^[A-Za-z0-9+/]+={0,2}$/.test(encoded))continue;const command=parseMouseCommand(Buffer.from(encoded,'base64').toString('utf8'),getLocale());if(command)onCommand(command);else{const action=parseAction(Buffer.from(encoded,'base64').toString('utf8'),getLocale());if(action)onAction(action);}}else if(line.startsWith('ERROR|')){failed=true;api.stop();onStatus(I18n.t('speech.missing',getLocale(),{locale:getLocale()}),{kind:'error'});}}});
  const close=()=>{if(child===c){child=null;failed=true;onStatus('Lokale Raster-Spracherkennung beendet. Maus-Stopp im Steuerungsfenster bleibt verfügbar.');}};c.on('error',close);c.on('close',close);
 },stop(){if(releasing)return releasing;const c=child;child=null;partial='';if(!c)return Promise.resolve(true);const pending=stopSpeechProcess(c);releasing=pending;pending.then(ok=>{if(ok&&releasing===pending)releasing=null;});return pending;},reset(){failed=false;}};
 return Object.freeze(api);
}
module.exports={createGridListener};

'use strict';
// Lokal laufende Windows-Spracherkennung für das Aktivierungswort.
// Es werden weder Tonaufnahmen gespeichert noch Daten an OpenAI gesendet.
const {spawn} = require('node:child_process');
const path = require('node:path');
const {StringDecoder} = require('node:string_decoder');
const {displayName}=require('./characters.cjs');
const I18n=require('./i18n.js');
const {stopSpeechProcess}=require('./speech-process.cjs');
const THRESHOLDS=Object.freeze({sensitive:0.42,normal:0.58,strict:0.72});
function wakeThreshold(level){return THRESHOLDS[level]??THRESHOLDS.sensitive;}

function parseWakeLine(line) {
  if (line.startsWith('READY|')) return {kind:'ready',locale:line.slice(6).trim()};
  if (line.startsWith('WAKE|')) return {kind:'wake'};
  if (line.startsWith('LOW|')) return {kind:'low',confidence:Number(line.slice(4).trim())};
  if (line.startsWith('MISS|')) return {kind:'miss'};
  if (line.startsWith('ERROR|')) return {kind:'error',text:line.slice(6).trim().slice(0,250)};
  return null;
}
class LocalWakeListener {
  constructor(callback, status, getSensitivity=()=> 'sensitive', getCharacter=()=> 'jeffrey',getLocale=()=> 'de-DE') {
    this.callback=callback;
    this.status=status;
    this.getSensitivity=getSensitivity;
    this.getCharacter=getCharacter;this.getLocale=getLocale;this.releasing=null;
    this.child=null;
    this.failed=false;
    this.ready=false;
    this.lastLowAt=0;
  }
  start() {
    if (this.child || this.failed || this.releasing) return;
    this.status(I18n.t('wake.starting',this.getLocale()));
    let child;
    try {
      child=spawn('powershell.exe', [
        '-NoLogo','-NoProfile','-NonInteractive','-ExecutionPolicy','Bypass',
        '-File', path.join(__dirname,'scripts','wake-word.ps1'),
        '-MinConfidence', String(wakeThreshold(this.getSensitivity())),
        '-WakeName', displayName(this.getCharacter()),
        '-RecognitionCulture',I18n.locale(this.getLocale()),'-Greeting',({'de-DE':'Hallo','en-GB':'Hello','zh-CN':'你好','ja-JP':'こんにちは','es-ES':'Hola','pt-BR':'Olá'})[I18n.locale(this.getLocale())]
      ], {windowsHide:true,stdio:['ignore','pipe','pipe']});
    } catch(e) {this.failed=true;this.status(I18n.t('speech.failed',this.getLocale()));return;}
    this.child=child;this.ready=false;
    const decoder=new StringDecoder('utf8');
    let partial='';
    child.stdout.on('data', chunk=>{
      if(this.child!==child)return;
      partial+=decoder.write(chunk);
      if(partial.length>16384)partial=partial.slice(-4000);
      let index;
      while((index=partial.indexOf('\n'))>=0){
        const line=partial.slice(0,index).trim();partial=partial.slice(index+1);
        const evt=parseWakeLine(line);
        if(!evt)continue;
        if(evt.kind==='ready'){this.ready=true;this.status(I18n.t('wake.ready',this.getLocale(),{locale:evt.locale||this.getLocale(),name:displayName(this.getCharacter())}));}
        if(evt.kind==='low' && Date.now()-this.lastLowAt>3500){
          this.lastLowAt=Date.now();
          this.status(I18n.t('wake.low',this.getLocale(),{confidence:Math.round(evt.confidence||0)}));
        }
        if(evt.kind==='miss' && Date.now()-this.lastLowAt>5000){
          this.lastLowAt=Date.now();
          this.status(I18n.t('wake.miss',this.getLocale(),{name:displayName(this.getCharacter())}));
        }
        if(evt.kind==='error'){this.failed=true;this.status(I18n.t('speech.missing',this.getLocale(),{locale:this.getLocale()}));this.stop();}
        if(evt.kind==='wake'){
          // Sofort stilllegen: sonst würde die lokale Erkennung neben dem Realtime-Mikrofon laufen.
          this.stop();this.callback();break;
        }
      }
    });
    child.stderr.on('data',()=>{});
    child.on('error',e=>{if(this.child!==child)return;this.failed=true;this.child=null;this.status(I18n.t('speech.failed',this.getLocale()));});
    child.on('close',code=>{
      if(this.child!==child)return;
      this.child=null;this.ready=false;this.failed=true;
      this.status(I18n.t('speech.failed',this.getLocale()));
    });
  }
  stop(){
    if(this.releasing)return this.releasing;
    const child=this.child;this.child=null;this.ready=false;
    if(!child)return Promise.resolve(true);
    const pending=stopSpeechProcess(child);this.releasing=pending;
    pending.then(ok=>{if(ok&&this.releasing===pending)this.releasing=null;});return pending;
  }
  reset(){this.failed=false;}
}
module.exports={LocalWakeListener,parseWakeLine,wakeThreshold};

'use strict';
(()=>{
 const data=typeof module==='object'&&module.exports?require('./locales/catalog.js'):window.RobotCatalog;
 const LOCALES=Object.freeze(['de-DE','en-GB','zh-CN','ja-JP','es-ES','pt-BR']);
 const languageNames={'de-DE':'Deutsch','en-GB':'English','zh-CN':'简体中文','ja-JP':'日本語','es-ES':'Español','pt-BR':'Português (Brasil)'};
 const locale=value=>LOCALES.includes(value)?value:'de-DE';
 const conversation=value=>value==='auto'||LOCALES.includes(value)?value:'auto';
 function t(key,lang='de-DE',params={}){const row=data.rows[key];const value=row?.[locale(lang)]??row?.['de-DE']??key;return value.replace(/\{([A-Za-z]+)\}/g,(_m,k)=>(['feature','state','mode'].includes(k)&&data.sources[String(params[k])]?t(data.sources[String(params[k])],lang):String(params[k]??'')));}
 const normalize=s=>String(s).replace(/\s+/g,' ').trim();
 const sources=new Map(Object.entries(data.sources));
 for(const [key,row]of Object.entries(data.rows))for(const value of Object.values(row))if(!value.includes('{'))sources.set(normalize(value),key);
 const escape=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
 const patterns=[];
 for(const [key,row]of Object.entries(data.rows)){
  if(key==='tray.tooltip')continue;
  for(const raw of Object.values(row)){
   const value=normalize(raw);if(!value.includes('{'))continue;
   const names=[];let pattern='',last=0;
   for(const match of value.matchAll(/\{([A-Za-z]+)\}/g)){pattern+=escape(value.slice(last,match.index))+'(.*?)';names.push(match[1]);last=match.index+match[0].length;}
   pattern+=escape(value.slice(last));patterns.push({key,names,re:new RegExp('^'+pattern+'$')});
   if(key==='status.error')sources.set(normalize(value.replace('{code}','')),key);
  }
 }
 function identify(value){const text=normalize(value),key=sources.get(text);if(key)return {key,params:{}};
  const missing=text.match(/(?:speech-language-unavailable|missing-recognizer)\|(de-DE|en-GB|zh-CN|ja-JP|es-ES|pt-BR)/);if(missing)return {key:'speech.missing',params:{locale:missing[1]}};
  for(const pattern of patterns){const m=text.match(pattern.re);if(m)return {key:pattern.key,params:Object.fromEntries(pattern.names.map((n,i)=>[n,m[i+1]]))};}
const named=[[/^Codewort „(.+)“$/,'menu.wake'],[/^(.+) – Desktop-Assistent$/,'character.title'],[/^(.+) rufen$/, 'character.show'],[/^(.+) ausblenden und Gespräch beenden$/,'character.hide'],[/^(.+) – Einstellungen$/,'character.title'],[/^Wie empfindlich soll (.+) auf den Namen reagieren\?$/,'wake.sensitivity'],[/^(?:🎤 )?Im Hintergrund auf „(.+)“ warten \(lokal\)$/,'wake.label'],[/^(?:🔎 )?Codewort „(.+)“ kostenlos testen$/,'wake.test']];for(const [pattern,key]of named){const match=text.match(pattern);if(match)return {key,params:{name:match[1]}};}return null;}
 function message(value,lang='de-DE',{strict=false}={}){if(typeof value!=='string')return value;if(locale(lang)!=='de-DE'&&value.startsWith('Technischer Fehler beim Auslesen der Windows-Textauswahl.')){const code=(value.match(/(?:0x[0-9a-f]{8}|selection\/[a-z-]+|current|try-get-current-pattern|supported-text-selection|get-selection|compare-endpoints|get-text)/ig)||[]).join(' ');return t('selection.error',lang,{code});}const found=identify(value);if(found)return t(found.key,lang,found.params);if(locale(lang)==='de-DE'||!strict)return value;const code=(value.match(/(?:HTTP\s*\d{3}|0x[0-9a-f]{8}|(?:selection|transport|initialize)\/[a-z-]+)/ig)||[]).slice(0,3).join(' ');return t('status.error',lang,{code});}
 function responseLanguage(value='auto'){value=conversation(value);return value==='auto'?' Response language preference: automatically match the user\'s current language. Override earlier language-only preferences; retain the character personality, voice, speaking style and safety rules.':' Response language preference: '+value+' ('+languageNames[value]+'). Reply in this language. Override earlier language-only preferences; retain the character personality, voice, speaking style and safety rules.';}
 const api={LOCALES,languageNames,locale,conversation,t,message,identify,responseLanguage,catalog:data.rows,sources:data.sources};
 if(typeof module==='object'&&module.exports)module.exports=api;if(typeof window!=='undefined')window.RobotI18n=api;
})();

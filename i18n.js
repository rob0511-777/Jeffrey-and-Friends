'use strict';
(()=>{
 const data=typeof module==='object'&&module.exports?require('./locales/catalog.js'):window.RobotCatalog;
 const LOCALES=Object.freeze(['de-DE','en-GB','zh-CN','ja-JP','es-ES','pt-BR']);
 const languageNames={'de-DE':'Deutsch','en-GB':'English','zh-CN':'简体中文','ja-JP':'日本語','es-ES':'Español','pt-BR':'Português (Brasil)'};
 const locale=value=>LOCALES.includes(value)?value:'de-DE';
 const conversation=value=>value==='auto'||LOCALES.includes(value)?value:'auto';
 function t(key,lang='de-DE',params={}){const row=data.rows[key];const value=row?.[locale(lang)]??row?.['de-DE']??key;return value.replace(/\{([A-Za-z]+)\}/g,(_m,k)=>String(params[k]??''));}
 const normalize=s=>String(s).replace(/\s+/g,' ').trim();
 const sources=new Map(Object.entries(data.sources));
 for(const [key,row]of Object.entries(data.rows))for(const value of Object.values(row))if(!value.includes('{'))sources.set(normalize(value),key);
 function identify(value){const text=normalize(value),key=sources.get(text);if(key)return {key,params:{}};const named=[[/^(.+) rufen$/, 'character.show'],[/^(.+) ausblenden und Gespräch beenden$/,'character.hide'],[/^(.+) – Einstellungen$/,'character.title'],[/^Wie empfindlich soll (.+) auf den Namen reagieren\?$/,'wake.sensitivity'],[/^(?:🎤 )?Im Hintergrund auf „(.+)“ warten \(lokal\)$/,'wake.label'],[/^(?:🔎 )?Codewort „(.+)“ kostenlos testen$/,'wake.test']];for(const [pattern,key]of named){const match=text.match(pattern);if(match)return {key,params:{name:match[1]}};}return null;}
 function message(value,lang='de-DE',{strict=false}={}){if(typeof value!=='string')return value;const found=identify(value);if(found)return t(found.key,lang,found.params);if(locale(lang)==='de-DE'||!strict)return value;const code=(value.match(/(?:HTTP\s*\d{3}|0x[0-9a-f]{8}|(?:selection|transport|initialize)\/[a-z-]+)/ig)||[]).slice(0,3).join(' ');return t('status.error',lang,{code});}
 function responseLanguage(value='auto'){value=conversation(value);return value==='auto'?' Response language preference: automatically match the user\'s current language. Override earlier language-only preferences; retain the character personality, voice, speaking style and safety rules.':' Response language preference: '+value+' ('+languageNames[value]+'). Reply in this language. Override earlier language-only preferences; retain the character personality, voice, speaking style and safety rules.';}
 const api={LOCALES,languageNames,locale,conversation,t,message,identify,responseLanguage,catalog:data.rows,sources:data.sources};
 if(typeof module==='object'&&module.exports)module.exports=api;if(typeof window!=='undefined')window.RobotI18n=api;
})();

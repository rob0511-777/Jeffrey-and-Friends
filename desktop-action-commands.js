'use strict';
(()=>{
 const voice=typeof module==='object'&&module.exports?require('./voice-commands.js'):window.RobotVoiceCommands;
 const scrollPhrases=['Scroll nach unten','Scrolle nach unten','Scroll nach oben','Scrolle nach oben','Scroll langsam nach unten','Scrolle langsam nach unten','Scroll langsam nach oben','Scrolle langsam nach oben','Hör auf zu scrollen','Scrollen stoppen'];
 const names={jeffrey:'jeffrey',kelly:'kelly',krak:'krak',bronco:'bronco',james:'james'};
 const numbers=['eins','zwei','drei','vier','fünf','sechs','sieben','acht','neun','zehn','elf','zwölf','dreizehn','vierzehn','fünfzehn','sechzehn','siebzehn','achtzehn','neunzehn','zwanzig','einundzwanzig','zweiundzwanzig','dreiundzwanzig','vierundzwanzig','fünfundzwanzig','sechsundzwanzig','siebenundzwanzig','achtundzwanzig','neunundzwanzig','dreißig'];
 const clickPhrases=['Linksklick','Mach einen Linksklick','Klick mit der linken Maustaste','Rechtsklick','Mach einen Rechtsklick','Klick mit der rechten Maustaste'];
 function parseAction(input,locale='de-DE'){
  if(locale!=='de-DE'||typeof input!=='string'||input.length>250||/["'„“”‚‘’«»`「」『』;:\r\n]/.test(input))return null;
  if(/["'„“”‚‘’«»`「」『』;:\r\n]/.test(input.normalize('NFKC')))return null;
  const scrollText=voice.normalize(input).replace(/^(?:(?:hey|hallo) )?(?:jeffrey|jeffry|jeffri|bronco|bronko|kelly|kelli|krak|krack|james|dscheims) /,'').replace(/\bbitte\b/g,'').replace(/\s+/g,' ').trim();
  if(/^(?:hor auf zu scrollen|scrollen stoppen)$/.test(scrollText))return {action:'stop'};
  const scroll=scrollText.match(/^scroll(?:e)? (langsam )?nach (unten|oben)$/);
  if(scroll)return {action:'scroll',direction:scroll[2]==='unten'?'down':'up',continuous:!!scroll[1]};
  const original=input.normalize('NFKC').trim().replace(/[.!?]+$/,'').trim();
  let m=original.match(/^(Jeffrey|Kelly|Krak|Bronco|James),?\s+komm(?: bitte)?$/i)||original.match(/^(?:Ruf(?:e)?|Wechsle zu|Aktiviere)\s+(Jeffrey|Kelly|Krak|Bronco|James)$/i)||original.match(/^Ich möchte mit (Jeffrey|Kelly|Krak|Bronco|James) sprechen$/i);
  if(m)return {action:'character',character:names[m[1].toLowerCase()]};
  const text=original.replace(/^(?:Jeffrey|Kelly|Krak|Bronco|James),?\s+/i,'').replace(/^bitte\s+/i,'').trim();
  if(/^(?:Linksklick|Mach einen Linksklick|Klick mit der linken Maustaste)$/i.test(text))return {action:'click',button:'left'};
  if(/^(?:Rechtsklick|Mach einen Rechtsklick|Klick mit der rechten Maustaste)$/i.test(text))return {action:'click',button:'right'};
  if(/^Menü schließen$/i.test(text))return {action:'menu-close'};
  m=text.match(/^(Wähle|Öffne das Untermenü|Bestätige)\s+(.+)$/i);if(!m)return null;
  const value=m[2].trim();if(!value||value.length>160||/^(?:nicht|keine?n?)\b/i.test(value)||/\b(?:und|dann)\s+(?:klick(?:e)?|drück(?:e)?|öffne|wechsle|starte|mach(?:e)?)(?:\s|$)/i.test(value))return null;
  const action=/^wähle$/i.test(m[1])?'menu-select':/^bestätige$/i.test(m[1])?'menu-confirm':'menu-submenu';
  const numeric=value.replace(/^Nummer\s+/i,'').toLowerCase(),n=/^\d+$/.test(numeric)?Number(numeric):numbers.indexOf(numeric)+1;
  if(n||/^\d+$/.test(numeric))return n>=1&&n<=30?{action,number:n}:null;
  return {action,name:value};
 }
 function actionGrammar(items=[],locale='de-DE',confirmation='',confirmationNumber=0){
  if(locale!=='de-DE')return [];
  const result=['Menü schließen',...scrollPhrases];
  for(const name of ['Jeffrey','Kelly','Krak','Bronco','James'])result.push(name+' komm bitte','Ruf '+name,'Wechsle zu '+name,'Ich möchte mit '+name+' sprechen','Aktiviere '+name);
  items.slice(0,30).forEach((item,i)=>{
   result.push('Wähle Nummer '+(i+1),'Wähle Nummer '+numbers[i],'Wähle '+numbers[i]);
   const name=item.name;if(typeof name==='string'&&name.length<=160&&!/["'„“”‚‘’«»`;:\r\n]/.test(name)){result.push('Wähle '+name);if(item.submenu)result.push('Öffne das Untermenü '+name);}
  });
  if(confirmationNumber>=1&&confirmationNumber<=30)result.push('Bestätige Nummer '+confirmationNumber,'Bestätige Nummer '+numbers[confirmationNumber-1]);
  if(confirmation&&parseAction('Bestätige '+confirmation))result.push('Bestätige '+confirmation);
  return [...new Set(result)];
 }
 function rejectedGrammar(items=[],locale='de-DE'){
  if(locale!=='de-DE')return [];
  const result=['Scroll nicht nach unten','Scroll nicht nach oben','Scrolle nicht nach unten','Scrolle nicht nach oben','Doppelklick','Doppelter Linksklick','Doppelter Rechtsklick','Kein Linksklick','Kein Rechtsklick','Mach keinen Linksklick','Mach keinen Rechtsklick','Klick nicht mit der linken Maustaste','Klick nicht mit der rechten Maustaste','Linksklick und Rechtsklick'];
  for(const name of ['Jeffrey','Kelly','Krak','Bronco','James'])result.push('Ruf nicht '+name,'Wechsle nicht zu '+name,'Aktiviere nicht '+name,'Ich möchte nicht mit '+name+' sprechen');
  for(const item of items.slice(0,30))if(typeof item.name==='string'&&item.name.length<=160&&!/["'„“”‚‘’«»`;:\r\n]/.test(item.name))result.push('Wähle nicht '+item.name,'Öffne nicht das Untermenü '+item.name);
  return [...new Set(result)];
 }
 const api={parseAction,actionGrammar,rejectedGrammar,clickGrammar:locale=>locale==='de-DE'?[...clickPhrases]:[]};
 if(typeof module==='object'&&module.exports)module.exports=api;if(typeof window!=='undefined')window.RobotDesktopActions=api;
})();

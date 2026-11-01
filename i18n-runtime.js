'use strict';
(()=>{
 const i18n=typeof module==='object'&&module.exports?require('./i18n.js'):window.RobotI18n;
 function createLocalizer(root){
  const cache=new WeakMap(),attributes=new WeakMap();
  return function apply(language){
   language=i18n.locale(language);root.documentElement.lang=language;
   for(const node of root.querySelectorAll('[data-i18n]')){const text=i18n.t(node.getAttribute('data-i18n'),language);if(node.textContent!==text)node.textContent=text;}
   // Text values from users, models, memory and the character are never translated.
   const walker=root.createTreeWalker(root.body||root,4);let node;
   while((node=walker.nextNode())){
    if(node.parentElement?.closest('#chat-log,#memory-list,#speech,script,style,svg,textarea,[data-user-content]'))continue;
    const old=cache.get(node),source=old&&old.output===node.nodeValue?old.source:node.nodeValue;
    const found=old&&old.output===node.nodeValue?old.found:i18n.identify(source);if(!found)continue;
    const output=(source.match(/^\s*/)?.[0]||'')+i18n.t(found.key,language,found.params)+(source.match(/\s*$/)?.[0]||'');
    cache.set(node,{source,output,found});if(node.nodeValue!==output)node.nodeValue=output;
   }
   for(const element of root.querySelectorAll('[aria-label],[placeholder],[title],[alt]')){
    if(element.closest('#memory-list,[data-user-content]'))continue;
    const stored=attributes.get(element)||{};
    for(const attribute of ['aria-label','placeholder','title','alt']){
     const current=element.getAttribute(attribute);if(!current)continue;
     const old=stored[attribute],source=old&&old.output===current?old.source:current,found=i18n.identify(source);if(!found)continue;
     const output=i18n.t(found.key,language,found.params);stored[attribute]={source,output};if(current!==output)element.setAttribute(attribute,output);
    }
    attributes.set(element,stored);
   }
  };
 }
 if(typeof module==='object'&&module.exports)module.exports={createLocalizer};
 if(typeof window!=='undefined'&&typeof document!=='undefined'){
  let language='de-DE',queued=false;const apply=createLocalizer(document);
  const refresh=()=>{if(queued)return;queued=true;queueMicrotask(()=>{queued=false;apply(language);});};
  window.RobotI18nRuntime={setLocale:value=>{language=i18n.locale(value);apply(language);},getLocale:()=>language,refresh};
  apply(language);new MutationObserver(refresh).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','title','placeholder','alt']});
 }
})();

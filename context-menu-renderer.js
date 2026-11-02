'use strict';
(()=>{
 const el=id=>document.getElementById(id);
 window.contextMenuView.onState(state=>{
  const locale=state.uiLocale||'de-DE',t=(key,params)=>window.RobotI18n.t(key,locale,params);
  document.documentElement.lang=locale;el('title').textContent=t('menu.title');el('hint').textContent=t('menu.hint');el('items').replaceChildren();
  state.items.forEach(item=>{const line=document.createElement('li');line.textContent=item.name+(item.submenu?' ▸':'');line.className=item.enabled?'':'disabled';line.title=item.name;el('items').append(line);});
  el('confirmation').textContent=state.confirmation?t(state.confirmation.number<=30?'menu.confirmPromptNumber':'menu.confirmPrompt',{name:state.confirmation.name,number:state.confirmation.number}):'';
  el('more').textContent=state.truncated?t('menu.more'):'';
 });
})();

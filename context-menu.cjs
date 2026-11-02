'use strict';
// All names stay transient and local. This controller never logs or calls a model.
const copy=value=>structuredClone(value);
const caption=value=>String(value).replace(/\t.*$/,'').replace(/&&/g,'\u0001').replace(/&/g,'').replace(/\u0001/g,'&').trim();
const normalized=value=>caption(value).normalize('NFKC').replace(/(?:\.{3}|…)$/,'').toLocaleLowerCase('de-DE');
const destructive=name=>/(?:\b(?:löschen|entfernen|deinstallieren|formatieren|delete|remove|uninstall|erase|format|borrar|eliminar|excluir|apagar|formatar)\b|papierkorb.*leeren|empty.*recycle|删除|刪除|削除|移除|格式化|初期化)/i.test(normalized(name));
const error=code=>Object.assign(Error('menu.'+code),{code:'menu.'+code});
const safeCode=(cause,fallback)=>{const value=typeof cause?.code==='string'?cause.code.replace(/^menu\./,''):'';return ['unsupported','changed','not-found','disabled','ambiguous','provider-error'].includes(value)?value:fallback;};
function cleanSnapshot(raw){
 if(!raw||!Number.isSafeInteger(raw.token)||!Number.isInteger(raw.pid)||raw.pid<=0||typeof raw.window!=='string'||!/^\d+$/.test(raw.window)||!Array.isArray(raw.items)||raw.items.length>100)throw error('unsupported');
 const b=raw.bounds;if(!b||!['x','y','width','height'].every(k=>Number.isFinite(b[k])&&Math.abs(b[k])<1000000)||b.width<=0||b.height<=0)throw error('unsupported');
 const ids=new Set();const items=raw.items.map(item=>{
  if(!Number.isSafeInteger(item.id)||ids.has(item.id)||typeof item.name!=='string'||!item.name.trim()||item.name.length>160)throw error('unsupported');ids.add(item.id);
  const name=caption(item.name.replace(/[\r\n\u0000-\u0008]/g,' '));if(!name)throw error('unsupported');
  return {id:item.id,name,enabled:item.enabled===true,visible:item.visible===true,supported:item.supported===true,submenu:item.submenu===true};
 });
 return {token:raw.token,pid:raw.pid,window:raw.window,bounds:{x:b.x,y:b.y,width:b.width,height:b.height},items};
}
const signature=s=>JSON.stringify([s.token,s.pid,s.window,s.bounds,s.items]);
function createContextMenu({backend,onChange=()=>{},isAllowed=()=>true}={}){
 let snapshot=null,confirmation=null,epoch=0,operation=null,displayed=0;
 const state=()=>({active:!!snapshot,token:snapshot?.token||0,bounds:snapshot?.bounds||null,items:copy(snapshot?.items||[]),confirmation:confirmation?{name:confirmation.name,number:confirmation.number}:null});
 function publish(){const count=onChange(state());displayed=Math.min(30,snapshot?.items.length||0,Number.isInteger(count)?Math.max(0,count):30);}
 function cancel(close=true){const old=snapshot;epoch++;snapshot=null;confirmation=null;operation=null;publish();if(close&&old)void Promise.resolve(backend.close(old.token)).catch(()=>{});}
 async function current(version){
  if(!snapshot||!isAllowed())throw error('closed');
  const original=signature(snapshot);let fresh;
  try{fresh=cleanSnapshot(await backend.inspect(snapshot.token));}catch(cause){if(version===epoch)cancel(false);throw error(safeCode(cause,'closed'));}
  if(version!==epoch||!snapshot||!isAllowed())throw error('cancelled');
  if(original!==signature(fresh)){cancel(false);throw error('changed');}
  return fresh;
 }
 return Object.freeze({state,repaint:publish,active:()=>!!snapshot,cancel,
  async open(anchor){
   cancel(false);const version=epoch;let value;
   try{value=cleanSnapshot(await backend.open(anchor));}catch(cause){throw error(safeCode(cause,'provider-error'));}
   if(version!==epoch||!isAllowed()){void Promise.resolve(backend.close(value.token)).catch(()=>{});throw error('cancelled');}
   if(value.pid!==anchor.pid||value.window!==anchor.window)throw error('changed');
   snapshot=value;publish();return 'menu.opened';
  },
  async refresh(){if(!snapshot||operation)return;try{await current(epoch);}catch{}},
  async dispatch(command){
   if(command.action==='menu-close'){const old=snapshot;cancel(false);if(!old)throw error('closed');let closed=false;try{closed=await backend.close(old.token);}catch{}if(closed!==true)throw error('unsupported');return 'menu.closed';}
   if(operation)throw error('busy');if(!snapshot)throw error('closed');
   const job={},version=epoch;operation=job;
   try{
    const pending=confirmation;confirmation=null;
    const fresh=await current(version);let item;
    if(command.action==='menu-confirm'){
     if(!pending||pending.epoch!==version||pending.signature!==signature(fresh)||(command.number===undefined?normalized(command.name)!==normalized(pending.name):command.number!==pending.number||command.number<1||command.number>30||displayed===0))throw error('confirmation');
     item=fresh.items.find(i=>i.id===pending.id);
    }else if(command.action==='menu-select'||command.action==='menu-submenu'){
     if(command.number!==undefined){if(!Number.isInteger(command.number)||command.number<1||command.number>displayed)throw error('not-found');item=fresh.items[command.number-1];}
     else {const matches=fresh.items.filter(i=>normalized(i.name)===normalized(command.name));if(matches.length>1)throw error('ambiguous');item=matches[0];}
    }else throw error('not-found');
    if(!item||!item.visible)throw error('not-found');if(!item.enabled)throw error('disabled');if(!item.supported)throw error('unsupported');
    const expand=command.action==='menu-submenu'||item.submenu;
    if(command.action==='menu-submenu'&&!item.submenu)throw error('unsupported');
    if(!expand&&destructive(item.name)&&command.action!=='menu-confirm'){
     confirmation={id:item.id,name:item.name.replace(/(?:\.{3}|…)$/,''),number:fresh.items.indexOf(item)+1,epoch:version,signature:signature(fresh)};publish();return 'menu.confirmation';
    }
    if(version!==epoch||!isAllowed())throw error('cancelled');
    let result;
    try{result=await backend.execute(fresh.token,item.id,expand?'expand':'invoke');}catch(cause){if(version===epoch)cancel(false);throw error(safeCode(cause,'closed'));}
    if(version!==epoch||!isAllowed())throw error('cancelled');
    if(expand||result){snapshot=cleanSnapshot(result);if(snapshot.pid!==fresh.pid||snapshot.window!==fresh.window){cancel(false);throw error('changed');}publish();return 'menu.opened';}
    cancel(false);return 'menu.executed';
   }finally{if(operation===job)operation=null;if(snapshot)publish();}
  }
 });
}
module.exports={createContextMenu,normalized,destructive};

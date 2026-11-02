'use strict';
// One-use authorization for explicit final transcripts; never logged or persisted.
function createDesktopActionGate({now=Date.now}={}){
 const entries=new Map();let session=null,lastRegistered=0,lastConsumed=0,blocked=false;
 function reset(next){entries.clear();session=next;lastRegistered=0;lastConsumed=0;blocked=false;}
 return Object.freeze({reset,invalidate(){entries.clear();blocked=false;},endTurn(){blocked=false;},blocked:()=>blocked,
  register(id,text,current){
   if(!Number.isSafeInteger(id)||id<=0||typeof text!=='string'||text.length>250)return false;
   if(session!==current)reset(current);if(id<=lastRegistered)return false;
   lastRegistered=id;entries.set(id,{text,at:now()});if(entries.size>64)entries.delete(entries.keys().next().value);blocked=true;return true;
  },
  consume(id,text,current){
   const entry=entries.get(id);if(!entry||current!==session||entry.text!==text||now()-entry.at>30000||id<=lastConsumed)return false;
   entries.delete(id);lastConsumed=id;blocked=true;return true;
  }
 });
}
module.exports={createDesktopActionGate};

'use strict';
// Used only by explicit voice character calls. The existing UI switch stays intact.
function createCharacterCallTransition({isLive,getSession,stopLocal,stopLive,onDone=()=>{},timeoutMs=5000}){
 let count=0,waiting=null;
 return Object.freeze({
  active:()=>count>0,
  expects:session=>Boolean(waiting&&waiting.session===session),
  closed(session){if(waiting?.session===session){const current=waiting;waiting=null;clearTimeout(current.timer);current.resolve();}},
  async begin(){
   count++;
   const released=await stopLocal();
   if(released.includes(false))throw Error('desktop.character.transitionError');
   if(!isLive())return;
   const session=getSession();
   if(!waiting){
    let resolve,reject;const promise=new Promise((ok,fail)=>{resolve=ok;reject=fail;});
    const current={session,promise,resolve,reject,timer:null};waiting=current;
    current.timer=setTimeout(()=>{if(waiting===current)waiting=null;reject(Error('desktop.character.transitionError'));},timeoutMs);
    try{stopLive();}catch{clearTimeout(current.timer);waiting=null;reject(Error('desktop.character.transitionError'));}
   }
   if(waiting)await waiting.promise;
  },
  end(){count=Math.max(0,count-1);if(!count)onDone();}
 });
}
module.exports={createCharacterCallTransition};

'use strict';
// Kill requests are asynchronous. A new microphone owner must await this result.
function stopSpeechProcess(child,{timeoutMs=2000}={}){
 if(!child||child.exitCode!=null||child.signalCode!=null)return Promise.resolve(true);
 return new Promise(resolve=>{
  let done=false;
  const finish=ok=>{if(done)return;done=true;clearTimeout(timer);child.removeListener('close',closed);child.removeListener('error',failed);resolve(ok);};
  const closed=()=>finish(true),failed=()=>finish(!child.pid),timer=setTimeout(()=>finish(false),timeoutMs);timer.unref?.();
  child.once('close',closed);child.once('error',failed);
  try{child.kill();}catch{finish(false);}
 });
}
module.exports={stopSpeechProcess};

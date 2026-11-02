'use strict';
// Opt-in, bounded, content-free timings. Never accept free-form labels or payloads.
const CODES=new Set(['grid-start','snapshot-start','snapshot-ready','input-ready','overlay-created','overlay-loaded','overlay-ready','overlay-error','speech-start','speech-stop','transcript-final','parser-accept','parser-reject','duplicate','turn-busy','ipc-send','ipc-received','ipc-rejected','ipc-return','queue-start','command-ok','command-error','command-cancelled','helper-ready','native-write','native-start','native-done','native-superseded','stop']);
function createMouseDiagnostics({enabled=process.env.JEFFREY_MOUSE_DIAGNOSTICS==='1',now=Date.now,sink=row=>console.info('[mouse-diag] '+JSON.stringify(row)),limit=1024}={}){
 const started=now(),previous=new Map();let count=0;
 return Object.freeze({enabled:enabled===true,record(code,payload={}){
  if(enabled!==true||count>=limit||!CODES.has(code))return false;
  const id=payload.id??0,at=payload.at??now();
  if(!Number.isSafeInteger(id)||id<0||id>2147483647||!Number.isFinite(at)||Math.abs(now()-at)>600000)return false;
  const last=previous.get(id);previous.set(id,at);if(previous.size>256)previous.delete(previous.keys().next().value);count++;
  try{sink({code,id,elapsedMs:Math.max(0,Math.round(at-started)),sincePreviousMs:last===undefined?0:Math.max(0,Math.round(at-last))});return true;}catch{return false;}
 }});
}
module.exports={createMouseDiagnostics};

'use strict';
const {CHARACTERS}=require('./characters.cjs');
const failure=()=>Error('desktop.action.cancelled');
function createDesktopActionService({mouse,menu,isAllowed=()=>true,getCharacter,switchCharacter,showCharacter,beforeCharacterSwitch=async()=>{},afterCharacterSwitch=()=>{}}){
 let epoch=0,characterVersion=0;
 return Object.freeze({
  cancel(preserveCharacter=false){epoch++;if(!preserveCharacter)characterVersion++;menu.cancel();},
  async run(command){
   if(!isAllowed())throw failure();
   if(command.action==='scroll'){
    if(menu.active?.())throw Error('scroll.busy');
    const version=epoch;await mouse.scroll(command.direction,command.continuous);
    if(version!==epoch||!isAllowed())throw failure();
    return command.continuous?'scroll.started':command.direction==='up'?'scroll.stepUp':'scroll.stepDown';
   }
   if(command.action==='character'){
    if(!Object.hasOwn(CHARACTERS,command.character))throw failure();
    const version=++characterVersion;
    if(command.character!==getCharacter()){
     epoch++;menu.cancel();
     try{await beforeCharacterSwitch();if(version!==characterVersion||!isAllowed())throw failure();await switchCharacter(command.character);}
     finally{afterCharacterSwitch();}
    }
    if(!isAllowed())throw failure();showCharacter();return 'desktop.character.called';
   }
   if(command.action==='click'){
    const version=epoch;menu.cancel(false);
    const anchor=await mouse.click(command.button);if(version!==epoch||!isAllowed())throw failure();
    if(command.button==='right'){await menu.open(anchor);return 'menu.opened';}
    return 'desktop.click.done';
   }
   if(command.action.startsWith('menu-'))return menu.dispatch(command);
   throw failure();
  }
 });
}
module.exports={createDesktopActionService};

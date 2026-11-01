'use strict';
(()=>{
 const el=id=>document.getElementById(id);
 function rectangle(node,r,b){node.style.left=100*(r.x-b.x)/b.width+'%';node.style.top=100*(r.y-b.y)/b.height+'%';node.style.width=100*r.width/b.width+'%';node.style.height=100*r.height/b.height+'%';}
 const arrows={'left-top':'↖','right-top':'↗','left-bottom':'↙','right-bottom':'↘'};
 const tr=(key,locale,params)=>window.RobotI18n?.t(key,locale,params)||'';
 function draw(node,state,labels=true){
  node.replaceChildren();
  for(const r of state.cells){
   const quarters=state.layout==='quarters',name=r.label,cell=document.createElement('div'),label=document.createElement('span');
   const w=r.width/state.monitor.bounds.width*innerWidth,h=r.height/state.monitor.bounds.height*innerHeight;
   const long=tr('mouse.quad.'+name,state.uiLocale)||arrows[name];
   const text=quarters?(w<110||h<38?tr('mouse.quadShort.'+name,state.uiLocale)||arrows[name]:long):name;
   cell.className='cell'+(state.selected===name?' selected':'');label.className='label';label.textContent=text;
   cell.style.borderWidth=Math.min(labels?2:1,w/2,h/2)+'px';label.hidden=!labels||w<(quarters?9:18)||h<(quarters?9:16);
   label.style.fontSize=quarters?Math.max(6,Math.min(24,w/(Math.max(1,text.length)*.75+1),h*.55))+'px':Math.max(10,Math.min(36,w*.32,h*.45))+'px';
   label.style.padding=(quarters?'0 ':'2px ')+Math.min(9,w*.08)+'px';label.title=quarters?long:name;
   cell.append(label);rectangle(cell,r,state.grid);node.append(cell);
  }
 }
 window.mouseGrid.onState(state=>{
  el('content').hidden=!state.active;if(!state.active)return;el('content').style.opacity=state.opacity/100;
  const b=state.monitor.bounds;
  el('orientation').replaceChildren();
  for(const area of state.ancestors||[]){const layer=document.createElement('div');layer.className='ancestor-grid';rectangle(layer,area,b);draw(layer,{...state,...area,grid:area,selected:null},false);el('orientation').append(layer);}
  rectangle(el('grid'),state.grid,b);draw(el('grid'),state);el('grid').hidden=false;
  const region=state.region||state.grid;rectangle(el('region'),region,b);el('region').style.borderWidth=Math.min(3,region.width/b.width*innerWidth/2,region.height/b.height*innerHeight/2)+'px';el('region').hidden=!state.region&&!(state.ancestors||[]).length;
  el('target').hidden=!state.target;if(state.target){el('target').style.left=100*(state.target.x-b.x)/b.width+'%';el('target').style.top=100*(state.target.y-b.y)/b.height+'%';}
  el('help').textContent=tr(state.layout==='quarters'?'mouse.helpQuad':'mouse.help',state.uiLocale,{depth:state.subdivisionDepth})||(state.layout==='quarters'?'↖ ↗ ↙ ↘':'A1–D5');
 });
})();

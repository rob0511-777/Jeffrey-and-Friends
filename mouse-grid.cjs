'use strict';
const clone=x=>JSON.parse(JSON.stringify(x));
const DIRECTIONS=['left-top','right-top','left-bottom','right-bottom'];
function center(r){return {x:r.x+Math.floor(r.width/2),y:r.y+Math.floor(r.height/2)};}
function partition(r,row,col,rows,cols){const x=r.x+Math.floor(col*r.width/cols),y=r.y+Math.floor(row*r.height/rows);return {x,y,width:r.x+Math.floor((col+1)*r.width/cols)-x,height:r.y+Math.floor((row+1)*r.height/rows)-y};}
function cellsFor(bounds,layout){
 const quarters=layout==='quarters',rows=quarters?2:4,cols=quarters?2:5;
 return Array.from({length:rows*cols},(_,i)=>({...partition(bounds,Math.floor(i/cols),i%cols,rows,cols),label:quarters?DIRECTIONS[i]:'ABCD'[Math.floor(i/cols)]+(i%cols+1)}));
}
function createMouseGrid(monitor,{maxDepth=4}={}){
 const bounds=monitor?.bounds;
 if(!bounds||!['x','y','width','height'].every(k=>Number.isInteger(bounds[k])&&Math.abs(bounds[k])<=65536)||bounds.width<10||bounds.height<8)throw Error('Ungültiger oder zu kleiner Monitor.');
 const limit=Math.max(1,Math.min(8,Math.floor(maxDepth)||4));
 const initial=()=>({monitor:clone(monitor),grid:clone(bounds),layout:'matrix',selected:null,region:null,target:null,depth:0,gridDepth:0,subdivisionDepth:0,ancestors:[]});
 let s=initial(),history=[];
 const save=()=>{history.push(clone(s));if(history.length>256)history.shift();};
 const check=()=>{if(!s.region)throw Error('Bitte zuerst ein Feld auswählen.');if(s.depth>=limit)throw Error('Maximale Unterteilungstiefe erreicht.');};
 const selectRegion=(label,region)=>{
  if(s.selected!==label||JSON.stringify(s.region)!==JSON.stringify(region)){save();s.selected=label;s.region=region;s.depth=s.gridDepth;}
  s.target=center(region);return clone(s.target);
 };
 return Object.freeze({
  state:()=>clone({...s,cells:cellsFor(s.grid,s.layout)}),
  cells:()=>cellsFor(s.grid,s.layout),
  select(cell){
   if(s.layout==='quarters')throw Error('mouse.quadOnly');
   if(!/^[A-D][1-5]$/.test(cell))throw Error('Ungültiges Feld.');
   return selectRegion(cell,partition(s.grid,'ABCD'.indexOf(cell[0]),Number(cell[1])-1,4,5));
  },
  refine(direction){
   if(direction==='center'){if(!s.region)throw Error('Bitte zuerst ein Feld auswählen.');s.target=center(s.region);return clone(s.target);}
   if(!DIRECTIONS.includes(direction))throw Error('Ungültige Richtung.');
   if(s.layout==='quarters')return selectRegion(direction,partition(s.grid,DIRECTIONS.indexOf(direction)>>1,DIRECTIONS.indexOf(direction)%2,2,2));
   check();if(s.region.width<4||s.region.height<4)throw Error('Zielbereich ist für weitere Pixel-Unterteilung zu klein.');
   save();s.depth++;s.region=partition(s.region,direction.endsWith('bottom')?1:0,direction.startsWith('right')?1:0,2,2);s.target=center(s.region);return clone(s.target);
  },
  subdivide(){
   check();const layout=s.subdivisionDepth>=1?'quarters':'matrix',cols=layout==='quarters'?2:5,rows=layout==='quarters'?2:4;
   if(s.region.width<cols*2||s.region.height<rows*2)throw Error('Zielbereich ist für ein weiteres Raster zu klein (Pixelgrenze).');
   save();s.ancestors.push({...s.grid,layout:s.layout,cells:cellsFor(s.grid,s.layout)});
   s.depth++;s.gridDepth=s.depth;s.subdivisionDepth++;s.layout=layout;s.grid=clone(s.region);s.region=null;s.selected=null;return this.state();
  },
  back(){const previous=history.pop();if(!previous)throw Error('Bereits auf der obersten Ebene.');s=previous;return this.state();},
  reset(){history=[];s=initial();return this.state();}
 });
}
module.exports={createMouseGrid,center,partition,cellsFor};

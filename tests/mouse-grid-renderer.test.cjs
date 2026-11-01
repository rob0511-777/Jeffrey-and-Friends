'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
const {createMouseGrid}=require('../mouse-grid.cjs');
function setup(width,height){
 const elements={};const element=()=>({style:{},children:[],hidden:false,append(node){this.children.push(node);},replaceChildren(){this.children=[];}});let receive;
 const ctx=vm.createContext({innerWidth:width,innerHeight:height,document:{getElementById:id=>elements[id]||(elements[id]=element()),createElement:element},window:{mouseGrid:{onState:f=>{receive=f;}}}});
 vm.runInContext(fs.readFileSync(path.join(__dirname,'../mouse-grid-renderer.js'),'utf8'),ctx);return {elements,receive};
}
test('Overlay hält 20 lesbare Felder; interne Viertel ändern weder Rasterposition noch Beschriftung',()=>{
 const f=setup(1920,1080),g=createMouseGrid({bounds:{x:-1920,y:-100,width:1920,height:1080}});g.select('D4');f.receive({active:true,opacity:50,...g.state()});
 assert.equal(f.elements.grid.children.length,20);assert.equal(f.elements.grid.children[19].children[0].textContent,'D5');assert.equal(f.elements.content.style.opacity,.5);const visible={...f.elements.grid.style};
 g.refine('left-top');f.receive({active:true,opacity:50,...g.state()});assert.deepEqual(f.elements.grid.style,visible);assert.equal(f.elements.grid.hidden,false);assert.equal(f.elements.orientation.children.length,0);assert.equal(f.elements.target.hidden,false);
});
test('Unterteilung bleibt am echten Ziel, Wurzel bleibt sichtbar; Zurück und Reset entfernen Ebenen',()=>{
 const f=setup(1280,720),g=createMouseGrid({bounds:{x:-1920,y:-100,width:1920,height:1080}});g.select('D4');g.subdivide();f.receive({active:true,opacity:100,...g.state()});
 assert.equal(f.elements.grid.hidden,false);assert.equal(f.elements.grid.style.left,'60%');assert.equal(f.elements.grid.style.top,'75%');assert.equal(f.elements.orientation.children.length,1);assert.equal(f.elements.grid.children.length,20);
 g.select('B3');g.subdivide();f.receive({active:true,opacity:100,...g.state()});assert.equal(f.elements.orientation.children.length,2);assert.equal(f.elements.grid.children.length,4);assert.ok(f.elements.grid.children.every(c=>!/[A-D][1-5]/.test(c.children[0].textContent)));g.refine('left-top');f.receive({active:true,opacity:100,...g.state()});g.back();
 g.back();f.receive({active:true,opacity:100,...g.state()});assert.equal(f.elements.orientation.children.length,1);
 g.reset();f.receive({active:true,opacity:100,...g.state()});assert.equal(f.elements.orientation.children.length,0);assert.equal(f.elements.grid.style.left,'0%');
 f.receive({active:false});assert.equal(f.elements.content.hidden,true);
});
test('Sehr kleine Zellen behalten ihre Pixelgrenzen auch mit Rahmen bei DPI-Skalierung',()=>{const f=setup(960,540),g=createMouseGrid({bounds:{x:-1920,y:0,width:1920,height:1080}},{maxDepth:8});for(let i=0;i<3;i++){if(g.state().layout==='quarters')g.refine('left-top');else g.select('A1');g.subdivide();}f.receive({active:true,opacity:100,...g.state()});const width=g.state().grid.width/2/1920*960;assert.ok(f.elements.grid.children.every(c=>parseFloat(c.style.borderWidth)*2<=width));});

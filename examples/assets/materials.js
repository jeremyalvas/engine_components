var D=Object.defineProperty;var E=(a,s,e)=>s in a?D(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e;var c=(a,s,e)=>(E(a,typeof s!="symbol"?s+"":s,e),e);import{I as b,S as w,d as I,am as G,a0 as R,C as f,M as C,b as k}from"./unzipit.module-DQmiVUKU.js";import{g as T}from"./lil-gui.module.min-Bc0DeA9g.js";import{S as v}from"./stats.min-GTpOrGrX.js";import{c as z,E as A,C as L,W as U,S as W,a as j,b as N}from"./index-DECOYrZp.js";import"./_commonjsHelpers-Cpj98o6Y.js";const h=class h extends z{constructor(e){super(e);c(this,"enabled",!0);c(this,"_originalBackground",new Map);c(this,"onDisposed",new A);c(this,"list",{});c(this,"_originals",{});this.components.add(h.uuid,this)}set(e,t=Object.keys(this.list)){for(const o of t){const{material:y,meshes:_}=this.list[o];for(const n of _)if(e)this._originals[n.uuid]||(this._originals[n.uuid]={material:n.material}),n instanceof b&&n.instanceColor&&(this._originals[n.uuid].instances=n.instanceColor,n.instanceColor=null),n.material=y;else{if(!this._originals[n.uuid])continue;n.material=this._originals[n.uuid].material;const M=this._originals[n.uuid].instances;n instanceof b&&M&&(n.instanceColor=M)}}}dispose(){for(const e in this.list){const{material:t}=this.list[e];t.dispose()}this.list={},this._originals={},this.onDisposed.trigger(h.uuid),this.onDisposed.reset(),this._originalBackground.clear()}setBackgroundColor(e,t){const o=t.scene.three;o instanceof w&&(this._originalBackground.has(t.uuid)||this._originalBackground.set(t.uuid,o.background),this._originalBackground&&(o.background=e))}resetBackgroundColor(e){const t=e.scene.three;if(!(t instanceof w))return;const o=this._originalBackground.get(e.uuid);o&&(t.background=o)}addMaterial(e,t){if(this.list[e])throw new Error("This ID already exists!");this.list[e]={material:t,meshes:new Set}}addMeshes(e,t){if(!this.list[e])throw new Error("This ID doesn't exists!");for(const o of t)this.list[e].meshes.add(o)}removeMeshes(e,t){if(!this.list[e])throw new Error("This ID doesn't exists!");for(const o of t)this.list[e].meshes.delete(o)}};c(h,"uuid","24989d27-fa2f-4797-8b08-35918f74e502");let p=h;const O=document.getElementById("container"),l=new L,P=l.get(U),i=P.create();i.scene=new W(l);i.renderer=new j(l,O);i.camera=new N(l);l.init();i.camera.controls.setLookAt(13,13,13,0,0,0);i.scene.setup();const B=[],S=[],q=new I(2,2,2),F=new G(2,8,8),x=new R({color:"#6528D7"});function d(a){return Math.random()*a}function H(){for(let a=0;a<3;a++){const s=new k(q,x);s.position.x=d(10),s.position.y=d(10),s.position.z=d(10),s.updateMatrix(),i.scene.three.add(s),B.push(s)}}function J(){for(let a=0;a<3;a++){const s=new k(F,x);s.position.x=d(10),s.position.y=d(10),s.position.z=d(10),s.updateMatrix(),i.scene.three.add(s),S.push(s)}}H();J();const r=l.get(p),K=new f("white"),Q=new f(7460648),V=new C({color:Q}),X=new f(14100587),Y=new C({color:X});r.addMaterial("cubeMaterial",V);r.addMeshes("cubeMaterial",B);r.addMaterial("sphereMaterial",Y);r.addMeshes("sphereMaterial",S);const m=new T,g={changeSphereMaterial:()=>{r.set(!0,["sphereMaterial"])},changeCubeMaterial:()=>{r.set(!0,["cubeMaterial"])},changeBackground:()=>{r.setBackgroundColor(K,i)},reset:()=>{r.set(!1,["cubeMaterial","sphereMaterial"]),r.resetBackgroundColor(i)}};m.add(g,"changeSphereMaterial").name("Change Sphere Material");m.add(g,"changeCubeMaterial").name("Change Cube Material");m.add(g,"changeBackground").name("Change Background");m.add(g,"reset").name("Reset Material");const u=new v;u.showPanel(2);document.body.append(u.dom);u.dom.style.left="0px";i.renderer.onBeforeUpdate.add(()=>u.begin());i.renderer.onAfterUpdate.add(()=>u.end());

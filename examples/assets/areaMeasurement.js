import{B as d,M as c,a as i}from"./web-ifc-api-CfQNUy7g.js";import{S as m}from"./stats.min-BpIepu9J.js";import{p as l,C as p,i as w,W as u,d as b}from"./index-CrrO1BJs.js";import{S as f,I as g}from"./index-BREiuDZQ.js";const a=document.getElementById("container"),n=new l,y=n.get(p),e=y.create();e.scene=new w(n);e.renderer=new f(n,a);e.camera=new u(n);n.init();e.camera.controls.setLookAt(5,5,5,0,0,0);e.scene.setup();const h=n.get(b);h.create(e);e.scene.three.background=null;const k=new d(3,3,3),B=new c({color:"#6528D7"}),s=new i(k,B);s.position.set(0,1.5,0);e.scene.three.add(s);e.meshes.add(s);const o=n.get(g);o.world=e;o.enabled=!0;a.ondblclick=()=>o.create();a.oncontextmenu=()=>o.endCreation();window.onkeydown=r=>{(r.code==="Delete"||r.code==="Backspace")&&o.deleteAll()};const t=new m;t.showPanel(2);document.body.append(t.dom);t.dom.style.left="0px";t.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>t.begin());e.renderer.onAfterUpdate.add(()=>t.end());

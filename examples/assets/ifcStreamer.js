import"./web-ifc-api-C62xsSvk.js";import{S as d}from"./stats.min-BpIepu9J.js";import{p as l,C as m,i as p,n as u,k as w,u as g}from"./index-f5QEetul.js";import{a as h}from"./index-dz1kMuu_.js";const f=document.getElementById("container"),o=new l,y=o.get(m),e=y.create();e.scene=new p(o);e.renderer=new u(o,f);e.camera=new w(o);o.init();e.scene.setup();e.camera.controls.setLookAt(12,6,8,0,0,-10);const b=o.get(g);b.create(e);e.scene.three.background=null;const t=o.get(h);t.world=e;t.url="https://thatopen.github.io/engine_components/resources/streaming/";async function D(s,r){const c=await(await fetch(s)).json();let a;a=await(await fetch(r)).json();const i=await t.load(c,!0,a);console.log(i)}await D("https://thatopen.github.io/engine_components/resources/streaming/small.ifc-processed.json","https://thatopen.github.io/engine_components/resources/streaming/small.ifc-processed-properties.json");e.camera.controls.addEventListener("sleep",()=>{t.culler.needsUpdate=!0});t.useCache=!0;t.culler.threshold=10;t.culler.maxHiddenTime=1e3;t.culler.maxLostTime=4e4;const n=new d;n.showPanel(2);document.body.append(n.dom);n.dom.style.left="0px";n.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>n.begin());e.renderer.onAfterUpdate.add(()=>n.end());

import{b as p,B as w,M as i}from"./web-ifc-api-BiYij3qq.js";import{S as u}from"./stats.min-GTpOrGrX.js";import{f as b,p as f,s as y,i as g,k as x,H as M}from"./index-B3b_h8A8.js";import"./_commonjsHelpers-Cpj98o6Y.js";const B=document.getElementById("container"),o=new b,h=o.get(f),e=h.create();e.scene=new y(o);e.renderer=new g(o,B);e.camera=new x(o);o.init();e.camera.controls.setLookAt(10,10,10,0,0,0);e.scene.setup();const d=new p({color:"#6528D7"}),S=new p({color:"#BCF124"}),l=new w(3,3,3),c=new i(l,d),n=new i(l,d),r=new i(l,d);e.scene.three.add(c,n,r);const j=[c,n,r];n.position.x=5;r.position.x=-5;const t=Math.PI/180;function k(){c.rotation.x+=t,c.rotation.y+=t,n.rotation.x+=t,n.rotation.z+=t,r.rotation.y+=t,r.rotation.z+=t}e.renderer.onBeforeUpdate.add(k);const U=o.get(M),v=U.get(e);let m=null;window.onmousemove=()=>{const s=v.castRay(j);m&&(m.material=d),!(!s||!(s.object instanceof i))&&(s.object.material=S,m=s.object)};const a=new u;a.showPanel(2);document.body.append(a.dom);a.dom.style.left="0px";e.renderer.onBeforeUpdate.add(()=>a.begin());e.renderer.onAfterUpdate.add(()=>a.end());

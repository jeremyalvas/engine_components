import{M as u,B as f}from"./web-ifc-api-eJ7dR4yy.js";import{g}from"./lil-gui.module.min-Bc0DeA9g.js";import{a as p,W as w,S as F,b,c as x}from"./index-BRIP3dnE.js";import{F as y}from"./index-DUv5fNdI.js";const h=document.getElementById("container"),o=new p,E=o.get(w),r=E.create();r.scene=new F(o);r.renderer=new b(o,h);r.camera=new x(o);o.init();const B=new u(new f);r.scene.three.add(B);r.camera.controls.setLookAt(12,6,8,0,0,-10);r.scene.setup();const t=new y(o);let m="";async function L(){if(t.groups.size)return;const n=await(await fetch("../../../resources/small.frag")).arrayBuffer(),s=new Uint8Array(n),a=t.load(s);r.scene.three.add(a),m=a.uuid,console.log(a)}function U(e){const n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=e.name,document.body.appendChild(n),n.click(),n.remove()}function R(){if(!t.groups.size)return;const e=t.groups.get(m);if(!e)return;const n=t.export(e),s=new Blob([n]),a=new File([s],"small.frag");U(a)}function S(){t.dispose()}function k(){if(t.groups.size)return;const e=document.createElement("input");e.type="file",e.onchange=async()=>{if(!(e.files&&e.files[0]))return;const n=e.files[0];if(n.name.includes(".frag")){const s=URL.createObjectURL(n),l=await(await fetch(s)).arrayBuffer(),d=new Uint8Array(l);t.load(d)}e.remove()},e.click()}const c=new g,i={loadFragments:()=>L(),disposeFragments:()=>S(),exportFragments:()=>R(),importExternalFragment:()=>k()};c.add(i,"loadFragments").name("Load Fragments");c.add(i,"disposeFragments").name("Dispose Fragments");c.add(i,"exportFragments").name("Export Fragments");c.add(i,"importExternalFragment").name("Import External Fragment");

import{C as l}from"./web-ifc-api-eJ7dR4yy.js";import{S as p}from"./stats.min-GTpOrGrX.js";import"./import-wrapper-prod-Dt8pgrvp.js";import{P as g}from"./index-Cx9OycCu.js";import{C as w}from"./index-9ajLxV1Z.js";import{C as h}from"./index-B5ZryrG5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BXaXqD4l.js";import"./index-CcoJVEnC.js";import"./mark-cmFzwbfb.js";import"./Line2-BSuqjsMt.js";const v=document.getElementById("container"),e=new(void 0),m=new(void 0)(e);m.setup();e.scene=m;const o=new g(e,v);e.renderer=o;const s=new(void 0)(e);e.camera=s;e.raycaster=new(void 0)(e);e.init();o.postproduction.enabled=!0;o.postproduction.customEffects.outlineEnabled=!0;s.controls.setLookAt(12,6,8,0,0,-10);const b=new(void 0)(e,new l(6710886)),C=o.postproduction.customEffects;C.excludedMeshes.push(b.get());const y=new(void 0)(e),a=new(void 0)(e);a.settings.wasm={path:"https://unpkg.com/web-ifc@0.0.50/",absolute:!0};a.settings.webIfc.COORDINATE_TO_ORIGIN=!0;a.settings.webIfc.OPTIMIZE_PROFILES=!0;const I=await fetch("../../../resources/asdf.frag"),E=await I.arrayBuffer(),P=new Uint8Array(E),u=await y.load(P),n=new h(e);n.draw(u);n.setup();n.highlighter.hoverCurve.material.color.set(1,1,1);const{material:i}=n.highlighter.hoverPoints;if(Array.isArray(i)){const t=i[0];"color"in t&&t.color.set(1,1,1)}else"color"in i&&i.color.set(1,1,1);const c=new w(e);c.draw(u);const A=c.uiElement.get("floatingWindow");A.visible=!0;c.onHighlight.add(({mesh:t})=>{n.highlighter.select(t);const f=t.curve.index,d=t.curve.alignment.absolute[f];d.mesh.geometry.computeBoundingSphere(),s.controls.fitToSphere(d.mesh.geometry.boundingSphere,!0)});const r=new p;r.showPanel(2);document.body.append(r.dom);r.dom.style.left="0px";o.onBeforeUpdate.add(()=>r.begin());o.onAfterUpdate.add(()=>r.end());

var Be=Object.defineProperty;var je=(r,n,t)=>n in r?Be(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t;var l=(r,n,t)=>(je(r,typeof n!="symbol"?n+"":n,t),t);import{R as Le,V as h,O as re,Q as I,E as Re,a as me,d as le,L as qe,at as g,B as u,c as ge,K as ye,M as o,aF as ne,g as X,aG as Oe,aH as O,o as Ee,aa as Ie,P as Fe,ab as We,I as Ge,b as Ne}from"./web-ifc-api-eJ7dR4yy.js";import{S as Ue}from"./stats.min-GTpOrGrX.js";import{k as $e,C as Ve,b as Ke}from"./index-CA2cPfXk.js";import{E as _,C as Je,W as Ae,a as et,S as tt,b as nt,c as it}from"./index-BRIP3dnE.js";import{R as pe}from"./index-BhUtnAQ6.js";import"./_commonjsHelpers-Cpj98o6Y.js";const T=new Le,f=new h,C=new h,d=new I,be={X:new h(1,0,0),Y:new h(0,1,0),Z:new h(0,0,1)},he={type:"change"},_e={type:"mouseDown"},Pe={type:"mouseUp",mode:null},Me={type:"objectChange"};class st extends re{constructor(n,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const i=new ct;this._gizmo=i,this.add(i);const s=new pt;this._plane=s,this.add(s);const a=this;function e(w,M){let B=M;Object.defineProperty(a,w,{get:function(){return B!==void 0?B:M},set:function(z){B!==z&&(B=z,s[w]=z,i[w]=z,a.dispatchEvent({type:w+"-changed",value:z}),a.dispatchEvent(he))}}),a[w]=M,s[w]=M,i[w]=M}e("camera",n),e("object",void 0),e("enabled",!0),e("axis",null),e("mode","translate"),e("translationSnap",null),e("rotationSnap",null),e("scaleSnap",null),e("space","world"),e("size",1),e("dragging",!1),e("showX",!0),e("showY",!0),e("showZ",!0);const c=new h,m=new h,v=new I,k=new I,R=new h,q=new I,fe=new h,V=new h,A=new h,D=0,S=new h;e("worldPosition",c),e("worldPositionStart",m),e("worldQuaternion",v),e("worldQuaternionStart",k),e("cameraPosition",R),e("cameraQuaternion",q),e("pointStart",fe),e("pointEnd",V),e("rotationAxis",A),e("rotationAngle",D),e("eye",S),this._offset=new h,this._startNorm=new h,this._endNorm=new h,this._cameraScale=new h,this._parentPosition=new h,this._parentQuaternion=new I,this._parentQuaternionInv=new I,this._parentScale=new h,this._worldScaleStart=new h,this._worldQuaternionInv=new I,this._worldScale=new h,this._positionStart=new h,this._quaternionStart=new I,this._scaleStart=new h,this._getPointer=ot.bind(this),this._onPointerDown=rt.bind(this),this._onPointerHover=at.bind(this),this._onPointerMove=lt.bind(this),this._onPointerUp=ht.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(n){if(this.object===void 0||this.dragging===!0)return;T.setFromCamera(n,this.camera);const t=ce(this._gizmo.picker[this.mode],T);t?this.axis=t.object.name:this.axis=null}pointerDown(n){if(!(this.object===void 0||this.dragging===!0||n.button!==0)&&this.axis!==null){T.setFromCamera(n,this.camera);const t=ce(this._plane,T,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,_e.mode=this.mode,this.dispatchEvent(_e)}}pointerMove(n){const t=this.axis,i=this.mode,s=this.object;let a=this.space;if(i==="scale"?a="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(a="world"),s===void 0||t===null||this.dragging===!1||n.button!==-1)return;T.setFromCamera(n,this.camera);const e=ce(this._plane,T,!0);if(e){if(this.pointEnd.copy(e.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),a==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),a==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(a==="local"&&(s.position.applyQuaternion(d.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),a==="world"&&(s.parent&&s.position.add(f.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(f.setFromMatrixPosition(s.parent.matrixWorld))));else if(i==="scale"){if(t.search("XYZ")!==-1){let c=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(c*=-1),C.set(c,c,c)}else f.copy(this.pointStart),C.copy(this.pointEnd),f.applyQuaternion(this._worldQuaternionInv),C.applyQuaternion(this._worldQuaternionInv),C.divide(f),t.search("X")===-1&&(C.x=1),t.search("Y")===-1&&(C.y=1),t.search("Z")===-1&&(C.z=1);s.scale.copy(this._scaleStart).multiply(C),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const c=20/this.worldPosition.distanceTo(f.setFromMatrixPosition(this.camera.matrixWorld));let m=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(f.copy(this.rotationAxis).cross(this.eye))*c):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(be[t]),f.copy(be[t]),a==="local"&&f.applyQuaternion(this.worldQuaternion),f.cross(this.eye),f.length()===0?m=!0:this.rotationAngle=this._offset.dot(f.normalize())*c),(t==="E"||m)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),a==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(d.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(d.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(he),this.dispatchEvent(Me)}}pointerUp(n){n.button===0&&(this.dragging&&this.axis!==null&&(Pe.mode=this.mode,this.dispatchEvent(Pe)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(n){n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()})}attach(n){return this.object=n,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(he),this.dispatchEvent(Me),this.pointStart.copy(this.pointEnd))}getRaycaster(){return T}getMode(){return this.mode}setMode(n){this.mode=n}setTranslationSnap(n){this.translationSnap=n}setRotationSnap(n){this.rotationSnap=n}setScaleSnap(n){this.scaleSnap=n}setSize(n){this.size=n}setSpace(n){this.space=n}}function ot(r){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:r.button};{const n=this.domElement.getBoundingClientRect();return{x:(r.clientX-n.left)/n.width*2-1,y:-(r.clientY-n.top)/n.height*2+1,button:r.button}}}function at(r){if(this.enabled)switch(r.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(r));break}}function rt(r){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(r)),this.pointerDown(this._getPointer(r)))}function lt(r){this.enabled&&this.pointerMove(this._getPointer(r))}function ht(r){this.enabled&&(this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(r)))}function ce(r,n,t){const i=n.intersectObject(r,!0);for(let s=0;s<i.length;s++)if(i[s].object.visible||t)return i[s];return!1}const ie=new Re,p=new h(0,1,0),xe=new h(0,0,0),ve=new me,se=new I,ae=new I,E=new h,Se=new me,G=new h(1,0,0),Z=new h(0,1,0),N=new h(0,0,1),oe=new h,F=new h,W=new h;class ct extends re{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const n=new le({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new qe({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=n.clone();i.opacity=.15;const s=t.clone();s.opacity=.5;const a=n.clone();a.color.setHex(16711680);const e=n.clone();e.color.setHex(65280);const c=n.clone();c.color.setHex(255);const m=n.clone();m.color.setHex(16711680),m.opacity=.5;const v=n.clone();v.color.setHex(65280),v.opacity=.5;const k=n.clone();k.color.setHex(255),k.opacity=.5;const R=n.clone();R.opacity=.25;const q=n.clone();q.color.setHex(16776960),q.opacity=.25,n.clone().color.setHex(16776960);const V=n.clone();V.color.setHex(7895160);const A=new g(0,.04,.1,12);A.translate(0,.05,0);const D=new u(.08,.08,.08);D.translate(0,.04,0);const S=new ge;S.setAttribute("position",new ye([0,0,0,1,0,0],3));const w=new g(.0075,.0075,.5,3);w.translate(0,.25,0);function M(b,K){const x=new O(b,.0075,3,64,K*Math.PI*2);return x.rotateY(Math.PI/2),x.rotateX(Math.PI/2),x}function B(){const b=new ge;return b.setAttribute("position",new ye([0,0,0,1,1,1],3)),b}const z={X:[[new o(A,a),[.5,0,0],[0,0,-Math.PI/2]],[new o(A,a),[-.5,0,0],[0,0,Math.PI/2]],[new o(w,a),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new o(A,e),[0,.5,0]],[new o(A,e),[0,-.5,0],[Math.PI,0,0]],[new o(w,e)]],Z:[[new o(A,c),[0,0,.5],[Math.PI/2,0,0]],[new o(A,c),[0,0,-.5],[-Math.PI/2,0,0]],[new o(w,c),null,[Math.PI/2,0,0]]],XYZ:[[new o(new ne(.1,0),R.clone()),[0,0,0]]],XY:[[new o(new u(.15,.15,.01),k.clone()),[.15,.15,0]]],YZ:[[new o(new u(.15,.15,.01),m.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new o(new u(.15,.15,.01),v.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},Ye={X:[[new o(new g(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new o(new g(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new o(new g(.2,0,.6,4),i),[0,.3,0]],[new o(new g(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new o(new g(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new o(new g(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new o(new ne(.2,0),i)]],XY:[[new o(new u(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new o(new u(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new o(new u(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},Qe={START:[[new o(new ne(.01,2),s),null,null,null,"helper"]],END:[[new o(new ne(.01,2),s),null,null,null,"helper"]],DELTA:[[new X(B(),s),null,null,null,"helper"]],X:[[new X(S,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new X(S,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new X(S,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},Xe={XYZE:[[new o(M(.5,1),V),null,[0,Math.PI/2,0]]],X:[[new o(M(.5,.5),a)]],Y:[[new o(M(.5,.5),e),null,[0,0,-Math.PI/2]]],Z:[[new o(M(.5,.5),c),null,[0,Math.PI/2,0]]],E:[[new o(M(.75,1),q),null,[0,Math.PI/2,0]]]},Ce={AXIS:[[new X(S,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},ze={XYZE:[[new o(new Oe(.25,10,8),i)]],X:[[new o(new O(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new o(new O(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new o(new O(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new o(new O(.75,.1,2,24),i)]]},Te={X:[[new o(D,a),[.5,0,0],[0,0,-Math.PI/2]],[new o(w,a),[0,0,0],[0,0,-Math.PI/2]],[new o(D,a),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new o(D,e),[0,.5,0]],[new o(w,e)],[new o(D,e),[0,-.5,0],[0,0,Math.PI]]],Z:[[new o(D,c),[0,0,.5],[Math.PI/2,0,0]],[new o(w,c),[0,0,0],[Math.PI/2,0,0]],[new o(D,c),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new o(new u(.15,.15,.01),k),[.15,.15,0]]],YZ:[[new o(new u(.15,.15,.01),m),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new o(new u(.15,.15,.01),v),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new o(new u(.1,.1,.1),R.clone())]]},Ze={X:[[new o(new g(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new o(new g(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new o(new g(.2,0,.6,4),i),[0,.3,0]],[new o(new g(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new o(new g(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new o(new g(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new o(new u(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new o(new u(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new o(new u(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new o(new u(.2,.2,.2),i),[0,0,0]]]},He={X:[[new X(S,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new X(S,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new X(S,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function Y(b){const K=new re;for(const x in b)for(let j=b[x].length;j--;){const y=b[x][j][0].clone(),J=b[x][j][1],ee=b[x][j][2],te=b[x][j][3],ke=b[x][j][4];y.name=x,y.tag=ke,J&&y.position.set(J[0],J[1],J[2]),ee&&y.rotation.set(ee[0],ee[1],ee[2]),te&&y.scale.set(te[0],te[1],te[2]),y.updateMatrix();const we=y.geometry.clone();we.applyMatrix4(y.matrix),y.geometry=we,y.renderOrder=1/0,y.position.set(0,0,0),y.rotation.set(0,0,0),y.scale.set(1,1,1),K.add(y)}return K}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=Y(z)),this.add(this.gizmo.rotate=Y(Xe)),this.add(this.gizmo.scale=Y(Te)),this.add(this.picker.translate=Y(Ye)),this.add(this.picker.rotate=Y(ze)),this.add(this.picker.scale=Y(Ze)),this.add(this.helper.translate=Y(Qe)),this.add(this.helper.rotate=Y(Ce)),this.add(this.helper.scale=Y(He)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(n){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:ae;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let a=0;a<s.length;a++){const e=s[a];e.visible=!0,e.rotation.set(0,0,0),e.position.copy(this.worldPosition);let c;if(this.camera.isOrthographicCamera?c=(this.camera.top-this.camera.bottom)/this.camera.zoom:c=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),e.scale.set(1,1,1).multiplyScalar(c*this.size/4),e.tag==="helper"){e.visible=!1,e.name==="AXIS"?(e.visible=!!this.axis,this.axis==="X"&&(d.setFromEuler(ie.set(0,0,0)),e.quaternion.copy(i).multiply(d),Math.abs(p.copy(G).applyQuaternion(i).dot(this.eye))>.9&&(e.visible=!1)),this.axis==="Y"&&(d.setFromEuler(ie.set(0,0,Math.PI/2)),e.quaternion.copy(i).multiply(d),Math.abs(p.copy(Z).applyQuaternion(i).dot(this.eye))>.9&&(e.visible=!1)),this.axis==="Z"&&(d.setFromEuler(ie.set(0,Math.PI/2,0)),e.quaternion.copy(i).multiply(d),Math.abs(p.copy(N).applyQuaternion(i).dot(this.eye))>.9&&(e.visible=!1)),this.axis==="XYZE"&&(d.setFromEuler(ie.set(0,Math.PI/2,0)),p.copy(this.rotationAxis),e.quaternion.setFromRotationMatrix(ve.lookAt(xe,p,Z)),e.quaternion.multiply(d),e.visible=this.dragging),this.axis==="E"&&(e.visible=!1)):e.name==="START"?(e.position.copy(this.worldPositionStart),e.visible=this.dragging):e.name==="END"?(e.position.copy(this.worldPosition),e.visible=this.dragging):e.name==="DELTA"?(e.position.copy(this.worldPositionStart),e.quaternion.copy(this.worldQuaternionStart),f.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),f.applyQuaternion(this.worldQuaternionStart.clone().invert()),e.scale.copy(f),e.visible=this.dragging):(e.quaternion.copy(i),this.dragging?e.position.copy(this.worldPositionStart):e.position.copy(this.worldPosition),this.axis&&(e.visible=this.axis.search(e.name)!==-1));continue}e.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(e.name==="X"&&Math.abs(p.copy(G).applyQuaternion(i).dot(this.eye))>.99&&(e.scale.set(1e-10,1e-10,1e-10),e.visible=!1),e.name==="Y"&&Math.abs(p.copy(Z).applyQuaternion(i).dot(this.eye))>.99&&(e.scale.set(1e-10,1e-10,1e-10),e.visible=!1),e.name==="Z"&&Math.abs(p.copy(N).applyQuaternion(i).dot(this.eye))>.99&&(e.scale.set(1e-10,1e-10,1e-10),e.visible=!1),e.name==="XY"&&Math.abs(p.copy(N).applyQuaternion(i).dot(this.eye))<.2&&(e.scale.set(1e-10,1e-10,1e-10),e.visible=!1),e.name==="YZ"&&Math.abs(p.copy(G).applyQuaternion(i).dot(this.eye))<.2&&(e.scale.set(1e-10,1e-10,1e-10),e.visible=!1),e.name==="XZ"&&Math.abs(p.copy(Z).applyQuaternion(i).dot(this.eye))<.2&&(e.scale.set(1e-10,1e-10,1e-10),e.visible=!1)):this.mode==="rotate"&&(se.copy(i),p.copy(this.eye).applyQuaternion(d.copy(i).invert()),e.name.search("E")!==-1&&e.quaternion.setFromRotationMatrix(ve.lookAt(this.eye,xe,Z)),e.name==="X"&&(d.setFromAxisAngle(G,Math.atan2(-p.y,p.z)),d.multiplyQuaternions(se,d),e.quaternion.copy(d)),e.name==="Y"&&(d.setFromAxisAngle(Z,Math.atan2(p.x,p.z)),d.multiplyQuaternions(se,d),e.quaternion.copy(d)),e.name==="Z"&&(d.setFromAxisAngle(N,Math.atan2(p.y,p.x)),d.multiplyQuaternions(se,d),e.quaternion.copy(d))),e.visible=e.visible&&(e.name.indexOf("X")===-1||this.showX),e.visible=e.visible&&(e.name.indexOf("Y")===-1||this.showY),e.visible=e.visible&&(e.name.indexOf("Z")===-1||this.showZ),e.visible=e.visible&&(e.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),e.material._color=e.material._color||e.material.color.clone(),e.material._opacity=e.material._opacity||e.material.opacity,e.material.color.copy(e.material._color),e.material.opacity=e.material._opacity,this.enabled&&this.axis&&(e.name===this.axis||this.axis.split("").some(function(m){return e.name===m}))&&(e.material.color.setHex(16776960),e.material.opacity=1)}super.updateMatrixWorld(n)}}class pt extends o{constructor(){super(new Ee(1e5,1e5,2,2),new le({visible:!1,wireframe:!0,side:Ie,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(n){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),oe.copy(G).applyQuaternion(t==="local"?this.worldQuaternion:ae),F.copy(Z).applyQuaternion(t==="local"?this.worldQuaternion:ae),W.copy(N).applyQuaternion(t==="local"?this.worldQuaternion:ae),p.copy(F),this.mode){case"translate":case"scale":switch(this.axis){case"X":p.copy(this.eye).cross(oe),E.copy(oe).cross(p);break;case"Y":p.copy(this.eye).cross(F),E.copy(F).cross(p);break;case"Z":p.copy(this.eye).cross(W),E.copy(W).cross(p);break;case"XY":E.copy(W);break;case"YZ":E.copy(oe);break;case"XZ":p.copy(W),E.copy(F);break;case"XYZ":case"E":E.set(0,0,0);break}break;case"rotate":default:E.set(0,0,0)}E.length()===0?this.quaternion.copy(this.cameraQuaternion):(Se.lookAt(f.set(0,0,0),E,p),this.quaternion.setFromRotationMatrix(Se)),super.updateMatrixWorld(n)}}class ue{constructor(n,t,i,s,a,e=5,c=!0){l(this,"onDraggingStarted",new _);l(this,"onDraggingEnded",new _);l(this,"onDisposed",new _);l(this,"normal");l(this,"origin");l(this,"three",new Fe);l(this,"_helper");l(this,"_visible",!0);l(this,"_enabled",!0);l(this,"components");l(this,"world");l(this,"_controlsActive",!1);l(this,"_arrowBoundBox",new o);l(this,"_planeMesh");l(this,"_controls");l(this,"_hiddenMaterial",new le({visible:!1}));l(this,"update",async()=>{this._enabled&&this.three.setFromNormalAndCoplanarPoint(this.normal,this._helper.position)});l(this,"changeDrag",n=>{this._visible=!n.value,this.preventCameraMovement(),this.notifyDraggingChanged(n)});if(this.components=n,this.world=t,!t.renderer)throw new Error("The given world must have a renderer!");this.normal=s,this.origin=i,t.renderer.setPlane(!0,this.three),this._planeMesh=ue.newPlaneMesh(e,a),this._helper=this.newHelper(),this._controls=this.newTransformControls(),this.three.setFromNormalAndCoplanarPoint(s,i),c&&this.toggleControls(!0)}get enabled(){return this._enabled}set enabled(n){if(!this.world.renderer)throw new Error("No renderer found for clipping plane!");this._enabled=n,this.world.renderer.setPlane(n,this.three)}get visible(){return this._visible}set visible(n){this._visible=n,this._controls.visible=n,this._helper.visible=n,this.toggleControls(n)}get meshes(){return[this._planeMesh,this._arrowBoundBox]}get planeMaterial(){return this._planeMesh.material}set planeMaterial(n){this._planeMesh.material=n}get size(){return this._planeMesh.scale.x}set size(n){this._planeMesh.scale.set(n,n,n)}get helper(){return this._helper}async setFromNormalAndCoplanarPoint(n,t){this.reset(),this.normal.equals(n)||(this.normal.copy(n),this._helper.lookAt(n)),this.origin.copy(t),this._helper.position.copy(t),this._helper.updateMatrix(),await this.update()}dispose(){this._enabled=!1,this.onDraggingStarted.reset(),this.onDraggingEnded.reset(),this._helper.removeFromParent(),this.world.renderer&&this.world.renderer.setPlane(!1,this.three),this._arrowBoundBox.removeFromParent(),this._arrowBoundBox.geometry.dispose(),this._planeMesh.geometry.dispose(),this._controls.removeFromParent(),this._controls.dispose(),this.onDisposed.trigger(),this.onDisposed.reset()}reset(){const n=new h(1,0,0),t=new h;this.normal.equals(n)||(this.normal.copy(n),this._helper.lookAt(n)),this.origin.copy(t),this._helper.position.copy(t),this._helper.updateMatrix()}toggleControls(n){if(n){if(this._controlsActive)return;this._controls.addEventListener("change",this.update),this._controls.addEventListener("dragging-changed",this.changeDrag)}else this._controls.removeEventListener("change",this.update),this._controls.removeEventListener("dragging-changed",this.changeDrag);this._controlsActive=n}newTransformControls(){if(!this.world.renderer)throw new Error("No renderer found for clipping plane!");const n=this.world.camera.three,t=this.world.renderer.three.domElement,i=new st(n,t);return this.initializeControls(i),this.world.scene.three.add(i),i}initializeControls(n){n.attach(this._helper),n.showX=!1,n.showY=!1,n.setSpace("local"),this.createArrowBoundingBox(),n.children[0].children[0].add(this._arrowBoundBox)}createArrowBoundingBox(){this._arrowBoundBox.geometry=new g(.18,.18,1.2),this._arrowBoundBox.material=this._hiddenMaterial,this._arrowBoundBox.rotateX(Math.PI/2),this._arrowBoundBox.updateMatrix(),this._arrowBoundBox.geometry.applyMatrix4(this._arrowBoundBox.matrix)}notifyDraggingChanged(n){n.value?this.onDraggingStarted.trigger():this.onDraggingEnded.trigger()}preventCameraMovement(){this.world.camera.enabled=this._visible}newHelper(){const n=new re;return n.lookAt(this.normal),n.position.copy(this.origin),this._planeMesh.position.z+=.01,n.add(this._planeMesh),this.world.scene.three.add(n),n}static newPlaneMesh(n,t){const i=new Ee(1),s=new o(i,t);return s.scale.set(n,n,n),s}}const U=class U extends Je{constructor(t){super(t);l(this,"onAfterCreate",new _);l(this,"onAfterDelete",new _);l(this,"onBeforeDrag",new _);l(this,"onAfterDrag",new _);l(this,"onBeforeCreate",new _);l(this,"onBeforeCancel",new _);l(this,"onAfterCancel",new _);l(this,"onBeforeDelete",new _);l(this,"onDisposed",new _);l(this,"orthogonalY",!1);l(this,"toleranceOrthogonalY",.7);l(this,"list",[]);l(this,"PlaneType");l(this,"_material",new le({color:12255487,side:Ie,transparent:!0,opacity:.2}));l(this,"_size",5);l(this,"_enabled",!1);l(this,"_visible",!1);l(this,"_onStartDragging",()=>{this.onBeforeDrag.trigger()});l(this,"_onEndDragging",()=>{this.onAfterDrag.trigger()});this.components.add(U.uuid,this),this.PlaneType=ue}get enabled(){return this._enabled}set enabled(t){this._enabled=t;for(const i of this.list)i.enabled=t;this.updateMaterialsAndPlanes()}get visible(){return this._visible}set visible(t){this._visible=t;for(const i of this.list)i.visible=t}get material(){return this._material}set material(t){this._material=t;for(const i of this.list)i.planeMaterial=t}get size(){return this._size}set size(t){this._size=t;for(const i of this.list)i.size=t}endCreation(){}cancelCreation(){}dispose(){this._enabled=!1;for(const t of this.list)t.dispose();this.list.length=0,this._material.dispose(),this.onBeforeCreate.reset(),this.onBeforeCancel.reset(),this.onBeforeDelete.reset(),this.onBeforeDrag.reset(),this.onAfterCreate.reset(),this.onAfterCancel.reset(),this.onAfterDelete.reset(),this.onAfterDrag.reset(),this.onDisposed.trigger(U.uuid),this.onDisposed.reset()}create(t){if(!this.enabled)return;const a=this.components.get(pe).get(t).castRay();a&&this.createPlaneFromIntersection(t,a)}createFromNormalAndCoplanarPoint(t,i,s){const a=this.newPlane(t,s,i);return this.updateMaterialsAndPlanes(),a}delete(t,i){this.enabled&&(i||(i=this.pickPlane(t)),i&&this.deletePlane(i))}deleteAll(){for(;this.list.length>0;){const t=this.list[0];this.delete(t.world,t)}}deletePlane(t){const i=this.list.indexOf(t);if(i!==-1){if(this.list.splice(i,1),!t.world.renderer)throw new Error("Renderer not found for this plane's world!");t.world.renderer.setPlane(!1,t.three),t.dispose(),this.updateMaterialsAndPlanes(),this.onAfterDelete.trigger(t)}}pickPlane(t){const s=this.components.get(pe).get(t),a=this.getAllPlaneMeshes(),e=s.castRay(a);if(e){const c=e.object;return this.list.find(m=>m.meshes.includes(c))}}getAllPlaneMeshes(){const t=[];for(const i of this.list)t.push(...i.meshes);return t}createPlaneFromIntersection(t,i){var m;if(!t.renderer)throw new Error("The given world must have a renderer!");const s=i.point.distanceTo(new h(0,0,0)),a=(m=i.face)==null?void 0:m.normal;if(!s||!a)return;const e=this.getWorldNormal(i,a),c=this.newPlane(t,i.point,e.negate());c.size=this._size,t.renderer.setPlane(!0,c.three),this.updateMaterialsAndPlanes()}getWorldNormal(t,i){const s=t.object;let a=t.object.matrixWorld.clone();if(s instanceof Ge&&t.instanceId!==void 0){const v=new me;s.getMatrixAt(t.instanceId,v),a=v.multiply(a)}const c=new We().getNormalMatrix(a),m=i.clone().applyMatrix3(c).normalize();return this.normalizePlaneDirectionY(m),m}normalizePlaneDirectionY(t){this.orthogonalY&&(t.y>this.toleranceOrthogonalY&&(t.x=0,t.y=1,t.z=0),t.y<-this.toleranceOrthogonalY&&(t.x=0,t.y=-1,t.z=0))}newPlane(t,i,s){const a=this.newPlaneInstance(t,i,s);return a.onDraggingStarted.add(this._onStartDragging),a.onDraggingEnded.add(this._onEndDragging),this.list.push(a),this.onAfterCreate.trigger(a),a}newPlaneInstance(t,i,s){return new this.PlaneType(this.components,t,i,s,this._material)}updateMaterialsAndPlanes(){const t=this.components.get(Ae);for(const[i,s]of t.list){if(!s.renderer)continue;s.renderer.updateClippingPlanes();const{clippingPlanes:a}=s.renderer;for(const e of s.meshes)if(Array.isArray(e.material))for(const c of e.material)c.clippingPlanes=a;else e.material.clippingPlanes=a}}};l(U,"uuid","66290bc5-18c4-4cd1-9379-2e17a0617611");let de=U;const De=document.getElementById("container"),H=new et,dt=H.get(Ae),P=dt.create();P.scene=new tt(H);P.renderer=new nt(H,De);P.camera=new it(H);H.init();P.camera.controls.setLookAt(10,10,10,0,0,0);P.scene.setup();const mt=new u(3,3,3),ut=new Ne({color:"#6528D7"}),L=new o(mt,ut);L.position.set(0,1.5,0);P.scene.three.add(L);P.meshes.add(L);const ft=H.get(pe);ft.get(P);const Q=new de(H);Q.enabled=!0;De.ondblclick=()=>Q.create(P);window.onkeydown=r=>{(r.code==="Delete"||r.code==="Backspace")&&Q.delete(P)};const $=new Ue;$.showPanel(2);document.body.append($.dom);$.dom.style.left="0px";P.renderer.onBeforeUpdate.add(()=>$.begin());P.renderer.onAfterUpdate.add(()=>$.end());$e.registerComponents();const wt=Ve.create(()=>Ke`
    <bim-panel label="Clipper Tutorial" style="position: fixed; top: 5px; right: 5px" active>
          <bim-panel-section label="Commands" style="padding-top: 10px">
      
        <bim-label label="Double click: Create clipping plane"></bim-label>
        <bim-label label="Delete key: Delete clipping plane"></bim-label>
       
        
      </bim-panel-section>
      <bim-panel-section label="Others" style="padding-top: 10px">
          
        <bim-checkbox label="Clipper enabled" checked 
          @change="${({target:r})=>{Q.enabled=r.value}}">
        </bim-checkbox>
        
        <bim-checkbox label="Clipper visible" checked 
          @change="${({target:r})=>{Q.visible=r.value}}">
        </bim-checkbox>
      
        <bim-color-input 
          label="Planes Color" color="#202932" 
          @input="${({target:r})=>{Q.material.color.set(r.color)}}">
        </bim-color-input>
        
        <bim-number-input 
          slider step="0.01" label="Planes opacity" value="0.2" min="0.1" max="1"
          @change="${({target:r})=>{Q.material.opacity=r.value}}">
        </bim-number-input>
        
        <bim-number-input 
          slider step="0.1" label="Planes size" value="5" min="2" max="10"
          @change="${({target:r})=>{Q.size=r.value}}">
        </bim-number-input>
        
        <bim-button 
          label="Delete all" 
          @click="${()=>{Q.deleteAll()}}">  
        </bim-button>        
        
        <bim-button 
          label="Rotate cube" 
          @click="${()=>{L.rotation.x=2*Math.PI*Math.random(),L.rotation.y=2*Math.PI*Math.random(),L.rotation.z=2*Math.PI*Math.random()}}">  
        </bim-button>
       
        
      </bim-panel-section>
    </bim-panel>
    `);document.body.append(wt);

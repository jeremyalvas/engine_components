var A=Object.defineProperty;var I=(d,t,e)=>t in d?A(d,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[t]=e;var m=(d,t,e)=>(I(d,typeof t!="symbol"?t+"":t,e),e);import{az as L,a as y,a5 as R,a9 as S,_ as C,L as D,ao as G,e as U,ap as F,aq as T}from"./web-ifc-api-BiYij3qq.js";class N{constructor(){m(this,"factor",1);m(this,"complement",1)}apply(t){const s=this.getScaleMatrix().multiply(t);t.copy(s)}setUp(t){var n;this.factor=1;const e=this.getLengthUnits(t);if(!e)return;const s=e==null,o=e.Name===void 0||e.Name===null;s||o||(e.Name.value==="FOOT"?this.factor=.3048:((n=e.Prefix)==null?void 0:n.value)==="MILLI"&&(this.complement=.001))}getLengthUnits(t){try{const s=t.GetLineIDsWithType(0,L).get(0),o=t.GetLine(0,s);for(const n of o.Units){if(!n||n.value===null||n.value===void 0)continue;const u=t.GetLine(0,n.value);if(u.UnitType&&u.UnitType.value==="LENGTHUNIT")return u}return null}catch{return console.log("Could not get units"),null}}getScaleMatrix(){const t=this.factor;return new y().fromArray([t,0,0,0,0,t,0,0,0,0,t,0,0,0,0,1])}}class O{constructor(){m(this,"itemsByFloor",{});m(this,"_units",new N)}setUp(t){this._units.setUp(t),this.cleanUp();try{const e=t.GetLineIDsWithType(0,R),s=new Set,o=t.GetLineIDsWithType(0,S);for(let r=0;r<o.size();r++)s.add(o.get(r));const n=t.GetLineIDsWithType(0,C),u=n.size();for(let r=0;r<u;r++){const f=n.get(r),i=t.GetLine(0,f);if(!i||!i.RelatingObject||!i.RelatedObjects)continue;const a=i.RelatingObject.value,g=i.RelatedObjects;for(const l of g){const c=l.value;s.has(c)&&(this.itemsByFloor[c]=a)}}const h={},p=e.size();for(let r=0;r<p;r++){const f=e.get(r),i=t.GetLine(0,f);if(!i||!i.RelatingStructure||!i.RelatedElements)continue;const a=i.RelatingStructure.value,g=i.RelatedElements;if(s.has(a))for(const l of g){h[a]||(h[a]=[]);const c=l.value;h[a].push(c)}else for(const l of g){const c=l.value;this.itemsByFloor[c]=a}}for(const r in h){const f=this.itemsByFloor[r];if(f!==void 0){const i=h[r];for(const a of i)this.itemsByFloor[a]=f}}for(let r=0;r<u;r++){const f=n.get(r),i=t.GetLine(0,f);if(!i||!i.RelatingObject||!i.RelatedObjects)continue;const a=i.RelatingObject.value,g=i.RelatedObjects;for(const l of g){const c=l.value,v=this.itemsByFloor[a];v!==void 0&&(this.itemsByFloor[c]=v)}}}catch{console.log("Could not get floors.")}}cleanUp(){this.itemsByFloor={}}}class z{constructor(){m(this,"defLineMat",new D({color:16777215}))}read(t){const e=t.GetAllAlignments(0),s=t.GetAllCrossSections2D(0),o=t.GetAllCrossSections3D(0),n={IfcAlignment:e,IfcCrossSection2D:s,IfcCrossSection3D:o};return this.get(n)}get(t){if(t.IfcAlignment){const e=new Map;for(const s of t.IfcAlignment){const o=new G;o.absolute=this.getCurves(s.curve3D,o),o.horizontal=this.getCurves(s.horizontal,o),o.vertical=this.getCurves(s.vertical,o),e.set(e.size,o)}return{alignments:e,coordinationMatrix:new y}}}getCurves(t,e){const s=[];let o=0;for(const n of t){const u={};if(n.data)for(const a of n.data){const[g,l]=a.split(": "),c=parseFloat(l);u[g]=c||l}const{points:h}=n,p=new Float32Array(h.length*3);for(let a=0;a<h.length;a++){const{x:g,y:l,z:c}=h[a];p[a*3]=g,p[a*3+1]=l,p[a*3+2]=c||0}const r=new U(p,3),f=new F;f.setAttribute("position",r);const i=new T(o,u,e,f,this.defLineMat);s.push(i.curve),o++}return s}}class B{get(t,e){let s="";const o=t.GetHeaderLine(0,e)||"";if(!o)return s;for(const n of o.arguments)if(n!=null)if(Array.isArray(n))for(const u of n)s+=`${u.value}|`;else s+=`${n.value}|`;return s}}export{z as C,B as I,O as S};

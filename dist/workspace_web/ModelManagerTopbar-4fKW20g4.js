import{f as Y,r as m,j as n,g as $,e as Se,a4 as X,b as $e,o as Ve,k as Ue,h as T,a9 as re,af as He,N as _e,ag as Ye,Q as be,S as Ce,T as qe,Z as Qe,M as Je,O as Xe,R as Ze,P as et,_ as tt}from"./input.js";import{au as st,ao as nt,av as H,o as V,B as oe,F as B,l as D,m as ie,aw as ke,ax as pe,ad as Ie,k as q,z as ot,H as W,n as Z,ay as Le,j as Ee,az as it,aA as Te,a0 as rt,a1 as at,a2 as lt,a3 as ct,a4 as dt,aB as Ae,aC as te,an as Ne,aD as ht,aE as ut,ae as ft,a6 as pt}from"./App-sgH6j00M.js";import{I as De,G as mt,C as gt}from"./chunk-JARCRF6W-swAlFRrB.js";import{app as z}from"/scripts/app.js";import{api as J}from"/scripts/api.js";import{S as ee}from"./chunk-3RSXBRAN-hQn4Wngd.js";var Fe=Y(function(e,s){const{spacing:o="0.5rem",spacingX:r,spacingY:i,children:a,justify:c,direction:l,align:d,className:h,shouldWrapChildren:f,...u}=e,g=m.useMemo(()=>f?m.Children.map(a,(p,x)=>n.jsx(ae,{children:p},x)):a,[a,f]);return n.jsx($.div,{ref:s,className:Se("chakra-wrap",h),...u,children:n.jsx($.ul,{className:"chakra-wrap__list",__css:{display:"flex",flexWrap:"wrap",justifyContent:c,alignItems:d,flexDirection:l,listStyleType:"none",gap:o,columnGap:r,rowGap:i,padding:"0"},children:g})})});Fe.displayName="Wrap";var ae=Y(function(e,s){const{className:o,...r}=e;return n.jsx($.li,{ref:s,__css:{display:"flex",alignItems:"flex-start"},className:Se("chakra-wrap__listitem",o),...r})});ae.displayName="WrapItem";function me(t){return nt(t,e=>e==="auto"?"auto":`span ${e}/span ${e}`)}var Pe=Y(function(e,s){const{area:o,colSpan:r,colStart:i,colEnd:a,rowEnd:c,rowSpan:l,rowStart:d,...h}=e,f=st({gridArea:o,gridColumn:me(r),gridRow:me(l),gridColumnStart:i,gridColumnEnd:a,gridRowStart:d,gridRowEnd:c});return n.jsx($.div,{ref:s,__css:f,...h})});Pe.displayName="GridItem";function xt(t,e,s){return(t-e)*100/(s-e)}X({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}});X({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}});var yt=X({"0%":{left:"-40%"},"100%":{left:"100%"}}),vt=X({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function wt(t){const{value:e=0,min:s,max:o,valueText:r,getValueText:i,isIndeterminate:a,role:c="progressbar"}=t,l=xt(e,s,o);return{bind:{"data-indeterminate":a?"":void 0,"aria-valuemax":o,"aria-valuemin":s,"aria-valuenow":a?void 0:e,"aria-valuetext":(()=>{if(e!=null)return typeof i=="function"?i(e,l):r})(),role:c},percent:l,value:e}}var[jt,Mt]=$e({name:"ProgressStylesContext",errorMessage:`useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `}),St=Y((t,e)=>{const{min:s,max:o,value:r,isIndeterminate:i,role:a,...c}=t,l=wt({value:r,min:s,max:o,isIndeterminate:i,role:a}),h={height:"100%",...Mt().filledTrack};return n.jsx($.div,{ref:e,style:{width:`${l.percent}%`,...c.style},...l.bind,...c,__css:h})}),Oe=Y((t,e)=>{var s;const{value:o,min:r=0,max:i=100,hasStripe:a,isAnimated:c,children:l,borderRadius:d,isIndeterminate:h,"aria-label":f,"aria-labelledby":u,"aria-valuetext":g,title:p,role:x,...y}=Ve(t),j=Ue("Progress",t),C=d??((s=j.track)==null?void 0:s.borderRadius),b={animation:`${vt} 1s linear infinite`},F={...!h&&a&&c&&b,...h&&{position:"absolute",willChange:"left",minWidth:"50%",animation:`${yt} 1s ease infinite normal none running`}},k={overflow:"hidden",position:"relative",...j.track};return n.jsx($.div,{ref:e,borderRadius:C,__css:k,...y,children:n.jsxs(jt,{value:j,children:[n.jsx(St,{"aria-label":f,"aria-labelledby":u,"aria-valuetext":g,min:r,max:i,value:o,isIndeterminate:h,css:F,borderRadius:C,title:p,role:x}),l]})})});Oe.displayName="Progress";function K(t){return Array.isArray?Array.isArray(t):Re(t)==="[object Array]"}const _t=1/0;function bt(t){return t==null?"":function(e){if(typeof e=="string")return e;let s=e+"";return s=="0"&&1/e==-_t?"-0":s}(t)}function P(t){return typeof t=="string"}function ze(t){return typeof t=="number"}function Ct(t){return t===!0||t===!1||function(e){return function(s){return typeof s=="object"}(e)&&e!==null}(t)&&Re(t)=="[object Boolean]"}function N(t){return t!=null}function se(t){return!t.trim().length}function Re(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const kt=t=>`Missing ${t} property in key`,It=t=>`Property 'weight' in key '${t}' must be a positive integer`,ge=Object.prototype.hasOwnProperty;class Lt{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(o=>{let r=Be(o);this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(o=>{o.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Be(t){let e=null,s=null,o=null,r=1,i=null;if(P(t)||K(t))o=t,e=xe(t),s=ye(t);else{if(!ge.call(t,"name"))throw new Error(kt("name"));const a=t.name;if(o=a,ge.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(It(a));e=xe(a),s=ye(a),i=t.getFn}return{path:e,id:s,weight:r,src:o,getFn:i}}function xe(t){return K(t)?t:t.split(".")}function ye(t){return K(t)?t.join("."):t}var M={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,getFn:function(t,e){let s=[],o=!1;const r=(i,a,c)=>{if(N(i))if(a[c]){const l=i[a[c]];if(!N(l))return;if(c===a.length-1&&(P(l)||ze(l)||Ct(l)))s.push(bt(l));else if(K(l)){o=!0;for(let d=0,h=l.length;d<h;d+=1)r(l[d],a,c+1)}else a.length&&r(l,a,c+1)}else s.push(i)};return r(t,P(e)?e.split("."):e,0),o?s:s[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};const Et=/[^ ]+/g;class le{constructor({getFn:e=M.getFn,fieldNormWeight:s=M.fieldNormWeight}={}){this.norm=function(o=1,r=3){const i=new Map,a=Math.pow(10,r);return{get(c){const l=c.match(Et).length;if(i.has(l))return i.get(l);const d=1/Math.pow(l,.5*o),h=parseFloat(Math.round(d*a)/a);return i.set(l,h),h},clear(){i.clear()}}}(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,o)=>{this._keysMap[s.id]=o})}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,P(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();P(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,o=this.size();s<o;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!N(e)||se(e))return;let o={v:e,i:s,n:this.norm.get(e)};this.records.push(o)}_addObject(e,s){let o={i:s,$:{}};this.keys.forEach((r,i)=>{let a=r.getFn?r.getFn(e):this.getFn(e,r.path);if(N(a)){if(K(a)){let c=[];const l=[{nestedArrIndex:-1,value:a}];for(;l.length;){const{nestedArrIndex:d,value:h}=l.pop();if(N(h))if(P(h)&&!se(h)){let f={v:h,i:d,n:this.norm.get(h)};c.push(f)}else K(h)&&h.forEach((f,u)=>{l.push({nestedArrIndex:u,value:f})})}o.$[i]=c}else if(P(a)&&!se(a)){let c={v:a,n:this.norm.get(a)};o.$[i]=c}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function We(t,e,{getFn:s=M.getFn,fieldNormWeight:o=M.fieldNormWeight}={}){const r=new le({getFn:s,fieldNormWeight:o});return r.setKeys(t.map(Be)),r.setSources(e),r.create(),r}function Q(t,{errors:e=0,currentLocation:s=0,expectedLocation:o=0,distance:r=M.distance,ignoreLocation:i=M.ignoreLocation}={}){const a=e/t.length;if(i)return a;const c=Math.abs(o-s);return r?a+c/r:c?1:a}const R=32;function Tt(t,e,s,{location:o=M.location,distance:r=M.distance,threshold:i=M.threshold,findAllMatches:a=M.findAllMatches,minMatchCharLength:c=M.minMatchCharLength,includeMatches:l=M.includeMatches,ignoreLocation:d=M.ignoreLocation}={}){if(e.length>R)throw new Error(`Pattern length exceeds max of ${R}.`);const h=e.length,f=t.length,u=Math.max(0,Math.min(o,f));let g=i,p=u;const x=c>1||l,y=x?Array(f):[];let j;for(;(j=t.indexOf(e,p))>-1;){let k=Q(e,{currentLocation:j,expectedLocation:u,distance:r,ignoreLocation:d});if(g=Math.min(k,g),p=j+h,x){let I=0;for(;I<h;)y[j+I]=1,I+=1}}p=-1;let C=[],b=1,A=h+f;const G=1<<h-1;for(let k=0;k<h;k+=1){let I=0,L=A;for(;I<L;)Q(e,{errors:k,currentLocation:u+L,expectedLocation:u,distance:r,ignoreLocation:d})<=g?I=L:A=L,L=Math.floor((A-I)/2+I);A=L;let O=Math.max(1,u-L+1),E=a?f:Math.min(u+L,f)+h,v=Array(E+2);v[E+1]=(1<<k)-1;for(let w=E;w>=O;w-=1){let S=w-1,_=s[t.charAt(S)];if(x&&(y[S]=+!!_),v[w]=(v[w+1]<<1|1)&_,k&&(v[w]|=(C[w+1]|C[w])<<1|1|C[w+1]),v[w]&G&&(b=Q(e,{errors:k,currentLocation:S,expectedLocation:u,distance:r,ignoreLocation:d}),b<=g)){if(g=b,p=S,p<=u)break;O=Math.max(1,2*u-p)}}if(Q(e,{errors:k+1,currentLocation:u,expectedLocation:u,distance:r,ignoreLocation:d})>g)break;C=v}const F={isMatch:p>=0,score:Math.max(.001,b)};if(x){const k=function(I=[],L=M.minMatchCharLength){let O=[],E=-1,v=-1,w=0;for(let S=I.length;w<S;w+=1){let _=I[w];_&&E===-1?E=w:_||E===-1||(v=w-1,v-E+1>=L&&O.push([E,v]),E=-1)}return I[w-1]&&w-E>=L&&O.push([E,w-1]),O}(y,c);k.length?l&&(F.indices=k):F.isMatch=!1}return F}function At(t){let e={};for(let s=0,o=t.length;s<o;s+=1){const r=t.charAt(s);e[r]=(e[r]||0)|1<<o-s-1}return e}class Nt{constructor(e,{location:s=M.location,threshold:o=M.threshold,distance:r=M.distance,includeMatches:i=M.includeMatches,findAllMatches:a=M.findAllMatches,minMatchCharLength:c=M.minMatchCharLength,isCaseSensitive:l=M.isCaseSensitive,ignoreLocation:d=M.ignoreLocation}={}){if(this.options={location:s,threshold:o,distance:r,includeMatches:i,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:l,ignoreLocation:d},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(u,g)=>{this.chunks.push({pattern:u,alphabet:At(u),startIndex:g})},f=this.pattern.length;if(f>R){let u=0;const g=f%R,p=f-g;for(;u<p;)h(this.pattern.substr(u,R),u),u+=R;if(g){const x=f-R;h(this.pattern.substr(x),x)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:o}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let p={isMatch:!0,score:0};return o&&(p.indices=[[0,e.length-1]]),p}const{location:r,distance:i,threshold:a,findAllMatches:c,minMatchCharLength:l,ignoreLocation:d}=this.options;let h=[],f=0,u=!1;this.chunks.forEach(({pattern:p,alphabet:x,startIndex:y})=>{const{isMatch:j,score:C,indices:b}=Tt(e,p,x,{location:r+y,distance:i,threshold:a,findAllMatches:c,minMatchCharLength:l,includeMatches:o,ignoreLocation:d});j&&(u=!0),f+=C,j&&b&&(h=[...h,...b])});let g={isMatch:u,score:u?f/this.chunks.length:1};return u&&o&&(g.indices=h),g}}const ve=[];function we(t,e){for(let s=0,o=ve.length;s<o;s+=1){let r=ve[s];if(r.condition(t,e))return new r(t,e)}return new Nt(t,e)}function Dt(t,e){const s=t.matches;e.matches=[],N(s)&&s.forEach(o=>{if(!N(o.indices)||!o.indices.length)return;const{indices:r,value:i}=o;let a={indices:r,value:i};o.key&&(a.key=o.key.src),o.idx>-1&&(a.refIndex=o.idx),e.matches.push(a)})}function Ft(t,e){e.score=t.score}class U{constructor(e,s={},o){if(this.options={...M,...s},this.options.useExtendedSearch)throw new Error("Extended search is not available");this._keyStore=new Lt(this.options.keys),this.setCollection(e,o)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof le))throw new Error("Incorrect 'index' type");this._myIndex=s||We(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){N(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let o=0,r=this._docs.length;o<r;o+=1){const i=this._docs[o];e(i,o)&&(this.removeAt(o),o-=1,r-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:o,includeScore:r,shouldSort:i,sortFn:a,ignoreFieldNorm:c}=this.options;let l=P(e)?P(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(d,{ignoreFieldNorm:h=M.ignoreFieldNorm}){d.forEach(f=>{let u=1;f.matches.forEach(({key:g,norm:p,score:x})=>{const y=g?g.weight:null;u*=Math.pow(x===0&&y?Number.EPSILON:x,(y||1)*(h?1:p))}),f.score=u})}(l,{ignoreFieldNorm:c}),i&&l.sort(a),ze(s)&&s>-1&&(l=l.slice(0,s)),function(d,h,{includeMatches:f=M.includeMatches,includeScore:u=M.includeScore}={}){const g=[];return f&&g.push(Dt),u&&g.push(Ft),d.map(p=>{const{idx:x}=p,y={item:h[x],refIndex:x};return g.length&&g.forEach(j=>{j(p,y)}),y})}(l,this._docs,{includeMatches:o,includeScore:r})}_searchStringList(e){const s=we(e,this.options),{records:o}=this._myIndex,r=[];return o.forEach(({v:i,i:a,n:c})=>{if(!N(i))return;const{isMatch:l,score:d,indices:h}=s.searchIn(i);l&&r.push({item:i,idx:a,matches:[{score:d,value:i,norm:c,indices:h}]})}),r}_searchLogical(e){throw new Error("Logical search is not available")}_searchObjectList(e){const s=we(e,this.options),{keys:o,records:r}=this._myIndex,i=[];return r.forEach(({$:a,i:c})=>{if(!N(a))return;let l=[];o.forEach((d,h)=>{l.push(...this._findMatches({key:d,value:a[h],searcher:s}))}),l.length&&i.push({idx:c,item:a,matches:l})}),i}_findMatches({key:e,value:s,searcher:o}){if(!N(s))return[];let r=[];if(K(s))s.forEach(({v:i,i:a,n:c})=>{if(!N(i))return;const{isMatch:l,score:d,indices:h}=o.searchIn(i);l&&r.push({score:d,key:e,value:i,idx:a,norm:c,indices:h})});else{const{v:i,n:a}=s,{isMatch:c,score:l,indices:d}=o.searchIn(i);c&&r.push({score:l,key:e,value:i,norm:a,indices:d})}return r}}U.version="7.0.0",U.createIndex=We,U.parseIndex=function(t,{getFn:e=M.getFn,fieldNormWeight:s=M.fieldNormWeight}={}){const{keys:o,records:r}=t,i=new le({getFn:e,fieldNormWeight:s});return i.setKeys(o),i.setIndexRecords(r),i},U.config=M;function Pt({selectedModel:t,setSelectedModel:e,modelTypeList:s}){const o=r=>{e(r)};return n.jsx(Fe,{children:s.map(r=>n.jsx(ae,{children:n.jsx(T,{colorScheme:"blue",variant:t===r?"solid":"outline",onClick:()=>o(r),size:"sm",children:r})},r))})}const Ot={checkpoints:"CheckpointLoaderSimple",vae:"VAELoader",loras:"LoraLoader",controlnet:"ControlNetLoader",upscale_models:"UpscaleModelLoader"};function zt({data:t}){const[e,s]=m.useState("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/27fd7433-cb0a-4a87-88c1-21ccb2b1a842/width=450/00060-881622046.jpeg"),[o,r]=m.useState(!t.file_hash),[i,a]=m.useState();m.useEffect(()=>{r(!t.file_hash),c()},[t.file_hash]);const c=async()=>{var h,f,u,g;const d=await H.models.get(t.model_name+"@"+t.model_type);if(d!=null&&(a(d),(h=d.imageUrl)!=null&&h.length&&s(d.imageUrl)),t.file_hash!=null)try{const p=`https://civitai.com/api/v1/model-versions/by-hash/${t.file_hash}`,y=await(await fetch(p)).json();let j;if(await((f=V)==null?void 0:f.getSetting("showNsfwModelThumbnail"))===!0)j=(g=(u=y==null?void 0:y.images)==null?void 0:u[0])==null?void 0:g.url;else if(!y.model.nsfw){const A=y.images.find(G=>G.nsfw==="None");j=A==null?void 0:A.url}j&&s(j);const b={id:t.model_name+"@"+t.model_type,fileHash:t.file_hash,fileFolder:t.model_type,fileName:t.model_name+t.model_extension,modelName:y.model.name,civitModelID:String(y.modelId),civitModelVersionID:String(y.id),imageUrl:j??null};H.models.put(b),a(b)}catch{}t.preview&&s(t.preview)},l=d=>{const h=Ot[t.model_type];h&&(d.dataTransfer.setData("eventName","WorkspaceManagerAddNode"),d.dataTransfer.setData("modelRelativePath",t.model_name+t.model_extension),d.dataTransfer.setData("nodeType",h))};return n.jsxs(oe,{children:[n.jsxs(oe,{position:"relative",borderRadius:4,draggable:!0,onDragStart:l,children:[o?n.jsx(B,{bg:"rgba(0, 0, 0, 0.5)",height:178,justifyContent:"center",alignItems:"center",children:n.jsx(re,{})}):n.jsx(De,{src:e,draggable:!1,boxSize:"100%",height:150,objectFit:"cover",borderRadius:4,cursor:(i==null?void 0:i.civitModelID)!=null?"pointer":"auto",onClick:()=>{(i==null?void 0:i.civitModelID)==null||(i==null?void 0:i.civitModelVersionID)==null||window.open(`https://civitai.com/models/${i==null?void 0:i.civitModelID}?modelVersionId=${i==null?void 0:i.civitModelVersionID}`)}}),n.jsx(D,{position:"absolute",bottom:"0",left:"0",right:"0",color:"white",fontSize:14})]}),n.jsx(ie,{label:n.jsxs("span",{children:[t.model_name+t.model_extension,n.jsx("br",{}),t.date.toLocaleDateString()]}),children:n.jsx(D,{textAlign:"center",p:"1",fontSize:14,noOfLines:2,children:(i==null?void 0:i.modelName)??t.model_name+t.model_extension})})]})}function Rt({list:t}){return n.jsx(mt,{templateColumns:"repeat(3, minmax(0, 1fr))",gap:1,marginTop:2,children:t.map(e=>n.jsx(Pe,{children:n.jsx(zt,{data:e})},e.model_name+e.date.getTime()))})}const Bt=async t=>{try{const s=await(await J.fetchApi("/model_manager/install_model",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).text();window.dispatchEvent(new CustomEvent("model_install_message",{detail:s}))}catch(e){console.error("Failed to connect to the server:",e)}};function je(t,e=1){const r=t/1024;return r>=1024?(r/1024).toFixed(e)+" GB":r.toFixed(e)+" MB"}function Me(t,e){if(!t||t.length===0)return;let s=t.find(o=>o.nsfw==="None");return e&&(s=s??t[0]),s}function Wt(t,e=280,s){var o,r,i,a;if(t)return ke(t)?(i=Me((r=(o=t.modelVersions)==null?void 0:o.at(0))==null?void 0:r.images,s))==null?void 0:i.url:`https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/${(a=Me(t.images,s))==null?void 0:a.url}/width=${e}/`}const ne=280;function Kt({model:t,onClickInstallModel:e,installing:s}){var u,g;const[o,r]=m.useState();m.useEffect(()=>{p();async function p(){var y;const x=await((y=V)==null?void 0:y.getSetting("showNsfwModelThumbnail"));r(Wt(t,ne,x))}},[t]);const i=ke(t)?t.modelVersions:t.versions,[a,c]=m.useState(((u=i==null?void 0:i[0])==null?void 0:u.name)??""),l=i==null?void 0:i.find(p=>(p==null?void 0:p.name)===a),d=()=>{window.open(`https://civitai.com/models/${t.id}`)},h=m.useCallback(()=>{if(l==null){console.error("no file is find by name",a);return}e(pe(l,t.name),t)},[a]),f=(g=pe(l))==null?void 0:g.sizeKB;return n.jsxs(Ie,{width:ne,justifyContent:"space-between",mb:2,gap:1,children:[n.jsx(De,{borderRadius:3,boxSize:ne+"px",objectFit:"cover",src:o,alt:"model cover image",cursor:"pointer",onClick:()=>d()}),n.jsxs(q,{p:1,children:[n.jsx(ie,{label:t.name,children:n.jsx(D,{fontWeight:500,noOfLines:1,children:t.name})}),n.jsxs(B,{justifyContent:"space-between",alignItems:"center",children:[n.jsx(T,{borderRadius:14,noOfLines:1,size:"xs",colorScheme:"teal",maxWidth:"40%",flexShrink:1,variant:"outline",px:1,cursor:"text",children:n.jsx(D,{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",children:t.type})}),n.jsx(T,{leftIcon:n.jsx(ot,{size:18}),iconSpacing:1,borderRadius:10,size:"sm",py:1,colorScheme:"teal",type:"submit",onClick:()=>h(),isDisabled:!!(a&&s.includes(a)),children:"Install"})]}),n.jsxs(W,{children:[n.jsx(ee,{size:"md",style:{paddingLeft:4},onChange:p=>{c(p.target.value)},children:i==null?void 0:i.map(p=>{const x=p==null?void 0:p.name;return x?n.jsx("option",{value:x,style:{padding:0},children:x},p.id):null})}),f&&n.jsx(ie,{label:je(f),children:n.jsx(D,{flexShrink:1,noOfLines:1,width:"40%",children:je(f)})})]})]})]})}function Gt({searchQuery:t,setSearchQuery:e,onSearch:s}){return n.jsxs(B,{gap:1,alignItems:"center",grow:1,children:[n.jsx(Z,{placeholder:"Search models in CivitAI",width:"60%",value:t,onChange:o=>e(o.target.value),onKeyUp:o=>{o.code==="Enter"&&s()}}),n.jsx(T,{size:"sm",onClick:()=>s(),colorScheme:"teal",children:"Search"})]})}function $t({isOpen:t,fileSelected:e,onClose:s,selectFolder:o}){const[r,i]=m.useState(""),[a,c]=m.useState([]),[l,d]=m.useState(""),h=m.useRef(null);m.useEffect(()=>{f()},[]);const f=async()=>{const u=await Le();u&&(["custom_nodes","config","saved_prompts"].forEach(g=>{delete u[g]}),c(Object.values(u).flatMap(g=>g)))};return n.jsx(He,{isOpen:t,leastDestructiveRef:h,onClose:s,children:n.jsx(_e,{children:n.jsxs(Ye,{children:[n.jsx(be,{fontSize:"lg",fontWeight:"bold",children:"Choose Folder"}),n.jsx(Ce,{children:n.jsxs(q,{spacing:4,children:[!e&&n.jsxs(n.Fragment,{children:[n.jsx(D,{children:"Model download url"}),n.jsx(Z,{placeholder:"https://civitai.com/api/download/models/311399",onChange:u=>d(u.target.value),value:l})]}),n.jsx(D,{children:"Choose model install folder"}),n.jsx(ee,{placeholder:"Select option",value:r,onChange:u=>i(u.target.value),children:a.map(u=>n.jsx("option",{value:u,children:u},u))})]})}),n.jsxs(qe,{children:[n.jsx(T,{ref:h,onClick:s,children:"Cancel"}),n.jsx(T,{onClick:()=>o(r,l),ml:3,isDisabled:l.length===0,children:"Confirm"})]})]})})})}function Vt(){const{colorMode:t}=Qe(),e=Ee(),[s,o]=m.useState([]);return m.useEffect(()=>{J.addEventListener("download_progress",r=>{o(r.detail)}),J.addEventListener("download_error",r=>{e({title:"Download Error",description:r.detail,status:"error",duration:4e3,isClosable:!0})})},[]),n.jsx(q,{spacing:5,pos:"absolute",bottom:"0",left:"0",width:"50%",zIndex:80,backgroundColor:t==="light"?"white":"#242424",paddingX:5,pt:2,children:s.map(({save_path:r,progress:i})=>n.jsxs(W,{children:[n.jsx(D,{fontSize:16,width:"40%",children:r.replace(/^.*[\\/]/,"")}),n.jsx(Oe,{isIndeterminate:!i,hasStripe:!0,width:"50%",value:i}),n.jsxs(D,{fontSize:16,width:"10%",children:[i.toFixed(1),"%"]}),n.jsx(T,{variant:"outline",size:"sm",colorScheme:"red",onClick:()=>it(r),children:"Cancel"})]},r))})}const Ke="WORKSPACE_CIVIT_API_KEY_STORAGE_KEY";function Ut(){return localStorage.getItem(Ke)}function Ht(t){localStorage.setItem(Ke,t)}function Yt(){const[t,e]=m.useState(""),{onOpen:s,onClose:o,isOpen:r}=Te(),i=()=>{Ht(t),o()};return n.jsxs(rt,{isOpen:r,onOpen:s,onClose:o,placement:"right",closeOnBlur:!1,children:[n.jsx(at,{children:n.jsx(T,{size:"sm",py:1,mr:8,children:"Set Civitai API Key"})}),n.jsxs(lt,{p:5,children:[n.jsx(ct,{}),n.jsx(dt,{}),n.jsxs(q,{spacing:4,children:[n.jsx(D,{fontSize:14,children:"Some Civitai.com models require user login to download, you will nedd a Civitai API key to download in that case"}),n.jsx(Z,{value:t,onChange:a=>e(a.target.value),placeholder:"API Key"}),n.jsx(T,{size:"sm",py:1,mr:8,onClick:i,children:"Save"})]})]})]})}async function qt(t,e){var a,c;const s={queries:[{q:t,indexUid:"models_v7",facets:["category.name","checkpointType","fileFormats","lastVersionAtUnix","tags.name","type","user.username","version.baseModel"],attributesToHighlight:["*"],highlightPreTag:"__ais-highlight__",highlightPostTag:"__/ais-highlight__",limit:80,offset:0}]};return e&&(s.queries[0].filter=[[`"type"="${e}"`]]),((c=(a=await(await fetch("https://meilisearch-v1-6.civitai.com/multi-search",{headers:{"Content-Type":"application/json",Authorization:"Bearer 102312c2b83ea0ef9ac32e7858f742721bbfd7319a957272e746f84fd1e974af"},method:"POST",body:JSON.stringify(s)})).json())==null?void 0:a.results)==null?void 0:c.at(0)).hits??[]}function Qt({onclose:t,searchQuery:e="",modelType:s}){const[o,r]=m.useState([]),[i,a]=m.useState(!1),[c,l]=m.useState(s),d=Ee(),[h,f]=m.useState([]),[u,g]=m.useState(e),{isOpen:p,onOpen:x,onClose:y}=Te(),[j,C,b]=Ae(),[A,G]=m.useState({}),[F,k]=m.useState(te),I=m.useCallback(async()=>{var _;a(!0);const v=await qt(u,c);r(v);const w=await Le();w&&G(w);const S=await((_=V)==null?void 0:_.getSetting("defaultFolders"));S&&k(S),a(!1)},[u,c]),L=(v,w)=>{var de,he,ue,fe;if(!((de=b.current)!=null&&de.id)&&!w){console.error("no url to download");return}let S=w??`https://civitai.com/api/download/models/${(he=b.current)==null?void 0:he.id}`,_=(ue=b.current)==null?void 0:ue.name;if(!_&&(_=S.split("/").pop(),!_)){console.error("downloadUrl is malformed");return}d({title:"Installing...",description:_,status:"info",duration:4e3,isClosable:!0}),_!=null&&f(Ge=>[...Ge,_??""]);const ce=Ut();ce&&(S+=`?token=${ce}`),Bt({file_hash:(fe=b.current)==null?void 0:fe.SHA256,filename:_,save_path:v,url:S}),C(void 0),y()},O=async(v,w)=>{const S=F[w.type];C(v),S==null?x():L(S)},E=async(v,w)=>{var _;const S={...F,[v]:w};await((_=V)==null?void 0:_.upsert({defaultFolders:S})),k(S)};return m.useEffect(()=>{I()},[c]),n.jsxs(n.Fragment,{children:[n.jsxs(Je,{isOpen:!0,onClose:t,blockScrollOnMount:!0,children:[n.jsx(_e,{}),n.jsxs(Xe,{width:"90%",maxWidth:"90vw",height:"90vh",children:[n.jsxs(be,{pb:1,children:[n.jsxs(W,{gap:2,mb:2,alignItems:"center",children:[n.jsx(Ne,{size:"md",mr:2,children:"Models"}),n.jsx(Gt,{searchQuery:u,setSearchQuery:g,onSearch:I}),n.jsx(T,{size:"sm",py:1,mr:8,onClick:x,children:"Custom URL Install"}),n.jsx(Yt,{})]}),n.jsxs(W,{gap:2,wrap:"wrap",children:[n.jsx(T,{size:"sm",py:1,onClick:()=>{l(void 0)},isActive:c==null,children:"All"}),ht.map(v=>n.jsx(T,{size:"sm",py:1,isActive:c===v,onClick:()=>{l(v)},children:v},v)),c&&A[te[c]]&&n.jsxs(W,{ml:"auto",children:[n.jsx(D,{fontSize:17,whiteSpace:"nowrap",children:"Default Download Folder:"}),n.jsx(ee,{value:F[c],onChange:v=>E(c,v.target.value),children:A[te[c]].map(v=>n.jsx("option",{value:v,children:v}))})]})]}),i&&n.jsx(re,{thickness:"4px",emptyColor:"gray.200",color:"pink.500",size:"lg"})]}),n.jsx(Ze,{}),n.jsxs(Ce,{overflowY:"auto",children:[n.jsx(W,{wrap:"wrap",children:o==null?void 0:o.map(v=>n.jsx(Kt,{model:v,onClickInstallModel:O,installing:h},v.id))}),n.jsx(Vt,{})]})]})]}),n.jsx($t,{fileSelected:!!j,isOpen:p,onClose:y,selectFolder:(v,w)=>{L(v,b.current?void 0:w)}})]})}function Jt(){const[t,e]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(T,{size:"sm",colorScheme:"teal",onClick:()=>e(!0),children:"Install Models"}),t&&n.jsx(Qt,{modelType:"Checkpoint",onclose:()=>e(!1)})]})}const Xt=()=>{const[t,e]=m.useState(["checkpoints"]),[s,o]=m.useState([]),[r,i]=m.useState(!0);m.useEffect(()=>{a(),J.addEventListener("model_list",l=>{c(l.detail)})},[]);const a=async()=>{const l=await ut();c(l)},c=async l=>{if(!l)return;i(!1);const d=Array.from(new Set(l.map(f=>f.model_type))),h=d.indexOf("checkpoints");h>=0&&d.splice(h,1),d.unshift("checkpoints"),e(d),o(l.map(f=>({...f,date:new Date(f.date*1e3)})))};return{modelTypeList:t,modelsList:s,loading:r}};function Zt(){const[t,e,s]=Ae(!1),o=()=>{var c;(c=V)==null||c.getSetting("showNsfwModelThumbnail").then(l=>{e(l??!1)})};m.useEffect(()=>{o()},[]);const r=c=>{var d;const l=c.target.checked;(d=V)==null||d.upsert({showNsfwModelThumbnail:l}).then(()=>{o(),i(),window.dispatchEvent(new Event("showNsfwModelThumbnail"))})},i=async()=>{const c=await H.models.toArray();for(let l=0;l<c.length;l+=5){const d=c.slice(l,l+5);await Promise.all(d.map(a))}},a=async c=>{var l,d;try{const h=`https://civitai.com/api/v1/model-versions/by-hash/${c.fileHash}`,u=await(await fetch(h)).json();let g;if(s.current)g=(d=(l=u==null?void 0:u.images)==null?void 0:l[0])==null?void 0:d.url;else if(!u.model.nsfw){const p=u.images.find(x=>x.nsfw==="None");g=p==null?void 0:p.url}H.models.update(c.id,{imageUrl:g??null})}catch{}};return n.jsx(gt,{isChecked:t,onChange:r,children:"Show NSFW"})}function es(){const t=async e=>{if(e.dataTransfer.getData("eventName")!=="WorkspaceManagerAddNode")return;const o=e.dataTransfer.getData("modelRelativePath"),r=e.dataTransfer.getData("nodeType"),i=LiteGraph.createNode(r);i.pos=[e.canvasX,e.canvasY],i.configure({widgets_values:[o]}),z.graph.add(i)};return m.useEffect(()=>(z.canvasEl.addEventListener("drop",t),()=>{z.canvasEl.removeEventListener("drop",t)}),[]),null}function ts({onClose:t}){const[e,s]=m.useState("checkpoints"),[o,r]=m.useState(""),[i,a]=m.useState("name"),{loading:c,modelTypeList:l,modelsList:d}=Xt(),[h,f]=m.useState([]),[u,g]=m.useState([]);m.useEffect(()=>{x();async function x(){const y=await H.models.toArray();f(d.map(j=>({...j,db:y.find(C=>C.id===j.model_name+"@"+j.model_type)})))}},[d]),m.useEffect(()=>{let x=[];o.length?x=new U(h,{keys:["model_name","db.modelName"]}).search(o).map(C=>C.item):x=d.filter(y=>y.model_type===e).sort((y,j)=>i==="name"?y.model_name.localeCompare(j.model_name):j.date.getTime()-y.date.getTime()),g(x)},[e,d,o,i,h]),m.useEffect(()=>(z.canvasEl.addEventListener("click",t),()=>{z.canvasEl.removeEventListener("click",t)}),[t]);const p=440;return n.jsx(et,{children:n.jsxs(oe,{style:{width:p},children:[n.jsxs(Ie,{width:p,height:"100vh",p:4,gap:2,position:"fixed",top:0,left:0,shadow:"xl",zIndex:ft,overflowY:"auto",children:[n.jsxs(B,{justifyContent:"space-between",alignContent:"center",py:3,children:[n.jsx(Ne,{size:"md",mr:2,children:"Models"}),n.jsx(Jt,{})]}),n.jsx(B,{gap:4,justifyContent:"center",alignItems:"center",mb:1,children:n.jsx(Z,{size:"sm",placeholder:"Search",value:o,onChange:x=>r(x.target.value)})}),n.jsxs(B,{gap:4,justifyContent:"space-between",alignItems:"center",mb:1,children:[!o.length&&n.jsxs(W,{children:[n.jsx("span",{children:"Sort By"}),n.jsxs(ee,{value:i,size:"sm",width:"120px",onChange:x=>a(x.target.value),children:[n.jsx("option",{value:"name",children:"Name"}),n.jsx("option",{value:"date",children:"Date"})]})]}),n.jsx(Zt,{})]}),!o.length&&n.jsx(Pt,{modelTypeList:l,setSelectedModel:s,selectedModel:e}),n.jsx(Rt,{list:u}),c&&n.jsx(B,{justifyContent:"center",alignItems:"center",height:"100%",children:n.jsx(re,{})})]}),n.jsx(es,{})]})})}const ss=m.lazy(()=>tt(()=>import("./InstallMissingModelsButton-sP7CX4K3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])));function ns(){const{setRoute:t,route:e}=m.useContext(pt),s=async o=>{if(o.dataTransfer.getData("eventName")!=="WorkspaceManagerAddNode")return;const i=o.dataTransfer.getData("modelRelativePath"),a=o.dataTransfer.getData("nodeType"),c=LiteGraph.createNode(a);c.pos=[o.canvasX,o.canvasY],c.configure({widgets_values:[i]}),z.graph.add(c)};return m.useEffect(()=>(z.canvasEl.addEventListener("drop",s),()=>{z.canvasEl.removeEventListener("drop",s)}),[]),n.jsxs(q,{style:{position:"relative"},children:[n.jsx(T,{size:"sm",colorScheme:"blue","aria-label":"My models",onClick:()=>t("modelList"),px:1,children:"Models"}),n.jsx("div",{style:{position:"absolute",top:"38px",left:"0px"},children:n.jsx(ss,{})}),e==="modelList"&&n.jsx(ts,{onClose:()=>t("root")})]})}const ds=Object.freeze(Object.defineProperty({__proto__:null,default:ns},Symbol.toStringTag,{value:"Module"}));export{Pe as G,Jt as I,ds as M,qt as g};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["workspace_web/InstallMissingModelsButton-sP7CX4K3.js","workspace_web/input.js","workspace_web/App-sgH6j00M.js","workspace_web/assets/App-JXePnJiV.css","workspace_web/chunk-NTCQBYKE-4zMWD2m4.js","workspace_web/chunk-JARCRF6W-swAlFRrB.js","workspace_web/index-pz0vT7Or.js","workspace_web/chunk-3RSXBRAN-hQn4Wngd.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
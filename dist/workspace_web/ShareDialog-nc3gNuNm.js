import{f as te,n as fe,o as ge,j as e,g as ae,e as ne,r as u,m as xe,w as Y,b as we,h as M,V as Z,N as D,O as je,W as ve,Q as ye,X as be,R as ke}from"./input.js";import{B as Ce,z as Se,a5 as Ie,f as P,H as A,ad as Re,ag as F,am as Ee,ay as ee,aD as De,W as Ne,e as Pe,F as se,aE as Te,I as We,h as oe,w as O,a1 as Oe,aF as _e,aG as Fe,aH as Me,T as ze,k as Le,aI as Ae,Z as Ge}from"./App-qo42s2ji.js";import{I as He}from"./chunk-7D6N5TE5-rpRnbuGR.js";import{a as Ve}from"./civitUtils-zqcTmmqF.js";import{S as Be,L as Ue}from"./chunk-VTV6N5LE-VOXf0Qhu.js";import{I as $e}from"./IconCopy-iXaxUe59.js";var re=te(function(i,l){const r=fe("Badge",i),{className:o,...s}=ge(i);return e.jsx(ae.span,{ref:l,className:ne("chakra-badge",i.className),...s,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})});re.displayName="Badge";function Ke(n){return n&&Y(n)&&Y(n.target)}function qe(n={}){const{onChange:i,value:l,defaultValue:r,name:o,isDisabled:s,isFocusable:m,isNative:y,...d}=n,[b,v]=u.useState(r||""),h=typeof l<"u",x=h?l:b,w=u.useRef(null),t=u.useCallback(()=>{const f=w.current;if(!f)return;let g="input:not(:disabled):checked";const T=f.querySelector(g);if(T){T.focus();return}g="input:not(:disabled)";const N=f.querySelector(g);N==null||N.focus()},[]),j=`radio-${u.useId()}`,p=o||j,I=u.useCallback(f=>{const g=Ke(f)?f.target.value:f;h||v(g),i==null||i(String(g))},[i,h]),k=u.useCallback((f={},g=null)=>({...f,ref:xe(g,w),role:"radiogroup"}),[]),z=u.useCallback((f={},g=null)=>({...f,ref:g,name:p,[y?"checked":"isChecked"]:x!=null?f.value===x:void 0,onChange(N){I(N)},"data-radiogroup":!0}),[y,p,I,x]);return{getRootProps:k,getRadioProps:z,name:p,ref:w,focus:t,setValue:v,value:x,onChange:I,isDisabled:s,isFocusable:m,htmlProps:d}}var[Je,rs]=we({name:"RadioGroupContext",strict:!1}),ie=te((n,i)=>{const{colorScheme:l,size:r,variant:o,children:s,className:m,isDisabled:y,isFocusable:d,...b}=n,{value:v,onChange:h,getRootProps:x,name:w,htmlProps:t}=qe(b),E=u.useMemo(()=>({name:w,size:r,onChange:h,colorScheme:l,value:v,variant:o,isDisabled:y,isFocusable:d}),[w,r,h,l,v,o,y,d]);return e.jsx(Je,{value:E,children:e.jsx(ae.div,{...x(t,i),className:ne("chakra-radio-group",m),children:s})})});ie.displayName="RadioGroup";function Qe({options:n,value:i,onChange:l}){const[r,o]=u.useState(!1),s=u.useRef(null),m=n.find(d=>d.value===i);u.useEffect(()=>{const d=b=>{s.current&&!s.current.contains(b.target)&&o(!1)};return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[s]);const y=()=>o(!r);return e.jsxs(Ce,{position:"relative",children:[e.jsx(M,{onClick:y,rightIcon:e.jsx(Se,{}),leftIcon:m==null?void 0:m.icon,children:m==null?void 0:m.label}),r&&e.jsx(Ie,{gap:4,ref:s,mt:"2",shadow:"md",borderWidth:"1px",p:"2",position:"absolute",zIndex:100,children:n.map(d=>e.jsx(M,{onClick:()=>{o(!1),l(d.value)},leftIcon:d.icon,justifyContent:"flex-start",variant:"ghost",width:"full",children:d.label},d.label))})]})}function Xe({deps:n,uploadingImage:i}){const l=Object.values((n==null?void 0:n.images)??{});return n?e.jsx(P,{gap:5,children:l.length>0&&e.jsxs(P,{children:[e.jsxs(A,{children:[e.jsxs(Re,{size:"sm",children:["Images (",l.length,")"]}),e.jsx("p",{style:{color:"GrayText"},children:"Will be uploaded as url"})]}),i&&e.jsxs("span",{children:[e.jsx(Z,{size:"md",color:"teal.400"})," Uploading"]}),l.map(r=>e.jsxs(P,{children:[e.jsx("p",{children:r.filename}),e.jsx(He,{width:250,src:`/workspace/view_media?filename=${r.filename}&isPreview=true&isInput=true`})]},r.filename))]})}):e.jsx(Z,{size:"md",color:"teal.400"})}async function Ye(n,i,l){const r=await Ee.models.where("fileName").equals(n).toArray()??[],o=r.at(0);return{name:n,nodeType:i,hash:(o==null?void 0:o.fileHash)??null,folder:(o==null?void 0:o.fileFolder)??null,url:o!=null&&o.civitModelVersionID?Ve(o.civitModelVersionID):(o==null?void 0:o.downloadUrl)??null,inputName:l,length:r.length}}async function Ze(n){var x,w;let i=[],l={};const r=[".ckpt",".pt",".bin",".pth",".safetensors"],o=[".jpeg",".jpg",".png",".gif",".webp"],s=(w=(x=D.graph.extra)==null?void 0:x[F])==null?void 0:w.deps,m=await D.graphToPrompt();Object.values(m.output).forEach(t=>{t.inputs&&Object.keys(t.inputs).forEach(E=>{var p,I;const j=(p=t.inputs)==null?void 0:p[E];typeof j=="string"&&(r.some(k=>j.endsWith(k))&&i.push(Ye(j,t.class_type,E)),o.some(k=>j.endsWith(k))&&(l[j]=((I=s==null?void 0:s.images)==null?void 0:I[j])??{filename:j,nodeType:t.class_type}))})});const d=await fetch("workspace/fetch_node_repos",{method:"POST",body:JSON.stringify({nodes:n.map(t=>t.type)})}).then(t=>t.ok?t.json():[]).catch(t=>(console.error("Error fetching node repos",t),[])),b=await Promise.all(i),v={};b.forEach(t=>{v[t.name]=t});const h={};return Object.values(d).forEach(t=>{h[t.gitRepo]=t}),{models:v,images:l,nodeRepos:Object.values(h)}}function is({onClose:n}){var G,H,V,B,U;const[i,l,r]=ee("v"+De()),{saveCurWorkflow:o}=u.useContext(Ne),[s,m]=u.useState(),[y,d]=u.useState(!1),[b,v]=u.useState(!1),h=(H=(G=oe)==null?void 0:G.settings)==null?void 0:H.cloudHost,[x,w,t]=ee("PRIVATE"),[E,j]=u.useState("new_version"),p=(V=O)==null?void 0:V.curWorkflow,I=Pe(),[k,z]=u.useState(!0),f=async a=>{var C;const c=a.data;if(c.type!=="share_workflow_success"||!p)return;const S=c.version.id,R=c.version.workflowID;R&&await((C=O)==null?void 0:C.updateMetaInfo(p.id,{cloudID:R})),g(),window.open(h+"/workflow/"+R+"/"+S,"_blank"),v(!1)};u.useEffect(()=>{g();const a=D.graph.serialize();return Ze(a.nodes??[]).then(c=>{m(c)}),window.addEventListener("message",f),()=>{window.removeEventListener("message",f)}},[]);const g=async()=>{p!=null&&p.cloudID&&p.cloudOrigin&&Me(p).then(a=>{w(a)})},T=a=>{navigator.clipboard.writeText(a).then(()=>{I({title:"Copied to clipboard",status:"success",duration:2e3,isClosable:!0})}).catch(c=>{console.error("Failed to copy text: ",c)})},N=async a=>{var q,J,Q;const c=D.graph.serialize();(q=c.extra||(c.extra={}))[J=F]||(q[J]={}),c.extra[F].deps={models:(s==null?void 0:s.models)??{},images:a??{},nodeRepos:(s==null?void 0:s.nodeRepos)??[]},await o(),await D.graphToPrompt(D.graph).then(W=>(c.extra[F].apiPrompt=W.output,W.output));const S=JSON.stringify(c);v(!0);const R=_e(32),C=await((Q=oe)==null?void 0:Q.getSetting("cloudHost"));let $;$=Fe(),r.current,S??JSON.stringify(D.graph.serialize());const ce=window.location.protocol,de=window.location.host,ue=`${ce}//${de}`,he=C+`/share_workflow_confirm/${R}?redirectUrl=${ue}`,pe=window.open(he,"Share Workflow","width=800,height=800"),K=W=>{var X;if(W.origin===C&&W.data==="child_ready"){const L=(X=O)==null?void 0:X.curWorkflow;if(!L)return;const me={workflow:{name:L.name,cloudID:L.cloudID},version:{name:r.current,json:S},nodeDefs:$,privacy:t.current};pe.postMessage(me,C),window.removeEventListener("message",K)}};window.addEventListener("message",K)},le=async()=>{const a=(s==null?void 0:s.images)??{};if(k){d(!0);const c=Object.values((s==null?void 0:s.images)??{}).map(S=>S.filename);if(c.length)try{const R=await(await Oe("/workspace/upload_image",{method:"POST",body:JSON.stringify({images:c})})).json();Object.keys(R).forEach(C=>{a!=null&&a[C]&&(a[C].url=R[C])})}catch(S){console.error("Error uploading images:",S)}d(!1)}N(a)},_=(U=(B=O)==null?void 0:B.curWorkflow)==null?void 0:U.cloudID;return e.jsxs(je,{isOpen:!0,onClose:n,size:"lg",children:[e.jsx(ve,{}),e.jsxs(ye,{width:["98%","90%","50%"],maxWidth:"600px",children:[e.jsxs(be,{children:[e.jsxs(se,{justifyContent:"space-between",children:[e.jsxs("p",{children:['Share "',p==null?void 0:p.name,'"']}),e.jsx(M,{colorScheme:"teal",onClick:le,size:"sm",isDisabled:b,children:b?"Sharing":"Share"})]}),h&&e.jsxs(ze,{fontSize:16,color:"GrayText",fontWeight:400,children:["Share to ",new URL(h).host]})]}),e.jsx(ke,{pb:10,children:e.jsxs(P,{gap:5,children:[_==null?e.jsx(Qe,{options:Te,value:x,onChange:a=>{w(a)}}):e.jsx(Le,{variant:"outline",borderRadius:"full",width:"fit-content",children:e.jsx(Ae,{privacy:x,showEmoji:!0})}),_&&e.jsxs(A,{spacing:2,color:"teal.400",children:[e.jsxs(Ue,{wordBreak:"break-all",href:h+"/workflow/"+_,isExternal:!0,children:[h+"/workflow/"+_," ",e.jsx(Ge,{size:20,style:{display:"inline-block",verticalAlign:"middle"}})]}),e.jsx(M,{size:"sm",leftIcon:e.jsx($e,{size:18}),onClick:()=>{var a,c;T(h+"/workflow/"+((c=(a=O)==null?void 0:a.curWorkflow)==null?void 0:c.cloudID))},children:"Copy link"})]}),e.jsx(ie,{gap:4,onChange:a=>{j(a)},value:E,children:e.jsx(P,{children:e.jsxs(A,{mb:5,alignItems:"center",children:[e.jsx(We,{value:i,width:"60%",onFocus:()=>{j("new_version")},onChange:a=>{l(a.target.value)}}),e.jsx(se,{color:"green",children:e.jsx(re,{colorScheme:"purple",children:"Version Name"})})]})})}),Object.keys((s==null?void 0:s.images)??{}).length>0&&e.jsxs(P,{borderRadius:6,borderWidth:"1px",p:2,children:[e.jsx(Be,{isChecked:k,onChange:()=>z(!k),fontWeight:"600",children:"Share input images"}),e.jsxs("span",{style:{color:"GrayText"},children:["If enabled your input images will be uploaded and shared to"," ",h]}),k&&e.jsx(Xe,{deps:s??null,setDeps:m,uploadingImage:y})]})]})})]})]})}export{is as default};

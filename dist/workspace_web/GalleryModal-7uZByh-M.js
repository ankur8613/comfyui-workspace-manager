import{r as h,d as we,x as Wt,m as Se,b as it,f as B,k as Ht,o as ct,E as Kt,j as r,g as O,n as Yt,e as Xt,N as tt,Y as ut,h as dt,O as Zt,W as qt,Q as Jt,X as Qt,S as en,R as tn}from"./input.js";import{aa as nn,ab as sn,d as De,F as m,ac as rn,l as E,I as on,f as Te,B as ht,T as K,H as Y,W as Re,w as H,g as D,v as ft,a3 as xt,O as pt,a2 as R,ad as an,x as ln}from"./App-qo42s2ji.js";import{c as be,p as cn,r as nt,v as st,I as un,i as dn,b as hn,d as fn,g as xn,N as pn,a as gn,e as mn,f as vn,h as yn,M as gt,u as wn,S as Sn}from"./MediaPreview-Saiymhm2.js";import{I as bn}from"./chunk-7D6N5TE5-rpRnbuGR.js";import{S as jn}from"./chunk-3RSXBRAN-0rzvZpzF.js";import{C as Ae,G as kn}from"./chunk-JARCRF6W-U6cp0GaY.js";import{S as rt,L as Ee}from"./chunk-VTV6N5LE-VOXf0Qhu.js";import"./IconSearch-ZN34j33e.js";const mt=1/60*1e3,Pn=typeof performance<"u"?()=>performance.now():()=>Date.now(),vt=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(Pn()),mt);function Cn(e){let t=[],s=[],n=0,o=!1,a=!1;const l=new WeakSet,c={schedule:(i,u=!1,g=!1)=>{const f=g&&o,x=f?t:s;return u&&l.add(i),x.indexOf(i)===-1&&(x.push(i),f&&o&&(n=t.length)),i},cancel:i=>{const u=s.indexOf(i);u!==-1&&s.splice(u,1),l.delete(i)},process:i=>{if(o){a=!0;return}if(o=!0,[t,s]=[s,t],s.length=0,n=t.length,n)for(let u=0;u<n;u++){const g=t[u];g(i),l.has(g)&&(c.schedule(g),e())}o=!1,a&&(a=!1,c.process(i))}};return c}const In=40;let Ne=!0,X=!1,Me=!1;const V={delta:0,timestamp:0},Z=["read","update","preRender","render","postRender"],oe=Z.reduce((e,t)=>(e[t]=Cn(()=>X=!0),e),{}),Tn=Z.reduce((e,t)=>{const s=oe[t];return e[t]=(n,o=!1,a=!1)=>(X||Mn(),s.schedule(n,o,a)),e},{}),En=Z.reduce((e,t)=>(e[t]=oe[t].cancel,e),{});Z.reduce((e,t)=>(e[t]=()=>oe[t].process(V),e),{});const Nn=e=>oe[e].process(V),yt=e=>{X=!1,V.delta=Ne?mt:Math.max(Math.min(e-V.timestamp,In),1),V.timestamp=e,Me=!0,Z.forEach(Nn),Me=!1,X&&(Ne=!1,vt(yt))},Mn=()=>{X=!0,Ne=!0,Me||vt(yt)},ot=()=>V;var $=e=>e?"":void 0,je=e=>e?!0:void 0,q=(...e)=>e.filter(Boolean).join(" ");function ke(...e){return function(s){e.some(n=>(n==null||n(s),s==null?void 0:s.defaultPrevented))}}function Q(e){const{orientation:t,vertical:s,horizontal:n}=e;return t==="vertical"?s:n}var te={width:0,height:0},ee=e=>e||te;function _n(e){const{orientation:t,thumbPercents:s,thumbRects:n,isReversed:o}=e,a=y=>{var j;const A=(j=n[y])!=null?j:te;return{position:"absolute",userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",touchAction:"none",...Q({orientation:t,vertical:{bottom:`calc(${s[y]}% - ${A.height/2}px)`},horizontal:{left:`calc(${s[y]}% - ${A.width/2}px)`}})}},l=t==="vertical"?n.reduce((y,j)=>ee(y).height>ee(j).height?y:j,te):n.reduce((y,j)=>ee(y).width>ee(j).width?y:j,te),c={position:"relative",touchAction:"none",WebkitTapHighlightColor:"rgba(0,0,0,0)",userSelect:"none",outline:0,...Q({orientation:t,vertical:l?{paddingLeft:l.width/2,paddingRight:l.width/2}:{},horizontal:l?{paddingTop:l.height/2,paddingBottom:l.height/2}:{}})},i={position:"absolute",...Q({orientation:t,vertical:{left:"50%",transform:"translateX(-50%)",height:"100%"},horizontal:{top:"50%",transform:"translateY(-50%)",width:"100%"}})},u=s.length===1,g=[0,o?100-s[0]:s[0]],f=u?g:s;let x=f[0];!u&&o&&(x=100-x);const b=Math.abs(f[f.length-1]-f[0]),N={...i,...Q({orientation:t,vertical:o?{height:`${b}%`,top:`${x}%`}:{height:`${b}%`,bottom:`${x}%`},horizontal:o?{width:`${b}%`,right:`${x}%`}:{width:`${b}%`,left:`${x}%`}})};return{trackStyle:i,innerTrackStyle:N,rootStyle:c,getThumbStyle:a}}function zn(e){const{isReversed:t,direction:s,orientation:n}=e;return s==="ltr"||n==="vertical"?t:!t}function Dn(e,t,s,n){return e.addEventListener(t,s,n),()=>{e.removeEventListener(t,s,n)}}function Rn(e){const t=Fn(e);return typeof t.PointerEvent<"u"&&e instanceof t.PointerEvent?e.pointerType==="mouse":e instanceof t.MouseEvent}function wt(e){return!!e.touches}function An(e){return wt(e)&&e.touches.length>1}function Fn(e){var t;return(t=e.view)!=null?t:window}function $n(e,t="page"){const s=e.touches[0]||e.changedTouches[0];return{x:s[`${t}X`],y:s[`${t}Y`]}}function Vn(e,t="page"){return{x:e[`${t}X`],y:e[`${t}Y`]}}function St(e,t="page"){return wt(e)?$n(e,t):Vn(e,t)}function Bn(e){return t=>{const s=Rn(t);(!s||s&&t.button===0)&&e(t)}}function On(e,t=!1){function s(o){e(o,{point:St(o)})}return t?Bn(s):s}function ne(e,t,s,n){return Dn(e,t,On(s,t==="pointerdown"),n)}var Ln=Object.defineProperty,Gn=(e,t,s)=>t in e?Ln(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,I=(e,t,s)=>(Gn(e,typeof t!="symbol"?t+"":t,s),s),Un=class{constructor(e,t,s){I(this,"history",[]),I(this,"startEvent",null),I(this,"lastEvent",null),I(this,"lastEventInfo",null),I(this,"handlers",{}),I(this,"removeListeners",()=>{}),I(this,"threshold",3),I(this,"win"),I(this,"updatePoint",()=>{if(!(this.lastEvent&&this.lastEventInfo))return;const c=Pe(this.lastEventInfo,this.history),i=this.startEvent!==null,u=Yn(c.offset,{x:0,y:0})>=this.threshold;if(!i&&!u)return;const{timestamp:g}=ot();this.history.push({...c.point,timestamp:g});const{onStart:f,onMove:x}=this.handlers;i||(f==null||f(this.lastEvent,c),this.startEvent=this.lastEvent),x==null||x(this.lastEvent,c)}),I(this,"onPointerMove",(c,i)=>{this.lastEvent=c,this.lastEventInfo=i,Tn.update(this.updatePoint,!0)}),I(this,"onPointerUp",(c,i)=>{const u=Pe(i,this.history),{onEnd:g,onSessionEnd:f}=this.handlers;f==null||f(c,u),this.end(),!(!g||!this.startEvent)&&(g==null||g(c,u))});var n;if(this.win=(n=e.view)!=null?n:window,An(e))return;this.handlers=t,s&&(this.threshold=s),e.stopPropagation(),e.preventDefault();const o={point:St(e)},{timestamp:a}=ot();this.history=[{...o.point,timestamp:a}];const{onSessionStart:l}=t;l==null||l(e,Pe(o,this.history)),this.removeListeners=Kn(ne(this.win,"pointermove",this.onPointerMove),ne(this.win,"pointerup",this.onPointerUp),ne(this.win,"pointercancel",this.onPointerUp))}updateHandlers(e){this.handlers=e}end(){var e;(e=this.removeListeners)==null||e.call(this),En.update(this.updatePoint)}};function at(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Pe(e,t){return{point:e.point,delta:at(e.point,t[t.length-1]),offset:at(e.point,t[0]),velocity:Hn(t,.1)}}var Wn=e=>e*1e3;function Hn(e,t){if(e.length<2)return{x:0,y:0};let s=e.length-1,n=null;const o=e[e.length-1];for(;s>=0&&(n=e[s],!(o.timestamp-n.timestamp>Wn(t)));)s--;if(!n)return{x:0,y:0};const a=(o.timestamp-n.timestamp)/1e3;if(a===0)return{x:0,y:0};const l={x:(o.x-n.x)/a,y:(o.y-n.y)/a};return l.x===1/0&&(l.x=0),l.y===1/0&&(l.y=0),l}function Kn(...e){return t=>e.reduce((s,n)=>n(s),t)}function Ce(e,t){return Math.abs(e-t)}function lt(e){return"x"in e&&"y"in e}function Yn(e,t){if(typeof e=="number"&&typeof t=="number")return Ce(e,t);if(lt(e)&&lt(t)){const s=Ce(e.x,t.x),n=Ce(e.y,t.y);return Math.sqrt(s**2+n**2)}return 0}function bt(e){const t=h.useRef(null);return t.current=e,t}function Xn(e,t){const{onPan:s,onPanStart:n,onPanEnd:o,onPanSessionStart:a,onPanSessionEnd:l,threshold:c}=t,i=!!(s||n||o||a||l),u=h.useRef(null),g=bt({onSessionStart:a,onSessionEnd:l,onStart:n,onMove:s,onEnd(f,x){u.current=null,o==null||o(f,x)}});h.useEffect(()=>{var f;(f=u.current)==null||f.updateHandlers(g.current)}),h.useEffect(()=>{const f=e.current;if(!f||!i)return;function x(b){u.current=new Un(b,g.current,c)}return ne(f,"pointerdown",x)},[e,i,g,c]),h.useEffect(()=>()=>{var f;(f=u.current)==null||f.end(),u.current=null},[])}function Zn(e,t){if(!e){t(void 0);return}t({width:e.offsetWidth,height:e.offsetHeight});const s=e.ownerDocument.defaultView??window,n=new s.ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const[a]=o;let l,c;if("borderBoxSize"in a){const i=a.borderBoxSize,u=Array.isArray(i)?i[0]:i;l=u.inlineSize,c=u.blockSize}else l=e.offsetWidth,c=e.offsetHeight;t({width:l,height:c})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}var qn=globalThis!=null&&globalThis.document?h.useLayoutEffect:h.useEffect;function Jn(e,t){var s,n;if(!e||!e.parentElement)return;const o=(n=(s=e.ownerDocument)==null?void 0:s.defaultView)!=null?n:window,a=new o.MutationObserver(()=>{t()});return a.observe(e.parentElement,{childList:!0}),()=>{a.disconnect()}}function Qn({getNodes:e,observeMutation:t=!0}){const[s,n]=h.useState([]),[o,a]=h.useState(0);return qn(()=>{const l=e(),c=l.map((i,u)=>Zn(i,g=>{n(f=>[...f.slice(0,u),g,...f.slice(u+1)])}));if(t){const i=l[0];c.push(Jn(i,()=>{a(u=>u+1)}))}return()=>{c.forEach(i=>{i==null||i()})}},[o]),s}function es(e){return typeof e=="object"&&e!==null&&"current"in e}function ts(e){const[t]=Qn({observeMutation:!1,getNodes(){return[es(e)?e.current:e]}});return t}function ns(e){var t;const{min:s=0,max:n=100,onChange:o,value:a,defaultValue:l,isReversed:c,direction:i="ltr",orientation:u="horizontal",id:g,isDisabled:f,isReadOnly:x,onChangeStart:b,onChangeEnd:N,step:y=1,getAriaValueText:j,"aria-valuetext":A,"aria-label":F,"aria-labelledby":w,name:M,focusThumbOnChange:Mt=!0,...Fe}=e,$e=we(b),L=we(N),Ve=we(j),C=zn({isReversed:c,direction:i,orientation:u}),[_t,ue]=nn({value:a,defaultValue:l??rs(s,n),onChange:o}),[de,Be]=h.useState(!1),[he,Oe]=h.useState(!1),fe=!(f||x),xe=(n-s)/10,G=y||(n-s)/100,v=be(_t,s,n),zt=n-v+s,Le=st(C?zt:v,s,n),J=u==="vertical",S=bt({min:s,max:n,step:y,isDisabled:f,value:v,isInteractive:fe,isReversed:C,isVertical:J,eventSource:null,focusThumbOnChange:Mt,orientation:u}),pe=h.useRef(null),ge=h.useRef(null),Ge=h.useRef(null),Dt=h.useId(),Ue=g??Dt,[We,He]=[`slider-thumb-${Ue}`,`slider-track-${Ue}`],Rt=h.useCallback(d=>{var p,U;if(!pe.current)return;const k=S.current;k.eventSource="pointer";const T=pe.current.getBoundingClientRect(),{clientX:ve,clientY:Lt}=(U=(p=d.touches)==null?void 0:p[0])!=null?U:d,Gt=J?T.bottom-Lt:ve-T.left,Ut=J?T.height:T.width;let ye=Gt/Ut;C&&(ye=1-ye);let W=cn(ye,k.min,k.max);return k.step&&(W=parseFloat(nt(W,k.min,k.step))),W=be(W,k.min,k.max),W},[J,C,S]),_=h.useCallback(d=>{const p=S.current;p.isInteractive&&(d=parseFloat(nt(d,p.min,G)),d=be(d,p.min,p.max),ue(d))},[G,ue,S]),z=h.useMemo(()=>({stepUp(d=G){const p=C?v-d:v+d;_(p)},stepDown(d=G){const p=C?v+d:v-d;_(p)},reset(){_(l||0)},stepTo(d){_(d)}}),[_,C,v,G,l]),Ke=h.useCallback(d=>{const p=S.current,k={ArrowRight:()=>z.stepUp(),ArrowUp:()=>z.stepUp(),ArrowLeft:()=>z.stepDown(),ArrowDown:()=>z.stepDown(),PageUp:()=>z.stepUp(xe),PageDown:()=>z.stepDown(xe),Home:()=>_(p.min),End:()=>_(p.max)}[d.key];k&&(d.preventDefault(),d.stopPropagation(),k(d),p.eventSource="keyboard")},[z,_,xe,S]),Ye=(t=Ve==null?void 0:Ve(v))!=null?t:A,me=ts(ge),{getThumbStyle:Xe,rootStyle:Ze,trackStyle:qe,innerTrackStyle:Je}=h.useMemo(()=>{const d=S.current,p=me??{width:0,height:0};return _n({isReversed:C,orientation:d.orientation,thumbRects:[p],thumbPercents:[Le]})},[C,me,Le,S]),Qe=h.useCallback(()=>{S.current.focusThumbOnChange&&setTimeout(()=>{var p;return(p=ge.current)==null?void 0:p.focus()})},[S]);Wt(()=>{const d=S.current;Qe(),d.eventSource==="keyboard"&&(L==null||L(d.value))},[v,L]);function et(d){const p=Rt(d);p!=null&&p!==S.current.value&&ue(p)}Xn(Ge,{onPanSessionStart(d){const p=S.current;p.isInteractive&&(Be(!0),Qe(),et(d),$e==null||$e(p.value))},onPanSessionEnd(){const d=S.current;d.isInteractive&&(Be(!1),L==null||L(d.value))},onPan(d){S.current.isInteractive&&et(d)}});const At=h.useCallback((d={},p=null)=>({...d,...Fe,ref:Se(p,Ge),tabIndex:-1,"aria-disabled":je(f),"data-focused":$(he),style:{...d.style,...Ze}}),[Fe,f,he,Ze]),Ft=h.useCallback((d={},p=null)=>({...d,ref:Se(p,pe),id:He,"data-disabled":$(f),style:{...d.style,...qe}}),[f,He,qe]),$t=h.useCallback((d={},p=null)=>({...d,ref:p,style:{...d.style,...Je}}),[Je]),Vt=h.useCallback((d={},p=null)=>({...d,ref:Se(p,ge),role:"slider",tabIndex:fe?0:void 0,id:We,"data-active":$(de),"aria-valuetext":Ye,"aria-valuemin":s,"aria-valuemax":n,"aria-valuenow":v,"aria-orientation":u,"aria-disabled":je(f),"aria-readonly":je(x),"aria-label":F,"aria-labelledby":F?void 0:w,style:{...d.style,...Xe(0)},onKeyDown:ke(d.onKeyDown,Ke),onFocus:ke(d.onFocus,()=>Oe(!0)),onBlur:ke(d.onBlur,()=>Oe(!1))}),[fe,We,de,Ye,s,n,v,u,f,x,F,w,Xe,Ke]),Bt=h.useCallback((d,p=null)=>{const U=!(d.value<s||d.value>n),k=v>=d.value,T=st(d.value,s,n),ve={position:"absolute",pointerEvents:"none",...ss({orientation:u,vertical:{bottom:C?`${100-T}%`:`${T}%`},horizontal:{left:C?`${100-T}%`:`${T}%`}})};return{...d,ref:p,role:"presentation","aria-hidden":!0,"data-disabled":$(f),"data-invalid":$(!U),"data-highlighted":$(k),style:{...d.style,...ve}}},[f,C,n,s,u,v]),Ot=h.useCallback((d={},p=null)=>({...d,ref:p,type:"hidden",value:v,name:M}),[M,v]);return{state:{value:v,isFocused:he,isDragging:de},actions:z,getRootProps:At,getTrackProps:Ft,getInnerTrackProps:$t,getThumbProps:Vt,getMarkerProps:Bt,getInputProps:Ot}}function ss(e){const{orientation:t,vertical:s,horizontal:n}=e;return t==="vertical"?s:n}function rs(e,t){return t<e?e:e+(t-e)/2}var[os,ae]=it({name:"SliderContext",hookName:"useSliderContext",providerName:"<Slider />"}),[as,le]=it({name:"SliderStylesContext",hookName:"useSliderStyles",providerName:"<Slider />"}),jt=B((e,t)=>{var s;const n={...e,orientation:(s=e==null?void 0:e.orientation)!=null?s:"horizontal"},o=Ht("Slider",n),a=ct(n),{direction:l}=Kt();a.direction=l;const{getInputProps:c,getRootProps:i,...u}=ns(a),g=i(),f=c({},t);return r.jsx(os,{value:u,children:r.jsx(as,{value:o,children:r.jsxs(O.div,{...g,className:q("chakra-slider",n.className),__css:o.container,children:[n.children,r.jsx("input",{...f})]})})})});jt.displayName="Slider";var kt=B((e,t)=>{const{getThumbProps:s}=ae(),n=le(),o=s(e,t);return r.jsx(O.div,{...o,className:q("chakra-slider__thumb",e.className),__css:n.thumb})});kt.displayName="SliderThumb";var Pt=B((e,t)=>{const{getTrackProps:s}=ae(),n=le(),o=s(e,t);return r.jsx(O.div,{...o,className:q("chakra-slider__track",e.className),__css:n.track})});Pt.displayName="SliderTrack";var Ct=B((e,t)=>{const{getInnerTrackProps:s}=ae(),n=le(),o=s(e,t);return r.jsx(O.div,{...o,className:q("chakra-slider__filled-track",e.className),__css:n.filledTrack})});Ct.displayName="SliderFilledTrack";var ls=B((e,t)=>{const{getMarkerProps:s}=ae(),n=le(),o=s(e,t);return r.jsx(O.div,{...o,className:q("chakra-slider__marker",e.className),__css:n.mark})});ls.displayName="SliderMark";function is(e,t=[]){const s=Object.assign({},e);for(const n of t)n in s&&delete s[n];return s}var cs=["h","minH","height","minHeight"],It=B((e,t)=>{const s=Yt("Textarea",e),{className:n,rows:o,...a}=ct(e),l=sn(a),c=o?is(s,cs):s;return r.jsx(O.textarea,{ref:t,rows:o,...l,className:Xt("chakra-textarea",n),__css:c})});It.displayName="Textarea";var us=De("chevron-left","IconChevronLeft",[["path",{d:"M15 6l-6 6l6 6",key:"svg-0"}]]),Tt=De("pin-filled","IconPinFilled",[["path",{d:"M15.113 3.21l.094 .083l5.5 5.5a1 1 0 0 1 -1.175 1.59l-3.172 3.171l-1.424 3.797a1 1 0 0 1 -.158 .277l-.07 .08l-1.5 1.5a1 1 0 0 1 -1.32 .082l-.095 -.083l-2.793 -2.792l-3.793 3.792a1 1 0 0 1 -1.497 -1.32l.083 -.094l3.792 -3.793l-2.792 -2.793a1 1 0 0 1 -.083 -1.32l.083 -.094l1.5 -1.5a1 1 0 0 1 .258 -.187l.098 -.042l3.796 -1.425l3.171 -3.17a1 1 0 0 1 1.497 -1.26z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),Et=De("pin","IconPin",[["path",{d:"M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4",key:"svg-0"}],["path",{d:"M9 15l-4.5 4.5",key:"svg-1"}],["path",{d:"M14.5 4l5.5 5.5",key:"svg-2"}]]);const ds=({setMediaAct:e,media:t,currentNum:s})=>{const n=l=>{const c=(s+l+t.length)%t.length;e&&e(t[c])},o={width:"100%",height:"100%"};if(t.length===0)return r.jsx("p",{children:"No images found, let's start generating 🪄"});const a=t.at(s);return a?r.jsxs(m,{justifyContent:"center",alignItems:"center",position:"relative",width:o.width,height:o.height,overflow:"hidden",children:[r.jsx("div",{style:{position:"absolute",cursor:"pointer",width:"100%",height:"100%"},onClick:()=>{window.open(a.imageUrl)},children:rn(a.imageUrl)?r.jsx(bn,{src:a.imageUrl,alt:`image-${a.id}`,width:"100%",height:"100%",objectFit:"contain"}):r.jsx("video",{style:{objectFit:"contain"},width:"100%",height:"100%",src:a.imageUrl,loop:!0,autoPlay:!0,muted:!0,children:r.jsx("track",{kind:"captions"})})},a.id),r.jsx(E,{size:"sm",color:"white",bgColor:"whiteAlpha.400","aria-label":"Previous image",icon:r.jsx(us,{}),onClick:()=>n(-1),position:"absolute",left:"0",zIndex:"2"}),r.jsx(E,{size:"sm",color:"white",bgColor:"whiteAlpha.400","aria-label":"Next image",icon:r.jsx(un,{}),onClick:()=>n(1),position:"absolute",right:"0",zIndex:"2"})]}):null};function hs(e){const t=e.split(".").pop();return fetch(e).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.blob()}).then(async s=>{const n=e.split("/").pop()??"",o=new File([s],n);if(dn(e))return hn(o);if(t==="webp")return fn(o);const a=await xn(o),l=JSON.parse(a==null?void 0:a.prompt),c=JSON.parse(a==null?void 0:a.workflow);return{prompt:l,workflow:c}})}const fs=({inputItem:e})=>r.jsxs(m,{gap:2,children:[r.jsx(m,{gap:1,alignItems:"center",flexBasis:"200px",children:e.label??e.inputName}),r.jsx(on,{value:e.inputValue,onChange:t=>{}})]}),xs=e=>{const t=e.inputItem;return r.jsxs(m,{gap:1,direction:"column",children:[r.jsxs(m,{gap:2,children:[r.jsx(m,{gap:1,alignItems:"center",flexBasis:"200px",children:t.label??t.inputName}),r.jsxs(pn,{width:"100%",step:e==null?void 0:e.step,value:t.inputValue,min:e==null?void 0:e.min,max:e==null?void 0:e.max,onChange:s=>{},children:[r.jsx(gn,{}),r.jsxs(mn,{children:[r.jsx(vn,{}),r.jsx(yn,{})]})]})]}),r.jsx(m,{children:r.jsxs(jt,{maxWidth:"400px",step:e==null?void 0:e.step,value:Number(t.inputValue),min:(e==null?void 0:e.min)??0,max:(e==null?void 0:e.max)??100,onChange:s=>{},children:[r.jsx(Pt,{children:r.jsx(Ct,{})}),r.jsx(kt,{})]})})]})},ps=e=>{var s;const{inputItem:t}=e;return r.jsxs(m,{gap:2,children:[r.jsx(m,{gap:1,alignItems:"center",flexBasis:"200px",children:t.label??t.inputName}),r.jsx(jn,{value:t.inputValue,onChange:n=>{},children:(s=e==null?void 0:e.options)==null?void 0:s.map((n,o)=>r.jsx("option",{value:n,children:n},`select${t.nodeID}${t.inputName}${o}`))})]})},gs=e=>{const t=e.inputItem;return r.jsxs(m,{gap:1,direction:"column",children:[r.jsx(m,{children:t.label??t.inputName}),r.jsx(It,{value:t.inputValue,onChange:s=>{},rows:5})]})};var P=(e=>(e.Input="Input",e.InputSlider="InputSlider",e.Select="Select",e.Textarea="Textarea",e.Checkbox="Checkbox",e.NoSupport="NoSupport",e))(P||{});const ms=e=>r.jsxs(m,{gap:2,children:[r.jsx(m,{gap:1,alignItems:"center",flexBasis:"200px",children:e.inputItem.label??e.inputItem.inputName}),r.jsx(m,{children:"No Support"})]}),vs=e=>{const t=e.inputItem;return r.jsxs(m,{gap:2,children:[r.jsx(m,{gap:1,alignItems:"center",flexBasis:"200px",children:t.label??t.inputName}),r.jsx(Ae,{defaultChecked:!!t.inputValue,onChange:s=>{var n;(n=e==null?void 0:e.updateMetaData)==null||n.call(e,{promptKey:e.promptKey,name:e.name,value:s.target.checked})}})]})},ie=h.createContext({topFields:[],calcInputList:[],showNodeName:!1,updateTopField(){}}),ys={[P.Input]:fs,[P.InputSlider]:xs,[P.Select]:ps,[P.Textarea]:gs,[P.Checkbox]:vs,NoSupport:ms},ws=LiteGraph.registered_node_types;function Ss(e,t){var o,a,l,c,i;const s=(o=ws[e])==null?void 0:o.nodeData,n={...((a=s==null?void 0:s.input)==null?void 0:a.required)??{},...((l=s==null?void 0:s.input)==null?void 0:l.optional)??{}}[t];return(n==null?void 0:n[0])==="STRING"?(c=n==null?void 0:n[1])!=null&&c.multiline?{type:P.Textarea}:{type:P.Input}:(n==null?void 0:n[0])==="BOOLEAN"?{type:P.Checkbox}:(n==null?void 0:n[0])==="FLOAT"?{...(n==null?void 0:n[1])??{},type:P.InputSlider}:(n==null?void 0:n[0])==="INT"?{...(n==null?void 0:n[1])??{},type:P.InputSlider}:Array.isArray(n==null?void 0:n[0])&&((i=n==null?void 0:n[0])!=null&&i.every(u=>typeof u=="string"))?{options:n==null?void 0:n[0],type:P.Select}:{type:P.NoSupport}}const _e=({inputItem:e})=>{const t=Ss(e.classType,e.inputName),[s,n]=h.useState(!1),o=ys[t.type??"Input"],{updateTopField:a,topFields:l}=h.useContext(ie),c=e.children[0]==="negative"||e.children[0]==="positive"?`-${e.children[0]}`:"",i={...e,label:e.label??e.inputName+c};return r.jsxs(m,{alignItems:"center",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[r.jsx(E,{size:"xs",onClick:()=>a==null?void 0:a({name:e.inputName,promptKey:e.nodeID,class_type:e.classType}),variant:"ghost",icon:re(l,{name:e.inputName,promptKey:e.nodeID,classType:e.classType})?r.jsx(Tt,{size:14}):r.jsx(Et,{size:14}),"aria-label":"pin"}),r.jsx("div",{style:{flex:1},children:r.jsx(o,{inputItem:i,...t})})]})};function bs(){const{topFields:e,updateTopField:t,calcInputList:s}=h.useContext(ie);return e.length===0?null:r.jsx(r.Fragment,{children:r.jsx(m,{px:2,gap:2,direction:"column",children:e==null?void 0:e.map(n=>{const o=s.find(a=>a.nodeID==n.promptKey&&a.inputName===n.name&&a.classType===n.class_type);return!n.class_type||!o?null:r.jsx(_e,{inputItem:o},`formTopField${n.promptKey}${n.name}`)})})})}function js(){const{topFields:e,calcInputList:t,showNodeName:s}=h.useContext(ie),n=h.useCallback(a=>{const l=[];return a.forEach(c=>{const i=l[l.length-1];!i||i[0].nodeID!==c.nodeID||i[0].classType!==c.classType?l.push([c]):i.push(c)}),l},[]);if(h.useEffect(()=>{},[s]),!s)return r.jsx(Te,{children:t.map(a=>re(e,{name:a.inputName,promptKey:a.nodeID,classType:a.classType})?null:r.jsx(_e,{inputItem:a},`form${a.nodeID}${a.inputName}`))});const o=n(t);return r.jsx(Te,{children:o.map(a=>a[0]?r.jsx(ks,{title:a[0].classType+" #"+a[0].nodeID,children:r.jsx(m,{px:2,gap:1,direction:"column",children:a.map(l=>re(e,{name:l.inputName,promptKey:l.nodeID,classType:l.classType})?null:r.jsx(_e,{inputItem:l},`form${l.nodeID}${l.inputName}`))})},a[0].nodeID):null)})}function ks({title:e,children:t}){return r.jsxs(ht,{border:"1px",borderColor:"gray.500",borderRadius:"md",p:4,children:[r.jsx(K,{size:"sm",mb:1,color:"GrayText",children:e}),r.jsx("div",{children:t})]})}let se=[],ze=new Set;function Nt(e,t){if(!ze.has(e.nodeID))return ze.add(e.nodeID),Object.entries(e.inputs).forEach(([s,n])=>{if(Array.isArray(n)){const o=n[0];Nt(t[o],t)}}),Object.entries(e.inputs).forEach(([s,n])=>{Array.isArray(n)||se.push({classType:e.class_type,inputName:s,inputValue:n,nodeID:e.nodeID,children:e.children||[]})}),se}function Ps(e){se=[],ze=new Set;for(const t of Object.keys(e))e[t].nodeID=t,Object.entries(e[t].inputs).forEach(([s,n])=>{if(Array.isArray(n)){const o=n[0],a=e[o];a.children||(a.children=[]),a.children.push(s)}});for(const t of Object.keys(e))Nt(e[t],e);return se}const re=(e,t)=>e==null?void 0:e.some(s=>s.promptKey===(t==null?void 0:t.promptKey)&&s.name===(t==null?void 0:t.name)&&s.class_type===t.classType);function Cs({media:e}){const[t,s]=h.useState([]),[n,o]=h.useState(),[a,l]=h.useState(!0),[c,i]=h.useState(!0);h.useEffect(()=>{e?hs(`/workspace/view_media?filename=${e.localPath}`).then(x=>{o(x.prompt)}):tt.graphToPrompt(tt.graph).then(x=>{o(x.output)})},[e]),h.useEffect(()=>{if(!n)return;const x=Ps(n);s(x)},[n]);const[u,g]=h.useState([]),f=x=>{if(re(u,{name:x.name,promptKey:x==null?void 0:x.promptKey,classType:(x==null?void 0:x.class_type)??""})){const b=u.filter(N=>N.name!==x.name||N.promptKey!==x.promptKey);g(b)}else{const b=[...u,x];g(b)}};return r.jsx(ie.Provider,{value:{topFields:u,showNodeName:c,calcInputList:t,updateTopField:f},children:r.jsxs(m,{direction:"column",align:"stretch",gap:5,children:[r.jsx(bs,{}),r.jsxs(Y,{children:[r.jsx("p",{children:"Show all inputs"}),r.jsx(rt,{isChecked:a,onChange:x=>l(!a)}),r.jsx("p",{children:"Show node names"}),r.jsx(rt,{isChecked:c,onChange:x=>i(!c)})]}),a&&r.jsx(js,{})]})})}const ce=h.createContext({showAllImages:!1,curMedia:null,setCurMedia(){},setMediaList(){},setShowAllImages(){}}),Is=({media:e})=>{var l,c;const[t,s]=h.useState(!1),{setMediaList:n}=h.useContext(ce),{loadFilePath:o}=h.useContext(Re),{showDialog:a}=ut();return h.useEffect(()=>{var i,u;s((e==null?void 0:e.localPath)!=null&&((u=(i=H)==null?void 0:i.curWorkflow)==null?void 0:u.coverMediaPath)===(e==null?void 0:e.localPath))},[e]),e?r.jsxs(m,{flexWrap:"wrap",gap:3,children:[r.jsx(m,{alignItems:"center",gap:2,children:e.localPath&&r.jsxs(r.Fragment,{children:[r.jsx(K,{children:e==null?void 0:e.localPath}),r.jsx(D,{label:"Donwload image from gallery",children:r.jsx(Ee,{href:`/workspace/view_media?filename=${e==null?void 0:e.localPath}`,download:e==null?void 0:e.localPath,children:r.jsx(E,{size:"sm",icon:r.jsx(ft,{size:19}),"aria-label":"donwload image from gallery"})})})]})}),r.jsx(m,{gap:1,alignItems:"center",color:"GrayText",children:!!(e!=null&&e.createTime)&&r.jsx(K,{children:xt((e==null?void 0:e.createTime)??0,!0)})}),r.jsx(D,{label:"Remove image from gallery",children:r.jsx(E,{size:"sm",variant:"ghost",icon:r.jsx(pt,{size:19}),"aria-label":"remove image from gallery",colorScheme:"red",onClick:async()=>{var u;confirm("Are you sure to remove this image from gallery? (won't delete image on your disk)")&&(await((u=R)==null?void 0:u.delete(e.id)),n(g=>g.filter(f=>f.id!==e.id)))}})}),((c=(l=H)==null?void 0:l.curWorkflow)==null?void 0:c.id)&&r.jsx(D,{label:"Set as cover",children:r.jsx(E,{size:"sm",variant:"ghost",icon:t?r.jsx(Tt,{size:19}):r.jsx(Et,{size:19}),"aria-label":"set as cover",onClick:async()=>{var i;await((i=H)==null?void 0:i.updateMetaInfo(H.curWorkflow.id,{coverMediaPath:t?void 0:e.localPath})),s(!t)}})}),r.jsx(dt,{onClick:()=>a("How do you want to load this workflow?",[{label:"Load in new workflow",onClick:()=>{o(e.localPath)},colorScheme:"teal"},{label:"Overwrite current workflow",onClick:()=>o(e.localPath,!0),colorScheme:"red"}]),size:"sm",children:"Load"})]}):null},Ts=({media:e})=>r.jsxs(m,{overflowY:"auto",mb:4,direction:"column",gap:2,flex:1,children:[r.jsx(Is,{media:e}),r.jsx(Cs,{media:e??null})]}),Ie=120;function Es({mediaList:e}){const{curMedia:t,setCurMedia:s}=h.useContext(ce);return r.jsxs(m,{gap:3,h:"100%",children:[r.jsxs(kn,{gridTemplateRows:e.length<=6?"1fr 20%":"1fr",flex:1,gap:2,children:[r.jsx("div",{style:{height:"56vh"},children:r.jsx(ds,{media:e.map(n=>({id:n.id,imageUrl:`/workspace/view_media?filename=${n.localPath}`})),currentNum:(e==null?void 0:e.findIndex(n=>n.id===(t==null?void 0:t.id)))??0,setMediaAct:n=>s((e==null?void 0:e.find(o=>o.id===n.id))??null)})}),r.jsx(m,{wrap:"wrap",children:e==null?void 0:e.map(n=>r.jsx(ht,{display:"inline-block",p:1,borderRadius:"4px",width:`${Ie+3}px`,height:`${Ie+3}px`,cursor:"pointer",border:(t==null?void 0:t.id)===n.id?"1px solid gray":"",onClick:()=>s(n),children:r.jsx(gt,{mediaLocalPath:n.localPath,size:Ie,objectFit:"contain",hideBrokenImage:!0,onBrokenLink:()=>{var o;(o=R)==null||o.delete(n.id)}})},`image-bottom-${n.id}`))})]}),r.jsx(Ts,{media:t??void 0})]})}const Ns=({media:e,isSelecting:t,selectedID:s,onClickMedia:n})=>{const{curFlowID:a,loadFilePath:l}=h.useContext(Re),{showDialog:c}=ut();if(e.localPath==null||a==null)return null;const i=r.jsxs(Ee,{isExternal:!0,onClick:()=>n(e),position:"relative",children:[t&&r.jsx(Ae,{isChecked:s.includes(e.id),position:"absolute",top:2,left:2}),r.jsx(gt,{mediaLocalPath:e.localPath,size:180,onBrokenLink:()=>{var u;(u=R)==null||u.delete(e.id)},hideBrokenImage:!0,autoPlay:!0,isPreview:!0})]});return r.jsxs(Te,{width:180,mb:2,children:[r.jsx(D,{label:xt(e.createTime,!0),children:i}),r.jsx(D,{label:e.localPath,children:r.jsx(K,{color:"GrayText",noOfLines:1,children:e.localPath})}),r.jsxs(Y,{hidden:t,gap:0,children:[r.jsx(dt,{flexGrow:1,onClick:()=>c("How do you want to load this workflow?",[{label:"Load in new workflow",onClick:()=>{l(e.localPath)},colorScheme:"teal"},{label:"Overwrite current workflow",onClick:()=>l(e.localPath,!0),colorScheme:"red"}]),size:"sm",children:"Load"}),r.jsx(D,{label:"Donwload image from gallery",children:r.jsx(Ee,{href:`/workspace/view_media?filename=${e.localPath}`,download:e.localPath,children:r.jsx(E,{size:"sm",variant:"ghost",icon:r.jsx(ft,{size:19}),"aria-label":"donwload image from gallery"})})}),r.jsx(D,{label:"Remove image from gallery",children:r.jsx(E,{size:"sm",variant:"ghost",icon:r.jsx(pt,{size:19}),"aria-label":"remove image from gallery",colorScheme:"red",onClick:async()=>{var g;confirm("Are you sure to remove this image from gallery? (won't delete image on your disk)")&&await((g=R)==null?void 0:g.delete(e.id))}})})]})]})},Ms=Ns;function _s({searchQuery:e}){const[t,s]=h.useState([]),{setCurMedia:n,setShowAllImages:o,setMediaList:a}=h.useContext(ce);h.useEffect(()=>{var c,i;e===""?(c=R)==null||c.listAll().then(u=>{s(u.slice(0,50)??[])}):(i=R)==null||i.filter(u=>{var g;return((g=u.workflowJSON)==null?void 0:g.includes(e))??!1}).then(u=>{s(u)})},[e]);const l=c=>{a([c].concat(t.filter(i=>i.id!==c.id))),n(c),o(!1)};return r.jsx(Y,{wrap:"wrap",children:t.map(c=>r.jsx(Ms,{selectedID:[],media:c,isSelecting:!1,onClickMedia:l},c.id))})}function Gs({onclose:e}){const{curFlowID:t}=h.useContext(Re),[s,n]=h.useState(""),[o,a]=h.useState([]),[l,c]=h.useState(!1),[i,u]=h.useState([]),[g,f]=h.useState(),[x,b]=h.useState(""),N=wn(x,300),[y,j]=h.useState(!1),A=async()=>{var M;if(t==null)return;const w=await((M=R)==null?void 0:M.listByWorkflowID(t));u(w??[]),w!=null&&w.length&&f(w[0])};if(h.useEffect(()=>{var w;A(),t&&((w=H)==null||w.get(t).then(M=>{M&&n(M.name)}))},[]),t==null)return null;const F=i.length>0&&o.length===i.length;return r.jsx(ce.Provider,{value:{curMedia:g??null,setCurMedia:f,setMediaList:u,showAllImages:y,setShowAllImages:j},children:r.jsxs(Zt,{isOpen:!0,onClose:e,blockScrollOnMount:!0,children:[r.jsx(qt,{}),r.jsxs(Jt,{width:"90%",maxWidth:"90vw",height:"90vh",children:[r.jsxs(Qt,{children:[r.jsxs(Y,{gap:2,mb:2,children:[r.jsxs(an,{size:"md",mr:2,children:["Gallery - ",s]}),r.jsx(Sn,{searchValue:x,onUpdateSearchValue:w=>{b(w),y||j(!0)},placeholder:"Search prompt, model name, etc.",style:{width:"300px"}})]}),l&&r.jsxs(Y,{gap:3,children:[r.jsx(Ae,{isChecked:F,onChange:()=>{a(F?[]:i.map(w=>w.id))},children:"All"}),r.jsxs(K,{fontSize:16,children:[o.length," Selected"]}),r.jsx(E,{size:"sm",icon:r.jsx(ln,{size:19}),onClick:()=>c(!1),"aria-label":"cancel"})]})]}),r.jsx(en,{}),r.jsx(tn,{overflowY:"auto",children:y?r.jsx(_s,{searchQuery:N}):r.jsx(Es,{mediaList:i})})]})]})})}export{Gs as default};

import{r as c,j as e,h as d,P as f}from"./input.js";import{app as m}from"/scripts/app.js";import{G as x,g as j,I as v}from"./ModelManagerTopbar-4fKW20g4.js";import{l as h,H as w,ab as g,B as _,ad as M,ae as E,aM as I,F as S,an as b}from"./App-sgH6j00M.js";import{V as k}from"./chunk-NTCQBYKE-4zMWD2m4.js";import{I as y,G as C}from"./chunk-JARCRF6W-swAlFRrB.js";import"/scripts/api.js";import"./chunk-3RSXBRAN-hQn4Wngd.js";import"./index-pz0vT7Or.js";function z({model:s}){const[a,t]=c.useState([]),n=D(s.received_value),p=async()=>{const l=await(await fetch(`https://huggingface.co/api/models?limit=3&search=${n}&full=true`)).json(),i=[];l.slice(0,1).forEach(({modelId:r,siblings:H})=>{i.push({name:r,downloadUrl:`https://huggingface.co/${r}/resolve/main/`,url:`https://huggingface.co/${r}/tree/main`,icon:"https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png"})}),t(r=>[...r,...i])},u=async()=>{const o=await j(n);t(l=>[...l,...o==null?void 0:o.slice(0,1).map(i=>({name:i.name,url:"https://civitai.com/models/"+i.id,icon:"https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/gtxrcmtsvpjjevozblfa"}))])};return c.useEffect(()=>{p(),u()},[]),e.jsx(x,{p:3,shadow:"md",borderWidth:"1px",children:e.jsxs(k,{align:"start",children:[e.jsx(h,{children:s.class_type}),e.jsxs(w,{ml:3,children:[e.jsxs(h,{children:[s.input_name,": "]}),e.jsx(h,{color:"red.400",children:s.received_value})]}),a.map(({url:o,name:l,icon:i})=>e.jsx(d,{size:"sm",onClick:r=>{r.stopPropagation(),window.open(o,"_blank")},leftIcon:e.jsx(y,{width:5,src:i}),rightIcon:e.jsx(g,{size:20}),children:l})),e.jsx(d,{colorScheme:"blue",mt:5,iconSpacing:1,leftIcon:e.jsx(g,{size:20}),size:"sm",onClick:()=>{window.open(`https://civitai.com/search/models?sortBy=models_v5&query=${n}`,"_blank")},children:"Search in CivitAI"})]})})}function D(s){return s.replace(/^.*(\\|\/|\:)/,"").replace(/\.[^/.]+$/,"").replaceAll("_"," ").replace(/([A-Z])/g," $1").trim()}function B({onClose:s,missingModels:a}){c.useEffect(()=>(m.canvasEl.addEventListener("click",s),()=>{m.canvasEl.removeEventListener("click",s)}),[]);const t=480;return e.jsx(f,{children:e.jsx(_,{style:{width:t},children:e.jsxs(M,{width:t,height:"100vh",p:4,gap:2,position:"fixed",top:0,left:0,shadow:"xl",zIndex:E,overflowY:"auto",children:[e.jsx(I,{children:e.jsxs(S,{justifyContent:"space-between",alignContent:"center",children:[e.jsxs(b,{size:"md",mr:2,children:["Missing Models (",a.length,")"]}),e.jsx(v,{})]})}),e.jsx(C,{templateColumns:"1",gap:1,marginTop:2,width:"100%",children:a.map(n=>e.jsx(z,{model:n},n.received_value))})]})})})}function T({}){const[s,a]=c.useState(!1),[t,n]=c.useState([]);return c.useEffect(()=>{},[]),t.length===0?null:e.jsxs(e.Fragment,{children:[e.jsxs(d,{size:"sm","aria-label":"missing models",px:2,onClick:()=>a(!0),colorScheme:"teal",children:["Install Missing (",t.length,")"]}),s&&e.jsx(B,{onClose:()=>a(!1),missingModels:t})]})}export{T as default};

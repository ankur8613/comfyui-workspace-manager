import{G as f,I as x}from"./chunk-JARCRF6W-e36i6h0a.js";import{f as g,E as w,j as a,ae as v,r as u}from"./input.js";import{aq as m,h,B as I,I as S,C as b,n as j,am as y}from"./App-o5ZV0PeE.js";var C=g(function(t,r){const{columns:s,spacingX:o,spacingY:n,spacing:c,minChildWidth:i,...l}=t,p=w(),d=i?E(i,p):M(s);return a.jsx(f,{ref:r,gap:c,columnGap:o,rowGap:n,templateColumns:d,...l})});C.displayName="SimpleGrid";function k(e){return typeof e=="number"?`${e}px`:e}function E(e,t){return m(e,r=>{const s=v("sizes",r,k(r))(t);return r===null?null:`repeat(auto-fit, minmax(${s}, 1fr))`})}function M(e){return m(e,t=>t===null?null:`repeat(${t}, minmax(0, 1fr))`)}var T=h("chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]]),$=h("search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]]);const G={position:"absolute",marginLeft:"10px",width:"20px",height:"20px",top:"50%",color:"#A0AEC0",transform:"translateY(-50%)"};function z(e){const{searchValue:t,onUpdateSearchValue:r}=e,s=t!=="";return a.jsxs(I,{style:{position:"relative"},mb:2,children:[a.jsx($,{style:G}),s&&a.jsx(S,{size:"xs",position:"absolute",right:"5px",top:"50%",transform:"translateY(-50%)",cursor:"pointer",background:"none",zIndex:"100",icon:a.jsx(b,{width:15,height:15}),onClick:()=>r(""),"aria-label":"clear input button"}),a.jsx(j,{placeholder:"Search",size:"sm",paddingLeft:"35px",paddingBlock:"5px",value:t,onChange:({target:o})=>r(o.value)})]})}function Y({mediaLocalPath:e,size:t,isPreview:r,autoPlay:s,hideBrokenImage:o,onBrokenLink:n}){const[c,i]=u.useState(!0);return u.useEffect(()=>{o&&(async()=>{try{if(!(await fetch(r?`/workspace/preview_media?filename=${e}`:`/workspace/view_media?filename=${e}`)).ok)throw new Error("Media not found");i(!0)}catch{i(!1),n==null||n()}})()},[]),c?y(e)?a.jsx(x,{borderRadius:3,boxSize:`${t}px`,objectFit:"cover",src:`/workspace/view_media?filename=${e}`,alt:"workflow image renamed or moved from output folder"}):a.jsx("video",{width:t,height:t,src:`/workspace/view_media?filename=${e}`,loop:!0,autoPlay:s??!1,muted:!0,children:a.jsx("track",{kind:"captions"})}):null}export{T as I,Y as M,C as S,z as a};

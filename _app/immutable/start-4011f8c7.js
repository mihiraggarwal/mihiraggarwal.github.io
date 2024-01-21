import{S as at,i as rt,s as ot,a as it,e as B,c as st,b as J,g as de,t as F,d as pe,f as M,h as G,j as lt,o as Ie,k as ct,l as ft,m as ut,n as ve,p as C,q as dt,r as pt,u as ht,v as W,w as Y,x as Ue,y as X,z as Z,A as ce}from"./chunks/index-74b2ff11.js";import{S as tt,I as V,g as Ke,f as ze,a as Ee,b as fe,s as q,i as We,c as ue,P as Ye,d as mt,e as _t,h as gt}from"./chunks/singletons-68d6f791.js";function wt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function yt(a){return a.split("%25").map(decodeURI).join("%25")}function bt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const vt=["href","pathname","search","searchParams","toString","toJSON"];function Et(a,e){const n=new URL(a);for(const s of vt){let o=n[s];Object.defineProperty(n,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return kt(n),n}function kt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const St="/__data.json";function Rt(a){return a.replace(/\/$/,"")+St}function Lt(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ne.delete($e(a)),he(a,e));const ne=new Map;function It(a,e){const n=$e(a,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:o,...d}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&ne.set(n,{body:o,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,d))}return he(a,e)}function At(a,e,n){if(ne.size>0){const s=$e(a,n),o=ne.get(s);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(o.body,o.init);ne.delete(s)}}return he(e,n)}function $e(a,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Lt(e.body)}"]`),s}const Ot=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${$t(a).map(s=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((_,h)=>{if(h%2){if(_.startsWith("x+"))return ke(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return ke(String.fromCharCode(..._.slice(2).split("-").map(O=>parseInt(O,16))));const g=Ot.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,y,R,T,D]=g;return e.push({name:T,matcher:D,optional:!!y,rest:!!R,chained:R?h===1&&t[0]==="":!1}),R?"(.*?)":y?"([^/]*)?":"([^/]+?)"}return ke(_)}).join("")}).join("")}/?$`),params:e}}function Ut(a){return!/^\([^)]+\)$/.test(a)}function $t(a){return a.slice(1).split("/").filter(Ut)}function Nt(a,e,n){const s={},o=a.slice(1);let d="";for(let t=0;t<e.length;t+=1){const f=e[t];let _=o[t];if(f.chained&&f.rest&&d&&(_=_?d+"/"+_:d),d="",_===void 0)f.rest&&(s[f.name]="");else{if(f.matcher&&!n[f.matcher](_)){if(f.optional&&f.chained){let h=o.indexOf(void 0,t);if(h===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)d=_;else return}for(;h>=t;)o[h]=o[h-1],h-=1;continue}return}s[f.name]=_}}if(!d)return s}function ke(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Tt(a,e,n,s){const o=new Set(e);return Object.entries(n).map(([f,[_,h,g]])=>{const{pattern:y,params:R}=Pt(f),T={id:f,exec:D=>{const O=y.exec(D);if(O)return Nt(O,R,s)},errors:[1,...g||[]].map(D=>a[D]),layouts:[0,...h||[]].map(t),leaf:d(_)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function d(f){const _=f<0;return _&&(f=~f),[_,a[f]]}function t(f){return f===void 0?f:[o.has(f),a[f]]}}function jt(a){let e,n,s;var o=a[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=W(o,d(a))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Ue(e.$$.fragment,t),n=B()},m(t,f){e&&X(e,t,f),J(t,n,f),s=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&2&&(_.form=t[1]),o!==(o=t[0][0])){if(e){de();const h=e;F(h.$$.fragment,1,0,()=>{Z(h,1)}),pe()}o?(e=W(o,d(t)),Y(e.$$.fragment),M(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&M(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&Z(e,t)}}}function Dt(a){let e,n,s;var o=a[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Ct]},$$scope:{ctx:t}}}}return o&&(e=W(o,d(a))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Ue(e.$$.fragment,t),n=B()},m(t,f){e&&X(e,t,f),J(t,n,f),s=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&523&&(_.$$scope={dirty:f,ctx:t}),o!==(o=t[0][0])){if(e){de();const h=e;F(h.$$.fragment,1,0,()=>{Z(h,1)}),pe()}o?(e=W(o,d(t)),Y(e.$$.fragment),M(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&M(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&Z(e,t)}}}function Ct(a){let e,n,s;var o=a[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=W(o,d(a))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Ue(e.$$.fragment,t),n=B()},m(t,f){e&&X(e,t,f),J(t,n,f),s=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&2&&(_.form=t[1]),o!==(o=t[0][1])){if(e){de();const h=e;F(h.$$.fragment,1,0,()=>{Z(h,1)}),pe()}o?(e=W(o,d(t)),Y(e.$$.fragment),M(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&M(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&Z(e,t)}}}function Xe(a){let e,n=a[5]&&Ze(a);return{c(){e=ct("div"),n&&n.c(),this.h()},l(s){e=ft(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=ut(e);n&&n.l(o),o.forEach(G),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(s,o){J(s,e,o),n&&n.m(e,null)},p(s,o){s[5]?n?n.p(s,o):(n=Ze(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&G(e),n&&n.d()}}}function Ze(a){let e;return{c(){e=dt(a[6])},l(n){e=pt(n,a[6])},m(n,s){J(n,e,s)},p(n,s){s&64&&ht(e,n[6])},d(n){n&&G(e)}}}function Vt(a){let e,n,s,o,d;const t=[Dt,jt],f=[];function _(g,y){return g[0][1]?0:1}e=_(a),n=f[e]=t[e](a);let h=a[4]&&Xe(a);return{c(){n.c(),s=it(),h&&h.c(),o=B()},l(g){n.l(g),s=st(g),h&&h.l(g),o=B()},m(g,y){f[e].m(g,y),J(g,s,y),h&&h.m(g,y),J(g,o,y),d=!0},p(g,[y]){let R=e;e=_(g),e===R?f[e].p(g,y):(de(),F(f[R],1,1,()=>{f[R]=null}),pe(),n=f[e],n?n.p(g,y):(n=f[e]=t[e](g),n.c()),M(n,1),n.m(s.parentNode,s)),g[4]?h?h.p(g,y):(h=Xe(g),h.c(),h.m(o.parentNode,o)):h&&(h.d(1),h=null)},i(g){d||(M(n),d=!0)},o(g){F(n),d=!1},d(g){f[e].d(g),g&&G(s),h&&h.d(g),g&&G(o)}}}function qt(a,e,n){let{stores:s}=e,{page:o}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:_=null}=e;lt(s.page.notify);let h=!1,g=!1,y=null;return Ie(()=>{const R=s.page.subscribe(()=>{h&&(n(5,g=!0),n(6,y=document.title||"untitled page"))});return n(4,h=!0),R}),a.$$set=R=>{"stores"in R&&n(7,s=R.stores),"page"in R&&n(8,o=R.page),"components"in R&&n(0,d=R.components),"form"in R&&n(1,t=R.form),"data_0"in R&&n(2,f=R.data_0),"data_1"in R&&n(3,_=R.data_1)},a.$$.update=()=>{a.$$.dirty&384&&s.page.set(o)},[d,t,f,_,h,g,y,s,o]}class Bt extends at{constructor(e){super(),rt(this,e,qt,Vt,ot,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft="modulepreload",Mt=function(a,e){return new URL(a,e).href},Qe={},ee=function(e,n,s){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=Mt(d,s),d in Qe)return;Qe[d]=!0;const t=d.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!s)for(let g=o.length-1;g>=0;g--){const y=o[g];if(y.href===d&&(!t||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const h=document.createElement("link");if(h.rel=t?"stylesheet":Ft,t||(h.as="script",h.crossOrigin=""),h.href=d,document.head.appendChild(h),t)return new Promise((g,y)=>{h.addEventListener("load",g),h.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},Gt={},me=[()=>ee(()=>import("./chunks/0-a9db2adb.js"),["./chunks\\0-a9db2adb.js","./components\\pages\\_layout.svelte-d6e80688.js","./chunks\\index-74b2ff11.js","./chunks\\stores-22904aa3.js","./assets\\_layout-ed1ff831.css"],import.meta.url),()=>ee(()=>import("./chunks/1-c98ffd3c.js"),["./chunks\\1-c98ffd3c.js","./components\\error.svelte-14d0dcff.js","./chunks\\index-74b2ff11.js","./chunks\\singletons-68d6f791.js"],import.meta.url),()=>ee(()=>import("./chunks/2-dd4cb6d0.js"),["./chunks\\2-dd4cb6d0.js","./components\\pages\\_page.svelte-bdef1cdd.js","./chunks\\index-74b2ff11.js","./chunks\\Content-6f546fd7.js","./chunks\\stores-22904aa3.js","./assets\\Content-5fdd84a0.css"],import.meta.url),()=>ee(()=>import("./chunks/3-bf40ecdf.js"),["./chunks\\3-bf40ecdf.js","./chunks\\_page-fca24c55.js","./components\\pages\\music\\_page.svelte-b868cfe9.js","./chunks\\index-74b2ff11.js","./chunks\\Content-6f546fd7.js","./chunks\\stores-22904aa3.js","./assets\\Content-5fdd84a0.css"],import.meta.url),()=>ee(()=>import("./chunks/4-ab32735a.js"),["./chunks\\4-ab32735a.js","./chunks\\_page-da46b06b.js","./components\\pages\\tech\\_page.svelte-f32deb06.js","./chunks\\index-74b2ff11.js","./chunks\\Content-6f546fd7.js","./chunks\\stores-22904aa3.js","./assets\\Content-5fdd84a0.css"],import.meta.url)],Ht=[0],Jt={"/":[2],"/music":[3],"/tech":[4]},Kt={handleError:({error:a})=>{console.error(a)}};let Ae=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},xe=class{constructor(e,n){this.status=e,this.location=n}};async function zt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([s,o])=>[s,await o])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Wt=-1,Yt=-2,Xt=-3,Zt=-4,Qt=-5,xt=-6;function en(a){if(typeof a=="number")return s(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function s(o,d=!1){if(o===Wt)return;if(o===Xt)return NaN;if(o===Zt)return 1/0;if(o===Qt)return-1/0;if(o===xt)return-0;if(d)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const _=new Set;n[o]=_;for(let y=1;y<t.length;y+=1)_.add(s(t[y]));break;case"Map":const h=new Map;n[o]=h;for(let y=1;y<t.length;y+=2)h.set(s(t[y]),s(t[y+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[o]=g;for(let y=1;y<t.length;y+=2)g[t[y]]=s(t[y+1]);break}else{const f=new Array(t.length);n[o]=f;for(let _=0;_<t.length;_+=1){const h=t[_];h!==Yt&&(f[_]=s(h))}}else{const f={};n[o]=f;for(const _ in t){const h=t[_];f[_]=s(h)}}return n[o]}return s(0)}function tn(a){return a.filter(e=>e!=null)}const Se=Tt(me,Ht,Jt,Gt),Oe=me[0],Pe=me[1];Oe();Pe();let ae={};try{ae=JSON.parse(sessionStorage[tt])}catch{}function Re(a){ae[a]=ue()}function nn({target:a,base:e}){var Ge;const n=document.documentElement,s=[];let o=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,_=!1,h=!0,g=!1,y=!1,R=!1,T=!1,D,O=(Ge=history.state)==null?void 0:Ge[V];O||(O=Date.now(),history.replaceState({...history.state,[V]:O},"",location.href));const _e=ae[O];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let H,Ne,re;async function Te(){re=re||Promise.resolve(),await re,re=null;const r=new URL(location.href),i=se(r,!0);o=null,await De(i,r,[])}async function ge(r,{noScroll:i=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:u=!1},m,v){return typeof r=="string"&&(r=new URL(r,Ke(document))),le({url:r,scroll:i?ue():null,keepfocus:l,redirect_chain:m,details:{state:p,replaceState:c},nav_token:v,accepted:()=>{u&&(T=!0)},blocked:()=>{},type:"goto"})}async function je(r){const i=se(r,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return o={id:i.id,promise:qe(i).then(c=>(c.type==="loaded"&&c.state.error&&(o=null),c))},o.promise}async function oe(...r){const c=Se.filter(l=>r.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function De(r,i,c,l,p={},u){var v,b;Ne=p;let m=r&&await qe(r);if(m||(m=await Me(i,{id:null},await te(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(r==null?void 0:r.url)||i,Ne!==p)return!1;if(m.type==="redirect")if(c.length>10||c.includes(i.pathname))m=await ie({status:500,error:await te(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return ge(new URL(m.location,i).href,{},[...c,i.pathname],p),!1;else((b=(v=m.props)==null?void 0:v.page)==null?void 0:b.status)>=400&&await q.updated.check()&&await x(i);if(s.length=0,T=!1,g=!0,l&&l.details){const{details:w}=l,k=w.replaceState?0:1;w.state[V]=O+=k,history[w.replaceState?"replaceState":"pushState"](w.state,"",i)}if(o=null,_?(t=m.state,m.props.page&&(m.props.page.url=i),D.$set(m.props)):Ce(m),l){const{scroll:w,keepfocus:k}=l,{activeElement:P}=document;await ce();const j=document.activeElement!==P&&document.activeElement!==document.body;if(!k&&!j&&await Le(),h){const L=i.hash&&document.getElementById(i.hash.slice(1));w?scrollTo(w.x,w.y):L?L.scrollIntoView():scrollTo(0,0)}}else await ce();h=!0,m.props.page&&(H=m.props.page),u&&u(),g=!1}function Ce(r){var l;t=r.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),H=r.props.page,D=new Bt({target:a,props:{...r.props,stores:q},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(p=>p(c)),_=!0}async function Q({url:r,params:i,branch:c,status:l,error:p,route:u,form:m}){let v="never";for(const L of c)(L==null?void 0:L.slash)!==void 0&&(v=L.slash);r.pathname=wt(r.pathname,v),r.search=r.search;const b={type:"loaded",state:{url:r,params:i,branch:c,error:p,route:u},props:{components:tn(c).map(L=>L.node.component)}};m!==void 0&&(b.props.form=m);let w={},k=!H,P=0;for(let L=0;L<Math.max(c.length,t.branch.length);L+=1){const E=c[L],U=t.branch[L];(E==null?void 0:E.data)!==(U==null?void 0:U.data)&&(k=!0),E&&(w={...w,...E.data},k&&(b.props[`data_${P}`]=w),P+=1)}return(!t.url||r.href!==t.url.href||t.error!==p||m!==void 0&&m!==H.form||k)&&(b.props.page={error:p,params:i,route:{id:(u==null?void 0:u.id)??null},status:l,url:new URL(r),form:m??null,data:k?w:H.data}),b}async function we({loader:r,parent:i,url:c,params:l,route:p,server_data_node:u}){var w,k,P;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await r();if((w=b.universal)!=null&&w.load){let j=function(...E){for(const U of E){const{href:N}=new URL(U,c);v.dependencies.add(N)}};const L={route:{get id(){return v.route=!0,p.id}},params:new Proxy(l,{get:(E,U)=>(v.params.add(U),E[U])}),data:(u==null?void 0:u.data)??null,url:Et(c,()=>{v.url=!0}),async fetch(E,U){let N;E instanceof Request?(N=E.url,U={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...U}):N=E;const S=new URL(N,c).href;return j(S),_?At(N,S,U):It(N,U)},setHeaders:()=>{},depends:j,parent(){return v.parent=!0,i()}};m=await b.universal.load.call(null,L)??null,m=m?await zt(m):null}return{node:b,loader:r,server:u,universal:(k=b.universal)!=null&&k.load?{type:"data",data:m,uses:v}:null,data:m??(u==null?void 0:u.data)??null,slash:((P=b.universal)==null?void 0:P.trailingSlash)??(u==null?void 0:u.slash)}}function Ve(r,i,c,l,p){if(T)return!0;if(!l)return!1;if(l.parent&&r||l.route&&i||l.url&&c)return!0;for(const u of l.params)if(p[u]!==t.params[u])return!0;for(const u of l.dependencies)if(s.some(m=>m(new URL(u))))return!0;return!1}function ye(r,i){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?i??null:null}async function qe({id:r,invalidating:i,url:c,params:l,route:p}){if((o==null?void 0:o.id)===r)return o.promise;const{errors:u,layouts:m,leaf:v}=p,b=[...m,v];u.forEach(S=>S==null?void 0:S().catch(()=>{})),b.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let w=null;const k=t.url?r!==t.url.pathname+t.url.search:!1,P=t.route?p.id!==t.route.id:!1,j=b.reduce((S,A,$)=>{var z;const I=t.branch[$],K=!!(A!=null&&A[0])&&((I==null?void 0:I.loader)!==A[1]||Ve(S.some(Boolean),P,k,(z=I.server)==null?void 0:z.uses,l));return S.push(K),S},[]);if(j.some(Boolean)){try{w=await et(c,j)}catch(S){return ie({status:500,error:await te(S,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(w.type==="redirect")return w}const L=w==null?void 0:w.nodes;let E=!1;const U=b.map(async(S,A)=>{var z;if(!S)return;const $=t.branch[A],I=L==null?void 0:L[A];if((!I||I.type==="skip")&&S[1]===($==null?void 0:$.loader)&&!Ve(E,P,k,(z=$.universal)==null?void 0:z.uses,l))return $;if(E=!0,(I==null?void 0:I.type)==="error")throw I;return we({loader:S[1],url:c,params:l,route:p,parent:async()=>{var Je;const He={};for(let be=0;be<A;be+=1)Object.assign(He,(Je=await U[be])==null?void 0:Je.data);return He},server_data_node:ye(I===void 0&&S[0]?{type:"skip"}:I??null,$==null?void 0:$.server)})});for(const S of U)S.catch(()=>{});const N=[];for(let S=0;S<b.length;S+=1)if(b[S])try{N.push(await U[S])}catch(A){if(A instanceof xe)return{type:"redirect",location:A.location};let $=500,I;if(L!=null&&L.includes(A))$=A.status??$,I=A.error;else if(A instanceof Ae)$=A.status,I=A.body;else{if(await q.updated.check())return await x(c);I=await te(A,{params:l,url:c,route:{id:p.id}})}const K=await Be(S,N,u);return K?await Q({url:c,params:l,branch:N.slice(0,K.idx).concat(K.node),status:$,error:I,route:p}):await Me(c,{id:p.id},I,$)}else N.push(void 0);return await Q({url:c,params:l,branch:N,status:200,error:null,route:p,form:i?void 0:null})}async function Be(r,i,c){for(;r--;)if(c[r]){let l=r;for(;!i[l];)l-=1;try{return{idx:l+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:r,error:i,url:c,route:l}){const p={},u=await Oe();let m=null;if(u.has_server_load)try{const w=await et(c,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;m=w.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await x(c)}const v=await we({loader:Oe,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:ye(m)}),b={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await Q({url:c,params:p,branch:[v,b],status:r,error:i,route:null})}function se(r,i){if(We(r,e))return;const c=yt(r.pathname.slice(e.length)||"/");for(const l of Se){const p=l.exec(c);if(p)return{id:r.pathname+r.search,invalidating:i,route:l,params:bt(p),url:r}}}function Fe({url:r,type:i,intent:c,delta:l}){var v,b;let p=!1;const u={from:{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((b=c==null?void 0:c.route)==null?void 0:b.id)??null},url:r},willUnload:!c,type:i};l!==void 0&&(u.delta=l);const m={...u,cancel:()=>{p=!0}};return y||d.before_navigate.forEach(w=>w(m)),p?null:u}async function le({url:r,scroll:i,keepfocus:c,redirect_chain:l,details:p,type:u,delta:m,nav_token:v,accepted:b,blocked:w}){const k=se(r,!1),P=Fe({url:r,type:u,delta:m,intent:k});if(!P){w();return}Re(O),b(),y=!0,_&&q.navigating.set(P),await De(k,r,l,{scroll:i,keepfocus:c,details:p},v,()=>{y=!1,d.after_navigate.forEach(j=>j(P)),q.navigating.set(null)})}async function Me(r,i,c,l){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await ie({status:l,error:c,url:r,route:i}):await x(r)}function x(r){return location.href=r.href,new Promise(()=>{})}function nt(){let r;n.addEventListener("mousemove",u=>{const m=u.target;clearTimeout(r),r=setTimeout(()=>{l(m,2)},20)});function i(u){l(u.composedPath()[0],1)}n.addEventListener("mousedown",i),n.addEventListener("touchstart",i,{passive:!0});const c=new IntersectionObserver(u=>{for(const m of u)m.isIntersecting&&(oe(new URL(m.target.href).pathname),c.unobserve(m.target))},{threshold:0});function l(u,m){const v=ze(u,n);if(!v)return;const{url:b,external:w}=Ee(v,e);if(w)return;const k=fe(v);k.reload||(m<=k.preload_data?je(b):m<=k.preload_code&&oe(b.pathname))}function p(){c.disconnect();for(const u of n.querySelectorAll("a")){const{url:m,external:v}=Ee(u,e);if(v)continue;const b=fe(u);b.reload||(b.preload_code===Ye.viewport&&c.observe(u),b.preload_code===Ye.eager&&oe(m.pathname))}}d.after_navigate.push(p),p()}return{after_navigate:r=>{Ie(()=>(d.after_navigate.push(r),()=>{const i=d.after_navigate.indexOf(r);d.after_navigate.splice(i,1)}))},before_navigate:r=>{Ie(()=>(d.before_navigate.push(r),()=>{const i=d.before_navigate.indexOf(r);d.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(g||!_)&&(h=!1)},goto:(r,i={})=>ge(r,i,[]),invalidate:r=>{if(typeof r=="function")s.push(r);else{const{href:i}=new URL(r,location.href);s.push(c=>c.href===i)}return Te()},invalidateAll:()=>(T=!0,Te()),preload_data:async r=>{const i=new URL(r,Ke(document));await je(i)},preload_code:oe,apply_action:async r=>{if(r.type==="error"){const i=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await Be(t.branch.length,c,l.errors);if(p){const u=await Q({url:i,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:r.status??500,error:r.error,route:l});t=u.state,D.$set(u.props),ce().then(Le)}}else if(r.type==="redirect")ge(r.location,{invalidateAll:!0},[]);else{const i={form:r.data,page:{...H,form:r.data,status:r.status}};D.$set(i),r.type==="success"&&ce().then(Le)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var l;let c=!1;if(!y){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(u=>u(p))}c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(O);try{sessionStorage[tt]=JSON.stringify(ae)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||nt(),n.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const c=ze(i.composedPath()[0],n);if(!c)return;const{url:l,external:p,target:u}=Ee(c,e);if(!l)return;if(u==="_parent"||u==="_top"){if(window.parent!==window)return}else if(u&&u!=="_self")return;const m=fe(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(p||m.reload){Fe({url:l,type:"link"})||i.preventDefault(),y=!0;return}const[b,w]=l.href.split("#");if(w!==void 0&&b===location.href.split("#")[0]){R=!0,Re(O),t.url=l,q.page.set({...H,url:l}),q.page.notify();return}le({url:l,scroll:m.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),n.addEventListener("submit",i=>{if(i.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(i.target),l=i.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const u=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(u,e))return;const m=i.target,{noscroll:v,reload:b}=fe(m);if(b)return;i.preventDefault(),i.stopPropagation();const w=new FormData(m),k=l==null?void 0:l.getAttribute("name");k&&w.append(k,(l==null?void 0:l.getAttribute("value"))??""),u.search=new URLSearchParams(w).toString(),le({url:u,scroll:v?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",i=>{var c;if((c=i.state)!=null&&c[V]){if(i.state[V]===O)return;const l=i.state[V]-O;le({url:new URL(location.href),scroll:ae[i.state[V]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=i.state[V]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{R&&(R=!1,history.replaceState({...history.state,[V]:++O},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&q.navigating.set(null)})},_hydrate:async({status:r=200,error:i,node_ids:c,params:l,route:p,data:u,form:m})=>{f=!0;const v=new URL(location.href);({params:l={},route:p={id:null}}=se(v,!1)||{});let b;try{const w=c.map(async(k,P)=>{const j=u[P];return we({loader:me[k],url:v,params:l,route:p,parent:async()=>{const L={};for(let E=0;E<P;E+=1)Object.assign(L,(await w[E]).data);return L},server_data_node:ye(j)})});b=await Q({url:v,params:l,branch:await Promise.all(w),status:r,error:i,form:m,route:Se.find(({id:k})=>k===p.id)??null})}catch(w){if(w instanceof xe){await x(new URL(w.location,location.href));return}b=await ie({status:w instanceof Ae?w.status:500,error:await te(w,{url:v,params:l,route:p}),url:v,route:p})}Ce(b)}}}async function et(a,e){var d;const n=new URL(a);n.pathname=Rt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await he(n.href),o=await s.json();if(!s.ok)throw new Error(o);return(d=o.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=en(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function te(a,e){return a instanceof Ae?a.body:Kt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(s=>{setTimeout(()=>{var o;s((o=getSelection())==null?void 0:o.removeAllRanges())})})}}async function ln({env:a,hydrate:e,paths:n,target:s,version:o}){mt(n),gt(o);const d=nn({target:s,base:n.base});_t({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{ln as start};

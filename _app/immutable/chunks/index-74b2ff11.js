function _(){}function R(t,n){for(const e in n)t[e]=n[e];return t}function L(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(L)}function k(t){return typeof t=="function"}function G(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let $;function lt(t,n){return $||($=document.createElement("a")),$.href=n,t===$.href}function I(t){return Object.keys(t).length===0}function J(t,...n){if(t==null)return _;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ot(t,n,e){t.$$.on_destroy.push(J(n,e))}function ft(t,n,e,i){if(t){const r=z(t,n,e,i);return t[0](r)}}function z(t,n,e,i){return t[1]&&i?R(e.ctx.slice(),t[1](i(n))):e.ctx}function at(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(n.dirty.length,r.length);for(let l=0;l<s;l+=1)o[l]=n.dirty[l]|r[l];return o}return n.dirty|r}return n.dirty}function dt(t,n,e,i,r,o){if(r){const s=z(n,e,i,o);t.p(s,r)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ht(t){return t??""}let N=!1;function K(){N=!0}function Q(){N=!1}function U(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let c=0;c<n.length;c++){const a=n[c];a.claim_order!==void 0&&u.push(a)}n=u}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let u=0;u<n.length;u++){const c=n[u].claim_order,a=(r>0&&n[e[r]].claim_order<=c?r+1:U(1,r,x=>n[e[x]].claim_order,c))-1;i[u]=e[a]+1;const f=a+1;e[f]=u,r=Math.max(f,r)}const o=[],s=[];let l=n.length-1;for(let u=e[r]+1;u!=0;u=i[u-1]){for(o.push(n[u-1]);l>=u;l--)s.push(n[l]);l--}for(;l>=0;l--)s.push(n[l]);o.reverse(),s.sort((u,c)=>u.claim_order-c.claim_order);for(let u=0,c=0;u<s.length;u++){for(;c<o.length&&s[u].claim_order>=o[c].claim_order;)c++;const a=c<o.length?o[c]:null;t.insertBefore(s[u],a)}}function V(t,n){if(N){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function mt(t,n,e){N&&!e?V(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function X(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Y(t){return document.createElement(t)}function T(t){return document.createTextNode(t)}function yt(){return T(" ")}function bt(){return T("")}function gt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function xt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,r=!1){tt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(n(l)){const u=e(l);return u===void 0?t.splice(s,1):t[s]=u,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(n(l)){const u=e(l);return u===void 0?t.splice(s,1):t[s]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function nt(t,n,e,i){return B(t,r=>r.nodeName===n,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];e[l.name]||o.push(l.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(n))}function $t(t,n,e){return nt(t,n,e,Y)}function et(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>T(n),!0)}function wt(t){return et(t," ")}function Et(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Nt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function At(t,n,e){t.classList[e?"add":"remove"](n)}function St(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,e.push(r)):o===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}function jt(t,n){return new t(n)}let b;function y(t){b=t}function H(){if(!b)throw new Error("Function called outside component initialization");return b}function vt(t){H().$$.on_mount.push(t)}function Tt(t){H().$$.after_update.push(t)}const p=[],D=[],w=[],S=[],O=Promise.resolve();let j=!1;function P(){j||(j=!0,O.then(F))}function Ct(){return P(),O}function v(t){w.push(t)}function qt(t){S.push(t)}const A=new Set;let h=0;function F(){if(h!==0)return;const t=b;do{try{for(;h<p.length;){const n=p[h];h++,y(n),it(n.$$)}}catch(n){throw p.length=0,h=0,n}for(y(null),p.length=0,h=0;D.length;)D.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];A.has(e)||(A.add(e),e())}w.length=0}while(p.length);for(;S.length;)S.pop()();j=!1,A.clear(),y(t)}function it(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const E=new Set;let d;function Mt(){d={r:0,c:[],p:d}}function Dt(){d.r||g(d.c),d=d.p}function rt(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Lt(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function kt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function zt(t){t&&t.c()}function Bt(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||v(()=>{const s=t.$$.on_mount.map(L).filter(k);t.$$.on_destroy?t.$$.on_destroy.push(...s):g(s),t.$$.on_mount=[]}),o.forEach(v)}function st(t,n){const e=t.$$;e.fragment!==null&&(g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(p.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ht(t,n,e,i,r,o,s,l=[-1]){const u=b;y(t);const c=t.$$={fragment:null,ctx:[],props:o,update:_,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:n.target||u.$$.root};s&&s(c.root);let a=!1;if(c.ctx=e?e(t,n.props||{},(f,x,...C)=>{const q=C.length?C[0]:x;return c.ctx&&r(c.ctx[f],c.ctx[f]=q)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](q),a&&ut(t,f)),x}):[],c.update(),a=!0,g(c.before_update),c.fragment=i?i(c.ctx):!1,n.target){if(n.hydrate){K();const f=Z(n.target);c.fragment&&c.fragment.l(f),f.forEach(X)}else c.fragment&&c.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),Q(),F()}y(u)}class Ot{$destroy(){st(this,1),this.$destroy=_}$on(n,e){if(!k(e))return _;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const m=[];function Pt(t,n=_){let e;const i=new Set;function r(l){if(G(t,l)&&(t=l,e)){const u=!m.length;for(const c of i)c[1](),m.push(c,t);if(u){for(let c=0;c<m.length;c+=2)m[c][0](m[c+1]);m.length=0}}}function o(l){r(l(t))}function s(l,u=_){const c=[l,u];return i.add(c),i.size===1&&(e=n(r)||_),l(t),()=>{i.delete(c),i.size===0&&(e(),e=null)}}return{set:r,update:o,subscribe:s}}export{Ct as A,Pt as B,V as C,gt as D,_ as E,ft as F,St as G,lt as H,At as I,dt as J,_t as K,at as L,ot as M,D as N,kt as O,qt as P,v as Q,g as R,Ot as S,pt as T,ht as U,yt as a,mt as b,wt as c,Dt as d,bt as e,rt as f,Mt as g,X as h,Ht as i,Tt as j,Y as k,$t as l,Z as m,xt as n,vt as o,Nt as p,T as q,et as r,G as s,Lt as t,Et as u,jt as v,zt as w,Bt as x,ct as y,st as z};

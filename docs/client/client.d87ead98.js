function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(){return h("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?d(e):p(e)}function v(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function _(t){return v(t," ")}function S(t,e){e=""+e,t.data!==e&&(t.data=e)}function E(t,e=document.body){return Array.from(e.querySelectorAll(t))}let w;function x(t){w=t}function P(){if(!w)throw new Error("Function called outside component initialization");return w}function R(t){P().$$.on_mount.push(t)}function A(t){P().$$.on_destroy.push(t)}const j=[],C=[],L=[],N=[],q=Promise.resolve();let O=!1;function U(t){L.push(t)}let k=!1;const D=new Set;function H(){if(!k){k=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];x(e),I(e.$$)}for(j.length=0;C.length;)C.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];D.has(e)||(D.add(e),e())}L.length=0}while(j.length);for(;N.length;)N.pop()();O=!1,k=!1,D.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const B=new Set;let T;function J(){T={r:0,c:[],p:T}}function K(){T.r||o(T.c),T=T.p}function M(t,e){t&&t.i&&(B.delete(t),t.i(e))}function V(t,e,n,r){if(t&&t.o){if(B.has(t))return;B.add(t),T.c.push(()=>{B.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function z(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function F(t){return"object"==typeof t&&null!==t?t:{}}function G(t){t&&t.c()}function W(t,e){t&&t.l(e)}function X(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),U(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(U)}function Y(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(j.push(t),O||(O=!0,q.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,n,s,a,c,i,l=[-1]){const f=w;x(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(d.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),h&&Q(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=y(n.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();n.intro&&M(e.$$.fragment),X(e,n.target,n.anchor),H()}x(f)}class tt{$destroy(){Y(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const et=[];function nt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!et.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),et.push(n,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const rt={},ot=()=>({});function st(t){let e,n;const r=t[2].default,o=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(r,t,t[1],null);return{c(){e=p("main"),o&&o.c()},l(t){var n=y(e=b(t,"MAIN",{}));o&&o.l(n),n.forEach(u)},m(t,r){l(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&2&e&&o.p(c(r,t,t[1],null),function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(r,t[1],e,null))},i(t){n||(M(o,t),n=!0)},o(t){V(o,t),n=!1},d(t){t&&u(e),o&&o.d(t)}}}function at(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)}),[r,s,o]}class ct extends tt{constructor(t){super(),Z(this,t,at,st,a,{segment:0})}}function it(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=h(r)},l(t){var o=y(e=b(t,"PRE",{}));n=v(o,r),o.forEach(u)},m(t,r){l(t,e,r),i(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&S(n,r)},d(t){t&&u(e)}}}function lt(e){let n,r,o,s,a,c,f,d,w,x=e[1].message+"";document.title=n=e[0];let P=e[2]&&e[1].stack&&it(e);return{c(){r=m(),o=p("h1"),s=h(e[0]),a=m(),c=p("p"),f=h(x),d=m(),P&&P.c(),w=g(),this.h()},l(t){E('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(u),r=_(t);var n=y(o=b(t,"H1",{class:!0}));s=v(n,e[0]),n.forEach(u),a=_(t);var i=y(c=b(t,"P",{class:!0}));f=v(i,x),i.forEach(u),d=_(t),P&&P.l(t),w=g(),this.h()},h(){$(o,"class","svelte-1xjwv3d"),$(c,"class","svelte-1xjwv3d")},m(t,e){l(t,r,e),l(t,o,e),i(o,s),l(t,a,e),l(t,c,e),i(c,f),l(t,d,e),P&&P.m(t,e),l(t,w,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&S(s,t[0]),2&e&&x!==(x=t[1].message+"")&&S(f,x),t[2]&&t[1].stack?P?P.p(t,e):((P=it(t)).c(),P.m(w.parentNode,w)):P&&(P.d(1),P=null)},i:t,o:t,d(t){t&&u(r),t&&u(o),t&&u(a),t&&u(c),t&&u(d),P&&P.d(t),t&&u(w)}}}function ut(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=(t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)}),[r,o,!1]}class ft extends tt{constructor(t){super(),Z(this,t,ut,lt,a,{status:0,error:1})}}function pt(t){let n,r;const o=[t[4].props];var s=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var c=new s(a());return{c(){c&&G(c.$$.fragment),n=g()},l(t){c&&W(c.$$.fragment,t),n=g()},m(t,e){c&&X(c,t,e),l(t,n,e),r=!0},p(t,e){const r=16&e?z(o,[F(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){J();const t=c;V(t.$$.fragment,1,0,()=>{Y(t,1)}),K()}s?(G((c=new s(a())).$$.fragment),M(c.$$.fragment,1),X(c,n.parentNode,n)):c=null}else s&&c.$set(r)},i(t){r||(c&&M(c.$$.fragment,t),r=!0)},o(t){c&&V(c.$$.fragment,t),r=!1},d(t){t&&u(n),c&&Y(c,t)}}}function dt(t){let e;const n=new ft({props:{error:t[0],status:t[1]}});return{c(){G(n.$$.fragment)},l(t){W(n.$$.fragment,t)},m(t,r){X(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(M(n.$$.fragment,t),e=!0)},o(t){V(n.$$.fragment,t),e=!1},d(t){Y(n,t)}}}function ht(t){let e,n,r,o;const s=[dt,pt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){a[e].m(t,n),l(t,r,n),o=!0},p(t,o){let i=e;(e=c(t))===i?a[e].p(t,o):(J(),V(a[i],1,1,()=>{a[i]=null}),K(),(n=a[e])||(n=a[e]=s[e](t)).c(),M(n,1),n.m(r.parentNode,r))},i(t){o||(M(n),o=!0)},o(t){V(n),o=!1},d(t){a[e].d(t),t&&u(r)}}}function mt(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[ht]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new ct({props:o});return{c(){G(s.$$.fragment)},l(t){W(s.$$.fragment,t)},m(t,e){X(s,t,e),n=!0},p(t,[e]){const n=12&e?z(r,[4&e&&{segment:t[2][0]},8&e&&F(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(M(s.$$.fragment,t),n=!0)},o(t){V(s.$$.fragment,t),n=!1},d(t){Y(s,t)}}}function gt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;var l,u;return l=rt,u=r,P().$$.context.set(l,u),t.$set=(t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)}),[o,s,a,c,i,r]}class $t extends tt{constructor(t){super(),Z(this,t,gt,mt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const yt=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],bt=[{js:()=>import("./index.0989a4c3.js"),css:["client.d87ead98.css"]},{js:()=>import("./research.d77dbb92.js"),css:["client.d87ead98.css"]},{js:()=>import("./about.76be7916.js"),css:["client.d87ead98.css"]},{js:()=>import("./index.0bbf0d43.js"),css:["index.0bbf0d43.css","client.d87ead98.css"]},{js:()=>import("./[slug].6f37bbdd.js"),css:["[slug].6f37bbdd.css","client.d87ead98.css"]}],vt=(t=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/research\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:4,params:e=>({slug:t(e[1])})}]}])(decodeURIComponent);const _t="undefined"!=typeof __SAPPER__&&__SAPPER__;let St,Et,wt,xt=!1,Pt=[],Rt="{}";const At={page:nt({}),preloading:nt(null),session:nt(_t&&_t.session)};let jt,Ct;At.session.subscribe(async t=>{if(jt=t,!xt)return;Ct=!0;const e=Ht(new URL(location.href)),n=Et={},{redirect:r,props:o,branch:s}=await Jt(e);n===Et&&await Tt(r,s,o,e.page)});let Lt,Nt=null;let qt,Ot=1;const Ut="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},kt={};function Dt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ht(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(_t.baseUrl))return null;let e=t.pathname.slice(_t.baseUrl.length);if(""===e&&(e="/"),!yt.some(t=>t.test(e)))for(let n=0;n<vt.length;n+=1){const r=vt[n],o=r.pattern.exec(e);if(o){const n=Dt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function It(){return{x:pageXOffset,y:pageYOffset}}async function Bt(t,e,n,r){if(e)qt=e;else{const t=It();kt[qt]=t,e=qt=++Ot,kt[qt]=n?t:{x:0,y:0}}qt=e,St&&At.preloading.set(!0);const o=Nt&&Nt.href===t.href?Nt.promise:Jt(t);Nt=null;const s=Et={},{redirect:a,props:c,branch:i}=await o;if(s===Et&&(await Tt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=kt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}kt[qt]=t,t&&scrollTo(t.x,t.y)}}async function Tt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Ht(new URL(t,document.baseURI));return n?(Ut[e.replaceState?"replaceState":"pushState"]({id:qt},"",t),Bt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(At.page.set(r),At.preloading.set(!1),St)St.$set(n);else{n.stores={page:{subscribe:At.page.subscribe},preloading:{subscribe:At.preloading.subscribe},session:At.session},n.level0={props:await wt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Mt(t.nextSibling);Mt(t),Mt(e)}St=new $t({target:Lt,props:n,hydrate:!0})}Pt=e,Rt=JSON.stringify(r.query),xt=!0,Ct=!1}async function Jt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;wt||(wt=_t.preloaded[0]||ot.call(a,{host:n.host,path:n.path,query:n.query,params:{}},jt));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Rt)return!0;const o=Pt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Ct&&!u&&Pt[c]&&Pt[c].part===e.i)return Pt[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Kt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(bt[e.i]);let m;return m=xt||!_t.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},jt):{}:_t.preloaded[c+1],s[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Kt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function Mt(t){t.parentNode.removeChild(t)}function Vt(t){const e=Ht(new URL(t,document.baseURI));if(e)return Nt&&t===Nt.href||function(t,e){Nt={href:t,promise:e}}(t,Jt(e)),Nt.promise}let zt;function Ft(t){clearTimeout(zt),zt=setTimeout(()=>{Gt(t)},20)}function Gt(t){const e=Xt(t.target);e&&"prefetch"===e.rel&&Vt(e.href)}function Wt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Xt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ht(o);if(s){Bt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Ut.pushState({id:qt},"",o.href)}}function Xt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Yt(t){if(kt[qt]=It(),t.state){const e=Ht(new URL(location.href));e?Bt(e,t.state.id):location.href=location.href}else(function(t){qt=t})(Ot=Ot+1),Ut.replaceState({id:qt},"",location.href)}!function(t){var e;"scrollRestoration"in Ut&&(Ut.scrollRestoration="manual"),e=t.target,Lt=e,addEventListener("click",Wt),addEventListener("popstate",Yt),addEventListener("touchstart",Gt),addEventListener("mousemove",Ft),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Ut.replaceState({id:Ot},"",e);const n=new URL(location.href);if(_t.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=_t;wt||(wt=s&&s[0]),Tt(null,[],{error:c,status:a,session:o,level0:{props:wt},level1:{props:{status:a,error:c},component:ft},segments:s},{host:e,path:n,query:Dt(r),params:{}})}();const r=Ht(n);return r?Bt(r,Ot,!0,t):void 0})}({target:document.querySelector("#sapper")});export{f as A,A as B,R as C,tt as S,m as a,d as b,_ as c,u as d,p as e,b as f,y as g,v as h,Z as i,$ as j,l as k,i as l,G as m,t as n,W as o,X as p,E as q,M as r,a as s,h as t,V as u,Y as v,S as w,g as x,J as y,K as z};

import{S as a,i as t,s,N as e,o as n,e as r,F as o,J as l,k as c,p as i,c as $,j as f,G as m,f as g,h as d,l as p,H as h,O as v,z as u,B as I,I as E,K as w,u as D,E as V,L as x,M as P}from"./client.c83f6354.js";import{S as y,T as N}from"./Tail.de05257c.js";import{F as b,R as j}from"./Flip.2d2d5ca7.js";function A(a){let t,s,w,D,V,x,P,A,M,F,O,S,T,k,z,B,C,G,H,J,K,L,R,q,Q,U;document.title=t=a[3].title;const W=new y({props:{description:"Post# "+(a[0].length-a[1])+": Navigating All "+a[0].length+" Post"+(1==a[0].length?"":"s"),posts:!0,tags:!0}}),X=new b({props:{index:a[1],collection:a[0],base:"/read"}}),Y=[{data:a[2]},{item:a[2]}];let Z={};for(let a=0;a<Y.length;a+=1)Z=e(Z,Y[a]);const _=new j({props:Z}),aa=new b({props:{lg:!0,index:a[1],collection:a[0],base:"/read"}}),ta=new y({props:{description:"Post# "+(a[0].length-a[1])+": Navigating All  "+a[0].length+" Post"+(1==a[0].length?"":"s"),opened:!0,posts:!0,tags:!0}}),sa=new N({});return{c(){s=n(),w=r("main"),D=r("section"),V=r("div"),x=r("div"),P=r("div"),o(W.$$.fragment),M=n(),F=r("div"),O=r("div"),o(X.$$.fragment),T=n(),k=r("div"),z=r("div"),o(_.$$.fragment),C=n(),G=r("div"),H=r("div"),o(aa.$$.fragment),K=n(),L=r("div"),R=r("div"),o(ta.$$.fragment),Q=n(),o(sa.$$.fragment),this.h()},l(a){l('[data-svelte="svelte-cjhwof"]',document.head).forEach(c),s=i(a),w=$(a,"MAIN",{role:!0});var t=f(w);D=$(t,"SECTION",{});var e=f(D);V=$(e,"DIV",{class:!0});var n=f(V);x=$(n,"DIV",{class:!0});var r=f(x);P=$(r,"DIV",{class:!0});var o=f(P);m(W.$$.fragment,o),o.forEach(c),r.forEach(c),M=i(n),F=$(n,"DIV",{class:!0});var g=f(F);O=$(g,"DIV",{class:!0});var d=f(O);m(X.$$.fragment,d),d.forEach(c),g.forEach(c),T=i(n),k=$(n,"DIV",{class:!0});var p=f(k);z=$(p,"DIV",{class:!0});var h=f(z);m(_.$$.fragment,h),h.forEach(c),p.forEach(c),C=i(n),G=$(n,"DIV",{class:!0});var v=f(G);H=$(v,"DIV",{class:!0});var u=f(H);m(aa.$$.fragment,u),u.forEach(c),v.forEach(c),K=i(n),L=$(n,"DIV",{class:!0});var I=f(L);R=$(I,"DIV",{class:!0});var E=f(R);m(ta.$$.fragment,E),E.forEach(c),I.forEach(c),n.forEach(c),e.forEach(c),t.forEach(c),Q=i(a),m(sa.$$.fragment,a),this.h()},h(){g(P,"class",A=a[3].column),g(x,"class","row mt-5"),g(O,"class",S=a[3].column),g(F,"class","row"),g(z,"class",B=a[3].column),g(k,"class","row"),g(H,"class",J=a[3].column),g(G,"class","row"),g(R,"class",q=a[3].column),g(L,"class","row mb-5"),g(V,"class","container"),g(w,"role","main")},m(a,t){d(a,s,t),d(a,w,t),p(w,D),p(D,V),p(V,x),p(x,P),h(W,P,null),p(V,M),p(V,F),p(F,O),h(X,O,null),p(V,T),p(V,k),p(k,z),h(_,z,null),p(V,C),p(V,G),p(G,H),h(aa,H,null),p(V,K),p(V,L),p(L,R),h(ta,R,null),d(a,Q,t),h(sa,a,t),U=!0},p(a,[s]){(!U||8&s)&&t!==(t=a[3].title)&&(document.title=t);const e={};3&s&&(e.description="Post# "+(a[0].length-a[1])+": Navigating All "+a[0].length+" Post"+(1==a[0].length?"":"s")),W.$set(e);const n={};2&s&&(n.index=a[1]),1&s&&(n.collection=a[0]),X.$set(n);const r=4&s?v(Y,[{data:a[2]},{item:a[2]}]):{};_.$set(r);const o={};2&s&&(o.index=a[1]),1&s&&(o.collection=a[0]),aa.$set(o);const l={};3&s&&(l.description="Post# "+(a[0].length-a[1])+": Navigating All  "+a[0].length+" Post"+(1==a[0].length?"":"s")),ta.$set(l)},i(a){U||(u(W.$$.fragment,a),u(X.$$.fragment,a),u(_.$$.fragment,a),u(aa.$$.fragment,a),u(ta.$$.fragment,a),u(sa.$$.fragment,a),U=!0)},o(a){I(W.$$.fragment,a),I(X.$$.fragment,a),I(_.$$.fragment,a),I(aa.$$.fragment,a),I(ta.$$.fragment,a),I(sa.$$.fragment,a),U=!1},d(a){a&&c(s),a&&c(w),E(W),E(X),E(_),E(aa),E(ta),a&&c(Q),E(sa,a)}}}async function M(a,t){const{post:s}=a.params;return{post:s}}function F(a,t,s){let{post:e}=t;const n=V();let r,o,l=x(),c=null;function i(){s(0,l=l.map(a=>(a.ago=P(a.date).from(P()),a))),s(0,l=l.map(a=>(a.today=P().diff(P(a.date),"days")<1,a))),n.blinkenlighten&&(s(0,l=l.map(a=>(a.ago=P(P(a.date).subtract(parseInt(31*Math.random()),"days")).from(P()),a))),s(0,l=l.map((a,t)=>(a.today=Math.random()<.5,a))))}return w(()=>{clearInterval(c)}),D(()=>{c=setInterval(i,n.recalculateInterval)}),i(),a.$set=(a=>{"post"in a&&s(4,e=a.post)}),a.$$.update=(()=>{16&a.$$.dirty&&s(1,r=function(a){let t=0,s=l.filter(t=>t.id===a);if(s.length>0){let a=s.pop();t=l.indexOf(a)}return t}(e)),3&a.$$.dirty&&s(2,o=l[r])}),[l,r,o,n,e]}export default class extends a{constructor(a){super(),t(this,a,F,A,s,{post:4})}}export{M as preload};

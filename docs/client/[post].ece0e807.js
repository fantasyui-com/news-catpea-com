import{S as a,i as t,s,r as e,f as n,G as r,K as o,d as l,u as c,g as i,l as g,H as $,j as d,a as f,m,I as p,A as h,C as u,J as v,M as I,L as E,o as w,F as D,N as V}from"./client.ddebaa5a.js";import{S as b,T as x}from"./Tail.de828575.js";import{F as y,R as N}from"./Flip.02dce81e.js";function T(a){let t,s,I,E,w,D,V,T,j,M,P,W,F,S,A,C,O,k,G,H,J,K,L,R,q,z;document.title=t=a[5].title;const B=new b({props:{post:a[1],description:"Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" Tagged With "+a[0],posts:!0,categories:!0,tags:!0,untag:!0}}),Q=new y({props:{index:a[3],collection:a[2],base:"/tag/"+a[0]+"/read"}}),U=new N({props:{data:a[4]}}),X=new y({props:{lg:!0,index:a[3],collection:a[2],base:"/tag/"+a[0]+"/read"}}),Y=new b({props:{post:a[1],description:"Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" Tagged With "+a[0],opened:!0,posts:!0,categories:!0,tags:!0,untag:!0}}),Z=new x({});return{c(){s=e(),I=n("main"),E=n("section"),w=n("div"),D=n("div"),V=n("div"),r(B.$$.fragment),j=e(),M=n("div"),P=n("div"),r(Q.$$.fragment),F=e(),S=n("div"),A=n("div"),r(U.$$.fragment),O=e(),k=n("div"),G=n("div"),r(X.$$.fragment),J=e(),K=n("div"),L=n("div"),r(Y.$$.fragment),q=e(),r(Z.$$.fragment),this.h()},l(a){o('[data-svelte="svelte-cjhwof"]',document.head).forEach(l),s=c(a),I=i(a,"MAIN",{role:!0});var t=g(I);E=i(t,"SECTION",{});var e=g(E);w=i(e,"DIV",{class:!0});var n=g(w);D=i(n,"DIV",{class:!0});var r=g(D);V=i(r,"DIV",{class:!0});var d=g(V);$(B.$$.fragment,d),d.forEach(l),r.forEach(l),j=c(n),M=i(n,"DIV",{class:!0});var f=g(M);P=i(f,"DIV",{class:!0});var m=g(P);$(Q.$$.fragment,m),m.forEach(l),f.forEach(l),F=c(n),S=i(n,"DIV",{class:!0});var p=g(S);A=i(p,"DIV",{class:!0});var h=g(A);$(U.$$.fragment,h),h.forEach(l),p.forEach(l),O=c(n),k=i(n,"DIV",{class:!0});var u=g(k);G=i(u,"DIV",{class:!0});var v=g(G);$(X.$$.fragment,v),v.forEach(l),u.forEach(l),J=c(n),K=i(n,"DIV",{class:!0});var b=g(K);L=i(b,"DIV",{class:!0});var x=g(L);$(Y.$$.fragment,x),x.forEach(l),b.forEach(l),n.forEach(l),e.forEach(l),t.forEach(l),q=c(a),$(Z.$$.fragment,a),this.h()},h(){d(V,"class",T=a[5].column),d(D,"class","row mt-5"),d(P,"class",W=a[5].column),d(M,"class","row"),d(A,"class",C=a[5].column),d(S,"class","row"),d(G,"class",H=a[5].column),d(k,"class","row"),d(L,"class",R=a[5].column),d(K,"class","row mb-5"),d(w,"class","container"),d(I,"role","main")},m(a,t){f(a,s,t),f(a,I,t),m(I,E),m(E,w),m(w,D),m(D,V),p(B,V,null),m(w,j),m(w,M),m(M,P),p(Q,P,null),m(w,F),m(w,S),m(S,A),p(U,A,null),m(w,O),m(w,k),m(k,G),p(X,G,null),m(w,J),m(w,K),m(K,L),p(Y,L,null),f(a,q,t),p(Z,a,t),z=!0},p(a,[s]){(!z||32&s)&&t!==(t=a[5].title)&&(document.title=t);const e={};2&s&&(e.post=a[1]),5&s&&(e.description="Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" Tagged With "+a[0]),B.$set(e);const n={};8&s&&(n.index=a[3]),4&s&&(n.collection=a[2]),1&s&&(n.base="/tag/"+a[0]+"/read"),Q.$set(n);const r={};16&s&&(r.data=a[4]),U.$set(r);const o={};8&s&&(o.index=a[3]),4&s&&(o.collection=a[2]),1&s&&(o.base="/tag/"+a[0]+"/read"),X.$set(o);const l={};2&s&&(l.post=a[1]),5&s&&(l.description="Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" Tagged With "+a[0]),Y.$set(l)},i(a){z||(h(B.$$.fragment,a),h(Q.$$.fragment,a),h(U.$$.fragment,a),h(X.$$.fragment,a),h(Y.$$.fragment,a),h(Z.$$.fragment,a),z=!0)},o(a){u(B.$$.fragment,a),u(Q.$$.fragment,a),u(U.$$.fragment,a),u(X.$$.fragment,a),u(Y.$$.fragment,a),u(Z.$$.fragment,a),z=!1},d(a){a&&l(s),a&&l(I),v(B),v(Q),v(U),v(X),v(Y),a&&l(q),v(Z,a)}}}async function j(a,t){const{tag:s,post:e}=a.params;return{tag:s,post:e}}function M(a,t,s){let{tag:e}=t,{post:n}=t;const r=D();let o,l,c=I().filter(a=>a.tags.split(" ").includes(e)),i=null;function g(){s(2,c=c.map(a=>(a.ago=V(a.date).from(V()),a))),s(2,c=c.map(a=>(a.today=V().diff(V(a.date),"days")<1,a))),r.blinkenlighten&&(s(2,c=c.map(a=>(a.ago=V(V(a.date).subtract(parseInt(31*Math.random()),"days")).from(V()),a))),s(2,c=c.map((a,t)=>(a.today=Math.random()<.5,a))))}return E(()=>{clearInterval(i)}),w(()=>{i=setInterval(g,r.recalculateInterval)}),g(),a.$set=(a=>{"tag"in a&&s(0,e=a.tag),"post"in a&&s(1,n=a.post)}),a.$$.update=(()=>{2&a.$$.dirty&&s(3,o=function(a){let t=0,s=c.filter(t=>t.id===a);if(s.length>0){let a=s.pop();t=c.indexOf(a)}return t}(n)),12&a.$$.dirty&&s(4,l=c[o])}),[e,n,c,o,l,r]}export default class extends a{constructor(a){super(),t(this,a,M,T,s,{tag:0,post:1})}}export{j as preload};

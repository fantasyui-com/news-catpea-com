import{S as a,i as t,s,o as e,e as n,F as r,J as o,k as l,p as c,c as i,j as g,G as $,f,h as d,l as m,H as p,z as h,B as u,I as v,L as I,K as E,u as w,E as D,M as V}from"./client.30e31878.js";import{S as b,T as x}from"./Tail.bc2464f0.js";import{F as y,R as T}from"./Flip.1f6d260c.js";function N(a){let t,s,I,E,w,D,V,N,j,M,P,W,F,S,k,O,z,A,B,C,G,H,J,K,L,R;document.title=t=a[5].title;const q=new b({props:{post:a[1],description:"Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" Tagged With "+a[0],posts:!0,categories:!0,tags:!0,untag:!0}}),Q=new y({props:{index:a[3],collection:a[2],base:"/tag/"+a[0]+"/read"}}),U=new T({props:{data:a[4]}}),X=new y({props:{lg:!0,index:a[3],collection:a[2],base:"/tag/"+a[0]+"/read"}}),Y=new b({props:{post:a[1],description:"Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" Tagged With "+a[0],opened:!0,posts:!0,categories:!0,tags:!0,untag:!0}}),Z=new x({});return{c(){s=e(),I=n("main"),E=n("section"),w=n("div"),D=n("div"),V=n("div"),r(q.$$.fragment),j=e(),M=n("div"),P=n("div"),r(Q.$$.fragment),F=e(),S=n("div"),k=n("div"),r(U.$$.fragment),z=e(),A=n("div"),B=n("div"),r(X.$$.fragment),G=e(),H=n("div"),J=n("div"),r(Y.$$.fragment),L=e(),r(Z.$$.fragment),this.h()},l(a){o('[data-svelte="svelte-cjhwof"]',document.head).forEach(l),s=c(a),I=i(a,"MAIN",{role:!0});var t=g(I);E=i(t,"SECTION",{});var e=g(E);w=i(e,"DIV",{class:!0});var n=g(w);D=i(n,"DIV",{class:!0});var r=g(D);V=i(r,"DIV",{class:!0});var f=g(V);$(q.$$.fragment,f),f.forEach(l),r.forEach(l),j=c(n),M=i(n,"DIV",{class:!0});var d=g(M);P=i(d,"DIV",{class:!0});var m=g(P);$(Q.$$.fragment,m),m.forEach(l),d.forEach(l),F=c(n),S=i(n,"DIV",{class:!0});var p=g(S);k=i(p,"DIV",{class:!0});var h=g(k);$(U.$$.fragment,h),h.forEach(l),p.forEach(l),z=c(n),A=i(n,"DIV",{class:!0});var u=g(A);B=i(u,"DIV",{class:!0});var v=g(B);$(X.$$.fragment,v),v.forEach(l),u.forEach(l),G=c(n),H=i(n,"DIV",{class:!0});var b=g(H);J=i(b,"DIV",{class:!0});var x=g(J);$(Y.$$.fragment,x),x.forEach(l),b.forEach(l),n.forEach(l),e.forEach(l),t.forEach(l),L=c(a),$(Z.$$.fragment,a),this.h()},h(){f(V,"class",N=a[5].column),f(D,"class","row mt-5"),f(P,"class",W=a[5].column),f(M,"class","row"),f(k,"class",O=a[5].column),f(S,"class","row"),f(B,"class",C=a[5].column),f(A,"class","row"),f(J,"class",K=a[5].column),f(H,"class","row mb-5"),f(w,"class","container"),f(I,"role","main")},m(a,t){d(a,s,t),d(a,I,t),m(I,E),m(E,w),m(w,D),m(D,V),p(q,V,null),m(w,j),m(w,M),m(M,P),p(Q,P,null),m(w,F),m(w,S),m(S,k),p(U,k,null),m(w,z),m(w,A),m(A,B),p(X,B,null),m(w,G),m(w,H),m(H,J),p(Y,J,null),d(a,L,t),p(Z,a,t),R=!0},p(a,[s]){(!R||32&s)&&t!==(t=a[5].title)&&(document.title=t);const e={};2&s&&(e.post=a[1]),5&s&&(e.description="Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" Tagged With "+a[0]),q.$set(e);const n={};8&s&&(n.index=a[3]),4&s&&(n.collection=a[2]),1&s&&(n.base="/tag/"+a[0]+"/read"),Q.$set(n);const r={};16&s&&(r.data=a[4]),U.$set(r);const o={};8&s&&(o.index=a[3]),4&s&&(o.collection=a[2]),1&s&&(o.base="/tag/"+a[0]+"/read"),X.$set(o);const l={};2&s&&(l.post=a[1]),5&s&&(l.description="Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" Tagged With "+a[0]),Y.$set(l)},i(a){R||(h(q.$$.fragment,a),h(Q.$$.fragment,a),h(U.$$.fragment,a),h(X.$$.fragment,a),h(Y.$$.fragment,a),h(Z.$$.fragment,a),R=!0)},o(a){u(q.$$.fragment,a),u(Q.$$.fragment,a),u(U.$$.fragment,a),u(X.$$.fragment,a),u(Y.$$.fragment,a),u(Z.$$.fragment,a),R=!1},d(a){a&&l(s),a&&l(I),v(q),v(Q),v(U),v(X),v(Y),a&&l(L),v(Z,a)}}}async function j(a,t){const{tag:s,post:e}=a.params;return{tag:s,post:e}}function M(a,t,s){let{tag:e}=t,{post:n}=t;const r=D();let o,l,c=I().filter(a=>a.tags.split(" ").includes(e)),i=null;function g(){s(2,c=c.map(a=>(a.ago=V(a.date).from(V()),a))),s(2,c=c.map(a=>(a.today=V().diff(V(a.date),"days")<1,a))),r.blinkenlighten&&(s(2,c=c.map(a=>(a.ago=V(V(a.date).subtract(parseInt(31*Math.random()),"days")).from(V()),a))),s(2,c=c.map((a,t)=>(a.today=Math.random()<.5,a))))}return E(()=>{clearInterval(i)}),w(()=>{i=setInterval(g,r.recalculateInterval)}),g(),a.$set=(a=>{"tag"in a&&s(0,e=a.tag),"post"in a&&s(1,n=a.post)}),a.$$.update=(()=>{2&a.$$.dirty&&s(3,o=function(a){let t=0,s=c.filter(t=>t.id===a);if(s.length>0){let a=s.pop();t=c.indexOf(a)}return t}(n)),12&a.$$.dirty&&s(4,l=c[o])}),[e,n,c,o,l,r]}export default class extends a{constructor(a){super(),t(this,a,M,N,s,{tag:0,post:1})}}export{j as preload};

import{S as a,i as t,s,q as e,c as n,F as r,J as o,d as c,r as l,f as i,k as g,G as $,h as d,a as f,l as m,H as p,z as h,B as v,I as u,L as I,K as E,o as w,E as D,M as V}from"./client.edc65da0.js";import{S as x,T as b}from"./Tail.e6830e41.js";import{F as y,R as T}from"./Flip.eca09c19.js";function N(a){let t,s,I,E,w,D,V,N,j,M,P,W,F,S,k,O,q,z,A,B,C,G,H,J,K,L;document.title=t=a[5].title;const R=new x({props:{post:a[1],description:"Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" Tagged With "+a[0],posts:!0,categories:!0,tags:!0,untag:!0}}),Q=new y({props:{index:a[3],collection:a[2],base:"/tag/"+a[0]+"/read"}}),U=new T({props:{data:a[4]}}),X=new y({props:{lg:!0,index:a[3],collection:a[2],base:"/tag/"+a[0]+"/read"}}),Y=new x({props:{post:a[1],description:"Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" Tagged With "+a[0],opened:!0,posts:!0,categories:!0,tags:!0,untag:!0}}),Z=new b({});return{c(){s=e(),I=n("main"),E=n("section"),w=n("div"),D=n("div"),V=n("div"),r(R.$$.fragment),j=e(),M=n("div"),P=n("div"),r(Q.$$.fragment),F=e(),S=n("div"),k=n("div"),r(U.$$.fragment),q=e(),z=n("div"),A=n("div"),r(X.$$.fragment),C=e(),G=n("div"),H=n("div"),r(Y.$$.fragment),K=e(),r(Z.$$.fragment),this.h()},l(a){o('[data-svelte="svelte-cjhwof"]',document.head).forEach(c),s=l(a),I=i(a,"MAIN",{role:!0});var t=g(I);E=i(t,"SECTION",{});var e=g(E);w=i(e,"DIV",{class:!0});var n=g(w);D=i(n,"DIV",{class:!0});var r=g(D);V=i(r,"DIV",{class:!0});var d=g(V);$(R.$$.fragment,d),d.forEach(c),r.forEach(c),j=l(n),M=i(n,"DIV",{class:!0});var f=g(M);P=i(f,"DIV",{class:!0});var m=g(P);$(Q.$$.fragment,m),m.forEach(c),f.forEach(c),F=l(n),S=i(n,"DIV",{class:!0});var p=g(S);k=i(p,"DIV",{class:!0});var h=g(k);$(U.$$.fragment,h),h.forEach(c),p.forEach(c),q=l(n),z=i(n,"DIV",{class:!0});var v=g(z);A=i(v,"DIV",{class:!0});var u=g(A);$(X.$$.fragment,u),u.forEach(c),v.forEach(c),C=l(n),G=i(n,"DIV",{class:!0});var x=g(G);H=i(x,"DIV",{class:!0});var b=g(H);$(Y.$$.fragment,b),b.forEach(c),x.forEach(c),n.forEach(c),e.forEach(c),t.forEach(c),K=l(a),$(Z.$$.fragment,a),this.h()},h(){d(V,"class",N=a[5].column),d(D,"class","row mt-5"),d(P,"class",W=a[5].column),d(M,"class","row"),d(k,"class",O=a[5].column),d(S,"class","row"),d(A,"class",B=a[5].column),d(z,"class","row"),d(H,"class",J=a[5].column),d(G,"class","row mb-5"),d(w,"class","container"),d(I,"role","main")},m(a,t){f(a,s,t),f(a,I,t),m(I,E),m(E,w),m(w,D),m(D,V),p(R,V,null),m(w,j),m(w,M),m(M,P),p(Q,P,null),m(w,F),m(w,S),m(S,k),p(U,k,null),m(w,q),m(w,z),m(z,A),p(X,A,null),m(w,C),m(w,G),m(G,H),p(Y,H,null),f(a,K,t),p(Z,a,t),L=!0},p(a,[s]){(!L||32&s)&&t!==(t=a[5].title)&&(document.title=t);const e={};2&s&&(e.post=a[1]),5&s&&(e.description="Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" Tagged With "+a[0]),R.$set(e);const n={};8&s&&(n.index=a[3]),4&s&&(n.collection=a[2]),1&s&&(n.base="/tag/"+a[0]+"/read"),Q.$set(n);const r={};16&s&&(r.data=a[4]),U.$set(r);const o={};8&s&&(o.index=a[3]),4&s&&(o.collection=a[2]),1&s&&(o.base="/tag/"+a[0]+"/read"),X.$set(o);const c={};2&s&&(c.post=a[1]),5&s&&(c.description="Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" Tagged With "+a[0]),Y.$set(c)},i(a){L||(h(R.$$.fragment,a),h(Q.$$.fragment,a),h(U.$$.fragment,a),h(X.$$.fragment,a),h(Y.$$.fragment,a),h(Z.$$.fragment,a),L=!0)},o(a){v(R.$$.fragment,a),v(Q.$$.fragment,a),v(U.$$.fragment,a),v(X.$$.fragment,a),v(Y.$$.fragment,a),v(Z.$$.fragment,a),L=!1},d(a){a&&c(s),a&&c(I),u(R),u(Q),u(U),u(X),u(Y),a&&c(K),u(Z,a)}}}async function j(a,t){const{tag:s,post:e}=a.params;return{tag:s,post:e}}function M(a,t,s){let{tag:e}=t,{post:n}=t;const r=D();let o,c,l=I().filter(a=>a.tags.split(" ").includes(e)),i=null;function g(){s(2,l=l.map(a=>(a.ago=V(a.date).from(V()),a))),s(2,l=l.map(a=>(a.today=V().diff(V(a.date),"days")<1,a))),r.blinkenlighten&&(s(2,l=l.map(a=>(a.ago=V(V(a.date).subtract(parseInt(31*Math.random()),"days")).from(V()),a))),s(2,l=l.map((a,t)=>(a.today=Math.random()<.5,a))))}return E(()=>{clearInterval(i)}),w(()=>{i=setInterval(g,r.recalculateInterval)}),g(),a.$set=(a=>{"tag"in a&&s(0,e=a.tag),"post"in a&&s(1,n=a.post)}),a.$$.update=(()=>{2&a.$$.dirty&&s(3,o=function(a){let t=0,s=l.filter(t=>t.id===a);if(s.length>0){let a=s.pop();t=l.indexOf(a)}return t}(n)),12&a.$$.dirty&&s(4,c=l[o])}),[e,n,l,o,c,r]}export default class extends a{constructor(a){super(),t(this,a,M,N,s,{tag:0,post:1})}}export{j as preload};

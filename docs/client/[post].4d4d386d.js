import{S as a,i as t,s,b as e,r,f as n,G as o,K as c,d as l,u as i,g,l as $,H as f,j as m,a as d,m as p,I as h,A as v,C as u,J as y,M as I,L as E,o as w,F as D,N as V}from"./client.230a6d1b.js";import{S as b,T as x}from"./Tail.f17e8e68.js";import{F as N,R as C}from"./Flip.e00f4d95.js";function j(a){let t,s,I,E,w,D,V,j,M,P,F,S,T,z,A,O,k,G,H,J,K,L,R,q,B,Q;document.title=t=a[5].title;const U=new b({props:{post:a[1],description:"Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" in "+e(a[0])+" Category",posts:!0,categories:!0,tags:!0,uncategorize:!0}}),W=new N({props:{index:a[3],collection:a[2],base:"/category/"+a[0]+"/read"}}),X=new C({props:{data:a[4]}}),Y=new N({props:{lg:!0,index:a[3],collection:a[2],base:"/category/"+a[0]+"/read"}}),Z=new b({props:{post:a[1],description:"Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" in "+e(a[0])+" Category",opened:!0,posts:!0,categories:!0,tags:!0,uncategorize:!0}}),_=new x({});return{c(){s=r(),I=n("main"),E=n("section"),w=n("div"),D=n("div"),V=n("div"),o(U.$$.fragment),M=r(),P=n("div"),F=n("div"),o(W.$$.fragment),T=r(),z=n("div"),A=n("div"),o(X.$$.fragment),k=r(),G=n("div"),H=n("div"),o(Y.$$.fragment),K=r(),L=n("div"),R=n("div"),o(Z.$$.fragment),B=r(),o(_.$$.fragment),this.h()},l(a){c('[data-svelte="svelte-cjhwof"]',document.head).forEach(l),s=i(a),I=g(a,"MAIN",{role:!0});var t=$(I);E=g(t,"SECTION",{});var e=$(E);w=g(e,"DIV",{class:!0});var r=$(w);D=g(r,"DIV",{class:!0});var n=$(D);V=g(n,"DIV",{class:!0});var o=$(V);f(U.$$.fragment,o),o.forEach(l),n.forEach(l),M=i(r),P=g(r,"DIV",{class:!0});var m=$(P);F=g(m,"DIV",{class:!0});var d=$(F);f(W.$$.fragment,d),d.forEach(l),m.forEach(l),T=i(r),z=g(r,"DIV",{class:!0});var p=$(z);A=g(p,"DIV",{class:!0});var h=$(A);f(X.$$.fragment,h),h.forEach(l),p.forEach(l),k=i(r),G=g(r,"DIV",{class:!0});var v=$(G);H=g(v,"DIV",{class:!0});var u=$(H);f(Y.$$.fragment,u),u.forEach(l),v.forEach(l),K=i(r),L=g(r,"DIV",{class:!0});var y=$(L);R=g(y,"DIV",{class:!0});var b=$(R);f(Z.$$.fragment,b),b.forEach(l),y.forEach(l),r.forEach(l),e.forEach(l),t.forEach(l),B=i(a),f(_.$$.fragment,a),this.h()},h(){m(V,"class",j=a[5].column),m(D,"class","row mt-5"),m(F,"class",S=a[5].column),m(P,"class","row"),m(A,"class",O=a[5].column),m(z,"class","row"),m(H,"class",J=a[5].column),m(G,"class","row"),m(R,"class",q=a[5].column),m(L,"class","row mb-5"),m(w,"class","container"),m(I,"role","main")},m(a,t){d(a,s,t),d(a,I,t),p(I,E),p(E,w),p(w,D),p(D,V),h(U,V,null),p(w,M),p(w,P),p(P,F),h(W,F,null),p(w,T),p(w,z),p(z,A),h(X,A,null),p(w,k),p(w,G),p(G,H),h(Y,H,null),p(w,K),p(w,L),p(L,R),h(Z,R,null),d(a,B,t),h(_,a,t),Q=!0},p(a,[s]){(!Q||32&s)&&t!==(t=a[5].title)&&(document.title=t);const r={};2&s&&(r.post=a[1]),5&s&&(r.description="Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" in "+e(a[0])+" Category"),U.$set(r);const n={};8&s&&(n.index=a[3]),4&s&&(n.collection=a[2]),1&s&&(n.base="/category/"+a[0]+"/read"),W.$set(n);const o={};16&s&&(o.data=a[4]),X.$set(o);const c={};8&s&&(c.index=a[3]),4&s&&(c.collection=a[2]),1&s&&(c.base="/category/"+a[0]+"/read"),Y.$set(c);const l={};2&s&&(l.post=a[1]),5&s&&(l.description="Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" in "+e(a[0])+" Category"),Z.$set(l)},i(a){Q||(v(U.$$.fragment,a),v(W.$$.fragment,a),v(X.$$.fragment,a),v(Y.$$.fragment,a),v(Z.$$.fragment,a),v(_.$$.fragment,a),Q=!0)},o(a){u(U.$$.fragment,a),u(W.$$.fragment,a),u(X.$$.fragment,a),u(Y.$$.fragment,a),u(Z.$$.fragment,a),u(_.$$.fragment,a),Q=!1},d(a){a&&l(s),a&&l(I),y(U),y(W),y(X),y(Y),y(Z),a&&l(B),y(_,a)}}}async function M(a,t){const{category:s,post:e}=a.params;return{category:s,post:e}}function P(a,t,s){let{category:e}=t,{post:r}=t;const n=D();let o,c,l=I().filter(a=>a.category===e),i=null;function g(){s(2,l=l.map(a=>(a.ago=V(a.date).from(V()),a))),s(2,l=l.map(a=>(a.today=V().diff(V(a.date),"days")<1,a))),n.blinkenlighten&&(s(2,l=l.map(a=>(a.ago=V(V(a.date).subtract(parseInt(31*Math.random()),"days")).from(V()),a))),s(2,l=l.map((a,t)=>(a.today=Math.random()<.5,a))))}return E(()=>{clearInterval(i)}),w(()=>{i=setInterval(g,n.recalculateInterval)}),g(),a.$set=(a=>{"category"in a&&s(0,e=a.category),"post"in a&&s(1,r=a.post)}),a.$$.update=(()=>{2&a.$$.dirty&&s(3,o=function(a){let t=0,s=l.filter(t=>t.id===a);if(s.length>0){let a=s.pop();t=l.indexOf(a)}return t}(r)),12&a.$$.dirty&&s(4,c=l[o])}),[e,r,l,o,c,n]}export default class extends a{constructor(a){super(),t(this,a,P,j,s,{category:0,post:1})}}export{M as preload};

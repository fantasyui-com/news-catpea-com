import{S as a,i as t,s,a as e,o as r,e as n,F as o,J as c,k as l,p as i,c as g,j as $,G as f,f as m,h as d,l as p,H as h,z as v,B as u,I as y,L as I,K as E,u as w,E as D,M as V}from"./client.6e4d3eb0.js";import{S as b,T as x}from"./Tail.3ace966a.js";import{F as N,R as j}from"./Flip.1c5f492b.js";function C(a){let t,s,I,E,w,D,V,C,M,P,z,F,S,T,k,O,A,B,G,H,J,K,L,R,q,Q;document.title=t=a[5].title;const U=new b({props:{post:a[1],description:"Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" in "+e(a[0])+" Category",posts:!0,categories:!0,tags:!0,uncategorize:!0}}),W=new N({props:{index:a[3],collection:a[2],base:"/category/"+a[0]+"/read"}}),X=new j({props:{data:a[4]}}),Y=new N({props:{lg:!0,index:a[3],collection:a[2],base:"/category/"+a[0]+"/read"}}),Z=new b({props:{post:a[1],description:"Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" in "+e(a[0])+" Category",opened:!0,posts:!0,categories:!0,tags:!0,uncategorize:!0}}),_=new x({});return{c(){s=r(),I=n("main"),E=n("section"),w=n("div"),D=n("div"),V=n("div"),o(U.$$.fragment),M=r(),P=n("div"),z=n("div"),o(W.$$.fragment),S=r(),T=n("div"),k=n("div"),o(X.$$.fragment),A=r(),B=n("div"),G=n("div"),o(Y.$$.fragment),J=r(),K=n("div"),L=n("div"),o(Z.$$.fragment),q=r(),o(_.$$.fragment),this.h()},l(a){c('[data-svelte="svelte-cjhwof"]',document.head).forEach(l),s=i(a),I=g(a,"MAIN",{role:!0});var t=$(I);E=g(t,"SECTION",{});var e=$(E);w=g(e,"DIV",{class:!0});var r=$(w);D=g(r,"DIV",{class:!0});var n=$(D);V=g(n,"DIV",{class:!0});var o=$(V);f(U.$$.fragment,o),o.forEach(l),n.forEach(l),M=i(r),P=g(r,"DIV",{class:!0});var m=$(P);z=g(m,"DIV",{class:!0});var d=$(z);f(W.$$.fragment,d),d.forEach(l),m.forEach(l),S=i(r),T=g(r,"DIV",{class:!0});var p=$(T);k=g(p,"DIV",{class:!0});var h=$(k);f(X.$$.fragment,h),h.forEach(l),p.forEach(l),A=i(r),B=g(r,"DIV",{class:!0});var v=$(B);G=g(v,"DIV",{class:!0});var u=$(G);f(Y.$$.fragment,u),u.forEach(l),v.forEach(l),J=i(r),K=g(r,"DIV",{class:!0});var y=$(K);L=g(y,"DIV",{class:!0});var b=$(L);f(Z.$$.fragment,b),b.forEach(l),y.forEach(l),r.forEach(l),e.forEach(l),t.forEach(l),q=i(a),f(_.$$.fragment,a),this.h()},h(){m(V,"class",C=a[5].column),m(D,"class","row mt-5"),m(z,"class",F=a[5].column),m(P,"class","row"),m(k,"class",O=a[5].column),m(T,"class","row"),m(G,"class",H=a[5].column),m(B,"class","row"),m(L,"class",R=a[5].column),m(K,"class","row mb-5"),m(w,"class","container"),m(I,"role","main")},m(a,t){d(a,s,t),d(a,I,t),p(I,E),p(E,w),p(w,D),p(D,V),h(U,V,null),p(w,M),p(w,P),p(P,z),h(W,z,null),p(w,S),p(w,T),p(T,k),h(X,k,null),p(w,A),p(w,B),p(B,G),h(Y,G,null),p(w,J),p(w,K),p(K,L),h(Z,L,null),d(a,q,t),h(_,a,t),Q=!0},p(a,[s]){(!Q||32&s)&&t!==(t=a[5].title)&&(document.title=t);const r={};2&s&&(r.post=a[1]),5&s&&(r.description="Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" in "+e(a[0])+" Category"),U.$set(r);const n={};8&s&&(n.index=a[3]),4&s&&(n.collection=a[2]),1&s&&(n.base="/category/"+a[0]+"/read"),W.$set(n);const o={};16&s&&(o.data=a[4]),X.$set(o);const c={};8&s&&(c.index=a[3]),4&s&&(c.collection=a[2]),1&s&&(c.base="/category/"+a[0]+"/read"),Y.$set(c);const l={};2&s&&(l.post=a[1]),5&s&&(l.description="Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" in "+e(a[0])+" Category"),Z.$set(l)},i(a){Q||(v(U.$$.fragment,a),v(W.$$.fragment,a),v(X.$$.fragment,a),v(Y.$$.fragment,a),v(Z.$$.fragment,a),v(_.$$.fragment,a),Q=!0)},o(a){u(U.$$.fragment,a),u(W.$$.fragment,a),u(X.$$.fragment,a),u(Y.$$.fragment,a),u(Z.$$.fragment,a),u(_.$$.fragment,a),Q=!1},d(a){a&&l(s),a&&l(I),y(U),y(W),y(X),y(Y),y(Z),a&&l(q),y(_,a)}}}async function M(a,t){const{category:s,post:e}=a.params;return{category:s,post:e}}function P(a,t,s){let{category:e}=t,{post:r}=t;const n=D();let o,c,l=I().filter(a=>a.category===e),i=null;function g(){s(2,l=l.map(a=>(a.ago=V(a.date).from(V()),a))),s(2,l=l.map(a=>(a.today=V().diff(V(a.date),"days")<1,a))),n.blinkenlighten&&(s(2,l=l.map(a=>(a.ago=V(V(a.date).subtract(parseInt(31*Math.random()),"days")).from(V()),a))),s(2,l=l.map((a,t)=>(a.today=Math.random()<.5,a))))}return E(()=>{clearInterval(i)}),w(()=>{i=setInterval(g,n.recalculateInterval)}),g(),a.$set=(a=>{"category"in a&&s(0,e=a.category),"post"in a&&s(1,r=a.post)}),a.$$.update=(()=>{2&a.$$.dirty&&s(3,o=function(a){let t=0,s=l.filter(t=>t.id===a);if(s.length>0){let a=s.pop();t=l.indexOf(a)}return t}(r)),12&a.$$.dirty&&s(4,c=l[o])}),[e,r,l,o,c,n]}export default class extends a{constructor(a){super(),t(this,a,P,C,s,{category:0,post:1})}}export{M as preload};

import{S as a,i as t,s,a as e,o as r,e as n,v as o,B as c,k as l,p as i,c as $,j as g,w as f,f as m,h as d,l as p,x as h,y as v,z as u,A as y,G as E,D as I,E as w,u as D,H as V}from"./client.f5226e31.js";import{S as x,T as b}from"./Tail.f722f126.js";import{F as N,R as j}from"./Flip.6457d4b2.js";function C(a){let t,s,E,I,w,D,V,C,P,z,S,T,A,F,O,k,B,G,H,M,R,q,J,K,L,Q;document.title=t=a[5].title;const U=new x({props:{post:a[1],description:"Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" in "+e(a[0])+" Category",posts:!0,categories:!0,tags:!0,uncategorize:!0}}),W=new N({props:{index:a[3],collection:a[2],base:"/category/"+a[0]+"/read"}}),X=new j({props:{data:a[4]}}),Y=new N({props:{lg:!0,index:a[3],collection:a[2],base:"/category/"+a[0]+"/read"}}),Z=new x({props:{post:a[1],description:"Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" in "+e(a[0])+" Category",posts:!0,categories:!0,tags:!0,uncategorize:!0}}),_=new b({});return{c(){s=r(),E=n("main"),I=n("section"),w=n("div"),D=n("div"),V=n("div"),o(U.$$.fragment),P=r(),z=n("div"),S=n("div"),o(W.$$.fragment),A=r(),F=n("div"),O=n("div"),o(X.$$.fragment),B=r(),G=n("div"),H=n("div"),o(Y.$$.fragment),R=r(),q=n("div"),J=n("div"),o(Z.$$.fragment),L=r(),o(_.$$.fragment),this.h()},l(a){c('[data-svelte="svelte-cjhwof"]',document.head).forEach(l),s=i(a),E=$(a,"MAIN",{role:!0});var t=g(E);I=$(t,"SECTION",{});var e=g(I);w=$(e,"DIV",{class:!0});var r=g(w);D=$(r,"DIV",{class:!0});var n=g(D);V=$(n,"DIV",{class:!0});var o=g(V);f(U.$$.fragment,o),o.forEach(l),n.forEach(l),P=i(r),z=$(r,"DIV",{class:!0});var m=g(z);S=$(m,"DIV",{class:!0});var d=g(S);f(W.$$.fragment,d),d.forEach(l),m.forEach(l),A=i(r),F=$(r,"DIV",{class:!0});var p=g(F);O=$(p,"DIV",{class:!0});var h=g(O);f(X.$$.fragment,h),h.forEach(l),p.forEach(l),B=i(r),G=$(r,"DIV",{class:!0});var v=g(G);H=$(v,"DIV",{class:!0});var u=g(H);f(Y.$$.fragment,u),u.forEach(l),v.forEach(l),R=i(r),q=$(r,"DIV",{class:!0});var y=g(q);J=$(y,"DIV",{class:!0});var x=g(J);f(Z.$$.fragment,x),x.forEach(l),y.forEach(l),r.forEach(l),e.forEach(l),t.forEach(l),L=i(a),f(_.$$.fragment,a),this.h()},h(){m(V,"class",C=a[5].column),m(D,"class","row mt-5"),m(S,"class",T=a[5].column),m(z,"class","row"),m(O,"class",k=a[5].column),m(F,"class","row"),m(H,"class",M=a[5].column),m(G,"class","row"),m(J,"class",K=a[5].column),m(q,"class","row mb-5"),m(w,"class","container"),m(E,"role","main")},m(a,t){d(a,s,t),d(a,E,t),p(E,I),p(I,w),p(w,D),p(D,V),h(U,V,null),p(w,P),p(w,z),p(z,S),h(W,S,null),p(w,A),p(w,F),p(F,O),h(X,O,null),p(w,B),p(w,G),p(G,H),h(Y,H,null),p(w,R),p(w,q),p(q,J),h(Z,J,null),d(a,L,t),h(_,a,t),Q=!0},p(a,[s]){(!Q||32&s)&&t!==(t=a[5].title)&&(document.title=t);const r={};2&s&&(r.post=a[1]),5&s&&(r.description="Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" in "+e(a[0])+" Category"),U.$set(r);const n={};8&s&&(n.index=a[3]),4&s&&(n.collection=a[2]),1&s&&(n.base="/category/"+a[0]+"/read"),W.$set(n);const o={};16&s&&(o.data=a[4]),X.$set(o);const c={};8&s&&(c.index=a[3]),4&s&&(c.collection=a[2]),1&s&&(c.base="/category/"+a[0]+"/read"),Y.$set(c);const l={};2&s&&(l.post=a[1]),5&s&&(l.description="Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" in "+e(a[0])+" Category"),Z.$set(l)},i(a){Q||(v(U.$$.fragment,a),v(W.$$.fragment,a),v(X.$$.fragment,a),v(Y.$$.fragment,a),v(Z.$$.fragment,a),v(_.$$.fragment,a),Q=!0)},o(a){u(U.$$.fragment,a),u(W.$$.fragment,a),u(X.$$.fragment,a),u(Y.$$.fragment,a),u(Z.$$.fragment,a),u(_.$$.fragment,a),Q=!1},d(a){a&&l(s),a&&l(E),y(U),y(W),y(X),y(Y),y(Z),a&&l(L),y(_,a)}}}async function P(a,t){const{category:s,post:e}=a.params;return{category:s,post:e}}function z(a,t,s){let{category:e}=t,{post:r}=t;const n=D();let o=E().filter(a=>a.category===e);function c(){s(2,o=o.map(a=>(a.ago=V(a.date).from(V()),a)))}let l,i,$,g,f,m,d=null;return d=setInterval(c,6e4),c(),I(()=>{clearInterval(d)}),w(()=>{}),a.$set=(a=>{"category"in a&&s(0,e=a.category),"post"in a&&s(1,r=a.post)}),a.$$.update=(()=>{2&a.$$.dirty&&s(3,l=function(a){let t=0,s=o.filter(t=>t.id===a);if(s.length>0){let a=s.pop();t=o.indexOf(a)}return t}(r)),12&a.$$.dirty&&s(4,i=o[l]),12&a.$$.dirty&&s(7,$=l+1+1<=o.length),8&a.$$.dirty&&s(8,g=l-1>=0),140&a.$$.dirty&&(f=$?o[l+1]:o[0]),268&a.$$.dirty&&(m=g?o[l-1]:o[0])}),[e,r,o,l,i,n]}export default class extends a{constructor(a){super(),t(this,a,z,C,s,{category:0,post:1})}}export{P as preload};

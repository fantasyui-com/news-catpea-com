import{S as a,i as t,s,o as e,e as n,v as r,B as o,k as c,p as l,c as i,j as g,w as $,f,h as d,l as m,x as p,y as h,z as v,A as u,G as E,D as I,E as w,u as D,H as V}from"./client.66c4c134.js";import{S as x,T as b}from"./Tail.e373b6cf.js";import{F as y,R as T}from"./Flip.d876bdfb.js";function N(a){let t,s,E,I,w,D,V,N,j,P,W,S,A,F,O,k,z,B,C,G,H,M,R,q,J,K;document.title=t=a[5].title;const L=new x({props:{post:a[1],description:"Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" Tagged With "+a[0],posts:!0,categories:!0,tags:!0,untag:!0}}),Q=new y({props:{index:a[3],collection:a[2],base:"/tag/"+a[0]+"/read"}}),U=new T({props:{data:a[4]}}),X=new y({props:{lg:!0,index:a[3],collection:a[2],base:"/tag/"+a[0]+"/read"}}),Y=new x({props:{post:a[1],description:"Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" Tagged With "+a[0],posts:!0,categories:!0,tags:!0,untag:!0}}),Z=new b({});return{c(){s=e(),E=n("main"),I=n("section"),w=n("div"),D=n("div"),V=n("div"),r(L.$$.fragment),j=e(),P=n("div"),W=n("div"),r(Q.$$.fragment),A=e(),F=n("div"),O=n("div"),r(U.$$.fragment),z=e(),B=n("div"),C=n("div"),r(X.$$.fragment),H=e(),M=n("div"),R=n("div"),r(Y.$$.fragment),J=e(),r(Z.$$.fragment),this.h()},l(a){o('[data-svelte="svelte-cjhwof"]',document.head).forEach(c),s=l(a),E=i(a,"MAIN",{role:!0});var t=g(E);I=i(t,"SECTION",{});var e=g(I);w=i(e,"DIV",{class:!0});var n=g(w);D=i(n,"DIV",{class:!0});var r=g(D);V=i(r,"DIV",{class:!0});var f=g(V);$(L.$$.fragment,f),f.forEach(c),r.forEach(c),j=l(n),P=i(n,"DIV",{class:!0});var d=g(P);W=i(d,"DIV",{class:!0});var m=g(W);$(Q.$$.fragment,m),m.forEach(c),d.forEach(c),A=l(n),F=i(n,"DIV",{class:!0});var p=g(F);O=i(p,"DIV",{class:!0});var h=g(O);$(U.$$.fragment,h),h.forEach(c),p.forEach(c),z=l(n),B=i(n,"DIV",{class:!0});var v=g(B);C=i(v,"DIV",{class:!0});var u=g(C);$(X.$$.fragment,u),u.forEach(c),v.forEach(c),H=l(n),M=i(n,"DIV",{class:!0});var x=g(M);R=i(x,"DIV",{class:!0});var b=g(R);$(Y.$$.fragment,b),b.forEach(c),x.forEach(c),n.forEach(c),e.forEach(c),t.forEach(c),J=l(a),$(Z.$$.fragment,a),this.h()},h(){f(V,"class",N=a[5].column),f(D,"class","row mt-5"),f(W,"class",S=a[5].column),f(P,"class","row"),f(O,"class",k=a[5].column),f(F,"class","row"),f(C,"class",G=a[5].column),f(B,"class","row"),f(R,"class",q=a[5].column),f(M,"class","row mb-5"),f(w,"class","container"),f(E,"role","main")},m(a,t){d(a,s,t),d(a,E,t),m(E,I),m(I,w),m(w,D),m(D,V),p(L,V,null),m(w,j),m(w,P),m(P,W),p(Q,W,null),m(w,A),m(w,F),m(F,O),p(U,O,null),m(w,z),m(w,B),m(B,C),p(X,C,null),m(w,H),m(w,M),m(M,R),p(Y,R,null),d(a,J,t),p(Z,a,t),K=!0},p(a,[s]){(!K||32&s)&&t!==(t=a[5].title)&&(document.title=t);const e={};2&s&&(e.post=a[1]),5&s&&(e.description="Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" Tagged With "+a[0]),L.$set(e);const n={};8&s&&(n.index=a[3]),4&s&&(n.collection=a[2]),1&s&&(n.base="/tag/"+a[0]+"/read"),Q.$set(n);const r={};16&s&&(r.data=a[4]),U.$set(r);const o={};8&s&&(o.index=a[3]),4&s&&(o.collection=a[2]),1&s&&(o.base="/tag/"+a[0]+"/read"),X.$set(o);const c={};2&s&&(c.post=a[1]),5&s&&(c.description="Navigating "+a[2].length+" Post"+(1==a[2].length?"":"s")+" Tagged With "+a[0]),Y.$set(c)},i(a){K||(h(L.$$.fragment,a),h(Q.$$.fragment,a),h(U.$$.fragment,a),h(X.$$.fragment,a),h(Y.$$.fragment,a),h(Z.$$.fragment,a),K=!0)},o(a){v(L.$$.fragment,a),v(Q.$$.fragment,a),v(U.$$.fragment,a),v(X.$$.fragment,a),v(Y.$$.fragment,a),v(Z.$$.fragment,a),K=!1},d(a){a&&c(s),a&&c(E),u(L),u(Q),u(U),u(X),u(Y),a&&c(J),u(Z,a)}}}async function j(a,t){const{tag:s,post:e}=a.params;return{tag:s,post:e}}function P(a,t,s){let{tag:e}=t,{post:n}=t;const r=D();let o=E().filter(a=>a.tags.split(" ").includes(e));function c(){s(2,o=o.map(a=>(a.ago=V(a.date).from(V()),a)))}let l,i,g,$,f,d,m=null;return m=setInterval(c,6e4),c(),I(()=>{clearInterval(m)}),w(()=>{}),a.$set=(a=>{"tag"in a&&s(0,e=a.tag),"post"in a&&s(1,n=a.post)}),a.$$.update=(()=>{2&a.$$.dirty&&s(3,l=function(a){let t=0,s=o.filter(t=>t.id===a);if(s.length>0){let a=s.pop();t=o.indexOf(a)}return t}(n)),12&a.$$.dirty&&s(4,i=o[l]),12&a.$$.dirty&&s(7,g=l+1+1<=o.length),8&a.$$.dirty&&s(8,$=l-1>=0),140&a.$$.dirty&&(f=g?o[l+1]:o[0]),268&a.$$.dirty&&(d=$?o[l-1]:o[0])}),[e,n,o,l,i,r]}export default class extends a{constructor(a){super(),t(this,a,P,N,s,{tag:0,post:1})}}export{j as preload};

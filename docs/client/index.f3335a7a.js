import{S as a,i as t,s,r as e,u as r,v as o,w as l,x as c,y as f,h as n,e as i,t as h,z as d,k as m,l as p,c as u,j as v,d as g,f as E,g as $,m as x,A as I,o as D,B as w,C as A,D as S,E as V,F as b}from"./client.84222d96.js";import{P as j}from"./Post.37b398d9.js";import{S as P}from"./Sub.6bf5e0c9.js";function k(a,t,s){const e=a.slice();return e[3]=t[s],e}function y(a){let t;const s=new j({props:{data:a[3],read:"/read/"+a[3].id}});return{c(){e(s.$$.fragment)},l(a){r(s.$$.fragment,a)},m(a,e){o(s,a,e),t=!0},p(a,t){const e={};1&t&&(e.data=a[3]),1&t&&(e.read="/read/"+a[3].id),s.$set(e)},i(a){t||(l(s.$$.fragment,a),t=!0)},o(a){c(s.$$.fragment,a),t=!1},d(a){f(s,a)}}}function C(a){let t,s,w,A,V,b,j,C,N,O,T,B,F,z,M,R,W,q,G,H;const J=new P({props:{description:"Showing all posts",categories:"true",tags:"true"}});let K=a[0],L=[];for(let t=0;t<K.length;t+=1)L[t]=y(k(a,K,t));const Q=a=>c(L[a],1,1,()=>{L[a]=null});return{c(){t=n(),s=i("main"),w=i("section"),A=i("div"),V=i("div"),b=i("div"),e(J.$$.fragment),j=n(),C=i("div"),N=i("div");for(let a=0;a<L.length;a+=1)L[a].c();O=n(),T=i("footer"),B=i("div"),F=i("p"),z=i("a"),M=h("back to top"),R=n(),W=i("p"),q=i("a"),G=h("catpea.com"),this.h()},l(a){d('[data-svelte="svelte-1i9jecp"]',document.head).forEach(m),t=p(a),s=u(a,"MAIN",{role:!0});var e=v(s);w=u(e,"SECTION",{});var o=v(w);A=u(o,"DIV",{class:!0});var l=v(A);V=u(l,"DIV",{class:!0});var c=v(V);b=u(c,"DIV",{class:!0});var f=v(b);r(J.$$.fragment,f),f.forEach(m),c.forEach(m),j=p(l),C=u(l,"DIV",{class:!0});var n=v(C);N=u(n,"DIV",{class:!0});var i=v(N);for(let a=0;a<L.length;a+=1)L[a].l(i);i.forEach(m),n.forEach(m),l.forEach(m),o.forEach(m),e.forEach(m),O=p(a),T=u(a,"FOOTER",{class:!0});var h=v(T);B=u(h,"DIV",{class:!0});var E=v(B);F=u(E,"P",{class:!0});var $=v(F);z=u($,"A",{href:!0});var x=v(z);M=g(x,"back to top"),x.forEach(m),$.forEach(m),R=p(E),W=u(E,"P",{});var I=v(W);q=u(I,"A",{href:!0});var D=v(q);G=g(D,"catpea.com"),D.forEach(m),I.forEach(m),E.forEach(m),h.forEach(m),this.h()},h(){document.title="CATPEA! NEWS",E(b,"class","col-12 offset-md-1 col-md-10 offset-xxl-3 col-xxl-6"),E(V,"class","row mt-5"),E(N,"class","col-12 offset-md-1 col-md-10 offset-xxl-3 col-xxl-6"),E(C,"class","row mt-5"),E(A,"class","container"),E(s,"role","main"),E(z,"href","#top"),E(F,"class","float-right"),E(q,"href","https://catpea.com/"),E(B,"class","container"),E(T,"class","text-muted")},m(a,e){$(a,t,e),$(a,s,e),x(s,w),x(w,A),x(A,V),x(V,b),o(J,b,null),x(A,j),x(A,C),x(C,N);for(let a=0;a<L.length;a+=1)L[a].m(N,null);$(a,O,e),$(a,T,e),x(T,B),x(B,F),x(F,z),x(z,M),x(B,R),x(B,W),x(W,q),x(q,G),H=!0},p(a,[t]){if(1&t){let s;for(K=a[0],s=0;s<K.length;s+=1){const e=k(a,K,s);L[s]?(L[s].p(e,t),l(L[s],1)):(L[s]=y(e),L[s].c(),l(L[s],1),L[s].m(N,null))}for(S(),s=K.length;s<L.length;s+=1)Q(s);I()}},i(a){if(!H){l(J.$$.fragment,a);for(let a=0;a<K.length;a+=1)l(L[a]);H=!0}},o(a){c(J.$$.fragment,a),L=L.filter(Boolean);for(let a=0;a<L.length;a+=1)c(L[a]);H=!1},d(a){a&&m(t),a&&m(s),f(J),D(L,a),a&&m(O),a&&m(T)}}}function N(a,t,s){let e=V();function r(){s(0,e=e.map(a=>(a.ago=b(a.date).from(b()),a))),e.map(a=>(a.today=b().diff(b(a.date),"days")<1,a))}let o=null;return o=setInterval(r,6e4),r(),w(()=>{clearInterval(o)}),A(()=>{}),[e]}export default class extends a{constructor(a){super(),t(this,a,N,C,s,{})}}

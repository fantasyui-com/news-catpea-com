import{S as t,i as a,s,v as e,w as r,x as n,y as l,z as o,A as c,o as f,e as i,B as m,k as g,p as h,c as $,j as d,f as u,h as p,l as v,C as w,n as E,D as I,E as D,F as S,u as V,G as A,H as P}from"./client.f5226e31.js";import{P as j}from"./Post.be70320d.js";import{S as x,T as y}from"./Tail.f722f126.js";function T(t,a,s){const e=t.slice();return e[4]=a[s],e}function B(t){let a;const s=new j({props:{data:t[4],read:"/read/"+t[4].id}});return{c(){e(s.$$.fragment)},l(t){r(s.$$.fragment,t)},m(t,e){n(s,t,e),a=!0},p(t,a){const e={};1&a&&(e.data=t[4]),1&a&&(e.read="/read/"+t[4].id),s.$set(e)},i(t){a||(l(s.$$.fragment,t),a=!0)},o(t){o(s.$$.fragment,t),a=!1},d(t){c(s,t)}}}function C(t){let a,s,I,D,V,A,P,j,C,N,b,k,z,F,G,H,M,O;document.title=a=t[1].title;const q=new x({props:{description:"Showing All "+t[0].length+" Posts",categories:"true",tags:"true"}});let J=t[0],K=[];for(let a=0;a<J.length;a+=1)K[a]=B(T(t,J,a));const L=t=>o(K[t],1,1,()=>{K[t]=null}),Q=new x({props:{description:"Showing All "+t[0].length+" Posts",categories:"true",tags:"true"}}),R=new y({});return{c(){s=f(),I=i("main"),D=i("section"),V=i("div"),A=i("div"),P=i("div"),e(q.$$.fragment),C=f(),N=i("div"),b=i("div");for(let t=0;t<K.length;t+=1)K[t].c();z=f(),F=i("div"),G=i("div"),e(Q.$$.fragment),M=f(),e(R.$$.fragment),this.h()},l(t){m('[data-svelte="svelte-cjhwof"]',document.head).forEach(g),s=h(t),I=$(t,"MAIN",{role:!0});var a=d(I);D=$(a,"SECTION",{});var e=d(D);V=$(e,"DIV",{class:!0});var n=d(V);A=$(n,"DIV",{class:!0});var l=d(A);P=$(l,"DIV",{class:!0});var o=d(P);r(q.$$.fragment,o),o.forEach(g),l.forEach(g),C=h(n),N=$(n,"DIV",{class:!0});var c=d(N);b=$(c,"DIV",{class:!0});var f=d(b);for(let t=0;t<K.length;t+=1)K[t].l(f);f.forEach(g),c.forEach(g),z=h(n),F=$(n,"DIV",{class:!0});var i=d(F);G=$(i,"DIV",{class:!0});var u=d(G);r(Q.$$.fragment,u),u.forEach(g),i.forEach(g),n.forEach(g),e.forEach(g),a.forEach(g),M=h(t),r(R.$$.fragment,t),this.h()},h(){u(P,"class",j=t[1].column),u(A,"class","row mt-5"),u(b,"class",k=t[1].column),u(N,"class","row mt-5"),u(G,"class",H=t[1].column),u(F,"class","row mt-5"),u(V,"class","container"),u(I,"role","main")},m(t,a){p(t,s,a),p(t,I,a),v(I,D),v(D,V),v(V,A),v(A,P),n(q,P,null),v(V,C),v(V,N),v(N,b);for(let t=0;t<K.length;t+=1)K[t].m(b,null);v(V,z),v(V,F),v(F,G),n(Q,G,null),p(t,M,a),n(R,t,a),O=!0},p(t,[s]){(!O||2&s)&&a!==(a=t[1].title)&&(document.title=a);const e={};if(1&s&&(e.description="Showing All "+t[0].length+" Posts"),q.$set(e),1&s){let a;for(J=t[0],a=0;a<J.length;a+=1){const e=T(t,J,a);K[a]?(K[a].p(e,s),l(K[a],1)):(K[a]=B(e),K[a].c(),l(K[a],1),K[a].m(b,null))}for(S(),a=J.length;a<K.length;a+=1)L(a);w()}const r={};1&s&&(r.description="Showing All "+t[0].length+" Posts"),Q.$set(r)},i(t){if(!O){l(q.$$.fragment,t);for(let t=0;t<J.length;t+=1)l(K[t]);l(Q.$$.fragment,t),l(R.$$.fragment,t),O=!0}},o(t){o(q.$$.fragment,t),K=K.filter(Boolean);for(let t=0;t<K.length;t+=1)o(K[t]);o(Q.$$.fragment,t),o(R.$$.fragment,t),O=!1},d(t){t&&g(s),t&&g(I),c(q),E(K,t),c(Q),t&&g(M),c(R,t)}}}function N(t,a,s){const e=V();let r=A();function n(){s(0,r=r.map(t=>(t.ago=P(t.date).from(P()),t))),r.map(t=>(t.today=P().diff(P(t.date),"days")<1,t))}let l=null;return l=setInterval(n,6e4),I(()=>{clearInterval(l)}),n(),D(()=>{}),[r,e]}export default class extends t{constructor(t){super(),a(this,t,N,C,s,{})}}

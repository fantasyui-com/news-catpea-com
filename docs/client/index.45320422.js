import{S as a,i as t,s,e as l,t as e,d as r,f as o,g as c,h as n,j as f,k as h,l as i,m as g,n as d,o as p,p as m,q as v,r as u,u as E,v as x,w as y,x as A}from"./client.cdb00958.js";import{m as I,a as w}from"./index.d9fddfe9.js";function S(a,t,s){const l=a.slice();return l[7]=t[s],l}function P(a,t,s){const l=a.slice();return l[4]=t[s],l[6]=s,l}function D(a){let t,s,l=a[4].tags.split(" "),r=[];for(let t=0;t<l.length;t+=1)r[t]=N(S(a,l,t));return{c(){t=e("· ");for(let a=0;a<r.length;a+=1)r[a].c();s=v()},l(a){t=n(a,"· ");for(let t=0;t<r.length;t+=1)r[t].l(a);s=v()},m(a,l){g(a,t,l);for(let t=0;t<r.length;t+=1)r[t].m(a,l);g(a,s,l)},p(a,t){if(2&t){let e;for(l=a[4].tags.split(" "),e=0;e<l.length;e+=1){const o=S(a,l,e);r[e]?r[e].p(o,t):(r[e]=N(o),r[e].c(),r[e].m(s.parentNode,s))}for(;e<r.length;e+=1)r[e].d(1);r.length=l.length}},d(a){a&&f(t),u(r,a),a&&f(s)}}}function N(a){let t,s,r,h,m,v=a[7]+"";return{c(){t=l("a"),s=e("#"),r=e(v),m=e(" "),this.h()},l(a){t=o(a,"A",{href:!0});var l=c(t);s=n(l,"#"),r=n(l,v),l.forEach(f),m=n(a," "),this.h()},h(){i(t,"href",h="/tags/"+a[7])},m(a,l){g(a,t,l),d(t,s),d(t,r),g(a,m,l)},p(a,s){2&s&&v!==(v=a[7]+"")&&p(r,v),2&s&&h!==(h="/tags/"+a[7])&&i(t,"href",h)},d(a){a&&f(t),a&&f(m)}}}function V(a){let t,s,v,u,E,x,y,A,I,w,S,P,N,V,b,$,j,k,O,T=a[4].title+"",C=a[4].ago+"",L=m(a[4].category)+"",M=a[4].tags.length&&D(a);return{c(){t=l("div"),s=l("h1"),v=l("a"),u=e(T),x=r(),y=l("small"),A=e("—\n              "),I=l("span"),w=e("Posted "),S=e(C),P=e("\n              ·\n              in "),N=l("span"),V=r(),b=l("a"),$=e(L),k=r(),M&&M.c(),O=r(),this.h()},l(a){t=o(a,"DIV",{class:!0});var l=c(t);s=o(l,"H1",{class:!0});var e=c(s);v=o(e,"A",{href:!0,class:!0});var r=c(v);u=n(r,T),r.forEach(f),e.forEach(f),x=h(l),y=o(l,"SMALL",{class:!0});var i=c(y);A=n(i,"—\n              "),I=o(i,"SPAN",{class:!0});var g=c(I);w=n(g,"Posted "),S=n(g,C),g.forEach(f),P=n(i,"\n              ·\n              in "),N=o(i,"SPAN",{class:!0}),c(N).forEach(f),V=h(i),b=o(i,"A",{href:!0});var d=c(b);$=n(d,L),d.forEach(f),k=h(i),M&&M.l(i),i.forEach(f),O=h(l),l.forEach(f),this.h()},h(){i(v,"href",E="/explore/"+a[0]+"/read/"+a[4].id),i(v,"class","text-muted"),i(s,"class","lead"),i(I,"class","text-warning"),i(N,"class","text-info"),i(b,"href",j="/explore/"+a[4].category),i(y,"class","ml-3"),i(t,"class","mb-5")},m(a,l){g(a,t,l),d(t,s),d(s,v),d(v,u),d(t,x),d(t,y),d(y,A),d(y,I),d(I,w),d(I,S),d(y,P),d(y,N),d(y,V),d(y,b),d(b,$),d(y,k),M&&M.m(y,null),d(t,O)},p(a,t){2&t&&T!==(T=a[4].title+"")&&p(u,T),3&t&&E!==(E="/explore/"+a[0]+"/read/"+a[4].id)&&i(v,"href",E),2&t&&C!==(C=a[4].ago+"")&&p(S,C),2&t&&L!==(L=m(a[4].category)+"")&&p($,L),2&t&&j!==(j="/explore/"+a[4].category)&&i(b,"href",j),a[4].tags.length?M?M.p(a,t):((M=D(a)).c(),M.m(y,null)):M&&(M.d(1),M=null)},d(a){a&&f(t),M&&M.d()}}}function b(a){let t,s,m,v,y,A,I,w,S,D,N,b,$,j,k,O,T,C,L,M,q,F,H,R,W,z,B,G,J,K=a[1],Q=[];for(let t=0;t<K.length;t+=1)Q[t]=V(P(a,K,t));return{c(){t=r(),s=l("main"),m=l("section"),v=l("div"),y=l("div"),A=l("div"),I=l("span"),w=e("Showing posts in "),S=e(a[0]),D=e(" category only"),N=e(" · "),b=l("a"),$=e("show all posts"),j=e(" · "),k=l("a"),O=e("list available categories"),T=r(),C=l("div"),L=l("div");for(let a=0;a<Q.length;a+=1)Q[a].c();M=r(),q=l("footer"),F=l("div"),H=l("p"),R=l("a"),W=e("back to top"),z=r(),B=l("p"),G=l("a"),J=e("catpea.com"),this.h()},l(l){E('[data-svelte="svelte-1i9jecp"]',document.head).forEach(f),t=h(l),s=o(l,"MAIN",{role:!0});var e=c(s);m=o(e,"SECTION",{});var r=c(m);v=o(r,"DIV",{class:!0});var i=c(v);y=o(i,"DIV",{class:!0});var g=c(y);A=o(g,"DIV",{class:!0});var d=c(A);I=o(d,"SPAN",{class:!0});var p=c(I);w=n(p,"Showing posts in "),S=n(p,a[0]),D=n(p," category only"),p.forEach(f),N=n(d," · "),b=o(d,"A",{class:!0,href:!0});var u=c(b);$=n(u,"show all posts"),u.forEach(f),j=n(d," · "),k=o(d,"A",{class:!0,href:!0});var x=c(k);O=n(x,"list available categories"),x.forEach(f),d.forEach(f),g.forEach(f),T=h(i),C=o(i,"DIV",{class:!0});var P=c(C);L=o(P,"DIV",{class:!0});var V=c(L);for(let a=0;a<Q.length;a+=1)Q[a].l(V);V.forEach(f),P.forEach(f),i.forEach(f),r.forEach(f),e.forEach(f),M=h(l),q=o(l,"FOOTER",{class:!0});var K=c(q);F=o(K,"DIV",{class:!0});var U=c(F);H=o(U,"P",{class:!0});var X=c(H);R=o(X,"A",{href:!0});var Y=c(R);W=n(Y,"back to top"),Y.forEach(f),X.forEach(f),z=h(U),B=o(U,"P",{});var Z=c(B);G=o(Z,"A",{href:!0});var _=c(G);J=n(_,"catpea.com"),_.forEach(f),Z.forEach(f),U.forEach(f),K.forEach(f),this.h()},h(){document.title="CATPEA! NEWS",i(I,"class","text-warning small"),i(b,"class","small"),i(b,"href","/"),i(k,"class","small"),i(k,"href","/explore"),i(A,"class","col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xxl-3 col-xxl-6"),i(y,"class","row mt-5"),i(L,"class","col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xxl-3 col-xxl-6"),i(C,"class","row mt-5"),i(v,"class","container"),i(s,"role","main"),i(R,"href","#top"),i(H,"class","float-right"),i(G,"href","https://catpea.com/"),i(F,"class","container"),i(q,"class","text-muted")},m(a,l){g(a,t,l),g(a,s,l),d(s,m),d(m,v),d(v,y),d(y,A),d(A,I),d(I,w),d(I,S),d(I,D),d(A,N),d(A,b),d(b,$),d(A,j),d(A,k),d(k,O),d(v,T),d(v,C),d(C,L);for(let a=0;a<Q.length;a+=1)Q[a].m(L,null);g(a,M,l),g(a,q,l),d(q,F),d(F,H),d(H,R),d(R,W),d(F,z),d(F,B),d(B,G),d(G,J)},p(a,[t]){if(1&t&&p(S,a[0]),3&t){let s;for(K=a[1],s=0;s<K.length;s+=1){const l=P(a,K,s);Q[s]?Q[s].p(l,t):(Q[s]=V(l),Q[s].c(),Q[s].m(L,null))}for(;s<Q.length;s+=1)Q[s].d(1);Q.length=K.length}},i:x,o:x,d(a){a&&f(t),a&&f(s),u(Q,a),a&&f(M),a&&f(q)}}}async function $(a,t){const{category:s}=a.params;return{category:s}}function j(a,t,s){let{category:l}=t;function e(){s(1,r=r.map(a=>(a.ago=w(a.date).from(w()),a)))}let r,o=null;return o=setInterval(e,6e4),y(()=>{clearInterval(o)}),A(()=>{e()}),a.$set=(a=>{"category"in a&&s(0,l=a.category)}),a.$$.update=(()=>{1&a.$$.dirty&&s(1,r=I().filter(a=>a.category===l))}),[l,r]}export default class extends a{constructor(a){super(),t(this,a,j,b,s,{category:0})}}export{$ as preload};

import{S as a,i as s,s as t,e as r,t as c,d as l,f as e,g as o,h as f,j as n,k as h,l as i,m as d,n as m,o as v,q as p,p as E,r as u,u as g,v as I}from"./client.8b3541a6.js";import{m as x,a as A}from"./index.d2bd8a18.js";import"./Icon.66a4237c.js";function D(a,s,t){const r=a.slice();return r[3]=s[t],r[5]=t,r}function V(a){let s,t,p,E,u,g,I,x,A,D,V,b,j,N,P=a[3].title+"",S=a[3].ago+"",k=a[3].category+"";return{c(){s=r("div"),t=r("div"),p=r("a"),E=c(P),g=l(),I=r("div"),x=r("span"),A=c("— "),D=c(S),V=c(" · "),b=r("span"),j=c(k),N=l(),this.h()},l(a){s=e(a,"DIV",{class:!0});var r=o(s);t=e(r,"DIV",{});var c=o(t);p=e(c,"A",{href:!0,class:!0});var l=o(p);E=f(l,P),l.forEach(n),c.forEach(n),g=h(r),I=e(r,"DIV",{class:!0});var i=o(I);x=e(i,"SPAN",{class:!0});var d=o(x);A=f(d,"— "),D=f(d,S),d.forEach(n),V=f(i," · "),b=e(i,"SPAN",{class:!0});var m=o(b);j=f(m,k),m.forEach(n),i.forEach(n),N=h(r),r.forEach(n),this.h()},h(){i(p,"href",u="/read/"+a[3].id),i(p,"class","text-muted lead"),i(x,"class","text-warning small"),i(b,"class","text-info small"),i(I,"class","ml-3"),i(s,"class","mb-5")},m(a,r){d(a,s,r),m(s,t),m(t,p),m(p,E),m(s,g),m(s,I),m(I,x),m(x,A),m(x,D),m(I,V),m(I,b),m(b,j),m(s,N)},p(a,s){1&s&&P!==(P=a[3].title+"")&&v(E,P),1&s&&u!==(u="/read/"+a[3].id)&&i(p,"href",u),1&s&&S!==(S=a[3].ago+"")&&v(D,S),1&s&&k!==(k=a[3].category+"")&&v(j,k)},d(a){a&&n(s)}}}function b(a){let s,t,v,g,I,x,A,b,j,N,P,S,k,O,T,w,y=a[0],C=[];for(let s=0;s<y.length;s+=1)C[s]=V(D(a,y,s));return{c(){s=l(),t=r("main"),v=r("section"),g=r("div"),I=r("div"),x=r("div");for(let a=0;a<C.length;a+=1)C[a].c();A=l(),b=r("footer"),j=r("div"),N=r("p"),P=r("a"),S=c("back to top"),k=l(),O=r("p"),T=r("a"),w=c("catpea.com"),this.h()},l(a){p('[data-svelte="svelte-1i9jecp"]',document.head).forEach(n),s=h(a),t=e(a,"MAIN",{role:!0});var r=o(t);v=e(r,"SECTION",{});var c=o(v);g=e(c,"DIV",{class:!0});var l=o(g);I=e(l,"DIV",{class:!0});var i=o(I);x=e(i,"DIV",{class:!0});var d=o(x);for(let a=0;a<C.length;a+=1)C[a].l(d);d.forEach(n),i.forEach(n),l.forEach(n),c.forEach(n),r.forEach(n),A=h(a),b=e(a,"FOOTER",{class:!0});var m=o(b);j=e(m,"DIV",{class:!0});var E=o(j);N=e(E,"P",{class:!0});var u=o(N);P=e(u,"A",{href:!0});var D=o(P);S=f(D,"back to top"),D.forEach(n),u.forEach(n),k=h(E),O=e(E,"P",{});var V=o(O);T=e(V,"A",{href:!0});var y=o(T);w=f(y,"catpea.com"),y.forEach(n),V.forEach(n),E.forEach(n),m.forEach(n),this.h()},h(){document.title="CATPEA! NEWS",i(x,"class","col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xxl-3 col-xxl-6"),i(I,"class","row mt-5"),i(g,"class","container"),i(t,"role","main"),i(P,"href","#top"),i(N,"class","float-right"),i(T,"href","https://catpea.com/"),i(j,"class","container"),i(b,"class","text-muted")},m(a,r){d(a,s,r),d(a,t,r),m(t,v),m(v,g),m(g,I),m(I,x);for(let a=0;a<C.length;a+=1)C[a].m(x,null);d(a,A,r),d(a,b,r),m(b,j),m(j,N),m(N,P),m(P,S),m(j,k),m(j,O),m(O,T),m(T,w)},p(a,[s]){if(1&s){let t;for(y=a[0],t=0;t<y.length;t+=1){const r=D(a,y,t);C[t]?C[t].p(r,s):(C[t]=V(r),C[t].c(),C[t].m(x,null))}for(;t<C.length;t+=1)C[t].d(1);C.length=y.length}},i:E,o:E,d(a){a&&n(s),a&&n(t),u(C,a),a&&n(A),a&&n(b)}}}function j(a,s,t){let r=x();function c(){t(0,r=r.map(a=>(a.ago=A(a.date).from(A()),a)))}let l=null;return l=setInterval(c,6e4),c(),g(()=>{clearInterval(l)}),I(()=>{}),[r]}export default class extends a{constructor(a){super(),s(this,a,j,b,t,{})}}

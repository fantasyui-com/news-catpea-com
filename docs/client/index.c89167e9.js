import{S as a,i as s,s as l,e as r,t as e,d as t,f as c,g as o,h as f,j as h,k as i,l as n,m as v,n as d,o as m,q as g,p,r as E,u,v as x}from"./client.1e1bbaad.js";import{m as I,a as A}from"./index.67d812bd.js";function D(a,s,l){const r=a.slice();return r[3]=s[l],r[5]=l,r}function V(a){let s,l,g,p,E,u,x,I,A,D,V,b,S,w,N,P=a[3].title+"",j=a[3].ago+"",y=a[3].category+"";return{c(){s=r("div"),l=r("div"),g=r("a"),p=e(P),u=t(),x=r("div"),I=r("span"),A=e("— "),D=e(j),V=e(" · "),b=r("a"),S=e(y),N=t(),this.h()},l(a){s=c(a,"DIV",{class:!0});var r=o(s);l=c(r,"DIV",{});var e=o(l);g=c(e,"A",{href:!0,class:!0});var t=o(g);p=f(t,P),t.forEach(h),e.forEach(h),u=i(r),x=c(r,"DIV",{class:!0});var n=o(x);I=c(n,"SPAN",{class:!0});var v=o(I);A=f(v,"— "),D=f(v,j),v.forEach(h),V=f(n," · "),b=c(n,"A",{class:!0,href:!0});var d=o(b);S=f(d,y),d.forEach(h),n.forEach(h),N=i(r),r.forEach(h),this.h()},h(){n(g,"href",E="/read/"+a[3].id),n(g,"class","text-muted lead"),n(I,"class","text-warning small"),n(b,"class","small"),n(b,"href",w="/explore/"+a[3].category),n(x,"class","ml-3"),n(s,"class","mb-5")},m(a,r){v(a,s,r),d(s,l),d(l,g),d(g,p),d(s,u),d(s,x),d(x,I),d(I,A),d(I,D),d(x,V),d(x,b),d(b,S),d(s,N)},p(a,s){1&s&&P!==(P=a[3].title+"")&&m(p,P),1&s&&E!==(E="/read/"+a[3].id)&&n(g,"href",E),1&s&&j!==(j=a[3].ago+"")&&m(D,j),1&s&&y!==(y=a[3].category+"")&&m(S,y),1&s&&w!==(w="/explore/"+a[3].category)&&n(b,"href",w)},d(a){a&&h(s)}}}function b(a){let s,l,m,u,x,I,A,b,S,w,N,P,j,y,k,O,T,C,q,F,M,R,W,z,B=a[0],G=[];for(let s=0;s<B.length;s+=1)G[s]=V(D(a,B,s));return{c(){s=t(),l=r("main"),m=r("section"),u=r("div"),x=r("div"),I=r("div"),A=r("span"),b=e("Showing all posts in all categories"),S=e(" · "),w=r("a"),N=e("list available categories"),P=t(),j=r("div"),y=r("div");for(let a=0;a<G.length;a+=1)G[a].c();k=t(),O=r("footer"),T=r("div"),C=r("p"),q=r("a"),F=e("back to top"),M=t(),R=r("p"),W=r("a"),z=e("catpea.com"),this.h()},l(a){g('[data-svelte="svelte-1i9jecp"]',document.head).forEach(h),s=i(a),l=c(a,"MAIN",{role:!0});var r=o(l);m=c(r,"SECTION",{});var e=o(m);u=c(e,"DIV",{class:!0});var t=o(u);x=c(t,"DIV",{class:!0});var n=o(x);I=c(n,"DIV",{class:!0});var v=o(I);A=c(v,"SPAN",{class:!0});var d=o(A);b=f(d,"Showing all posts in all categories"),d.forEach(h),S=f(v," · "),w=c(v,"A",{class:!0,href:!0});var p=o(w);N=f(p,"list available categories"),p.forEach(h),v.forEach(h),n.forEach(h),P=i(t),j=c(t,"DIV",{class:!0});var E=o(j);y=c(E,"DIV",{class:!0});var D=o(y);for(let a=0;a<G.length;a+=1)G[a].l(D);D.forEach(h),E.forEach(h),t.forEach(h),e.forEach(h),r.forEach(h),k=i(a),O=c(a,"FOOTER",{class:!0});var V=o(O);T=c(V,"DIV",{class:!0});var B=o(T);C=c(B,"P",{class:!0});var H=o(C);q=c(H,"A",{href:!0});var J=o(q);F=f(J,"back to top"),J.forEach(h),H.forEach(h),M=i(B),R=c(B,"P",{});var K=o(R);W=c(K,"A",{href:!0});var L=o(W);z=f(L,"catpea.com"),L.forEach(h),K.forEach(h),B.forEach(h),V.forEach(h),this.h()},h(){document.title="CATPEA! NEWS",n(A,"class","text-warning small"),n(w,"class","small"),n(w,"href","/explore"),n(I,"class","col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xxl-3 col-xxl-6"),n(x,"class","row mt-5"),n(y,"class","col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xxl-3 col-xxl-6"),n(j,"class","row mt-5"),n(u,"class","container"),n(l,"role","main"),n(q,"href","#top"),n(C,"class","float-right"),n(W,"href","https://catpea.com/"),n(T,"class","container"),n(O,"class","text-muted")},m(a,r){v(a,s,r),v(a,l,r),d(l,m),d(m,u),d(u,x),d(x,I),d(I,A),d(A,b),d(I,S),d(I,w),d(w,N),d(u,P),d(u,j),d(j,y);for(let a=0;a<G.length;a+=1)G[a].m(y,null);v(a,k,r),v(a,O,r),d(O,T),d(T,C),d(C,q),d(q,F),d(T,M),d(T,R),d(R,W),d(W,z)},p(a,[s]){if(1&s){let l;for(B=a[0],l=0;l<B.length;l+=1){const r=D(a,B,l);G[l]?G[l].p(r,s):(G[l]=V(r),G[l].c(),G[l].m(y,null))}for(;l<G.length;l+=1)G[l].d(1);G.length=B.length}},i:p,o:p,d(a){a&&h(s),a&&h(l),E(G,a),a&&h(k),a&&h(O)}}}function S(a,s,l){let r=I();function e(){l(0,r=r.map(a=>(a.ago=A(a.date).from(A()),a)))}let t=null;return t=setInterval(e,6e4),e(),u(()=>{clearInterval(t)}),x(()=>{}),[r]}export default class extends a{constructor(a){super(),s(this,a,S,b,l,{})}}
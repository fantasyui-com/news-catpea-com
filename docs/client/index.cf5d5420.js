import{S as a,i as t,s,f as e,t as l,r as n,g as r,l as o,h as c,d as i,u as d,j as h,k as f,v as m,a as g,m as u,p,G as v,K as $,H as b,I as E,A as y,C as I,J as w,q as D,L as A,o as V,F as T,N as O,n as j,M as x}from"./client.e8e260f1.js";import{S as L,T as M}from"./Tail.8cb346a9.js";function k(a,t,s){const e=a.slice();return e[7]=t[s],e}function C(a){let t,s,n=a[7].today+"";return{c(){t=e("span"),s=l(n),this.h()},l(a){t=r(a,"SPAN",{class:!0});var e=o(t);s=c(e,n),e.forEach(i),this.h()},h(){h(t,"class","badge badge-danger badge-pill float-right")},m(a,e){g(a,t,e),u(t,s)},p(a,t){1&t&&n!==(n=a[7].today+"")&&p(s,n)},d(a){a&&i(t)}}}function N(a){let t;return{c(){t=l(".")},l(a){t=c(a,".")},m(a,s){g(a,t,s)},p:j,d(a){a&&i(t)}}}function S(a){let t,s,e,n=a[7].today+"";return{c(){t=l(", "),s=l(n),e=l(" in the last 24 hours.")},l(a){t=c(a,", "),s=c(a,n),e=c(a," in the last 24 hours.")},m(a,l){g(a,t,l),g(a,s,l),g(a,e,l)},p(a,t){1&t&&n!==(n=a[7].today+"")&&p(s,n)},d(a){a&&i(t),a&&i(s),a&&i(e)}}}function H(a){let t,s,v,$,b,E,y,I,w,D,A,V,T,O,j,x,L,M,k,H,B,G,P,U,q,F,J,K=a[7].name+"",z=(a[1]?a[7].ago:a[7].published)+"",Q=a[7].count+"",R=1==a[7].count?"":"s",W=a[7].name+"",X=a[1]&&a[7].today&&C(a);function Y(a,t){return a[1]?S:N}let Z=Y(a),_=Z(a);return{c(){t=e("div"),s=e("div"),v=e("h5"),$=e("a"),b=l(K),E=l(" » "),X&&X.c(),I=n(),w=e("h6"),D=e("img"),V=l(" Updated "),T=l(z),O=l("."),j=n(),x=e("p"),L=l("Contains "),M=l(Q),k=l(" post"),H=l(R),_.c(),B=n(),G=e("a"),P=l("Browse "),U=l(W),q=l(" »"),J=n(),this.h()},l(a){t=r(a,"DIV",{class:!0});var e=o(t);s=r(e,"DIV",{class:!0});var l=o(s);v=r(l,"H5",{class:!0});var n=o(v);$=r(n,"A",{class:!0,href:!0});var h=o($);b=c(h,K),E=c(h," » "),X&&X.l(h),h.forEach(i),n.forEach(i),I=d(l),w=r(l,"H6",{class:!0});var f=o(w);D=r(f,"IMG",{src:!0,alt:!0,width:!0,height:!0,style:!0}),V=c(f," Updated "),T=c(f,z),O=c(f,"."),f.forEach(i),j=d(l),x=r(l,"P",{class:!0});var m=o(x);L=c(m,"Contains "),M=c(m,Q),k=c(m," post"),H=c(m,R),_.l(m),m.forEach(i),B=d(l),G=r(l,"A",{class:!0,href:!0});var g=o(G);P=c(g,"Browse "),U=c(g,W),q=c(g," »"),g.forEach(i),l.forEach(i),J=d(e),e.forEach(i),this.h()},h(){h($,"class","text-light"),h($,"href",y="/tag/"+a[7].id),h(v,"class","card-title pb-2"),D.src!==(A="/icons/envelope.svg")&&h(D,"src","/icons/envelope.svg"),h(D,"alt",""),h(D,"width","16"),h(D,"height","16"),f(D,"filter","invert(1)"),h(w,"class","card-subtitle ml-3 mb-3"),h(x,"class","card-text ml-3"),h(G,"class","btn btn-outline-info ml-3"),h(G,"href",F="/tag/"+a[7].id),h(s,"class","card-body py-4 px-3"),h(t,"class","card mb-5 article-link shadow"),m(t,"border-danger",a[1]&&a[7].today)},m(a,e){g(a,t,e),u(t,s),u(s,v),u(v,$),u($,b),u($,E),X&&X.m($,null),u(s,I),u(s,w),u(w,D),u(w,V),u(w,T),u(w,O),u(s,j),u(s,x),u(x,L),u(x,M),u(x,k),u(x,H),_.m(x,null),u(s,B),u(s,G),u(G,P),u(G,U),u(G,q),u(t,J)},p(a,s){1&s&&K!==(K=a[7].name+"")&&p(b,K),a[1]&&a[7].today?X?X.p(a,s):((X=C(a)).c(),X.m($,null)):X&&(X.d(1),X=null),1&s&&y!==(y="/tag/"+a[7].id)&&h($,"href",y),3&s&&z!==(z=(a[1]?a[7].ago:a[7].published)+"")&&p(T,z),1&s&&Q!==(Q=a[7].count+"")&&p(M,Q),1&s&&R!==(R=1==a[7].count?"":"s")&&p(H,R),Z===(Z=Y(a))&&_?_.p(a,s):(_.d(1),(_=Z(a))&&(_.c(),_.m(x,null))),1&s&&W!==(W=a[7].name+"")&&p(U,W),1&s&&F!==(F="/tag/"+a[7].id)&&h(G,"href",F),3&s&&m(t,"border-danger",a[1]&&a[7].today)},d(a){a&&i(t),X&&X.d(),_.d()}}}function B(a){let t,s,l,c,f,m,p,A,V,T,O,j,x,C,N,S,B,G;document.title=t=a[2].title;const P=new L({props:{description:"Listing Of All "+a[0].length+" Tags",posts:!0,categories:!0}});let U=a[0],q=[];for(let t=0;t<U.length;t+=1)q[t]=H(k(a,U,t));const F=new L({props:{description:"Listing Of All "+a[0].length+" Tags",opened:!0,posts:!0,categories:!0}}),J=new M({});return{c(){s=n(),l=e("main"),c=e("section"),f=e("div"),m=e("div"),p=e("div"),v(P.$$.fragment),V=n(),T=e("div"),O=e("div");for(let a=0;a<q.length;a+=1)q[a].c();x=n(),C=e("div"),N=e("div"),v(F.$$.fragment),B=n(),v(J.$$.fragment),this.h()},l(a){$('[data-svelte="svelte-cjhwof"]',document.head).forEach(i),s=d(a),l=r(a,"MAIN",{role:!0});var t=o(l);c=r(t,"SECTION",{});var e=o(c);f=r(e,"DIV",{class:!0});var n=o(f);m=r(n,"DIV",{class:!0});var h=o(m);p=r(h,"DIV",{class:!0});var g=o(p);b(P.$$.fragment,g),g.forEach(i),h.forEach(i),V=d(n),T=r(n,"DIV",{class:!0});var u=o(T);O=r(u,"DIV",{class:!0});var v=o(O);for(let a=0;a<q.length;a+=1)q[a].l(v);v.forEach(i),u.forEach(i),x=d(n),C=r(n,"DIV",{class:!0});var E=o(C);N=r(E,"DIV",{class:!0});var y=o(N);b(F.$$.fragment,y),y.forEach(i),E.forEach(i),n.forEach(i),e.forEach(i),t.forEach(i),B=d(a),b(J.$$.fragment,a),this.h()},h(){h(p,"class",A=a[2].column),h(m,"class","row mt-5"),h(O,"class",j=a[2].column),h(T,"class","row mt-5"),h(N,"class",S=a[2].column),h(C,"class","row mb-5"),h(f,"class","container"),h(l,"role","main")},m(a,t){g(a,s,t),g(a,l,t),u(l,c),u(c,f),u(f,m),u(m,p),E(P,p,null),u(f,V),u(f,T),u(T,O);for(let a=0;a<q.length;a+=1)q[a].m(O,null);u(f,x),u(f,C),u(C,N),E(F,N,null),g(a,B,t),E(J,a,t),G=!0},p(a,[s]){(!G||4&s)&&t!==(t=a[2].title)&&(document.title=t);const e={};if(1&s&&(e.description="Listing Of All "+a[0].length+" Tags"),P.$set(e),3&s){let t;for(U=a[0],t=0;t<U.length;t+=1){const e=k(a,U,t);q[t]?q[t].p(e,s):(q[t]=H(e),q[t].c(),q[t].m(O,null))}for(;t<q.length;t+=1)q[t].d(1);q.length=U.length}const l={};1&s&&(l.description="Listing Of All "+a[0].length+" Tags"),F.$set(l)},i(a){G||(y(P.$$.fragment,a),y(F.$$.fragment,a),y(J.$$.fragment,a),G=!0)},o(a){I(P.$$.fragment,a),I(F.$$.fragment,a),I(J.$$.fragment,a),G=!1},d(a){a&&i(s),a&&i(l),w(P),D(q,a),w(F),a&&i(B),w(J,a)}}}function G(a,t,s){const e=T();let l=x(),n={},r=[];function o(){l=(l=l.map(a=>(a.ago=O(a.date).from(O()),a))).map(a=>(a.today=O().diff(O(a.date),"days")<1,a)),e.blinkenlighten&&(l=(l=l.map(a=>(a.ago=O(O(a.date).add(parseInt(31*Math.random()),"days")).from(O()),a))).map((a,t)=>(a.today=Math.random()<.5,a))),n=l.reduce((a,t)=>(function(a,t){for(const s of t.tags.split(" "))a[s]||(a[s]={id:s,name:s,count:0,latest:new Date(t.date),published:t.published}),a[s].count++,new Date(t.date)-new Date(a[s].latest)>0&&(a[s].latest=new Date(t.date));return a})(a,t),{}),s(0,r=Object.keys(n).map(a=>n[a])),r.map(a=>(a.ago=O(a.latest).from(O()),a)),r.map(a=>(a.today=l.filter(t=>t.tags.split(" ").includes(a.id)).filter(a=>a.today).length,a))}let c=null;c=setInterval(o,e.recalculateInterval),o(),A(()=>{clearInterval(c)});let i=!1;return V(()=>{s(1,i=!0)}),[r,i,e]}export default class extends a{constructor(a){super(),t(this,a,G,B,s,{})}}

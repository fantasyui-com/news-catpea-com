import{S as a,i as s,s as t,a as e,e as n,F as r,J as l,f as o,g as c,c as i,b as $,G as f,h as g,l as m,m as d,H as h,y as p,A as v,I as u,K as E,C as I,E as w,L as D,M as V}from"./client.6d10b090.js";import{S as x,T as P}from"./Tail.25ac8e47.js";import{F as A,R as N}from"./Flip.81ef55ad.js";function b(a){let s,t,E,I,w,D,V,b,j,y,F,S,T,C,M,O,G,H,J,K,L,R,k,q,z,B;document.title=s=a[3].title;const Q=new x({props:{description:"Post# "+(a[0].length-a[1])+": Navigating All "+a[0].length+" Post"+(1==a[0].length?"":"s"),posts:!0,tags:!0}}),U=new A({props:{index:a[1],collection:a[0],base:"/read"}}),W=new N({props:{data:a[2]}}),X=new A({props:{lg:!0,index:a[1],collection:a[0],base:"/read"}}),Y=new x({props:{description:"Post# "+(a[0].length-a[1])+": Navigating All  "+a[0].length+" Post"+(1==a[0].length?"":"s"),opened:!0,posts:!0,tags:!0}}),Z=new P({});return{c(){t=e(),E=n("main"),I=n("section"),w=n("div"),D=n("div"),V=n("div"),r(Q.$$.fragment),j=e(),y=n("div"),F=n("div"),r(U.$$.fragment),T=e(),C=n("div"),M=n("div"),r(W.$$.fragment),G=e(),H=n("div"),J=n("div"),r(X.$$.fragment),L=e(),R=n("div"),k=n("div"),r(Y.$$.fragment),z=e(),r(Z.$$.fragment),this.h()},l(a){l('[data-svelte="svelte-cjhwof"]',document.head).forEach(o),t=c(a),E=i(a,"MAIN",{role:!0});var s=$(E);I=i(s,"SECTION",{});var e=$(I);w=i(e,"DIV",{class:!0});var n=$(w);D=i(n,"DIV",{class:!0});var r=$(D);V=i(r,"DIV",{class:!0});var g=$(V);f(Q.$$.fragment,g),g.forEach(o),r.forEach(o),j=c(n),y=i(n,"DIV",{class:!0});var m=$(y);F=i(m,"DIV",{class:!0});var d=$(F);f(U.$$.fragment,d),d.forEach(o),m.forEach(o),T=c(n),C=i(n,"DIV",{class:!0});var h=$(C);M=i(h,"DIV",{class:!0});var p=$(M);f(W.$$.fragment,p),p.forEach(o),h.forEach(o),G=c(n),H=i(n,"DIV",{class:!0});var v=$(H);J=i(v,"DIV",{class:!0});var u=$(J);f(X.$$.fragment,u),u.forEach(o),v.forEach(o),L=c(n),R=i(n,"DIV",{class:!0});var x=$(R);k=i(x,"DIV",{class:!0});var P=$(k);f(Y.$$.fragment,P),P.forEach(o),x.forEach(o),n.forEach(o),e.forEach(o),s.forEach(o),z=c(a),f(Z.$$.fragment,a),this.h()},h(){g(V,"class",b=a[3].column),g(D,"class","row mt-5"),g(F,"class",S=a[3].column),g(y,"class","row"),g(M,"class",O=a[3].column),g(C,"class","row"),g(J,"class",K=a[3].column),g(H,"class","row"),g(k,"class",q=a[3].column),g(R,"class","row mb-5"),g(w,"class","container"),g(E,"role","main")},m(a,s){m(a,t,s),m(a,E,s),d(E,I),d(I,w),d(w,D),d(D,V),h(Q,V,null),d(w,j),d(w,y),d(y,F),h(U,F,null),d(w,T),d(w,C),d(C,M),h(W,M,null),d(w,G),d(w,H),d(H,J),h(X,J,null),d(w,L),d(w,R),d(R,k),h(Y,k,null),m(a,z,s),h(Z,a,s),B=!0},p(a,[t]){(!B||8&t)&&s!==(s=a[3].title)&&(document.title=s);const e={};3&t&&(e.description="Post# "+(a[0].length-a[1])+": Navigating All "+a[0].length+" Post"+(1==a[0].length?"":"s")),Q.$set(e);const n={};2&t&&(n.index=a[1]),1&t&&(n.collection=a[0]),U.$set(n);const r={};4&t&&(r.data=a[2]),W.$set(r);const l={};2&t&&(l.index=a[1]),1&t&&(l.collection=a[0]),X.$set(l);const o={};3&t&&(o.description="Post# "+(a[0].length-a[1])+": Navigating All  "+a[0].length+" Post"+(1==a[0].length?"":"s")),Y.$set(o)},i(a){B||(p(Q.$$.fragment,a),p(U.$$.fragment,a),p(W.$$.fragment,a),p(X.$$.fragment,a),p(Y.$$.fragment,a),p(Z.$$.fragment,a),B=!0)},o(a){v(Q.$$.fragment,a),v(U.$$.fragment,a),v(W.$$.fragment,a),v(X.$$.fragment,a),v(Y.$$.fragment,a),v(Z.$$.fragment,a),B=!1},d(a){a&&o(t),a&&o(E),u(Q),u(U),u(W),u(X),u(Y),a&&o(z),u(Z,a)}}}async function j(a,s){const{post:t}=a.params;return{post:t}}function y(a,s,t){let{post:e}=s;const n=w();let r=D();function l(){t(0,r=r.map(a=>(a.ago=V(a.date).from(V()),a)))}let o,c,i=null;return i=setInterval(l,6e4),l(),E(()=>{clearInterval(i)}),I(()=>{}),a.$set=(a=>{"post"in a&&t(4,e=a.post)}),a.$$.update=(()=>{16&a.$$.dirty&&t(1,o=function(a){let s=0,t=r.filter(s=>s.id===a);if(t.length>0){let a=t.pop();s=r.indexOf(a)}return s}(e)),3&a.$$.dirty&&t(2,c=r[o])}),[r,o,c,n,e]}export default class extends a{constructor(a){super(),s(this,a,y,b,t,{post:4})}}export{j as preload};

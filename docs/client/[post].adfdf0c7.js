import{S as a,i as t,s,_ as e,q as n,c as r,F as o,J as l,d as c,r as i,f as $,k as f,G as m,h as g,a as d,l as h,H as p,$ as v,z as u,B as I,I as E,K as w,o as D,E as V,L as x,M as P}from"./client.1e3e3ac6.js";import{S as y,T as b}from"./Tail.de0a6b26.js";import{F as N,R as A}from"./Flip.1add0472.js";function j(a){let t,s,w,D,V,x,P,j,M,F,S,T,k,O,q,z,B,C,G,H,J,K,L,R,_,Q;document.title=t=a[3].title;const U=new y({props:{description:"Post# "+(a[0].length-a[1])+": Navigating All "+a[0].length+" Post"+(1==a[0].length?"":"s"),posts:!0,tags:!0}}),W=new N({props:{index:a[1],collection:a[0],base:"/read"}}),X=[{data:a[2]},{item:a[2]}];let Y={};for(let a=0;a<X.length;a+=1)Y=e(Y,X[a]);const Z=new A({props:Y}),aa=new N({props:{lg:!0,index:a[1],collection:a[0],base:"/read"}}),ta=new y({props:{description:"Post# "+(a[0].length-a[1])+": Navigating All  "+a[0].length+" Post"+(1==a[0].length?"":"s"),opened:!0,posts:!0,tags:!0}}),sa=new b({});return{c(){s=n(),w=r("main"),D=r("section"),V=r("div"),x=r("div"),P=r("div"),o(U.$$.fragment),M=n(),F=r("div"),S=r("div"),o(W.$$.fragment),k=n(),O=r("div"),q=r("div"),o(Z.$$.fragment),B=n(),C=r("div"),G=r("div"),o(aa.$$.fragment),J=n(),K=r("div"),L=r("div"),o(ta.$$.fragment),_=n(),o(sa.$$.fragment),this.h()},l(a){l('[data-svelte="svelte-cjhwof"]',document.head).forEach(c),s=i(a),w=$(a,"MAIN",{role:!0});var t=f(w);D=$(t,"SECTION",{});var e=f(D);V=$(e,"DIV",{class:!0});var n=f(V);x=$(n,"DIV",{class:!0});var r=f(x);P=$(r,"DIV",{class:!0});var o=f(P);m(U.$$.fragment,o),o.forEach(c),r.forEach(c),M=i(n),F=$(n,"DIV",{class:!0});var g=f(F);S=$(g,"DIV",{class:!0});var d=f(S);m(W.$$.fragment,d),d.forEach(c),g.forEach(c),k=i(n),O=$(n,"DIV",{class:!0});var h=f(O);q=$(h,"DIV",{class:!0});var p=f(q);m(Z.$$.fragment,p),p.forEach(c),h.forEach(c),B=i(n),C=$(n,"DIV",{class:!0});var v=f(C);G=$(v,"DIV",{class:!0});var u=f(G);m(aa.$$.fragment,u),u.forEach(c),v.forEach(c),J=i(n),K=$(n,"DIV",{class:!0});var I=f(K);L=$(I,"DIV",{class:!0});var E=f(L);m(ta.$$.fragment,E),E.forEach(c),I.forEach(c),n.forEach(c),e.forEach(c),t.forEach(c),_=i(a),m(sa.$$.fragment,a),this.h()},h(){g(P,"class",j=a[3].column),g(x,"class","row mt-5"),g(S,"class",T=a[3].column),g(F,"class","row"),g(q,"class",z=a[3].column),g(O,"class","row"),g(G,"class",H=a[3].column),g(C,"class","row"),g(L,"class",R=a[3].column),g(K,"class","row mb-5"),g(V,"class","container"),g(w,"role","main")},m(a,t){d(a,s,t),d(a,w,t),h(w,D),h(D,V),h(V,x),h(x,P),p(U,P,null),h(V,M),h(V,F),h(F,S),p(W,S,null),h(V,k),h(V,O),h(O,q),p(Z,q,null),h(V,B),h(V,C),h(C,G),p(aa,G,null),h(V,J),h(V,K),h(K,L),p(ta,L,null),d(a,_,t),p(sa,a,t),Q=!0},p(a,[s]){(!Q||8&s)&&t!==(t=a[3].title)&&(document.title=t);const e={};3&s&&(e.description="Post# "+(a[0].length-a[1])+": Navigating All "+a[0].length+" Post"+(1==a[0].length?"":"s")),U.$set(e);const n={};2&s&&(n.index=a[1]),1&s&&(n.collection=a[0]),W.$set(n);const r=4&s?v(X,[{data:a[2]},{item:a[2]}]):{};Z.$set(r);const o={};2&s&&(o.index=a[1]),1&s&&(o.collection=a[0]),aa.$set(o);const l={};3&s&&(l.description="Post# "+(a[0].length-a[1])+": Navigating All  "+a[0].length+" Post"+(1==a[0].length?"":"s")),ta.$set(l)},i(a){Q||(u(U.$$.fragment,a),u(W.$$.fragment,a),u(Z.$$.fragment,a),u(aa.$$.fragment,a),u(ta.$$.fragment,a),u(sa.$$.fragment,a),Q=!0)},o(a){I(U.$$.fragment,a),I(W.$$.fragment,a),I(Z.$$.fragment,a),I(aa.$$.fragment,a),I(ta.$$.fragment,a),I(sa.$$.fragment,a),Q=!1},d(a){a&&c(s),a&&c(w),E(U),E(W),E(Z),E(aa),E(ta),a&&c(_),E(sa,a)}}}async function M(a,t){const{post:s}=a.params;return{post:s}}function F(a,t,s){let{post:e}=t;const n=V();let r,o,l=x(),c=null;function i(){s(0,l=l.map(a=>(a.ago=P(a.date).from(P()),a))),s(0,l=l.map(a=>(a.today=P().diff(P(a.date),"days")<1,a))),n.blinkenlighten&&(s(0,l=l.map(a=>(a.ago=P(P(a.date).subtract(parseInt(31*Math.random()),"days")).from(P()),a))),s(0,l=l.map((a,t)=>(a.today=Math.random()<.5,a))))}return w(()=>{clearInterval(c)}),D(()=>{c=setInterval(i,n.recalculateInterval)}),i(),a.$set=(a=>{"post"in a&&s(4,e=a.post)}),a.$$.update=(()=>{16&a.$$.dirty&&s(1,r=function(a){let t=0,s=l.filter(t=>t.id===a);if(s.length>0){let a=s.pop();t=l.indexOf(a)}return t}(e)),3&a.$$.dirty&&s(2,o=l[r])}),[l,r,o,n,e]}export default class extends a{constructor(a){super(),t(this,a,F,j,s,{post:4})}}export{M as preload};

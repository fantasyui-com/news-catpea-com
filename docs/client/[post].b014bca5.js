import{S as a,i as t,s,_ as e,r as n,f as r,G as o,K as l,d as c,u as i,g as $,l as f,H as m,j as g,a as d,m as p,I as h,$ as v,A as u,C as I,J as E,L as w,o as D,F as V,M as x,N as P}from"./client.c84f6bd7.js";import{S as b,T as y}from"./Tail.5dbd940c.js";import{F as N,R as A}from"./Flip.c6f9f986.js";function j(a){let t,s,w,D,V,x,P,j,M,F,S,T,C,O,k,G,H,J,K,L,R,_,q,z,B,Q;document.title=t=a[3].title;const U=new b({props:{description:"Post# "+(a[0].length-a[1])+": Navigating All "+a[0].length+" Post"+(1==a[0].length?"":"s"),posts:!0,tags:!0}}),W=new N({props:{index:a[1],collection:a[0],base:"/read"}}),X=[{data:a[2]},{item:a[2]}];let Y={};for(let a=0;a<X.length;a+=1)Y=e(Y,X[a]);const Z=new A({props:Y}),aa=new N({props:{lg:!0,index:a[1],collection:a[0],base:"/read"}}),ta=new b({props:{description:"Post# "+(a[0].length-a[1])+": Navigating All  "+a[0].length+" Post"+(1==a[0].length?"":"s"),opened:!0,posts:!0,tags:!0}}),sa=new y({});return{c(){s=n(),w=r("main"),D=r("section"),V=r("div"),x=r("div"),P=r("div"),o(U.$$.fragment),M=n(),F=r("div"),S=r("div"),o(W.$$.fragment),C=n(),O=r("div"),k=r("div"),o(Z.$$.fragment),H=n(),J=r("div"),K=r("div"),o(aa.$$.fragment),R=n(),_=r("div"),q=r("div"),o(ta.$$.fragment),B=n(),o(sa.$$.fragment),this.h()},l(a){l('[data-svelte="svelte-cjhwof"]',document.head).forEach(c),s=i(a),w=$(a,"MAIN",{role:!0});var t=f(w);D=$(t,"SECTION",{});var e=f(D);V=$(e,"DIV",{class:!0});var n=f(V);x=$(n,"DIV",{class:!0});var r=f(x);P=$(r,"DIV",{class:!0});var o=f(P);m(U.$$.fragment,o),o.forEach(c),r.forEach(c),M=i(n),F=$(n,"DIV",{class:!0});var g=f(F);S=$(g,"DIV",{class:!0});var d=f(S);m(W.$$.fragment,d),d.forEach(c),g.forEach(c),C=i(n),O=$(n,"DIV",{class:!0});var p=f(O);k=$(p,"DIV",{class:!0});var h=f(k);m(Z.$$.fragment,h),h.forEach(c),p.forEach(c),H=i(n),J=$(n,"DIV",{class:!0});var v=f(J);K=$(v,"DIV",{class:!0});var u=f(K);m(aa.$$.fragment,u),u.forEach(c),v.forEach(c),R=i(n),_=$(n,"DIV",{class:!0});var I=f(_);q=$(I,"DIV",{class:!0});var E=f(q);m(ta.$$.fragment,E),E.forEach(c),I.forEach(c),n.forEach(c),e.forEach(c),t.forEach(c),B=i(a),m(sa.$$.fragment,a),this.h()},h(){g(P,"class",j=a[3].column),g(x,"class","row mt-5"),g(S,"class",T=a[3].column),g(F,"class","row"),g(k,"class",G=a[3].column),g(O,"class","row"),g(K,"class",L=a[3].column),g(J,"class","row"),g(q,"class",z=a[3].column),g(_,"class","row mb-5"),g(V,"class","container"),g(w,"role","main")},m(a,t){d(a,s,t),d(a,w,t),p(w,D),p(D,V),p(V,x),p(x,P),h(U,P,null),p(V,M),p(V,F),p(F,S),h(W,S,null),p(V,C),p(V,O),p(O,k),h(Z,k,null),p(V,H),p(V,J),p(J,K),h(aa,K,null),p(V,R),p(V,_),p(_,q),h(ta,q,null),d(a,B,t),h(sa,a,t),Q=!0},p(a,[s]){(!Q||8&s)&&t!==(t=a[3].title)&&(document.title=t);const e={};3&s&&(e.description="Post# "+(a[0].length-a[1])+": Navigating All "+a[0].length+" Post"+(1==a[0].length?"":"s")),U.$set(e);const n={};2&s&&(n.index=a[1]),1&s&&(n.collection=a[0]),W.$set(n);const r=4&s?v(X,[{data:a[2]},{item:a[2]}]):{};Z.$set(r);const o={};2&s&&(o.index=a[1]),1&s&&(o.collection=a[0]),aa.$set(o);const l={};3&s&&(l.description="Post# "+(a[0].length-a[1])+": Navigating All  "+a[0].length+" Post"+(1==a[0].length?"":"s")),ta.$set(l)},i(a){Q||(u(U.$$.fragment,a),u(W.$$.fragment,a),u(Z.$$.fragment,a),u(aa.$$.fragment,a),u(ta.$$.fragment,a),u(sa.$$.fragment,a),Q=!0)},o(a){I(U.$$.fragment,a),I(W.$$.fragment,a),I(Z.$$.fragment,a),I(aa.$$.fragment,a),I(ta.$$.fragment,a),I(sa.$$.fragment,a),Q=!1},d(a){a&&c(s),a&&c(w),E(U),E(W),E(Z),E(aa),E(ta),a&&c(B),E(sa,a)}}}async function M(a,t){const{post:s}=a.params;return{post:s}}function F(a,t,s){let{post:e}=t;const n=V();let r,o,l=x(),c=null;function i(){s(0,l=l.map(a=>(a.ago=P(a.date).from(P()),a))),s(0,l=l.map(a=>(a.today=P().diff(P(a.date),"days")<1,a))),n.blinkenlighten&&(s(0,l=l.map(a=>(a.ago=P(P(a.date).subtract(parseInt(31*Math.random()),"days")).from(P()),a))),s(0,l=l.map((a,t)=>(a.today=Math.random()<.5,a))))}return w(()=>{clearInterval(c)}),D(()=>{c=setInterval(i,n.recalculateInterval)}),i(),a.$set=(a=>{"post"in a&&s(4,e=a.post)}),a.$$.update=(()=>{16&a.$$.dirty&&s(1,r=function(a){let t=0,s=l.filter(t=>t.id===a);if(s.length>0){let a=s.pop();t=l.indexOf(a)}return t}(e)),3&a.$$.dirty&&s(2,o=l[r])}),[l,r,o,n,e]}export default class extends a{constructor(a){super(),t(this,a,F,j,s,{post:4})}}export{M as preload};

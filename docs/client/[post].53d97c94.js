import{S as a,i as t,s,$ as e,r as n,f as r,G as o,K as l,d as c,u as i,g as $,l as f,H as m,j as g,a as d,m as p,I as h,a0 as v,A as u,C as I,J as E,L as w,o as D,F as V,M as x,N as P}from"./client.60d11d5f.js";import{S as y,T as N}from"./Tail.eac2f137.js";import{F as A,R as b}from"./Flip.feea01d5.js";function j(a){let t,s,w,D,V,x,P,j,M,F,S,T,C,O,k,G,H,J,K,L,R,q,z,B,Q,U;document.title=t=a[3].title;const W=new y({props:{description:"Post# "+(a[0].length-a[1])+": Navigating All "+a[0].length+" Post"+(1==a[0].length?"":"s"),posts:!0,tags:!0}}),X=new A({props:{index:a[1],collection:a[0],base:"/read"}}),Y=[{data:a[2]},{item:a[2]}];let Z={};for(let a=0;a<Y.length;a+=1)Z=e(Z,Y[a]);const _=new b({props:Z}),aa=new A({props:{lg:!0,index:a[1],collection:a[0],base:"/read"}}),ta=new y({props:{description:"Post# "+(a[0].length-a[1])+": Navigating All  "+a[0].length+" Post"+(1==a[0].length?"":"s"),opened:!0,posts:!0,tags:!0}}),sa=new N({});return{c(){s=n(),w=r("main"),D=r("section"),V=r("div"),x=r("div"),P=r("div"),o(W.$$.fragment),M=n(),F=r("div"),S=r("div"),o(X.$$.fragment),C=n(),O=r("div"),k=r("div"),o(_.$$.fragment),H=n(),J=r("div"),K=r("div"),o(aa.$$.fragment),R=n(),q=r("div"),z=r("div"),o(ta.$$.fragment),Q=n(),o(sa.$$.fragment),this.h()},l(a){l('[data-svelte="svelte-cjhwof"]',document.head).forEach(c),s=i(a),w=$(a,"MAIN",{role:!0});var t=f(w);D=$(t,"SECTION",{});var e=f(D);V=$(e,"DIV",{class:!0});var n=f(V);x=$(n,"DIV",{class:!0});var r=f(x);P=$(r,"DIV",{class:!0});var o=f(P);m(W.$$.fragment,o),o.forEach(c),r.forEach(c),M=i(n),F=$(n,"DIV",{class:!0});var g=f(F);S=$(g,"DIV",{class:!0});var d=f(S);m(X.$$.fragment,d),d.forEach(c),g.forEach(c),C=i(n),O=$(n,"DIV",{class:!0});var p=f(O);k=$(p,"DIV",{class:!0});var h=f(k);m(_.$$.fragment,h),h.forEach(c),p.forEach(c),H=i(n),J=$(n,"DIV",{class:!0});var v=f(J);K=$(v,"DIV",{class:!0});var u=f(K);m(aa.$$.fragment,u),u.forEach(c),v.forEach(c),R=i(n),q=$(n,"DIV",{class:!0});var I=f(q);z=$(I,"DIV",{class:!0});var E=f(z);m(ta.$$.fragment,E),E.forEach(c),I.forEach(c),n.forEach(c),e.forEach(c),t.forEach(c),Q=i(a),m(sa.$$.fragment,a),this.h()},h(){g(P,"class",j=a[3].column),g(x,"class","row mt-5"),g(S,"class",T=a[3].column),g(F,"class","row"),g(k,"class",G=a[3].column),g(O,"class","row"),g(K,"class",L=a[3].column),g(J,"class","row"),g(z,"class",B=a[3].column),g(q,"class","row mb-5"),g(V,"class","container"),g(w,"role","main")},m(a,t){d(a,s,t),d(a,w,t),p(w,D),p(D,V),p(V,x),p(x,P),h(W,P,null),p(V,M),p(V,F),p(F,S),h(X,S,null),p(V,C),p(V,O),p(O,k),h(_,k,null),p(V,H),p(V,J),p(J,K),h(aa,K,null),p(V,R),p(V,q),p(q,z),h(ta,z,null),d(a,Q,t),h(sa,a,t),U=!0},p(a,[s]){(!U||8&s)&&t!==(t=a[3].title)&&(document.title=t);const e={};3&s&&(e.description="Post# "+(a[0].length-a[1])+": Navigating All "+a[0].length+" Post"+(1==a[0].length?"":"s")),W.$set(e);const n={};2&s&&(n.index=a[1]),1&s&&(n.collection=a[0]),X.$set(n);const r=4&s?v(Y,[{data:a[2]},{item:a[2]}]):{};_.$set(r);const o={};2&s&&(o.index=a[1]),1&s&&(o.collection=a[0]),aa.$set(o);const l={};3&s&&(l.description="Post# "+(a[0].length-a[1])+": Navigating All  "+a[0].length+" Post"+(1==a[0].length?"":"s")),ta.$set(l)},i(a){U||(u(W.$$.fragment,a),u(X.$$.fragment,a),u(_.$$.fragment,a),u(aa.$$.fragment,a),u(ta.$$.fragment,a),u(sa.$$.fragment,a),U=!0)},o(a){I(W.$$.fragment,a),I(X.$$.fragment,a),I(_.$$.fragment,a),I(aa.$$.fragment,a),I(ta.$$.fragment,a),I(sa.$$.fragment,a),U=!1},d(a){a&&c(s),a&&c(w),E(W),E(X),E(_),E(aa),E(ta),a&&c(Q),E(sa,a)}}}async function M(a,t){const{post:s}=a.params;return{post:s}}function F(a,t,s){let{post:e}=t;const n=V();let r,o,l=x(),c=null;function i(){s(0,l=l.map(a=>(a.ago=P(a.date).from(P()),a))),s(0,l=l.map(a=>(a.today=P().diff(P(a.date),"days")<1,a))),n.blinkenlighten&&(s(0,l=l.map(a=>(a.ago=P(P(a.date).subtract(parseInt(31*Math.random()),"days")).from(P()),a))),s(0,l=l.map((a,t)=>(a.today=Math.random()<.5,a))))}return w(()=>{clearInterval(c)}),D(()=>{c=setInterval(i,n.recalculateInterval)}),i(),a.$set=(a=>{"post"in a&&s(4,e=a.post)}),a.$$.update=(()=>{16&a.$$.dirty&&s(1,r=function(a){let t=0,s=l.filter(t=>t.id===a);if(s.length>0){let a=s.pop();t=l.indexOf(a)}return t}(e)),3&a.$$.dirty&&s(2,o=l[r])}),[l,r,o,n,e]}export default class extends a{constructor(a){super(),t(this,a,F,j,s,{post:4})}}export{M as preload};

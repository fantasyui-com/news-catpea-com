import{S as t,i as a,s as e,G as s,H as n,I as r,A as l,C as o,J as c,r as f,f as i,K as g,d,u as m,g as h,l as $,j as u,a as p,m as v,D as I,q as E,M as w,L as D,o as x,B as T,F as V,N as P}from"./client.1f1734ee.js";import{P as j}from"./Post.7f657094.js";import{S as y,T as O}from"./Tail.3ca610a0.js";function M(t,a,e){const s=t.slice();return s[7]=a[e],s}function W(t){let a;const e=new j({props:{data:t[7],read:"/tag/"+t[0]+"/read/"+t[7].id}});return{c(){s(e.$$.fragment)},l(t){n(e.$$.fragment,t)},m(t,s){r(e,t,s),a=!0},p(t,a){const s={};2&a&&(s.data=t[7]),3&a&&(s.read="/tag/"+t[0]+"/read/"+t[7].id),e.$set(s)},i(t){a||(l(e.$$.fragment,t),a=!0)},o(t){o(e.$$.fragment,t),a=!1},d(t){c(e,t)}}}function N(t){let a,e,w,D,x,V,P,j,N,S,b,A,B,C,k,q,F,G;document.title=a=t[2].title;const H=new y({props:{description:"Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0],posts:!0,tags:!0,categories:!0}});let J=t[1],K=[];for(let a=0;a<J.length;a+=1)K[a]=W(M(t,J,a));const L=t=>o(K[t],1,1,()=>{K[t]=null}),z=new y({props:{description:"Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0],posts:!0,tags:!0,categories:!0}}),Q=new O({});return{c(){e=f(),w=i("main"),D=i("section"),x=i("div"),V=i("div"),P=i("div"),s(H.$$.fragment),N=f(),S=i("div"),b=i("div");for(let t=0;t<K.length;t+=1)K[t].c();B=f(),C=i("div"),k=i("div"),s(z.$$.fragment),F=f(),s(Q.$$.fragment),this.h()},l(t){g('[data-svelte="svelte-cjhwof"]',document.head).forEach(d),e=m(t),w=h(t,"MAIN",{role:!0});var a=$(w);D=h(a,"SECTION",{});var s=$(D);x=h(s,"DIV",{class:!0});var r=$(x);V=h(r,"DIV",{class:!0});var l=$(V);P=h(l,"DIV",{class:!0});var o=$(P);n(H.$$.fragment,o),o.forEach(d),l.forEach(d),N=m(r),S=h(r,"DIV",{class:!0});var c=$(S);b=h(c,"DIV",{class:!0});var f=$(b);for(let t=0;t<K.length;t+=1)K[t].l(f);f.forEach(d),c.forEach(d),B=m(r),C=h(r,"DIV",{class:!0});var i=$(C);k=h(i,"DIV",{class:!0});var u=$(k);n(z.$$.fragment,u),u.forEach(d),i.forEach(d),r.forEach(d),s.forEach(d),a.forEach(d),F=m(t),n(Q.$$.fragment,t),this.h()},h(){u(P,"class",j=t[2].column),u(V,"class","row mt-5"),u(b,"class",A=t[2].column),u(S,"class","row mt-5"),u(k,"class",q=t[2].column),u(C,"class","row mb-5"),u(x,"class","container"),u(w,"role","main")},m(t,a){p(t,e,a),p(t,w,a),v(w,D),v(D,x),v(x,V),v(V,P),r(H,P,null),v(x,N),v(x,S),v(S,b);for(let t=0;t<K.length;t+=1)K[t].m(b,null);v(x,B),v(x,C),v(C,k),r(z,k,null),p(t,F,a),r(Q,t,a),G=!0},p(t,[e]){(!G||4&e)&&a!==(a=t[2].title)&&(document.title=a);const s={};if(3&e&&(s.description="Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0]),H.$set(s),3&e){let a;for(J=t[1],a=0;a<J.length;a+=1){const s=M(t,J,a);K[a]?(K[a].p(s,e),l(K[a],1)):(K[a]=W(s),K[a].c(),l(K[a],1),K[a].m(b,null))}for(T(),a=J.length;a<K.length;a+=1)L(a);I()}const n={};3&e&&(n.description="Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0]),z.$set(n)},i(t){if(!G){l(H.$$.fragment,t);for(let t=0;t<J.length;t+=1)l(K[t]);l(z.$$.fragment,t),l(Q.$$.fragment,t),G=!0}},o(t){o(H.$$.fragment,t),K=K.filter(Boolean);for(let t=0;t<K.length;t+=1)o(K[t]);o(z.$$.fragment,t),o(Q.$$.fragment,t),G=!1},d(t){t&&d(e),t&&d(w),c(H),E(K,t),c(z),t&&d(F),c(Q,t)}}}async function S(t,a){const{tag:e}=t.params;return{tag:e}}function b(t,a,e){let{tag:s}=a;const n=V();let r=null,l=w().filter(t=>t.tags.split(" ").includes(s));function o(){e(1,l=l.map(t=>(t.ago=P(t.date).from(P()),t))),e(1,l=l.map(t=>(t.today=P().diff(P(t.date),"days")<1,t))),n.blinkenlighten&&(e(1,l=l.map(t=>(t.ago=P(P(t.date).add(parseInt(31*Math.random()),"days")).from(P()),t))),e(1,l=l.map((t,a)=>(t.today=Math.random()<.5,t))))}return o(),D(()=>{clearInterval(r)}),x(()=>{r=setInterval(o,n.recalculateInterval)}),t.$set=(t=>{"tag"in t&&e(0,s=t.tag)}),[s,l,n]}export default class extends t{constructor(t){super(),a(this,t,b,N,e,{tag:0})}}export{S as preload};

import{S as t,i as a,s,G as e,H as n,I as r,A as l,C as o,J as c,r as i,f,K as g,d,u as m,g as h,l as $,j as u,a as p,m as v,D as I,q as E,M as w,L as D,o as x,B as T,F as V,N as P}from"./client.683729be.js";import{P as j}from"./Post.7415d9bc.js";import{S as y,T as O}from"./Tail.cc532769.js";function b(t,a,s){const e=t.slice();return e[7]=a[s],e}function M(t){let a;const s=new j({props:{data:t[7],read:"/tag/"+t[0]+"/read/"+t[7].id}});return{c(){e(s.$$.fragment)},l(t){n(s.$$.fragment,t)},m(t,e){r(s,t,e),a=!0},p(t,a){const e={};2&a&&(e.data=t[7]),3&a&&(e.read="/tag/"+t[0]+"/read/"+t[7].id),s.$set(e)},i(t){a||(l(s.$$.fragment,t),a=!0)},o(t){o(s.$$.fragment,t),a=!1},d(t){c(s,t)}}}function W(t){let a,s,w,D,x,V,P,j,W,N,S,A,B,C,k,q,F,G;document.title=a=t[2].title;const H=new y({props:{description:"Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0],posts:!0,tags:!0,categories:!0}});let J=t[1],K=[];for(let a=0;a<J.length;a+=1)K[a]=M(b(t,J,a));const L=t=>o(K[t],1,1,()=>{K[t]=null}),z=new y({props:{description:"Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0],posts:!0,tags:!0,categories:!0}}),Q=new O({});return{c(){s=i(),w=f("main"),D=f("section"),x=f("div"),V=f("div"),P=f("div"),e(H.$$.fragment),W=i(),N=f("div"),S=f("div");for(let t=0;t<K.length;t+=1)K[t].c();B=i(),C=f("div"),k=f("div"),e(z.$$.fragment),F=i(),e(Q.$$.fragment),this.h()},l(t){g('[data-svelte="svelte-cjhwof"]',document.head).forEach(d),s=m(t),w=h(t,"MAIN",{role:!0});var a=$(w);D=h(a,"SECTION",{});var e=$(D);x=h(e,"DIV",{class:!0});var r=$(x);V=h(r,"DIV",{class:!0});var l=$(V);P=h(l,"DIV",{class:!0});var o=$(P);n(H.$$.fragment,o),o.forEach(d),l.forEach(d),W=m(r),N=h(r,"DIV",{class:!0});var c=$(N);S=h(c,"DIV",{class:!0});var i=$(S);for(let t=0;t<K.length;t+=1)K[t].l(i);i.forEach(d),c.forEach(d),B=m(r),C=h(r,"DIV",{class:!0});var f=$(C);k=h(f,"DIV",{class:!0});var u=$(k);n(z.$$.fragment,u),u.forEach(d),f.forEach(d),r.forEach(d),e.forEach(d),a.forEach(d),F=m(t),n(Q.$$.fragment,t),this.h()},h(){u(P,"class",j=t[2].column),u(V,"class","row mt-5"),u(S,"class",A=t[2].column),u(N,"class","row mt-5"),u(k,"class",q=t[2].column),u(C,"class","row mb-5"),u(x,"class","container"),u(w,"role","main")},m(t,a){p(t,s,a),p(t,w,a),v(w,D),v(D,x),v(x,V),v(V,P),r(H,P,null),v(x,W),v(x,N),v(N,S);for(let t=0;t<K.length;t+=1)K[t].m(S,null);v(x,B),v(x,C),v(C,k),r(z,k,null),p(t,F,a),r(Q,t,a),G=!0},p(t,[s]){(!G||4&s)&&a!==(a=t[2].title)&&(document.title=a);const e={};if(3&s&&(e.description="Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0]),H.$set(e),3&s){let a;for(J=t[1],a=0;a<J.length;a+=1){const e=b(t,J,a);K[a]?(K[a].p(e,s),l(K[a],1)):(K[a]=M(e),K[a].c(),l(K[a],1),K[a].m(S,null))}for(T(),a=J.length;a<K.length;a+=1)L(a);I()}const n={};3&s&&(n.description="Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0]),z.$set(n)},i(t){if(!G){l(H.$$.fragment,t);for(let t=0;t<J.length;t+=1)l(K[t]);l(z.$$.fragment,t),l(Q.$$.fragment,t),G=!0}},o(t){o(H.$$.fragment,t),K=K.filter(Boolean);for(let t=0;t<K.length;t+=1)o(K[t]);o(z.$$.fragment,t),o(Q.$$.fragment,t),G=!1},d(t){t&&d(s),t&&d(w),c(H),E(K,t),c(z),t&&d(F),c(Q,t)}}}async function N(t,a){const{tag:s}=t.params;return{tag:s}}function S(t,a,s){let{tag:e}=a;const n=V();let r=null,l=w().filter(t=>t.tags.split(" ").includes(e));function o(){s(1,l=l.map(t=>(t.ago=P(t.date).from(P()),t))),s(1,l=l.map(t=>(t.today=P().diff(P(t.date),"days")<1,t))),n.blinkenlighten&&(s(1,l=l.map(t=>(t.ago=P(P(t.date).add(parseInt(31*Math.random()),"days")).from(P()),t))),s(1,l=l.map((t,a)=>(t.today=Math.random()<.5,t))))}return o(),D(()=>{clearInterval(r)}),x(()=>{r=setInterval(o,n.recalculateInterval)}),t.$set=(t=>{"tag"in t&&s(0,e=t.tag)}),[e,l,n]}export default class extends t{constructor(t){super(),a(this,t,S,W,s,{tag:0})}}export{N as preload};

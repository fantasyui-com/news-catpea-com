import{S as t,i as a,s as e,F as s,G as n,H as r,z as l,B as o,I as c,o as i,e as f,J as g,k as d,p as m,c as h,j as $,f as p,h as u,l as v,C as I,n as E,L as w,K as x,u as D,A as T,E as V,M as P}from"./client.01336b72.js";import{P as j}from"./Post.cd82de49.js";import{S as y,T as O}from"./Tail.11398340.js";function M(t,a,e){const s=t.slice();return s[7]=a[e],s}function W(t){let a;const e=new j({props:{data:t[7],read:"/tag/"+t[0]+"/read/"+t[7].id}});return{c(){s(e.$$.fragment)},l(t){n(e.$$.fragment,t)},m(t,s){r(e,t,s),a=!0},p(t,a){const s={};2&a&&(s.data=t[7]),3&a&&(s.read="/tag/"+t[0]+"/read/"+t[7].id),e.$set(s)},i(t){a||(l(e.$$.fragment,t),a=!0)},o(t){o(e.$$.fragment,t),a=!1},d(t){c(e,t)}}}function b(t){let a,e,w,x,D,V,P,j,b,S,k,A,B,C,N,z,F,G;document.title=a=t[2].title;const H=new y({props:{description:"Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0],posts:!0,tags:!0,categories:!0}});let J=t[1],K=[];for(let a=0;a<J.length;a+=1)K[a]=W(M(t,J,a));const L=t=>o(K[t],1,1,()=>{K[t]=null}),q=new y({props:{description:"Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0],posts:!0,tags:!0,categories:!0}}),Q=new O({});return{c(){e=i(),w=f("main"),x=f("section"),D=f("div"),V=f("div"),P=f("div"),s(H.$$.fragment),b=i(),S=f("div"),k=f("div");for(let t=0;t<K.length;t+=1)K[t].c();B=i(),C=f("div"),N=f("div"),s(q.$$.fragment),F=i(),s(Q.$$.fragment),this.h()},l(t){g('[data-svelte="svelte-cjhwof"]',document.head).forEach(d),e=m(t),w=h(t,"MAIN",{role:!0});var a=$(w);x=h(a,"SECTION",{});var s=$(x);D=h(s,"DIV",{class:!0});var r=$(D);V=h(r,"DIV",{class:!0});var l=$(V);P=h(l,"DIV",{class:!0});var o=$(P);n(H.$$.fragment,o),o.forEach(d),l.forEach(d),b=m(r),S=h(r,"DIV",{class:!0});var c=$(S);k=h(c,"DIV",{class:!0});var i=$(k);for(let t=0;t<K.length;t+=1)K[t].l(i);i.forEach(d),c.forEach(d),B=m(r),C=h(r,"DIV",{class:!0});var f=$(C);N=h(f,"DIV",{class:!0});var p=$(N);n(q.$$.fragment,p),p.forEach(d),f.forEach(d),r.forEach(d),s.forEach(d),a.forEach(d),F=m(t),n(Q.$$.fragment,t),this.h()},h(){p(P,"class",j=t[2].column),p(V,"class","row mt-5"),p(k,"class",A=t[2].column),p(S,"class","row mt-5"),p(N,"class",z=t[2].column),p(C,"class","row mb-5"),p(D,"class","container"),p(w,"role","main")},m(t,a){u(t,e,a),u(t,w,a),v(w,x),v(x,D),v(D,V),v(V,P),r(H,P,null),v(D,b),v(D,S),v(S,k);for(let t=0;t<K.length;t+=1)K[t].m(k,null);v(D,B),v(D,C),v(C,N),r(q,N,null),u(t,F,a),r(Q,t,a),G=!0},p(t,[e]){(!G||4&e)&&a!==(a=t[2].title)&&(document.title=a);const s={};if(3&e&&(s.description="Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0]),H.$set(s),3&e){let a;for(J=t[1],a=0;a<J.length;a+=1){const s=M(t,J,a);K[a]?(K[a].p(s,e),l(K[a],1)):(K[a]=W(s),K[a].c(),l(K[a],1),K[a].m(k,null))}for(T(),a=J.length;a<K.length;a+=1)L(a);I()}const n={};3&e&&(n.description="Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0]),q.$set(n)},i(t){if(!G){l(H.$$.fragment,t);for(let t=0;t<J.length;t+=1)l(K[t]);l(q.$$.fragment,t),l(Q.$$.fragment,t),G=!0}},o(t){o(H.$$.fragment,t),K=K.filter(Boolean);for(let t=0;t<K.length;t+=1)o(K[t]);o(q.$$.fragment,t),o(Q.$$.fragment,t),G=!1},d(t){t&&d(e),t&&d(w),c(H),E(K,t),c(q),t&&d(F),c(Q,t)}}}async function S(t,a){const{tag:e}=t.params;return{tag:e}}function k(t,a,e){let{tag:s}=a;const n=V();let r=null,l=w().filter(t=>t.tags.split(" ").includes(s));function o(){e(1,l=l.map(t=>(t.ago=P(t.date).from(P()),t))),e(1,l=l.map(t=>(t.today=P().diff(P(t.date),"days")<1,t))),n.blinkenlighten&&(e(1,l=l.map(t=>(t.ago=P(P(t.date).add(parseInt(31*Math.random()),"days")).from(P()),t))),e(1,l=l.map((t,a)=>(t.today=Math.random()<.5,t))))}return o(),x(()=>{clearInterval(r)}),D(()=>{r=setInterval(o,n.recalculateInterval)}),t.$set=(t=>{"tag"in t&&e(0,s=t.tag)}),[s,l,n]}export default class extends t{constructor(t){super(),a(this,t,k,b,e,{tag:0})}}export{S as preload};

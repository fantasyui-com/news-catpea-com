import{S as t,i as a,s,F as e,G as n,H as r,z as l,B as o,I as c,o as f,e as i,J as g,k as d,p as m,c as h,j as $,f as p,h as u,l as v,C as I,n as E,L as w,K as x,u as D,A as T,E as V,M as P}from"./client.a5b935cc.js";import{P as j}from"./Post.408ff709.js";import{S as y,T as O}from"./Tail.163c341d.js";function M(t,a,s){const e=t.slice();return e[7]=a[s],e}function W(t){let a;const s=new j({props:{data:t[7],read:"/tag/"+t[0]+"/read/"+t[7].id}});return{c(){e(s.$$.fragment)},l(t){n(s.$$.fragment,t)},m(t,e){r(s,t,e),a=!0},p(t,a){const e={};2&a&&(e.data=t[7]),3&a&&(e.read="/tag/"+t[0]+"/read/"+t[7].id),s.$set(e)},i(t){a||(l(s.$$.fragment,t),a=!0)},o(t){o(s.$$.fragment,t),a=!1},d(t){c(s,t)}}}function b(t){let a,s,w,x,D,V,P,j,b,S,k,A,B,C,N,z,F,G;document.title=a=t[2].title;const H=new y({props:{description:"Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0],posts:!0,tags:!0,categories:!0}});let J=t[1],K=[];for(let a=0;a<J.length;a+=1)K[a]=W(M(t,J,a));const L=t=>o(K[t],1,1,()=>{K[t]=null}),q=new y({props:{description:"Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0],posts:!0,tags:!0,categories:!0}}),Q=new O({});return{c(){s=f(),w=i("main"),x=i("section"),D=i("div"),V=i("div"),P=i("div"),e(H.$$.fragment),b=f(),S=i("div"),k=i("div");for(let t=0;t<K.length;t+=1)K[t].c();B=f(),C=i("div"),N=i("div"),e(q.$$.fragment),F=f(),e(Q.$$.fragment),this.h()},l(t){g('[data-svelte="svelte-cjhwof"]',document.head).forEach(d),s=m(t),w=h(t,"MAIN",{role:!0});var a=$(w);x=h(a,"SECTION",{});var e=$(x);D=h(e,"DIV",{class:!0});var r=$(D);V=h(r,"DIV",{class:!0});var l=$(V);P=h(l,"DIV",{class:!0});var o=$(P);n(H.$$.fragment,o),o.forEach(d),l.forEach(d),b=m(r),S=h(r,"DIV",{class:!0});var c=$(S);k=h(c,"DIV",{class:!0});var f=$(k);for(let t=0;t<K.length;t+=1)K[t].l(f);f.forEach(d),c.forEach(d),B=m(r),C=h(r,"DIV",{class:!0});var i=$(C);N=h(i,"DIV",{class:!0});var p=$(N);n(q.$$.fragment,p),p.forEach(d),i.forEach(d),r.forEach(d),e.forEach(d),a.forEach(d),F=m(t),n(Q.$$.fragment,t),this.h()},h(){p(P,"class",j=t[2].column),p(V,"class","row mt-5"),p(k,"class",A=t[2].column),p(S,"class","row mt-5"),p(N,"class",z=t[2].column),p(C,"class","row mb-5"),p(D,"class","container"),p(w,"role","main")},m(t,a){u(t,s,a),u(t,w,a),v(w,x),v(x,D),v(D,V),v(V,P),r(H,P,null),v(D,b),v(D,S),v(S,k);for(let t=0;t<K.length;t+=1)K[t].m(k,null);v(D,B),v(D,C),v(C,N),r(q,N,null),u(t,F,a),r(Q,t,a),G=!0},p(t,[s]){(!G||4&s)&&a!==(a=t[2].title)&&(document.title=a);const e={};if(3&s&&(e.description="Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0]),H.$set(e),3&s){let a;for(J=t[1],a=0;a<J.length;a+=1){const e=M(t,J,a);K[a]?(K[a].p(e,s),l(K[a],1)):(K[a]=W(e),K[a].c(),l(K[a],1),K[a].m(k,null))}for(T(),a=J.length;a<K.length;a+=1)L(a);I()}const n={};3&s&&(n.description="Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0]),q.$set(n)},i(t){if(!G){l(H.$$.fragment,t);for(let t=0;t<J.length;t+=1)l(K[t]);l(q.$$.fragment,t),l(Q.$$.fragment,t),G=!0}},o(t){o(H.$$.fragment,t),K=K.filter(Boolean);for(let t=0;t<K.length;t+=1)o(K[t]);o(q.$$.fragment,t),o(Q.$$.fragment,t),G=!1},d(t){t&&d(s),t&&d(w),c(H),E(K,t),c(q),t&&d(F),c(Q,t)}}}async function S(t,a){const{tag:s}=t.params;return{tag:s}}function k(t,a,s){let{tag:e}=a;const n=V();let r=null,l=w().filter(t=>t.tags.split(" ").includes(e));function o(){s(1,l=l.map(t=>(t.ago=P(t.date).from(P()),t))),s(1,l=l.map(t=>(t.today=P().diff(P(t.date),"days")<1,t))),n.blinkenlighten&&(s(1,l=l.map(t=>(t.ago=P(P(t.date).add(parseInt(31*Math.random()),"days")).from(P()),t))),s(1,l=l.map((t,a)=>(t.today=Math.random()<.5,t))))}return o(),x(()=>{clearInterval(r)}),D(()=>{r=setInterval(o,n.recalculateInterval)}),t.$set=(t=>{"tag"in t&&s(0,e=t.tag)}),[e,l,n]}export default class extends t{constructor(t){super(),a(this,t,k,b,s,{tag:0})}}export{S as preload};

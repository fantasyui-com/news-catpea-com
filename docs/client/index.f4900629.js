import{S as t,i as a,s,F as e,G as n,H as r,z as l,B as o,I as c,q as f,c as i,J as g,d,r as m,f as h,k as $,h as p,a as u,l as v,C as I,p as E,L as w,K as x,o as D,A as T,E as V,M as P}from"./client.8762dd6b.js";import{P as y}from"./Post.9e2cf60f.js";import{S as O,T as b}from"./Tail.d657fb9a.js";function j(t,a,s){const e=t.slice();return e[7]=a[s],e}function M(t){let a;const s=new y({props:{data:t[7],read:"/tag/"+t[0]+"/read/"+t[7].id}});return{c(){e(s.$$.fragment)},l(t){n(s.$$.fragment,t)},m(t,e){r(s,t,e),a=!0},p(t,a){const e={};2&a&&(e.data=t[7]),3&a&&(e.read="/tag/"+t[0]+"/read/"+t[7].id),s.$set(e)},i(t){a||(l(s.$$.fragment,t),a=!0)},o(t){o(s.$$.fragment,t),a=!1},d(t){c(s,t)}}}function W(t){let a,s,w,x,D,V,P,y,W,S,k,A,B,C,N,q,z,F;document.title=a=t[2].title;const G=new O({props:{description:"Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0],posts:!0,tags:!0,categories:!0}});let H=t[1],J=[];for(let a=0;a<H.length;a+=1)J[a]=M(j(t,H,a));const K=t=>o(J[t],1,1,()=>{J[t]=null}),L=new O({props:{description:"Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0],posts:!0,tags:!0,categories:!0}}),Q=new b({});return{c(){s=f(),w=i("main"),x=i("section"),D=i("div"),V=i("div"),P=i("div"),e(G.$$.fragment),W=f(),S=i("div"),k=i("div");for(let t=0;t<J.length;t+=1)J[t].c();B=f(),C=i("div"),N=i("div"),e(L.$$.fragment),z=f(),e(Q.$$.fragment),this.h()},l(t){g('[data-svelte="svelte-cjhwof"]',document.head).forEach(d),s=m(t),w=h(t,"MAIN",{role:!0});var a=$(w);x=h(a,"SECTION",{});var e=$(x);D=h(e,"DIV",{class:!0});var r=$(D);V=h(r,"DIV",{class:!0});var l=$(V);P=h(l,"DIV",{class:!0});var o=$(P);n(G.$$.fragment,o),o.forEach(d),l.forEach(d),W=m(r),S=h(r,"DIV",{class:!0});var c=$(S);k=h(c,"DIV",{class:!0});var f=$(k);for(let t=0;t<J.length;t+=1)J[t].l(f);f.forEach(d),c.forEach(d),B=m(r),C=h(r,"DIV",{class:!0});var i=$(C);N=h(i,"DIV",{class:!0});var p=$(N);n(L.$$.fragment,p),p.forEach(d),i.forEach(d),r.forEach(d),e.forEach(d),a.forEach(d),z=m(t),n(Q.$$.fragment,t),this.h()},h(){p(P,"class",y=t[2].column),p(V,"class","row mt-5"),p(k,"class",A=t[2].column),p(S,"class","row mt-5"),p(N,"class",q=t[2].column),p(C,"class","row mb-5"),p(D,"class","container"),p(w,"role","main")},m(t,a){u(t,s,a),u(t,w,a),v(w,x),v(x,D),v(D,V),v(V,P),r(G,P,null),v(D,W),v(D,S),v(S,k);for(let t=0;t<J.length;t+=1)J[t].m(k,null);v(D,B),v(D,C),v(C,N),r(L,N,null),u(t,z,a),r(Q,t,a),F=!0},p(t,[s]){(!F||4&s)&&a!==(a=t[2].title)&&(document.title=a);const e={};if(3&s&&(e.description="Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0]),G.$set(e),3&s){let a;for(H=t[1],a=0;a<H.length;a+=1){const e=j(t,H,a);J[a]?(J[a].p(e,s),l(J[a],1)):(J[a]=M(e),J[a].c(),l(J[a],1),J[a].m(k,null))}for(T(),a=H.length;a<J.length;a+=1)K(a);I()}const n={};3&s&&(n.description="Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0]),L.$set(n)},i(t){if(!F){l(G.$$.fragment,t);for(let t=0;t<H.length;t+=1)l(J[t]);l(L.$$.fragment,t),l(Q.$$.fragment,t),F=!0}},o(t){o(G.$$.fragment,t),J=J.filter(Boolean);for(let t=0;t<J.length;t+=1)o(J[t]);o(L.$$.fragment,t),o(Q.$$.fragment,t),F=!1},d(t){t&&d(s),t&&d(w),c(G),E(J,t),c(L),t&&d(z),c(Q,t)}}}async function S(t,a){const{tag:s}=t.params;return{tag:s}}function k(t,a,s){let{tag:e}=a;const n=V();let r=null,l=w().filter(t=>t.tags.split(" ").includes(e));function o(){s(1,l=l.map(t=>(t.ago=P(t.date).from(P()),t))),s(1,l=l.map(t=>(t.today=P().diff(P(t.date),"days")<1,t))),n.blinkenlighten&&(s(1,l=l.map(t=>(t.ago=P(P(t.date).add(parseInt(31*Math.random()),"days")).from(P()),t))),s(1,l=l.map((t,a)=>(t.today=Math.random()<.5,t))))}return o(),x(()=>{clearInterval(r)}),D(()=>{r=setInterval(o,n.recalculateInterval)}),t.$set=(t=>{"tag"in t&&s(0,e=t.tag)}),[e,l,n]}export default class extends t{constructor(t){super(),a(this,t,k,W,s,{tag:0})}}export{S as preload};

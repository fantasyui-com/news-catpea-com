import{S as t,i as a,s,F as e,G as n,H as r,y as l,A as o,I as c,a as i,e as f,J as g,f as d,g as m,c as h,b as $,h as u,l as p,m as v,B as I,q as E,K as w,C as x,L as D,z as T,E as V,M as P}from"./client.6d10b090.js";import{P as y}from"./Post.b00aedda.js";import{S as O,T as b}from"./Tail.25ac8e47.js";function j(t,a,s){const e=t.slice();return e[5]=a[s],e}function W(t){let a;const s=new y({props:{data:t[5],read:"/tag/"+t[0]+"/read/"+t[5].id}});return{c(){e(s.$$.fragment)},l(t){n(s.$$.fragment,t)},m(t,e){r(s,t,e),a=!0},p(t,a){const e={};2&a&&(e.data=t[5]),3&a&&(e.read="/tag/"+t[0]+"/read/"+t[5].id),s.$set(e)},i(t){a||(l(s.$$.fragment,t),a=!0)},o(t){o(s.$$.fragment,t),a=!1},d(t){c(s,t)}}}function S(t){let a,s,w,x,D,V,P,y,S,A,B,C,M,N,q,z,F,G;document.title=a=t[2].title;const H=new O({props:{description:"Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0],posts:!0,tags:!0,categories:!0}});let J=t[1],K=[];for(let a=0;a<J.length;a+=1)K[a]=W(j(t,J,a));const L=t=>o(K[t],1,1,()=>{K[t]=null}),k=new O({props:{description:"Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0],posts:!0,tags:!0,categories:!0}}),Q=new b({});return{c(){s=i(),w=f("main"),x=f("section"),D=f("div"),V=f("div"),P=f("div"),e(H.$$.fragment),S=i(),A=f("div"),B=f("div");for(let t=0;t<K.length;t+=1)K[t].c();M=i(),N=f("div"),q=f("div"),e(k.$$.fragment),F=i(),e(Q.$$.fragment),this.h()},l(t){g('[data-svelte="svelte-cjhwof"]',document.head).forEach(d),s=m(t),w=h(t,"MAIN",{role:!0});var a=$(w);x=h(a,"SECTION",{});var e=$(x);D=h(e,"DIV",{class:!0});var r=$(D);V=h(r,"DIV",{class:!0});var l=$(V);P=h(l,"DIV",{class:!0});var o=$(P);n(H.$$.fragment,o),o.forEach(d),l.forEach(d),S=m(r),A=h(r,"DIV",{class:!0});var c=$(A);B=h(c,"DIV",{class:!0});var i=$(B);for(let t=0;t<K.length;t+=1)K[t].l(i);i.forEach(d),c.forEach(d),M=m(r),N=h(r,"DIV",{class:!0});var f=$(N);q=h(f,"DIV",{class:!0});var u=$(q);n(k.$$.fragment,u),u.forEach(d),f.forEach(d),r.forEach(d),e.forEach(d),a.forEach(d),F=m(t),n(Q.$$.fragment,t),this.h()},h(){u(P,"class",y=t[2].column),u(V,"class","row mt-5"),u(B,"class",C=t[2].column),u(A,"class","row mt-5"),u(q,"class",z=t[2].column),u(N,"class","row mb-5"),u(D,"class","container"),u(w,"role","main")},m(t,a){p(t,s,a),p(t,w,a),v(w,x),v(x,D),v(D,V),v(V,P),r(H,P,null),v(D,S),v(D,A),v(A,B);for(let t=0;t<K.length;t+=1)K[t].m(B,null);v(D,M),v(D,N),v(N,q),r(k,q,null),p(t,F,a),r(Q,t,a),G=!0},p(t,[s]){(!G||4&s)&&a!==(a=t[2].title)&&(document.title=a);const e={};if(3&s&&(e.description="Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0]),H.$set(e),3&s){let a;for(J=t[1],a=0;a<J.length;a+=1){const e=j(t,J,a);K[a]?(K[a].p(e,s),l(K[a],1)):(K[a]=W(e),K[a].c(),l(K[a],1),K[a].m(B,null))}for(T(),a=J.length;a<K.length;a+=1)L(a);I()}const n={};3&s&&(n.description="Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0]),k.$set(n)},i(t){if(!G){l(H.$$.fragment,t);for(let t=0;t<J.length;t+=1)l(K[t]);l(k.$$.fragment,t),l(Q.$$.fragment,t),G=!0}},o(t){o(H.$$.fragment,t),K=K.filter(Boolean);for(let t=0;t<K.length;t+=1)o(K[t]);o(k.$$.fragment,t),o(Q.$$.fragment,t),G=!1},d(t){t&&d(s),t&&d(w),c(H),E(K,t),c(k),t&&d(F),c(Q,t)}}}async function A(t,a){const{tag:s}=t.params;return{tag:s}}function B(t,a,s){let{tag:e}=a;const n=V();function r(){s(1,l=l.map(t=>(t.ago=P(t.date).from(P()),t))),l.map(t=>(t.today=P().diff(P(t.date),"days")<1,t))}let l,o=null;return o=setInterval(r,6e4),w(()=>{clearInterval(o)}),x(()=>{r()}),t.$set=(t=>{"tag"in t&&s(0,e=t.tag)}),t.$$.update=(()=>{1&t.$$.dirty&&s(1,l=D().filter(t=>t.tags.split(" ").includes(e)))}),[e,l,n]}export default class extends t{constructor(t){super(),a(this,t,B,S,s,{tag:0})}}export{A as preload};

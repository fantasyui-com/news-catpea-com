import{S as t,i as a,s,v as e,w as n,x as r,y as l,z as o,A as c,o as f,e as i,B as g,k as d,p as m,c as h,j as $,f as u,h as p,l as v,C as I,n as E,D as w,E as x,G as D,F as T,u as V,H as P}from"./client.11fe79ab.js";import{P as j}from"./Post.e09d280d.js";import{S as y,T as O}from"./Tail.904a9931.js";function W(t,a,s){const e=t.slice();return e[5]=a[s],e}function S(t){let a;const s=new j({props:{data:t[5],read:"/tag/"+t[0]+"/read/"+t[5].id}});return{c(){e(s.$$.fragment)},l(t){n(s.$$.fragment,t)},m(t,e){r(s,t,e),a=!0},p(t,a){const e={};2&a&&(e.data=t[5]),3&a&&(e.read="/tag/"+t[0]+"/read/"+t[5].id),s.$set(e)},i(t){a||(l(s.$$.fragment,t),a=!0)},o(t){o(s.$$.fragment,t),a=!1},d(t){c(s,t)}}}function b(t){let a,s,w,x,D,V,P,j,b,A,B,C,N,k,z,F,G,H;document.title=a=t[2].title;const M=new y({props:{description:"Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0],posts:!0,tags:!0,categories:!0}});let q=t[1],J=[];for(let a=0;a<q.length;a+=1)J[a]=S(W(t,q,a));const K=t=>o(J[t],1,1,()=>{J[t]=null}),L=new y({props:{description:"Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0],posts:!0,tags:!0,categories:!0}}),Q=new O({});return{c(){s=f(),w=i("main"),x=i("section"),D=i("div"),V=i("div"),P=i("div"),e(M.$$.fragment),b=f(),A=i("div"),B=i("div");for(let t=0;t<J.length;t+=1)J[t].c();N=f(),k=i("div"),z=i("div"),e(L.$$.fragment),G=f(),e(Q.$$.fragment),this.h()},l(t){g('[data-svelte="svelte-cjhwof"]',document.head).forEach(d),s=m(t),w=h(t,"MAIN",{role:!0});var a=$(w);x=h(a,"SECTION",{});var e=$(x);D=h(e,"DIV",{class:!0});var r=$(D);V=h(r,"DIV",{class:!0});var l=$(V);P=h(l,"DIV",{class:!0});var o=$(P);n(M.$$.fragment,o),o.forEach(d),l.forEach(d),b=m(r),A=h(r,"DIV",{class:!0});var c=$(A);B=h(c,"DIV",{class:!0});var f=$(B);for(let t=0;t<J.length;t+=1)J[t].l(f);f.forEach(d),c.forEach(d),N=m(r),k=h(r,"DIV",{class:!0});var i=$(k);z=h(i,"DIV",{class:!0});var u=$(z);n(L.$$.fragment,u),u.forEach(d),i.forEach(d),r.forEach(d),e.forEach(d),a.forEach(d),G=m(t),n(Q.$$.fragment,t),this.h()},h(){u(P,"class",j=t[2].column),u(V,"class","row mt-5"),u(B,"class",C=t[2].column),u(A,"class","row mt-5"),u(z,"class",F=t[2].column),u(k,"class","row mb-5"),u(D,"class","container"),u(w,"role","main")},m(t,a){p(t,s,a),p(t,w,a),v(w,x),v(x,D),v(D,V),v(V,P),r(M,P,null),v(D,b),v(D,A),v(A,B);for(let t=0;t<J.length;t+=1)J[t].m(B,null);v(D,N),v(D,k),v(k,z),r(L,z,null),p(t,G,a),r(Q,t,a),H=!0},p(t,[s]){(!H||4&s)&&a!==(a=t[2].title)&&(document.title=a);const e={};if(3&s&&(e.description="Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0]),M.$set(e),3&s){let a;for(q=t[1],a=0;a<q.length;a+=1){const e=W(t,q,a);J[a]?(J[a].p(e,s),l(J[a],1)):(J[a]=S(e),J[a].c(),l(J[a],1),J[a].m(B,null))}for(T(),a=q.length;a<J.length;a+=1)K(a);I()}const n={};3&s&&(n.description="Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" Tagged With "+t[0]),L.$set(n)},i(t){if(!H){l(M.$$.fragment,t);for(let t=0;t<q.length;t+=1)l(J[t]);l(L.$$.fragment,t),l(Q.$$.fragment,t),H=!0}},o(t){o(M.$$.fragment,t),J=J.filter(Boolean);for(let t=0;t<J.length;t+=1)o(J[t]);o(L.$$.fragment,t),o(Q.$$.fragment,t),H=!1},d(t){t&&d(s),t&&d(w),c(M),E(J,t),c(L),t&&d(G),c(Q,t)}}}async function A(t,a){const{tag:s}=t.params;return{tag:s}}function B(t,a,s){let{tag:e}=a;const n=V();function r(){s(1,l=l.map(t=>(t.ago=P(t.date).from(P()),t))),l.map(t=>(t.today=P().diff(P(t.date),"days")<1,t))}let l,o=null;return o=setInterval(r,6e4),w(()=>{clearInterval(o)}),x(()=>{r()}),t.$set=(t=>{"tag"in t&&s(0,e=t.tag)}),t.$$.update=(()=>{1&t.$$.dirty&&s(1,l=D().filter(t=>t.tags.split(" ").includes(e)))}),[e,l,n]}export default class extends t{constructor(t){super(),a(this,t,B,b,s,{tag:0})}}export{A as preload};

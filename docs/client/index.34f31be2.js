import{S as t,i as a,s as e,a as s,F as n,G as r,H as o,z as l,B as c,I as f,o as g,e as i,J as m,k as d,p as h,c as $,j as p,f as u,h as I,l as v,C as y,n as E,L as w,K as x,u as D,A as V,E as b,M as C}from"./client.2ce998b6.js";import{P}from"./Post.b06e4bbf.js";import{S as j,T as O}from"./Tail.eb826afd.js";function M(t,a,e){const s=t.slice();return s[7]=a[e],s}function S(t){let a;const e=new P({props:{data:t[7],read:"/category/"+t[0]+"/read/"+t[7].id}});return{c(){n(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,s){o(e,t,s),a=!0},p(t,a){const s={};2&a&&(s.data=t[7]),3&a&&(s.read="/category/"+t[0]+"/read/"+t[7].id),e.$set(s)},i(t){a||(l(e.$$.fragment,t),a=!0)},o(t){c(e.$$.fragment,t),a=!1},d(t){f(e,t)}}}function T(t){let a,e,w,x,D,b,C,P,T,k,A,B,N,z,F,G,H,J;document.title=a=t[2].title;const K=new j({props:{description:"Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" In "+s(t[0])+" Category",posts:!0,categories:!0,tags:!0}});let L=t[1],q=[];for(let a=0;a<L.length;a+=1)q[a]=S(M(t,L,a));const Q=t=>c(q[t],1,1,()=>{q[t]=null}),R=new j({props:{description:"Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" In "+s(t[0])+" Category",posts:!0,categories:!0,tags:!0}}),U=new O({});return{c(){e=g(),w=i("main"),x=i("section"),D=i("div"),b=i("div"),C=i("div"),n(K.$$.fragment),T=g(),k=i("div"),A=i("div");for(let t=0;t<q.length;t+=1)q[t].c();N=g(),z=i("div"),F=i("div"),n(R.$$.fragment),H=g(),n(U.$$.fragment),this.h()},l(t){m('[data-svelte="svelte-cjhwof"]',document.head).forEach(d),e=h(t),w=$(t,"MAIN",{role:!0});var a=p(w);x=$(a,"SECTION",{});var s=p(x);D=$(s,"DIV",{class:!0});var n=p(D);b=$(n,"DIV",{class:!0});var o=p(b);C=$(o,"DIV",{class:!0});var l=p(C);r(K.$$.fragment,l),l.forEach(d),o.forEach(d),T=h(n),k=$(n,"DIV",{class:!0});var c=p(k);A=$(c,"DIV",{class:!0});var f=p(A);for(let t=0;t<q.length;t+=1)q[t].l(f);f.forEach(d),c.forEach(d),N=h(n),z=$(n,"DIV",{class:!0});var g=p(z);F=$(g,"DIV",{class:!0});var i=p(F);r(R.$$.fragment,i),i.forEach(d),g.forEach(d),n.forEach(d),s.forEach(d),a.forEach(d),H=h(t),r(U.$$.fragment,t),this.h()},h(){u(C,"class",P=t[2].column),u(b,"class","row mt-5"),u(A,"class",B=t[2].column),u(k,"class","row mt-5"),u(F,"class",G=t[2].column),u(z,"class","row mt-5"),u(D,"class","container"),u(w,"role","main")},m(t,a){I(t,e,a),I(t,w,a),v(w,x),v(x,D),v(D,b),v(b,C),o(K,C,null),v(D,T),v(D,k),v(k,A);for(let t=0;t<q.length;t+=1)q[t].m(A,null);v(D,N),v(D,z),v(z,F),o(R,F,null),I(t,H,a),o(U,t,a),J=!0},p(t,[e]){(!J||4&e)&&a!==(a=t[2].title)&&(document.title=a);const n={};if(3&e&&(n.description="Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" In "+s(t[0])+" Category"),K.$set(n),3&e){let a;for(L=t[1],a=0;a<L.length;a+=1){const s=M(t,L,a);q[a]?(q[a].p(s,e),l(q[a],1)):(q[a]=S(s),q[a].c(),l(q[a],1),q[a].m(A,null))}for(V(),a=L.length;a<q.length;a+=1)Q(a);y()}const r={};3&e&&(r.description="Index Of "+t[1].length+" Post"+(1==t[1].length?"":"s")+" In "+s(t[0])+" Category"),R.$set(r)},i(t){if(!J){l(K.$$.fragment,t);for(let t=0;t<L.length;t+=1)l(q[t]);l(R.$$.fragment,t),l(U.$$.fragment,t),J=!0}},o(t){c(K.$$.fragment,t),q=q.filter(Boolean);for(let t=0;t<q.length;t+=1)c(q[t]);c(R.$$.fragment,t),c(U.$$.fragment,t),J=!1},d(t){t&&d(e),t&&d(w),f(K),E(q,t),f(R),t&&d(H),f(U,t)}}}async function k(t,a){const{category:e}=t.params;return{category:e}}function A(t,a,e){let{category:s}=a;const n=b();let r=null,o=w().filter(t=>t.category===s);function l(){e(1,o=o.map(t=>(t.ago=C(t.date).from(C()),t))),e(1,o=o.map(t=>(t.today=C().diff(C(t.date),"days")<1,t))),n.blinkenlighten&&(e(1,o=o.map(t=>(t.ago=C(C(t.date).add(parseInt(31*Math.random()),"days")).from(C()),t))),e(1,o=o.map((t,a)=>(t.today=Math.random()<.5,t))))}return l(),x(()=>{clearInterval(r)}),D(()=>{r=setInterval(l,n.recalculateInterval)}),t.$set=(t=>{"category"in t&&e(0,s=t.category)}),[s,o,n]}export default class extends t{constructor(t){super(),a(this,t,A,T,e,{category:0})}}export{k as preload};
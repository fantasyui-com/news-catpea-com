import{S as t,i as s,s as a,a as e,e as n,t as o,q as i,d as r,c as l,f as c,g as u,h,j as f,k as p,l as d,w as m,n as j}from"./client.74319e66.js";function v(t){let s,a,v,g,y,w,x=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),v=n("h1"),g=o(x),y=e(),w=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=l(t),v=c(t,"H1",{});var s=u(v);g=h(s,x),s.forEach(r),y=l(t),w=c(t,"DIV",{class:!0}),u(w).forEach(r),this.h()},h(){f(w,"class","content svelte-nsonjy")},m(t,s){p(t,a,s),p(t,v,s),d(v,g),p(t,y,s),p(t,w,s),w.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&x!==(x=t[0].title+"")&&m(g,x),1&a&&E!==(E=t[0].html+"")&&(w.innerHTML=E)},i:j,o:j,d(t){t&&r(a),t&&r(v),t&&r(y),t&&r(w)}}}async function g({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function y(t,s,a){let{post:e}=s;return t.$set=(t=>{"post"in t&&a(0,e=t.post)}),[e]}export default class extends t{constructor(t){super(),s(this,t,y,v,a,{post:0})}}export{g as preload};

import{T as t,U as a,_ as n,a as r,i as e,s,b as o,S as c,x as i,k as f,K as l,O as u,f as g,y as $,l as p,r as d,L as m,p as v,c as h,u as I,M as E,d as y,E as w,G as D,N as V,Q as b,P as x,o as T,g as N,h as R,J as P,R as j}from"./client.8ae4a408.js";import{S as M,T as S}from"./Tail.450224b8.js";import{F as W,R as k}from"./Flip.041997ce.js";function O(t){return function(){var a,n=N(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=N(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return R(this,a)}}function F(t){var a,n,r,e,s,o,c,b,x,T,N,R,P,j,O,F,A,C,G,J,K;document.title=a=t[5].title;var L=new M({props:{post:t[1],description:"Navigating "+t[2].length+" Post"+(1==t[2].length?"":"s")+" Tagged With "+t[0],posts:!0,categories:!0,tags:!0,untag:!0}}),Q=new W({props:{index:t[3],collection:t[2],base:"/tag/"+t[0]+"/read"}}),U=new k({props:{data:t[4]}}),_=new W({props:{lg:!0,index:t[3],collection:t[2],base:"/tag/"+t[0]+"/read"}}),q=new M({props:{post:t[1],description:"Navigating "+t[2].length+" Post"+(1==t[2].length?"":"s")+" Tagged With "+t[0],opened:!0,posts:!0,categories:!0,tags:!0,untag:!0}}),z=new S({});return{c:function(){n=i(),r=f("main"),e=f("section"),s=f("div"),o=f("div"),c=f("div"),l(L.$$.fragment),b=i(),x=f("div"),T=f("div"),l(Q.$$.fragment),N=i(),R=f("div"),P=f("div"),l(U.$$.fragment),j=i(),O=f("div"),F=f("div"),l(_.$$.fragment),A=i(),C=f("div"),G=f("div"),l(q.$$.fragment),J=i(),l(z.$$.fragment),this.h()},l:function(t){u('[data-svelte="svelte-cjhwof"]',document.head).forEach(g),n=$(t),r=p(t,"MAIN",{role:!0});var a=d(r);e=p(a,"SECTION",{});var i=d(e);s=p(i,"DIV",{class:!0});var f=d(s);o=p(f,"DIV",{class:!0});var l=d(o);c=p(l,"DIV",{class:!0});var v=d(c);m(L.$$.fragment,v),v.forEach(g),l.forEach(g),b=$(f),x=p(f,"DIV",{class:!0});var h=d(x);T=p(h,"DIV",{class:!0});var I=d(T);m(Q.$$.fragment,I),I.forEach(g),h.forEach(g),N=$(f),R=p(f,"DIV",{class:!0});var E=d(R);P=p(E,"DIV",{class:!0});var y=d(P);m(U.$$.fragment,y),y.forEach(g),E.forEach(g),j=$(f),O=p(f,"DIV",{class:!0});var w=d(O);F=p(w,"DIV",{class:!0});var D=d(F);m(_.$$.fragment,D),D.forEach(g),w.forEach(g),A=$(f),C=p(f,"DIV",{class:!0});var V=d(C);G=p(V,"DIV",{class:!0});var M=d(G);m(q.$$.fragment,M),M.forEach(g),V.forEach(g),f.forEach(g),i.forEach(g),a.forEach(g),J=$(t),m(z.$$.fragment,t),this.h()},h:function(){v(c,"class",t[5].column),v(o,"class","row mt-5"),v(T,"class",t[5].column),v(x,"class","row"),v(P,"class",t[5].column),v(R,"class","row"),v(F,"class",t[5].column),v(O,"class","row"),v(G,"class",t[5].column),v(C,"class","row mb-5"),v(s,"class","container"),v(r,"role","main")},m:function(t,a){h(t,n,a),h(t,r,a),I(r,e),I(e,s),I(s,o),I(o,c),E(L,c,null),I(s,b),I(s,x),I(x,T),E(Q,T,null),I(s,N),I(s,R),I(R,P),E(U,P,null),I(s,j),I(s,O),I(O,F),E(_,F,null),I(s,A),I(s,C),I(C,G),E(q,G,null),h(t,J,a),E(z,t,a),K=!0},p:function(t,n){var r=y(n,1)[0];(!K||32&r)&&a!==(a=t[5].title)&&(document.title=a);var e={};2&r&&(e.post=t[1]),5&r&&(e.description="Navigating "+t[2].length+" Post"+(1==t[2].length?"":"s")+" Tagged With "+t[0]),L.$set(e);var s={};8&r&&(s.index=t[3]),4&r&&(s.collection=t[2]),1&r&&(s.base="/tag/"+t[0]+"/read"),Q.$set(s);var o={};16&r&&(o.data=t[4]),U.$set(o);var c={};8&r&&(c.index=t[3]),4&r&&(c.collection=t[2]),1&r&&(c.base="/tag/"+t[0]+"/read"),_.$set(c);var i={};2&r&&(i.post=t[1]),5&r&&(i.description="Navigating "+t[2].length+" Post"+(1==t[2].length?"":"s")+" Tagged With "+t[0]),q.$set(i)},i:function(t){K||(w(L.$$.fragment,t),w(Q.$$.fragment,t),w(U.$$.fragment,t),w(_.$$.fragment,t),w(q.$$.fragment,t),w(z.$$.fragment,t),K=!0)},o:function(t){D(L.$$.fragment,t),D(Q.$$.fragment,t),D(U.$$.fragment,t),D(_.$$.fragment,t),D(q.$$.fragment,t),D(z.$$.fragment,t),K=!1},d:function(t){t&&g(n),t&&g(r),V(L),V(Q),V(U),V(_),V(q),t&&g(J),V(z,t)}}}function A(t,a){return C.apply(this,arguments)}function C(){return(C=t(a.mark(function t(n,r){var e,s,o;return a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.params,s=e.tag,o=e.post,t.abrupt("return",{tag:s,post:o});case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}function G(t,a,n){var r,e,s=a.tag,o=a.post,c=P(),i=b().filter(function(t){return t.tags.split(" ").includes(s)}),f=null;function l(){n(2,i=i.map(function(t){return t.ago=j(t.date).from(j()),t})),n(2,i=i.map(function(t){return t.today=j().diff(j(t.date),"days")<1,t})),c.blinkenlighten&&(n(2,i=i.map(function(t){return t.ago=j(j(t.date).subtract(parseInt(31*Math.random()),"days")).from(j()),t})),n(2,i=i.map(function(t,a){return t.today=Math.random()<.5,t})))}return x(function(){clearInterval(f)}),T(function(){f=setInterval(l,c.recalculateInterval)}),l(),t.$set=function(t){"tag"in t&&n(0,s=t.tag),"post"in t&&n(1,o=t.post)},t.$$.update=function(){2&t.$$.dirty&&n(3,r=function(t){var a=0,n=i.filter(function(a){return a.id===t});if(n.length>0){var r=n.pop();a=i.indexOf(r)}return a}(o)),12&t.$$.dirty&&n(4,e=i[r])},[s,o,i,r,e,c]}export default(function(t){n(i,c);var a=O(i);function i(t){var n;return r(this,i),n=a.call(this),e(o(n),t,G,F,s,{tag:0,post:1}),n}return i}());export{A as preload};

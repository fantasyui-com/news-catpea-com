import{T as t,U as a,_ as n,a as r,i as s,s as e,b as o,S as c,c as i,e as f,K as l,O as u,h as g,j as $,d as p,f as d,L as v,k as m,n as h,o as y,M as E,v as I,D as w,F as D,N as V,Q as x,P as b,H as T,x as N,y as R,J as P,R as j}from"./client.abc3589e.js";import{S,T as W}from"./Tail.4661f08a.js";import{F,R as O}from"./Flip.fe70e8b1.js";function k(t){return function(){var a,n=N(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=N(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return R(this,a)}}function M(t){var a,n,r,s,e,o,c,x,b,T,N,R,P,j,k,M,A,C,H,J,K;document.title=a=t[5].title;var L=new S({props:{post:t[1],description:"Navigating "+t[2].length+" Post"+(1==t[2].length?"":"s")+" Tagged With "+t[0],posts:!0,categories:!0,tags:!0,untag:!0}}),Q=new F({props:{index:t[3],collection:t[2],base:"/tag/"+t[0]+"/read"}}),U=new O({props:{data:t[4]}}),_=new F({props:{lg:!0,index:t[3],collection:t[2],base:"/tag/"+t[0]+"/read"}}),q=new S({props:{post:t[1],description:"Navigating "+t[2].length+" Post"+(1==t[2].length?"":"s")+" Tagged With "+t[0],opened:!0,posts:!0,categories:!0,tags:!0,untag:!0}}),z=new W({});return{c:function(){n=i(),r=f("main"),s=f("section"),e=f("div"),o=f("div"),c=f("div"),l(L.$$.fragment),x=i(),b=f("div"),T=f("div"),l(Q.$$.fragment),N=i(),R=f("div"),P=f("div"),l(U.$$.fragment),j=i(),k=f("div"),M=f("div"),l(_.$$.fragment),A=i(),C=f("div"),H=f("div"),l(q.$$.fragment),J=i(),l(z.$$.fragment),this.h()},l:function(t){u('[data-svelte="svelte-cjhwof"]',document.head).forEach(g),n=$(t),r=p(t,"MAIN",{role:!0});var a=d(r);s=p(a,"SECTION",{});var i=d(s);e=p(i,"DIV",{class:!0});var f=d(e);o=p(f,"DIV",{class:!0});var l=d(o);c=p(l,"DIV",{class:!0});var m=d(c);v(L.$$.fragment,m),m.forEach(g),l.forEach(g),x=$(f),b=p(f,"DIV",{class:!0});var h=d(b);T=p(h,"DIV",{class:!0});var y=d(T);v(Q.$$.fragment,y),y.forEach(g),h.forEach(g),N=$(f),R=p(f,"DIV",{class:!0});var E=d(R);P=p(E,"DIV",{class:!0});var I=d(P);v(U.$$.fragment,I),I.forEach(g),E.forEach(g),j=$(f),k=p(f,"DIV",{class:!0});var w=d(k);M=p(w,"DIV",{class:!0});var D=d(M);v(_.$$.fragment,D),D.forEach(g),w.forEach(g),A=$(f),C=p(f,"DIV",{class:!0});var V=d(C);H=p(V,"DIV",{class:!0});var S=d(H);v(q.$$.fragment,S),S.forEach(g),V.forEach(g),f.forEach(g),i.forEach(g),a.forEach(g),J=$(t),v(z.$$.fragment,t),this.h()},h:function(){m(c,"class",t[5].column),m(o,"class","row mt-5"),m(T,"class",t[5].column),m(b,"class","row"),m(P,"class",t[5].column),m(R,"class","row"),m(M,"class",t[5].column),m(k,"class","row"),m(H,"class",t[5].column),m(C,"class","row mb-5"),m(e,"class","container"),m(r,"role","main")},m:function(t,a){h(t,n,a),h(t,r,a),y(r,s),y(s,e),y(e,o),y(o,c),E(L,c,null),y(e,x),y(e,b),y(b,T),E(Q,T,null),y(e,N),y(e,R),y(R,P),E(U,P,null),y(e,j),y(e,k),y(k,M),E(_,M,null),y(e,A),y(e,C),y(C,H),E(q,H,null),h(t,J,a),E(z,t,a),K=!0},p:function(t,n){var r=I(n,1)[0];(!K||32&r)&&a!==(a=t[5].title)&&(document.title=a);var s={};2&r&&(s.post=t[1]),5&r&&(s.description="Navigating "+t[2].length+" Post"+(1==t[2].length?"":"s")+" Tagged With "+t[0]),L.$set(s);var e={};8&r&&(e.index=t[3]),4&r&&(e.collection=t[2]),1&r&&(e.base="/tag/"+t[0]+"/read"),Q.$set(e);var o={};16&r&&(o.data=t[4]),U.$set(o);var c={};8&r&&(c.index=t[3]),4&r&&(c.collection=t[2]),1&r&&(c.base="/tag/"+t[0]+"/read"),_.$set(c);var i={};2&r&&(i.post=t[1]),5&r&&(i.description="Navigating "+t[2].length+" Post"+(1==t[2].length?"":"s")+" Tagged With "+t[0]),q.$set(i)},i:function(t){K||(w(L.$$.fragment,t),w(Q.$$.fragment,t),w(U.$$.fragment,t),w(_.$$.fragment,t),w(q.$$.fragment,t),w(z.$$.fragment,t),K=!0)},o:function(t){D(L.$$.fragment,t),D(Q.$$.fragment,t),D(U.$$.fragment,t),D(_.$$.fragment,t),D(q.$$.fragment,t),D(z.$$.fragment,t),K=!1},d:function(t){t&&g(n),t&&g(r),V(L),V(Q),V(U),V(_),V(q),t&&g(J),V(z,t)}}}function A(t,a){return C.apply(this,arguments)}function C(){return(C=t(a.mark(function t(n,r){var s,e,o;return a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.params,e=s.tag,o=s.post,t.abrupt("return",{tag:e,post:o});case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}function H(t,a,n){var r=a.tag,s=a.post,e=P(),o=x().filter(function(t){return t.tags.split(" ").includes(r)});function c(){n(2,o=o.map(function(t){return t.ago=j(t.date).from(j()),t}))}var i,f,l,u,g;return i=setInterval(c,6e4),c(),b(function(){clearInterval(i)}),T(function(){}),t.$set=function(t){"tag"in t&&n(0,r=t.tag),"post"in t&&n(1,s=t.post)},t.$$.update=function(){2&t.$$.dirty&&n(3,f=function(t){var a=0,n=o.filter(function(a){return a.id===t});if(n.length>0){var r=n.pop();a=o.indexOf(r)}return a}(s)),12&t.$$.dirty&&n(4,l=o[f]),12&t.$$.dirty&&n(7,u=f+1+1<=o.length),8&t.$$.dirty&&n(8,g=f-1>=0),140&t.$$.dirty&&(u?o[f+1]:o[0]),268&t.$$.dirty&&(g?o[f-1]:o[0])},[r,s,o,f,l,e]}export default(function(t){n(i,c);var a=k(i);function i(t){var n;return r(this,i),n=a.call(this),s(o(n),t,H,M,e,{tag:0,post:1}),n}return i}());export{A as preload};
import{N as t,O as a,_ as r,a as n,i as e,s,b as c,S as o,q as i,e as f,A as l,G as u,m as $,r as p,f as d,l as m,B as g,h as v,k as h,n as y,C as E,v as I,D as w,E as D,F as x,L as V,I as R,J as b,x as j,y as S,z as F,M as N}from"./client.cc6ec910.js";import{S as O,T}from"./Tail.6148aa5f.js";import{F as k,R as A}from"./Flip.f79f6c78.js";function C(t){return function(){var a,r=j(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=j(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return S(this,a)}}function M(t){var a,r,n,e,s,c,o,V,R,b,j,S,F,N,C,M,q,z;document.title=a=t[4].title;var B=new O({props:{description:"Reading posts in "+t[0]+" category",posts:!0,categories:!0,tags:!0}}),G=new k({props:{index:t[2],collection:t[1],base:"/category/"+t[0]+"/read"}}),J=new A({props:{data:t[3]}}),L=new k({props:{lg:!0,index:t[2],collection:t[1],base:"/category/"+t[0]+"/read"}}),P=new T({});return{c:function(){r=i(),n=f("main"),e=f("section"),s=f("div"),c=f("div"),o=f("div"),l(B.$$.fragment),V=i(),R=f("div"),b=f("div"),l(G.$$.fragment),j=i(),S=f("div"),F=f("div"),l(J.$$.fragment),N=i(),C=f("div"),M=f("div"),l(L.$$.fragment),q=i(),l(P.$$.fragment),this.h()},l:function(t){u('[data-svelte="svelte-cjhwof"]',document.head).forEach($),r=p(t),n=d(t,"MAIN",{role:!0});var a=m(n);e=d(a,"SECTION",{});var i=m(e);s=d(i,"DIV",{class:!0});var f=m(s);c=d(f,"DIV",{class:!0});var l=m(c);o=d(l,"DIV",{class:!0});var v=m(o);g(B.$$.fragment,v),v.forEach($),l.forEach($),V=p(f),R=d(f,"DIV",{class:!0});var h=m(R);b=d(h,"DIV",{class:!0});var y=m(b);g(G.$$.fragment,y),y.forEach($),h.forEach($),j=p(f),S=d(f,"DIV",{class:!0});var E=m(S);F=d(E,"DIV",{class:!0});var I=m(F);g(J.$$.fragment,I),I.forEach($),E.forEach($),N=p(f),C=d(f,"DIV",{class:!0});var w=m(C);M=d(w,"DIV",{class:!0});var D=m(M);g(L.$$.fragment,D),D.forEach($),w.forEach($),f.forEach($),i.forEach($),a.forEach($),q=p(t),g(P.$$.fragment,t),this.h()},h:function(){v(o,"class",t[4].column),v(c,"class","row mt-5"),v(b,"class",t[4].column),v(R,"class","row"),v(F,"class",t[4].column),v(S,"class","row"),v(M,"class",t[4].column),v(C,"class","row"),v(s,"class","container"),v(n,"role","main")},m:function(t,a){h(t,r,a),h(t,n,a),y(n,e),y(e,s),y(s,c),y(c,o),E(B,o,null),y(s,V),y(s,R),y(R,b),E(G,b,null),y(s,j),y(s,S),y(S,F),E(J,F,null),y(s,N),y(s,C),y(C,M),E(L,M,null),h(t,q,a),E(P,t,a),z=!0},p:function(t,r){var n=I(r,1)[0];(!z||16&n)&&a!==(a=t[4].title)&&(document.title=a);var e={};1&n&&(e.description="Reading posts in "+t[0]+" category"),B.$set(e);var s={};4&n&&(s.index=t[2]),2&n&&(s.collection=t[1]),1&n&&(s.base="/category/"+t[0]+"/read"),G.$set(s);var c={};8&n&&(c.data=t[3]),J.$set(c);var o={};4&n&&(o.index=t[2]),2&n&&(o.collection=t[1]),1&n&&(o.base="/category/"+t[0]+"/read"),L.$set(o)},i:function(t){z||(w(B.$$.fragment,t),w(G.$$.fragment,t),w(J.$$.fragment,t),w(L.$$.fragment,t),w(P.$$.fragment,t),z=!0)},o:function(t){D(B.$$.fragment,t),D(G.$$.fragment,t),D(J.$$.fragment,t),D(L.$$.fragment,t),D(P.$$.fragment,t),z=!1},d:function(t){t&&$(r),t&&$(n),x(B),x(G),x(J),x(L),t&&$(q),x(P,t)}}}function q(t,a){return z.apply(this,arguments)}function z(){return(z=t(a.mark(function t(r,n){var e,s,c;return a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.params,s=e.category,c=e.post,t.abrupt("return",{category:s,post:c});case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}function B(t,a,r){var n=a.category,e=a.post,s=F(),c=V().filter(function(t){return t.category===n});function o(){r(1,c=c.map(function(t){return t.ago=N(t.date).from(N()),t}))}var i,f,l,u,$;return i=setInterval(o,6e4),o(),R(function(){clearInterval(i)}),b(function(){}),t.$set=function(t){"category"in t&&r(0,n=t.category),"post"in t&&r(5,e=t.post)},t.$$.update=function(){32&t.$$.dirty&&r(2,f=function(t){var a=0,r=c.filter(function(a){return a.id===t});if(r.length>0){var n=r.pop();a=c.indexOf(n)}return a}(e)),6&t.$$.dirty&&r(3,l=c[f]),6&t.$$.dirty&&r(7,u=f+1+1<=c.length),4&t.$$.dirty&&r(8,$=f-1>=0),134&t.$$.dirty&&(u?c[f+1]:c[0]),262&t.$$.dirty&&($?c[f-1]:c[0])},[n,c,f,l,s,e]}export default(function(t){r(i,o);var a=C(i);function i(t){var r;return n(this,i),r=a.call(this),e(c(r),t,B,M,s,{category:0,post:5}),r}return i}());export{q as preload};
import{V as t,W as a,a as n,b as r,i as e,s,d as o,S as c,z as i,m as f,M as l,Q as u,h as g,A as $,p as d,v as p,N as m,r as v,f as h,w as I,O as w,g as E,G as y,I as D,P as V,T as b,R as x,o as T,j as N,k as R,L as P,U as j}from"./client.15440b99.js";import{S as W,T as M}from"./Tail.f59a62d8.js";import{F as S,R as k}from"./Flip.c53cd166.js";function O(t){return function(){var a,n=N(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=N(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return R(this,a)}}function A(t){var a,n,r,e,s,o,c,b,x,T,N,R,P,j,O,A,F,z,C,G,L;document.title=a=t[5].title;var Q=new W({props:{post:t[1],description:"Navigating "+t[2].length+" Post"+(1==t[2].length?"":"s")+" Tagged With "+t[0],posts:!0,categories:!0,tags:!0,untag:!0}}),U=new S({props:{index:t[3],collection:t[2],base:"/tag/"+t[0]+"/read"}}),q=new k({props:{data:t[4]}}),B=new S({props:{lg:!0,index:t[3],collection:t[2],base:"/tag/"+t[0]+"/read"}}),H=new W({props:{post:t[1],description:"Navigating "+t[2].length+" Post"+(1==t[2].length?"":"s")+" Tagged With "+t[0],opened:!0,posts:!0,categories:!0,tags:!0,untag:!0}}),J=new M({});return{c:function(){n=i(),r=f("main"),e=f("section"),s=f("div"),o=f("div"),c=f("div"),l(Q.$$.fragment),b=i(),x=f("div"),T=f("div"),l(U.$$.fragment),N=i(),R=f("div"),P=f("div"),l(q.$$.fragment),j=i(),O=f("div"),A=f("div"),l(B.$$.fragment),F=i(),z=f("div"),C=f("div"),l(H.$$.fragment),G=i(),l(J.$$.fragment),this.h()},l:function(t){u('[data-svelte="svelte-cjhwof"]',document.head).forEach(g),n=$(t),r=d(t,"MAIN",{role:!0});var a=p(r);e=d(a,"SECTION",{});var i=p(e);s=d(i,"DIV",{class:!0});var f=p(s);o=d(f,"DIV",{class:!0});var l=p(o);c=d(l,"DIV",{class:!0});var v=p(c);m(Q.$$.fragment,v),v.forEach(g),l.forEach(g),b=$(f),x=d(f,"DIV",{class:!0});var h=p(x);T=d(h,"DIV",{class:!0});var I=p(T);m(U.$$.fragment,I),I.forEach(g),h.forEach(g),N=$(f),R=d(f,"DIV",{class:!0});var w=p(R);P=d(w,"DIV",{class:!0});var E=p(P);m(q.$$.fragment,E),E.forEach(g),w.forEach(g),j=$(f),O=d(f,"DIV",{class:!0});var y=p(O);A=d(y,"DIV",{class:!0});var D=p(A);m(B.$$.fragment,D),D.forEach(g),y.forEach(g),F=$(f),z=d(f,"DIV",{class:!0});var V=p(z);C=d(V,"DIV",{class:!0});var W=p(C);m(H.$$.fragment,W),W.forEach(g),V.forEach(g),f.forEach(g),i.forEach(g),a.forEach(g),G=$(t),m(J.$$.fragment,t),this.h()},h:function(){v(c,"class",t[5].column),v(o,"class","row mt-5"),v(T,"class",t[5].column),v(x,"class","row"),v(P,"class",t[5].column),v(R,"class","row"),v(A,"class",t[5].column),v(O,"class","row"),v(C,"class",t[5].column),v(z,"class","row mb-5"),v(s,"class","container"),v(r,"role","main")},m:function(t,a){h(t,n,a),h(t,r,a),I(r,e),I(e,s),I(s,o),I(o,c),w(Q,c,null),I(s,b),I(s,x),I(x,T),w(U,T,null),I(s,N),I(s,R),I(R,P),w(q,P,null),I(s,j),I(s,O),I(O,A),w(B,A,null),I(s,F),I(s,z),I(z,C),w(H,C,null),h(t,G,a),w(J,t,a),L=!0},p:function(t,n){var r=E(n,1)[0];(!L||32&r)&&a!==(a=t[5].title)&&(document.title=a);var e={};2&r&&(e.post=t[1]),5&r&&(e.description="Navigating "+t[2].length+" Post"+(1==t[2].length?"":"s")+" Tagged With "+t[0]),Q.$set(e);var s={};8&r&&(s.index=t[3]),4&r&&(s.collection=t[2]),1&r&&(s.base="/tag/"+t[0]+"/read"),U.$set(s);var o={};16&r&&(o.data=t[4]),q.$set(o);var c={};8&r&&(c.index=t[3]),4&r&&(c.collection=t[2]),1&r&&(c.base="/tag/"+t[0]+"/read"),B.$set(c);var i={};2&r&&(i.post=t[1]),5&r&&(i.description="Navigating "+t[2].length+" Post"+(1==t[2].length?"":"s")+" Tagged With "+t[0]),H.$set(i)},i:function(t){L||(y(Q.$$.fragment,t),y(U.$$.fragment,t),y(q.$$.fragment,t),y(B.$$.fragment,t),y(H.$$.fragment,t),y(J.$$.fragment,t),L=!0)},o:function(t){D(Q.$$.fragment,t),D(U.$$.fragment,t),D(q.$$.fragment,t),D(B.$$.fragment,t),D(H.$$.fragment,t),D(J.$$.fragment,t),L=!1},d:function(t){t&&g(n),t&&g(r),V(Q),V(U),V(q),V(B),V(H),t&&g(G),V(J,t)}}}function F(t,a){return z.apply(this,arguments)}function z(){return(z=t(a.mark(function t(n,r){var e,s,o;return a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.params,s=e.tag,o=e.post,t.abrupt("return",{tag:s,post:o});case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}function C(t,a,n){var r,e,s=a.tag,o=a.post,c=P(),i=b().filter(function(t){return t.tags.split(" ").includes(s)}),f=null;function l(){n(2,i=i.map(function(t){return t.ago=j(t.date).from(j()),t})),n(2,i=i.map(function(t){return t.today=j().diff(j(t.date),"days")<1,t})),c.blinkenlighten&&(n(2,i=i.map(function(t){return t.ago=j(j(t.date).subtract(parseInt(31*Math.random()),"days")).from(j()),t})),n(2,i=i.map(function(t,a){return t.today=Math.random()<.5,t})))}return x(function(){clearInterval(f)}),T(function(){f=setInterval(l,c.recalculateInterval)}),l(),t.$set=function(t){"tag"in t&&n(0,s=t.tag),"post"in t&&n(1,o=t.post)},t.$$.update=function(){2&t.$$.dirty&&n(3,r=function(t){var a=0,n=i.filter(function(a){return a.id===t});if(n.length>0){var r=n.pop();a=i.indexOf(r)}return a}(o)),12&t.$$.dirty&&n(4,e=i[r])},[s,o,i,r,e,c]}export default(function(t){n(i,c);var a=O(i);function i(t){var n;return r(this,i),n=a.call(this),e(o(n),t,C,A,s,{tag:0,post:1}),n}return i}());export{F as preload};

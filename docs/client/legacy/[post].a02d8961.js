import{V as t,W as a,a as n,b as r,i as s,s as e,d as o,S as c,a7 as i,z as l,m as f,M as u,Q as $,h as m,A as g,p,v as d,N as v,r as h,f as I,w,O as E,g as y,a8 as D,G as V,I as P,P as x,R as b,o as N,j as R,k as A,L as j,T as M,U as S}from"./client.15440b99.js";import{S as T,T as k}from"./Tail.f59a62d8.js";import{F as O,R as F}from"./Flip.c53cd166.js";function z(t){return function(){var a,n=R(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=R(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return A(this,a)}}function C(t){var a,n,r,s,e,o,c,b,N,R,A,j,M,S,z,C,G,L,Q,U,W;document.title=a=t[3].title;for(var q=new T({props:{description:"Post# "+(t[0].length-t[1])+": Navigating All "+t[0].length+" Post"+(1==t[0].length?"":"s"),posts:!0,tags:!0}}),B=new O({props:{index:t[1],collection:t[0],base:"/read"}}),H=[{data:t[2]},{item:t[2]}],J={},K=0;K<H.length;K+=1)J=i(J,H[K]);var X=new F({props:J}),Y=new O({props:{lg:!0,index:t[1],collection:t[0],base:"/read"}}),Z=new T({props:{description:"Post# "+(t[0].length-t[1])+": Navigating All  "+t[0].length+" Post"+(1==t[0].length?"":"s"),opened:!0,posts:!0,tags:!0}}),_=new k({});return{c:function(){n=l(),r=f("main"),s=f("section"),e=f("div"),o=f("div"),c=f("div"),u(q.$$.fragment),b=l(),N=f("div"),R=f("div"),u(B.$$.fragment),A=l(),j=f("div"),M=f("div"),u(X.$$.fragment),S=l(),z=f("div"),C=f("div"),u(Y.$$.fragment),G=l(),L=f("div"),Q=f("div"),u(Z.$$.fragment),U=l(),u(_.$$.fragment),this.h()},l:function(t){$('[data-svelte="svelte-cjhwof"]',document.head).forEach(m),n=g(t),r=p(t,"MAIN",{role:!0});var a=d(r);s=p(a,"SECTION",{});var i=d(s);e=p(i,"DIV",{class:!0});var l=d(e);o=p(l,"DIV",{class:!0});var f=d(o);c=p(f,"DIV",{class:!0});var u=d(c);v(q.$$.fragment,u),u.forEach(m),f.forEach(m),b=g(l),N=p(l,"DIV",{class:!0});var h=d(N);R=p(h,"DIV",{class:!0});var I=d(R);v(B.$$.fragment,I),I.forEach(m),h.forEach(m),A=g(l),j=p(l,"DIV",{class:!0});var w=d(j);M=p(w,"DIV",{class:!0});var E=d(M);v(X.$$.fragment,E),E.forEach(m),w.forEach(m),S=g(l),z=p(l,"DIV",{class:!0});var y=d(z);C=p(y,"DIV",{class:!0});var D=d(C);v(Y.$$.fragment,D),D.forEach(m),y.forEach(m),G=g(l),L=p(l,"DIV",{class:!0});var V=d(L);Q=p(V,"DIV",{class:!0});var P=d(Q);v(Z.$$.fragment,P),P.forEach(m),V.forEach(m),l.forEach(m),i.forEach(m),a.forEach(m),U=g(t),v(_.$$.fragment,t),this.h()},h:function(){h(c,"class",t[3].column),h(o,"class","row mt-5"),h(R,"class",t[3].column),h(N,"class","row"),h(M,"class",t[3].column),h(j,"class","row"),h(C,"class",t[3].column),h(z,"class","row"),h(Q,"class",t[3].column),h(L,"class","row mb-5"),h(e,"class","container"),h(r,"role","main")},m:function(t,a){I(t,n,a),I(t,r,a),w(r,s),w(s,e),w(e,o),w(o,c),E(q,c,null),w(e,b),w(e,N),w(N,R),E(B,R,null),w(e,A),w(e,j),w(j,M),E(X,M,null),w(e,S),w(e,z),w(z,C),E(Y,C,null),w(e,G),w(e,L),w(L,Q),E(Z,Q,null),I(t,U,a),E(_,t,a),W=!0},p:function(t,n){var r=y(n,1)[0];(!W||8&r)&&a!==(a=t[3].title)&&(document.title=a);var s={};3&r&&(s.description="Post# "+(t[0].length-t[1])+": Navigating All "+t[0].length+" Post"+(1==t[0].length?"":"s")),q.$set(s);var e={};2&r&&(e.index=t[1]),1&r&&(e.collection=t[0]),B.$set(e);var o=4&r?D(H,[{data:t[2]},{item:t[2]}]):{};X.$set(o);var c={};2&r&&(c.index=t[1]),1&r&&(c.collection=t[0]),Y.$set(c);var i={};3&r&&(i.description="Post# "+(t[0].length-t[1])+": Navigating All  "+t[0].length+" Post"+(1==t[0].length?"":"s")),Z.$set(i)},i:function(t){W||(V(q.$$.fragment,t),V(B.$$.fragment,t),V(X.$$.fragment,t),V(Y.$$.fragment,t),V(Z.$$.fragment,t),V(_.$$.fragment,t),W=!0)},o:function(t){P(q.$$.fragment,t),P(B.$$.fragment,t),P(X.$$.fragment,t),P(Y.$$.fragment,t),P(Z.$$.fragment,t),P(_.$$.fragment,t),W=!1},d:function(t){t&&m(n),t&&m(r),x(q),x(B),x(X),x(Y),x(Z),t&&m(U),x(_,t)}}}function G(t,a){return L.apply(this,arguments)}function L(){return(L=t(a.mark(function t(n,r){var s;return a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.params.post,t.abrupt("return",{post:s});case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Q(t,a,n){var r,s,e=a.post,o=j(),c=M(),i=null;function l(){n(0,c=c.map(function(t){return t.ago=S(t.date).from(S()),t})),n(0,c=c.map(function(t){return t.today=S().diff(S(t.date),"days")<1,t})),o.blinkenlighten&&(n(0,c=c.map(function(t){return t.ago=S(S(t.date).subtract(parseInt(31*Math.random()),"days")).from(S()),t})),n(0,c=c.map(function(t,a){return t.today=Math.random()<.5,t})))}return b(function(){clearInterval(i)}),N(function(){i=setInterval(l,o.recalculateInterval)}),l(),t.$set=function(t){"post"in t&&n(4,e=t.post)},t.$$.update=function(){16&t.$$.dirty&&n(1,r=function(t){var a=0,n=c.filter(function(a){return a.id===t});if(n.length>0){var r=n.pop();a=c.indexOf(r)}return a}(e)),3&t.$$.dirty&&n(2,s=c[r])},[c,r,s,o,e]}export default(function(t){n(i,c);var a=z(i);function i(t){var n;return r(this,i),n=a.call(this),s(o(n),t,Q,C,e,{post:4}),n}return i}());export{G as preload};
import{a5 as t,a6 as a,a as n,b as r,i as s,s as e,d as o,S as c,a9 as i,z as l,m as f,M as u,Q as $,h as m,A as g,p,v,N as d,r as h,f as I,w,O as E,g as y,aa as D,G as V,I as P,P as x,R as b,o as N,j as R,k as A,L as j,T as M,U as S}from"./client.7f057f15.js";import{S as T,T as k}from"./Tail.2577c2c5.js";import{F as O,R as F}from"./Flip.921c6783.js";function z(t){return function(){var a,n=R(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=R(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return A(this,a)}}function C(t){var a,n,r,s,e,o,c,b,N,R,A,j,M,S,z,C,G,L,Q,U,q;document.title=a=t[3].title;for(var B=new T({props:{description:"Post# "+(t[0].length-t[1])+": Navigating All "+t[0].length+" Post"+(1==t[0].length?"":"s"),posts:!0,tags:!0}}),H=new O({props:{index:t[1],collection:t[0],base:"/read"}}),J=[{data:t[2]},{item:t[2]}],K={},W=0;W<J.length;W+=1)K=i(K,J[W]);var X=new F({props:K}),Y=new O({props:{lg:!0,index:t[1],collection:t[0],base:"/read"}}),Z=new T({props:{description:"Post# "+(t[0].length-t[1])+": Navigating All  "+t[0].length+" Post"+(1==t[0].length?"":"s"),opened:!0,posts:!0,tags:!0}}),_=new k({});return{c:function(){n=l(),r=f("main"),s=f("section"),e=f("div"),o=f("div"),c=f("div"),u(B.$$.fragment),b=l(),N=f("div"),R=f("div"),u(H.$$.fragment),A=l(),j=f("div"),M=f("div"),u(X.$$.fragment),S=l(),z=f("div"),C=f("div"),u(Y.$$.fragment),G=l(),L=f("div"),Q=f("div"),u(Z.$$.fragment),U=l(),u(_.$$.fragment),this.h()},l:function(t){$('[data-svelte="svelte-cjhwof"]',document.head).forEach(m),n=g(t),r=p(t,"MAIN",{role:!0});var a=v(r);s=p(a,"SECTION",{});var i=v(s);e=p(i,"DIV",{class:!0});var l=v(e);o=p(l,"DIV",{class:!0});var f=v(o);c=p(f,"DIV",{class:!0});var u=v(c);d(B.$$.fragment,u),u.forEach(m),f.forEach(m),b=g(l),N=p(l,"DIV",{class:!0});var h=v(N);R=p(h,"DIV",{class:!0});var I=v(R);d(H.$$.fragment,I),I.forEach(m),h.forEach(m),A=g(l),j=p(l,"DIV",{class:!0});var w=v(j);M=p(w,"DIV",{class:!0});var E=v(M);d(X.$$.fragment,E),E.forEach(m),w.forEach(m),S=g(l),z=p(l,"DIV",{class:!0});var y=v(z);C=p(y,"DIV",{class:!0});var D=v(C);d(Y.$$.fragment,D),D.forEach(m),y.forEach(m),G=g(l),L=p(l,"DIV",{class:!0});var V=v(L);Q=p(V,"DIV",{class:!0});var P=v(Q);d(Z.$$.fragment,P),P.forEach(m),V.forEach(m),l.forEach(m),i.forEach(m),a.forEach(m),U=g(t),d(_.$$.fragment,t),this.h()},h:function(){h(c,"class",t[3].column),h(o,"class","row mt-5"),h(R,"class",t[3].column),h(N,"class","row"),h(M,"class",t[3].column),h(j,"class","row"),h(C,"class",t[3].column),h(z,"class","row"),h(Q,"class",t[3].column),h(L,"class","row mb-5"),h(e,"class","container"),h(r,"role","main")},m:function(t,a){I(t,n,a),I(t,r,a),w(r,s),w(s,e),w(e,o),w(o,c),E(B,c,null),w(e,b),w(e,N),w(N,R),E(H,R,null),w(e,A),w(e,j),w(j,M),E(X,M,null),w(e,S),w(e,z),w(z,C),E(Y,C,null),w(e,G),w(e,L),w(L,Q),E(Z,Q,null),I(t,U,a),E(_,t,a),q=!0},p:function(t,n){var r=y(n,1)[0];(!q||8&r)&&a!==(a=t[3].title)&&(document.title=a);var s={};3&r&&(s.description="Post# "+(t[0].length-t[1])+": Navigating All "+t[0].length+" Post"+(1==t[0].length?"":"s")),B.$set(s);var e={};2&r&&(e.index=t[1]),1&r&&(e.collection=t[0]),H.$set(e);var o=4&r?D(J,[{data:t[2]},{item:t[2]}]):{};X.$set(o);var c={};2&r&&(c.index=t[1]),1&r&&(c.collection=t[0]),Y.$set(c);var i={};3&r&&(i.description="Post# "+(t[0].length-t[1])+": Navigating All  "+t[0].length+" Post"+(1==t[0].length?"":"s")),Z.$set(i)},i:function(t){q||(V(B.$$.fragment,t),V(H.$$.fragment,t),V(X.$$.fragment,t),V(Y.$$.fragment,t),V(Z.$$.fragment,t),V(_.$$.fragment,t),q=!0)},o:function(t){P(B.$$.fragment,t),P(H.$$.fragment,t),P(X.$$.fragment,t),P(Y.$$.fragment,t),P(Z.$$.fragment,t),P(_.$$.fragment,t),q=!1},d:function(t){t&&m(n),t&&m(r),x(B),x(H),x(X),x(Y),x(Z),t&&m(U),x(_,t)}}}function G(t,a){return L.apply(this,arguments)}function L(){return(L=t(a.mark(function t(n,r){var s;return a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.params.post,t.abrupt("return",{post:s});case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Q(t,a,n){var r,s,e=a.post,o=j(),c=M(),i=null;function l(){n(0,c=c.map(function(t){return t.ago=S(t.date).from(S()),t})),n(0,c=c.map(function(t){return t.today=S().diff(S(t.date),"days")<1,t})),o.blinkenlighten&&(n(0,c=c.map(function(t){return t.ago=S(S(t.date).subtract(parseInt(31*Math.random()),"days")).from(S()),t})),n(0,c=c.map(function(t,a){return t.today=Math.random()<.5,t})))}return b(function(){clearInterval(i)}),N(function(){i=setInterval(l,o.recalculateInterval)}),l(),t.$set=function(t){"post"in t&&n(4,e=t.post)},t.$$.update=function(){16&t.$$.dirty&&n(1,r=function(t){var a=0,n=c.filter(function(a){return a.id===t});if(n.length>0){var r=n.pop();a=c.indexOf(r)}return a}(e)),3&t.$$.dirty&&n(2,s=c[r])},[c,r,s,o,e]}export default(function(t){n(i,c);var a=z(i);function i(t){var n;return r(this,i),n=a.call(this),s(o(n),t,Q,C,e,{post:4}),n}return i}());export{G as preload};

import{T as t,U as a,_ as n,a as r,i as e,s,b as o,S as c,V as i,q as l,e as f,K as u,O as $,m,r as g,f as p,l as d,L as v,h,k as I,n as E,M as y,v as w,W as D,E as V,G as x,N as P,P as b,x as N,y as R,z as A,J as j,Q as M,R as S}from"./client.d9ced4cc.js";import{S as T,T as k}from"./Tail.95eb01c0.js";import{F as O,R as F}from"./Flip.6f5e98cd.js";function q(t){return function(){var a,n=R(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=R(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return A(this,a)}}function z(t){var a,n,r,e,s,o,c,b,N,R,A,j,M,S,q,z,C,G,J,K,L;document.title=a=t[3].title;for(var Q=new T({props:{description:"Post# "+(t[0].length-t[1])+": Navigating All "+t[0].length+" Post"+(1==t[0].length?"":"s"),posts:!0,tags:!0}}),U=new O({props:{index:t[1],collection:t[0],base:"/read"}}),W=[{data:t[2]},{item:t[2]}],_={},B=0;B<W.length;B+=1)_=i(_,W[B]);var H=new F({props:_}),X=new O({props:{lg:!0,index:t[1],collection:t[0],base:"/read"}}),Y=new T({props:{description:"Post# "+(t[0].length-t[1])+": Navigating All  "+t[0].length+" Post"+(1==t[0].length?"":"s"),opened:!0,posts:!0,tags:!0}}),Z=new k({});return{c:function(){n=l(),r=f("main"),e=f("section"),s=f("div"),o=f("div"),c=f("div"),u(Q.$$.fragment),b=l(),N=f("div"),R=f("div"),u(U.$$.fragment),A=l(),j=f("div"),M=f("div"),u(H.$$.fragment),S=l(),q=f("div"),z=f("div"),u(X.$$.fragment),C=l(),G=f("div"),J=f("div"),u(Y.$$.fragment),K=l(),u(Z.$$.fragment),this.h()},l:function(t){$('[data-svelte="svelte-cjhwof"]',document.head).forEach(m),n=g(t),r=p(t,"MAIN",{role:!0});var a=d(r);e=p(a,"SECTION",{});var i=d(e);s=p(i,"DIV",{class:!0});var l=d(s);o=p(l,"DIV",{class:!0});var f=d(o);c=p(f,"DIV",{class:!0});var u=d(c);v(Q.$$.fragment,u),u.forEach(m),f.forEach(m),b=g(l),N=p(l,"DIV",{class:!0});var h=d(N);R=p(h,"DIV",{class:!0});var I=d(R);v(U.$$.fragment,I),I.forEach(m),h.forEach(m),A=g(l),j=p(l,"DIV",{class:!0});var E=d(j);M=p(E,"DIV",{class:!0});var y=d(M);v(H.$$.fragment,y),y.forEach(m),E.forEach(m),S=g(l),q=p(l,"DIV",{class:!0});var w=d(q);z=p(w,"DIV",{class:!0});var D=d(z);v(X.$$.fragment,D),D.forEach(m),w.forEach(m),C=g(l),G=p(l,"DIV",{class:!0});var V=d(G);J=p(V,"DIV",{class:!0});var x=d(J);v(Y.$$.fragment,x),x.forEach(m),V.forEach(m),l.forEach(m),i.forEach(m),a.forEach(m),K=g(t),v(Z.$$.fragment,t),this.h()},h:function(){h(c,"class",t[3].column),h(o,"class","row mt-5"),h(R,"class",t[3].column),h(N,"class","row"),h(M,"class",t[3].column),h(j,"class","row"),h(z,"class",t[3].column),h(q,"class","row"),h(J,"class",t[3].column),h(G,"class","row mb-5"),h(s,"class","container"),h(r,"role","main")},m:function(t,a){I(t,n,a),I(t,r,a),E(r,e),E(e,s),E(s,o),E(o,c),y(Q,c,null),E(s,b),E(s,N),E(N,R),y(U,R,null),E(s,A),E(s,j),E(j,M),y(H,M,null),E(s,S),E(s,q),E(q,z),y(X,z,null),E(s,C),E(s,G),E(G,J),y(Y,J,null),I(t,K,a),y(Z,t,a),L=!0},p:function(t,n){var r=w(n,1)[0];(!L||8&r)&&a!==(a=t[3].title)&&(document.title=a);var e={};3&r&&(e.description="Post# "+(t[0].length-t[1])+": Navigating All "+t[0].length+" Post"+(1==t[0].length?"":"s")),Q.$set(e);var s={};2&r&&(s.index=t[1]),1&r&&(s.collection=t[0]),U.$set(s);var o=4&r?D(W,[{data:t[2]},{item:t[2]}]):{};H.$set(o);var c={};2&r&&(c.index=t[1]),1&r&&(c.collection=t[0]),X.$set(c);var i={};3&r&&(i.description="Post# "+(t[0].length-t[1])+": Navigating All  "+t[0].length+" Post"+(1==t[0].length?"":"s")),Y.$set(i)},i:function(t){L||(V(Q.$$.fragment,t),V(U.$$.fragment,t),V(H.$$.fragment,t),V(X.$$.fragment,t),V(Y.$$.fragment,t),V(Z.$$.fragment,t),L=!0)},o:function(t){x(Q.$$.fragment,t),x(U.$$.fragment,t),x(H.$$.fragment,t),x(X.$$.fragment,t),x(Y.$$.fragment,t),x(Z.$$.fragment,t),L=!1},d:function(t){t&&m(n),t&&m(r),P(Q),P(U),P(H),P(X),P(Y),t&&m(K),P(Z,t)}}}function C(t,a){return G.apply(this,arguments)}function G(){return(G=t(a.mark(function t(n,r){var e;return a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.params.post,t.abrupt("return",{post:e});case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}function J(t,a,n){var r,e,s=a.post,o=j(),c=M(),i=null;function l(){n(0,c=c.map(function(t){return t.ago=S(t.date).from(S()),t})),n(0,c=c.map(function(t){return t.today=S().diff(S(t.date),"days")<1,t})),o.blinkenlighten&&(n(0,c=c.map(function(t){return t.ago=S(S(t.date).subtract(parseInt(31*Math.random()),"days")).from(S()),t})),n(0,c=c.map(function(t,a){return t.today=Math.random()<.5,t})))}return b(function(){clearInterval(i)}),N(function(){i=setInterval(l,o.recalculateInterval)}),l(),t.$set=function(t){"post"in t&&n(4,s=t.post)},t.$$.update=function(){16&t.$$.dirty&&n(1,r=function(t){var a=0,n=c.filter(function(a){return a.id===t});if(n.length>0){var r=n.pop();a=c.indexOf(r)}return a}(s)),3&t.$$.dirty&&n(2,e=c[r])},[c,r,e,o,s]}export default(function(t){n(i,c);var a=q(i);function i(t){var n;return r(this,i),n=a.call(this),e(o(n),t,J,z,s,{post:4}),n}return i}());export{C as preload};

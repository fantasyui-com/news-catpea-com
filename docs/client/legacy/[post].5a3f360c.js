import{T as t,U as a,_ as n,a as r,i as s,s as e,b as o,S as c,c as i,e as l,K as f,O as u,h as $,j as v,d as g,f as p,L as m,k as h,n as d,o as E,M as I,v as w,D,F as y,N as V,P as x,H as P,x as b,y as N,J as R,Q as j,R as A}from"./client.abc3589e.js";import{S,T}from"./Tail.4661f08a.js";import{F,R as O}from"./Flip.fe70e8b1.js";function k(t){return function(){var a,n=b(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=b(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return N(this,a)}}function M(t){var a,n,r,s,e,o,c,x,P,b,N,R,j,A,k,M,C,H,J,K,L;document.title=a=t[3].title;var Q=new S({props:{description:"Post# "+(t[0].length-t[1])+": Navigating All "+t[0].length+" Post"+(1==t[0].length?"":"s"),posts:!0,tags:!0}}),U=new F({props:{index:t[1],collection:t[0],base:"/read"}}),_=new O({props:{data:t[2]}}),q=new F({props:{lg:!0,index:t[1],collection:t[0],base:"/read"}}),z=new S({props:{description:"Post# "+(t[0].length-t[1])+": Navigating All  "+t[0].length+" Post"+(1==t[0].length?"":"s"),opened:!0,posts:!0,tags:!0}}),B=new T({});return{c:function(){n=i(),r=l("main"),s=l("section"),e=l("div"),o=l("div"),c=l("div"),f(Q.$$.fragment),x=i(),P=l("div"),b=l("div"),f(U.$$.fragment),N=i(),R=l("div"),j=l("div"),f(_.$$.fragment),A=i(),k=l("div"),M=l("div"),f(q.$$.fragment),C=i(),H=l("div"),J=l("div"),f(z.$$.fragment),K=i(),f(B.$$.fragment),this.h()},l:function(t){u('[data-svelte="svelte-cjhwof"]',document.head).forEach($),n=v(t),r=g(t,"MAIN",{role:!0});var a=p(r);s=g(a,"SECTION",{});var i=p(s);e=g(i,"DIV",{class:!0});var l=p(e);o=g(l,"DIV",{class:!0});var f=p(o);c=g(f,"DIV",{class:!0});var h=p(c);m(Q.$$.fragment,h),h.forEach($),f.forEach($),x=v(l),P=g(l,"DIV",{class:!0});var d=p(P);b=g(d,"DIV",{class:!0});var E=p(b);m(U.$$.fragment,E),E.forEach($),d.forEach($),N=v(l),R=g(l,"DIV",{class:!0});var I=p(R);j=g(I,"DIV",{class:!0});var w=p(j);m(_.$$.fragment,w),w.forEach($),I.forEach($),A=v(l),k=g(l,"DIV",{class:!0});var D=p(k);M=g(D,"DIV",{class:!0});var y=p(M);m(q.$$.fragment,y),y.forEach($),D.forEach($),C=v(l),H=g(l,"DIV",{class:!0});var V=p(H);J=g(V,"DIV",{class:!0});var S=p(J);m(z.$$.fragment,S),S.forEach($),V.forEach($),l.forEach($),i.forEach($),a.forEach($),K=v(t),m(B.$$.fragment,t),this.h()},h:function(){h(c,"class",t[3].column),h(o,"class","row mt-5"),h(b,"class",t[3].column),h(P,"class","row"),h(j,"class",t[3].column),h(R,"class","row"),h(M,"class",t[3].column),h(k,"class","row"),h(J,"class",t[3].column),h(H,"class","row mb-5"),h(e,"class","container"),h(r,"role","main")},m:function(t,a){d(t,n,a),d(t,r,a),E(r,s),E(s,e),E(e,o),E(o,c),I(Q,c,null),E(e,x),E(e,P),E(P,b),I(U,b,null),E(e,N),E(e,R),E(R,j),I(_,j,null),E(e,A),E(e,k),E(k,M),I(q,M,null),E(e,C),E(e,H),E(H,J),I(z,J,null),d(t,K,a),I(B,t,a),L=!0},p:function(t,n){var r=w(n,1)[0];(!L||8&r)&&a!==(a=t[3].title)&&(document.title=a);var s={};3&r&&(s.description="Post# "+(t[0].length-t[1])+": Navigating All "+t[0].length+" Post"+(1==t[0].length?"":"s")),Q.$set(s);var e={};2&r&&(e.index=t[1]),1&r&&(e.collection=t[0]),U.$set(e);var o={};4&r&&(o.data=t[2]),_.$set(o);var c={};2&r&&(c.index=t[1]),1&r&&(c.collection=t[0]),q.$set(c);var i={};3&r&&(i.description="Post# "+(t[0].length-t[1])+": Navigating All  "+t[0].length+" Post"+(1==t[0].length?"":"s")),z.$set(i)},i:function(t){L||(D(Q.$$.fragment,t),D(U.$$.fragment,t),D(_.$$.fragment,t),D(q.$$.fragment,t),D(z.$$.fragment,t),D(B.$$.fragment,t),L=!0)},o:function(t){y(Q.$$.fragment,t),y(U.$$.fragment,t),y(_.$$.fragment,t),y(q.$$.fragment,t),y(z.$$.fragment,t),y(B.$$.fragment,t),L=!1},d:function(t){t&&$(n),t&&$(r),V(Q),V(U),V(_),V(q),V(z),t&&$(K),V(B,t)}}}function C(t,a){return H.apply(this,arguments)}function H(){return(H=t(a.mark(function t(n,r){var s;return a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.params.post,t.abrupt("return",{post:s});case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}function J(t,a,n){var r=a.post,s=R(),e=j();function o(){n(0,e=e.map(function(t){return t.ago=A(t.date).from(A()),t}))}var c,i,l;return c=setInterval(o,6e4),o(),x(function(){clearInterval(c)}),P(function(){}),t.$set=function(t){"post"in t&&n(4,r=t.post)},t.$$.update=function(){16&t.$$.dirty&&n(1,i=function(t){var a=0,n=e.filter(function(a){return a.id===t});if(n.length>0){var r=n.pop();a=e.indexOf(r)}return a}(r)),3&t.$$.dirty&&n(2,l=e[i])},[e,i,l,s,r]}export default(function(t){n(i,c);var a=k(i);function i(t){var n;return r(this,i),n=a.call(this),s(o(n),t,J,M,e,{post:4}),n}return i}());export{C as preload};

import{R as t,T as a,_ as r,a as n,i as e,s,b as o,S as c,c as i,q as f,e as l,L as u,P as $,m as g,r as p,f as v,l as m,M as d,h,k as y,n as E,N as w,v as D,F as I,H as V,O as x,Q as b,z as N,A as R,K as P}from"./client.05ffaa9f.js";import{S as C,T as j}from"./Tail.500b8d43.js";import{F as S,R as T}from"./Flip.e732cc9e.js";function z(t){return function(){var a,r=N(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=N(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return R(this,a)}}function F(t){var a,r,n,e,s,o,c,b,N,R,P,z,F,O,k,A,M,q,H,K,L;document.title=a=t[4].title;var Q=new C({props:{post:t[1],description:"Navigating "+t[5].length+" Post"+(1==t[5].length?"":"s")+" in "+i(t[0])+" Category",posts:!0,categories:!0,tags:!0,uncategorize:!0}}),_=new S({props:{index:t[2],collection:t[5],base:"/category/"+t[0]+"/read"}}),B=new T({props:{data:t[3]}}),G=new S({props:{lg:!0,index:t[2],collection:t[5],base:"/category/"+t[0]+"/read"}}),J=new C({props:{post:t[1],description:"Navigating "+t[5].length+" Post"+(1==t[5].length?"":"s")+" in "+i(t[0])+" Category",opened:!0,posts:!0,categories:!0,tags:!0,uncategorize:!0}}),U=new j({});return{c:function(){r=f(),n=l("main"),e=l("section"),s=l("div"),o=l("div"),c=l("div"),u(Q.$$.fragment),b=f(),N=l("div"),R=l("div"),u(_.$$.fragment),P=f(),z=l("div"),F=l("div"),u(B.$$.fragment),O=f(),k=l("div"),A=l("div"),u(G.$$.fragment),M=f(),q=l("div"),H=l("div"),u(J.$$.fragment),K=f(),u(U.$$.fragment),this.h()},l:function(t){$('[data-svelte="svelte-cjhwof"]',document.head).forEach(g),r=p(t),n=v(t,"MAIN",{role:!0});var a=m(n);e=v(a,"SECTION",{});var i=m(e);s=v(i,"DIV",{class:!0});var f=m(s);o=v(f,"DIV",{class:!0});var l=m(o);c=v(l,"DIV",{class:!0});var u=m(c);d(Q.$$.fragment,u),u.forEach(g),l.forEach(g),b=p(f),N=v(f,"DIV",{class:!0});var h=m(N);R=v(h,"DIV",{class:!0});var y=m(R);d(_.$$.fragment,y),y.forEach(g),h.forEach(g),P=p(f),z=v(f,"DIV",{class:!0});var E=m(z);F=v(E,"DIV",{class:!0});var w=m(F);d(B.$$.fragment,w),w.forEach(g),E.forEach(g),O=p(f),k=v(f,"DIV",{class:!0});var D=m(k);A=v(D,"DIV",{class:!0});var I=m(A);d(G.$$.fragment,I),I.forEach(g),D.forEach(g),M=p(f),q=v(f,"DIV",{class:!0});var V=m(q);H=v(V,"DIV",{class:!0});var x=m(H);d(J.$$.fragment,x),x.forEach(g),V.forEach(g),f.forEach(g),i.forEach(g),a.forEach(g),K=p(t),d(U.$$.fragment,t),this.h()},h:function(){h(c,"class",t[4].column),h(o,"class","row mt-5"),h(R,"class",t[4].column),h(N,"class","row"),h(F,"class",t[4].column),h(z,"class","row"),h(A,"class",t[4].column),h(k,"class","row"),h(H,"class",t[4].column),h(q,"class","row mb-5"),h(s,"class","container"),h(n,"role","main")},m:function(t,a){y(t,r,a),y(t,n,a),E(n,e),E(e,s),E(s,o),E(o,c),w(Q,c,null),E(s,b),E(s,N),E(N,R),w(_,R,null),E(s,P),E(s,z),E(z,F),w(B,F,null),E(s,O),E(s,k),E(k,A),w(G,A,null),E(s,M),E(s,q),E(q,H),w(J,H,null),y(t,K,a),w(U,t,a),L=!0},p:function(t,r){var n=D(r,1)[0];(!L||16&n)&&a!==(a=t[4].title)&&(document.title=a);var e={};2&n&&(e.post=t[1]),1&n&&(e.description="Navigating "+t[5].length+" Post"+(1==t[5].length?"":"s")+" in "+i(t[0])+" Category"),Q.$set(e);var s={};4&n&&(s.index=t[2]),1&n&&(s.base="/category/"+t[0]+"/read"),_.$set(s);var o={};8&n&&(o.data=t[3]),B.$set(o);var c={};4&n&&(c.index=t[2]),1&n&&(c.base="/category/"+t[0]+"/read"),G.$set(c);var f={};2&n&&(f.post=t[1]),1&n&&(f.description="Navigating "+t[5].length+" Post"+(1==t[5].length?"":"s")+" in "+i(t[0])+" Category"),J.$set(f)},i:function(t){L||(I(Q.$$.fragment,t),I(_.$$.fragment,t),I(B.$$.fragment,t),I(G.$$.fragment,t),I(J.$$.fragment,t),I(U.$$.fragment,t),L=!0)},o:function(t){V(Q.$$.fragment,t),V(_.$$.fragment,t),V(B.$$.fragment,t),V(G.$$.fragment,t),V(J.$$.fragment,t),V(U.$$.fragment,t),L=!1},d:function(t){t&&g(r),t&&g(n),x(Q),x(_),x(B),x(G),x(J),t&&g(K),x(U,t)}}}function O(t,a){return k.apply(this,arguments)}function k(){return(k=t(a.mark(function t(r,n){var e,s,o;return a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.params,s=e.category,o=e.post,t.abrupt("return",{category:s,post:o});case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}function A(t,a,r){var n,e,s=a.category,o=a.post,c=P(),i=b().filter(function(t){return t.category===s});return t.$set=function(t){"category"in t&&r(0,s=t.category),"post"in t&&r(1,o=t.post)},t.$$.update=function(){2&t.$$.dirty&&r(2,n=function(t){var a=0,r=i.filter(function(a){return a.id===t});if(r.length>0){var n=r.pop();a=i.indexOf(n)}return a}(o)),4&t.$$.dirty&&r(3,e=i[n]),4&t.$$.dirty&&r(6,n+1+1<=i.length),4&t.$$.dirty&&r(7,n-1>=0),t.$$.dirty,t.$$.dirty},[s,o,n,e,c,i]}export default(function(t){r(i,c);var a=z(i);function i(t){var r;return n(this,i),r=a.call(this),e(o(r),t,A,F,s,{category:0,post:1}),r}return i}());export{O as preload};

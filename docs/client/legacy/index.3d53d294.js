import{_ as t,a as n,i as a,s as r,b as e,S as o,e as s,t as c,c as i,d as l,f,g as u,h,j as d,k as v,l as m,m as g,n as p,o as y,K as b,O as $,L as w,M as E,v as I,D,F as A,N as S,u as V,P as j,x,y as O,w as R,J as T,Q as C,R as M}from"./client.abc3589e.js";import{S as N,T as P}from"./Tail.4661f08a.js";function k(t){return function(){var n,a=x(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=x(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return O(this,n)}}function L(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,n){if(!t)return;if("string"==typeof t)return U(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return U(t,n)}(t))){var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,e,o=!0,s=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){s=!0,e=t},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw e}}}}function U(t,n){(null==n||n>t.length)&&(n=t.length);for(var a=0,r=new Array(n);a<n;a++)r[a]=t[a];return r}function B(t,n,a){var r=t.slice();return r[6]=n[a],r}function H(t){var n,a,r,e,o,b,$,w,E,I,D,A,S,V,j,x,O,T,C,M,N,P,k,L,U,B,H,F=t[6].name+"",G=t[6].ago+"",J=t[6].count+"",K=1==t[6].count?"":"s",Q=t[6].today+"",_=t[6].name+"",q=t[6].today&&function(t){var n,a,r=t[6].today+"";return{c:function(){n=s("span"),a=c(r),this.h()},l:function(t){n=l(t,"SPAN",{class:!0});var e=f(n);a=u(e,r),e.forEach(h),this.h()},h:function(){v(n,"class","badge badge-danger badge-pill float-right")},m:function(t,r){p(t,n,r),y(n,a)},p:R,d:function(t){t&&h(n)}}}(t);return{c:function(){n=s("div"),a=s("div"),r=s("h5"),e=s("a"),o=c(F),b=c(" » "),q&&q.c(),$=i(),w=s("h6"),E=s("img"),I=c(" Updated "),D=c(G),A=c("."),S=i(),V=s("p"),j=c("Contains "),x=c(J),O=c(" post"),T=c(K),C=c(", "),M=c(Q),N=c(" in the last 24 hours."),P=i(),k=s("a"),L=c("Browse "),U=c(_),B=c(" »"),H=i(),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var s=f(n);a=l(s,"DIV",{class:!0});var c=f(a);r=l(c,"H5",{class:!0});var i=f(r);e=l(i,"A",{class:!0,href:!0});var v=f(e);o=u(v,F),b=u(v," » "),q&&q.l(v),v.forEach(h),i.forEach(h),$=d(c),w=l(c,"H6",{class:!0});var m=f(w);E=l(m,"IMG",{src:!0,alt:!0,width:!0,height:!0,style:!0}),I=u(m," Updated "),D=u(m,G),A=u(m,"."),m.forEach(h),S=d(c),V=l(c,"P",{class:!0});var g=f(V);j=u(g,"Contains "),x=u(g,J),O=u(g," post"),T=u(g,K),C=u(g,", "),M=u(g,Q),N=u(g," in the last 24 hours."),g.forEach(h),P=d(c),k=l(c,"A",{class:!0,href:!0});var p=f(k);L=u(p,"Browse "),U=u(p,_),B=u(p," »"),p.forEach(h),c.forEach(h),H=d(s),s.forEach(h),this.h()},h:function(){v(e,"class","text-light"),v(e,"href","/tag/"+t[6].id),v(r,"class","card-title pb-2"),E.src!=="/icons/envelope.svg"&&v(E,"src","/icons/envelope.svg"),v(E,"alt",""),v(E,"width","16"),v(E,"height","16"),m(E,"filter","invert(1)"),v(w,"class","card-subtitle ml-3 mb-3"),v(V,"class","card-text ml-3"),v(k,"class","btn btn-outline-info ml-3"),v(k,"href","/tag/"+t[6].id),v(a,"class","card-body py-4 px-3"),v(n,"class","card mb-5 article-link shadow"),g(n,"border-danger",t[6].today)},m:function(t,s){p(t,n,s),y(n,a),y(a,r),y(r,e),y(e,o),y(e,b),q&&q.m(e,null),y(a,$),y(a,w),y(w,E),y(w,I),y(w,D),y(w,A),y(a,S),y(a,V),y(V,j),y(V,x),y(V,O),y(V,T),y(V,C),y(V,M),y(V,N),y(a,P),y(a,k),y(k,L),y(k,U),y(k,B),y(n,H)},p:function(t,a){t[6].today&&q.p(t,a),2&a&&g(n,"border-danger",t[6].today)},d:function(t){t&&h(n),q&&q.d()}}}function F(t){var n,a,r,e,o,c,u,m,g,j,x,O,R,T,C;document.title=n=t[0].title;for(var M=new N({props:{description:"Listing Of All "+t[1].length+" Tags",posts:!0,categories:!0}}),k=t[1],L=[],U=0;U<k.length;U+=1)L[U]=H(B(t,k,U));var F=new N({props:{description:"Listing Of All "+t[1].length+" Tags",opened:!0,posts:!0,categories:!0}}),G=new P({});return{c:function(){a=i(),r=s("main"),e=s("section"),o=s("div"),c=s("div"),u=s("div"),b(M.$$.fragment),m=i(),g=s("div"),j=s("div");for(var t=0;t<L.length;t+=1)L[t].c();x=i(),O=s("div"),R=s("div"),b(F.$$.fragment),T=i(),b(G.$$.fragment),this.h()},l:function(t){$('[data-svelte="svelte-cjhwof"]',document.head).forEach(h),a=d(t),r=l(t,"MAIN",{role:!0});var n=f(r);e=l(n,"SECTION",{});var s=f(e);o=l(s,"DIV",{class:!0});var i=f(o);c=l(i,"DIV",{class:!0});var v=f(c);u=l(v,"DIV",{class:!0});var p=f(u);w(M.$$.fragment,p),p.forEach(h),v.forEach(h),m=d(i),g=l(i,"DIV",{class:!0});var y=f(g);j=l(y,"DIV",{class:!0});for(var b=f(j),E=0;E<L.length;E+=1)L[E].l(b);b.forEach(h),y.forEach(h),x=d(i),O=l(i,"DIV",{class:!0});var I=f(O);R=l(I,"DIV",{class:!0});var D=f(R);w(F.$$.fragment,D),D.forEach(h),I.forEach(h),i.forEach(h),s.forEach(h),n.forEach(h),T=d(t),w(G.$$.fragment,t),this.h()},h:function(){v(u,"class",t[0].column),v(c,"class","row mt-5"),v(j,"class",t[0].column),v(g,"class","row mt-5"),v(R,"class",t[0].column),v(O,"class","row mb-5"),v(o,"class","container"),v(r,"role","main")},m:function(t,n){p(t,a,n),p(t,r,n),y(r,e),y(e,o),y(o,c),y(c,u),E(M,u,null),y(o,m),y(o,g),y(g,j);for(var s=0;s<L.length;s+=1)L[s].m(j,null);y(o,x),y(o,O),y(O,R),E(F,R,null),p(t,T,n),E(G,t,n),C=!0},p:function(t,a){var r=I(a,1)[0];if((!C||1&r)&&n!==(n=t[0].title)&&(document.title=n),2&r){var e;for(k=t[1],e=0;e<k.length;e+=1){var o=B(t,k,e);L[e]?L[e].p(o,r):(L[e]=H(o),L[e].c(),L[e].m(j,null))}for(;e<L.length;e+=1)L[e].d(1);L.length=k.length}},i:function(t){C||(D(M.$$.fragment,t),D(F.$$.fragment,t),D(G.$$.fragment,t),C=!0)},o:function(t){A(M.$$.fragment,t),A(F.$$.fragment,t),A(G.$$.fragment,t),C=!1},d:function(t){t&&h(a),t&&h(r),S(M),V(L,t),S(F),t&&h(T),S(G,t)}}}function G(t){var n=T(),a=C(),r=a.reduce(function(t,n){return function(t,n){var a,r=L(n.tags.split(" "));try{for(r.s();!(a=r.n()).done;){var e=a.value;t[e]||(t[e]={id:e,name:e,count:0,latest:new Date(n.date)}),t[e].count++,new Date(n.date)-new Date(t[e].latest)>0&&(t[e].latest=new Date(n.date))}}catch(t){r.e(t)}finally{r.f()}return t}(t,n)},{}),e=Object.keys(r).map(function(t){return r[t]});function o(){a.map(function(t){return t.ago=M(t.date).from(M()),t}),a.map(function(t){return t.today=M().diff(M(t.date),"days")<1,t}),e.map(function(t){return t.ago=M(t.latest).from(M()),t}),e.map(function(t){return t.today=a.filter(function(n){return n.tags.split(" ").includes(t.id)}).filter(function(t){return t.today}).length,t})}var s;return s=setInterval(o,6e4),o(),j(function(){clearInterval(s)}),[n,e]}export default(function(s){t(i,o);var c=k(i);function i(t){var o;return n(this,i),o=c.call(this),a(e(o),t,G,F,r,{}),o}return i}());

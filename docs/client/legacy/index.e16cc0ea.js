import{a as t,b as n,i as a,s as r,d as e,S as o,m as s,t as c,z as i,p as l,v as f,q as u,h as d,A as h,r as m,u as v,B as g,f as p,w as y,x as b,M as $,Q as w,N as E,O as I,g as A,G as D,I as S,P as O,y as T,R as V,o as j,j as x,k as M,L as R,U as L,n as k,T as C}from"./client.28d50e0e.js";import{S as N,T as P}from"./Tail.edc04ab0.js";function U(t){return function(){var n,a=x(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=x(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return M(this,n)}}function B(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,n){if(!t)return;if("string"==typeof t)return G(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return G(t,n)}(t))){var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,e,o=!0,s=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){s=!0,e=t},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw e}}}}function G(t,n){(null==n||n>t.length)&&(n=t.length);for(var a=0,r=new Array(n);a<n;a++)r[a]=t[a];return r}function H(t,n,a){var r=t.slice();return r[7]=n[a],r}function q(t){var n,a,r=t[7].today+"";return{c:function(){n=s("span"),a=c(r),this.h()},l:function(t){n=l(t,"SPAN",{class:!0});var e=f(n);a=u(e,r),e.forEach(d),this.h()},h:function(){m(n,"class","badge badge-danger badge-pill float-right")},m:function(t,r){p(t,n,r),y(n,a)},p:function(t,n){1&n&&r!==(r=t[7].today+"")&&b(a,r)},d:function(t){t&&d(n)}}}function z(t){var n;return{c:function(){n=c(".")},l:function(t){n=u(t,".")},m:function(t,a){p(t,n,a)},p:k,d:function(t){t&&d(n)}}}function Q(t){var n,a,r,e=t[7].today+"";return{c:function(){n=c(", "),a=c(e),r=c(" in the last 24 hours.")},l:function(t){n=u(t,", "),a=u(t,e),r=u(t," in the last 24 hours.")},m:function(t,e){p(t,n,e),p(t,a,e),p(t,r,e)},p:function(t,n){1&n&&e!==(e=t[7].today+"")&&b(a,e)},d:function(t){t&&d(n),t&&d(a),t&&d(r)}}}function F(t){var n,a,r,e,o,$,w,E,I,A,D,S,O,T,V,j,x,M,R,L,k,C,N,P,U,B,G=t[7].name+"",H=(t[1]?t[7].ago:t[7].published)+"",F=t[7].count+"",J=1==t[7].count?"":"s",K=t[7].name+"",W=t[1]&&t[7].today&&q(t);function X(t,n){return t[1]?Q:z}var Y=X(t),Z=Y(t);return{c:function(){n=s("div"),a=s("div"),r=s("h5"),e=s("a"),o=c(G),$=c(" » "),W&&W.c(),E=i(),I=s("h6"),A=s("img"),D=c(" Updated "),S=c(H),O=c("."),T=i(),V=s("p"),j=c("Contains "),x=c(F),M=c(" post"),R=c(J),Z.c(),L=i(),k=s("a"),C=c("Browse "),N=c(K),P=c(" »"),B=i(),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var s=f(n);a=l(s,"DIV",{class:!0});var c=f(a);r=l(c,"H5",{class:!0});var i=f(r);e=l(i,"A",{class:!0,href:!0});var m=f(e);o=u(m,G),$=u(m," » "),W&&W.l(m),m.forEach(d),i.forEach(d),E=h(c),I=l(c,"H6",{class:!0});var v=f(I);A=l(v,"IMG",{src:!0,alt:!0,width:!0,height:!0,style:!0}),D=u(v," Updated "),S=u(v,H),O=u(v,"."),v.forEach(d),T=h(c),V=l(c,"P",{class:!0});var g=f(V);j=u(g,"Contains "),x=u(g,F),M=u(g," post"),R=u(g,J),Z.l(g),g.forEach(d),L=h(c),k=l(c,"A",{class:!0,href:!0});var p=f(k);C=u(p,"Browse "),N=u(p,K),P=u(p," »"),p.forEach(d),c.forEach(d),B=h(s),s.forEach(d),this.h()},h:function(){m(e,"class","text-light"),m(e,"href",w="/tag/"+t[7].id),m(r,"class","card-title pb-2"),A.src!=="/icons/envelope.svg"&&m(A,"src","/icons/envelope.svg"),m(A,"alt",""),m(A,"width","16"),m(A,"height","16"),v(A,"filter","invert(1)"),m(I,"class","card-subtitle ml-3 mb-3"),m(V,"class","card-text ml-3"),m(k,"class","btn btn-outline-info ml-3"),m(k,"href",U="/tag/"+t[7].id),m(a,"class","card-body py-4 px-3"),m(n,"class","card mb-5 article-link shadow"),g(n,"border-danger",t[1]&&t[7].today)},m:function(t,s){p(t,n,s),y(n,a),y(a,r),y(r,e),y(e,o),y(e,$),W&&W.m(e,null),y(a,E),y(a,I),y(I,A),y(I,D),y(I,S),y(I,O),y(a,T),y(a,V),y(V,j),y(V,x),y(V,M),y(V,R),Z.m(V,null),y(a,L),y(a,k),y(k,C),y(k,N),y(k,P),y(n,B)},p:function(t,a){1&a&&G!==(G=t[7].name+"")&&b(o,G),t[1]&&t[7].today?W?W.p(t,a):((W=q(t)).c(),W.m(e,null)):W&&(W.d(1),W=null),1&a&&w!==(w="/tag/"+t[7].id)&&m(e,"href",w),3&a&&H!==(H=(t[1]?t[7].ago:t[7].published)+"")&&b(S,H),1&a&&F!==(F=t[7].count+"")&&b(x,F),1&a&&J!==(J=1==t[7].count?"":"s")&&b(R,J),Y===(Y=X(t))&&Z?Z.p(t,a):(Z.d(1),(Z=Y(t))&&(Z.c(),Z.m(V,null))),1&a&&K!==(K=t[7].name+"")&&b(N,K),1&a&&U!==(U="/tag/"+t[7].id)&&m(k,"href",U),3&a&&g(n,"border-danger",t[1]&&t[7].today)},d:function(t){t&&d(n),W&&W.d(),Z.d()}}}function J(t){var n,a,r,e,o,c,u,v,g,b,V,j,x,M,R;document.title=n=t[2].title;for(var L=new N({props:{description:"Listing Of All "+t[0].length+" Tags",posts:!0,categories:!0}}),k=t[0],C=[],U=0;U<k.length;U+=1)C[U]=F(H(t,k,U));var B=new N({props:{description:"Listing Of All "+t[0].length+" Tags",opened:!0,posts:!0,categories:!0}}),G=new P({});return{c:function(){a=i(),r=s("main"),e=s("section"),o=s("div"),c=s("div"),u=s("div"),$(L.$$.fragment),v=i(),g=s("div"),b=s("div");for(var t=0;t<C.length;t+=1)C[t].c();V=i(),j=s("div"),x=s("div"),$(B.$$.fragment),M=i(),$(G.$$.fragment),this.h()},l:function(t){w('[data-svelte="svelte-cjhwof"]',document.head).forEach(d),a=h(t),r=l(t,"MAIN",{role:!0});var n=f(r);e=l(n,"SECTION",{});var s=f(e);o=l(s,"DIV",{class:!0});var i=f(o);c=l(i,"DIV",{class:!0});var m=f(c);u=l(m,"DIV",{class:!0});var p=f(u);E(L.$$.fragment,p),p.forEach(d),m.forEach(d),v=h(i),g=l(i,"DIV",{class:!0});var y=f(g);b=l(y,"DIV",{class:!0});for(var $=f(b),I=0;I<C.length;I+=1)C[I].l($);$.forEach(d),y.forEach(d),V=h(i),j=l(i,"DIV",{class:!0});var A=f(j);x=l(A,"DIV",{class:!0});var D=f(x);E(B.$$.fragment,D),D.forEach(d),A.forEach(d),i.forEach(d),s.forEach(d),n.forEach(d),M=h(t),E(G.$$.fragment,t),this.h()},h:function(){m(u,"class",t[2].column),m(c,"class","row mt-5"),m(b,"class",t[2].column),m(g,"class","row mt-5"),m(x,"class",t[2].column),m(j,"class","row mb-5"),m(o,"class","container"),m(r,"role","main")},m:function(t,n){p(t,a,n),p(t,r,n),y(r,e),y(e,o),y(o,c),y(c,u),I(L,u,null),y(o,v),y(o,g),y(g,b);for(var s=0;s<C.length;s+=1)C[s].m(b,null);y(o,V),y(o,j),y(j,x),I(B,x,null),p(t,M,n),I(G,t,n),R=!0},p:function(t,a){var r=A(a,1)[0];(!R||4&r)&&n!==(n=t[2].title)&&(document.title=n);var e={};if(1&r&&(e.description="Listing Of All "+t[0].length+" Tags"),L.$set(e),3&r){var o;for(k=t[0],o=0;o<k.length;o+=1){var s=H(t,k,o);C[o]?C[o].p(s,r):(C[o]=F(s),C[o].c(),C[o].m(b,null))}for(;o<C.length;o+=1)C[o].d(1);C.length=k.length}var c={};1&r&&(c.description="Listing Of All "+t[0].length+" Tags"),B.$set(c)},i:function(t){R||(D(L.$$.fragment,t),D(B.$$.fragment,t),D(G.$$.fragment,t),R=!0)},o:function(t){S(L.$$.fragment,t),S(B.$$.fragment,t),S(G.$$.fragment,t),R=!1},d:function(t){t&&d(a),t&&d(r),O(L),T(C,t),O(B),t&&d(M),O(G,t)}}}function K(t,n,a){var r=R(),e=C(),o={},s=[];function c(){e=(e=e.map(function(t){return t.ago=L(t.date).from(L()),t})).map(function(t){return t.today=L().diff(L(t.date),"days")<1,t}),r.blinkenlighten&&(e=(e=e.map(function(t){return t.ago=L(L(t.date).add(parseInt(31*Math.random()),"days")).from(L()),t})).map(function(t,n){return t.today=Math.random()<.5,t})),o=e.reduce(function(t,n){return function(t,n){var a,r=B(n.tags.split(" "));try{for(r.s();!(a=r.n()).done;){var e=a.value;t[e]||(t[e]={id:e,name:e,count:0,latest:new Date(n.date),published:n.published}),t[e].count++,new Date(n.date)-new Date(t[e].latest)>0&&(t[e].latest=new Date(n.date))}}catch(t){r.e(t)}finally{r.f()}return t}(t,n)},{}),a(0,s=Object.keys(o).map(function(t){return o[t]})),s.map(function(t){return t.ago=L(t.latest).from(L()),t}),s.map(function(t){return t.today=e.filter(function(n){return n.tags.split(" ").includes(t.id)}).filter(function(t){return t.today}).length,t})}var i;i=setInterval(c,r.recalculateInterval),c(),V(function(){clearInterval(i)});var l=!1;return j(function(){a(1,l=!0)}),[s,l,r]}export default(function(s){t(i,o);var c=U(i);function i(t){var o;return n(this,i),o=c.call(this),a(e(o),t,K,J,r,{}),o}return i}());

import{_ as t,a as n,i as r,s as a,b as e,S as o,e as s,t as c,k as i,f,l,g as u,n as d,m as h,h as m,j as v,o as p,y as g,z as y,A as b,u as E,B as w,C as x,D,q as I,G as S,w as A,x as $,v as j,J as V,K as C}from"./client.1b1bb8cf.js";import{S as L}from"./Sub.2603c0d6.js";function R(t){return function(){var n,r=A(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var a=A(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return $(this,n)}}function M(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,n){if(!t)return;if("string"==typeof t)return O(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(t,n)}(t))){var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,e,o=!0,s=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return o=t.done,t},e:function(t){s=!0,e=t},f:function(){try{o||null==a.return||a.return()}finally{if(s)throw e}}}}function O(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,a=new Array(n);r<n;r++)a[r]=t[r];return a}function k(t,n,r){var a=t.slice();return a[5]=n[r],a}function N(t){var n,r,a,e,o,g,y,b,E,w,x,D,I,S,A,$,V,C,L,R=t[5].name+"",M=t[5].ago+"",O=t[5].count+"",k=1==t[5].count?"":"s",N=t[5].today+"",P=t[5].today&&function(t){var n,r,a=t[5].today+"";return{c:function(){n=s("span"),r=c(a),this.h()},l:function(t){n=f(t,"SPAN",{class:!0});var e=l(n);r=u(e,a),e.forEach(h),this.h()},h:function(){m(n,"class","badge badge-danger badge-pill")},m:function(t,a){v(t,n,a),p(n,r)},p:j,d:function(t){t&&h(n)}}}(t);return{c:function(){n=s("a"),r=s("div"),a=s("h5"),e=c(R),o=i(),P&&P.c(),g=i(),y=s("small"),b=c("updated "),E=c(M),w=i(),x=s("small"),D=c("Contains "),I=c(O),S=c(" post"),A=c(k),$=c(", "),V=c(N),C=c(" in the last 24 hours."),L=i(),this.h()},l:function(t){n=f(t,"A",{href:!0,class:!0});var s=l(n);r=f(s,"DIV",{class:!0});var c=l(r);a=f(c,"H5",{class:!0});var i=l(a);e=u(i,R),o=d(i),P&&P.l(i),i.forEach(h),g=d(c),y=f(c,"SMALL",{class:!0});var m=l(y);b=u(m,"updated "),E=u(m,M),m.forEach(h),c.forEach(h),w=d(s),x=f(s,"SMALL",{class:!0});var v=l(x);D=u(v,"Contains "),I=u(v,O),S=u(v," post"),A=u(v,k),$=u(v,", "),V=u(v,N),C=u(v," in the last 24 hours."),v.forEach(h),L=d(s),s.forEach(h),this.h()},h:function(){m(a,"class","mb-1"),m(y,"class","text-muted"),m(r,"class","d-flex w-100 justify-content-between"),m(x,"class","text-muted"),m(n,"href","/tag/"+t[5].id),m(n,"class","list-group-item list-group-item-action bg-dark")},m:function(t,s){v(t,n,s),p(n,r),p(r,a),p(a,e),p(a,o),P&&P.m(a,null),p(r,g),p(r,y),p(y,b),p(y,E),p(n,w),p(n,x),p(x,D),p(x,I),p(x,S),p(x,A),p(x,$),p(x,V),p(x,C),p(n,L)},p:function(t,n){t[5].today&&P.p(t,n)},d:function(t){t&&h(n),P&&P.d()}}}function P(t){for(var n,r,a,e,o,c,u,S,A,$,j=new L({props:{description:"Listing of all tags",posts:!0,categories:!0}}),V=t[0],C=[],R=0;R<V.length;R+=1)C[R]=N(k(t,V,R));return{c:function(){n=s("main"),r=s("section"),a=s("div"),e=s("div"),o=s("div"),g(j.$$.fragment),c=i(),u=s("div"),S=s("div"),A=s("div");for(var t=0;t<C.length;t+=1)C[t].c();this.h()},l:function(t){n=f(t,"MAIN",{role:!0});var s=l(n);r=f(s,"SECTION",{});var i=l(r);a=f(i,"DIV",{class:!0});var m=l(a);e=f(m,"DIV",{class:!0});var v=l(e);o=f(v,"DIV",{class:!0});var p=l(o);y(j.$$.fragment,p),p.forEach(h),v.forEach(h),c=d(m),u=f(m,"DIV",{class:!0});var g=l(u);S=f(g,"DIV",{class:!0});var b=l(S);A=f(b,"DIV",{class:!0});for(var E=l(A),w=0;w<C.length;w+=1)C[w].l(E);E.forEach(h),b.forEach(h),g.forEach(h),m.forEach(h),i.forEach(h),s.forEach(h),this.h()},h:function(){m(o,"class","col-12 offset-md-1 col-md-10 offset-xxl-3 col-xxl-6"),m(e,"class","row mt-5"),m(A,"class","list-group"),m(S,"class","col-12 offset-md-1 col-md-10 offset-xxl-3 col-xxl-6"),m(u,"class","row mt-5"),m(a,"class","container"),m(n,"role","main")},m:function(t,s){v(t,n,s),p(n,r),p(r,a),p(a,e),p(e,o),b(j,o,null),p(a,c),p(a,u),p(u,S),p(S,A);for(var i=0;i<C.length;i+=1)C[i].m(A,null);$=!0},p:function(t,n){var r=E(n,1)[0];if(1&r){var a;for(V=t[0],a=0;a<V.length;a+=1){var e=k(t,V,a);C[a]?C[a].p(e,r):(C[a]=N(e),C[a].c(),C[a].m(A,null))}for(;a<C.length;a+=1)C[a].d(1);C.length=V.length}},i:function(t){$||(w(j.$$.fragment,t),$=!0)},o:function(t){x(j.$$.fragment,t),$=!1},d:function(t){t&&h(n),D(j),I(C,t)}}}function T(t){var n=V(),r=n.reduce(function(t,n){return function(t,n){var r,a=M(n.tags.split(" "));try{for(a.s();!(r=a.n()).done;){var e=r.value;t[e]||(t[e]={id:e,name:e,count:0,latest:new Date(n.date)}),t[e].count++,new Date(n.date)-new Date(t[e].latest)>0&&(t[e].latest=new Date(n.date))}}catch(t){a.e(t)}finally{a.f()}return t}(t,n)},{}),a=Object.keys(r).map(function(t){return r[t]});function e(){n.map(function(t){return t.ago=C(t.date).from(C()),t}),n.map(function(t){return t.today=C().diff(C(t.date),"days")<1,t}),a.map(function(t){return t.ago=C(t.latest).from(C()),t}),a.map(function(t){return t.today=n.filter(function(n){return n.tags.split(" ").includes(t.id)}).filter(function(t){return t.today}).length,t})}var o;return o=setInterval(e,6e4),e(),S(function(){clearInterval(o)}),[a]}export default(function(s){t(i,o);var c=R(i);function i(t){var o;return n(this,i),o=c.call(this),r(e(o),t,T,P,a,{}),o}return i}());
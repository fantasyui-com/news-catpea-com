import{d as a,e as t,i as r,s as c,f as n,S as o,g as s,t as e,h as f,j as l,k as i,l as u,m as h,n as v,o as d,p as m,q as p,r as E,u as g,v as x,w as I,x as y,y as A,z as D,A as V,B as P}from"./client.f5f0c962.js";import{m as R,a as S}from"./index.45dabd44.js";import"./Icon.2aad323e.js";function j(a){return function(){var t,r=V(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}()){var c=V(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return P(this,t)}}function N(a,t,r){var c=a.slice();return c[3]=t[r],c[5]=r,c}function b(a){var t,r,c,n,o,g,x,I,y,A,D,V,P,R,S=a[3].title+"",j=a[3].ago+"",N=a[3].category+"";return{c:function(){t=s("div"),r=s("div"),c=s("a"),n=e(S),g=f(),x=s("div"),I=s("span"),y=e("— "),A=e(j),D=e(" · "),V=s("span"),P=e(N),R=f(),this.h()},l:function(a){t=l(a,"DIV",{class:!0});var o=i(t);r=l(o,"DIV",{});var s=i(r);c=l(s,"A",{href:!0,class:!0});var e=i(c);n=u(e,S),e.forEach(h),s.forEach(h),g=v(o),x=l(o,"DIV",{class:!0});var f=i(x);I=l(f,"SPAN",{class:!0});var d=i(I);y=u(d,"— "),A=u(d,j),d.forEach(h),D=u(f," · "),V=l(f,"SPAN",{class:!0});var m=i(V);P=u(m,N),m.forEach(h),f.forEach(h),R=v(o),o.forEach(h),this.h()},h:function(){d(c,"href",o="/read/"+a[3].id),d(c,"class","text-muted lead"),d(I,"class","text-warning small"),d(V,"class","text-info small"),d(x,"class","ml-3"),d(t,"class","mb-5")},m:function(a,o){m(a,t,o),p(t,r),p(r,c),p(c,n),p(t,g),p(t,x),p(x,I),p(I,y),p(I,A),p(x,D),p(x,V),p(V,P),p(t,R)},p:function(a,t){1&t&&S!==(S=a[3].title+"")&&E(n,S),1&t&&o!==(o="/read/"+a[3].id)&&d(c,"href",o),1&t&&j!==(j=a[3].ago+"")&&E(A,j),1&t&&N!==(N=a[3].category+"")&&E(P,N)},d:function(a){a&&h(t)}}}function k(a){for(var t,r,c,n,o,E,A,D,V,P,R,S,j,k,w,O,T=a[0],C=[],q=0;q<T.length;q+=1)C[q]=b(N(a,T,q));return{c:function(){t=f(),r=s("main"),c=s("section"),n=s("div"),o=s("div"),E=s("div");for(var a=0;a<C.length;a+=1)C[a].c();A=f(),D=s("footer"),V=s("div"),P=s("p"),R=s("a"),S=e("back to top"),j=f(),k=s("p"),w=s("a"),O=e("catpea.com"),this.h()},l:function(a){g('[data-svelte="svelte-1i9jecp"]',document.head).forEach(h),t=v(a),r=l(a,"MAIN",{role:!0});var s=i(r);c=l(s,"SECTION",{});var e=i(c);n=l(e,"DIV",{class:!0});var f=i(n);o=l(f,"DIV",{class:!0});var d=i(o);E=l(d,"DIV",{class:!0});for(var m=i(E),p=0;p<C.length;p+=1)C[p].l(m);m.forEach(h),d.forEach(h),f.forEach(h),e.forEach(h),s.forEach(h),A=v(a),D=l(a,"FOOTER",{class:!0});var x=i(D);V=l(x,"DIV",{class:!0});var I=i(V);P=l(I,"P",{class:!0});var y=i(P);R=l(y,"A",{href:!0});var N=i(R);S=u(N,"back to top"),N.forEach(h),y.forEach(h),j=v(I),k=l(I,"P",{});var b=i(k);w=l(b,"A",{href:!0});var T=i(w);O=u(T,"catpea.com"),T.forEach(h),b.forEach(h),I.forEach(h),x.forEach(h),this.h()},h:function(){document.title="CATPEA! NEWS",d(E,"class","col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xxl-3 col-xxl-6"),d(o,"class","row mt-5"),d(n,"class","container"),d(r,"role","main"),d(R,"href","#top"),d(P,"class","float-right"),d(w,"href","https://catpea.com/"),d(V,"class","container"),d(D,"class","text-muted")},m:function(a,s){m(a,t,s),m(a,r,s),p(r,c),p(c,n),p(n,o),p(o,E);for(var e=0;e<C.length;e+=1)C[e].m(E,null);m(a,A,s),m(a,D,s),p(D,V),p(V,P),p(P,R),p(R,S),p(V,j),p(V,k),p(k,w),p(w,O)},p:function(a,t){var r=x(t,1)[0];if(1&r){var c;for(T=a[0],c=0;c<T.length;c+=1){var n=N(a,T,c);C[c]?C[c].p(n,r):(C[c]=b(n),C[c].c(),C[c].m(E,null))}for(;c<C.length;c+=1)C[c].d(1);C.length=T.length}},i:I,o:I,d:function(a){a&&h(t),a&&h(r),y(C,a),a&&h(A),a&&h(D)}}}function w(a,t,r){var c=R();function n(){r(0,c=c.map(function(a){return a.ago=S(a.date).from(S()),a}))}var o;return o=setInterval(n,6e4),n(),A(function(){clearInterval(o)}),D(function(){}),[c]}export default(function(s){a(f,o);var e=j(f);function f(a){var o;return t(this,f),o=e.call(this),r(n(o),a,w,k,c,{}),o}return f}());

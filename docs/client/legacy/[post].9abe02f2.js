import{E as a,F as t,d as n,e as r,i as c,s,f as i,S as e,u as l,t as o,v as f,l as u,p as h,g as d,j as v,k as g,m as p,o as m,q as E,r as b,w as y,h as N,n as x,y as A,z as k,A as I,B as w,C as S,D as $}from"./client.92b5aae4.js";import{m as L,a as O}from"./index.d160c241.js";function P(a){return function(){var t,n=S(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}()){var r=S(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return $(this,t)}}function D(a,t,n){var r=a.slice();return r[1]=t[n],r}function R(a){var t,n,r,c;return{c:function(){t=d("li"),n=d("span"),r=d("s"),c=o("× Older"),this.h()},l:function(a){t=v(a,"LI",{class:!0});var s=g(t);n=v(s,"SPAN",{class:!0});var i=g(n);r=v(i,"S",{});var e=g(r);c=u(e,"× Older"),e.forEach(p),i.forEach(p),s.forEach(p),this.h()},h:function(){m(n,"class","page-link bg-dark border-0"),m(t,"class","page-item disabled")},m:function(a,s){h(a,t,s),E(t,n),E(n,r),E(r,c)},p:k,d:function(a){a&&p(t)}}}function V(a){var t,n,r,c,s;return{c:function(){t=d("li"),n=d("a"),r=o("« Older"),this.h()},l:function(a){t=v(a,"LI",{class:!0});var c=g(t);n=v(c,"A",{class:!0,title:!0,href:!0});var s=g(n);r=u(s,"« Older"),s.forEach(p),c.forEach(p),this.h()},h:function(){m(n,"class","page-link bg-dark border-0"),m(n,"title",c=a[6].title),m(n,"href",s="/tags/"+a[1]+"/read/"+a[5].id),m(t,"class","page-item")},m:function(a,c){h(a,t,c),E(t,n),E(n,r)},p:function(a,t){64&t&&c!==(c=a[6].title)&&m(n,"title",c),34&t&&s!==(s="/tags/"+a[1]+"/read/"+a[5].id)&&m(n,"href",s)},d:function(a){a&&p(t)}}}function M(a){var t,n,r,c;return{c:function(){t=d("li"),n=d("span"),r=d("s"),c=o("Newer ×"),this.h()},l:function(a){t=v(a,"LI",{class:!0});var s=g(t);n=v(s,"SPAN",{class:!0});var i=g(n);r=v(i,"S",{});var e=g(r);c=u(e,"Newer ×"),e.forEach(p),i.forEach(p),s.forEach(p),this.h()},h:function(){m(n,"class","page-link bg-dark border-0"),m(t,"class","page-item disabled")},m:function(a,s){h(a,t,s),E(t,n),E(n,r),E(r,c)},p:k,d:function(a){a&&p(t)}}}function T(a){var t,n,r,c,s;return{c:function(){t=d("li"),n=d("a"),r=o("Newer »"),this.h()},l:function(a){t=v(a,"LI",{class:!0});var c=g(t);n=v(c,"A",{class:!0,title:!0,href:!0});var s=g(n);r=u(s,"Newer »"),s.forEach(p),c.forEach(p),this.h()},h:function(){m(n,"class","page-link bg-dark border-0"),m(n,"title",c=a[6].title),m(n,"href",s="/tags/"+a[1]+"/read/"+a[6].id),m(t,"class","page-item")},m:function(a,c){h(a,t,c),E(t,n),E(n,r)},p:function(a,t){64&t&&c!==(c=a[6].title)&&m(n,"title",c),66&t&&s!==(s="/tags/"+a[1]+"/read/"+a[6].id)&&m(n,"href",s)},d:function(a){a&&p(t)}}}function j(a){for(var t,n,r=a[2].tags.split(" "),c=[],s=0;s<r.length;s+=1)c[s]=H(D(a,r,s));return{c:function(){t=o("· ");for(var a=0;a<c.length;a+=1)c[a].c();n=f()},l:function(a){t=u(a,"· ");for(var r=0;r<c.length;r+=1)c[r].l(a);n=f()},m:function(a,r){h(a,t,r);for(var s=0;s<c.length;s+=1)c[s].m(a,r);h(a,n,r)},p:function(a,t){if(4&t){var s;for(r=a[2].tags.split(" "),s=0;s<r.length;s+=1){var i=D(a,r,s);c[s]?c[s].p(i,t):(c[s]=H(i),c[s].c(),c[s].m(n.parentNode,n))}for(;s<c.length;s+=1)c[s].d(1);c.length=r.length}},d:function(a){a&&p(t),y(c,a),a&&p(n)}}}function H(a){var t,n,r,c,s,i=a[1]+"";return{c:function(){t=d("a"),n=o("#"),r=o(i),s=o(" "),this.h()},l:function(a){t=v(a,"A",{href:!0});var c=g(t);n=u(c,"#"),r=u(c,i),c.forEach(p),s=u(a," "),this.h()},h:function(){m(t,"href",c="/tags/"+a[1])},m:function(a,c){h(a,t,c),E(t,n),E(t,r),h(a,s,c)},p:function(a,n){4&n&&i!==(i=a[1]+"")&&b(r,i),4&n&&c!==(c="/tags/"+a[1])&&m(t,"href",c)},d:function(a){a&&p(t),a&&p(s)}}}function C(a){var t,n,r,c;return{c:function(){t=d("li"),n=d("span"),r=d("s"),c=o("× Older"),this.h()},l:function(a){t=v(a,"LI",{class:!0});var s=g(t);n=v(s,"SPAN",{class:!0});var i=g(n);r=v(i,"S",{});var e=g(r);c=u(e,"× Older"),e.forEach(p),i.forEach(p),s.forEach(p),this.h()},h:function(){m(n,"class","page-link bg-dark border-0"),m(t,"class","page-item disabled")},m:function(a,s){h(a,t,s),E(t,n),E(n,r),E(r,c)},p:k,d:function(a){a&&p(t)}}}function U(a){var t,n,r,c,s;return{c:function(){t=d("li"),n=d("a"),r=o("« Older"),this.h()},l:function(a){t=v(a,"LI",{class:!0});var c=g(t);n=v(c,"A",{class:!0,title:!0,href:!0});var s=g(n);r=u(s,"« Older"),s.forEach(p),c.forEach(p),this.h()},h:function(){m(n,"class","page-link bg-dark border-0"),m(n,"title",c=a[6].title),m(n,"href",s="/tags/"+a[1]+"/read/"+a[5].id),m(t,"class","page-item")},m:function(a,c){h(a,t,c),E(t,n),E(n,r)},p:function(a,t){64&t&&c!==(c=a[6].title)&&m(n,"title",c),34&t&&s!==(s="/tags/"+a[1]+"/read/"+a[5].id)&&m(n,"href",s)},d:function(a){a&&p(t)}}}function q(a){var t,n,r,c;return{c:function(){t=d("li"),n=d("span"),r=d("s"),c=o("Newer ×"),this.h()},l:function(a){t=v(a,"LI",{class:!0});var s=g(t);n=v(s,"SPAN",{class:!0});var i=g(n);r=v(i,"S",{});var e=g(r);c=u(e,"Newer ×"),e.forEach(p),i.forEach(p),s.forEach(p),this.h()},h:function(){m(n,"class","page-link bg-dark border-0"),m(t,"class","page-item disabled")},m:function(a,s){h(a,t,s),E(t,n),E(n,r),E(r,c)},p:k,d:function(a){a&&p(t)}}}function z(a){var t,n,r,c,s;return{c:function(){t=d("li"),n=d("a"),r=o("Newer »"),this.h()},l:function(a){t=v(a,"LI",{class:!0});var c=g(t);n=v(c,"A",{class:!0,title:!0,href:!0});var s=g(n);r=u(s,"Newer »"),s.forEach(p),c.forEach(p),this.h()},h:function(){m(n,"class","page-link bg-dark border-0"),m(n,"title",c=a[6].title),m(n,"href",s="/tags/"+a[1]+"/read/"+a[6].id),m(t,"class","page-item")},m:function(a,c){h(a,t,c),E(t,n),E(n,r)},p:function(a,t){64&t&&c!==(c=a[6].title)&&m(n,"title",c),66&t&&s!==(s="/tags/"+a[1]+"/read/"+a[6].id)&&m(n,"href",s)},d:function(a){a&&p(t)}}}function B(a){var t,n,r,c,s,i,e,f,y,I,w,S,$,L,O,P,D,H,B,F,G,J,K,Q,W,X,Y,Z,_,aa,ta,na,ra,ca,sa,ia,ea,la,oa,fa,ua,ha,da,va=a[2].title+"",ga=a[2].ago+"",pa=l(a[2].category)+"",ma=a[2].html+"";function Ea(a,t){return a[3]?V:R}var ba=Ea(a),ya=ba(a);function Na(a,t){return a[4]?T:M}var xa=Na(a),Aa=xa(a),ka=a[2].tags.length&&j(a);function Ia(a,t){return a[3]?U:C}var wa=Ia(a),Sa=wa(a);function $a(a,t){return a[4]?z:q}var La=$a(a),Oa=La(a);return{c:function(){t=d("main"),n=d("section"),r=d("div"),c=d("div"),s=d("div"),i=d("span"),e=o("Reading posts with tag "),f=d("strong"),y=o(a[1]),I=o(" only"),w=o(" · "),S=d("a"),$=o("remove tag filter"),O=N(),P=d("div"),D=d("div"),H=d("nav"),B=d("ul"),ya.c(),F=N(),Aa.c(),G=N(),J=d("div"),K=d("h1"),Q=o(va),W=N(),X=d("small"),Y=o("—\n            "),Z=d("span"),_=o("Posted "),aa=o(ga),ta=o("\n            ·\n            in "),na=d("span"),ra=N(),ca=d("a"),sa=o(pa),ea=N(),ka&&ka.c(),la=N(),oa=d("p"),fa=N(),ua=d("nav"),ha=d("ul"),Sa.c(),da=N(),Oa.c(),this.h()},l:function(l){t=v(l,"MAIN",{role:!0});var o=g(t);n=v(o,"SECTION",{});var h=g(n);r=v(h,"DIV",{class:!0});var d=g(r);c=v(d,"DIV",{class:!0});var m=g(c);s=v(m,"DIV",{class:!0});var E=g(s);i=v(E,"SPAN",{class:!0});var b=g(i);e=u(b,"Reading posts with tag "),f=v(b,"STRONG",{});var N=g(f);y=u(N,a[1]),N.forEach(p),I=u(b," only"),b.forEach(p),w=u(E," · "),S=v(E,"A",{class:!0,href:!0});var A=g(S);$=u(A,"remove tag filter"),A.forEach(p),E.forEach(p),m.forEach(p),O=x(d),P=v(d,"DIV",{class:!0});var k=g(P);D=v(k,"DIV",{class:!0});var L=g(D);H=v(L,"NAV",{"aria-label":!0,class:!0});var R=g(H);B=v(R,"UL",{class:!0});var V=g(B);ya.l(V),F=x(V),Aa.l(V),V.forEach(p),R.forEach(p),G=x(L),J=v(L,"DIV",{class:!0});var M=g(J);K=v(M,"H1",{class:!0});var T=g(K);Q=u(T,va),T.forEach(p),W=x(M),X=v(M,"SMALL",{class:!0});var j=g(X);Y=u(j,"—\n            "),Z=v(j,"SPAN",{class:!0});var C=g(Z);_=u(C,"Posted "),aa=u(C,ga),C.forEach(p),ta=u(j,"\n            ·\n            in "),na=v(j,"SPAN",{class:!0}),g(na).forEach(p),ra=x(j),ca=v(j,"A",{href:!0});var U=g(ca);sa=u(U,pa),U.forEach(p),ea=x(j),ka&&ka.l(j),j.forEach(p),M.forEach(p),la=x(L),oa=v(L,"P",{}),g(oa).forEach(p),fa=x(L),ua=v(L,"NAV",{"aria-label":!0,class:!0});var q=g(ua);ha=v(q,"UL",{class:!0});var z=g(ha);Sa.l(z),da=x(z),Oa.l(z),z.forEach(p),q.forEach(p),L.forEach(p),k.forEach(p),d.forEach(p),h.forEach(p),o.forEach(p),this.h()},h:function(){m(i,"class","text-warning small"),m(S,"class","small"),m(S,"href",L="/read/"+a[0]),m(s,"class","col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xxl-3 col-xxl-6"),m(c,"class","row mt-5"),m(B,"class","pagination pagination-sm"),m(H,"aria-label",""),m(H,"class","my-5"),m(K,"class","text-muted lead"),m(Z,"class","text-warning"),m(na,"class","text-info"),m(ca,"href",ia="/explore/"+a[2].category),m(X,"class","ml-3"),m(J,"class","mb-5"),m(ha,"class","pagination pagination-lg"),m(ua,"aria-label",""),m(ua,"class","my-5"),m(D,"class","col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xxl-3 col-xxl-6"),m(P,"class","row mt-5"),m(r,"class","container"),m(t,"role","main")},m:function(a,l){h(a,t,l),E(t,n),E(n,r),E(r,c),E(c,s),E(s,i),E(i,e),E(i,f),E(f,y),E(i,I),E(s,w),E(s,S),E(S,$),E(r,O),E(r,P),E(P,D),E(D,H),E(H,B),ya.m(B,null),E(B,F),Aa.m(B,null),E(D,G),E(D,J),E(J,K),E(K,Q),E(J,W),E(J,X),E(X,Y),E(X,Z),E(Z,_),E(Z,aa),E(X,ta),E(X,na),E(X,ra),E(X,ca),E(ca,sa),E(X,ea),ka&&ka.m(X,null),E(D,la),E(D,oa),oa.innerHTML=ma,E(D,fa),E(D,ua),E(ua,ha),Sa.m(ha,null),E(ha,da),Oa.m(ha,null)},p:function(a,t){var n=A(t,1)[0];2&n&&b(y,a[1]),1&n&&L!==(L="/read/"+a[0])&&m(S,"href",L),ba===(ba=Ea(a))&&ya?ya.p(a,n):(ya.d(1),(ya=ba(a))&&(ya.c(),ya.m(B,F))),xa===(xa=Na(a))&&Aa?Aa.p(a,n):(Aa.d(1),(Aa=xa(a))&&(Aa.c(),Aa.m(B,null))),4&n&&va!==(va=a[2].title+"")&&b(Q,va),4&n&&ga!==(ga=a[2].ago+"")&&b(aa,ga),4&n&&pa!==(pa=l(a[2].category)+"")&&b(sa,pa),4&n&&ia!==(ia="/explore/"+a[2].category)&&m(ca,"href",ia),a[2].tags.length?ka?ka.p(a,n):((ka=j(a)).c(),ka.m(X,null)):ka&&(ka.d(1),ka=null),4&n&&ma!==(ma=a[2].html+"")&&(oa.innerHTML=ma),wa===(wa=Ia(a))&&Sa?Sa.p(a,n):(Sa.d(1),(Sa=wa(a))&&(Sa.c(),Sa.m(ha,da))),La===(La=$a(a))&&Oa?Oa.p(a,n):(Oa.d(1),(Oa=La(a))&&(Oa.c(),Oa.m(ha,null)))},i:k,o:k,d:function(a){a&&p(t),ya.d(),Aa.d(),ka&&ka.d(),Sa.d(),Oa.d()}}}function F(a,t){return G.apply(this,arguments)}function G(){return(G=a(t.mark(function a(n,r){var c,s,i;return t.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=n.params,s=c.tag,i=c.post,a.abrupt("return",{tag:s,post:i});case 2:case"end":return a.stop()}},a)}))).apply(this,arguments)}function J(a,t,n){var r=t.tag,c=t.post,s=L().filter(function(a){return a.tags.split(" ").includes(r)});function i(){n(7,s=s.map(function(a){return a.ago=O(a.date).from(O()),a}))}var e,l,o,f,u,h,d;return e=setInterval(i,6e4),i(),I(function(){clearInterval(e)}),w(function(){}),a.$set=function(a){"tag"in a&&n(1,r=a.tag),"post"in a&&n(0,c=a.post)},a.$$.update=function(){1&a.$$.dirty&&n(9,l=function(a){var t=0,n=s.filter(function(t){return t.id===a});if(n.length>0){var r=n.pop();t=s.indexOf(r)}return t}(c)),640&a.$$.dirty&&n(2,o=s[l]),640&a.$$.dirty&&n(3,f=l+1+1<=s.length),512&a.$$.dirty&&n(4,u=l-1>=0),648&a.$$.dirty&&n(5,h=f?s[l+1]:s[0]),656&a.$$.dirty&&n(6,d=u?s[l-1]:s[0])},[c,r,o,f,u,h,d]}export default(function(a){n(l,e);var t=P(l);function l(a){var n;return r(this,l),n=t.call(this),c(i(n),a,J,B,s,{tag:1,post:0}),n}return l}());export{F as preload};

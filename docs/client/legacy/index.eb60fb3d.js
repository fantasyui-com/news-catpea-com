import{E as t,F as a,d as r,e as n,i as s,s as c,f as o,S as e,g as l,t as f,h as i,j as h,k as u,l as v,m as g,n as p,o as d,p as m,q as E,r as x,u as A,v as y,w,x as I,y as D,z as S,A as P,B as N,C as V,D as R}from"./client.12ff4252.js";import{m as $,a as b}from"./index.89443d37.js";function j(t){return function(){var a,r=V(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=V(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return R(this,a)}}function k(t,a,r){var n=t.slice();return n[0]=a[r],n}function C(t,a,r){var n=t.slice();return n[4]=a[r],n[6]=r,n}function O(t){for(var a,r,n=t[4].tags.split(" "),s=[],c=0;c<n.length;c+=1)s[c]=T(k(t,n,c));return{c:function(){a=f("· ");for(var t=0;t<s.length;t+=1)s[t].c();r=y()},l:function(t){a=v(t,"· ");for(var n=0;n<s.length;n+=1)s[n].l(t);r=y()},m:function(t,n){m(t,a,n);for(var c=0;c<s.length;c+=1)s[c].m(t,n);m(t,r,n)},p:function(t,a){if(2&a){var c;for(n=t[4].tags.split(" "),c=0;c<n.length;c+=1){var o=k(t,n,c);s[c]?s[c].p(o,a):(s[c]=T(o),s[c].c(),s[c].m(r.parentNode,r))}for(;c<s.length;c+=1)s[c].d(1);s.length=n.length}},d:function(t){t&&g(a),w(s,t),t&&g(r)}}}function T(t){var a,r,n,s,c,o=t[0]+"";return{c:function(){a=l("a"),r=f("#"),n=f(o),c=f(" "),this.h()},l:function(t){a=h(t,"A",{href:!0});var s=u(a);r=v(s,"#"),n=v(s,o),s.forEach(g),c=v(t," "),this.h()},h:function(){d(a,"href",s="/tags/"+t[0])},m:function(t,s){m(t,a,s),E(a,r),E(a,n),m(t,c,s)},p:function(t,r){2&r&&o!==(o=t[0]+"")&&x(n,o),2&r&&s!==(s="/tags/"+t[0])&&d(a,"href",s)},d:function(t){t&&g(a),t&&g(c)}}}function F(t){var a,r,n,s,c,o,e,y,w,I,D,S,P,N,V,R,$,b,j,k=t[4].title+"",C=t[4].ago+"",T=A(t[4].category)+"",F=t[4].tags.length&&O(t);return{c:function(){a=l("div"),r=l("h1"),n=l("a"),s=f(k),o=i(),e=l("small"),y=f("—\n              "),w=l("span"),I=f("Posted "),D=f(C),S=f("\n              ·\n              in "),P=l("span"),N=i(),V=l("a"),R=f(T),b=i(),F&&F.c(),j=i(),this.h()},l:function(t){a=h(t,"DIV",{class:!0});var c=u(a);r=h(c,"H1",{class:!0});var l=u(r);n=h(l,"A",{href:!0,class:!0});var f=u(n);s=v(f,k),f.forEach(g),l.forEach(g),o=p(c),e=h(c,"SMALL",{class:!0});var i=u(e);y=v(i,"—\n              "),w=h(i,"SPAN",{class:!0});var d=u(w);I=v(d,"Posted "),D=v(d,C),d.forEach(g),S=v(i,"\n              ·\n              in "),P=h(i,"SPAN",{class:!0}),u(P).forEach(g),N=p(i),V=h(i,"A",{href:!0});var m=u(V);R=v(m,T),m.forEach(g),b=p(i),F&&F.l(i),i.forEach(g),j=p(c),c.forEach(g),this.h()},h:function(){d(n,"href",c="/tags/"+t[0]+"/read/"+t[4].id),d(n,"class","text-muted"),d(r,"class","lead"),d(w,"class","text-warning"),d(P,"class","text-info"),d(V,"href",$="/explore/"+t[4].category),d(e,"class","ml-3"),d(a,"class","mb-5")},m:function(t,c){m(t,a,c),E(a,r),E(r,n),E(n,s),E(a,o),E(a,e),E(e,y),E(e,w),E(w,I),E(w,D),E(e,S),E(e,P),E(e,N),E(e,V),E(V,R),E(e,b),F&&F.m(e,null),E(a,j)},p:function(t,a){2&a&&k!==(k=t[4].title+"")&&x(s,k),3&a&&c!==(c="/tags/"+t[0]+"/read/"+t[4].id)&&d(n,"href",c),2&a&&C!==(C=t[4].ago+"")&&x(D,C),2&a&&T!==(T=A(t[4].category)+"")&&x(R,T),2&a&&$!==($="/explore/"+t[4].category)&&d(V,"href",$),t[4].tags.length?F?F.p(t,a):((F=O(t)).c(),F.m(e,null)):F&&(F.d(1),F=null)},d:function(t){t&&g(a),F&&F.d()}}}function L(t){for(var a,r,n,s,c,o,e,A,y,P,N,V,R,$,b,j,k,O,T,L,M,q,z,B,H,W,G,J,K=t[1],Q=[],U=0;U<K.length;U+=1)Q[U]=F(C(t,K,U));return{c:function(){a=i(),r=l("main"),n=l("section"),s=l("div"),c=l("div"),o=l("div"),e=l("span"),A=f("Showing posts tagged "),y=f(t[0]),P=f(" · "),N=l("a"),V=f("show all posts"),R=f(" · "),$=l("a"),b=f("list all tags"),j=i(),k=l("div"),O=l("div");for(var h=0;h<Q.length;h+=1)Q[h].c();T=i(),L=l("footer"),M=l("div"),q=l("p"),z=l("a"),B=f("back to top"),H=i(),W=l("p"),G=l("a"),J=f("catpea.com"),this.h()},l:function(l){I('[data-svelte="svelte-1i9jecp"]',document.head).forEach(g),a=p(l),r=h(l,"MAIN",{role:!0});var f=u(r);n=h(f,"SECTION",{});var i=u(n);s=h(i,"DIV",{class:!0});var d=u(s);c=h(d,"DIV",{class:!0});var m=u(c);o=h(m,"DIV",{class:!0});var E=u(o);e=h(E,"SPAN",{class:!0});var x=u(e);A=v(x,"Showing posts tagged "),y=v(x,t[0]),x.forEach(g),P=v(E," · "),N=h(E,"A",{class:!0,href:!0});var w=u(N);V=v(w,"show all posts"),w.forEach(g),R=v(E," · "),$=h(E,"A",{class:!0,href:!0});var D=u($);b=v(D,"list all tags"),D.forEach(g),E.forEach(g),m.forEach(g),j=p(d),k=h(d,"DIV",{class:!0});var S=u(k);O=h(S,"DIV",{class:!0});for(var C=u(O),F=0;F<Q.length;F+=1)Q[F].l(C);C.forEach(g),S.forEach(g),d.forEach(g),i.forEach(g),f.forEach(g),T=p(l),L=h(l,"FOOTER",{class:!0});var K=u(L);M=h(K,"DIV",{class:!0});var U=u(M);q=h(U,"P",{class:!0});var X=u(q);z=h(X,"A",{href:!0});var Y=u(z);B=v(Y,"back to top"),Y.forEach(g),X.forEach(g),H=p(U),W=h(U,"P",{});var Z=u(W);G=h(Z,"A",{href:!0});var _=u(G);J=v(_,"catpea.com"),_.forEach(g),Z.forEach(g),U.forEach(g),K.forEach(g),this.h()},h:function(){document.title="CATPEA! NEWS",d(e,"class","text-warning small"),d(N,"class","small"),d(N,"href","/"),d($,"class","small"),d($,"href","/tags"),d(o,"class","col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xxl-3 col-xxl-6"),d(c,"class","row mt-5"),d(O,"class","col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xxl-3 col-xxl-6"),d(k,"class","row mt-5"),d(s,"class","container"),d(r,"role","main"),d(z,"href","#top"),d(q,"class","float-right"),d(G,"href","https://catpea.com/"),d(M,"class","container"),d(L,"class","text-muted")},m:function(t,l){m(t,a,l),m(t,r,l),E(r,n),E(n,s),E(s,c),E(c,o),E(o,e),E(e,A),E(e,y),E(o,P),E(o,N),E(N,V),E(o,R),E(o,$),E($,b),E(s,j),E(s,k),E(k,O);for(var f=0;f<Q.length;f+=1)Q[f].m(O,null);m(t,T,l),m(t,L,l),E(L,M),E(M,q),E(q,z),E(z,B),E(M,H),E(M,W),E(W,G),E(G,J)},p:function(t,a){var r=D(a,1)[0];if(1&r&&x(y,t[0]),3&r){var n;for(K=t[1],n=0;n<K.length;n+=1){var s=C(t,K,n);Q[n]?Q[n].p(s,r):(Q[n]=F(s),Q[n].c(),Q[n].m(O,null))}for(;n<Q.length;n+=1)Q[n].d(1);Q.length=K.length}},i:S,o:S,d:function(t){t&&g(a),t&&g(r),w(Q,t),t&&g(T),t&&g(L)}}}function M(t,a){return q.apply(this,arguments)}function q(){return(q=t(a.mark(function t(r,n){var s;return a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=r.params.tag,t.abrupt("return",{tag:s});case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}function z(t,a,r){var n=a.tag;function s(){r(1,o=o.map(function(t){return t.ago=b(t.date).from(b()),t}))}var c,o;return c=setInterval(s,6e4),P(function(){clearInterval(c)}),N(function(){s()}),t.$set=function(t){"tag"in t&&r(0,n=t.tag)},t.$$.update=function(){1&t.$$.dirty&&r(1,o=$().filter(function(t){return t.tags.split(" ").includes(n)}))},[n,o]}export default(function(t){r(l,e);var a=j(l);function l(t){var r;return n(this,l),r=a.call(this),s(o(r),t,z,L,c,{tag:0}),r}return l}());export{M as preload};

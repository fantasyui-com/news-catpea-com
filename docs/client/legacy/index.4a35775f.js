import{L as t,M as a,_ as n,a as r,i as s,s as e,b as c,S as o,e as i,t as u,k as l,f,l as d,g as h,n as m,m as p,h as v,r as g,j as y,o as b,y as x,z as E,A as D,u as w,B as I,C as S,D as $,q as A,c as V,G as L,w as j,x as P,v as R,J as k,K as C}from"./client.1b1bb8cf.js";import{S as M}from"./Sub.2603c0d6.js";function N(t){return function(){var a,n=j(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=j(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return P(this,a)}}function q(t,a,n){var r=t.slice();return r[7]=a[n],r}function B(t){var a,n,r,s,e,c,o,x,E,D,w,I=t[7].name+"",S=t[7].ago+"",$=t[7].today&&function(t){var a,n,r=t[7].today+"";return{c:function(){a=i("span"),n=u(r),this.h()},l:function(t){a=f(t,"SPAN",{class:!0});var s=d(a);n=h(s,r),s.forEach(p),this.h()},h:function(){v(a,"class","badge badge-danger badge-pill")},m:function(t,r){y(t,a,r),b(a,n)},p:R,d:function(t){t&&p(a)}}}(t),A=t[1][t[7].id]&&function(t){var a,n,r,s,e,c,o,g,x,E,D,w,I=t[1][t[7].id].about+"",S=t[1][t[7].id].note+"",$=t[7].count+"",A=1==t[7].count?"":"s",V=t[7].today+"";return{c:function(){a=i("p"),n=u(I),r=l(),s=i("small"),e=u(S),c=u(" Contains "),o=u($),g=u(" post"),x=u(A),E=u(", "),D=u(V),w=u(" in the last 24 hours."),this.h()},l:function(t){a=f(t,"P",{class:!0});var i=d(a);n=h(i,I),i.forEach(p),r=m(t),s=f(t,"SMALL",{class:!0});var u=d(s);e=h(u,S),c=h(u," Contains "),o=h(u,$),g=h(u," post"),x=h(u,A),E=h(u,", "),D=h(u,V),w=h(u," in the last 24 hours."),u.forEach(p),this.h()},h:function(){v(a,"class","mb-1"),v(s,"class","text-muted")},m:function(t,i){y(t,a,i),b(a,n),y(t,r,i),y(t,s,i),b(s,e),b(s,c),b(s,o),b(s,g),b(s,x),b(s,E),b(s,D),b(s,w)},p:R,d:function(t){t&&p(a),t&&p(r),t&&p(s)}}}(t);return{c:function(){a=i("a"),n=i("div"),r=i("h5"),s=u(I),e=l(),$&&$.c(),c=l(),o=i("small"),x=u("Updated "),E=u(S),D=l(),A&&A.c(),w=l(),this.h()},l:function(t){a=f(t,"A",{href:!0,class:!0});var i=d(a);n=f(i,"DIV",{class:!0});var u=d(n);r=f(u,"H5",{class:!0});var l=d(r);s=h(l,I),e=m(l),$&&$.l(l),l.forEach(p),c=m(u),o=f(u,"SMALL",{class:!0});var v=d(o);x=h(v,"Updated "),E=h(v,S),v.forEach(p),u.forEach(p),D=m(i),A&&A.l(i),w=m(i),i.forEach(p),this.h()},h:function(){v(r,"class","mb-1"),v(o,"class","text-muted"),v(n,"class","d-flex w-100 justify-content-between"),v(a,"href","/category/"+t[7].id),v(a,"class","list-group-item list-group-item-action bg-dark"),g(a,"active",t[0]==t[7].id)},m:function(t,i){y(t,a,i),b(a,n),b(n,r),b(r,s),b(r,e),$&&$.m(r,null),b(n,c),b(n,o),b(o,x),b(o,E),b(a,D),A&&A.m(a,null),b(a,w)},p:function(t,n){t[7].today&&$.p(t,n),t[1][t[7].id]&&A.p(t,n),5&n&&g(a,"active",t[0]==t[7].id)},d:function(t){t&&p(a),$&&$.d(),A&&A.d()}}}function O(t){for(var a,n,r,s,e,c,o,u,h,g,V,L,j=new M({props:{description:"Listing of all categories",posts:!0,tags:!0}}),P=t[2],R=[],k=0;k<P.length;k+=1)R[k]=B(q(t,P,k));return{c:function(){a=i("main"),n=i("section"),r=i("div"),s=i("div"),e=i("div"),c=i("span"),o=l(),x(j.$$.fragment),u=l(),h=i("div"),g=i("div"),V=i("div");for(var t=0;t<R.length;t+=1)R[t].c();this.h()},l:function(t){a=f(t,"MAIN",{role:!0});var i=d(a);n=f(i,"SECTION",{});var l=d(n);r=f(l,"DIV",{class:!0});var v=d(r);s=f(v,"DIV",{class:!0});var y=d(s);e=f(y,"DIV",{class:!0});var b=d(e);c=f(b,"SPAN",{class:!0}),d(c).forEach(p),o=m(b),E(j.$$.fragment,b),b.forEach(p),y.forEach(p),u=m(v),h=f(v,"DIV",{class:!0});var x=d(h);g=f(x,"DIV",{class:!0});var D=d(g);V=f(D,"DIV",{class:!0});for(var w=d(V),I=0;I<R.length;I+=1)R[I].l(w);w.forEach(p),D.forEach(p),x.forEach(p),v.forEach(p),l.forEach(p),i.forEach(p),this.h()},h:function(){v(c,"class","text-warning small"),v(e,"class","col-12 offset-md-1 col-md-10 offset-xxl-3 col-xxl-6"),v(s,"class","row mt-5"),v(V,"class","list-group"),v(g,"class","col-12 offset-md-1 col-md-10 offset-xxl-3 col-xxl-6"),v(h,"class","row mt-5"),v(r,"class","container"),v(a,"role","main")},m:function(t,i){y(t,a,i),b(a,n),b(n,r),b(r,s),b(s,e),b(e,c),b(e,o),D(j,e,null),b(r,u),b(r,h),b(h,g),b(g,V);for(var l=0;l<R.length;l+=1)R[l].m(V,null);L=!0},p:function(t,a){var n=w(a,1)[0];if(7&n){var r;for(P=t[2],r=0;r<P.length;r+=1){var s=q(t,P,r);R[r]?R[r].p(s,n):(R[r]=B(s),R[r].c(),R[r].m(V,null))}for(;r<R.length;r+=1)R[r].d(1);R.length=P.length}},i:function(t){L||(I(j.$$.fragment,t),L=!0)},o:function(t){S(j.$$.fragment,t),L=!1},d:function(t){t&&p(a),$(j),A(R,t)}}}function U(t,a){return z.apply(this,arguments)}function z(){return(z=t(a.mark(function t(n,r){var s;return a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.params.slug,t.abrupt("return",{slug:s});case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}function G(t,a,n){var r=a.slug,s=k(),e=[],c=s.reduce(function(t,a){return(n=t)[(r=a).category]||(n[r.category]={id:r.category,count:0,latest:new Date(r.date)}),n[r.category].count++,new Date(r.date)-new Date(n[r.category].latest)>0&&(n[r.category].latest=new Date(r.date)),n;var n,r},{});function o(){s.map(function(t){return t.ago=C(t.date).from(C()),t}),s.map(function(t){return t.today=C().diff(C(t.date),"days")<1,t}),e.map(function(t){return t.ago=C(t.latest).from(C()),t}),e.map(function(t){return t.today=s.filter(function(a){return a.category===t.id}).filter(function(t){return t.today}).length,t})}Object.keys(c).forEach(function(t){var a=c[t],n=a.count,r=a.latest,s=a.id,o=V(t);e.push({id:s,name:o,count:n,latest:r})});var i;return i=setInterval(o,6e4),o(),L(function(){clearInterval(i)}),t.$set=function(t){"slug"in t&&n(0,r=t.slug)},[r,{quarantine:{about:"Describes my poetic adventures during the 2020 Pandemic.",note:"Includes many poems from my studies and experiments with poetry."},research:{about:"Describes my early Svelte and Bootstrap research.",note:"It also contains early notes on user interface design."}},e]}export default(function(t){n(i,o);var a=N(i);function i(t){var n;return r(this,i),n=a.call(this),s(c(n),t,G,O,e,{slug:0}),n}return i}());export{U as preload};

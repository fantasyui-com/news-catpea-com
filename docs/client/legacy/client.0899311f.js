function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}function i(t,e){return t(e={exports:{}},e.exports),e.exports}var u,c=i(function(e){var n=function(e){var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new R(r||[]);return a._invoke=function(t,e,n){var r=l;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return k()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var u=E(i,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=f(t,e,n);if("normal"===c.type){if(r=n.done?d:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(t,n,i),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function m(){}function y(){}function g(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(P([])));x&&x!==r&&o.call(x,i)&&(b=x);var $=g.prototype=m.prototype=Object.create(b);function _(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(e,n){var r;this._invoke=function(a,i){function u(){return new n(function(r,u){!function r(a,i,u,c){var s=f(e[a],e,i);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"===t(p)&&o.call(p,"__await")?n.resolve(p.__await).then(function(t){r("next",t,u,c)},function(t){r("throw",t,u,c)}):n.resolve(p).then(function(t){l.value=t,u(l)},function(t){return r("throw",t,u,c)})}c(s.arg)}(a,i,r,u)})}return r=r?r.then(u,u):u()}}function E(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,E(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:n,done:!0}}return y.prototype=$.constructor=g,g.constructor=y,g[c]=y.displayName="GeneratorFunction",e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create($),t},e.awrap=function(t){return{__await:t}},_(S.prototype),S.prototype[u]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new S(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},_($),$[c]="Generator",$[i]=function(){return this},$.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=P,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}});function s(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function f(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(t){s(a,r,o,i,u,"next",t)}function u(t){s(a,r,o,i,u,"throw",t)}i(void 0)})}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?d(e):n}function m(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(){}function w(t,e){for(var n in e)t[n]=e[n];return t}function x(t){return t()}function $(){return Object.create(null)}function _(t){t.forEach(x)}function S(t){return"function"==typeof t}function E(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function L(t,e,n,r){return t[1]&&r?w(n.ctx.slice(),t[1](r(e))):n.ctx}function j(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function P(t){t.parentNode.removeChild(t)}function k(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function O(t){return document.createElement(t)}function A(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function C(){return N(" ")}function q(){return N("")}function T(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function D(t){return Array.from(t.childNodes)}function I(t,e,n,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0;i<a.attributes.length;){var u=a.attributes[i];n[u.name]?i++:a.removeAttribute(u.name)}return t.splice(o,1)[0]}}return r?A(e):O(e)}function U(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return N(e)}function G(t){return U(t," ")}function F(t,e){e=""+e,t.data!==e&&(t.data=e)}function H(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function B(t){u=t}function J(){if(!u)throw new Error("Function called outside component initialization");return u}function M(t){J().$$.on_mount.push(t)}function K(t){J().$$.on_destroy.push(t)}var V=[],Y=[],z=[],W=[],X=Promise.resolve(),Q=!1;function Z(t){z.push(t)}var tt=!1,et=new Set;function nt(){if(!tt){tt=!0;do{for(var t=0;t<V.length;t+=1){var e=V[t];B(e),rt(e.$$)}for(V.length=0;Y.length;)Y.pop()();for(var n=0;n<z.length;n+=1){var r=z[n];et.has(r)||(et.add(r),r())}z.length=0}while(V.length);for(;W.length;)W.pop()();Q=!1,tt=!1,et.clear()}}function rt(t){if(null!==t.fragment){t.update(),_(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}var ot,at=new Set;function it(){ot={r:0,c:[],p:ot}}function ut(){ot.r||_(ot.c),ot=ot.p}function ct(t,e){t&&t.i&&(at.delete(t),t.i(e))}function st(t,e,n,r){if(t&&t.o){if(at.has(t))return;at.add(t),ot.c.push(function(){at.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function ft(t,e){for(var n={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],u=e[a];if(u){for(var c in i)c in u||(r[c]=1);for(var s in u)o[s]||(n[s]=u[s],o[s]=1);t[a]=u}else for(var f in i)o[f]=1}for(var l in r)l in n||(n[l]=void 0);return n}function lt(e){return"object"===t(e)&&null!==e?e:{}}function pt(t){t&&t.c()}function ht(t,e){t&&t.l(e)}function dt(t,e,n){var r=t.$$,o=r.fragment,a=r.on_mount,i=r.on_destroy,u=r.after_update;o&&o.m(e,n),Z(function(){var e=a.map(x).filter(S);i?i.push.apply(i,m(e)):_(e),t.$$.on_mount=[]}),u.forEach(Z)}function vt(t,e){var n=t.$$;null!==n.fragment&&(_(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){-1===t.$$.dirty[0]&&(V.push(t),Q||(Q=!0,X.then(nt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function yt(t,e,n,r,o,a){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=u;B(t);var s=e.props||{},f=t.$$={fragment:null,ctx:null,props:a,update:b,not_equal:o,bound:$(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:$(),dirty:i},l=!1;if(f.ctx=n?n(t,s,function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return f.ctx&&o(f.ctx[e],f.ctx[e]=r)&&(f.bound[e]&&f.bound[e](r),l&&mt(t,e)),n}):[],f.update(),l=!0,_(f.before_update),f.fragment=!!r&&r(f.ctx),e.target){if(e.hydrate){var p=D(e.target);f.fragment&&f.fragment.l(p),p.forEach(P)}else f.fragment&&f.fragment.c();e.intro&&ct(t.$$.fragment),dt(t,e.target,e.anchor),nt()}B(c)}var gt=function(){function t(){y(this,t)}var e,n,r;return e=t,(n=[{key:"$destroy",value:function(){vt(this,1),this.$destroy=b}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(){}}])&&g(e.prototype,n),r&&g(e,r),t}(),bt=[];function wt(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b,r=[];function o(n){if(E(t,n)&&(t=n,e)){for(var o=!bt.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),bt.push(i,t)}if(o){for(var u=0;u<bt.length;u+=2)bt[u][0](bt[u+1]);bt.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a){var i=[a,arguments.length>1&&void 0!==arguments[1]?arguments[1]:b];return r.push(i),1===r.length&&(e=n(o)||b),a(t),function(){var t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}}}var xt={},$t=function(){return{}};function _t(t){return function(){var e,n=l(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=l(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return v(this,e)}}function St(e){var n,o,a=e[2].default,i=function(t,e,n,r){if(t){var o=L(t,e,n,r);return t[0](o)}}(a,e,e[1],null);return{c:function(){n=O("main"),i&&i.c()},l:function(t){var e=D(n=I(t,"MAIN",{}));i&&i.l(e),e.forEach(P)},m:function(t,e){R(t,n,e),i&&i.m(n,null),o=!0},p:function(e,n){var o=r(n,1)[0];i&&i.p&&2&o&&i.p(L(a,e,e[1],null),function(e,n,r,o){if(e[2]&&o){var a=e[2](o(r));if(void 0===n.dirty)return a;if("object"===t(a)){for(var i=[],u=Math.max(n.dirty.length,a.length),c=0;c<u;c+=1)i[c]=n.dirty[c]|a[c];return i}return n.dirty|a}return n.dirty}(a,e[1],o,null))},i:function(t){o||(ct(i,t),o=!0)},o:function(t){st(i,t),o=!1},d:function(t){t&&P(n),i&&i.d(t)}}}function Et(t,e,n){var r=e.segment,o=e.$$slots,a=void 0===o?{}:o,i=e.$$scope;return t.$set=function(t){"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,i=t.$$scope)},[r,i,a]}var Lt=function(t){h(n,gt);var e=_t(n);function n(t){var r;return y(this,n),yt(d(r=e.call(this)),t,Et,St,E,{segment:0}),r}return n}();function jt(t){return function(){var e,n=l(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=l(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return v(this,e)}}function Rt(t){var e,n,r=t[1].stack+"";return{c:function(){e=O("pre"),n=N(r)},l:function(t){var o=D(e=I(t,"PRE",{}));n=U(o,r),o.forEach(P)},m:function(t,r){R(t,e,r),j(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&F(n,r)},d:function(t){t&&P(e)}}}function Pt(t){var e,n,o,a,i,u,c,s,f,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&Rt(t);return{c:function(){n=C(),o=O("h1"),a=N(t[0]),i=C(),u=O("p"),c=N(l),s=C(),p&&p.c(),f=q(),this.h()},l:function(e){H('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(P),n=G(e);var r=D(o=I(e,"H1",{class:!0}));a=U(r,t[0]),r.forEach(P),i=G(e);var h=D(u=I(e,"P",{class:!0}));c=U(h,l),h.forEach(P),s=G(e),p&&p.l(e),f=q(),this.h()},h:function(){T(o,"class","svelte-1xjwv3d"),T(u,"class","svelte-1xjwv3d")},m:function(t,e){R(t,n,e),R(t,o,e),j(o,a),R(t,i,e),R(t,u,e),j(u,c),R(t,s,e),p&&p.m(t,e),R(t,f,e)},p:function(t,n){var o=r(n,1)[0];1&o&&e!==(e=t[0])&&(document.title=e),1&o&&F(a,t[0]),2&o&&l!==(l=t[1].message+"")&&F(c,l),t[2]&&t[1].stack?p?p.p(t,o):((p=Rt(t)).c(),p.m(f.parentNode,f)):p&&(p.d(1),p=null)},i:b,o:b,d:function(t){t&&P(n),t&&P(o),t&&P(i),t&&P(u),t&&P(s),p&&p.d(t),t&&P(f)}}}function kt(t,e,n){var r=e.status,o=e.error;return t.$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}var Ot=function(t){h(n,gt);var e=jt(n);function n(t){var r;return y(this,n),yt(d(r=e.call(this)),t,kt,Pt,E,{status:0,error:1}),r}return n}();function At(t){return function(){var e,n=l(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=l(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return v(this,e)}}function Nt(t){var e,n,r=[t[4].props],o=t[4].component;function a(t){for(var e={},n=0;n<r.length;n+=1)e=w(e,r[n]);return{props:e}}if(o)var i=new o(a());return{c:function(){i&&pt(i.$$.fragment),e=q()},l:function(t){i&&ht(i.$$.fragment,t),e=q()},m:function(t,r){i&&dt(i,t,r),R(t,e,r),n=!0},p:function(t,n){var u=16&n?ft(r,[lt(t[4].props)]):{};if(o!==(o=t[4].component)){if(i){it();var c=i;st(c.$$.fragment,1,0,function(){vt(c,1)}),ut()}o?(pt((i=new o(a())).$$.fragment),ct(i.$$.fragment,1),dt(i,e.parentNode,e)):i=null}else o&&i.$set(u)},i:function(t){n||(i&&ct(i.$$.fragment,t),n=!0)},o:function(t){i&&st(i.$$.fragment,t),n=!1},d:function(t){t&&P(e),i&&vt(i,t)}}}function Ct(t){var e,n=new Ot({props:{error:t[0],status:t[1]}});return{c:function(){pt(n.$$.fragment)},l:function(t){ht(n.$$.fragment,t)},m:function(t,r){dt(n,t,r),e=!0},p:function(t,e){var r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i:function(t){e||(ct(n.$$.fragment,t),e=!0)},o:function(t){st(n.$$.fragment,t),e=!1},d:function(t){vt(n,t)}}}function qt(t){var e,n,r,o,a=[Ct,Nt],i=[];function u(t,e){return t[0]?0:1}return e=u(t),n=i[e]=a[e](t),{c:function(){n.c(),r=q()},l:function(t){n.l(t),r=q()},m:function(t,n){i[e].m(t,n),R(t,r,n),o=!0},p:function(t,o){var c=e;(e=u(t))===c?i[e].p(t,o):(it(),st(i[c],1,1,function(){i[c]=null}),ut(),(n=i[e])||(n=i[e]=a[e](t)).c(),ct(n,1),n.m(r.parentNode,r))},i:function(t){o||(ct(n),o=!0)},o:function(t){st(n),o=!1},d:function(t){i[e].d(t),t&&P(r)}}}function Tt(t){for(var e,n=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[qt]},$$scope:{ctx:t}},a=0;a<n.length;a+=1)o=w(o,n[a]);var i=new Lt({props:o});return{c:function(){pt(i.$$.fragment)},l:function(t){ht(i.$$.fragment,t)},m:function(t,n){dt(i,t,n),e=!0},p:function(t,e){var o=r(e,1)[0],a=12&o?ft(n,[4&o&&{segment:t[2][0]},8&o&&lt(t[3].props)]):{};83&o&&(a.$$scope={dirty:o,ctx:t}),i.$set(a)},i:function(t){e||(ct(i.$$.fragment,t),e=!0)},o:function(t){st(i.$$.fragment,t),e=!1},d:function(t){vt(i,t)}}}function Dt(t,e,n){var r,o,a=e.stores,i=e.error,u=e.status,c=e.segments,s=e.level0,f=e.level1,l=void 0===f?null:f;return r=xt,o=a,J().$$.context.set(r,o),t.$set=function(t){"stores"in t&&n(5,a=t.stores),"error"in t&&n(0,i=t.error),"status"in t&&n(1,u=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,s=t.level0),"level1"in t&&n(4,l=t.level1)},[i,u,c,s,l,a]}var It,Ut=function(t){h(n,gt);var e=At(n);function n(t){var r;return y(this,n),yt(d(r=e.call(this)),t,Dt,Tt,E,{stores:5,error:0,status:1,segments:2,level0:3,level1:4}),r}return n}(),Gt=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],Ft=[{js:function(){return import("./index.22cc0ecf.js")},css:["legacy/client.0899311f.css"]},{js:function(){return import("./research.a502b745.js")},css:["legacy/client.0899311f.css"]},{js:function(){return import("./about.d72f3688.js")},css:["legacy/client.0899311f.css"]},{js:function(){return import("./index.79a25314.js")},css:["legacy/index.79a25314.css","legacy/client.0899311f.css"]},{js:function(){return import("./[slug].200600c2.js")},css:["legacy/[slug].200600c2.css","legacy/client.0899311f.css"]}],Ht=(It=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/research\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:4,params:function(t){return{slug:It(t[1])}}}]}]);function Bt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},n=ce(new URL(t,document.baseURI));return n?(ae[e.replaceState?"replaceState":"pushState"]({id:ne},"",t),fe(n,null).then(function(){})):(location.href=t,new Promise(function(t){}))}var Jt,Mt,Kt,Vt,Yt,zt="undefined"!=typeof __SAPPER__&&__SAPPER__,Wt=!1,Xt=[],Qt="{}",Zt={page:wt({}),preloading:wt(null),session:wt(zt&&zt.session)};Zt.session.subscribe(function(){var t=f(c.mark(function t(e){var n,r,o,a,i,u;return c.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(Vt=e,Wt){t.next=3;break}return t.abrupt("return");case 3:return Yt=!0,n=ce(new URL(location.href)),r=Mt={},t.next=8,ve(n);case 8:if(o=t.sent,a=o.redirect,i=o.props,u=o.branch,r===Mt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,pe(a,u,i,n.page);case 16:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());var te,ee=null;var ne,re=1;var oe,ae="undefined"!=typeof history?history:{pushState:function(t,e,n){},replaceState:function(t,e,n){},scrollRestoration:""},ie={};function ue(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(function(e){var o=r(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),a=o[1],i=o[2],u=void 0===i?"":i;"string"==typeof n[a]&&(n[a]=[n[a]]),"object"===t(n[a])?n[a].push(u):n[a]=u}),n}function ce(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(zt.baseUrl))return null;var e=t.pathname.slice(zt.baseUrl.length);if(""===e&&(e="/"),!Gt.some(function(t){return t.test(e)}))for(var n=0;n<Ht.length;n+=1){var r=Ht[n],o=r.pattern.exec(e);if(o){var a=ue(t.search),i=r.parts[r.parts.length-1],u=i.params?i.params(o):{},c={host:location.host,path:e,query:a,params:u};return{href:t.href,route:r,match:o,page:c}}}}function se(){return{x:pageXOffset,y:pageYOffset}}function fe(t,e,n,r){return le.apply(this,arguments)}function le(){return(le=f(c.mark(function t(e,n,r,o){var a,i,u,s,f,l,p,h,d;return c.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n?ne=n:(a=se(),ie[ne]=a,n=ne=++re,ie[ne]=r?a:{x:0,y:0}),ne=n,Jt&&Zt.preloading.set(!0),i=ee&&ee.href===e.href?ee.promise:ve(e),ee=null,u=Mt={},t.next=8,i;case 8:if(s=t.sent,f=s.redirect,l=s.props,p=s.branch,u===Mt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,pe(f,p,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),r||(h=ie[n],o&&(d=document.getElementById(o.slice(1)))&&(h={x:0,y:d.getBoundingClientRect().top}),ie[ne]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}},t)}))).apply(this,arguments)}function pe(t,e,n,r){return he.apply(this,arguments)}function he(){return(he=f(c.mark(function t(e,n,r,o){var a,i;return c.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",Bt(e.location,{replaceState:!0}));case 2:if(Zt.page.set(o),Zt.preloading.set(!1),!Jt){t.next=8;break}Jt.$set(r),t.next=17;break;case 8:return r.stores={page:{subscribe:Zt.page.subscribe},preloading:{subscribe:Zt.preloading.subscribe},session:Zt.session},t.next=11,Kt;case 11:if(t.t0=t.sent,r.level0={props:t.t0},a=document.querySelector("#sapper-head-start"),i=document.querySelector("#sapper-head-end"),a&&i){for(;a.nextSibling!==i;)be(a.nextSibling);be(a),be(i)}Jt=new Ut({target:te,props:r,hydrate:!0});case 17:Xt=n,Qt=JSON.stringify(o.query),Wt=!0,Yt=!1;case 21:case"end":return t.stop()}},t)}))).apply(this,arguments)}function de(t,e,n,r){if(r!==Qt)return!0;var o=Xt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function ve(t){return me.apply(this,arguments)}function me(){return(me=f(c.mark(function t(e){var n,r,o,a,i,u,s,l,p,h,d;return c.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.route,r=e.page,o=r.path.split("/").filter(Boolean),a=null,i={error:null,status:200,segments:[o[0]]},u={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t,e){return fetch(t,e)}),redirect:function(t,e){if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:function(t,e){i.error="string"==typeof e?new Error(e):e,i.status=t}},Kt||(Kt=zt.preloaded[0]||$t.call(u,{host:r.host,path:r.path,query:r.query,params:{}},Vt)),l=1,t.prev=7,p=JSON.stringify(r.query),h=n.pattern.exec(r.path),d=!1,t.next=13,Promise.all(n.parts.map(function(){var t=f(c.mark(function t(n,a){var s,f,v,m,y,g;return c.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(s=o[a],de(a,s,h,p)&&(d=!0),i.segments[l]=o[a+1],n){t.next=5;break}return t.abrupt("return",{segment:s});case 5:if(f=l++,Yt||d||!Xt[a]||Xt[a].part!==n.i){t.next=8;break}return t.abrupt("return",Xt[a]);case 8:return d=!1,t.next=11,ge(Ft[n.i]);case 11:if(v=t.sent,m=v.default,y=v.preload,!Wt&&zt.preloaded[a+1]){t.next=25;break}if(!y){t.next=21;break}return t.next=18,y.call(u,{host:r.host,path:r.path,query:r.query,params:n.params?n.params(e.match):{}},Vt);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=zt.preloaded[a+1];case 26:return t.abrupt("return",i["level".concat(f)]={component:m,props:g,segment:s,match:h,part:n.i});case 27:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()));case 13:s=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),i.error=t.t0,i.status=500,s=[];case 21:return t.abrupt("return",{redirect:a,props:i,branch:s});case 22:case"end":return t.stop()}},t,null,[[7,16]])}))).apply(this,arguments)}function ye(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise(function(t,n){var r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=function(){return t()},r.onerror=n,document.head.appendChild(r)})}function ge(t){var e="string"==typeof t.css?[]:t.css.map(ye);return e.unshift(t.js()),Promise.all(e).then(function(t){return t[0]})}function be(t){t.parentNode.removeChild(t)}function we(t){var e=ce(new URL(t,document.baseURI));if(e)return ee&&t===ee.href||function(t,e){ee={href:t,promise:e}}(t,ve(e)),ee.promise}function xe(t){clearTimeout(oe),oe=setTimeout(function(){$e(t)},20)}function $e(t){var e=Se(t.target);e&&"prefetch"===e.rel&&we(e.href)}function _e(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var n=Se(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&(r?!n.target.baseVal:!n.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=ce(a);if(i)fe(i,null,n.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),ae.pushState({id:ne},"",a.href)}}}else location.hash||e.preventDefault()}}}function Se(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Ee(t){if(ie[ne]=se(),t.state){var e=ce(new URL(location.href));e?fe(e,t.state.id):location.href=location.href}else(function(t){ne=t})(re=re+1),ae.replaceState({id:ne},"",location.href)}!function(t){var e;"scrollRestoration"in ae&&(ae.scrollRestoration="manual"),e=t.target,te=e,addEventListener("click",_e),addEventListener("popstate",Ee),addEventListener("touchstart",$e),addEventListener("mousemove",xe),Promise.resolve().then(function(){var t=location,e=t.hash,n=t.href;ae.replaceState({id:re},"",n);var r,o,a,i,u,c,s,f,l=new URL(location.href);if(zt.error)return r=location,o=r.host,a=r.pathname,i=r.search,u=zt.session,c=zt.preloaded,s=zt.status,f=zt.error,Kt||(Kt=c&&c[0]),void pe(null,[],{error:f,status:s,session:u,level0:{props:Kt},level1:{props:{status:s,error:f},component:Ot},segments:c},{host:o,path:a,query:ue(i),params:{}});var p=ce(l);return p?fe(p,re,!0,e):void 0})}({target:document.querySelector("#sapper")});export{F as A,q as B,it as C,ut as D,i as E,o as F,t as G,a as H,r as I,k as J,K,M as L,f as M,c as N,gt as S,h as _,y as a,d as b,C as c,A as d,O as e,P as f,G as g,I as h,yt as i,D as j,U as k,T as l,R as m,j as n,b as o,l as p,H as q,v as r,E as s,N as t,pt as u,ht as v,dt as w,ct as x,st as y,vt as z};
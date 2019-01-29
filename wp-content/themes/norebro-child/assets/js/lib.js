/*!
// ███   █    ████▄    ▄▄▄▄▀ ▄▄▄▄▀ ▄███▄   █▄▄▄▄
// █  █  █    █   █ ▀▀▀ █ ▀▀▀ █    █▀   ▀  █  ▄▀
// █ ▀ ▄ █    █   █     █     █    ██▄▄    █▀▀▌
// █  ▄▀ ███▄ ▀████    █     █     █▄   ▄▀ █  █
// ███       ▀        ▀     ▀      ▀███▀     █
//                                          ▀
// The MIT License
//
// Copyright © 1986 - ∞, Blotter / Bradley Griffith / http://bradley.computer
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
*/
!function(){var a="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this,b=a._,c=Array.prototype,d=Object.prototype,e="undefined"!=typeof Symbol?Symbol.prototype:null,f=c.push,g=c.slice,h=d.toString,i=d.hasOwnProperty,j=Array.isArray,k=Object.keys,l=Object.create,m=function(){},n=function(a){return a instanceof n?a:this instanceof n?void(this._wrapped=a):new n(a)};"undefined"==typeof exports||exports.nodeType?a._=n:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=n),exports._=n),n.VERSION="1.8.3";var o,p=function(a,b,c){if(void 0===b)return a;switch(null==c?3:c){case 1:return function(c){return a.call(b,c)};case 3:return function(c,d,e){return a.call(b,c,d,e)};case 4:return function(c,d,e,f){return a.call(b,c,d,e,f)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){return n.iteratee!==o?n.iteratee(a,b):null==a?n.identity:n.isFunction(a)?p(a,b,c):n.isObject(a)?n.matcher(a):n.property(a)};n.iteratee=o=function(a,b){return q(a,b,1/0)};var r=function(a,b){return b=null==b?a.length-1:+b,function(){for(var c=Math.max(arguments.length-b,0),d=Array(c),e=0;e<c;e++)d[e]=arguments[e+b];switch(b){case 0:return a.call(this,d);case 1:return a.call(this,arguments[0],d);case 2:return a.call(this,arguments[0],arguments[1],d)}var f=Array(b+1);for(e=0;e<b;e++)f[e]=arguments[e];return f[b]=d,a.apply(this,f)}},s=function(a){if(!n.isObject(a))return{};if(l)return l(a);m.prototype=a;var b=new m;return m.prototype=null,b},t=function(a){return function(b){return null==b?void 0:b[a]}},u=Math.pow(2,53)-1,v=t("length"),w=function(a){var b=v(a);return"number"==typeof b&&b>=0&&b<=u};n.each=n.forEach=function(a,b,c){b=p(b,c);var d,e;if(w(a))for(d=0,e=a.length;d<e;d++)b(a[d],d,a);else{var f=n.keys(a);for(d=0,e=f.length;d<e;d++)b(a[f[d]],f[d],a)}return a},n.map=n.collect=function(a,b,c){b=q(b,c);for(var d=!w(a)&&n.keys(a),e=(d||a).length,f=Array(e),g=0;g<e;g++){var h=d?d[g]:g;f[g]=b(a[h],h,a)}return f};var x=function(a){var b=function(b,c,d,e){var f=!w(b)&&n.keys(b),g=(f||b).length,h=a>0?0:g-1;for(e||(d=b[f?f[h]:h],h+=a);h>=0&&h<g;h+=a){var i=f?f[h]:h;d=c(d,b[i],i,b)}return d};return function(a,c,d,e){var f=arguments.length>=3;return b(a,p(c,e,4),d,f)}};n.reduce=n.foldl=n.inject=x(1),n.reduceRight=n.foldr=x(-1),n.find=n.detect=function(a,b,c){var d=w(a)?n.findIndex:n.findKey,e=d(a,b,c);if(void 0!==e&&-1!==e)return a[e]},n.filter=n.select=function(a,b,c){var d=[];return b=q(b,c),n.each(a,function(a,c,e){b(a,c,e)&&d.push(a)}),d},n.reject=function(a,b,c){return n.filter(a,n.negate(q(b)),c)},n.every=n.all=function(a,b,c){b=q(b,c);for(var d=!w(a)&&n.keys(a),e=(d||a).length,f=0;f<e;f++){var g=d?d[f]:f;if(!b(a[g],g,a))return!1}return!0},n.some=n.any=function(a,b,c){b=q(b,c);for(var d=!w(a)&&n.keys(a),e=(d||a).length,f=0;f<e;f++){var g=d?d[f]:f;if(b(a[g],g,a))return!0}return!1},n.contains=n.includes=n.include=function(a,b,c,d){return w(a)||(a=n.values(a)),("number"!=typeof c||d)&&(c=0),n.indexOf(a,b,c)>=0},n.invoke=r(function(a,b,c){var d=n.isFunction(b);return n.map(a,function(a){var e=d?b:a[b];return null==e?e:e.apply(a,c)})}),n.pluck=function(a,b){return n.map(a,n.property(b))},n.where=function(a,b){return n.filter(a,n.matcher(b))},n.findWhere=function(a,b){return n.find(a,n.matcher(b))},n.max=function(a,b,c){var d,e,f=-1/0,g=-1/0;if(null==b||"number"==typeof b&&"object"!=typeof a[0]&&null!=a){a=w(a)?a:n.values(a);for(var h=0,i=a.length;h<i;h++)null!=(d=a[h])&&d>f&&(f=d)}else b=q(b,c),n.each(a,function(a,c,d){((e=b(a,c,d))>g||e===-1/0&&f===-1/0)&&(f=a,g=e)});return f},n.min=function(a,b,c){var d,e,f=1/0,g=1/0;if(null==b||"number"==typeof b&&"object"!=typeof a[0]&&null!=a){a=w(a)?a:n.values(a);for(var h=0,i=a.length;h<i;h++)null!=(d=a[h])&&d<f&&(f=d)}else b=q(b,c),n.each(a,function(a,c,d){((e=b(a,c,d))<g||e===1/0&&f===1/0)&&(f=a,g=e)});return f},n.shuffle=function(a){return n.sample(a,1/0)},n.sample=function(a,b,c){if(null==b||c)return w(a)||(a=n.values(a)),a[n.random(a.length-1)];var d=w(a)?n.clone(a):n.values(a),e=v(d);b=Math.max(Math.min(b,e),0);for(var f=e-1,g=0;g<b;g++){var h=n.random(g,f),i=d[g];d[g]=d[h],d[h]=i}return d.slice(0,b)},n.sortBy=function(a,b,c){var d=0;return b=q(b,c),n.pluck(n.map(a,function(a,c,e){return{value:a,index:d++,criteria:b(a,c,e)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;if(c!==d){if(c>d||void 0===c)return 1;if(c<d||void 0===d)return-1}return a.index-b.index}),"value")};var y=function(a,b){return function(c,d,e){var f=b?[[],[]]:{};return d=q(d,e),n.each(c,function(b,e){var g=d(b,e,c);a(f,b,g)}),f}};n.groupBy=y(function(a,b,c){n.has(a,c)?a[c].push(b):a[c]=[b]}),n.indexBy=y(function(a,b,c){a[c]=b}),n.countBy=y(function(a,b,c){n.has(a,c)?a[c]++:a[c]=1});var z=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;n.toArray=function(a){return a?n.isArray(a)?g.call(a):n.isString(a)?a.match(z):w(a)?n.map(a,n.identity):n.values(a):[]},n.size=function(a){return null==a?0:w(a)?a.length:n.keys(a).length},n.partition=y(function(a,b,c){a[c?0:1].push(b)},!0),n.first=n.head=n.take=function(a,b,c){if(null!=a)return null==b||c?a[0]:n.initial(a,a.length-b)},n.initial=function(a,b,c){return g.call(a,0,Math.max(0,a.length-(null==b||c?1:b)))},n.last=function(a,b,c){if(null!=a)return null==b||c?a[a.length-1]:n.rest(a,Math.max(0,a.length-b))},n.rest=n.tail=n.drop=function(a,b,c){return g.call(a,null==b||c?1:b)},n.compact=function(a){return n.filter(a,Boolean)};var A=function(a,b,c,d){d=d||[];for(var e=d.length,f=0,g=v(a);f<g;f++){var h=a[f];if(w(h)&&(n.isArray(h)||n.isArguments(h)))if(b)for(var i=0,j=h.length;i<j;)d[e++]=h[i++];else A(h,b,c,d),e=d.length;else c||(d[e++]=h)}return d};n.flatten=function(a,b){return A(a,b,!1)},n.without=r(function(a,b){return n.difference(a,b)}),n.uniq=n.unique=function(a,b,c,d){n.isBoolean(b)||(d=c,c=b,b=!1),null!=c&&(c=q(c,d));for(var e=[],f=[],g=0,h=v(a);g<h;g++){var i=a[g],j=c?c(i,g,a):i;b?(g&&f===j||e.push(i),f=j):c?n.contains(f,j)||(f.push(j),e.push(i)):n.contains(e,i)||e.push(i)}return e},n.union=r(function(a){return n.uniq(A(a,!0,!0))}),n.intersection=function(a){for(var b=[],c=arguments.length,d=0,e=v(a);d<e;d++){var f=a[d];if(!n.contains(b,f)){var g;for(g=1;g<c&&n.contains(arguments[g],f);g++);g===c&&b.push(f)}}return b},n.difference=r(function(a,b){return b=A(b,!0,!0),n.filter(a,function(a){return!n.contains(b,a)})}),n.unzip=function(a){for(var b=a&&n.max(a,v).length||0,c=Array(b),d=0;d<b;d++)c[d]=n.pluck(a,d);return c},n.zip=r(n.unzip),n.object=function(a,b){for(var c={},d=0,e=v(a);d<e;d++)b?c[a[d]]=b[d]:c[a[d][0]]=a[d][1];return c};var B=function(a){return function(b,c,d){c=q(c,d);for(var e=v(b),f=a>0?0:e-1;f>=0&&f<e;f+=a)if(c(b[f],f,b))return f;return-1}};n.findIndex=B(1),n.findLastIndex=B(-1),n.sortedIndex=function(a,b,c,d){c=q(c,d,1);for(var e=c(b),f=0,g=v(a);f<g;){var h=Math.floor((f+g)/2);c(a[h])<e?f=h+1:g=h}return f};var C=function(a,b,c){return function(d,e,f){var h=0,i=v(d);if("number"==typeof f)a>0?h=f>=0?f:Math.max(f+i,h):i=f>=0?Math.min(f+1,i):f+i+1;else if(c&&f&&i)return f=c(d,e),d[f]===e?f:-1;if(e!==e)return f=b(g.call(d,h,i),n.isNaN),f>=0?f+h:-1;for(f=a>0?h:i-1;f>=0&&f<i;f+=a)if(d[f]===e)return f;return-1}};n.indexOf=C(1,n.findIndex,n.sortedIndex),n.lastIndexOf=C(-1,n.findLastIndex),n.range=function(a,b,c){null==b&&(b=a||0,a=0),c||(c=b<a?-1:1);for(var d=Math.max(Math.ceil((b-a)/c),0),e=Array(d),f=0;f<d;f++,a+=c)e[f]=a;return e},n.chunk=function(a,b){if(null==b||b<1)return[];for(var c=[],d=0,e=a.length;d<e;)c.push(g.call(a,d,d+=b));return c};var D=function(a,b,c,d,e){if(!(d instanceof b))return a.apply(c,e);var f=s(a.prototype),g=a.apply(f,e);return n.isObject(g)?g:f};n.bind=r(function(a,b,c){if(!n.isFunction(a))throw new TypeError("Bind must be called on a function");var d=r(function(e){return D(a,d,b,this,c.concat(e))});return d}),n.partial=r(function(a,b){var c=n.partial.placeholder,d=function(){for(var e=0,f=b.length,g=Array(f),h=0;h<f;h++)g[h]=b[h]===c?arguments[e++]:b[h];for(;e<arguments.length;)g.push(arguments[e++]);return D(a,d,this,this,g)};return d}),n.partial.placeholder=n,n.bindAll=r(function(a,b){b=A(b,!1,!1);var c=b.length;if(c<1)throw new Error("bindAll must be passed function names");for(;c--;){var d=b[c];a[d]=n.bind(a[d],a)}}),n.memoize=function(a,b){var c=function(d){var e=c.cache,f=""+(b?b.apply(this,arguments):d);return n.has(e,f)||(e[f]=a.apply(this,arguments)),e[f]};return c.cache={},c},n.delay=r(function(a,b,c){return setTimeout(function(){return a.apply(null,c)},b)}),n.defer=n.partial(n.delay,n,1),n.throttle=function(a,b,c){var d,e,f,g,h=0;c||(c={});var i=function(){h=!1===c.leading?0:n.now(),d=null,g=a.apply(e,f),d||(e=f=null)},j=function(){var j=n.now();h||!1!==c.leading||(h=j);var k=b-(j-h);return e=this,f=arguments,k<=0||k>b?(d&&(clearTimeout(d),d=null),h=j,g=a.apply(e,f),d||(e=f=null)):d||!1===c.trailing||(d=setTimeout(i,k)),g};return j.cancel=function(){clearTimeout(d),h=0,d=e=f=null},j},n.debounce=function(a,b,c){var d,e,f=function(b,c){d=null,c&&(e=a.apply(b,c))},g=r(function(g){if(d&&clearTimeout(d),c){var h=!d;d=setTimeout(f,b),h&&(e=a.apply(this,g))}else d=n.delay(f,b,this,g);return e});return g.cancel=function(){clearTimeout(d),d=null},g},n.wrap=function(a,b){return n.partial(b,a)},n.negate=function(a){return function(){return!a.apply(this,arguments)}},n.compose=function(){var a=arguments,b=a.length-1;return function(){for(var c=b,d=a[b].apply(this,arguments);c--;)d=a[c].call(this,d);return d}},n.after=function(a,b){return function(){if(--a<1)return b.apply(this,arguments)}},n.before=function(a,b){var c;return function(){return--a>0&&(c=b.apply(this,arguments)),a<=1&&(b=null),c}},n.once=n.partial(n.before,2),n.restArgs=r;var E=!{toString:null}.propertyIsEnumerable("toString"),F=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],G=function(a,b){var c=F.length,e=a.constructor,f=n.isFunction(e)&&e.prototype||d,g="constructor";for(n.has(a,g)&&!n.contains(b,g)&&b.push(g);c--;)(g=F[c])in a&&a[g]!==f[g]&&!n.contains(b,g)&&b.push(g)};n.keys=function(a){if(!n.isObject(a))return[];if(k)return k(a);var b=[];for(var c in a)n.has(a,c)&&b.push(c);return E&&G(a,b),b},n.allKeys=function(a){if(!n.isObject(a))return[];var b=[];for(var c in a)b.push(c);return E&&G(a,b),b},n.values=function(a){for(var b=n.keys(a),c=b.length,d=Array(c),e=0;e<c;e++)d[e]=a[b[e]];return d},n.mapObject=function(a,b,c){b=q(b,c);for(var d=n.keys(a),e=d.length,f={},g=0;g<e;g++){var h=d[g];f[h]=b(a[h],h,a)}return f},n.pairs=function(a){for(var b=n.keys(a),c=b.length,d=Array(c),e=0;e<c;e++)d[e]=[b[e],a[b[e]]];return d},n.invert=function(a){for(var b={},c=n.keys(a),d=0,e=c.length;d<e;d++)b[a[c[d]]]=c[d];return b},n.functions=n.methods=function(a){var b=[];for(var c in a)n.isFunction(a[c])&&b.push(c);return b.sort()};var H=function(a,b){return function(c){var d=arguments.length;if(b&&(c=Object(c)),d<2||null==c)return c;for(var e=1;e<d;e++)for(var f=arguments[e],g=a(f),h=g.length,i=0;i<h;i++){var j=g[i];b&&void 0!==c[j]||(c[j]=f[j])}return c}};n.extend=H(n.allKeys),n.extendOwn=n.assign=H(n.keys),n.findKey=function(a,b,c){b=q(b,c);for(var d,e=n.keys(a),f=0,g=e.length;f<g;f++)if(d=e[f],b(a[d],d,a))return d};var I=function(a,b,c){return b in c};n.pick=r(function(a,b){var c={},d=b[0];if(null==a)return c;n.isFunction(d)?(b.length>1&&(d=p(d,b[1])),b=n.allKeys(a)):(d=I,b=A(b,!1,!1),a=Object(a));for(var e=0,f=b.length;e<f;e++){var g=b[e],h=a[g];d(h,g,a)&&(c[g]=h)}return c}),n.omit=r(function(a,b){var c,d=b[0];return n.isFunction(d)?(d=n.negate(d),b.length>1&&(c=b[1])):(b=n.map(A(b,!1,!1),String),d=function(a,c){return!n.contains(b,c)}),n.pick(a,d,c)}),n.defaults=H(n.allKeys,!0),n.create=function(a,b){var c=s(a);return b&&n.extendOwn(c,b),c},n.clone=function(a){return n.isObject(a)?n.isArray(a)?a.slice():n.extend({},a):a},n.tap=function(a,b){return b(a),a},n.isMatch=function(a,b){var c=n.keys(b),d=c.length;if(null==a)return!d;for(var e=Object(a),f=0;f<d;f++){var g=c[f];if(b[g]!==e[g]||!(g in e))return!1}return!0};var J,K;J=function(a,b,c,d){if(a===b)return 0!==a||1/a==1/b;if(null==a||null==b)return a===b;if(a!==a)return b!==b;var e=typeof a;return("function"===e||"object"===e||"object"==typeof b)&&K(a,b,c,d)},K=function(a,b,c,d){a instanceof n&&(a=a._wrapped),b instanceof n&&(b=b._wrapped);var f=h.call(a);if(f!==h.call(b))return!1;switch(f){case"[object RegExp]":case"[object String]":return""+a==""+b;case"[object Number]":return+a!=+a?+b!=+b:0==+a?1/+a==1/b:+a==+b;case"[object Date]":case"[object Boolean]":return+a==+b;case"[object Symbol]":return e.valueOf.call(a)===e.valueOf.call(b)}var g="[object Array]"===f;if(!g){if("object"!=typeof a||"object"!=typeof b)return!1;var i=a.constructor,j=b.constructor;if(i!==j&&!(n.isFunction(i)&&i instanceof i&&n.isFunction(j)&&j instanceof j)&&"constructor"in a&&"constructor"in b)return!1}c=c||[],d=d||[];for(var k=c.length;k--;)if(c[k]===a)return d[k]===b;if(c.push(a),d.push(b),g){if((k=a.length)!==b.length)return!1;for(;k--;)if(!J(a[k],b[k],c,d))return!1}else{var l,m=n.keys(a);if(k=m.length,n.keys(b).length!==k)return!1;for(;k--;)if(l=m[k],!n.has(b,l)||!J(a[l],b[l],c,d))return!1}return c.pop(),d.pop(),!0},n.isEqual=function(a,b){return J(a,b)},n.isEmpty=function(a){return null==a||(w(a)&&(n.isArray(a)||n.isString(a)||n.isArguments(a))?0===a.length:0===n.keys(a).length)},n.isElement=function(a){return!(!a||1!==a.nodeType)},n.isArray=j||function(a){return"[object Array]"===h.call(a)},n.isObject=function(a){var b=typeof a;return"function"===b||"object"===b&&!!a},n.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(a){n["is"+a]=function(b){return h.call(b)==="[object "+a+"]"}}),n.isArguments(arguments)||(n.isArguments=function(a){return n.has(a,"callee")});var L=a.document&&a.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof L&&(n.isFunction=function(a){return"function"==typeof a||!1}),n.isFinite=function(a){return!n.isSymbol(a)&&isFinite(a)&&!isNaN(parseFloat(a))},n.isNaN=function(a){return isNaN(a)&&n.isNumber(a)},n.isBoolean=function(a){return!0===a||!1===a||"[object Boolean]"===h.call(a)},n.isNull=function(a){return null===a},n.isUndefined=function(a){return void 0===a},n.has=function(a,b){return null!=a&&i.call(a,b)},n.noConflict=function(){return a._=b,this},n.identity=function(a){return a},n.constant=function(a){return function(){return a}},n.noop=function(){},n.property=t,n.propertyOf=function(a){return null==a?function(){}:function(b){return a[b]}},n.matcher=n.matches=function(a){return a=n.extendOwn({},a),function(b){return n.isMatch(b,a)}},n.times=function(a,b,c){var d=Array(Math.max(0,a));b=p(b,c,1);for(var e=0;e<a;e++)d[e]=b(e);return d},n.random=function(a,b){return null==b&&(b=a,a=0),a+Math.floor(Math.random()*(b-a+1))},n.now=Date.now||function(){return(new Date).getTime()};var M={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},N=n.invert(M),O=function(a){var b=function(b){return a[b]},c="(?:"+n.keys(a).join("|")+")",d=RegExp(c),e=RegExp(c,"g");return function(a){return a=null==a?"":""+a,d.test(a)?a.replace(e,b):a}};n.escape=O(M),n.unescape=O(N),n.result=function(a,b,c){var d=null==a?void 0:a[b];return void 0===d&&(d=c),n.isFunction(d)?d.call(a):d};var P=0;n.uniqueId=function(a){var b=++P+"";return a?a+b:b},n.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var Q=/(.)^/,R={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},S=/\\|'|\r|\n|\u2028|\u2029/g,T=function(a){return"\\"+R[a]};n.template=function(a,b,c){!b&&c&&(b=c),b=n.defaults({},b,n.templateSettings);var d=RegExp([(b.escape||Q).source,(b.interpolate||Q).source,(b.evaluate||Q).source].join("|")+"|$","g"),e=0,f="__p+='";a.replace(d,function(b,c,d,g,h){return f+=a.slice(e,h).replace(S,T),e=h+b.length,c?f+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'":d?f+="'+\n((__t=("+d+"))==null?'':__t)+\n'":g&&(f+="';\n"+g+"\n__p+='"),b}),f+="';\n",b.variable||(f="with(obj||{}){\n"+f+"}\n"),f="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+f+"return __p;\n";var g;try{g=new Function(b.variable||"obj","_",f)}catch(a){throw a.source=f,a}var h=function(a){return g.call(this,a,n)},i=b.variable||"obj";return h.source="function("+i+"){\n"+f+"}",h},n.chain=function(a){var b=n(a);return b._chain=!0,b};var U=function(a,b){return a._chain?n(b).chain():b};n.mixin=function(a){return n.each(n.functions(a),function(b){var c=n[b]=a[b];n.prototype[b]=function(){var a=[this._wrapped];return f.apply(a,arguments),U(this,c.apply(n,a))}}),n},n.mixin(n),n.each(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=c[a];n.prototype[a]=function(){var c=this._wrapped;return b.apply(c,arguments),"shift"!==a&&"splice"!==a||0!==c.length||delete c[0],U(this,c)}}),n.each(["concat","join","slice"],function(a){var b=c[a];n.prototype[a]=function(){return U(this,b.apply(this._wrapped,arguments))}}),n.prototype.value=function(){return this._wrapped},n.prototype.valueOf=n.prototype.toJSON=n.prototype.value,n.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return n})}(),function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b(exports):"function"==typeof define&&define.amd?define(["exports"],b):b(a.THREE={})}(this,function(a){"use strict";function b(){}function c(a,b){this.x=a||0,this.y=b||0}function d(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}function e(a,b,c,d){this._x=a||0,this._y=b||0,this._z=c||0,this._w=void 0!==d?d:1}function f(a,b,c){this.x=a||0,this.y=b||0,this.z=c||0}function g(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}function h(a,b,d,e,f,i,j,k,l,m){Object.defineProperty(this,"id",{value:zd++}),this.uuid=yd.generateUUID(),this.name="",this.image=void 0!==a?a:h.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=void 0!==b?b:h.DEFAULT_MAPPING,this.wrapS=void 0!==d?d:Ec,this.wrapT=void 0!==e?e:Ec,this.magFilter=void 0!==f?f:Jc,this.minFilter=void 0!==i?i:Lc,this.anisotropy=void 0!==l?l:1,this.format=void 0!==j?j:$c,this.type=void 0!==k?k:Mc,this.offset=new c(0,0),this.repeat=new c(1,1),this.center=new c(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new g,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=void 0!==m?m:pd,this.version=0,this.onUpdate=null}function i(a,b,c,d){this.x=a||0,this.y=b||0,this.z=c||0,this.w=void 0!==d?d:1}function j(a,b,c){this.uuid=yd.generateUUID(),this.width=a,this.height=b,this.scissor=new i(0,0,a,b),this.scissorTest=!1,this.viewport=new i(0,0,a,b),c=c||{},void 0===c.minFilter&&(c.minFilter=Jc),this.texture=new h(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding),this.depthBuffer=void 0===c.depthBuffer||c.depthBuffer,this.stencilBuffer=void 0===c.stencilBuffer||c.stencilBuffer,this.depthTexture=void 0!==c.depthTexture?c.depthTexture:null}function k(a,b,c,d,e,f,g,i,j,k,l,m){h.call(this,null,f,g,i,j,k,d,e,l,m),this.image={data:a,width:b,height:c},this.magFilter=void 0!==j?j:Gc,this.minFilter=void 0!==k?k:Gc,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}function l(a,b,c,d,e,f,g,i,j,k){a=void 0!==a?a:[],b=void 0!==b?b:wc,h.call(this,a,b,c,d,e,f,g,i,j,k),this.flipY=!1}function m(){this.seq=[],this.map={}}function n(a,b,c){var d=a[0];if(d<=0||d>0)return a;var e=b*c,f=Cd[e];if(void 0===f&&(f=new Float32Array(e),Cd[e]=f),0!==b){d.toArray(f,0);for(var g=1,h=0;g!==b;++g)h+=c,a[g].toArray(f,h)}return f}function o(a,b){var c=Dd[b];void 0===c&&(c=new Int32Array(b),Dd[b]=c);for(var d=0;d!==b;++d)c[d]=a.allocTextureUnit();return c}function p(a,b){a.uniform1f(this.addr,b)}function q(a,b){a.uniform1i(this.addr,b)}function r(a,b){void 0===b.x?a.uniform2fv(this.addr,b):a.uniform2f(this.addr,b.x,b.y)}function s(a,b){void 0!==b.x?a.uniform3f(this.addr,b.x,b.y,b.z):void 0!==b.r?a.uniform3f(this.addr,b.r,b.g,b.b):a.uniform3fv(this.addr,b)}function t(a,b){void 0===b.x?a.uniform4fv(this.addr,b):a.uniform4f(this.addr,b.x,b.y,b.z,b.w)}function u(a,b){a.uniformMatrix2fv(this.addr,!1,b.elements||b)}function v(a,b){void 0===b.elements?a.uniformMatrix3fv(this.addr,!1,b):(Fd.set(b.elements),a.uniformMatrix3fv(this.addr,!1,Fd))}function w(a,b){void 0===b.elements?a.uniformMatrix4fv(this.addr,!1,b):(Ed.set(b.elements),a.uniformMatrix4fv(this.addr,!1,Ed))}function x(a,b,c){var d=c.allocTextureUnit();a.uniform1i(this.addr,d),c.setTexture2D(b||Ad,d)}function y(a,b,c){var d=c.allocTextureUnit();a.uniform1i(this.addr,d),c.setTextureCube(b||Bd,d)}function z(a,b){a.uniform2iv(this.addr,b)}function A(a,b){a.uniform3iv(this.addr,b)}function B(a,b){a.uniform4iv(this.addr,b)}function C(a){switch(a){case 5126:return p;case 35664:return r;case 35665:return s;case 35666:return t;case 35674:return u;case 35675:return v;case 35676:return w;case 35678:case 36198:return x;case 35680:return y;case 5124:case 35670:return q;case 35667:case 35671:return z;case 35668:case 35672:return A;case 35669:case 35673:return B}}function D(a,b){a.uniform1fv(this.addr,b)}function E(a,b){a.uniform1iv(this.addr,b)}function F(a,b){a.uniform2fv(this.addr,n(b,this.size,2))}function G(a,b){a.uniform3fv(this.addr,n(b,this.size,3))}function H(a,b){a.uniform4fv(this.addr,n(b,this.size,4))}function I(a,b){a.uniformMatrix2fv(this.addr,!1,n(b,this.size,4))}function J(a,b){a.uniformMatrix3fv(this.addr,!1,n(b,this.size,9))}function K(a,b){a.uniformMatrix4fv(this.addr,!1,n(b,this.size,16))}function L(a,b,c){var d=b.length,e=o(c,d);a.uniform1iv(this.addr,e);for(var f=0;f!==d;++f)c.setTexture2D(b[f]||Ad,e[f])}function M(a,b,c){var d=b.length,e=o(c,d);a.uniform1iv(this.addr,e);for(var f=0;f!==d;++f)c.setTextureCube(b[f]||Bd,e[f])}function N(a){switch(a){case 5126:return D;case 35664:return F;case 35665:return G;case 35666:return H;case 35674:return I;case 35675:return J;case 35676:return K;case 35678:return L;case 35680:return M;case 5124:case 35670:return E;case 35667:case 35671:return z;case 35668:case 35672:return A;case 35669:case 35673:return B}}function O(a,b,c){this.id=a,this.addr=c,this.setValue=C(b.type)}function P(a,b,c){this.id=a,this.addr=c,this.size=b.size,this.setValue=N(b.type)}function Q(a){this.id=a,m.call(this)}function R(a,b){a.seq.push(b),a.map[b.id]=b}function S(a,b,c){var d=a.name,e=d.length;for(Gd.lastIndex=0;;){var f=Gd.exec(d),g=Gd.lastIndex,h=f[1],i="]"===f[2],j=f[3];if(i&&(h|=0),void 0===j||"["===j&&g+2===e){R(c,void 0===j?new O(h,a,b):new P(h,a,b));break}var k=c.map,l=k[h];void 0===l&&(l=new Q(h),R(c,l)),c=l}}function T(a,b,c){m.call(this),this.renderer=c;for(var d=a.getProgramParameter(b,a.ACTIVE_UNIFORMS),e=0;e<d;++e){var f=a.getActiveUniform(b,e),g=f.name;S(f,a.getUniformLocation(b,g),this)}}function U(a,b,c){return void 0===b&&void 0===c?this.set(a):this.setRGB(a,b,c)}function V(a,b){this.min=void 0!==a?a:new c(1/0,1/0),this.max=void 0!==b?b:new c(-1/0,-1/0)}function W(a,b,d,e,g){function h(){var a=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),c=new Uint16Array([0,1,2,0,2,3]);j=b.createBuffer(),k=b.createBuffer(),b.bindBuffer(b.ARRAY_BUFFER,j),b.bufferData(b.ARRAY_BUFFER,a,b.STATIC_DRAW),b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,k),b.bufferData(b.ELEMENT_ARRAY_BUFFER,c,b.STATIC_DRAW),p=b.createTexture(),q=b.createTexture(),d.bindTexture(b.TEXTURE_2D,p),b.texImage2D(b.TEXTURE_2D,0,b.RGB,16,16,0,b.RGB,b.UNSIGNED_BYTE,null),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST),d.bindTexture(b.TEXTURE_2D,q),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,16,16,0,b.RGBA,b.UNSIGNED_BYTE,null),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST),l={vertexShader:["uniform lowp int renderType;","uniform vec3 screenPosition;","uniform vec2 scale;","uniform float rotation;","uniform sampler2D occlusionMap;","attribute vec2 position;","attribute vec2 uv;","varying vec2 vUV;","varying float vVisibility;","void main() {","\tvUV = uv;","\tvec2 pos = position;","\tif ( renderType == 2 ) {","\t\tvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );","\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );","\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );","\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );","\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );","\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );","\t\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );","\t\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );","\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );","\t\tvVisibility =        visibility.r / 9.0;","\t\tvVisibility *= 1.0 - visibility.g / 9.0;","\t\tvVisibility *=       visibility.b / 9.0;","\t\tvVisibility *= 1.0 - visibility.a / 9.0;","\t\tpos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;","\t\tpos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;","\t}","\tgl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );","}"].join("\n"),fragmentShader:["uniform lowp int renderType;","uniform sampler2D map;","uniform float opacity;","uniform vec3 color;","varying vec2 vUV;","varying float vVisibility;","void main() {","\tif ( renderType == 0 ) {","\t\tgl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );","\t} else if ( renderType == 1 ) {","\t\tgl_FragColor = texture2D( map, vUV );","\t} else {","\t\tvec4 texture = texture2D( map, vUV );","\t\ttexture.a *= opacity * vVisibility;","\t\tgl_FragColor = texture;","\t\tgl_FragColor.rgb *= color;","\t}","}"].join("\n")},m=i(l),n={vertex:b.getAttribLocation(m,"position"),uv:b.getAttribLocation(m,"uv")},o={renderType:b.getUniformLocation(m,"renderType"),map:b.getUniformLocation(m,"map"),occlusionMap:b.getUniformLocation(m,"occlusionMap"),opacity:b.getUniformLocation(m,"opacity"),color:b.getUniformLocation(m,"color"),scale:b.getUniformLocation(m,"scale"),rotation:b.getUniformLocation(m,"rotation"),screenPosition:b.getUniformLocation(m,"screenPosition")}}function i(a){var c=b.createProgram(),d=b.createShader(b.FRAGMENT_SHADER),e=b.createShader(b.VERTEX_SHADER),f="precision "+g.precision+" float;\n";return b.shaderSource(d,f+a.fragmentShader),b.shaderSource(e,f+a.vertexShader),b.compileShader(d),b.compileShader(e),b.attachShader(c,d),b.attachShader(c,e),b.linkProgram(c),c}var j,k,l,m,n,o,p,q;this.render=function(a,g,i,l){if(0!==a.length){var r=new f,s=l.w/l.z,t=.5*l.z,u=.5*l.w,v=16/l.w,w=new c(v*s,v),x=new f(1,1,0),y=new c(1,1),z=new V;z.min.set(l.x,l.y),z.max.set(l.x+(l.z-16),l.y+(l.w-16)),void 0===m&&h(),d.useProgram(m),d.initAttributes(),d.enableAttribute(n.vertex),d.enableAttribute(n.uv),d.disableUnusedAttributes(),b.uniform1i(o.occlusionMap,0),b.uniform1i(o.map,1),b.bindBuffer(b.ARRAY_BUFFER,j),b.vertexAttribPointer(n.vertex,2,b.FLOAT,!1,16,0),b.vertexAttribPointer(n.uv,2,b.FLOAT,!1,16,8),b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,k),d.disable(b.CULL_FACE),d.buffers.depth.setMask(!1);for(var A=0,B=a.length;A<B;A++){v=16/l.w,w.set(v*s,v);var C=a[A];if(r.set(C.matrixWorld.elements[12],C.matrixWorld.elements[13],C.matrixWorld.elements[14]),r.applyMatrix4(i.matrixWorldInverse),r.applyMatrix4(i.projectionMatrix),x.copy(r),y.x=l.x+x.x*t+t-8,y.y=l.y+x.y*u+u-8,!0===z.containsPoint(y)){d.activeTexture(b.TEXTURE0),d.bindTexture(b.TEXTURE_2D,null),d.activeTexture(b.TEXTURE1),d.bindTexture(b.TEXTURE_2D,p),b.copyTexImage2D(b.TEXTURE_2D,0,b.RGB,y.x,y.y,16,16,0),b.uniform1i(o.renderType,0),b.uniform2f(o.scale,w.x,w.y),b.uniform3f(o.screenPosition,x.x,x.y,x.z),d.disable(b.BLEND),d.enable(b.DEPTH_TEST),b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0),d.activeTexture(b.TEXTURE0),d.bindTexture(b.TEXTURE_2D,q),b.copyTexImage2D(b.TEXTURE_2D,0,b.RGBA,y.x,y.y,16,16,0),b.uniform1i(o.renderType,1),d.disable(b.DEPTH_TEST),d.activeTexture(b.TEXTURE1),d.bindTexture(b.TEXTURE_2D,p),b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0),C.positionScreen.copy(x),C.customUpdateCallback?C.customUpdateCallback(C):C.updateLensFlares(),b.uniform1i(o.renderType,2),d.enable(b.BLEND);for(var D=0,E=C.lensFlares.length;D<E;D++){var F=C.lensFlares[D];F.opacity>.001&&F.scale>.001&&(x.x=F.x,x.y=F.y,x.z=F.z,v=F.size*F.scale/l.w,w.x=v*s,w.y=v,b.uniform3f(o.screenPosition,x.x,x.y,x.z),b.uniform2f(o.scale,w.x,w.y),b.uniform1f(o.rotation,F.rotation),b.uniform1f(o.opacity,F.opacity),b.uniform3f(o.color,F.color.r,F.color.g,F.color.b),d.setBlending(F.blending,F.blendEquation,F.blendSrc,F.blendDst),e.setTexture2D(F.texture,1),b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0))}}}d.enable(b.CULL_FACE),d.enable(b.DEPTH_TEST),d.buffers.depth.setMask(!0),d.reset()}}}function X(a,b,c,d,e,f,g,i,j){h.call(this,a,b,c,d,e,f,g,i,j),this.needsUpdate=!0}function Y(a,b,c,d,g){function h(){var a=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),c=new Uint16Array([0,1,2,0,2,3]);k=b.createBuffer(),l=b.createBuffer(),b.bindBuffer(b.ARRAY_BUFFER,k),b.bufferData(b.ARRAY_BUFFER,a,b.STATIC_DRAW),b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,l),b.bufferData(b.ELEMENT_ARRAY_BUFFER,c,b.STATIC_DRAW),m=i(),n={position:b.getAttribLocation(m,"position"),uv:b.getAttribLocation(m,"uv")},o={uvOffset:b.getUniformLocation(m,"uvOffset"),uvScale:b.getUniformLocation(m,"uvScale"),rotation:b.getUniformLocation(m,"rotation"),scale:b.getUniformLocation(m,"scale"),color:b.getUniformLocation(m,"color"),map:b.getUniformLocation(m,"map"),opacity:b.getUniformLocation(m,"opacity"),modelViewMatrix:b.getUniformLocation(m,"modelViewMatrix"),projectionMatrix:b.getUniformLocation(m,"projectionMatrix"),fogType:b.getUniformLocation(m,"fogType"),fogDensity:b.getUniformLocation(m,"fogDensity"),fogNear:b.getUniformLocation(m,"fogNear"),fogFar:b.getUniformLocation(m,"fogFar"),fogColor:b.getUniformLocation(m,"fogColor"),fogDepth:b.getUniformLocation(m,"fogDepth"),alphaTest:b.getUniformLocation(m,"alphaTest")};var d=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");d.width=8,d.height=8;var e=d.getContext("2d");e.fillStyle="white",e.fillRect(0,0,8,8),p=new X(d)}function i(){var a=b.createProgram(),c=b.createShader(b.VERTEX_SHADER),d=b.createShader(b.FRAGMENT_SHADER);return b.shaderSource(c,["precision "+g.precision+" float;","#define SHADER_NAME SpriteMaterial","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform float rotation;","uniform vec2 scale;","uniform vec2 uvOffset;","uniform vec2 uvScale;","attribute vec2 position;","attribute vec2 uv;","varying vec2 vUV;","varying float fogDepth;","void main() {","\tvUV = uvOffset + uv * uvScale;","\tvec2 alignedPosition = position * scale;","\tvec2 rotatedPosition;","\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;","\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;","\tvec4 mvPosition;","\tmvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );","\tmvPosition.xy += rotatedPosition;","\tgl_Position = projectionMatrix * mvPosition;","\tfogDepth = - mvPosition.z;","}"].join("\n")),b.shaderSource(d,["precision "+g.precision+" float;","#define SHADER_NAME SpriteMaterial","uniform vec3 color;","uniform sampler2D map;","uniform float opacity;","uniform int fogType;","uniform vec3 fogColor;","uniform float fogDensity;","uniform float fogNear;","uniform float fogFar;","uniform float alphaTest;","varying vec2 vUV;","varying float fogDepth;","void main() {","\tvec4 texture = texture2D( map, vUV );","\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );","\tif ( gl_FragColor.a < alphaTest ) discard;","\tif ( fogType > 0 ) {","\t\tfloat fogFactor = 0.0;","\t\tif ( fogType == 1 ) {","\t\t\tfogFactor = smoothstep( fogNear, fogFar, fogDepth );","\t\t} else {","\t\t\tconst float LOG2 = 1.442695;","\t\t\tfogFactor = exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 );","\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );","\t\t}","\t\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );","\t}","}"].join("\n")),b.compileShader(c),b.compileShader(d),b.attachShader(a,c),b.attachShader(a,d),b.linkProgram(a),a}function j(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:b.id-a.id}var k,l,m,n,o,p,q=new f,r=new e,s=new f;this.render=function(e,f,g){if(0!==e.length){void 0===m&&h(),c.useProgram(m),c.initAttributes(),c.enableAttribute(n.position),c.enableAttribute(n.uv),c.disableUnusedAttributes(),c.disable(b.CULL_FACE),c.enable(b.BLEND),b.bindBuffer(b.ARRAY_BUFFER,k),b.vertexAttribPointer(n.position,2,b.FLOAT,!1,16,0),b.vertexAttribPointer(n.uv,2,b.FLOAT,!1,16,8),b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,l),b.uniformMatrix4fv(o.projectionMatrix,!1,g.projectionMatrix.elements),c.activeTexture(b.TEXTURE0),b.uniform1i(o.map,0);var i=0,t=0,u=f.fog;u?(b.uniform3f(o.fogColor,u.color.r,u.color.g,u.color.b),u.isFog?(b.uniform1f(o.fogNear,u.near),b.uniform1f(o.fogFar,u.far),b.uniform1i(o.fogType,1),i=1,t=1):u.isFogExp2&&(b.uniform1f(o.fogDensity,u.density),b.uniform1i(o.fogType,2),i=2,t=2)):(b.uniform1i(o.fogType,0),i=0,t=0);for(var v=0,w=e.length;v<w;v++){var x=e[v];x.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,x.matrixWorld),x.z=-x.modelViewMatrix.elements[14]}e.sort(j);for(var y=[],v=0,w=e.length;v<w;v++){var x=e[v],z=x.material;if(!1!==z.visible){x.onBeforeRender(a,f,g,void 0,z,void 0),b.uniform1f(o.alphaTest,z.alphaTest),b.uniformMatrix4fv(o.modelViewMatrix,!1,x.modelViewMatrix.elements),x.matrixWorld.decompose(q,r,s),y[0]=s.x,y[1]=s.y;var A=0;f.fog&&z.fog&&(A=t),i!==A&&(b.uniform1i(o.fogType,A),i=A),null!==z.map?(b.uniform2f(o.uvOffset,z.map.offset.x,z.map.offset.y),b.uniform2f(o.uvScale,z.map.repeat.x,z.map.repeat.y)):(b.uniform2f(o.uvOffset,0,0),b.uniform2f(o.uvScale,1,1)),b.uniform1f(o.opacity,z.opacity),b.uniform3f(o.color,z.color.r,z.color.g,z.color.b),b.uniform1f(o.rotation,z.rotation),b.uniform2fv(o.scale,y),c.setBlending(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),c.buffers.depth.setTest(z.depthTest),c.buffers.depth.setMask(z.depthWrite),c.buffers.color.setMask(z.colorWrite),d.setTexture2D(z.map||p,0),b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0),x.onAfterRender(a,f,g,void 0,z,void 0)}}c.enable(b.CULL_FACE),c.reset()}}}function Z(){Object.defineProperty(this,"id",{value:Of++}),this.uuid=yd.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.lights=!0,this.blending=Mb,this.side=Gb,this.flatShading=!1,this.vertexColors=Kb,this.opacity=1,this.transparent=!1,this.blendSrc=$b,this.blendDst=_b,this.blendEquation=Rb,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ic,this.depthTest=!0,this.depthWrite=!0,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.overdraw=0,this.visible=!0,this.userData={},this.needsUpdate=!0}function $(a){Z.call(this),this.type="MeshDepthMaterial",this.depthPacking=wd,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.setValues(a)}function _(a){Z.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new f,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.lights=!1,this.setValues(a)}function aa(a,b){this.min=void 0!==a?a:new f(1/0,1/0,1/0),this.max=void 0!==b?b:new f(-1/0,-1/0,-1/0)}function ba(a,b){this.center=void 0!==a?a:new f,this.radius=void 0!==b?b:0}function ca(a,b){this.normal=void 0!==a?a:new f(1,0,0),this.constant=void 0!==b?b:0}function da(a,b,c,d,e,f){this.planes=[void 0!==a?a:new ca,void 0!==b?b:new ca,void 0!==c?c:new ca,void 0!==d?d:new ca,void 0!==e?e:new ca,void 0!==f?f:new ca]}function ea(a,b,e){function g(b,c,d,e,f,g){var h=b.geometry,i=null,j=t,k=b.customDepthMaterial;if(d&&(j=u,k=b.customDistanceMaterial),k)i=k;else{var l=!1;c.morphTargets&&(h&&h.isBufferGeometry?l=h.morphAttributes&&h.morphAttributes.position&&h.morphAttributes.position.length>0:h&&h.isGeometry&&(l=h.morphTargets&&h.morphTargets.length>0)),b.isSkinnedMesh&&!1===c.skinning&&console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",b);var m=b.isSkinnedMesh&&c.skinning,n=0;l&&(n|=q),m&&(n|=r),i=j[n]}if(a.localClippingEnabled&&!0===c.clipShadows&&0!==c.clippingPlanes.length){var o=i.uuid,p=c.uuid,s=v[o];void 0===s&&(s={},v[o]=s);var w=s[p];void 0===w&&(w=i.clone(),s[p]=w),i=w}i.visible=c.visible,i.wireframe=c.wireframe;var x=c.side;return E.renderSingleSided&&x==Ib&&(x=Gb),E.renderReverseSided&&(x===Gb?x=Hb:x===Hb&&(x=Gb)),i.side=x,i.clipShadows=c.clipShadows,i.clippingPlanes=c.clippingPlanes,i.clipIntersection=c.clipIntersection,i.wireframeLinewidth=c.wireframeLinewidth,i.linewidth=c.linewidth,d&&i.isMeshDistanceMaterial&&(i.referencePosition.copy(e),i.nearDistance=f,i.farDistance=g),i}function h(c,d,e,f){if(!1!==c.visible){if(c.layers.test(d.layers)&&(c.isMesh||c.isLine||c.isPoints)&&c.castShadow&&(!c.frustumCulled||k.intersectsObject(c))){c.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse,c.matrixWorld);var i=b.update(c),j=c.material;if(Array.isArray(j))for(var l=i.groups,m=0,n=l.length;m<n;m++){var o=l[m],q=j[o.materialIndex];if(q&&q.visible){var r=g(c,q,f,p,e.near,e.far);a.renderBufferDirect(e,null,i,r,c,o)}}else if(j.visible){var r=g(c,j,f,p,e.near,e.far);a.renderBufferDirect(e,null,i,r,c,null)}}for(var s=c.children,t=0,u=s.length;t<u;t++)h(s[t],d,e,f)}}for(var k=new da,l=new d,m=new c,n=new c(e,e),o=new f,p=new f,q=1,r=2,s=1+(q|r),t=new Array(s),u=new Array(s),v={},w=[new f(1,0,0),new f(-1,0,0),new f(0,0,1),new f(0,0,-1),new f(0,1,0),new f(0,-1,0)],x=[new f(0,1,0),new f(0,1,0),new f(0,1,0),new f(0,1,0),new f(0,0,1),new f(0,0,-1)],y=[new i,new i,new i,new i,new i,new i],z=0;z!==s;++z){var A=0!=(z&q),B=0!=(z&r),C=new $({depthPacking:xd,morphTargets:A,skinning:B});t[z]=C;var D=new _({morphTargets:A,skinning:B});u[z]=D}var E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eb,this.renderReverseSided=!0,this.renderSingleSided=!0,this.render=function(b,c,d){if(!1!==E.enabled&&(!1!==E.autoUpdate||!1!==E.needsUpdate)&&0!==b.length){var e=a.context,f=a.state;f.disable(e.BLEND),f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);for(var g,i=0,q=b.length;i<q;i++){var r=b[i],s=r.shadow,t=r&&r.isPointLight;if(void 0!==s){var u=s.camera;if(m.copy(s.mapSize),m.min(n),t){var v=m.x,z=m.y;y[0].set(2*v,z,v,z),y[1].set(0,z,v,z),y[2].set(3*v,z,v,z),y[3].set(v,z,v,z),y[4].set(3*v,0,v,z),y[5].set(v,0,v,z),m.x*=4,m.y*=2}if(null===s.map){var A={minFilter:Gc,magFilter:Gc,format:$c};s.map=new j(m.x,m.y,A),s.map.texture.name=r.name+".shadowMap",u.updateProjectionMatrix()}s.isSpotLightShadow&&s.update(r);var B=s.map,C=s.matrix;p.setFromMatrixPosition(r.matrixWorld),u.position.copy(p),t?(g=6,C.makeTranslation(-p.x,-p.y,-p.z)):(g=1,o.setFromMatrixPosition(r.target.matrixWorld),u.lookAt(o),u.updateMatrixWorld(),C.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),C.multiply(u.projectionMatrix),C.multiply(u.matrixWorldInverse)),a.setRenderTarget(B),a.clear();for(var D=0;D<g;D++){if(t){o.copy(u.position),o.add(w[D]),u.up.copy(x[D]),u.lookAt(o),u.updateMatrixWorld();var F=y[D];f.viewport(F)}l.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse),k.setFromMatrix(l),h(c,d,u,t)}}else console.warn("THREE.WebGLShadowMap:",r,"has no shadow.")}E.needsUpdate=!1}}}function fa(a){function b(b,c){var d=b.array,e=b.dynamic?a.DYNAMIC_DRAW:a.STATIC_DRAW,f=a.createBuffer();a.bindBuffer(c,f),a.bufferData(c,d,e),b.onUploadCallback();var g=a.FLOAT;return d instanceof Float32Array?g=a.FLOAT:d instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):d instanceof Uint16Array?g=a.UNSIGNED_SHORT:d instanceof Int16Array?g=a.SHORT:d instanceof Uint32Array?g=a.UNSIGNED_INT:d instanceof Int32Array?g=a.INT:d instanceof Int8Array?g=a.BYTE:d instanceof Uint8Array&&(g=a.UNSIGNED_BYTE),{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:b.version}}function c(b,c,d){var e=c.array,f=c.updateRange;a.bindBuffer(d,b),!1===c.dynamic?a.bufferData(d,e,a.STATIC_DRAW):-1===f.count?a.bufferSubData(d,0,e):0===f.count?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):(a.bufferSubData(d,f.offset*e.BYTES_PER_ELEMENT,e.subarray(f.offset,f.offset+f.count)),f.count=-1)}function d(a){return a.isInterleavedBufferAttribute&&(a=a.data),g[a.uuid]}function e(b){b.isInterleavedBufferAttribute&&(b=b.data);var c=g[b.uuid];c&&(a.deleteBuffer(c.buffer),delete g[b.uuid])}function f(a,d){a.isInterleavedBufferAttribute&&(a=a.data);var e=g[a.uuid];void 0===e?g[a.uuid]=b(a,d):e.version<a.version&&(c(e.buffer,a,d),e.version=a.version)}var g={};return{get:d,remove:e,update:f}}function ga(a,b,c,d){this._x=a||0,this._y=b||0,this._z=c||0,this._order=d||ga.DefaultOrder}function ha(){this.mask=1}function ia(){function a(){i.setFromEuler(h,!1)}function b(){h.setFromQuaternion(i,void 0,!1)}Object.defineProperty(this,"id",{value:Pf++}),this.uuid=yd.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ia.DefaultUp.clone();var c=new f,h=new ga,i=new e,j=new f(1,1,1);h.onChange(a),i.onChange(b),Object.defineProperties(this,{position:{enumerable:!0,value:c},rotation:{enumerable:!0,value:h},quaternion:{enumerable:!0,value:i},scale:{enumerable:!0,value:j},modelViewMatrix:{value:new d},normalMatrix:{value:new g}}),this.matrix=new d,this.matrixWorld=new d,this.matrixAutoUpdate=ia.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}function ja(){ia.call(this),this.type="Camera",this.matrixWorldInverse=new d,this.projectionMatrix=new d}function ka(a,b,c,d,e,f){ja.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=a,this.right=b,this.top=c,this.bottom=d,this.near=void 0!==e?e:.1,this.far=void 0!==f?f:2e3,this.updateProjectionMatrix()}function la(a,b,c,d,e,g){this.a=a,this.b=b,this.c=c,this.normal=d&&d.isVector3?d:new f,this.vertexNormals=Array.isArray(d)?d:[],this.color=e&&e.isColor?e:new U,this.vertexColors=Array.isArray(e)?e:[],this.materialIndex=void 0!==g?g:0}function ma(){Object.defineProperty(this,"id",{value:Qf+=2}),this.uuid=yd.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}function na(a,b,c){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.uuid=yd.generateUUID(),this.name="",this.array=a,this.itemSize=b,this.count=void 0!==a?a.length/b:0,this.normalized=!0===c,this.dynamic=!1,this.updateRange={offset:0,count:-1},this.onUploadCallback=function(){},this.version=0}function oa(a,b,c){na.call(this,new Int8Array(a),b,c)}function pa(a,b,c){na.call(this,new Uint8Array(a),b,c)}function qa(a,b,c){na.call(this,new Uint8ClampedArray(a),b,c)}function ra(a,b,c){na.call(this,new Int16Array(a),b,c)}function sa(a,b,c){na.call(this,new Uint16Array(a),b,c)}function ta(a,b,c){na.call(this,new Int32Array(a),b,c)}function ua(a,b,c){na.call(this,new Uint32Array(a),b,c)}function va(a,b,c){na.call(this,new Float32Array(a),b,c)}function wa(a,b,c){na.call(this,new Float64Array(a),b,c)}function xa(){this.indices=[],this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}function ya(a){if(0===a.length)return-1/0;for(var b=a[0],c=1,d=a.length;c<d;++c)a[c]>b&&(b=a[c]);return b}function za(){Object.defineProperty(this,"id",{value:Rf+=2}),this.uuid=yd.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0}}function Aa(a,b,c,d,e,f){ma.call(this),this.type="BoxGeometry",this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f},this.fromBufferGeometry(new Ba(a,b,c,d,e,f)),this.mergeVertices()}function Ba(a,b,c,d,e,g){function h(a,b,c,d,e,g,h,p,q,r,s){var t,u,v=g/q,w=h/r,x=g/2,y=h/2,z=p/2,A=q+1,B=r+1,C=0,D=0,E=new f;for(u=0;u<B;u++){var F=u*w-y;for(t=0;t<A;t++){var G=t*v-x;E[a]=G*d,E[b]=F*e,E[c]=z,k.push(E.x,E.y,E.z),E[a]=0,E[b]=0,E[c]=p>0?1:-1,l.push(E.x,E.y,E.z),m.push(t/q),m.push(1-u/r),C+=1}}for(u=0;u<r;u++)for(t=0;t<q;t++){var H=n+t+A*u,I=n+t+A*(u+1),J=n+(t+1)+A*(u+1),K=n+(t+1)+A*u;j.push(H,I,K),j.push(I,J,K),D+=6}i.addGroup(o,D,s),o+=D,n+=C}za.call(this),this.type="BoxBufferGeometry",this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:g};var i=this;a=a||1,b=b||1,c=c||1,d=Math.floor(d)||1,e=Math.floor(e)||1,g=Math.floor(g)||1;var j=[],k=[],l=[],m=[],n=0,o=0;h("z","y","x",-1,-1,c,b,a,g,e,0),h("z","y","x",1,-1,c,b,-a,g,e,1),h("x","z","y",1,1,a,c,b,d,g,2),h("x","z","y",1,-1,a,c,-b,d,g,3),h("x","y","z",1,-1,a,b,c,d,e,4),h("x","y","z",-1,-1,a,b,-c,d,e,5),this.setIndex(j),this.addAttribute("position",new va(k,3)),this.addAttribute("normal",new va(l,3)),this.addAttribute("uv",new va(m,2))}function Ca(a,b,c,d){ma.call(this),this.type="PlaneGeometry",this.parameters={width:a,height:b,widthSegments:c,heightSegments:d},this.fromBufferGeometry(new Da(a,b,c,d)),this.mergeVertices()}function Da(a,b,c,d){za.call(this),this.type="PlaneBufferGeometry",this.parameters={width:a,height:b,widthSegments:c,heightSegments:d},a=a||1,b=b||1;var e,f,g=a/2,h=b/2,i=Math.floor(c)||1,j=Math.floor(d)||1,k=i+1,l=j+1,m=a/i,n=b/j,o=[],p=[],q=[],r=[];for(f=0;f<l;f++){var s=f*n-h;for(e=0;e<k;e++){var t=e*m-g;p.push(t,-s,0),q.push(0,0,1),r.push(e/i),r.push(1-f/j)}}for(f=0;f<j;f++)for(e=0;e<i;e++){var u=e+k*f,v=e+k*(f+1),w=e+1+k*(f+1),x=e+1+k*f;o.push(u,v,x),o.push(v,w,x)}this.setIndex(o),this.addAttribute("position",new va(p,3)),this.addAttribute("normal",new va(q,3)),this.addAttribute("uv",new va(r,2))}function Ea(a){Z.call(this),this.type="MeshBasicMaterial",this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.lights=!1,this.setValues(a)}function Fa(a){Z.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(a))}function Ga(a,b){this.origin=void 0!==a?a:new f,this.direction=void 0!==b?b:new f}function Ha(a,b){this.start=void 0!==a?a:new f,this.end=void 0!==b?b:new f}function Ia(a,b,c){this.a=void 0!==a?a:new f,this.b=void 0!==b?b:new f,this.c=void 0!==c?c:new f}function Ja(a,b){ia.call(this),this.type="Mesh",this.geometry=void 0!==a?a:new za,this.material=void 0!==b?b:new Ea({color:16777215*Math.random()}),this.drawMode=md,this.updateMorphTargets()}function Ka(a,b,c,d){function e(b,d,e,l){var m=d.background;null===m?f(j,k):m&&m.isColor&&(f(m,1),l=!0),(a.autoClear||l)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),m&&m.isCubeTexture?(void 0===i&&(i=new Ja(new Ba(1,1,1),new Fa({uniforms:Nf.cube.uniforms,vertexShader:Nf.cube.vertexShader,fragmentShader:Nf.cube.fragmentShader,side:Hb,depthTest:!0,depthWrite:!1,fog:!1})),i.geometry.removeAttribute("normal"),i.geometry.removeAttribute("uv"),i.onBeforeRender=function(a,b,c){this.matrixWorld.copyPosition(c.matrixWorld)},c.update(i.geometry)),i.material.uniforms.tCube.value=m,b.push(i,i.geometry,i.material,0,null)):m&&m.isTexture&&(void 0===g&&(g=new ka(-1,1,1,-1,0,1),h=new Ja(new Da(2,2),new Ea({depthTest:!1,depthWrite:!1,fog:!1})),c.update(h.geometry)),h.material.map=m,a.renderBufferDirect(g,null,h.geometry,h.material,h,null))}function f(a,c){b.buffers.color.setClear(a.r,a.g,a.b,c,d)}var g,h,i,j=new U(0),k=0;return{getClearColor:function(){return j},setClearColor:function(a,b){j.set(a),k=void 0!==b?b:1,f(j,k)},getClearAlpha:function(){return k},setClearAlpha:function(a){k=a,f(j,k)},render:e}}function La(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.program&&b.program&&a.program!==b.program?a.program.id-b.program.id:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function Ma(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function Na(){function a(){e=0,f.length=0,g.length=0}function b(a,b,c,h,i){var j=d[e];void 0===j?(j={id:a.id,object:a,geometry:b,material:c,program:c.program,renderOrder:a.renderOrder,z:h,group:i},d[e]=j):(j.id=a.id,j.object=a,j.geometry=b,j.material=c,j.program=c.program,j.renderOrder=a.renderOrder,j.z=h,j.group=i),(!0===c.transparent?g:f).push(j),e++}function c(){f.length>1&&f.sort(La),g.length>1&&g.sort(Ma)}var d=[],e=0,f=[],g=[];return{opaque:f,transparent:g,init:a,push:b,sort:c}}function Oa(){function a(a,b){var d=a.id+","+b.id,e=c[d];return void 0===e&&(e=new Na,c[d]=e),e}function b(){c={}}var c={};return{get:a,dispose:b}}function Pa(a,b){return Math.abs(b[1])-Math.abs(a[1])}function Qa(a){function b(b,e,f,g){var h=b.morphTargetInfluences,i=h.length,j=c[e.id];if(void 0===j){j=[];for(var k=0;k<i;k++)j[k]=[k,0];c[e.id]=j}for(var l=f.morphTargets&&e.morphAttributes.position,m=f.morphNormals&&e.morphAttributes.normal,k=0;k<i;k++){var n=j[k];0!==n[1]&&(l&&e.removeAttribute("morphTarget"+k),m&&e.removeAttribute("morphNormal"+k))}for(var k=0;k<i;k++){var n=j[k];n[0]=k,n[1]=h[k]}j.sort(Pa);for(var k=0;k<8;k++){var n=j[k];if(n){var o=n[0],p=n[1];if(p){l&&e.addAttribute("morphTarget"+k,l[o]),m&&e.addAttribute("morphNormal"+k,m[o]),d[k]=p;continue}}d[k]=0}g.getUniforms().setValue(a,"morphTargetInfluences",d)}var c={},d=new Float32Array(8);return{update:b}}function Ra(a,b,c){function d(a){h=a}function e(a){i=a.type,j=a.bytesPerElement}function f(b,d){a.drawElements(h,d,i,b*j),c.calls++,c.vertices+=d,h===a.TRIANGLES?c.faces+=d/3:h===a.POINTS&&(c.points+=d)}function g(d,e,f){var g=b.get("ANGLE_instanced_arrays");if(null===g)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");g.drawElementsInstancedANGLE(h,f,i,e*j,d.maxInstancedCount),c.calls++,c.vertices+=f*d.maxInstancedCount,h===a.TRIANGLES?c.faces+=d.maxInstancedCount*f/3:h===a.POINTS&&(c.points+=d.maxInstancedCount*f)}var h,i,j;this.setMode=d,this.setIndex=e,this.render=f,this.renderInstances=g}function Sa(a,b,c){function d(a){g=a}function e(b,d){a.drawArrays(g,b,d),c.calls++,c.vertices+=d,g===a.TRIANGLES?c.faces+=d/3:g===a.POINTS&&(c.points+=d)}function f(d,e,f){var h=b.get("ANGLE_instanced_arrays");if(null===h)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");var i=d.attributes.position;i.isInterleavedBufferAttribute?(f=i.data.count,h.drawArraysInstancedANGLE(g,0,f,d.maxInstancedCount)):h.drawArraysInstancedANGLE(g,e,f,d.maxInstancedCount),c.calls++,c.vertices+=f*d.maxInstancedCount,g===a.TRIANGLES?c.faces+=d.maxInstancedCount*f/3:g===a.POINTS&&(c.points+=d.maxInstancedCount*f)}var g;this.setMode=d,this.render=e,this.renderInstances=f}function Ta(a,b,c){function d(a){var e=a.target,f=h[e.id];null!==f.index&&b.remove(f.index);for(var g in f.attributes)b.remove(f.attributes[g]);e.removeEventListener("dispose",d),delete h[e.id];var j=i[e.id];j&&(b.remove(j),delete i[e.id]),j=i[f.id],j&&(b.remove(j),delete i[f.id]),c.geometries--}function e(a,b){var e=h[b.id];return e||(b.addEventListener("dispose",d),b.isBufferGeometry?e=b:b.isGeometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=(new za).setFromObject(a)),e=b._bufferGeometry),h[b.id]=e,c.geometries++,e)}function f(c){var d=c.index,e=c.attributes;null!==d&&b.update(d,a.ELEMENT_ARRAY_BUFFER);for(var f in e)b.update(e[f],a.ARRAY_BUFFER);var g=c.morphAttributes;for(var f in g)for(var h=g[f],i=0,j=h.length;i<j;i++)b.update(h[i],a.ARRAY_BUFFER)}function g(c){var d=i[c.id];if(d)return d;var e=[],f=c.index,g=c.attributes;if(null!==f)for(var h=f.array,j=0,k=h.length;j<k;j+=3){var l=h[j+0],m=h[j+1],n=h[j+2];e.push(l,m,m,n,n,l)}else for(var h=g.position.array,j=0,k=h.length/3-1;j<k;j+=3){var l=j+0,m=j+1,n=j+2;e.push(l,m,m,n,n,l)}return d=new(ya(e)>65535?ua:sa)(e,1),b.update(d,a.ELEMENT_ARRAY_BUFFER),i[c.id]=d,d}var h={},i={};return{get:e,update:f,getWireframeAttribute:g}}function Ua(){var a={};return{get:function(b){if(void 0!==a[b.id])return a[b.id];var d;switch(b.type){case"DirectionalLight":d={direction:new f,color:new U,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new c};break;case"SpotLight":d={position:new f,direction:new f,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new c};break;case"PointLight":d={position:new f,color:new U,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new c,shadowCameraNear:1,shadowCameraFar:1e3};break;case"HemisphereLight":d={direction:new f,skyColor:new U,groundColor:new U};break;case"RectAreaLight":d={color:new U,position:new f,halfWidth:new f,halfHeight:new f}}return a[b.id]=d,d}}}function Va(){function a(a,d,f){for(var i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=f.matrixWorldInverse,r=0,s=a.length;r<s;r++){var t=a[r],u=t.color,v=t.intensity,w=t.distance,x=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)i+=u.r*v,j+=u.g*v,k+=u.b*v;else if(t.isDirectionalLight){var y=b.get(t);if(y.color.copy(t.color).multiplyScalar(t.intensity),y.direction.setFromMatrixPosition(t.matrixWorld),e.setFromMatrixPosition(t.target.matrixWorld),y.direction.sub(e),y.direction.transformDirection(q),y.shadow=t.castShadow,t.castShadow){var z=t.shadow;y.shadowBias=z.bias,y.shadowRadius=z.radius,y.shadowMapSize=z.mapSize}c.directionalShadowMap[l]=x,c.directionalShadowMatrix[l]=t.shadow.matrix,c.directional[l]=y,l++}else if(t.isSpotLight){var y=b.get(t);if(y.position.setFromMatrixPosition(t.matrixWorld),y.position.applyMatrix4(q),y.color.copy(u).multiplyScalar(v),y.distance=w,y.direction.setFromMatrixPosition(t.matrixWorld),e.setFromMatrixPosition(t.target.matrixWorld),y.direction.sub(e),y.direction.transformDirection(q),y.coneCos=Math.cos(t.angle),y.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),y.decay=0===t.distance?0:t.decay,y.shadow=t.castShadow,t.castShadow){var z=t.shadow;y.shadowBias=z.bias,y.shadowRadius=z.radius,y.shadowMapSize=z.mapSize}c.spotShadowMap[n]=x,c.spotShadowMatrix[n]=t.shadow.matrix,c.spot[n]=y,n++}else if(t.isRectAreaLight){var y=b.get(t);y.color.copy(u).multiplyScalar(v/(t.width*t.height)),y.position.setFromMatrixPosition(t.matrixWorld),y.position.applyMatrix4(q),h.identity(),g.copy(t.matrixWorld),g.premultiply(q),h.extractRotation(g),y.halfWidth.set(.5*t.width,0,0),y.halfHeight.set(0,.5*t.height,0),y.halfWidth.applyMatrix4(h),y.halfHeight.applyMatrix4(h),c.rectArea[o]=y,o++}else if(t.isPointLight){var y=b.get(t);if(y.position.setFromMatrixPosition(t.matrixWorld),y.position.applyMatrix4(q),y.color.copy(t.color).multiplyScalar(t.intensity),y.distance=t.distance,y.decay=0===t.distance?0:t.decay,y.shadow=t.castShadow,t.castShadow){var z=t.shadow;y.shadowBias=z.bias,y.shadowRadius=z.radius,y.shadowMapSize=z.mapSize,y.shadowCameraNear=z.camera.near,y.shadowCameraFar=z.camera.far}c.pointShadowMap[m]=x,c.pointShadowMatrix[m]=t.shadow.matrix,c.point[m]=y,m++}else if(t.isHemisphereLight){var y=b.get(t);y.direction.setFromMatrixPosition(t.matrixWorld),y.direction.transformDirection(q),y.direction.normalize(),y.skyColor.copy(t.color).multiplyScalar(v),y.groundColor.copy(t.groundColor).multiplyScalar(v),c.hemi[p]=y,p++}}c.ambient[0]=i,c.ambient[1]=j,c.ambient[2]=k,c.directional.length=l,c.spot.length=n,c.rectArea.length=o,c.point.length=m,c.hemi.length=p,c.hash=l+","+m+","+n+","+o+","+p+","+d.length}var b=new Ua,c={hash:"",ambient:[0,0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]},e=new f,g=new d,h=new d;return{setup:a,state:c}}function Wa(a,b){function c(c){var d=b.frame,f=c.geometry,g=a.get(c,f);return e[g.id]!==d&&(f.isGeometry&&g.updateFromObject(c),a.update(g),e[g.id]=d),g}function d(){e={}}var e={};return{update:c,clear:d}}function Xa(a){for(var b=a.split("\n"),c=0;c<b.length;c++)b[c]=c+1+": "+b[c];return b.join("\n")}function Ya(a,b,c){var d=a.createShader(b);return a.shaderSource(d,c),a.compileShader(d),!1===a.getShaderParameter(d,a.COMPILE_STATUS)&&console.error("THREE.WebGLShader: Shader couldn't compile."),""!==a.getShaderInfoLog(d)&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",b===a.VERTEX_SHADER?"vertex":"fragment",a.getShaderInfoLog(d),Xa(c)),d}function Za(a){switch(a){case pd:return["Linear","( value )"];case qd:return["sRGB","( value )"];case sd:return["RGBE","( value )"];case td:return["RGBM","( value, 7.0 )"];case ud:return["RGBM","( value, 16.0 )"];case vd:return["RGBD","( value, 256.0 )"];case rd:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw new Error("unsupported encoding: "+a)}}function $a(a,b){var c=Za(b);return"vec4 "+a+"( vec4 value ) { return "+c[0]+"ToLinear"+c[1]+"; }"}function _a(a,b){var c=Za(b);return"vec4 "+a+"( vec4 value ) { return LinearTo"+c[0]+c[1]+"; }"}function ab(a,b){var c;switch(b){case rc:c="Linear";break;case sc:c="Reinhard";break;case tc:c="Uncharted2";break;case uc:c="OptimizedCineon";break;default:throw new Error("unsupported toneMapping: "+b)}return"vec3 "+a+"( vec3 color ) { return "+c+"ToneMapping( color ); }"}function bb(a,b,c){return a=a||{},[a.derivatives||b.envMapCubeUV||b.bumpMap||b.normalMap||b.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(a.fragDepth||b.logarithmicDepthBuffer)&&c.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",a.drawBuffers&&c.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(a.shaderTextureLOD||b.envMap)&&c.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""].filter(eb).join("\n")}function cb(a){var b=[];for(var c in a){var d=a[c];!1!==d&&b.push("#define "+c+" "+d)}return b.join("\n")}function db(a,b){for(var c={},d=a.getProgramParameter(b,a.ACTIVE_ATTRIBUTES),e=0;e<d;e++){var f=a.getActiveAttrib(b,e),g=f.name;c[g]=a.getAttribLocation(b,g)}return c}function eb(a){return""!==a}function fb(a,b){return a.replace(/NUM_DIR_LIGHTS/g,b.numDirLights).replace(/NUM_SPOT_LIGHTS/g,b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,b.numPointLights).replace(/NUM_HEMI_LIGHTS/g,b.numHemiLights)}function gb(a){function b(a,b){var c=Mf[b];if(void 0===c)throw new Error("Can not resolve #include <"+b+">");return gb(c)}var c=/^[ \t]*#include +<([\w\d.]+)>/gm;return a.replace(c,b)}function hb(a){function b(a,b,c,d){for(var e="",f=parseInt(b);f<parseInt(c);f++)e+=d.replace(/\[ i \]/g,"[ "+f+" ]");return e}var c=/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;return a.replace(c,b)}function ib(a,b,c,d,e,f){var g=a.context,h=d.defines,i=e.vertexShader,j=e.fragmentShader,k="SHADOWMAP_TYPE_BASIC";f.shadowMapType===Eb?k="SHADOWMAP_TYPE_PCF":f.shadowMapType===Fb&&(k="SHADOWMAP_TYPE_PCF_SOFT");var l="ENVMAP_TYPE_CUBE",m="ENVMAP_MODE_REFLECTION",n="ENVMAP_BLENDING_MULTIPLY";if(f.envMap){switch(d.envMap.mapping){case wc:case xc:l="ENVMAP_TYPE_CUBE";break;case Bc:case Cc:l="ENVMAP_TYPE_CUBE_UV";break;case yc:case zc:l="ENVMAP_TYPE_EQUIREC";break;case Ac:l="ENVMAP_TYPE_SPHERE"}switch(d.envMap.mapping){case xc:case zc:m="ENVMAP_MODE_REFRACTION"}switch(d.combine){case nc:n="ENVMAP_BLENDING_MULTIPLY";break;case oc:n="ENVMAP_BLENDING_MIX";break;case pc:n="ENVMAP_BLENDING_ADD"}}var o,p,q=a.gammaFactor>0?a.gammaFactor:1,r=bb(d.extensions,f,b),s=cb(h),t=g.createProgram();d.isRawShaderMaterial?(o=[s].filter(eb).join("\n"),o.length>0&&(o+="\n"),p=[r,s].filter(eb).join("\n"),p.length>0&&(p+="\n")):(o=["precision "+f.precision+" float;","precision "+f.precision+" int;","#define SHADER_NAME "+e.name,s,f.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+q,"#define MAX_BONES "+f.maxBones,f.useFog&&f.fog?"#define USE_FOG":"",f.useFog&&f.fogExp?"#define FOG_EXP2":"",f.map?"#define USE_MAP":"",f.envMap?"#define USE_ENVMAP":"",f.envMap?"#define "+m:"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.bumpMap?"#define USE_BUMPMAP":"",f.normalMap?"#define USE_NORMALMAP":"",f.displacementMap&&f.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.roughnessMap?"#define USE_ROUGHNESSMAP":"",f.metalnessMap?"#define USE_METALNESSMAP":"",f.alphaMap?"#define USE_ALPHAMAP":"",f.vertexColors?"#define USE_COLOR":"",f.flatShading?"#define FLAT_SHADED":"",f.skinning?"#define USE_SKINNING":"",f.useVertexTexture?"#define BONE_TEXTURE":"",f.morphTargets?"#define USE_MORPHTARGETS":"",f.morphNormals&&!1===f.flatShading?"#define USE_MORPHNORMALS":"",f.doubleSided?"#define DOUBLE_SIDED":"",f.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+f.numClippingPlanes,f.shadowMapEnabled?"#define USE_SHADOWMAP":"",f.shadowMapEnabled?"#define "+k:"",f.sizeAttenuation?"#define USE_SIZEATTENUATION":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&b.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(eb).join("\n"),p=[r,"precision "+f.precision+" float;","precision "+f.precision+" int;","#define SHADER_NAME "+e.name,s,f.alphaTest?"#define ALPHATEST "+f.alphaTest:"","#define GAMMA_FACTOR "+q,f.useFog&&f.fog?"#define USE_FOG":"",f.useFog&&f.fogExp?"#define FOG_EXP2":"",f.map?"#define USE_MAP":"",f.envMap?"#define USE_ENVMAP":"",f.envMap?"#define "+l:"",f.envMap?"#define "+m:"",f.envMap?"#define "+n:"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.bumpMap?"#define USE_BUMPMAP":"",f.normalMap?"#define USE_NORMALMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.roughnessMap?"#define USE_ROUGHNESSMAP":"",f.metalnessMap?"#define USE_METALNESSMAP":"",f.alphaMap?"#define USE_ALPHAMAP":"",f.vertexColors?"#define USE_COLOR":"",f.gradientMap?"#define USE_GRADIENTMAP":"",f.flatShading?"#define FLAT_SHADED":"",f.doubleSided?"#define DOUBLE_SIDED":"",f.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+f.numClippingPlanes,"#define UNION_CLIPPING_PLANES "+(f.numClippingPlanes-f.numClipIntersection),f.shadowMapEnabled?"#define USE_SHADOWMAP":"",f.shadowMapEnabled?"#define "+k:"",f.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",f.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&b.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"",f.envMap&&b.get("EXT_shader_texture_lod")?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",f.toneMapping!==qc?"#define TONE_MAPPING":"",f.toneMapping!==qc?Mf.tonemapping_pars_fragment:"",f.toneMapping!==qc?ab("toneMapping",f.toneMapping):"",f.dithering?"#define DITHERING":"",f.outputEncoding||f.mapEncoding||f.envMapEncoding||f.emissiveMapEncoding?Mf.encodings_pars_fragment:"",f.mapEncoding?$a("mapTexelToLinear",f.mapEncoding):"",f.envMapEncoding?$a("envMapTexelToLinear",f.envMapEncoding):"",f.emissiveMapEncoding?$a("emissiveMapTexelToLinear",f.emissiveMapEncoding):"",f.outputEncoding?_a("linearToOutputTexel",f.outputEncoding):"",f.depthPacking?"#define DEPTH_PACKING "+d.depthPacking:"","\n"].filter(eb).join("\n")),i=gb(i),i=fb(i,f),j=gb(j),j=fb(j,f),d.isShaderMaterial||(i=hb(i),j=hb(j));var u=o+i,v=p+j,w=Ya(g,g.VERTEX_SHADER,u),x=Ya(g,g.FRAGMENT_SHADER,v);g.attachShader(t,w),g.attachShader(t,x),void 0!==d.index0AttributeName?g.bindAttribLocation(t,0,d.index0AttributeName):!0===f.morphTargets&&g.bindAttribLocation(t,0,"position"),g.linkProgram(t);var y=g.getProgramInfoLog(t),z=g.getShaderInfoLog(w),A=g.getShaderInfoLog(x),B=!0,C=!0;!1===g.getProgramParameter(t,g.LINK_STATUS)?(B=!1,console.error("THREE.WebGLProgram: shader error: ",g.getError(),"gl.VALIDATE_STATUS",g.getProgramParameter(t,g.VALIDATE_STATUS),"gl.getProgramInfoLog",y,z,A)):""!==y?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",y):""!==z&&""!==A||(C=!1),C&&(this.diagnostics={runnable:B,material:d,programLog:y,vertexShader:{log:z,prefix:o},fragmentShader:{log:A,prefix:p}}),g.deleteShader(w),g.deleteShader(x);var D;this.getUniforms=function(){return void 0===D&&(D=new T(g,t,a)),D};var E;return this.getAttributes=function(){return void 0===E&&(E=db(g,t)),E},this.destroy=function(){g.deleteProgram(t),this.program=void 0},Object.defineProperties(this,{uniforms:{get:function(){return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."),this.getUniforms()}},attributes:{get:function(){return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."),this.getAttributes()}}}),this.id=Sf++,this.code=c,this.usedTimes=1,this.program=t,this.vertexShader=w,this.fragmentShader=x,this}function jb(a,b,c){function d(a){var b=a.skeleton,d=b.bones;if(c.floatVertexTextures)return 1024;var e=c.maxVertexUniforms,f=Math.floor((e-20)/4),g=Math.min(f,d.length);return g<d.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+d.length+" bones. This GPU supports "+g+"."),0):g}function e(a,b){var c;return a?a.isTexture?c=a.encoding:a.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),c=a.texture.encoding):c=pd,c===pd&&b&&(c=rd),c}var f=[],g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow"},h=["precision","supportsVertexTextures","map","mapEncoding","envMap","envMapMode","envMapEncoding","lightMap","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","fog","useFog","fogExp","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering"];this.getParameters=function(b,f,h,i,j,k,l){var m=g[b.type],n=l.isSkinnedMesh?d(l):0,o=c.precision;null!==b.precision&&(o=c.getMaxPrecision(b.precision))!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",o,"instead.");var p=a.getRenderTarget();return{shaderID:m,precision:o,supportsVertexTextures:c.vertexTextures,outputEncoding:e(p?p.texture:null,a.gammaOutput),map:!!b.map,mapEncoding:e(b.map,a.gammaInput),envMap:!!b.envMap,envMapMode:b.envMap&&b.envMap.mapping,envMapEncoding:e(b.envMap,a.gammaInput),envMapCubeUV:!!b.envMap&&(b.envMap.mapping===Bc||b.envMap.mapping===Cc),lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,emissiveMapEncoding:e(b.emissiveMap,a.gammaInput),bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,alphaMap:!!b.alphaMap,gradientMap:!!b.gradientMap,combine:b.combine,vertexColors:b.vertexColors,fog:!!i,useFog:b.fog,fogExp:i&&i.isFogExp2,flatShading:b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:c.logarithmicDepthBuffer,skinning:b.skinning&&n>0,maxBones:n,useVertexTexture:c.floatVertexTextures,morphTargets:b.morphTargets,morphNormals:b.morphNormals,maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:f.directional.length,numPointLights:f.point.length,numSpotLights:f.spot.length,numRectAreaLights:f.rectArea.length,numHemiLights:f.hemi.length,numClippingPlanes:j,numClipIntersection:k,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&l.receiveShadow&&h.length>0,shadowMapType:a.shadowMap.type,toneMapping:a.toneMapping,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,alphaTest:b.alphaTest,doubleSided:b.side===Ib,flipSided:b.side===Hb,depthPacking:void 0!==b.depthPacking&&b.depthPacking}},this.getProgramCode=function(b,c){var d=[];if(c.shaderID?d.push(c.shaderID):(d.push(b.fragmentShader),d.push(b.vertexShader)),void 0!==b.defines)for(var e in b.defines)d.push(e),d.push(b.defines[e]);for(var f=0;f<h.length;f++)d.push(c[h[f]]);return d.push(b.onBeforeCompile.toString()),d.push(a.gammaOutput),d.join()},this.acquireProgram=function(c,d,e,g){for(var h,i=0,j=f.length;i<j;i++){var k=f[i];if(k.code===g){h=k,++h.usedTimes;break}}return void 0===h&&(h=new ib(a,b,g,c,d,e),f.push(h)),h},this.releaseProgram=function(a){if(0==--a.usedTimes){var b=f.indexOf(a);f[b]=f[f.length-1],f.pop(),a.destroy()}},this.programs=f}function kb(a,b,c,d,e,f,g){function h(a,b){if(a.width>b||a.height>b){var c=b/Math.max(a.width,a.height),d=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");d.width=Math.floor(a.width*c),d.height=Math.floor(a.height*c);return d.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,d.width,d.height),console.warn("THREE.WebGLRenderer: image is too big ("+a.width+"x"+a.height+"). Resized to "+d.width+"x"+d.height,a),d}return a}function i(a){return yd.isPowerOfTwo(a.width)&&yd.isPowerOfTwo(a.height)}function j(a){if(a instanceof HTMLImageElement||a instanceof HTMLCanvasElement||a instanceof ImageBitmap){var b=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");b.width=yd.floorPowerOfTwo(a.width),b.height=yd.floorPowerOfTwo(a.height);return b.getContext("2d").drawImage(a,0,0,b.width,b.height),console.warn("THREE.WebGLRenderer: image is not power of two ("+a.width+"x"+a.height+"). Resized to "+b.width+"x"+b.height,a),b}return a}function k(a){return a.wrapS!==Ec||a.wrapT!==Ec||a.minFilter!==Gc&&a.minFilter!==Jc}function l(a,b){return a.generateMipmaps&&b&&a.minFilter!==Gc&&a.minFilter!==Jc}function m(b){return b===Gc||b===Hc||b===Ic?a.NEAREST:a.LINEAR}function n(a){var b=a.target;b.removeEventListener("dispose",n),p(b),b.isVideoTexture&&delete E[b.id],g.textures--}function o(a){var b=a.target;b.removeEventListener("dispose",o),q(b),g.textures--}function p(b){var c=d.get(b);if(b.image&&c.__image__webglTextureCube)a.deleteTexture(c.__image__webglTextureCube);else{if(void 0===c.__webglInit)return;a.deleteTexture(c.__webglTexture)}d.remove(b)}function q(b){var c=d.get(b),e=d.get(b.texture);if(b){if(void 0!==e.__webglTexture&&a.deleteTexture(e.__webglTexture),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLRenderTargetCube)for(var f=0;f<6;f++)a.deleteFramebuffer(c.__webglFramebuffer[f]),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer[f]);else a.deleteFramebuffer(c.__webglFramebuffer),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer);d.remove(b.texture),d.remove(b)}}function r(b,e){var f=d.get(b);if(b.version>0&&f.__version!==b.version){var g=b.image;if(void 0===g)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined",b);else{if(!1!==g.complete)return void v(f,b,e);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete",b)}}c.activeTexture(a.TEXTURE0+e),c.bindTexture(a.TEXTURE_2D,f.__webglTexture)}function s(b,j){var k=d.get(b);if(6===b.image.length)if(b.version>0&&k.__version!==b.version){k.__image__webglTextureCube||(b.addEventListener("dispose",n),k.__image__webglTextureCube=a.createTexture(),g.textures++),c.activeTexture(a.TEXTURE0+j),c.bindTexture(a.TEXTURE_CUBE_MAP,k.__image__webglTextureCube),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY);for(var m=b&&b.isCompressedTexture,o=b.image[0]&&b.image[0].isDataTexture,p=[],q=0;q<6;q++)p[q]=m||o?o?b.image[q].image:b.image[q]:h(b.image[q],e.maxCubemapSize);var r=p[0],s=i(r),t=f.convert(b.format),v=f.convert(b.type);u(a.TEXTURE_CUBE_MAP,b,s);for(var q=0;q<6;q++)if(m)for(var w,x=p[q].mipmaps,y=0,z=x.length;y<z;y++)w=x[y],b.format!==$c&&b.format!==Zc?c.getCompressedTextureFormats().indexOf(t)>-1?c.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+q,y,t,w.width,w.height,0,w.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+q,y,t,w.width,w.height,0,t,v,w.data);else o?c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,t,p[q].width,p[q].height,0,t,v,p[q].data):c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,t,t,v,p[q]);l(b,s)&&a.generateMipmap(a.TEXTURE_CUBE_MAP),k.__version=b.version,b.onUpdate&&b.onUpdate(b)}else c.activeTexture(a.TEXTURE0+j),c.bindTexture(a.TEXTURE_CUBE_MAP,k.__image__webglTextureCube)}function t(b,e){c.activeTexture(a.TEXTURE0+e),c.bindTexture(a.TEXTURE_CUBE_MAP,d.get(b).__webglTexture)}function u(c,g,h){var i;if(h?(a.texParameteri(c,a.TEXTURE_WRAP_S,f.convert(g.wrapS)),a.texParameteri(c,a.TEXTURE_WRAP_T,f.convert(g.wrapT)),a.texParameteri(c,a.TEXTURE_MAG_FILTER,f.convert(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,f.convert(g.minFilter))):(a.texParameteri(c,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(c,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),g.wrapS===Ec&&g.wrapT===Ec||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.",g),a.texParameteri(c,a.TEXTURE_MAG_FILTER,m(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,m(g.minFilter)),g.minFilter!==Gc&&g.minFilter!==Jc&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.",g)),i=b.get("EXT_texture_filter_anisotropic")){if(g.type===Sc&&null===b.get("OES_texture_float_linear"))return;if(g.type===Tc&&null===b.get("OES_texture_half_float_linear"))return;(g.anisotropy>1||d.get(g).__currentAnisotropy)&&(a.texParameterf(c,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,e.getMaxAnisotropy())),d.get(g).__currentAnisotropy=g.anisotropy)}}function v(b,d,m){void 0===b.__webglInit&&(b.__webglInit=!0,d.addEventListener("dispose",n),b.__webglTexture=a.createTexture(),d.isVideoTexture&&(E[d.id]=d),g.textures++),c.activeTexture(a.TEXTURE0+m),c.bindTexture(a.TEXTURE_2D,b.__webglTexture),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,d.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,d.unpackAlignment);var o=h(d.image,e.maxTextureSize);k(d)&&!1===i(o)&&(o=j(o));var p=i(o),q=f.convert(d.format),r=f.convert(d.type);u(a.TEXTURE_2D,d,p);var s,t=d.mipmaps;if(d.isDepthTexture){var v=a.DEPTH_COMPONENT;if(d.type===Sc){if(!D)throw new Error("Float Depth Texture only supported in WebGL2.0");v=a.DEPTH_COMPONENT32F}else D&&(v=a.DEPTH_COMPONENT16);d.format===bd&&v===a.DEPTH_COMPONENT&&d.type!==Pc&&d.type!==Rc&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),d.type=Pc,r=f.convert(d.type)),d.format===cd&&(v=a.DEPTH_STENCIL,d.type!==Xc&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),d.type=Xc,r=f.convert(d.type))),c.texImage2D(a.TEXTURE_2D,0,v,o.width,o.height,0,q,r,null)}else if(d.isDataTexture)if(t.length>0&&p){for(var w=0,x=t.length;w<x;w++)s=t[w],c.texImage2D(a.TEXTURE_2D,w,q,s.width,s.height,0,q,r,s.data);d.generateMipmaps=!1}else c.texImage2D(a.TEXTURE_2D,0,q,o.width,o.height,0,q,r,o.data);else if(d.isCompressedTexture)for(var w=0,x=t.length;w<x;w++)s=t[w],d.format!==$c&&d.format!==Zc?c.getCompressedTextureFormats().indexOf(q)>-1?c.compressedTexImage2D(a.TEXTURE_2D,w,q,s.width,s.height,0,s.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):c.texImage2D(a.TEXTURE_2D,w,q,s.width,s.height,0,q,r,s.data);else if(t.length>0&&p){for(var w=0,x=t.length;w<x;w++)s=t[w],c.texImage2D(a.TEXTURE_2D,w,q,q,r,s);d.generateMipmaps=!1}else c.texImage2D(a.TEXTURE_2D,0,q,q,r,o);l(d,p)&&a.generateMipmap(a.TEXTURE_2D),b.__version=d.version,d.onUpdate&&d.onUpdate(d)}function w(b,e,g,h){var i=f.convert(e.texture.format),j=f.convert(e.texture.type);c.texImage2D(h,0,i,e.width,e.height,0,i,j,null),a.bindFramebuffer(a.FRAMEBUFFER,b),a.framebufferTexture2D(a.FRAMEBUFFER,g,h,d.get(e.texture).__webglTexture,0),a.bindFramebuffer(a.FRAMEBUFFER,null)}function x(b,c){a.bindRenderbuffer(a.RENDERBUFFER,b),c.depthBuffer&&!c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,b)):c.depthBuffer&&c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,b)):a.renderbufferStorage(a.RENDERBUFFER,a.RGBA4,c.width,c.height),a.bindRenderbuffer(a.RENDERBUFFER,null)}function y(b,c){if(c&&c.isWebGLRenderTargetCube)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(a.FRAMEBUFFER,b),!c.depthTexture||!c.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");d.get(c.depthTexture).__webglTexture&&c.depthTexture.image.width===c.width&&c.depthTexture.image.height===c.height||(c.depthTexture.image.width=c.width,c.depthTexture.image.height=c.height,c.depthTexture.needsUpdate=!0),r(c.depthTexture,0);var e=d.get(c.depthTexture).__webglTexture;if(c.depthTexture.format===bd)a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,e,0);else{if(c.depthTexture.format!==cd)throw new Error("Unknown depthTexture format");a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,e,0)}}function z(b){var c=d.get(b),e=!0===b.isWebGLRenderTargetCube;if(b.depthTexture){if(e)throw new Error("target.depthTexture not supported in Cube render targets");y(c.__webglFramebuffer,b)}else if(e){c.__webglDepthbuffer=[];for(var f=0;f<6;f++)a.bindFramebuffer(a.FRAMEBUFFER,c.__webglFramebuffer[f]),c.__webglDepthbuffer[f]=a.createRenderbuffer(),x(c.__webglDepthbuffer[f],b)}else a.bindFramebuffer(a.FRAMEBUFFER,c.__webglFramebuffer),c.__webglDepthbuffer=a.createRenderbuffer(),x(c.__webglDepthbuffer,b);a.bindFramebuffer(a.FRAMEBUFFER,null)}function A(b){var e=d.get(b),f=d.get(b.texture);b.addEventListener("dispose",o),f.__webglTexture=a.createTexture(),g.textures++;var h=!0===b.isWebGLRenderTargetCube,j=i(b);if(h){e.__webglFramebuffer=[];for(var k=0;k<6;k++)e.__webglFramebuffer[k]=a.createFramebuffer()}else e.__webglFramebuffer=a.createFramebuffer();if(h){c.bindTexture(a.TEXTURE_CUBE_MAP,f.__webglTexture),u(a.TEXTURE_CUBE_MAP,b.texture,j);for(var k=0;k<6;k++)w(e.__webglFramebuffer[k],b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+k);l(b.texture,j)&&a.generateMipmap(a.TEXTURE_CUBE_MAP),c.bindTexture(a.TEXTURE_CUBE_MAP,null)}else c.bindTexture(a.TEXTURE_2D,f.__webglTexture),u(a.TEXTURE_2D,b.texture,j),w(e.__webglFramebuffer,b,a.COLOR_ATTACHMENT0,a.TEXTURE_2D),l(b.texture,j)&&a.generateMipmap(a.TEXTURE_2D),c.bindTexture(a.TEXTURE_2D,null);b.depthBuffer&&z(b)}function B(b){var e=b.texture;if(l(e,i(b))){var f=b.isWebGLRenderTargetCube?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,g=d.get(e).__webglTexture;c.bindTexture(f,g),a.generateMipmap(f),c.bindTexture(f,null)}}function C(){for(var a in E)E[a].update()}var D="undefined"!=typeof WebGL2RenderingContext&&a instanceof window.WebGL2RenderingContext,E={};this.setTexture2D=r,this.setTextureCube=s,this.setTextureCubeDynamic=t,this.setupRenderTarget=A,this.updateRenderTargetMipmap=B,this.updateVideoTextures=C}function lb(){function a(a){var b=a.uuid,c=d[b];return void 0===c&&(c={},d[b]=c),c}function b(a){delete d[a.uuid]}function c(){d={}}var d={};return{get:a,remove:b,clear:c}}function mb(a,b,c){function d(){var b=!1,c=new i,d=null,e=new i(0,0,0,0);return{setMask:function(c){d===c||b||(a.colorMask(c,c,c,c),d=c)},setLocked:function(a){b=a},setClear:function(b,d,f,g,h){!0===h&&(b*=g,d*=g,f*=g),c.set(b,d,f,g),!1===e.equals(c)&&(a.clearColor(b,d,f,g),e.copy(c))},reset:function(){b=!1,d=null,e.set(-1,0,0,0)}}}function e(){var b=!1,c=null,d=null,e=null;return{setTest:function(b){b?m(a.DEPTH_TEST):n(a.DEPTH_TEST)},setMask:function(d){c===d||b||(a.depthMask(d),c=d)},setFunc:function(b){if(d!==b){if(b)switch(b){case fc:a.depthFunc(a.NEVER);break;case gc:a.depthFunc(a.ALWAYS);break;case hc:a.depthFunc(a.LESS);break;case ic:a.depthFunc(a.LEQUAL);break;case jc:a.depthFunc(a.EQUAL);break;case kc:a.depthFunc(a.GEQUAL);break;case lc:a.depthFunc(a.GREATER);break;case mc:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}else a.depthFunc(a.LEQUAL);d=b}},setLocked:function(a){b=a},setClear:function(b){e!==b&&(a.clearDepth(b),e=b)},reset:function(){b=!1,c=null,d=null,e=null}}}function f(){var b=!1,c=null,d=null,e=null,f=null,g=null,h=null,i=null,j=null;return{setTest:function(b){b?m(a.STENCIL_TEST):n(a.STENCIL_TEST)},setMask:function(d){c===d||b||(a.stencilMask(d),c=d)},setFunc:function(b,c,g){d===b&&e===c&&f===g||(a.stencilFunc(b,c,g),d=b,e=c,f=g)},setOp:function(b,c,d){g===b&&h===c&&i===d||(a.stencilOp(b,c,d),g=b,h=c,i=d)},setLocked:function(a){b=a},setClear:function(b){j!==b&&(a.clearStencil(b),j=b)},reset:function(){b=!1,c=null,d=null,e=null,f=null,g=null,h=null,i=null,j=null}}}function g(b,c,d){var e=new Uint8Array(4),f=a.createTexture();a.bindTexture(b,f),a.texParameteri(b,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(b,a.TEXTURE_MAG_FILTER,a.NEAREST);for(var g=0;g<d;g++)a.texImage2D(c+g,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,e);return f}function h(){for(var a=0,b=I.length;a<b;a++)I[a]=0}function j(c){if(I[c]=1,0===J[c]&&(a.enableVertexAttribArray(c),J[c]=1),0!==K[c]){b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c,0),K[c]=0}}function k(c,d){if(I[c]=1,0===J[c]&&(a.enableVertexAttribArray(c),J[c]=1),K[c]!==d){b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c,d),K[c]=d}}function l(){for(var b=0,c=J.length;b!==c;++b)J[b]!==I[b]&&(a.disableVertexAttribArray(b),J[b]=0)}function m(b){!0!==L[b]&&(a.enable(b),L[b]=!0)}function n(b){!1!==L[b]&&(a.disable(b),L[b]=!1)}function o(){if(null===M&&(M=[],b.get("WEBGL_compressed_texture_pvrtc")||b.get("WEBGL_compressed_texture_s3tc")||b.get("WEBGL_compressed_texture_etc1")))for(var c=a.getParameter(a.COMPRESSED_TEXTURE_FORMATS),d=0;d<c.length;d++)M.push(c[d]);return M}function p(b){return N!==b&&(a.useProgram(b),N=b,!0)}function q(b,d,e,f,g,h,i,j){if(b!==Lb?m(a.BLEND):n(a.BLEND),b!==Qb){if(b!==O||j!==V)switch(b){case Nb:j?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE,a.ONE,a.ONE)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.SRC_ALPHA,a.ONE));break;case Ob:j?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ONE_MINUS_SRC_ALPHA)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.ONE_MINUS_SRC_COLOR));break;case Pb:j?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.SRC_COLOR));break;default:j?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)):(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA))}P=null,Q=null,R=null,S=null,T=null,U=null}else g=g||d,h=h||e,i=i||f,d===P&&g===S||(a.blendEquationSeparate(c.convert(d),c.convert(g)),P=d,S=g),e===Q&&f===R&&h===T&&i===U||(a.blendFuncSeparate(c.convert(e),c.convert(f),c.convert(h),c.convert(i)),Q=e,R=f,T=h,U=i);O=b,V=j}function r(b,c){b.side===Ib?n(a.CULL_FACE):m(a.CULL_FACE);var d=b.side===Hb;c&&(d=!d),s(d),!0===b.transparent?q(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.premultipliedAlpha):q(Lb),F.setFunc(b.depthFunc),F.setTest(b.depthTest),F.setMask(b.depthWrite),E.setMask(b.colorWrite),v(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits)}function s(b){W!==b&&(b?a.frontFace(a.CW):a.frontFace(a.CCW),W=b)}function t(b){b!==Ab?(m(a.CULL_FACE),b!==X&&(b===Bb?a.cullFace(a.BACK):b===Cb?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):n(a.CULL_FACE),X=b}function u(b){b!==Y&&(ba&&a.lineWidth(b),Y=b)}function v(b,c,d){b?(m(a.POLYGON_OFFSET_FILL),Z===c&&$===d||(a.polygonOffset(c,d),Z=c,$=d)):n(a.POLYGON_OFFSET_FILL)}function w(b){b?m(a.SCISSOR_TEST):n(a.SCISSOR_TEST)}function x(b){void 0===b&&(b=a.TEXTURE0+_-1),ca!==b&&(a.activeTexture(b),ca=b)}function y(b,c){null===ca&&x();var d=da[ca];void 0===d&&(d={type:void 0,texture:void 0},da[ca]=d),d.type===b&&d.texture===c||(a.bindTexture(b,c||ga[b]),d.type=b,d.texture=c)}function z(){try{a.compressedTexImage2D.apply(a,arguments)}catch(a){console.error("THREE.WebGLState:",a)}}function A(){try{a.texImage2D.apply(a,arguments)}catch(a){console.error("THREE.WebGLState:",a)}}function B(b){!1===ea.equals(b)&&(a.scissor(b.x,b.y,b.z,b.w),ea.copy(b))}function C(b){!1===fa.equals(b)&&(a.viewport(b.x,b.y,b.z,b.w),fa.copy(b))}function D(){for(var b=0;b<J.length;b++)1===J[b]&&(a.disableVertexAttribArray(b),J[b]=0);L={},M=null,ca=null,da={},N=null,O=null,W=null,X=null,E.reset(),F.reset(),G.reset()}var E=new d,F=new e,G=new f,H=a.getParameter(a.MAX_VERTEX_ATTRIBS),I=new Uint8Array(H),J=new Uint8Array(H),K=new Uint8Array(H),L={},M=null,N=null,O=null,P=null,Q=null,R=null,S=null,T=null,U=null,V=!1,W=null,X=null,Y=null,Z=null,$=null,_=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),aa=parseFloat(/^WebGL\ ([0-9])/.exec(a.getParameter(a.VERSION))[1]),ba=parseFloat(aa)>=1,ca=null,da={},ea=new i,fa=new i,ga={};return ga[a.TEXTURE_2D]=g(a.TEXTURE_2D,a.TEXTURE_2D,1),ga[a.TEXTURE_CUBE_MAP]=g(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),E.setClear(0,0,0,1),F.setClear(1),G.setClear(0),m(a.DEPTH_TEST),F.setFunc(ic),s(!1),t(Bb),m(a.CULL_FACE),m(a.BLEND),q(Mb),{buffers:{color:E,depth:F,stencil:G},initAttributes:h,enableAttribute:j,enableAttributeAndDivisor:k,disableUnusedAttributes:l,enable:m,disable:n,getCompressedTextureFormats:o,useProgram:p,setBlending:q,setMaterial:r,setFlipSided:s,setCullFace:t,setLineWidth:u,setPolygonOffset:v,setScissorTest:w,activeTexture:x,bindTexture:y,compressedTexImage2D:z,texImage2D:A,scissor:B,viewport:C,reset:D}}function nb(a,b,c){function d(){if(void 0!==f)return f;var c=b.get("EXT_texture_filter_anisotropic");return f=null!==c?a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}function e(b){if("highp"===b){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return"mediump"===b&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}var f,g=void 0!==c.precision?c.precision:"highp",h=e(g);h!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",h,"instead."),g=h);var i=!0===c.logarithmicDepthBuffer,j=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),k=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),l=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),n=a.getParameter(a.MAX_VERTEX_ATTRIBS),o=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),p=a.getParameter(a.MAX_VARYING_VECTORS),q=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),r=k>0,s=!!b.get("OES_texture_float");return{getMaxAnisotropy:d,getMaxPrecision:e,precision:g,logarithmicDepthBuffer:i,maxTextures:j,maxVertexTextures:k,maxTextureSize:l,maxCubemapSize:m,maxAttributes:n,maxVertexUniforms:o,maxVaryings:p,maxFragmentUniforms:q,vertexTextures:r,floatFragmentTextures:s,floatVertexTextures:r&&s}}function ob(a,b,c,d){ja.call(this),this.type="PerspectiveCamera",this.fov=void 0!==a?a:50,this.zoom=1,this.near=void 0!==c?c:.1,this.far=void 0!==d?d:2e3,this.focus=10,this.aspect=void 0!==b?b:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}function pb(a){ob.call(this),this.cameras=a||[]}function qb(a){function b(){if(null!==e&&e.isPresenting){var b=e.getEyeParameters("left"),d=b.renderWidth,f=b.renderHeight;n=a.getPixelRatio(),m=a.getSize(),a.setDrawingBufferSize(2*d,f,1)}else c.enabled&&a.setDrawingBufferSize(m.width,m.height,n)}var c=this,e=null,f=null,g=null;"undefined"!=typeof window&&"VRFrameData"in window&&(f=new window.VRFrameData);var h=new d,j=new ob;j.bounds=new i(0,0,.5,1),j.layers.enable(1);var k=new ob;k.bounds=new i(.5,0,.5,1),k.layers.enable(2);var l=new pb([j,k]);l.layers.enable(1),l.layers.enable(2);var m,n;"undefined"!=typeof window&&window.addEventListener("vrdisplaypresentchange",b,!1),this.enabled=!1,this.getDevice=function(){return e},this.setDevice=function(a){void 0!==a&&(e=a)},this.setPoseTarget=function(a){void 0!==a&&(g=a)},this.getCamera=function(a){if(null===e)return a;e.depthNear=a.near,e.depthFar=a.far,e.getFrameData(f);var b=f.pose,c=null!==g?g:a;if(null!==b.position?c.position.fromArray(b.position):c.position.set(0,0,0),null!==b.orientation&&c.quaternion.fromArray(b.orientation),c.updateMatrixWorld(),!1===e.isPresenting)return a;j.near=a.near,k.near=a.near,j.far=a.far,k.far=a.far,l.matrixWorld.copy(a.matrixWorld),l.matrixWorldInverse.copy(a.matrixWorldInverse),j.matrixWorldInverse.fromArray(f.leftViewMatrix),k.matrixWorldInverse.fromArray(f.rightViewMatrix);var d=c.parent;null!==d&&(h.getInverse(d.matrixWorld),j.matrixWorldInverse.multiply(h),k.matrixWorldInverse.multiply(h)),j.matrixWorld.getInverse(j.matrixWorldInverse),k.matrixWorld.getInverse(k.matrixWorldInverse),j.projectionMatrix.fromArray(f.leftProjectionMatrix),k.projectionMatrix.fromArray(f.rightProjectionMatrix),l.projectionMatrix.copy(j.projectionMatrix);var i=e.getLayers();if(i.length){var m=i[0];null!==m.leftBounds&&4===m.leftBounds.length&&j.bounds.fromArray(m.leftBounds),null!==m.rightBounds&&4===m.rightBounds.length&&k.bounds.fromArray(m.rightBounds)}return l},this.submitFrame=function(){e&&e.isPresenting&&e.submitFrame()},this.dispose=function(){"undefined"!=typeof window&&window.removeEventListener("vrdisplaypresentchange",b)}}function rb(a){var b={};return{get:function(c){if(void 0!==b[c])return b[c];var d;switch(c){case"WEBGL_depth_texture":d=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;case"WEBGL_compressed_texture_etc1":d=a.getExtension("WEBGL_compressed_texture_etc1");break;default:d=a.getExtension(c)}return null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported."),b[c]=d,d}}}function sb(){function a(){k.value!==d&&(k.value=d,k.needsUpdate=e>0),c.numPlanes=e,c.numIntersection=0}function b(a,b,d,e){var f=null!==a?a.length:0,g=null;if(0!==f){if(g=k.value,!0!==e||null===g){var h=d+4*f,l=b.matrixWorldInverse;j.getNormalMatrix(l),(null===g||g.length<h)&&(g=new Float32Array(h));for(var m=0,n=d;m!==f;++m,n+=4)i.copy(a[m]).applyMatrix4(l,j),i.normal.toArray(g,n),g[n+3]=i.constant}k.value=g,k.needsUpdate=!0}return c.numPlanes=f,g}var c=this,d=null,e=0,f=!1,h=!1,i=new ca,j=new g,k={value:null,needsUpdate:!1};this.uniform=k,this.numPlanes=0,this.numIntersection=0,this.init=function(a,c,g){var h=0!==a.length||c||0!==e||f;return f=c,d=b(a,g,0),e=a.length,h},this.beginShadows=function(){h=!0,b(null)},this.endShadows=function(){h=!1,a()},this.setState=function(c,g,i,j,l,m){if(!f||null===c||0===c.length||h&&!i)h?b(null):a();else{var n=h?0:e,o=4*n,p=l.clippingState||null;k.value=p,p=b(c,j,o,m);for(var q=0;q!==o;++q)p[q]=d[q];l.clippingState=p,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=n}}}function tb(a,b){function c(c){var d;if(c===Dc)return a.REPEAT;if(c===Ec)return a.CLAMP_TO_EDGE;if(c===Fc)return a.MIRRORED_REPEAT;if(c===Gc)return a.NEAREST;if(c===Hc)return a.NEAREST_MIPMAP_NEAREST;if(c===Ic)return a.NEAREST_MIPMAP_LINEAR;if(c===Jc)return a.LINEAR;if(c===Kc)return a.LINEAR_MIPMAP_NEAREST;if(c===Lc)return a.LINEAR_MIPMAP_LINEAR;if(c===Mc)return a.UNSIGNED_BYTE;if(c===Uc)return a.UNSIGNED_SHORT_4_4_4_4;if(c===Vc)return a.UNSIGNED_SHORT_5_5_5_1;if(c===Wc)return a.UNSIGNED_SHORT_5_6_5;if(c===Nc)return a.BYTE;if(c===Oc)return a.SHORT;if(c===Pc)return a.UNSIGNED_SHORT;if(c===Qc)return a.INT;if(c===Rc)return a.UNSIGNED_INT;if(c===Sc)return a.FLOAT;if(c===Tc&&null!==(d=b.get("OES_texture_half_float")))return d.HALF_FLOAT_OES;if(c===Yc)return a.ALPHA;if(c===Zc)return a.RGB;if(c===$c)return a.RGBA;if(c===_c)return a.LUMINANCE;if(c===ad)return a.LUMINANCE_ALPHA;if(c===bd)return a.DEPTH_COMPONENT;if(c===cd)return a.DEPTH_STENCIL;if(c===Rb)return a.FUNC_ADD;if(c===Sb)return a.FUNC_SUBTRACT;if(c===Tb)return a.FUNC_REVERSE_SUBTRACT;if(c===Wb)return a.ZERO;if(c===Xb)return a.ONE;if(c===Yb)return a.SRC_COLOR;if(c===Zb)return a.ONE_MINUS_SRC_COLOR;if(c===$b)return a.SRC_ALPHA;if(c===_b)return a.ONE_MINUS_SRC_ALPHA;if(c===ac)return a.DST_ALPHA;if(c===bc)return a.ONE_MINUS_DST_ALPHA;if(c===cc)return a.DST_COLOR;if(c===dc)return a.ONE_MINUS_DST_COLOR;if(c===ec)return a.SRC_ALPHA_SATURATE;if((c===dd||c===ed||c===fd||c===gd)&&null!==(d=b.get("WEBGL_compressed_texture_s3tc"))){if(c===dd)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(c===ed)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(c===fd)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(c===gd)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}if((c===hd||c===id||c===jd||c===kd)&&null!==(d=b.get("WEBGL_compressed_texture_pvrtc"))){if(c===hd)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(c===id)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(c===jd)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(c===kd)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(c===ld&&null!==(d=b.get("WEBGL_compressed_texture_etc1")))return d.COMPRESSED_RGB_ETC1_WEBGL;if((c===Ub||c===Vb)&&null!==(d=b.get("EXT_blend_minmax"))){if(c===Ub)return d.MIN_EXT;if(c===Vb)return d.MAX_EXT}return c===Xc&&null!==(d=b.get("WEBGL_depth_texture"))?d.UNSIGNED_INT_24_8_WEBGL:0}return{convert:c}}function ub(a){function b(){return null===ba?qa:1}function c(){Ea=new rb(Ca),Ea.get("WEBGL_depth_texture"),Ea.get("OES_texture_float"),Ea.get("OES_texture_float_linear"),Ea.get("OES_texture_half_float"),Ea.get("OES_texture_half_float_linear"),Ea.get("OES_standard_derivatives"),Ea.get("OES_element_index_uint"),Ea.get("ANGLE_instanced_arrays"),bb=new tb(Ca,Ea),Fa=new nb(Ca,Ea,a),Ga=new mb(Ca,Ea,bb),Ga.scissor(la.copy(sa).multiplyScalar(qa)),Ga.viewport(ka.copy(ra).multiplyScalar(qa)),Ha=new lb,Ia=new kb(Ca,Ea,Ga,Ha,Fa,bb,Aa),Ja=new fa(Ca),La=new Ta(Ca,Ja,Aa),Ma=new Wa(La,Ba),Ya=new Qa(Ca),Pa=new jb(_,Ea,Fa),Na=new Va,Ua=new Oa,Xa=new Ka(_,Ga,La,Q),Za=new Sa(Ca,Ea,Ba),$a=new Ra(Ca,Ea,Ba),_a=new W(_,Ca,Ga,Ia,Fa),ab=new Y(_,Ca,Ga,Ia,Fa),_.info.programs=Pa.programs,_.context=Ca,_.capabilities=Fa,_.extensions=Ea,_.properties=Ha,_.renderLists=Ua,_.state=Ga}function e(a){a.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),aa=!0}function g(){console.log("THREE.WebGLRenderer: Context Restored."),aa=!1,c()}function h(a){var b=a.target;b.removeEventListener("dispose",h),j(b)}function j(a){l(a),Ha.remove(a)}function l(a){var b=Ha.get(a).program;a.program=void 0,void 0!==b&&Pa.releaseProgram(b)}function m(a,b,c){a.render(function(a){_.renderBufferImmediate(a,b,c)})}function n(a,b,c,d){if(c&&c.isInstancedBufferGeometry&&null===Ea.get("ANGLE_instanced_arrays"))return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");void 0===d&&(d=0),Ga.initAttributes();var e=c.attributes,f=b.getAttributes(),g=a.defaultAttributeValues;for(var h in f){var i=f[h];if(i>=0){var j=e[h];if(void 0!==j){var k=j.normalized,l=j.itemSize,m=Ja.get(j);if(void 0===m)continue;var n=m.buffer,o=m.type,p=m.bytesPerElement;if(j.isInterleavedBufferAttribute){var q=j.data,r=q.stride,s=j.offset;q&&q.isInstancedInterleavedBuffer?(Ga.enableAttributeAndDivisor(i,q.meshPerAttribute),void 0===c.maxInstancedCount&&(c.maxInstancedCount=q.meshPerAttribute*q.count)):Ga.enableAttribute(i),Ca.bindBuffer(Ca.ARRAY_BUFFER,n),Ca.vertexAttribPointer(i,l,o,k,r*p,(d*r+s)*p)}else j.isInstancedBufferAttribute?(Ga.enableAttributeAndDivisor(i,j.meshPerAttribute),void 0===c.maxInstancedCount&&(c.maxInstancedCount=j.meshPerAttribute*j.count)):Ga.enableAttribute(i),Ca.bindBuffer(Ca.ARRAY_BUFFER,n),Ca.vertexAttribPointer(i,l,o,k,0,d*l*p)}else if(void 0!==g){var t=g[h];if(void 0!==t)switch(t.length){case 2:Ca.vertexAttrib2fv(i,t);break;case 3:Ca.vertexAttrib3fv(i,t);break;case 4:Ca.vertexAttrib4fv(i,t);break;default:Ca.vertexAttrib1fv(i,t)}}}}Ga.disableUnusedAttributes()}function o(){if(!eb){var a=cb.getDevice();a&&a.isPresenting?a.requestAnimationFrame(p):window.requestAnimationFrame(p),eb=!0}}function p(a){null!==fb&&fb(a);var b=cb.getDevice();b&&b.isPresenting?b.requestAnimationFrame(p):window.requestAnimationFrame(p)}function q(a,b,c){if(!1!==a.visible){if(a.layers.test(b.layers))if(a.isLight)U.push(a),a.castShadow&&V.push(a);else if(a.isSprite)a.frustumCulled&&!ua.intersectsSprite(a)||Z.push(a);else if(a.isLensFlare)$.push(a);else if(a.isImmediateRenderObject)c&&za.setFromMatrixPosition(a.matrixWorld).applyMatrix4(ya),X.push(a,null,a.material,za.z,null);else if((a.isMesh||a.isLine||a.isPoints)&&(a.isSkinnedMesh&&a.skeleton.update(),!a.frustumCulled||ua.intersectsObject(a))){c&&za.setFromMatrixPosition(a.matrixWorld).applyMatrix4(ya);var d=Ma.update(a),e=a.material;if(Array.isArray(e))for(var f=d.groups,g=0,h=f.length;g<h;g++){var i=f[g],j=e[i.materialIndex];j&&j.visible&&X.push(a,d,j,za.z,i)}else e.visible&&X.push(a,d,e,za.z,null)}for(var k=a.children,g=0,h=k.length;g<h;g++)q(k[g],b,c)}}function r(a,b,c,d){for(var e=0,f=a.length;e<f;e++){var g=a[e],h=g.object,i=g.geometry,j=void 0===d?g.material:d,k=g.group;if(c.isArrayCamera){ja=c;for(var l=c.cameras,m=0,n=l.length;m<n;m++){var o=l[m];if(h.layers.test(o.layers)){var p=o.bounds,q=p.x*oa,r=p.y*pa,t=p.z*oa,u=p.w*pa;Ga.viewport(ka.set(q,r,t,u).multiplyScalar(qa)),s(h,b,o,i,j,k)}}}else ja=null,s(h,b,c,i,j,k)}}function s(a,b,c,d,e,f){if(a.onBeforeRender(_,b,c,d,e,f),a.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,a.matrixWorld),a.normalMatrix.getNormalMatrix(a.modelViewMatrix),a.isImmediateRenderObject){var g=a.isMesh&&a.matrixWorld.determinant()<0;Ga.setMaterial(e,g);var h=u(c,b.fog,e,a);ha="",m(a,h,e)}else _.renderBufferDirect(c,b.fog,d,e,a,f);a.onAfterRender(_,b,c,d,e,f)}function t(a,b,c){var d=Ha.get(a),e=Pa.getParameters(a,Na.state,V,b,va.numPlanes,va.numIntersection,c),f=Pa.getProgramCode(a,e),g=d.program,i=!0;if(void 0===g)a.addEventListener("dispose",h);else if(g.code!==f)l(a);else{if(void 0!==e.shaderID)return;i=!1}if(i){if(e.shaderID){var j=Nf[e.shaderID];d.shader={name:a.type,uniforms:Jd.clone(j.uniforms),vertexShader:j.vertexShader,fragmentShader:j.fragmentShader}}else d.shader={name:a.type,uniforms:a.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader};a.onBeforeCompile(d.shader),g=Pa.acquireProgram(a,d.shader,e,f),d.program=g,a.program=g}var k=g.getAttributes();if(a.morphTargets){a.numSupportedMorphTargets=0;for(var m=0;m<_.maxMorphTargets;m++)k["morphTarget"+m]>=0&&a.numSupportedMorphTargets++}if(a.morphNormals){a.numSupportedMorphNormals=0;for(var m=0;m<_.maxMorphNormals;m++)k["morphNormal"+m]>=0&&a.numSupportedMorphNormals++}var n=d.shader.uniforms;(a.isShaderMaterial||a.isRawShaderMaterial)&&!0!==a.clipping||(d.numClippingPlanes=va.numPlanes,d.numIntersection=va.numIntersection,n.clippingPlanes=va.uniform),d.fog=b,d.lightsHash=Na.state.hash,a.lights&&(n.ambientLightColor.value=Na.state.ambient,n.directionalLights.value=Na.state.directional,n.spotLights.value=Na.state.spot,n.rectAreaLights.value=Na.state.rectArea,n.pointLights.value=Na.state.point,n.hemisphereLights.value=Na.state.hemi,n.directionalShadowMap.value=Na.state.directionalShadowMap,n.directionalShadowMatrix.value=Na.state.directionalShadowMatrix,n.spotShadowMap.value=Na.state.spotShadowMap,n.spotShadowMatrix.value=Na.state.spotShadowMatrix,n.pointShadowMap.value=Na.state.pointShadowMap,n.pointShadowMatrix.value=Na.state.pointShadowMatrix);var o=d.program.getUniforms(),p=T.seqWithValue(o.seq,n);d.uniformsList=p}function u(a,b,c,d){na=0;var e=Ha.get(c);if(wa&&(xa||a!==ia)){var f=a===ia&&c.id===ga;va.setState(c.clippingPlanes,c.clipIntersection,c.clipShadows,a,e,f)}!1===c.needsUpdate&&(void 0===e.program?c.needsUpdate=!0:c.fog&&e.fog!==b?c.needsUpdate=!0:c.lights&&e.lightsHash!==Na.state.hash?c.needsUpdate=!0:void 0===e.numClippingPlanes||e.numClippingPlanes===va.numPlanes&&e.numIntersection===va.numIntersection||(c.needsUpdate=!0)),c.needsUpdate&&(t(c,b,d),c.needsUpdate=!1);var g=!1,h=!1,i=!1,j=e.program,l=j.getUniforms(),m=e.shader.uniforms;if(Ga.useProgram(j.program)&&(g=!0,h=!0,i=!0),c.id!==ga&&(ga=c.id,h=!0),g||a!==ia){if(l.setValue(Ca,"projectionMatrix",a.projectionMatrix),Fa.logarithmicDepthBuffer&&l.setValue(Ca,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2)),ia!==(ja||a)&&(ia=ja||a,h=!0,i=!0),c.isShaderMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.envMap){var n=l.map.cameraPosition;void 0!==n&&n.setValue(Ca,za.setFromMatrixPosition(a.matrixWorld))}(c.isMeshPhongMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial||c.skinning)&&l.setValue(Ca,"viewMatrix",a.matrixWorldInverse)}if(c.skinning){l.setOptional(Ca,d,"bindMatrix"),l.setOptional(Ca,d,"bindMatrixInverse");var o=d.skeleton;if(o){var p=o.bones;if(Fa.floatVertexTextures){if(void 0===o.boneTexture){var q=Math.sqrt(4*p.length);q=yd.ceilPowerOfTwo(q),q=Math.max(q,4);var r=new Float32Array(q*q*4);r.set(o.boneMatrices);var s=new k(r,q,q,$c,Sc);o.boneMatrices=r,o.boneTexture=s,o.boneTextureSize=q}l.setValue(Ca,"boneTexture",o.boneTexture),l.setValue(Ca,"boneTextureSize",o.boneTextureSize)}else l.setOptional(Ca,o,"boneMatrices")}}return h&&(l.setValue(Ca,"toneMappingExposure",_.toneMappingExposure),l.setValue(Ca,"toneMappingWhitePoint",_.toneMappingWhitePoint),c.lights&&I(m,i),b&&c.fog&&z(m,b),c.isMeshBasicMaterial?v(m,c):c.isMeshLambertMaterial?(v(m,c),A(m,c)):c.isMeshPhongMaterial?(v(m,c),c.isMeshToonMaterial?C(m,c):B(m,c)):c.isMeshStandardMaterial?(v(m,c),c.isMeshPhysicalMaterial?E(m,c):D(m,c)):c.isMeshDepthMaterial?(v(m,c),F(m,c)):c.isMeshDistanceMaterial?(v(m,c),G(m,c)):c.isMeshNormalMaterial?(v(m,c),H(m,c)):c.isLineBasicMaterial?(w(m,c),c.isLineDashedMaterial&&x(m,c)):c.isPointsMaterial?y(m,c):c.isShadowMaterial&&(m.color.value=c.color,m.opacity.value=c.opacity),void 0!==m.ltcMat&&(m.ltcMat.value=Id.LTC_MAT_TEXTURE),void 0!==m.ltcMag&&(m.ltcMag.value=Id.LTC_MAG_TEXTURE),T.upload(Ca,e.uniformsList,m,_)),l.setValue(Ca,"modelViewMatrix",d.modelViewMatrix),l.setValue(Ca,"normalMatrix",d.normalMatrix),l.setValue(Ca,"modelMatrix",d.matrixWorld),j}function v(a,b){a.opacity.value=b.opacity,b.color&&(a.diffuse.value=b.color),b.emissive&&a.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(a.map.value=b.map),b.alphaMap&&(a.alphaMap.value=b.alphaMap),b.specularMap&&(a.specularMap.value=b.specularMap),b.envMap&&(a.envMap.value=b.envMap,a.flipEnvMap.value=b.envMap&&b.envMap.isCubeTexture?-1:1,a.reflectivity.value=b.reflectivity,a.refractionRatio.value=b.refractionRatio),b.lightMap&&(a.lightMap.value=b.lightMap,a.lightMapIntensity.value=b.lightMapIntensity),b.aoMap&&(a.aoMap.value=b.aoMap,a.aoMapIntensity.value=b.aoMapIntensity);var c;if(b.map?c=b.map:b.specularMap?c=b.specularMap:b.displacementMap?c=b.displacementMap:b.normalMap?c=b.normalMap:b.bumpMap?c=b.bumpMap:b.roughnessMap?c=b.roughnessMap:b.metalnessMap?c=b.metalnessMap:b.alphaMap?c=b.alphaMap:b.emissiveMap&&(c=b.emissiveMap),void 0!==c){if(c.isWebGLRenderTarget&&(c=c.texture),!0===c.matrixAutoUpdate){var d=c.offset,e=c.repeat,f=c.rotation,g=c.center;c.matrix.setUvTransform(d.x,d.y,e.x,e.y,f,g.x,g.y)}a.uvTransform.value.copy(c.matrix)}}function w(a,b){a.diffuse.value=b.color,a.opacity.value=b.opacity}function x(a,b){a.dashSize.value=b.dashSize,a.totalSize.value=b.dashSize+b.gapSize,a.scale.value=b.scale}function y(a,b){if(a.diffuse.value=b.color,a.opacity.value=b.opacity,a.size.value=b.size*qa,a.scale.value=.5*pa,a.map.value=b.map,null!==b.map){if(!0===b.map.matrixAutoUpdate){var c=b.map.offset,d=b.map.repeat,e=b.map.rotation,f=b.map.center;b.map.matrix.setUvTransform(c.x,c.y,d.x,d.y,e,f.x,f.y)}a.uvTransform.value.copy(b.map.matrix)}}function z(a,b){a.fogColor.value=b.color,b.isFog?(a.fogNear.value=b.near,a.fogFar.value=b.far):b.isFogExp2&&(a.fogDensity.value=b.density)}function A(a,b){b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap)}function B(a,b){a.specular.value=b.specular,a.shininess.value=Math.max(b.shininess,1e-4),b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap),b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale),b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale)),b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias)}function C(a,b){B(a,b),b.gradientMap&&(a.gradientMap.value=b.gradientMap)}function D(a,b){a.roughness.value=b.roughness,a.metalness.value=b.metalness,b.roughnessMap&&(a.roughnessMap.value=b.roughnessMap),b.metalnessMap&&(a.metalnessMap.value=b.metalnessMap),b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap),b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale),b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale)),b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias),b.envMap&&(a.envMapIntensity.value=b.envMapIntensity)}function E(a,b){a.clearCoat.value=b.clearCoat,a.clearCoatRoughness.value=b.clearCoatRoughness,D(a,b)}function F(a,b){b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias)}function G(a,b){b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias),a.referencePosition.value.copy(b.referencePosition),a.nearDistance.value=b.nearDistance,a.farDistance.value=b.farDistance}function H(a,b){b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale),b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale)),b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias)}function I(a,b){a.ambientLightColor.needsUpdate=b,a.directionalLights.needsUpdate=b,a.pointLights.needsUpdate=b,a.spotLights.needsUpdate=b,a.rectAreaLights.needsUpdate=b,a.hemisphereLights.needsUpdate=b}function J(){var a=na;return a>=Fa.maxTextures&&console.warn("THREE.WebGLRenderer: Trying to use "+a+" texture units while this GPU supports only "+Fa.maxTextures),na+=1,a}console.log("THREE.WebGLRenderer",zb),a=a||{};var K=void 0!==a.canvas?a.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),L=void 0!==a.context?a.context:null,M=void 0!==a.alpha&&a.alpha,N=void 0===a.depth||a.depth,O=void 0===a.stencil||a.stencil,P=void 0!==a.antialias&&a.antialias,Q=void 0===a.premultipliedAlpha||a.premultipliedAlpha,R=void 0!==a.preserveDrawingBuffer&&a.preserveDrawingBuffer,S=void 0!==a.powerPreference?a.powerPreference:"default",U=[],V=[],X=null,Z=[],$=[];this.domElement=K,this.context=null,this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.gammaInput=!1,this.gammaOutput=!1,this.physicallyCorrectLights=!1,this.toneMapping=rc,this.toneMappingExposure=1,this.toneMappingWhitePoint=1,this.maxMorphTargets=8,this.maxMorphNormals=4;var _=this,aa=!1,ba=null,ca=null,ga=-1,ha="",ia=null,ja=null,ka=new i,la=new i,ma=null,na=0,oa=K.width,pa=K.height,qa=1,ra=new i(0,0,oa,pa),sa=new i(0,0,oa,pa),ta=!1,ua=new da,va=new sb,wa=!1,xa=!1,ya=new d,za=new f,Aa={geometries:0,textures:0},Ba={frame:0,calls:0,vertices:0,faces:0,points:0};this.info={render:Ba,memory:Aa,programs:null};var Ca;try{var Da={alpha:M,depth:N,stencil:O,antialias:P,premultipliedAlpha:Q,preserveDrawingBuffer:R,powerPreference:S};if(K.addEventListener("webglcontextlost",e,!1),K.addEventListener("webglcontextrestored",g,!1),null===(Ca=L||K.getContext("webgl",Da)||K.getContext("experimental-webgl",Da)))throw null!==K.getContext("webgl")?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.");void 0===Ca.getShaderPrecisionFormat&&(Ca.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(a){console.error("THREE.WebGLRenderer: "+a.message)}var Ea,Fa,Ga,Ha,Ia,Ja,La,Ma,Na,Pa,Ua,Xa,Ya,Za,$a,_a,ab,bb;c();var cb=new qb(_);this.vr=cb;var db=new ea(_,Ma,Fa.maxTextureSize);this.shadowMap=db,this.getContext=function(){return Ca},this.getContextAttributes=function(){return Ca.getContextAttributes()},this.forceContextLoss=function(){var a=Ea.get("WEBGL_lose_context");a&&a.loseContext()},this.forceContextRestore=function(){var a=Ea.get("WEBGL_lose_context");a&&a.restoreContext()},this.getPixelRatio=function(){return qa},this.setPixelRatio=function(a){void 0!==a&&(qa=a,this.setSize(oa,pa,!1))},this.getSize=function(){return{width:oa,height:pa}},this.setSize=function(a,b,c){var d=cb.getDevice();if(d&&d.isPresenting)return void console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");oa=a,pa=b,K.width=a*qa,K.height=b*qa,!1!==c&&(K.style.width=a+"px",K.style.height=b+"px"),this.setViewport(0,0,a,b)},this.getDrawingBufferSize=function(){return{width:oa*qa,height:pa*qa}},this.setDrawingBufferSize=function(a,b,c){oa=a,pa=b,qa=c,K.width=a*c,K.height=b*c,this.setViewport(0,0,a,b)},this.setViewport=function(a,b,c,d){ra.set(a,pa-b-d,c,d),Ga.viewport(ka.copy(ra).multiplyScalar(qa))},this.setScissor=function(a,b,c,d){sa.set(a,pa-b-d,c,d),Ga.scissor(la.copy(sa).multiplyScalar(qa))},this.setScissorTest=function(a){Ga.setScissorTest(ta=a)},this.getClearColor=function(){return Xa.getClearColor()},this.setClearColor=function(){Xa.setClearColor.apply(Xa,arguments)},this.getClearAlpha=function(){return Xa.getClearAlpha()},this.setClearAlpha=function(){Xa.setClearAlpha.apply(Xa,arguments)},this.clear=function(a,b,c){var d=0;(void 0===a||a)&&(d|=Ca.COLOR_BUFFER_BIT),(void 0===b||b)&&(d|=Ca.DEPTH_BUFFER_BIT),(void 0===c||c)&&(d|=Ca.STENCIL_BUFFER_BIT),Ca.clear(d)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.clearTarget=function(a,b,c,d){this.setRenderTarget(a),this.clear(b,c,d)},this.dispose=function(){K.removeEventListener("webglcontextlost",e,!1),K.removeEventListener("webglcontextrestored",g,!1),Ua.dispose(),cb.dispose()},this.renderBufferImmediate=function(a,b,c){Ga.initAttributes();var d=Ha.get(a);a.hasPositions&&!d.position&&(d.position=Ca.createBuffer()),a.hasNormals&&!d.normal&&(d.normal=Ca.createBuffer()),a.hasUvs&&!d.uv&&(d.uv=Ca.createBuffer()),a.hasColors&&!d.color&&(d.color=Ca.createBuffer());var e=b.getAttributes();if(a.hasPositions&&(Ca.bindBuffer(Ca.ARRAY_BUFFER,d.position),Ca.bufferData(Ca.ARRAY_BUFFER,a.positionArray,Ca.DYNAMIC_DRAW),Ga.enableAttribute(e.position),Ca.vertexAttribPointer(e.position,3,Ca.FLOAT,!1,0,0)),a.hasNormals){if(Ca.bindBuffer(Ca.ARRAY_BUFFER,d.normal),!c.isMeshPhongMaterial&&!c.isMeshStandardMaterial&&!c.isMeshNormalMaterial&&!0===c.flatShading)for(var f=0,g=3*a.count;f<g;f+=9){var h=a.normalArray,i=(h[f+0]+h[f+3]+h[f+6])/3,j=(h[f+1]+h[f+4]+h[f+7])/3,k=(h[f+2]+h[f+5]+h[f+8])/3;h[f+0]=i,h[f+1]=j,h[f+2]=k,h[f+3]=i,h[f+4]=j,h[f+5]=k,h[f+6]=i,h[f+7]=j,h[f+8]=k}Ca.bufferData(Ca.ARRAY_BUFFER,a.normalArray,Ca.DYNAMIC_DRAW),Ga.enableAttribute(e.normal),Ca.vertexAttribPointer(e.normal,3,Ca.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(Ca.bindBuffer(Ca.ARRAY_BUFFER,d.uv),Ca.bufferData(Ca.ARRAY_BUFFER,a.uvArray,Ca.DYNAMIC_DRAW),Ga.enableAttribute(e.uv),Ca.vertexAttribPointer(e.uv,2,Ca.FLOAT,!1,0,0)),a.hasColors&&c.vertexColors!==Kb&&(Ca.bindBuffer(Ca.ARRAY_BUFFER,d.color),Ca.bufferData(Ca.ARRAY_BUFFER,a.colorArray,Ca.DYNAMIC_DRAW),Ga.enableAttribute(e.color),Ca.vertexAttribPointer(e.color,3,Ca.FLOAT,!1,0,0)),Ga.disableUnusedAttributes(),Ca.drawArrays(Ca.TRIANGLES,0,a.count),a.count=0},this.renderBufferDirect=function(a,c,d,e,f,g){var h=f.isMesh&&f.matrixWorld.determinant()<0;Ga.setMaterial(e,h);var i=u(a,c,e,f),j=d.id+"_"+i.id+"_"+(!0===e.wireframe),k=!1;j!==ha&&(ha=j,k=!0),f.morphTargetInfluences&&(Ya.update(f,d,e,i),k=!0);var l=d.index,m=d.attributes.position,o=1;!0===e.wireframe&&(l=La.getWireframeAttribute(d),o=2);var p,q=Za;null!==l&&(p=Ja.get(l),q=$a,q.setIndex(p)),k&&(n(e,i,d),null!==l&&Ca.bindBuffer(Ca.ELEMENT_ARRAY_BUFFER,p.buffer));var r=0;null!==l?r=l.count:void 0!==m&&(r=m.count);var s=d.drawRange.start*o,t=d.drawRange.count*o,v=null!==g?g.start*o:0,w=null!==g?g.count*o:1/0,x=Math.max(s,v),y=Math.min(r,s+t,v+w)-1,z=Math.max(0,y-x+1);if(0!==z){if(f.isMesh)if(!0===e.wireframe)Ga.setLineWidth(e.wireframeLinewidth*b()),q.setMode(Ca.LINES);else switch(f.drawMode){case md:q.setMode(Ca.TRIANGLES);break;case nd:q.setMode(Ca.TRIANGLE_STRIP);break;case od:q.setMode(Ca.TRIANGLE_FAN)}else if(f.isLine){var A=e.linewidth;void 0===A&&(A=1),Ga.setLineWidth(A*b()),f.isLineSegments?q.setMode(Ca.LINES):f.isLineLoop?q.setMode(Ca.LINE_LOOP):q.setMode(Ca.LINE_STRIP)}else f.isPoints&&q.setMode(Ca.POINTS);d&&d.isInstancedBufferGeometry?d.maxInstancedCount>0&&q.renderInstances(d,x,z):q.render(x,z)}},this.compile=function(a,b){U.length=0,V.length=0,a.traverse(function(a){a.isLight&&(U.push(a),a.castShadow&&V.push(a))}),Na.setup(U,V,b),a.traverse(function(b){if(b.material)if(Array.isArray(b.material))for(var c=0;c<b.material.length;c++)t(b.material[c],a.fog,b);else t(b.material,a.fog,b)})};var eb=!1,fb=null;this.animate=function(a){fb=a,o()},this.render=function(a,b,c,d){if(!b||!b.isCamera)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(!aa){ha="",ga=-1,ia=null,!0===a.autoUpdate&&a.updateMatrixWorld(),null===b.parent&&b.updateMatrixWorld(),cb.enabled&&(b=cb.getCamera(b)),ya.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),ua.setFromMatrix(ya),U.length=0,V.length=0,Z.length=0,$.length=0,xa=this.localClippingEnabled,wa=va.init(this.clippingPlanes,xa,b),X=Ua.get(a,b),X.init(),q(a,b,_.sortObjects),!0===_.sortObjects&&X.sort(),Ia.updateVideoTextures(),wa&&va.beginShadows(),db.render(V,a,b),Na.setup(U,V,b),wa&&va.endShadows(),Ba.frame++,Ba.calls=0,Ba.vertices=0,Ba.faces=0,Ba.points=0,void 0===c&&(c=null),this.setRenderTarget(c),Xa.render(X,a,b,d);var e=X.opaque,f=X.transparent;if(a.overrideMaterial){var g=a.overrideMaterial;e.length&&r(e,a,b,g),f.length&&r(f,a,b,g)}else e.length&&r(e,a,b),f.length&&r(f,a,b);ab.render(Z,a,b),_a.render($,a,b,ka),c&&Ia.updateRenderTargetMipmap(c),Ga.buffers.depth.setTest(!0),Ga.buffers.depth.setMask(!0),Ga.buffers.color.setMask(!0),Ga.setPolygonOffset(!1),cb.enabled&&cb.submitFrame()}},this.setFaceCulling=function(a,b){Ga.setCullFace(a),Ga.setFlipSided(b===Db)},this.allocTextureUnit=J,this.setTexture2D=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTarget&&(a||(console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),a=!0),b=b.texture),Ia.setTexture2D(b,c)}}(),this.setTexture=function(){var a=!1;return function(b,c){a||(console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),a=!0),Ia.setTexture2D(b,c)}}(),this.setTextureCube=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTargetCube&&(a||(console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),a=!0),b=b.texture),b&&b.isCubeTexture||Array.isArray(b.image)&&6===b.image.length?Ia.setTextureCube(b,c):Ia.setTextureCubeDynamic(b,c)}}(),this.getRenderTarget=function(){return ba},this.setRenderTarget=function(a){ba=a,a&&void 0===Ha.get(a).__webglFramebuffer&&Ia.setupRenderTarget(a);var b=null,c=!1;if(a){var d=Ha.get(a).__webglFramebuffer;a.isWebGLRenderTargetCube?(b=d[a.activeCubeFace],c=!0):b=d,ka.copy(a.viewport),la.copy(a.scissor),ma=a.scissorTest}else ka.copy(ra).multiplyScalar(qa),la.copy(sa).multiplyScalar(qa),ma=ta;if(ca!==b&&(Ca.bindFramebuffer(Ca.FRAMEBUFFER,b),ca=b),Ga.viewport(ka),Ga.scissor(la),Ga.setScissorTest(ma),c){var e=Ha.get(a.texture);Ca.framebufferTexture2D(Ca.FRAMEBUFFER,Ca.COLOR_ATTACHMENT0,Ca.TEXTURE_CUBE_MAP_POSITIVE_X+a.activeCubeFace,e.__webglTexture,a.activeMipMapLevel)}},this.readRenderTargetPixels=function(a,b,c,d,e,f){if(!a||!a.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");var g=Ha.get(a).__webglFramebuffer;if(g){var h=!1;g!==ca&&(Ca.bindFramebuffer(Ca.FRAMEBUFFER,g),h=!0);try{var i=a.texture,j=i.format,k=i.type;if(j!==$c&&bb.convert(j)!==Ca.getParameter(Ca.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!(k===Mc||bb.convert(k)===Ca.getParameter(Ca.IMPLEMENTATION_COLOR_READ_TYPE)||k===Sc&&(Ea.get("OES_texture_float")||Ea.get("WEBGL_color_buffer_float"))||k===Tc&&Ea.get("EXT_color_buffer_half_float")))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Ca.checkFramebufferStatus(Ca.FRAMEBUFFER)===Ca.FRAMEBUFFER_COMPLETE?b>=0&&b<=a.width-d&&c>=0&&c<=a.height-e&&Ca.readPixels(b,c,d,e,bb.convert(j),bb.convert(k),f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{h&&Ca.bindFramebuffer(Ca.FRAMEBUFFER,ca)}}}}function vb(){ia.call(this),this.type="Scene",this.background=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0}function wb(a,b,c){var d=this,e=!1,f=0,g=0,h=void 0;this.onStart=void 0,this.onLoad=a,this.onProgress=b,this.onError=c,this.itemStart=function(a){g++,!1===e&&void 0!==d.onStart&&d.onStart(a,f,g),e=!0},this.itemEnd=function(a){f++,void 0!==d.onProgress&&d.onProgress(a,f,g),f===g&&(e=!1,void 0!==d.onLoad&&d.onLoad())},this.itemError=function(a){void 0!==d.onError&&d.onError(a)},this.resolveURL=function(a){return h?h(a):a},this.setURLModifier=function(a){return h=a,this}}function xb(a){this.manager=void 0!==a?a:Uf}function yb(a){this.manager=void 0!==a?a:Uf}void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52)),void 0===Number.isInteger&&(Number.isInteger=function(a){return"number"==typeof a&&isFinite(a)&&Math.floor(a)===a}),void 0===Math.sign&&(Math.sign=function(a){return a<0?-1:a>0?1:+a}),"name"in Function.prototype==!1&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}}),void 0===Object.assign&&function(){Object.assign=function(a){if(void 0===a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(void 0!==d&&null!==d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=d[e])}return b}}(),Object.assign(b.prototype,{addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]),-1===c[a].indexOf(b)&&c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners,d=c[a];if(void 0!==d){var e=d.indexOf(b);-1!==e&&d.splice(e,1)}}},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners,c=b[a.type];if(void 0!==c){a.target=this;for(var d=c.slice(0),e=0,f=d.length;e<f;e++)d[e].call(this,a)}}}});var zb="89",Ab=0,Bb=1,Cb=2,Db=0,Eb=1,Fb=2,Gb=0,Hb=1,Ib=2,Jb=1,Kb=0,Lb=0,Mb=1,Nb=2,Ob=3,Pb=4,Qb=5,Rb=100,Sb=101,Tb=102,Ub=103,Vb=104,Wb=200,Xb=201,Yb=202,Zb=203,$b=204,_b=205,ac=206,bc=207,cc=208,dc=209,ec=210,fc=0,gc=1,hc=2,ic=3,jc=4,kc=5,lc=6,mc=7,nc=0,oc=1,pc=2,qc=0,rc=1,sc=2,tc=3,uc=4,vc=300,wc=301,xc=302,yc=303,zc=304,Ac=305,Bc=306,Cc=307,Dc=1e3,Ec=1001,Fc=1002,Gc=1003,Hc=1004,Ic=1005,Jc=1006,Kc=1007,Lc=1008,Mc=1009,Nc=1010,Oc=1011,Pc=1012,Qc=1013,Rc=1014,Sc=1015,Tc=1016,Uc=1017,Vc=1018,Wc=1019,Xc=1020,Yc=1021,Zc=1022,$c=1023,_c=1024,ad=1025,bd=1026,cd=1027,dd=2001,ed=2002,fd=2003,gd=2004,hd=2100,id=2101,jd=2102,kd=2103,ld=2151,md=0,nd=1,od=2,pd=3e3,qd=3001,rd=3007,sd=3002,td=3004,ud=3005,vd=3006,wd=3200,xd=3201,yd={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){for(var a=[],b=0;b<256;b++)a[b]=(b<16?"0":"")+b.toString(16).toUpperCase();return function(){var b=4294967295*Math.random()|0,c=4294967295*Math.random()|0,d=4294967295*Math.random()|0,e=4294967295*Math.random()|0;return a[255&b]+a[b>>8&255]+a[b>>16&255]+a[b>>24&255]+"-"+a[255&c]+a[c>>8&255]+"-"+a[c>>16&15|64]+a[c>>24&255]+"-"+a[63&d|128]+a[d>>8&255]+"-"+a[d>>16&255]+a[d>>24&255]+a[255&e]+a[e>>8&255]+a[e>>16&255]+a[e>>24&255]}}(),clamp:function(a,b,c){return Math.max(b,Math.min(c,a))},euclideanModulo:function(a,b){return(a%b+b)%b},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},lerp:function(a,b,c){return(1-c)*a+c*b},smoothstep:function(a,b,c){return a<=b?0:a>=c?1:(a=(a-b)/(c-b))*a*(3-2*a)},smootherstep:function(a,b,c){return a<=b?0:a>=c?1:(a=(a-b)/(c-b))*a*a*(a*(6*a-15)+10)},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(a){return a*yd.DEG2RAD},radToDeg:function(a){return a*yd.RAD2DEG},isPowerOfTwo:function(a){return 0==(a&a-1)&&0!==a},ceilPowerOfTwo:function(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))},floorPowerOfTwo:function(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}};Object.defineProperties(c.prototype,{width:{get:function(){return this.x},set:function(a){this.x=a}},height:{get:function(){return this.y},set:function(a){this.y=a}}}),Object.assign(c.prototype,{isVector2:!0,set:function(a,b){return this.x=a,this.y=b,this},setScalar:function(a){return this.x=a,this.y=a,this},setX:function(a){return this.x=a,this},setY:function(a){return this.y=a,this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw new Error("index is out of range: "+a)}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+a)}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(a){return this.x=a.x,this.y=a.y,this},add:function(a,b){return void 0!==b?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b)):(this.x+=a.x,this.y+=a.y,this)},addScalar:function(a){return this.x+=a,this.y+=a,this},addVectors:function(a,b){return this.x=a.x+b.x,this.y=a.y+b.y,this},addScaledVector:function(a,b){return this.x+=a.x*b,this.y+=a.y*b,this},sub:function(a,b){return void 0!==b?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b)):(this.x-=a.x,this.y-=a.y,this)},subScalar:function(a){return this.x-=a,this.y-=a,this},subVectors:function(a,b){return this.x=a.x-b.x,this.y=a.y-b.y,this},multiply:function(a){return this.x*=a.x,this.y*=a.y,this},multiplyScalar:function(a){return this.x*=a,this.y*=a,this},divide:function(a){return this.x/=a.x,this.y/=a.y,this},divideScalar:function(a){return this.multiplyScalar(1/a)},applyMatrix3:function(a){var b=this.x,c=this.y,d=a.elements;return this.x=d[0]*b+d[3]*c+d[6],this.y=d[1]*b+d[4]*c+d[7],this},min:function(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this},max:function(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this},clamp:function(a,b){return this.x=Math.max(a.x,Math.min(b.x,this.x)),this.y=Math.max(a.y,Math.min(b.y,this.y)),this},clampScalar:function(){var a=new c,b=new c;return function(c,d){return a.set(c,c),b.set(d,d),this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){var a=Math.atan2(this.y,this.x);return a<0&&(a+=2*Math.PI),a},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;return b*b+c*c},manhattanDistanceTo:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){return this.x+=(a.x-this.x)*b,this.y+=(a.y-this.y)*b,this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a,b){return void 0===b&&(b=0),this.x=a[b],this.y=a[b+1],this},toArray:function(a,b){return void 0===a&&(a=[]),void 0===b&&(b=0),a[b]=this.x,a[b+1]=this.y,a},fromBufferAttribute:function(a,b,c){return void 0!==c&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=a.getX(b),this.y=a.getY(b),this},rotateAround:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=this.x-a.x,f=this.y-a.y;return this.x=e*c-f*d+a.x,this.y=e*d+f*c+a.y,this}}),Object.assign(d.prototype,{isMatrix4:!0,set:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=this.elements;return q[0]=a,q[4]=b,q[8]=c,q[12]=d,q[1]=e,q[5]=f,q[9]=g,q[13]=h,q[2]=i,q[6]=j,q[10]=k,q[14]=l,q[3]=m,q[7]=n,q[11]=o,q[15]=p,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return(new d).fromArray(this.elements)},copy:function(a){var b=this.elements,c=a.elements;return b[0]=c[0],b[1]=c[1],b[2]=c[2],b[3]=c[3],b[4]=c[4],b[5]=c[5],b[6]=c[6],b[7]=c[7],b[8]=c[8],b[9]=c[9],b[10]=c[10],b[11]=c[11],b[12]=c[12],b[13]=c[13],b[14]=c[14],b[15]=c[15],this},copyPosition:function(a){var b=this.elements,c=a.elements;return b[12]=c[12],b[13]=c[13],b[14]=c[14],this},extractBasis:function(a,b,c){return a.setFromMatrixColumn(this,0),b.setFromMatrixColumn(this,1),c.setFromMatrixColumn(this,2),this},makeBasis:function(a,b,c){return this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1),this},extractRotation:function(){var a=new f;return function(b){var c=this.elements,d=b.elements,e=1/a.setFromMatrixColumn(b,0).length(),f=1/a.setFromMatrixColumn(b,1).length(),g=1/a.setFromMatrixColumn(b,2).length();return c[0]=d[0]*e,c[1]=d[1]*e,c[2]=d[2]*e,c[4]=d[4]*f,c[5]=d[5]*f,c[6]=d[6]*f,c[8]=d[8]*g,c[9]=d[9]*g,c[10]=d[10]*g,this}}(),makeRotationFromEuler:function(a){a&&a.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),g=Math.sin(c),h=Math.cos(d),i=Math.sin(d),j=Math.cos(e),k=Math.sin(e);if("XYZ"===a.order){var l=f*j,m=f*k,n=g*j,o=g*k;b[0]=h*j,b[4]=-h*k,b[8]=i,b[1]=m+n*i,b[5]=l-o*i,b[9]=-g*h,b[2]=o-l*i,b[6]=n+m*i,b[10]=f*h}else if("YXZ"===a.order){var p=h*j,q=h*k,r=i*j,s=i*k;b[0]=p+s*g,b[4]=r*g-q,b[8]=f*i,b[1]=f*k,b[5]=f*j,b[9]=-g,b[2]=q*g-r,b[6]=s+p*g,b[10]=f*h}else if("ZXY"===a.order){var p=h*j,q=h*k,r=i*j,s=i*k;b[0]=p-s*g,b[4]=-f*k,b[8]=r+q*g,b[1]=q+r*g,b[5]=f*j,b[9]=s-p*g,b[2]=-f*i,b[6]=g,b[10]=f*h}else if("ZYX"===a.order){var l=f*j,m=f*k,n=g*j,o=g*k;b[0]=h*j,b[4]=n*i-m,b[8]=l*i+o,b[1]=h*k,b[5]=o*i+l,b[9]=m*i-n,b[2]=-i,b[6]=g*h,b[10]=f*h}else if("YZX"===a.order){var t=f*h,u=f*i,v=g*h,w=g*i;b[0]=h*j,b[4]=w-t*k,b[8]=v*k+u,b[1]=k,b[5]=f*j,b[9]=-g*j,b[2]=-i*j,b[6]=u*k+v,b[10]=t-w*k}else if("XZY"===a.order){var t=f*h,u=f*i,v=g*h,w=g*i;b[0]=h*j,b[4]=-k,b[8]=i*j,b[1]=t*k+w,b[5]=f*j,b[9]=u*k-v,b[2]=v*k-u,b[6]=g*j,b[10]=w*k+t}return b[3]=0,b[7]=0,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1,this},makeRotationFromQuaternion:function(a){var b=this.elements,c=a._x,d=a._y,e=a._z,f=a._w,g=c+c,h=d+d,i=e+e,j=c*g,k=c*h,l=c*i,m=d*h,n=d*i,o=e*i,p=f*g,q=f*h,r=f*i;return b[0]=1-(m+o),b[4]=k-r,b[8]=l+q,b[1]=k+r,b[5]=1-(j+o),b[9]=n-p,b[2]=l-q,b[6]=n+p,b[10]=1-(j+m),b[3]=0,b[7]=0,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1,this},lookAt:function(){var a=new f,b=new f,c=new f;return function(d,e,f){var g=this.elements;return c.subVectors(d,e),0===c.lengthSq()&&(c.z=1),c.normalize(),a.crossVectors(f,c),0===a.lengthSq()&&(1===Math.abs(f.z)?c.x+=1e-4:c.z+=1e-4,c.normalize(),a.crossVectors(f,c)),a.normalize(),b.crossVectors(c,a),g[0]=a.x,g[4]=b.x,g[8]=c.x,g[1]=a.y,g[5]=b.y,g[9]=c.y,g[2]=a.z,g[6]=b.z,g[10]=c.z,this}}(),multiply:function(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],i=c[12],j=c[1],k=c[5],l=c[9],m=c[13],n=c[2],o=c[6],p=c[10],q=c[14],r=c[3],s=c[7],t=c[11],u=c[15],v=d[0],w=d[4],x=d[8],y=d[12],z=d[1],A=d[5],B=d[9],C=d[13],D=d[2],E=d[6],F=d[10],G=d[14],H=d[3],I=d[7],J=d[11],K=d[15];return e[0]=f*v+g*z+h*D+i*H,e[4]=f*w+g*A+h*E+i*I,e[8]=f*x+g*B+h*F+i*J,e[12]=f*y+g*C+h*G+i*K,e[1]=j*v+k*z+l*D+m*H,e[5]=j*w+k*A+l*E+m*I,e[9]=j*x+k*B+l*F+m*J,e[13]=j*y+k*C+l*G+m*K,e[2]=n*v+o*z+p*D+q*H,e[6]=n*w+o*A+p*E+q*I,e[10]=n*x+o*B+p*F+q*J,e[14]=n*y+o*C+p*G+q*K,e[3]=r*v+s*z+t*D+u*H,e[7]=r*w+s*A+t*E+u*I,e[11]=r*x+s*B+t*F+u*J,e[15]=r*y+s*C+t*G+u*K,this},multiplyScalar:function(a){var b=this.elements;return b[0]*=a,b[4]*=a,b[8]*=a,b[12]*=a,b[1]*=a,b[5]*=a,b[9]*=a,b[13]*=a,b[2]*=a,b[6]*=a,b[10]*=a,b[14]*=a,b[3]*=a,b[7]*=a,b[11]*=a,b[15]*=a,this},applyToBufferAttribute:function(){var a=new f;return function(b){for(var c=0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix4(this),b.setXYZ(c,a.x,a.y,a.z);return b}}(),determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],i=a[13],j=a[2],k=a[6],l=a[10],m=a[14];return a[3]*(+e*h*k-d*i*k-e*g*l+c*i*l+d*g*m-c*h*m)+a[7]*(+b*h*m-b*i*l+e*f*l-d*f*m+d*i*j-e*h*j)+a[11]*(+b*i*k-b*g*m-e*f*k+c*f*m+e*g*j-c*i*j)+a[15]*(-d*g*j-b*h*k+b*g*l+d*f*k-c*f*l+c*h*j)},transpose:function(){var a,b=this.elements;return a=b[1],b[1]=b[4],b[4]=a,a=b[2],b[2]=b[8],b[8]=a,a=b[6],b[6]=b[9],b[9]=a,a=b[3],b[3]=b[12],b[12]=a,a=b[7],b[7]=b[13],b[13]=a,a=b[11],b[11]=b[14],b[14]=a,this},setPosition:function(a){var b=this.elements;return b[12]=a.x,b[13]=a.y,b[14]=a.z,this},getInverse:function(a,b){var c=this.elements,d=a.elements,e=d[0],f=d[1],g=d[2],h=d[3],i=d[4],j=d[5],k=d[6],l=d[7],m=d[8],n=d[9],o=d[10],p=d[11],q=d[12],r=d[13],s=d[14],t=d[15],u=n*s*l-r*o*l+r*k*p-j*s*p-n*k*t+j*o*t,v=q*o*l-m*s*l-q*k*p+i*s*p+m*k*t-i*o*t,w=m*r*l-q*n*l+q*j*p-i*r*p-m*j*t+i*n*t,x=q*n*k-m*r*k-q*j*o+i*r*o+m*j*s-i*n*s,y=e*u+f*v+g*w+h*x;if(0===y){var z="THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";if(!0===b)throw new Error(z);return console.warn(z),this.identity()}var A=1/y;return c[0]=u*A,c[1]=(r*o*h-n*s*h-r*g*p+f*s*p+n*g*t-f*o*t)*A,c[2]=(j*s*h-r*k*h+r*g*l-f*s*l-j*g*t+f*k*t)*A,c[3]=(n*k*h-j*o*h-n*g*l+f*o*l+j*g*p-f*k*p)*A,c[4]=v*A,c[5]=(m*s*h-q*o*h+q*g*p-e*s*p-m*g*t+e*o*t)*A,c[6]=(q*k*h-i*s*h-q*g*l+e*s*l+i*g*t-e*k*t)*A,c[7]=(i*o*h-m*k*h+m*g*l-e*o*l-i*g*p+e*k*p)*A,c[8]=w*A,c[9]=(q*n*h-m*r*h-q*f*p+e*r*p+m*f*t-e*n*t)*A,c[10]=(i*r*h-q*j*h+q*f*l-e*r*l-i*f*t+e*j*t)*A,c[11]=(m*j*h-i*n*h-m*f*l+e*n*l+i*f*p-e*j*p)*A,c[12]=x*A,c[13]=(m*r*g-q*n*g+q*f*o-e*r*o-m*f*s+e*n*s)*A,c[14]=(q*j*g-i*r*g-q*f*k+e*r*k+i*f*s-e*j*s)*A,c[15]=(i*n*g-m*j*g+m*f*k-e*n*k-i*f*o+e*j*o)*A,this},scale:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z;return b[0]*=c,b[4]*=d,b[8]*=e,b[1]*=c,b[5]*=d,b[9]*=e,b[2]*=c,b[6]*=d,b[10]*=e,b[3]*=c,b[7]*=d,b[11]*=e,this},getMaxScaleOnAxis:function(){var a=this.elements,b=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],c=a[4]*a[4]+a[5]*a[5]+a[6]*a[6],d=a[8]*a[8]+a[9]*a[9]+a[10]*a[10];return Math.sqrt(Math.max(b,c,d))},makeTranslation:function(a,b,c){return this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1),this},makeRotationX:function(a){var b=Math.cos(a),c=Math.sin(a);return this.set(1,0,0,0,0,b,-c,0,0,c,b,0,0,0,0,1),this},makeRotationY:function(a){var b=Math.cos(a),c=Math.sin(a);return this.set(b,0,c,0,0,1,0,0,-c,0,b,0,0,0,0,1),this},makeRotationZ:function(a){var b=Math.cos(a),c=Math.sin(a);return this.set(b,-c,0,0,c,b,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,i=e*f,j=e*g;return this.set(i*f+c,i*g-d*h,i*h+d*g,0,i*g+d*h,j*g+c,j*h-d*f,0,i*h-d*g,j*h+d*f,e*h*h+c,0,0,0,0,1),this},makeScale:function(a,b,c){return this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1),this},makeShear:function(a,b,c){return this.set(1,b,c,0,a,1,c,0,a,b,1,0,0,0,0,1),this},compose:function(a,b,c){return this.makeRotationFromQuaternion(b),this.scale(c),this.setPosition(a),this},decompose:function(){var a=new f,b=new d;return function(c,d,e){var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),i=a.set(f[8],f[9],f[10]).length();this.determinant()<0&&(g=-g),c.x=f[12],c.y=f[13],c.z=f[14],b.copy(this);var j=1/g,k=1/h,l=1/i;return b.elements[0]*=j,b.elements[1]*=j,b.elements[2]*=j,b.elements[4]*=k,b.elements[5]*=k,b.elements[6]*=k,b.elements[8]*=l,b.elements[9]*=l,b.elements[10]*=l,d.setFromRotationMatrix(b),e.x=g,e.y=h,e.z=i,this}}(),makePerspective:function(a,b,c,d,e,f){void 0===f&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");var g=this.elements,h=2*e/(b-a),i=2*e/(c-d),j=(b+a)/(b-a),k=(c+d)/(c-d),l=-(f+e)/(f-e),m=-2*f*e/(f-e);return g[0]=h,g[4]=0,g[8]=j,g[12]=0,g[1]=0,g[5]=i,g[9]=k,g[13]=0,g[2]=0,g[6]=0,g[10]=l,g[14]=m,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=1/(b-a),i=1/(c-d),j=1/(f-e),k=(b+a)*h,l=(c+d)*i,m=(f+e)*j;return g[0]=2*h,g[4]=0,g[8]=0,g[12]=-k,g[1]=0,g[5]=2*i,g[9]=0,g[13]=-l,g[2]=0,g[6]=0,g[10]=-2*j,g[14]=-m,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this},equals:function(a){for(var b=this.elements,c=a.elements,d=0;d<16;d++)if(b[d]!==c[d])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;c<16;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]),void 0===b&&(b=0);var c=this.elements;return a[b]=c[0],a[b+1]=c[1],a[b+2]=c[2],a[b+3]=c[3],a[b+4]=c[4],a[b+5]=c[5],a[b+6]=c[6],a[b+7]=c[7],a[b+8]=c[8],a[b+9]=c[9],a[b+10]=c[10],a[b+11]=c[11],a[b+12]=c[12],a[b+13]=c[13],a[b+14]=c[14],a[b+15]=c[15],a}}),Object.assign(e,{slerp:function(a,b,c,d){return c.copy(a).slerp(b,d)},slerpFlat:function(a,b,c,d,e,f,g){var h=c[d+0],i=c[d+1],j=c[d+2],k=c[d+3],l=e[f+0],m=e[f+1],n=e[f+2],o=e[f+3];if(k!==o||h!==l||i!==m||j!==n){var p=1-g,q=h*l+i*m+j*n+k*o,r=q>=0?1:-1,s=1-q*q;if(s>Number.EPSILON){var t=Math.sqrt(s),u=Math.atan2(t,q*r);p=Math.sin(p*u)/t,g=Math.sin(g*u)/t}var v=g*r;if(h=h*p+l*v,i=i*p+m*v,j=j*p+n*v,k=k*p+o*v,p===1-g){var w=1/Math.sqrt(h*h+i*i+j*j+k*k);h*=w,i*=w,j*=w,k*=w}}a[b]=h,a[b+1]=i,a[b+2]=j,a[b+3]=k}}),Object.defineProperties(e.prototype,{x:{get:function(){return this._x},set:function(a){this._x=a,this.onChangeCallback()}},y:{get:function(){return this._y},set:function(a){this._y=a,this.onChangeCallback()}},z:{get:function(){return this._z},set:function(a){this._z=a,this.onChangeCallback()}},w:{get:function(){return this._w},set:function(a){this._w=a,this.onChangeCallback()}}}),Object.assign(e.prototype,{set:function(a,b,c,d){return this._x=a,this._y=b,this._z=c,this._w=d,this.onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(a){return this._x=a.x,this._y=a.y,this._z=a.z,this._w=a.w,this.onChangeCallback(),this},setFromEuler:function(a,b){if(!a||!a.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var c=a._x,d=a._y,e=a._z,f=a.order,g=Math.cos,h=Math.sin,i=g(c/2),j=g(d/2),k=g(e/2),l=h(c/2),m=h(d/2),n=h(e/2);return"XYZ"===f?(this._x=l*j*k+i*m*n,this._y=i*m*k-l*j*n,this._z=i*j*n+l*m*k,this._w=i*j*k-l*m*n):"YXZ"===f?(this._x=l*j*k+i*m*n,this._y=i*m*k-l*j*n,this._z=i*j*n-l*m*k,this._w=i*j*k+l*m*n):"ZXY"===f?(this._x=l*j*k-i*m*n,this._y=i*m*k+l*j*n,this._z=i*j*n+l*m*k,this._w=i*j*k-l*m*n):"ZYX"===f?(this._x=l*j*k-i*m*n,this._y=i*m*k+l*j*n,this._z=i*j*n-l*m*k,this._w=i*j*k+l*m*n):"YZX"===f?(this._x=l*j*k+i*m*n,this._y=i*m*k+l*j*n,this._z=i*j*n-l*m*k,this._w=i*j*k-l*m*n):"XZY"===f&&(this._x=l*j*k-i*m*n,this._y=i*m*k-l*j*n,this._z=i*j*n+l*m*k,this._w=i*j*k+l*m*n),!1!==b&&this.onChangeCallback(),this},setFromAxisAngle:function(a,b){var c=b/2,d=Math.sin(c);return this._x=a.x*d,this._y=a.y*d,this._z=a.z*d,this._w=Math.cos(c),this.onChangeCallback(),this},setFromRotationMatrix:function(a){var b,c=a.elements,d=c[0],e=c[4],f=c[8],g=c[1],h=c[5],i=c[9],j=c[2],k=c[6],l=c[10],m=d+h+l;return m>0?(b=.5/Math.sqrt(m+1),this._w=.25/b,this._x=(k-i)*b,this._y=(f-j)*b,this._z=(g-e)*b):d>h&&d>l?(b=2*Math.sqrt(1+d-h-l),this._w=(k-i)/b,this._x=.25*b,this._y=(e+g)/b,this._z=(f+j)/b):h>l?(b=2*Math.sqrt(1+h-d-l),this._w=(f-j)/b,this._x=(e+g)/b,this._y=.25*b,this._z=(i+k)/b):(b=2*Math.sqrt(1+l-d-h),this._w=(g-e)/b,this._x=(f+j)/b,this._y=(i+k)/b,this._z=.25*b),this.onChangeCallback(),this},setFromUnitVectors:function(){var a,b=new f;return function(c,d){return void 0===b&&(b=new f),a=c.dot(d)+1,a<1e-6?(a=0,Math.abs(c.x)>Math.abs(c.z)?b.set(-c.y,c.x,0):b.set(0,-c.z,c.y)):b.crossVectors(c,d),this._x=b.x,this._y=b.y,this._z=b.z,this._w=a,this.normalize()}}(),inverse:function(){return this.conjugate().normalize()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this.onChangeCallback(),this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();return 0===a?(this._x=0,this._y=0,this._z=0,this._w=1):(a=1/a,this._x=this._x*a,this._y=this._y*a,this._z=this._z*a,this._w=this._w*a),this.onChangeCallback(),this},multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},premultiply:function(a){return this.multiplyQuaternions(a,this)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,f=a._w,g=b._x,h=b._y,i=b._z,j=b._w;return this._x=c*j+f*g+d*i-e*h,this._y=d*j+f*h+e*g-c*i,this._z=e*j+f*i+c*h-d*g,this._w=f*j-c*g-d*h-e*i,this.onChangeCallback(),this},slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;if(g<0?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a),g>=1)return this._w=f,this._x=c,this._y=d,this._z=e,this;var h=Math.sqrt(1-g*g);if(Math.abs(h)<.001)return this._w=.5*(f+this._w),this._x=.5*(c+this._x),this._y=.5*(d+this._y),this._z=.5*(e+this._z),this;var i=Math.atan2(h,g),j=Math.sin((1-b)*i)/h,k=Math.sin(b*i)/h;return this._w=f*j+this._w*k,this._x=c*j+this._x*k,this._y=d*j+this._y*k,this._z=e*j+this._z*k,this.onChangeCallback(),this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){return void 0===b&&(b=0),this._x=a[b],this._y=a[b+1],this._z=a[b+2],this._w=a[b+3],this.onChangeCallback(),this},toArray:function(a,b){return void 0===a&&(a=[]),void 0===b&&(b=0),a[b]=this._x,a[b+1]=this._y,a[b+2]=this._z,a[b+3]=this._w,a},onChange:function(a){return this.onChangeCallback=a,this},onChangeCallback:function(){}}),Object.assign(f.prototype,{isVector3:!0,set:function(a,b,c){return this.x=a,this.y=b,this.z=c,this},setScalar:function(a){return this.x=a,this.y=a,this.z=a,this},setX:function(a){return this.x=a,this},setY:function(a){return this.y=a,this},setZ:function(a){return this.z=a,this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw new Error("index is out of range: "+a)}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+a)}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(a){return this.x=a.x,this.y=a.y,this.z=a.z,this},add:function(a,b){return void 0!==b?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b)):(this.x+=a.x,this.y+=a.y,this.z+=a.z,this)},addScalar:function(a){return this.x+=a,this.y+=a,this.z+=a,this},addVectors:function(a,b){return this.x=a.x+b.x,this.y=a.y+b.y,this.z=a.z+b.z,this},addScaledVector:function(a,b){return this.x+=a.x*b,this.y+=a.y*b,this.z+=a.z*b,this},sub:function(a,b){return void 0!==b?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b)):(this.x-=a.x,this.y-=a.y,this.z-=a.z,this)},subScalar:function(a){return this.x-=a,this.y-=a,this.z-=a,this},subVectors:function(a,b){return this.x=a.x-b.x,this.y=a.y-b.y,this.z=a.z-b.z,this},multiply:function(a,b){return void 0!==b?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b)):(this.x*=a.x,this.y*=a.y,this.z*=a.z,this)},multiplyScalar:function(a){return this.x*=a,this.y*=a,this.z*=a,this},multiplyVectors:function(a,b){return this.x=a.x*b.x,this.y=a.y*b.y,this.z=a.z*b.z,this},applyEuler:function(){var a=new e;return function(b){return b&&b.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(a.setFromEuler(b))}}(),applyAxisAngle:function(){var a=new e;return function(b,c){return this.applyQuaternion(a.setFromAxisAngle(b,c))}}(),applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z,e=a.elements;return this.x=e[0]*b+e[3]*c+e[6]*d,this.y=e[1]*b+e[4]*c+e[7]*d,this.z=e[2]*b+e[5]*c+e[8]*d,this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=a.elements,f=1/(e[3]*b+e[7]*c+e[11]*d+e[15]);return this.x=(e[0]*b+e[4]*c+e[8]*d+e[12])*f,this.y=(e[1]*b+e[5]*c+e[9]*d+e[13])*f,this.z=(e[2]*b+e[6]*c+e[10]*d+e[14])*f,this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z,h=a.w,i=h*b+f*d-g*c,j=h*c+g*b-e*d,k=h*d+e*c-f*b,l=-e*b-f*c-g*d;return this.x=i*h+l*-e+j*-g-k*-f,this.y=j*h+l*-f+k*-e-i*-g,this.z=k*h+l*-g+i*-f-j*-e,this},project:function(){var a=new d;return function(b){return a.multiplyMatrices(b.projectionMatrix,a.getInverse(b.matrixWorld)),this.applyMatrix4(a)}}(),unproject:function(){var a=new d;return function(b){return a.multiplyMatrices(b.matrixWorld,a.getInverse(b.projectionMatrix)),this.applyMatrix4(a)}}(),transformDirection:function(a){var b=this.x,c=this.y,d=this.z,e=a.elements;return this.x=e[0]*b+e[4]*c+e[8]*d,this.y=e[1]*b+e[5]*c+e[9]*d,this.z=e[2]*b+e[6]*c+e[10]*d,this.normalize()},divide:function(a){return this.x/=a.x,this.y/=a.y,this.z/=a.z,this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this},max:function(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this},clamp:function(a,b){return this.x=Math.max(a.x,Math.min(b.x,this.x)),this.y=Math.max(a.y,Math.min(b.y,this.y)),this.z=Math.max(a.z,Math.min(b.z,this.z)),this},clampScalar:function(){var a=new f,b=new f;return function(c,d){return a.set(c,c,c),b.set(d,d,d),this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){return this.x+=(a.x-this.x)*b,this.y+=(a.y-this.y)*b,this.z+=(a.z-this.z)*b,this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},cross:function(a,b){return void 0!==b?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b)):this.crossVectors(this,a)},crossVectors:function(a,b){var c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;return this.x=d*h-e*g,this.y=e*f-c*h,this.z=c*g-d*f,this},projectOnVector:function(a){var b=a.dot(this)/a.lengthSq();return this.copy(a).multiplyScalar(b)},projectOnPlane:function(){var a=new f;return function(b){return a.copy(this).projectOnVector(b),this.sub(a)}}(),reflect:function(){var a=new f;return function(b){return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){var b=this.dot(a)/Math.sqrt(this.lengthSq()*a.lengthSq());return Math.acos(yd.clamp(b,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y,d=this.z-a.z;return b*b+c*c+d*d},manhattanDistanceTo:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)},setFromSpherical:function(a){var b=Math.sin(a.phi)*a.radius;return this.x=b*Math.sin(a.theta),this.y=Math.cos(a.phi)*a.radius,this.z=b*Math.cos(a.theta),this},setFromCylindrical:function(a){return this.x=a.radius*Math.sin(a.theta),this.y=a.y,this.z=a.radius*Math.cos(a.theta),this},setFromMatrixPosition:function(a){var b=a.elements;return this.x=b[12],this.y=b[13],this.z=b[14],this},setFromMatrixScale:function(a){var b=this.setFromMatrixColumn(a,0).length(),c=this.setFromMatrixColumn(a,1).length(),d=this.setFromMatrixColumn(a,2).length();return this.x=b,this.y=c,this.z=d,this},setFromMatrixColumn:function(a,b){return this.fromArray(a.elements,4*b)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){return void 0===b&&(b=0),this.x=a[b],this.y=a[b+1],this.z=a[b+2],this},toArray:function(a,b){return void 0===a&&(a=[]),void 0===b&&(b=0),a[b]=this.x,a[b+1]=this.y,a[b+2]=this.z,a},fromBufferAttribute:function(a,b,c){return void 0!==c&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=a.getX(b),this.y=a.getY(b),this.z=a.getZ(b),this}}),Object.assign(g.prototype,{isMatrix3:!0,set:function(a,b,c,d,e,f,g,h,i){var j=this.elements;return j[0]=a,j[1]=d,j[2]=g,j[3]=b,j[4]=e,j[5]=h,j[6]=c,j[7]=f,j[8]=i,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(a){var b=this.elements,c=a.elements;return b[0]=c[0],b[1]=c[1],b[2]=c[2],b[3]=c[3],b[4]=c[4],b[5]=c[5],b[6]=c[6],b[7]=c[7],b[8]=c[8],this},setFromMatrix4:function(a){var b=a.elements;return this.set(b[0],b[4],b[8],b[1],b[5],b[9],b[2],b[6],b[10]),this},applyToBufferAttribute:function(){var a=new f;return function(b){for(var c=0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix3(this),b.setXYZ(c,a.x,a.y,a.z);return b}}(),multiply:function(a){return this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[3],h=c[6],i=c[1],j=c[4],k=c[7],l=c[2],m=c[5],n=c[8],o=d[0],p=d[3],q=d[6],r=d[1],s=d[4],t=d[7],u=d[2],v=d[5],w=d[8];return e[0]=f*o+g*r+h*u,e[3]=f*p+g*s+h*v,e[6]=f*q+g*t+h*w,e[1]=i*o+j*r+k*u,e[4]=i*p+j*s+k*v,e[7]=i*q+j*t+k*w,e[2]=l*o+m*r+n*u,e[5]=l*p+m*s+n*v,e[8]=l*q+m*t+n*w,this},multiplyScalar:function(a){var b=this.elements;return b[0]*=a,b[3]*=a,b[6]*=a,b[1]*=a,b[4]*=a,b[7]*=a,b[2]*=a,b[5]*=a,b[8]*=a,this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],i=a[7],j=a[8];return b*f*j-b*g*i-c*e*j+c*g*h+d*e*i-d*f*h},getInverse:function(a,b){a&&a.isMatrix4&&console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");var c=a.elements,d=this.elements,e=c[0],f=c[1],g=c[2],h=c[3],i=c[4],j=c[5],k=c[6],l=c[7],m=c[8],n=m*i-j*l,o=j*k-m*h,p=l*h-i*k,q=e*n+f*o+g*p;if(0===q){var r="THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";if(!0===b)throw new Error(r);return console.warn(r),this.identity()}var s=1/q;return d[0]=n*s,d[1]=(g*l-m*f)*s,d[2]=(j*f-g*i)*s,d[3]=o*s,d[4]=(m*e-g*k)*s,d[5]=(g*h-j*e)*s,d[6]=p*s,d[7]=(f*k-l*e)*s,d[8]=(i*e-f*h)*s,this},transpose:function(){var a,b=this.elements;return a=b[1],b[1]=b[3],b[3]=a,a=b[2],b[2]=b[6],b[6]=a,a=b[5],b[5]=b[7],b[7]=a,this},getNormalMatrix:function(a){return this.setFromMatrix4(a).getInverse(this).transpose()},transposeIntoArray:function(a){var b=this.elements;return a[0]=b[0],a[1]=b[3],a[2]=b[6],a[3]=b[1],a[4]=b[4],a[5]=b[7],a[6]=b[2],a[7]=b[5],a[8]=b[8],this},setUvTransform:function(a,b,c,d,e,f,g){var h=Math.cos(e),i=Math.sin(e);this.set(c*h,c*i,-c*(h*f+i*g)+f+a,-d*i,d*h,-d*(-i*f+h*g)+g+b,0,0,1)},scale:function(a,b){var c=this.elements;return c[0]*=a,c[3]*=a,c[6]*=a,c[1]*=b,c[4]*=b,c[7]*=b,this},rotate:function(a){var b=Math.cos(a),c=Math.sin(a),d=this.elements,e=d[0],f=d[3],g=d[6],h=d[1],i=d[4],j=d[7];return d[0]=b*e+c*h,d[3]=b*f+c*i,d[6]=b*g+c*j,d[1]=-c*e+b*h,d[4]=-c*f+b*i,d[7]=-c*g+b*j,this},translate:function(a,b){var c=this.elements;return c[0]+=a*c[2],c[3]+=a*c[5],c[6]+=a*c[8],c[1]+=b*c[2],c[4]+=b*c[5],c[7]+=b*c[8],this},equals:function(a){for(var b=this.elements,c=a.elements,d=0;d<9;d++)if(b[d]!==c[d])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;c<9;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]),void 0===b&&(b=0);var c=this.elements;return a[b]=c[0],a[b+1]=c[1],a[b+2]=c[2],a[b+3]=c[3],a[b+4]=c[4],a[b+5]=c[5],a[b+6]=c[6],a[b+7]=c[7],a[b+8]=c[8],a}});var zd=0;h.DEFAULT_IMAGE=void 0,h.DEFAULT_MAPPING=vc,h.prototype=Object.assign(Object.create(b.prototype),{constructor:h,isTexture:!0,clone:function(){return(new this.constructor).copy(this)},copy:function(a){return this.name=a.name,this.image=a.image,this.mipmaps=a.mipmaps.slice(0),this.mapping=a.mapping,this.wrapS=a.wrapS,this.wrapT=a.wrapT,this.magFilter=a.magFilter,this.minFilter=a.minFilter,this.anisotropy=a.anisotropy,this.format=a.format,this.type=a.type,this.offset.copy(a.offset),this.repeat.copy(a.repeat),this.center.copy(a.center),this.rotation=a.rotation,this.matrixAutoUpdate=a.matrixAutoUpdate,this.matrix.copy(a.matrix),this.generateMipmaps=a.generateMipmaps,this.premultiplyAlpha=a.premultiplyAlpha,this.flipY=a.flipY,this.unpackAlignment=a.unpackAlignment,this.encoding=a.encoding,this},toJSON:function(a){function b(a){var b;if(a instanceof HTMLCanvasElement)b=a;else{b=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),b.width=a.width,b.height=a.height;var c=b.getContext("2d");a instanceof ImageData?c.putImageData(a,0,0):c.drawImage(a,0,0,a.width,a.height)}return b.width>2048||b.height>2048?b.toDataURL("image/jpeg",.6):b.toDataURL("image/png")}var c=void 0===a||"string"==typeof a;if(!c&&void 0!==a.textures[this.uuid])return a.textures[this.uuid];var d={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY};if(void 0!==this.image){var e=this.image;void 0===e.uuid&&(e.uuid=yd.generateUUID()),c||void 0!==a.images[e.uuid]||(a.images[e.uuid]={uuid:e.uuid,url:b(e)}),d.image=e.uuid}return c||(a.textures[this.uuid]=d),d},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(a){if(this.mapping===vc){if(a.applyMatrix3(this.matrix),a.x<0||a.x>1)switch(this.wrapS){case Dc:a.x=a.x-Math.floor(a.x);break;case Ec:a.x=a.x<0?0:1;break;case Fc:1===Math.abs(Math.floor(a.x)%2)?a.x=Math.ceil(a.x)-a.x:a.x=a.x-Math.floor(a.x)}if(a.y<0||a.y>1)switch(this.wrapT){case Dc:a.y=a.y-Math.floor(a.y);break;case Ec:a.y=a.y<0?0:1;break;case Fc:1===Math.abs(Math.floor(a.y)%2)?a.y=Math.ceil(a.y)-a.y:a.y=a.y-Math.floor(a.y)}this.flipY&&(a.y=1-a.y)}}}),Object.defineProperty(h.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}}),Object.assign(i.prototype,{isVector4:!0,set:function(a,b,c,d){return this.x=a,this.y=b,this.z=c,this.w=d,this},setScalar:function(a){return this.x=a,this.y=a,this.z=a,this.w=a,this},setX:function(a){return this.x=a,this},setY:function(a){return this.y=a,this},setZ:function(a){return this.z=a,this},setW:function(a){return this.w=a,this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw new Error("index is out of range: "+a)}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+a)}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(a){return this.x=a.x,this.y=a.y,this.z=a.z,this.w=void 0!==a.w?a.w:1,this},add:function(a,b){return void 0!==b?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b)):(this.x+=a.x,this.y+=a.y,this.z+=a.z,this.w+=a.w,this)},addScalar:function(a){return this.x+=a,this.y+=a,this.z+=a,this.w+=a,this},addVectors:function(a,b){return this.x=a.x+b.x,this.y=a.y+b.y,this.z=a.z+b.z,this.w=a.w+b.w,this},addScaledVector:function(a,b){return this.x+=a.x*b,this.y+=a.y*b,this.z+=a.z*b,this.w+=a.w*b,this},sub:function(a,b){return void 0!==b?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b)):(this.x-=a.x,this.y-=a.y,this.z-=a.z,this.w-=a.w,this)},subScalar:function(a){return this.x-=a,this.y-=a,this.z-=a,this.w-=a,this},subVectors:function(a,b){return this.x=a.x-b.x,this.y=a.y-b.y,this.z=a.z-b.z,this.w=a.w-b.w,this},multiplyScalar:function(a){return this.x*=a,this.y*=a,this.z*=a,this.w*=a,this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w,f=a.elements;return this.x=f[0]*b+f[4]*c+f[8]*d+f[12]*e,this.y=f[1]*b+f[5]*c+f[9]*d+f[13]*e,this.z=f[2]*b+f[6]*c+f[10]*d+f[14]*e,this.w=f[3]*b+f[7]*c+f[11]*d+f[15]*e,this},divideScalar:function(a){return this.multiplyScalar(1/a)},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);return b<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b),this},setAxisAngleFromRotationMatrix:function(a){var b,c,d,e,f=.01,g=.1,h=a.elements,i=h[0],j=h[4],k=h[8],l=h[1],m=h[5],n=h[9],o=h[2],p=h[6],q=h[10];if(Math.abs(j-l)<f&&Math.abs(k-o)<f&&Math.abs(n-p)<f){if(Math.abs(j+l)<g&&Math.abs(k+o)<g&&Math.abs(n+p)<g&&Math.abs(i+m+q-3)<g)return this.set(1,0,0,0),this;b=Math.PI;var r=(i+1)/2,s=(m+1)/2,t=(q+1)/2,u=(j+l)/4,v=(k+o)/4,w=(n+p)/4;return r>s&&r>t?r<f?(c=0,d=.707106781,e=.707106781):(c=Math.sqrt(r),d=u/c,e=v/c):s>t?s<f?(c=.707106781,d=0,e=.707106781):(d=Math.sqrt(s),c=u/d,e=w/d):t<f?(c=.707106781,d=.707106781,e=0):(e=Math.sqrt(t),c=v/e,d=w/e),this.set(c,d,e,b),this}var x=Math.sqrt((p-n)*(p-n)+(k-o)*(k-o)+(l-j)*(l-j));return Math.abs(x)<.001&&(x=1),this.x=(p-n)/x,this.y=(k-o)/x,this.z=(l-j)/x,this.w=Math.acos((i+m+q-1)/2),this},min:function(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this.w=Math.min(this.w,a.w),this},max:function(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this.w=Math.max(this.w,a.w),this},clamp:function(a,b){return this.x=Math.max(a.x,Math.min(b.x,this.x)),this.y=Math.max(a.y,Math.min(b.y,this.y)),this.z=Math.max(a.z,Math.min(b.z,this.z)),this.w=Math.max(a.w,Math.min(b.w,this.w)),this},clampScalar:function(){var a,b;return function(c,d){return void 0===a&&(a=new i,b=new i),a.set(c,c,c,c),b.set(d,d,d,d),this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){return this.x+=(a.x-this.x)*b,this.y+=(a.y-this.y)*b,this.z+=(a.z-this.z)*b,this.w+=(a.w-this.w)*b,this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a,b){return void 0===b&&(b=0),this.x=a[b],this.y=a[b+1],this.z=a[b+2],this.w=a[b+3],this},toArray:function(a,b){return void 0===a&&(a=[]),void 0===b&&(b=0),a[b]=this.x,a[b+1]=this.y,a[b+2]=this.z,a[b+3]=this.w,a},fromBufferAttribute:function(a,b,c){return void 0!==c&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=a.getX(b),this.y=a.getY(b),this.z=a.getZ(b),this.w=a.getW(b),this}}),j.prototype=Object.assign(Object.create(b.prototype),{constructor:j,isWebGLRenderTarget:!0,setSize:function(a,b){this.width===a&&this.height===b||(this.width=a,this.height=b,this.dispose()),this.viewport.set(0,0,a,b),this.scissor.set(0,0,a,b)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){return this.width=a.width,this.height=a.height,this.viewport.copy(a.viewport),this.texture=a.texture.clone(),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.depthTexture=a.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),k.prototype=Object.create(h.prototype),k.prototype.constructor=k,k.prototype.isDataTexture=!0,l.prototype=Object.create(h.prototype),l.prototype.constructor=l,l.prototype.isCubeTexture=!0,Object.defineProperty(l.prototype,"images",{get:function(){return this.image},set:function(a){this.image=a}});var Ad=new h,Bd=new l,Cd=[],Dd=[],Ed=new Float32Array(16),Fd=new Float32Array(9);Q.prototype.setValue=function(a,b){for(var c=this.seq,d=0,e=c.length;d!==e;++d){var f=c[d];f.setValue(a,b[f.id])}};var Gd=/([\w\d_]+)(\])?(\[|\.)?/g;T.prototype.setValue=function(a,b,c){var d=this.map[b];void 0!==d&&d.setValue(a,c,this.renderer)},T.prototype.setOptional=function(a,b,c){var d=b[c];void 0!==d&&this.setValue(a,c,d)},T.upload=function(a,b,c,d){for(var e=0,f=b.length;e!==f;++e){var g=b[e],h=c[g.id];!1!==h.needsUpdate&&g.setValue(a,h.value,d)}},T.seqWithValue=function(a,b){for(var c=[],d=0,e=a.length;d!==e;++d){var f=a[d];f.id in b&&c.push(f)}return c};var Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Object.assign(U.prototype,{isColor:!0,r:1,g:1,b:1,set:function(a){return a&&a.isColor?this.copy(a):"number"==typeof a?this.setHex(a):"string"==typeof a&&this.setStyle(a),this},setScalar:function(a){return this.r=a,this.g=a,this.b=a,this},setHex:function(a){return a=Math.floor(a),this.r=(a>>16&255)/255,this.g=(a>>8&255)/255,this.b=(255&a)/255,this},setRGB:function(a,b,c){return this.r=a,this.g=b,this.b=c,this},setHSL:function(){function a(a,b,c){return c<0&&(c+=1),c>1&&(c-=1),c<1/6?a+6*(b-a)*c:c<.5?b:c<2/3?a+6*(b-a)*(2/3-c):a}return function(b,c,d){if(b=yd.euclideanModulo(b,1),c=yd.clamp(c,0,1),d=yd.clamp(d,0,1),0===c)this.r=this.g=this.b=d;else{var e=d<=.5?d*(1+c):d+c-d*c,f=2*d-e;this.r=a(f,e,b+1/3),this.g=a(f,e,b),this.b=a(f,e,b-1/3)}return this}}(),setStyle:function(a){function b(b){void 0!==b&&parseFloat(b)<1&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}var c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d,e=c[1],f=c[2];switch(e){case"rgb":case"rgba":if(d=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(f))return this.r=Math.min(255,parseInt(d[1],10))/255,this.g=Math.min(255,parseInt(d[2],10))/255,this.b=Math.min(255,parseInt(d[3],10))/255,b(d[5]),this;if(d=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(f))return this.r=Math.min(100,parseInt(d[1],10))/100,this.g=Math.min(100,parseInt(d[2],10))/100,this.b=Math.min(100,parseInt(d[3],10))/100,b(d[5]),this;break;case"hsl":case"hsla":if(d=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(f)){var g=parseFloat(d[1])/360,h=parseInt(d[2],10)/100,i=parseInt(d[3],10)/100;return b(d[5]),this.setHSL(g,h,i)}}}else if(c=/^\#([A-Fa-f0-9]+)$/.exec(a)){var j=c[1],k=j.length;if(3===k)return this.r=parseInt(j.charAt(0)+j.charAt(0),16)/255,this.g=parseInt(j.charAt(1)+j.charAt(1),16)/255,this.b=parseInt(j.charAt(2)+j.charAt(2),16)/255,this;if(6===k)return this.r=parseInt(j.charAt(0)+j.charAt(1),16)/255,this.g=parseInt(j.charAt(2)+j.charAt(3),16)/255,this.b=parseInt(j.charAt(4)+j.charAt(5),16)/255,this}if(a&&a.length>0){var j=Hd[a];void 0!==j?this.setHex(j):console.warn("THREE.Color: Unknown color "+a)}return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(a){return this.r=a.r,this.g=a.g,this.b=a.b,this},copyGammaToLinear:function(a,b){return void 0===b&&(b=2),this.r=Math.pow(a.r,b),this.g=Math.pow(a.g,b),this.b=Math.pow(a.b,b),this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);var c=b>0?1/b:1;return this.r=Math.pow(a.r,c),this.g=Math.pow(a.g,c),this.b=Math.pow(a.b,c),this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;return this.r=a*a,this.g=b*b,this.b=c*c,this},convertLinearToGamma:function(){return this.r=Math.sqrt(this.r),this.g=Math.sqrt(this.g),this.b=Math.sqrt(this.b),this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){var b,c,d=a||{h:0,s:0,l:0},e=this.r,f=this.g,g=this.b,h=Math.max(e,f,g),i=Math.min(e,f,g),j=(i+h)/2;if(i===h)b=0,c=0;else{var k=h-i;switch(c=j<=.5?k/(h+i):k/(2-h-i),h){case e:b=(f-g)/k+(f<g?6:0);break;case f:b=(g-e)/k+2;break;case g:b=(e-f)/k+4}b/=6}return d.h=b,d.s=c,d.l=j,d},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,b,c){var d=this.getHSL();return d.h+=a,d.s+=b,d.l+=c,this.setHSL(d.h,d.s,d.l),this},add:function(a){return this.r+=a.r,this.g+=a.g,this.b+=a.b,this},addColors:function(a,b){return this.r=a.r+b.r,this.g=a.g+b.g,this.b=a.b+b.b,this},addScalar:function(a){return this.r+=a,this.g+=a,this.b+=a,this},sub:function(a){return this.r=Math.max(0,this.r-a.r),this.g=Math.max(0,this.g-a.g),this.b=Math.max(0,this.b-a.b),this},multiply:function(a){return this.r*=a.r,this.g*=a.g,this.b*=a.b,this},multiplyScalar:function(a){return this.r*=a,this.g*=a,this.b*=a,this},lerp:function(a,b){return this.r+=(a.r-this.r)*b,this.g+=(a.g-this.g)*b,this.b+=(a.b-this.b)*b,this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a,b){return void 0===b&&(b=0),this.r=a[b],this.g=a[b+1],this.b=a[b+2],this},toArray:function(a,b){return void 0===a&&(a=[]),void 0===b&&(b=0),a[b]=this.r,a[b+1]=this.g,a[b+2]=this.b,a},toJSON:function(){return this.getHex()}});var Id={common:{diffuse:{value:new U(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new g},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new c(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new U(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},uvTransform:{value:new g}}},Jd={merge:function(a){for(var b={},c=0;c<a.length;c++){var d=this.clone(a[c]);for(var e in d)b[e]=d[e]}return b},clone:function(a){var b={};for(var c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture)?b[c][d]=e.clone():Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e}}return b}},Kd="#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",Ld="#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",Md="#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",Nd="#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",Od="#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",Pd="\nvec3 transformed = vec3( position );\n",Qd="\nvec3 objectNormal = vec3( normal );\n",Rd="float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.86267 + (0.49788 + 0.01436 * y ) * y;\n\tfloat b = 3.45068 + (4.18814 + y) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = (x > 0.0) ? v : 0.5 * inversesqrt( 1.0 - x * x ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tvec3 result = vec3( LTC_ClippedSphereFormFactor( vectorFormFactor ) );\n\treturn result;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",Sd="#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",Td="#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n",Ud="#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",Vd="#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",Wd="#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",Xd="#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",Yd="#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",Zd="#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",$d="#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",_d="#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n",ae="#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",be="vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",ce="#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",de="#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",ee="#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",fe="#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",ge="  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",he="\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",ie="#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",je="#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",ke="#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",le="#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",me="\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",ne="#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",oe="#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",pe="#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",qe="#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",re="#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",se="#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",te="vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",ue="uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",ve="BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",we="varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",xe="PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",ye="struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tfloat norm = texture2D( ltcMag, uv ).a;\n\t\tvec4 t = texture2D( ltcMat, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3(   1,   0, t.y ),\n\t\t\tvec3(   0, t.z,   0 ),\n\t\t\tvec3( t.w,   0, t.x )\n\t\t);\n\t\treflectedLight.directSpecular += lightColor * material.specularColor * norm * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",ze="\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",Ae="#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",Be="#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",Ce="#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",De="#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n",Ee="#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",Fe="#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",Ge="#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",He="#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n",Ie="float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",Je="#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",Ke="#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",Le="#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",Me="#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",Ne="#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",Oe="#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",Pe="vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",Qe="#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",Re="vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",Se="#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",Te="#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",Ue="float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",Ve="#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",We="#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",Xe="#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",Ye="#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",Ze="float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",$e="#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",_e="#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",af="#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",bf="#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",cf="float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",df="#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",ef="#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",ff="#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",gf="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",hf="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n",jf="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",kf="#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",lf="#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",mf="#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",nf="#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",of="uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",pf="varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n",qf="#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",rf="#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",sf="#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",tf="#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",uf="uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",vf="varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",wf="uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",xf="uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",yf="uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",zf="#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",Af="uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",Bf="#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",Cf="#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",Df="#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",Ef="#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",Ff="#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",Gf="#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",Hf="#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",If="uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",Jf="uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",Kf="uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n",Lf="#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",Mf={alphamap_fragment:Kd,alphamap_pars_fragment:Ld,alphatest_fragment:Md,aomap_fragment:Nd,aomap_pars_fragment:Od,begin_vertex:Pd,beginnormal_vertex:Qd,bsdfs:Rd,bumpmap_pars_fragment:Sd,clipping_planes_fragment:Td,clipping_planes_pars_fragment:Ud,clipping_planes_pars_vertex:Vd,clipping_planes_vertex:Wd,color_fragment:Xd,color_pars_fragment:Yd,color_pars_vertex:Zd,color_vertex:$d,common:_d,cube_uv_reflection_fragment:ae,defaultnormal_vertex:be,displacementmap_pars_vertex:ce,displacementmap_vertex:de,emissivemap_fragment:ee,emissivemap_pars_fragment:fe,encodings_fragment:ge,encodings_pars_fragment:he,envmap_fragment:ie,envmap_pars_fragment:je,envmap_pars_vertex:ke,envmap_vertex:le,fog_vertex:me,fog_pars_vertex:ne,fog_fragment:oe,fog_pars_fragment:pe,gradientmap_pars_fragment:qe,lightmap_fragment:re,lightmap_pars_fragment:se,lights_lambert_vertex:te,lights_pars:ue,lights_phong_fragment:ve,lights_phong_pars_fragment:we,lights_physical_fragment:xe,lights_physical_pars_fragment:ye,lights_template:ze,logdepthbuf_fragment:Ae,logdepthbuf_pars_fragment:Be,logdepthbuf_pars_vertex:Ce,logdepthbuf_vertex:De,map_fragment:Ee,map_pars_fragment:Fe,map_particle_fragment:Ge,map_particle_pars_fragment:He,metalnessmap_fragment:Ie,metalnessmap_pars_fragment:Je,morphnormal_vertex:Ke,morphtarget_pars_vertex:Le,morphtarget_vertex:Me,normal_fragment:Ne,normalmap_pars_fragment:Oe,packing:Pe,premultiplied_alpha_fragment:Qe,project_vertex:Re,dithering_fragment:Se,dithering_pars_fragment:Te,roughnessmap_fragment:Ue,roughnessmap_pars_fragment:Ve,shadowmap_pars_fragment:We,shadowmap_pars_vertex:Xe,shadowmap_vertex:Ye,shadowmask_pars_fragment:Ze,skinbase_vertex:$e,skinning_pars_vertex:_e,skinning_vertex:af,skinnormal_vertex:bf,specularmap_fragment:cf,specularmap_pars_fragment:df,tonemapping_fragment:ef,tonemapping_pars_fragment:ff,uv_pars_fragment:gf,uv_pars_vertex:hf,uv_vertex:jf,uv2_pars_fragment:kf,uv2_pars_vertex:lf,uv2_vertex:mf,worldpos_vertex:nf,cube_frag:of,cube_vert:pf,depth_frag:qf,depth_vert:rf,distanceRGBA_frag:sf,distanceRGBA_vert:tf,equirect_frag:uf,equirect_vert:vf,linedashed_frag:wf,linedashed_vert:xf,meshbasic_frag:yf,meshbasic_vert:zf,meshlambert_frag:Af,meshlambert_vert:Bf,meshphong_frag:Cf,meshphong_vert:Df,meshphysical_frag:Ef,meshphysical_vert:Ff,normal_frag:Gf,normal_vert:Hf,points_frag:If,points_vert:Jf,shadow_frag:Kf,shadow_vert:Lf},Nf={basic:{uniforms:Jd.merge([Id.common,Id.specularmap,Id.envmap,Id.aomap,Id.lightmap,Id.fog]),vertexShader:Mf.meshbasic_vert,fragmentShader:Mf.meshbasic_frag},lambert:{uniforms:Jd.merge([Id.common,Id.specularmap,Id.envmap,Id.aomap,Id.lightmap,Id.emissivemap,Id.fog,Id.lights,{emissive:{value:new U(0)}}]),vertexShader:Mf.meshlambert_vert,fragmentShader:Mf.meshlambert_frag},phong:{uniforms:Jd.merge([Id.common,Id.specularmap,Id.envmap,Id.aomap,Id.lightmap,Id.emissivemap,Id.bumpmap,Id.normalmap,Id.displacementmap,Id.gradientmap,Id.fog,Id.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30}}]),vertexShader:Mf.meshphong_vert,fragmentShader:Mf.meshphong_frag},standard:{uniforms:Jd.merge([Id.common,Id.envmap,Id.aomap,Id.lightmap,Id.emissivemap,Id.bumpmap,Id.normalmap,Id.displacementmap,Id.roughnessmap,Id.metalnessmap,Id.fog,Id.lights,{emissive:{value:new U(0)},roughness:{value:.5},metalness:{value:.5},envMapIntensity:{value:1}}]),vertexShader:Mf.meshphysical_vert,fragmentShader:Mf.meshphysical_frag},points:{uniforms:Jd.merge([Id.points,Id.fog]),vertexShader:Mf.points_vert,fragmentShader:Mf.points_frag},dashed:{uniforms:Jd.merge([Id.common,Id.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mf.linedashed_vert,fragmentShader:Mf.linedashed_frag},depth:{uniforms:Jd.merge([Id.common,Id.displacementmap]),vertexShader:Mf.depth_vert,fragmentShader:Mf.depth_frag},normal:{uniforms:Jd.merge([Id.common,Id.bumpmap,Id.normalmap,Id.displacementmap,{opacity:{value:1}}]),vertexShader:Mf.normal_vert,fragmentShader:Mf.normal_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mf.cube_vert,fragmentShader:Mf.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mf.equirect_vert,fragmentShader:Mf.equirect_frag},distanceRGBA:{uniforms:Jd.merge([Id.common,Id.displacementmap,{referencePosition:{value:new f},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mf.distanceRGBA_vert,fragmentShader:Mf.distanceRGBA_frag},shadow:{uniforms:Jd.merge([Id.lights,Id.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:Mf.shadow_vert,fragmentShader:Mf.shadow_frag}};Nf.physical={uniforms:Jd.merge([Nf.standard.uniforms,{clearCoat:{value:0},clearCoatRoughness:{value:0}}]),vertexShader:Mf.meshphysical_vert,fragmentShader:Mf.meshphysical_frag},Object.assign(V.prototype,{set:function(a,b){return this.min.copy(a),this.max.copy(b),this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new c;return function(b,c){var d=a.copy(c).multiplyScalar(.5);return this.min.copy(b).sub(d),this.max.copy(b).add(d),this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){return this.min.copy(a.min),this.max.copy(a.max),this},makeEmpty:function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(a){var b=a||new c;return this.isEmpty()?b.set(0,0):b.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){var b=a||new c;return this.isEmpty()?b.set(0,0):b.subVectors(this.max,this.min)},expandByPoint:function(a){return this.min.min(a),this.max.max(a),this},expandByVector:function(a){return this.min.sub(a),this.max.add(a),this},expandByScalar:function(a){return this.min.addScalar(-a),this.max.addScalar(a),this},containsPoint:function(a){return!(a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y)},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y},getParameter:function(a,b){return(b||new c).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(a){return!(a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y)},clampPoint:function(a,b){return(b||new c).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new c;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){return this.min.max(a.min),this.max.min(a.max),this},union:function(a){return this.min.min(a.min),this.max.max(a.max),this},translate:function(a){return this.min.add(a),this.max.add(a),this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}}),X.prototype=Object.create(h.prototype),X.prototype.constructor=X;var Of=0;Z.prototype=Object.assign(Object.create(b.prototype),{constructor:Z,isMaterial:!0,onBeforeCompile:function(){},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0!==c)if("shading"!==b){var d=this[b];void 0!==d?d&&d.isColor?d.set(c):d&&d.isVector3&&c&&c.isVector3?d.copy(c):this[b]="overdraw"===b?Number(c):c:console.warn("THREE."+this.type+": '"+b+"' is not a property of this material.")}else console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=c===Jb;else console.warn("THREE.Material: '"+b+"' parameter is undefined.")}},toJSON:function(a){function b(a){var b=[];for(var c in a){var d=a[c];delete d.metadata,b.push(d)}return b}var c=void 0===a||"string"==typeof a;c&&(a={textures:{},images:{}});var d={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};if(d.uuid=this.uuid,d.type=this.type,""!==this.name&&(d.name=this.name),this.color&&this.color.isColor&&(d.color=this.color.getHex()),void 0!==this.roughness&&(d.roughness=this.roughness),void 0!==this.metalness&&(d.metalness=this.metalness),this.emissive&&this.emissive.isColor&&(d.emissive=this.emissive.getHex()),1!==this.emissiveIntensity&&(d.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(d.specular=this.specular.getHex()),void 0!==this.shininess&&(d.shininess=this.shininess),void 0!==this.clearCoat&&(d.clearCoat=this.clearCoat),void 0!==this.clearCoatRoughness&&(d.clearCoatRoughness=this.clearCoatRoughness),this.map&&this.map.isTexture&&(d.map=this.map.toJSON(a).uuid),this.alphaMap&&this.alphaMap.isTexture&&(d.alphaMap=this.alphaMap.toJSON(a).uuid),this.lightMap&&this.lightMap.isTexture&&(d.lightMap=this.lightMap.toJSON(a).uuid),this.bumpMap&&this.bumpMap.isTexture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,d.displacementScale=this.displacementScale,d.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(d.emissiveMap=this.emissiveMap.toJSON(a).uuid),this.specularMap&&this.specularMap.isTexture&&(d.specularMap=this.specularMap.toJSON(a).uuid),this.envMap&&this.envMap.isTexture&&(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=this.reflectivity),this.gradientMap&&this.gradientMap.isTexture&&(d.gradientMap=this.gradientMap.toJSON(a).uuid),void 0!==this.size&&(d.size=this.size),void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation),this.blending!==Mb&&(d.blending=this.blending),!0===this.flatShading&&(d.flatShading=this.flatShading),this.side!==Gb&&(d.side=this.side),this.vertexColors!==Kb&&(d.vertexColors=this.vertexColors),this.opacity<1&&(d.opacity=this.opacity),!0===this.transparent&&(d.transparent=this.transparent),d.depthFunc=this.depthFunc,d.depthTest=this.depthTest,d.depthWrite=this.depthWrite,0!==this.rotation&&(d.rotation=this.rotation),1!==this.linewidth&&(d.linewidth=this.linewidth),void 0!==this.dashSize&&(d.dashSize=this.dashSize),void 0!==this.gapSize&&(d.gapSize=this.gapSize),void 0!==this.scale&&(d.scale=this.scale),!0===this.dithering&&(d.dithering=!0),this.alphaTest>0&&(d.alphaTest=this.alphaTest),!0===this.premultipliedAlpha&&(d.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(d.wireframe=this.wireframe),this.wireframeLinewidth>1&&(d.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(d.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(d.wireframeLinejoin=this.wireframeLinejoin),!0===this.morphTargets&&(d.morphTargets=!0),!0===this.skinning&&(d.skinning=!0),!1===this.visible&&(d.visible=!1),"{}"!==JSON.stringify(this.userData)&&(d.userData=this.userData),c){var e=b(a.textures),f=b(a.images);e.length>0&&(d.textures=e),f.length>0&&(d.images=f)}return d},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name,this.fog=a.fog,this.lights=a.lights,this.blending=a.blending,this.side=a.side,this.flatShading=a.flatShading,this.vertexColors=a.vertexColors,this.opacity=a.opacity,this.transparent=a.transparent,this.blendSrc=a.blendSrc,this.blendDst=a.blendDst,this.blendEquation=a.blendEquation,this.blendSrcAlpha=a.blendSrcAlpha,this.blendDstAlpha=a.blendDstAlpha,this.blendEquationAlpha=a.blendEquationAlpha,this.depthFunc=a.depthFunc,this.depthTest=a.depthTest,this.depthWrite=a.depthWrite,this.colorWrite=a.colorWrite,this.precision=a.precision,this.polygonOffset=a.polygonOffset,this.polygonOffsetFactor=a.polygonOffsetFactor,this.polygonOffsetUnits=a.polygonOffsetUnits,this.dithering=a.dithering,this.alphaTest=a.alphaTest,this.premultipliedAlpha=a.premultipliedAlpha,this.overdraw=a.overdraw,this.visible=a.visible,this.userData=JSON.parse(JSON.stringify(a.userData)),this.clipShadows=a.clipShadows,this.clipIntersection=a.clipIntersection;var b=a.clippingPlanes,c=null;if(null!==b){var d=b.length;c=new Array(d);for(var e=0;e!==d;++e)c[e]=b[e].clone()}return this.clippingPlanes=c,this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),$.prototype=Object.create(Z.prototype),$.prototype.constructor=$,$.prototype.isMeshDepthMaterial=!0,$.prototype.copy=function(a){return Z.prototype.copy.call(this,a),this.depthPacking=a.depthPacking,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this},_.prototype=Object.create(Z.prototype),_.prototype.constructor=_,_.prototype.isMeshDistanceMaterial=!0,_.prototype.copy=function(a){return Z.prototype.copy.call(this,a),this.referencePosition.copy(a.referencePosition),this.nearDistance=a.nearDistance,this.farDistance=a.farDistance,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this},Object.assign(aa.prototype,{isBox3:!0,set:function(a,b){return this.min.copy(a),this.max.copy(b),this},setFromArray:function(a){for(var b=1/0,c=1/0,d=1/0,e=-1/0,f=-1/0,g=-1/0,h=0,i=a.length;h<i;h+=3){var j=a[h],k=a[h+1],l=a[h+2];j<b&&(b=j),k<c&&(c=k),l<d&&(d=l),j>e&&(e=j),k>f&&(f=k),l>g&&(g=l)}return this.min.set(b,c,d),this.max.set(e,f,g),this},setFromBufferAttribute:function(a){for(var b=1/0,c=1/0,d=1/0,e=-1/0,f=-1/0,g=-1/0,h=0,i=a.count;h<i;h++){var j=a.getX(h),k=a.getY(h),l=a.getZ(h);j<b&&(b=j),k<c&&(c=k),l<d&&(d=l),j>e&&(e=j),k>f&&(f=k),l>g&&(g=l)}return this.min.set(b,c,d),this.max.set(e,f,g),this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new f;return function(b,c){var d=a.copy(c).multiplyScalar(.5);return this.min.copy(b).sub(d),this.max.copy(b).add(d),this}}(),setFromObject:function(a){return this.makeEmpty(),this.expandByObject(a)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){return this.min.copy(a.min),this.max.copy(a.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(a){var b=a||new f;return this.isEmpty()?b.set(0,0,0):b.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){var b=a||new f;return this.isEmpty()?b.set(0,0,0):b.subVectors(this.max,this.min)},expandByPoint:function(a){return this.min.min(a),this.max.max(a),this},expandByVector:function(a){return this.min.sub(a),this.max.add(a),this},expandByScalar:function(a){return this.min.addScalar(-a),this.max.addScalar(a),this},expandByObject:function(){function a(a){var f=a.geometry;if(void 0!==f)if(f.isGeometry){var g=f.vertices;for(c=0,d=g.length;c<d;c++)e.copy(g[c]),e.applyMatrix4(a.matrixWorld),b.expandByPoint(e)}else if(f.isBufferGeometry){var h=f.attributes.position;if(void 0!==h)for(c=0,d=h.count;c<d;c++)e.fromBufferAttribute(h,c).applyMatrix4(a.matrixWorld),b.expandByPoint(e)}}var b,c,d,e=new f;return function(c){return b=this,c.updateMatrixWorld(!0),c.traverse(a),this}}(),containsPoint:function(a){return!(a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z)},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z},getParameter:function(a,b){return(b||new f).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(a){return!(a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z)},intersectsSphere:function(){var a=new f;return function(b){return this.clampPoint(b.center,a),a.distanceToSquared(b.center)<=b.radius*b.radius}}(),intersectsPlane:function(a){var b,c;return a.normal.x>0?(b=a.normal.x*this.min.x,c=a.normal.x*this.max.x):(b=a.normal.x*this.max.x,c=a.normal.x*this.min.x),a.normal.y>0?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y),a.normal.z>0?(b+=a.normal.z*this.min.z,c+=a.normal.z*this.max.z):(b+=a.normal.z*this.max.z,c+=a.normal.z*this.min.z),b<=a.constant&&c>=a.constant},clampPoint:function(a,b){return(b||new f).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new f;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=new f;return function(b){var c=b||new ba;return this.getCenter(c.center),c.radius=.5*this.getSize(a).length(),c}}(),intersect:function(a){return this.min.max(a.min),this.max.min(a.max),this.isEmpty()&&this.makeEmpty(),this},union:function(a){return this.min.min(a.min),this.max.max(a.max),this},applyMatrix4:function(){var a=[new f,new f,new f,new f,new f,new f,new f,new f];return function(b){return this.isEmpty()?this:(a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(b),a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b),a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b),a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b),a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b),a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b),a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b),a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b),this.setFromPoints(a),this)}}(),translate:function(a){return this.min.add(a),this.max.add(a),this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}}),Object.assign(ba.prototype,{set:function(a,b){return this.center.copy(a),this.radius=b,this},setFromPoints:function(){var a=new aa;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).getCenter(d);for(var e=0,f=0,g=b.length;f<g;f++)e=Math.max(e,d.distanceToSquared(b[f]));return this.radius=Math.sqrt(e),this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){return this.center.copy(a.center),this.radius=a.radius,this},empty:function(){return this.radius<=0},containsPoint:function(a){return a.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},intersectsBox:function(a){return a.intersectsSphere(this)},intersectsPlane:function(a){return Math.abs(a.distanceToPoint(this.center))<=this.radius},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new f;return d.copy(a),c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center)),d},getBoundingBox:function(a){var b=a||new aa;return b.set(this.center,this.center),b.expandByScalar(this.radius),b},applyMatrix4:function(a){return this.center.applyMatrix4(a),this.radius=this.radius*a.getMaxScaleOnAxis(),this},translate:function(a){return this.center.add(a),this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius}}),Object.assign(ca.prototype,{set:function(a,b){return this.normal.copy(a),this.constant=b,this},setComponents:function(a,b,c,d){return this.normal.set(a,b,c),this.constant=d,this},setFromNormalAndCoplanarPoint:function(a,b){return this.normal.copy(a),this.constant=-b.dot(this.normal),this},setFromCoplanarPoints:function(){var a=new f,b=new f;return function(c,d,e){var f=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();return this.setFromNormalAndCoplanarPoint(f,c),this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){return this.normal.copy(a.normal),this.constant=a.constant,this},normalize:function(){var a=1/this.normal.length();return this.normal.multiplyScalar(a),this.constant*=a,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return(b||new f).copy(this.normal).multiplyScalar(-this.distanceToPoint(a)).add(a)},intersectLine:function(){var a=new f;return function(b,c){var d=c||new f,e=b.delta(a),g=this.normal.dot(e);if(0!==g){var h=-(b.start.dot(this.normal)+this.constant)/g;if(!(h<0||h>1))return d.copy(e).multiplyScalar(h).add(b.start)}else if(0===this.distanceToPoint(b.start))return d.copy(b.start)}}(),intersectsLine:function(a){var b=this.distanceToPoint(a.start),c=this.distanceToPoint(a.end);return b<0&&c>0||c<0&&b>0},intersectsBox:function(a){return a.intersectsPlane(this)},intersectsSphere:function(a){return a.intersectsPlane(this)},coplanarPoint:function(a){return(a||new f).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new f,b=new g;return function(c,d){var e=d||b.getNormalMatrix(c),f=this.coplanarPoint(a).applyMatrix4(c),g=this.normal.applyMatrix3(e).normalize();return this.constant=-f.dot(g),this}}(),translate:function(a){return this.constant-=a.dot(this.normal),this},equals:function(a){return a.normal.equals(this.normal)&&a.constant===this.constant}}),Object.assign(da.prototype,{set:function(a,b,c,d,e,f){var g=this.planes;return g[0].copy(a),g[1].copy(b),g[2].copy(c),g[3].copy(d),g[4].copy(e),g[5].copy(f),this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){for(var b=this.planes,c=0;c<6;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements,d=c[0],e=c[1],f=c[2],g=c[3],h=c[4],i=c[5],j=c[6],k=c[7],l=c[8],m=c[9],n=c[10],o=c[11],p=c[12],q=c[13],r=c[14],s=c[15];return b[0].setComponents(g-d,k-h,o-l,s-p).normalize(),b[1].setComponents(g+d,k+h,o+l,s+p).normalize(),b[2].setComponents(g+e,k+i,o+m,s+q).normalize(),b[3].setComponents(g-e,k-i,o-m,s-q).normalize(),b[4].setComponents(g-f,k-j,o-n,s-r).normalize(),b[5].setComponents(g+f,k+j,o+n,s+r).normalize(),this},intersectsObject:function(){var a=new ba;return function(b){var c=b.geometry;return null===c.boundingSphere&&c.computeBoundingSphere(),a.copy(c.boundingSphere).applyMatrix4(b.matrixWorld),this.intersectsSphere(a)}}(),intersectsSprite:function(){var a=new ba;return function(b){return a.center.set(0,0,0),a.radius=.7071067811865476,a.applyMatrix4(b.matrixWorld),this.intersectsSphere(a)}}(),intersectsSphere:function(a){for(var b=this.planes,c=a.center,d=-a.radius,e=0;e<6;e++){if(b[e].distanceToPoint(c)<d)return!1}return!0},intersectsBox:function(){var a=new f,b=new f;return function(c){for(var d=this.planes,e=0;e<6;e++){var f=d[e];a.x=f.normal.x>0?c.min.x:c.max.x,b.x=f.normal.x>0?c.max.x:c.min.x,a.y=f.normal.y>0?c.min.y:c.max.y,b.y=f.normal.y>0?c.max.y:c.min.y,a.z=f.normal.z>0?c.min.z:c.max.z,b.z=f.normal.z>0?c.max.z:c.min.z;var g=f.distanceToPoint(a),h=f.distanceToPoint(b);if(g<0&&h<0)return!1}return!0}}(),containsPoint:function(a){for(var b=this.planes,c=0;c<6;c++)if(b[c].distanceToPoint(a)<0)return!1;return!0}}),ga.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"],ga.DefaultOrder="XYZ",Object.defineProperties(ga.prototype,{x:{get:function(){return this._x},set:function(a){this._x=a,this.onChangeCallback()}},y:{get:function(){return this._y},set:function(a){this._y=a,this.onChangeCallback()}},z:{get:function(){return this._z},set:function(a){this._z=a,this.onChangeCallback()}},order:{get:function(){return this._order},set:function(a){this._order=a,this.onChangeCallback()}}}),Object.assign(ga.prototype,{isEuler:!0,set:function(a,b,c,d){return this._x=a,this._y=b,this._z=c,this._order=d||this._order,this.onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(a){return this._x=a._x,this._y=a._y,this._z=a._z,this._order=a._order,this.onChangeCallback(),this},setFromRotationMatrix:function(a,b,c){var d=yd.clamp,e=a.elements,f=e[0],g=e[4],h=e[8],i=e[1],j=e[5],k=e[9],l=e[2],m=e[6],n=e[10];return b=b||this._order,"XYZ"===b?(this._y=Math.asin(d(h,-1,1)),Math.abs(h)<.99999?(this._x=Math.atan2(-k,n),this._z=Math.atan2(-g,f)):(this._x=Math.atan2(m,j),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(k,-1,1)),Math.abs(k)<.99999?(this._y=Math.atan2(h,n),this._z=Math.atan2(i,j)):(this._y=Math.atan2(-l,f),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(m,-1,1)),Math.abs(m)<.99999?(this._y=Math.atan2(-l,n),this._z=Math.atan2(-g,j)):(this._y=0,this._z=Math.atan2(i,f))):"ZYX"===b?(this._y=Math.asin(-d(l,-1,1)),Math.abs(l)<.99999?(this._x=Math.atan2(m,n),this._z=Math.atan2(i,f)):(this._x=0,this._z=Math.atan2(-g,j))):"YZX"===b?(this._z=Math.asin(d(i,-1,1)),Math.abs(i)<.99999?(this._x=Math.atan2(-k,j),this._y=Math.atan2(-l,f)):(this._x=0,this._y=Math.atan2(h,n))):"XZY"===b?(this._z=Math.asin(-d(g,-1,1)),Math.abs(g)<.99999?(this._x=Math.atan2(m,j),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-k,n),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b),this._order=b,!1!==c&&this.onChangeCallback(),this},setFromQuaternion:function(){var a=new d;return function(b,c,d){return a.makeRotationFromQuaternion(b),this.setFromRotationMatrix(a,c,d)}}(),setFromVector3:function(a,b){return this.set(a.x,a.y,a.z,b||this._order)},reorder:function(){var a=new e;return function(b){return a.setFromEuler(this),this.setFromQuaternion(a,b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){return this._x=a[0],this._y=a[1],this._z=a[2],void 0!==a[3]&&(this._order=a[3]),this.onChangeCallback(),this},toArray:function(a,b){return void 0===a&&(a=[]),void 0===b&&(b=0),a[b]=this._x,a[b+1]=this._y,a[b+2]=this._z,a[b+3]=this._order,a},toVector3:function(a){return a?a.set(this._x,this._y,this._z):new f(this._x,this._y,this._z)},onChange:function(a){return this.onChangeCallback=a,this},onChangeCallback:function(){}}),Object.assign(ha.prototype,{set:function(a){this.mask=1<<a|0},enable:function(a){this.mask|=1<<a|0},toggle:function(a){this.mask^=1<<a|0},disable:function(a){this.mask&=~(1<<a|0)},test:function(a){return 0!=(this.mask&a.mask)}});var Pf=0;ia.DefaultUp=new f(0,1,0),ia.DefaultMatrixAutoUpdate=!0,ia.prototype=Object.assign(Object.create(b.prototype),{constructor:ia,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(a){return this.quaternion.premultiply(a),this},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new e;return function(b,c){return a.setFromAxisAngle(b,c),this.quaternion.multiply(a),this}}(),rotateOnWorldAxis:function(){var a=new e;return function(b,c){return a.setFromAxisAngle(b,c),this.quaternion.premultiply(a),this}}(),rotateX:function(){var a=new f(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new f(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new f(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new f;return function(b,c){return a.copy(b).applyQuaternion(this.quaternion),this.position.add(a.multiplyScalar(c)),this}}(),translateX:function(){var a=new f(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new f(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new f(0,0,1);return function(b){return this.translateOnAxis(a,b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new d;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),lookAt:function(){var a=new d,b=new f;return function(c,d,e){c.isVector3?b.copy(c):b.set(c,d,e),this.isCamera?a.lookAt(this.position,b,this.up):a.lookAt(b,this.position,this.up),this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(arguments.length>1){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}return a===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this):(a&&a.isObject3D?(null!==a.parent&&a.parent.remove(a),a.parent=this,a.dispatchEvent({type:"added"}),this.children.push(a)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a),this)},remove:function(a){if(arguments.length>1){for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);return this}var c=this.children.indexOf(a);return-1!==c&&(a.parent=null,a.dispatchEvent({type:"removed"}),this.children.splice(c,1)),this},getObjectById:function(a){return this.getObjectByProperty("id",a)},getObjectByName:function(a){return this.getObjectByProperty("name",a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c],f=e.getObjectByProperty(a,b);if(void 0!==f)return f}},getWorldPosition:function(a){var b=a||new f;return this.updateMatrixWorld(!0),b.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var a=new f,b=new f;return function(c){var d=c||new e;return this.updateMatrixWorld(!0),this.matrixWorld.decompose(a,d,b),d}}(),getWorldRotation:function(){var a=new e;return function(b){var c=b||new ga;return this.getWorldQuaternion(a),c.setFromQuaternion(a,this.rotation.order,!1)}}(),getWorldScale:function(){var a=new f,b=new e;return function(c){var d=c||new f;return this.updateMatrixWorld(!0),this.matrixWorld.decompose(a,b,d),d}}(),getWorldDirection:function(){var a=new e;return function(b){var c=b||new f;return this.getWorldQuaternion(a),c.set(0,0,1).applyQuaternion(a)}}(),raycast:function(){},traverse:function(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverse(a)},traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverseVisible(a)}},traverseAncestors:function(a){var b=this.parent;null!==b&&(a(b),b.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].updateMatrixWorld(a)},toJSON:function(a){function b(b,c){return void 0===b[c.uuid]&&(b[c.uuid]=c.toJSON(a)),c.uuid}function c(a){var b=[];for(var c in a){var d=a[c];delete d.metadata,b.push(d)}return b}var d=void 0===a||"string"==typeof a,e={};d&&(a={geometries:{},materials:{},textures:{},images:{},shapes:{}},e.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});var f={};if(f.uuid=this.uuid,f.type=this.type,""!==this.name&&(f.name=this.name),!0===this.castShadow&&(f.castShadow=!0),!0===this.receiveShadow&&(f.receiveShadow=!0),!1===this.visible&&(f.visible=!1),"{}"!==JSON.stringify(this.userData)&&(f.userData=this.userData),f.matrix=this.matrix.toArray(),void 0!==this.geometry){f.geometry=b(a.geometries,this.geometry);var g=this.geometry.parameters;if(void 0!==g&&void 0!==g.shapes){var h=g.shapes;if(Array.isArray(h))for(var i=0,j=h.length;i<j;i++){var k=h[i];b(a.shapes,k)}else b(a.shapes,h)}}if(void 0!==this.material)if(Array.isArray(this.material)){for(var l=[],i=0,j=this.material.length;i<j;i++)l.push(b(a.materials,this.material[i]));f.material=l}else f.material=b(a.materials,this.material);if(this.children.length>0){f.children=[];for(var i=0;i<this.children.length;i++)f.children.push(this.children[i].toJSON(a).object)}if(d){var m=c(a.geometries),n=c(a.materials),o=c(a.textures),p=c(a.images),h=c(a.shapes);m.length>0&&(e.geometries=m),n.length>0&&(e.materials=n),o.length>0&&(e.textures=o),p.length>0&&(e.images=p),h.length>0&&(e.shapes=h)}return e.object=f,e},clone:function(a){return(new this.constructor).copy(this,a)},copy:function(a,b){if(void 0===b&&(b=!0),this.name=a.name,this.up.copy(a.up),this.position.copy(a.position),this.quaternion.copy(a.quaternion),this.scale.copy(a.scale),this.matrix.copy(a.matrix),this.matrixWorld.copy(a.matrixWorld),this.matrixAutoUpdate=a.matrixAutoUpdate,this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate,this.layers.mask=a.layers.mask,this.visible=a.visible,this.castShadow=a.castShadow,this.receiveShadow=a.receiveShadow,this.frustumCulled=a.frustumCulled,this.renderOrder=a.renderOrder,this.userData=JSON.parse(JSON.stringify(a.userData)),!0===b)for(var c=0;c<a.children.length;c++){var d=a.children[c];this.add(d.clone())}return this}}),ja.prototype=Object.assign(Object.create(ia.prototype),{constructor:ja,isCamera:!0,copy:function(a,b){return ia.prototype.copy.call(this,a,b),this.matrixWorldInverse.copy(a.matrixWorldInverse),this.projectionMatrix.copy(a.projectionMatrix),this},getWorldDirection:function(){var a=new e;return function(b){var c=b||new f;return this.getWorldQuaternion(a),c.set(0,0,-1).applyQuaternion(a)}}(),updateMatrixWorld:function(a){ia.prototype.updateMatrixWorld.call(this,a),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return(new this.constructor).copy(this)}}),ka.prototype=Object.assign(Object.create(ja.prototype),{constructor:ka,isOrthographicCamera:!0,copy:function(a,b){return ja.prototype.copy.call(this,a,b),this.left=a.left,this.right=a.right,this.top=a.top,this.bottom=a.bottom,this.near=a.near,this.far=a.far,this.zoom=a.zoom,this.view=null===a.view?null:Object.assign({},a.view),this},setViewOffset:function(a,b,c,d,e,f){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=a,this.view.fullHeight=b,this.view.offsetX=c,this.view.offsetY=d,this.view.width=e,this.view.height=f,this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2,e=c-a,f=c+a,g=d+b,h=d-b;if(null!==this.view&&this.view.enabled){var i=this.zoom/(this.view.width/this.view.fullWidth),j=this.zoom/(this.view.height/this.view.fullHeight),k=(this.right-this.left)/this.view.width,l=(this.top-this.bottom)/this.view.height;e+=k*(this.view.offsetX/i),f=e+k*(this.view.width/i),g-=l*(this.view.offsetY/j),h=g-l*(this.view.height/j)}this.projectionMatrix.makeOrthographic(e,f,g,h,this.near,this.far)},toJSON:function(a){var b=ia.prototype.toJSON.call(this,a);return b.object.zoom=this.zoom,b.object.left=this.left,b.object.right=this.right,b.object.top=this.top,b.object.bottom=this.bottom,b.object.near=this.near,b.object.far=this.far,null!==this.view&&(b.object.view=Object.assign({},this.view)),b}}),Object.assign(la.prototype,{clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a=a.a,this.b=a.b,this.c=a.c,this.normal.copy(a.normal),this.color.copy(a.color),this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++)this.vertexNormals[b]=a.vertexNormals[b].clone();for(var b=0,c=a.vertexColors.length;b<c;b++)this.vertexColors[b]=a.vertexColors[b].clone();return this}});var Qf=0;ma.prototype=Object.assign(Object.create(b.prototype),{constructor:ma,isGeometry:!0,applyMatrix:function(a){for(var b=(new g).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++){this.vertices[c].applyMatrix4(a)}for(var c=0,d=this.faces.length;c<d;c++){var e=this.faces[c];e.normal.applyMatrix3(b).normalize();for(var f=0,h=e.vertexNormals.length;f<h;f++)e.vertexNormals[f].applyMatrix3(b).normalize()}return null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(){var a=new d;return function(b){return a.makeRotationX(b),this.applyMatrix(a),this}}(),rotateY:function(){var a=new d;return function(b){return a.makeRotationY(b),this.applyMatrix(a),this}}(),rotateZ:function(){var a=new d;return function(b){return a.makeRotationZ(b),this.applyMatrix(a),this}}(),translate:function(){var a=new d;return function(b,c,d){return a.makeTranslation(b,c,d),this.applyMatrix(a),this}}(),scale:function(){var a=new d;return function(b,c,d){return a.makeScale(b,c,d),this.applyMatrix(a),this}}(),lookAt:function(){var a=new ia;return function(b){a.lookAt(b),a.updateMatrix(),this.applyMatrix(a.matrix)}}(),fromBufferGeometry:function(a){function b(a,b,c,e){var f=void 0!==i?[m[a].clone(),m[b].clone(),m[c].clone()]:[],g=void 0!==j?[d.colors[a].clone(),d.colors[b].clone(),d.colors[c].clone()]:[],h=new la(a,b,c,f,g,e);d.faces.push(h),void 0!==k&&d.faceVertexUvs[0].push([n[a].clone(),n[b].clone(),n[c].clone()]),void 0!==l&&d.faceVertexUvs[1].push([o[a].clone(),o[b].clone(),o[c].clone()])}var d=this,e=null!==a.index?a.index.array:void 0,g=a.attributes,h=g.position.array,i=void 0!==g.normal?g.normal.array:void 0,j=void 0!==g.color?g.color.array:void 0,k=void 0!==g.uv?g.uv.array:void 0,l=void 0!==g.uv2?g.uv2.array:void 0;void 0!==l&&(this.faceVertexUvs[1]=[]);for(var m=[],n=[],o=[],p=0,q=0;p<h.length;p+=3,q+=2)d.vertices.push(new f(h[p],h[p+1],h[p+2])),void 0!==i&&m.push(new f(i[p],i[p+1],i[p+2])),void 0!==j&&d.colors.push(new U(j[p],j[p+1],j[p+2])),void 0!==k&&n.push(new c(k[q],k[q+1])),void 0!==l&&o.push(new c(l[q],l[q+1]));var r=a.groups;if(r.length>0)for(var p=0;p<r.length;p++)for(var s=r[p],t=s.start,u=s.count,q=t,v=t+u;q<v;q+=3)void 0!==e?b(e[q],e[q+1],e[q+2],s.materialIndex):b(q,q+1,q+2,s.materialIndex);else if(void 0!==e)for(var p=0;p<e.length;p+=3)b(e[p],e[p+1],e[p+2]);else for(var p=0;p<h.length/3;p+=3)b(p,p+1,p+2);return this.computeFaceNormals(),null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone()),null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone()),this},center:function(){this.computeBoundingBox();var a=this.boundingBox.getCenter().negate();return this.translate(a.x,a.y,a.z),a},normalize:function(){this.computeBoundingSphere();var a=this.boundingSphere.center,b=this.boundingSphere.radius,c=0===b?1:1/b,e=new d;return e.set(c,0,0,-c*a.x,0,c,0,-c*a.y,0,0,c,-c*a.z,0,0,0,1),this.applyMatrix(e),this},computeFaceNormals:function(){for(var a=new f,b=new f,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],g=this.vertices[e.a],h=this.vertices[e.b],i=this.vertices[e.c];a.subVectors(i,h),b.subVectors(g,h),a.cross(b),a.normalize(),e.normal.copy(a)}},computeVertexNormals:function(a){void 0===a&&(a=!0);var b,c,d,e,g,h;for(h=new Array(this.vertices.length),b=0,c=this.vertices.length;b<c;b++)h[b]=new f;if(a){var i,j,k,l=new f,m=new f;for(d=0,e=this.faces.length;d<e;d++)g=this.faces[d],i=this.vertices[g.a],j=this.vertices[g.b],k=this.vertices[g.c],l.subVectors(k,j),m.subVectors(i,j),l.cross(m),h[g.a].add(l),h[g.b].add(l),h[g.c].add(l)}else for(this.computeFaceNormals(),d=0,e=this.faces.length;d<e;d++)g=this.faces[d],h[g.a].add(g.normal),h[g.b].add(g.normal),h[g.c].add(g.normal);for(b=0,c=this.vertices.length;b<c;b++)h[b].normalize();for(d=0,e=this.faces.length;d<e;d++){g=this.faces[d];var n=g.vertexNormals;3===n.length?(n[0].copy(h[g.a]),n[1].copy(h[g.b]),n[2].copy(h[g.c])):(n[0]=h[g.a].clone(),n[1]=h[g.b].clone(),n[2]=h[g.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var a,b,c;for(this.computeFaceNormals(),a=0,b=this.faces.length;a<b;a++){c=this.faces[a];var d=c.vertexNormals;3===d.length?(d[0].copy(c.normal),d[1].copy(c.normal),d[2].copy(c.normal)):(d[0]=c.normal.clone(),d[1]=c.normal.clone(),d[2]=c.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var a,b,c,d,e;for(c=0,d=this.faces.length;c<d;c++)for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=e.normal.clone(),e.__originalVertexNormals||(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone();var g=new ma;for(g.faces=this.faces,a=0,b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={},this.morphNormals[a].faceNormals=[],this.morphNormals[a].vertexNormals=[];var h,i,j=this.morphNormals[a].faceNormals,k=this.morphNormals[a].vertexNormals;for(c=0,d=this.faces.length;c<d;c++)h=new f,i={a:new f,b:new f,c:new f},j.push(h),k.push(i)}var l=this.morphNormals[a];g.vertices=this.morphTargets[a].vertices,g.computeFaceNormals(),g.computeVertexNormals();var h,i;for(c=0,d=this.faces.length;c<d;c++)e=this.faces[c],h=l.faceNormals[c],i=l.vertexNormals[c],h.copy(e.normal),i.a.copy(e.vertexNormals[0]),i.b.copy(e.vertexNormals[1]),i.c.copy(e.vertexNormals[2])}for(c=0,d=this.faces.length;c<d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)c>0&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new aa),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new ba),this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(!a||!a.isGeometry)return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a);var d,e=this.vertices.length,f=this.vertices,h=a.vertices,i=this.faces,j=a.faces,k=this.faceVertexUvs[0],l=a.faceVertexUvs[0],m=this.colors,n=a.colors;void 0===c&&(c=0),void 0!==b&&(d=(new g).getNormalMatrix(b));for(var o=0,p=h.length;o<p;o++){var q=h[o],r=q.clone();void 0!==b&&r.applyMatrix4(b),f.push(r)}for(var o=0,p=n.length;o<p;o++)m.push(n[o].clone());for(o=0,p=j.length;o<p;o++){var s,t,u,v=j[o],w=v.vertexNormals,x=v.vertexColors;s=new la(v.a+e,v.b+e,v.c+e),s.normal.copy(v.normal),void 0!==d&&s.normal.applyMatrix3(d).normalize();for(var y=0,z=w.length;y<z;y++)t=w[y].clone(),void 0!==d&&t.applyMatrix3(d).normalize(),s.vertexNormals.push(t);s.color.copy(v.color);for(var y=0,z=x.length;y<z;y++)u=x[y],s.vertexColors.push(u.clone());s.materialIndex=v.materialIndex+c,i.push(s)}for(o=0,p=l.length;o<p;o++){var A=l[o],B=[];if(void 0!==A){for(var y=0,z=A.length;y<z;y++)B.push(A[y].clone());k.push(B)}}},mergeMesh:function(a){if(!a||!a.isMesh)return void console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a);a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix)},mergeVertices:function(){var a,b,c,d,e,f,g,h,i={},j=[],k=[],l=4,m=Math.pow(10,l);for(c=0,d=this.vertices.length;c<d;c++)a=this.vertices[c],b=Math.round(a.x*m)+"_"+Math.round(a.y*m)+"_"+Math.round(a.z*m),void 0===i[b]?(i[b]=c,j.push(this.vertices[c]),k[c]=j.length-1):k[c]=k[i[b]];var n=[];for(c=0,d=this.faces.length;c<d;c++){e=this.faces[c],e.a=k[e.a],e.b=k[e.b],e.c=k[e.c],f=[e.a,e.b,e.c];for(var o=0;o<3;o++)if(f[o]===f[(o+1)%3]){n.push(c);break}}for(c=n.length-1;c>=0;c--){var p=n[c];for(this.faces.splice(p,1),g=0,h=this.faceVertexUvs.length;g<h;g++)this.faceVertexUvs[g].splice(p,1)}var q=this.vertices.length-j.length;return this.vertices=j,q},setFromPoints:function(a){this.vertices=[];for(var b=0,c=a.length;b<c;b++){var d=a[b];this.vertices.push(new f(d.x,d.y,d.z||0))}return this},sortFacesByMaterialIndex:function(){function a(a,b){return a.materialIndex-b.materialIndex}for(var b=this.faces,c=b.length,d=0;d<c;d++)b[d]._id=d;b.sort(a);var e,f,g=this.faceVertexUvs[0],h=this.faceVertexUvs[1];g&&g.length===c&&(e=[]),h&&h.length===c&&(f=[]);for(var d=0;d<c;d++){var i=b[d]._id;e&&e.push(g[i]),f&&f.push(h[i])}e&&(this.faceVertexUvs[0]=e),f&&(this.faceVertexUvs[1]=f)},toJSON:function(){function a(a,b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();return void 0!==m[b]?m[b]:(m[b]=l.length/3,l.push(a.x,a.y,a.z),m[b])}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();return void 0!==o[b]?o[b]:(o[b]=n.length,n.push(a.getHex()),o[b])}function d(a){var b=a.x.toString()+a.y.toString();return void 0!==q[b]?q[b]:(q[b]=p.length/2,p.push(a.x,a.y),q[b])}var e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,""!==this.name&&(e.name=this.name),void 0!==this.parameters){var f=this.parameters;for(var g in f)void 0!==f[g]&&(e[g]=f[g]);return e}for(var h=[],i=0;i<this.vertices.length;i++){var j=this.vertices[i];h.push(j.x,j.y,j.z)}for(var k=[],l=[],m={},n=[],o={},p=[],q={},i=0;i<this.faces.length;i++){var r=this.faces[i],s=void 0!==this.faceVertexUvs[0][i],t=r.normal.length()>0,u=r.vertexNormals.length>0,v=1!==r.color.r||1!==r.color.g||1!==r.color.b,w=r.vertexColors.length>0,x=0;if(x=a(x,0,0),x=a(x,1,!0),x=a(x,2,!1),x=a(x,3,s),x=a(x,4,t),x=a(x,5,u),x=a(x,6,v),x=a(x,7,w),k.push(x),k.push(r.a,r.b,r.c),k.push(r.materialIndex),s){var y=this.faceVertexUvs[0][i];k.push(d(y[0]),d(y[1]),d(y[2]))}if(t&&k.push(b(r.normal)),u){var z=r.vertexNormals;k.push(b(z[0]),b(z[1]),b(z[2]))}if(v&&k.push(c(r.color)),w){var A=r.vertexColors;k.push(c(A[0]),c(A[1]),c(A[2]))}}return e.data={},e.data.vertices=h,e.data.normals=l,n.length>0&&(e.data.colors=n),p.length>0&&(e.data.uvs=[p]),e.data.faces=k,e},clone:function(){return(new ma).copy(this)},copy:function(a){var b,c,d,e,f,g;this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=a.name;var h=a.vertices;for(b=0,c=h.length;b<c;b++)this.vertices.push(h[b].clone());var i=a.colors;for(b=0,c=i.length;b<c;b++)this.colors.push(i[b].clone());var j=a.faces;for(b=0,c=j.length;b<c;b++)this.faces.push(j[b].clone());for(b=0,c=a.faceVertexUvs.length;b<c;b++){var k=a.faceVertexUvs[b];for(void 0===this.faceVertexUvs[b]&&(this.faceVertexUvs[b]=[]),d=0,e=k.length;d<e;d++){var l=k[d],m=[];for(f=0,g=l.length;f<g;f++){var n=l[f];m.push(n.clone())}this.faceVertexUvs[b].push(m)}}var o=a.morphTargets;for(b=0,c=o.length;b<c;b++){var p={};if(p.name=o[b].name,void 0!==o[b].vertices)for(p.vertices=[],d=0,e=o[b].vertices.length;d<e;d++)p.vertices.push(o[b].vertices[d].clone());if(void 0!==o[b].normals)for(p.normals=[],d=0,e=o[b].normals.length;d<e;d++)p.normals.push(o[b].normals[d].clone());this.morphTargets.push(p)}var q=a.morphNormals;for(b=0,c=q.length;b<c;b++){var r={};if(void 0!==q[b].vertexNormals)for(r.vertexNormals=[],d=0,e=q[b].vertexNormals.length;d<e;d++){var s=q[b].vertexNormals[d],t={};t.a=s.a.clone(),t.b=s.b.clone(),t.c=s.c.clone(),r.vertexNormals.push(t)}if(void 0!==q[b].faceNormals)for(r.faceNormals=[],d=0,e=q[b].faceNormals.length;d<e;d++)r.faceNormals.push(q[b].faceNormals[d].clone());this.morphNormals.push(r)}var u=a.skinWeights;for(b=0,c=u.length;b<c;b++)this.skinWeights.push(u[b].clone());var v=a.skinIndices;for(b=0,c=v.length;b<c;b++)this.skinIndices.push(v[b].clone());var w=a.lineDistances;for(b=0,c=w.length;b<c;b++)this.lineDistances.push(w[b]);var x=a.boundingBox;null!==x&&(this.boundingBox=x.clone());var y=a.boundingSphere;return null!==y&&(this.boundingSphere=y.clone()),this.elementsNeedUpdate=a.elementsNeedUpdate,this.verticesNeedUpdate=a.verticesNeedUpdate,this.uvsNeedUpdate=a.uvsNeedUpdate,this.normalsNeedUpdate=a.normalsNeedUpdate,this.colorsNeedUpdate=a.colorsNeedUpdate,this.lineDistancesNeedUpdate=a.lineDistancesNeedUpdate,this.groupsNeedUpdate=a.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Object.defineProperty(na.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}}),Object.assign(na.prototype,{isBufferAttribute:!0,setArray:function(a){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=void 0!==a?a.length/this.itemSize:0,this.array=a},setDynamic:function(a){return this.dynamic=a,this},copy:function(a){return this.array=new a.array.constructor(a.array),this.itemSize=a.itemSize,this.count=a.count,this.normalized=a.normalized,this.dynamic=a.dynamic,this},copyAt:function(a,b,c){a*=this.itemSize,c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},copyArray:function(a){return this.array.set(a),this},copyColorsArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",d),f=new U),b[c++]=f.r,b[c++]=f.g,b[c++]=f.b}return this},copyIndicesArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];b[c++]=f.a,b[c++]=f.b,b[c++]=f.c}return this},copyVector2sArray:function(a){for(var b=this.array,d=0,e=0,f=a.length;e<f;e++){var g=a[e];void 0===g&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",e),g=new c),b[d++]=g.x,b[d++]=g.y}return this},copyVector3sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var g=a[d];void 0===g&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",d),g=new f),b[c++]=g.x,b[c++]=g.y,b[c++]=g.z}return this},copyVector4sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),f=new i),b[c++]=f.x,b[c++]=f.y,b[c++]=f.z,b[c++]=f.w}return this},set:function(a,b){return void 0===b&&(b=0),this.array.set(a,b),this},getX:function(a){return this.array[a*this.itemSize]},setX:function(a,b){return this.array[a*this.itemSize]=b,this},getY:function(a){return this.array[a*this.itemSize+1]},setY:function(a,b){return this.array[a*this.itemSize+1]=b,this},getZ:function(a){return this.array[a*this.itemSize+2]},setZ:function(a,b){return this.array[a*this.itemSize+2]=b,this},getW:function(a){return this.array[a*this.itemSize+3]},setW:function(a,b){return this.array[a*this.itemSize+3]=b,this},setXY:function(a,b,c){return a*=this.itemSize,this.array[a+0]=b,this.array[a+1]=c,this},setXYZ:function(a,b,c,d){return a*=this.itemSize,this.array[a+0]=b,this.array[a+1]=c,this.array[a+2]=d,this},setXYZW:function(a,b,c,d,e){return a*=this.itemSize,this.array[a+0]=b,this.array[a+1]=c,this.array[a+2]=d,this.array[a+3]=e,this},onUpload:function(a){return this.onUploadCallback=a,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)}}),oa.prototype=Object.create(na.prototype),oa.prototype.constructor=oa,pa.prototype=Object.create(na.prototype),pa.prototype.constructor=pa,qa.prototype=Object.create(na.prototype),qa.prototype.constructor=qa,ra.prototype=Object.create(na.prototype),ra.prototype.constructor=ra,sa.prototype=Object.create(na.prototype),sa.prototype.constructor=sa,ta.prototype=Object.create(na.prototype),ta.prototype.constructor=ta,ua.prototype=Object.create(na.prototype),ua.prototype.constructor=ua,va.prototype=Object.create(na.prototype),va.prototype.constructor=va,wa.prototype=Object.create(na.prototype),wa.prototype.constructor=wa,Object.assign(xa.prototype,{computeGroups:function(a){for(var b,c=[],d=void 0,e=a.faces,f=0;f<e.length;f++){var g=e[f];g.materialIndex!==d&&(d=g.materialIndex,void 0!==b&&(b.count=3*f-b.start,c.push(b)),b={start:3*f,materialIndex:d})}void 0!==b&&(b.count=3*f-b.start,c.push(b)),this.groups=c},fromGeometry:function(a){var b,d=a.faces,e=a.vertices,f=a.faceVertexUvs,g=f[0]&&f[0].length>0,h=f[1]&&f[1].length>0,i=a.morphTargets,j=i.length;if(j>0){b=[];for(var k=0;k<j;k++)b[k]=[];this.morphTargets.position=b}var l,m=a.morphNormals,n=m.length;if(n>0){l=[];for(var k=0;k<n;k++)l[k]=[];this.morphTargets.normal=l}for(var o=a.skinIndices,p=a.skinWeights,q=o.length===e.length,r=p.length===e.length,k=0;k<d.length;k++){var s=d[k];this.vertices.push(e[s.a],e[s.b],e[s.c]);var t=s.vertexNormals;if(3===t.length)this.normals.push(t[0],t[1],t[2]);else{var u=s.normal;this.normals.push(u,u,u)}var v=s.vertexColors;if(3===v.length)this.colors.push(v[0],v[1],v[2]);else{var w=s.color;this.colors.push(w,w,w)}if(!0===g){var x=f[0][k];void 0!==x?this.uvs.push(x[0],x[1],x[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",k),this.uvs.push(new c,new c,new c))}if(!0===h){var x=f[1][k];void 0!==x?this.uvs2.push(x[0],x[1],x[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",k),this.uvs2.push(new c,new c,new c))}for(var y=0;y<j;y++){var z=i[y].vertices;b[y].push(z[s.a],z[s.b],z[s.c])}for(var y=0;y<n;y++){var A=m[y].vertexNormals[k];l[y].push(A.a,A.b,A.c)}q&&this.skinIndices.push(o[s.a],o[s.b],o[s.c]),r&&this.skinWeights.push(p[s.a],p[s.b],p[s.c])}return this.computeGroups(a),this.verticesNeedUpdate=a.verticesNeedUpdate,this.normalsNeedUpdate=a.normalsNeedUpdate,this.colorsNeedUpdate=a.colorsNeedUpdate,this.uvsNeedUpdate=a.uvsNeedUpdate,this.groupsNeedUpdate=a.groupsNeedUpdate,this}});var Rf=1;za.prototype=Object.assign(Object.create(b.prototype),{constructor:za,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(a){Array.isArray(a)?this.index=new(ya(a)>65535?ua:sa)(a,1):this.index=a},addAttribute:function(a,b){return b&&b.isBufferAttribute||b&&b.isInterleavedBufferAttribute?"index"===a?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),void this.setIndex(b)):(this.attributes[a]=b,this):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),void this.addAttribute(a,new na(arguments[1],arguments[2])))},getAttribute:function(a){return this.attributes[a]},removeAttribute:function(a){return delete this.attributes[a],this},addGroup:function(a,b,c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(a,b){this.drawRange.start=a,this.drawRange.count=b},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(a.applyToBufferAttribute(b),b.needsUpdate=!0);var c=this.attributes.normal;if(void 0!==c){(new g).getNormalMatrix(a).applyToBufferAttribute(c),c.needsUpdate=!0}return null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this},rotateX:function(){var a=new d;return function(b){return a.makeRotationX(b),this.applyMatrix(a),this}}(),rotateY:function(){var a=new d;return function(b){return a.makeRotationY(b),this.applyMatrix(a),this}}(),rotateZ:function(){var a=new d;return function(b){return a.makeRotationZ(b),this.applyMatrix(a),this}}(),translate:function(){var a=new d;return function(b,c,d){return a.makeTranslation(b,c,d),this.applyMatrix(a),this}}(),scale:function(){var a=new d;return function(b,c,d){return a.makeScale(b,c,d),this.applyMatrix(a),this}}(),lookAt:function(){var a=new ia;return function(b){a.lookAt(b),a.updateMatrix(),this.applyMatrix(a.matrix)}}(),center:function(){this.computeBoundingBox();var a=this.boundingBox.getCenter().negate();return this.translate(a.x,a.y,a.z),a},setFromObject:function(a){var b=a.geometry;if(a.isPoints||a.isLine){var c=new va(3*b.vertices.length,3),d=new va(3*b.colors.length,3);if(this.addAttribute("position",c.copyVector3sArray(b.vertices)),this.addAttribute("color",d.copyColorsArray(b.colors)),b.lineDistances&&b.lineDistances.length===b.vertices.length){var e=new va(b.lineDistances.length,1);this.addAttribute("lineDistance",e.copyArray(b.lineDistances))}null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone()),null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone())}else a.isMesh&&b&&b.isGeometry&&this.fromGeometry(b);return this},setFromPoints:function(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];b.push(e.x,e.y,e.z||0)}return this.addAttribute("position",new va(b,3)),this},updateFromObject:function(a){var b=a.geometry;if(a.isMesh){var c=b.__directGeometry;if(!0===b.elementsNeedUpdate&&(c=void 0,b.elementsNeedUpdate=!1),void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate,c.normalsNeedUpdate=b.normalsNeedUpdate,c.colorsNeedUpdate=b.colorsNeedUpdate,c.uvsNeedUpdate=b.uvsNeedUpdate,c.groupsNeedUpdate=b.groupsNeedUpdate,b.verticesNeedUpdate=!1,b.normalsNeedUpdate=!1,b.colorsNeedUpdate=!1,b.uvsNeedUpdate=!1,b.groupsNeedUpdate=!1,b=c}var d;return!0===b.verticesNeedUpdate&&(d=this.attributes.position,void 0!==d&&(d.copyVector3sArray(b.vertices),d.needsUpdate=!0),b.verticesNeedUpdate=!1),!0===b.normalsNeedUpdate&&(d=this.attributes.normal,void 0!==d&&(d.copyVector3sArray(b.normals),d.needsUpdate=!0),b.normalsNeedUpdate=!1),!0===b.colorsNeedUpdate&&(d=this.attributes.color,void 0!==d&&(d.copyColorsArray(b.colors),d.needsUpdate=!0),b.colorsNeedUpdate=!1),b.uvsNeedUpdate&&(d=this.attributes.uv,void 0!==d&&(d.copyVector2sArray(b.uvs),d.needsUpdate=!0),b.uvsNeedUpdate=!1),b.lineDistancesNeedUpdate&&(d=this.attributes.lineDistance,void 0!==d&&(d.copyArray(b.lineDistances),d.needsUpdate=!0),b.lineDistancesNeedUpdate=!1),b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=b.groups,b.groupsNeedUpdate=!1),this},fromGeometry:function(a){return a.__directGeometry=(new xa).fromGeometry(a),this.fromDirectGeometry(a.__directGeometry)},fromDirectGeometry:function(a){var b=new Float32Array(3*a.vertices.length);if(this.addAttribute("position",new na(b,3).copyVector3sArray(a.vertices)),a.normals.length>0){var c=new Float32Array(3*a.normals.length);this.addAttribute("normal",new na(c,3).copyVector3sArray(a.normals))}if(a.colors.length>0){var d=new Float32Array(3*a.colors.length);this.addAttribute("color",new na(d,3).copyColorsArray(a.colors))}if(a.uvs.length>0){var e=new Float32Array(2*a.uvs.length);this.addAttribute("uv",new na(e,2).copyVector2sArray(a.uvs))}if(a.uvs2.length>0){var f=new Float32Array(2*a.uvs2.length);this.addAttribute("uv2",new na(f,2).copyVector2sArray(a.uvs2))}if(a.indices.length>0){var g=ya(a.indices)>65535?Uint32Array:Uint16Array,h=new g(3*a.indices.length);this.setIndex(new na(h,1).copyIndicesArray(a.indices))}this.groups=a.groups;for(var i in a.morphTargets){for(var j=[],k=a.morphTargets[i],l=0,m=k.length;l<m;l++){var n=k[l],o=new va(3*n.length,3);j.push(o.copyVector3sArray(n))}this.morphAttributes[i]=j}if(a.skinIndices.length>0){var p=new va(4*a.skinIndices.length,4);this.addAttribute("skinIndex",p.copyVector4sArray(a.skinIndices))}if(a.skinWeights.length>0){var q=new va(4*a.skinWeights.length,4);this.addAttribute("skinWeight",q.copyVector4sArray(a.skinWeights))}return null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone()),null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone()),this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new aa);var a=this.attributes.position;void 0!==a?this.boundingBox.setFromBufferAttribute(a):this.boundingBox.makeEmpty(),(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){var a=new aa,b=new f;return function(){null===this.boundingSphere&&(this.boundingSphere=new ba);var c=this.attributes.position;if(c){var d=this.boundingSphere.center;a.setFromBufferAttribute(c),a.getCenter(d);for(var e=0,f=0,g=c.count;f<g;f++)b.x=c.getX(f),b.y=c.getY(f),b.z=c.getZ(f),e=Math.max(e,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(e),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var a=this.index,b=this.attributes,c=this.groups;if(b.position){var d=b.position.array;if(void 0===b.normal)this.addAttribute("normal",new na(new Float32Array(d.length),3));else for(var e=b.normal.array,g=0,h=e.length;g<h;g++)e[g]=0;var i,j,k,l=b.normal.array,m=new f,n=new f,o=new f,p=new f,q=new f;if(a){var r=a.array;0===c.length&&this.addGroup(0,r.length);for(var s=0,t=c.length;s<t;++s)for(var u=c[s],v=u.start,w=u.count,g=v,h=v+w;g<h;g+=3)i=3*r[g+0],j=3*r[g+1],k=3*r[g+2],m.fromArray(d,i),n.fromArray(d,j),o.fromArray(d,k),p.subVectors(o,n),q.subVectors(m,n),p.cross(q),l[i]+=p.x,l[i+1]+=p.y,l[i+2]+=p.z,l[j]+=p.x,l[j+1]+=p.y,l[j+2]+=p.z,l[k]+=p.x,l[k+1]+=p.y,l[k+2]+=p.z}else for(var g=0,h=d.length;g<h;g+=9)m.fromArray(d,g),n.fromArray(d,g+3),o.fromArray(d,g+6),p.subVectors(o,n),q.subVectors(m,n),p.cross(q),l[g]=p.x,l[g+1]=p.y,l[g+2]=p.z,l[g+3]=p.x,l[g+4]=p.y,l[g+5]=p.z,l[g+6]=p.x,l[g+7]=p.y,l[g+8]=p.z;this.normalizeNormals(),b.normal.needsUpdate=!0}},merge:function(a,b){if(!a||!a.isBufferGeometry)return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a);void 0===b&&(b=0);var c=this.attributes;for(var d in c)if(void 0!==a.attributes[d])for(var e=c[d],f=e.array,g=a.attributes[d],h=g.array,i=g.itemSize,j=0,k=i*b;j<h.length;j++,k++)f[k]=h[j];return this},normalizeNormals:function(){var a=new f;return function(){for(var b=this.attributes.normal,c=0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.normalize(),b.setXYZ(c,a.x,a.y,a.z)}}(),toNonIndexed:function(){if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var a=new za,b=this.index.array,c=this.attributes;for(var d in c){for(var e=c[d],f=e.array,g=e.itemSize,h=new f.constructor(b.length*g),i=0,j=0,k=0,l=b.length;k<l;k++){i=b[k]*g;for(var m=0;m<g;m++)h[j++]=f[i++]}a.addAttribute(d,new na(h,g))}return a},toJSON:function(){var a={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(a.uuid=this.uuid,a.type=this.type,""!==this.name&&(a.name=this.name),void 0!==this.parameters){var b=this.parameters;for(var c in b)void 0!==b[c]&&(a[c]=b[c]);return a}a.data={attributes:{}};var d=this.index;if(null!==d){var e=Array.prototype.slice.call(d.array);a.data.index={type:d.array.constructor.name,array:e}}var f=this.attributes;for(var c in f){var g=f[c],e=Array.prototype.slice.call(g.array);a.data.attributes[c]={itemSize:g.itemSize,type:g.array.constructor.name,array:e,normalized:g.normalized}}var h=this.groups;h.length>0&&(a.data.groups=JSON.parse(JSON.stringify(h)));var i=this.boundingSphere;return null!==i&&(a.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),a},clone:function(){return(new za).copy(this)},copy:function(a){var b,c,d;this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.name=a.name;var e=a.index;null!==e&&this.setIndex(e.clone());var f=a.attributes;for(b in f){var g=f[b];this.addAttribute(b,g.clone())}var h=a.morphAttributes;for(b in h){var i=[],j=h[b];for(c=0,d=j.length;c<d;c++)i.push(j[c].clone());this.morphAttributes[b]=i}var k=a.groups;for(c=0,d=k.length;c<d;c++){var l=k[c];this.addGroup(l.start,l.count,l.materialIndex)}var m=a.boundingBox;null!==m&&(this.boundingBox=m.clone());var n=a.boundingSphere;return null!==n&&(this.boundingSphere=n.clone()),this.drawRange.start=a.drawRange.start,this.drawRange.count=a.drawRange.count,this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Aa.prototype=Object.create(ma.prototype),Aa.prototype.constructor=Aa,Ba.prototype=Object.create(za.prototype),Ba.prototype.constructor=Ba,Ca.prototype=Object.create(ma.prototype),Ca.prototype.constructor=Ca,Da.prototype=Object.create(za.prototype),Da.prototype.constructor=Da,Ea.prototype=Object.create(Z.prototype),Ea.prototype.constructor=Ea,Ea.prototype.isMeshBasicMaterial=!0,Ea.prototype.copy=function(a){return Z.prototype.copy.call(this,a),this.color.copy(a.color),this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.specularMap=a.specularMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.combine=a.combine,this.reflectivity=a.reflectivity,this.refractionRatio=a.refractionRatio,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this},Fa.prototype=Object.create(Z.prototype),Fa.prototype.constructor=Fa,Fa.prototype.isShaderMaterial=!0,Fa.prototype.copy=function(a){return Z.prototype.copy.call(this,a),this.fragmentShader=a.fragmentShader,this.vertexShader=a.vertexShader,this.uniforms=Jd.clone(a.uniforms),this.defines=a.defines,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.lights=a.lights,this.clipping=a.clipping,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this.morphNormals=a.morphNormals,this.extensions=a.extensions,this},Fa.prototype.toJSON=function(a){var b=Z.prototype.toJSON.call(this,a);return b.uniforms=this.uniforms,b.vertexShader=this.vertexShader,b.fragmentShader=this.fragmentShader,b},Object.assign(Ga.prototype,{set:function(a,b){return this.origin.copy(a),this.direction.copy(b),this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){return this.origin.copy(a.origin),this.direction.copy(a.direction),this},at:function(a,b){return(b||new f).copy(this.direction).multiplyScalar(a).add(this.origin)},lookAt:function(a){return this.direction.copy(a).sub(this.origin).normalize(),this},recast:function(){var a=new f;return function(b){return this.origin.copy(this.at(b,a)),this}}(),closestPointToPoint:function(a,b){var c=b||new f;c.subVectors(a,this.origin);var d=c.dot(this.direction);return d<0?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(a){return Math.sqrt(this.distanceSqToPoint(a))},distanceSqToPoint:function(){var a=new f;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);return c<0?this.origin.distanceToSquared(b):(a.copy(this.direction).multiplyScalar(c).add(this.origin),a.distanceToSquared(b))}}(),distanceSqToSegment:function(){var a=new f,b=new f,c=new f;return function(d,e,f,g){a.copy(d).add(e).multiplyScalar(.5),b.copy(e).sub(d).normalize(),c.copy(this.origin).sub(a);var h,i,j,k,l=.5*d.distanceTo(e),m=-this.direction.dot(b),n=c.dot(this.direction),o=-c.dot(b),p=c.lengthSq(),q=Math.abs(1-m*m);if(q>0)if(h=m*o-n,i=m*n-o,k=l*q,h>=0)if(i>=-k)if(i<=k){var r=1/q;h*=r,i*=r,j=h*(h+m*i+2*n)+i*(m*h+i+2*o)+p}else i=l,h=Math.max(0,-(m*i+n)),j=-h*h+i*(i+2*o)+p;else i=-l,h=Math.max(0,-(m*i+n)),j=-h*h+i*(i+2*o)+p;else i<=-k?(h=Math.max(0,-(-m*l+n)),i=h>0?-l:Math.min(Math.max(-l,-o),l),j=-h*h+i*(i+2*o)+p):i<=k?(h=0,i=Math.min(Math.max(-l,-o),l),j=i*(i+2*o)+p):(h=Math.max(0,-(m*l+n)),i=h>0?l:Math.min(Math.max(-l,-o),l),j=-h*h+i*(i+2*o)+p);else i=m>0?-l:l,h=Math.max(0,-(m*i+n)),j=-h*h+i*(i+2*o)+p;return f&&f.copy(this.direction).multiplyScalar(h).add(this.origin),g&&g.copy(b).multiplyScalar(i).add(a),j}}(),intersectSphere:function(){var a=new f;return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d,f=b.radius*b.radius;if(e>f)return null;var g=Math.sqrt(f-e),h=d-g,i=d+g;return h<0&&i<0?null:h<0?this.at(i,c):this.at(h,c)}}(),intersectsSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?0:null;var c=-(this.origin.dot(a.normal)+a.constant)/b;return c>=0?c:null},intersectPlane:function(a,b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},intersectsPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||a.normal.dot(this.direction)*b<0},intersectBox:function(a,b){var c,d,e,f,g,h,i=1/this.direction.x,j=1/this.direction.y,k=1/this.direction.z,l=this.origin;return i>=0?(c=(a.min.x-l.x)*i,d=(a.max.x-l.x)*i):(c=(a.max.x-l.x)*i,d=(a.min.x-l.x)*i),j>=0?(e=(a.min.y-l.y)*j,f=(a.max.y-l.y)*j):(e=(a.max.y-l.y)*j,f=(a.min.y-l.y)*j),c>f||e>d?null:((e>c||c!==c)&&(c=e),(f<d||d!==d)&&(d=f),k>=0?(g=(a.min.z-l.z)*k,h=(a.max.z-l.z)*k):(g=(a.max.z-l.z)*k,h=(a.min.z-l.z)*k),c>h||g>d?null:((g>c||c!==c)&&(c=g),(h<d||d!==d)&&(d=h),d<0?null:this.at(c>=0?c:d,b)))},intersectsBox:function(){var a=new f;return function(b){return null!==this.intersectBox(b,a)}}(),intersectTriangle:function(){var a=new f,b=new f,c=new f,d=new f;return function(e,f,g,h,i){b.subVectors(f,e),c.subVectors(g,e),d.crossVectors(b,c);var j,k=this.direction.dot(d);if(k>0){if(h)return null;j=1}else{if(!(k<0))return null;j=-1,k=-k}a.subVectors(this.origin,e);var l=j*this.direction.dot(c.crossVectors(a,c));if(l<0)return null;var m=j*this.direction.dot(b.cross(a));if(m<0)return null;if(l+m>k)return null;var n=-j*a.dot(d);return n<0?null:this.at(n/k,i)}}(),applyMatrix4:function(a){return this.origin.applyMatrix4(a),this.direction.transformDirection(a),this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}}),Object.assign(Ha.prototype,{set:function(a,b){return this.start.copy(a),this.end.copy(b),this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){return this.start.copy(a.start),this.end.copy(a.end),this},getCenter:function(a){return(a||new f).addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){return(a||new f).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,b){var c=b||new f;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new f,b=new f;return function(c,d){a.subVectors(c,this.start),b.subVectors(this.end,this.start);var e=b.dot(b),f=b.dot(a),g=f/e;return d&&(g=yd.clamp(g,0,1)),g}}(),closestPointToPoint:function(a,b,c){var d=this.closestPointToPointParameter(a,b),e=c||new f;return this.delta(e).multiplyScalar(d).add(this.start)},applyMatrix4:function(a){return this.start.applyMatrix4(a),this.end.applyMatrix4(a),this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)}}),Object.assign(Ia,{normal:function(){var a=new f;return function(b,c,d,e){var g=e||new f;g.subVectors(d,c),a.subVectors(b,c),g.cross(a);var h=g.lengthSq();return h>0?g.multiplyScalar(1/Math.sqrt(h)):g.set(0,0,0)}}(),barycoordFromPoint:function(){var a=new f,b=new f,c=new f;return function(d,e,g,h,i){a.subVectors(h,e),b.subVectors(g,e),c.subVectors(d,e);var j=a.dot(a),k=a.dot(b),l=a.dot(c),m=b.dot(b),n=b.dot(c),o=j*m-k*k,p=i||new f;if(0===o)return p.set(-2,-1,-1);var q=1/o,r=(m*l-k*n)*q,s=(j*n-k*l)*q;return p.set(1-r-s,s,r)}}(),containsPoint:function(){var a=new f;return function(b,c,d,e){var f=Ia.barycoordFromPoint(b,c,d,e,a);return f.x>=0&&f.y>=0&&f.x+f.y<=1}}()}),Object.assign(Ia.prototype,{set:function(a,b,c){return this.a.copy(a),this.b.copy(b),this.c.copy(c),this},setFromPointsAndIndices:function(a,b,c,d){return this.a.copy(a[b]),this.b.copy(a[c]),this.c.copy(a[d]),this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){return this.a.copy(a.a),this.b.copy(a.b),this.c.copy(a.c),this},area:function(){var a=new f,b=new f;return function(){return a.subVectors(this.c,this.b),b.subVectors(this.a,this.b),.5*a.cross(b).length()}}(),midpoint:function(a){return(a||new f).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return Ia.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new ca).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return Ia.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return Ia.containsPoint(a,this.a,this.b,this.c)},closestPointToPoint:function(){var a=new ca,b=[new Ha,new Ha,new Ha],c=new f,d=new f;return function(e,g){var h=g||new f,i=1/0;if(a.setFromCoplanarPoints(this.a,this.b,this.c),a.projectPoint(e,c),!0===this.containsPoint(c))h.copy(c);else{b[0].set(this.a,this.b),b[1].set(this.b,this.c),b[2].set(this.c,this.a);for(var j=0;j<b.length;j++){b[j].closestPointToPoint(c,!0,d);var k=c.distanceToSquared(d);k<i&&(i=k,h.copy(d))}}return h}}(),equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}}),Ja.prototype=Object.assign(Object.create(ia.prototype),{constructor:Ja,isMesh:!0,setDrawMode:function(a){this.drawMode=a},copy:function(a){return ia.prototype.copy.call(this,a),this.drawMode=a.drawMode,void 0!==a.morphTargetInfluences&&(this.morphTargetInfluences=a.morphTargetInfluences.slice()),void 0!==a.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},a.morphTargetDictionary)),this},updateMorphTargets:function(){var a,b,c,d=this.geometry;if(d.isBufferGeometry){var e=d.morphAttributes,f=Object.keys(e);if(f.length>0){var g=e[f[0]];if(void 0!==g)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},a=0,b=g.length;a<b;a++)c=g[a].name||String(a),this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}else{var h=d.morphTargets;if(void 0!==h&&h.length>0)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},a=0,b=h.length;a<b;a++)c=h[a].name||String(a),this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}},raycast:function(){function a(a,b,c,d,e,f,g){return Ia.barycoordFromPoint(a,b,c,d,s),e.multiplyScalar(s.x),f.multiplyScalar(s.y),g.multiplyScalar(s.z),e.add(f).add(g),e.clone()}function b(a,b,c,d,e,f,g,h){if(null===(b.side===Hb?d.intersectTriangle(g,f,e,!0,h):d.intersectTriangle(e,f,g,b.side!==Ib,h)))return null;u.copy(h),u.applyMatrix4(a.matrixWorld);var i=c.ray.origin.distanceTo(u);return i<c.near||i>c.far?null:{distance:i,point:u.clone(),object:a}}function e(c,d,e,f,g,h,i,m){j.fromBufferAttribute(f,h),k.fromBufferAttribute(f,i),l.fromBufferAttribute(f,m);var n=b(c,c.material,d,e,j,k,l,t);return n&&(g&&(p.fromBufferAttribute(g,h),q.fromBufferAttribute(g,i),r.fromBufferAttribute(g,m),n.uv=a(t,j,k,l,p,q,r)),n.face=new la(h,i,m,Ia.normal(j,k,l)),n.faceIndex=h),n}var g=new d,h=new Ga,i=new ba,j=new f,k=new f,l=new f,m=new f,n=new f,o=new f,p=new c,q=new c,r=new c,s=new f,t=new f,u=new f;return function(c,d){var f=this.geometry,s=this.material,u=this.matrixWorld;if(void 0!==s&&(null===f.boundingSphere&&f.computeBoundingSphere(),i.copy(f.boundingSphere),i.applyMatrix4(u),!1!==c.ray.intersectsSphere(i)&&(g.getInverse(u),h.copy(c.ray).applyMatrix4(g),null===f.boundingBox||!1!==h.intersectsBox(f.boundingBox)))){var v;if(f.isBufferGeometry){var w,x,y,z,A,B=f.index,C=f.attributes.position,D=f.attributes.uv;if(null!==B)for(z=0,A=B.count;z<A;z+=3)w=B.getX(z),x=B.getX(z+1),y=B.getX(z+2),(v=e(this,c,h,C,D,w,x,y))&&(v.faceIndex=Math.floor(z/3),d.push(v));else if(void 0!==C)for(z=0,A=C.count;z<A;z+=3)w=z,x=z+1,y=z+2,(v=e(this,c,h,C,D,w,x,y))&&(v.index=w,d.push(v))}else if(f.isGeometry){var E,F,G,H,I=Array.isArray(s),J=f.vertices,K=f.faces,L=f.faceVertexUvs[0];L.length>0&&(H=L);for(var M=0,N=K.length;M<N;M++){var O=K[M],P=I?s[O.materialIndex]:s;if(void 0!==P){if(E=J[O.a],F=J[O.b],G=J[O.c],!0===P.morphTargets){var Q=f.morphTargets,R=this.morphTargetInfluences;j.set(0,0,0),k.set(0,0,0),l.set(0,0,0);for(var S=0,T=Q.length;S<T;S++){var U=R[S];if(0!==U){var V=Q[S].vertices;j.addScaledVector(m.subVectors(V[O.a],E),U),k.addScaledVector(n.subVectors(V[O.b],F),U),l.addScaledVector(o.subVectors(V[O.c],G),U)}}j.add(E),k.add(F),l.add(G),E=j,F=k,G=l}if(v=b(this,P,c,h,E,F,G,t)){if(H&&H[M]){var W=H[M];p.copy(W[0]),q.copy(W[1]),r.copy(W[2]),v.uv=a(t,E,F,G,p,q,r)}v.face=O,v.faceIndex=M,d.push(v)}}}}}}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}});var Sf=0;ob.prototype=Object.assign(Object.create(ja.prototype),{constructor:ob,isPerspectiveCamera:!0,copy:function(a,b){return ja.prototype.copy.call(this,a,b),this.fov=a.fov,this.zoom=a.zoom,this.near=a.near,this.far=a.far,this.focus=a.focus,this.aspect=a.aspect,this.view=null===a.view?null:Object.assign({},a.view),this.filmGauge=a.filmGauge,this.filmOffset=a.filmOffset,this},setFocalLength:function(a){var b=.5*this.getFilmHeight()/a;this.fov=2*yd.RAD2DEG*Math.atan(b),this.updateProjectionMatrix()},getFocalLength:function(){var a=Math.tan(.5*yd.DEG2RAD*this.fov);return.5*this.getFilmHeight()/a},getEffectiveFOV:function(){return 2*yd.RAD2DEG*Math.atan(Math.tan(.5*yd.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(a,b,c,d,e,f){this.aspect=a/b,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=a,this.view.fullHeight=b,this.view.offsetX=c,this.view.offsetY=d,this.view.width=e,this.view.height=f,this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=this.near,b=a*Math.tan(.5*yd.DEG2RAD*this.fov)/this.zoom,c=2*b,d=this.aspect*c,e=-.5*d,f=this.view;if(null!==this.view&&this.view.enabled){var g=f.fullWidth,h=f.fullHeight;e+=f.offsetX*d/g,b-=f.offsetY*c/h,d*=f.width/g,c*=f.height/h}var i=this.filmOffset;0!==i&&(e+=a*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(e,e+d,b,b-c,a,this.far)},toJSON:function(a){var b=ia.prototype.toJSON.call(this,a);return b.object.fov=this.fov,b.object.zoom=this.zoom,b.object.near=this.near,b.object.far=this.far,b.object.focus=this.focus,b.object.aspect=this.aspect,null!==this.view&&(b.object.view=Object.assign({},this.view)),b.object.filmGauge=this.filmGauge,b.object.filmOffset=this.filmOffset,b}}),pb.prototype=Object.assign(Object.create(ob.prototype),{constructor:pb,isArrayCamera:!0}),vb.prototype=Object.assign(Object.create(ia.prototype),{constructor:vb,copy:function(a,b){return ia.prototype.copy.call(this,a,b),null!==a.background&&(this.background=a.background.clone()),null!==a.fog&&(this.fog=a.fog.clone()),null!==a.overrideMaterial&&(this.overrideMaterial=a.overrideMaterial.clone()),this.autoUpdate=a.autoUpdate,this.matrixAutoUpdate=a.matrixAutoUpdate,this},toJSON:function(a){var b=ia.prototype.toJSON.call(this,a);return null!==this.background&&(b.object.background=this.background.toJSON(a)),null!==this.fog&&(b.object.fog=this.fog.toJSON()),b}});var Tf={enabled:!1,files:{},add:function(a,b){!1!==this.enabled&&(this.files[a]=b)},get:function(a){if(!1!==this.enabled)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}},Uf=new wb;Object.assign(xb.prototype,{crossOrigin:"Anonymous",load:function(a,b,c,d){void 0===a&&(a=""),void 0!==this.path&&(a=this.path+a),a=this.manager.resolveURL(a);var e=this,f=Tf.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f),e.manager.itemEnd(a)},0),f;var g=document.createElementNS("http://www.w3.org/1999/xhtml","img");return g.addEventListener("load",function(){Tf.add(a,this),b&&b(this),e.manager.itemEnd(a)},!1),g.addEventListener("error",function(b){d&&d(b),e.manager.itemEnd(a),e.manager.itemError(a)},!1),"data:"!==a.substr(0,5)&&void 0!==this.crossOrigin&&(g.crossOrigin=this.crossOrigin),e.manager.itemStart(a),g.src=a,g},setCrossOrigin:function(a){return this.crossOrigin=a,this},setPath:function(a){return this.path=a,this}}),Object.assign(yb.prototype,{crossOrigin:"Anonymous",load:function(a,b,c,d){var e=new h,f=new xb(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(a,function(c){e.image=c;var d=a.search(/\.(jpg|jpeg)$/)>0||0===a.search(/^data\:image\/jpeg/);e.format=d?Zc:$c,e.needsUpdate=!0,void 0!==b&&b(e)},c,d),e},setCrossOrigin:function(a){return this.crossOrigin=a,this},setPath:function(a){return this.path=a,this}}),a.WebGLRenderTarget=j,a.WebGLRenderer=ub,a.Scene=vb,a.Mesh=Ja,a.DataTexture=k,a.PlaneGeometry=Ca,a.ShaderMaterial=Fa,a.MeshBasicMaterial=Ea,a.Material=Z,a.TextureLoader=yb,a.OrthographicCamera=ka,a.ClampToEdgeWrapping=Ec,a.FloatType=Sc,a.LinearFilter=Jc,a.NearestFilter=Gc,a.NearestMipMapNearestFilter=Hc,a.RepeatWrapping=Dc,a.RGBAFormat=$c,a.UnsignedByteType=Mc,Object.defineProperty(a,"__esModule",{value:!0})}),require=function(){function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){return e(b[g][1][a]||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}return a}()({1:[function(a,b,c){(function(b){b.THREE=a("three"),THREE={ClampToEdgeWrapping:THREE.ClampToEdgeWrapping,DataTexture:THREE.DataTexture,FloatType:THREE.FloatType,LinearFilter:THREE.LinearFilter,Material:THREE.Material,Mesh:THREE.Mesh,MeshBasicMaterial:THREE.MeshBasicMaterial,NearestFilter:THREE.NearestFilter,NearestMipMapNearestFilter:THREE.NearestMipMapNearestFilter,OrthographicCamera:THREE.OrthographicCamera,PlaneGeometry:THREE.PlaneGeometry,RepeatWrapping:THREE.RepeatWrapping,RGBAFormat:THREE.RGBAFormat,Scene:THREE.Scene,ShaderMaterial:THREE.ShaderMaterial,TextureLoader:THREE.TextureLoader,UnsignedByteType:THREE.UnsignedByteType,WebGLRenderer:THREE.WebGLRenderer,WebGLRenderTarget:THREE.WebGLRenderTarget}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{three:"three"}],three:[function(a,b,c){b.exports=window.THREE},{}]},{},[1]);var Detector={canvas:!!window.CanvasRenderingContext2D,webgl:function(){try{var a=document.createElement("canvas");return!(!window.WebGLRenderingContext||!a.getContext("webgl")&&!a.getContext("experimental-webgl"))}catch(a){return!1}}(),workers:!!window.Worker,fileapi:window.File&&window.FileReader&&window.FileList&&window.Blob,getWebGLErrorMessage:function(){var a=document.createElement("div");return a.id="webgl-error-message",a.style.fontFamily="monospace",a.style.fontSize="13px",a.style.fontWeight="normal",a.style.textAlign="center",a.style.background="#fff",a.style.color="#000",a.style.padding="1.5em",a.style.width="400px",a.style.margin="5em auto 0",this.webgl||(a.innerHTML=window.WebGLRenderingContext?['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n"):['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n")),a},addGetWebGLMessage:function(a){var b,c,d;a=a||{},b=void 0!==a.parent?a.parent:document.body,c=void 0!==a.id?a.id:"oldie",d=Detector.getWebGLErrorMessage(),d.id=c,b.appendChild(d)}};"object"==typeof module&&(module.exports=Detector),function(a,b){"use strict";function c(){if(a.postMessage&&!a.importScripts){var b=!0,c=a.onmessage;return a.onmessage=function(){b=!1},a.postMessage("","*"),a.onmessage=c,b}}function d(){return a.navigator&&/Trident/.test(a.navigator.userAgent)}if(!d()&&(a.msSetImmediate||a.setImmediate))return void(a.setImmediate||(a.setImmediate=a.msSetImmediate,a.clearImmediate=a.msClearImmediate));var e=a.document,f=Array.prototype.slice,g=Object.prototype.toString,h={};h.polifill={},h.nextId=1,h.tasks={},h.lock=!1,h.run=function(b){if(h.lock)a.setTimeout(h.wrap(h.run,b),0);else{var c=h.tasks[b];if(c){h.lock=!0;try{c()}finally{h.clear(b),h.lock=!1}}}},h.wrap=function(a){var c=f.call(arguments,1);return function(){a.apply(b,c)}},h.create=function(a){return h.tasks[h.nextId]=h.wrap.apply(b,a),h.nextId++},h.clear=function(a){delete h.tasks[a]},h.polifill.messageChannel=function(){var b=new a.MessageChannel;return b.port1.onmessage=function(a){h.run(Number(a.data))},function(){var a=h.create(arguments);return b.port2.postMessage(a),a}},h.polifill.nextTick=function(){return function(){var b=h.create(arguments);return a.process.nextTick(h.wrap(h.run,b)),b}},h.polifill.postMessage=function(){var b="setImmediate$"+Math.random()+"$",c=function(c){c.source===a&&"string"==typeof c.data&&0===c.data.indexOf(b)&&h.run(Number(c.data.slice(b.length)))};return a.addEventListener?a.addEventListener("message",c,!1):a.attachEvent("onmessage",c),function(){var c=h.create(arguments);return a.postMessage(b+c,"*"),c}},h.polifill.readyStateChange=function(){var a=e.documentElement;return function(){var b=h.create(arguments),c=e.createElement("script");return c.onreadystatechange=function(){h.run(b),c.onreadystatechange=null,a.removeChild(c),c=null},a.appendChild(c),b}},h.polifill.setTimeout=function(){return function(){var b=h.create(arguments);return a.setTimeout(h.wrap(h.run,b),0),b}};var i;i=d()?"setTimeout":"[object process]"===g.call(a.process)?"nextTick":c()?"postMessage":a.MessageChannel?"messageChannel":e&&"onreadystatechange"in e.createElement("script")?"readyStateChange":"setTimeout";var j=Object.getPrototypeOf&&Object.getPrototypeOf(a);j=j&&j.setTimeout?j:a,j.setImmediate=h.polifill[i](),j.setImmediate.usePolifill=i,j.msSetImmediate=j.setImmediate,j.clearImmediate=h.clear,j.msClearImmediate=h.clear}(function(){return this||(0,eval)("this")}()),function(){"use strict";function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&-1!==(d=b(f[e],c))&&f[e].splice(d,1);return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(f in g)if(g.hasOwnProperty(f))for(c=g[f].slice(0),e=c.length;e--;)d=c[e],!0===d.once&&this.removeListener(a,d.listener),d.listener.apply(this,b||[])===this._getOnceReturnValue()&&this.removeListener(a,d.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define(function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),GrowingPacker=function(){},GrowingPacker.prototype={fit:function(a){var b,c,d,e=a.length,f=e>0?a[0].w:0,g=e>0?a[0].h:0;for(this.root={x:0,y:0,w:f,h:g},b=0;b<e;b++)d=a[b],(c=this.findNode(this.root,d.w,d.h))?d.fit=this.splitNode(c,d.w,d.h):d.fit=this.growNode(d.w,d.h)},findNode:function(a,b,c){return a.used?this.findNode(a.right,b,c)||this.findNode(a.down,b,c):b<=a.w&&c<=a.h?a:null},splitNode:function(a,b,c){return a.used=!0,a.down={x:a.x,y:a.y+c,w:a.w,h:a.h-c},a.right={x:a.x+b,y:a.y,w:a.w-b,h:c},a},growNode:function(a,b){var c=a<=this.root.w,d=b<=this.root.h,e=d&&this.root.h>=this.root.w+a,f=c&&this.root.w>=this.root.h+b;return e?this.growRight(a,b):f?this.growDown(a,b):d?this.growRight(a,b):c?this.growDown(a,b):null},growRight:function(a,b){this.root={used:!0,x:0,y:0,w:this.root.w+a,h:this.root.h,down:this.root,right:{x:this.root.w,y:0,w:a,h:this.root.h}};var c=this.findNode(this.root,a,b);return c?this.splitNode(c,a,b):null},growDown:function(a,b){this.root={used:!0,x:0,y:0,w:this.root.w,h:this.root.h+b,down:{x:0,y:this.root.h,w:this.root.w,h:b},right:this.root};var c=this.findNode(this.root,a,b);return c?this.splitNode(c,a,b):null}},function(){function a(a,d){var e=(new Date).getTime(),f=Math.max(0,16-(e-c)),g=b.setTimeout(function(){a(e+f)},f);return c=e+f,g}for(var b=this,c=0,d=["ms","moz","webkit","o"],e=0;e<d.length&&!b.requestAnimationFrame;++e)b.requestAnimationFrame=b[d[e]+"RequestAnimationFrame"],b.cancelAnimationFrame=b[d[e]+"CancelAnimationFrame"]||b[d[e]+"CancelRequestAnimationFrame"];b.requestAnimationFrame||(b.requestAnimationFrame=a),b.cancelAnimationFrame||(b.cancelAnimationFrame=function(a){clearTimeout(a)}),"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=b.requestAnimationFrame),exports.requestAnimationFrame=b.requestAnimationFrame):b.requestAnimationFrame=b.requestAnimationFrame,"function"==typeof define&&define.amd&&define("requestAnimationFrame",[],function(){return b.requestAnimationFrame})}(),function(a,b,c,d,e){var f=this,g=f.Blotter=a=function(a,b){d.webgl||g.Messaging.throwError("Blotter",!1,"device does not support webgl"),this._texts=[],this._textEventBindings={},this._scopes={},this._scopeEventBindings={},this._renderer=new g.Renderer,this._startTime=0,this._lastDrawTime=0,this.init.apply(this,arguments)};g.prototype=function(){function a(){var a=Date.now();this._material.uniforms.uTimeDelta.value=(a-(this._lastDrawTime||a))/1e3,this._material.uniforms.uGlobalTime.value=(a-this._startTime)/1e3,this._lastDrawTime=a}function c(){a.call(this),b.each(this._scopes,b.bind(function(a){a.playing&&a.render(),this.trigger("render")},this))}function d(a){if(this.mappingMaterial){var b=this._material.uniforms[a].value;this.mappingMaterial.uniformInterface[a].value=b}}function e(a,b){if(this.mappingMaterial){var c=this._scopes[a],d=c.material.uniforms[b].value;this.mappingMaterial.textUniformInterface[a][b].value=d}}function f(){var a,c,d;a=b.bind(function(){return b.bind(function(a){g.MappingBuilder.build(this._texts,b.bind(function(b){this._mapping=b,this._mapping.ratio=this.ratio,a()},this))},this)},this),c=b.bind(function(){return b.bind(function(a){g.MappingMaterialBuilder.build(this._mapping,this._material,b.bind(function(b){this.mappingMaterial=b,a()},this))},this)},this),d=[a(),c()],b(d).reduceRight(b.wrap,b.bind(function(){this._renderer.stop(),b.each(this._scopes,b.bind(function(a,b){a.mappingMaterial=this.mappingMaterial,a.needsUpdate=!0},this)),this._renderer.material=this.mappingMaterial.shaderMaterial,this._renderer.width=this._mapping.width,this._renderer.height=this._mapping.height,this.autostart&&this.start(),this.trigger(this.lastUpdated?"update":"ready"),this.lastUpdated=Date.now()},this))()}return{constructor:g,get needsUpdate(){},set needsUpdate(a){!0===a&&f.call(this)},get material(){return this._material},set material(a){this.setMaterial(a)},get texts(){return this._texts},set texts(a){this.removeTexts(this._texts),this.addTexts(a)},get imageData(){return this._renderer.imageData},init:function(a,d){d=d||{},b.defaults(this,d,{ratio:g.CanvasUtils.pixelRatio,autobuild:!0,autostart:!0,autoplay:!0}),this.setMaterial(a),this.addTexts(d.texts),this._renderer.on("render",b.bind(c,this)),this.autobuild&&(this.needsUpdate=!0),this.autostart&&this.start()},start:function(){this.autostart=!0,this._startTime=Date.now(),this._renderer.start()},stop:function(){this.autostart=!1,this._renderer.stop()},teardown:function(){this._renderer.teardown()},setMaterial:function(a){g.Messaging.ensureInstanceOf(a,g.Material,"Blotter.Material","Blotter","setMaterial"),this._material=a,this._materialEventBinding&&this._materialEventBinding.unsetEventCallbacks(),this._materialEventBinding=new g.ModelEventBinding(a,{update:b.bind(function(){f.call(this)},this),updateUniform:b.bind(function(a){d.call(this,a)},this)}),a.on("update",this._materialEventBinding.eventCallbacks.update),a.on("update:uniform",this._materialEventBinding.eventCallbacks.updateUniform)},addText:function(a){this.addTexts(a)},addTexts:function(a){var c=g.TextUtils.filterTexts(a),d=b.difference(c,this._texts);b.each(d,b.bind(function(a){this._texts.push(a),this._textEventBindings[a.id]=new g.ModelEventBinding(a,{update:b.bind(function(){f.call(this)},this)}),a.on("update",this._textEventBindings[a.id].eventCallbacks.update),this._scopes[a.id]=new g.RenderScope(a,this),this._scopeEventBindings[a.id]=new g.ModelEventBinding(this._scopes[a.id],{updateUniform:b.bind(function(b){e.call(this,a.id,b)},this)}),this._scopes[a.id].on("update:uniform",this._scopeEventBindings[a.id].eventCallbacks.updateUniform)},this))},removeText:function(a){this.removeTexts(a)},removeTexts:function(a){var c=g.TextUtils.filterTexts(a),d=b.intersection(this._texts,c);b.each(d,b.bind(function(a){this._texts=b.without(this._texts,a),this._textEventBindings[a.id].unsetEventCallbacks(),this._scopeEventBindings[a.id].unsetEventCallbacks(),delete this._textEventBindings[a.id],delete this._scopeEventBindings[a.id],delete this._scopes[a.id]},this))},forText:function(a){return g.Messaging.ensureInstanceOf(a,g.Text,"Blotter.Text","Blotter","forText"),this._scopes[a.id]?this._scopes[a.id]:void g.Messaging.logError("Blotter","forText","Blotter.Text object not found in blotter")},boundsForText:function(a){return g.Messaging.ensureInstanceOf(a,g.Text,"Blotter.Text","Blotter","boundsForText"),this._scopes[a.id]?this._mapping?this.mappingMaterial.boundsForText(a):void 0:void g.Messaging.logError("Blotter","boundsForText","Blotter.Text object not found in blotter")}}}(),b.extend(g.prototype,e.prototype),g.Version="v0.1.0",g.webglRenderer=g.webglRenderer||new c.WebGLRenderer({antialias:!0,alpha:!0,premultipliedAlpha:!1}),g.Assets=g.Assets||{},g.Assets.Shaders=g.Assets.Shaders||{}}(this.Blotter,this._,this.THREE,this.Detector,this.EventEmitter),function(a){a.Math={generateUUID:function(){for(var a=[],b=0;b<256;b++)a[b]=(b<16?"0":"")+b.toString(16).toUpperCase();return function(){var b=4294967295*Math.random()|0,c=4294967295*Math.random()|0,d=4294967295*Math.random()|0,e=4294967295*Math.random()|0;return a[255&b]+a[b>>8&255]+a[b>>16&255]+a[b>>24&255]+"-"+a[255&c]+a[c>>8&255]+"-"+a[c>>16&15|64]+a[c>>24&255]+"-"+a[63&d|128]+a[d>>8&255]+"-"+a[d>>16&255]+a[d>>24&255]+a[255&e]+a[e>>8&255]+a[e>>16&255]+a[e>>24&255]}}()}}(this.Blotter),function(a){a.Messaging=function(){function a(a,b,c){return a+(b?"#"+b:"")+": "+c}return{ensureInstanceOf:function(a,b,c,d,e){if(!(a instanceof b))return void this.logError(d,e,"argument must be instanceof "+c)},logError:function(b,c,d){var e=a(b,c,d);console.error(e)},logWarning:function(b,c,d){var e=a(b,c,d);console.warn(e)},throwError:function(b,c,d){throw a(b,c,d)}}}()}(this.Blotter),function(a,b){a._extendWithGettersSetters=function(a){return b.each(Array.prototype.slice.call(arguments,1),function(b){if(b)for(var c in b)a[c]&&Object.getOwnPropertyDescriptor(a,c)&&Object.getOwnPropertyDescriptor(a,c).set?Object.getOwnPropertyDescriptor(a,c).set(b[c]):a[c]=b[c]}),a}}(this.Blotter,this._),function(a){a.VendorPrefixes=["ms","moz","webkit","o"]}(this.Blotter),function(a,b){a.ModelEventBinding=function(a,b){this.model=a,this.eventCallbacks=b||{}},a.ModelEventBinding.prototype={constructor:a.ModelEventBinding,unsetEventCallbacks:function(){b.each(this.eventCallbacks,b.bind(function(a,b){this.model.off(b,a)},this))}}}(this.Blotter,this._),function(a){a.CanvasUtils={canvas:function(a,b,c){c=c||{};var d=document.createElement("canvas");return d.className=c.class,d.innerHTML=c.html,d.width=a,d.height=b,d},hiDpiCanvas:function(a,b,c,d){c=c||this.pixelRatio,d=d||{};var e=document.createElement("canvas");return e.className=d.class,e.innerHTML=d.html,this.updateCanvasSize(e,a,b,c),e},updateCanvasSize:function(a,b,c,d){d=d||1,a.width=b*d,a.height=c*d,a.style.width=b+"px",a.style.height=c+"px",a.getContext("2d").setTransform(d,0,0,d,0,0)},pixelRatio:function(){for(var b=document.createElement("canvas").getContext("2d"),c=window.devicePixelRatio||1,d=b.backingStorePixelRatio,e=0;e<a.VendorPrefixes.length&&!d;++e)d=b[a.VendorPrefixes[e]+"BackingStorePixelRatio"];return d=d||1,c/d}(),mousePosition:function(a,b){var c=a.getBoundingClientRect();return{x:b.clientX-c.left,y:b.clientY-c.top}},normalizedMousePosition:function(a,b){var c=a.getBoundingClientRect(),d=this.mousePosition(a,b);return{x:d.x/c.width,y:d.y/c.height}}}}(this.Blotter),function(a,b){a.PropertyDefaults={family:"sans-serif",size:12,leading:1.5,fill:"#000",style:"normal",weight:400,padding:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},a.TextUtils={Properties:b.keys(a.PropertyDefaults),ensurePropertyValues:function(c){return c=b.defaults(c||{},a.PropertyDefaults)},filterTexts:function(c){return c=c instanceof a.Text?[c]:b.toArray(c),b.filter(c,b.bind(function(b){var c=b instanceof a.Text;return c||a.Messaging.logWarning("Blotter.TextUtils","filterTexts","object must be instance of Blotter.Text"),c},this))},stringifiedPadding:function(a){var b=a||this.ensurePropertyValues();return(a.paddingTop||b.padding)+"px "+(b.paddingRight||b.padding)+"px "+(b.paddingBottom||b.padding)+"px "+(b.paddingLeft||b.padding)+"px"},sizeForText:function(a,b){var c,d=document.createElement("span");return b=this.ensurePropertyValues(b),d.innerHTML=a,d.style.display="inline-block",d.style.fontFamily=b.family,d.style.fontSize=b.size+"px",d.style.fontWeight=b.weight,d.style.fontStyle=b.style,d.style.lineHeight=b.leading,d.style.maxWidth="none",d.style.padding=this.stringifiedPadding(b),d.style.position="absolute",d.style.width="auto",d.style.visibility="hidden",document.body.appendChild(d),c={w:d.offsetWidth,h:d.offsetHeight},document.body.removeChild(d),c}}}(this.Blotter,this._),function(a,b){a.UniformUtils={UniformTypes:["1f","2f","3f","4f"],defaultUniforms:{uResolution:{type:"2f",value:[0,0]},uGlobalTime:{type:"1f",value:0},uTimeDelta:{type:"1f",value:0},uBlendColor:{type:"4f",value:[1,1,1,1]},uPixelRatio:{type:"1f",value:a.CanvasUtils.pixelRatio}},validValueForUniformType:function(a,c){var d=!1,e=function(a){return!isNaN(a)};switch(a){case"1f":d=!isNaN(c)&&[c].every(e);break;case"2f":d=b.isArray(c)&&2==c.length&&c.every(e);break;case"3f":d=b.isArray(c)&&3==c.length&&c.every(e);break;case"4f":d=b.isArray(c)&&4==c.length&&c.every(e)}return d},glslDataTypeForUniformType:function(a){var b;switch(a){case"1f":b="float";break;case"2f":b="vec2";break;case"3f":b="vec3";break;case"4f":b="vec4"}return b},fullSwizzleStringForUniformType:function(a){var b;switch(a){case"1f":b="x";break;case"2f":b="xy";break;case"3f":b="xyz";break;case"4f":b="xyzw"}return b},extractValidUniforms:function(c){return c=c||{},b.reduce(c,function(c,d,e){return-1==a.UniformUtils.UniformTypes.indexOf(d.type)?(a.Messaging.logError("Blotter.UniformUtils","extractValidUniforms","uniforms must be one of type: "+a.UniformUtils.UniformTypes.join(", ")),c):a.UniformUtils.validValueForUniformType(d.type,d.value)?(c[e]=b.pick(d,"type","value"),c):(a.Messaging.logError("Blotter.UniformUtils","extractValidUniforms","uniform value for "+e+" is incorrect for type: "+d.type),c)},{})},ensureHasRequiredDefaultUniforms:function(b,c,d){if(!a.UniformUtils.hasRequiredDefaultUniforms(b))return void this.logError(c,d,"uniforms object is missing required default uniforms defined in Blotter.UniformUtils.defaultUniforms")},hasRequiredDefaultUniforms:function(c){return!b.difference(b.allKeys(a.UniformUtils.defaultUniforms),b.allKeys(c)).length}}}(this.Blotter,this._),function(a,b,c,d){a.Text=function(b,c){this.id=a.Math.generateUUID(),this.value=b,this.properties=c},a.Text.prototype={constructor:a.Text,get needsUpdate(){},set needsUpdate(a){!0===a&&this.trigger("update")},get properties(){return this._properties},set properties(b){this._properties=a.TextUtils.ensurePropertyValues(b)}},a._extendWithGettersSetters(a.Text.prototype,d.prototype)}(this.Blotter,this._,this.THREE,this.EventEmitter),function(a,b){a.Assets.Shaders.Blending=["//","// Author : Bradley Griffith","// License : Distributed under the MIT License.","//","","// Returns the resulting blend color by blending a top color over a base color","highp vec4 normalBlend(highp vec4 topColor, highp vec4 baseColor) {","  highp vec4 blend = vec4(0.0);","  // HACK","  // Cant divide by 0 (see the 'else' alpha) and after a lot of attempts","  // this simply seems like the only solution Im going to be able to come up with to get alpha back.","  if (baseColor.a == 1.0) {","    baseColor.a = 0.9999999;","  };","  if (topColor.a >= 1.0) {","    blend.a = topColor.a;","    blend.r = topColor.r;","    blend.g = topColor.g;","    blend.b = topColor.b;","  } else if (topColor.a == 0.0) {","    blend.a = baseColor.a;","    blend.r = baseColor.r;","    blend.g = baseColor.g;","    blend.b = baseColor.b;","  } else {","    blend.a = 1.0 - (1.0 - topColor.a) * (1.0 - baseColor.a); // alpha","    blend.r = (topColor.r * topColor.a / blend.a) + (baseColor.r * baseColor.a * (1.0 - topColor.a) / blend.a);","    blend.g = (topColor.g * topColor.a / blend.a) + (baseColor.g * baseColor.a * (1.0 - topColor.a) / blend.a);","    blend.b = (topColor.b * topColor.a / blend.a) + (baseColor.b * baseColor.a * (1.0 - topColor.a) / blend.a);","  }","  return blend;","}","// Returns a vec4 representing the original top color that would have been needed to blend","//  against a passed in base color in order to result in the passed in blend color.","highp vec4 normalUnblend(highp vec4 blendColor, highp vec4 baseColor) {","  highp vec4 unblend = vec4(0.0);","  // HACKY","  // Cant divide by 0 (see alpha) and after a lot of attempts","  // this simply seems like the only solution Im going to be able to come up with to get alpha back.","  if (baseColor.a == 1.0) {","    baseColor.a = 0.9999999;","  }","  unblend.a = 1.0 - ((1.0 - blendColor.a) / (1.0 - baseColor.a));","  // Round to two decimal places","  unblend.a = (sign(100.0 * unblend.a) * floor(abs(100.0 * unblend.a) + 0.5)) / 100.0;","  if (unblend.a >= 1.0) {","    unblend.r = blendColor.r;","    unblend.g = blendColor.g;","    unblend.b = blendColor.b;","  } else if (unblend.a == 0.0) {","    unblend.r = baseColor.r;","    unblend.g = baseColor.g;","    unblend.b = baseColor.b;","  } else {","    unblend.r = (blendColor.r - (baseColor.r * baseColor.a * (1.0 - unblend.a) / blendColor.a)) / (unblend.a / blendColor.a);","    unblend.g = (blendColor.g - (baseColor.g * baseColor.a * (1.0 - unblend.a) / blendColor.a)) / (unblend.a / blendColor.a);","    unblend.b = (blendColor.b - (baseColor.b * baseColor.a * (1.0 - unblend.a) / blendColor.a)) / (unblend.a / blendColor.a);","  }","  return unblend;","}"].join("\n")}(this.Blotter,this._),function(a,b){a.Assets.Shaders.Inf=["//","// Author : Bradley Griffith","// License : Distributed under the MIT License.","//","bool isinf(float val) {","    return (val != 0.0 && val * 2.0 == val) ? true : false;","}"].join("\n")}(this.Blotter,this._),function(a,b){a.Assets.Shaders.LineMath=[a.Assets.Shaders.Inf,"","//","// Author : Bradley Griffith","// License : Distributed under the MIT License.","//","","// Returns the slope of a line given the degrees of the angle on which that line is rotated;","float slopeForDegrees(float deg) {","    // Ensure degrees stay withing 0.0 - 360.0","    deg = mod(deg, 360.0);","    float radians = deg * (PI / 180.0);","    return tan(radians);","}","// Given x, a slope, and another point, find y for x.","float yForXOnSlope(float x, float slope, vec2 p2) {","    return -1.0 * ((slope * (p2.x - x)) - p2.y);","}","// Given y, a slope, and another point, find x for y.","float xForYOnSlope(float y, float slope, vec2 p2) {","    return ((y - p2.y) + (slope * p2.x)) / slope;","}","// Returns slope adjusted for screen ratio.","float normalizedSlope(float slope, vec2 resolution) {","    vec2 p = vec2(1.0) / resolution;","    return ((slope * 100.0) / p.x) / (100.0 / p.x);","}","// Returns offsets (+/-) for any coordinate at distance given slope.","//   Note: This function does not normalize distance.","//   Note: This function does not adjust slope for screen ratio.","vec2 offsetsForCoordAtDistanceOnSlope(float d, float slope) {","    return vec2(","        (d * cos(atan(slope))),","        (d * sin(atan(slope)))","    );","}","// Returns a boolean designating whether or not an infinite line intersects with an infinite line, and sets an `out` variable for the intersection point if it is found.","//   Note: This function does not adjust slope for screen ratio.","bool lineLineIntersection (out vec2 intersect, in vec2 p1, in float m1, in vec2 p2, in float m2) {","    // See: http://gamedev.stackexchange.com/questions/44720/line-intersection-from-parametric-equation","    //      http://stackoverflow.com/questions/41687083/formula-to-determine-if-an-infinite-line-and-a-line-segment-intersect/41687904#41687904","    bool isIntersecting = false;","    float dx = 1.0;","    float dy = m1;","    float dxx = 1.0;","    float dyy = m2;","    float denominator = ((dxx * dy) - (dyy * dx));","    if (denominator == 0.0) {","        // Lines are parallel","        return isIntersecting;","    }","    if (isinf(dy)) {","        float y = yForXOnSlope(p1.x, m2, p2);","        isIntersecting = true;","        intersect = vec2(p1.x, y);","        return isIntersecting;","    }","    if (isinf(dyy)) {","        float y = yForXOnSlope(p2.x, m1, p1);","        isIntersecting = true;","        intersect = vec2(p2.x, y);","        return isIntersecting;","    }","    float u = ((dx * (p2.y - p1.y)) + (dy * (p1.x - p2.x))) / denominator;","    isIntersecting = true;","    intersect = p2 + (u * vec2(dxx, dyy));","    return isIntersecting;","}","// Returns a boolean designating whether or not an infinite line intersects with a line segment, and sets an `out` variable for the intersection point if it is found.","//   Note: This function does not adjust slope for screen ratio.","bool lineLineSegmentIntersection (out vec2 intersect, in vec2 point, in float m, in vec2 pA, in vec2 pB) {","    // See: http://gamedev.stackexchange.com/questions/44720/line-intersection-from-parametric-equation","    //      http://stackoverflow.com/questions/41687083/formula-to-determine-if-an-infinite-line-and-a-line-segment-intersect/41687904#41687904","    bool isIntersecting = false;","    float dx = 1.0;","    float dy = m;","    float dxx = pB.x - pA.x;","    float dyy = pB.y - pA.y;","    float denominator = ((dxx * dy) - (dyy * dx));","    if (denominator == 0.0 || (isinf(dyy / dxx) && isinf(dy))) {","        // Lines are parallel","        return isIntersecting;","    }","    if (isinf(dy)) {","        float m2 = dyy / dxx;","        float y = yForXOnSlope(point.x, m2, pB);","        isIntersecting = true;","        intersect = vec2(point.x, y);","        return isIntersecting;","    }","    float u = ((dx * (pA.y - point.y)) + (dy * (point.x - pA.x))) / denominator;","    if (u >= 0.0 && u <= 1.0) {","        // Intersection occured on line segment","        isIntersecting = true;","        intersect = pA + (u * vec2(dxx, dyy));","    }","    return isIntersecting;","}","// Dev Note: Terrible code. Needs refactor. Just trying to find ","//   which two edges of the rect the intersections occur at.","void intersectsOnRectForLine(out vec2 iA, out vec2 iB, in vec2 rMinXY, in vec2 rMaxXY, in vec2 point, in float slope) {","    bool firstIntersectFound = false;","    vec2 intersectLeft = vec2(0.0);","    vec2 intersectTop = vec2(0.0);","    vec2 intersectRight = vec2(0.0);","    vec2 intersectBottom = vec2(0.0);","    bool intersectsLeft = lineLineSegmentIntersection(intersectLeft, point, slope, rMinXY, vec2(rMinXY.x, rMaxXY.y));","    bool intersectsTop = lineLineSegmentIntersection(intersectTop, point, slope, vec2(rMinXY.x, rMaxXY.y), rMaxXY);","    bool intersectsRight = lineLineSegmentIntersection(intersectRight, point, slope, rMaxXY, vec2(rMaxXY.x, rMinXY.y));","    bool intersectsBottom = lineLineSegmentIntersection(intersectBottom, point, slope, rMinXY, vec2(rMaxXY.x, rMinXY.y));","    if (intersectsLeft) {","        if (firstIntersectFound) {","            iB = intersectLeft;","        }","        else {","            iA = intersectLeft;","            firstIntersectFound = true;","        }","    }","    if (intersectsTop) {","        if (firstIntersectFound) {","            iB = intersectTop;","        }","        else {","            iA = intersectTop;","            firstIntersectFound = true;","        }","    }","    if (intersectsRight) {","        if (firstIntersectFound) {","            iB = intersectRight;","        }","        else {","            iA = intersectRight;","            firstIntersectFound = true;","        }","    }","    if (intersectsBottom) {","        if (firstIntersectFound) {","            iB = intersectBottom;","        }","        else {","            iA = intersectBottom;","        }","    }","}"].join("\n")}(this.Blotter,this._),function(a,b){a.Assets.Shaders.BlinnPhongSpecular=["//","// Author : Reza Ali","// License : Distributed under the MIT License.","//","","float blinnPhongSpecular( vec3 lightDirection, vec3 viewDirection, vec3 surfaceNormal, float shininess ) {","","  //Calculate Blinn-Phong power","  vec3 H = normalize(viewDirection + lightDirection);","  return pow(max(0.0, dot(surfaceNormal, H)), shininess);","}"].join("\n")}(this.Blotter,this._),function(a,b){a.Assets.Shaders.Easing=["//","// Author : Reza Ali","// License : Distributed under the MIT License.","//","","float linear( float t, float b, float c, float d )","{","    return t * ( c / d ) + b;","}","","float linear( float t )","{","    return t;","}","","float inQuad( float t, float b, float c, float d )","{","    return c * ( t /= d ) * t + b;","}","","float inQuad( float t )","{","    return t * t;","}","","float outQuad( float t, float b, float c, float d )","{","    return -c * ( t /= d ) * ( t - 2.0 ) + b;","}","","float outQuad( float t )","{","    return - ( t -= 1.0 ) * t + 1.0;","}","","float inOutQuad( float t, float b, float c, float d )","{","    if( ( t /= d / 2.0 ) < 1.0 ) {","      return c / 2.0 * t * t + b;","    }","    return - c / 2.0 * ( ( --t ) * ( t - 2.0 ) - 1.0 ) + b;","}","","float inOutQuad( float t )","{","    if( ( t /= 0.5 ) < 1.0 ) return 0.5 * t * t;","    return -0.5 * ( ( --t ) * ( t-2 ) - 1 );","}","","float inCubic( float t, float b, float c, float d )","{","    return c * ( t /= d ) * t * t + b;","}","","float inCubic( float t )","{","    return t * t * t;","}","","float outCubic( float t, float b, float c, float d )","{","    return c * ( ( t = t/d - 1.0 ) * t * t + 1.0 ) + b;","}","","float outCubic( float t )","{","    return ( ( --t ) * t * t + 1.0 );","}","","float inOutCubic( float t, float b, float c, float d )","{","    if( ( t /= d / 2.0 ) < 1.0 ) return  c / 2.0 * t * t * t + b;","    return c / 2.0 * ( ( t -= 2.0 ) * t * t + 2.0 ) + b;","}","","float inOutCubic( float t )","{","    if( ( t /= 0.5 ) < 1.0 ) return 0.5 * t * t * t;","    return 0.5 * ( ( t -= 2.0 ) * t * t + 2.0 );","}","","float inQuart( float t, float b, float c, float d )","{","    return c * ( t /= d ) * t * t * t + b;","}","","float inQuart( float t )","{","    return t * t * t * t;","}","","float outQuart( float t, float b, float c, float d )","{","    return -c * ( ( t = t/d - 1.0 ) * t * t * t - 1.0 ) + b;","}","","float outQuart( float t )","{","    return - ( ( --t ) * t * t * t - 1.0 );","}","","float inOutQuart( float t, float b, float c, float d )","{","    if ( ( t /= d / 2.0 ) < 1.0 ) return c / 2.0 * t * t * t * t + b;","    return -c / 2.0 * ( ( t -= 2.0 ) * t * t * t - 2.0 ) + b;","}","","float inOutQuart( float t )","{","    if ( (t /= 0.5 ) < 1.0 ) return 0.5 * t * t * t * t;","    return -0.5 * ( ( t -= 2.0 ) * t * t * t - 2.0 );","}","","float inQuint( float t, float b, float c, float d )","{","    return c * ( t /= d ) * t * t * t * t + b;","}","","float inQuint( float t )","{","    return t * t * t * t * t;","}","","float outQuint( float t, float b, float c, float d )","{","    return c * ( ( t = t/d - 1.0) * t * t * t * t + 1.0 ) + b;","}","","float outQuint( float t )","{","    return ( ( --t ) * t * t * t * t + 1.0 );","}","","float inOutQuint( float t, float b, float c, float d )","{","    if( ( t /= d /2.0 ) < 1.0 ) return  c / 2.0 * t * t * t * t * t + b;","    return c / 2.0 * ( ( t -= 2.0 ) * t * t * t * t + 2.0) + b;","}","","float inOutQuint( float t )","{","    if ( ( t /= 0.5 ) < 1.0 ) return 0.5 * t * t * t * t * t;","    return 0.5 * ( ( t -= 2 ) * t * t * t * t + 2.0 );","}","","float inSine( float t, float b, float c, float d )","{","    return -c * cos( t / d * ( 1.5707963268 ) ) + c + b;","}","","float inSine( float t )","{","    return -1.0 * cos( t * ( 1.5707963268 ) ) + 1.0;","}","","float outSine( float t, float b, float c, float d )","{","    return c * sin( t / d * ( 1.5707963268 ) ) + b;","}","","float outSine( float t )","{","    return sin( t * ( 1.5707963268 ) );","}","","float inOutSine( float t, float b, float c, float d )","{","    return - c / 2.0 * ( cos( 3.1415926536 * t / d ) - 1.0 ) + b;","}","","float inOutSine( float t )","{","    return -0.5 * ( cos( 3.1415926536 * t ) - 1.0 );","}","","float inExpo( float t, float b, float c, float d )","{","    return ( t == 0.0 ) ? b : c * pow( 2.0, 10.0 * ( t / d - 1.0 ) ) + b;","}","","float inExpo( float t )","{","    return ( t == 0 ) ? 0.0 : pow( 2.0, 10.0 * ( t - 1.0 ) );","}","","float outExpo( float t, float b, float c, float d )","{","    return ( t == d ) ? b + c : c * ( - pow( 2.0, -10.0 * t / d ) + 1.0 ) + b;","}","","float outExpo( float t )","{","    return ( t == 1.0 ) ? 1.0 : ( - pow( 2.0, -10.0 * t ) + 1.0 );","}","","float inOutExpo( float t, float b, float c, float d )","{","    if( t == 0 ) return b;","    if( t == d ) return b + c;","    if(( t /= d / 2.0 ) < 1.0 ) return c / 2.0 * pow( 2.0, 10.0 * ( t - 1.0 ) ) + b;","    return c / 2.0 * ( - pow( 2.0, -10.0 * --t ) + 2.0 ) + b;","}","","float inOutExpo( float t )","{","    if( t == 0.0 ) return 0.0;","    if( t == 1.0 ) return 1.0;","    if( ( t /= 0.5 ) < 1.0 ) return 0.5 * pow( 2.0, 10.0 * ( t - 1.0 ) );","    return 0.5 * ( - pow( 2.0, -10.0 * --t ) + 2.0 );","}","","float inCirc( float t, float b, float c, float d )","{","    return -c * ( sqrt( 1.0 - (t/=d)*t) - 1) + b;","}","","float inCirc( float t )","{","    return - ( sqrt( 1.0 - t*t) - 1);","}","","float outCirc( float t, float b, float c, float d )","{","    return c * sqrt( 1.0 - (t=t/d-1)*t) + b;","}","","float outCirc( float t )","{","    return sqrt( 1.0 - (--t)*t);","}","","float inOutCirc( float t, float b, float c, float d )","{","    if ( ( t /= d / 2.0 ) < 1 ) return - c / 2.0 * ( sqrt( 1.0 - t * t ) - 1.0 ) + b;","    return c / 2.0 * ( sqrt( 1.0 - ( t -= 2.0 ) * t ) + 1.0 ) + b;","}","","float inOutCirc( float t )","{","    if( ( t /= 0.5 ) < 1.0 ) return -0.5 * ( sqrt( 1.0 - t * t ) - 1.0 );","    return 0.5 * ( sqrt( 1.0 - ( t -= 2.0 ) * t ) + 1.0 );","}","","float inElastic( float t, float b, float c, float d )","{","    float s = 1.70158; float p = 0.0; float a = c;","    if( t == 0 ) return b;  if( ( t /= d ) == 1 ) return b + c;","    p = d * 0.3;","    if( a < abs( c ) ) { a = c; float s = p / 4.0; }","    else s = 0.1591549431 * p / ( 6.2831853072 ) * asin( c / a );","    return -( a * pow( 2.0, 10.0 * ( t -= 1.0 ) ) * sin( ( t * d - s ) * ( 6.2831853072 ) / p ) )  + b;","}","","float inElastic( float t )","{","    float s = 1.70158; float p = 0.0; float a = 1.0;","    if( t == 0.0 ) return 0.0;","    if( t == 1.0 ) return 1.0;","    p = 0.3;","    s = p / ( 6.2831853072 ) * asin( 1.0 / a );","    return -( a * pow( 2.0, 10.0 * ( t -= 1.0 ) ) * sin( ( t - s ) * ( 6.2831853072 ) / p ) );","}","","float outElastic( float t, float b, float c, float d )","{","    float s = 1.70158; float p = 0.0; float a = c;","    if( t == 0.0 ) return b;","    if( (t /= d ) == 1.0 ) return b + c;","    p = d * 0.3;","    if( a < abs( c ) ) { a = c; s = p / 4.0; }","    else { s = p / ( 6.2831853072 ) * asin( c / a ); }","    return a * pow( 2.0, -10.0 * t ) * sin( ( t * d - s ) * ( 6.2831853072 ) / p ) + c + b;","}","","float outElastic( float t )","{","    float s = 1.70158; float p = 0.0 ; float a = 1.0;","    if( t == 0.0 ) return 0.0;  if( t == 1.0 ) return 1.0;","    p = 0.3;","    s = p / ( 6.2831853072 ) * asin( 1.0 / a );","    return a * pow( 2.0, -10.0 * t ) * sin( ( t - s ) * ( 6.2831853072 ) / p ) + 1.0;","}","","float inOutElastic( float t, float b, float c, float d )","{","    float s = 1.70158; float p = 0.0; float a = c;","    if( t == 0.0 ) return b;","    if( ( t /= d / 2.0 ) == 2.0 ) return b + c;","    p = d * ( 0.3 * 1.5 );","    if( a < abs( c ) ) { a = c; s = p / 4.0; }","    else { s = p / ( 6.2831853072 ) * asin( c / a ); }","    if( t < 1.0 ) return -0.5 * ( a * pow( 2.0, 10.0 * ( t -= 1.0 ) ) * sin( ( t * d - s ) * ( 6.2831853072 ) / p ) ) + b;","    return a * pow( 2.0, -10.0 * ( t -= 1.0 ) ) * sin( ( t * d - s ) * ( 6.2831853072 ) / p ) * 0.5 + c + b;","}","","float inOutElastic( float t )","{","    float s = 1.70158; float p = 0; float a = 1.0;","    if( t == 0 ) return 0.0;","    if( ( t /= 0.5 ) == 2.0 ) return 1.0;","    p = ( 0.3 * 1.5 );","    s = p / ( 6.2831853072 ) * asin( 1.0 / a );","    if( t < 1.0 ) return -0.5 * ( a * pow( 2.0, 10.0 * ( t -= 1.0 ) ) * sin( ( t - s ) * ( 6.2831853072 ) / p ) );","    return a * pow( 2.0, -10.0 * ( t -= 1.0 ) ) * sin( ( t - s ) * ( 6.2831853072 ) / p ) * 0.5 + 1.0;","}","","float inBack( float t, float b, float c, float d )","{","    float s = 1.70158;","    return c * ( t /= d ) * t * ( ( s + 1.0 ) * t - s ) + b;","}","","float inBack( float t )","{","    float s = 1.70158;","    return t * t * ( ( s + 1.0 ) * t - s);","}","","float outBack( float t,  float b,  float c,  float d )","{","    float s = 1.70158;","    return c * ( ( t = t / d - 1.0 ) * t * ( ( s + 1.0 ) * t + s ) + 1.0 ) + b;","}","","float outBack( float t )","{","    float s = 1.70158;","    return ( ( --t ) * t * ( ( s + 1.0 ) * t + s ) + 1.0);","}","","float inOutBack( float t, float b, float c, float d )","{","    float s = 1.70158;","    if( ( t /= d / 2.0 ) < 1.0 ) return c / 2.0 * ( t * t * ( ( ( s *= 1.525 ) + 1.0 ) * t - s ) ) + b;","    return c / 2.0 * ( ( t -= 2.0 ) * t * ( ( ( s *= ( 1.525 ) ) + 1.0 ) * t + s ) + 2.0 ) + b;","}","","float inOutBack( float t )","{","    float s = 1.70158;","    if( ( t /= 0.5 ) < 1.0 ) return 0.5 * ( t * t * ( ( ( s *= 1.525 ) + 1.0 ) * t - s ) );","    return 0.5 * ( ( t -= 2 ) * t * ( ( ( s *= ( 1.525 ) ) + 1.0 ) * t + s ) + 2.0 );","}","","float outBounce( float t, float b, float c, float d )","{","    if( ( t /= d ) < ( 1.0 / 2.75 ) ) {","        return c * ( 7.5625 * t * t ) + b;","    } else if ( t < ( 2.0 / 2.75 ) ) {","        return c * ( 7.5625 * ( t -= ( 1.5 / 2.75 ) ) * t + 0.75 ) + b;","    } else if ( t < ( 2.5 / 2.75 ) ) {","        return c * ( 7.5625 * ( t -= ( 2.25 / 2.75 ) ) * t + 0.9375 ) + b;","    } else {","        return c * ( 7.5625 * ( t -= ( 2.625 / 2.75 ) ) * t + 0.984375 ) + b;","    }","}","","float outBounce( float t )","{","    if( t < ( 1.0 / 2.75 ) ) {","        return ( 7.5625 * t * t );","    } else if ( t < ( 2.0 / 2.75 ) ) {","        return ( 7.5625 * ( t-= ( 1.5 / 2.75 ) ) * t + .75 );","    } else if ( t < ( 2.5 / 2.75 ) ) {","        return ( 7.5625 * ( t -= ( 2.25 / 2.75 ) ) * t + 0.9375 );","    } else {","        return ( 7.5625 * ( t -= ( 2.625 / 2.75 ) ) * t + 0.984375 );","    }","}","","float inBounce( float t, float b, float c, float d )","{","    return c - outBounce( d - t, 0.0, c, d ) + b;","}","","float inBounce( float t )","{","    return 1.0 - outBounce( 1.0 - t);","}","","float inOutBounce( float t, float b, float c, float d )","{","    if ( t < d /2.0 ) return inBounce ( t * 2.0, 0.0, c, d ) * 0.5 + b;","    return outBounce ( t * 2.0 - d, 0, c, d ) * 0.5 + c * 0.5 + b;","}","","float inOutBounce( float t )","{","    if ( t < 0.5 ) return inBounce( t * 2.0 ) * 0.5;","    return outBounce( t * 2.0 - 1.0 ) * 0.5 + 0.5;","}"].join("\n")}(this.Blotter,this._),function(a,b){a.Assets.Shaders.Gamma=["//","// Author : Reza Ali","// License : Distributed under the MIT License.","//","","const vec3 cGammaCorrection = vec3( 0.4545454545 );","","vec3 gamma( in vec3 color )","{","  return pow( color, cGammaCorrection );","}","","vec4 gamma( in vec4 color )","{","  return vec4( gamma( color.rgb ), color.a );","}"].join("\n")}(this.Blotter,this._),function(a,b){a.Assets.Shaders.Map=["//","// Author : Reza Ali","// License : Distributed under the MIT License.","//","","float map( float value, float inMin, float inMax, float outMin, float outMax )","{","    return ( (value - inMin) / ( inMax - inMin ) * ( outMax - outMin ) ) + outMin;","}"].join("\n")}(this.Blotter,this._),function(a,b){a.Assets.Shaders.Noise=["//","// Author : Patricio Gonzalez Vivo and Jen Lowe","// License : Distributed under the MIT License.","// Source : https://github.com/patriciogonzalezvivo/thebookofshaders","//","float random (in float _x) {","    return fract(sin(_x)*1e4);","}","","float random (in vec2 co) {","    return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);","}","","float noise (in float _x) {","    float i = floor(_x);","    float f = fract(_x);","    float u = f * f * (3.0 - 2.0 * f);","    return mix(random(i), random(i + 1.0), u);","}","","float noise (in vec2 _st) {","    vec2 i = floor(_st);","    vec2 f = fract(_st);","    // Four corners in 2D of a tile","    float a = random(i);","    float b = random(i + vec2(1.0, 0.0));","    float c = random(i + vec2(0.0, 1.0));","    float d = random(i + vec2(1.0, 1.0));","    vec2 u = f * f * (3.0 - 2.0 * f);","    return mix(a, b, u.x) + ","            (c - a)* u.y * (1.0 - u.x) + ","            (d - b) * u.x * u.y;","}"].join("\n")}(this.Blotter,this._),function(a,b){a.Assets.Shaders.Noise2D=["//","// Description : Array and textureless GLSL 2D simplex noise function.","//      Author : Ian McEwan, Ashima Arts.","//  Maintainer : ijm","//     Lastmod : 20110822 (ijm)","//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.","//               Distributed under the MIT License. See LICENSE file.","//               https://github.com/ashima/webgl-noise","//","","vec2 n2mod289(vec2 x) {","  return x - floor(x * (1.0 / 289.0)) * 289.0;","}","","vec3 n2mod289(vec3 x) {","  return x - floor(x * (1.0 / 289.0)) * 289.0;","}","","vec4 n2mod289(vec4 x) {","  return x - floor(x * (1.0 / 289.0)) * 289.0;","}","","vec3 permute(vec3 x) {","  return n2mod289(((x*34.0)+1.0)*x);","}","","float snoise(vec2 v)","  {","  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0","                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)","                     -0.577350269189626,  // -1.0 + 2.0 * C.x","                      0.024390243902439); // 1.0 / 41.0","// First corner","  vec2 i  = floor(v + dot(v, C.yy) );","  vec2 x0 = v -   i + dot(i, C.xx);","","// Other corners","  vec2 i1;","  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0","  //i1.y = 1.0 - i1.x;","  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);","  // x0 = x0 - 0.0 + 0.0 * C.xx ;","  // x1 = x0 - i1 + 1.0 * C.xx ;","  // x2 = x0 - 1.0 + 2.0 * C.xx ;","  vec4 x12 = x0.xyxy + C.xxzz;","  x12.xy -= i1;","","// Permutations","  i = n2mod289(i); // Avoid truncation effects in permutation","  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))","   + i.x + vec3(0.0, i1.x, 1.0 ));","","  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);","  m = m*m ;","  m = m*m ;","","// Gradients: 41 points uniformly over a line, mapped onto a diamond.","// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)","","  vec3 x = 2.0 * fract(p * C.www) - 1.0;","  vec3 h = abs(x) - 0.5;","  vec3 ox = floor(x + 0.5);","  vec3 a0 = x - ox;","","// Normalise gradients implicitly by scaling m","// Approximation of: m *= inversesqrt( a0*a0 + h*h );","  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );","","// Compute final noise value at P","  vec3 g;","  g.x  = a0.x  * x0.x  + h.x  * x0.y;","  g.yz = a0.yz * x12.xz + h.yz * x12.yw;","  return 130.0 * dot(m, g);","}"].join("\n")}(this.Blotter,this._),function(a,b){a.Assets.Shaders.Noise3D=["//","// Description : Array and textureless GLSL 2D/3D/4D simplex","//               noise functions.","//      Author : Ian McEwan, Ashima Arts.","//  Maintainer : ijm","//     Lastmod : 20110822 (ijm)","//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.","//               Distributed under the MIT License. See LICENSE file.","//               https://github.com/ashima/webgl-noise","//","","vec2 n3mod289(vec2 x) {","  return x - floor(x * (1.0 / 289.0)) * 289.0;","}","","vec3 n3mod289(vec3 x) {","  return x - floor(x * (1.0 / 289.0)) * 289.0;","}","","vec4 n3mod289(vec4 x) {","  return x - floor(x * (1.0 / 289.0)) * 289.0;","}","","vec4 permute(vec4 x) {","     return n3mod289(((x*34.0)+1.0)*x);","}","","vec4 taylorInvSqrt(vec4 r)","{","  return 1.79284291400159 - 0.85373472095314 * r;","}","","float snoise(vec3 v)","  {","  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;","  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);","","// First corner","  vec3 i  = floor(v + dot(v, C.yyy) );","  vec3 x0 =   v - i + dot(i, C.xxx) ;","","// Other corners","  vec3 g = step(x0.yzx, x0.xyz);","  vec3 l = 1.0 - g;","  vec3 i1 = min( g.xyz, l.zxy );","  vec3 i2 = max( g.xyz, l.zxy );","","  //   x0 = x0 - 0.0 + 0.0 * C.xxx;","  //   x1 = x0 - i1  + 1.0 * C.xxx;","  //   x2 = x0 - i2  + 2.0 * C.xxx;","  //   x3 = x0 - 1.0 + 3.0 * C.xxx;","  vec3 x1 = x0 - i1 + C.xxx;","  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y","  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y","","// Permutations","  i = n3mod289(i);","  vec4 p = permute( permute( permute(","             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))","           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))","           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));","","// Gradients: 7x7 points over a square, mapped onto an octahedron.","// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)","  float n_ = 0.142857142857; // 1.0/7.0","  vec3  ns = n_ * D.wyz - D.xzx;","","  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)","","  vec4 x_ = floor(j * ns.z);","  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)","","  vec4 x = x_ *ns.x + ns.yyyy;","  vec4 y = y_ *ns.x + ns.yyyy;","  vec4 h = 1.0 - abs(x) - abs(y);","","  vec4 b0 = vec4( x.xy, y.xy );","  vec4 b1 = vec4( x.zw, y.zw );","","  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;","  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;","  vec4 s0 = floor(b0)*2.0 + 1.0;","  vec4 s1 = floor(b1)*2.0 + 1.0;","  vec4 sh = -step(h, vec4(0.0));","","  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;","  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;","","  vec3 p0 = vec3(a0.xy,h.x);","  vec3 p1 = vec3(a0.zw,h.y);","  vec3 p2 = vec3(a1.xy,h.z);","  vec3 p3 = vec3(a1.zw,h.w);","","//Normalise gradients","  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));","  p0 *= norm.x;","  p1 *= norm.y;","  p2 *= norm.z;","  p3 *= norm.w;","","// Mix final noise value","  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);","  m = m * m;","  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),","                                dot(p2,x2), dot(p3,x3) ) );","  }"].join("\n")}(this.Blotter,this._),function(a,b){a.Assets.Shaders.Noise4D=["//","// Description : Array and textureless GLSL 2D/3D/4D simplex","//               noise functions.","//      Author : Ian McEwan, Ashima Arts.","//  Maintainer : ijm","//     Lastmod : 20110822 (ijm)","//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.","//               Distributed under the MIT License. See LICENSE file.","//               https://github.com/ashima/webgl-noise","//","","vec4 mod289(vec4 x) {","  return x - floor(x * (1.0 / 289.0)) * 289.0; }","","float mod289(float x) {","  return x - floor(x * (1.0 / 289.0)) * 289.0; }","","vec4 permute(vec4 x) {","     return mod289(((x*34.0)+1.0)*x);","}","","float permute(float x) {","     return mod289(((x*34.0)+1.0)*x);","}","","vec4 taylorInvSqrt(vec4 r)","{","  return 1.79284291400159 - 0.85373472095314 * r;","}","","float taylorInvSqrt(float r)","{","  return 1.79284291400159 - 0.85373472095314 * r;","}","","vec4 grad4(float j, vec4 ip)","  {","  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);","  vec4 p,s;","","  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;","  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);","  s = vec4(lessThan(p, vec4(0.0)));","  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;","","  return p;","  }","","// (sqrt(5) - 1)/4 = F4, used once below","#define F4 0.309016994374947451","","float snoise(vec4 v)","  {","  const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4","                        0.276393202250021,  // 2 * G4","                        0.414589803375032,  // 3 * G4","                       -0.447213595499958); // -1 + 4 * G4","","// First corner","  vec4 i  = floor(v + dot(v, vec4(F4)) );","  vec4 x0 = v -   i + dot(i, C.xxxx);","","// Other corners","","// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)","  vec4 i0;","  vec3 isX = step( x0.yzw, x0.xxx );","  vec3 isYZ = step( x0.zww, x0.yyz );","//  i0.x = dot( isX, vec3( 1.0 ) );","  i0.x = isX.x + isX.y + isX.z;","  i0.yzw = 1.0 - isX;","//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );","  i0.y += isYZ.x + isYZ.y;","  i0.zw += 1.0 - isYZ.xy;","  i0.z += isYZ.z;","  i0.w += 1.0 - isYZ.z;","","  // i0 now contains the unique values 0,1,2,3 in each channel","  vec4 i3 = clamp( i0, 0.0, 1.0 );","  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );","  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );","","  //  x0 = x0 - 0.0 + 0.0 * C.xxxx","  //  x1 = x0 - i1  + 1.0 * C.xxxx","  //  x2 = x0 - i2  + 2.0 * C.xxxx","  //  x3 = x0 - i3  + 3.0 * C.xxxx","  //  x4 = x0 - 1.0 + 4.0 * C.xxxx","  vec4 x1 = x0 - i1 + C.xxxx;","  vec4 x2 = x0 - i2 + C.yyyy;","  vec4 x3 = x0 - i3 + C.zzzz;","  vec4 x4 = x0 + C.wwww;","","// Permutations","  i = mod289(i);","  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);","  vec4 j1 = permute( permute( permute( permute (","             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))","           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))","           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))","           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));","","// Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope","// 7*7*6 = 294, which is close to the ring size 17*17 = 289.","  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;","","  vec4 p0 = grad4(j0,   ip);","  vec4 p1 = grad4(j1.x, ip);","  vec4 p2 = grad4(j1.y, ip);","  vec4 p3 = grad4(j1.z, ip);","  vec4 p4 = grad4(j1.w, ip);","","// Normalise gradients","  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));","  p0 *= norm.x;","  p1 *= norm.y;","  p2 *= norm.z;","  p3 *= norm.w;","  p4 *= taylorInvSqrt(dot(p4,p4));","","// Mix contributions from the five corners","  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);","  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);","  m0 = m0 * m0;","  m1 = m1 * m1;","  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))","               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;","","  }"].join("\n")}(this.Blotter,this._),function(a,b){a.Assets.Shaders.PI=["//","// Author : Reza Ali","// License : Distributed under the MIT License.","//","","#define TWO_PI 6.2831853072","#define PI 3.14159265359","#define HALF_PI 1.57079632679"].join("\n")}(this.Blotter,this._),function(a,b){a.Assets.Shaders.Random=["//","// Author : Patricio Gonzalez Vivo and Jen Lowe","// License : Distributed under the MIT License.","// Source : https://github.com/patriciogonzalezvivo/thebookofshaders","//","","float random (in float _x) {","    return fract(sin(_x)*1e4);","}","","float random (in vec2 co) {","    return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);","}"].join("\n")}(this.Blotter,this._),function(a,b){a.Mapping=function(a,b,c,d){this.texts=a,this._textBounds=b,this._width=c,this._height=d,this._ratio=1},a.Mapping.prototype=function(){function c(b,c){return c=c||a.TextUtils.ensurePropertyValues().leading,isNaN(c)?-1!==c.toString().indexOf("px")?c=parseInt(c):-1!==c.toString().indexOf("%")&&(c=parseInt(c)/100*b):c*=b,c}return{constructor:a.Mapping,get ratio(){return this._ratio},set ratio(a){this._ratio=a||1},get width(){return this._width*this._ratio},get height(){return this._height*this._ratio},boundsForText:function(b){a.Messaging.ensureInstanceOf(b,a.Text,"Blotter.Text","Blotter.Mapping","boundsForText");var c=this._textBounds[b.id];return c&&(c={w:c.w*this._ratio,h:c.h*this._ratio,x:c.x*this._ratio,y:c.y*this._ratio}),c},toCanvas:function(d){var e=a.CanvasUtils.hiDpiCanvas(this._width,this._height,this._ratio),f=e.getContext("2d",{alpha:!1}),g=new Image;f.textBaseline="middle";for(var h=0;h<this.texts.length;h++){var i=this.texts[h],j=this._textBounds[i.id],k=c.call(this,i.properties.size,i.properties.leading)/2;f.font=i.properties.style+" "+i.properties.weight+" "+i.properties.size+"px "+i.properties.family,f.save(),f.translate(j.x+i.properties.paddingLeft,this._height-(j.y+j.h)+i.properties.paddingTop),f.fillStyle=i.properties.fill,f.fillText(i.value,0,Math.round(k)),f.restore()}g.onload=b.bind(function(){f.save(),f.scale(1,-1),f.clearRect(0,-1*this._height,this._width,this._height),f.drawImage(g,0,-1*this._height,this._width,this._height),f.restore(),d(e)},this),g.src=e.toDataURL("image/png")}}}()}(this.Blotter,this._),function(a,b,c){a.MappingMaterial=function(a,b,c,d){this.mapping=a,this.material=b,this.shaderMaterial=c,this._userUniformDataTextureObjects=d,this.init.apply(this,arguments)},a.MappingMaterial.prototype=function(){function d(a,b,c,d){var e=d.type;"1f"==e?(c[4*b]=a,c[4*b+1]=0,c[4*b+2]=0,c[4*b+3]=0):"2f"==e?(c[4*b]=a[0],c[4*b+1]=a[1],c[4*b+2]=0,c[4*b+3]=0):"3f"==e?(c[4*b]=a[0],c[4*b+1]=a[1],c[4*b+2]=a[2],c[4*b+3]=0):"4f"==e?(c[4*b]=a[0],c[4*b+1]=a[1],c[4*b+2]=a[2],c[4*b+3]=a[3]):(c[4*b]=0,c[4*b+1]=0,c[4*b+2]=0,c[4*b+3]=0)}function e(d){var e={_type:d.userUniform.type,_value:d.userUniform.value,get value(){return this._value},set value(b){if(!a.UniformUtils.validValueForUniformType(this._type,b))return void a.Messaging.logError("Blotter.MappingMaterial",!1,"uniform value not valid for uniform type: "+this._type);this._value=b,this.trigger("update")}};return b.extend(e,c.prototype),e}function f(a,c){return b.reduce(a.texts,function(a,f,g){return a[f.id]=b.reduce(c.userUniforms,function(a,b,f){var h=b.position+g;return a[f]=e(b),a[f].on("update",function(){d(a[f].value,h,c.data,b.userUniform),c.texture.needsUpdate=!0}),a[f].value=b.userUniform.value,a},{}),a},{})}function g(a,c,d){return b.reduce(c.userUniforms,function(f,g,h){return f[h]=e(g),f[h].on("update",function(){b.each(a.texts,function(a){d[a.id][h].value=f[h].value}),c.texture.needsUpdate=!0}),f},{})}return{constructor:a.MappingMaterial,get uniforms(){return this.material.uniforms},get mainImage(){return this.material.mainImage},get width(){return this.mapping.width},get height(){return this.mapping.height},get ratio(){return this.mapping.ratio},init:function(a,b,c,d){this.textUniformInterface=f(this.mapping,this._userUniformDataTextureObjects),this.uniformInterface=g(this.mapping,this._userUniformDataTextureObjects,this.textUniformInterface)},boundsForText:function(b){return a.Messaging.ensureInstanceOf(b,a.Text,"Blotter.Text","Blotter.MappingMaterial","boundsForText"),this.mapping.boundsForText(b)}}}()}(this.Blotter,this._,this.EventEmitter),function(a,b,c){a.Material=function(){this.init.apply(this,arguments)},a.Material.prototype=function(){function d(){return["void mainImage( out vec4 mainImage, in vec2 fragCoord ) {","mainImage = textTexture(fragCoord / uResolution);","}"].join("\n")}function e(d){var e={_type:d.type,_value:d.value,get type(){return this._type},set type(a){this._type=a},get value(){return this._value},set value(b){if(!a.UniformUtils.validValueForUniformType(this._type,b))return void a.Messaging.logError("Blotter.Material",!1,"uniform value not valid for uniform type: "+this._type);this._value=b,this.trigger("update")}};return b.extend(e,c.prototype),e}function f(a){return b.reduce(a,b.bind(function(a,c,d){return a[d]=e(c),a[d].on("update",b.bind(function(){this.trigger("update:uniform",[d])},this)),a},this),{})}return{constructor:a.Material,get needsUpdate(){},set needsUpdate(a){!0===a&&this.trigger("update")},get mainImage(){return this._mainImage},set mainImage(a){this._mainImage=a||d()},get uniforms(){return this._uniforms},set uniforms(c){this._uniforms=f.call(this,a.UniformUtils.extractValidUniforms(b.extend(c,a.UniformUtils.defaultUniforms)))},init:function(){this.mainImage=d(),this.uniforms={}}}}(),a._extendWithGettersSetters(a.Material.prototype,c.prototype)}(this.Blotter,this._,this.EventEmitter),function(a,b){a.ShaderMaterial=function(b,c){a.Material.apply(this,arguments)},a.ShaderMaterial.prototype=Object.create(a.Material.prototype),a._extendWithGettersSetters(a.ShaderMaterial.prototype,function(){return{constructor:a.ShaderMaterial,init:function(a,c){b.defaults(this,c),this.mainImage=a}}}())}(this.Blotter,this._),function(a,b,c){a.RenderScope=function(b,c){this.text=b,this.blotter=c,this.material={mainImage:this.blotter.material.mainImage},this._mappingMaterial=c.mappingMaterial,this.playing=this.blotter.autoplay,this.timeDelta=0,this.lastDrawTime=!1,this.frameCount=0,this.domElement=a.CanvasUtils.hiDpiCanvas(0,0,this.blotter.ratio,{class:"b-canvas",html:b.value}),this.context=this.domElement.getContext("2d")},a.RenderScope.prototype=function(){function d(){function b(b){c.domElement.addEventListener(b,function(d){var e=a.CanvasUtils.normalizedMousePosition(c.domElement,d);c.emit(b,e)},!1)}for(var c=this,d=["mousedown","mouseup","mousemove","mouseenter","mouseleave"],e=0;e<d.length;e++){b(d[e])}}function e(a,b){var c=a.boundsForText(b);if(c)return{w:c.w,h:c.h,x:-1*Math.floor(c.x),y:-1*Math.floor(a.height-(c.y+c.h))}}function f(a,c){b.each(a,function(a,b){var d=c[b];if(d){var e=d.type==a.type,f=d.value==a.value;e&&!f&&(d.value=a.value)}})}function g(d){var e={_type:d.type,_value:d.value,get type(){return this._type},set type(b){a.Messaging.logError("Blotter.RenderScope",!1,"uniform types may not be updated through a text scope")},get value(){return this._value},set value(b){if(!a.UniformUtils.validValueForUniformType(this._type,b))return void a.Messaging.logError("Blotter.RenderScope",!1,"uniform value not valid for uniform type: "+this._type);this._value=b,this.trigger("update")}};return b.extend(e,c.prototype),e}function h(a){return b.reduce(a,b.bind(function(a,c,d){return a[d]=g(c),a[d].on("update",b.bind(function(){this.trigger("update:uniform",[d])},this)),a},this),{})}function i(){var b=this._mappingMaterial,c=b&&e(b,this.text),d=this.material.uniforms;b&&c&&(a.CanvasUtils.updateCanvasSize(this.domElement,c.w/this.blotter.ratio,c.h/this.blotter.ratio,this.blotter.ratio),this.domElement.innerHTML=this.text.value,this.bounds=c,this.material.uniforms=h.call(this,b.uniforms),this.material.mainImage=b.mainImage,d&&f(d,this.material.uniforms),this.trigger(this.lastUpdated?"update":"ready"),this.lastUpdated=Date.now())}return{constructor:a.RenderScope,get needsUpdate(){},set needsUpdate(a){!0===a&&i.call(this)},get mappingMaterial(){},set mappingMaterial(a){this._mappingMaterial=a},play:function(){this.playing=!0},pause:function(){this.playing=!1},render:function(){if(this.bounds){var a=Date.now();this.frameCount+=1,this.timeDelta=(a-(this.lastDrawTime||a))/1e3,this.lastDrawTime=a,this.context.clearRect(0,0,this.domElement.width,this.domElement.height),this.context.putImageData(this.blotter.imageData,this.bounds.x,this.bounds.y),this.trigger("render",[this.frameCount])}},appendTo:function(a){return"function"==typeof a.append?a.append(this.domElement):a.appendChild(this.domElement),d.call(this),this}}}(),a._extendWithGettersSetters(a.RenderScope.prototype,c.prototype)}(this.Blotter,this._,this.EventEmitter),function(a,b,c,d){var e=this;a.Renderer=function(){this._currentAnimationLoop=!1,this._scene=new c.Scene,this._plane=new c.PlaneGeometry(1,1),this._material=new c.MeshBasicMaterial,this._mesh=new c.Mesh(this._plane,this._material),this._scene.add(this._mesh),this._camera=new c.OrthographicCamera(.5,.5,.5,.5,0,100),this.init.apply(this,arguments)},a.Renderer.prototype=function(){function d(a,b){var d=new c.WebGLRenderTarget(a,b,{minFilter:c.LinearFilter,magFilter:c.LinearFilter,format:c.RGBAFormat,type:c.UnsignedByteType});return d.texture.generateMipmaps=!1,d.width=a,d.height=b,d}function f(){a.webglRenderer.render(this._scene,this._camera,this._renderTarget),a.webglRenderer.readRenderTargetPixels(this._renderTarget,0,0,this._renderTarget.width,this._renderTarget.height,this._imageDataArray),this.trigger("render"),this._currentAnimationLoop=e.requestAnimationFrame(b.bind(f,this))}return{constructor:a.Renderer,get material(){},set material(a){a instanceof c.Material&&(this._material=a,this._mesh.material=a)},get width(){return this._width},set width(a){this.setSize(a,this._height)},get height(){return this._height},set height(a){this.setSize(this._width,a)},init:function(){this.setSize(1,1)},start:function(){this._currentAnimationLoop||f.call(this)},stop:function(){this._currentAnimationLoop&&(e.cancelAnimationFrame(this._currentAnimationLoop),this._currentAnimationLoop=void 0)},setSize:function(a,b){this._width=Math.trunc(a)||1,this._height=Math.trunc(b)||1,this._mesh.scale.set(this._width,this._height,1),this._camera.left=this._width/-2,this._camera.right=this._width/2,this._camera.top=this._height/2,this._camera.bottom=this._height/-2,this._camera.updateProjectionMatrix(),this._renderTarget=d(this._width,this._height),this._viewBuffer=new ArrayBuffer(this._width*this._height*4),this._imageDataArray=new Uint8Array(this._viewBuffer),this._clampedImageDataArray=new Uint8ClampedArray(this._viewBuffer),this.imageData=new ImageData(this._clampedImageDataArray,this._width,this._height)},teardown:function(){this.stop()}}}(),a._extendWithGettersSetters(a.Renderer.prototype,d.prototype)}(this.Blotter,this._,this.THREE,this.EventEmitter),function(a,b,c,d){a.BoundsDataTextureBuilder=function(){function a(a){for(var b=a.texts,c=new Float32Array(4*b.length),d=0;d<b.length;d++){var e=b[d],f=a.boundsForText(e);c[4*d]=f.x,c[4*d+1]=a.height-(f.y+f.h),c[4*d+2]=f.w,c[4*d+3]=f.h}return c}return{build:function(b,e){d(function(){var d=a(b),f=new c.DataTexture(d,b.texts.length,1,c.RGBAFormat,c.FloatType);f.needsUpdate=!0,e(f)})}}}()}(this.Blotter,this._,this.THREE,this.setImmediate),function(a,b,c,d){a.IndicesDataTextureBuilder=function(){function a(a,b,c,d){for(var e=a.ratio,f=new Float32Array(c*b*4),g=b%1,h=1/a.texts.length/2,i=1;i<f.length/4;i++){for(var j=Math.ceil(i/(b-g)),k=i-(b-g)*(j-1),l=0,m=0,n=0,o=0;o<a.texts.length;o++){var p=a.texts[o],q=a.boundsForText(p),r=q.w/e*d,s=q.h/e*d,t=q.x/e*d,u=q.y/e*d;if(j>=u&&j<=u+s&&k>=t&&k<=t+r){l=o/a.texts.length+h,n=1;break}}var v=i-1;f[4*v+0]=l,f[4*v+1]=m,f[4*v+2]=m,f[4*v+3]=n}return f}return{build:function(b,e){var f=.5;d(function(){var d=b.width/b.ratio*f,g=b.height/b.ratio*f,h=a(b,d,g,f),i=new c.DataTexture(h,d,g,c.RGBAFormat,c.FloatType);i.flipY=!0,i.needsUpdate=!0,e(i)})}}}()}(this.Blotter,this._,this.THREE,this.setImmediate),function(a,b,c){a.TextTextureBuilder=function(){return{build:function(a,d){var e,f=new c.TextureLoader;a.toCanvas(b.bind(function(a){e=a.toDataURL(),f.load(e,b.bind(function(a){a.minFilter=c.LinearFilter,a.magFilter=c.LinearFilter,a.generateMipmaps=!0,a.needsUpdate=!0,d(a)},this))},this))}}}()}(this.Blotter,this._,this.THREE),function(a,b,c,d,e){a.MappingBuilder=function(){function c(a,b){var c=a.w*a.h;return b.w*b.h-c}function f(c){return b.reduce(c,function(b,c){var d=a.TextUtils.sizeForText(c.value,c.properties);return b[c.id]=d,b},[])}return{build:function(b,g){e(function(){var e=a.TextUtils.filterTexts(b),h=f(e),i=new d,j=[],k={};for(var l in h)if(h.hasOwnProperty(l)){var m=h[l];m.referenceId=l,j.push(m)}i.fit(j.sort(c));for(var n=0;n<j.length;n++){var o=j[n];k[o.referenceId]={w:o.w,h:o.h,x:o.fit.x,y:i.root.h-(o.fit.y+o.h)}}g(new a.Mapping(e,k,i.root.w,i.root.h))})}}}()}(this.Blotter,this._,this.THREE,this.GrowingPacker,this.setImmediate),function(a,b,c){a.MappingMaterialBuilder=function(){function d(){return["varying vec2 _vTexCoord;","void main() {","  _vTexCoord = uv;","  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);","}"].join("\n")}function e(c,d,e){var f,g={publicUniformDeclarations:"",publicUniformDefinitions:""},h=(1/c.data.length/2).toFixed(20),i=c.texture.image.width.toFixed(1);return b.reduce(c.userUniforms,function(b,c,e){var f=a.UniformUtils.fullSwizzleStringForUniformType(c.userUniform.type),g=a.UniformUtils.glslDataTypeForUniformType(c.userUniform.type),j="(("+c.position.toFixed(1)+" + ((textIndex - ((1.0 / "+d.toFixed(1)+") / 2.0)) * "+d.toFixed(1)+")) / "+i+") + "+h;return b.publicUniformDeclarations+=g+" "+e+";\n",b.publicUniformDefinitions+="   "+e+" = texture2D(_userUniformsTexture, vec2("+j+", 0.5))."+f+";\n",b},g),f=[a.Assets.Shaders.Blending,a.Assets.Shaders.TextTexture,"uniform sampler2D _uSampler;","uniform vec2 _uCanvasResolution;","uniform sampler2D _uTextIndicesTexture;","uniform sampler2D _uTextBoundsTexture;","varying vec2 _vTexCoord;","vec4 _textBounds;","uniform sampler2D _userUniformsTexture;",g.publicUniformDeclarations,"// Helper function used by user programs to retrieve texel color information within the bounds of","// any given text. This is to be used instead of `texture2D` in the fragment sources for all Blotter materials.","vec4 textTexture(vec2 coord) {","   vec2 adjustedFragCoord = _textBounds.xy + vec2((_textBounds.z * coord.x), (_textBounds.w * coord.y));","   vec2 uv = adjustedFragCoord.xy / _uCanvasResolution;","   //  If adjustedFragCoord falls outside the bounds of the current texel's text, return `vec4(0.0)`.","   if (adjustedFragCoord.x < _textBounds.x ||","       adjustedFragCoord.x > _textBounds.x + _textBounds.z ||","       adjustedFragCoord.y < _textBounds.y ||","       adjustedFragCoord.y > _textBounds.y + _textBounds.w) {","     return vec4(0.0);","   }","   return texture2D(_uSampler, uv);","}","void mainImage(out vec4 mainImage, in vec2 fragCoord);",e,"void main(void) {","   vec4 textIndexData = texture2D(_uTextIndicesTexture, _vTexCoord);","   float textIndex = textIndexData.r;","   float textAlpha = textIndexData.a;","   _textBounds = texture2D(_uTextBoundsTexture, vec2(textIndex, 0.5));",g.publicUniformDefinitions,"   uResolution = _textBounds.zw;","   vec2 fragCoord = gl_FragCoord.xy - _textBounds.xy;","   vec4 outColor;","   mainImage(outColor, fragCoord);","   outColor.a = outColor.a * textAlpha;","   gl_FragColor = outColor;","}"],f.join("\n")}function f(b,c){a.TextTextureBuilder.build(b,function(a){c(a)})}function g(c,d){var e,f,g,h=[];e=function(){return function(b){a.IndicesDataTextureBuilder.build(c,function(a){h.push({uniformName:"_uTextIndicesTexture",texture:a}),b()})}},f=function(){return function(b){a.BoundsDataTextureBuilder.build(c,function(a){h.push({uniformName:"_uTextBoundsTexture",texture:a}),b()})}},g=[e(),f()],b(g).reduceRight(b.wrap,function(){d(h)})()}function h(d,e,f){a.UniformUtils.ensureHasRequiredDefaultUniforms(d,"Blotter.MappingMaterialBuilder","_buildUserUniformDataTextureObjects"),d=a.UniformUtils.extractValidUniforms(d);var g=Object.keys(d).length*e,h=new Float32Array(4*g),i=new c.DataTexture(h,g,1,c.RGBAFormat,c.FloatType),j={data:h,texture:i,userUniforms:{}};b.reduce(d,function(a,b,c){var f=Object.keys(d).indexOf(c)*e;return a.userUniforms[c]={userUniform:b,position:f},a},j),f(j)}function i(a){return b.reduce(a,function(a,b){return a[b.uniformName]={type:"t",value:b.texture},a},{})}function j(a){return{_userUniformsTexture:{type:"t",value:a.texture}}}function k(a,c,d,e,f){var g={_uSampler:{type:"t",value:d},_uCanvasResolution:{type:"2f",value:[a,c]}};return b.extend(g,i(e)),b.extend(g,j(f)),g}function l(a,b,d){var e=new c.ShaderMaterial({vertexShader:a,fragmentShader:b,uniforms:d});return e.depthTest=!1,e.depthWrite=!1,e.premultipliedAlpha=!1,e}return{build:function(c,i,j){var m,n,o,p,q;m=function(){return function(a){f(c,function(b){o=b,a()})}},n=function(){return function(a){g(c,function(b){p=b,a()})}},buildUserUniformDataTextureObjects=function(){return function(a){h(i.uniforms,c.texts.length,function(b){userUniformDataTextureObjects=b,a()})}},q=[m(),n(),buildUserUniformDataTextureObjects()],b(q).reduceRight(b.wrap,function(){var f=k(c.width,c.height,o,p,userUniformDataTextureObjects),g=(b.omit(f,"_uCanvasResolution","_uSampler","_uTextBoundsTexture","_uTextIndicesTexture"),l(d(),e(userUniformDataTextureObjects,c.texts.length,i.mainImage),f));j(new a.MappingMaterial(c,i,g,userUniformDataTextureObjects))})()}}}()}(this.Blotter,this._,this.THREE);

(function(Blotter) {

  Blotter.FliesMaterial = function() {
    Blotter.Material.apply(this, arguments);
  };

  Blotter.FliesMaterial.prototype = Object.create(Blotter.Material.prototype);

  Blotter._extendWithGettersSetters(Blotter.FliesMaterial.prototype, (function () {

    function _mainImageSrc () {
      var mainImageSrc = [
        Blotter.Assets.Shaders.Random,

        "vec2 random2(vec2 p) {",
        "    return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453);",
        "}",

        "float isParticle(out vec3 particleColor, vec2 fragCoord, float pointRadius, float pointCellWidth, float dodge, vec2 dodgePosition, float dodgeSpread, float speed) {    ",
        "    if (pointCellWidth == 0.0) { return 0.0; };",

        "    vec2 uv = fragCoord.xy / uResolution.xy;",

        "    float pointRadiusOfCell = pointRadius / pointCellWidth;",

        "    vec2 totalCellCount = uResolution.xy / pointCellWidth;",
        "    vec2 cellUv = uv * totalCellCount;",

        "    // Tile the space",
        "    vec2 iUv = floor(cellUv);",
        "    vec2 fUv = fract(cellUv);",

        "    float minDist = 1.0;  // minimun distance",

        "    vec4 baseSample = textTexture(cellUv);",
        "    float maxWeight = 0.0;",
        "    particleColor = baseSample.rgb;",

        "    for (int y= -1; y <= 1; y++) {",
        "        for (int x= -1; x <= 1; x++) {",
        "            // Neighbor place in the grid",
        "            vec2 neighbor = vec2(float(x), float(y));",

        "            // Random position from current + neighbor place in the grid",
        "            vec2 point = random2(iUv + neighbor);",

        "            // Get cell weighting from cell's center alpha",
        "            vec2 cellRowCol = floor(fragCoord / pointCellWidth) + neighbor;",
        "            vec2 cellFragCoord = ((cellRowCol * pointCellWidth) + (pointCellWidth / 2.0));",
        "            vec4 cellSample = textTexture(cellFragCoord / uResolution.xy);",
        "            float cellWeight = cellSample.a;",

        "            if (cellWeight < 1.0) {",
        "               // If the cell is not fully within our text, we should disregard it",
        "               continue;",
        "            }",

        "            maxWeight = max(maxWeight, cellWeight);",
        "            if (cellWeight == maxWeight) {",
        "                particleColor = cellSample.rgb;",
        "            }",

        "            float distanceFromDodge = distance(dodgePosition * uResolution.xy, cellFragCoord) / uResolution.y;",
        "            distanceFromDodge = 1.0 - smoothstep(0.0, dodgeSpread, distanceFromDodge);",

        "            // Apply weighting to noise and dodge if dodge is set to 1.0",
        "            cellWeight = step(cellWeight, random(cellRowCol)) + (distanceFromDodge * dodge);",

        "            // Animate the point",
        "            point = 0.5 + 0.75 * sin((uGlobalTime * speed) + 6.2831 * point);",

        "            // Vector between the pixel and the point",
        "            vec2 diff = neighbor + point - fUv;",

        "            // Distance to the point",
        "            float dist = length(diff);",
        "            dist += cellWeight; // Effectively remove point",

        "            // Keep the closer distance",
        "            minDist = min(minDist, dist);",
        "        }",
        "    }",


        "    float pointEasing = pointRadiusOfCell - (1.0 / pointCellWidth);",

        "    float isParticle = 1.0 - smoothstep(pointEasing, pointRadiusOfCell, minDist);",

        "    return isParticle;",
        "}",

        "void mainImage( out vec4 mainImage, in vec2 fragCoord ) {",
        "    vec2 uv = fragCoord.xy / uResolution.xy;",

        "    // Convert uPointCellWidth to pixels, keeping it between 1 and the total y resolution of the text",
        "    // Note: floor uPointCellWidth here so that we dont have half pixel widths on retina displays",
        "    float pointCellWidth = floor(max(0.0, min(1.0, uPointCellWidth) * uResolution.y));",

        "    // Ensure uPointRadius allow points to exceed the width of their cells",
        "    float pointRadius = uPointRadius * 0.8;",
        "    pointRadius = min(pointRadius * pointCellWidth, pointCellWidth);",

        "    float dodge = ceil(uDodge);",

        "    vec3 outColor = vec3(0.0);",
        "    float point = isParticle(outColor, fragCoord, pointRadius, pointCellWidth, dodge, uDodgePosition, uDodgeSpread, uSpeed);",

        "    mainImage = vec4(outColor, point);",
        "}"
      ].join("\n");

      return mainImageSrc;
    }

    return {

      constructor : Blotter.FliesMaterial,

      init : function () {
        this.mainImage = _mainImageSrc();
        this.uniforms = {
          uPointCellWidth : { type : "1f", value : 0.04 },
          uPointRadius : { type : "1f", value : 0.75 },
          uDodge : { type : "1f", value : 0.0 },
          uDodgePosition : { type : "2f", value : [0.5, 0.5] },
          uDodgeSpread : { type : "1f", value : 0.25 },
          uSpeed : { type : "1f", value : 1.0 }
        };
      }
    };

  })());

})(
  this.Blotter
);


(function(Blotter) {

  Blotter.SlidingDoorMaterial = function() {
    Blotter.Material.apply(this, arguments);
  };

  Blotter.SlidingDoorMaterial.prototype = Object.create(Blotter.Material.prototype);

  Blotter._extendWithGettersSetters(Blotter.SlidingDoorMaterial.prototype, (function () {

    function _mainImageSrc () {
      var mainImageSrc = [
        Blotter.Assets.Shaders.PI,

        "float easingForPositionWithDeadzoneWidth(float position, float deadzoneWidth) {",
        "    // Offset position buy 0.25 so that sin wave begins on a downslope at 0.0",
        "    position += 0.25;",

        "    // Distance of adjusted position from 0.75, min of 0.0 and max of 0.5",
        "    float firstDist = distance(position, 0.75);",

        "    // Divide deadzoneWidth by two, as we will be working it out in either direction from the center position.",
        "    float halfDeadzoneWidth = deadzoneWidth / 2.0;",

        "    // Clamp distance of position from center (0.75) to something between 0.5 and the halfDeadzoneWidth from center.",
        "    float removedDistance = max(firstDist, halfDeadzoneWidth);",

        "    // Find the percentage of removedDistance within the range of halfDeadzoneWidth..0.5",
        "    float distanceOfRange = (removedDistance - halfDeadzoneWidth) / (0.5 - halfDeadzoneWidth);",

        "    // Convert distanceOfRange to a number between 0.0 and 0.5. This means that for any pixel +/- halfDeadzoneWidth from center, the value will be 0.5.",
        "    float offsetDist = (0.5 * (1.0 - (distanceOfRange)));",

        "    if (position < 0.75) {",
        "        position = 0.25 + offsetDist;",
        "    } else {",
        "        position = 1.25 - offsetDist;",
        "    }",


        "    return sin((position) * PI * 2.0) / 2.0;",
        "}",


        "void mainImage( out vec4 mainImage, in vec2 fragCoord )",
        "{",
        "    // Setup ========================================================================",

        "    vec2 uv = fragCoord.xy / uResolution.xy;",

        "    float time = uGlobalTime * uSpeed;",

        "    float directionalAdjustment = uFlipAnimationDirection > 0.0 ? -1.0 : 1.0;",


        "    if (uSpeed > 0.0) {",

        "       // Define Axis-Based Striping ===================================================",

        "       float divisions = uDivisions;",
        "       float effectPosition = fragCoord.y;",
        "       float effectDimension = uResolution.y;",
        "       if (uAnimateHorizontal > 0.0) {",
        "          effectPosition = fragCoord.x;",
        "          effectDimension = uResolution.x;",
        "          divisions = floor((divisions * (uResolution.x / uResolution.y)) + 0.5);",
        "       }",
        "       float stripe = floor(effectPosition / (effectDimension / divisions));",


        "       // Animate =====================================================================",

        "       float timeAdjustedForStripe = time - ((uDivisionWidth / divisions) * stripe) * directionalAdjustment;",
        "       float offsetAtTime = mod(timeAdjustedForStripe, 1.0);",

        "       // Divide sin output by 2 and add to 0.5 so that sin wave move between 0.0 and 1.0 rather than -1.0 and 1.0.",
        "       float easing = 0.5 + easingForPositionWithDeadzoneWidth(offsetAtTime, uDivisionWidth);",

        "       // Mulptiply offsetAtTime by 2.0 and subtract from 1.0 so that position changes over a range of -1.0 to 1.0 rather than 0.0 to 1.0.",
        "       if (uAnimateHorizontal > 0.0) {",
        "          uv.x -= ((1.0 - (offsetAtTime * 2.0)) * easing) * directionalAdjustment;",
        "       } else {",
        "          uv.y -= ((1.0 - (offsetAtTime * 2.0)) * easing) * directionalAdjustment;",
        "       }",
        "    }",

        "    mainImage = textTexture(uv);",

        "}"
      ].join("\n");

      return mainImageSrc;
    }

    return {

      constructor : Blotter.SlidingDoorMaterial,

      init : function () {
        this.mainImage = _mainImageSrc();
        this.uniforms = {
          uDivisions : { type : "1f", value : 5.0 },
          uDivisionWidth : { type : "1f", value : 0.25 },
          uAnimateHorizontal : { type : "1f", value : 0.0 },
          uFlipAnimationDirection : { type : "1f", value : 0.0 },
          uSpeed : { type : "1f", value : 0.2 }
        };
      }
    };

  })());

})(
  this.Blotter
);


(function(Blotter) {

  Blotter.ChannelSplitMaterial = function() {
    Blotter.Material.apply(this, arguments);
  };

  Blotter.ChannelSplitMaterial.prototype = Object.create(Blotter.Material.prototype);

  Blotter._extendWithGettersSetters(Blotter.ChannelSplitMaterial.prototype, (function () {

    function _mainImageSrc () {
      var mainImageSrc = [
        Blotter.Assets.Shaders.PI,
        Blotter.Assets.Shaders.LineMath,
        Blotter.Assets.Shaders.Random,


        "const int MAX_STEPS = 200;",


        "// Fix a floating point number to two decimal places",
        "float toFixedTwo(float f) {",
        "    return float(int(f * 100.0)) / 100.0;",
        "}",


        "vec2 motionBlurOffsets(vec2 fragCoord, float deg, float spread) {",

        "    // Setup",
        "    // -------------------------------",

        "    vec2 centerUv = vec2(0.5);",
        "    vec2 centerCoord = uResolution.xy * centerUv;",

        "    deg = toFixedTwo(deg);",
        "    float slope = normalizedSlope(slopeForDegrees(deg), uResolution.xy);",


        "    // Find offsets",
        "    // -------------------------------",

        "    vec2 k = offsetsForCoordAtDistanceOnSlope(spread, slope);",
        "    if (deg <= 90.0 || deg >= 270.0) {",
        "        k *= -1.0;",
        "    }",


        "    return k;",
        "}",


        "float noiseWithWidthAtUv(float width, vec2 uv) {",
        "    float noiseModifier = 1.0;",
        "    if (uAnimateNoise > 0.0) {",
        "        noiseModifier = sin(uGlobalTime);",
        "    }",

        "    vec2 noiseRowCol = floor((uv * uResolution.xy) / width);",
        "    vec2 noiseFragCoord = ((noiseRowCol * width) + (width / 2.0));",
        "    vec2 noiseUv = noiseFragCoord / uResolution.xy;",

        "    return random(noiseUv * noiseModifier) * 0.125;",
        "}",


        "vec4 motionBlur(vec2 uv, vec2 blurOffset, float maxOffset) {",
        "    float noiseWidth = 3.0;",
        "    float randNoise = noiseWithWidthAtUv(noiseWidth, uv);",

        "    vec4 result = textTexture(uv);",

        "    float maxStepsReached = 0.0;",

        "    // Note: Step by 2 to optimize performance. We conceal lossiness here via applied noise.",
        "    //   If you do want maximum fidelity, change `i += 2` to `i += 1` below.",
        "    for (int i = 1; i <= MAX_STEPS; i += 2) {",
        "        if (abs(float(i)) > maxOffset) { break; }",
        "        maxStepsReached += 1.0;",

        "        // Divide blurOffset by 2.0 so that motion blur starts half way behind itself",
        "        //   preventing blur from shoving samples in any direction",
        "        vec2 offset = (blurOffset / 2.0) - (blurOffset * (float(i) / maxOffset));",
        "        vec4 stepSample = textTexture(uv + (offset / uResolution.xy));",,

        "        result += stepSample;",
        "    }",

        "    if (maxOffset >= 1.0) {",
        "        result /= maxStepsReached;",
        "        //result.a = pow(result.a, 2.0); // Apply logarithmic smoothing to alpha",
        "        result.a -= (randNoise * (1.0 - result.a)); // Apply noise to smoothed alpha",
        "    }",


        "    return result;",
        "}",


        "void mainImage( out vec4 mainImage, in vec2 fragCoord ) {",

        "    // Setup",
        "    // -------------------------------",

        "    vec2 uv = fragCoord.xy / uResolution.xy;",

        "    float offset = min(float(MAX_STEPS), uResolution.y * uOffset);",

        "    float slope = normalizedSlope(slopeForDegrees(uRotation), uResolution);",

        "    // We want the blur to be the full offset amount in each direction",
        "    //   and to adjust with our logarithmic adjustment made later, so multiply by 4",
        "    float adjustedOffset = offset;// * 4.0;",

        "    vec2 blurOffset = motionBlurOffsets(fragCoord, uRotation, adjustedOffset);",


        "    // Set Starting Points",
        "    // -------------------------------",

        "    vec2 rUv = uv;",
        "    vec2 gUv = uv;",
        "    vec2 bUv = uv;",

        "    vec2 k = offsetsForCoordAtDistanceOnSlope(offset, slope) / uResolution;",

        "    if (uRotation <= 90.0 || uRotation >= 270.0) {",
        "        rUv += k;",
        "        bUv -= k;",
        "    }",
        "    else {",
        "        rUv -= k;",
        "        bUv += k;",
        "    }",


        "    // Blur and Split Channels",
        "    // -------------------------------",

        "    vec4 resultR = vec4(0.0);",
        "    vec4 resultG = vec4(0.0);",
        "    vec4 resultB = vec4(0.0);",

        "    if (uApplyBlur > 0.0) {",
        "        resultR = motionBlur(rUv, blurOffset, adjustedOffset);",
        "        resultG = motionBlur(gUv, blurOffset, adjustedOffset);",
        "        resultB = motionBlur(bUv, blurOffset, adjustedOffset);",
        "    } else {",
        "        resultR = textTexture(rUv);",
        "        resultG = textTexture(gUv);",
        "        resultB = textTexture(bUv);",
        "    }",

        "    float a = resultR.a + resultG.a + resultB.a;",

        "    resultR = normalBlend(resultR, uBlendColor);",
        "    resultG = normalBlend(resultG, uBlendColor);",
        "    resultB = normalBlend(resultB, uBlendColor);",



        "    mainImage = vec4(resultR.r, resultG.g, resultB.b, a);",
        "}"
      ].join("\n");

      return mainImageSrc;
    }

    return {

      constructor : Blotter.ChannelSplitMaterial,

      init : function () {
        this.mainImage = _mainImageSrc();
        this.uniforms = {
          uOffset : { type : "1f", value : 0.05 },
          uRotation : { type : "1f", value : 45.0 },
          uApplyBlur : { type : "1f", value : 1.0 },
          uAnimateNoise : { type : "1f", value : 1.0 }
        };
      }
    };

  })());

})(
  this.Blotter
);


/**
 * Swiper 4.4.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 19, 2018
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Swiper = factory());
}(this, (function () { 'use strict';

  /**
   * SSR Window 1.0.1
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2018, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: July 18, 2018
   */
  var doc = (typeof document === 'undefined') ? {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: '',
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {},
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        },
      };
    },
    location: { hash: '' },
  } : document; // eslint-disable-line

  var win = (typeof window === 'undefined') ? {
    document: doc,
    navigator: {
      userAgent: '',
    },
    location: {},
    history: {},
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return '';
        },
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
  } : window; // eslint-disable-line

  /**
   * Dom7 2.1.2
   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
   * http://framework7.io/docs/dom.html
   *
   * Copyright 2018, Vladimir Kharlampidi
   * The iDangero.us
   * http://www.idangero.us/
   *
   * Licensed under MIT
   *
   * Released on: September 13, 2018
   */

  var Dom7 = function Dom7(arr) {
    var self = this;
    // Create array-like object
    for (var i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }
    self.length = arr.length;
    // Return collection with methods
    return this;
  };

  function $(selector, context) {
    var arr = [];
    var i = 0;
    if (selector && !context) {
      if (selector instanceof Dom7) {
        return selector;
      }
    }
    if (selector) {
        // String
      if (typeof selector === 'string') {
        var els;
        var tempParent;
        var html = selector.trim();
        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          var toCreate = 'div';
          if (html.indexOf('<li') === 0) { toCreate = 'ul'; }
          if (html.indexOf('<tr') === 0) { toCreate = 'tbody'; }
          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) { toCreate = 'tr'; }
          if (html.indexOf('<tbody') === 0) { toCreate = 'table'; }
          if (html.indexOf('<option') === 0) { toCreate = 'select'; }
          tempParent = doc.createElement(toCreate);
          tempParent.innerHTML = html;
          for (i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
            // Pure ID selector
            els = [doc.getElementById(selector.trim().split('#')[1])];
          } else {
            // Other selectors
            els = (context || doc).querySelectorAll(selector.trim());
          }
          for (i = 0; i < els.length; i += 1) {
            if (els[i]) { arr.push(els[i]); }
          }
        }
      } else if (selector.nodeType || selector === win || selector === doc) {
        // Node/element
        arr.push(selector);
      } else if (selector.length > 0 && selector[0].nodeType) {
        // Array of elements or instance of Dom
        for (i = 0; i < selector.length; i += 1) {
          arr.push(selector[i]);
        }
      }
    }
    return new Dom7(arr);
  }

  $.fn = Dom7.prototype;
  $.Class = Dom7;
  $.Dom7 = Dom7;

  function unique(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) { uniqueArray.push(arr[i]); }
    }
    return uniqueArray;
  }

  // Classes and attributes
  function addClass(className) {
    if (typeof className === 'undefined') {
      return this;
    }
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.add(classes[i]); }
      }
    }
    return this;
  }
  function removeClass(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.remove(classes[i]); }
      }
    }
    return this;
  }
  function hasClass(className) {
    if (!this[0]) { return false; }
    return this[0].classList.contains(className);
  }
  function toggleClass(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.toggle(classes[i]); }
      }
    }
    return this;
  }
  function attr(attrs, value) {
    var arguments$1 = arguments;

    if (arguments.length === 1 && typeof attrs === 'string') {
      // Get attr
      if (this[0]) { return this[0].getAttribute(attrs); }
      return undefined;
    }

    // Set attrs
    for (var i = 0; i < this.length; i += 1) {
      if (arguments$1.length === 2) {
        // String
        this[i].setAttribute(attrs, value);
      } else {
        // Object
        // eslint-disable-next-line
        for (var attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }
    return this;
  }
  // eslint-disable-next-line
  function removeAttr(attr) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }
    return this;
  }
  function data(key, value) {
    var el;
    if (typeof value === 'undefined') {
      el = this[0];
      // Get value
      if (el) {
        if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
          return el.dom7ElementDataStorage[key];
        }

        var dataKey = el.getAttribute(("data-" + key));
        if (dataKey) {
          return dataKey;
        }
        return undefined;
      }
      return undefined;
    }

    // Set value
    for (var i = 0; i < this.length; i += 1) {
      el = this[i];
      if (!el.dom7ElementDataStorage) { el.dom7ElementDataStorage = {}; }
      el.dom7ElementDataStorage[key] = value;
    }
    return this;
  }
  // Transforms
  // eslint-disable-next-line
  function transform(transform) {
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransform = transform;
      elStyle.transform = transform;
    }
    return this;
  }
  function transition(duration) {
    if (typeof duration !== 'string') {
      duration = duration + "ms"; // eslint-disable-line
    }
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransitionDuration = duration;
      elStyle.transitionDuration = duration;
    }
    return this;
  }
  // Events
  function on() {
    var assign;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === 'function') {
      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) { capture = false; }

    function handleLiveEvent(e) {
      var target = e.target;
      if (!target) { return; }
      var eventData = e.target.dom7EventData || [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      if ($(target).is(targetSelector)) { listener.apply(target, eventData); }
      else {
        var parents = $(target).parents(); // eslint-disable-line
        for (var k = 0; k < parents.length; k += 1) {
          if ($(parents[k]).is(targetSelector)) { listener.apply(parents[k], eventData); }
        }
      }
    }
    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      listener.apply(this, eventData);
    }
    var events = eventType.split(' ');
    var j;
    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];
      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];
          if (!el.dom7Listeners) { el.dom7Listeners = {}; }
          if (!el.dom7Listeners[event]) { el.dom7Listeners[event] = []; }
          el.dom7Listeners[event].push({
            listener: listener,
            proxyListener: handleEvent,
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        // Live events
        for (j = 0; j < events.length; j += 1) {
          var event$1 = events[j];
          if (!el.dom7LiveListeners) { el.dom7LiveListeners = {}; }
          if (!el.dom7LiveListeners[event$1]) { el.dom7LiveListeners[event$1] = []; }
          el.dom7LiveListeners[event$1].push({
            listener: listener,
            proxyListener: handleLiveEvent,
          });
          el.addEventListener(event$1, handleLiveEvent, capture);
        }
      }
    }
    return this;
  }
  function off() {
    var assign;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === 'function') {
      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) { capture = false; }

    var events = eventType.split(' ');
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var handlers = (void 0);
        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }
        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];
            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }
    return this;
  }
  function trigger() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var events = args[0].split(' ');
    var eventData = args[1];
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var evt = (void 0);
        try {
          evt = new win.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true,
          });
        } catch (e) {
          evt = doc.createEvent('Event');
          evt.initEvent(event, true, true);
          evt.detail = eventData;
        }
        // eslint-disable-next-line
        el.dom7EventData = args.filter(function (data, dataIndex) { return dataIndex > 0; });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
    return this;
  }
  function transitionEnd(callback) {
    var events = ['webkitTransitionEnd', 'transitionend'];
    var dom = this;
    var i;
    function fireCallBack(e) {
      /* jshint validthis:true */
      if (e.target !== this) { return; }
      callback.call(this, e);
      for (i = 0; i < events.length; i += 1) {
        dom.off(events[i], fireCallBack);
      }
    }
    if (callback) {
      for (i = 0; i < events.length; i += 1) {
        dom.on(events[i], fireCallBack);
      }
    }
    return this;
  }
  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function offset() {
    if (this.length > 0) {
      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = doc.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;
      var scrollTop = el === win ? win.scrollY : el.scrollTop;
      var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
      return {
        top: (box.top + scrollTop) - clientTop,
        left: (box.left + scrollLeft) - clientLeft,
      };
    }

    return null;
  }
  function styles() {
    if (this[0]) { return win.getComputedStyle(this[0], null); }
    return {};
  }
  function css(props, value) {
    var i;
    if (arguments.length === 1) {
      if (typeof props === 'string') {
        if (this[0]) { return win.getComputedStyle(this[0], null).getPropertyValue(props); }
      } else {
        for (i = 0; i < this.length; i += 1) {
          // eslint-disable-next-line
          for (var prop in props) {
            this[i].style[prop] = props[prop];
          }
        }
        return this;
      }
    }
    if (arguments.length === 2 && typeof props === 'string') {
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }
      return this;
    }
    return this;
  }
  // Iterate over the collection passing elements to `callback`
  function each(callback) {
    // Don't bother continuing without a callback
    if (!callback) { return this; }
    // Iterate over the current collection
    for (var i = 0; i < this.length; i += 1) {
      // If the callback returns false
      if (callback.call(this[i], i, this[i]) === false) {
        // End the loop early
        return this;
      }
    }
    // Return `this` to allow chained DOM operations
    return this;
  }
  // eslint-disable-next-line
  function html(html) {
    if (typeof html === 'undefined') {
      return this[0] ? this[0].innerHTML : undefined;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }
    return this;
  }
  // eslint-disable-next-line
  function text(text) {
    if (typeof text === 'undefined') {
      if (this[0]) {
        return this[0].textContent.trim();
      }
      return null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }
    return this;
  }
  function is(selector) {
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === 'undefined') { return false; }
    if (typeof selector === 'string') {
      if (el.matches) { return el.matches(selector); }
      else if (el.webkitMatchesSelector) { return el.webkitMatchesSelector(selector); }
      else if (el.msMatchesSelector) { return el.msMatchesSelector(selector); }

      compareWith = $(selector);
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) { return true; }
      }
      return false;
    } else if (selector === doc) { return el === doc; }
    else if (selector === win) { return el === win; }

    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) { return true; }
      }
      return false;
    }
    return false;
  }
  function index() {
    var child = this[0];
    var i;
    if (child) {
      i = 0;
      // eslint-disable-next-line
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) { i += 1; }
      }
      return i;
    }
    return undefined;
  }
  // eslint-disable-next-line
  function eq(index) {
    if (typeof index === 'undefined') { return this; }
    var length = this.length;
    var returnIndex;
    if (index > length - 1) {
      return new Dom7([]);
    }
    if (index < 0) {
      returnIndex = length + index;
      if (returnIndex < 0) { return new Dom7([]); }
      return new Dom7([this[returnIndex]]);
    }
    return new Dom7([this[index]]);
  }
  function append() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var newChild;

    for (var k = 0; k < args.length; k += 1) {
      newChild = args[k];
      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = doc.createElement('div');
          tempDiv.innerHTML = newChild;
          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }

    return this;
  }
  function prepend(newChild) {
    var i;
    var j;
    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = doc.createElement('div');
        tempDiv.innerHTML = newChild;
        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }
    return this;
  }
  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return new Dom7([this[0].nextElementSibling]);
        }
        return new Dom7([]);
      }

      if (this[0].nextElementSibling) { return new Dom7([this[0].nextElementSibling]); }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el) { return new Dom7([]); }
    while (el.nextElementSibling) {
      var next = el.nextElementSibling; // eslint-disable-line
      if (selector) {
        if ($(next).is(selector)) { nextEls.push(next); }
      } else { nextEls.push(next); }
      el = next;
    }
    return new Dom7(nextEls);
  }
  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];
      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return new Dom7([el.previousElementSibling]);
        }
        return new Dom7([]);
      }

      if (el.previousElementSibling) { return new Dom7([el.previousElementSibling]); }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el) { return new Dom7([]); }
    while (el.previousElementSibling) {
      var prev = el.previousElementSibling; // eslint-disable-line
      if (selector) {
        if ($(prev).is(selector)) { prevEls.push(prev); }
      } else { prevEls.push(prev); }
      el = prev;
    }
    return new Dom7(prevEls);
  }
  function parent(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector)) { parents.push(this[i].parentNode); }
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }
    return $(unique(parents));
  }
  function parents(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var parent = this[i].parentNode; // eslint-disable-line
      while (parent) {
        if (selector) {
          if ($(parent).is(selector)) { parents.push(parent); }
        } else {
          parents.push(parent);
        }
        parent = parent.parentNode;
      }
    }
    return $(unique(parents));
  }
  function closest(selector) {
    var closest = this; // eslint-disable-line
    if (typeof selector === 'undefined') {
      return new Dom7([]);
    }
    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }
    return closest;
  }
  function find(selector) {
    var foundElements = [];
    for (var i = 0; i < this.length; i += 1) {
      var found = this[i].querySelectorAll(selector);
      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }
    return new Dom7(foundElements);
  }
  function children(selector) {
    var children = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this[i].childNodes;

      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector) {
          if (childNodes[j].nodeType === 1) { children.push(childNodes[j]); }
        } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
          children.push(childNodes[j]);
        }
      }
    }
    return new Dom7(unique(children));
  }
  function remove() {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) { this[i].parentNode.removeChild(this[i]); }
    }
    return this;
  }
  function add() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var dom = this;
    var i;
    var j;
    for (i = 0; i < args.length; i += 1) {
      var toAdd = $(args[i]);
      for (j = 0; j < toAdd.length; j += 1) {
        dom[dom.length] = toAdd[j];
        dom.length += 1;
      }
    }
    return dom;
  }

  var Methods = {
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    data: data,
    transform: transform,
    transition: transition,
    on: on,
    off: off,
    trigger: trigger,
    transitionEnd: transitionEnd,
    outerWidth: outerWidth,
    outerHeight: outerHeight,
    offset: offset,
    css: css,
    each: each,
    html: html,
    text: text,
    is: is,
    index: index,
    eq: eq,
    append: append,
    prepend: prepend,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    remove: remove,
    add: add,
    styles: styles,
  };

  Object.keys(Methods).forEach(function (methodName) {
    $.fn[methodName] = Methods[methodName];
  });

  var Utils = {
    deleteProps: function deleteProps(obj) {
      var object = obj;
      Object.keys(object).forEach(function (key) {
        try {
          object[key] = null;
        } catch (e) {
          // no getter for object
        }
        try {
          delete object[key];
        } catch (e) {
          // something got wrong
        }
      });
    },
    nextTick: function nextTick(callback, delay) {
      if ( delay === void 0 ) delay = 0;

      return setTimeout(callback, delay);
    },
    now: function now() {
      return Date.now();
    },
    getTranslate: function getTranslate(el, axis) {
      if ( axis === void 0 ) axis = 'x';

      var matrix;
      var curTransform;
      var transformMatrix;

      var curStyle = win.getComputedStyle(el, null);

      if (win.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(function (a) { return a.replace(',', '.'); }).join(', ');
        }
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }

      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m41; }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) { curTransform = parseFloat(matrix[12]); }
        // Normal Browsers
        else { curTransform = parseFloat(matrix[4]); }
      }
      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m42; }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) { curTransform = parseFloat(matrix[13]); }
        // Normal Browsers
        else { curTransform = parseFloat(matrix[5]); }
      }
      return curTransform || 0;
    },
    parseUrlQuery: function parseUrlQuery(url) {
      var query = {};
      var urlToParse = url || win.location.href;
      var i;
      var params;
      var param;
      var length;
      if (typeof urlToParse === 'string' && urlToParse.length) {
        urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
        params = urlToParse.split('&').filter(function (paramsPart) { return paramsPart !== ''; });
        length = params.length;

        for (i = 0; i < length; i += 1) {
          param = params[i].replace(/#\S+/g, '').split('=');
          query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
        }
      }
      return query;
    },
    isObject: function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
    },
    extend: function extend() {
      var args = [], len$1 = arguments.length;
      while ( len$1-- ) args[ len$1 ] = arguments[ len$1 ];

      var to = Object(args[0]);
      for (var i = 1; i < args.length; i += 1) {
        var nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null) {
          var keysArray = Object.keys(Object(nextSource));
          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
              if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                to[nextKey] = {};
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }
      return to;
    },
  };

  var Support = (function Support() {
    var testDiv = doc.createElement('div');
    return {
      touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() {
        return !!((win.navigator.maxTouchPoints > 0) || ('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch));
      }()),

      pointerEvents: !!(win.navigator.pointerEnabled || win.PointerEvent || ('maxTouchPoints' in win.navigator)),
      prefixedPointerEvents: !!win.navigator.msPointerEnabled,

      transition: (function checkTransition() {
        var style = testDiv.style;
        return ('transition' in style || 'webkitTransition' in style || 'MozTransition' in style);
      }()),
      transforms3d: (win.Modernizr && win.Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
        var style = testDiv.style;
        return ('webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style);
      }()),

      flexbox: (function checkFlexbox() {
        var style = testDiv.style;
        var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
        for (var i = 0; i < styles.length; i += 1) {
          if (styles[i] in style) { return true; }
        }
        return false;
      }()),

      observer: (function checkObserver() {
        return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
      }()),

      passiveListener: (function checkPassiveListener() {
        var supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, 'passive', {
            // eslint-disable-next-line
            get: function get() {
              supportsPassive = true;
            },
          });
          win.addEventListener('testPassiveListener', null, opts);
        } catch (e) {
          // No support
        }
        return supportsPassive;
      }()),

      gestures: (function checkGestures() {
        return 'ongesturestart' in win;
      }()),
    };
  }());

  var SwiperClass = function SwiperClass(params) {
    if ( params === void 0 ) params = {};

    var self = this;
    self.params = params;

    // Events
    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(function (eventName) {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  };

  var staticAccessors = { components: { configurable: true } };

  SwiperClass.prototype.on = function on (events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') { return self; }
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) { self.eventsListeners[event] = []; }
      self.eventsListeners[event][method](handler);
    });
    return self;
  };

  SwiperClass.prototype.once = function once (events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') { return self; }
    function onceHandler() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

      handler.apply(self, args);
      self.off(events, onceHandler);
    }
    return self.on(events, onceHandler, priority);
  };

  SwiperClass.prototype.off = function off (events, handler) {
    var self = this;
    if (!self.eventsListeners) { return self; }
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.emit = function emit () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

    var self = this;
    if (!self.eventsListeners) { return self; }
    var events;
    var data;
    var context;
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsListeners && self.eventsListeners[event]) {
        var handlers = [];
        self.eventsListeners[event].forEach(function (eventHandler) {
          handlers.push(eventHandler);
        });
        handlers.forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.useModulesParams = function useModulesParams (instanceParams) {
    var instance = this;
    if (!instance.modules) { return; }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      // Extend params
      if (module.params) {
        Utils.extend(instanceParams, module.params);
      }
    });
  };

  SwiperClass.prototype.useModules = function useModules (modulesParams) {
      if ( modulesParams === void 0 ) modulesParams = {};

    var instance = this;
    if (!instance.modules) { return; }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {};
      // Extend instance methods and props
      if (module.instance) {
        Object.keys(module.instance).forEach(function (modulePropName) {
          var moduleProp = module.instance[modulePropName];
          if (typeof moduleProp === 'function') {
            instance[modulePropName] = moduleProp.bind(instance);
          } else {
            instance[modulePropName] = moduleProp;
          }
        });
      }
      // Add event listeners
      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      }

      // Module create callback
      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  };

  staticAccessors.components.set = function (components) {
    var Class = this;
    if (!Class.use) { return; }
    Class.use(components);
  };

  SwiperClass.installModule = function installModule (module) {
      var params = [], len = arguments.length - 1;
      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

    var Class = this;
    if (!Class.prototype.modules) { Class.prototype.modules = {}; }
    var name = module.name || (((Object.keys(Class.prototype.modules).length) + "_" + (Utils.now())));
    Class.prototype.modules[name] = module;
    // Prototype
    if (module.proto) {
      Object.keys(module.proto).forEach(function (key) {
        Class.prototype[key] = module.proto[key];
      });
    }
    // Class
    if (module.static) {
      Object.keys(module.static).forEach(function (key) {
        Class[key] = module.static[key];
      });
    }
    // Callback
    if (module.install) {
      module.install.apply(Class, params);
    }
    return Class;
  };

  SwiperClass.use = function use (module) {
      var params = [], len = arguments.length - 1;
      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

    var Class = this;
    if (Array.isArray(module)) {
      module.forEach(function (m) { return Class.installModule(m); });
      return Class;
    }
    return Class.installModule.apply(Class, [ module ].concat( params ));
  };

  Object.defineProperties( SwiperClass, staticAccessors );

  function updateSize () {
    var swiper = this;
    var width;
    var height;
    var $el = swiper.$el;
    if (typeof swiper.params.width !== 'undefined') {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }
    if (typeof swiper.params.height !== 'undefined') {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }
    if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
      return;
    }

    // Subtract paddings
    width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
    height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

    Utils.extend(swiper, {
      width: width,
      height: height,
      size: swiper.isHorizontal() ? width : height,
    });
  }

  function updateSlides () {
    var swiper = this;
    var params = swiper.params;

    var $wrapperEl = swiper.$wrapperEl;
    var swiperSize = swiper.size;
    var rtl = swiper.rtlTranslate;
    var wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    var slides = $wrapperEl.children(("." + (swiper.params.slideClass)));
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];

    var offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }

    var offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }

    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.snapGrid.length;

    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;
    if (typeof swiperSize === 'undefined') {
      return;
    }
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
    }

    swiper.virtualSize = -spaceBetween;

    // reset margins
    if (rtl) { slides.css({ marginLeft: '', marginTop: '' }); }
    else { slides.css({ marginRight: '', marginBottom: '' }); }

    var slidesNumberEvenToRows;
    if (params.slidesPerColumn > 1) {
      if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
      }
      if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
      }
    }

    // Calc slides
    var slideSize;
    var slidesPerColumn = params.slidesPerColumn;
    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      var slide = slides.eq(i);
      if (params.slidesPerColumn > 1) {
        // Set slides order
        var newSlideOrderIndex = (void 0);
        var column = (void 0);
        var row = (void 0);
        if (params.slidesPerColumnFill === 'column') {
          column = Math.floor(i / slidesPerColumn);
          row = i - (column * slidesPerColumn);
          if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
            row += 1;
            if (row >= slidesPerColumn) {
              row = 0;
              column += 1;
            }
          }
          newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
          slide
            .css({
              '-webkit-box-ordinal-group': newSlideOrderIndex,
              '-moz-box-ordinal-group': newSlideOrderIndex,
              '-ms-flex-order': newSlideOrderIndex,
              '-webkit-order': newSlideOrderIndex,
              order: newSlideOrderIndex,
            });
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - (row * slidesPerRow);
        }
        slide
          .css(
            ("margin-" + (swiper.isHorizontal() ? 'top' : 'left')),
            (row !== 0 && params.spaceBetween) && (((params.spaceBetween) + "px"))
          )
          .attr('data-swiper-column', column)
          .attr('data-swiper-row', row);
      }
      if (slide.css('display') === 'none') { continue; } // eslint-disable-line

      if (params.slidesPerView === 'auto') {
        var slideStyles = win.getComputedStyle(slide[0], null);
        var currentTransform = slide[0].style.transform;
        var currentWebKitTransform = slide[0].style.webkitTransform;
        if (currentTransform) {
          slide[0].style.transform = 'none';
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = 'none';
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal()
            ? slide.outerWidth(true)
            : slide.outerHeight(true);
        } else {
          // eslint-disable-next-line
          if (swiper.isHorizontal()) {
            var width = parseFloat(slideStyles.getPropertyValue('width'));
            var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
            var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
            var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
            var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
            var boxSizing = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing && boxSizing === 'border-box') {
              slideSize = width + marginLeft + marginRight;
            } else {
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
            }
          } else {
            var height = parseFloat(slideStyles.getPropertyValue('height'));
            var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
            var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
            var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
            var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
            var boxSizing$1 = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing$1 && boxSizing$1 === 'border-box') {
              slideSize = height + marginTop + marginBottom;
            } else {
              slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
            }
          }
        }
        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) { slideSize = Math.floor(slideSize); }
      } else {
        slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
        if (params.roundLengths) { slideSize = Math.floor(slideSize); }

        if (slides[i]) {
          if (swiper.isHorizontal()) {
            slides[i].style.width = slideSize + "px";
          } else {
            slides[i].style.height = slideSize + "px";
          }
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);


      if (params.centeredSlides) {
        slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
        if (i === 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
        if (Math.abs(slidePosition) < 1 / 1000) { slidePosition = 0; }
        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }

      swiper.virtualSize += slideSize + spaceBetween;

      prevSlideSize = slideSize;

      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    var newSlidesGrid;

    if (
      rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
      $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") });
    }
    if (!Support.flexbox || params.setWrapperSize) {
      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
    }

    if (params.slidesPerColumn > 1) {
      swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      if (params.centeredSlides) {
        newSlidesGrid = [];
        for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
          var slidesGridItem = snapGrid[i$1];
          if (params.roundLengths) { slidesGridItem = Math.floor(slidesGridItem); }
          if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) { newSlidesGrid.push(slidesGridItem); }
        }
        snapGrid = newSlidesGrid;
      }
    }

    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
      newSlidesGrid = [];
      for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
        var slidesGridItem$1 = snapGrid[i$2];
        if (params.roundLengths) { slidesGridItem$1 = Math.floor(slidesGridItem$1); }
        if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem$1);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (snapGrid.length === 0) { snapGrid = [0]; }

    if (params.spaceBetween !== 0) {
      if (swiper.isHorizontal()) {
        if (rtl) { slides.css({ marginLeft: (spaceBetween + "px") }); }
        else { slides.css({ marginRight: (spaceBetween + "px") }); }
      } else { slides.css({ marginBottom: (spaceBetween + "px") }); }
    }

    if (params.centerInsufficientSlides) {
      var allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      if (allSlidesSize < swiperSize) {
        var allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach(function (snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function (snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }

    Utils.extend(swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid,
    });

    if (slidesLength !== previousSlidesLength) {
      swiper.emit('slidesLengthChange');
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) { swiper.checkOverflow(); }
      swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit('slidesGridLengthChange');
    }

    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesOffset();
    }
  }

  function updateAutoHeight (speed) {
    var swiper = this;
    var activeSlides = [];
    var newHeight = 0;
    var i;
    if (typeof speed === 'number') {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length) { break; }
        activeSlides.push(swiper.slides.eq(index)[0]);
      }
    } else {
      activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
    }

    // Find new height from highest slide in view
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }

    // Update Height
    if (newHeight) { swiper.$wrapperEl.css('height', (newHeight + "px")); }
  }

  function updateSlidesOffset () {
    var swiper = this;
    var slides = swiper.slides;
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
  }

  function updateSlidesProgress (translate) {
    if ( translate === void 0 ) translate = (this && this.translate) || 0;

    var swiper = this;
    var params = swiper.params;

    var slides = swiper.slides;
    var rtl = swiper.rtlTranslate;

    if (slides.length === 0) { return; }
    if (typeof slides[0].swiperSlideOffset === 'undefined') { swiper.updateSlidesOffset(); }

    var offsetCenter = -translate;
    if (rtl) { offsetCenter = translate; }

    // Visible Slides
    slides.removeClass(params.slideVisibleClass);

    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];

    for (var i = 0; i < slides.length; i += 1) {
      var slide = slides[i];
      var slideProgress = (
        (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
      ) / (slide.swiperSlideSize + params.spaceBetween);
      if (params.watchSlidesVisibility) {
        var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
        var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        var isVisible = (slideBefore >= 0 && slideBefore < swiper.size)
                  || (slideAfter > 0 && slideAfter <= swiper.size)
                  || (slideBefore <= 0 && slideAfter >= swiper.size);
        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
    }
    swiper.visibleSlides = $(swiper.visibleSlides);
  }

  function updateProgress (translate) {
    if ( translate === void 0 ) translate = (this && this.translate) || 0;

    var swiper = this;
    var params = swiper.params;

    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress;
    var isBeginning = swiper.isBeginning;
    var isEnd = swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / (translatesDiff);
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }
    Utils.extend(swiper, {
      progress: progress,
      isBeginning: isBeginning,
      isEnd: isEnd,
    });

    if (params.watchSlidesProgress || params.watchSlidesVisibility) { swiper.updateSlidesProgress(translate); }

    if (isBeginning && !wasBeginning) {
      swiper.emit('reachBeginning toEdge');
    }
    if (isEnd && !wasEnd) {
      swiper.emit('reachEnd toEdge');
    }
    if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
      swiper.emit('fromEdge');
    }

    swiper.emit('progress', progress);
  }

  function updateSlidesClasses () {
    var swiper = this;

    var slides = swiper.slides;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;
    var realIndex = swiper.realIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;

    slides.removeClass(((params.slideActiveClass) + " " + (params.slideNextClass) + " " + (params.slidePrevClass) + " " + (params.slideDuplicateActiveClass) + " " + (params.slideDuplicateNextClass) + " " + (params.slideDuplicatePrevClass)));

    var activeSlide;
    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + activeIndex + "\"]"));
    } else {
      activeSlide = slides.eq(activeIndex);
    }

    // Active classes
    activeSlide.addClass(params.slideActiveClass);

    if (params.loop) {
      // Duplicate to all looped slides
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + realIndex + "\"]"))
          .addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]"))
          .addClass(params.slideDuplicateActiveClass);
      }
    }
    // Next Slide
    var nextSlide = activeSlide.nextAll(("." + (params.slideClass))).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    }
    // Prev Slide
    var prevSlide = activeSlide.prevAll(("." + (params.slideClass))).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
      // Duplicate to all looped slides
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicateNextClass);
      }
      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicatePrevClass);
      }
    }
  }

  function updateActiveIndex (newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var params = swiper.params;
    var previousIndex = swiper.activeIndex;
    var previousRealIndex = swiper.realIndex;
    var previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;
    if (typeof activeIndex === 'undefined') {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      }
      // Normalize slideIndex
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined') { activeIndex = 0; }
      }
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit('snapIndexChange');
      }
      return;
    }

    // Get real index
    var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

    Utils.extend(swiper, {
      snapIndex: snapIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex,
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }

  function updateClickedSlide (e) {
    var swiper = this;
    var params = swiper.params;
    var slide = $(e.target).closest(("." + (params.slideClass)))[0];
    var slideFound = false;
    if (slide) {
      for (var i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) { slideFound = true; }
      }
    }

    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
      } else {
        swiper.clickedIndex = $(slide).index();
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }

  var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide,
  };

  function getTranslate (axis) {
    if ( axis === void 0 ) axis = this.isHorizontal() ? 'x' : 'y';

    var swiper = this;

    var params = swiper.params;
    var rtl = swiper.rtlTranslate;
    var translate = swiper.translate;
    var $wrapperEl = swiper.$wrapperEl;

    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }

    var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
    if (rtl) { currentTranslate = -currentTranslate; }

    return currentTranslate || 0;
  }

  function setTranslate (translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;

    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }

    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }

    if (!params.virtualTranslate) {
      if (Support.transforms3d) { $wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)")); }
      else { $wrapperEl.transform(("translate(" + x + "px, " + y + "px)")); }
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;

    // Check if we need to update progress
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }

    swiper.emit('setTranslate', swiper.translate, byController);
  }

  function minTranslate () {
    return (-this.snapGrid[0]);
  }

  function maxTranslate () {
    return (-this.snapGrid[this.snapGrid.length - 1]);
  }

  var translate = {
    getTranslate: getTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
  };

  function setTransition (duration, byController) {
    var swiper = this;

    swiper.$wrapperEl.transition(duration);

    swiper.emit('setTransition', duration, byController);
  }

  function transitionStart (runCallbacks, direction) {
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var params = swiper.params;
    var previousIndex = swiper.previousIndex;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) { dir = 'next'; }
      else if (activeIndex < previousIndex) { dir = 'prev'; }
      else { dir = 'reset'; }
    }

    swiper.emit('transitionStart');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionStart');
        return;
      }
      swiper.emit('slideChangeTransitionStart');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionStart');
      } else {
        swiper.emit('slidePrevTransitionStart');
      }
    }
  }

  function transitionEnd$1 (runCallbacks, direction) {
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var previousIndex = swiper.previousIndex;
    swiper.animating = false;
    swiper.setTransition(0);

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) { dir = 'next'; }
      else if (activeIndex < previousIndex) { dir = 'prev'; }
      else { dir = 'reset'; }
    }

    swiper.emit('transitionEnd');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionEnd');
        return;
      }
      swiper.emit('slideChangeTransitionEnd');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionEnd');
      } else {
        swiper.emit('slidePrevTransitionEnd');
      }
    }
  }

  var transition$1 = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd$1,
  };

  function slideTo (index, speed, runCallbacks, internal) {
    if ( index === void 0 ) index = 0;
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var slideIndex = index;
    if (slideIndex < 0) { slideIndex = 0; }

    var params = swiper.params;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var previousIndex = swiper.previousIndex;
    var activeIndex = swiper.activeIndex;
    var rtl = swiper.rtlTranslate;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }

    var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }

    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
      swiper.emit('beforeSlideChangeStart');
    }

    var translate = -snapGrid[snapIndex];

    // Update progress
    swiper.updateProgress(translate);

    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
          slideIndex = i;
        }
      }
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) { return false; }
      }
    }

    var direction;
    if (slideIndex > activeIndex) { direction = 'next'; }
    else if (slideIndex < activeIndex) { direction = 'prev'; }
    else { direction = 'reset'; }


    // Update Index
    if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
      swiper.updateActiveIndex(slideIndex);
      // Update Height
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== 'slide') {
        swiper.setTranslate(translate);
      }
      if (direction !== 'reset') {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }

    if (speed === 0 || !Support.transition) {
      swiper.setTransition(0);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) { return; }
            if (e.target !== this) { return; }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
      }
    }

    return true;
  }

  function slideToLoop (index, speed, runCallbacks, internal) {
    if ( index === void 0 ) index = 0;
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var newIndex = index;
    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }

    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideNext (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    if (params.loop) {
      if (animating) { return false; }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slidePrev (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var rtlTranslate = swiper.rtlTranslate;

    if (params.loop) {
      if (animating) { return false; }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    var translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) { return -Math.floor(Math.abs(val)); }
      return Math.floor(val);
    }
    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function (val) { return normalize(val); });
    var normalizedSlidesGrid = slidesGrid.map(function (val) { return normalize(val); });

    var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    var prevIndex;
    if (typeof prevSnap !== 'undefined') {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) { prevIndex = swiper.activeIndex - 1; }
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideReset (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideToClosest (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var index = swiper.activeIndex;
    var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);

    if (snapIndex < swiper.snapGrid.length - 1) {
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

      var currentSnap = swiper.snapGrid[snapIndex];
      var nextSnap = swiper.snapGrid[snapIndex + 1];

      if ((translate - currentSnap) > (nextSnap - currentSnap) / 2) {
        index = swiper.params.slidesPerGroup;
      }
    }

    return swiper.slideTo(index, speed, runCallbacks, internal);
  }

  function slideToClickedSlide () {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;

    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;
    if (params.loop) {
      if (swiper.animating) { return; }
      realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      if (params.centeredSlides) {
        if (
          (slideToIndex < swiper.loopedSlides - (slidesPerView / 2))
          || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
        ) {
          swiper.loopFix();
          slideToIndex = $wrapperEl
            .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
            .eq(0)
            .index();

          Utils.nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
          .eq(0)
          .index();

        Utils.nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide,
  };

  function loopCreate () {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    // Remove duplicated slides
    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();

    var slides = $wrapperEl.children(("." + (params.slideClass)));

    if (params.loopFillGroupWithBlank) {
      var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
      if (blankSlidesNum !== params.slidesPerGroup) {
        for (var i = 0; i < blankSlidesNum; i += 1) {
          var blankNode = $(doc.createElement('div')).addClass(((params.slideClass) + " " + (params.slideBlankClass)));
          $wrapperEl.append(blankNode);
        }
        slides = $wrapperEl.children(("." + (params.slideClass)));
      }
    }

    if (params.slidesPerView === 'auto' && !params.loopedSlides) { params.loopedSlides = slides.length; }

    swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }

    var prependSlides = [];
    var appendSlides = [];
    slides.each(function (index, el) {
      var slide = $(el);
      if (index < swiper.loopedSlides) { appendSlides.push(el); }
      if (index < slides.length && index >= slides.length - swiper.loopedSlides) { prependSlides.push(el); }
      slide.attr('data-swiper-slide-index', index);
    });
    for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
      $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
    for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
      $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }

  function loopFix () {
    var swiper = this;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var slides = swiper.slides;
    var loopedSlides = swiper.loopedSlides;
    var allowSlidePrev = swiper.allowSlidePrev;
    var allowSlideNext = swiper.allowSlideNext;
    var snapGrid = swiper.snapGrid;
    var rtl = swiper.rtlTranslate;
    var newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;

    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - swiper.getTranslate();


    // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
      newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
      newIndex += loopedSlides;
      var slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex >= slides.length - loopedSlides)) {
      // Fix For Positive Oversliding
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged$1 && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
  }

  function loopDestroy () {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var slides = swiper.slides;
    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + ",." + (params.slideClass) + "." + (params.slideBlankClass))).remove();
    slides.removeAttr('data-swiper-slide-index');
  }

  var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy,
  };

  function setGrabCursor (moving) {
    var swiper = this;
    if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
    var el = swiper.el;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
  }

  function unsetGrabCursor () {
    var swiper = this;
    if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
    swiper.el.style.cursor = '';
  }

  var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor,
  };

  function appendSlide (slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) { $wrapperEl.append(slides[i]); }
      }
    } else {
      $wrapperEl.append(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
  }

  function prependSlide (slides) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    if (params.loop) {
      swiper.loopDestroy();
    }
    var newActiveIndex = activeIndex + 1;
    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) { $wrapperEl.prepend(slides[i]); }
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }

  function addSlide (index, slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
    }
    var baseLength = swiper.slides.length;
    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;

    var slidesBuffer = [];
    for (var i = baseLength - 1; i >= index; i -= 1) {
      var currentSlide = swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (slides[i$1]) { $wrapperEl.append(slides[i$1]); }
      }
      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }

    for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
      $wrapperEl.append(slidesBuffer[i$2]);
    }

    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeSlide (slidesIndexes) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
    }
    var newActiveIndex = activeIndexBuffer;
    var indexToRemove;

    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
      for (var i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
        if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
      if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
      newActiveIndex = Math.max(newActiveIndex, 0);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeAllSlides () {
    var swiper = this;

    var slidesIndexes = [];
    for (var i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }

  var manipulation = {
    appendSlide: appendSlide,
    prependSlide: prependSlide,
    addSlide: addSlide,
    removeSlide: removeSlide,
    removeAllSlides: removeAllSlides,
  };

  var Device = (function Device() {
    var ua = win.navigator.userAgent;

    var device = {
      ios: false,
      android: false,
      androidChrome: false,
      desktop: false,
      windows: false,
      iphone: false,
      ipod: false,
      ipad: false,
      cordova: win.cordova || win.phonegap,
      phonegap: win.cordova || win.phonegap,
    };

    var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);


    // Windows
    if (windows) {
      device.os = 'windows';
      device.osVersion = windows[2];
      device.windows = true;
    }
    // Android
    if (android && !windows) {
      device.os = 'android';
      device.osVersion = android[2];
      device.android = true;
      device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
    }
    if (ipad || iphone || ipod) {
      device.os = 'ios';
      device.ios = true;
    }
    // iOS
    if (iphone && !ipod) {
      device.osVersion = iphone[2].replace(/_/g, '.');
      device.iphone = true;
    }
    if (ipad) {
      device.osVersion = ipad[2].replace(/_/g, '.');
      device.ipad = true;
    }
    if (ipod) {
      device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
      device.iphone = true;
    }
    // iOS 8+ changed UA
    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
      if (device.osVersion.split('.')[0] === '10') {
        device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
      }
    }

    // Desktop
    device.desktop = !(device.os || device.android || device.webView);

    // Webview
    device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

    // Minimal UI
    if (device.os && device.os === 'ios') {
      var osVersionArr = device.osVersion.split('.');
      var metaViewport = doc.querySelector('meta[name="viewport"]');
      device.minimalUi = !device.webView
        && (ipod || iphone)
        && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7)
        && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
    }

    // Pixel Ratio
    device.pixelRatio = win.devicePixelRatio || 1;

    // Export object
    return device;
  }());

  function onTouchStart (event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) { return; }
    if (!data.isTouchEvent && 'button' in e && e.button > 0) { return; }
    if (data.isTouched && data.isMoved) { return; }
    if (params.noSwiping && $(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : ("." + (params.noSwipingClass)))[0]) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!$(e).closest(params.swipeHandler)[0]) { return; }
    }

    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY;

    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (
      edgeSwipeDetection
      && ((startX <= edgeSwipeThreshold)
      || (startX >= win.screen.width - edgeSwipeThreshold))
    ) {
      return;
    }

    Utils.extend(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined,
    });

    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = Utils.now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) { data.allowThresholdMove = false; }
    if (e.type !== 'touchstart') {
      var preventDefault = true;
      if ($(e.target).is(data.formElements)) { preventDefault = false; }
      if (
        doc.activeElement
        && $(doc.activeElement).is(data.formElements)
        && doc.activeElement !== e.target
      ) {
        doc.activeElement.blur();
      }

      var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
      if (params.touchStartForcePreventDefault || shouldPreventDefault) {
        e.preventDefault();
      }
    }
    swiper.emit('touchStart', e);
  }

  function onTouchMove (event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }
      return;
    }
    if (data.isTouchEvent && e.type === 'mousemove') { return; }
    var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      // isMoved = true;
      swiper.allowClick = false;
      if (data.isTouched) {
        Utils.extend(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY,
        });
        data.touchStartTime = Utils.now();
      }
      return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (
          (pageY < touches.startY && swiper.translate <= swiper.maxTranslate())
          || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
        ) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (
        (pageX < touches.startX && swiper.translate <= swiper.maxTranslate())
        || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
      ) {
        return;
      }
    }
    if (data.isTouchEvent && doc.activeElement) {
      if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchMove', e);
    }
    if (e.targetTouches && e.targetTouches.length > 1) { return; }

    touches.currentX = pageX;
    touches.currentY = pageY;

    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt((Math.pow( diffX, 2 )) + (Math.pow( diffY, 2 ))) < swiper.params.threshold) { return; }

    if (typeof data.isScrolling === 'undefined') {
      var touchAngle;
      if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if ((diffX * diffX) + (diffY * diffY) >= 25) {
          touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    if (typeof data.startMoving === 'undefined') {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }

    if (!data.isMoved) {
      if (params.loop) {
        swiper.loopFix();
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
      }
      data.allowMomentumBounce = false;
      // Grab Cursor
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit('sliderFirstMove', e);
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;

    var diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;

    diff *= params.touchRatio;
    if (rtl) { diff = -diff; }

    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;

    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
      disableParentSwiper = false;
      if (params.resistance) { data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow( (-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio )); }
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) { data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow( (swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio )); }
    }

    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }

    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }


    // Threshold
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }

    if (!params.followFinger) { return; }

    // Update active index in free mode
    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode) {
      // Velocity
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
          time: data.touchStartTime,
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
        time: Utils.now(),
      });
    }
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
  }

  function onTouchEnd (event) {
    var swiper = this;
    var data = swiper.touchEventsData;

    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var $wrapperEl = swiper.$wrapperEl;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchEnd', e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }

    // Time diff
    var touchEndTime = Utils.now();
    var timeDiff = touchEndTime - data.touchStartTime;

    // Tap, doubleTap, Click
    if (swiper.allowClick) {
      swiper.updateClickedSlide(e);
      swiper.emit('tap', e);
      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
        data.clickTimeout = Utils.nextTick(function () {
          if (!swiper || swiper.destroyed) { return; }
          swiper.emit('click', e);
        }, 300);
      }
      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
        swiper.emit('doubleTap', e);
      }
    }

    data.lastClickTime = Utils.now();
    Utils.nextTick(function () {
      if (!swiper.destroyed) { swiper.allowClick = true; }
    });

    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;

    var currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }

    if (params.freeMode) {
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }

      if (params.freeModeMomentum) {
        if (data.velocities.length > 1) {
          var lastMoveEvent = data.velocities.pop();
          var velocityEvent = data.velocities.pop();

          var distance = lastMoveEvent.position - velocityEvent.position;
          var time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
            swiper.velocity = 0;
          }
          // this implies that the user stopped moving a finger then released.
          // There would be no events with distance zero, so the last event is stale.
          if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeModeMomentumVelocityRatio;

        data.velocities.length = 0;
        var momentumDuration = 1000 * params.freeModeMomentumRatio;
        var momentumDistance = swiper.velocity * momentumDuration;

        var newPosition = swiper.translate + momentumDistance;
        if (rtl) { newPosition = -newPosition; }

        var doBounce = false;
        var afterBouncePosition;
        var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
        var needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
        } else if (params.freeModeSticky) {
          var nextSlide;
          for (var j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }

          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          swiper.once('transitionEnd', function () {
            swiper.loopFix();
          });
        }
        // Fix duration
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }

        if (params.freeModeMomentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) { return; }
            swiper.emit('momentumBounce');

            swiper.setTransition(params.speed);
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) { return; }
              swiper.transitionEnd();
            });
          });
        } else if (swiper.velocity) {
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) { return; }
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }

        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      return;
    }

    // Find current slide
    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];
    for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
      if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
          stopIndex = i;
          groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }

    // Find current slide size
    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        if (ratio >= params.longSwipesRatio) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
        else { swiper.slideTo(stopIndex); }
      }
      if (swiper.swipeDirection === 'prev') {
        if (ratio > (1 - params.longSwipesRatio)) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
        else { swiper.slideTo(stopIndex); }
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + params.slidesPerGroup);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    }
  }

  function onResize () {
    var swiper = this;

    var params = swiper.params;
    var el = swiper.el;

    if (el && el.offsetWidth === 0) { return; }

    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Save locks
    var allowSlideNext = swiper.allowSlideNext;
    var allowSlidePrev = swiper.allowSlidePrev;
    var snapGrid = swiper.snapGrid;

    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;

    swiper.updateSize();
    swiper.updateSlides();

    if (params.freeMode) {
      var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      swiper.updateSlidesClasses();
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;

    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  function onClick (e) {
    var swiper = this;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) { e.preventDefault(); }
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  function attachEvents() {
    var swiper = this;
    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    {
      swiper.onTouchStart = onTouchStart.bind(swiper);
      swiper.onTouchMove = onTouchMove.bind(swiper);
      swiper.onTouchEnd = onTouchEnd.bind(swiper);
    }

    swiper.onClick = onClick.bind(swiper);

    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested;

    // Touch Events
    {
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
          target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture: capture } : capture);
          target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          target.addEventListener('mousedown', swiper.onTouchStart, false);
          doc.addEventListener('mousemove', swiper.onTouchMove, capture);
          doc.addEventListener('mouseup', swiper.onTouchEnd, false);
        }
      }
      // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        target.addEventListener('click', swiper.onClick, true);
      }
    }

    // Resize handler
    swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
  }

  function detachEvents() {
    var swiper = this;

    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested;

    // Touch Events
    {
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
          target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
          target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          target.removeEventListener('mousedown', swiper.onTouchStart, false);
          doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
          doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
        }
      }
      // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        target.removeEventListener('click', swiper.onClick, true);
      }
    }

    // Resize handler
    swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
  }

  var events = {
    attachEvents: attachEvents,
    detachEvents: detachEvents,
  };

  function setBreakpoint () {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var initialized = swiper.initialized;
    var loopedSlides = swiper.loopedSlides; if ( loopedSlides === void 0 ) loopedSlides = 0;
    var params = swiper.params;
    var breakpoints = params.breakpoints;
    if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) { return; }

    // Set breakpoint for window width and update parameters
    var breakpoint = swiper.getBreakpoint(breakpoints);

    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
      var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
      if (breakpointOnlyParams) {
        ['slidesPerView', 'spaceBetween', 'slidesPerGroup'].forEach(function (param) {
          var paramValue = breakpointOnlyParams[param];
          if (typeof paramValue === 'undefined') { return; }
          if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
            breakpointOnlyParams[param] = 'auto';
          } else if (param === 'slidesPerView') {
            breakpointOnlyParams[param] = parseFloat(paramValue);
          } else {
            breakpointOnlyParams[param] = parseInt(paramValue, 10);
          }
        });
      }

      var breakpointParams = breakpointOnlyParams || swiper.originalParams;
      var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView);

      Utils.extend(swiper.params, breakpointParams);

      Utils.extend(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
      });

      swiper.currentBreakpoint = breakpoint;

      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
      }
      swiper.emit('breakpoint', breakpointParams);
    }
  }

  function getBreakpoint (breakpoints) {
    var swiper = this;
    // Get breakpoint for window width
    if (!breakpoints) { return undefined; }
    var breakpoint = false;
    var points = [];
    Object.keys(breakpoints).forEach(function (point) {
      points.push(point);
    });
    points.sort(function (a, b) { return parseInt(a, 10) - parseInt(b, 10); });
    for (var i = 0; i < points.length; i += 1) {
      var point = points[i];
      if (swiper.params.breakpointsInverse) {
        if (point <= win.innerWidth) {
          breakpoint = point;
        }
      } else if (point >= win.innerWidth && !breakpoint) {
        breakpoint = point;
      }
    }
    return breakpoint || 'max';
  }

  var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };

  var Browser = (function Browser() {
    function isSafari() {
      var ua = win.navigator.userAgent.toLowerCase();
      return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
    }
    return {
      isIE: !!win.navigator.userAgent.match(/Trident/g) || !!win.navigator.userAgent.match(/MSIE/g),
      isEdge: !!win.navigator.userAgent.match(/Edge/g),
      isSafari: isSafari(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
    };
  }());

  function addClasses () {
    var swiper = this;
    var classNames = swiper.classNames;
    var params = swiper.params;
    var rtl = swiper.rtl;
    var $el = swiper.$el;
    var suffixes = [];

    suffixes.push(params.direction);

    if (params.freeMode) {
      suffixes.push('free-mode');
    }
    if (!Support.flexbox) {
      suffixes.push('no-flexbox');
    }
    if (params.autoHeight) {
      suffixes.push('autoheight');
    }
    if (rtl) {
      suffixes.push('rtl');
    }
    if (params.slidesPerColumn > 1) {
      suffixes.push('multirow');
    }
    if (Device.android) {
      suffixes.push('android');
    }
    if (Device.ios) {
      suffixes.push('ios');
    }
    // WP8 Touch Events Fix
    if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      suffixes.push(("wp8-" + (params.direction)));
    }

    suffixes.forEach(function (suffix) {
      classNames.push(params.containerModifierClass + suffix);
    });

    $el.addClass(classNames.join(' '));
  }

  function removeClasses () {
    var swiper = this;
    var $el = swiper.$el;
    var classNames = swiper.classNames;

    $el.removeClass(classNames.join(' '));
  }

  var classes = { addClasses: addClasses, removeClasses: removeClasses };

  function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
    var image;
    function onReady() {
      if (callback) { callback(); }
    }
    if (!imageEl.complete || !checkForComplete) {
      if (src) {
        image = new win.Image();
        image.onload = onReady;
        image.onerror = onReady;
        if (sizes) {
          image.sizes = sizes;
        }
        if (srcset) {
          image.srcset = srcset;
        }
        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      // image already loaded...
      onReady();
    }
  }

  function preloadImages () {
    var swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');
    function onReady() {
      if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) { return; }
      if (swiper.imagesLoaded !== undefined) { swiper.imagesLoaded += 1; }
      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady) { swiper.update(); }
        swiper.emit('imagesReady');
      }
    }
    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
      var imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(
        imageEl,
        imageEl.currentSrc || imageEl.getAttribute('src'),
        imageEl.srcset || imageEl.getAttribute('srcset'),
        imageEl.sizes || imageEl.getAttribute('sizes'),
        true,
        onReady
      );
    }
  }

  var images = {
    loadImage: loadImage,
    preloadImages: preloadImages,
  };

  function checkOverflow() {
    var swiper = this;
    var wasLocked = swiper.isLocked;

    swiper.isLocked = swiper.snapGrid.length === 1;
    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked;

    // events
    if (wasLocked !== swiper.isLocked) { swiper.emit(swiper.isLocked ? 'lock' : 'unlock'); }

    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
      swiper.navigation.update();
    }
  }

  var checkOverflow$1 = { checkOverflow: checkOverflow };

  var defaults = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'container',
    initialSlide: 0,
    speed: 300,
    //
    preventInteractionOnTransition: false,

    // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,

    // Free mode
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,

    // Autoheight
    autoHeight: false,

    // Set wrapper width
    setWrapperSize: false,

    // Virtual Translate
    virtualTranslate: false,

    // Effects
    effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

    // Breakpoints
    breakpoints: undefined,
    breakpointsInverse: false,

    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0, // in px
    slidesOffsetAfter: 0, // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,

    // Disable swiper and hide navigation when container not overflow
    watchOverflow: false,

    // Round length
    roundLengths: false,

    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: true,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,

    // Unique Navigation Elements
    uniqueNavElements: true,

    // Resistance
    resistance: true,
    resistanceRatio: 0.85,

    // Progress
    watchSlidesProgress: false,
    watchSlidesVisibility: false,

    // Cursor
    grabCursor: false,

    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,

    // Images
    preloadImages: true,
    updateOnImagesReady: true,

    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,

    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null, // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,

    // Passive Listeners
    passiveListeners: true,

    // NS
    containerModifierClass: 'swiper-container-', // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',

    // Callbacks
    runCallbacksOnInit: true,
  };

  var prototypes = {
    update: update,
    translate: translate,
    transition: transition$1,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    manipulation: manipulation,
    events: events,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes,
    images: images,
  };

  var extendedDefaults = {};

  var Swiper = /*@__PURE__*/(function (SwiperClass$$1) {
    function Swiper() {
      var assign;

      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      var el;
      var params;
      if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
        params = args[0];
      } else {
        (assign = args, el = assign[0], params = assign[1]);
      }
      if (!params) { params = {}; }

      params = Utils.extend({}, params);
      if (el && !params.el) { params.el = el; }

      SwiperClass$$1.call(this, params);

      Object.keys(prototypes).forEach(function (prototypeGroup) {
        Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
          if (!Swiper.prototype[protoMethod]) {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
          }
        });
      });

      // Swiper Instance
      var swiper = this;
      if (typeof swiper.modules === 'undefined') {
        swiper.modules = {};
      }
      Object.keys(swiper.modules).forEach(function (moduleName) {
        var module = swiper.modules[moduleName];
        if (module.params) {
          var moduleParamName = Object.keys(module.params)[0];
          var moduleParams = module.params[moduleParamName];
          if (typeof moduleParams !== 'object' || moduleParams === null) { return; }
          if (!(moduleParamName in params && 'enabled' in moduleParams)) { return; }
          if (params[moduleParamName] === true) {
            params[moduleParamName] = { enabled: true };
          }
          if (
            typeof params[moduleParamName] === 'object'
            && !('enabled' in params[moduleParamName])
          ) {
            params[moduleParamName].enabled = true;
          }
          if (!params[moduleParamName]) { params[moduleParamName] = { enabled: false }; }
        }
      });

      // Extend defaults with modules params
      var swiperParams = Utils.extend({}, defaults);
      swiper.useModulesParams(swiperParams);

      // Extend defaults with passed params
      swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = Utils.extend({}, swiper.params);
      swiper.passedParams = Utils.extend({}, params);

      // Save Dom lib
      swiper.$ = $;

      // Find el
      var $el = $(swiper.params.el);
      el = $el[0];

      if (!el) {
        return undefined;
      }

      if ($el.length > 1) {
        var swipers = [];
        $el.each(function (index, containerEl) {
          var newParams = Utils.extend({}, params, { el: containerEl });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      }

      el.swiper = swiper;
      $el.data('swiper', swiper);

      // Find Wrapper
      var $wrapperEl = $el.children(("." + (swiper.params.wrapperClass)));

      // Extend Swiper
      Utils.extend(swiper, {
        $el: $el,
        el: el,
        $wrapperEl: $wrapperEl,
        wrapperEl: $wrapperEl[0],

        // Classes
        classNames: [],

        // Slides
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],

        // isDirection
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === 'horizontal';
        },
        isVertical: function isVertical() {
          return swiper.params.direction === 'vertical';
        },
        // RTL
        rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        wrongRTL: $wrapperEl.css('display') === '-webkit-box',

        // Indexes
        activeIndex: 0,
        realIndex: 0,

        //
        isBeginning: true,
        isEnd: false,

        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,

        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,

        // Touch Events
        touchEvents: (function touchEvents() {
          var touch = ['touchstart', 'touchmove', 'touchend'];
          var desktop = ['mousedown', 'mousemove', 'mouseup'];
          if (Support.pointerEvents) {
            desktop = ['pointerdown', 'pointermove', 'pointerup'];
          } else if (Support.prefixedPointerEvents) {
            desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
          }
          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2],
          };
          return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
        }()),
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          formElements: 'input, select, option, textarea, button, video',
          // Last click time
          lastClickTime: Utils.now(),
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          isTouchEvent: undefined,
          startMoving: undefined,
        },

        // Clicks
        allowClick: true,

        // Touches
        allowTouchMove: swiper.params.allowTouchMove,

        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0,
        },

        // Images
        imagesToLoad: [],
        imagesLoaded: 0,

      });

      // Install Modules
      swiper.useModules();

      // Init
      if (swiper.params.init) {
        swiper.init();
      }

      // Return app instance
      return swiper;
    }

    if ( SwiperClass$$1 ) Swiper.__proto__ = SwiperClass$$1;
    Swiper.prototype = Object.create( SwiperClass$$1 && SwiperClass$$1.prototype );
    Swiper.prototype.constructor = Swiper;

    var staticAccessors = { extendedDefaults: { configurable: true },defaults: { configurable: true },Class: { configurable: true },$: { configurable: true } };

    Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic () {
      var swiper = this;
      var params = swiper.params;
      var slides = swiper.slides;
      var slidesGrid = swiper.slidesGrid;
      var swiperSize = swiper.size;
      var activeIndex = swiper.activeIndex;
      var spv = 1;
      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;
        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) { breakLoop = true; }
          }
        }
        for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
          if (slides[i$1] && !breakLoop) {
            slideSize += slides[i$1].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) { breakLoop = true; }
          }
        }
      } else {
        for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
          if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }
      return spv;
    };

    Swiper.prototype.update = function update$$1 () {
      var swiper = this;
      if (!swiper || swiper.destroyed) { return; }
      var snapGrid = swiper.snapGrid;
      var params = swiper.params;
      // Breakpoints
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      function setTranslate() {
        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      var translated;
      if (swiper.params.freeMode) {
        setTranslate();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit('update');
    };

    Swiper.prototype.init = function init () {
      var swiper = this;
      if (swiper.initialized) { return; }

      swiper.emit('beforeInit');

      // Set breakpoint
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }

      // Add Classes
      swiper.addClasses();

      // Create loop
      if (swiper.params.loop) {
        swiper.loopCreate();
      }

      // Update size
      swiper.updateSize();

      // Update slides
      swiper.updateSlides();

      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }

      // Set Grab Cursor
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }

      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      }

      // Slide To Initial Slide
      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
      }

      // Attach events
      swiper.attachEvents();

      // Init Flag
      swiper.initialized = true;

      // Emit
      swiper.emit('init');
    };

    Swiper.prototype.destroy = function destroy (deleteInstance, cleanStyles) {
      if ( deleteInstance === void 0 ) deleteInstance = true;
      if ( cleanStyles === void 0 ) cleanStyles = true;

      var swiper = this;
      var params = swiper.params;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;

      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }

      swiper.emit('beforeDestroy');

      // Init Flag
      swiper.initialized = false;

      // Detach events
      swiper.detachEvents();

      // Destroy loop
      if (params.loop) {
        swiper.loopDestroy();
      }

      // Cleanup styles
      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');
        if (slides && slides.length) {
          slides
            .removeClass([
              params.slideVisibleClass,
              params.slideActiveClass,
              params.slideNextClass,
              params.slidePrevClass ].join(' '))
            .removeAttr('style')
            .removeAttr('data-swiper-slide-index')
            .removeAttr('data-swiper-column')
            .removeAttr('data-swiper-row');
        }
      }

      swiper.emit('destroy');

      // Detach emitter events
      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        swiper.off(eventName);
      });

      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        swiper.$el.data('swiper', null);
        Utils.deleteProps(swiper);
      }
      swiper.destroyed = true;

      return null;
    };

    Swiper.extendDefaults = function extendDefaults (newDefaults) {
      Utils.extend(extendedDefaults, newDefaults);
    };

    staticAccessors.extendedDefaults.get = function () {
      return extendedDefaults;
    };

    staticAccessors.defaults.get = function () {
      return defaults;
    };

    staticAccessors.Class.get = function () {
      return SwiperClass$$1;
    };

    staticAccessors.$.get = function () {
      return $;
    };

    Object.defineProperties( Swiper, staticAccessors );

    return Swiper;
  }(SwiperClass));

  var Device$1 = {
    name: 'device',
    proto: {
      device: Device,
    },
    static: {
      device: Device,
    },
  };

  var Support$1 = {
    name: 'support',
    proto: {
      support: Support,
    },
    static: {
      support: Support,
    },
  };

  var Browser$1 = {
    name: 'browser',
    proto: {
      browser: Browser,
    },
    static: {
      browser: Browser,
    },
  };

  var Resize = {
    name: 'resize',
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        resize: {
          resizeHandler: function resizeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
            swiper.emit('beforeResize');
            swiper.emit('resize');
          },
          orientationChangeHandler: function orientationChangeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
            swiper.emit('orientationchange');
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        // Emit resize
        win.addEventListener('resize', swiper.resize.resizeHandler);

        // Emit orientationchange
        win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
      destroy: function destroy() {
        var swiper = this;
        win.removeEventListener('resize', swiper.resize.resizeHandler);
        win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
    },
  };

  var Observer = {
    func: win.MutationObserver || win.WebkitMutationObserver,
    attach: function attach(target, options) {
      if ( options === void 0 ) options = {};

      var swiper = this;

      var ObserverFunc = Observer.func;
      var observer = new ObserverFunc(function (mutations) {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (mutations.length === 1) {
          swiper.emit('observerUpdate', mutations[0]);
          return;
        }
        var observerUpdate = function observerUpdate() {
          swiper.emit('observerUpdate', mutations[0]);
        };

        if (win.requestAnimationFrame) {
          win.requestAnimationFrame(observerUpdate);
        } else {
          win.setTimeout(observerUpdate, 0);
        }
      });

      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
      });

      swiper.observer.observers.push(observer);
    },
    init: function init() {
      var swiper = this;
      if (!Support.observer || !swiper.params.observer) { return; }
      if (swiper.params.observeParents) {
        var containerParents = swiper.$el.parents();
        for (var i = 0; i < containerParents.length; i += 1) {
          swiper.observer.attach(containerParents[i]);
        }
      }
      // Observe container
      swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });

      // Observe wrapper
      swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.observer.observers.forEach(function (observer) {
        observer.disconnect();
      });
      swiper.observer.observers = [];
    },
  };

  var Observer$1 = {
    name: 'observer',
    params: {
      observer: false,
      observeParents: false,
      observeSlideChildren: false,
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        observer: {
          init: Observer.init.bind(swiper),
          attach: Observer.attach.bind(swiper),
          destroy: Observer.destroy.bind(swiper),
          observers: [],
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.observer.init();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.observer.destroy();
      },
    },
  };

  var Virtual = {
    update: function update(force) {
      var swiper = this;
      var ref = swiper.params;
      var slidesPerView = ref.slidesPerView;
      var slidesPerGroup = ref.slidesPerGroup;
      var centeredSlides = ref.centeredSlides;
      var ref$1 = swiper.params.virtual;
      var addSlidesBefore = ref$1.addSlidesBefore;
      var addSlidesAfter = ref$1.addSlidesAfter;
      var ref$2 = swiper.virtual;
      var previousFrom = ref$2.from;
      var previousTo = ref$2.to;
      var slides = ref$2.slides;
      var previousSlidesGrid = ref$2.slidesGrid;
      var renderSlide = ref$2.renderSlide;
      var previousOffset = ref$2.offset;
      swiper.updateActiveIndex();
      var activeIndex = swiper.activeIndex || 0;

      var offsetProp;
      if (swiper.rtlTranslate) { offsetProp = 'right'; }
      else { offsetProp = swiper.isHorizontal() ? 'left' : 'top'; }

      var slidesAfter;
      var slidesBefore;
      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
        slidesBefore = slidesPerGroup + addSlidesAfter;
      }
      var from = Math.max((activeIndex || 0) - slidesBefore, 0);
      var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
      var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

      Utils.extend(swiper.virtual, {
        from: from,
        to: to,
        offset: offset,
        slidesGrid: swiper.slidesGrid,
      });

      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        if (swiper.lazy && swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      }

      if (previousFrom === from && previousTo === to && !force) {
        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper.slides.css(offsetProp, (offset + "px"));
        }
        swiper.updateProgress();
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset: offset,
          from: from,
          to: to,
          slides: (function getSlides() {
            var slidesToRender = [];
            for (var i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          }()),
        });
        onRendered();
        return;
      }
      var prependIndexes = [];
      var appendIndexes = [];
      if (force) {
        swiper.$wrapperEl.find(("." + (swiper.params.slideClass))).remove();
      } else {
        for (var i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            swiper.$wrapperEl.find(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + i + "\"]")).remove();
          }
        }
      }
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (i$1 >= from && i$1 <= to) {
          if (typeof previousTo === 'undefined' || force) {
            appendIndexes.push(i$1);
          } else {
            if (i$1 > previousTo) { appendIndexes.push(i$1); }
            if (i$1 < previousFrom) { prependIndexes.push(i$1); }
          }
        }
      }
      appendIndexes.forEach(function (index) {
        swiper.$wrapperEl.append(renderSlide(slides[index], index));
      });
      prependIndexes.sort(function (a, b) { return b - a; }).forEach(function (index) {
        swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
      });
      swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, (offset + "px"));
      onRendered();
    },
    renderSlide: function renderSlide(slide, index) {
      var swiper = this;
      var params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      var $slideEl = params.renderSlide
        ? $(params.renderSlide.call(swiper, slide, index))
        : $(("<div class=\"" + (swiper.params.slideClass) + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>"));
      if (!$slideEl.attr('data-swiper-slide-index')) { $slideEl.attr('data-swiper-slide-index', index); }
      if (params.cache) { swiper.virtual.cache[index] = $slideEl; }
      return $slideEl;
    },
    appendSlide: function appendSlide(slide) {
      var swiper = this;
      swiper.virtual.slides.push(slide);
      swiper.virtual.update(true);
    },
    prependSlide: function prependSlide(slide) {
      var swiper = this;
      swiper.virtual.slides.unshift(slide);
      if (swiper.params.virtual.cache) {
        var cache = swiper.virtual.cache;
        var newCache = {};
        Object.keys(cache).forEach(function (cachedIndex) {
          newCache[cachedIndex + 1] = cache[cachedIndex];
        });
        swiper.virtual.cache = newCache;
      }
      swiper.virtual.update(true);
      swiper.slideNext(0);
    },
  };

  var Virtual$1 = {
    name: 'virtual',
    params: {
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        virtual: {
          update: Virtual.update.bind(swiper),
          appendSlide: Virtual.appendSlide.bind(swiper),
          prependSlide: Virtual.prependSlide.bind(swiper),
          renderSlide: Virtual.renderSlide.bind(swiper),
          slides: swiper.params.virtual.slides,
          cache: {},
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "virtual"));
        var overwriteParams = {
          watchSlidesProgress: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);

        if (!swiper.params.initialSlide) {
          swiper.virtual.update();
        }
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) { return; }
        swiper.virtual.update();
      },
    },
  };

  var Keyboard = {
    handle: function handle(event) {
      var swiper = this;
      var rtl = swiper.rtlTranslate;
      var e = event;
      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
      var kc = e.keyCode || e.charCode;
      // Directions locks
      if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40))) {
        return false;
      }
      if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38))) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }
      if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
        return undefined;
      }
      if (swiper.params.keyboard.onlyInViewport && (kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
        var inView = false;
        // Check that swiper should be inside of visible area of window
        if (swiper.$el.parents(("." + (swiper.params.slideClass))).length > 0 && swiper.$el.parents(("." + (swiper.params.slideActiveClass))).length === 0) {
          return undefined;
        }
        var windowWidth = win.innerWidth;
        var windowHeight = win.innerHeight;
        var swiperOffset = swiper.$el.offset();
        if (rtl) { swiperOffset.left -= swiper.$el[0].scrollLeft; }
        var swiperCoord = [
          [swiperOffset.left, swiperOffset.top],
          [swiperOffset.left + swiper.width, swiperOffset.top],
          [swiperOffset.left, swiperOffset.top + swiper.height],
          [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height] ];
        for (var i = 0; i < swiperCoord.length; i += 1) {
          var point = swiperCoord[i];
          if (
            point[0] >= 0 && point[0] <= windowWidth
            && point[1] >= 0 && point[1] <= windowHeight
          ) {
            inView = true;
          }
        }
        if (!inView) { return undefined; }
      }
      if (swiper.isHorizontal()) {
        if (kc === 37 || kc === 39) {
          if (e.preventDefault) { e.preventDefault(); }
          else { e.returnValue = false; }
        }
        if ((kc === 39 && !rtl) || (kc === 37 && rtl)) { swiper.slideNext(); }
        if ((kc === 37 && !rtl) || (kc === 39 && rtl)) { swiper.slidePrev(); }
      } else {
        if (kc === 38 || kc === 40) {
          if (e.preventDefault) { e.preventDefault(); }
          else { e.returnValue = false; }
        }
        if (kc === 40) { swiper.slideNext(); }
        if (kc === 38) { swiper.slidePrev(); }
      }
      swiper.emit('keyPress', kc);
      return undefined;
    },
    enable: function enable() {
      var swiper = this;
      if (swiper.keyboard.enabled) { return; }
      $(doc).on('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = true;
    },
    disable: function disable() {
      var swiper = this;
      if (!swiper.keyboard.enabled) { return; }
      $(doc).off('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = false;
    },
  };

  var Keyboard$1 = {
    name: 'keyboard',
    params: {
      keyboard: {
        enabled: false,
        onlyInViewport: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        keyboard: {
          enabled: false,
          enable: Keyboard.enable.bind(swiper),
          disable: Keyboard.disable.bind(swiper),
          handle: Keyboard.handle.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.keyboard.enabled) {
          swiper.keyboard.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.keyboard.enabled) {
          swiper.keyboard.disable();
        }
      },
    },
  };

  function isEventSupported() {
    var eventName = 'onwheel';
    var isSupported = eventName in doc;

    if (!isSupported) {
      var element = doc.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }

    if (!isSupported
      && doc.implementation
      && doc.implementation.hasFeature
      // always returns true in newer browsers as per the standard.
      // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
      && doc.implementation.hasFeature('', '') !== true
    ) {
      // This is the only way to test support for the `wheel` event in IE9+.
      isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
    }

    return isSupported;
  }
  var Mousewheel = {
    lastScrollTime: Utils.now(),
    event: (function getEvent() {
      if (win.navigator.userAgent.indexOf('firefox') > -1) { return 'DOMMouseScroll'; }
      return isEventSupported() ? 'wheel' : 'mousewheel';
    }()),
    normalize: function normalize(e) {
      // Reasonable defaults
      var PIXEL_STEP = 10;
      var LINE_HEIGHT = 40;
      var PAGE_HEIGHT = 800;

      var sX = 0;
      var sY = 0; // spinX, spinY
      var pX = 0;
      var pY = 0; // pixelX, pixelY

      // Legacy
      if ('detail' in e) {
        sY = e.detail;
      }
      if ('wheelDelta' in e) {
        sY = -e.wheelDelta / 120;
      }
      if ('wheelDeltaY' in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ('wheelDeltaX' in e) {
        sX = -e.wheelDeltaX / 120;
      }

      // side scrolling on FF with DOMMouseScroll
      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }

      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;

      if ('deltaY' in e) {
        pY = e.deltaY;
      }
      if ('deltaX' in e) {
        pX = e.deltaX;
      }

      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) { // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else { // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }

      // Fall-back if spin cannot be determined
      if (pX && !sX) {
        sX = (pX < 1) ? -1 : 1;
      }
      if (pY && !sY) {
        sY = (pY < 1) ? -1 : 1;
      }

      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY,
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      var swiper = this;
      swiper.mouseEntered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      var swiper = this;
      swiper.mouseEntered = false;
    },
    handle: function handle(event) {
      var e = event;
      var swiper = this;
      var params = swiper.params.mousewheel;

      if (!swiper.mouseEntered && !params.releaseOnEdges) { return true; }

      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
      var delta = 0;
      var rtlFactor = swiper.rtlTranslate ? -1 : 1;

      var data = Mousewheel.normalize(e);

      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) { delta = data.pixelX * rtlFactor; }
          else { return true; }
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) { delta = data.pixelY; }
        else { return true; }
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }

      if (delta === 0) { return true; }

      if (params.invert) { delta = -delta; }

      if (!swiper.params.freeMode) {
        if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
          if (delta < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
              swiper.slideNext();
              swiper.emit('scroll', e);
            } else if (params.releaseOnEdges) { return true; }
          } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            swiper.emit('scroll', e);
          } else if (params.releaseOnEdges) { return true; }
        }
        swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
      } else {
        // Freemode or scrollContainer:
        if (swiper.params.loop) {
          swiper.loopFix();
        }
        var position = swiper.getTranslate() + (delta * params.sensitivity);
        var wasBeginning = swiper.isBeginning;
        var wasEnd = swiper.isEnd;

        if (position >= swiper.minTranslate()) { position = swiper.minTranslate(); }
        if (position <= swiper.maxTranslate()) { position = swiper.maxTranslate(); }

        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeModeSticky) {
          clearTimeout(swiper.mousewheel.timeout);
          swiper.mousewheel.timeout = Utils.nextTick(function () {
            swiper.slideToClosest();
          }, 300);
        }
        // Emit event
        swiper.emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) { swiper.autoplay.stop(); }
        // Return page scroll on edge positions
        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) { return true; }
      }

      if (e.preventDefault) { e.preventDefault(); }
      else { e.returnValue = false; }
      return false;
    },
    enable: function enable() {
      var swiper = this;
      if (!Mousewheel.event) { return false; }
      if (swiper.mousewheel.enabled) { return false; }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
      target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
      target.on(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = true;
      return true;
    },
    disable: function disable() {
      var swiper = this;
      if (!Mousewheel.event) { return false; }
      if (!swiper.mousewheel.enabled) { return false; }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.off(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = false;
      return true;
    },
  };

  var Mousewheel$1 = {
    name: 'mousewheel',
    params: {
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarged: 'container',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        mousewheel: {
          enabled: false,
          enable: Mousewheel.enable.bind(swiper),
          disable: Mousewheel.disable.bind(swiper),
          handle: Mousewheel.handle.bind(swiper),
          handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
          handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
          lastScrollTime: Utils.now(),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.mousewheel.enabled) { swiper.mousewheel.enable(); }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.mousewheel.enabled) { swiper.mousewheel.disable(); }
      },
    },
  };

  var Navigation = {
    update: function update() {
      // Update Navigation Buttons
      var swiper = this;
      var params = swiper.params.navigation;

      if (swiper.params.loop) { return; }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          $prevEl.addClass(params.disabledClass);
        } else {
          $prevEl.removeClass(params.disabledClass);
        }
        $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          $nextEl.addClass(params.disabledClass);
        } else {
          $nextEl.removeClass(params.disabledClass);
        }
        $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    },
    onPrevClick: function onPrevClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop) { return; }
      swiper.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop) { return; }
      swiper.slideNext();
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.navigation;
      if (!(params.nextEl || params.prevEl)) { return; }

      var $nextEl;
      var $prevEl;
      if (params.nextEl) {
        $nextEl = $(params.nextEl);
        if (
          swiper.params.uniqueNavElements
          && typeof params.nextEl === 'string'
          && $nextEl.length > 1
          && swiper.$el.find(params.nextEl).length === 1
        ) {
          $nextEl = swiper.$el.find(params.nextEl);
        }
      }
      if (params.prevEl) {
        $prevEl = $(params.prevEl);
        if (
          swiper.params.uniqueNavElements
          && typeof params.prevEl === 'string'
          && $prevEl.length > 1
          && swiper.$el.find(params.prevEl).length === 1
        ) {
          $prevEl = swiper.$el.find(params.prevEl);
        }
      }

      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on('click', swiper.navigation.onNextClick);
      }
      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on('click', swiper.navigation.onPrevClick);
      }

      Utils.extend(swiper.navigation, {
        $nextEl: $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl: $prevEl,
        prevEl: $prevEl && $prevEl[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;
      if ($nextEl && $nextEl.length) {
        $nextEl.off('click', swiper.navigation.onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }
      if ($prevEl && $prevEl.length) {
        $prevEl.off('click', swiper.navigation.onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    },
  };

  var Navigation$1 = {
    name: 'navigation',
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,

        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        navigation: {
          init: Navigation.init.bind(swiper),
          update: Navigation.update.bind(swiper),
          destroy: Navigation.destroy.bind(swiper),
          onNextClick: Navigation.onNextClick.bind(swiper),
          onPrevClick: Navigation.onPrevClick.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.navigation.init();
        swiper.navigation.update();
      },
      toEdge: function toEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.navigation.destroy();
      },
      click: function click(e) {
        var swiper = this;
        var ref = swiper.navigation;
        var $nextEl = ref.$nextEl;
        var $prevEl = ref.$prevEl;
        if (
          swiper.params.navigation.hideOnClick
          && !$(e.target).is($prevEl)
          && !$(e.target).is($nextEl)
        ) {
          if ($nextEl) { $nextEl.toggleClass(swiper.params.navigation.hiddenClass); }
          if ($prevEl) { $prevEl.toggleClass(swiper.params.navigation.hiddenClass); }
        }
      },
    },
  };

  var Pagination = {
    update: function update() {
      // Render || Update Pagination bullets/items
      var swiper = this;
      var rtl = swiper.rtl;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var $el = swiper.pagination.$el;
      // Current/Total
      var current;
      var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
        if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
          current -= (slidesLength - (swiper.loopedSlides * 2));
        }
        if (current > total - 1) { current -= total; }
        if (current < 0 && swiper.params.paginationType !== 'bullets') { current = total + current; }
      } else if (typeof swiper.snapIndex !== 'undefined') {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      }
      // Types
      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        var bullets = swiper.pagination.bullets;
        var firstIndex;
        var lastIndex;
        var midIndex;
        if (params.dynamicBullets) {
          swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
          $el.css(swiper.isHorizontal() ? 'width' : 'height', ((swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)) + "px"));
          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
            swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
            if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
              swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (swiper.pagination.dynamicBulletIndex < 0) {
              swiper.pagination.dynamicBulletIndex = 0;
            }
          }
          firstIndex = current - swiper.pagination.dynamicBulletIndex;
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.removeClass(((params.bulletActiveClass) + " " + (params.bulletActiveClass) + "-next " + (params.bulletActiveClass) + "-next-next " + (params.bulletActiveClass) + "-prev " + (params.bulletActiveClass) + "-prev-prev " + (params.bulletActiveClass) + "-main"));
        if ($el.length > 1) {
          bullets.each(function (index, bullet) {
            var $bullet = $(bullet);
            var bulletIndex = $bullet.index();
            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(((params.bulletActiveClass) + "-main"));
              }
              if (bulletIndex === firstIndex) {
                $bullet
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev"))
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev-prev"));
              }
              if (bulletIndex === lastIndex) {
                $bullet
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next"))
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next-next"));
              }
            }
          });
        } else {
          var $bullet = bullets.eq(current);
          $bullet.addClass(params.bulletActiveClass);
          if (params.dynamicBullets) {
            var $firstDisplayedBullet = bullets.eq(firstIndex);
            var $lastDisplayedBullet = bullets.eq(lastIndex);
            for (var i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(((params.bulletActiveClass) + "-main"));
            }
            $firstDisplayedBullet
              .prev()
              .addClass(((params.bulletActiveClass) + "-prev"))
              .prev()
              .addClass(((params.bulletActiveClass) + "-prev-prev"));
            $lastDisplayedBullet
              .next()
              .addClass(((params.bulletActiveClass) + "-next"))
              .next()
              .addClass(((params.bulletActiveClass) + "-next-next"));
          }
        }
        if (params.dynamicBullets) {
          var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          var bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
          var offsetProp = rtl ? 'right' : 'left';
          bullets.css(swiper.isHorizontal() ? offsetProp : 'top', (bulletsOffset + "px"));
        }
      }
      if (params.type === 'fraction') {
        $el.find(("." + (params.currentClass))).text(params.formatFractionCurrent(current + 1));
        $el.find(("." + (params.totalClass))).text(params.formatFractionTotal(total));
      }
      if (params.type === 'progressbar') {
        var progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        var scale = (current + 1) / total;
        var scaleX = 1;
        var scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        $el.find(("." + (params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
      }
      if (params.type === 'custom' && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        swiper.emit('paginationRender', swiper, $el[0]);
      } else {
        swiper.emit('paginationUpdate', swiper, $el[0]);
      }
      $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    },
    render: function render() {
      // Render Container
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

      var $el = swiper.pagination.$el;
      var paginationHTML = '';
      if (params.type === 'bullets') {
        var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        for (var i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += "<" + (params.bulletElement) + " class=\"" + (params.bulletClass) + "\"></" + (params.bulletElement) + ">";
          }
        }
        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find(("." + (params.bulletClass)));
      }
      if (params.type === 'fraction') {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = "<span class=\"" + (params.currentClass) + "\"></span>"
          + ' / '
          + "<span class=\"" + (params.totalClass) + "\"></span>";
        }
        $el.html(paginationHTML);
      }
      if (params.type === 'progressbar') {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = "<span class=\"" + (params.progressbarFillClass) + "\"></span>";
        }
        $el.html(paginationHTML);
      }
      if (params.type !== 'custom') {
        swiper.emit('paginationRender', swiper.pagination.$el[0]);
      }
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el) { return; }

      var $el = $(params.el);
      if ($el.length === 0) { return; }

      if (
        swiper.params.uniqueNavElements
        && typeof params.el === 'string'
        && $el.length > 1
        && swiper.$el.find(params.el).length === 1
      ) {
        $el = swiper.$el.find(params.el);
      }

      if (params.type === 'bullets' && params.clickable) {
        $el.addClass(params.clickableClass);
      }

      $el.addClass(params.modifierClass + params.type);

      if (params.type === 'bullets' && params.dynamicBullets) {
        $el.addClass(("" + (params.modifierClass) + (params.type) + "-dynamic"));
        swiper.pagination.dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }

      if (params.clickable) {
        $el.on('click', ("." + (params.bulletClass)), function onClick(e) {
          e.preventDefault();
          var index = $(this).index() * swiper.params.slidesPerGroup;
          if (swiper.params.loop) { index += swiper.loopedSlides; }
          swiper.slideTo(index);
        });
      }

      Utils.extend(swiper.pagination, {
        $el: $el,
        el: $el[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var $el = swiper.pagination.$el;

      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      if (swiper.pagination.bullets) { swiper.pagination.bullets.removeClass(params.bulletActiveClass); }
      if (params.clickable) {
        $el.off('click', ("." + (params.bulletClass)));
      }
    },
  };

  var Pagination$1 = {
    name: 'pagination',
    params: {
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: function (number) { return number; },
        formatFractionTotal: function (number) { return number; },
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        modifierClass: 'swiper-pagination-', // NEW
        currentClass: 'swiper-pagination-current',
        totalClass: 'swiper-pagination-total',
        hiddenClass: 'swiper-pagination-hidden',
        progressbarFillClass: 'swiper-pagination-progressbar-fill',
        progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
        clickableClass: 'swiper-pagination-clickable', // NEW
        lockClass: 'swiper-pagination-lock',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        pagination: {
          init: Pagination.init.bind(swiper),
          render: Pagination.render.bind(swiper),
          update: Pagination.update.bind(swiper),
          destroy: Pagination.destroy.bind(swiper),
          dynamicBulletIndex: 0,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      },
      activeIndexChange: function activeIndexChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.update();
        } else if (typeof swiper.snapIndex === 'undefined') {
          swiper.pagination.update();
        }
      },
      snapIndexChange: function snapIndexChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.update();
        }
      },
      slidesLengthChange: function slidesLengthChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      snapGridLengthChange: function snapGridLengthChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.pagination.destroy();
      },
      click: function click(e) {
        var swiper = this;
        if (
          swiper.params.pagination.el
          && swiper.params.pagination.hideOnClick
          && swiper.pagination.$el.length > 0
          && !$(e.target).hasClass(swiper.params.pagination.bulletClass)
        ) {
          swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
        }
      },
    },
  };

  var Scrollbar = {
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var progress = swiper.progress;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;
      var params = swiper.params.scrollbar;

      var newSize = dragSize;
      var newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        if (Support.transforms3d) {
          $dragEl.transform(("translate3d(" + newPos + "px, 0, 0)"));
        } else {
          $dragEl.transform(("translateX(" + newPos + "px)"));
        }
        $dragEl[0].style.width = newSize + "px";
      } else {
        if (Support.transforms3d) {
          $dragEl.transform(("translate3d(0px, " + newPos + "px, 0)"));
        } else {
          $dragEl.transform(("translateY(" + newPos + "px)"));
        }
        $dragEl[0].style.height = newSize + "px";
      }
      if (params.hide) {
        clearTimeout(swiper.scrollbar.timeout);
        $el[0].style.opacity = 1;
        swiper.scrollbar.timeout = setTimeout(function () {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1000);
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
      swiper.scrollbar.$dragEl.transition(duration);
    },
    updateSize: function updateSize() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }

      var scrollbar = swiper.scrollbar;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;

      $dragEl[0].style.width = '';
      $dragEl[0].style.height = '';
      var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

      var divider = swiper.size / swiper.virtualSize;
      var moveDivider = divider * (trackSize / swiper.size);
      var dragSize;
      if (swiper.params.scrollbar.dragSize === 'auto') {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }

      if (swiper.isHorizontal()) {
        $dragEl[0].style.width = dragSize + "px";
      } else {
        $dragEl[0].style.height = dragSize + "px";
      }

      if (divider >= 1) {
        $el[0].style.display = 'none';
      } else {
        $el[0].style.display = '';
      }
      if (swiper.params.scrollbarHide) {
        $el[0].style.opacity = 0;
      }
      Utils.extend(scrollbar, {
        trackSize: trackSize,
        divider: divider,
        moveDivider: moveDivider,
        dragSize: dragSize,
      });
      scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    },
    setDragPosition: function setDragPosition(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var $el = scrollbar.$el;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;

      var pointerPosition;
      if (swiper.isHorizontal()) {
        pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
      } else {
        pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
      }
      var positionRatio;
      positionRatio = ((pointerPosition) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }

      var position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);

      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var swiper = this;
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;
      swiper.scrollbar.isTouched = true;
      e.preventDefault();
      e.stopPropagation();

      $wrapperEl.transition(100);
      $dragEl.transition(100);
      scrollbar.setDragPosition(e);

      clearTimeout(swiper.scrollbar.dragTimeout);

      $el.transition(0);
      if (params.hide) {
        $el.css('opacity', 1);
      }
      swiper.emit('scrollbarDragStart', e);
    },
    onDragMove: function onDragMove(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;

      if (!swiper.scrollbar.isTouched) { return; }
      if (e.preventDefault) { e.preventDefault(); }
      else { e.returnValue = false; }
      scrollbar.setDragPosition(e);
      $wrapperEl.transition(0);
      $el.transition(0);
      $dragEl.transition(0);
      swiper.emit('scrollbarDragMove', e);
    },
    onDragEnd: function onDragEnd(e) {
      var swiper = this;

      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $el = scrollbar.$el;

      if (!swiper.scrollbar.isTouched) { return; }
      swiper.scrollbar.isTouched = false;
      if (params.hide) {
        clearTimeout(swiper.scrollbar.dragTimeout);
        swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
          $el.css('opacity', 0);
          $el.transition(400);
        }, 1000);
      }
      swiper.emit('scrollbarDragEnd', e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    },
    enableDraggable: function enableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    disableDraggable: function disableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var $swiperEl = swiper.$el;
      var params = swiper.params.scrollbar;

      var $el = $(params.el);
      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
        $el = $swiperEl.find(params.el);
      }

      var $dragEl = $el.find(("." + (swiper.params.scrollbar.dragClass)));
      if ($dragEl.length === 0) {
        $dragEl = $(("<div class=\"" + (swiper.params.scrollbar.dragClass) + "\"></div>"));
        $el.append($dragEl);
      }

      Utils.extend(scrollbar, {
        $el: $el,
        el: $el[0],
        $dragEl: $dragEl,
        dragEl: $dragEl[0],
      });

      if (params.draggable) {
        scrollbar.enableDraggable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.scrollbar.disableDraggable();
    },
  };

  var Scrollbar$1 = {
    name: 'scrollbar',
    params: {
      scrollbar: {
        el: null,
        dragSize: 'auto',
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: 'swiper-scrollbar-lock',
        dragClass: 'swiper-scrollbar-drag',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        scrollbar: {
          init: Scrollbar.init.bind(swiper),
          destroy: Scrollbar.destroy.bind(swiper),
          updateSize: Scrollbar.updateSize.bind(swiper),
          setTranslate: Scrollbar.setTranslate.bind(swiper),
          setTransition: Scrollbar.setTransition.bind(swiper),
          enableDraggable: Scrollbar.enableDraggable.bind(swiper),
          disableDraggable: Scrollbar.disableDraggable.bind(swiper),
          setDragPosition: Scrollbar.setDragPosition.bind(swiper),
          onDragStart: Scrollbar.onDragStart.bind(swiper),
          onDragMove: Scrollbar.onDragMove.bind(swiper),
          onDragEnd: Scrollbar.onDragEnd.bind(swiper),
          isTouched: false,
          timeout: null,
          dragTimeout: null,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.scrollbar.init();
        swiper.scrollbar.updateSize();
        swiper.scrollbar.setTranslate();
      },
      update: function update() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      resize: function resize() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        swiper.scrollbar.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        swiper.scrollbar.setTransition(duration);
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.scrollbar.destroy();
      },
    },
  };

  var Parallax = {
    setTransform: function setTransform(el, progress) {
      var swiper = this;
      var rtl = swiper.rtl;

      var $el = $(el);
      var rtlFactor = rtl ? -1 : 1;

      var p = $el.attr('data-swiper-parallax') || '0';
      var x = $el.attr('data-swiper-parallax-x');
      var y = $el.attr('data-swiper-parallax-y');
      var scale = $el.attr('data-swiper-parallax-scale');
      var opacity = $el.attr('data-swiper-parallax-opacity');

      if (x || y) {
        x = x || '0';
        y = y || '0';
      } else if (swiper.isHorizontal()) {
        x = p;
        y = '0';
      } else {
        y = p;
        x = '0';
      }

      if ((x).indexOf('%') >= 0) {
        x = (parseInt(x, 10) * progress * rtlFactor) + "%";
      } else {
        x = (x * progress * rtlFactor) + "px";
      }
      if ((y).indexOf('%') >= 0) {
        y = (parseInt(y, 10) * progress) + "%";
      } else {
        y = (y * progress) + "px";
      }

      if (typeof opacity !== 'undefined' && opacity !== null) {
        var currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
        $el[0].style.opacity = currentOpacity;
      }
      if (typeof scale === 'undefined' || scale === null) {
        $el.transform(("translate3d(" + x + ", " + y + ", 0px)"));
      } else {
        var currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
        $el.transform(("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"));
      }
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      var progress = swiper.progress;
      var snapGrid = swiper.snapGrid;
      $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
        .each(function (index, el) {
          swiper.parallax.setTransform(el, progress);
        });
      slides.each(function (slideIndex, slideEl) {
        var slideProgress = slideEl.progress;
        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
          slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
          .each(function (index, el) {
            swiper.parallax.setTransform(el, slideProgress);
          });
      });
    },
    setTransition: function setTransition(duration) {
      if ( duration === void 0 ) duration = this.params.speed;

      var swiper = this;
      var $el = swiper.$el;
      $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
        .each(function (index, parallaxEl) {
          var $parallaxEl = $(parallaxEl);
          var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) { parallaxDuration = 0; }
          $parallaxEl.transition(parallaxDuration);
        });
    },
  };

  var Parallax$1 = {
    name: 'parallax',
    params: {
      parallax: {
        enabled: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        parallax: {
          setTransform: Parallax.setTransform.bind(swiper),
          setTranslate: Parallax.setTranslate.bind(swiper),
          setTransition: Parallax.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      init: function init() {
        var swiper = this;
        if (!swiper.params.parallax) { return; }
        swiper.parallax.setTranslate();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.parallax) { return; }
        swiper.parallax.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (!swiper.params.parallax) { return; }
        swiper.parallax.setTransition(duration);
      },
    },
  };

  var Zoom = {
    // Calc Scale From Multi-touches
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) { return 1; }
      var x1 = e.targetTouches[0].pageX;
      var y1 = e.targetTouches[0].pageY;
      var x2 = e.targetTouches[1].pageX;
      var y2 = e.targetTouches[1].pageY;
      var distance = Math.sqrt((Math.pow( (x2 - x1), 2 )) + (Math.pow( (y2 - y1), 2 )));
      return distance;
    },
    // Events
    onGestureStart: function onGestureStart(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
      if (!Support.gestures) {
        if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureTouched = true;
        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$slideEl || !gesture.$slideEl.length) {
        gesture.$slideEl = $(e.target).closest('.swiper-slide');
        if (gesture.$slideEl.length === 0) { gesture.$slideEl = swiper.slides.eq(swiper.activeIndex); }
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
        gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (gesture.$imageWrapEl.length === 0) {
          gesture.$imageEl = undefined;
          return;
        }
      }
      gesture.$imageEl.transition(0);
      swiper.zoom.isScaling = true;
    },
    onGestureChange: function onGestureChange(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureMoved = true;
        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (Support.gestures) {
        zoom.scale = e.scale * zoom.currentScale;
      } else {
        zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
      }
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = (gesture.maxRatio - 1) + (Math.pow( ((zoom.scale - gesture.maxRatio) + 1), 0.5 ));
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale = (params.minRatio + 1) - (Math.pow( ((params.minRatio - zoom.scale) + 1), 0.5 ));
      }
      gesture.$imageEl.transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
    },
    onGestureEnd: function onGestureEnd(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
          return;
        }
        if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
          return;
        }
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
      zoom.currentScale = zoom.scale;
      zoom.isScaling = false;
      if (zoom.scale === 1) { gesture.$slideEl = undefined; }
    },
    onTouchStart: function onTouchStart(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (image.isTouched) { return; }
      if (Device.android) { e.preventDefault(); }
      image.isTouched = true;
      image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    },
    onTouchMove: function onTouchMove(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      swiper.allowClick = false;
      if (!image.isTouched || !gesture.$slideEl) { return; }

      if (!image.isMoved) {
        image.width = gesture.$imageEl[0].offsetWidth;
        image.height = gesture.$imageEl[0].offsetHeight;
        image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
        image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
        gesture.$imageWrapEl.transition(0);
        if (swiper.rtl) {
          image.startX = -image.startX;
          image.startY = -image.startY;
        }
      }
      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;

      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) { return; }

      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;

      image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

      if (!image.isMoved && !zoom.isScaling) {
        if (
          swiper.isHorizontal()
          && (
            (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x)
            || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
          )
        ) {
          image.isTouched = false;
          return;
        } if (
          !swiper.isHorizontal()
          && (
            (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y)
            || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
          )
        ) {
          image.isTouched = false;
          return;
        }
      }
      e.preventDefault();
      e.stopPropagation();

      image.isMoved = true;
      image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
      image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

      if (image.currentX < image.minX) {
        image.currentX = (image.minX + 1) - (Math.pow( ((image.minX - image.currentX) + 1), 0.8 ));
      }
      if (image.currentX > image.maxX) {
        image.currentX = (image.maxX - 1) + (Math.pow( ((image.currentX - image.maxX) + 1), 0.8 ));
      }

      if (image.currentY < image.minY) {
        image.currentY = (image.minY + 1) - (Math.pow( ((image.minY - image.currentY) + 1), 0.8 ));
      }
      if (image.currentY > image.maxY) {
        image.currentY = (image.maxY - 1) + (Math.pow( ((image.currentY - image.maxY) + 1), 0.8 ));
      }

      // Velocity
      if (!velocity.prevPositionX) { velocity.prevPositionX = image.touchesCurrent.x; }
      if (!velocity.prevPositionY) { velocity.prevPositionY = image.touchesCurrent.y; }
      if (!velocity.prevTime) { velocity.prevTime = Date.now(); }
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) { velocity.x = 0; }
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) { velocity.y = 0; }
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();

      gesture.$imageWrapEl.transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
    },
    onTouchEnd: function onTouchEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      var momentumDurationX = 300;
      var momentumDurationY = 300;
      var momentumDistanceX = velocity.x * momentumDurationX;
      var newPositionX = image.currentX + momentumDistanceX;
      var momentumDistanceY = velocity.y * momentumDurationY;
      var newPositionY = image.currentY + momentumDistanceY;

      // Fix duration
      if (velocity.x !== 0) { momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x); }
      if (velocity.y !== 0) { momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y); }
      var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

      image.currentX = newPositionX;
      image.currentY = newPositionY;

      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

      gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
    },
    onTransitionEnd: function onTransitionEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');

        zoom.scale = 1;
        zoom.currentScale = 1;

        gesture.$slideEl = undefined;
        gesture.$imageEl = undefined;
        gesture.$imageWrapEl = undefined;
      }
    },
    // Toggle Zoom
    toggle: function toggle(e) {
      var swiper = this;
      var zoom = swiper.zoom;

      if (zoom.scale && zoom.scale !== 1) {
        // Zoom Out
        zoom.out();
      } else {
        // Zoom In
        zoom.in(e);
      }
    },
    in: function in$1(e) {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

      gesture.$slideEl.addClass(("" + (params.zoomedSlideClass)));

      var touchX;
      var touchY;
      var offsetX;
      var offsetY;
      var diffX;
      var diffY;
      var translateX;
      var translateY;
      var imageWidth;
      var imageHeight;
      var scaledWidth;
      var scaledHeight;
      var translateMinX;
      var translateMinY;
      var translateMaxX;
      var translateMaxY;
      var slideWidth;
      var slideHeight;

      if (typeof image.touchesStart.x === 'undefined' && e) {
        touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
        touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }

      zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (e) {
        slideWidth = gesture.$slideEl[0].offsetWidth;
        slideHeight = gesture.$slideEl[0].offsetHeight;
        offsetX = gesture.$slideEl.offset().left;
        offsetY = gesture.$slideEl.offset().top;
        diffX = (offsetX + (slideWidth / 2)) - touchX;
        diffY = (offsetY + (slideHeight / 2)) - touchY;

        imageWidth = gesture.$imageEl[0].offsetWidth;
        imageHeight = gesture.$imageEl[0].offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;

        translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
        translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;

        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;

        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }

        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      gesture.$imageWrapEl.transition(300).transform(("translate3d(" + translateX + "px, " + translateY + "px,0)"));
      gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
    },
    out: function out() {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
      gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
      gesture.$slideEl.removeClass(("" + (params.zoomedSlideClass)));
      gesture.$slideEl = undefined;
    },
    // Attach/Detach Events
    enable: function enable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (zoom.enabled) { return; }
      zoom.enabled = true;

      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
      }

      // Move image
      swiper.$wrapperEl.on(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
    },
    disable: function disable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (!zoom.enabled) { return; }

      swiper.zoom.enabled = false;

      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
      }

      // Move image
      swiper.$wrapperEl.off(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
    },
  };

  var Zoom$1 = {
    name: 'zoom',
    params: {
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: 'swiper-zoom-container',
        zoomedSlideClass: 'swiper-slide-zoomed',
      },
    },
    create: function create() {
      var swiper = this;
      var zoom = {
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3,
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {},
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined,
        },
      };

      ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function (methodName) {
        zoom[methodName] = Zoom[methodName].bind(swiper);
      });
      Utils.extend(swiper, {
        zoom: zoom,
      });

      var scale = 1;
      Object.defineProperty(swiper.zoom, 'scale', {
        get: function get() {
          return scale;
        },
        set: function set(value) {
          if (scale !== value) {
            var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
            var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
            swiper.emit('zoomChange', value, imageEl, slideEl);
          }
          scale = value;
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.zoom.enabled) {
          swiper.zoom.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.zoom.disable();
      },
      touchStart: function touchStart(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) { return; }
        swiper.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) { return; }
        swiper.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(e) {
        var swiper = this;
        if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
          swiper.zoom.toggle(e);
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          swiper.zoom.onTransitionEnd();
        }
      },
    },
  };

  var Lazy = {
    loadInSlide: function loadInSlide(index, loadInDuplicate) {
      if ( loadInDuplicate === void 0 ) loadInDuplicate = true;

      var swiper = this;
      var params = swiper.params.lazy;
      if (typeof index === 'undefined') { return; }
      if (swiper.slides.length === 0) { return; }
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      var $slideEl = isVirtual
        ? swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]"))
        : swiper.slides.eq(index);

      var $images = $slideEl.find(("." + (params.elementClass) + ":not(." + (params.loadedClass) + "):not(." + (params.loadingClass) + ")"));
      if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
        $images = $images.add($slideEl[0]);
      }
      if ($images.length === 0) { return; }

      $images.each(function (imageIndex, imageEl) {
        var $imageEl = $(imageEl);
        $imageEl.addClass(params.loadingClass);

        var background = $imageEl.attr('data-background');
        var src = $imageEl.attr('data-src');
        var srcset = $imageEl.attr('data-srcset');
        var sizes = $imageEl.attr('data-sizes');

        swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, function () {
          if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) { return; }
          if (background) {
            $imageEl.css('background-image', ("url(\"" + background + "\")"));
            $imageEl.removeAttr('data-background');
          } else {
            if (srcset) {
              $imageEl.attr('srcset', srcset);
              $imageEl.removeAttr('data-srcset');
            }
            if (sizes) {
              $imageEl.attr('sizes', sizes);
              $imageEl.removeAttr('data-sizes');
            }
            if (src) {
              $imageEl.attr('src', src);
              $imageEl.removeAttr('data-src');
            }
          }

          $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
          $slideEl.find(("." + (params.preloaderClass))).remove();
          if (swiper.params.loop && loadInDuplicate) {
            var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
              var originalSlide = swiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + (swiper.params.slideDuplicateClass) + ")"));
              swiper.lazy.loadInSlide(originalSlide.index(), false);
            } else {
              var duplicatedSlide = swiper.$wrapperEl.children(("." + (swiper.params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]"));
              swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
            }
          }
          swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
        });

        swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
      });
    },
    load: function load() {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl;
      var swiperParams = swiper.params;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
      var params = swiperParams.lazy;

      var slidesPerView = swiperParams.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = 0;
      }

      function slideExist(index) {
        if (isVirtual) {
          if ($wrapperEl.children(("." + (swiperParams.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")).length) {
            return true;
          }
        } else if (slides[index]) { return true; }
        return false;
      }
      function slideIndex(slideEl) {
        if (isVirtual) {
          return $(slideEl).attr('data-swiper-slide-index');
        }
        return $(slideEl).index();
      }

      if (!swiper.lazy.initialImageLoaded) { swiper.lazy.initialImageLoaded = true; }
      if (swiper.params.watchSlidesVisibility) {
        $wrapperEl.children(("." + (swiperParams.slideVisibleClass))).each(function (elIndex, slideEl) {
          var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
          swiper.lazy.loadInSlide(index);
        });
      } else if (slidesPerView > 1) {
        for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) { swiper.lazy.loadInSlide(i); }
        }
      } else {
        swiper.lazy.loadInSlide(activeIndex);
      }
      if (params.loadPrevNext) {
        if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
          var amount = params.loadPrevNextAmount;
          var spv = slidesPerView;
          var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
          var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
          // Next Slides
          for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
            if (slideExist(i$1)) { swiper.lazy.loadInSlide(i$1); }
          }
          // Prev Slides
          for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
            if (slideExist(i$2)) { swiper.lazy.loadInSlide(i$2); }
          }
        } else {
          var nextSlide = $wrapperEl.children(("." + (swiperParams.slideNextClass)));
          if (nextSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(nextSlide)); }

          var prevSlide = $wrapperEl.children(("." + (swiperParams.slidePrevClass)));
          if (prevSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(prevSlide)); }
        }
      }
    },
  };

  var Lazy$1 = {
    name: 'lazy',
    params: {
      lazy: {
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,

        elementClass: 'swiper-lazy',
        loadingClass: 'swiper-lazy-loading',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        lazy: {
          initialImageLoaded: false,
          load: Lazy.load.bind(swiper),
          loadInSlide: Lazy.loadInSlide.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
          swiper.params.preloadImages = false;
        }
      },
      init: function init() {
        var swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
          swiper.lazy.load();
        }
      },
      scroll: function scroll() {
        var swiper = this;
        if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
          swiper.lazy.load();
        }
      },
      resize: function resize() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      scrollbarDragMove: function scrollbarDragMove() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      transitionStart: function transitionStart() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
            swiper.lazy.load();
          }
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
          swiper.lazy.load();
        }
      },
    },
  };

  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

  var Controller = {
    LinearSpline: function LinearSpline(x, y) {
      var binarySearch = (function search() {
        var maxIndex;
        var minIndex;
        var guess;
        return function (array, val) {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      }());
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1;
      // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.
      var i1;
      var i3;

      this.interpolate = function interpolate(x2) {
        if (!x2) { return 0; }

        // Get the indexes of x1 and x3 (the array indexes before and after given x2):
        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1;

        // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
        return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
      };
      return this;
    },
    // xxx: for now i will just save one spline function to to
    getInterpolateFunction: function getInterpolateFunction(c) {
      var swiper = this;
      if (!swiper.controller.spline) {
        swiper.controller.spline = swiper.params.loop
          ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
          : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
      }
    },
    setTranslate: function setTranslate(setTranslate$1, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var multiplier;
      var controlledTranslate;
      function setControlledTranslate(c) {
        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
        if (swiper.params.controller.by === 'slide') {
          swiper.controller.getInterpolateFunction(c);
          // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out
          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
        }

        if (!controlledTranslate || swiper.params.controller.by === 'container') {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
        }

        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (var i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    },
    setTransition: function setTransition(duration, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var i;
      function setControlledTransition(c) {
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          if (c.params.autoHeight) {
            Utils.nextTick(function () {
              c.updateAutoHeight();
            });
          }
          c.$wrapperEl.transitionEnd(function () {
            if (!controlled) { return; }
            if (c.params.loop && swiper.params.controller.by === 'slide') {
              c.loopFix();
            }
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    },
  };
  var Controller$1 = {
    name: 'controller',
    params: {
      controller: {
        control: undefined,
        inverse: false,
        by: 'slide', // or 'container'
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        controller: {
          control: swiper.params.controller.control,
          getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
          setTranslate: Controller.setTranslate.bind(swiper),
          setTransition: Controller.setTransition.bind(swiper),
        },
      });
    },
    on: {
      update: function update() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      setTranslate: function setTranslate(translate, byController) {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        swiper.controller.setTranslate(translate, byController);
      },
      setTransition: function setTransition(duration, byController) {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        swiper.controller.setTransition(duration, byController);
      },
    },
  };

  var a11y = {
    makeElFocusable: function makeElFocusable($el) {
      $el.attr('tabIndex', '0');
      return $el;
    },
    addElRole: function addElRole($el, role) {
      $el.attr('role', role);
      return $el;
    },
    addElLabel: function addElLabel($el, label) {
      $el.attr('aria-label', label);
      return $el;
    },
    disableEl: function disableEl($el) {
      $el.attr('aria-disabled', true);
      return $el;
    },
    enableEl: function enableEl($el) {
      $el.attr('aria-disabled', false);
      return $el;
    },
    onEnterKey: function onEnterKey(e) {
      var swiper = this;
      var params = swiper.params.a11y;
      if (e.keyCode !== 13) { return; }
      var $targetEl = $(e.target);
      if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          swiper.a11y.notify(params.lastSlideMessage);
        } else {
          swiper.a11y.notify(params.nextSlideMessage);
        }
      }
      if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          swiper.a11y.notify(params.firstSlideMessage);
        } else {
          swiper.a11y.notify(params.prevSlideMessage);
        }
      }
      if (swiper.pagination && $targetEl.is(("." + (swiper.params.pagination.bulletClass)))) {
        $targetEl[0].click();
      }
    },
    notify: function notify(message) {
      var swiper = this;
      var notification = swiper.a11y.liveRegion;
      if (notification.length === 0) { return; }
      notification.html('');
      notification.html(message);
    },
    updateNavigation: function updateNavigation() {
      var swiper = this;

      if (swiper.params.loop) { return; }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          swiper.a11y.disableEl($prevEl);
        } else {
          swiper.a11y.enableEl($prevEl);
        }
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          swiper.a11y.disableEl($nextEl);
        } else {
          swiper.a11y.enableEl($nextEl);
        }
      }
    },
    updatePagination: function updatePagination() {
      var swiper = this;
      var params = swiper.params.a11y;
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
          var $bulletEl = $(bulletEl);
          swiper.a11y.makeElFocusable($bulletEl);
          swiper.a11y.addElRole($bulletEl, 'button');
          swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
        });
      }
    },
    init: function init() {
      var swiper = this;

      swiper.$el.append(swiper.a11y.liveRegion);

      // Navigation
      var params = swiper.params.a11y;
      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        swiper.a11y.makeElFocusable($nextEl);
        swiper.a11y.addElRole($nextEl, 'button');
        swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
        $nextEl.on('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        swiper.a11y.makeElFocusable($prevEl);
        swiper.a11y.addElRole($prevEl, 'button');
        swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
        $prevEl.on('keydown', swiper.a11y.onEnterKey);
      }

      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.on('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) { swiper.a11y.liveRegion.remove(); }

      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        $nextEl.off('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        $prevEl.off('keydown', swiper.a11y.onEnterKey);
      }

      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.off('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
      }
    },
  };
  var A11y = {
    name: 'a11y',
    params: {
      a11y: {
        enabled: true,
        notificationClass: 'swiper-notification',
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        a11y: {
          liveRegion: $(("<span class=\"" + (swiper.params.a11y.notificationClass) + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")),
        },
      });
      Object.keys(a11y).forEach(function (methodName) {
        swiper.a11y[methodName] = a11y[methodName].bind(swiper);
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.init();
        swiper.a11y.updateNavigation();
      },
      toEdge: function toEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updateNavigation();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updatePagination();
      },
      destroy: function destroy() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.destroy();
      },
    },
  };

  var History = {
    init: function init() {
      var swiper = this;
      if (!swiper.params.history) { return; }
      if (!win.history || !win.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      var history = swiper.history;
      history.initialized = true;
      history.paths = History.getPathValues();
      if (!history.paths.key && !history.paths.value) { return; }
      history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
      if (!swiper.params.history.replaceState) {
        win.addEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (!swiper.params.history.replaceState) {
        win.removeEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    setHistoryPopState: function setHistoryPopState() {
      var swiper = this;
      swiper.history.paths = History.getPathValues();
      swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
    },
    getPathValues: function getPathValues() {
      var pathArray = win.location.pathname.slice(1).split('/').filter(function (part) { return part !== ''; });
      var total = pathArray.length;
      var key = pathArray[total - 2];
      var value = pathArray[total - 1];
      return { key: key, value: value };
    },
    setHistory: function setHistory(key, index) {
      var swiper = this;
      if (!swiper.history.initialized || !swiper.params.history.enabled) { return; }
      var slide = swiper.slides.eq(index);
      var value = History.slugify(slide.attr('data-history'));
      if (!win.location.pathname.includes(key)) {
        value = key + "/" + value;
      }
      var currentState = win.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        win.history.replaceState({ value: value }, null, value);
      } else {
        win.history.pushState({ value: value }, null, value);
      }
    },
    slugify: function slugify(text) {
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    },
    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
      var swiper = this;
      if (value) {
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHistory = History.slugify(slide.attr('data-history'));
          if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    },
  };

  var History$1 = {
    name: 'history',
    params: {
      history: {
        enabled: false,
        replaceState: false,
        key: 'slides',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        history: {
          init: History.init.bind(swiper),
          setHistory: History.setHistory.bind(swiper),
          setHistoryPopState: History.setHistoryPopState.bind(swiper),
          scrollToSlide: History.scrollToSlide.bind(swiper),
          destroy: History.destroy.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.history.initialized) {
          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      },
    },
  };

  var HashNavigation = {
    onHashCange: function onHashCange() {
      var swiper = this;
      var newHash = doc.location.hash.replace('#', '');
      var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
      if (newHash !== activeSlideHash) {
        var newIndex = swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-hash=\"" + newHash + "\"]")).index();
        if (typeof newIndex === 'undefined') { return; }
        swiper.slideTo(newIndex);
      }
    },
    setHash: function setHash() {
      var swiper = this;
      if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) { return; }
      if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
        win.history.replaceState(null, null, (("#" + (swiper.slides.eq(swiper.activeIndex).attr('data-hash'))) || ''));
      } else {
        var slide = swiper.slides.eq(swiper.activeIndex);
        var hash = slide.attr('data-hash') || slide.attr('data-history');
        doc.location.hash = hash || '';
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) { return; }
      swiper.hashNavigation.initialized = true;
      var hash = doc.location.hash.replace('#', '');
      if (hash) {
        var speed = 0;
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHash = slide.attr('data-hash') || slide.attr('data-history');
          if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
          }
        }
      }
      if (swiper.params.hashNavigation.watchState) {
        $(win).on('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.params.hashNavigation.watchState) {
        $(win).off('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
  };
  var HashNavigation$1 = {
    name: 'hash-navigation',
    params: {
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        hashNavigation: {
          initialized: false,
          init: HashNavigation.init.bind(swiper),
          destroy: HashNavigation.destroy.bind(swiper),
          setHash: HashNavigation.setHash.bind(swiper),
          onHashCange: HashNavigation.onHashCange.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.hashNavigation.initialized) {
          swiper.hashNavigation.setHash();
        }
      },
    },
  };

  /* eslint no-underscore-dangle: "off" */

  var Autoplay = {
    run: function run() {
      var swiper = this;
      var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      var delay = swiper.params.autoplay.delay;
      if ($activeSlideEl.attr('data-swiper-autoplay')) {
        delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
      }
      swiper.autoplay.timeout = Utils.nextTick(function () {
        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.isBeginning) {
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else {
            swiper.autoplay.stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isEnd) {
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      }, delay);
    },
    start: function start() {
      var swiper = this;
      if (typeof swiper.autoplay.timeout !== 'undefined') { return false; }
      if (swiper.autoplay.running) { return false; }
      swiper.autoplay.running = true;
      swiper.emit('autoplayStart');
      swiper.autoplay.run();
      return true;
    },
    stop: function stop() {
      var swiper = this;
      if (!swiper.autoplay.running) { return false; }
      if (typeof swiper.autoplay.timeout === 'undefined') { return false; }

      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = undefined;
      }
      swiper.autoplay.running = false;
      swiper.emit('autoplayStop');
      return true;
    },
    pause: function pause(speed) {
      var swiper = this;
      if (!swiper.autoplay.running) { return; }
      if (swiper.autoplay.paused) { return; }
      if (swiper.autoplay.timeout) { clearTimeout(swiper.autoplay.timeout); }
      swiper.autoplay.paused = true;
      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        swiper.autoplay.run();
      } else {
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
      }
    },
  };

  var Autoplay$1 = {
    name: 'autoplay',
    params: {
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        autoplay: {
          running: false,
          paused: false,
          run: Autoplay.run.bind(swiper),
          start: Autoplay.start.bind(swiper),
          stop: Autoplay.stop.bind(swiper),
          pause: Autoplay.pause.bind(swiper),
          onTransitionEnd: function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) { return; }
            if (e.target !== this) { return; }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            swiper.autoplay.paused = false;
            if (!swiper.autoplay.running) {
              swiper.autoplay.stop();
            } else {
              swiper.autoplay.run();
            }
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.autoplay.enabled) {
          swiper.autoplay.start();
        }
      },
      beforeTransitionStart: function beforeTransitionStart(speed, internal) {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            swiper.autoplay.stop();
          }
        }
      },
      sliderFirstMove: function sliderFirstMove() {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.pause();
          }
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.autoplay.running) {
          swiper.autoplay.stop();
        }
      },
    },
  };

  var Fade = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = swiper.slides.eq(i);
        var offset = $slideEl[0].swiperSlideOffset;
        var tx = -offset;
        if (!swiper.params.virtualTranslate) { tx -= swiper.translate; }
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        var slideOpacity = swiper.params.fadeEffect.crossFade
          ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
          : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl
          .css({
            opacity: slideOpacity,
          })
          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px)"));
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      slides.transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        slides.transitionEnd(function () {
          if (eventTriggered) { return; }
          if (!swiper || swiper.destroyed) { return; }
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFade = {
    name: 'effect-fade',
    params: {
      fadeEffect: {
        crossFade: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        fadeEffect: {
          setTranslate: Fade.setTranslate.bind(swiper),
          setTransition: Fade.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "fade"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.fadeEffect.setTransition(duration);
      },
    },
  };

  var Cube = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var rtl = swiper.rtlTranslate;
      var swiperSize = swiper.size;
      var params = swiper.params.cubeEffect;
      var isHorizontal = swiper.isHorizontal();
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var wrapperRotate = 0;
      var $cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }
          $cubeShadowEl.css({ height: (swiperWidth + "px") });
        } else {
          $cubeShadowEl = $el.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
        }
        var slideAngle = slideIndex * 90;
        var round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        var tx = 0;
        var ty = 0;
        var tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + (round * 4 * swiperSize);
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = (3 * swiperSize) + (swiperSize * 4 * round);
        }
        if (rtl) {
          tx = -tx;
        }

        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }

        var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
        if (progress <= 1 && progress > -1) {
          wrapperRotate = (slideIndex * 90) + (progress * 90);
          if (rtl) { wrapperRotate = (-slideIndex * 90) - (progress * 90); }
        }
        $slideEl.transform(transform);
        if (params.slideShadows) {
          // Set shadows
          var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
        }
      }
      $wrapperEl.css({
        '-webkit-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        '-moz-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        '-ms-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        'transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
      });

      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform(("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + (-swiperWidth / 2) + "px) rotateX(90deg) rotateZ(0deg) scale(" + (params.shadowScale) + ")"));
        } else {
          var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
          var multiplier = 1.5 - (
            (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
            + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
          );
          var scale1 = params.shadowScale;
          var scale2 = params.shadowScale / multiplier;
          var offset = params.shadowOffset;
          $cubeShadowEl.transform(("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset) + "px, " + (-swiperHeight / 2 / scale2) + "px) rotateX(-90deg)"));
        }
      }
      var zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
      $wrapperEl
        .transform(("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)"));
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find('.swiper-cube-shadow').transition(duration);
      }
    },
  };

  var EffectCube = {
    name: 'effect-cube',
    params: {
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        cubeEffect: {
          setTranslate: Cube.setTranslate.bind(swiper),
          setTransition: Cube.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "cube"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.cubeEffect.setTransition(duration);
      },
    },
  };

  var Flip = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      var rtl = swiper.rtlTranslate;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var progress = $slideEl[0].progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }
        var offset = $slideEl[0].swiperSlideOffset;
        var rotate = -180 * progress;
        var rotateY = rotate;
        var rotateX = 0;
        var tx = -offset;
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }

        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

        if (swiper.params.flipEffect.slideShadows) {
          // Set shadows
          var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>"));
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
        }
        $slideEl
          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"));
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var $wrapperEl = swiper.$wrapperEl;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        // eslint-disable-next-line
        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
          if (eventTriggered) { return; }
          if (!swiper || swiper.destroyed) { return; }
          // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFlip = {
    name: 'effect-flip',
    params: {
      flipEffect: {
        slideShadows: true,
        limitRotation: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        flipEffect: {
          setTranslate: Flip.setTranslate.bind(swiper),
          setTransition: Flip.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "flip"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.flipEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.flipEffect.setTransition(duration);
      },
    },
  };

  var Coverflow = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      var slidesSizesGrid = swiper.slidesSizesGrid;
      var params = swiper.params.coverflowEffect;
      var isHorizontal = swiper.isHorizontal();
      var transform = swiper.translate;
      var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
      var rotate = isHorizontal ? params.rotate : -params.rotate;
      var translate = params.depth;
      // Each slide offset from center
      for (var i = 0, length = slides.length; i < length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideSize = slidesSizesGrid[i];
        var slideOffset = $slideEl[0].swiperSlideOffset;
        var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        var translateZ = -translate * Math.abs(offsetMultiplier);

        var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
        var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

        // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) { translateX = 0; }
        if (Math.abs(translateY) < 0.001) { translateY = 0; }
        if (Math.abs(translateZ) < 0.001) { translateZ = 0; }
        if (Math.abs(rotateY) < 0.001) { rotateY = 0; }
        if (Math.abs(rotateX) < 0.001) { rotateX = 0; }

        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

        $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
            $slideEl.append($shadowBeforeEl);
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append($shadowAfterEl);
          }
          if ($shadowBeforeEl.length) { $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0; }
          if ($shadowAfterEl.length) { $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0; }
        }
      }

      // Set correct perspective for IE10
      if (Support.pointerEvents || Support.prefixedPointerEvents) {
        var ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = center + "px 50%";
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      swiper.slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
    },
  };

  var EffectCoverflow = {
    name: 'effect-coverflow',
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        coverflowEffect: {
          setTranslate: Coverflow.setTranslate.bind(swiper),
          setTransition: Coverflow.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }

        swiper.classNames.push(((swiper.params.containerModifierClass) + "coverflow"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }
        swiper.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }
        swiper.coverflowEffect.setTransition(duration);
      },
    },
  };

  var Thumbs = {
    init: function init() {
      var swiper = this;
      var ref = swiper.params;
      var thumbsParams = ref.thumbs;
      var SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Utils.extend(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
        Utils.extend(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
      } else if (Utils.isObject(thumbsParams.swiper)) {
        swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        }));
        swiper.thumbs.swiperCreated = true;
      }
      swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
      swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
    },
    onThumbClick: function onThumbClick() {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) { return; }
      var clickedIndex = thumbsSwiper.clickedIndex;
      var clickedSlide = thumbsSwiper.clickedSlide;
      if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) { return; }
      if (typeof clickedIndex === 'undefined' || clickedIndex === null) { return; }
      var slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        var currentIndex = swiper.activeIndex;
        if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
          swiper.loopFix();
          // eslint-disable-next-line
          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          currentIndex = swiper.activeIndex;
        }
        var prevIndex = swiper.slides.eq(currentIndex).prevAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
        var nextIndex = swiper.slides.eq(currentIndex).nextAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
        if (typeof prevIndex === 'undefined') { slideToIndex = nextIndex; }
        else if (typeof nextIndex === 'undefined') { slideToIndex = prevIndex; }
        else if (nextIndex - currentIndex < currentIndex - prevIndex) { slideToIndex = nextIndex; }
        else { slideToIndex = prevIndex; }
      }
      swiper.slideTo(slideToIndex);
    },
    update: function update(initial) {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) { return; }

      var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto'
        ? thumbsSwiper.slidesPerViewDynamic()
        : thumbsSwiper.params.slidesPerView;

      if (swiper.realIndex !== thumbsSwiper.realIndex) {
        var currentThumbsIndex = thumbsSwiper.activeIndex;
        var newThumbsIndex;
        if (thumbsSwiper.params.loop) {
          if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
            thumbsSwiper.loopFix();
            // eslint-disable-next-line
            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
            currentThumbsIndex = thumbsSwiper.activeIndex;
          }
          // Find actual thumbs index to slide to
          var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
          var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
          if (typeof prevThumbsIndex === 'undefined') { newThumbsIndex = nextThumbsIndex; }
          else if (typeof nextThumbsIndex === 'undefined') { newThumbsIndex = prevThumbsIndex; }
          else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = currentThumbsIndex; }
          else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = nextThumbsIndex; }
          else { newThumbsIndex = prevThumbsIndex; }
        } else {
          newThumbsIndex = swiper.realIndex;
        }
        if (thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - slidesPerView + 1;
          }
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      }

      // Activate thumbs
      var thumbsToActivate = 1;
      var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }

      thumbsSwiper.slides.removeClass(thumbActiveClass);
      if (thumbsSwiper.params.loop) {
        for (var i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]")).addClass(thumbActiveClass);
        }
      } else {
        for (var i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
          thumbsSwiper.slides.eq(swiper.realIndex + i$1).addClass(thumbActiveClass);
        }
      }
    },
  };
  var Thumbs$1 = {
    name: 'thumbs',
    params: {
      thumbs: {
        swiper: null,
        slideThumbActiveClass: 'swiper-slide-thumb-active',
        thumbsContainerClass: 'swiper-container-thumbs',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        thumbs: {
          swiper: null,
          init: Thumbs.init.bind(swiper),
          update: Thumbs.update.bind(swiper),
          onThumbClick: Thumbs.onThumbClick.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        var ref = swiper.params;
        var thumbs = ref.thumbs;
        if (!thumbs || !thumbs.swiper) { return; }
        swiper.thumbs.init();
        swiper.thumbs.update(true);
      },
      slideChange: function slideChange() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      update: function update() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) { return; }
        thumbsSwiper.setTransition(duration);
      },
      beforeDestroy: function beforeDestroy() {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) { return; }
        if (swiper.thumbs.swiperCreated && thumbsSwiper) {
          thumbsSwiper.destroy();
        }
      },
    },
  };

  // Swiper Class

  var components = [
    Device$1,
    Support$1,
    Browser$1,
    Resize,
    Observer$1,
    Virtual$1,
    Keyboard$1,
    Mousewheel$1,
    Navigation$1,
    Pagination$1,
    Scrollbar$1,
    Parallax$1,
    Zoom$1,
    Lazy$1,
    Controller$1,
    A11y,
    History$1,
    HashNavigation$1,
    Autoplay$1,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow,
    Thumbs$1
  ];

  if (typeof Swiper.use === 'undefined') {
    Swiper.use = Swiper.Class.use;
    Swiper.installModule = Swiper.Class.installModule;
  }

  Swiper.use(components);

  return Swiper;

})));


/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */
var dat=dat||{};dat.gui=dat.gui||{};dat.utils=dat.utils||{};dat.controllers=dat.controllers||{};dat.dom=dat.dom||{};dat.color=dat.color||{};dat.utils.css=function(){return{load:function(e,a){var a=a||document,c=a.createElement("link");c.type="text/css";c.rel="stylesheet";c.href=e;a.getElementsByTagName("head")[0].appendChild(c)},inject:function(e,a){var a=a||document,c=document.createElement("style");c.type="text/css";c.innerHTML=e;a.getElementsByTagName("head")[0].appendChild(c)}}}();
dat.utils.common=function(){var e=Array.prototype.forEach,a=Array.prototype.slice;return{BREAK:{},extend:function(c){this.each(a.call(arguments,1),function(a){for(var f in a)this.isUndefined(a[f])||(c[f]=a[f])},this);return c},defaults:function(c){this.each(a.call(arguments,1),function(a){for(var f in a)this.isUndefined(c[f])&&(c[f]=a[f])},this);return c},compose:function(){var c=a.call(arguments);return function(){for(var d=a.call(arguments),f=c.length-1;f>=0;f--)d=[c[f].apply(this,d)];return d[0]}},
each:function(a,d,f){if(e&&a.forEach===e)a.forEach(d,f);else if(a.length===a.length+0)for(var b=0,n=a.length;b<n;b++){if(b in a&&d.call(f,a[b],b)===this.BREAK)break}else for(b in a)if(d.call(f,a[b],b)===this.BREAK)break},defer:function(a){setTimeout(a,0)},toArray:function(c){return c.toArray?c.toArray():a.call(c)},isUndefined:function(a){return a===void 0},isNull:function(a){return a===null},isNaN:function(a){return a!==a},isArray:Array.isArray||function(a){return a.constructor===Array},isObject:function(a){return a===
Object(a)},isNumber:function(a){return a===a+0},isString:function(a){return a===a+""},isBoolean:function(a){return a===false||a===true},isFunction:function(a){return Object.prototype.toString.call(a)==="[object Function]"}}}();
dat.controllers.Controller=function(e){var a=function(a,d){this.initialValue=a[d];this.domElement=document.createElement("div");this.object=a;this.property=d;this.__onFinishChange=this.__onChange=void 0};e.extend(a.prototype,{onChange:function(a){this.__onChange=a;return this},onFinishChange:function(a){this.__onFinishChange=a;return this},setValue:function(a){this.object[this.property]=a;this.__onChange&&this.__onChange.call(this,a);this.updateDisplay();return this},getValue:function(){return this.object[this.property]},
updateDisplay:function(){return this},isModified:function(){return this.initialValue!==this.getValue()}});return a}(dat.utils.common);
dat.dom.dom=function(e){function a(b){if(b==="0"||e.isUndefined(b))return 0;b=b.match(d);return!e.isNull(b)?parseFloat(b[1]):0}var c={};e.each({HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},function(b,a){e.each(b,function(b){c[b]=a})});var d=/(\d+(\.\d+)?)px/,f={makeSelectable:function(b,a){if(!(b===void 0||b.style===void 0))b.onselectstart=a?function(){return false}:function(){},b.style.MozUserSelect=a?"auto":"none",b.style.KhtmlUserSelect=
a?"auto":"none",b.unselectable=a?"on":"off"},makeFullscreen:function(b,a,d){e.isUndefined(a)&&(a=true);e.isUndefined(d)&&(d=true);b.style.position="absolute";if(a)b.style.left=0,b.style.right=0;if(d)b.style.top=0,b.style.bottom=0},fakeEvent:function(b,a,d,f){var d=d||{},m=c[a];if(!m)throw Error("Event type "+a+" not supported.");var l=document.createEvent(m);switch(m){case "MouseEvents":l.initMouseEvent(a,d.bubbles||false,d.cancelable||true,window,d.clickCount||1,0,0,d.x||d.clientX||0,d.y||d.clientY||
0,false,false,false,false,0,null);break;case "KeyboardEvents":m=l.initKeyboardEvent||l.initKeyEvent;e.defaults(d,{cancelable:true,ctrlKey:false,altKey:false,shiftKey:false,metaKey:false,keyCode:void 0,charCode:void 0});m(a,d.bubbles||false,d.cancelable,window,d.ctrlKey,d.altKey,d.shiftKey,d.metaKey,d.keyCode,d.charCode);break;default:l.initEvent(a,d.bubbles||false,d.cancelable||true)}e.defaults(l,f);b.dispatchEvent(l)},bind:function(b,a,d,c){b.addEventListener?b.addEventListener(a,d,c||false):b.attachEvent&&
b.attachEvent("on"+a,d);return f},unbind:function(b,a,d,c){b.removeEventListener?b.removeEventListener(a,d,c||false):b.detachEvent&&b.detachEvent("on"+a,d);return f},addClass:function(b,a){if(b.className===void 0)b.className=a;else if(b.className!==a){var d=b.className.split(/ +/);if(d.indexOf(a)==-1)d.push(a),b.className=d.join(" ").replace(/^\s+/,"").replace(/\s+$/,"")}return f},removeClass:function(b,a){if(a){if(b.className!==void 0)if(b.className===a)b.removeAttribute("class");else{var d=b.className.split(/ +/),
c=d.indexOf(a);if(c!=-1)d.splice(c,1),b.className=d.join(" ")}}else b.className=void 0;return f},hasClass:function(a,d){return RegExp("(?:^|\\s+)"+d+"(?:\\s+|$)").test(a.className)||false},getWidth:function(b){b=getComputedStyle(b);return a(b["border-left-width"])+a(b["border-right-width"])+a(b["padding-left"])+a(b["padding-right"])+a(b.width)},getHeight:function(b){b=getComputedStyle(b);return a(b["border-top-width"])+a(b["border-bottom-width"])+a(b["padding-top"])+a(b["padding-bottom"])+a(b.height)},
getOffset:function(a){var d={left:0,top:0};if(a.offsetParent){do d.left+=a.offsetLeft,d.top+=a.offsetTop;while(a=a.offsetParent)}return d},isActive:function(a){return a===document.activeElement&&(a.type||a.href)}};return f}(dat.utils.common);
dat.controllers.OptionController=function(e,a,c){var d=function(f,b,e){d.superclass.call(this,f,b);var h=this;this.__select=document.createElement("select");if(c.isArray(e)){var j={};c.each(e,function(a){j[a]=a});e=j}c.each(e,function(a,b){var d=document.createElement("option");d.innerHTML=b;d.setAttribute("value",a);h.__select.appendChild(d)});this.updateDisplay();a.bind(this.__select,"change",function(){h.setValue(this.options[this.selectedIndex].value)});this.domElement.appendChild(this.__select)};
d.superclass=e;c.extend(d.prototype,e.prototype,{setValue:function(a){a=d.superclass.prototype.setValue.call(this,a);this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue());return a},updateDisplay:function(){this.__select.value=this.getValue();return d.superclass.prototype.updateDisplay.call(this)}});return d}(dat.controllers.Controller,dat.dom.dom,dat.utils.common);
dat.controllers.NumberController=function(e,a){var c=function(d,f,b){c.superclass.call(this,d,f);b=b||{};this.__min=b.min;this.__max=b.max;this.__step=b.step;d=this.__impliedStep=a.isUndefined(this.__step)?this.initialValue==0?1:Math.pow(10,Math.floor(Math.log(this.initialValue)/Math.LN10))/10:this.__step;d=d.toString();this.__precision=d.indexOf(".")>-1?d.length-d.indexOf(".")-1:0};c.superclass=e;a.extend(c.prototype,e.prototype,{setValue:function(a){if(this.__min!==void 0&&a<this.__min)a=this.__min;
else if(this.__max!==void 0&&a>this.__max)a=this.__max;this.__step!==void 0&&a%this.__step!=0&&(a=Math.round(a/this.__step)*this.__step);return c.superclass.prototype.setValue.call(this,a)},min:function(a){this.__min=a;return this},max:function(a){this.__max=a;return this},step:function(a){this.__step=a;return this}});return c}(dat.controllers.Controller,dat.utils.common);
dat.controllers.NumberControllerBox=function(e,a,c){var d=function(f,b,e){function h(){var a=parseFloat(l.__input.value);c.isNaN(a)||l.setValue(a)}function j(a){var b=o-a.clientY;l.setValue(l.getValue()+b*l.__impliedStep);o=a.clientY}function m(){a.unbind(window,"mousemove",j);a.unbind(window,"mouseup",m)}this.__truncationSuspended=false;d.superclass.call(this,f,b,e);var l=this,o;this.__input=document.createElement("input");this.__input.setAttribute("type","text");a.bind(this.__input,"change",h);
a.bind(this.__input,"blur",function(){h();l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())});a.bind(this.__input,"mousedown",function(b){a.bind(window,"mousemove",j);a.bind(window,"mouseup",m);o=b.clientY});a.bind(this.__input,"keydown",function(a){if(a.keyCode===13)l.__truncationSuspended=true,this.blur(),l.__truncationSuspended=false});this.updateDisplay();this.domElement.appendChild(this.__input)};d.superclass=e;c.extend(d.prototype,e.prototype,{updateDisplay:function(){var a=this.__input,
b;if(this.__truncationSuspended)b=this.getValue();else{b=this.getValue();var c=Math.pow(10,this.__precision);b=Math.round(b*c)/c}a.value=b;return d.superclass.prototype.updateDisplay.call(this)}});return d}(dat.controllers.NumberController,dat.dom.dom,dat.utils.common);
dat.controllers.NumberControllerSlider=function(e,a,c,d,f){var b=function(d,c,f,e,l){function o(b){b.preventDefault();var d=a.getOffset(g.__background),c=a.getWidth(g.__background);g.setValue(g.__min+(g.__max-g.__min)*((b.clientX-d.left)/(d.left+c-d.left)));return false}function y(){a.unbind(window,"mousemove",o);a.unbind(window,"mouseup",y);g.__onFinishChange&&g.__onFinishChange.call(g,g.getValue())}b.superclass.call(this,d,c,{min:f,max:e,step:l});var g=this;this.__background=document.createElement("div");
this.__foreground=document.createElement("div");a.bind(this.__background,"mousedown",function(b){a.bind(window,"mousemove",o);a.bind(window,"mouseup",y);o(b)});a.addClass(this.__background,"slider");a.addClass(this.__foreground,"slider-fg");this.updateDisplay();this.__background.appendChild(this.__foreground);this.domElement.appendChild(this.__background)};b.superclass=e;b.useDefaultStyles=function(){c.inject(f)};d.extend(b.prototype,e.prototype,{updateDisplay:function(){this.__foreground.style.width=
(this.getValue()-this.__min)/(this.__max-this.__min)*100+"%";return b.superclass.prototype.updateDisplay.call(this)}});return b}(dat.controllers.NumberController,dat.dom.dom,dat.utils.css,dat.utils.common,".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}");
dat.controllers.FunctionController=function(e,a,c){var d=function(c,b,e){d.superclass.call(this,c,b);var h=this;this.__button=document.createElement("div");this.__button.innerHTML=e===void 0?"Fire":e;a.bind(this.__button,"click",function(a){a.preventDefault();h.fire();return false});a.addClass(this.__button,"button");this.domElement.appendChild(this.__button)};d.superclass=e;c.extend(d.prototype,e.prototype,{fire:function(){this.__onChange&&this.__onChange.call(this);this.__onFinishChange&&this.__onFinishChange.call(this,
this.getValue());this.getValue().call(this.object)}});return d}(dat.controllers.Controller,dat.dom.dom,dat.utils.common);
dat.controllers.BooleanController=function(e,a,c){var d=function(c,b){d.superclass.call(this,c,b);var e=this;this.__prev=this.getValue();this.__checkbox=document.createElement("input");this.__checkbox.setAttribute("type","checkbox");a.bind(this.__checkbox,"change",function(){e.setValue(!e.__prev)},false);this.domElement.appendChild(this.__checkbox);this.updateDisplay()};d.superclass=e;c.extend(d.prototype,e.prototype,{setValue:function(a){a=d.superclass.prototype.setValue.call(this,a);this.__onFinishChange&&
this.__onFinishChange.call(this,this.getValue());this.__prev=this.getValue();return a},updateDisplay:function(){this.getValue()===true?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=true):this.__checkbox.checked=false;return d.superclass.prototype.updateDisplay.call(this)}});return d}(dat.controllers.Controller,dat.dom.dom,dat.utils.common);
dat.color.toString=function(e){return function(a){if(a.a==1||e.isUndefined(a.a)){for(a=a.hex.toString(16);a.length<6;)a="0"+a;return"#"+a}else return"rgba("+Math.round(a.r)+","+Math.round(a.g)+","+Math.round(a.b)+","+a.a+")"}}(dat.utils.common);
dat.color.interpret=function(e,a){var c,d,f=[{litmus:a.isString,conversions:{THREE_CHAR_HEX:{read:function(a){a=a.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return a===null?false:{space:"HEX",hex:parseInt("0x"+a[1].toString()+a[1].toString()+a[2].toString()+a[2].toString()+a[3].toString()+a[3].toString())}},write:e},SIX_CHAR_HEX:{read:function(a){a=a.match(/^#([A-F0-9]{6})$/i);return a===null?false:{space:"HEX",hex:parseInt("0x"+a[1].toString())}},write:e},CSS_RGB:{read:function(a){a=a.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
return a===null?false:{space:"RGB",r:parseFloat(a[1]),g:parseFloat(a[2]),b:parseFloat(a[3])}},write:e},CSS_RGBA:{read:function(a){a=a.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);return a===null?false:{space:"RGB",r:parseFloat(a[1]),g:parseFloat(a[2]),b:parseFloat(a[3]),a:parseFloat(a[4])}},write:e}}},{litmus:a.isNumber,conversions:{HEX:{read:function(a){return{space:"HEX",hex:a,conversionName:"HEX"}},write:function(a){return a.hex}}}},{litmus:a.isArray,conversions:{RGB_ARRAY:{read:function(a){return a.length!=
3?false:{space:"RGB",r:a[0],g:a[1],b:a[2]}},write:function(a){return[a.r,a.g,a.b]}},RGBA_ARRAY:{read:function(a){return a.length!=4?false:{space:"RGB",r:a[0],g:a[1],b:a[2],a:a[3]}},write:function(a){return[a.r,a.g,a.b,a.a]}}}},{litmus:a.isObject,conversions:{RGBA_OBJ:{read:function(b){return a.isNumber(b.r)&&a.isNumber(b.g)&&a.isNumber(b.b)&&a.isNumber(b.a)?{space:"RGB",r:b.r,g:b.g,b:b.b,a:b.a}:false},write:function(a){return{r:a.r,g:a.g,b:a.b,a:a.a}}},RGB_OBJ:{read:function(b){return a.isNumber(b.r)&&
a.isNumber(b.g)&&a.isNumber(b.b)?{space:"RGB",r:b.r,g:b.g,b:b.b}:false},write:function(a){return{r:a.r,g:a.g,b:a.b}}},HSVA_OBJ:{read:function(b){return a.isNumber(b.h)&&a.isNumber(b.s)&&a.isNumber(b.v)&&a.isNumber(b.a)?{space:"HSV",h:b.h,s:b.s,v:b.v,a:b.a}:false},write:function(a){return{h:a.h,s:a.s,v:a.v,a:a.a}}},HSV_OBJ:{read:function(b){return a.isNumber(b.h)&&a.isNumber(b.s)&&a.isNumber(b.v)?{space:"HSV",h:b.h,s:b.s,v:b.v}:false},write:function(a){return{h:a.h,s:a.s,v:a.v}}}}}];return function(){d=
false;var b=arguments.length>1?a.toArray(arguments):arguments[0];a.each(f,function(e){if(e.litmus(b))return a.each(e.conversions,function(e,f){c=e.read(b);if(d===false&&c!==false)return d=c,c.conversionName=f,c.conversion=e,a.BREAK}),a.BREAK});return d}}(dat.color.toString,dat.utils.common);
dat.GUI=dat.gui.GUI=function(e,a,c,d,f,b,n,h,j,m,l,o,y,g,i){function q(a,b,r,c){if(b[r]===void 0)throw Error("Object "+b+' has no property "'+r+'"');c.color?b=new l(b,r):(b=[b,r].concat(c.factoryArgs),b=d.apply(a,b));if(c.before instanceof f)c.before=c.before.__li;t(a,b);g.addClass(b.domElement,"c");r=document.createElement("span");g.addClass(r,"property-name");r.innerHTML=b.property;var e=document.createElement("div");e.appendChild(r);e.appendChild(b.domElement);c=s(a,e,c.before);g.addClass(c,k.CLASS_CONTROLLER_ROW);
g.addClass(c,typeof b.getValue());p(a,c,b);a.__controllers.push(b);return b}function s(a,b,d){var c=document.createElement("li");b&&c.appendChild(b);d?a.__ul.insertBefore(c,params.before):a.__ul.appendChild(c);a.onResize();return c}function p(a,d,c){c.__li=d;c.__gui=a;i.extend(c,{options:function(b){if(arguments.length>1)return c.remove(),q(a,c.object,c.property,{before:c.__li.nextElementSibling,factoryArgs:[i.toArray(arguments)]});if(i.isArray(b)||i.isObject(b))return c.remove(),q(a,c.object,c.property,
{before:c.__li.nextElementSibling,factoryArgs:[b]})},name:function(a){c.__li.firstElementChild.firstElementChild.innerHTML=a;return c},listen:function(){c.__gui.listen(c);return c},remove:function(){c.__gui.remove(c);return c}});if(c instanceof j){var e=new h(c.object,c.property,{min:c.__min,max:c.__max,step:c.__step});i.each(["updateDisplay","onChange","onFinishChange"],function(a){var b=c[a],H=e[a];c[a]=e[a]=function(){var a=Array.prototype.slice.call(arguments);b.apply(c,a);return H.apply(e,a)}});
g.addClass(d,"has-slider");c.domElement.insertBefore(e.domElement,c.domElement.firstElementChild)}else if(c instanceof h){var f=function(b){return i.isNumber(c.__min)&&i.isNumber(c.__max)?(c.remove(),q(a,c.object,c.property,{before:c.__li.nextElementSibling,factoryArgs:[c.__min,c.__max,c.__step]})):b};c.min=i.compose(f,c.min);c.max=i.compose(f,c.max)}else if(c instanceof b)g.bind(d,"click",function(){g.fakeEvent(c.__checkbox,"click")}),g.bind(c.__checkbox,"click",function(a){a.stopPropagation()});
else if(c instanceof n)g.bind(d,"click",function(){g.fakeEvent(c.__button,"click")}),g.bind(d,"mouseover",function(){g.addClass(c.__button,"hover")}),g.bind(d,"mouseout",function(){g.removeClass(c.__button,"hover")});else if(c instanceof l)g.addClass(d,"color"),c.updateDisplay=i.compose(function(a){d.style.borderLeftColor=c.__color.toString();return a},c.updateDisplay),c.updateDisplay();c.setValue=i.compose(function(b){a.getRoot().__preset_select&&c.isModified()&&B(a.getRoot(),true);return b},c.setValue)}
function t(a,b){var c=a.getRoot(),d=c.__rememberedObjects.indexOf(b.object);if(d!=-1){var e=c.__rememberedObjectIndecesToControllers[d];e===void 0&&(e={},c.__rememberedObjectIndecesToControllers[d]=e);e[b.property]=b;if(c.load&&c.load.remembered){c=c.load.remembered;if(c[a.preset])c=c[a.preset];else if(c[w])c=c[w];else return;if(c[d]&&c[d][b.property]!==void 0)d=c[d][b.property],b.initialValue=d,b.setValue(d)}}}function I(a){var b=a.__save_row=document.createElement("li");g.addClass(a.domElement,
"has-save");a.__ul.insertBefore(b,a.__ul.firstChild);g.addClass(b,"save-row");var c=document.createElement("span");c.innerHTML="&nbsp;";g.addClass(c,"button gears");var d=document.createElement("span");d.innerHTML="Save";g.addClass(d,"button");g.addClass(d,"save");var e=document.createElement("span");e.innerHTML="New";g.addClass(e,"button");g.addClass(e,"save-as");var f=document.createElement("span");f.innerHTML="Revert";g.addClass(f,"button");g.addClass(f,"revert");var m=a.__preset_select=document.createElement("select");
a.load&&a.load.remembered?i.each(a.load.remembered,function(b,c){C(a,c,c==a.preset)}):C(a,w,false);g.bind(m,"change",function(){for(var b=0;b<a.__preset_select.length;b++)a.__preset_select[b].innerHTML=a.__preset_select[b].value;a.preset=this.value});b.appendChild(m);b.appendChild(c);b.appendChild(d);b.appendChild(e);b.appendChild(f);if(u){var b=document.getElementById("dg-save-locally"),l=document.getElementById("dg-local-explain");b.style.display="block";b=document.getElementById("dg-local-storage");
localStorage.getItem(document.location.href+".isLocal")==="true"&&b.setAttribute("checked","checked");var o=function(){l.style.display=a.useLocalStorage?"block":"none"};o();g.bind(b,"change",function(){a.useLocalStorage=!a.useLocalStorage;o()})}var h=document.getElementById("dg-new-constructor");g.bind(h,"keydown",function(a){a.metaKey&&(a.which===67||a.keyCode==67)&&x.hide()});g.bind(c,"click",function(){h.innerHTML=JSON.stringify(a.getSaveObject(),void 0,2);x.show();h.focus();h.select()});g.bind(d,
"click",function(){a.save()});g.bind(e,"click",function(){var b=prompt("Enter a new preset name.");b&&a.saveAs(b)});g.bind(f,"click",function(){a.revert()})}function J(a){function b(f){f.preventDefault();e=f.clientX;g.addClass(a.__closeButton,k.CLASS_DRAG);g.bind(window,"mousemove",c);g.bind(window,"mouseup",d);return false}function c(b){b.preventDefault();a.width+=e-b.clientX;a.onResize();e=b.clientX;return false}function d(){g.removeClass(a.__closeButton,k.CLASS_DRAG);g.unbind(window,"mousemove",
c);g.unbind(window,"mouseup",d)}a.__resize_handle=document.createElement("div");i.extend(a.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});var e;g.bind(a.__resize_handle,"mousedown",b);g.bind(a.__closeButton,"mousedown",b);a.domElement.insertBefore(a.__resize_handle,a.domElement.firstElementChild)}function D(a,b){a.domElement.style.width=b+"px";if(a.__save_row&&a.autoPlace)a.__save_row.style.width=b+"px";if(a.__closeButton)a.__closeButton.style.width=
b+"px"}function z(a,b){var c={};i.each(a.__rememberedObjects,function(d,e){var f={};i.each(a.__rememberedObjectIndecesToControllers[e],function(a,c){f[c]=b?a.initialValue:a.getValue()});c[e]=f});return c}function C(a,b,c){var d=document.createElement("option");d.innerHTML=b;d.value=b;a.__preset_select.appendChild(d);if(c)a.__preset_select.selectedIndex=a.__preset_select.length-1}function B(a,b){var c=a.__preset_select[a.__preset_select.selectedIndex];c.innerHTML=b?c.value+"*":c.value}function E(a){a.length!=
0&&o(function(){E(a)});i.each(a,function(a){a.updateDisplay()})}e.inject(c);var w="Default",u;try{u="localStorage"in window&&window.localStorage!==null}catch(K){u=false}var x,F=true,v,A=false,G=[],k=function(a){function b(){localStorage.setItem(document.location.href+".gui",JSON.stringify(d.getSaveObject()))}function c(){var a=d.getRoot();a.width+=1;i.defer(function(){a.width-=1})}var d=this;this.domElement=document.createElement("div");this.__ul=document.createElement("ul");this.domElement.appendChild(this.__ul);
g.addClass(this.domElement,"dg");this.__folders={};this.__controllers=[];this.__rememberedObjects=[];this.__rememberedObjectIndecesToControllers=[];this.__listening=[];a=a||{};a=i.defaults(a,{autoPlace:true,width:k.DEFAULT_WIDTH});a=i.defaults(a,{resizable:a.autoPlace,hideable:a.autoPlace});if(i.isUndefined(a.load))a.load={preset:w};else if(a.preset)a.load.preset=a.preset;i.isUndefined(a.parent)&&a.hideable&&G.push(this);a.resizable=i.isUndefined(a.parent)&&a.resizable;if(a.autoPlace&&i.isUndefined(a.scrollable))a.scrollable=
true;var e=u&&localStorage.getItem(document.location.href+".isLocal")==="true";Object.defineProperties(this,{parent:{get:function(){return a.parent}},scrollable:{get:function(){return a.scrollable}},autoPlace:{get:function(){return a.autoPlace}},preset:{get:function(){return d.parent?d.getRoot().preset:a.load.preset},set:function(b){d.parent?d.getRoot().preset=b:a.load.preset=b;for(b=0;b<this.__preset_select.length;b++)if(this.__preset_select[b].value==this.preset)this.__preset_select.selectedIndex=
b;d.revert()}},width:{get:function(){return a.width},set:function(b){a.width=b;D(d,b)}},name:{get:function(){return a.name},set:function(b){a.name=b;if(m)m.innerHTML=a.name}},closed:{get:function(){return a.closed},set:function(b){a.closed=b;a.closed?g.addClass(d.__ul,k.CLASS_CLOSED):g.removeClass(d.__ul,k.CLASS_CLOSED);this.onResize();if(d.__closeButton)d.__closeButton.innerHTML=b?k.TEXT_OPEN:k.TEXT_CLOSED}},load:{get:function(){return a.load}},useLocalStorage:{get:function(){return e},set:function(a){u&&
((e=a)?g.bind(window,"unload",b):g.unbind(window,"unload",b),localStorage.setItem(document.location.href+".isLocal",a))}}});if(i.isUndefined(a.parent)){a.closed=false;g.addClass(this.domElement,k.CLASS_MAIN);g.makeSelectable(this.domElement,false);if(u&&e){d.useLocalStorage=true;var f=localStorage.getItem(document.location.href+".gui");if(f)a.load=JSON.parse(f)}this.__closeButton=document.createElement("div");this.__closeButton.innerHTML=k.TEXT_CLOSED;g.addClass(this.__closeButton,k.CLASS_CLOSE_BUTTON);
this.domElement.appendChild(this.__closeButton);g.bind(this.__closeButton,"click",function(){d.closed=!d.closed})}else{if(a.closed===void 0)a.closed=true;var m=document.createTextNode(a.name);g.addClass(m,"controller-name");f=s(d,m);g.addClass(this.__ul,k.CLASS_CLOSED);g.addClass(f,"title");g.bind(f,"click",function(a){a.preventDefault();d.closed=!d.closed;return false});if(!a.closed)this.closed=false}a.autoPlace&&(i.isUndefined(a.parent)&&(F&&(v=document.createElement("div"),g.addClass(v,"dg"),g.addClass(v,
k.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(v),F=false),v.appendChild(this.domElement),g.addClass(this.domElement,k.CLASS_AUTO_PLACE)),this.parent||D(d,a.width));g.bind(window,"resize",function(){d.onResize()});g.bind(this.__ul,"webkitTransitionEnd",function(){d.onResize()});g.bind(this.__ul,"transitionend",function(){d.onResize()});g.bind(this.__ul,"oTransitionEnd",function(){d.onResize()});this.onResize();a.resizable&&J(this);d.getRoot();a.parent||c()};k.toggleHide=function(){A=!A;i.each(G,
function(a){a.domElement.style.zIndex=A?-999:999;a.domElement.style.opacity=A?0:1})};k.CLASS_AUTO_PLACE="a";k.CLASS_AUTO_PLACE_CONTAINER="ac";k.CLASS_MAIN="main";k.CLASS_CONTROLLER_ROW="cr";k.CLASS_TOO_TALL="taller-than-window";k.CLASS_CLOSED="closed";k.CLASS_CLOSE_BUTTON="close-button";k.CLASS_DRAG="drag";k.DEFAULT_WIDTH=245;k.TEXT_CLOSED="Close Controls";k.TEXT_OPEN="Open Controls";g.bind(window,"keydown",function(a){document.activeElement.type!=="text"&&(a.which===72||a.keyCode==72)&&k.toggleHide()},
false);i.extend(k.prototype,{add:function(a,b){return q(this,a,b,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(a,b){return q(this,a,b,{color:true})},remove:function(a){this.__ul.removeChild(a.__li);this.__controllers.slice(this.__controllers.indexOf(a),1);var b=this;i.defer(function(){b.onResize()})},destroy:function(){this.autoPlace&&v.removeChild(this.domElement)},addFolder:function(a){if(this.__folders[a]!==void 0)throw Error('You already have a folder in this GUI by the name "'+
a+'"');var b={name:a,parent:this};b.autoPlace=this.autoPlace;if(this.load&&this.load.folders&&this.load.folders[a])b.closed=this.load.folders[a].closed,b.load=this.load.folders[a];b=new k(b);this.__folders[a]=b;a=s(this,b.domElement);g.addClass(a,"folder");return b},open:function(){this.closed=false},close:function(){this.closed=true},onResize:function(){var a=this.getRoot();if(a.scrollable){var b=g.getOffset(a.__ul).top,c=0;i.each(a.__ul.childNodes,function(b){a.autoPlace&&b===a.__save_row||(c+=
g.getHeight(b))});window.innerHeight-b-20<c?(g.addClass(a.domElement,k.CLASS_TOO_TALL),a.__ul.style.height=window.innerHeight-b-20+"px"):(g.removeClass(a.domElement,k.CLASS_TOO_TALL),a.__ul.style.height="auto")}a.__resize_handle&&i.defer(function(){a.__resize_handle.style.height=a.__ul.offsetHeight+"px"});if(a.__closeButton)a.__closeButton.style.width=a.width+"px"},remember:function(){if(i.isUndefined(x))x=new y,x.domElement.innerHTML=a;if(this.parent)throw Error("You can only call remember on a top level GUI.");
var b=this;i.each(Array.prototype.slice.call(arguments),function(a){b.__rememberedObjects.length==0&&I(b);b.__rememberedObjects.indexOf(a)==-1&&b.__rememberedObjects.push(a)});this.autoPlace&&D(this,this.width)},getRoot:function(){for(var a=this;a.parent;)a=a.parent;return a},getSaveObject:function(){var a=this.load;a.closed=this.closed;if(this.__rememberedObjects.length>0){a.preset=this.preset;if(!a.remembered)a.remembered={};a.remembered[this.preset]=z(this)}a.folders={};i.each(this.__folders,function(b,
c){a.folders[c]=b.getSaveObject()});return a},save:function(){if(!this.load.remembered)this.load.remembered={};this.load.remembered[this.preset]=z(this);B(this,false)},saveAs:function(a){if(!this.load.remembered)this.load.remembered={},this.load.remembered[w]=z(this,true);this.load.remembered[a]=z(this);this.preset=a;C(this,a,true)},revert:function(a){i.each(this.__controllers,function(b){this.getRoot().load.remembered?t(a||this.getRoot(),b):b.setValue(b.initialValue)},this);i.each(this.__folders,
function(a){a.revert(a)});a||B(this.getRoot(),false)},listen:function(a){var b=this.__listening.length==0;this.__listening.push(a);b&&E(this.__listening)}});return k}(dat.utils.css,'<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>',
".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n",
dat.controllers.factory=function(e,a,c,d,f,b,n){return function(h,j,m,l){var o=h[j];if(n.isArray(m)||n.isObject(m))return new e(h,j,m);if(n.isNumber(o))return n.isNumber(m)&&n.isNumber(l)?new c(h,j,m,l):new a(h,j,{min:m,max:l});if(n.isString(o))return new d(h,j);if(n.isFunction(o))return new f(h,j,"");if(n.isBoolean(o))return new b(h,j)}}(dat.controllers.OptionController,dat.controllers.NumberControllerBox,dat.controllers.NumberControllerSlider,dat.controllers.StringController=function(e,a,c){var d=
function(c,b){function e(){h.setValue(h.__input.value)}d.superclass.call(this,c,b);var h=this;this.__input=document.createElement("input");this.__input.setAttribute("type","text");a.bind(this.__input,"keyup",e);a.bind(this.__input,"change",e);a.bind(this.__input,"blur",function(){h.__onFinishChange&&h.__onFinishChange.call(h,h.getValue())});a.bind(this.__input,"keydown",function(a){a.keyCode===13&&this.blur()});this.updateDisplay();this.domElement.appendChild(this.__input)};d.superclass=e;c.extend(d.prototype,
e.prototype,{updateDisplay:function(){if(!a.isActive(this.__input))this.__input.value=this.getValue();return d.superclass.prototype.updateDisplay.call(this)}});return d}(dat.controllers.Controller,dat.dom.dom,dat.utils.common),dat.controllers.FunctionController,dat.controllers.BooleanController,dat.utils.common),dat.controllers.Controller,dat.controllers.BooleanController,dat.controllers.FunctionController,dat.controllers.NumberControllerBox,dat.controllers.NumberControllerSlider,dat.controllers.OptionController,
dat.controllers.ColorController=function(e,a,c,d,f){function b(a,b,c,d){a.style.background="";f.each(j,function(e){a.style.cssText+="background: "+e+"linear-gradient("+b+", "+c+" 0%, "+d+" 100%); "})}function n(a){a.style.background="";a.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);";a.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
a.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";a.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";a.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var h=function(e,l){function o(b){q(b);a.bind(window,"mousemove",q);a.bind(window,
"mouseup",j)}function j(){a.unbind(window,"mousemove",q);a.unbind(window,"mouseup",j)}function g(){var a=d(this.value);a!==false?(p.__color.__state=a,p.setValue(p.__color.toOriginal())):this.value=p.__color.toString()}function i(){a.unbind(window,"mousemove",s);a.unbind(window,"mouseup",i)}function q(b){b.preventDefault();var c=a.getWidth(p.__saturation_field),d=a.getOffset(p.__saturation_field),e=(b.clientX-d.left+document.body.scrollLeft)/c,b=1-(b.clientY-d.top+document.body.scrollTop)/c;b>1?b=
1:b<0&&(b=0);e>1?e=1:e<0&&(e=0);p.__color.v=b;p.__color.s=e;p.setValue(p.__color.toOriginal());return false}function s(b){b.preventDefault();var c=a.getHeight(p.__hue_field),d=a.getOffset(p.__hue_field),b=1-(b.clientY-d.top+document.body.scrollTop)/c;b>1?b=1:b<0&&(b=0);p.__color.h=b*360;p.setValue(p.__color.toOriginal());return false}h.superclass.call(this,e,l);this.__color=new c(this.getValue());this.__temp=new c(0);var p=this;this.domElement=document.createElement("div");a.makeSelectable(this.domElement,
false);this.__selector=document.createElement("div");this.__selector.className="selector";this.__saturation_field=document.createElement("div");this.__saturation_field.className="saturation-field";this.__field_knob=document.createElement("div");this.__field_knob.className="field-knob";this.__field_knob_border="2px solid ";this.__hue_knob=document.createElement("div");this.__hue_knob.className="hue-knob";this.__hue_field=document.createElement("div");this.__hue_field.className="hue-field";this.__input=
document.createElement("input");this.__input.type="text";this.__input_textShadow="0 1px 1px ";a.bind(this.__input,"keydown",function(a){a.keyCode===13&&g.call(this)});a.bind(this.__input,"blur",g);a.bind(this.__selector,"mousedown",function(){a.addClass(this,"drag").bind(window,"mouseup",function(){a.removeClass(p.__selector,"drag")})});var t=document.createElement("div");f.extend(this.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"});
f.extend(this.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:this.__field_knob_border+(this.__color.v<0.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1});f.extend(this.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1});f.extend(this.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"});f.extend(t.style,
{width:"100%",height:"100%",background:"none"});b(t,"top","rgba(0,0,0,0)","#000");f.extend(this.__hue_field.style,{width:"15px",height:"100px",display:"inline-block",border:"1px solid #555",cursor:"ns-resize"});n(this.__hue_field);f.extend(this.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:this.__input_textShadow+"rgba(0,0,0,0.7)"});a.bind(this.__saturation_field,"mousedown",o);a.bind(this.__field_knob,"mousedown",o);a.bind(this.__hue_field,"mousedown",
function(b){s(b);a.bind(window,"mousemove",s);a.bind(window,"mouseup",i)});this.__saturation_field.appendChild(t);this.__selector.appendChild(this.__field_knob);this.__selector.appendChild(this.__saturation_field);this.__selector.appendChild(this.__hue_field);this.__hue_field.appendChild(this.__hue_knob);this.domElement.appendChild(this.__input);this.domElement.appendChild(this.__selector);this.updateDisplay()};h.superclass=e;f.extend(h.prototype,e.prototype,{updateDisplay:function(){var a=d(this.getValue());
if(a!==false){var e=false;f.each(c.COMPONENTS,function(b){if(!f.isUndefined(a[b])&&!f.isUndefined(this.__color.__state[b])&&a[b]!==this.__color.__state[b])return e=true,{}},this);e&&f.extend(this.__color.__state,a)}f.extend(this.__temp.__state,this.__color.__state);this.__temp.a=1;var h=this.__color.v<0.5||this.__color.s>0.5?255:0,j=255-h;f.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toString(),border:this.__field_knob_border+
"rgb("+h+","+h+","+h+")"});this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px";this.__temp.s=1;this.__temp.v=1;b(this.__saturation_field,"left","#fff",this.__temp.toString());f.extend(this.__input.style,{backgroundColor:this.__input.value=this.__color.toString(),color:"rgb("+h+","+h+","+h+")",textShadow:this.__input_textShadow+"rgba("+j+","+j+","+j+",.7)"})}});var j=["-moz-","-o-","-webkit-","-ms-",""];return h}(dat.controllers.Controller,dat.dom.dom,dat.color.Color=function(e,a,c,d){function f(a,
b,c){Object.defineProperty(a,b,{get:function(){if(this.__state.space==="RGB")return this.__state[b];n(this,b,c);return this.__state[b]},set:function(a){if(this.__state.space!=="RGB")n(this,b,c),this.__state.space="RGB";this.__state[b]=a}})}function b(a,b){Object.defineProperty(a,b,{get:function(){if(this.__state.space==="HSV")return this.__state[b];h(this);return this.__state[b]},set:function(a){if(this.__state.space!=="HSV")h(this),this.__state.space="HSV";this.__state[b]=a}})}function n(b,c,e){if(b.__state.space===
"HEX")b.__state[c]=a.component_from_hex(b.__state.hex,e);else if(b.__state.space==="HSV")d.extend(b.__state,a.hsv_to_rgb(b.__state.h,b.__state.s,b.__state.v));else throw"Corrupted color state";}function h(b){var c=a.rgb_to_hsv(b.r,b.g,b.b);d.extend(b.__state,{s:c.s,v:c.v});if(d.isNaN(c.h)){if(d.isUndefined(b.__state.h))b.__state.h=0}else b.__state.h=c.h}var j=function(){this.__state=e.apply(this,arguments);if(this.__state===false)throw"Failed to interpret color arguments";this.__state.a=this.__state.a||
1};j.COMPONENTS="r,g,b,h,s,v,hex,a".split(",");d.extend(j.prototype,{toString:function(){return c(this)},toOriginal:function(){return this.__state.conversion.write(this)}});f(j.prototype,"r",2);f(j.prototype,"g",1);f(j.prototype,"b",0);b(j.prototype,"h");b(j.prototype,"s");b(j.prototype,"v");Object.defineProperty(j.prototype,"a",{get:function(){return this.__state.a},set:function(a){this.__state.a=a}});Object.defineProperty(j.prototype,"hex",{get:function(){if(!this.__state.space!=="HEX")this.__state.hex=
a.rgb_to_hex(this.r,this.g,this.b);return this.__state.hex},set:function(a){this.__state.space="HEX";this.__state.hex=a}});return j}(dat.color.interpret,dat.color.math=function(){var e;return{hsv_to_rgb:function(a,c,d){var e=a/60-Math.floor(a/60),b=d*(1-c),n=d*(1-e*c),c=d*(1-(1-e)*c),a=[[d,c,b],[n,d,b],[b,d,c],[b,n,d],[c,b,d],[d,b,n]][Math.floor(a/60)%6];return{r:a[0]*255,g:a[1]*255,b:a[2]*255}},rgb_to_hsv:function(a,c,d){var e=Math.min(a,c,d),b=Math.max(a,c,d),e=b-e;if(b==0)return{h:NaN,s:0,v:0};
a=a==b?(c-d)/e:c==b?2+(d-a)/e:4+(a-c)/e;a/=6;a<0&&(a+=1);return{h:a*360,s:e/b,v:b/255}},rgb_to_hex:function(a,c,d){a=this.hex_with_component(0,2,a);a=this.hex_with_component(a,1,c);return a=this.hex_with_component(a,0,d)},component_from_hex:function(a,c){return a>>c*8&255},hex_with_component:function(a,c,d){return d<<(e=c*8)|a&~(255<<e)}}}(),dat.color.toString,dat.utils.common),dat.color.interpret,dat.utils.common),dat.utils.requestAnimationFrame=function(){return window.webkitRequestAnimationFrame||
window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1E3/60)}}(),dat.dom.CenteredDiv=function(e,a){var c=function(){this.backgroundElement=document.createElement("div");a.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear"});e.makeFullscreen(this.backgroundElement);this.backgroundElement.style.position="fixed";this.domElement=
document.createElement("div");a.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear"});document.body.appendChild(this.backgroundElement);document.body.appendChild(this.domElement);var c=this;e.bind(this.backgroundElement,"click",function(){c.hide()})};c.prototype.show=function(){var c=this;this.backgroundElement.style.display="block";this.domElement.style.display="block";this.domElement.style.opacity=
0;this.domElement.style.webkitTransform="scale(1.1)";this.layout();a.defer(function(){c.backgroundElement.style.opacity=1;c.domElement.style.opacity=1;c.domElement.style.webkitTransform="scale(1)"})};c.prototype.hide=function(){var a=this,c=function(){a.domElement.style.display="none";a.backgroundElement.style.display="none";e.unbind(a.domElement,"webkitTransitionEnd",c);e.unbind(a.domElement,"transitionend",c);e.unbind(a.domElement,"oTransitionEnd",c)};e.bind(this.domElement,"webkitTransitionEnd",
c);e.bind(this.domElement,"transitionend",c);e.bind(this.domElement,"oTransitionEnd",c);this.backgroundElement.style.opacity=0;this.domElement.style.opacity=0;this.domElement.style.webkitTransform="scale(1.1)"};c.prototype.layout=function(){this.domElement.style.left=window.innerWidth/2-e.getWidth(this.domElement)/2+"px";this.domElement.style.top=window.innerHeight/2-e.getHeight(this.domElement)/2+"px"};return c}(dat.dom.dom,dat.utils.common),dat.dom.dom,dat.utils.common);




/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();

/*!
Waypoints Inview Shortcut - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(){}function e(t){this.options=i.Adapter.extend({},e.defaults,t),this.axis=this.options.horizontal?"horizontal":"vertical",this.waypoints=[],this.element=this.options.element,this.createWaypoints()}var i=window.Waypoint;e.prototype.createWaypoints=function(){for(var t={vertical:[{down:"enter",up:"exited",offset:"100%"},{down:"entered",up:"exit",offset:"bottom-in-view"},{down:"exit",up:"entered",offset:0},{down:"exited",up:"enter",offset:function(){return-this.adapter.outerHeight()}}],horizontal:[{right:"enter",left:"exited",offset:"100%"},{right:"entered",left:"exit",offset:"right-in-view"},{right:"exit",left:"entered",offset:0},{right:"exited",left:"enter",offset:function(){return-this.adapter.outerWidth()}}]},e=0,i=t[this.axis].length;i>e;e++){var n=t[this.axis][e];this.createWaypoint(n)}},e.prototype.createWaypoint=function(t){var e=this;this.waypoints.push(new i({context:this.options.context,element:this.options.element,enabled:this.options.enabled,handler:function(t){return function(i){e.options[t[i]].call(e,i)}}(t),offset:t.offset,horizontal:this.options.horizontal}))},e.prototype.destroy=function(){for(var t=0,e=this.waypoints.length;e>t;t++)this.waypoints[t].destroy();this.waypoints=[]},e.prototype.disable=function(){for(var t=0,e=this.waypoints.length;e>t;t++)this.waypoints[t].disable()},e.prototype.enable=function(){for(var t=0,e=this.waypoints.length;e>t;t++)this.waypoints[t].enable()},e.defaults={context:window,enabled:!0,enter:t,entered:t,exit:t,exited:t},i.Inview=e}();


// @codekit-prepend "blotter.min.js"
// @codekit-prepend "fliesMaterial.js"
// @codekit-prepend "slidingDoorMaterial.js"
// @codekit-prepend "channelSplitMaterial.js"
// @codekit-prepend "swiper.js"
// @codekit-prepend "dat-gui.js"
// @codekit-prepend "particles.js"
// @codekit-prepend "waypoints.js"

"use strict";var $elems=document.all;if(!$elems){$elems={};for(var allElements=document.getElementsByTagName("*"),i=0,n=allElements.length;i<n;++i){var el=allElements[i];el.id&&($elems[el.id]=el)}}
	 "use strict";var _createClass=function(){function h(t,i){for(var e=0;e<i.length;e++){var h=i[e];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(t,h.key,h)}}return function(t,i,e){return i&&h(t.prototype,i),e&&h(t,e),t}}();function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}!function(t){var i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){setTimeout(t,10)},h=void Math.PI,s=void 0,a=void 0,n=void 0,o=void 0,r=void 0,c=void 0,d=void 0,l=void 0,m=void 0,g=void 0,v=void 0,u=void 0,x=void 0,f=void 0,p=void 0,y=void 0,M=void 0,w=void 0,I=void 0,_=void 0,P=void 0,k=void 0,b=void 0,D=void 0,E=void 0,C=void 0,S=void 0,A=void 0,e=function(){function e(t){_classCallCheck(this,e);var i={};t&&(t.nodeName?(i=JSON.parse(JSON.stringify(t.dataset)),"IMG"===t.nodeName?i.image=t:i.wrapperElement=t):i=t),this.state="stopped",this.touches=[],this.on("imageLoaded",this._onImageLoaded),this._initImage(i)}return _createClass(e,[{key:"on",value:function(t,i){this.events=this.events||{},this.events[t]=this.events[t]||[],this.events[t].push(i)}},{key:"emit",value:function(t,i){var e=this.events[t];if(e&&e.length)for(var h=0;h<e.length;h++)e[h].call(this,i)}},{key:"start",value:function(t){var i=t||{};this.initPosition=i.initPosition||this.initPosition,this.initDirection=i.initDirection||this.initDirection,this.canvas&&(this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.display=""),this._initOrigins(),this._initParticles(),this._webglSetAttributes(),"running"!==this.state&&(this.state="running",this.disableInteraction||("ontouchstart"in window||window.navigator.msPointerEnabled?(document.body.addEventListener("touchstart",this._touchHandler),document.body.addEventListener("touchmove",this._touchHandler),document.body.addEventListener("touchend",this._clearTouches),document.body.addEventListener("touchcancel",this._clearTouches)):(this.canvas.addEventListener("mousemove",this._mouseHandler),this.canvas.addEventListener("mouseout",this._clearTouches),this.canvas.addEventListener("click",this._clickHandler))),this._animate())}},{key:"stop",value:function(t){var i=t||{};this.fadePosition=i.fadePosition||this.fadePosition,this.fadeDirection=i.fadeDirection||this.fadeDirection,this._fade(),document.body.removeEventListener("touchstart",this._touchHandler),document.body.removeEventListener("touchmove",this._touchHandler),document.body.removeEventListener("touchend",this._clearTouches),document.body.removeEventListener("touchcancel",this._clearTouches),this.canvas&&(this.canvas.removeEventListener("mousemove",this._mouseHandler),this.canvas.removeEventListener("mouseout",this._clearTouches),this.canvas.removeEventListener("click",this._clickHandler))}},{key:"_animate",value:function(){var t=this;"stopped"!==this.state?(this._calculate(),this._draw(),i(function(){return t._animate()})):this.emit("stopped")}},{key:"_onImageLoaded",value:function(t){this.imageWidth=this.image.naturalWidth||this.image.width,this.imageHeight=this.image.naturalHeight||this.image.height,this.imageRatio=this.imageWidth/this.imageHeight,this.width=this.width||this.imageWidth,this.height=this.height||this.imageHeight,this.renderSize=(this.width+this.height)/4,this.srcImage&&(this.srcImage.style.display="none"),this._initSettings(t),this._initContext(t),this._initResponsive(t),this.start()}},{key:"_initImage",value:function(t){var i=this;this.srcImage=t.image,!this.srcImage&&t.imageId&&(this.srcImage=document.getElementById(t.imageId)),this.imageUrl=t.imageUrl||this.srcImage.src,this.image=document.createElement("img"),this.wrapperElement=t.wrapperElement||this.srcImage.parentElement,this.image.onload=function(){return i.emit("imageLoaded",t)},this.image.crossOrigin="Anonymous",t.addTimestamp&&(/\?/.test(this.imageUrl)?this.imageUrl+="&d="+Date.now():this.imageUrl+="?d="+Date.now()),this.image.src=this.imageUrl}},{key:"_initContext",value:function(t){this.canvas=t.canvas,this.canvas||this.context||!this.wrapperElement||(this.canvas=document.createElement("canvas"),this.wrapperElement.appendChild(this.canvas)),this.convas&&(this.convas.style.display="none"),this.context=t.context,this.renderer=t.renderer||"default"}},{key:"_defaultInitContext",value:function(t){this.context=this.context||this.canvas.getContext("2d")}},{key:"_webglInitContext",value:function(){this.context=this.context||this.canvas.getContext("webgl2")||this.canvas.getContext("experimental-webgl"),this.fragmentShaderScript="#version 300 es\n\n        precision highp float;\n\n        in vec4 vColor;\n        out vec4 fragColor;\n\n        void main(void) {\n          // fragColor = vec4(1, 1, 1, 0.1);\n          fragColor = vColor;\n        }\n      ",this.vertexShaderScript="#version 300 es\n\n        precision highp float;\n\n        in vec3 vertexPosition;\n        in vec4 vertexColor;\n        uniform vec3 vertexOffset;\n        uniform float pointSize;\n        uniform float depth;\n        vec3 mirror = vec3(1, -1, 1);\n\n        uniform mat4 modelViewMatrix;\n        uniform mat4 perspectiveMatrix;\n        uniform mat4 rotationMatrix;\n\n        out vec4 vColor;\n\n        void main(void) {\n          gl_Position = rotationMatrix * perspectiveMatrix * modelViewMatrix * vec4(mirror * vertexPosition + vertexOffset, vertexPosition);\n          gl_PointSize = pointSize + max((log(vertexPosition.z) - 3.91) * depth, -pointSize + 1.0);\n          vColor = vertexColor;\n        }\n      ",this.context.viewport(0,0,this.width,this.height);var t=this.context.createShader(this.context.VERTEX_SHADER);this.context.shaderSource(t,this.vertexShaderScript),this.context.compileShader(t),this.context.getShaderParameter(t,this.context.COMPILE_STATUS)||console.log(this.context.getShaderInfoLog(t));var i=this.context.createShader(this.context.FRAGMENT_SHADER);this.context.shaderSource(i,this.fragmentShaderScript),this.context.compileShader(i),this.context.getShaderParameter(i,this.context.COMPILE_STATUS)||console.log(this.context.getShaderInfoLog(i)),this.program=this.context.createProgram(),this.context.attachShader(this.program,t),this.context.attachShader(this.program,i),this.context.linkProgram(this.program),this.context.useProgram(this.program),this.vertexPosition=this.context.getAttribLocation(this.program,"vertexPosition"),this.context.enableVertexAttribArray(this.vertexPosition),this.vertexColor=this.context.getAttribLocation(this.program,"vertexColor"),this.context.enableVertexAttribArray(this.vertexColor),this.context.clearColor(0,0,0,0),this.context.enable(this.context.BLEND),this.context.disable(this.context.DEPTH_TEST),this.context.blendFunc(this.context.SRC_ALPHA,this.context.ONE),this.vertexBuffer=this.context.createBuffer(),this.context.bindBuffer(this.context.ARRAY_BUFFER,this.vertexBuffer),this.context.clear(this.context.COLOR_BUFFER_BIT|this.context.DEPTH_BUFFER_BIT),this.vertexOffset=this.context.getUniformLocation(this.program,"vertexOffset"),this.context.uniform3f(this.vertexOffset,0,0,1e3),this.context.vertexAttribPointer(this.vertexPosition,3,this.context.FLOAT,!1,28,0),this.context.vertexAttribPointer(this.vertexColor,4,this.context.FLOAT,!1,28,12),this.uModelViewMatrix=this.context.getUniformLocation(this.program,"modelViewMatrix"),this.uPerspectiveMatrix=this.context.getUniformLocation(this.program,"perspectiveMatrix"),this.uRotationMatrix=this.context.getUniformLocation(this.program,"rotationMatrix"),this.uPointSize=this.context.getUniformLocation(this.program,"pointSize"),this.uDepth=this.context.getUniformLocation(this.program,"depth"),this._webglSetAttributes()}},{key:"_webglSetAttributes",value:function(){if("webgl"===this.renderer){var t=this.canvas.width/this.canvas.height,i=10*Math.tan(1*Math.PI/360),e=-i,h=i*t,s=-h,a=[20/(h-s),0,(h+s)/(h-s),0,0,20/(i-e),(i+e)/(i-e),0,0,0,110/90,2e3/90,0,0,-1,0];this.context.viewport(0,0,this.width,this.height),this.context.uniformMatrix4fv(this.uModelViewMatrix,!1,new Float32Array(a)),this.context.uniformMatrix4fv(this.uPerspectiveMatrix,!1,new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])),this.context.uniform1f(this.uPointSize,this.particleSize),this.context.uniform1f(this.uDepth,this.depth),this._updateRotation()}}},{key:"_updateRotation",value:function(){var t=Math.cos(0),i=Math.sin(0),e=Math.cos(0),h=[e,0,Math.sin(0),0,0,t,-i,0,-e,i,t,0,0,0,0,1];this.context.uniformMatrix4fv(this.uRotationMatrix,!1,new Float32Array(h))}},{key:"_webglRenderer",value:function(){_=new Float32Array(this.vertices),this.context.bufferData(this.context.ARRAY_BUFFER,_,this.context.STATIC_DRAW),this.context.clear(this.context.COLOR_BUFFER_BIT|this.context.DEPTH_BUFFER_BIT),this.context.drawArrays(this.context.POINTS,0,this.particles.length),this.context.flush()}},{key:"_initSettings",value:function(t){this.width=1*t.width||this.width,this.height=1*t.height||this.height,this.maxWidth=t.maxWidth,this.maxHeight=t.maxHeight,this.minWidth=t.minWidth,this.minHeight=t.minHeight,this.maxWidth&&(/%$/.test(this.maxWidth)?this.maxWidth=this.width*this.maxWidth.replace("%","")/100:this.maxWidth*=1),this.maxHeight&&(/%$/.test(this.maxHeight)?this.maxHeight=this.height*this.maxHeight.replace("%","")/100:this.maxHeight*=1),this.minWidth&&(/%$/.test(this.minWidth)?this.minWidth=this.width*this.minWidth.replace("%","")/100:this.minWidth*=1),this.minHeight&&(/%$/.test(this.minHeight)?this.minHeight=this.height*this.minHeight.replace("%","")/100:this.minHeight*=1),this.alphaFade=.4,this.gravity=1*t.gravity||.08,this.particleGap=1*t.particleGap||3,this.particleSize=1*t.particleSize||1,this.layerCount=1*t.layerCount||1,this.depth=1*t.depth||1,this.rotationDuration=1*t.rotationDuration||0,this.growDuration=1*t.growDuration||200,this.waitDuration=1*t.waitDuration||200,this.shrinkDuration=1*t.shrinkDuration||200,this.shrinkDistance=1*t.shrinkDistance||50,this.threeDimensional=void 0!==t.threeDimensional&&"false"!==t.threeDimensional&&!!t.threeDimensional,this.lifeCycle=void 0!==t.lifeCycle&&"false"!==t.lifeCycle&&!!t.lifeCycle,this.layerDistance=t.layerDistance||this.particleGap,this.initPosition=t.initPosition||"random",this.initDirection=t.initDirection||"random",this.fadePosition=t.fadePosition||"none",this.fadeDirection=t.fadeDirection||"none",this.noise=isNaN(1*t.noise)?10:1*t.noise,this.disableInteraction=t.disableInteraction,this.mouseForce=1*t.mouseForce||30,this.clickStrength=1*t.clickStrength||0,this.color=t.color,this.colorArr=t.colorArr||this.colorArr}},{key:"_initResponsive",value:function(t){var i=this;this.responsiveWidth=this.wrapperElement&&t.responsiveWidth,this.responsiveWidth&&(this.on("stopped",function(){i.width=i.wrapperElement.clientWidth,i.start()}),this.wrapperElement.addEventListener("resize",function(){i.width!==i.wrapperElement.clientWidth&&i.stop()}),this.width=this.wrapperElement.clientWidth)}},{key:"_calculate",value:function(){for(this.vertices="webgl"===this.renderer&&[],a=s=0;a<this.particles.length;a++){for(r=this.origins[a],c=this.particles[a],x=r.x-c.x+(Math.random()-.5)*this.noise,f=r.y-c.y+(Math.random()-.5)*this.noise,p=r.z-c.z+(Math.random()-.5)*this.noise/1e3,y=Math.sqrt(x*x+f*f+p*p),M=.01*y,c.vx+=M*(x/y)*this.speed,c.vy+=M*(f/y)*this.speed,c.vz+=M*(p/y)*this.speed,l=0;l<this.touches.length;l++)d=this.touches[l],x=c.x-d.x,f=c.y-d.y,p=c.z-d.z,y=Math.sqrt(x*x+f*f+p*p),M=this.mouseForce*d.force/y,c.vx+=M*(x/y)*this.speed,c.vy+=M*(f/y)*this.speed,c.vz+=M*(p/y)*this.speed;c.vx*=this.gravityFactor,c.vy*=this.gravityFactor,c.vz*=this.gravityFactor,c.x+=c.vx,c.y+=c.vy,c.z+=c.vz,c.x<0||c.x>=this.width||c.y<0||c.y>=this.height?(c.isHidden=!0,"stopping"===this.state&&(c.isDead=!0)):("stopping"!==this.state||c.isDead||s++,c.isHidden=!1),this.vertices&&(g=c.x-this.width/2,v=c.y-this.height/2,u=c.z,S=r.vertexColors[3],this.lifeCycle&&(r.tick+=1,0<=r.tick?r.tick<this.growDuration?S*=r.tick/this.growDuration:0<=(A=r.tick-this.growDuration-this.waitDuration)&&A<=this.shrinkDuration&&(d=this.touches[l],y=Math.sqrt(g*g+v*v+(u-50)*(u-50)),M=A/this.shrinkDuration,g+=this.shrinkDistance*(g/y)*M,v+=this.shrinkDistance*(v/y)*M,u+=this.shrinkDistance*((u-50)/y)*M,S*=1-M,A===this.shrinkDuration&&(r.tick=0)):S=0),this.vertices.push(g,v,u,r.vertexColors[0],r.vertexColors[1],r.vertexColors[2],S))}"stopping"===this.state&&0===s&&(this.state="stopped")}},{key:"_defaultRenderer",value:function(){for(this.depth=Math.max(this.layerDistance*this.layerCount/2,this.mouseForce),this.minZ=-this.depth,this.maxZ=this.depth,h=this.context.createImageData(this.width,this.height),a=0;a<this.origins.length;a++)r=this.origins[a],(c=this.particles[a]).isDead||c.isHidden||(g=~~c.x,v=~~c.y,S=r.color[3],0<this.alphaFade&&1<this.layerCount&&(u=Math.max(Math.min(c.z,this.maxZ),this.minZ)-this.minZ,S=S*(1-this.alphaFade)+S*this.alphaFade*(u/(this.maxZ-this.minZ)),S=Math.max(Math.min(~~S,255),0)),n=4*(g+v*this.width),h.data[n+0]=r.color[0],h.data[n+1]=r.color[1],h.data[n+2]=r.color[2],h.data[n+3]=S);this.context.putImageData(h,0,0)}},{key:"_initParticles",value:function(){for(this.particles=void 0,this.particles=[],a=0;a<this.origins.length;a++)r=this.origins[a],c={},this._initParticlePosition(r,c),this._initParticleDirection(c),this.particles.push(c)}},{key:"_initParticlePosition",value:function(t,i){switch(i.z=0,this.initPosition){case"random":i.x=Math.random()*this.width,i.y=Math.random()*this.height;break;case"top":i.x=Math.random()*this.width*3-this.width,i.y=-Math.random()*this.height;break;case"left":i.x=-Math.random()*this.width,i.y=Math.random()*this.height*3-this.height;break;case"bottom":i.x=Math.random()*this.width*3-this.width,i.y=this.height+Math.random()*this.height;break;case"right":i.x=this.width+Math.random()*this.width,i.y=Math.random()*this.height*3-this.height;break;case"misplaced":i.x=t.x+Math.random()*this.width*.3-.1*this.width,i.y=t.y+Math.random()*this.height*.3-.1*this.height;break;default:i.x=t.x,i.y=t.y}}},{key:"_fade",value:function(){if("explode"===this.fadePosition||"top"===this.fadePosition||"left"===this.fadePosition||"bottom"===this.fadePosition||"right"===this.fadePosition?this.state="stopping":this.state="stopped",this.origins)for(a=0;a<this.origins.length;a++)this._fadeOriginPosition(this.origins[a]),this._fadeOriginDirection(this.particles[a])}},{key:"_fadeOriginPosition",value:function(t){switch(this.fadePosition){case"random":t.x=Math.random()*this.width*2-this.width,t.y=Math.random()*this.height*2-this.height,0<t.x&&(t.x+=this.width),0<t.y&&(t.y+=this.height);break;case"top":t.x=Math.random()*this.width*3-this.width,t.y=-Math.random()*this.height;break;case"left":t.x=-Math.random()*this.width,t.y=Math.random()*this.height*3-this.height;break;case"bottom":t.x=Math.random()*this.width*3-this.width,t.y=this.height+Math.random()*this.height;break;case"right":t.x=this.width+Math.random()*this.width,t.y=Math.random()*this.height*3-this.height}}},{key:"_initParticleDirection",value:function(t){switch(t.vz=0,this.initDirection){case"random":w=Math.random()*Math.PI*2,I=Math.random(),t.vx=this.width*I*Math.sin(w)*.1,t.vy=this.height*I*Math.cos(w)*.1;break;case"top":w=Math.random()*Math.PI-Math.PI/2,I=Math.random(),t.vx=this.width*I*Math.sin(w)*.1,t.vy=this.height*I*Math.cos(w)*.1;break;case"left":w=Math.random()*Math.PI+Math.PI,I=Math.random(),t.vx=this.width*I*Math.sin(w)*.1,t.vy=this.height*I*Math.cos(w)*.1;break;case"bottom":w=Math.random()*Math.PI+Math.PI/2,I=Math.random(),t.vx=this.width*I*Math.sin(w)*.1,t.vy=this.height*I*Math.cos(w)*.1;break;case"right":w=Math.random()*Math.PI,I=Math.random(),t.vx=this.width*I*Math.sin(w)*.1,t.vy=this.height*I*Math.cos(w)*.1;break;default:t.vx=0,t.vy=0}}},{key:"_fadeOriginDirection",value:function(t){switch(this.fadeDirection){case"random":w=Math.random()*Math.PI*2,I=Math.random(),t.vx+=this.width*I*Math.sin(w)*.1,t.vy+=this.height*I*Math.cos(w)*.1;break;case"top":w=Math.random()*Math.PI-Math.PI/2,I=Math.random(),t.vx+=this.width*I*Math.sin(w)*.1,t.vy+=this.height*I*Math.cos(w)*.1;break;case"left":w=Math.random()*Math.PI+Math.PI,I=Math.random(),t.vx+=this.width*I*Math.sin(w)*.1,t.vy+=this.height*I*Math.cos(w)*.1;break;case"bottom":w=Math.random()*Math.PI+Math.PI/2,I=Math.random(),t.vx+=this.width*I*Math.sin(w)*.1,t.vy+=this.height*I*Math.cos(w)*.1;break;case"right":w=Math.random()*Math.PI,I=Math.random(),t.vx+=this.width*I*Math.sin(w)*.1,t.vy+=this.height*I*Math.cos(w)*.1;break;default:t.vx=0,t.vy=0}}},{key:"_initOrigins",value:function(){P=document.createElement("canvas"),this.responsiveWidth&&(this.width=this.wrapperElement.clientWidth),this.ratio=Math.min(this.width,this.maxWidth||Number.POSITIVE_INFINITY)/Math.min(this.height,this.maxHeight||Number.POSITIVE_INFINITY),this.ratio<this.imageRatio?(this.renderWidth=~~Math.min(this.width||Number.POSITIVE_INFINITY,this.minWidth||this.imageWidth||Number.POSITIVE_INFINITY,this.maxWidth||Number.POSITIVE_INFINITY),this.renderHeight=~~(this.renderWidth/this.imageRatio)):(this.renderHeight=~~Math.min(this.height||Number.POSITIVE_INFINITY,this.minHeight||this.imageHeight||Number.POSITIVE_INFINITY,this.maxHeight||Number.POSITIVE_INFINITY),this.renderWidth=~~(this.renderHeight*this.imageRatio)),this.offsetX=~~((this.width-this.renderWidth)/2),this.offsetY=~~((this.height-this.renderHeight)/2),P.width=this.renderWidth,P.height=this.renderHeight,(k=P.getContext("2d")).drawImage(this.image,0,0,this.renderWidth,this.renderHeight),b=k.getImageData(0,0,this.renderWidth,this.renderHeight).data,this.origins=void 0,this.origins=[];var t=this.growDuration+this.waitDuration+this.shrinkDuration;for(g=0;g<this.renderWidth;g+=this.particleGap)for(v=0;v<this.renderHeight;v+=this.particleGap)if(a=4*(g+v*this.renderWidth),0<(S=b[a+3])){var i=Math.random();if(A=-Math.floor(i*t),this.colorArr)for(o=0;o<this.layerCount;o++)this.origins.push({x:this.offsetX+g,y:this.offsetY+v,z:o*this.layerDistance+50,color:this.colorArr,tick:A,seed:i,vertexColors:this.colorArr.map(function(t){return t/255})});else for(D=b[a],E=b[a+1],C=b[a+2],o=0;o<this.layerCount;o++)this.origins.push({x:this.offsetX+g,y:this.offsetY+v,z:o*this.layerDistance+50,color:[D,E,C,S],tick:A,seed:i,vertexColors:[D/255,E/255,C/255,S/255]})}this.speed=Math.log(this.origins.length)/10,this.gravityFactor=1-this.gravity*this.speed}},{key:"_parseColor",value:function(t){var i=void 0;if("string"==typeof t){var e=t.replace(" ","");if(i=/^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/.exec(e))i=[parseInt(i[1],16),parseInt(i[2],16),parseInt(i[3],16)];else if(i=/^#([\da-fA-F])([\da-fA-F])([\da-fA-F])/.exec(e))i=[17*parseInt(i[1],16),17*parseInt(i[2],16),17*parseInt(i[3],16)];else if(i=/^rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec(e))i=[+i[1],+i[2],+i[3],+i[4]];else{if(!(i=/^rgb\(([\d]+),([\d]+),([\d]+)\)/.exec(e)))return;i=[+i[1],+i[2],+i[3]]}return i}}},{key:"renderer",get:function(){return this._renderer},set:function(i){this._renderer=i,this._draw=this["_"+i+"Renderer"];try{this["_"+i+"InitContext"]()}catch(t){console.log(t),"default"!==i&&(this.renderer="default")}}},{key:"color",set:function(t){this.colorArr=this._parseColor(t),this.colorArr&&(isNaN(this.colorArr[3])&&(this.colorArr[3]=255),0<this.colorArr[3]&&this.colorArr[3]<=1&&(this.colorArr[3]*=255))}},{key:"_mouseHandler",get:function(){var i=this;return function(t){i.touches=[{x:t.offsetX,y:t.offsetY,z:49+(i.layerCount-1)*i.layerDistance,force:1}]}}},{key:"_clickHandler",get:function(){var e=this;return function(t){var i=e.clickStrength;e.origins.map(function(t){return t.z-=i}),setTimeout(function(){e.origins.map(function(t){return t.z+=i})},100)}}},{key:"_touchHandler",get:function(){var i=this;return function(t){for(i.touches=[],m=i.canvas.getBoundingClientRect(),l=0;l<t.changedTouches.length;l++)(d=t.changedTouches[l]).target===i.canvas&&(i.touches.push({x:d.pageX-m.left,y:d.pageY-m.top,z:49+(i.layerCount-1)*i.layerDistance,force:d.force||1}),t.preventDefault())}}},{key:"_clearTouches",get:function(){var i=this;return function(t){i.touches=[]}}}]),e}();t.NextParticle=e;for(var H=document.getElementsByClassName("next-particle"),F=0;F<H.length;F++){var T=H[F];T.nextParticle=new e(T)}}(window)

	 "use strict";var $toggles=document.getElementsByClassName("toggle");$elems.settings.addEventListener("click",function(){$elems.sidebar.classList.toggle("open"),$elems.settings.classList.toggle("open")}),$elems.close.addEventListener("click",function(){$elems.sidebar.classList.toggle("open"),$elems.settings.classList.toggle("open")});for(var toggleIndex=0;toggleIndex<$toggles.length;toggleIndex++){var $toggle=$toggles[toggleIndex];!function(e){e.addEventListener("click",function(){e.classList.toggle("toggle--checked")})}($toggle)}var isHighDensity=window.matchMedia&&(window.matchMedia("only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)").matches||window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)").matches)||window.devicePixelRatio&&1.3<window.devicePixelRatio,isRetina=(window.matchMedia&&(window.matchMedia("only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)").matches||window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)").matches)||window.devicePixelRatio&&2<=window.devicePixelRatio)&&!/(iPad|iPhone|iPod)/g.test(navigator.userAgent),isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),scalingFactor=1;isMobile||(isRetina?(document.body.classList.add("retina"),scalingFactor=1.5):isHighDensity&&(document.body.classList.add("high-res"),scalingFactor=1.25));var nextParticle=void 0,refreshSettings=function(e){e&&(e.preventDefault(),e.stopPropagation());var t=$elems.webgl.classList.contains("toggle--checked");t||$elems.lifeCycle.classList.remove("toggle--checked");var i=$elems.lifeCycle.classList.contains("toggle--checked");nextParticle&&(nextParticle.stop(),nextParticle.canvas.remove()),nextParticle=new NextParticle({color:tint.classList.contains("toggle--checked")?$elems.color.value:void 0,renderer:t?"webgl":"default",image:$elems.image,particleGap:1*$elems.particleGap.value,mouseForce:1*$elems.mouseForce.value,clickStrength:1*$elems.clickStrength.value,noise:1*$elems.noise.value,gravity:1*$elems.gravity.value,width:~~($elems.particleWrapper.clientWidth*scalingFactor),height:~~($elems.particleWrapper.clientHeight*scalingFactor),maxWidth:~~($elems.size.value*scalingFactor),maxHeight:~~($elems.size.value*scalingFactor),particleSize:1*$elems.particleSize.value,layerCount:1*$elems.layerCount.value,depth:1*$elems.depth.value,layerDistance:1*$elems.layerDistance.value,lifeCycle:i,growDuration:1*$elems.growDuration.value,waitDuration:1*$elems.waitDuration.value,shrinkDuration:1*$elems.shrinkDuration.value,shrinkDistance:1*$elems.shrinkDistance.value}),$elems.particleGapOutput.value=$elems.particleGap.value,$elems.gravityOutput.value=$elems.gravity.value,$elems.mouseForceOutput.value=$elems.mouseForce.value,$elems.clickStrengthOutput.value=$elems.clickStrength.value,$elems.noiseOutput.value=$elems.noise.value,$elems.sizeOutput.value=$elems.size.value,$elems.particleSizeOutput.value=$elems.particleSize.value,$elems.layerCountOutput.value=$elems.layerCount.value,$elems.layerDistanceOutput.value=$elems.layerDistance.value,$elems.depthOutput.value=$elems.depth.value,$elems.particleSizeOutput.value=$elems.particleSize.value,$elems.growDurationOutput.value=$elems.growDuration.value,$elems.waitDurationOutput.value=$elems.waitDuration.value,$elems.shrinkDurationOutput.value=$elems.shrinkDuration.value,$elems.shrinkDistanceOutput.value=$elems.shrinkDistance.value,document.querySelectorAll(".settings__value--life-cycle").forEach(function(e){e.classList[i?"remove":"add"]("settings__value--hidden")}),document.querySelectorAll(".settings__value--webgl").forEach(function(e){e.classList[t?"remove":"add"]("settings__value--hidden")})};$elems.tint.addEventListener("click",refreshSettings),$elems.color.addEventListener("change",refreshSettings),$elems.particleGap.addEventListener("change",refreshSettings),$elems.gravity.addEventListener("change",refreshSettings),$elems.mouseForce.addEventListener("change",refreshSettings),$elems.noise.addEventListener("change",refreshSettings),$elems.size.addEventListener("change",refreshSettings),$elems.webgl.addEventListener("click",refreshSettings),$elems.particleGap.addEventListener("input",refreshSettings),$elems.gravity.addEventListener("input",refreshSettings),$elems.mouseForce.addEventListener("input",refreshSettings),$elems.clickStrength.addEventListener("input",refreshSettings),$elems.noise.addEventListener("input",refreshSettings),$elems.size.addEventListener("input",refreshSettings),$elems.particleSize.addEventListener("input",refreshSettings),$elems.clickStrength.addEventListener("change",refreshSettings),$elems.particleSize.addEventListener("change",refreshSettings),$elems.layerCount.addEventListener("change",refreshSettings),$elems.layerDistance.addEventListener("change",refreshSettings),$elems.depth.addEventListener("change",refreshSettings),$elems.layerCount.addEventListener("input",refreshSettings),$elems.layerDistance.addEventListener("input",refreshSettings),$elems.depth.addEventListener("input",refreshSettings),$elems.lifeCycle.addEventListener("click",refreshSettings),$elems.growDuration.addEventListener("change",refreshSettings),$elems.waitDuration.addEventListener("change",refreshSettings),$elems.shrinkDuration.addEventListener("change",refreshSettings),$elems.shrinkDistance.addEventListener("change",refreshSettings),$elems.growDuration.addEventListener("input",refreshSettings),$elems.waitDuration.addEventListener("input",refreshSettings),$elems.shrinkDuration.addEventListener("input",refreshSettings),$elems.shrinkDistance.addEventListener("input",refreshSettings),window.addEventListener("resize",refreshSettings),refreshSettings()

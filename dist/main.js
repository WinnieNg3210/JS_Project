(()=>{var t={3099:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},6077:(t,e,i)=>{var r=i(111);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},1223:(t,e,i)=>{var r=i(5112),n=i(30),s=i(3070),o=r("unscopables"),a=Array.prototype;null==a[o]&&s.f(a,o,{configurable:!0,value:n(null)}),t.exports=function(t){a[o][t]=!0}},9670:(t,e,i)=>{var r=i(111);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},1285:(t,e,i)=>{"use strict";var r=i(7908),n=i(1400),s=i(7466);t.exports=function(t){for(var e=r(this),i=s(e.length),o=arguments.length,a=n(o>1?arguments[1]:void 0,i),h=o>2?arguments[2]:void 0,c=void 0===h?i:n(h,i);c>a;)e[a++]=t;return e}},1318:(t,e,i)=>{var r=i(5656),n=i(7466),s=i(1400),o=function(t){return function(e,i,o){var a,h=r(e),c=n(h.length),l=s(o,c);if(t&&i!=i){for(;c>l;)if((a=h[l++])!=a)return!0}else for(;c>l;l++)if((t||l in h)&&h[l]===i)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},1194:(t,e,i)=>{var r=i(7293),n=i(5112),s=i(7392),o=n("species");t.exports=function(t){return s>=51||!r((function(){var e=[];return(e.constructor={})[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},7475:(t,e,i)=>{var r=i(111),n=i(3157),s=i(5112)("species");t.exports=function(t){var e;return n(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!n(e.prototype)?r(e)&&null===(e=e[s])&&(e=void 0):e=void 0),void 0===e?Array:e}},5417:(t,e,i)=>{var r=i(7475);t.exports=function(t,e){return new(r(t))(0===e?0:e)}},4326:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},648:(t,e,i)=>{var r=i(1694),n=i(4326),s=i(5112)("toStringTag"),o="Arguments"==n(function(){return arguments}());t.exports=r?n:function(t){var e,i,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),s))?i:o?n(e):"Object"==(r=n(e))&&"function"==typeof e.callee?"Arguments":r}},9920:(t,e,i)=>{var r=i(6656),n=i(3887),s=i(1236),o=i(3070);t.exports=function(t,e){for(var i=n(e),a=o.f,h=s.f,c=0;c<i.length;c++){var l=i[c];r(t,l)||a(t,l,h(e,l))}}},8544:(t,e,i)=>{var r=i(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4994:(t,e,i)=>{"use strict";var r=i(3383).IteratorPrototype,n=i(30),s=i(9114),o=i(8003),a=i(7497),h=function(){return this};t.exports=function(t,e,i){var c=e+" Iterator";return t.prototype=n(r,{next:s(1,i)}),o(t,c,!1,!0),a[c]=h,t}},8880:(t,e,i)=>{var r=i(9781),n=i(3070),s=i(9114);t.exports=r?function(t,e,i){return n.f(t,e,s(1,i))}:function(t,e,i){return t[e]=i,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:(t,e,i)=>{"use strict";var r=i(4948),n=i(3070),s=i(9114);t.exports=function(t,e,i){var o=r(e);o in t?n.f(t,o,s(0,i)):t[o]=i}},654:(t,e,i)=>{"use strict";var r=i(2109),n=i(4994),s=i(9518),o=i(7674),a=i(8003),h=i(8880),c=i(1320),l=i(5112),u=i(1913),f=i(7497),p=i(3383),v=p.IteratorPrototype,y=p.BUGGY_SAFARI_ITERATORS,m=l("iterator"),d="keys",g="values",x="entries",b=function(){return this};t.exports=function(t,e,i,l,p,w,S){n(i,e,l);var k,O,T,P=function(t){if(t===p&&E)return E;if(!y&&t in I)return I[t];switch(t){case d:case g:case x:return function(){return new i(this,t)}}return function(){return new i(this)}},A=e+" Iterator",j=!1,I=t.prototype,L=I[m]||I["@@iterator"]||p&&I[p],E=!y&&L||P(p),M="Array"==e&&I.entries||L;if(M&&(k=s(M.call(new t)),v!==Object.prototype&&k.next&&(u||s(k)===v||(o?o(k,v):"function"!=typeof k[m]&&h(k,m,b)),a(k,A,!0,!0),u&&(f[A]=b))),p==g&&L&&L.name!==g&&(j=!0,E=function(){return L.call(this)}),u&&!S||I[m]===E||h(I,m,E),f[e]=E,p)if(O={values:P(g),keys:w?E:P(d),entries:P(x)},S)for(T in O)(y||j||!(T in I))&&c(I,T,O[T]);else r({target:e,proto:!0,forced:y||j},O);return O}},9781:(t,e,i)=>{var r=i(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,i)=>{var r=i(7854),n=i(111),s=r.document,o=n(s)&&n(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8113:(t,e,i)=>{var r=i(5005);t.exports=r("navigator","userAgent")||""},7392:(t,e,i)=>{var r,n,s=i(7854),o=i(8113),a=s.process,h=s.Deno,c=a&&a.versions||h&&h.version,l=c&&c.v8;l?n=(r=l.split("."))[0]<4?1:r[0]+r[1]:o&&(!(r=o.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/))&&(n=r[1]),t.exports=n&&+n},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,i)=>{var r=i(7854),n=i(1236).f,s=i(8880),o=i(1320),a=i(3505),h=i(9920),c=i(4705);t.exports=function(t,e){var i,l,u,f,p,v=t.target,y=t.global,m=t.stat;if(i=y?r:m?r[v]||a(v,{}):(r[v]||{}).prototype)for(l in e){if(f=e[l],u=t.noTargetGet?(p=n(i,l))&&p.value:i[l],!c(y?l:v+(m?".":"#")+l,t.forced)&&void 0!==u){if(typeof f==typeof u)continue;h(f,u)}(t.sham||u&&u.sham)&&s(f,"sham",!0),o(i,l,f,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},7065:(t,e,i)=>{"use strict";var r=i(3099),n=i(111),s=[].slice,o={},a=function(t,e,i){if(!(e in o)){for(var r=[],n=0;n<e;n++)r[n]="a["+n+"]";o[e]=Function("C,a","return new C("+r.join(",")+")")}return o[e](t,i)};t.exports=Function.bind||function(t){var e=r(this),i=s.call(arguments,1),o=function(){var r=i.concat(s.call(arguments));return this instanceof o?a(e,r.length,r):e.apply(t,r)};return n(e.prototype)&&(o.prototype=e.prototype),o}},5005:(t,e,i)=>{var r=i(7854),n=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?n(r[t]):r[t]&&r[t][e]}},7854:(t,e,i)=>{var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof i.g&&i.g)||function(){return this}()||Function("return this")()},6656:(t,e,i)=>{var r=i(7908),n={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return n.call(r(t),e)}},3501:t=>{t.exports={}},490:(t,e,i)=>{var r=i(5005);t.exports=r("document","documentElement")},4664:(t,e,i)=>{var r=i(9781),n=i(7293),s=i(317);t.exports=!r&&!n((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,i)=>{var r=i(7293),n=i(4326),s="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==n(t)?s.call(t,""):Object(t)}:Object},2788:(t,e,i)=>{var r=i(5465),n=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return n.call(t)}),t.exports=r.inspectSource},9909:(t,e,i)=>{var r,n,s,o=i(8536),a=i(7854),h=i(111),c=i(8880),l=i(6656),u=i(5465),f=i(6200),p=i(3501),v="Object already initialized",y=a.WeakMap;if(o||u.state){var m=u.state||(u.state=new y),d=m.get,g=m.has,x=m.set;r=function(t,e){if(g.call(m,t))throw new TypeError(v);return e.facade=t,x.call(m,t,e),e},n=function(t){return d.call(m,t)||{}},s=function(t){return g.call(m,t)}}else{var b=f("state");p[b]=!0,r=function(t,e){if(l(t,b))throw new TypeError(v);return e.facade=t,c(t,b,e),e},n=function(t){return l(t,b)?t[b]:{}},s=function(t){return l(t,b)}}t.exports={set:r,get:n,has:s,enforce:function(t){return s(t)?n(t):r(t,{})},getterFor:function(t){return function(e){var i;if(!h(e)||(i=n(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return i}}}},3157:(t,e,i)=>{var r=i(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4705:(t,e,i)=>{var r=i(7293),n=/#|\.prototype\./,s=function(t,e){var i=a[o(t)];return i==c||i!=h&&("function"==typeof e?r(e):!!e)},o=s.normalize=function(t){return String(t).replace(n,".").toLowerCase()},a=s.data={},h=s.NATIVE="N",c=s.POLYFILL="P";t.exports=s},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},2190:(t,e,i)=>{var r=i(5005),n=i(3307);t.exports=n?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return"function"==typeof e&&Object(t)instanceof e}},3383:(t,e,i)=>{"use strict";var r,n,s,o=i(7293),a=i(9518),h=i(8880),c=i(6656),l=i(5112),u=i(1913),f=l("iterator"),p=!1;[].keys&&("next"in(s=[].keys())?(n=a(a(s)))!==Object.prototype&&(r=n):p=!0);var v=null==r||o((function(){var t={};return r[f].call(t)!==t}));v&&(r={}),u&&!v||c(r,f)||h(r,f,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},7497:t=>{t.exports={}},133:(t,e,i)=>{var r=i(7392),n=i(7293);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:(t,e,i)=>{var r=i(7854),n=i(2788),s=r.WeakMap;t.exports="function"==typeof s&&/native code/.test(n(s))},30:(t,e,i)=>{var r,n=i(9670),s=i(6048),o=i(748),a=i(3501),h=i(490),c=i(317),l=i(6200)("IE_PROTO"),u=function(){},f=function(t){return"<script>"+t+"<\/script>"},p=function(t){t.write(f("")),t.close();var e=t.parentWindow.Object;return t=null,e},v=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}v=document.domain&&r?p(r):function(){var t,e=c("iframe");if(e.style)return e.style.display="none",h.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(f("document.F=Object")),t.close(),t.F}()||p(r);for(var t=o.length;t--;)delete v.prototype[o[t]];return v()};a[l]=!0,t.exports=Object.create||function(t,e){var i;return null!==t?(u.prototype=n(t),i=new u,u.prototype=null,i[l]=t):i=v(),void 0===e?i:s(i,e)}},6048:(t,e,i)=>{var r=i(9781),n=i(3070),s=i(9670),o=i(1956);t.exports=r?Object.defineProperties:function(t,e){s(t);for(var i,r=o(e),a=r.length,h=0;a>h;)n.f(t,i=r[h++],e[i]);return t}},3070:(t,e,i)=>{var r=i(9781),n=i(4664),s=i(9670),o=i(4948),a=Object.defineProperty;e.f=r?a:function(t,e,i){if(s(t),e=o(e),s(i),n)try{return a(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported");return"value"in i&&(t[e]=i.value),t}},1236:(t,e,i)=>{var r=i(9781),n=i(5296),s=i(9114),o=i(5656),a=i(4948),h=i(6656),c=i(4664),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=o(t),e=a(e),c)try{return l(t,e)}catch(t){}if(h(t,e))return s(!n.f.call(t,e),t[e])}},8006:(t,e,i)=>{var r=i(6324),n=i(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,n)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},9518:(t,e,i)=>{var r=i(6656),n=i(7908),s=i(6200),o=i(8544),a=s("IE_PROTO"),h=Object.prototype;t.exports=o?Object.getPrototypeOf:function(t){return t=n(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?h:null}},6324:(t,e,i)=>{var r=i(6656),n=i(5656),s=i(1318).indexOf,o=i(3501);t.exports=function(t,e){var i,a=n(t),h=0,c=[];for(i in a)!r(o,i)&&r(a,i)&&c.push(i);for(;e.length>h;)r(a,i=e[h++])&&(~s(c,i)||c.push(i));return c}},1956:(t,e,i)=>{var r=i(6324),n=i(748);t.exports=Object.keys||function(t){return r(t,n)}},5296:(t,e)=>{"use strict";var i={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,n=r&&!i.call({1:2},1);e.f=n?function(t){var e=r(this,t);return!!e&&e.enumerable}:i},7674:(t,e,i)=>{var r=i(9670),n=i(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,i={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(i,[]),e=i instanceof Array}catch(t){}return function(i,s){return r(i),n(s),e?t.call(i,s):i.__proto__=s,i}}():void 0)},288:(t,e,i)=>{"use strict";var r=i(1694),n=i(648);t.exports=r?{}.toString:function(){return"[object "+n(this)+"]"}},2140:(t,e,i)=>{var r=i(111);t.exports=function(t,e){var i,n;if("string"===e&&"function"==typeof(i=t.toString)&&!r(n=i.call(t)))return n;if("function"==typeof(i=t.valueOf)&&!r(n=i.call(t)))return n;if("string"!==e&&"function"==typeof(i=t.toString)&&!r(n=i.call(t)))return n;throw TypeError("Can't convert object to primitive value")}},3887:(t,e,i)=>{var r=i(5005),n=i(8006),s=i(5181),o=i(9670);t.exports=r("Reflect","ownKeys")||function(t){var e=n.f(o(t)),i=s.f;return i?e.concat(i(t)):e}},1320:(t,e,i)=>{var r=i(7854),n=i(8880),s=i(6656),o=i(3505),a=i(2788),h=i(9909),c=h.get,l=h.enforce,u=String(String).split("String");(t.exports=function(t,e,i,a){var h,c=!!a&&!!a.unsafe,f=!!a&&!!a.enumerable,p=!!a&&!!a.noTargetGet;"function"==typeof i&&("string"!=typeof e||s(i,"name")||n(i,"name",e),(h=l(i)).source||(h.source=u.join("string"==typeof e?e:""))),t!==r?(c?!p&&t[e]&&(f=!0):delete t[e],f?t[e]=i:n(t,e,i)):f?t[e]=i:o(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||a(this)}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:(t,e,i)=>{var r=i(7854);t.exports=function(t,e){try{Object.defineProperty(r,t,{value:e,configurable:!0,writable:!0})}catch(i){r[t]=e}return e}},8003:(t,e,i)=>{var r=i(3070).f,n=i(6656),s=i(5112)("toStringTag");t.exports=function(t,e,i){t&&!n(t=i?t:t.prototype,s)&&r(t,s,{configurable:!0,value:e})}},6200:(t,e,i)=>{var r=i(2309),n=i(9711),s=r("keys");t.exports=function(t){return s[t]||(s[t]=n(t))}},5465:(t,e,i)=>{var r=i(7854),n=i(3505),s="__core-js_shared__",o=r[s]||n(s,{});t.exports=o},2309:(t,e,i)=>{var r=i(1913),n=i(5465);(t.exports=function(t,e){return n[t]||(n[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.16.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:(t,e,i)=>{var r=i(9958),n=Math.max,s=Math.min;t.exports=function(t,e){var i=r(t);return i<0?n(i+e,0):s(i,e)}},5656:(t,e,i)=>{var r=i(8361),n=i(4488);t.exports=function(t){return r(n(t))}},9958:t=>{var e=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:e)(t)}},7466:(t,e,i)=>{var r=i(9958),n=Math.min;t.exports=function(t){return t>0?n(r(t),9007199254740991):0}},7908:(t,e,i)=>{var r=i(4488);t.exports=function(t){return Object(r(t))}},7593:(t,e,i)=>{var r=i(111),n=i(2190),s=i(2140),o=i(5112)("toPrimitive");t.exports=function(t,e){if(!r(t)||n(t))return t;var i,a=t[o];if(void 0!==a){if(void 0===e&&(e="default"),i=a.call(t,e),!r(i)||n(i))return i;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},4948:(t,e,i)=>{var r=i(7593),n=i(2190);t.exports=function(t){var e=r(t,"string");return n(e)?e:String(e)}},1694:(t,e,i)=>{var r={};r[i(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},9711:t=>{var e=0,i=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+i).toString(36)}},3307:(t,e,i)=>{var r=i(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,e,i)=>{var r=i(7854),n=i(2309),s=i(6656),o=i(9711),a=i(133),h=i(3307),c=n("wks"),l=r.Symbol,u=h?l:l&&l.withoutSetter||o;t.exports=function(t){return s(c,t)&&(a||"string"==typeof c[t])||(a&&s(l,t)?c[t]=l[t]:c[t]=u("Symbol."+t)),c[t]}},3290:(t,e,i)=>{var r=i(2109),n=i(1285),s=i(1223);r({target:"Array",proto:!0},{fill:n}),s("fill")},6992:(t,e,i)=>{"use strict";var r=i(5656),n=i(1223),s=i(7497),o=i(9909),a=i(654),h="Array Iterator",c=o.set,l=o.getterFor(h);t.exports=a(Array,"Array",(function(t,e){c(this,{type:h,target:r(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,i=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==i?{value:r,done:!1}:"values"==i?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),s.Arguments=s.Array,n("keys"),n("values"),n("entries")},561:(t,e,i)=>{"use strict";var r=i(2109),n=i(1400),s=i(9958),o=i(7466),a=i(7908),h=i(5417),c=i(6135),l=i(1194)("splice"),u=Math.max,f=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!l},{splice:function(t,e){var i,r,l,y,m,d,g=a(this),x=o(g.length),b=n(t,x),w=arguments.length;if(0===w?i=r=0:1===w?(i=0,r=x-b):(i=w-2,r=f(u(s(e),0),x-b)),x+i-r>p)throw TypeError(v);for(l=h(g,r),y=0;y<r;y++)(m=b+y)in g&&c(l,y,g[m]);if(l.length=r,i<r){for(y=b;y<x-r;y++)d=y+i,(m=y+r)in g?g[d]=g[m]:delete g[d];for(y=x;y>x-r+i;y--)delete g[y-1]}else if(i>r)for(y=x-r;y>b;y--)d=y+i-1,(m=y+r-1)in g?g[d]=g[m]:delete g[d];for(y=0;y<i;y++)g[y+b]=arguments[y+2];return g.length=x-r+i,l}})},4812:(t,e,i)=>{i(2109)({target:"Function",proto:!0},{bind:i(7065)})},9070:(t,e,i)=>{var r=i(2109),n=i(9781);r({target:"Object",stat:!0,forced:!n,sham:!n},{defineProperty:i(3070).f})},1539:(t,e,i)=>{var r=i(1694),n=i(1320),s=i(288);r||n(Object.prototype,"toString",s,{unsafe:!0})},3948:(t,e,i)=>{var r=i(7854),n=i(8324),s=i(6992),o=i(8880),a=i(5112),h=a("iterator"),c=a("toStringTag"),l=s.values;for(var u in n){var f=r[u],p=f&&f.prototype;if(p){if(p[h]!==l)try{o(p,h,l)}catch(t){p[h]=l}if(p[c]||o(p,c,u),n[u])for(var v in s)if(p[v]!==s[v])try{o(p,v,s[v])}catch(t){p[v]=s[v]}}}},2564:(t,e,i)=>{var r=i(2109),n=i(7854),s=i(8113),o=[].slice,a=function(t){return function(e,i){var r=arguments.length>2,n=r?o.call(arguments,2):void 0;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,n)}:e,i)}};r({global:!0,bind:!0,forced:/MSIE .\./.test(s)},{setTimeout:a(n.setTimeout),setInterval:a(n.setInterval)})}},e={};function i(r){var n=e[r];if(void 0!==n)return n.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,i),s.exports}i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}i(4812),i(6992),i(1539),i(3948),i(561),i(2564),i(9070);var e=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.dimension=t,this.x=150,this.y=200,this.health=3,this.width=32,this.height=48,this.frameX=0,this.frameY=0,this.speed=4,this.moving=!1,this.heroineSprite=new Image,this.heroineSprite.src="./src/images/sailormoon.png",this.keys=[],this.attack=!1}var i,r;return i=e,(r=[{key:"draw",value:function(t){t.drawImage(this.heroineSprite,this.width*this.frameX,this.height*this.frameY,this.width,this.height,this.x,this.y,this.width,this.height)}},{key:"animate",value:function(t){this.draw(t)}},{key:"keyCount",value:function(t){for(var e=0,i=0;i<this.keys.length;i++)this.keys[i]===t&&(e+=1);return e}},{key:"keyDown",value:function(t){"ArrowUp"!==t.key&&"ArrowDown"!==t.key||(this.keys[t.key]=!0,this.moving=!0)," "===t.key&&(this.keys[t.key]=!0,this.attack=!0)}},{key:"keyUp",value:function(t){delete this.keys[t.key],this.frameY=2,this.moving=!1,this.attack=!1}},{key:"handleFrame",value:function(){this.frameX<3&&this.moving?this.frameX++:this.frameX=0}}])&&t(i.prototype,r),e}();function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=800,this.y=e,this.width=32,this.height=48,this.frameX=0,this.frameY=1,this.speed=2,this.minionSprite=new Image,this.minions=["minion1","minion2"],this.imageSrc=this.minions[Math.floor(Math.random()*this.minions.length)],"minion1"===this.imageSrc?this.lifePoints=100:"minion2"===this.imageSrc&&(this.lifePoints=200),this.maxHealth=this.lifePoints,this.minionSprite.src="./src/images/".concat(this.imageSrc,".png")}var e,i;return e=t,(i=[{key:"draw",value:function(t){t.drawImage(this.minionSprite,this.width*this.frameX,this.height*this.frameY,this.width,this.height,this.x,this.y,this.width,this.height)}},{key:"update",value:function(t){this.x-=this.speed,t%10==0&&(this.frameX<3?this.frameX++:this.frameX=0)}}])&&r(e.prototype,i),t}();function s(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=800,this.y=e,this.width=32,this.height=48,this.frameX=0,this.frameY=1,this.speed=2,this.lifePoints=600,this.maxHealth=this.lifePoints,this.bossSprite=new Image,this.bossSprite.src="./src/images/boss.png"}var e,i;return e=t,(i=[{key:"draw",value:function(t){t.drawImage(this.bossSprite,this.width*this.frameX,this.height*this.frameY,this.width,this.height,this.x,this.y,this.width,this.height)}},{key:"update",value:function(t){this.x-=this.speed,t%10==0&&(this.frameX<3?this.frameX++:this.frameX=0)}}])&&s(e.prototype,i),t}();function a(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}i(3290);var h=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.width=5,this.height=10,this.damage=100,this.speed=5}var e,i;return e=t,(i=[{key:"update",value:function(){this.x+=this.speed}},{key:"draw",value:function(t){t.beginPath(),t.arc(this.x,this.y,this.width,0,2*Math.PI),t.fillStyle="gold",t.fill()}}])&&a(e.prototype,i),t}();function c(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=i.getContext("2d"),this.dimensions={width:i.width,height:i.height},this.player=new e(this.dimensions),this.score=0,this.enemies=[],this.enemiesInterval=100,this.gameOver=!1,this.totalAttacks=[],this.attackInterval=1,this.maxBullet=5,this.level1=1e3,this.level2=2e3,this.level3=3e3,this.finalLevel=4e3,this.frameInterval=0,this.boss=[],this.finalBoss=!1,this.showBoss=1,this.bossKill=3,this.minionsKilled=0,this.bossSpawn=5,this.player=new e(this.dimensions),this.health=3,this.gameStart=!1,this.handleEvents(),this.play(),this.intro()}var i,r;return i=t,(r=[{key:"intro",value:function(){this.frameInterval<=1&&(this.ctx.fillStyle="gold",this.ctx.font="30px Dancing Script",this.ctx.fillText("Score: "+this.score,20,40),this.ctx.fillText("Life Left: "+this.health,20,80),this.ctx.fillText("Attacks Left: "+this.maxBullet,200,80),this.ctx.fillStyle="pink",this.ctx.font="35px Dancing Script",this.ctx.fillText("Oh no! Queen Beryl wants revenge on Sailormoon.",85,170),this.ctx.fillText("This time the evil Queen will be taking actions",100,220),this.ctx.fillText("and she has set her sight on Tokyo! Help our heroine",80,270),this.ctx.fillText("defeat her once and for all.",230,320),this.ctx.fillText("Press Enter to Play",270,420))}},{key:"play",value:function(){this.animate()}},{key:"restart",value:function(){this.score=0,this.enemies=[],this.enemiesInterval=100,this.gameOver=!1,this.totalAttacks=[],this.boss=[],this.finalBoss=!1,this.showBoss=1,this.bossKill=2,this.minionsKilled=0,this.player=new e(this.dimensions),this.health=3,this.animate()}},{key:"handleEvents",value:function(){window.addEventListener("keydown",this.eventDown.bind(this)),window.addEventListener("keyup",this.eventUp.bind(this)),window.addEventListener("keypress",this.startGame.bind(this)),window.addEventListener("keypress",this.resetGame.bind(this))}},{key:"startGame",value:function(t){"Enter"===t.key&&(this.gameStart||1!==this.frameInterval?!this.gameStart&&this.frameInterval>1?(this.gameStart=!0,this.animate()):this.gameOver?this.restart():this.gameStart=!1:(this.gameStart=!0,this.play()))}},{key:"pauseGame",value:function(){!this.gameStart&&this.frameInterval>1&&0!==this.bossKill&&(this.ctx.fillStyle="gold",this.ctx.font="90px Dancing Script",this.ctx.fillText("Pause!",180,220),this.ctx.font="45px Dancing Script",this.ctx.fillText("Press Enter to Continue",330,290),this.ctx.fillText("Press R to Reset",330,350))}},{key:"resetGame",value:function(t){"r"===t.key&&!this.gameStart&&this.frameInterval>1&&(this.gameStart=!0,this.restart())}},{key:"eventDown",value:function(t){this.player.keyDown(t)}},{key:"eventUp",value:function(t){this.player.keyUp(t)}},{key:"movePlayer",value:function(){this.player.keys.ArrowDown&&this.player.y<this.dimensions.height-this.player.height&&(this.player.y+=this.player.speed,this.player.frameY=0),this.player.keys.ArrowUp&&this.player.y>100&&(this.player.y-=this.player.speed,this.player.frameY=3)}},{key:"detectCollision",value:function(t,e){if(!(t.x>e.x+e.width||t.x+t.width<e.x||t.y>e.y+e.height||t.y+t.height<e.y))return!0}},{key:"handleEnemies",value:function(){for(var t=0;t<this.enemies.length;t++){if(this.enemies[t].update(this.frameInterval),this.enemies[t].draw(this.ctx),this.enemies[t].lifePoints<=0){var e=this.enemies[t].maxHealth;this.score+=e,this.enemies.splice(t,1),this.score>=1e3&&(this.minionsKilled+=1),t--}this.enemies[t]&&this.enemies[t].x<10&&(this.enemies.splice(t,1),this.health-=1)}if(this.frameInterval%this.enemiesInterval==0){var i=50*Math.floor(8*Math.random()+2);this.enemies.push(new n(i))}}},{key:"handleLevels",value:function(){this.score>=this.level1?this.enemiesInterval=100:this.score>=this.level2?this.enemiesInterval=75:this.score>=this.level3&&(this.enemiesInterval=50),this.score>=this.finalLevel&&(this.finalBoss=!0)}},{key:"handleBoss",value:function(){for(var t=0;t<this.boss.length;t++)if(this.boss[t].update(this.frameInterval),this.boss[t].draw(this.ctx),this.boss[t].lifePoints<=0){var e=this.boss[t].maxHealth;this.score+=e,this.boss.splice(t,1),this.bossKill-=1,this.showBoss+=1,t--}if(1===this.showBoss&&this.minionsKilled%this.bossSpawn==0){var i=50*Math.floor(8*Math.random()+2);this.boss.push(new o(i)),this.minionsKilled=0,this.showBoss-=1}}},{key:"handleAttacks",value:function(){for(var t=0;t<this.totalAttacks.length;t++){this.totalAttacks[t].update(),this.totalAttacks[t].draw(this.ctx);for(var e=0;e<this.enemies.length;e++)this.enemies[e]&&this.totalAttacks[t]&&this.detectCollision(this.totalAttacks[t],this.enemies[e])&&(this.enemies[e].lifePoints-=this.totalAttacks[t].damage,this.totalAttacks.splice(t,1),this.maxBullet+=1,t--);if(this.boss)for(var i=0;i<this.boss.length;i++)this.boss[i]&&this.totalAttacks[t]&&this.detectCollision(this.totalAttacks[t],this.boss[i])&&(this.boss[i].lifePoints-=this.totalAttacks[t].damage,this.totalAttacks.splice(t,1),this.maxBullet+=1,t--),this.boss[i]&&this.boss[i].x<10&&(this.boss.splice(t,1),this.health-=1);this.totalAttacks[t]&&this.totalAttacks[t].x>=this.dimensions.width&&(this.totalAttacks.splice(t,1),this.maxBullet+=1,t--)}if(this.player.attack&&this.maxBullet>0&&1===this.attackInterval&&(this.attackInterval-=1,this.totalAttacks.push(new h(this.player.x+30,this.player.y+20)),this.maxBullet-=1,0===this.attackInterval)){var r=this;setTimeout((function(){r.attackInterval+=1}),100)}}},{key:"handleGameStatus",value:function(){(this.bossKill<=0||this.health<=0)&&(this.gameOver=!0),this.gameOver&&this.bossKill<=0?this.win():this.gameOver&&this.health<=0&&this.lose(),this.ctx.fillStyle="gold",this.ctx.font="30px Dancing Script",this.ctx.fillText("Score: "+this.score,20,40),this.ctx.fillText("Life Left: "+this.health,20,80),this.ctx.fillText("Attacks Left: "+this.maxBullet,200,80)}},{key:"win",value:function(){this.ctx.fillStyle="gold",this.ctx.font="90px Dancing Script",this.ctx.fillText("YOU WIN!",180,220),this.ctx.font="45px Dancing Script",this.ctx.fillText("Score: "+this.score,320,290),this.ctx.font="35px Dancing Script",this.ctx.fillText("Press Enter to Play Again",240,380)}},{key:"lose",value:function(){this.ctx.fillStyle="gold",this.ctx.font="90px Dancing Script",this.ctx.fillText("YOU LOSE!",180,220),this.ctx.font="45px Dancing Script",this.ctx.fillText("Score: "+this.score,320,290),this.ctx.font="35px Dancing Script",this.ctx.fillText("Press Enter to Play Again",240,380)}},{key:"animate",value:function(){this.ctx.clearRect(0,0,this.dimensions.width,this.dimensions.height),this.intro(),this.movePlayer(),this.pauseGame(),this.handleEnemies(),this.handleLevels(),this.handleAttacks(),this.player.handleFrame(),this.player.animate(this.ctx),this.finalBoss&&this.boss&&this.handleBoss(),this.handleGameStatus(),this.frameInterval++,!this.gameOver&&this.gameStart&&requestAnimationFrame(this.animate.bind(this))}}])&&c(i.prototype,r),t}();document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("gameCanvas");new l(t)}))})()})();
//# sourceMappingURL=main.js.map
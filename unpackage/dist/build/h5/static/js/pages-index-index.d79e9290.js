(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0073":function(t,e,n){"use strict";n.r(e);var r=n("4ee0"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"25fb":function(t,e,n){"use strict";var r=n("d267"),i=n.n(r);i.a},"4ee0":function(t,e,n){"use strict";(function(t){var r=n("ee27");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("d0ff"));n("96cf");var o=r(n("c964")),a=r(n("21b2")),c={data:function(){return{href:"https://uniapp.dcloud.io/component/README?id=uniui",imgList:[],current:0,shopList:[],navList:[{id:1,title:"黑马超市",icon:"iconfont icon-caidan",url:"/pages/goods/goods"},{id:2,title:"联系我们",icon:"iconfont icon-anquan",url:"/pages/concat/concat"},{id:3,title:"社区图片",icon:"iconfont icon-bianji",url:"/pages/pics/pics"},{id:4,title:"学习视频",icon:"iconfont icon-buganxingqu",url:"/pages/videos/videos"}],pageIndex:1,end:"loading"}},onLoad:function(){this.getLunbo(),this.getShopList()},onShow:function(){},components:{Goods:a.default},mounted:function(){},onReachBottom:function(){var t=this;if(this.shopList.length<10*this.pageIndex)return this.end="endLoading";setTimeout((function(){t.pageIndex++,t.getShopList()}),300)},methods:{goShopDetail:function(t){uni.navigateTo({url:"../good-detail/good-detail?id="+t})},getLunbo:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t,e.next=3,t.$http({url:"api/getlunbo"});case 3:n=e.sent,t.imgList=n.data.message;case 5:case"end":return e.stop()}}),e)})))()},getShopList:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http({url:"api/getgoods?pageindex="+t.pageIndex});case 2:n=e.sent,t.shopList=[].concat((0,i.default)(t.shopList),(0,i.default)(n.data.message));case 4:case"end":return e.stop()}}),e)})))()},navItemClick:function(e){t("log",e," at pages/index/index.vue:93"),uni.navigateTo({url:e})}}};e.default=c}).call(this,n("0de9")["log"])},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",s="object"===typeof t,f=e.regeneratorRuntime;if(f)s&&(t.exports=f);else{f=e.regeneratorRuntime=s?t.exports:{},f.wrap=b;var l="suspendedStart",h="suspendedYield",d="executing",p="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(P([])));m&&m!==r&&i.call(m,a)&&(g=m);var w=_.prototype=L.prototype=Object.create(g);E.prototype=w.constructor=_,_.constructor=E,_[u]=E.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},f.awrap=function(t){return{__await:t}},k(j.prototype),j.prototype[c]=function(){return this},f.AsyncIterator=j,f.async=function(t,e,n,r){var i=new j(b(t,e,n,r));return f.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=P,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return c.type="throw",c.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;I(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var i=e&&e.prototype instanceof L?e:L,o=Object.create(i.prototype),a=new C(r||[]);return o._invoke=S(t,n,a),o}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function L(){}function E(){}function _(){}function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){function e(n,r,o,a){var c=x(t[n],t,r);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&i.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(s).then((function(t){u.value=t,o(u)}),(function(t){return e("throw",t,o,a)}))}a(c.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function S(t,e,n){var r=l;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return T()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=x(t,e,n);if("normal"===u.type){if(r=n.done?p:h,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}function O(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=x(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},b0fb:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"swiper-home"},[n("v-uni-swiper",{attrs:{"indicator-dots":!0,circular:!0}},t._l(t.imgList,(function(t){return n("v-uni-swiper-item",{key:t.id},[n("v-uni-image",{staticClass:"scroll_image",attrs:{src:t.img}})],1)})),1)],1),n("v-uni-view",{staticClass:"nav"},t._l(t.navList,(function(e,r){return n("v-uni-view",{key:e.id,staticClass:"nav-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navItemClick(e.url)}}},[n("v-uni-view",{class:e.icon}),n("v-uni-text",[t._v(t._s(e.title))])],1)})),1),n("v-uni-view",{staticClass:"shop"},[n("v-uni-view",{staticClass:"shop_title"},[t._v("推荐商品")]),n("goods",{attrs:{shopList:t.shopList,end:t.end},on:{goShopDetail:function(e){arguments[0]=e=t.$handleEvent(e),t.goShopDetail.apply(void 0,arguments)}}})],1)],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},b422:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container uni-swiper[data-v-276b2cd9]{width:%?750?%;height:%?380?%}.container uni-swiper .scroll_image[data-v-276b2cd9]{height:100%;width:100%}.container .nav[data-v-276b2cd9]{width:%?750?%;display:-webkit-box;display:-webkit-flex;display:flex;line-height:%?100?%}.container .nav .nav-item[data-v-276b2cd9]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:auto;line-height:%?100?%;text-align:center}.container .nav .nav-item .iconfont[data-v-276b2cd9]{font-size:%?60?%;color:#fff;width:%?120?%;height:%?120?%;background-color:#b50103;border-radius:100%;line-height:%?120?%;text-align:center;margin:%?10?% auto}.container .nav .nav-item uni-text[data-v-276b2cd9]{font-size:%?30?%}.container .shop[data-v-276b2cd9]{background-color:#eee;overflow:hidden}.container .shop .shop_title[data-v-276b2cd9]{text-align:center;height:50px;line-height:50px;color:#b50103;letter-spacing:20px;background-color:#fff;margin:5px 0}',""]),t.exports=e},c964:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));n("d3b7"),n("e6cf");function r(t,e,n,r,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function c(t){r(a,i,o,c,u,"next",t)}function u(t){r(a,i,o,c,u,"throw",t)}c(void 0)}))}}},d0ff:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t){if(Array.isArray(t))return r(t)}n.r(e);n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("fb6a"),n("25f0");function a(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return i(t)||o(t)||a(t)||c()}n.d(e,"default",(function(){return u}))},d267:function(t,e,n){var r=n("b422");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("7fcdf862",r,!0,{sourceMap:!1,shadowMode:!1})},dc54:function(t,e,n){"use strict";n.r(e);var r=n("b0fb"),i=n("0073");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("25fb");var a,c=n("f0c5"),u=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"276b2cd9",null,!1,r["a"],a);e["default"]=u.exports}}]);
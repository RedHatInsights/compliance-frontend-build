(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[68],{5068:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ActionType:()=>f,createPromise:()=>l,default:()=>c});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(t){return null!==t&&"object"===(void 0===t?"undefined":r(t))&&t&&"function"==typeof t.then}var i=n(34155),a=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},f={Pending:"PENDING",Fulfilled:"FULFILLED",Rejected:"REJECTED"};function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=[f.Pending,f.Fulfilled,f.Rejected],n=t.promiseTypeSuffixes||e,r=t.promiseTypeDelimiter||"_";return function(t){var e=t.dispatch;return function(t){return function(i){var f=void 0,l=void 0;if(!i.payload)return t(i);var c=i.payload;if(o(c))f=c;else if(o(c.promise))f=c.promise,l=c.data;else{if("function"!=typeof c&&"function"!=typeof c.promise)return t(i);if(f=c.promise?c.promise():c(),l=c.promise?c.data:void 0,!o(f))return t(u({},i,{payload:f}))}var p=i.type,y=i.meta,d=a(n,3),s=d[0],v=d[1],m=d[2],h=function(t,e){return u({type:[p,e?m:v].join(r)},null==t?{}:{payload:t},void 0!==y?{meta:y}:{},e?{error:!0}:{})};return t(u({type:[p,s].join(r)},void 0!==l?{payload:l}:{},void 0!==y?{meta:y}:{})),f.then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=h(t,!1);return e(n),{value:t,action:n}}),(function(t){var n=h(t,!0);throw e(n),t}))}}}}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.dispatch;return"function"==typeof e?l()({dispatch:e}):(i&&i.env,null)}}}]);
//# sourceMappingURL=../sourcemaps/68.f84e5974fcfb1635fb48.js.map
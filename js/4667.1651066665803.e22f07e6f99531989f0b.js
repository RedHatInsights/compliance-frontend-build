/*! For license information please see 4667.1651066665803.e22f07e6f99531989f0b.js.LICENSE.txt */
(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[4667],{8679:(e,t,r)=>{"use strict";var o=r(21296),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function f(e){return o.isMemo(e)?a:s[e.$$typeof]||n}s[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[o.Memo]=a;var p=Object.defineProperty,i=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,o){if("string"!=typeof r){if(m){var n=l(r);n&&n!==m&&e(t,n,o)}var a=i(r);u&&(a=a.concat(u(r)));for(var s=f(t),b=f(r),d=0;d<a.length;++d){var S=a[d];if(!(c[S]||o&&o[S]||b&&b[S]||s&&s[S])){var $=y(r,S);try{p(t,S,$)}catch(e){}}}}return t}},96103:(e,t)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,f=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,i=r?Symbol.for("react.async_mode"):60111,u=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,l=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,d=r?Symbol.for("react.lazy"):60116,S=r?Symbol.for("react.block"):60121,$=r?Symbol.for("react.fundamental"):60117,O=r?Symbol.for("react.responder"):60118,h=r?Symbol.for("react.scope"):60119;function P(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case i:case u:case c:case s:case a:case l:return e;default:switch(e=e&&e.$$typeof){case p:case y:case d:case b:case f:return e;default:return t}}case n:return t}}}function g(e){return P(e)===u}t.AsyncMode=i,t.ConcurrentMode=u,t.ContextConsumer=p,t.ContextProvider=f,t.Element=o,t.ForwardRef=y,t.Fragment=c,t.Lazy=d,t.Memo=b,t.Portal=n,t.Profiler=s,t.StrictMode=a,t.Suspense=l,t.isAsyncMode=function(e){return g(e)||P(e)===i},t.isConcurrentMode=g,t.isContextConsumer=function(e){return P(e)===p},t.isContextProvider=function(e){return P(e)===f},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return P(e)===y},t.isFragment=function(e){return P(e)===c},t.isLazy=function(e){return P(e)===d},t.isMemo=function(e){return P(e)===b},t.isPortal=function(e){return P(e)===n},t.isProfiler=function(e){return P(e)===s},t.isStrictMode=function(e){return P(e)===a},t.isSuspense=function(e){return P(e)===l},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===u||e===s||e===a||e===l||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===b||e.$$typeof===f||e.$$typeof===p||e.$$typeof===y||e.$$typeof===$||e.$$typeof===O||e.$$typeof===h||e.$$typeof===S)},t.typeOf=P},21296:(e,t,r)=>{"use strict";e.exports=r(96103)},92703:(e,t,r)=>{"use strict";var o=r(50414);function n(){}function c(){}c.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,c,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:n};return r.PropTypes=r,r}},45697:(e,t,r)=>{e.exports=r(92703)()},50414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},87462:(e,t,r)=>{"use strict";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},o.apply(this,arguments)}r.d(t,{Z:()=>o})},63366:(e,t,r)=>{"use strict";function o(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,{Z:()=>o})},89611:(e,t,r)=>{"use strict";function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}r.d(t,{Z:()=>o})}}]);
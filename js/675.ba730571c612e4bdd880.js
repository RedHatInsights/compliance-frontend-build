(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[675],{32465:(e,n,r)=>{"use strict";function t(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}r.d(n,{Z:()=>t})},44119:(e,n,r)=>{var t=r(49341).parse;function a(e){return e.replace(/[\s,]+/g," ").trim()}var o={},i={},c=!0;function l(e,n){var r=Object.prototype.toString.call(e);if("[object Array]"===r)return e.map((function(e){return l(e,n)}));if("[object Object]"!==r)throw new Error("Unexpected input.");n&&e.loc&&delete e.loc,e.loc&&(delete e.loc.startToken,delete e.loc.endToken);var t,a,o,i=Object.keys(e);for(t in i)i.hasOwnProperty(t)&&(a=e[i[t]],"[object Object]"!==(o=Object.prototype.toString.call(a))&&"[object Array]"!==o||(e[i[t]]=l(a,!0)));return e}var s=!1;function u(e){var n=a(e);if(o[n])return o[n];var r=t(e,{experimentalFragmentVariables:s});if(!r||"Document"!==r.kind)throw new Error("Not a valid GraphQL document.");return r=l(r=function(e){for(var n,r={},t=[],o=0;o<e.definitions.length;o++){var l=e.definitions[o];if("FragmentDefinition"===l.kind){var s=l.name.value,u=a((n=l.loc).source.body.substring(n.start,n.end));i.hasOwnProperty(s)&&!i[s][u]?(c&&console.warn("Warning: fragment with name "+s+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"),i[s][u]=!0):i.hasOwnProperty(s)||(i[s]={},i[s][u]=!0),r[u]||(r[u]=!0,t.push(l))}else t.push(l)}return e.definitions=t,e}(r),!1),o[n]=r,r}function f(){for(var e=Array.prototype.slice.call(arguments),n=e[0],r="string"==typeof n?n:n[0],t=1;t<e.length;t++)e[t]&&e[t].kind&&"Document"===e[t].kind?r+=e[t].loc.source.body:r+=e[t],r+=n[t];return u(r)}f.default=f,f.resetCaches=function(){o={},i={}},f.disableFragmentWarnings=function(){c=!1},f.enableExperimentalFragmentVariables=function(){s=!0},f.disableExperimentalFragmentVariables=function(){s=!1},e.exports=f}}]);
//# sourceMappingURL=../sourcemaps/675.a369f42ae7138f396586.js.map
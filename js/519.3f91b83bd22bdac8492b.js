(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[519],{70254:e=>{e.exports=function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=13)}([function(e,n){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},function(e,n){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,n){var t=e.exports={version:"2.5.0"};"number"==typeof __e&&(__e=t)},function(e,n,t){e.exports=!t(4)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,n){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,n){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},function(e,n,t){var r=t(32)("wks"),o=t(9),i=t(0).Symbol,a="function"==typeof i;(e.exports=function(e){return r[e]||(r[e]=a&&i[e]||(a?i:o)("Symbol."+e))}).store=r},function(e,n,t){var r=t(0),o=t(2),i=t(8),a=t(22),u=t(10),c=function(e,n,t){var s,f,l,p,d=e&c.F,v=e&c.G,g=e&c.S,y=e&c.P,h=e&c.B,m=v?r:g?r[n]||(r[n]={}):(r[n]||{}).prototype,D=v?o:o[n]||(o[n]={}),b=D.prototype||(D.prototype={});for(s in v&&(t=n),t)l=((f=!d&&m&&void 0!==m[s])?m:t)[s],p=h&&f?u(l,r):y&&"function"==typeof l?u(Function.call,l):l,m&&a(m,s,l,e&c.U),D[s]!=l&&i(D,s,p),y&&b[s]!=l&&(b[s]=l)};r.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,n,t){var r=t(16),o=t(21);e.exports=t(3)?function(e,n,t){return r.f(e,n,o(1,t))}:function(e,n,t){return e[n]=t,e}},function(e,n){var t=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+r).toString(36))}},function(e,n,t){var r=t(24);e.exports=function(e,n,t){if(r(e),void 0===n)return e;switch(t){case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,o){return e.call(n,t,r,o)}}return function(){return e.apply(n,arguments)}}},function(e,n){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,n,t){var r=t(28),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},function(e,n,t){"use strict";n.__esModule=!0,n.default=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(","),r=e.name||"",o=e.type||"",i=o.replace(/\/.*$/,"");return t.some((function(e){var n=e.trim();return"."===n.charAt(0)?r.toLowerCase().endsWith(n.toLowerCase()):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n}))}return!0},t(14),t(34)},function(e,n,t){t(15),e.exports=t(2).Array.some},function(e,n,t){"use strict";var r=t(7),o=t(25)(3);r(r.P+r.F*!t(33)([].some,!0),"Array",{some:function(e){return o(this,e,arguments[1])}})},function(e,n,t){var r=t(17),o=t(18),i=t(20),a=Object.defineProperty;n.f=t(3)?Object.defineProperty:function(e,n,t){if(r(e),n=i(n,!0),r(t),o)try{return a(e,n,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(e[n]=t.value),e}},function(e,n,t){var r=t(1);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,n,t){e.exports=!t(3)&&!t(4)((function(){return 7!=Object.defineProperty(t(19)("div"),"a",{get:function(){return 7}}).a}))},function(e,n,t){var r=t(1),o=t(0).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,n,t){var r=t(1);e.exports=function(e,n){if(!r(e))return e;var t,o;if(n&&"function"==typeof(t=e.toString)&&!r(o=t.call(e)))return o;if("function"==typeof(t=e.valueOf)&&!r(o=t.call(e)))return o;if(!n&&"function"==typeof(t=e.toString)&&!r(o=t.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,n){e.exports=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}}},function(e,n,t){var r=t(0),o=t(8),i=t(23),a=t(9)("src"),u=Function.toString,c=(""+u).split("toString");t(2).inspectSource=function(e){return u.call(e)},(e.exports=function(e,n,t,u){var s="function"==typeof t;s&&(i(t,"name")||o(t,"name",n)),e[n]!==t&&(s&&(i(t,a)||o(t,a,e[n]?""+e[n]:c.join(String(n)))),e===r?e[n]=t:u?e[n]?e[n]=t:o(e,n,t):(delete e[n],o(e,n,t)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||u.call(this)}))},function(e,n){var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},function(e,n){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,n,t){var r=t(10),o=t(26),i=t(27),a=t(12),u=t(29);e.exports=function(e,n){var t=1==e,c=2==e,s=3==e,f=4==e,l=6==e,p=5==e||l,d=n||u;return function(n,u,v){for(var g,y,h=i(n),m=o(h),D=r(u,v,3),b=a(m.length),w=0,x=t?d(n,b):c?d(n,0):void 0;b>w;w++)if((p||w in m)&&(y=D(g=m[w],w,h),e))if(t)x[w]=y;else if(y)switch(e){case 3:return!0;case 5:return g;case 6:return w;case 2:x.push(g)}else if(f)return!1;return l?-1:s||f?f:x}}},function(e,n,t){var r=t(5);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,n,t){var r=t(11);e.exports=function(e){return Object(r(e))}},function(e,n){var t=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:t)(e)}},function(e,n,t){var r=t(30);e.exports=function(e,n){return new(r(e))(n)}},function(e,n,t){var r=t(1),o=t(31),i=t(6)("species");e.exports=function(e){var n;return o(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},function(e,n,t){var r=t(5);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,n,t){var r=t(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});e.exports=function(e){return o[e]||(o[e]={})}},function(e,n,t){"use strict";var r=t(4);e.exports=function(e,n){return!!e&&r((function(){n?e.call(null,(function(){}),1):e.call(null)}))}},function(e,n,t){t(35),e.exports=t(2).String.endsWith},function(e,n,t){"use strict";var r=t(7),o=t(12),i=t(36),a="".endsWith;r(r.P+r.F*t(38)("endsWith"),"String",{endsWith:function(e){var n=i(this,e,"endsWith"),t=arguments.length>1?arguments[1]:void 0,r=o(n.length),u=void 0===t?r:Math.min(o(t),r),c=String(e);return a?a.call(n,c,u):n.slice(u-c.length,u)===c}})},function(e,n,t){var r=t(37),o=t(11);e.exports=function(e,n,t){if(r(n))throw TypeError("String#"+t+" doesn't accept regex!");return String(o(e))}},function(e,n,t){var r=t(1),o=t(5),i=t(6)("match");e.exports=function(e){var n;return r(e)&&(void 0!==(n=e[i])?!!n:"RegExp"==o(e))}},function(e,n,t){var r=t(6)("match");e.exports=function(e){var n=/./;try{"/./"[e](n)}catch(t){try{return n[r]=!1,!"/./"[e](n)}catch(e){}}return!0}}])},61667:e=>{"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},41389:(e,n,t)=>{"use strict";t.d(n,{Z:()=>N});var r=t(92950),o=t.n(r);function i(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,u)}c((r=r.apply(e,n||[])).next())}))}function a(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function u(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a}Object.create,Object.create;var c=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function s(e,n){var t=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var t=n.split(".").pop().toLowerCase(),r=c.get(t);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof t.path){var r=e.webkitRelativePath;Object.defineProperty(t,"path",{value:"string"==typeof n?n:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}var f=[".DS_Store","Thumbs.db"];function l(e){return(null!==e.target&&e.target.files?v(e.target.files):[]).map((function(e){return s(e)}))}function p(e,n){return i(this,void 0,void 0,(function(){var t;return a(this,(function(r){switch(r.label){case 0:return e.items?(t=v(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,t]:[4,Promise.all(t.map(g))]):[3,2];case 1:return[2,d(y(r.sent()))];case 2:return[2,d(v(e.files).map((function(e){return s(e)})))]}}))}))}function d(e){return e.filter((function(e){return-1===f.indexOf(e.name)}))}function v(e){for(var n=[],t=0;t<e.length;t++){var r=e[t];n.push(r)}return n}function g(e){if("function"!=typeof e.webkitGetAsEntry)return h(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?D(n):h(e)}function y(e){return e.reduce((function(e,n){return function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(u(arguments[n]));return e}(e,Array.isArray(n)?y(n):[n])}),[])}function h(e){var n=e.getAsFile();if(!n)return Promise.reject(e+" is not a File");var t=s(n);return Promise.resolve(t)}function m(e){return i(this,void 0,void 0,(function(){return a(this,(function(n){return[2,e.isDirectory?D(e):b(e)]}))}))}function D(e){var n=e.createReader();return new Promise((function(e,t){var r=[];!function o(){var u=this;n.readEntries((function(n){return i(u,void 0,void 0,(function(){var i,u,c;return a(this,(function(a){switch(a.label){case 0:if(n.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=a.sent(),e(i),[3,4];case 3:return u=a.sent(),t(u),[3,4];case 4:return[3,6];case 5:c=Promise.all(n.map(m)),r.push(c),o(),a.label=6;case 6:return[2]}}))}))}),(function(e){t(e)}))}()}))}function b(e){return i(this,void 0,void 0,(function(){return a(this,(function(n){return[2,new Promise((function(n,t){e.file((function(t){var r=s(t,e.fullPath);n(r)}),(function(e){t(e)}))}))]}))}))}var w=t(45697),x=t.n(w),O=t(70254),S=t.n(O),F=("function"==typeof Symbol&&Symbol.iterator,"undefined"==typeof document||!document||!document.createElement||"multiple"in document.createElement("input"));function P(e,n){return"application/x-moz-file"===e.type||S()(e,n)}function j(e,n,t){return e.size<=n&&e.size>=t}function E(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function A(e){return void 0!==e.defaultPrevented?e.defaultPrevented:"function"==typeof e.isDefaultPrevented&&e.isDefaultPrevented()}function k(e){return!e.dataTransfer||Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e}))}function _(e){e.preventDefault()}function T(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function C(e){return-1!==e.indexOf("Edge/")}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return T(e)||C(e)}function I(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return n.some((function(n){return n&&n.apply(void 0,[e].concat(r)),e.defaultPrevented}))}}var M=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},R=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function B(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}function K(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function H(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function W(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var G=function(e){function n(){var e,t,r;H(this,n);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=r=W(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),r.state={draggedFiles:[],acceptedFiles:[],rejectedFiles:[]},r.isFileDialogActive=!1,r.onDocumentDrop=function(e){r.node&&r.node.contains(e.target)||(e.preventDefault(),r.dragTargets=[])},r.onDragStart=function(e){e.persist(),r.props.onDragStart&&k(e)&&r.props.onDragStart.call(r,e)},r.onDragEnter=function(e){e.preventDefault(),-1===r.dragTargets.indexOf(e.target)&&r.dragTargets.push(e.target),e.persist(),k(e)&&(Promise.resolve(r.props.getDataTransferItems(e)).then((function(n){E(e)||r.setState({draggedFiles:n,isDragActive:!0})})),r.props.onDragEnter&&r.props.onDragEnter.call(r,e))},r.onDragOver=function(e){return e.preventDefault(),e.persist(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),r.props.onDragOver&&k(e)&&r.props.onDragOver.call(r,e),!1},r.onDragLeave=function(e){e.preventDefault(),e.persist(),r.dragTargets=r.dragTargets.filter((function(n){return n!==e.target&&r.node.contains(n)})),r.dragTargets.length>0||(r.setState({isDragActive:!1,draggedFiles:[]}),r.props.onDragLeave&&k(e)&&r.props.onDragLeave.call(r,e))},r.onDrop=function(e){var n=r.props,t=n.onDrop,o=n.onDropAccepted,i=n.onDropRejected,a=n.multiple,u=n.accept,c=n.getDataTransferItems;e.preventDefault(),e.persist(),r.dragTargets=[],r.isFileDialogActive=!1,r.draggedFiles=null,r.setState({isDragActive:!1,draggedFiles:[]}),k(e)&&Promise.resolve(c(e)).then((function(n){var c=[],s=[];E(e)||(n.forEach((function(e){P(e,u)&&j(e,r.props.maxSize,r.props.minSize)?c.push(e):s.push(e)})),!a&&c.length>1&&s.push.apply(s,K(c.splice(0))),r.setState({acceptedFiles:c,rejectedFiles:s},(function(){t&&t.call(r,c,s,e),s.length>0&&i&&i.call(r,s,e),c.length>0&&o&&o.call(r,c,e)})))}))},r.onClick=function(e){var n=r.props.onClick;n&&n.call(r,e),A(e)||(e.stopPropagation(),L()?setTimeout(r.open,0):r.open())},r.onInputElementClick=function(e){e.stopPropagation()},r.onFileDialogCancel=function(){var e=r.props.onFileDialogCancel;r.isFileDialogActive&&setTimeout((function(){null!=r.input&&(r.input.files.length||(r.isFileDialogActive=!1,"function"==typeof e&&e()))}),300)},r.onFocus=function(e){var n=r.props.onFocus;n&&n.call(r,e),A(e)||r.setState({isFocused:!0})},r.onBlur=function(e){var n=r.props.onBlur;n&&n.call(r,e),A(e)||r.setState({isFocused:!1})},r.onKeyDown=function(e){var n=r.props.onKeyDown;r.node.isEqualNode(e.target)&&(n&&n.call(r,e),A(e)||32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),r.open()))},r.composeHandler=function(e){return r.props.disabled?null:e},r.getRootProps=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.refKey,o=void 0===t?"ref":t,i=n.onKeyDown,a=n.onFocus,u=n.onBlur,c=n.onClick,s=n.onDragStart,f=n.onDragEnter,l=n.onDragOver,p=n.onDragLeave,d=n.onDrop,v=B(n,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragStart","onDragEnter","onDragOver","onDragLeave","onDrop"]);return M((z(e={onKeyDown:r.composeHandler(i?I(i,r.onKeyDown):r.onKeyDown),onFocus:r.composeHandler(a?I(a,r.onFocus):r.onFocus),onBlur:r.composeHandler(u?I(u,r.onBlur):r.onBlur),onClick:r.composeHandler(c?I(c,r.onClick):r.onClick),onDragStart:r.composeHandler(s?I(s,r.onDragStart):r.onDragStart),onDragEnter:r.composeHandler(f?I(f,r.onDragEnter):r.onDragEnter),onDragOver:r.composeHandler(l?I(l,r.onDragOver):r.onDragOver),onDragLeave:r.composeHandler(p?I(p,r.onDragLeave):r.onDragLeave),onDrop:r.composeHandler(d?I(d,r.onDrop):r.onDrop)},o,r.setNodeRef),z(e,"tabIndex",r.props.disabled?-1:0),e),v)},r.getInputProps=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,o=e.onChange,i=e.onClick,a=B(e,["refKey","onChange","onClick"]),u=r.props,c=u.accept,s=u.multiple,f=u.name,l=z({accept:c,type:"file",style:{display:"none"},multiple:F&&s,onChange:I(o,r.onDrop),onClick:I(i,r.onInputElementClick),autoComplete:"off",tabIndex:-1},t,r.setInputRef);return f&&f.length&&(l.name=f),M({},l,a)},r.setNodeRef=function(e){r.node=e},r.setInputRef=function(e){r.input=e},r.open=function(){r.isFileDialogActive=!0,r.input&&(r.input.value=null,r.input.click())},W(r,t)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),R(n,[{key:"componentDidMount",value:function(){var e=this.props.preventDropOnDocument;this.dragTargets=[],e&&(document.addEventListener("dragover",_,!1),document.addEventListener("drop",this.onDocumentDrop,!1)),window.addEventListener("focus",this.onFileDialogCancel,!1)}},{key:"componentWillUnmount",value:function(){this.props.preventDropOnDocument&&(document.removeEventListener("dragover",_),document.removeEventListener("drop",this.onDocumentDrop)),window.removeEventListener("focus",this.onFileDialogCancel,!1)}},{key:"render",value:function(){var e,n,t=this.props,r=t.children,o=t.multiple,i=t.disabled,a=this.state,u=a.isDragActive,c=a.isFocused,s=a.draggedFiles,f=a.acceptedFiles,l=a.rejectedFiles,p=s.length,d=o||p<=1,v=p>0&&(e=s,n=this.props.accept,e.every((function(e){return P(e,n)})));return r({isDragActive:u,isDragAccept:v,isDragReject:p>0&&(!v||!d),draggedFiles:s,acceptedFiles:f,rejectedFiles:l,isFocused:c&&!i,getRootProps:this.getRootProps,getInputProps:this.getInputProps,open:this.open})}}]),n}(o().Component);const N=G;G.propTypes={accept:x().oneOfType([x().string,x().arrayOf(x().string)]),children:x().func,disabled:x().bool,preventDropOnDocument:x().bool,multiple:x().bool,name:x().string,maxSize:x().number,minSize:x().number,getDataTransferItems:x().func,onClick:x().func,onFocus:x().func,onBlur:x().func,onKeyDown:x().func,onDrop:x().func,onDropAccepted:x().func,onDropRejected:x().func,onDragStart:x().func,onDragEnter:x().func,onDragOver:x().func,onDragLeave:x().func,onFileDialogCancel:x().func},G.defaultProps={preventDropOnDocument:!0,disabled:!1,multiple:!0,maxSize:1/0,minSize:0,getDataTransferItems:function(e){return i(this,void 0,void 0,(function(){return a(this,(function(n){return[2,(t=e,t.dataTransfer&&e.dataTransfer?p(e.dataTransfer,e.type):l(e))];var t}))}))}}}}]);
//# sourceMappingURL=../sourcemaps/519.8f69e923f98b1f8a16d6.js.map
/*! For license information please see 75.1650894048793.7bde32e78d1f8f93917d.js.LICENSE.txt */
(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[75],{19398:(e,n,t)=>{"use strict";t.d(n,{C:()=>l});var r=t(70655),i=t(81513),o=t(92950),a=t(8679),c=t.n(a),s=t(24273),u=function(e){var n=(0,s.K)();return o.createElement(n.Consumer,null,(function(n){return __DEV__?(0,i.kG)(n&&n.client,'Could not find "client" in the context of ApolloConsumer. Wrap the root component in an <ApolloProvider>.'):(0,i.kG)(n&&n.client,27),e.children(n.client)}))};function l(e,n){void 0===n&&(n={});var t="withApollo("+function(e){return e.displayName||e.name||"Component"}(e)+")",a=function(a){function c(e){var n=a.call(this,e)||this;return n.setWrappedInstance=n.setWrappedInstance.bind(n),n}return(0,r.__extends)(c,a),c.prototype.getWrappedInstance=function(){return __DEV__?(0,i.kG)(n.withRef,"To access the wrapped instance, you need to specify { withRef: true } in the options"):(0,i.kG)(n.withRef,32),this.wrappedInstance},c.prototype.setWrappedInstance=function(e){this.wrappedInstance=e},c.prototype.render=function(){var t=this;return o.createElement(u,null,(function(i){var a=Object.assign({},t.props,{client:i,ref:n.withRef?t.setWrappedInstance:void 0});return o.createElement(e,(0,r.__assign)({},a))}))},c.displayName=t,c.WrappedComponent=e,c}(o.Component);return c()(a,e,{})}},26075:(e,n,t)=>{"use strict";t.d(n,{x:()=>a});var r=t(81513),i=t(92950),o=t(24273);function a(){var e=i.useContext((0,o.K)()).client;return __DEV__?(0,r.kG)(e,"No Apollo Client instance can be found. Please ensure that you have called `ApolloProvider` higher up in your tree."):(0,r.kG)(e,33),e}},5913:(e,n,t)=>{"use strict";t.d(n,{MS:()=>i,R0:()=>o,ZP:()=>a});var r=t(40400);const i={name:"WrenchIcon",height:512,width:512,svgPath:"M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z",yOffset:0,xOffset:0},o=(0,r.IU)(i),a=o},43917:(e,n,t)=>{"use strict";t.d(n,{Z:()=>u});var r=t(69496),i=t.n(r);function o(e){var n=null,t=null,r=new Promise((function(e,r){n=e,t=r}));return e&&e.then((function(e){n&&n(e)}),(function(e){t&&t(e)})),{promise:r,resolve:function(e){n&&n(e)},reject:function(e){t&&t(e)},cancel:function(){n=null,t=null}}}var a=function(){return a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},a.apply(this,arguments)},c={key:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return null},onlyResolvesLast:!0},s=function(){function e(e){this.config=e,this.debounceSingleton=null,this.debounceCache={}}return e.prototype._createDebouncedFunction=function(){var e,n,t=i()(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(e=t,n=null,t=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];n&&n();var i=o(e.apply(void 0,t)),a=i.promise,c=i.cancel;return n=c,a}),{func:t}},e.prototype.getDebouncedFunction=function(e){var n,t=(n=this.config.options).key.apply(n,e);return null==t?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[t]||(this.debounceCache[t]=this._createDebouncedFunction()),this.debounceCache[t])},e}();const u=function(e,n,t){return void 0===n&&(n=800),void 0===t&&(t={onlyResolvesLast:!0}),r=e,i=n,o=a({},c,t),u=new s({func:r,wait:i,options:o}),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return u.getDebouncedFunction(e).func.apply(void 0,e)};var r,i,o,u}},53754:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(92950);const i=t.n(r)().createContext("light")},62410:(e,n,t)=>{"use strict";t.d(n,{Z:()=>v});var r=t(92950),i=t.n(r),o=t(28553),a=function(){return a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},a.apply(this,arguments)},c=36e5,s=24*c,u=30*s,l=365*s,p=function(e,n){return"".concat(e," ").concat(e>1?"".concat(n,"s"):n," ago")},d=[{rightBound:1/0,description:function(e){return p(Math.round(e/l),"year")}},{rightBound:l,description:function(e){return p(Math.round(e/u),"month")}},{rightBound:u,description:function(e){return p(Math.round(e/s),"day")}},{rightBound:s,description:function(e){return p(Math.round(e/c),"hour")}},{rightBound:c,description:function(e){return p(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],f=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},m=function(e){return{exact:function(e){return f(e)+" UTC"},onlyDate:function(e){return f(e).slice(0,-6)},relative:function(e){return d.reduce((function(n,t){return t.rightBound>Date.now()-e.getTime()?t.description(Date.now()-e.getTime()):n}),f(e))},invalid:function(){return"Invalid date"}}[e]};const v=function(e){var n=e.date,t=e.type,r=void 0===t?"relative":t,c=e.extraTitle,s=e.tooltipProps,u=n instanceof Date?n:new Date(n),l=null==n||"Invalid Date"===u.toString()?"invalid":r;return i().createElement(i().Fragment,null,function(e,n,t){return{exact:function(n){return m(e)(n)},onlyDate:function(n){return m(e)(n)},relative:function(r){return function(e,n,t,r){return void 0===r&&(r=""),i().createElement(o.Tooltip,a({},t,{content:i().createElement("div",null,r,e)}),n)}(m("exact")(r),i().createElement("span",null,m(e)(r)),n,t)},invalid:function(){return"Invalid date"}}[e]}(l,s,c)(u))}},38775:(e,n,t)=>{"use strict";t.d(n,{Z:()=>y});var r=t(92950),i=t.n(r),o=t(45697),a=t.n(o),c=t(54025),s=t(334),u=t(28216),l=t(28553),p=t(39591),d=t(94184),f=t.n(d),m=function(){return m=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},m.apply(this,arguments)},v=function(e){var n=(0,s.useHistory)(),t=(0,u.oR)(),o=e.component;return i().createElement(o,{className:f()(e.className,"inventory")},i().createElement(r.Suspense,{fallback:e.fallback},i().createElement(c.ScalprumComponent,m({history:n,store:t,appName:"inventory",module:"./DetailWrapper",scope:"inventory",ErrorComponent:i().createElement(p.Z,m({component:"InventoryDetailHead",history:n,store:t},e)),ref:e.innerRef},e))))};v.propTypes={fallback:a().node,innerRef:a().object,component:a().string,className:a().string};var h=i().forwardRef((function(e,n){return i().createElement(v,m({innerRef:n},e))}));h.propTypes={fallback:a().node,component:a().string,className:a().string},h.defaultProps={fallback:i().createElement(l.Bullseye,{className:"pf-u-p-lg"},i().createElement(l.Spinner,{size:"xl"})),component:"section"};const y=h},6363:(e,n,t)=>{"use strict";t.d(n,{Z:()=>y});var r=t(92950),i=t.n(r),o=t(45697),a=t.n(o),c=t(54025),s=t(334),u=t(28216),l=t(28553),p=t(39591),d=t(94184),f=t.n(d),m=function(){return m=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},m.apply(this,arguments)},v=function(e){var n=(0,s.useHistory)(),t=(0,u.oR)(),o=e.component;return i().createElement(o,{className:f()(e.className,"inventory")},i().createElement(r.Suspense,{fallback:e.fallback},i().createElement(c.ScalprumComponent,m({history:n,store:t,appName:"inventory",module:"./InventoryDetail",scope:"inventory",ErrorComponent:i().createElement(p.Z,m({component:"InventoryDetailHead",history:n,store:t},e)),ref:e.innerRef},e))))};v.propTypes={fallback:a().node,innerRef:a().object,component:a().string,className:a().string};var h=i().forwardRef((function(e,n){return i().createElement(v,m({innerRef:n},e))}));h.propTypes={fallback:a().node,component:a().string,className:a().string},h.defaultProps={fallback:i().createElement(l.Bullseye,{className:"pf-u-p-lg"},i().createElement(l.Spinner,{size:"xl"})),component:"section"};const y=h},39591:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r=t(92950),i=t.n(r);const o=function(e){var n=e.component,t=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t}(e,["component"]);return(0,r.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(n,"."),t)}),[]),i().createElement("div",null,i().createElement("h1",null,"Unable to load inventory component"),i().createElement("h2",null,"Failed to load ",n),i().createElement("code",null,"More info can be found in browser console output."))}},33739:(e,n,t)=>{"use strict";t.d(n,{Z:()=>y});var r=t(92950),i=t.n(r),o=t(45697),a=t.n(o),c=t(54025),s=t(334),u=t(28216),l=t(28553),p=t(39591),d=t(94184),f=t.n(d),m=function(){return m=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},m.apply(this,arguments)},v=function(e){var n=(0,s.useHistory)(),t=(0,u.oR)(),o=e.component;return i().createElement(o,{className:f()(e.className,"inventory")},i().createElement(r.Suspense,{fallback:e.fallback},i().createElement(c.ScalprumComponent,m({history:n,store:t,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:i().createElement(p.Z,m({component:"InventoryDetailHead",history:n,store:t},e)),ref:e.innerRef},e))))};v.propTypes={fallback:a().node,innerRef:a().object,component:a().string,className:a().string};var h=i().forwardRef((function(e,n){return i().createElement(v,m({innerRef:n},e))}));h.propTypes={fallback:a().node,component:a().string,className:a().string},h.defaultProps={fallback:i().createElement(l.Bullseye,{className:"pf-u-p-lg"},i().createElement(l.Spinner,{size:"xl"})),component:"section"};const y=h},14748:(e,n,t)=>{"use strict";t.d(n,{Z:()=>p});var r=t(92950),i=t.n(r),o=t(94184),a=t.n(o),c=t(28216),s=t(53754),u=function(){return u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},u.apply(this,arguments)},l=function(e,n,t){if(t||2===arguments.length)for(var r,i=0,o=n.length;i<o;i++)!r&&i in n||(r||(r=Array.prototype.slice.call(n,0,i)),r[i]=n[i]);return e.concat(r||Array.prototype.slice.call(n))};const p=(0,c.$j)((function(e){var n=e.routerData;return{params:n&&n.params,path:n&&n.path}}),(function(){return{}}))((function(e){var n=e.path,t=e.params,r=void 0===t?{}:t,o=e.children,c=e.className,p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t}(e,["path","params","children","className"]),d=function(){var e,t,i;if(null===(i=null===(t=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===t?void 0:t.$internal)||void 0===i?void 0:i.store){var o=window.insights.chrome.$internal.store.getState();if(n&&o)return n.split("/").reduce((function(e,n){var t,i;return 0===n.indexOf(":")?e.dynamic=u(u({},e.dynamic),((t={})["data-".concat((i=n.substr(1),i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=r[n.substr(1)],t)):e.staticPart=l(l([],e.staticPart,!0),""!==n?[n]:[],!0),e}),{staticPart:[o.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),f=d.dynamic,m=d.staticPart;return i().createElement(s.Z.Consumer,null,(function(e){var n;void 0===e&&(e="light");var t=a()(((n={})["pf-m-".concat(e)]="dark"===e,n));return{dark:i().createElement("section",u({},p,f,{"page-type":m.join("-"),className:"".concat(a()(c,"pf-l-page__main-section pf-c-page__main-section")," ").concat(t)}),i().Children.map(o,(function(e){return i().cloneElement(e,{className:"pf-m-dark"})}))),light:i().createElement("section",u({},p,f,{"page-type":m.join("-"),className:"".concat(a()(c,"pf-l-page__main-section pf-c-page__main-section"))}),o)}[e]}))}))},80123:(e,n,t)=>{"use strict";t.d(n,{Z:()=>u});var r=t(92950),i=t.n(r),o=t(94184),a=t.n(o),c=t(53754),s=function(){return s=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},s.apply(this,arguments)};const u=function(e){var n=e.className,t=e.children,r=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t}(e,["className","children"]),o=a()(n,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return i().createElement(c.Z.Consumer,null,(function(e){var n,c;void 0===e&&(e="light");var u=a()(((n={})["pf-m-".concat(e,"-200")]="dark"===e,n),((c={})["pf-m-light"]="light"===e,c));return i().createElement("section",s({},r,{className:"".concat(o," ").concat(u),"widget-type":"InsightsPageHeader"}),t)}))}},39173:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var r=t(92950),i=t.n(r),o=t(94184),a=t.n(o),c=t(28553);const s=function(e){var n=e.className,t=e.title,r=a()(n);return i().createElement(c.Title,{headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"},t)}},35664:(e,n,t)=>{"use strict";t.d(n,{i:()=>u,Z:()=>l});var r=t(92950),i=t.n(r),o=t(28553),a=t(94184),c=t.n(a),s=function(){return s=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},s.apply(this,arguments)},u={xs:"xs",sm:"sm",md:"md",lg:"lg"};const l=function(e){var n,t=e.size,r=void 0===t?u.md:t,a=e.isDark,l=void 0!==a&&a,p=e.className,d=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t}(e,["size","isDark","className"]);return i().createElement(o.Skeleton,s({className:c()("ins-c-skeleton","ins-c-skeleton__".concat(r),(n={},n["ins-m-dark"]=l,n),p)},d))}},69496:e=>{"use strict";function n(e){return"function"==typeof e?e():e}function t(){var e={};return e.promise=new Promise((function(n,t){e.resolve=n,e.reject=t})),e}e.exports=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=void 0,a=void 0,c=void 0,s=[];return function(){var l=n(r),p=(new Date).getTime(),d=!o||p-o>l;o=p;for(var f=arguments.length,m=Array(f),v=0;v<f;v++)m[v]=arguments[v];if(d&&i.leading)return i.accumulate?Promise.resolve(e.call(this,[m])).then((function(e){return e[0]})):Promise.resolve(e.call.apply(e,[this].concat(m)));if(a?clearTimeout(c):a=t(),s.push(m),c=setTimeout(u.bind(this),l),i.accumulate){var h=s.length-1;return a.promise.then((function(e){return e[h]}))}return a.promise};function u(){var n=a;clearTimeout(c),Promise.resolve(i.accumulate?e.call(this,s):e.apply(this,s[s.length-1])).then(n.resolve,n.reject),s=[],a=null}}},63012:(e,n,t)=>{var r=t(97786),i=t(10611),o=t(71811);e.exports=function(e,n,t){for(var a=-1,c=n.length,s={};++a<c;){var u=n[a],l=r(e,u);t(l,u)&&i(s,o(u,e),l)}return s}},10611:(e,n,t)=>{var r=t(34865),i=t(71811),o=t(65776),a=t(13218),c=t(40327);e.exports=function(e,n,t,s){if(!a(e))return e;for(var u=-1,l=(n=i(n,e)).length,p=l-1,d=e;null!=d&&++u<l;){var f=c(n[u]),m=t;if("__proto__"===f||"constructor"===f||"prototype"===f)return e;if(u!=p){var v=d[f];void 0===(m=s?s(v,f,d):void 0)&&(m=a(v)?v:o(n[u+1])?[]:{})}r(d,f,m),d=d[f]}return e}},35937:(e,n,t)=>{var r=t(29932),i=t(67206),o=t(63012),a=t(46904);e.exports=function(e,n){if(null==e)return{};var t=r(a(e),(function(e){return[e]}));return n=i(n),o(e,t,(function(e,t){return n(e,t[0])}))}},33766:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var r=t(41143),i=t.n(r),o=t(14892);const a=(c=o.Z,s=c.getIn,function(e,n){i()(e,"Form value must be specified");var t=n||function(e){return s(e,"form")};return function(n){for(var r=arguments.length,a=new Array(r>1?r-1:0),c=1;c<r;c++)a[c-1]=arguments[c];return i()(a.length,"No fields specified"),1===a.length?s(t(n),e+".values."+a[0]):a.reduce((function(r,i){var a=s(t(n),e+".values."+i);return void 0===a?r:o.Z.setIn(r,i,a)}),{})}});var c,s},15113:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>g});var r=t(45697),i=t.n(r),o=i().any,a=i().bool,c=i().func,s=i().shape,u=i().string,l=i().oneOfType,p=i().object,d=i().number,f={anyTouched:a.isRequired,asyncValidating:l([a,u]).isRequired,dirty:a.isRequired,error:o,form:u.isRequired,invalid:a.isRequired,initialized:a.isRequired,initialValues:p,pristine:a.isRequired,pure:a.isRequired,submitting:a.isRequired,submitAsSideEffect:a.isRequired,submitFailed:a.isRequired,submitSucceeded:a.isRequired,valid:a.isRequired,warning:o,array:s({insert:c.isRequired,move:c.isRequired,pop:c.isRequired,push:c.isRequired,remove:c.isRequired,removeAll:c.isRequired,shift:c.isRequired,splice:c.isRequired,swap:c.isRequired,unshift:c.isRequired}),asyncValidate:c.isRequired,autofill:c.isRequired,blur:c.isRequired,change:c.isRequired,clearAsyncError:c.isRequired,clearFields:c.isRequired,clearSubmitErrors:c.isRequired,destroy:c.isRequired,dispatch:c.isRequired,handleSubmit:c.isRequired,initialize:c.isRequired,reset:c.isRequired,resetSection:c.isRequired,touch:c.isRequired,submit:c.isRequired,untouch:c.isRequired,triggerSubmit:a,clearSubmit:c.isRequired},m={checked:a,name:u.isRequired,onBlur:c.isRequired,onChange:c.isRequired,onDragStart:c.isRequired,onDrop:c.isRequired,onFocus:c.isRequired,value:o},v={active:a.isRequired,asyncValidating:a.isRequired,autofilled:a.isRequired,dirty:a.isRequired,dispatch:c.isRequired,error:o,form:u.isRequired,invalid:a.isRequired,pristine:a.isRequired,submitting:a.isRequired,submitFailed:a.isRequired,touched:a.isRequired,valid:a.isRequired,visited:a.isRequired,warning:u},h={dirty:a.isRequired,error:o,form:u.isRequired,invalid:a.isRequired,pristine:a.isRequired,submitFailed:a,submitting:a,valid:a.isRequired,warning:u},y={name:u.isRequired,forEach:c.isRequired,get:c.isRequired,getAll:c.isRequired,insert:c.isRequired,length:d.isRequired,map:c.isRequired,move:c.isRequired,pop:c.isRequired,push:c.isRequired,reduce:c.isRequired,remove:c.isRequired,removeAll:c.isRequired,shift:c.isRequired,swap:c.isRequired,unshift:c.isRequired};s(m).isRequired,s(v).isRequired,s(y).isRequired,s(h).isRequired;const g=f}}]);
!function(e){function t(t){for(var r,i,c=t[0],l=t[1],u=t[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);f.length;)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={3:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"js/"+({0:"CompliancePolicies~CreatePolicy~DeletePolicy~PolicyDetails~ReportDetails~Reports~ReportsSystems~SystemDetails",1:"CompliancePolicies~CreatePolicy~PolicyDetails~ReportDetails~Reports~ReportsSystems~SystemDetails",2:"CreatePolicy",4:"CompliancePolicies",5:"DeletePolicy",6:"PolicyDetails",7:"ReportDetails",8:"Reports",9:"ReportsSystems",10:"SystemDetails"}[e]||e)+".js"}(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/beta/apps/compliance/",i.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;a.push([344,11]),n()}({101:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var r,o=n(104),a=n(48),i=n(134),c=n(209);function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(r=Object(o.getRegistry)({},[Object(i.a)()].concat(t))).register({form:c.a,notifications:a.notifications}),r}function u(){return r.getStore()}},106:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n(129),o=n(54),a="/api/compliance",i="/api/inventory/v1",c=(r.a,[{type:o.conditionalFilterType.text,label:"Name",filterString:function(e){return"name ~ ".concat(e)}}]),l=[{type:o.conditionalFilterType.checkbox,label:"Compliant",filterString:function(e){return"compliant = ".concat(e)},items:[{label:"Compliant",value:"true"},{label:"Non-compliant",value:"false"}]},{type:o.conditionalFilterType.checkbox,label:"Compliance score",filterString:function(e){var t=e.split("-");return"compliance_score >= ".concat(t[0]," and compliance_score <= ").concat(t[1])},items:[{label:"90 - 100%",value:"90-100"},{label:"70 - 89%",value:"70-89"},{label:"50 - 69%",value:"50-69"},{label:"Less than 50%",value:"0-49"}]}]},129:function(e){e.exports=JSON.parse('{"a":"1.1.0"}')},130:function(e,t){},306:function(e,t,n){var r=n(307);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(9)(r,o);r.locals&&(e.exports=r.locals)},307:function(e,t,n){var r=n(7),o=n(204),a=n(205);(t=r(!1)).i(o),t.i(a),t.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.pf-c-page__main .pf-c-page-header.pf-c-page__main-section.page-header-tabs{padding-bottom:0px !important}.pf-c-page__main .pf-c-page-header.pf-c-page__main-section .pf-l-tabs,.pf-c-page__main .pf-c-page-header.pf-c-page__main-section .pf-c-tabs{padding-top:22px}.upload-instructions{background:white}.policy-details-button{display:flex;justify-content:right}.chart-inline tspan{font-family:inherit !important}.wizard-progress-bar{text-align:left;width:var(--pf-global--breakpoint--sm)}.wizard-failed-message{color:var(--pf-global--danger-color--100);font-weight:bold;text-align:left}.grey-icon{color:var(--pf-global--Color--200)}button.pf-c-button.pf-m-tertiary.wizard-os-button{padding:30px;margin-right:15px;--pf-c-button--m-tertiary--focus--BorderColor: #06c;--pf-c-button--m-tertiary--hover--BorderColor: #06c}button.pf-c-button.pf-m-tertiary.active-wizard-os-button{font-weight:bold;color:#06c;--pf-c-button--m-tertiary--BorderColor: #06c;--pf-c-button--BorderWidth: 2px}.ins-c-warning-text{color:var(--pf-global--warning-color--200)}\n",""]),e.exports=t},336:function(e,t){},342:function(e,t){},344:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(24),i=n.n(a),c=n(345),l=n(348),u=n(350),s=n(349),p=n(45),f=n(46),m=n(101),d=n(8),h=n.n(d),y=n(121),b=n.n(y),g=n(34),v=n.n(g),P=n(10),w=n(128),E=n.n(w),x=function(e){var t=e.routes,n=Object(P.l)(),r=n.state&&n.state.background,a=n.pathname,i=t.filter((function(e){return!e.modal})),c=t.filter((function(e){return e.modal})),l=t.map((function(e){return e.path}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(P.g,{location:r||n},i.map((function(e){return o.a.createElement(P.d,{key:"fullpageroute-".concat(e.path.replace("/","")),exact:!0,path:e.path},o.a.createElement(e.component,e.props?e.props:{}))})),o.a.createElement(P.d,{render:function(){return E()(l,(function(e){return e===a}))?null:o.a.createElement(P.c,{to:"/reports"})}})),r&&c.map((function(e){return o.a.createElement(P.d,{exact:!0,key:"modalroute-".concat(e.path.replace("/","")),path:e.path},o.a.createElement(e.component,e.props?e.props:{}))})))};x.propTypes={routes:h.a.array};var _=x,j=n(75),C=n.n(j),O=n(105),S=n.n(O),k=n(81),R=n.n(k),D=n(79),T=n.n(D),N=n(82),A=n.n(N),I=n(83),B=n.n(I),F=n(61),M=n.n(F);function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=M()(e);if(t){var o=M()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return B()(this,n)}}function J(e){return function(t){A()(a,t);var n,r=z(a);function a(e){var t;return R()(this,a),(t=r.call(this,e)).state={component:null},t}return T()(a,[{key:"componentDidMount",value:(n=S()(C.a.mark((function t(){var n,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?o.a.createElement(e,this.props):o.a.createElement("div",null)}}]),a}(r.Component)}var L=[{path:"/reports",component:J((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,1211))}))},{path:"/reports/systems",component:J((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(9)]).then(n.bind(null,1212))}))},{path:"/reports/:report_id",component:J((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(7)]).then(n.bind(null,1213))}))}],q=[{path:"/scappolicies",component:J((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,1214))}))},{path:"/scappolicies/new",component:J((function(){return Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,715))})),modal:!0},{path:"/scappolicies/:policy_id",component:J((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6)]).then(n.bind(null,1217))}))},{path:"/scappolicies/:policy_id/delete",component:J((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,610))})),modal:!0}],G=[{path:"/systems",component:J((function(){return Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,701))}))},{path:"/systems/:inventoryId",component:J((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(10)]).then(n.bind(null,1215))}))}],U=[].concat(q,L,G),V=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return o.a.createElement(_,v()({},t,{routes:U}))},W=n(48),H=(n(304),n(306),function(e){var t={reports:function(e){insights.chrome.appNavClick({id:"reports",redirect:e})},scappolicies:function(e){insights.chrome.appNavClick({id:"scappolicies",redirect:e})},systems:function(e){insights.chrome.appNavClick({id:"systems",redirect:e})}};return Object(r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("compliance");var n=e.location.pathname.split("/")[1]||"reports",r=insights.chrome.on("APP_NAVIGATION",(function(r){r.domEvent&&(e.history.push("/".concat(r.navId)),t[n](!0))}));return function(){return r()}}),[]),Object(r.useEffect)((function(){var n=e.location.pathname.split("/")[1]||"reports";insights&&insights.chrome&&n&&t[n](!1)}),[t,e.location]),o.a.createElement(o.a.Fragment,null,o.a.createElement(W.NotificationsPortal,null),o.a.createElement(V,{childProps:e}))});H.propTypes={location:h.a.object,history:h.a.object};var K=b()(H),Q=n(106),X=n(126),Y=new l.a({link:new u.a({credentials:"include",uri:Q.a+"/graphql"}),cache:new s.b}),Z=window.location.pathname.split("/");Z.shift();var $="/";"beta"===Z[0]&&($="/".concat(Z.shift(),"/")),window.insights.chrome.auth.getUser().then((function(){i.a.render(o.a.createElement(f.Provider,{store:Object(m.b)().getStore()},o.a.createElement(X.IntlProvider,{locale:navigator.language},o.a.createElement(p.BrowserRouter,{basename:"".concat($).concat(Z[0],"/").concat(Z[1])},o.a.createElement(c.b,{client:Y},o.a.createElement(K,null))))),document.getElementById("root"))}))}});
//# sourceMappingURL=../sourcemaps/App.js.map
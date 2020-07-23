!function(e){function t(t){for(var r,i,c=t[0],l=t[1],s=t[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);f.length;)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"js/"+({0:"ComplianceSystems",2:"CompliancePolicies",3:"PolicyDetails",4:"ReportDetails",5:"Reports",6:"ReportsSystems",7:"SystemDetails"}[e]||e)+".js"}(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/beta/apps/compliance/",i.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;a.push([488,8]),n()}({159:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return s}));var r=n(208),o=n(84),a="/api/compliance",i="/rhel/compliance",c="/api/inventory/v1",l=(r.a,[{type:o.conditionalFilterType.text,label:"Name",filterString:function(e){return"name ~ ".concat(e)}}]),s=[{type:o.conditionalFilterType.checkbox,label:"Compliant",filterString:function(e){return"compliant = ".concat(e)},items:[{label:"Compliant",value:"true"},{label:"Non-compliant",value:"false"}]},{type:o.conditionalFilterType.checkbox,label:"Compliance score",filterString:function(e){var t=e.split("-");return"compliance_score >= ".concat(t[0]," and compliance_score <= ").concat(t[1])},items:[{label:"90 - 100%",value:"90-100"},{label:"70 - 89%",value:"70-89"},{label:"50 - 69%",value:"50-69"},{label:"Less than 50%",value:"0-49"}]}]},181:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return s}));var r,o=n(176),a=n(86),i=n(222),c=n(295);function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(r=Object(o.getRegistry)({},[Object(i.a)()].concat(t))).register({form:c.a,notifications:a.notifications}),r}function s(){return r.getStore()}},204:function(e,t,n){"use strict";n.d(t,"b",(function(){return R})),n.d(t,"a",(function(){return N}));var r=n(15),o=n(0),a=n.n(o),i=n(134),c=n.n(i),l=n(177),s=n.n(l),u=n(147),p=n.n(u),f=n(145),m=n.n(f),d=n(148),h=n.n(d),b=n(149),g=n.n(b),v=n(116),y=n.n(v);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y()(e);if(t){var o=y()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g()(this,n)}}function x(e){return function(t){h()(o,t);var n,r=w(o);function o(e){var t;return p()(this,o),(t=r.call(this,e)).state={component:null},t}return m()(o,[{key:"componentDidMount",value:(n=s()(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):a.a.createElement("div",null)}}]),o}(o.Component)}var E=n(207),P=n.n(E),_=x((function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,1237))})),S=x((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,1238))})),j=x((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,1239))})),O=x((function(){return n.e(0).then(n.bind(null,766))})),k=x((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,1240))})),C=x((function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,1243))})),D=x((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,1241))})),R={compliancePolicies:"/scappolicies",reports:"/reports",reportsSystems:"/reports/systems",complianceSystems:"/systems",policyDetails:"/scappolicies/:policy_id",reportDetails:"/reports/:report_id",systemDetails:"/systems/:inventoryId"},N=function(e){var t=e.childProps.location.pathname;return a.a.createElement(r.g,null,a.a.createElement(r.d,{exact:!0,path:R.compliancePolicies,component:_}),a.a.createElement(r.d,{exact:!0,path:R.reports,component:S}),a.a.createElement(r.d,{exact:!0,path:R.reportsSystems,component:j}),a.a.createElement(r.d,{exact:!0,path:R.complianceSystems,component:O}),a.a.createElement(r.d,{exact:!0,path:R.reportDetails,component:k}),a.a.createElement(r.d,{exact:!0,path:R.policyDetails,component:C}),a.a.createElement(r.d,{path:R.systemDetails,component:D}),a.a.createElement(r.d,{render:function(){return P()(R,(function(e){return e===t}))?null:a.a.createElement(r.c,{to:R.reports})}}))}},208:function(e){e.exports=JSON.parse('{"a":"1.1.0"}')},218:function(e,t){},393:function(e,t,n){var r=n(394);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(11)(r,o);r.locals&&(e.exports=r.locals)},394:function(e,t,n){var r=n(10),o=n(282),a=n(283);(t=r(!1)).i(o),t.i(a),t.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.pf-c-page__main .pf-c-page-header.pf-c-page__main-section.page-header-tabs{padding-bottom:0px !important}.pf-c-page__main .pf-c-page-header.pf-c-page__main-section .pf-l-tabs,.pf-c-page__main .pf-c-page-header.pf-c-page__main-section .pf-c-tabs{padding-top:22px}.upload-instructions{background:white}.policy-details-button{display:flex;justify-content:right}.chart-inline tspan{font-family:inherit !important}.wizard-progress-bar{text-align:left;width:var(--pf-global--breakpoint--sm)}.wizard-failed-message{color:var(--pf-global--danger-color--100);font-weight:bold;text-align:left}.grey-icon{color:var(--pf-global--Color--200)}button.pf-c-button.pf-m-tertiary.wizard-os-button{padding:30px;margin-right:15px;--pf-c-button--m-tertiary--focus--BorderColor: #06c;--pf-c-button--m-tertiary--hover--BorderColor: #06c}button.pf-c-button.pf-m-tertiary.active-wizard-os-button{font-weight:bold;color:#06c;--pf-c-button--m-tertiary--BorderColor: #06c;--pf-c-button--BorderWidth: 2px}.ins-c-warning-text{color:var(--pf-global--warning-color--200)}\n",""]),e.exports=t},480:function(e,t){},486:function(e,t){},488:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(23),i=n.n(a),c=n(489),l=n(493),s=n(500),u=n(495),p=n(70),f=n(67),m=n(181),d=n(12),h=n.n(d),b=n(151),g=n.n(b),v=n(204),y=n(86),w=(n(391),n(393),function(e){var t={reports:function(e){insights.chrome.appNavClick({id:"reports",redirect:e})},scappolicies:function(e){insights.chrome.appNavClick({id:"scappolicies",redirect:e})},systems:function(e){insights.chrome.appNavClick({id:"systems",redirect:e})}};return Object(r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("compliance");var n=e.location.pathname.split("/")[1]||"reports",r=insights.chrome.on("APP_NAVIGATION",(function(r){r.domEvent&&(e.history.push("/".concat(r.navId)),t[n](!0))}));return function(){return r()}}),[]),Object(r.useEffect)((function(){var n=e.location.pathname.split("/")[1]||"reports";insights&&insights.chrome&&n&&t[n](!1)}),[t,e.location]),o.a.createElement(o.a.Fragment,null,o.a.createElement(y.NotificationsPortal,null),o.a.createElement(v.a,{childProps:e}))});w.propTypes={location:h.a.object,history:h.a.object};var x=g()(w),E=n(159),P=n(205),_=new l.a({link:new s.a({credentials:"include",uri:E.a+"/graphql"}),cache:new u.b}),S=window.location.pathname.split("/");S.shift();var j="/";"beta"===S[0]&&(j="/".concat(S.shift(),"/")),window.insights.chrome.auth.getUser().then((function(){i.a.render(o.a.createElement(f.Provider,{store:Object(m.b)().getStore()},o.a.createElement(P.IntlProvider,{locale:navigator.language},o.a.createElement(p.BrowserRouter,{basename:"".concat(j).concat(S[0],"/").concat(S[1])},o.a.createElement(c.b,{client:_},o.a.createElement(x,null))))),document.getElementById("root"))}))}});
//# sourceMappingURL=../sourcemaps/App.js.map
(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[132],{67073:(e,t,n)=>{(t=n(23645)(!1)).push([e.id,".pf-c-page__main .pf-c-page-header.pf-c-page__main-section.page-header-tabs{padding-bottom:0px !important}.pf-c-page__main .pf-c-page-header.pf-c-page__main-section .pf-l-tabs,.pf-c-page__main .pf-c-page-header.pf-c-page__main-section .pf-c-tabs{padding-top:22px}.upload-instructions{background:white}.policy-details-button{display:flex;justify-content:right}.chart-inline tspan{font-family:inherit !important}.wizard-progress-bar{text-align:left;width:var(--pf-global--breakpoint--sm)}.wizard-failed-message{color:var(--pf-global--danger-color--100);font-weight:bold;text-align:left;width:var(--pf-global--breakpoint--sm)}.wizard-failed-errors{color:var(--pf-global--danger-color--100);font-weight:normal;text-align:left;width:var(--pf-global--breakpoint--sm)}.grey-icon{color:var(--pf-global--Color--200)}button.pf-c-button.pf-m-tertiary.wizard-os-button{padding:30px;margin-right:15px;--pf-c-button--m-tertiary--focus--BorderColor: #06c;--pf-c-button--m-tertiary--hover--BorderColor: #06c}button.pf-c-button.pf-m-tertiary.active-wizard-os-button{font-weight:bold;color:#06c;--pf-c-button--m-tertiary--BorderColor: #06c;--pf-c-button--BorderWidth: 2px}.ins-c-warning-text{color:var(--pf-global--warning-color--200)}.ins-c-non-bold-h2{font-size:var(--pf-c-content--h2--FontSize);font-weight:normal}.ins-u-passed{color:var(--pf-global--success-color--200)}.ins-u-failed{color:var(--pf-global--danger-color--100)}.ins-u-warning{color:var(--pf-global--warning-color--100)}\n",""]),e.exports=t},94812:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var o=n(45697),r=n.n(o),a=n(77865),i=n.n(a),c=n(36873),l=n(67154),s=n.n(l),p=n(50437),u="Reports",f=[{path:"/reports",title:u,component:(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(896),n.e(834),n.e(56),n.e(311),n.e(322)]).then(n.bind(n,78190))}))},{path:"/reports/:report_id",title:"Report: $entityTitle - ".concat(u),defaultTitle:u,component:(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(896),n.e(834),n.e(5),n.e(56),n.e(311),n.e(357),n.e(953),n.e(164),n.e(402),n.e(72)]).then(n.bind(n,44641))}))},{path:"/reports/:report_id/delete",title:"Delete report - ".concat(u),component:(0,a.lazy)((function(){return Promise.all([n.e(896),n.e(56),n.e(357),n.e(953)]).then(n.bind(n,5499))})),modal:!0}],m="SCAP policies",d=[{path:"/scappolicies",title:m,component:(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(896),n.e(834),n.e(56),n.e(311),n.e(565)]).then(n.bind(n,57382))}))},{path:"/scappolicies/new",title:m,component:(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(896),n.e(834),n.e(5),n.e(56),n.e(311),n.e(357),n.e(953),n.e(164),n.e(402)]).then(n.bind(n,92428))})),modal:!0},{path:"/scappolicies/:policy_id",title:"$entityTitle - ".concat(m),defaultTitle:m,component:(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(896),n.e(834),n.e(5),n.e(56),n.e(311),n.e(357),n.e(953),n.e(164),n.e(402),n.e(705)]).then(n.bind(n,50207))}))},{path:"/scappolicies/:policy_id/edit",title:"$entityTitle - ".concat(m),defaultTitle:m,component:(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(896),n.e(834),n.e(5),n.e(56),n.e(311),n.e(357),n.e(953),n.e(164),n.e(402)]).then(n.bind(n,59354))})),modal:!0},{path:"/scappolicies/:policy_id/delete",title:"Delete policy - ".concat(m),component:(0,a.lazy)((function(){return Promise.all([n.e(896),n.e(56),n.e(357),n.e(164)]).then(n.bind(n,62103))})),modal:!0}],h="Systems",g=[{path:"/systems",title:h,component:(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(896),n.e(834),n.e(5),n.e(56),n.e(311),n.e(357),n.e(953),n.e(164),n.e(402)]).then(n.bind(n,82813))}))},{path:"/systems/:inventoryId",title:"$entityTitle - ".concat(h),defaultTitle:h,component:(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(896),n.e(834),n.e(5),n.e(56),n.e(311),n.e(357),n.e(953),n.e(164),n.e(402),n.e(539)]).then(n.bind(n,6378))}))}],b=[].concat(d,f,g),v=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i().createElement(p.ZP,s()({},t,{routes:b}))},y=n(24685),w=(n(14154),n(42564)),P={reports:function(e){insights.chrome.appNavClick({id:"reports",redirect:e})},scappolicies:function(e){insights.chrome.appNavClick({id:"scappolicies",redirect:e})},systems:function(e){insights.chrome.appNavClick({id:"systems",redirect:e})}},_=function(e){return(0,w.Br)(),(0,a.useEffect)((function(){var t,n;insights.chrome.init(),null===(t=insights.chrome)||void 0===t||null===(n=t.hideGlobalFilter)||void 0===n||n.call(t),insights.chrome.identifyApp("compliance");var o=e.location.pathname.split("/")[1]||"reports",r=insights.chrome.on("APP_NAVIGATION",(function(t){t.domEvent&&(e.history.push("/".concat(t.navId)),P[o](!0))}));return function(){return r()}}),[]),i().createElement(i().Fragment,null,i().createElement(y.ZP,null),i().createElement(v,{childProps:e}))};_.propTypes={location:r().object,history:r().object};const S=(0,c.Z)(_)},50437:(e,t,n)=>{"use strict";n.d(t,{C3:()=>h,Wb:()=>g,ZP:()=>b});var o=n(59713),r=n.n(o),a=n(77865),i=n.n(a),c=n(45697),l=n.n(c),s=n(47194),p=n(52998);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(e){var t=e.component,n=e.modal,o=e.path,r=e.props,c=void 0===r?{}:r,l=e.title,u=(0,s.useLocation)(),m=(0,p.Z)(),d=!!(0,s.matchPath)(u.pathname,{path:o,exact:!0}),h=l.includes("$entityTitle"),g={exact:!0,key:"".concat(n?"modal":"fullpage","-route-").concat(o.replace("/","-")),path:o},b=f(f({},c),{},{route:f(f({},e),{},{isCurrent:d,setTitle:m})});return(0,a.useEffect)((function(){d&&!h&&m(l)})),i().createElement(s.Route,g,i().createElement(t,b))};m.propTypes={component:l().node,modal:l().bool,path:l().string,props:l().object,title:l().string};var d=function(e){var t,n=e.routes,o=(0,s.useLocation)(),r=null==o||null===(t=o.state)||void 0===t?void 0:t.background,c=o.pathname,l=n.filter((function(e){return!e.modal})),p=n.filter((function(e){return e.modal})),u=n.map((function(e){return e.path}));return i().createElement(a.Suspense,{fallback:a.Fragment},i().createElement(s.Switch,{location:r||o},l.map(m),i().createElement(s.Route,{render:function(){return u.some((function(e){return e===c}))?null:i().createElement(s.Redirect,{to:"/reports"})}})),p.map(m))};d.propTypes={routes:l().array};var h=function(e){var t=(0,s.useLocation)(),n=(0,s.useHistory)();return function(o){var r,a=null==t||null===(r=t.state)||void 0===r?void 0:r.background;n.push(f({pathname:a?a.pathname:e,hash:a?a.hash:void 0},o))}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(0,s.useLocation)(),n=t.hash&&t.hash.length>0?t.hash:void 0;return(n||e).replace("#","")};const b=d},52998:(e,t,n)=>{"use strict";n.d(t,{a:()=>i,Z:()=>c});var o=n(77865),r=n(47194),a=n(31222),i=function(e,t){var n=(0,r.useLocation)();(0,o.useEffect)((function(){var n=t?e.title.replace("$entityTitle",t):e.defaultTitle;e.setTitle(n)}),[t,n,e])};const c=function(){return function(e){document.title=function(e){return"".concat(e).concat(a.IJ)}(e||a.i2)}}},42564:(e,t,n)=>{"use strict";n.d(t,{Br:()=>c,ZP:()=>l});var o=n(31222),r=n(47194),a="insights:compliance",i=function(e,t){var n="enable"===e;n?(console.log("Setting feature value for ".concat(t," to ").concat(n)),localStorage.setItem("".concat(a,":").concat(t),n)):(console.log("Removing feature setting of ".concat(t)),localStorage.removeItem("".concat(a,":").concat(t)))},c=function(){var e=(0,r.useLocation)(),t=e.search,n=e.pathName,o=(0,r.useHistory)();t&&(new URLSearchParams(t).forEach(i),o.push(n))};const l=function(e){if(e){var t=function(e){var t=o.R2[e];return!!localStorage.getItem("".concat(a,":").concat(e))||t}(e);return console.log("Feature ".concat(e," is set to ").concat(t)),t}}},31222:(e,t,n)=>{"use strict";n.d(t,{dT:()=>i,rN:()=>u,qo:()=>c,i2:()=>r,IJ:()=>a,R2:()=>f,iz:()=>p,RM:()=>l});var o=n(89421),r="Compliance | Red Hat Insights",a=" - ".concat(r),i="/api/compliance",c=[{type:o.Yu.text,label:"Name",filterString:function(e){return"name ~ ".concat(e)}}],l=function(e){return[{type:o.Yu.checkbox,label:"Policy",filterString:function(e){return"policy_id = ".concat(e)},items:e.map((function(e){return{label:e.name,value:e.id}}))}]},s=function(e){return Array.from(new Set(e.map((function(e){return e.majorOsVersion}))))},p=function(e){return[{type:o.Yu.checkbox,label:"Operating system",filterString:function(e){return"os_major_version = ".concat(e)},items:s(e).map((function(e){return{label:"RHEL ".concat(e),value:e}}))}]},u=[{type:o.Yu.checkbox,label:"Compliant",filterString:function(e){return"compliant = ".concat(e)},items:[{label:"Compliant",value:"true"},{label:"Non-compliant",value:"false"}]},{type:o.Yu.checkbox,label:"Compliance score",filterString:function(e){var t=e.split("-");return"compliance_score >= ".concat(t[0]," and compliance_score <= ").concat(t[1])},items:[{label:"90 - 100%",value:"90-100"},{label:"70 - 89%",value:"70-89"},{label:"50 - 69%",value:"50-69"},{label:"Less than 50%",value:"0-49"}]}],f={reportsTableView:!0,multiversionTabs:!1,showSsgVersions:!0,newInventory:!0}},55206:(e,t,n)=>{"use strict";n.d(t,{S1:()=>u,bh:()=>f});var o,r=n(319),a=n.n(r),i=n(67336),c=n(83215),l=n(72689),s=n.n(l),p=n(30496);function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(o=(0,i.JH)({},[s()].concat(a()(t.filter((function(e){return void 0!==e})))))).register({form:p.Z,notifications:c.ee}),o}function f(){return o.getStore()}},14154:(e,t,n)=>{"use strict";var o=n(93379),r=n.n(o),a=n(67073),i=n.n(a),c=r()(i(),{insert:"head",singleton:!1});if(!i().locals||e.hot.invalidate){var l=i().locals;e.hot.accept(67073,(t=>{a=n(67073),function(e,t,n){if(!e&&t||e&&!t)return!1;var o;for(o in e)if(e[o]!==t[o])return!1;for(o in t)if(!e[o])return!1;return!0}(l,(i=n.n(a))().locals)?(l=i().locals,c(i())):e.hot.invalidate()}))}e.hot.dispose((function(){c()})),i().locals}}]);
//# sourceMappingURL=132.37345ff2fb76b3e918ef.js.map
(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[132],{67073:(e,t,n)=>{(t=n(23645)(!1)).push([e.id,".pf-c-page__main .pf-c-page-header .pf-c-title.pad-bottom{padding-bottom:inherit}.pf-c-page__main .pf-c-page-header.pf-c-page__main-section.page-header-tabs{padding-bottom:0px !important}.pf-c-page__main .pf-c-page-header.pf-c-page__main-section .pf-l-tabs,.pf-c-page__main .pf-c-page-header.pf-c-page__main-section .pf-c-tabs{padding-top:22px}.upload-instructions{background:white}.policy-details-button{display:flex;justify-content:right}.chart-inline tspan{font-family:inherit !important}.wizard-progress-bar{text-align:left;width:var(--pf-global--breakpoint--sm)}.wizard-failed-message{color:var(--pf-global--danger-color--100);font-weight:bold;text-align:left;width:var(--pf-global--breakpoint--sm)}.wizard-failed-errors{color:var(--pf-global--danger-color--100);font-weight:normal;text-align:left;width:var(--pf-global--breakpoint--sm)}.grey-icon{color:var(--pf-global--Color--200)}button.pf-c-button.pf-m-tertiary.wizard-os-button{padding:30px;margin-right:15px;--pf-c-button--m-tertiary--focus--BorderColor: #06c;--pf-c-button--m-tertiary--hover--BorderColor: #06c}button.pf-c-button.pf-m-tertiary.active-wizard-os-button{font-weight:bold;color:#06c;--pf-c-button--m-tertiary--BorderColor: #06c;--pf-c-button--BorderWidth: 2px}.ins-c-warning-text{color:var(--pf-global--warning-color--200)}.ins-c-non-bold-h2{font-size:var(--pf-c-content--h2--FontSize);font-weight:normal}.ins-u-passed{color:var(--pf-global--success-color--200)}.ins-u-failed{color:var(--pf-global--danger-color--100)}.ins-u-warning{color:var(--pf-global--warning-color--100)}\n",""]),e.exports=t},94812:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var o=n(45697),r=n.n(o),i=n(77865),a=n.n(i),c=n(36873),l=n(67154),p=n.n(l),s=n(50437),u="Reports",f=[{path:"/reports",title:u,component:(0,i.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(896),n.e(834),n.e(56),n.e(311),n.e(564),n.e(322)]).then(n.bind(n,78190))}))},{path:"/reports/:report_id",title:"Report: $entityTitle - ".concat(u),defaultTitle:u,component:(0,i.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(896),n.e(834),n.e(435),n.e(56),n.e(311),n.e(357),n.e(953),n.e(164),n.e(564),n.e(402),n.e(72)]).then(n.bind(n,44641))}))},{path:"/reports/:report_id/delete",title:"Delete report - ".concat(u),component:(0,i.lazy)((function(){return Promise.all([n.e(896),n.e(56),n.e(357),n.e(953)]).then(n.bind(n,5499))})),modal:!0}],m="SCAP policies",d=[{path:"/scappolicies",title:m,component:(0,i.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(896),n.e(834),n.e(56),n.e(311),n.e(565)]).then(n.bind(n,57382))}))},{path:"/scappolicies/new",title:m,component:(0,i.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(896),n.e(834),n.e(435),n.e(56),n.e(311),n.e(357),n.e(953),n.e(164),n.e(564),n.e(402)]).then(n.bind(n,92428))})),modal:!0},{path:"/scappolicies/:policy_id",title:"$entityTitle - ".concat(m),defaultTitle:m,component:(0,i.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(896),n.e(834),n.e(435),n.e(56),n.e(311),n.e(357),n.e(953),n.e(164),n.e(564),n.e(402),n.e(705)]).then(n.bind(n,50207))}))},{path:"/scappolicies/:policy_id/edit",title:"$entityTitle - ".concat(m),defaultTitle:m,component:(0,i.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(896),n.e(834),n.e(435),n.e(56),n.e(311),n.e(357),n.e(953),n.e(164),n.e(564),n.e(402)]).then(n.bind(n,59354))})),modal:!0},{path:"/scappolicies/:policy_id/delete",title:"Delete policy - ".concat(m),component:(0,i.lazy)((function(){return Promise.all([n.e(896),n.e(56),n.e(357),n.e(164)]).then(n.bind(n,62103))})),modal:!0}],h="Systems",b=[{path:"/systems",title:h,component:(0,i.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(896),n.e(834),n.e(435),n.e(56),n.e(311),n.e(357),n.e(953),n.e(164),n.e(564),n.e(402)]).then(n.bind(n,82813))}))},{path:"/systems/:inventoryId",title:"$entityTitle - ".concat(h),defaultTitle:h,component:(0,i.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(896),n.e(834),n.e(435),n.e(56),n.e(311),n.e(357),n.e(953),n.e(164),n.e(564),n.e(402),n.e(539)]).then(n.bind(n,6378))}))}],g=[].concat(d,f,b),v=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return a().createElement(s.ZP,p()({},t,{routes:g}))},y=n(24685),w=(n(14154),{reports:function(e){insights.chrome.appNavClick({id:"reports",redirect:e})},scappolicies:function(e){insights.chrome.appNavClick({id:"scappolicies",redirect:e})},systems:function(e){insights.chrome.appNavClick({id:"systems",redirect:e})}}),P=function(e){return(0,i.useEffect)((function(){var t,n;insights.chrome.init(),null===(t=insights.chrome)||void 0===t||null===(n=t.hideGlobalFilter)||void 0===n||n.call(t),insights.chrome.identifyApp("compliance");var o=e.location.pathname.split("/")[1]||"reports",r=insights.chrome.on("APP_NAVIGATION",(function(t){t.domEvent&&(e.history.push("/".concat(t.navId)),w[o](!0))}));return function(){return r()}}),[]),a().createElement(a().Fragment,null,a().createElement(y.ZP,null),a().createElement(v,{childProps:e}))};P.propTypes={location:r().object,history:r().object};const _=(0,c.Z)(P)},50437:(e,t,n)=>{"use strict";n.d(t,{C3:()=>h,Wb:()=>b,ZP:()=>g});var o=n(59713),r=n.n(o),i=n(77865),a=n.n(i),c=n(45697),l=n.n(c),p=n(47194),s=n(52998);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(e){var t=e.component,n=e.modal,o=e.path,r=e.props,c=void 0===r?{}:r,l=e.title,u=(0,p.useLocation)(),m=(0,s.Z)(),d=!!(0,p.matchPath)(u.pathname,{path:o,exact:!0}),h=l.includes("$entityTitle"),b={exact:!0,key:"".concat(n?"modal":"fullpage","-route-").concat(o.replace("/","-")),path:o},g=f(f({},c),{},{route:f(f({},e),{},{isCurrent:d,setTitle:m})});return(0,i.useEffect)((function(){d&&!h&&m(l)})),a().createElement(p.Route,b,a().createElement(t,g))};m.propTypes={component:l().node,modal:l().bool,path:l().string,props:l().object,title:l().string};var d=function(e){var t,n=e.routes,o=(0,p.useLocation)(),r=null==o||null===(t=o.state)||void 0===t?void 0:t.background,c=o.pathname,l=n.filter((function(e){return!e.modal})),s=n.filter((function(e){return e.modal})),u=n.map((function(e){return e.path}));return a().createElement(i.Suspense,{fallback:i.Fragment},a().createElement(p.Switch,{location:r||o},l.map(m),a().createElement(p.Route,{render:function(){return u.some((function(e){return e===c}))?null:a().createElement(p.Redirect,{to:"/reports"})}})),s.map(m))};d.propTypes={routes:l().array};var h=function(e){var t=(0,p.useLocation)(),n=(0,p.useHistory)();return function(o){var r,i=null==t||null===(r=t.state)||void 0===r?void 0:r.background;n.push(f({pathname:i?i.pathname:e,hash:i?i.hash:void 0},o))}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(0,p.useLocation)(),n=t.hash&&t.hash.length>0?t.hash:void 0;return(n||e).replace("#","")};const g=d},52998:(e,t,n)=>{"use strict";n.d(t,{a:()=>a,Z:()=>c});var o=n(77865),r=n(47194),i=n(31222),a=function(e,t){var n=(0,r.useLocation)();(0,o.useEffect)((function(){var n=t?e.title.replace("$entityTitle",t):e.defaultTitle;e.setTitle(n)}),[t,n])};const c=function(){return function(e){document.title=function(e){return"".concat(e).concat(i.IJ)}(e||i.i2)}}},31222:(e,t,n)=>{"use strict";n.d(t,{dT:()=>a,rN:()=>u,qo:()=>c,i2:()=>r,IJ:()=>i,R2:()=>f,iz:()=>s,RM:()=>l});var o=n(89421),r="Compliance | Red Hat Insights",i=" - ".concat(r),a="/api/compliance",c=[{type:o.Yu.text,label:"Name",filterString:function(e){return"name ~ ".concat(e)}}],l=function(e){return[{type:o.Yu.checkbox,label:"Policy",filterString:function(e){return"policy_id = ".concat(e)},items:e.map((function(e){return{label:e.name,value:e.id}}))}]},p=function(e){return Array.from(new Set(e.map((function(e){return e.majorOsVersion}))))},s=function(e){return[{type:o.Yu.checkbox,label:"Operating system",filterString:function(e){return"os_major_version = ".concat(e)},items:p(e).map((function(e){return{label:"RHEL ".concat(e),value:e}}))}]},u=[{type:o.Yu.checkbox,label:"Compliant",filterString:function(e){return"compliant = ".concat(e)},items:[{label:"Compliant",value:"true"},{label:"Non-compliant",value:"false"}]},{type:o.Yu.checkbox,label:"Compliance score",filterString:function(e){var t=e.split("-");return"compliance_score >= ".concat(t[0]," and compliance_score <= ").concat(t[1])},items:[{label:"90 - 100%",value:"90-100"},{label:"70 - 89%",value:"70-89"},{label:"50 - 69%",value:"50-69"},{label:"Less than 50%",value:"0-49"}]}],f={reportsTableView:!0,multiversionTabs:!1,showSsgVersions:!0,newInventory:!0}},55206:(e,t,n)=>{"use strict";n.d(t,{S1:()=>u,bh:()=>f});var o,r=n(319),i=n.n(r),a=n(67336),c=n(83215),l=n(10451),p=n.n(l),s=n(30496);function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(o=(0,a.JH)({},[p()()].concat(i()(t.filter((function(e){return void 0!==e})))))).register({form:s.Z,notifications:c.ee}),o}function f(){return o.getStore()}},14154:(e,t,n)=>{"use strict";var o=n(93379),r=n.n(o),i=n(67073),a=n.n(i),c=r()(a(),{insert:"head",singleton:!1});if(!a().locals||e.hot.invalidate){var l=a().locals;e.hot.accept(67073,(t=>{i=n(67073),function(e,t,n){if(!e&&t||e&&!t)return!1;var o;for(o in e)if(e[o]!==t[o])return!1;for(o in t)if(!e[o])return!1;return!0}(l,(a=n.n(i))().locals)?(l=a().locals,c(a())):e.hot.invalidate()}))}e.hot.dispose((function(){c()})),a().locals}}]);
//# sourceMappingURL=132.8b32a8043368fce70f51.js.map
(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[894],{37057:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var o=n(45697),r=n.n(o),a=n(92950),i=n.n(a),c=n(36873),l=n(22122),p=n(52710),s="Reports",u=[{path:"/reports",title:s,component:(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(877),n.e(291),n.e(788),n.e(373),n.e(712),n.e(465),n.e(322)]).then(n.bind(n,1649))}))},{path:"/reports/:report_id",title:"Report: $entityTitle - ".concat(s),defaultTitle:s,component:(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(877),n.e(291),n.e(788),n.e(373),n.e(194),n.e(24),n.e(712),n.e(465),n.e(609),n.e(164),n.e(953),n.e(402),n.e(129),n.e(72)]).then(n.bind(n,79641))}))},{path:"/reports/:report_id/delete",title:"Delete report - ".concat(s),component:(0,a.lazy)((function(){return Promise.all([n.e(877),n.e(712),n.e(609),n.e(953)]).then(n.bind(n,57481))})),modal:!0}],f="SCAP policies",m=[{path:"/scappolicies",title:f,component:(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(877),n.e(291),n.e(788),n.e(373),n.e(712),n.e(465),n.e(565)]).then(n.bind(n,95790))}))},{path:"/scappolicies/new",title:f,component:(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(877),n.e(291),n.e(788),n.e(373),n.e(194),n.e(712),n.e(465),n.e(609),n.e(164),n.e(953),n.e(402)]).then(n.bind(n,69284))})),modal:!0},{path:"/scappolicies/:policy_id",title:"$entityTitle - ".concat(f),defaultTitle:f,component:(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(877),n.e(291),n.e(788),n.e(373),n.e(194),n.e(712),n.e(465),n.e(609),n.e(164),n.e(953),n.e(402),n.e(129),n.e(705)]).then(n.bind(n,77388))}))},{path:"/scappolicies/:policy_id/edit",title:"$entityTitle - ".concat(f),defaultTitle:f,component:(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(877),n.e(291),n.e(788),n.e(373),n.e(194),n.e(712),n.e(465),n.e(609),n.e(164),n.e(953),n.e(402)]).then(n.bind(n,52869))})),modal:!0},{path:"/scappolicies/:policy_id/delete",title:"Delete policy - ".concat(f),component:(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(877),n.e(712),n.e(609),n.e(164)]).then(n.bind(n,89671))})),modal:!0}],d="Systems",h=[{path:"/systems",title:d,component:(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(877),n.e(291),n.e(788),n.e(373),n.e(194),n.e(712),n.e(465),n.e(609),n.e(164),n.e(953),n.e(402)]).then(n.bind(n,44434))}))},{path:"/systems/:inventoryId",title:"$entityTitle - ".concat(d),defaultTitle:d,component:(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(877),n.e(291),n.e(788),n.e(373),n.e(194),n.e(712),n.e(465),n.e(609),n.e(164),n.e(953),n.e(402),n.e(539)]).then(n.bind(n,40033))}))}],b=[].concat(m,u,h),g=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i().createElement(p.ZP,(0,l.Z)({},t,{routes:b}))},v=n(24685),y=(n(14154),n(99373),n(334)),w="insights:compliance",_=function(e,t){var n="enable"===e;n?(console.log("Setting feature value for ".concat(t," to ").concat(n)),localStorage.setItem("".concat(w,":").concat(t),n)):(console.log("Removing feature setting of ".concat(t)),localStorage.removeItem("".concat(w,":").concat(t)))},P={reports:function(e){insights.chrome.appNavClick({id:"reports",redirect:e})},scappolicies:function(e){insights.chrome.appNavClick({id:"scappolicies",redirect:e})},systems:function(e){insights.chrome.appNavClick({id:"systems",redirect:e})}},O=function(e){var t,n,o,r;return n=(t=(0,y.useLocation)()).search,o=t.pathName,r=(0,y.useHistory)(),n&&(new URLSearchParams(n).forEach(_),r.push(o)),(0,a.useEffect)((function(){var t,n;insights.chrome.init(),null===(t=insights.chrome)||void 0===t||null===(n=t.hideGlobalFilter)||void 0===n||n.call(t),insights.chrome.identifyApp("compliance");var o=e.location.pathname.split("/")[1]||"reports",r=insights.chrome.on("APP_NAVIGATION",(function(t){t.domEvent&&(e.history.push("/".concat(t.navId)),P[o](!0))}));return function(){return r()}}),[]),i().createElement(i().Fragment,null,i().createElement(v.ZP,null),i().createElement(g,{childProps:e}))};O.propTypes={location:r().object,history:r().object};const k=(0,c.Z)(O)},52710:(e,t,n)=>{"use strict";n.d(t,{C3:()=>d,Wb:()=>h,ZP:()=>b});var o=n(96156),r=n(92950),a=n.n(r),i=n(45697),c=n.n(i),l=n(334),p=n(7648);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e){var t=e.component,n=e.modal,o=e.path,i=e.props,c=void 0===i?{}:i,s=e.title,f=(0,l.useLocation)(),m=(0,p.Z)(),d=!!(0,l.matchPath)(f.pathname,{path:o,exact:!0}),h=s.includes("$entityTitle"),b={exact:!0,key:"".concat(n?"modal":"fullpage","-route-").concat(o.replace("/","-")),path:o},g=u(u({},c),{},{route:u(u({},e),{},{isCurrent:d,setTitle:m})});return(0,r.useEffect)((function(){d&&!h&&m(s)})),a().createElement(l.Route,b,a().createElement(t,g))};f.propTypes={component:c().node,modal:c().bool,path:c().string,props:c().object,title:c().string};var m=function(e){var t,n=e.routes,o=(0,l.useLocation)(),i=null==o||null===(t=o.state)||void 0===t?void 0:t.background,c=o.pathname,p=n.filter((function(e){return!e.modal})),s=n.filter((function(e){return e.modal})),u=n.map((function(e){return e.path}));return a().createElement(r.Suspense,{fallback:r.Fragment},a().createElement(l.Switch,{location:i||o},p.map(f),a().createElement(l.Route,{render:function(){return u.some((function(e){return e===c}))?null:a().createElement(l.Redirect,{to:"/reports"})}})),s.map(f))};m.propTypes={routes:c().array};var d=function(e){var t=(0,l.useLocation)(),n=(0,l.useHistory)();return function(o){var r,a=null==t||null===(r=t.state)||void 0===r?void 0:r.background;n.push(u({pathname:a?a.pathname:e,hash:a?a.hash:void 0},o))}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(0,l.useLocation)(),n=t.hash&&t.hash.length>0?t.hash:void 0;return(n||e).replace("#","")};const b=m},7648:(e,t,n)=>{"use strict";n.d(t,{a:()=>i,Z:()=>c});var o=n(92950),r=n(334),a=n(99373),i=function(e,t){var n=(0,r.useLocation)();(0,o.useEffect)((function(){var n=t?e.title.replace("$entityTitle",t):e.defaultTitle;e.setTitle(n)}),[t,n,e])};const c=function(){return function(e){document.title=function(e){return"".concat(e).concat(a.IJ)}(e||a.i2)}}},99373:(e,t,n)=>{"use strict";n.d(t,{dT:()=>i,rN:()=>f,qo:()=>c,i2:()=>r,IJ:()=>a,iz:()=>s,n3:()=>u,RM:()=>l});var o=n(89421),r="Compliance | Red Hat Insights",a=" - ".concat(r),i="/api/compliance",c=[{type:o.Yu.text,label:"Name",filterString:function(e){return"name ~ ".concat(e)}}],l=function(e){return[{type:o.Yu.checkbox,label:"Policy",filterString:function(e){return"policy_id = ".concat(e)},items:e.map((function(e){return{label:e.name,value:e.id}}))}]},p=function(e){return Array.from(new Set(e.map((function(e){return e.majorOsVersion}))))},s=function(e){return[{type:o.Yu.checkbox,label:"Operating system",filterString:function(e){return"os_major_version = ".concat(e)},items:p(e).map((function(e){return{label:"RHEL ".concat(e),value:e}}))}]},u=function(e){var t,n=Object.keys(e).map((t=e,function(e){return{label:"RHEL ".concat(e),value:e,items:t[e].map((function(t){return{label:"RHEL ".concat(e,".").concat(t),value:t}}))}}));return[{type:o.Yu.group,label:"Operating system",filterString:function(e){return[Object.keys(e).flatMap((function(t){return Object.keys(e[t]).map((function(n){return e[t][n]&&"(os_major_version = ".concat(t," AND os_minor_version = ").concat(n,")")}))})).filter((function(e){return!!e})).join(" OR ")]},items:n}]},f=[{type:o.Yu.checkbox,label:"Compliant",filterString:function(e){return"compliant = ".concat(e)},items:[{label:"Compliant",value:"true"},{label:"Non-compliant",value:"false"}]},{type:o.Yu.checkbox,label:"Compliance score",filterString:function(e){var t=e.split("-");return"compliance_score >= ".concat(t[0]," and compliance_score <= ").concat(t[1])},items:[{label:"90 - 100%",value:"90-100"},{label:"70 - 89%",value:"70-89"},{label:"50 - 69%",value:"50-69"},{label:"Less than 50%",value:"0-49"}]}]},30319:(e,t,n)=>{"use strict";n.d(t,{S1:()=>s,bh:()=>u});var o,r=n(85061),a=n(67336),i=n(83215),c=n(57283),l=n.n(c),p=n(30496);function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(o=(0,a.JH)({},[l()].concat((0,r.Z)(t.filter((function(e){return void 0!==e})))))).register({form:p.Z,notifications:i.ee}),o}function u(){return o.getStore()}},67073:(e,t,n)=>{(t=n(23645)(!1)).push([e.id,".pf-c-page__main .pf-c-page-header.pf-c-page__main-section.page-header-tabs{padding-bottom:0px !important}.pf-c-page__main .pf-c-page-header.pf-c-page__main-section .pf-l-tabs,.pf-c-page__main .pf-c-page-header.pf-c-page__main-section .pf-c-tabs{padding-top:22px}.pf-c-modal-box__body .pf-c-table.pf-m-sticky-header>thead>tr>*{top:calc(-1 * var(--pf-c-modal-box__body--PaddingTop))}.policy-delete-header-text{padding-left:10px}.policy-delete-body-text{padding-bottom:18px}.upload-instructions{background:white}.policy-details-button{display:flex;justify-content:right}.chart-inline tspan{font-family:inherit !important}.wizard-progress-bar{text-align:left;width:var(--pf-global--breakpoint--sm)}.wizard-failed-message{color:var(--pf-global--danger-color--100);font-weight:bold;text-align:left;width:var(--pf-global--breakpoint--sm)}.wizard-failed-errors{color:var(--pf-global--danger-color--100);font-weight:normal;text-align:left;width:var(--pf-global--breakpoint--sm)}.grey-icon{color:var(--pf-global--Color--200)}button.pf-c-button.pf-m-tertiary.wizard-os-button{padding:30px;margin-right:15px;--pf-c-button--m-tertiary--focus--BorderColor: #06c;--pf-c-button--m-tertiary--hover--BorderColor: #06c}button.pf-c-button.pf-m-tertiary.active-wizard-os-button{font-weight:bold;color:#06c;--pf-c-button--m-tertiary--BorderColor: #06c;--pf-c-button--BorderWidth: 2px}.pf-c-switch{--pf-c-switch--ColumnGap: 0}.ins-c-warning-text{color:var(--pf-global--warning-color--200)}.ins-c-non-bold-h2{font-size:var(--pf-c-content--h2--FontSize);font-weight:normal}.ins-u-passed{color:var(--pf-global--success-color--200)}.ins-u-failed{color:var(--pf-global--danger-color--100)}.ins-u-warning{color:var(--pf-global--warning-color--100)}\n",""]),e.exports=t},14154:(e,t,n)=>{"use strict";var o=n(93379),r=n.n(o),a=n(67073),i=n.n(a),c=r()(i(),{insert:"head",singleton:!1});if(!i().locals||e.hot.invalidate){var l=i().locals;e.hot.accept(67073,(t=>{a=n(67073),function(e,t,n){if(!e&&t||e&&!t)return!1;var o;for(o in e)if(e[o]!==t[o])return!1;for(o in t)if(!e[o])return!1;return!0}(l,(i=n.n(a))().locals)?(l=i().locals,c(i())):e.hot.invalidate()}))}e.hot.dispose((function(){c()})),i().locals}}]);
//# sourceMappingURL=../sourcemaps/894.fec5650845996c2007f0.js.map
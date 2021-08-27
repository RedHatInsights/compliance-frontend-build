(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[554],{87999:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var o=n(45697),r=n.n(o),c=n(92950),i=n.n(c),a=n(36873),l=n(22122),u=n(52710),s="Reports",p=[{path:"/reports",title:s,component:(0,c.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(66),n.e(974),n.e(322)]).then(n.bind(n,1649))}))},{path:"/reports/:report_id",title:"Report: $entityTitle - ".concat(s),defaultTitle:s,component:(0,c.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(66),n.e(974),n.e(609),n.e(164),n.e(953),n.e(402),n.e(758),n.e(72)]).then(n.bind(n,79641))}))},{path:"/reports/:report_id/delete",title:"Delete report - ".concat(s),component:(0,c.lazy)((function(){return Promise.all([n.e(736),n.e(66),n.e(609),n.e(953)]).then(n.bind(n,57481))})),modal:!0}],m="SCAP policies",f=[{path:"/scappolicies",title:m,component:(0,c.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(66),n.e(974),n.e(565)]).then(n.bind(n,95790))}))},{path:"/scappolicies/new",title:m,component:(0,c.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(66),n.e(974),n.e(609),n.e(164),n.e(953),n.e(402)]).then(n.bind(n,69284))})),modal:!0},{path:"/scappolicies/:policy_id",title:"$entityTitle - ".concat(m),defaultTitle:m,component:(0,c.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(66),n.e(974),n.e(609),n.e(164),n.e(953),n.e(402),n.e(758),n.e(705)]).then(n.bind(n,77388))}))},{path:"/scappolicies/:policy_id/edit",title:"$entityTitle - ".concat(m),defaultTitle:m,component:(0,c.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(66),n.e(974),n.e(609),n.e(164),n.e(953),n.e(402)]).then(n.bind(n,38879))})),modal:!0},{path:"/scappolicies/:policy_id/delete",title:"Delete policy - ".concat(m),component:(0,c.lazy)((function(){return Promise.all([n.e(736),n.e(66),n.e(609),n.e(164)]).then(n.bind(n,89671))})),modal:!0}],h="Systems",d=[{path:"/systems",title:h,component:(0,c.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(66),n.e(974),n.e(609),n.e(164),n.e(953),n.e(402)]).then(n.bind(n,44434))}))},{path:"/systems/:inventoryId",title:"$entityTitle - ".concat(h),defaultTitle:h,component:(0,c.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(66),n.e(974),n.e(609),n.e(164),n.e(953),n.e(402),n.e(539)]).then(n.bind(n,36805))}))}],v=[].concat(f,p,d),y=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i().createElement(u.ZP,(0,l.Z)({},t,{routes:v}))},b=n(51344),g=n(77346),P={reports:function(e){insights.chrome.appNavClick({id:"reports",redirect:e})},scappolicies:function(e){insights.chrome.appNavClick({id:"scappolicies",redirect:e})},systems:function(e){insights.chrome.appNavClick({id:"systems",redirect:e})}},O=function(e){return(0,g.Br)(),(0,c.useEffect)((function(){var t,n;insights.chrome.init(),null===(t=insights.chrome)||void 0===t||null===(n=t.hideGlobalFilter)||void 0===n||n.call(t),insights.chrome.identifyApp("compliance");var o=e.location.pathname.split("/")[1]||"reports",r=insights.chrome.on("APP_NAVIGATION",(function(t){t.domEvent&&(e.history.push("/".concat(t.navId)),P[o](!0))}));return function(){return r()}}),[]),i().createElement(i().Fragment,null,i().createElement(b.ZP,null),i().createElement(y,{childProps:e}))};O.propTypes={location:r().object,history:r().object};const j=(0,a.Z)(O)},52710:(e,t,n)=>{"use strict";n.d(t,{C3:()=>h,Wb:()=>d,ZP:()=>v});var o=n(96156),r=n(92950),c=n.n(r),i=n(45697),a=n.n(i),l=n(334),u=n(7648);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(e){var t=e.component,n=e.modal,o=e.path,i=e.props,a=void 0===i?{}:i,s=e.title,m=(0,l.useLocation)(),f=(0,u.Z)(),h=!!(0,l.matchPath)(m.pathname,{path:o,exact:!0}),d=s.includes("$entityTitle"),v={exact:!0,key:"".concat(n?"modal":"fullpage","-route-").concat(o.replace("/","-")),path:o},y=p(p({},a),{},{route:p(p({},e),{},{isCurrent:h,setTitle:f})});return(0,r.useEffect)((function(){h&&!d&&f(s)})),c().createElement(l.Route,v,c().createElement(t,y))};m.propTypes={component:a().node,modal:a().bool,path:a().string,props:a().object,title:a().string};var f=function(e){var t,n=e.routes,o=(0,l.useLocation)(),i=null==o||null===(t=o.state)||void 0===t?void 0:t.background,a=o.pathname,u=n.filter((function(e){return!e.modal})),s=n.filter((function(e){return e.modal})),p=n.map((function(e){return e.path}));return c().createElement(r.Suspense,{fallback:r.Fragment},c().createElement(l.Switch,{location:i||o},u.map(m),c().createElement(l.Route,{render:function(){return p.some((function(e){return e===a}))?null:c().createElement(l.Redirect,{to:"/reports"})}})),s.map(m))};f.propTypes={routes:a().array};var h=function(e){var t=(0,l.useLocation)(),n=(0,l.useHistory)();return function(o){var r,c=null==t||null===(r=t.state)||void 0===r?void 0:r.background;n.push(p({pathname:c?c.pathname:e,hash:c?c.hash:void 0},o))}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(0,l.useLocation)(),n=t.hash&&t.hash.length>0?t.hash:void 0;return(n||e).replace("#","")};const v=f},7648:(e,t,n)=>{"use strict";n.d(t,{a:()=>i,Z:()=>a});var o=n(92950),r=n(334),c=n(99373),i=function(e,t){var n=(0,r.useLocation)();(0,o.useEffect)((function(){var n=t?e.title.replace("$entityTitle",t):e.defaultTitle;e.setTitle(n)}),[t,n,e])};const a=function(){return function(e){document.title=function(e){return"".concat(e).concat(c.IJ)}(e||c.i2)}}},77346:(e,t,n)=>{"use strict";n.d(t,{Br:()=>a,ZP:()=>l});var o=n(99373),r=n(334),c="insights:compliance",i=function(e,t){var n="enable"===e;n?(console.log("Setting feature value for ".concat(t," to ").concat(n)),localStorage.setItem("".concat(c,":").concat(t),n)):(console.log("Removing feature setting of ".concat(t)),localStorage.removeItem("".concat(c,":").concat(t)))},a=function(){var e=(0,r.useLocation)(),t=e.search,n=e.pathName,o=(0,r.useHistory)();t&&(new URLSearchParams(t).forEach(i),o.push(n))};const l=function(e){if(e){var t=function(e){var t=o.R2[e];return!!localStorage.getItem("".concat(c,":").concat(e))||t}(e);return console.log("Feature ".concat(e," is set to ").concat(t)),t}}},99373:(e,t,n)=>{"use strict";n.d(t,{dT:()=>p,rN:()=>y,qo:()=>m,i2:()=>u,IJ:()=>s,R2:()=>b,iz:()=>d,n3:()=>v,RM:()=>f});var o=n(89421),r=n(92950),c=n.n(r),i=n(43047),a=n(69957),l=n(73479),u="Compliance | Red Hat Insights",s=" - ".concat(u),p="/api/compliance",m=(c().Fragment,i.ZP,c().Fragment,a.ZP,c().Fragment,c().Fragment,l.ZP,[{type:o.Yu.text,label:"Name",filterString:function(e){return"name ~ ".concat(e)}}]),f=function(e){return[{type:o.Yu.checkbox,label:"Policy",filterString:function(e){return"policy_id = ".concat(e)},items:e.map((function(e){return{label:e.name,value:e.id}}))}]},h=function(e){return Array.from(new Set(e.map((function(e){return e.majorOsVersion}))))},d=function(e){return[{type:o.Yu.checkbox,label:"Operating system",filterString:function(e){return"os_major_version = ".concat(e)},items:h(e).map((function(e){return{label:"RHEL ".concat(e),value:e}}))}]},v=function(e){var t,n=Object.keys(e).map((t=e,function(e){return{label:"RHEL ".concat(e),value:e,groupSelectable:!0,items:t[e].map((function(t){return{label:"RHEL ".concat(e,".").concat(t),value:t}}))}}));return[{type:o.Yu.group,label:"Operating system",filterString:function(e){return[Object.keys(e).flatMap((function(t){return Object.keys(e[t]).map((function(n){return e[t][n]&&"(os_major_version = ".concat(t," AND os_minor_version = ").concat(n,")")}))})).filter((function(e){return!!e})).join(" OR ")]},items:n}]},y=[{type:o.Yu.checkbox,label:"Compliant",filterString:function(e){return"compliant = ".concat(e)},items:[{label:"Compliant",value:"true"},{label:"Non-compliant",value:"false"}]},{type:o.Yu.checkbox,label:"Compliance score",filterString:function(e){var t=e.split("-");return"(compliance_score >= ".concat(t[0]," and compliance_score < ").concat(t[1],")")},items:[{label:"90 - 100%",value:"90-101"},{label:"70 - 89%",value:"70-90"},{label:"50 - 69%",value:"50-70"},{label:"Less than 50%",value:"0-50"}]}],b={tags:!1}},30319:(e,t,n)=>{"use strict";n.d(t,{S1:()=>s,bh:()=>p});var o,r=n(85061),c=n(67336),i=n(83215),a=n(57283),l=n.n(a),u=n(30496);function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(o=(0,c.JH)({},[l()].concat((0,r.Z)(t.filter((function(e){return void 0!==e})))))).register({form:u.Z,notifications:i.ee}),o}function p(){return o.getStore()}}}]);
//# sourceMappingURL=../sourcemaps/554.b08ae15693ab9addbddc.js.map
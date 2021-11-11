"use strict";(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[999],{87999:(e,t,n)=>{n.d(t,{Z:()=>g});var i=n(45697),o=n.n(i),l=n(92950),r=n.n(l),c=n(36873),a=n(87462),p=n(52710),s="Reports",u=[{path:"/reports",title:s,component:(0,l.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(909),n.e(40),n.e(647),n.e(322)]).then(n.bind(n,1649))}))},{path:"/reports/:report_id",title:"Report: $entityTitle - ".concat(s),defaultTitle:s,component:(0,l.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(909),n.e(40),n.e(647),n.e(351),n.e(164),n.e(953),n.e(402),n.e(758),n.e(72)]).then(n.bind(n,79641))}))},{path:"/reports/:report_id/delete",title:"Delete report - ".concat(s),component:(0,l.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(909),n.e(40),n.e(647),n.e(351),n.e(953)]).then(n.bind(n,57481))})),modal:!0},{path:"/reports/:report_id/pdf",title:"Export report - ".concat(s),defaultTitle:s,modal:!0,component:(0,l.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(909),n.e(40),n.e(647),n.e(351),n.e(164),n.e(953),n.e(402),n.e(758),n.e(72)]).then(n.bind(n,28314))}))}],m="SCAP policies",d=[{path:"/scappolicies",title:m,component:(0,l.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(909),n.e(40),n.e(647),n.e(565)]).then(n.bind(n,95790))}))},{path:"/scappolicies/new",title:m,component:(0,l.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(909),n.e(40),n.e(647),n.e(351),n.e(164),n.e(953),n.e(402)]).then(n.bind(n,69284))})),modal:!0},{path:"/scappolicies/:policy_id",title:"$entityTitle - ".concat(m),defaultTitle:m,component:(0,l.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(909),n.e(40),n.e(647),n.e(351),n.e(164),n.e(953),n.e(402),n.e(758),n.e(705)]).then(n.bind(n,77388))}))},{path:"/scappolicies/:policy_id/edit",title:"$entityTitle - ".concat(m),defaultTitle:m,component:(0,l.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(909),n.e(40),n.e(647),n.e(351),n.e(164),n.e(953),n.e(402)]).then(n.bind(n,38879))})),modal:!0},{path:"/scappolicies/:policy_id/delete",title:"Delete policy - ".concat(m),component:(0,l.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(909),n.e(40),n.e(647),n.e(351),n.e(164)]).then(n.bind(n,89671))})),modal:!0}],h="Systems",f=[{path:"/systems",title:h,component:(0,l.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(909),n.e(40),n.e(647),n.e(351),n.e(164),n.e(953),n.e(402)]).then(n.bind(n,44434))}))},{path:"/systems/:inventoryId",title:"$entityTitle - ".concat(h),defaultTitle:h,component:(0,l.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(909),n.e(40),n.e(647),n.e(351),n.e(164),n.e(953),n.e(402),n.e(264),n.e(539)]).then(n.bind(n,40033))}))}],y=[].concat(d,u,f),P=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r().createElement(p.ZP,(0,a.Z)({},t,{routes:y}))},b=n(51344),v=n(77346),z={reports:function(e){insights.chrome.appNavClick({id:"reports",redirect:e})},scappolicies:function(e){insights.chrome.appNavClick({id:"scappolicies",redirect:e})},systems:function(e){insights.chrome.appNavClick({id:"systems",redirect:e})}},T=function(e){return(0,v.Br)(),(0,l.useEffect)((function(){var t,n;insights.chrome.init(),null===(t=insights.chrome)||void 0===t||null===(n=t.hideGlobalFilter)||void 0===n||n.call(t),insights.chrome.identifyApp("compliance");var i=e.location.pathname.split("/")[1]||"reports",o=insights.chrome.on("APP_NAVIGATION",(function(t){t.domEvent&&(e.history.push("/".concat(t.navId)),z[i](!0))}));return function(){return o()}}),[]),r().createElement(r().Fragment,null,r().createElement(b.ZP,null),r().createElement(P,{childProps:e}))};T.propTypes={location:o().object,history:o().object};const g=(0,c.Z)(T)}}]);
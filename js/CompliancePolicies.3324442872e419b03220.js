"use strict";(self.webpackChunkcompliance=self.webpackChunkcompliance||[]).push([[565],{89376:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(85893),r=t(94184),c=t.n(r),o=t(92950);const i=t.n(o)().createContext("light");var l=function(){return l=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},l.apply(this,arguments)};const s=function(e){var n=e.className,t=e.children,r=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t}(e,["className","children"]),o=c()(n,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,a.jsx)(i.Consumer,{children:function(e){var n,i;void 0===e&&(e="light");var s=c()(((n={})["pf-m-".concat(e,"-200")]="dark"===e,n),((i={})["pf-m-light"]="light"===e,i));return(0,a.jsx)("section",l({},r,{className:"".concat(o," ").concat(s),"widget-type":"InsightsPageHeader"},{children:t}))}})}},39173:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(85893),r=t(94184),c=t.n(r),o=t(65115),i=function(){return i=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},i.apply(this,arguments)};const l=function(e){var n=e.className,t=e.title,r=c()(n);return(0,a.jsx)(o.Title,i({headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"},{children:t}))}},95790:(e,n,t)=>{t.r(n),t.d(n,{CompliancePolicies:()=>g,default:()=>y});var a,r=t(30168),c=t(92950),o=t.n(c),i=t(67521),l=t(62012),s=t(90570),p=t(65115),d=t(89376),m=t(39173),u=t(19949),f=t(32467),h=(0,i.ZP)(a||(a=(0,r.Z)(['\n  {\n    profiles(search: "external = false and canonical = false") {\n      edges {\n        node {\n          id\n          name\n          description\n          refId\n          complianceThreshold\n          totalHostCount\n          osMajorVersion\n          policyType\n          policy {\n            id\n            name\n          }\n          businessObjective {\n            id\n            title\n          }\n        }\n      }\n    }\n  }\n']))),g=function(){var e,n=(0,l.useLocation)(),t=function(){return o().createElement(f.nv,{to:"/scappolicies/new",Component:f.Qj,componentProps:{variant:"primary",ouiaId:"CreateNewPolicyButton"}},"Create new policy")},a=(0,s.a)(h),r=a.data,i=a.error,g=a.loading,y=a.refetch;return(0,c.useEffect)((function(){y()}),[n,y]),r&&(i=void 0,g=void 0,e=r.profiles.edges.map((function(e){return e.node}))),o().createElement(o().Fragment,null,o().createElement(d.Z,{className:"page-header"},o().createElement(m.Z,{title:"SCAP policies"})),o().createElement("section",{className:"pf-c-page__main-section"},o().createElement(f.Se,{stateValues:{error:i,data:r,loading:g}},o().createElement(f.K7,{stateKey:"error"},o().createElement(f.mf,{error:i})),o().createElement(f.K7,{stateKey:"loading"},o().createElement(f.Ir,null)),o().createElement(f.K7,{stateKey:"data"},e&&0===e.length?o().createElement(p.Grid,{hasGutter:!0},o().createElement(u.Z,{title:"No policies",mainButton:o().createElement(t,null)})):o().createElement(f.V_,{policies:e,DedicatedAction:t})))))};const y=g}}]);
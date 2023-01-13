"use strict";(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[565],{14748:(e,n,t)=>{t.d(n,{ZP:()=>l});var r=t(85893),a=t(92950),o=t(94184),c=t.n(o),i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},i.apply(this,arguments)};const l=function(e){var n=e.children,t=e.className,o=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t}(e,["children","className"]);return(0,a.useEffect)((function(){console.error('Using deprecated "Main" component. Do not use it. Either remove it from your JSX or replace it by "section" HTML element.')}),[]),(0,r.jsx)("section",i({},o,{className:"".concat(c()(t,"pf-l-page__main-section pf-c-page__main-section"))},{children:n}))}},89376:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(85893),a=t(94184),o=t.n(a),c=t(92950);const i=t.n(c)().createContext("light");var l=function(){return l=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},l.apply(this,arguments)};const s=function(e){var n=e.className,t=e.children,a=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t}(e,["className","children"]),c=o()(n,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,r.jsx)(i.Consumer,{children:function(e){var n,i;void 0===e&&(e="light");var s=o()(((n={})["pf-m-".concat(e,"-200")]="dark"===e,n),((i={})["pf-m-light"]="light"===e,i));return(0,r.jsx)("section",l({},a,{className:"".concat(c," ").concat(s),"widget-type":"InsightsPageHeader"},{children:t}))}})}},39173:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(85893),a=t(94184),o=t.n(a),c=t(48335),i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},i.apply(this,arguments)};const l=function(e){var n=e.className,t=e.title,a=o()(n);return(0,r.jsx)(c.Title,i({headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"},{children:t}))}},95790:(e,n,t)=>{t.r(n),t.d(n,{CompliancePolicies:()=>g,default:()=>v});var r,a=t(30168),o=t(92950),c=t.n(o),i=t(67521),l=t(96620),s=t(90570),p=t(48335),f=t(89376),u=t(39173),m=t(14748),d=t(6474),h=t(85836),y=(0,i.ZP)(r||(r=(0,a.Z)(['\n  {\n    profiles(search: "external = false and canonical = false") {\n      edges {\n        node {\n          id\n          name\n          description\n          refId\n          complianceThreshold\n          totalHostCount\n          osMajorVersion\n          policyType\n          policy {\n            id\n            name\n          }\n          businessObjective {\n            id\n            title\n          }\n        }\n      }\n    }\n  }\n']))),g=function(){var e,n=(0,l.useLocation)(),t=c().createElement(h.mR,{to:"/scappolicies/new",component:h.Qj,variant:"primary",ouiaId:"CreateNewPolicyButton"},"Create new policy"),r=(0,s.a)(y),a=r.data,i=r.error,g=r.loading,v=r.refetch;return(0,o.useEffect)((function(){v()}),[n,v]),a&&(i=void 0,g=void 0,e=a.profiles.edges.map((function(e){return e.node}))),c().createElement(c().Fragment,null,c().createElement(f.Z,{className:"page-header"},c().createElement(u.Z,{title:"SCAP policies"})),c().createElement(m.ZP,null,c().createElement(h.Se,{stateValues:{error:i,data:a,loading:g}},c().createElement(h.K7,{stateKey:"error"},c().createElement(h.mf,{error:i})),c().createElement(h.K7,{stateKey:"loading"},c().createElement(h.Ir,null)),c().createElement(h.K7,{stateKey:"data"},e&&0===e.length?c().createElement(p.Grid,{hasGutter:!0},c().createElement(d.Z,{title:"No policies",mainButton:t})):c().createElement(h.V_,{policies:e})))))};const v=g}}]);
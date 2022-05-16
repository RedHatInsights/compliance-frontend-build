"use strict";(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[565],{53754:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(92950);const r=n.n(a)().createContext("light")},14748:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(92950),r=n.n(a),o=n(94184),c=n.n(o),i=n(28216),l=n(53754),s=function(){return s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)},p=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))};const d=(0,i.$j)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))((function(e){var t=e.path,n=e.params,a=void 0===n?{}:n,o=e.children,i=e.className,d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["path","params","children","className"]),m=function(){var e,n,r;if(null===(r=null===(n=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===n?void 0:n.$internal)||void 0===r?void 0:r.store){var o=window.insights.chrome.$internal.store.getState();if(t&&o)return t.split("/").reduce((function(e,t){var n,r;return 0===t.indexOf(":")?e.dynamic=s(s({},e.dynamic),((n={})["data-".concat((r=t.substr(1),r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=a[t.substr(1)],n)):e.staticPart=p(p([],e.staticPart,!0),""!==t?[t]:[],!0),e}),{staticPart:[o.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),u=m.dynamic,f=m.staticPart;return r().createElement(l.Z.Consumer,null,(function(e){var t;void 0===e&&(e="light");var n=c()(((t={})["pf-m-".concat(e)]="dark"===e,t));return{dark:r().createElement("section",s({},d,u,{"page-type":f.join("-"),className:"".concat(c()(i,"pf-l-page__main-section pf-c-page__main-section")," ").concat(n)}),r().Children.map(o,(function(e){return r().cloneElement(e,{className:"pf-m-dark"})}))),light:r().createElement("section",s({},d,u,{"page-type":f.join("-"),className:"".concat(c()(i,"pf-l-page__main-section pf-c-page__main-section"))}),o)}[e]}))}))},80123:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(92950),r=n.n(a),o=n(94184),c=n.n(o),i=n(53754),l=function(){return l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)};const s=function(e){var t=e.className,n=e.children,a=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["className","children"]),o=c()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return r().createElement(i.Z.Consumer,null,(function(e){var t,i;void 0===e&&(e="light");var s=c()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((i={})["pf-m-light"]="light"===e,i));return r().createElement("section",l({},a,{className:"".concat(o," ").concat(s),"widget-type":"InsightsPageHeader"}),n)}))}},39173:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(92950),r=n.n(a),o=n(94184),c=n.n(o),i=n(89624);const l=function(e){var t=e.className,n=e.title,a=c()(t);return r().createElement(i.Title,{headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"},n)}},95790:(e,t,n)=>{n.r(t),n.d(t,{CompliancePolicies:()=>v,default:()=>y});var a,r=n(30168),o=n(92950),c=n.n(o),i=n(67521),l=n(334),s=n(90570),p=n(89624),d=n(80123),m=n(39173),u=n(14748),f=n(6474),h=n(16051),g=(0,i.ZP)(a||(a=(0,r.Z)(['\n  {\n    profiles(search: "external = false and canonical = false") {\n      edges {\n        node {\n          id\n          name\n          description\n          refId\n          complianceThreshold\n          totalHostCount\n          osMajorVersion\n          policyType\n          policy {\n            id\n            name\n          }\n          benchmark {\n            id\n            title\n            version\n          }\n          hosts {\n            id\n          }\n          businessObjective {\n            id\n            title\n          }\n        }\n      }\n    }\n  }\n']))),v=function(){var e,t=(0,l.useLocation)(),n=c().createElement(h.mR,{to:"/scappolicies/new"},c().createElement(p.Button,{variant:"primary",ouiaId:"CreateNewPolicyButton"},"Create new policy")),a=(0,s.a)(g),r=a.data,i=a.error,v=a.loading,y=a.refetch;return(0,o.useEffect)((function(){y()}),[t,y]),r&&(i=void 0,v=void 0,e=r.profiles.edges.map((function(e){return e.node}))),c().createElement(c().Fragment,null,c().createElement(d.Z,{className:"page-header"},c().createElement(m.Z,{title:"SCAP policies"})),c().createElement(u.Z,null,c().createElement(h.Se,{stateValues:{error:i,data:r,loading:v}},c().createElement(h.K7,{stateKey:"error"},c().createElement(h.mf,{error:i})),c().createElement(h.K7,{stateKey:"loading"},c().createElement(h.Ir,null)),c().createElement(h.K7,{stateKey:"data"},e&&0===e.length?c().createElement(p.Grid,{hasGutter:!0},c().createElement(f.Z,{title:"No policies",mainButton:n})):c().createElement(h.V_,{policies:e})))))};const y=v}}]);
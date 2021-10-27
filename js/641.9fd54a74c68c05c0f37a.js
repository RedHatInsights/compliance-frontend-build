"use strict";(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[641],{52710:(e,t,n)=>{n.d(t,{C3:()=>b,Wb:()=>h,ZP:()=>v});var r=n(4942),o=n(92950),a=n.n(o),c=n(45697),i=n.n(c),l=n(334),u=n(7648);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(e){var t=e.component,n=e.modal,r=e.path,c=e.props,i=void 0===c?{}:c,s=e.title,m=(0,l.useLocation)(),f=(0,u.Z)(),b=!!(0,l.matchPath)(m.pathname,{path:r,exact:!0}),h=s.includes("$entityTitle"),v={exact:!0,key:"".concat(n?"modal":"fullpage","-route-").concat(r.replace("/","-")),path:r},d=p(p({},i),{},{route:p(p({},e),{},{isCurrent:b,setTitle:f})});return(0,o.useEffect)((function(){b&&!h&&f(s)})),a().createElement(l.Route,v,a().createElement(t,d))};m.propTypes={component:i().node,modal:i().bool,path:i().string,props:i().object,title:i().string};var f=function(e){var t,n=e.routes,r=(0,l.useLocation)(),c=null==r||null===(t=r.state)||void 0===t?void 0:t.background,i=r.pathname,u=n.filter((function(e){return!e.modal})),s=n.filter((function(e){return e.modal})),p=n.map((function(e){return e.path}));return a().createElement(o.Suspense,{fallback:o.Fragment},a().createElement(l.Switch,{location:c||r},u.map(m),a().createElement(l.Route,{render:function(){return p.some((function(e){return e===i}))?null:a().createElement(l.Redirect,{to:"/reports"})}})),s.map(m))};f.propTypes={routes:i().array};var b=function(e){var t=(0,l.useLocation)(),n=(0,l.useHistory)();return function(r){var o,a=null==t||null===(o=t.state)||void 0===o?void 0:o.background;n.push(p({pathname:a?a.pathname:e,hash:a?a.hash:void 0},r))}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(0,l.useLocation)(),n=t.hash&&t.hash.length>0?t.hash:void 0;return(n||e).replace("#","")};const v=f},7648:(e,t,n)=>{n.d(t,{a:()=>c,Z:()=>i});var r=n(92950),o=n(334),a=n(72971),c=function(e,t){var n=(0,o.useLocation)();(0,r.useEffect)((function(){var n=t?e.title.replace("$entityTitle",t):e.defaultTitle;e.setTitle(n)}),[t,n,e])};const i=function(){return function(e){document.title=function(e){return"".concat(e).concat(a.IJ)}(e||a.i2)}}},72971:(e,t,n)=>{n.d(t,{dT:()=>p,rN:()=>y,qo:()=>b,i2:()=>u,IJ:()=>s,FT:()=>f,R2:()=>O,iK:()=>m,iz:()=>d,n3:()=>g,RM:()=>h});var r=n(44612),o=n(92950),a=n.n(o),c=n(43047),i=n(69957),l=n(73479),u="Compliance | Red Hat Insights",s=" - ".concat(u),p="/api/compliance",m="https://access.redhat.com/documentation/en-us/red_hat_insights/2021/html/assessing_and_monitoring_security_policy_compliance_of_rhel_systems/con-compl-assess-overview_compl-assess-overview#con-compl-assess-supported-configurations_compl-assess-overview",f=(a().Fragment,c.ZP,a().Fragment,i.ZP,a().Fragment,a().Fragment,l.ZP,["high","medium","low","unknown"]),b=[{type:r.Y.text,label:"Name",filterString:function(e){return"name ~ ".concat(e)}}],h=function(e){return[{type:r.Y.checkbox,label:"Policy",filterString:function(e){return"policy_id = ".concat(e)},items:e.map((function(e){return{label:e.name,value:e.id}}))}]},v=function(e){return Array.from(new Set(e.map((function(e){return e.majorOsVersion}))))},d=function(e){return[{type:r.Y.checkbox,label:"Operating system",filterString:function(e){return"os_major_version = ".concat(e)},items:v(e).map((function(e){return{label:"RHEL ".concat(e),value:e}}))}]},g=function(e){var t,n=Object.keys(e).map((t=e,function(e){return{label:"RHEL ".concat(e),value:e,groupSelectable:!0,items:t[e].map((function(t){return{label:"RHEL ".concat(e,".").concat(t),value:t}}))}}));return[{type:r.Y.group,label:"Operating system",filterString:function(e){return[Object.keys(e).flatMap((function(t){return Object.keys(e[t]).map((function(n){return e[t][n]&&"(os_major_version = ".concat(t," AND os_minor_version = ").concat(n,")")}))})).filter((function(e){return!!e})).join(" OR ")]},items:n}]},y=[{type:r.Y.checkbox,label:"Compliant",filterString:function(e){return"compliant = ".concat(e)},items:[{label:"Compliant",value:"true"},{label:"Non-compliant",value:"false"}]},{type:r.Y.checkbox,label:"Compliance score",filterString:function(e){var t=e.split("-");return"(compliance_score >= ".concat(t[0]," and compliance_score < ").concat(t[1],")")},items:[{label:"90 - 100%",value:"90-101"},{label:"70 - 89%",value:"70-90"},{label:"50 - 69%",value:"50-70"},{label:"Less than 50%",value:"0-50"}]}],O={tags:!1,pdfReport:!1}}}]);
"use strict";(self.webpackChunkcompliance=self.webpackChunkcompliance||[]).push([[244],{7081:(e,t,n)=>{n.d(t,{ZP:()=>a,lb:()=>l,wl:()=>o});var r=n(40400);const l={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},o=(0,r.IU)(l),a=o},84244:(e,t,n)=>{n.d(t,{Z:()=>te});var r=n(87462),l=n(45987),o=n(4942),a=n(70885),i=n(30168),s=n(92950),c=n.n(s),d=n(45697),p=n.n(d),m=n(65115),u=n(62410),y=n(19535),h=n(91290),f=n(72971),v=["ssgVersion","style"],g=function(e){var t=e.ssgVersion,n=e.style,o=(0,l.Z)(e,v),a=c().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:f.iK},"Supported SSG versions");return c().createElement(m.Alert,(0,r.Z)({variant:"warning",isInline:!0,style:n,title:c().createElement(c().Fragment,null,"Unsupported SSG version (",t,")",c().createElement(m.Popover,{position:"right",bodyContent:"This system was using an incompatible version of the SSG at the time this report was generated. Assessment of rules failed/passed on this system is a best-guess effort and may not be accurate.",footerContent:a},c().createElement(h.ZP,{style:{marginLeft:".5em",cursor:"pointer",color:"var(--pf-global--Color--200)"}})))},o))};g.propTypes={ssgVersion:p().string,style:p().object};const E=g;var b=n(68778),P=n(43047),S=function(e){return e.compliant?c().createElement("div",{className:"ins-c-policy-card ins-m-compliant"},c().createElement(b.ZP,null)," Compliant"):c().createElement("div",{className:"ins-c-policy-card ins-m-noncompliant"},c().createElement(P.ZP,null)," Not compliant")};S.propTypes={compliant:p().bool};const T=S;var C=function(e){var t=e.policy,n=e.style,l=e.onClick,o=e.isSelected,a=t.rulesFailed,i=t.compliant,s=t.lastScanned,d=t.score,p=t.benchmark.version,h=t.supported,f=t.name,v=t.policyType,g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return e.toFixed(t)+(n?"%":"")}(d),b={expandOnMouseOver:!0,hideExpandText:!0};return c().createElement(m.Card,{ouiaId:"PolicyCard",onClick:function(e){e.stopPropagation(),l(t)},isSelected:o,style:n},c().createElement(m.CardBody,null,c().createElement(m.TextContent,{className:"margin-bottom-md"},c().createElement(m.Text,{ouiaId:"PolicyCardName",className:"margin-bottom-top-none",component:m.TextVariants.h4},c().createElement(y.Z,(0,r.Z)({text:f,length:110},b))),c().createElement(m.Text,{ouiaId:"PolicyCardType",style:{color:"var(--pf-global--Color--200)"},component:m.TextVariants.small},c().createElement(y.Z,(0,r.Z)({text:v,length:110},b)))),c().createElement("div",{className:"margin-bottom-md"},h&&c().createElement(T,{compliant:i}),c().createElement(m.Text,{ouiaId:"PolicyCardFailedRulesScore",component:m.TextVariants.small},a," rule",1===a?"":"s"," failed"," ",c().createElement(m.Tooltip,{position:"bottom",maxWidth:"22em",content:"The system compliance score is calculated by OpenSCAP and is a normalized weighted sum of rules selected for this policy."},c().createElement("span",null,"(Score: ",h?g:"Unsupported",")")))),c().createElement(m.Text,{className:"margin-bottom-none",component:m.TextVariants.small},c().createElement(m.Text,{ouiaId:"PolicyCardSSGVersion"},"SSG version: ",p),c().createElement(m.Text,{ouiaId:"PolicyCardLastScanned"},"Last scanned:"," ","Never"!==s?c().createElement(u.Z,{date:Date.parse(s),type:"relative"}):s))),!h&&c().createElement(m.CardFooter,{style:{padding:"0"}},c().createElement(E,{ouiaId:"PolicyCardUnsupportedSSG",ssgVersion:p,style:{paddingTop:"var(--pf-c-alert--PaddingTop)",paddingRight:"var(--pf-c-card--child--PaddingRight)",paddingLeft:"var(--pf-c-card--child--PaddingLeft)",paddingBottom:"var(--pf-c-alert--PaddingBottom)"}})))};C.propTypes={policy:p().shape({rulesPassed:p().number,rulesFailed:p().number,score:p().number,lastScanned:p().string,refId:p().string,name:p().string,policyType:p().string,compliant:p().bool,benchmark:p().object,supported:p().bool}),style:p().object,onClick:p().func,isSelected:p().bool};const x=C;var I=n(42982),k=n(24561);const w=function(){return(0,I.Z)(Array(3)).map((function(e,t){return c().createElement(m.GridItem,{span:4,key:t},c().createElement(m.Card,null,c().createElement(m.CardBody,null,c().createElement(k.mr,null))))}))};var O=function(e){var t=e.policies,n=void 0===t?[]:t,r=e.selectedPolicies,l=e.onCardClick,o=e.loading,a=n.filter((function(e){return e.rulesFailed+e.rulesPassed>0}));return c().createElement(m.Grid,{hasGutter:!0},o?c().createElement(w,null):a.map((function(e,t){return c().createElement(m.GridItem,{sm:12,md:12,lg:6,xl:4,key:t},c().createElement(x,{policy:e,style:{height:"100%"},onClick:function(e){return l(e)},isSelected:null==r?void 0:r.find((function(t){return t===e.id}))}))})))};O.propTypes={policies:p().array,loading:p().bool,onCardClick:p().func,selectedPolicies:p().string};const j=O;var Z=n(45465),B=n(19949),R=n(90570),N=n(67521),F=n(97481),V=n(44468),G=n(85893),L=n(10044),A=function(){return A=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},A.apply(this,arguments)};const z=function(e){var t=e.titleText,n=void 0===t?"This system isn’t connected to Insights yet":t,r=e.bodyText,l=void 0===r?"To get started, activate the Insights client for this system.":r,o=e.buttonText,a=void 0===o?"Learn how to activate the Insights client":o;return(0,G.jsxs)(m.EmptyState,{children:[(0,G.jsx)(m.EmptyStateIcon,{icon:L.DisconnectedIcon}),(0,G.jsx)(m.Title,A({headingLevel:"h5",size:"lg"},{children:n})),(0,G.jsx)(m.EmptyStateBody,{children:l}),(0,G.jsx)(m.Button,A({variant:"primary",component:"a",href:"https://access.redhat.com/products/red-hat-insights/",target:"_blank",rel:"noopener noreferrer",className:"pf-u-mt-lg"},{children:a}))]})};var D=n(7081);const _=function(){return c().createElement(m.Bullseye,null,c().createElement(m.EmptyState,null,c().createElement(m.EmptyStateIcon,{icon:D.ZP}),c().createElement(m.Title,{headingLevel:"h1",size:"lg"},"This system is not part of any SCAP policies defined within Compliance."),c().createElement(m.EmptyStateBody,null,"To assess and monitor compliance against a SCAP policy for this system, add it to an existing policy or create a new policy."),c().createElement(m.EmptyStatePrimary,null,c().createElement(V.nv,{to:"/scappolicies/new",Component:V.Qj,componentProps:{variant:"primary",ouiaId:"CreateNewPolicyButton"}},"Create new policy")),c().createElement(m.EmptyStateSecondaryActions,null,c().createElement(V.nv,{variant:"plain",to:"/scappolicies"},"View compliance policies"))))};var U=n(7162),K=function(e){var t,n,r=e.system;return c().createElement(m.Bullseye,null,c().createElement(m.EmptyState,null,c().createElement(m.EmptyStateIcon,{icon:U.ZP,title:"Compliance",size:"xl",style:{fontWeight:"500",color:"var(--pf-global--primary-color--100)"}}),c().createElement(m.Title,{headingLevel:"h1",size:"lg"},"No results reported"),c().createElement(m.EmptyStateBody,null,"This system is part of ",null==r||null===(t=r.policies)||void 0===t?void 0:t.length,(null==r||null===(n=r.policies)||void 0===n?void 0:n.length)>1?" policies":" policy",", but has not returned any results."),c().createElement(m.EmptyStateBody,null,"Reports are returned when the system checks into Insights. By default, systems check in every 24 hours.")))};K.propTypes={system:p().shape({policies:p().array})};const M=K;var W=function(e){var t,n=e.system;return null!=n&&n.insightsId?null!=n&&n.hasPolicy?null!=n&&n.hasPolicy&&0===(null==n||null===(t=n.testResultProfiles)||void 0===t?void 0:t.length)?c().createElement(M,{system:n}):void 0:c().createElement(_,{system:n}):c().createElement(z,null)};W.propTypes={system:p().object};const $=W;var q,Q=["inventoryId","hidePassed"];function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=(0,N.ZP)(q||(q=(0,i.Z)(["\n  query CD_System($systemId: String!) {\n    system(id: $systemId) {\n      id\n      name\n      hasPolicy\n      insightsId\n      policies {\n        id\n      }\n      testResultProfiles {\n        id\n        name\n        policyType\n        refId\n        compliant\n        rulesFailed\n        rulesPassed\n        lastScanned\n        score\n        supported\n        osMajorVersion\n        benchmark {\n          version\n          ruleTree\n        }\n        policy {\n          id\n        }\n        rules {\n          id\n          title\n          severity\n          rationale\n          refId\n          description\n          compliant\n          remediationAvailable\n          references\n          identifier\n          precedence\n        }\n      }\n    }\n  }\n"]))),Y=function(e){var t,n,r=e.data.system,l=e.loading,o=e.hidePassed,i=(0,s.useState)(null===(t=r.testResultProfiles[0])||void 0===t?void 0:t.id),d=(0,a.Z)(i,2),p=d[0],u=d[1],y=null==r?void 0:r.testResultProfiles;return c().createElement(c().Fragment,null,c().createElement(j,{policies:y,loading:l}),c().createElement("br",null),null!=r&&null!==(n=r.testResultProfiles)&&void 0!==n&&n.length?c().createElement(c().Fragment,null,r.testResultProfiles.length>1&&c().createElement(m.Tabs,{activeKey:p,style:{background:"var(--pf-global--BackgroundColor--100)"}},r.testResultProfiles.map((function(e,t){return c().createElement(m.Tab,{key:"policy-tab-"+t,eventKey:e.id,title:c().createElement(m.TabTitleText,null," ",e.name," "),onClick:function(){u(e.id)}})}))),c().createElement(Z.Z,{ansibleSupportFilter:!0,hidePassed:o,showFailedCounts:!0,system:J(J({},r),{},{supported:((null==r?void 0:r.testResultProfiles)||[]).filter((function(e){return e.supported})).length>0}),profileRules:null==r?void 0:r.testResultProfiles.filter((function(e){return p===e.id})).map((function(e){return{system:r,profile:e,rules:e.rules}})),loading:l,options:{sortBy:{index:4,direction:"asc",property:"severity"}}})):c().createElement($,{system:r}))};Y.propTypes={data:p().shape({system:p().shape({hasPolicy:p().bool,policies:p().shape({id:p().string}),profiles:p().array,testResultProfiles:p().array})}),loading:p().bool,hidePassed:p().bool},Y.defaultProps={loading:!0};var ee=function(e){var t,n=e.inventoryId,o=e.hidePassed,a=(0,l.Z)(e,Q),i=(0,R.a)(X,{variables:{systemId:n},fetchPolicy:"no-cache"}),s=i.data,d=i.error,p=i.loading,m=404===(null==d||null===(t=d.networkError)||void 0===t?void 0:t.statusCode);return p?c().createElement(F.Z,null):d&&!m?c().createElement(V._U,null):c().createElement("div",{className:"ins-c-compliance__scope"},null==s||!s.system||m?c().createElement(B.Z,{title:"No policies are reporting for this system"}):c().createElement(Y,(0,r.Z)({},a,{hidePassed:o,data:s,loading:p})))};ee.propTypes={inventoryId:p().string,hidePassed:p().bool};const te=ee}}]);
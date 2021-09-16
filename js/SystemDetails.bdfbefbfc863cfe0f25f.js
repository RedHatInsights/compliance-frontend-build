(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[539],{44954:(e,t,n)=>{"use strict";n.r(t),n.d(t,{SystemDetails:()=>pe,default:()=>de});var r=n(32465),l=n(92950),o=n.n(l),a=n(45697),i=n.n(a),s=n(33121),c=n(46829),u=n(334),m=n(48716),p=n(56455),d=n(86350),y=n(97066),f=n(81253),v=n(96156),h=n(85061),g=n(6610),E=n(5991),b=n(10379),P=n(46070),T=n(77608),S=n(63349),Z=n(62410),O=n(68778),w=n(43047),C=n(50500),j=n(91290),I=n(99373),R=function(e){var t=e.ssgVersion,n=e.style,r=o().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:I.iK},"Supported SSG versions");return o().createElement(y.Alert,{variant:"warning",isInline:!0,style:n,title:o().createElement(o().Fragment,null,"Unsupported SSG version (",t,")",o().createElement(y.Popover,{position:"right",bodyContent:"This system was using an incompatible version of the SSG at the time this report was generated. Assessment of rules failed/passed on this system is a best-guess effort and may not be accurate.",footerContent:r},o().createElement(j.ZP,{style:{marginLeft:".5em",cursor:"pointer",color:"var(--pf-global--Color--200)"}})))})};R.propTypes={ssgVersion:i().string,style:i().object};const x=R;function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var k=function(e){(0,b.Z)(l,e);var t,n,r=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,T.Z)(t);if(n){var l=(0,T.Z)(this).constructor;e=Reflect.construct(r,arguments,l)}else e=r.apply(this,arguments);return(0,P.Z)(this,e)});function l(e){var t;return(0,g.Z)(this,l),t=r.call(this,e),(0,v.Z)((0,S.Z)(t),"complianceIcon",(function(){return t.state.policy.compliant?o().createElement("div",{className:"ins-c-policy-card ins-m-compliant"},o().createElement(O.ZP,null)," Compliant"):o().createElement("div",{className:"ins-c-policy-card ins-m-noncompliant"},o().createElement(w.ZP,null)," Not compliant")})),(0,v.Z)((0,S.Z)(t),"fixedPercentage",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return e.toFixed(t)+(n?"%":"")})),(0,v.Z)((0,S.Z)(t),"onTitleMouseover",(function(){t.setState((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.policy,n=void 0===t?{}:t;return{cardTitle:n.name}}))})),(0,v.Z)((0,S.Z)(t),"onTitleMouseout",(function(){t.setState((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.cardTitle;return{cardTitle:o().createElement(C.Z,{lines:1},t)}}))})),(0,v.Z)((0,S.Z)(t),"onSubTitleMouseover",(function(){t.setState((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.policy,n=void 0===t?{}:t;return{cardSubTitle:n.policyType}}))})),(0,v.Z)((0,S.Z)(t),"onSubTitleMouseout",(function(){t.setState((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.policy,n=void 0===t?{}:t;return{cardSubTitle:o().createElement(C.Z,{lines:1},n.policyType)}}))})),t.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,v.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({cardTitle:o().createElement(C.Z,{lines:1},e.policy.name),cardSubTitle:o().createElement(C.Z,{lines:1},e.policy.policyType)},e),t}return(0,E.Z)(l,[{key:"render",value:function(){var e=this.state.policy,t=e.rulesFailed,n=e.compliant,r=e.lastScanned,l=e.score,a=e.ssgVersion,i=e.supported,s=this.state,c=s.cardTitle,u=s.cardSubTitle,m=s.style,p=this.fixedPercentage(l);return o().createElement(y.Card,{style:m},o().createElement(y.CardBody,null,o().createElement(y.TextContent,{className:"margin-bottom-md"},o().createElement(y.Text,{className:"margin-bottom-top-none",component:y.TextVariants.h4,onMouseEnter:this.onTitleMouseover,onMouseLeave:this.onTitleMouseout},c),o().createElement(y.Text,{style:{color:"var(--pf-global--Color--200)"},component:y.TextVariants.small,onMouseEnter:this.onSubTitleMouseover,onMouseLeave:this.onSubTitleMouseout},u)),o().createElement("div",{className:"margin-bottom-md"},i&&this.complianceIcon(n),o().createElement(y.Text,{component:y.TextVariants.small},t," rule",1===t?"":"s"," failed"," ",o().createElement(y.Tooltip,{position:"bottom",maxWidth:"22em",content:"The system compliance score is calculated by OpenSCAP and is a normalized weighted sum of rules selected for this policy."},o().createElement("span",null,"(Score: ",p,")")))),o().createElement(y.Text,{className:"margin-bottom-none",component:y.TextVariants.small},o().createElement(y.Text,null,"SSG version: ",a),o().createElement(y.Text,null,"Last scanned:"," ","Never"!==r?o().createElement(Z.Z,{date:Date.parse(r),type:"relative"}):r))),!i&&o().createElement(y.CardFooter,{style:{padding:"0"}},o().createElement(x,{ssgVersion:a,style:{paddingTop:"var(--pf-c-alert--PaddingTop)",paddingRight:"var(--pf-c-card--child--PaddingRight)",paddingLeft:"var(--pf-c-card--child--PaddingLeft)",paddingBottom:"var(--pf-c-alert--PaddingBottom)"}})))}}]),l}(o().Component);k.propTypes={policy:i().shape({rulesPassed:i().number,rulesFailed:i().number,score:i().number,lastScanned:i().string,refId:i().string,name:i().string,policyType:i().string,compliant:i().bool,ssgVersion:i().string,supported:i().bool,style:i().object})};const M=k;var F=n(24561);var V=function(e){(0,b.Z)(l,e);var t,n,r=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,T.Z)(t);if(n){var l=(0,T.Z)(this).constructor;e=Reflect.construct(r,arguments,l)}else e=r.apply(this,arguments);return(0,P.Z)(this,e)});function l(){return(0,g.Z)(this,l),r.apply(this,arguments)}return(0,E.Z)(l,[{key:"systemPolicyCards",value:function(){return this.props.policies.filter((function(e){return e.rulesFailed+e.rulesPassed>0})).map((function(e,t){return o().createElement(y.GridItem,{sm:12,md:12,lg:6,xl:4,key:t},o().createElement(M,{policy:e,style:{height:"100%"}}))}))}},{key:"render",value:function(){var e=this.props.loading;return o().createElement(o().Fragment,null,o().createElement(y.Grid,{hasGutter:!0},this.systemPolicyCards(),e&&(0,h.Z)(Array(3)).map((function(e,t){return o().createElement(y.GridItem,{span:4,key:t},o().createElement(y.Card,null,o().createElement(y.CardBody,null,o().createElement(F.mr,null))))}))))}}]),l}(o().Component);V.propTypes={policies:i().array,loading:i().bool},V.defaultProps={policies:[]};const N=V;var D=n(91989),A=n(19949),G=n(11100),L=n(86624),z=n(12340),K=n(28873),_=n(54288),$=n(83069),q=n(7162),U=function(e){var t,n,r,l=e.system;return null==l||!l.hasPolicy||null!=l&&null!==(t=l.testResultProfiles)&&void 0!==t&&t.length?o().createElement(o().Fragment,null):o().createElement(y.Bullseye,null,o().createElement(y.EmptyState,null,o().createElement(y.EmptyStateIcon,{icon:q.ZP,title:"Compliance",size:"xl",style:{fontWeight:"500",color:"var(--pf-global--primary-color--100)"}}),o().createElement(y.Title,{headingLevel:"h1",size:"lg"},"No results reported"),o().createElement(y.EmptyStateBody,null,"This system is part of ",null==l||null===(n=l.policies)||void 0===n?void 0:n.length,(null==l||null===(r=l.policies)||void 0===r?void 0:r.length)>1?" policies":" policy",", but has not returned any results."),o().createElement(y.EmptyStateBody,null,"Reports are returned when the system checks into Insights. By default, systems check in every 24 hours.")))};U.propTypes={system:i().shape({hasPolicy:i().bool,testResultProfiles:i().array,policies:i().array})};const Q=U;var W=n(99577),H=n(7081),J=function(e){var t=e.system;return null!=t&&t.hasPolicy?o().createElement(o().Fragment,null):o().createElement(y.Bullseye,null,o().createElement(y.EmptyState,null,o().createElement(y.EmptyStateIcon,{icon:H.ZP}),o().createElement(y.Title,{headingLevel:"h1",size:"lg"},"This system is not part of any SCAP policies defined within Compliance."),o().createElement(y.EmptyStateBody,null,"To assess and monitor compliance against a SCAP policy for this system, add it to an existing policy or create a new policy."),o().createElement(y.EmptyStatePrimary,null,o().createElement(W.mR,{to:"/scappolicies/new"},o().createElement(y.Button,{variant:"primary",ouiaId:"CreateNewPolicyButton"},"Create new policy"))),o().createElement(y.EmptyStateSecondaryActions,null,o().createElement(y.Button,{variant:"link",component:"a",href:"/insights/compliance/scappolicies"},"View compliance policies"))))};J.propTypes={system:i().shape({hasPolicy:i().bool})};const X=J;var Y,ee=["customItnl","intlProps"];function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,v.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re=(0,s.ZP)(Y||(Y=(0,r.Z)(["\n  query System($systemId: String!) {\n    system(id: $systemId) {\n      id\n      name\n      hasPolicy\n      policies {\n        id\n      }\n      testResultProfiles {\n        id\n        name\n        policyType\n        refId\n        compliant\n        rulesFailed\n        rulesPassed\n        lastScanned\n        score\n        supported\n        ssgVersion\n        majorOsVersion\n        policy {\n          id\n        }\n        rules {\n          title\n          severity\n          rationale\n          refId\n          description\n          compliant\n          remediationAvailable\n          references\n          identifier\n        }\n      }\n    }\n  }\n"]))),le=function(e){var t,n=e.data.system,r=e.loading,l=e.hidePassed;return o().createElement(o().Fragment,null,o().createElement(N,{policies:null==n?void 0:n.testResultProfiles,loading:r}),o().createElement(X,{system:n}),o().createElement(Q,{system:n}),o().createElement("br",null),null!=n&&null!==(t=n.testResultProfiles)&&void 0!==t&&t.length?o().createElement(D.Z,{remediationAvailableFilter:!0,handleSelect:function(){},hidePassed:l,system:ne(ne({},n),{},{supported:((null==n?void 0:n.testResultProfiles)||[]).filter((function(e){return e.supported})).length>0}),profileRules:null==n?void 0:n.testResultProfiles.map((function(e){return{system:n,profile:e,rules:e.rules}})),loading:r,options:{sortBy:{index:4,direction:"asc",property:"severity"}}}):void 0)};le.propTypes={data:i().shape({system:i().shape({hasPolicy:i().bool,policies:i().shape({id:i().string}),profiles:i().array,testResultProfiles:i().array})}),loading:i().bool,hidePassed:i().bool},le.defaultProps={loading:!0};var oe=function(e){var t,n=e.inventoryId,r=e.hidePassed,l=e.client,a=(0,c.useQuery)(re,{variables:{systemId:n},client:l,fetchPolicy:"no-cache"}),i=a.data,s=a.error,u=a.loading,m=404===(null==s||null===(t=s.networkError)||void 0===t?void 0:t.statusCode);if(u)return o().createElement(K.Z,null);if(s&&!m){var p="Oops! Error loading System data: ".concat(s);return o().createElement(_.ErrorCard,{message:p})}return o().createElement("div",{className:"ins-c-compliance__scope"},null==i||!i.system||m?o().createElement(A.Z,{title:"No policies are reporting for this system"}):o().createElement(le,{hidePassed:r,data:i,loading:u}))};oe.propTypes={inventoryId:i().string,client:i().object,hidePassed:i().bool},oe.defaultProps={client:new G.fe({link:new L.u({uri:"/api/compliance/graphql",credentials:"include"}),cache:new z.h4})};var ae=function(e){var t=e.customItnl,n=e.intlProps,r=(0,f.Z)(e,ee),l=t?$.Z:o().Fragment;return o().createElement(l,t&&n,o().createElement(oe,r))};ae.propTypes={customItnl:i().bool,intlProps:i().any};const ie=ae;var se,ce=n(33179),ue=n(7648),me=(0,s.ZP)(se||(se=(0,r.Z)(["\n  query System($inventoryId: String!) {\n    system(id: $inventoryId) {\n      id\n      name\n    }\n  }\n"]))),pe=function(e){var t,n=e.route,r=(0,u.useParams)().inventoryId,l=(0,c.useQuery)(me,{variables:{inventoryId:r}}),a=l.data,i=l.error,s=l.loading,f=null==a||null===(t=a.system)||void 0===t?void 0:t.name;return(0,ue.a)(n,f),o().createElement(W.tC,{stateValues:{error:i,data:a,loading:s}},o().createElement(W.K7,{stateKey:"data"},o().createElement(m.Z,null,o().createElement(y.Breadcrumb,{ouiaId:"SystemDetailsPathBreadcrumb"},o().createElement(W.MU,{to:"/"},"Compliance"),o().createElement(W.MU,{to:"/systems"},"Systems"),o().createElement(y.BreadcrumbItem,{isActive:!0},f)),o().createElement(ce.Ey,null),o().createElement("br",null)),o().createElement(d.Z,null,o().createElement(ie,{hidePassed:!0,inventoryId:r}))),o().createElement(W.K7,{stateKey:"loading"},o().createElement(m.Z,null,o().createElement(p.Z,{size:p.i.md}))))};pe.propTypes={route:i().object};const de=pe}}]);
//# sourceMappingURL=../sourcemaps/SystemDetails.c971c2def9a60fc2bf5a.js.map
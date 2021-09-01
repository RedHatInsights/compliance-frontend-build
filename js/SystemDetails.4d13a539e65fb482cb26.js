(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[539],{36805:(e,t,n)=>{"use strict";n.r(t),n.d(t,{SystemDetails:()=>re,default:()=>oe});var r=n(32465),o=n(92950),l=n.n(o),a=n(45697),i=n.n(a),s=n(33121),c=n(46829),u=n(334),d=n(48716),p=n(56455),m=n(86350),y=n(97066),f=n(81253),v=n(96156),g=n(85061),h=n(6610),b=n(5991),E=n(10379),P=n(46070),Z=n(77608),T=n(63349),O=n(62410),S=n(68778),j=n(43047),I=n(50500),w=n(21262);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var C=function(e){(0,E.Z)(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,Z.Z)(t);if(n){var o=(0,Z.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,P.Z)(this,e)});function o(e){var t;return(0,h.Z)(this,o),t=r.call(this,e),(0,v.Z)((0,T.Z)(t),"complianceIcon",(function(){return t.state.policy.compliant?l().createElement("div",{className:"ins-c-policy-card ins-m-compliant"},l().createElement(S.ZP,null)," Compliant"):l().createElement("div",{className:"ins-c-policy-card ins-m-noncompliant"},l().createElement(j.ZP,null)," Not compliant")})),(0,v.Z)((0,T.Z)(t),"fixedPercentage",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return e.toFixed(t)+(n?"%":"")})),(0,v.Z)((0,T.Z)(t),"onTitleMouseover",(function(){t.setState((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.policy,n=void 0===t?{}:t;return{cardTitle:n.name}}))})),(0,v.Z)((0,T.Z)(t),"onTitleMouseout",(function(){t.setState((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.cardTitle;return{cardTitle:l().createElement(I.Z,{lines:1},t)}}))})),(0,v.Z)((0,T.Z)(t),"onSubTitleMouseover",(function(){t.setState((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.policy,n=void 0===t?{}:t;return{cardSubTitle:n.policyType}}))})),(0,v.Z)((0,T.Z)(t),"onSubTitleMouseout",(function(){t.setState((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.policy,n=void 0===t?{}:t;return{cardSubTitle:l().createElement(I.Z,{lines:1},n.policyType)}}))})),t.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,v.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({cardTitle:l().createElement(I.Z,{lines:1},e.policy.name),cardSubTitle:l().createElement(I.Z,{lines:1},e.policy.policyType)},e),t}return(0,b.Z)(o,[{key:"render",value:function(){var e=this.state.policy,t=e.rulesFailed,n=e.compliant,r=e.lastScanned,o=e.score,a=e.ssgVersion,i=e.supported,s=this.state,c=s.cardTitle,u=s.cardSubTitle,d=s.style,p=this.fixedPercentage(o);return l().createElement(y.Card,{style:d},l().createElement(y.CardBody,null,l().createElement(y.TextContent,{className:"margin-bottom-md"},l().createElement(y.Text,{className:"margin-bottom-top-none",component:y.TextVariants.h4,onMouseEnter:this.onTitleMouseover,onMouseLeave:this.onTitleMouseout},c),l().createElement(y.Text,{style:{color:"var(--pf-global--Color--200)"},component:y.TextVariants.small,onMouseEnter:this.onSubTitleMouseover,onMouseLeave:this.onSubTitleMouseout},u)),l().createElement("div",{className:"margin-bottom-md"},i&&this.complianceIcon(n),l().createElement(y.Text,{component:y.TextVariants.small},t," rule",1===t?"":"s"," failed"," ",l().createElement(y.Tooltip,{position:"bottom",maxWidth:"22em",content:"The system compliance score is calculated by OpenSCAP and is a normalized weighted sum of rules selected for this policy."},l().createElement("span",null,"(Score: ",p,")")))),l().createElement(y.Text,{className:"margin-bottom-none",component:y.TextVariants.small},l().createElement(y.Text,null,"SSG version: ",a),l().createElement(y.Text,null,"Last scanned:"," ","Never"!==r?l().createElement(O.Z,{date:Date.parse(r),type:"relative"}):r))),!i&&l().createElement(y.CardFooter,{style:{padding:"0"}},l().createElement(w.UnsupportedSSGVersion,{ssgVersion:a,style:{paddingTop:"var(--pf-c-alert--PaddingTop)",paddingRight:"var(--pf-c-card--child--PaddingRight)",paddingLeft:"var(--pf-c-card--child--PaddingLeft)",paddingBottom:"var(--pf-c-alert--PaddingBottom)"}})))}}]),o}(l().Component);C.propTypes={policy:i().shape({rulesPassed:i().number,rulesFailed:i().number,score:i().number,lastScanned:i().string,refId:i().string,name:i().string,policyType:i().string,compliant:i().bool,ssgVersion:i().string,supported:i().bool,style:i().object})};const R=C;var M=n(24561);var k=function(e){(0,E.Z)(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,Z.Z)(t);if(n){var o=(0,Z.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,P.Z)(this,e)});function o(){return(0,h.Z)(this,o),r.apply(this,arguments)}return(0,b.Z)(o,[{key:"systemPolicyCards",value:function(){return this.props.policies.filter((function(e){return e.rulesFailed+e.rulesPassed>0})).map((function(e,t){return l().createElement(y.GridItem,{sm:12,md:12,lg:6,xl:4,key:t},l().createElement(R,{policy:e,style:{height:"100%"}}))}))}},{key:"render",value:function(){var e=this.props.loading;return l().createElement(l().Fragment,null,l().createElement(y.Grid,{hasGutter:!0},this.systemPolicyCards(),e&&(0,g.Z)(Array(3)).map((function(e,t){return l().createElement(y.GridItem,{span:4,key:t},l().createElement(y.Card,null,l().createElement(y.CardBody,null,l().createElement(M.mr,null))))}))))}}]),o}(l().Component);k.propTypes={policies:i().array,loading:i().bool},k.defaultProps={policies:[]};const B=k;var D,V=n(91989),F=n(19949),N=n(11100),G=n(86624),A=n(12340),L=n(28873),K=n(54288),$=n(83069),_=["customItnl","intlProps"];function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,v.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=(0,s.ZP)(D||(D=(0,r.Z)(["\n  query System($systemId: String!) {\n    system(id: $systemId) {\n      id\n      name\n      testResultProfiles {\n        id\n        name\n        policyType\n        refId\n        compliant\n        rulesFailed\n        rulesPassed\n        lastScanned\n        score\n        supported\n        ssgVersion\n        majorOsVersion\n        policy {\n          id\n        }\n        rules {\n          title\n          severity\n          rationale\n          refId\n          description\n          compliant\n          remediationAvailable\n          references\n          identifier\n        }\n      }\n    }\n  }\n"]))),Q=function(e){var t=e.data.system,n=e.loading,r=e.hidePassed;return l().createElement(l().Fragment,null,l().createElement(B,{policies:null==t?void 0:t.testResultProfiles,loading:n}),l().createElement("br",null),l().createElement(V.Z,{remediationAvailableFilter:!0,handleSelect:function(){},hidePassed:r,system:U(U({},t),{},{supported:((null==t?void 0:t.testResultProfiles)||[]).filter((function(e){return e.supported})).length>0}),profileRules:null==t?void 0:t.testResultProfiles.map((function(e){return{system:t,profile:e,rules:e.rules}})),loading:n,options:{sortBy:{index:4,direction:"asc",property:"severity"}}}))};Q.propTypes={data:i().shape({system:i().shape({profiles:i().array,testResultProfiles:i().array})}),loading:i().bool,hidePassed:i().bool},Q.defaultProps={loading:!0};var W=function(e){var t,n=e.inventoryId,r=e.hidePassed,o=e.client,a=(0,c.useQuery)(z,{variables:{systemId:n},client:o,fetchPolicy:"no-cache"}),i=a.data,s=a.error,u=a.loading,d=404===(null==s||null===(t=s.networkError)||void 0===t?void 0:t.statusCode);if(u)return l().createElement(L.Z,null);if(s&&!d){var p="Oops! Error loading System data: ".concat(s);return l().createElement(K.ErrorCard,{message:p})}return l().createElement("div",{className:"ins-c-compliance__scope"},null==i||!i.system||d?l().createElement(F.Z,{title:"No policies are reporting for this system"}):l().createElement(Q,{hidePassed:r,data:i,loading:u}))};W.propTypes={inventoryId:i().string,client:i().object,hidePassed:i().bool},W.defaultProps={client:new N.fe({link:new G.u({uri:"/api/compliance/graphql",credentials:"include"}),cache:new A.h4})};var H=function(e){var t=e.customItnl,n=e.intlProps,r=(0,f.Z)(e,_),o=t?$.Z:l().Fragment;return l().createElement(o,t&&n,l().createElement(W,r))};H.propTypes={customItnl:i().bool,intlProps:i().any};const J=H;var X,Y=n(67),ee=n(33179),te=n(7648),ne=(0,s.ZP)(X||(X=(0,r.Z)(["\n  query System($inventoryId: String!) {\n    system(id: $inventoryId) {\n      id\n      name\n    }\n  }\n"]))),re=function(e){var t,n=e.route,r=(0,u.useParams)().inventoryId,o=(0,c.useQuery)(ne,{variables:{inventoryId:r}}),a=o.data,i=o.error,s=o.loading,f=null==a||null===(t=a.system)||void 0===t?void 0:t.name;return(0,te.a)(n,f),l().createElement(Y.tC,{stateValues:{error:i,data:a,loading:s}},l().createElement(Y.K7,{stateKey:"data"},l().createElement(d.Z,null,l().createElement(y.Breadcrumb,{ouiaId:"SystemDetailsPathBreadcrumb"},l().createElement(Y.MU,{to:"/"},"Compliance"),l().createElement(Y.MU,{to:"/systems"},"Systems"),l().createElement(y.BreadcrumbItem,{isActive:!0},f)),l().createElement(ee.Ey,null),l().createElement("br",null)),l().createElement(m.Z,null,l().createElement(J,{hidePassed:!0,inventoryId:r}))),l().createElement(Y.K7,{stateKey:"loading"},l().createElement(d.Z,null,l().createElement(p.Z,{size:p.i.md}))))};re.propTypes={route:i().object};const oe=re}}]);
//# sourceMappingURL=../sourcemaps/SystemDetails.be39ec1da72f9e9c8c92.js.map
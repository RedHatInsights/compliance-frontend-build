"use strict";(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[6705,8402],{72143:(e,t,n)=>{n.r(t),n.d(t,{PolicyDetails:()=>Z,QUERY:()=>L,default:()=>x});var i=n(30168),a=n(92950),o=n.n(a),r=n(45697),l=n.n(r),s=n(67521),c=n(334),d=n(90570),u=n(22938),m=n(80123),p=n(39173),y=n(14748),h=n(97481),E=n(97285),b=n(52710),f=n(7648),v=n(94263),g=function(e){var t=e.policy,n=(0,b.Wb)();return o().createElement(u.ToolbarItem,null,o().createElement(E.mR,{to:"/scappolicies/".concat(t.id,"/edit"),state:{policy:t},hash:n,backgroundLocation:{hash:n},variant:"primary",ouiaId:"EditRulesButton",component:E.Qj},"Edit rules"))};g.propTypes={policy:l().object.isRequired};const I=g;var T=function(e){var t=e.loading,n=e.policy;return o().createElement(o().Fragment,null,o().createElement(u.Alert,{isInline:!0,ouiaId:"RuleEditingAvailableAlert",variant:"info",title:"Rule editing is now available."},'SCAP policies created before April 19th, 2021 with rule editing will use the full default set of rules for the policy with the most accurate benchmark for systems within the policy. Click the "Edit rules" or "Edit policy" button to edit rules.'),o().createElement(u.PageSection,{variant:u.PageSectionVariants.light},o().createElement(u.Text,{component:u.TextVariants.p},o().createElement("strong",null,"What rules are shown on this list? "),"This view shows rules that are from the latest SSG version (",n.benchmark.version,"). If you are using a different version of SSG for systems in this policy, those rules will be different and can be viewed on the systems details page.")),o().createElement(E.iK,{remediationsEnabled:!1,columns:[v.VG,v.zb,v.uH],loading:t,profileRules:[{profile:{refId:n.refId,name:n.name},rules:n.rules}],options:{dedicatedAction:function(){return o().createElement(I,{policy:n})}}}))};T.propTypes={loading:l().bool,policy:l().shape({name:l().string,refId:l().string,rules:l().array,benchmark:l().object})};const V=T;var j=n(8718),P=n(31499),S=function(e){var t=e.to,n=e.state,i=e.hash,a=e.backgroundLocation,r=e.variant,l=e.ouiaId;return o().createElement(u.ToolbarItem,null,o().createElement(E.mR,{to:t,state:n,hash:i,backgroundLocation:a,variant:r,ouiaId:l,component:E.Qj},"Edit systems"))};S.propTypes={to:l().string.required,state:l().object,hash:l().object,backgroundLocation:l().object,variant:l().string.required,ouiaId:l().string.required};const k=S;var w=function(e){var t,n=e.policy,i=(0,b.Wb)();return o().createElement(j.r0,{columns:[P.Zw({showLink:!0}),P.MO("tags"),P.OS,P.hN],showOsMinorVersionFilter:[n.osMajorVersion],policyId:n.id,defaultFilter:"policy_id = ".concat(n.id),showActions:!1,remediationsEnabled:!1,noSystemsTable:0===(null==n||null===(t=n.hosts)||void 0===t?void 0:t.length)&&o().createElement(E.JS,null),complianceThreshold:n.complianceThreshold,dedicatedAction:o().createElement(k,{to:"/scappolicies/".concat(n.id,"/edit"),state:{policy:n},hash:i,backgroundLocation:{hash:"details"},variant:"primary",ouiaId:"EditSystemsButton"})})};w.propTypes={policy:l().shape({id:l().string.isRequired,complianceThreshold:l().number.isRequired,osMajorVersion:l().string.isRequired,hosts:l().array.isRequired}),dedicatedAction:l().object,systemTableProps:l().object};const M=w;var R=n(99030),A=n(79886),K=function(e){var t=e.policy,n=t.hosts,i=t.policy.profiles.filter((function(e){return!!e.osMinorVersion})),a=(0,R.UP)(n),r=i.sort((0,A.Sj)("osMinorVersion","desc")).map((function(e){var t;return{profile:e,systemCount:(null===(t=a[e.osMinorVersion])||void 0===t?void 0:t.count)||0}}));return o().createElement(o().Fragment,null,o().createElement(u.PageSection,{variant:u.PageSectionVariants.light},o().createElement(E.Hv,{tabsData:r,columns:[v.VG,v.zb,v.uH],level:1,options:{dedicatedAction:function(){return o().createElement(I,{policy:t})}},ouiaId:"RHELVersions"})))};K.propTypes={policy:l().object.isRequired};const q=K;var C,L=(0,s.ZP)(C||(C=(0,i.Z)(["\n  query Profile($policyId: String!) {\n    profile(id: $policyId) {\n      id\n      name\n      refId\n      external\n      description\n      totalHostCount\n      compliantHostCount\n      complianceThreshold\n      osMajorVersion\n      lastScanned\n      policyType\n      policy {\n        id\n        name\n        refId\n        profiles {\n          id\n          name\n          refId\n          osMinorVersion\n          osMajorVersion\n          benchmark {\n            id\n            title\n            latestSupportedOsMinorVersions\n            osMajorVersion\n            version\n          }\n          rules {\n            title\n            severity\n            rationale\n            refId\n            description\n            remediationAvailable\n            identifier\n            precedence\n          }\n        }\n      }\n      businessObjective {\n        id\n        title\n      }\n      hosts {\n        id\n        osMinorVersion\n      }\n      rules {\n        title\n        severity\n        rationale\n        refId\n        description\n        remediationAvailable\n        identifier\n        precedence\n      }\n    }\n  }\n"]))),Z=function(e){var t,n,i=e.route,r="details",l=(0,c.useParams)().policy_id,s=(0,c.useLocation)(),v=(0,b.Wb)(),g=(0,d.a)(L,{variables:{policyId:l}}),I=g.data,T=g.error,j=g.loading,P=g.refetch,S=!0;return I&&!j&&(S=!!(n=I.profile).policy.profiles.find((function(e){return!!e.osMinorVersion}))),(0,a.useEffect)((function(){P()}),[s,P]),(0,f.a)(i,null===(t=n)||void 0===t?void 0:t.name),o().createElement(E.tC,{stateValues:{error:T,data:I,loading:j}},o().createElement(E.K7,{stateKey:"loading"},o().createElement(m.Z,null,o().createElement(E.PL,null)),o().createElement(y.Z,null,o().createElement(h.Z,null))),o().createElement(E.K7,{stateKey:"data"},n&&o().createElement(a.Fragment,null,o().createElement(m.Z,{className:"page-header-tabs"},o().createElement(u.Breadcrumb,{ouiaId:"PolicyDetailsPathBreadcrumb"},o().createElement(E.MU,{to:"/"},"Compliance"),o().createElement(E.MU,{to:"/scappolicies"},"SCAP policies"),o().createElement(u.BreadcrumbItem,{isActive:!0},n.name)),o().createElement(u.Grid,{gutter:"lg"},o().createElement(u.GridItem,{xl2:11,xl:10,lg:12,md:12,sm:12},o().createElement(p.Z,{title:n.name})),o().createElement(u.GridItem,{className:"policy-details-button",xl2:1,xl:2,lg:2,md:3,sm:3},o().createElement(E.mR,{to:"/scappolicies/".concat(n.id,"/edit"),state:{policy:n},hash:v,backgroundLocation:{hash:"details"},variant:"secondary",ouiaId:"EditPolicyButton",component:E.Qj},"Edit policy"))),o().createElement(E.tn,{"aria-label":"Policy Tabs",ouiaId:"PolicyDetailsTabs",defaultTab:r},o().createElement(u.Tab,{title:"Details",id:"policy-details",eventKey:"details"}),o().createElement(u.Tab,{title:"Rules",id:"policy-rules",eventKey:"rules"}),o().createElement(u.Tab,{title:"Systems",id:"policy-systems",eventKey:"systems"}))),o().createElement(y.Z,null,o().createElement(E.Jm,{defaultTab:r},o().createElement(E.X8,{eventKey:"details"},o().createElement(E.NP,{policy:n})),o().createElement(E.X8,{eventKey:"rules"},S?o().createElement(q,{policy:n}):o().createElement(V,{policy:n})),o().createElement(E.X8,{eventKey:"systems"},o().createElement(M,{policy:n})))))))};Z.propTypes={route:l().object};const x=Z}}]);
(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[705],{77388:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PolicyDetails:()=>q,QUERY:()=>Z,default:()=>x});var i=n(32465),r=n(92950),l=n.n(r),a=n(45697),o=n.n(a),s=n(33121),c=n(334),d=n(46829),m=n(97066),u=n(48716),p=n(39173),y=n(86350),E=n(28873),h=n(67),f=n(52710),b=n(7648),v=n(94263),g=function(e){var t=e.policy,n=(0,f.Wb)();return l().createElement(m.ToolbarItem,null,l().createElement(h.mR,{to:"/scappolicies/".concat(t.id,"/edit"),state:{policy:t},hash:n,backgroundLocation:{hash:n}},l().createElement(m.Button,{variant:"primary",ouiaId:"EditRulesButton"},"Edit rules")))};g.propTypes={policy:o().object.isRequired};const I=g;var T=function(e){var t=e.loading,n=e.policy;return l().createElement(l().Fragment,null,l().createElement(m.Alert,{isInline:!0,ouiaId:"RuleEditingAvailableAlert",variant:"info",title:"Rule editing is now available."},'SCAP policies created before April 19th, 2021 with rule editing will use the full default set of rules for the policy with the most accurate benchmark for systems within the policy. Click the "Edit rules" or "Edit policy" button to edit rules.'),l().createElement(m.PageSection,{variant:m.PageSectionVariants.light},l().createElement(m.Text,{component:m.TextVariants.p},l().createElement("strong",null,"What rules are shown on this list? "),"This view shows rules that are from the latest SSG version (",n.benchmark.version,"). If you are using a different version of SSG for systems in this policy, those rules will be different and can be viewed on the systems details page.")),l().createElement(h.iK,{remediationsEnabled:!1,columns:[v.VG,v.zb,v.PS],loading:t,profileRules:[{profile:{refId:n.refId,name:n.name},rules:n.rules}],options:{dedicatedAction:function(){return l().createElement(I,{policy:n})}}}))};T.propTypes={loading:o().bool,policy:o().shape({name:o().string,refId:o().string,rules:o().array,benchmark:o().object})};const P=T;var V=n(33179),S=n(27803),w=n(31499),R=function(e){var t,n=e.policy;return l().createElement(V.e_,{columns:[w.Zw({showLink:!0}),w.MO("tags"),w.hN,w.U5],showOsMinorVersionFilter:[n.majorOsVersion],query:S.Ep,policyId:n.id,defaultFilter:"policy_id = ".concat(n.id),showActions:!1,remediationsEnabled:!1,noSystemsTable:0===(null==n||null===(t=n.hosts)||void 0===t?void 0:t.length)&&l().createElement(h.JS,null),complianceThreshold:n.complianceThreshold})};R.propTypes={policy:o().shape({id:o().string.isRequired,complianceThreshold:o().number.isRequired,majorOsVersion:o().string.isRequired,hosts:o().array.isRequired}),systemTableProps:o().object};const k=R;var M=n(99030),j=n(79886),A=function(e){var t=e.policy,n=t.hosts,i=t.policy.profiles.filter((function(e){return!!e.osMinorVersion})),r=(0,M.UP)(n),a=i.sort((0,j.Sj)("osMinorVersion","desc")).map((function(e){var t;return{profile:e,systemCount:(null===(t=r[e.osMinorVersion])||void 0===t?void 0:t.count)||0}}));return l().createElement(l().Fragment,null,l().createElement(m.PageSection,{variant:m.PageSectionVariants.light},l().createElement(h.Hv,{tabsData:a,columns:[v.VG,v.zb,v.PS],level:1,options:{dedicatedAction:function(){return l().createElement(I,{policy:t})}}})))};A.propTypes={policy:o().object.isRequired};const K=A;var C,Z=(0,s.ZP)(C||(C=(0,i.Z)(["\n  query Profile($policyId: String!) {\n    profile(id: $policyId) {\n      id\n      name\n      refId\n      external\n      description\n      totalHostCount\n      compliantHostCount\n      complianceThreshold\n      majorOsVersion\n      lastScanned\n      policyType\n      policy {\n        id\n        name\n        refId\n        profiles {\n          id\n          ssgVersion\n          name\n          refId\n          osMinorVersion\n          osMajorVersion\n          benchmark {\n            id\n            title\n            latestSupportedOsMinorVersions\n            osMajorVersion\n          }\n          rules {\n            title\n            severity\n            rationale\n            refId\n            description\n            remediationAvailable\n            identifier\n          }\n        }\n      }\n      businessObjective {\n        id\n        title\n      }\n      hosts {\n        id\n        osMinorVersion\n      }\n      benchmark {\n        id\n        title\n        version\n      }\n      rules {\n        title\n        severity\n        rationale\n        refId\n        description\n        remediationAvailable\n        identifier\n      }\n    }\n  }\n"]))),q=function(e){var t,n,i=e.route,a="details",o=(0,c.useParams)().policy_id,s=(0,c.useLocation)(),v=(0,f.Wb)(),g=(0,d.useQuery)(Z,{variables:{policyId:o}}),I=g.data,T=g.error,V=g.loading,S=g.refetch,w=!0;return I&&!V&&(w=!!(n=I.profile).policy.profiles.find((function(e){return!!e.osMinorVersion}))),(0,r.useEffect)((function(){S()}),[s,S]),(0,b.a)(i,null===(t=n)||void 0===t?void 0:t.name),l().createElement(h.tC,{stateValues:{error:T,data:I,loading:V}},l().createElement(h.K7,{stateKey:"loading"},l().createElement(u.Z,null,l().createElement(h.PL,null)),l().createElement(y.Z,null,l().createElement(E.Z,null))),l().createElement(h.K7,{stateKey:"data"},n&&l().createElement(r.Fragment,null,l().createElement(u.Z,{className:"page-header-tabs"},l().createElement(m.Breadcrumb,{ouiaId:"PolicyDetailsPathBreadcrumb"},l().createElement(h.MU,{to:"/"},"Compliance"),l().createElement(h.MU,{to:"/scappolicies"},"SCAP policies"),l().createElement(m.BreadcrumbItem,{isActive:!0},n.name)),l().createElement(m.Grid,{gutter:"lg"},l().createElement(m.GridItem,{xl2:11,xl:10,lg:12,md:12,sm:12},l().createElement(p.Z,{title:n.name})),l().createElement(m.GridItem,{className:"policy-details-button",xl2:1,xl:2,lg:2,md:3,sm:3},l().createElement(h.mR,{to:"/scappolicies/".concat(n.id,"/edit"),state:{policy:n},hash:v,backgroundLocation:{hash:"details"}},l().createElement(m.Button,{variant:"secondary",ouiaId:"EditPolicyButton"},"Edit policy")))),l().createElement(h.tn,{"aria-label":"Policy Tabs",ouiaId:"PolicyDetailsTabs",defaultTab:a},l().createElement(m.Tab,{title:"Details",id:"policy-details",eventKey:"details"}),l().createElement(m.Tab,{title:"Rules",id:"policy-rules",eventKey:"rules"}),l().createElement(m.Tab,{title:"Systems",id:"policy-systems",eventKey:"systems"}))),l().createElement(y.Z,null,l().createElement(h.Jm,{defaultTab:a},l().createElement(h.X8,{eventKey:"details"},l().createElement(h.NP,{policy:n})),l().createElement(h.X8,{eventKey:"rules"},w?l().createElement(K,{policy:n}):l().createElement(P,{policy:n})),l().createElement(h.X8,{eventKey:"systems"},l().createElement(k,{policy:n})))))))};q.propTypes={route:o().object};const x=q}}]);
//# sourceMappingURL=../sourcemaps/PolicyDetails.e2d5d56c36f99833d8f2.js.map
(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[705],{77388:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PolicyDetails:()=>q,QUERY:()=>Z,default:()=>N});var i=n(32465),r=n(92950),l=n.n(r),o=n(45697),a=n.n(o),s=n(44119),c=n.n(s),m=n(334),d=n(46829),p=n(92277),u=n(48716),y=n(39173),f=n(86350),h=n(6023),E=n(95904),b=n(52710),v=n(7648),g=(n(90129),n(2707)),T=function(e){var t=e.policy,n=(0,b.Wb)();return l().createElement(p.ToolbarItem,null,l().createElement(E.mR,{to:"/scappolicies/".concat(t.id,"/edit"),state:{policy:t},hash:n,backgroundLocation:{hash:n}},l().createElement(p.Button,{variant:"primary"},"Edit rules")))};T.propTypes={policy:a().object.isRequired};const I=T;var V=function(e){var t=e.loading,n=e.policy;return l().createElement(l().Fragment,null,l().createElement(p.Alert,{isInline:!0,variant:"info",title:"Rule editing is now available."},'SCAP policies created before April 19th, 2021 with rule editing will use the full default set of rules for the policy with the most accurate benchmark for systems within the policy. Click the "Edit rules" or "Edit policy" button to edit rules.'),l().createElement(p.PageSection,{variant:p.PageSectionVariants.light},l().createElement(p.Text,{component:p.TextVariants.p},l().createElement("strong",null,"What rules are shown on this list? "),"This view shows rules that are from the latest SSG version (",n.benchmark.version,"). If you are using a different version of SSG for systems in this policy, those rules will be different and can be viewed on the systems details page.")),l().createElement(g.ZP,{remediationsEnabled:!1,columns:(0,g.eo)(["Name","Severity","Ansible"]),loading:t,profileRules:[{profile:{refId:n.refId,name:n.name},rules:n.rules}],toolbarItems:l().createElement(I,{policy:n})}))};V.propTypes={loading:a().bool,policy:a().shape({name:a().string,refId:a().string,rules:a().array,benchmark:a().object})};const S=V;var w=n(69030),P=n(27803),k=n(31499),M=function(e){var t=e.policy;return l().createElement(w.e_,{columns:[k.Zw({showLink:!0}),k.hN,k.U5],showOsMinorVersionFilter:[t.majorOsVersion],query:P.Ep,policyId:t.id,defaultFilter:"policy_id = ".concat(t.id),showActions:!1,remediationsEnabled:!1,complianceThreshold:t.complianceThreshold})};M.propTypes={policy:a().shape({id:a().string.isRequired,complianceThreshold:a().number.isRequired,majorOsVersion:a().string.isRequired}),systemTableProps:a().object};const j=M;var C=n(99030),R=n(79886),A=function(e){var t=e.policy,n=t.hosts,i=t.policy.profiles.filter((function(e){return!!e.osMinorVersion})),r=(0,C.UP)(n),o=i.sort((0,R.S)("osMinorVersion","desc")).map((function(e){var t;return{profile:e,systemCount:(null===(t=r[e.osMinorVersion])||void 0===t?void 0:t.count)||0}}));return l().createElement(l().Fragment,null,l().createElement(p.PageSection,{variant:p.PageSectionVariants.light},l().createElement(E.Hv,{tabsData:o,columns:(0,g.eo)(["Name","Severity","Ansible"]),level:1,toolbarItems:l().createElement(I,{policy:t})})))};A.propTypes={policy:a().object.isRequired};const K=A;n(23266);var x,Z=c()(x||(x=(0,i.Z)(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        external\n        description\n        totalHostCount\n        compliantHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        policyType\n        policy {\n            id\n            name\n            refId\n            profiles {\n                id\n                ssgVersion\n                name\n                refId\n                osMinorVersion\n                osMajorVersion\n                benchmark {\n                    id\n                    title\n                    latestSupportedOsMinorVersions\n                    osMajorVersion\n                }\n                rules {\n                    title\n                    severity\n                    rationale\n                    refId\n                    description\n                    remediationAvailable\n                    identifier\n                }\n            }\n        }\n        businessObjective {\n            id\n            title\n        }\n        hosts {\n            id\n            osMinorVersion\n        }\n        benchmark {\n            id\n            title\n            version\n        }\n        rules {\n            title\n            severity\n            rationale\n            refId\n            description\n            remediationAvailable\n            identifier\n        }\n    }\n}\n"]))),q=function(e){var t,n,i=e.route,o="details",a=(0,m.useParams)().policy_id,s=(0,m.useLocation)(),c=(0,b.Wb)(),g=(0,d.useQuery)(Z,{variables:{policyId:a}}),T=g.data,I=g.error,V=g.loading,w=g.refetch,P=!0;return T&&!V&&(P=!!(n=T.profile).policy.profiles.find((function(e){return!!e.osMinorVersion}))),(0,r.useEffect)((function(){w()}),[s,w]),(0,v.a)(i,null===(t=n)||void 0===t?void 0:t.name),l().createElement(E.tC,{stateValues:{error:I,data:T,loading:V}},l().createElement(E.K7,{stateKey:"loading"},l().createElement(u.Z,null,l().createElement(E.PL,null)),l().createElement(f.Z,null,l().createElement(h.Z,null))),l().createElement(E.K7,{stateKey:"data"},n&&l().createElement(r.Fragment,null,l().createElement(u.Z,{className:"page-header-tabs"},l().createElement(p.Breadcrumb,null,l().createElement(E.MU,{to:"/"},"Compliance"),l().createElement(E.MU,{to:"/scappolicies"},"SCAP policies"),l().createElement(p.BreadcrumbItem,{isActive:!0},n.name)),l().createElement(p.Grid,{gutter:"lg"},l().createElement(p.GridItem,{xl2:11,xl:10,lg:12,md:12,sm:12},l().createElement(y.Z,{title:n.name})),l().createElement(p.GridItem,{className:"policy-details-button",xl2:1,xl:2,lg:2,md:3,sm:3},l().createElement(E.mR,{to:"/scappolicies/".concat(n.id,"/edit"),state:{policy:n},hash:c,backgroundLocation:{hash:"details"}},l().createElement(p.Button,{variant:"secondary"},"Edit policy")))),l().createElement(E.tn,{"aria-label":"Policy Tabs",defaultTab:o},l().createElement(p.Tab,{title:"Details",id:"policy-details",eventKey:"details"}),l().createElement(p.Tab,{title:"Rules",id:"policy-rules",eventKey:"rules"}),l().createElement(p.Tab,{title:"Systems",id:"policy-systems",eventKey:"systems"}))),l().createElement(f.Z,null,l().createElement(E.Jm,{defaultTab:o},l().createElement(E.X8,{eventKey:"details"},l().createElement(E.NP,{policy:n})),l().createElement(E.X8,{eventKey:"rules"},P?l().createElement(K,{policy:n}):l().createElement(S,{policy:n})),l().createElement(E.X8,{eventKey:"systems"},l().createElement(j,{policy:n})))))))};q.propTypes={route:a().object};const N=q},87601:(e,t,n)=>{(t=n(23645)(!1)).push([e.id,".threshold-tooltip{margin-bottom:var(--pf-global--spacer--md)}.grey-icon{color:var(--pf-global--Color--200)}.policy-description{padding-top:10px}\n",""]),e.exports=t},23266:(e,t,n)=>{"use strict";var i=n(93379),r=n.n(i),l=n(87601),o=n.n(l),a=r()(o(),{insert:"head",singleton:!1});if(!o().locals||e.hot.invalidate){var s=o().locals;e.hot.accept(87601,(t=>{l=n(87601),function(e,t,n){if(!e&&t||e&&!t)return!1;var i;for(i in e)if(e[i]!==t[i])return!1;for(i in t)if(!e[i])return!1;return!0}(s,(o=n.n(l))().locals)?(s=o().locals,a(o())):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),o().locals}}]);
//# sourceMappingURL=../sourcemaps/PolicyDetails.83594f97ac313e546ef6.js.map
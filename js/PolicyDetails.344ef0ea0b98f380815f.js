(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[705],{77388:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PolicyDetails:()=>x,QUERY:()=>Z,default:()=>q});var i=n(32465),r=n(92950),l=n.n(r),o=n(45697),a=n.n(o),s=n(33121),c=n(334),m=n(46829),d=n(30586),u=n(48716),p=n(39173),y=n(86350),f=n(6023),h=n(23860),E=n(52710),v=n(7648),b=(n(90129),n(2707)),g=function(e){var t=e.policy,n=(0,E.Wb)();return l().createElement(d.ToolbarItem,null,l().createElement(h.mR,{to:"/scappolicies/".concat(t.id,"/edit"),state:{policy:t},hash:n,backgroundLocation:{hash:n}},l().createElement(d.Button,{variant:"primary"},"Edit rules")))};g.propTypes={policy:a().object.isRequired};const T=g;var I=function(e){var t=e.loading,n=e.policy;return l().createElement(l().Fragment,null,l().createElement(d.Alert,{isInline:!0,variant:"info",title:"Rule editing is now available."},'SCAP policies created before April 19th, 2021 with rule editing will use the full default set of rules for the policy with the most accurate benchmark for systems within the policy. Click the "Edit rules" or "Edit policy" button to edit rules.'),l().createElement(d.PageSection,{variant:d.PageSectionVariants.light},l().createElement(d.Text,{component:d.TextVariants.p},l().createElement("strong",null,"What rules are shown on this list? "),"This view shows rules that are from the latest SSG version (",n.benchmark.version,"). If you are using a different version of SSG for systems in this policy, those rules will be different and can be viewed on the systems details page.")),l().createElement(b.ZP,{remediationsEnabled:!1,columns:(0,b.eo)(["Name","Severity","Ansible"]),loading:t,profileRules:[{profile:{refId:n.refId,name:n.name},rules:n.rules}],toolbarItems:l().createElement(T,{policy:n})}))};I.propTypes={loading:a().bool,policy:a().shape({name:a().string,refId:a().string,rules:a().array,benchmark:a().object})};const S=I;var V=n(69030),w=n(27803),P=n(31499),k=function(e){var t,n=e.policy;return l().createElement(V.e_,{columns:[P.Zw({showLink:!0}),P.hN,P.U5],showOsMinorVersionFilter:[n.majorOsVersion],query:w.Ep,policyId:n.id,defaultFilter:"policy_id = ".concat(n.id),showActions:!1,remediationsEnabled:!1,noSystemsTable:0===(null==n||null===(t=n.hosts)||void 0===t?void 0:t.length)&&l().createElement(h.JS,null),complianceThreshold:n.complianceThreshold})};k.propTypes={policy:a().shape({id:a().string.isRequired,complianceThreshold:a().number.isRequired,majorOsVersion:a().string.isRequired,hosts:a().array.isRequired}),systemTableProps:a().object};const M=k;var R=n(99030),j=n(79886),C=function(e){var t=e.policy,n=t.hosts,i=t.policy.profiles.filter((function(e){return!!e.osMinorVersion})),r=(0,R.UP)(n),o=i.sort((0,j.S)("osMinorVersion","desc")).map((function(e){var t;return{profile:e,systemCount:(null===(t=r[e.osMinorVersion])||void 0===t?void 0:t.count)||0}}));return l().createElement(l().Fragment,null,l().createElement(d.PageSection,{variant:d.PageSectionVariants.light},l().createElement(h.Hv,{tabsData:o,columns:(0,b.eo)(["Name","Severity","Ansible"]),level:1,toolbarItems:l().createElement(T,{policy:t})})))};C.propTypes={policy:a().object.isRequired};const A=C;n(23266);var K,Z=(0,s.ZP)(K||(K=(0,i.Z)(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        external\n        description\n        totalHostCount\n        compliantHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        policyType\n        policy {\n            id\n            name\n            refId\n            profiles {\n                id\n                ssgVersion\n                name\n                refId\n                osMinorVersion\n                osMajorVersion\n                benchmark {\n                    id\n                    title\n                    latestSupportedOsMinorVersions\n                    osMajorVersion\n                }\n                rules {\n                    title\n                    severity\n                    rationale\n                    refId\n                    description\n                    remediationAvailable\n                    identifier\n                }\n            }\n        }\n        businessObjective {\n            id\n            title\n        }\n        hosts {\n            id\n            osMinorVersion\n        }\n        benchmark {\n            id\n            title\n            version\n        }\n        rules {\n            title\n            severity\n            rationale\n            refId\n            description\n            remediationAvailable\n            identifier\n        }\n    }\n}\n"]))),x=function(e){var t,n,i=e.route,o="details",a=(0,c.useParams)().policy_id,s=(0,c.useLocation)(),b=(0,E.Wb)(),g=(0,m.useQuery)(Z,{variables:{policyId:a}}),T=g.data,I=g.error,V=g.loading,w=g.refetch,P=!0;return T&&!V&&(P=!!(n=T.profile).policy.profiles.find((function(e){return!!e.osMinorVersion}))),(0,r.useEffect)((function(){w()}),[s,w]),(0,v.a)(i,null===(t=n)||void 0===t?void 0:t.name),l().createElement(h.tC,{stateValues:{error:I,data:T,loading:V}},l().createElement(h.K7,{stateKey:"loading"},l().createElement(u.Z,null,l().createElement(h.PL,null)),l().createElement(y.Z,null,l().createElement(f.Z,null))),l().createElement(h.K7,{stateKey:"data"},n&&l().createElement(r.Fragment,null,l().createElement(u.Z,{className:"page-header-tabs"},l().createElement(d.Breadcrumb,null,l().createElement(h.MU,{to:"/"},"Compliance"),l().createElement(h.MU,{to:"/scappolicies"},"SCAP policies"),l().createElement(d.BreadcrumbItem,{isActive:!0},n.name)),l().createElement(d.Grid,{gutter:"lg"},l().createElement(d.GridItem,{xl2:11,xl:10,lg:12,md:12,sm:12},l().createElement(p.Z,{title:n.name})),l().createElement(d.GridItem,{className:"policy-details-button",xl2:1,xl:2,lg:2,md:3,sm:3},l().createElement(h.mR,{to:"/scappolicies/".concat(n.id,"/edit"),state:{policy:n},hash:b,backgroundLocation:{hash:"details"}},l().createElement(d.Button,{variant:"secondary"},"Edit policy")))),l().createElement(h.tn,{"aria-label":"Policy Tabs",defaultTab:o},l().createElement(d.Tab,{title:"Details",id:"policy-details",eventKey:"details"}),l().createElement(d.Tab,{title:"Rules",id:"policy-rules",eventKey:"rules"}),l().createElement(d.Tab,{title:"Systems",id:"policy-systems",eventKey:"systems"}))),l().createElement(y.Z,null,l().createElement(h.Jm,{defaultTab:o},l().createElement(h.X8,{eventKey:"details"},l().createElement(h.NP,{policy:n})),l().createElement(h.X8,{eventKey:"rules"},P?l().createElement(A,{policy:n}):l().createElement(S,{policy:n})),l().createElement(h.X8,{eventKey:"systems"},l().createElement(M,{policy:n})))))))};x.propTypes={route:a().object};const q=x},87601:(e,t,n)=>{(t=n(23645)(!1)).push([e.id,".threshold-tooltip{margin-bottom:var(--pf-global--spacer--md)}.grey-icon{color:var(--pf-global--Color--200)}.policy-description{padding-top:10px}",""]),e.exports=t},23266:(e,t,n)=>{"use strict";var i=n(93379),r=n.n(i),l=n(87601),o=n.n(l),a=r()(o(),{insert:"head",singleton:!1});if(!o().locals||e.hot.invalidate){var s=o().locals;e.hot.accept(87601,(t=>{l=n(87601),function(e,t,n){if(!e&&t||e&&!t)return!1;var i;for(i in e)if(e[i]!==t[i])return!1;for(i in t)if(!e[i])return!1;return!0}(s,(o=n.n(l))().locals)?(s=o().locals,a(o())):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),o().locals}}]);
//# sourceMappingURL=../sourcemaps/PolicyDetails.f84e5974fcfb1635fb48.js.map
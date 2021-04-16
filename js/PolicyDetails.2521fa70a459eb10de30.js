(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[705],{87601:(e,t,n)=>{(t=n(23645)(!1)).push([e.id,".threshold-tooltip{margin-bottom:var(--pf-global--spacer--md)}.grey-icon{color:var(--pf-global--Color--200)}.policy-description{padding-top:10px}\n",""]),e.exports=t},91308:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PolicyDetails:()=>B,QUERY:()=>H,default:()=>U});var r=n(28655),i=n.n(r),o=n(77865),a=n.n(o),l=n(61084),s=n(45697),c=n.n(s),d=n(44119),p=n.n(d),m=n(334),u=n(46829),y=n(4092),f=n(48716),b=n(39173),h=n(86350),v=n(6023),E=n(5705),g=n(50437),S=n(52998),O=(n(90129),n(2707)),V=function(e){var t=e.policy,n=(0,g.Wb)();return a().createElement(y.ToolbarItem,null,a().createElement(E.mR,{to:"/scappolicies/".concat(t.id,"/edit"),state:{policy:t},hash:n,backgroundLocation:{hash:n}},a().createElement(y.Button,{variant:"primary"},"Edit rules")))};V.propTypes={policy:c().object.isRequired};const P=V;var T=function(e){var t=e.loading,n=e.policy;return a().createElement(a().Fragment,null,a().createElement(y.Alert,{isInline:!0,variant:"info",title:"Rule editing is now available."},'Edit rules by clicking the "Edit rules" button in the toolbar. Rule can now be edited for each minor version of the RHEL OS associated with this policy and will be displayed in the policy after the "Edit rules" modal has been opened and saved.'),a().createElement(y.PageSection,{variant:y.PageSectionVariants.light},a().createElement(y.Text,{component:y.TextVariants.p},a().createElement("strong",null,"What rules are shown on this list? "),"This view shows rules that are from the latest SSG version (",n.benchmark.version,"). If you are using a different version of SSG for systems in this policy, those rules will be different and can be viewed on the systems details page.")),a().createElement(O.ZP,{remediationsEnabled:!1,columns:(0,O.eo)(["Name","Severity","Ansible"]),loading:t,profileRules:[{profile:{refId:n.refId,name:n.name},rules:n.rules}],toolbarItems:a().createElement(P,{policy:n})}))};T.propTypes={loading:c().bool,policy:c().shape({name:c().string,refId:c().string,rules:c().array,benchmark:c().object})};const j=T;var I=n(59713),w=n.n(I),k=n(319),M=n.n(k),R=n(33883),C=n(55186),K=n(21157),x=n(42564);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t=e.policy,n=(0,x.ZP)("newInventory"),r=(0,x.ZP)("showSsgVersions"),i=n?R.e_:R.r0;return a().createElement(i,{showOsMinorVersionFilter:[t.majorOsVersion],query:C.Ep,policyId:t.id,defaultFilter:"policy_id = ".concat(t.id),showActions:!1,remediationsEnabled:!1,columns:[Z({key:"facts.compliance.display_name",title:"Name",props:{width:40,isStatic:!0}},n&&{key:"display_name",renderFunc:function(e,t){return a().createElement(m.Link,{to:{pathname:"/systems/".concat(t)}}," ",e," ")}})].concat(M()(r?[{key:"ssgVersion",title:"SSG version",renderFunc:function(e){var t,n,r=e;return"string"==typeof e&&(r=arguments.length<=2?void 0:arguments[2]),r&&a().createElement(K.n1.SSGVersion,{supported:r.supported,ssgVersion:(null===(t=r)||void 0===t?void 0:t.ssg_version)||(null===(n=r)||void 0===n?void 0:n.ssgVersion)})}}]:[]),[{key:"osMinorVersion",title:"Operating system",renderFunc:function(e,t,n){var r=n.osMajorVersion;return"RHEL ".concat(r,".").concat(e)}}]),complianceThreshold:t.complianceThreshold})};_.propTypes={policy:c().shape({id:c().string.isRequired,complianceThreshold:c().number.isRequired,majorOsVersion:c().number.isRequired}),systemTableProps:c().object};const A=_;var D=n(49690),F=n(61156),q=function(e){var t=e.policy,n=t.hosts,r=t.policy.profiles.filter((function(e){return!!e.osMinorVersion})),i=(0,D.UP)(n),o=r.sort((0,F.S)("osMinorVersion","desc")).map((function(e){var t;return{profile:e,systemCount:(null===(t=i[e.osMinorVersion])||void 0===t?void 0:t.count)||0}}));return a().createElement(a().Fragment,null,a().createElement(y.PageSection,{variant:y.PageSectionVariants.light},a().createElement(E.Hv,{tabsData:o,columns:(0,O.eo)(["Name","Severity","Ansible"]),level:1,toolbarItems:a().createElement(P,{policy:t})})))};q.propTypes={policy:c().object.isRequired};const G=q;n(23266);var N,H=p()(N||(N=i()(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        external\n        description\n        totalHostCount\n        compliantHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        policyType\n        policy {\n            id\n            name\n            refId\n            profiles {\n                id\n                ssgVersion\n                name\n                refId\n                osMinorVersion\n                osMajorVersion\n                benchmark {\n                    id\n                    title\n                    latestSupportedOsMinorVersions\n                    osMajorVersion\n                }\n                rules {\n                    title\n                    severity\n                    rationale\n                    refId\n                    description\n                    remediationAvailable\n                    identifier\n                }\n            }\n        }\n        businessObjective {\n            id\n            title\n        }\n        hosts {\n            id\n            osMinorVersion\n        }\n        benchmark {\n            id\n            title\n            version\n        }\n        rules {\n            title\n            severity\n            rationale\n            refId\n            description\n            remediationAvailable\n            identifier\n        }\n    }\n}\n"]))),B=function(e){var t,n,r=e.route,i="details",s=(0,m.useParams)().policy_id,c=(0,m.useLocation)(),d=(0,g.Wb)(),p=(0,l.useDispatch)(),O=(0,u.useQuery)(H,{variables:{policyId:s}}),V=O.data,P=O.error,T=O.loading,I=O.refetch,w=!0;return V&&!T&&(w=!!(n=V.profile).policy.profiles.find((function(e){return!!e.osMinorVersion}))),(0,o.useEffect)((function(){I()}),[c,I]),(0,o.useLayoutEffect)((function(){p({type:"SELECT_ENTITIES",payload:{ids:[]}})}),[]),(0,S.a)(r,null===(t=n)||void 0===t?void 0:t.name),a().createElement(E.tC,{stateValues:{error:P,data:V,loading:T}},a().createElement(E.K7,{stateKey:"loading"},a().createElement(f.Z,null,a().createElement(E.PL,null)),a().createElement(h.Z,null,a().createElement(v.Z,null))),a().createElement(E.K7,{stateKey:"data"},n&&a().createElement(o.Fragment,null,a().createElement(f.Z,{className:"page-header-tabs"},a().createElement(y.Breadcrumb,null,a().createElement(E.MU,{to:"/"},"Compliance"),a().createElement(E.MU,{to:"/scappolicies"},"SCAP policies"),a().createElement(y.BreadcrumbItem,{isActive:!0},n.name)),a().createElement(y.Grid,{gutter:"lg"},a().createElement(y.GridItem,{xl2:11,xl:10,lg:12,md:12,sm:12},a().createElement(b.Z,{title:n.name})),a().createElement(y.GridItem,{className:"policy-details-button",xl2:1,xl:2,lg:2,md:3,sm:3},a().createElement(E.mR,{to:"/scappolicies/".concat(n.id,"/edit"),state:{policy:n},hash:d,backgroundLocation:{hash:"details"}},a().createElement(y.Button,{variant:"secondary"},"Edit policy")))),a().createElement(E.tn,{"aria-label":"Policy Tabs",defaultTab:i},a().createElement(y.Tab,{title:"Details",id:"policy-details",eventKey:"details"}),a().createElement(y.Tab,{title:"Rules",id:"policy-rules",eventKey:"rules"}),a().createElement(y.Tab,{title:"Systems",id:"policy-systems",eventKey:"systems"}))),a().createElement(h.Z,null,a().createElement(E.Jm,{defaultTab:i},a().createElement(E.X8,{eventKey:"details"},a().createElement(E.NP,{policy:n})),a().createElement(E.X8,{eventKey:"rules"},w?a().createElement(G,{policy:n}):a().createElement(j,{policy:n})),a().createElement(E.X8,{eventKey:"systems"},a().createElement(A,{policy:n})))))))};B.propTypes={route:c().object};const U=B},23266:(e,t,n)=>{"use strict";var r=n(93379),i=n.n(r),o=n(87601),a=n.n(o),l=i()(a(),{insert:"head",singleton:!1});if(!a().locals||e.hot.invalidate){var s=a().locals;e.hot.accept(87601,(t=>{o=n(87601),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(s,(a=n.n(o))().locals)?(s=a().locals,l(a())):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),a().locals}}]);
//# sourceMappingURL=PolicyDetails.2521fa70a459eb10de30.js.map
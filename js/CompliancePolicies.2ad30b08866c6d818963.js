(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[565],{95790:(e,n,t)=>{"use strict";t.r(n),t.d(n,{CompliancePolicies:()=>y,default:()=>g});var a,r=t(32465),l=t(92950),i=t.n(l),o=t(33121),c=t(334),s=t(46829),m=t(30586),d=t(48716),u=t(39173),p=t(86350),f=t(72858),E=t(59722),h=(0,o.ZP)(a||(a=(0,r.Z)(['\n{\n    profiles(search: "external = false and canonical = false") {\n        edges {\n            node {\n                id\n                name\n                description\n                refId\n                complianceThreshold\n                totalHostCount\n                majorOsVersion\n                policyType\n                policy {\n                    id\n                    name\n                }\n                benchmark {\n                    id\n                    title\n                    version\n                }\n                hosts {\n                    id\n                }\n                businessObjective {\n                    id\n                    title\n                }\n            }\n        }\n    }\n}\n']))),y=function(){var e,n=(0,c.useLocation)(),t=i().createElement(E.mR,{to:"/scappolicies/new"},i().createElement(m.Button,{variant:"primary",ouiaId:"NewPolicyButton"},"Create new policy")),a=(0,s.useQuery)(h),r=a.data,o=a.error,y=a.loading,g=a.refetch;return(0,l.useEffect)((function(){g()}),[n,g]),r&&(o=void 0,y=void 0,e=r.profiles.edges.map((function(e){return e.node}))),i().createElement(i().Fragment,null,i().createElement(d.Z,{className:"page-header"},i().createElement(u.Z,{title:"SCAP policies"})),i().createElement(p.Z,null,i().createElement(E.Se,{stateValues:{error:o,data:r,loading:y}},i().createElement(E.K7,{stateKey:"error"},i().createElement(E.mf,{error:o})),i().createElement(E.K7,{stateKey:"loading"},i().createElement(E.Ir,null)),i().createElement(E.K7,{stateKey:"data"},e&&0===e.length?i().createElement(m.Grid,{hasGutter:!0},i().createElement(f.Z,{title:"No policies",mainButton:t})):i().createElement(E.V_,{policies:e})))))};const g=y}}]);
//# sourceMappingURL=../sourcemaps/CompliancePolicies.3414c7d54ce696133ae9.js.map
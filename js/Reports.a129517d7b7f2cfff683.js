(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[322],{1649:(e,n,t)=>{"use strict";t.r(n),t.d(n,{Reports:()=>v,default:()=>y});var r,l=t(32465),o=t(92950),s=t.n(o),a=t(334),i=t(46829),c=t(33121),u=t(48716),d=t(39173),m=t(86350),f=t(75959),p=t(59722),E=(0,c.ZP)(r||(r=(0,l.Z)(["\nquery Profiles($filter: String!) {\n    profiles(search: $filter, limit: 1000){\n        edges {\n            node {\n                id\n                name\n                refId\n                description\n                policyType\n                totalHostCount\n                testResultHostCount\n                compliantHostCount\n                unsupportedHostCount\n                majorOsVersion\n                ssgVersion\n                complianceThreshold\n                businessObjective {\n                    id\n                    title\n                }\n                policy {\n                    id\n                    name\n                    benchmark {\n                        id\n                        version\n                    }\n                }\n                benchmark {\n                    id\n                    version\n                }\n            }\n        }\n\n    }\n}\n"]))),h=function(){return s().createElement(u.Z,null,s().createElement(d.Z,{title:"Reports"}))},v=function(){var e=[],n=!1,t=(0,a.useLocation)(),r=(0,i.useQuery)(E,{variables:{filter:"(has_policy_test_results = true AND external = false)\n                    OR (has_policy = false AND has_test_results = true)"}}),l=r.data,c=r.error,u=r.loading,d=r.refetch;return(0,o.useEffect)((function(){d()}),[t,d]),l&&(c=void 0,u=void 0,n=(e=function(e){var n;return((null==e||null===(n=e.profiles)||void 0===n?void 0:n.edges)||[]).map((function(e){return e.node}))}(l))&&e.length>0),s().createElement(p.tC,{stateValues:{error:c,data:l,loading:u}},s().createElement(p.K7,{stateKey:"loading"},s().createElement(h,null),s().createElement(m.Z,null,s().createElement(f.Z,{colSize:3,rowSize:10}))),s().createElement(p.K7,{stateKey:"data"},s().createElement(h,null),s().createElement(m.Z,null,n?s().createElement(p.Ek,{profiles:e}):s().createElement(p.vm,null))))};const y=v}}]);
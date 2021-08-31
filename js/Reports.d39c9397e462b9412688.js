(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[322],{1649:(e,n,t)=>{"use strict";t.r(n),t.d(n,{Reports:()=>h,default:()=>g});var r,l=t(32465),o=t(92950),a=t.n(o),i=t(334),s=t(46829),c=t(33121),u=t(48716),d=t(39173),m=t(86350),f=t(75959),p=t(67),E=(0,c.ZP)(r||(r=(0,l.Z)(["\n  query Profiles($filter: String!) {\n    profiles(search: $filter, limit: 1000) {\n      edges {\n        node {\n          id\n          name\n          refId\n          description\n          policyType\n          totalHostCount\n          testResultHostCount\n          compliantHostCount\n          unsupportedHostCount\n          majorOsVersion\n          ssgVersion\n          complianceThreshold\n          businessObjective {\n            id\n            title\n          }\n          policy {\n            id\n            name\n            benchmark {\n              id\n              version\n            }\n          }\n          benchmark {\n            id\n            version\n          }\n        }\n      }\n    }\n  }\n"]))),v=function(){return a().createElement(u.Z,null,a().createElement(d.Z,{title:"Reports"}))},h=function(){var e=[],n=!1,t=(0,i.useLocation)(),r=(0,s.useQuery)(E,{variables:{filter:"has_policy_test_results = true AND external = false"}}),l=r.data,c=r.error,u=r.loading,d=r.refetch;return(0,o.useEffect)((function(){d()}),[t,d]),l&&(c=void 0,u=void 0,n=(e=function(e){var n;return((null==e||null===(n=e.profiles)||void 0===n?void 0:n.edges)||[]).map((function(e){return e.node}))}(l))&&e.length>0),a().createElement(p.tC,{stateValues:{error:c,data:l,loading:u}},a().createElement(p.K7,{stateKey:"loading"},a().createElement(v,null),a().createElement(m.Z,null,a().createElement(f.Z,{colSize:3,rowSize:10}))),a().createElement(p.K7,{stateKey:"data"},a().createElement(v,null),a().createElement(m.Z,null,n?a().createElement(p.Ek,{profiles:e}):a().createElement(p.vm,null))))};const g=h}}]);
//# sourceMappingURL=../sourcemaps/Reports.ecb912b2d7e842b78aba.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1223:function(e,n,a){"use strict";a.r(n),a.d(n,"CompliancePolicies",(function(){return P}));var t=a(520),r=a.n(t),i=a(1),l=a.n(i),c=a(514),o=a.n(c),s=a(500),d=a(683),m=a(69),u=a(539),p=a.n(u),E=a(529),f=a(525),h=a(531);function g(){var e=r()(['\n{\n    profiles(search: "external = false") {\n        edges {\n            node {\n                id\n                name\n                refId\n                complianceThreshold\n                totalHostCount\n                majorOsVersion\n                benchmark {\n                    id\n                    title\n                    version\n                }\n                businessObjective {\n                    id\n                    title\n                }\n            }\n        }\n    }\n}\n']);return g=function(){return e},e}var v=o()(g()),P=function(){var e,n=Object(s.b)(v,{fetchPolicy:"cache-and-network"}),a=n.data,t=n.error,r=n.loading,i=n.refetch;return a&&(t=void 0,r=void 0,e=a.profiles.edges.map((function(e){return e.node}))),l.a.createElement(f.o,{stateValues:{error:t,data:a,loading:r}},l.a.createElement(f.p,{stateKey:"error"},l.a.createElement(f.c,{error:t})),l.a.createElement(f.p,{stateKey:"loading"},l.a.createElement(m.PageHeader,{className:"page-header"},l.a.createElement(m.PageHeaderTitle,{title:"SCAP policies"})),l.a.createElement(m.Main,null,l.a.createElement(f.e,null))),l.a.createElement(f.p,{stateKey:"data"},l.a.createElement(m.PageHeader,{className:"page-header"},l.a.createElement(m.PageHeaderTitle,{title:"SCAP policies"})),l.a.createElement(m.Main,null,e&&0===e.length?l.a.createElement(d.a,{gutter:"md"},l.a.createElement(E.ComplianceEmptyState,{title:"No policies",mainButton:l.a.createElement(h.c,{onWizardFinish:function(){location.reload()}})})):l.a.createElement(h.h,{onWizardFinish:function(){return i()},policies:e}))))};n.default=p()(P)}}]);
//# sourceMappingURL=../sourcemaps/CompliancePolicies.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1238:function(e,n,t){"use strict";t.r(n),t.d(n,"CompliancePolicies",(function(){return w}));var a=t(515),r=t.n(a),i=t(0),l=t.n(i),c=t(510),o=t.n(c),s=t(490),d=t(527),u=t(85),m=t(151),p=t.n(m),f=t(525),E=t(511),h=t(534);function g(){var e=r()(['\n{\n    profiles(search: "external = false and canonical = false") {\n        edges {\n            node {\n                id\n                name\n                refId\n                complianceThreshold\n                totalHostCount\n                majorOsVersion\n                benchmark {\n                    id\n                    title\n                    version\n                }\n                businessObjective {\n                    id\n                    title\n                }\n            }\n        }\n    }\n}\n']);return g=function(){return e},e}var v=o()(g()),w=function(){var e,n=Object(s.useQuery)(v,{fetchPolicy:"cache-and-network"}),t=n.data,a=n.error,r=n.loading,i=n.refetch;return t&&(a=void 0,r=void 0,e=t.profiles.edges.map((function(e){return e.node}))),l.a.createElement(l.a.Fragment,null,l.a.createElement(u.PageHeader,{className:"page-header"},l.a.createElement(u.PageHeaderTitle,{title:"SCAP policies"})),l.a.createElement(u.Main,null,l.a.createElement(E.o,{stateValues:{error:a,data:t,loading:r}},l.a.createElement(E.p,{stateKey:"error"},l.a.createElement(E.c,{error:a})),l.a.createElement(E.p,{stateKey:"loading"},l.a.createElement(E.e,null)),l.a.createElement(E.p,{stateKey:"data"},e&&0===e.length?l.a.createElement(d.a,{hasGutter:!0},l.a.createElement(f.ComplianceEmptyState,{title:"No policies",mainButton:l.a.createElement(h.c,{onWizardFinish:function(){i()}})})):l.a.createElement(h.h,{onWizardFinish:function(){return i()},policies:e})))))};n.default=p()(w)}}]);
//# sourceMappingURL=../sourcemaps/CompliancePolicies.js.map
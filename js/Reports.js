(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1230:function(e,n,t){"use strict";t.r(n),t.d(n,"Reports",(function(){return k}));var a=t(524),r=t.n(a),l=t(1),i=t.n(l),o=t(520),c=t(534),s=t(532),m=t(68),d=t(132),u=t.n(d),p=t(503),E=t(517),f=t.n(E),g=t(688),h=t(687);function v(){var e=r()(['\n{\n    profiles(search: "has_test_results = true", limit: 1000){\n        edges {\n            node {\n                id\n                name\n                refId\n                description\n                totalHostCount\n                compliantHostCount\n                majorOsVersion\n                complianceThreshold\n                businessObjective {\n                    id\n                    title\n                }\n                policy {\n                    id\n                    benchmark {\n                        id\n                        version\n                    }\n                }\n                benchmark {\n                    id\n                    version\n                }\n            }\n        }\n\n    }\n}\n']);return v=function(){return e},e}var b=f()(v()),k=function(){var e,n=Object(p.b)(b,{fetchPolicy:"cache-and-network"}),t=n.data,a=n.error,r=n.loading,l=i.a.createElement(m.PageHeader,{style:{paddingBottom:22}},i.a.createElement(m.PageHeaderTitle,{title:"Compliance"}));if(!r&&t){var d=t.profiles.edges.map((function(e){return e.node})).filter((function(e){return e.totalHostCount>0}));d.length?(l=i.a.createElement(m.PageHeader,{className:"page-header-tabs"},i.a.createElement(m.PageHeaderTitle,{title:"Compliance reports"}),i.a.createElement(o.n,null)),e=d.map((function(e,n){return i.a.createElement(g.a,{sm:12,md:12,lg:6,xl:4,key:n},i.a.createElement(o.k,{key:n,profile:e}))}))):e=i.a.createElement(s.ComplianceEmptyState,{title:"No policies are reporting",mainButton:i.a.createElement(c.c,{onWizardFinish:function(){location.reload()}})})}return i.a.createElement(i.a.Fragment,null,l,i.a.createElement(m.Main,null,i.a.createElement(o.q,{stateValues:{error:a,data:t,loading:r}},i.a.createElement(o.p,{stateKey:"loading"},i.a.createElement("div",{className:"policies-donuts"},i.a.createElement(h.a,{gutter:"md"},i.a.createElement(o.d,null)))),i.a.createElement(o.p,{stateKey:"data"},i.a.createElement("div",{className:"policies-donuts"},i.a.createElement(h.a,{gutter:"md"},e))))))};n.default=u()(k)}}]);
//# sourceMappingURL=../sourcemaps/Reports.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1218:function(e,n,t){"use strict";t.r(n),t.d(n,"Reports",(function(){return v}));var a=t(520),r=t.n(a),l=t(1),i=t.n(l),o=t(527),c=t(68),s=t(536),m=t.n(s),d=t(500),u=t(515),p=t.n(u),E=t(684),g=t(683);function f(){var e=r()(['\n{\n    profiles(search: "has_test_results = true", limit: 1000){\n        edges {\n            node {\n                id\n                name\n                refId\n                description\n                totalHostCount\n                compliantHostCount\n                majorOsVersion\n                complianceThreshold\n                businessObjective {\n                    id\n                    title\n                }\n                policy {\n                    id\n                    benchmark {\n                        version\n                    }\n                }\n                benchmark {\n                    version\n                }\n            }\n        }\n\n    }\n}\n']);return f=function(){return e},e}var h=p()(f()),v=function(){var e,n,t=Object(d.b)(h,{fetchPolicy:"cache-and-network"}),a=t.data,r=t.error,l=t.loading;if(!l&&a){var s=a.profiles.edges.map((function(e){return e.node})).filter((function(e){return e.totalHostCount>0}));s.length?(n=i.a.createElement(c.PageHeader,{className:"page-header"},i.a.createElement(c.PageHeaderTitle,{title:"Compliance reports"}),i.a.createElement(o.n,null)),e=s.map((function(e,n){return i.a.createElement(E.a,{sm:12,md:12,lg:6,xl:4,key:n},i.a.createElement(o.k,{key:n,profile:e}))}))):(n=i.a.createElement(c.PageHeader,{style:{paddingBottom:22}},i.a.createElement(c.PageHeaderTitle,{title:"Compliance"})),e=i.a.createElement(o.b,{title:"No policies are reporting"}))}return i.a.createElement(o.q,{stateValues:{error:r,data:a,loading:l}},i.a.createElement(o.p,{stateKey:"loading"},i.a.createElement(c.PageHeader,null,i.a.createElement(c.PageHeaderTitle,{title:"Compliance"})),i.a.createElement(c.Main,null,i.a.createElement("div",{className:"policies-donuts"},i.a.createElement(g.a,{gutter:"md"},i.a.createElement(o.e,null))))),i.a.createElement(o.p,{stateKey:"data"},n,i.a.createElement(c.Main,null,i.a.createElement("div",{className:"policies-donuts"},i.a.createElement(g.a,{gutter:"md"},e)))))};n.default=m()(v)}}]);
//# sourceMappingURL=../sourcemaps/Reports.js.map
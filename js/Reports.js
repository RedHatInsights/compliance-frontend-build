(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1177:function(e,t,a){"use strict";a.r(t),a.d(t,"Reports",(function(){return H}));var n=a(504),l=a.n(n),r=a(1),i=a.n(r),o=a(509),c=a(66),m=a(515),s=a.n(m),d=a(485),u=a(501),p=a.n(u),E=a(669),g=a(668);function f(){var e=l()(["\n{\n    allProfiles {\n        id\n        name\n        refId\n        description\n        totalHostCount\n        compliantHostCount\n        majorOsVersion\n        complianceThreshold\n        businessObjective {\n            id\n            title\n        }\n    }\n}\n"]);return f=function(){return e},e}var b=p()(f()),H=function(){var e,t,a=Object(d.b)(b),n=a.data,l=a.error,r=a.loading;if(!r&&n){var m=n.allProfiles.filter((function(e){return e.totalHostCount>0})),s="beta"===window.location.pathname.split("/")[1];m.length?(t=i.a.createElement(c.PageHeader,{className:s?"beta-page-header":"stable-page-header"},i.a.createElement(c.PageHeaderTitle,{title:"Compliance reports"}),s?i.a.createElement(o.o,null):i.a.createElement(o.d,null)),e=m.map((function(e,t){return i.a.createElement(E.a,{sm:12,md:12,lg:6,xl:4,key:t},i.a.createElement(o.l,{key:t,policy:e}))}))):(t=i.a.createElement(c.PageHeader,{style:{paddingBottom:22}},i.a.createElement(c.PageHeaderTitle,{title:"Compliance"})),e=i.a.createElement(o.b,null))}return i.a.createElement(o.q,{stateValues:{error:l,data:n,loading:r}},i.a.createElement(o.p,{stateKey:"loading"},i.a.createElement(c.PageHeader,null,i.a.createElement(c.PageHeaderTitle,{title:"Compliance"})),i.a.createElement(c.Main,null,i.a.createElement("div",{className:"policies-donuts"},i.a.createElement(g.a,{gutter:"md"},i.a.createElement(o.f,null))))),i.a.createElement(o.p,{stateKey:"data"},t,i.a.createElement(c.Main,null,i.a.createElement("div",{className:"policies-donuts"},i.a.createElement(g.a,{gutter:"md"},e)))))};t.default=s()(H)}}]);
//# sourceMappingURL=../sourcemaps/Reports.js.map
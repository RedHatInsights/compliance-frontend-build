(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1215:function(e,a,t){"use strict";t.r(a),t.d(a,"SystemDetails",(function(){return _}));var n=t(371),r=t.n(n),l=t(1),i=t.n(l),s=t(365),u=t.n(s),c=t(346),d=t(10),m=t(373),o=t(411),b=t(500),y=t(501),v=t(531),E=t(391),f=t.n(E),p=t(367),S=t(388);function I(){var e=r()(["\nquery System($inventoryId: String!){\n    system(id: $inventoryId) {\n        id\n        name\n    }\n}\n"]);return I=function(){return e},e}var g=u()(I()),_=function(){var e,a=Object(d.m)().inventoryId,t=Object(c.useQuery)(g,{variables:{inventoryId:a}}),n=t.data,r=t.error,l=t.loading,s=Object(d.l)(),u=s.query&&s.query.hidePassed,E=null==n||null===(e=n.system)||void 0===e?void 0:e.name;return i.a.createElement(p.v,{stateValues:{error:r,data:n,loading:l}},i.a.createElement(p.u,{stateKey:"data"},i.a.createElement(m.PageHeader,null,i.a.createElement(y.Breadcrumb,null,i.a.createElement(p.b,{to:"/systems"},"Systems"),i.a.createElement(v.BreadcrumbItem,{isActive:!0},E)),i.a.createElement(S.e,null),i.a.createElement("br",null)),i.a.createElement(o.Main,null,i.a.createElement(f.a,{hidePassed:u,inventoryId:a}))),i.a.createElement(p.u,{stateKey:"loading"},i.a.createElement(m.PageHeader,null,i.a.createElement(b.Skeleton,{size:b.SkeletonSize.md}))))};a.default=_},501:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});const n=t(0),r=n.__importStar(t(1)),l=n.__importDefault(t(406)),i=t(5),s=t(18);a.Breadcrumb=e=>{var{children:t=null,className:u="","aria-label":c="Breadcrumb",ouiaId:d,ouiaSafe:m=!0}=e,o=n.__rest(e,["children","className","aria-label","ouiaId","ouiaSafe"]);return r.createElement("nav",Object.assign({},o,{"aria-label":c,className:i.css(l.default.breadcrumb,u)},s.getOUIAProps(a.Breadcrumb.displayName,d,m)),r.createElement("ol",{className:l.default.breadcrumbList},r.Children.map(t,(e,a)=>{const t=a>0;return r.isValidElement(e)?r.cloneElement(e,{showDivider:t}):e})))},a.Breadcrumb.displayName="Breadcrumb"}}]);
//# sourceMappingURL=../sourcemaps/SystemDetails.js.map
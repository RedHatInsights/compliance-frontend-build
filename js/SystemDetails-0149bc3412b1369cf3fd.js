(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1295:function(e,a,t){"use strict";t.r(a),t.d(a,"SystemDetails",(function(){return h}));var r=t(680),n=t.n(r),l=t(1),s=t.n(l),c=t(20),i=t.n(c),u=t(676),d=t.n(u),m=t(658),o=t(30),b=t(684),y=t(750),v=t(728),E=t(776),p=t(813),f=t(685),S=t.n(f),I=t(675),B=t(824),_=t(369);function g(){var e=n()(["\nquery System($inventoryId: String!){\n    system(id: $inventoryId) {\n        id\n        name\n    }\n}\n"]);return g=function(){return e},e}var w=d()(g()),h=function(e){var a,t=e.route,r=Object(o.m)().inventoryId,n=Object(m.useQuery)(w,{variables:{inventoryId:r}}),l=n.data,c=n.error,i=n.loading,u=null==l||null===(a=l.system)||void 0===a?void 0:a.name;return Object(_.b)(t,u),s.a.createElement(I.A,{stateValues:{error:c,data:l,loading:i}},s.a.createElement(I.z,{stateKey:"data"},s.a.createElement(b.PageHeader,null,s.a.createElement(E.Breadcrumb,null,s.a.createElement(I.b,{to:"/systems"},"Systems"),s.a.createElement(p.BreadcrumbItem,{isActive:!0},u)),s.a.createElement(B.a,null),s.a.createElement("br",null)),s.a.createElement(y.Main,null,s.a.createElement(S.a,{hidePassed:!0,inventoryId:r}))),s.a.createElement(I.z,{stateKey:"loading"},s.a.createElement(b.PageHeader,null,s.a.createElement(v.Skeleton,{size:v.SkeletonSize.md}))))};h.propTypes={route:i.a.object},a.default=h},776:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.Breadcrumb=void 0;const r=t(3),n=r.__importStar(t(1)),l=r.__importDefault(t(70)),s=t(2),c=t(80);a.Breadcrumb=e=>{var{children:t=null,className:i="","aria-label":u="Breadcrumb",ouiaId:d,ouiaSafe:m=!0}=e,o=r.__rest(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const b=c.useOUIAProps(a.Breadcrumb.displayName,d,m);return n.createElement("nav",Object.assign({},o,{"aria-label":u,className:s.css(l.default.breadcrumb,i)},b),n.createElement("ol",{className:l.default.breadcrumbList},n.Children.map(t,(e,a)=>{const t=a>0;return n.isValidElement(e)?n.cloneElement(e,{showDivider:t}):e})))},a.Breadcrumb.displayName="Breadcrumb"}}]);
//# sourceMappingURL=../sourcemaps/SystemDetails-836c2aa955e6f462d6fb2bc3e1a2a301.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1180:function(e,t,n){"use strict";n.r(t);var a=n(512),r=n.n(a),l=n(1),i=n.n(l),c=n(509),o=n.n(c),s=n(494),u=n(43),d=n(68),m=n(745),v=n(746),y=n(559),p=n.n(y),b=n(665),E=n(518),f=n(600);function h(){var e=r()(["\nquery System($inventoryId: String!){\n    system(id: $inventoryId) {\n        name\n    }\n}\n"]);return h=function(){return e},e}var w=o()(h());t.default=function(){var e,t=Object(u.m)().inventoryId,n=Object(s.b)(w,{variables:{inventoryId:t}}),a=n.data,r=n.error,l=n.loading,c=Object(u.k)(),o=Object(u.l)(),y=o.query&&o.query.hidePassed,h=null==a||null===(e=a.system)||void 0===e?void 0:e.name;return i.a.createElement(E.r,{stateValues:{error:r,data:a,loading:l}},i.a.createElement(E.q,{stateKey:"data"},i.a.createElement(d.PageHeader,null,i.a.createElement(m.a,null,i.a.createElement(v.a,{to:"/rhel/compliance/systems",onClick:function(e){return Object(b.a)(e,c)}},"Systems"),i.a.createElement(v.a,{isActive:!0},h)),i.a.createElement(f.e,null),i.a.createElement("br",null)),i.a.createElement(d.Main,null,i.a.createElement(p.a,{hidePassed:y,inventoryId:t}))),i.a.createElement(E.q,{stateKey:"loading"},i.a.createElement(d.PageHeader,null,i.a.createElement(d.Skeleton,{size:d.SkeletonSize.md}))))}},665:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(137);function r(e,t){e.preventDefault();var n="beta"===window.location.pathname.split("/")[1],r=e.target.pathname.replace(a.b,"");(t||this.props.history).push(n?"/beta/".concat(r):r)}}}]);
//# sourceMappingURL=../sourcemaps/SystemDetails.js.map
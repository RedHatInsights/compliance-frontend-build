(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1223:function(e,t,n){"use strict";n.r(t);var a=n(520),r=n.n(a),l=n(1),i=n.n(l),c=n(515),o=n.n(c),s=n(500),u=n(43),d=n(68),m=n(759),p=n(760),v=n(565),y=n.n(v),b=n(673),E=n(527),f=n(608);function h(){var e=r()(["\nquery System($inventoryId: String!){\n    system(id: $inventoryId) {\n        name\n    }\n}\n"]);return h=function(){return e},e}var w=o()(h());t.default=function(){var e,t=Object(u.m)().inventoryId,n=Object(s.b)(w,{variables:{inventoryId:t}}),a=n.data,r=n.error,l=n.loading,c=Object(u.k)(),o=Object(u.l)(),v=o.query&&o.query.hidePassed,h=null==a||null===(e=a.system)||void 0===e?void 0:e.name;return i.a.createElement(E.q,{stateValues:{error:r,data:a,loading:l}},i.a.createElement(E.p,{stateKey:"data"},i.a.createElement(d.PageHeader,null,i.a.createElement(m.a,null,i.a.createElement(p.a,{to:"/rhel/compliance/systems",onClick:function(e){return Object(b.a)(e,c)}},"Systems"),i.a.createElement(p.a,{isActive:!0},h)),i.a.createElement(f.e,null),i.a.createElement("br",null)),i.a.createElement(d.Main,null,i.a.createElement(y.a,{hidePassed:v,inventoryId:t}))),i.a.createElement(E.p,{stateKey:"loading"},i.a.createElement(d.PageHeader,null,i.a.createElement(d.Skeleton,{size:d.SkeletonSize.md}))))}},673:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(134);function r(e,t){e.preventDefault();var n="beta"===window.location.pathname.split("/")[1],r=e.target.pathname.replace(a.b,"");(t||this.props.history).push(n?"/beta/".concat(r):r)}}}]);
//# sourceMappingURL=../sourcemaps/SystemDetails.js.map
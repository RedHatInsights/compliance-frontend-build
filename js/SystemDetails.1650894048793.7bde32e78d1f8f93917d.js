"use strict";(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[539,402,164],{40033:(e,t,n)=>{n.r(t),n.d(t,{SystemDetails:()=>Z,default:()=>h});var a,r=n(30168),l=n(92950),s=n.n(l),m=n(45697),c=n.n(m),i=n(67521),d=n(90570),o=n(334),u=n(80123),y=n(35664),E=n(14748),v=n(28553),p=n(59253),b=n(69073),I=n(87242),f=n(7648),S=(0,i.ZP)(a||(a=(0,r.Z)(["\n  query System($inventoryId: String!) {\n    system(id: $inventoryId) {\n      id\n      name\n    }\n  }\n"]))),Z=function(e){var t,n=e.route,a=(0,o.useParams)().inventoryId,r=(0,d.a)(S,{variables:{inventoryId:a}}),l=r.data,m=r.error,c=r.loading,i=null==l||null===(t=l.system)||void 0===t?void 0:t.name;return(0,f.a)(n,i),s().createElement(b.tC,{stateValues:{error:m,data:l,loading:c}},s().createElement(b.K7,{stateKey:"data"},s().createElement(u.Z,null,s().createElement(v.Breadcrumb,{ouiaId:"SystemDetailsPathBreadcrumb"},s().createElement(b.MU,{to:"/"},"Compliance"),s().createElement(b.MU,{to:"/systems"},"Systems"),s().createElement(v.BreadcrumbItem,{isActive:!0},i)),s().createElement(I.Ey,null)),s().createElement(E.Z,null,s().createElement(p.SystemDetails,{hidePassed:!0,inventoryId:a}))),s().createElement(b.K7,{stateKey:"loading"},s().createElement(u.Z,null,s().createElement(y.Z,{size:y.i.md}))))};Z.propTypes={route:c().object};const h=Z}}]);
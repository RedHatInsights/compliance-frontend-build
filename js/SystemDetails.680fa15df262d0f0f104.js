"use strict";(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[539,402],{40033:(e,t,n)=>{n.r(t),n.d(t,{SystemDetails:()=>S,default:()=>Z});var a,r=n(30168),s=n(92950),l=n.n(s),m=n(45697),c=n.n(m),i=n(67521),o=n(90570),d=n(96620),u=n(89376),y=n(35664),E=n(65115),v=n(59253),p=n(85836),I=n(6084),b=n(7648),f=(0,i.ZP)(a||(a=(0,r.Z)(["\n  query SD_System($inventoryId: String!) {\n    system(id: $inventoryId) {\n      id\n      name\n    }\n  }\n"]))),S=function(e){var t,n=e.route,a=(0,d.useParams)().inventoryId,r=(0,o.a)(f,{variables:{inventoryId:a}}),s=r.data,m=r.error,c=r.loading,i=null==s||null===(t=s.system)||void 0===t?void 0:t.name;return(0,b.a)(n,i),l().createElement(p.tC,{stateValues:{error:m,data:s,loading:c}},l().createElement(p.K7,{stateKey:"data"},l().createElement(u.Z,null,l().createElement(E.Breadcrumb,{ouiaId:"SystemDetailsPathBreadcrumb"},l().createElement(p.MU,{to:"/"},"Compliance"),l().createElement(p.MU,{to:"/systems"},"Systems"),l().createElement(E.BreadcrumbItem,{isActive:!0},i)),l().createElement(I.Ey,{inventoryId:a})),l().createElement("section",{className:"pf-c-page__main-section"},l().createElement(v.Z,{hidePassed:!0,inventoryId:a}))),l().createElement(p.K7,{stateKey:"loading"},l().createElement(u.Z,null,l().createElement(y.Z,{size:y.i.md}))))};S.propTypes={route:c().object};const Z=S}}]);
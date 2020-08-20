(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1192:function(e,t,a){var n=a(1193);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(9)(n,r);n.locals&&(e.exports=n.locals)},1193:function(e,t,a){(t=a(7)(!1)).push([e.i,".threshold-tooltip{margin-bottom:var(--pf-global--spacer--md)}.grey-icon{color:var(--pf-global--Color--200)}.policy-details{padding-top:10px}.report-details-button{text-align:right}\n",""]),e.exports=t},1213:function(e,t,a){"use strict";a.r(t),a.d(t,"QUERY",(function(){return k})),a.d(t,"ReportDetails",(function(){return x}));var n=a(386),r=a.n(n),l=a(371),i=a.n(l),o=a(1),c=a.n(o),s=a(10),m=a(346),d=a(365),u=a.n(d),p=a(1216),b=a(1199),f=a(501),y=a(531),E=a(55),h=a(389),g=a(403),v=a(373),I=a(411),O=a(537),w=a(457),_=a(416),C=a(367),j=a(388);a(570),a(1192);function G(){var e=i()(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        totalHostCount\n        compliantHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        policy {\n            id\n        }\n        benchmark {\n            id\n            version\n        }\n        businessObjective {\n            id\n            title\n        }\n    }\n}\n"]);return G=function(){return e},e}var k=u()(G()),x=function(){var e,t,a=Object(s.m)().report_id,n=Object(m.useQuery)(k,{variables:{policyId:a}}),l=n.data,i=n.error,d=n.loading,u=Object(o.useState)(!1),G=r()(u,2),x=G[0],N=G[1],S=Object(s.k)(),B=[],H="loading-donut",P={};if(!d&&l){var R=(P=l.profile).compliantHostCount,D=P.totalHostCount;H=P.name.replace(/ /g,""),e=[{name:(B=[{x:"Compliant",y:R},{x:"Non-compliant",y:D-R}])[0].y+" "+Object(_.b)(B[0].y,"system")+" compliant"},{name:B[1].y+" "+Object(_.b)(B[1].y,"system")+" non-compliant"}],t=Object(_.a)(Math.floor(B[0].y/(B[0].y+B[1].y)*100))}return c.a.createElement(C.v,{stateValues:{error:i,data:l,loading:d}},c.a.createElement(C.u,{stateKey:"loading"},c.a.createElement(v.PageHeader,null,c.a.createElement(C.o,null)),c.a.createElement(I.Main,null,c.a.createElement(O.EmptyTable,null,c.a.createElement(w.Spinner,null)))),c.a.createElement(C.u,{stateKey:"data"},c.a.createElement(v.PageHeader,null,c.a.createElement(f.Breadcrumb,null,c.a.createElement(C.b,{to:"/reports"},"Reports"),c.a.createElement(y.BreadcrumbItem,{isActive:!0},P.name)),c.a.createElement(h.Grid,{hasGutter:!0},c.a.createElement(g.GridItem,{sm:9,md:9,lg:9,xl:9},c.a.createElement(v.PageHeaderTitle,{title:P.name+" report"})),c.a.createElement(g.GridItem,{className:"report-details-button",sm:3,md:3,lg:3,xl:3},c.a.createElement(E.Button,{isInline:!0,variant:"link",onClick:function(){return N(!0)}},"Delete Report"))),c.a.createElement(h.Grid,{hasGutter:!0},c.a.createElement(g.GridItem,{sm:12,md:12,lg:12,xl:6},c.a.createElement("div",{className:"chart-inline"},c.a.createElement("div",{className:"chart-container"},c.a.createElement(p.a,{data:B,identifier:H,title:t,subTitle:"Compliant",themeColor:b.q.blue,themeVariant:b.r.light,style:{fontSize:20},innerRadius:88,width:462,legendPosition:"right",legendData:e,legendOrientation:"vertical",padding:{bottom:20,left:0,right:250,top:20}})))),c.a.createElement(g.GridItem,{sm:12,md:12,lg:12,xl:6},c.a.createElement(C.p,{profile:P})))),c.a.createElement(I.Main,null,c.a.createElement(h.Grid,{hasGutter:!0},c.a.createElement(g.GridItem,{span:12},c.a.createElement(j.h,{showOnlySystemsWithTestResults:!0,compliantFilter:!0,policyId:P.id,columns:[{key:"facts.compliance.display_name",title:"System name",props:{width:30}},{key:"facts.compliance.rules_failed",title:"Rules failed",props:{width:5}},{key:"facts.compliance.compliance_score",title:"Compliance score",props:{width:5}},{key:"facts.compliance.last_scanned",title:"Last scanned",props:{width:10}}]})))),c.a.createElement(j.c,{isModalOpen:x,policyId:P.id,onClose:function(e){N(!1),e&&S.push("/reports")}})))};t.default=x},501:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(0),r=n.__importStar(a(1)),l=n.__importDefault(a(406)),i=a(5),o=a(18);t.Breadcrumb=e=>{var{children:a=null,className:c="","aria-label":s="Breadcrumb",ouiaId:m,ouiaSafe:d=!0}=e,u=n.__rest(e,["children","className","aria-label","ouiaId","ouiaSafe"]);return r.createElement("nav",Object.assign({},u,{"aria-label":s,className:i.css(l.default.breadcrumb,c)},o.getOUIAProps(t.Breadcrumb.displayName,m,d)),r.createElement("ol",{className:l.default.breadcrumbList},r.Children.map(a,(e,t)=>{const a=t>0;return r.isValidElement(e)?r.cloneElement(e,{showDivider:a}):e})))},t.Breadcrumb.displayName="Breadcrumb"}}]);
//# sourceMappingURL=../sourcemaps/ReportDetails.js.map
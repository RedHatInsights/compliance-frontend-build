(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[72],{79641:(e,t,n)=>{"use strict";n.r(t),n.d(t,{QUERY:()=>_,ReportDetails:()=>O,default:()=>k});var l,a=n(32465),r=n(92950),o=n.n(r),i=n(91346),s=n(55490),c=n(34925),m=n(45697),d=n.n(m),u=n(334),p=n(46829),E=n(33121),y=n(73581),h=n(52067),f=n(97066),g=n(48716),I=n(39173),v=n(86350),b=n(92223),Z=n(28873),C=n(11443),R=n(67),w=n(7648),G=n(33179),H=n(27803),T=n(31499),_=(0,E.ZP)(l||(l=(0,a.Z)(["\n  query Profile($policyId: String!) {\n    profile(id: $policyId) {\n      id\n      name\n      refId\n      testResultHostCount\n      compliantHostCount\n      unsupportedHostCount\n      complianceThreshold\n      majorOsVersion\n      lastScanned\n      policyType\n      policy {\n        id\n        name\n      }\n      benchmark {\n        id\n        version\n      }\n      businessObjective {\n        id\n        title\n      }\n    }\n  }\n"]))),O=function(e){var t,n,l,a,r,m=e.route,d=(0,u.useParams)().report_id,E=(0,p.useQuery)(_,{variables:{policyId:d},fetchPolicy:"no-cache"}),O=E.data,k=E.error,x=E.loading,P=[],D="loading-donut",N={};if(!x&&O){n=(N=O.profile).policy.name,r="Report: ".concat(n);var S=N.compliantHostCount,V=N.testResultHostCount;D=N.name.replace(/ /g,""),P=[{x:"Compliant",y:V?S:"0"},{x:"Non-compliant",y:V-S}],t=0===V&&[i.Z.value]||[c.Z.value,s.Z.value],l=[{name:P[0].y+" "+(0,C._6)(P[0].y,"system")+" compliant"},{name:P[1].y+" "+(0,C._6)(P[1].y,"system")+" non-compliant"}],a=V?(0,C.P0)(Math.floor(P[0].y/(P[0].y+P[1].y)*100)):0}return(0,w.a)(m,n),o().createElement(R.tC,{stateValues:{error:k,data:O,loading:x}},o().createElement(R.K7,{stateKey:"loading"},o().createElement(g.Z,null,o().createElement(R.Tq,null)),o().createElement(v.Z,null,o().createElement(b.Z,null,o().createElement(Z.Z,null)))),o().createElement(R.K7,{stateKey:"data"},o().createElement(g.Z,null,o().createElement(f.Breadcrumb,{ouiaId:"ReportDetailsPathBreadcrumb"},o().createElement(R.MU,{to:"/"},"Compliance"),o().createElement(R.MU,{to:"/reports"},"Reports"),o().createElement(f.BreadcrumbItem,{isActive:!0},r)),o().createElement(f.Grid,{hasGutter:!0},o().createElement(f.GridItem,{sm:9,md:9,lg:9,xl:9},o().createElement(I.Z,{title:r}),o().createElement(R.Zr,null,N.policyType)),o().createElement(f.GridItem,{className:"report-details-button",sm:3,md:3,lg:3,xl:3},o().createElement(R.mR,{state:{profile:N},to:"/reports/".concat(N.id,"/delete")},o().createElement(f.Button,{variant:"link",ouiaId:"ReportDetailsDeleteReportLink",isInline:!0},"Delete report")))),o().createElement(f.Grid,{hasGutter:!0},o().createElement(f.GridItem,{sm:12,md:12,lg:12,xl:6},o().createElement("div",{className:"chart-inline"},o().createElement("div",{className:"chart-container"},o().createElement(y.HS,{data:P,identifier:D,title:a,subTitle:"Compliant",themeVariant:h.py.light,colorScale:t,style:{fontSize:20},constrainToVisibleArea:!0,innerRadius:88,width:462,legendPosition:"right",legendData:l,legendOrientation:"vertical",padding:{bottom:20,left:0,right:250,top:20}}))),N.unsupportedHostCount>0&&o().createElement(f.Text,null,o().createElement(R.cT,{showHelpIcon:!0},o().createElement("strong",{className:"ins-c-warning-text"},N.unsupportedHostCount," systems not supported")))),o().createElement(f.GridItem,{sm:12,md:12,lg:12,xl:6},o().createElement(R.vu,{profile:N})))),o().createElement(v.Z,null,o().createElement(f.Grid,{hasGutter:!0},o().createElement(f.GridItem,{span:12},o().createElement(G.e_,{showOsMinorVersionFilter:[N.majorOsVersion],columns:[T.Zw({showLink:!0,showOsInfo:!0}),T.MO("tags"),T.hN,T.ll,T.OF,T.Hc],query:H.Ep,showOnlySystemsWithTestResults:!0,compliantFilter:!0,defaultFilter:"with_results_for_policy_id = ".concat(N.id),policyId:N.id}))))))};O.propTypes={route:d().object};const k=O}}]);
//# sourceMappingURL=../sourcemaps/ReportDetails.20af47dc7261e648be44.js.map
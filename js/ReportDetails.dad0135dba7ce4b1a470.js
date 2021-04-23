(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[72],{79641:(e,t,n)=>{"use strict";n.r(t),n.d(t,{QUERY:()=>R,ReportDetails:()=>N,default:()=>V});var r,l=n(32465),a=n(92950),o=n.n(a),i=n(557),s=n(91346),c=n(55490),d=n(34925),m=n(45697),p=n.n(m),u=n(334),y=n(46829),E=n(44119),f=n.n(E),h=n(73581),g=n(52067),v=n(32413),b=n(48716),C=n(39173),I=n(86350),Z=n(92223),G=n(6023),S=n(62410),_=n(11443),k=n(95904),w=n(49025),T=n(7648),x=n(69030),F=(n(90129),n(47511),n(27803)),H=n(99030),R=f()(r||(r=(0,l.Z)(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        testResultHostCount\n        compliantHostCount\n        unsupportedHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        policyType\n        policy {\n            id\n            name\n        }\n        benchmark {\n            id\n            version\n        }\n        businessObjective {\n            id\n            title\n        }\n    }\n}\n"]))),N=function(e){var t,n,r,l,m,p=e.route,E=(0,u.useParams)().report_id,f=(0,y.useQuery)(R,{variables:{policyId:E}}),N=f.data,V=f.error,D=f.loading,O=(0,i.useDispatch)(),B=[],K="loading-donut",L={};if(!D&&N){n=(L=N.profile).policy.name,m="Report: ".concat(n);var P=L.compliantHostCount,j=L.testResultHostCount;K=L.name.replace(/ /g,""),B=[{x:"Compliant",y:j?P:"0"},{x:"Non-compliant",y:j-P}],t=0===j&&[s.Z.value]||[d.Z.value,c.Z.value],r=[{name:B[0].y+" "+(0,_._6)(B[0].y,"system")+" compliant"},{name:B[1].y+" "+(0,_._6)(B[1].y,"system")+" non-compliant"}],l=j?(0,_.P0)(Math.floor(B[0].y/(B[0].y+B[1].y)*100)):0}var q=[{key:"display_name",title:"Name",props:{width:30},renderFunc:H.B3},{key:"ssgVersion",title:"SSG version",props:{width:5},renderFunc:function(e){var t,n,r=e;return"string"==typeof e&&(r=arguments.length<=2?void 0:arguments[2]),r&&o().createElement(w.Z.SSGVersion,{supported:r.supported,ssgVersion:(null===(t=r)||void 0===t?void 0:t.ssg_version)||(null===(n=r)||void 0===n?void 0:n.ssgVersion)})}},{key:"rulesFailed",title:"Failed rules",props:{width:5},renderFunc:function(e,t){return o().createElement(u.Link,{to:{pathname:"/systems/".concat(t)}}," ",e," ")}},{key:"score",title:"Compliance score",props:{width:5},renderFunc:function(e,t,n){return(0,k.OF)(n)}},{key:"lastScanned",title:"Last scanned",props:{width:10},renderFunc:function(e){return e instanceof Date?o().createElement(S.Z,{date:Date.parse(e),type:"relative"}):e}}];return(0,a.useLayoutEffect)((function(){O({type:"SELECT_ENTITIES",payload:{ids:[]}})}),[]),(0,T.a)(p,n),o().createElement(k.tC,{stateValues:{error:V,data:N,loading:D}},o().createElement(k.K7,{stateKey:"loading"},o().createElement(b.Z,null,o().createElement(k.Tq,null)),o().createElement(I.Z,null,o().createElement(Z.Z,null,o().createElement(G.Z,null)))),o().createElement(k.K7,{stateKey:"data"},o().createElement(b.Z,null,o().createElement(v.Breadcrumb,null,o().createElement(k.MU,{to:"/"},"Compliance"),o().createElement(k.MU,{to:"/reports"},"Reports"),o().createElement(v.BreadcrumbItem,{isActive:!0},m)),o().createElement(v.Grid,{hasGutter:!0},o().createElement(v.GridItem,{sm:9,md:9,lg:9,xl:9},o().createElement(C.Z,{title:m}),o().createElement(k.Zr,null,L.policyType)),o().createElement(v.GridItem,{className:"report-details-button",sm:3,md:3,lg:3,xl:3},o().createElement(k.mR,{state:{profile:L},to:"/reports/".concat(L.id,"/delete")},o().createElement(v.Button,{variant:"link",isInline:!0},"Delete report")))),o().createElement(v.Grid,{hasGutter:!0},o().createElement(v.GridItem,{sm:12,md:12,lg:12,xl:6},o().createElement("div",{className:"chart-inline"},o().createElement("div",{className:"chart-container"},o().createElement(h.HS,{data:B,identifier:K,title:l,subTitle:"Compliant",themeVariant:g.py.light,colorScale:t,style:{fontSize:20},innerRadius:88,width:462,legendPosition:"right",legendData:r,legendOrientation:"vertical",padding:{bottom:20,left:0,right:250,top:20}}))),L.unsupportedHostCount>0&&o().createElement(v.Text,null,o().createElement(k.cT,{showHelpIcon:!0},o().createElement("strong",{className:"ins-c-warning-text"},L.unsupportedHostCount," systems not supported")))),o().createElement(v.GridItem,{sm:12,md:12,lg:12,xl:6},o().createElement(k.vu,{profile:L})))),o().createElement(I.Z,null,o().createElement(v.Grid,{hasGutter:!0},o().createElement(v.GridItem,{span:12},o().createElement(x.e_,{query:F.Ep,showOnlySystemsWithTestResults:!0,compliantFilter:!0,defaultFilter:"with_results_for_policy_id = ".concat(L.id),policyId:L.id,columns:q}))))))};N.propTypes={route:p().object};const V=N},41251:(e,t,n)=>{(t=n(23645)(!1)).push([e.id,".threshold-tooltip{margin-bottom:var(--pf-global--spacer--md)}.grey-icon{color:var(--pf-global--Color--200)}.policy-details{padding-top:10px}.report-details-button{text-align:right}\n",""]),e.exports=t},47511:(e,t,n)=>{"use strict";var r=n(93379),l=n.n(r),a=n(41251),o=n.n(a),i=l()(o(),{insert:"head",singleton:!1});if(!o().locals||e.hot.invalidate){var s=o().locals;e.hot.accept(41251,(t=>{a=n(41251),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(s,(o=n.n(a))().locals)?(s=o().locals,i(o())):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),o().locals}}]);
//# sourceMappingURL=../sourcemaps/ReportDetails.a369f42ae7138f396586.js.map
(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[72],{79641:(e,t,n)=>{"use strict";n.r(t),n.d(t,{QUERY:()=>R,ReportDetails:()=>V,default:()=>N});var r,l=n(32465),a=n(92950),o=n.n(a),i=n(557),s=n(91346),c=n(55490),d=n(34925),m=n(45697),p=n.n(m),u=n(334),y=n(46829),E=n(44119),h=n.n(E),f=n(73581),g=n(52067),v=n(92277),b=n(48716),C=n(39173),I=n(86350),Z=n(92223),w=n(6023),G=n(62410),S=n(11443),_=n(95904),k=n(49025),T=n(7648),x=n(69030),F=(n(90129),n(47511),n(27803)),H=n(99030),R=h()(r||(r=(0,l.Z)(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        testResultHostCount\n        compliantHostCount\n        unsupportedHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        policyType\n        policy {\n            id\n            name\n        }\n        benchmark {\n            id\n            version\n        }\n        businessObjective {\n            id\n            title\n        }\n    }\n}\n"]))),V=function(e){var t,n,r,l,m,p=e.route,E=(0,u.useParams)().report_id,h=(0,y.useQuery)(R,{variables:{policyId:E}}),V=h.data,N=h.error,O=h.loading,D=(0,i.useDispatch)(),j=[],B="loading-donut",K={};if(!O&&V){n=(K=V.profile).policy.name,m="Report: ".concat(n);var L=K.compliantHostCount,M=K.testResultHostCount;B=K.name.replace(/ /g,""),j=[{x:"Compliant",y:M?L:"0"},{x:"Non-compliant",y:M-L}],t=0===M&&[s.Z.value]||[d.Z.value,c.Z.value],r=[{name:j[0].y+" "+(0,S._6)(j[0].y,"system")+" compliant"},{name:j[1].y+" "+(0,S._6)(j[1].y,"system")+" non-compliant"}],l=M?(0,S.P0)(Math.floor(j[0].y/(j[0].y+j[1].y)*100)):0}var P=[{key:"display_name",title:"Name",props:{width:30},renderFunc:H.B3},{key:"ssgVersion",title:"SSG version",props:{width:5},renderFunc:function(e){var t,n,r=e;return"string"==typeof e&&(r=arguments.length<=2?void 0:arguments[2]),r&&o().createElement(k.Z.SSGVersion,{supported:r.supported,ssgVersion:(null===(t=r)||void 0===t?void 0:t.ssg_version)||(null===(n=r)||void 0===n?void 0:n.ssgVersion)})}},{key:"rulesFailed",title:"Failed rules",props:{width:5},renderFunc:function(e,t){return o().createElement(u.Link,{to:{pathname:"/systems/".concat(t)}}," ",e," ")}},{key:"score",title:"Compliance score",props:{width:5},renderFunc:function(e,t,n){return(0,_.OF)(n)}},{key:"lastScanned",title:"Last scanned",props:{width:10},renderFunc:function(e){return e instanceof Date?o().createElement(G.Z,{date:Date.parse(e),type:"relative"}):e}}];return(0,a.useLayoutEffect)((function(){D({type:"SELECT_ENTITIES",payload:{ids:[]}})}),[]),(0,T.a)(p,n),o().createElement(_.tC,{stateValues:{error:N,data:V,loading:O}},o().createElement(_.K7,{stateKey:"loading"},o().createElement(b.Z,null,o().createElement(_.Tq,null)),o().createElement(I.Z,null,o().createElement(Z.Z,null,o().createElement(w.Z,null)))),o().createElement(_.K7,{stateKey:"data"},o().createElement(b.Z,null,o().createElement(v.Breadcrumb,null,o().createElement(_.MU,{to:"/"},"Compliance"),o().createElement(_.MU,{to:"/reports"},"Reports"),o().createElement(v.BreadcrumbItem,{isActive:!0},m)),o().createElement(v.Grid,{hasGutter:!0},o().createElement(v.GridItem,{sm:9,md:9,lg:9,xl:9},o().createElement(C.Z,{title:m}),o().createElement(_.Zr,null,K.policyType)),o().createElement(v.GridItem,{className:"report-details-button",sm:3,md:3,lg:3,xl:3},o().createElement(_.mR,{state:{profile:K},to:"/reports/".concat(K.id,"/delete")},o().createElement(v.Button,{variant:"link",isInline:!0},"Delete report")))),o().createElement(v.Grid,{hasGutter:!0},o().createElement(v.GridItem,{sm:12,md:12,lg:12,xl:6},o().createElement("div",{className:"chart-inline"},o().createElement("div",{className:"chart-container"},o().createElement(f.HS,{data:j,identifier:B,title:l,subTitle:"Compliant",themeVariant:g.py.light,colorScale:t,style:{fontSize:20},innerRadius:88,width:462,legendPosition:"right",legendData:r,legendOrientation:"vertical",padding:{bottom:20,left:0,right:250,top:20}}))),K.unsupportedHostCount>0&&o().createElement(v.Text,null,o().createElement(_.cT,{showHelpIcon:!0},o().createElement("strong",{className:"ins-c-warning-text"},K.unsupportedHostCount," systems not supported")))),o().createElement(v.GridItem,{sm:12,md:12,lg:12,xl:6},o().createElement(_.vu,{profile:K})))),o().createElement(I.Z,null,o().createElement(v.Grid,{hasGutter:!0},o().createElement(v.GridItem,{span:12},o().createElement(x.e_,{showOsMinorVersionFilter:[K.majorOsVersion],query:F.Ep,showOnlySystemsWithTestResults:!0,compliantFilter:!0,defaultFilter:"with_results_for_policy_id = ".concat(K.id),policyId:K.id,columns:P}))))))};V.propTypes={route:p().object};const N=V},41251:(e,t,n)=>{(t=n(23645)(!1)).push([e.id,".threshold-tooltip{margin-bottom:var(--pf-global--spacer--md)}.grey-icon{color:var(--pf-global--Color--200)}.policy-details{padding-top:10px}.report-details-button{text-align:right}\n",""]),e.exports=t},47511:(e,t,n)=>{"use strict";var r=n(93379),l=n.n(r),a=n(41251),o=n.n(a),i=l()(o(),{insert:"head",singleton:!1});if(!o().locals||e.hot.invalidate){var s=o().locals;e.hot.accept(41251,(t=>{a=n(41251),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(s,(o=n.n(a))().locals)?(s=o().locals,i(o())):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),o().locals}}]);
//# sourceMappingURL=../sourcemaps/ReportDetails.545f4b33464d8c9eb7c3.js.map
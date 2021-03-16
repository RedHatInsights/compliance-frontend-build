(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[72],{41251:(e,t,n)=>{(t=n(23645)(!1)).push([e.id,".threshold-tooltip{margin-bottom:var(--pf-global--spacer--md)}.grey-icon{color:var(--pf-global--Color--200)}.policy-details{padding-top:10px}.report-details-button{text-align:right}\n",""]),e.exports=t},44641:(e,t,n)=>{"use strict";n.r(t),n.d(t,{QUERY:()=>N,ReportDetails:()=>V,default:()=>B});var r,l=n(94949),a=n(67301),o=n(91454),i=n(77865),c=n.n(i),s=n(61084),p=n(91346),m=n(55490),u=n(34925),d=n(45697),y=n.n(d),f=n(334),E=n(46829),h=n(44119),v=n.n(h),g=n(73581),b=n(52067),O=n(36801),w=n(48716),k=n(39173),Z=n(86350),_=n(92223),C=n(6023),I=n(62410),S=n(85974),j=n(42564),P=n(23012),G=n(21157),T=n(52998),x=n(93188),D=(n(90129),n(47511),n(55186)),F=n(49690);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=v()(r||(r=(0,o.Z)(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        testResultHostCount\n        compliantHostCount\n        unsupportedHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        policyType\n        policy {\n            id\n            name\n        }\n        benchmark {\n            id\n            version\n        }\n        businessObjective {\n            id\n            title\n        }\n    }\n}\n"]))),V=function(e){var t,n,r,l,o,d,y=e.route,h=(0,j.ZP)("showSsgVersions"),v=(0,j.ZP)("newInventory"),H=(0,f.useParams)().report_id,V=(0,E.useQuery)(N,{variables:{policyId:H}}),B=V.data,K=V.error,L=V.loading,q=(0,s.useDispatch)(),M=[],U="loading-donut",Q={};if(!L&&B){var $;r=(Q=B.profile).policy?Q.policy.name:Q.name,t=!(null===($=Q)||void 0===$||!$.policy)&&h,d="Report: ".concat(r);var z=Q.compliantHostCount,A=Q.testResultHostCount;U=Q.name.replace(/ /g,""),M=[{x:"Compliant",y:A?z:"0"},{x:"Non-compliant",y:A-z}],n=0===A&&[p.Z.value]||[u.Z.value,m.Z.value],l=[{name:M[0].y+" "+(0,S._6)(M[0].y,"system")+" compliant"},{name:M[1].y+" "+(0,S._6)(M[1].y,"system")+" non-compliant"}],o=A?(0,S.P0)(Math.floor(M[0].y/(M[0].y+M[1].y)*100)):0}var W=[R({key:"facts.compliance.display_name",title:"Name",props:{width:30}},v&&{key:"display_name",renderFunc:F.B3})].concat((0,a.Z)(t?[{key:"facts.compliance",title:"SSG version",props:{width:5},renderFunc:function(e){var t,n,r=e;return"string"==typeof e&&(r=arguments.length<=2?void 0:arguments[2]),r&&c().createElement(G.n1.SSGVersion,{supported:r.supported,ssgVersion:(null===(t=r)||void 0===t?void 0:t.ssg_version)||(null===(n=r)||void 0===n?void 0:n.ssgVersion)})}}]:[]),[R({key:"facts.compliance.rules_failed",title:"Failed rules",props:{width:5}},v&&{key:"rulesFailed",renderFunc:function(e,t){return c().createElement(f.Link,{to:{pathname:"/systems/".concat(t)}}," ",e," ")}}),R({key:"facts.compliance.compliance_score",title:"Compliance score",props:{width:5}},v&&{key:"score",renderFunc:function(e,t,n){return(0,P.OF)(n)}}),R({key:"facts.compliance.last_scanned",title:"Last scanned",props:{width:10}},v&&{key:"lastScanned",renderFunc:function(e){return e instanceof Date?c().createElement(I.Z,{date:Date.parse(e),type:"relative"}):e}})]);(0,i.useLayoutEffect)((function(){q({type:"SELECT_ENTITIES",payload:{ids:[]}})}),[]);var Y=v?x.e_:x.r0;return(0,T.a)(y,r),c().createElement(P.tC,{stateValues:{error:K,data:B,loading:L}},c().createElement(P.K7,{stateKey:"loading"},c().createElement(w.Z,null,c().createElement(P.Tq,null)),c().createElement(Z.Z,null,c().createElement(_.Z,null,c().createElement(C.Z,null)))),c().createElement(P.K7,{stateKey:"data"},c().createElement(w.Z,null,c().createElement(O.Breadcrumb,null,c().createElement(P.MU,{to:"/"},"Compliance"),c().createElement(P.MU,{to:"/reports"},"Reports"),c().createElement(O.BreadcrumbItem,{isActive:!0},d)),c().createElement(O.Grid,{hasGutter:!0},c().createElement(O.GridItem,{sm:9,md:9,lg:9,xl:9},c().createElement(k.Z,{title:d}),c().createElement(P.Zr,null,Q.policyType)),c().createElement(O.GridItem,{className:"report-details-button",sm:3,md:3,lg:3,xl:3},c().createElement(P.mR,{state:{profile:Q},to:"/reports/".concat(Q.id,"/delete")},c().createElement(O.Button,{variant:"link",isInline:!0},"Delete report")))),c().createElement(O.Grid,{hasGutter:!0},c().createElement(O.GridItem,{sm:12,md:12,lg:12,xl:6},c().createElement("div",{className:"chart-inline"},c().createElement("div",{className:"chart-container"},c().createElement(g.HS,{data:M,identifier:U,title:o,subTitle:"Compliant",themeVariant:b.py.light,colorScale:n,style:{fontSize:20},innerRadius:88,width:462,legendPosition:"right",legendData:l,legendOrientation:"vertical",padding:{bottom:20,left:0,right:250,top:20}}))),Q.unsupportedHostCount>0&&c().createElement(O.Text,null,c().createElement(P.cT,{showHelpIcon:!0},c().createElement("strong",{className:"ins-c-warning-text"},Q.unsupportedHostCount," systems not supported")))),c().createElement(O.GridItem,{sm:12,md:12,lg:12,xl:6},c().createElement(P.vu,{profile:Q})))),c().createElement(Z.Z,null,c().createElement(O.Grid,{hasGutter:!0},c().createElement(O.GridItem,{span:12},c().createElement(Y,{query:D.Ep,showOnlySystemsWithTestResults:!0,compliantFilter:!0,defaultFilter:"with_results_for_policy_id = ".concat(Q.id),policyId:Q.id,columns:W}))))))};V.propTypes={route:y().object};const B=V},47511:(e,t,n)=>{"use strict";var r=n(93379),l=n.n(r),a=n(41251),o=n.n(a),i=l()(o(),{insert:"head",singleton:!1});if(!o().locals||e.hot.invalidate){var c=o().locals;e.hot.accept(41251,(t=>{a=n(41251),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(c,(o=n.n(a))().locals)?(c=o().locals,i(o())):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),o().locals}}]);
//# sourceMappingURL=ReportDetails.c525cd65394efcf2f8be.js.map
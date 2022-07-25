(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[2072,5467,8402,9477,3929],{17652:(e,t,n)=>{"use strict";n.r(t),n.d(t,{QUERY:()=>K,ReportDetails:()=>W,default:()=>z});var r=n(30168),o=n(92950),i=n.n(o),a=n(91346),s=n(55490),l=n(34925),c=n(45697),u=n.n(c),p=n(334),m=n(90570),d=n(67521),f=n(891),y=n(20209),v=n(14938),h=n(80123),g=n(39173),b=n(14748),E=n(58247),O=n(97481),S=n(11443),P=n(97285),C=n(7648),j=n(77346),w=n(87242),x=n(27803),R=n(31499),Z=n(42982),k=n(17855),I=function(e){var t,n=e.row,r=e.children;return i().createElement(k.RowWrapper,{style:0===(null===(t=n.testResultProfiles)||void 0===t?void 0:t.length)?{background:"#F0F0F0",borderLeft:"var(--pf-c-table--border-width--base) solid var(--pf-c-table--BorderColor)",borderRight:"var(--pf-c-table--border-width--base) solid var(--pf-c-table--BorderColor)"}:{}},r)};I.propTypes={row:u().node,children:u().node};const D=I;var T=n(91290),F=function(e){var t=e.color,n=void 0===t?"#FFFFFF":t;return i().createElement("span",{style:{width:"10px",height:"10px",display:"inline-block",background:n}}," ")};F.propTypes={color:u().string};var H=function(e){var t=e.legendData,n=void 0===t?[]:t;return i().createElement(v.List,null,n.map((function(e,t){var n,r,o,a,s,l,c,u=e.name,p=e.symbol,m=e.tooltip,d=e.popover;return i().createElement(v.ListItem,{key:t,icon:i().createElement(F,{color:null==p?void 0:p.fill}),style:{verticalAlign:"middle",display:"inline-block"}},u,m&&i().createElement(v.Tooltip,{content:i().createElement(i().Fragment,null," ",m," ")},i().createElement("span",null," ",i().createElement(T.ZP,{className:"grey-icon"}))),d&&(o=void 0===(r=(n=d).title)?"":r,s=void 0===(a=n.content)?"":a,c=void 0===(l=n.footer)?"":l,i().createElement(v.Popover,{maxWidth:"25rem",headerContent:o,bodyContent:s,footerContent:c},i().createElement("span",null," ",i().createElement(T.ZP,{className:"grey-icon",style:{cursor:"pointer"}})))))})))};H.propTypes={legendData:u().array};const N=H;var G=n(94493),M=n(79375);const V=function(e){var t,n=e.compliantHostCount,r=void 0===n?0:n,o=e.testResultHostCount,c=void 0===o?0:o,u=e.unsupportedHostCount,p=void 0===u?0:u,m=e.totalHostCount,d=void 0===m?0:m,f=d-p-c,h=c-r,g=(null===(t=e.name)||void 0===t?void 0:t.replace(/ /g,""))||"donut-chart",b=[{x:"Compliant",y:r},{x:"Non-compliant",y:h},{x:"Unsupported",y:p},{x:"Not reporting",y:f}],E=0===c&&[a.Z.value]||[l.Z.value,s.Z.value,M.Z.value,G.Z.value],O=function(e,t){var n=t.testResultHostCount,r=void 0===n?0:n,o=t.unsupportedHostCount,a=void 0===o?0:o,c=t.totalHostCount,u=(void 0===c?0:c)-a-r;return[{name:"".concat(e[0].y," ").concat((0,S._6)(e[0].y,"system")," compliant"),symbol:{fill:l.Z.value}},{name:"".concat(e[1].y," ").concat((0,S._6)(e[1].y,"system")," non-compliant"),symbol:{fill:s.Z.value}}].concat((0,Z.Z)(a>0?[{name:"".concat(e[2].y," ").concat((0,S._6)(e[2].y,"system")," not supported"),symbol:{fill:M.Z.value},popover:{title:"Unsupported SSG versions",content:i().createElement(i().Fragment,null,i().createElement(v.Text,{variant:"p"},"These systems are running unsupported versions of the SCAP Security Guide (SSG) for the version of RHEL installed on them. Assessment of rules failed/passed on these systems is a best-guess effort and may not be accurate."),i().createElement(v.Text,{variant:"p"},"The policy's compliance score excludes these systems.")),footer:i().createElement(P.bL,null)}}]:[]),(0,Z.Z)(u>0?[{name:"".concat(u," ").concat((0,S._6)(u,"system")," never reported"),popover:{title:"Systems never reported",content:"".concat(u," ").concat((0,S._6)(u,"system")," are not reporting scan results. This may be because the system is disconnected, or the insights-client is not properly configured to use Compliance.")},symbol:{fill:G.Z.value}}]:[]))}(b,e);return{chartProps:{data:b,identifier:g,title:c?(0,S.P0)(Math.floor(r/d*100)):0,subTitle:"Compliant",themeVariant:y.py.light,colorScale:E,style:{fontSize:20},innerRadius:88,constrainToVisibleArea:!0},legendData:O}};var B=function(e){var t=e.profile,n=V(void 0===t?{}:t),r=n.chartProps,o=n.legendData;return i().createElement(v.Grid,{className:"chart-container"},i().createElement(v.GridItem,{span:6},i().createElement(f.HS,r)),i().createElement(v.GridItem,{span:6,className:"pf-u-display-flex pf-u-align-items-center",style:{fontSize:".85em",height:"100%"}},i().createElement(N,{legendData:o})))};B.propTypes={profile:u().object};const A=B;var $,_=(0,d.ZP)($||($=(0,r.Z)(["\n  query Profile($policyId: String!) {\n    profile(id: $policyId) {\n      id\n      name\n      refId\n      totalHostCount\n      testResultHostCount\n      compliantHostCount\n      unsupportedHostCount\n      complianceThreshold\n      osMajorVersion\n      lastScanned\n      policyType\n      policy {\n        id\n        name\n        profiles {\n          benchmark {\n            profiles {\n              ssgVersion\n            }\n          }\n        }\n      }\n      benchmark {\n        id\n        version\n      }\n      businessObjective {\n        id\n        title\n      }\n    }\n  }\n"]))),U=function(e){var t,n,r=e.route,o=(0,p.useParams)().report_id,a=(0,j.ZP)("pdfReport"),s=(0,m.a)(_,{variables:{policyId:o},fetchPolicy:"no-cache"}),l=s.data,c=s.error,u=s.loading,d={},f=[];return!u&&l&&(t=(d=l.profile).policy.name,n="Report: ".concat(t),f=(0,Z.Z)(new Set(d.policy.profiles.flatMap((function(e){return e.benchmark.profiles.map((function(e){return e.ssgVersion}))}))))),(0,C.a)(r,t),i().createElement(P.tC,{stateValues:{error:c,data:l,loading:u}},i().createElement(P.K7,{stateKey:"loading"},i().createElement(h.Z,null,i().createElement(P.Tq,null)),i().createElement(b.Z,null,i().createElement(E.Z,null,i().createElement(O.Z,null)))),i().createElement(P.K7,{stateKey:"data"},i().createElement(h.Z,null,i().createElement(v.Breadcrumb,{ouiaId:"ReportDetailsPathBreadcrumb"},i().createElement(P.MU,{to:"/"},"Compliance"),i().createElement(P.MU,{to:"/reports"},"Reports"),i().createElement(v.BreadcrumbItem,{isActive:!0},n)),i().createElement(v.Grid,{hasGutter:!0},i().createElement(v.GridItem,{sm:9,md:9,lg:9,xl:9},i().createElement(g.Z,{title:n}),i().createElement(P.Zr,null,d.policyType)),i().createElement(v.GridItem,{className:"report-details-button",sm:3,md:3,lg:3,xl:3},a&&i().createElement(P.mR,{state:{profile:d},to:"/reports/".concat(d.id,"/pdf"),component:P.Qj,ouiaId:"ReportDetailsDownloadReportPDFLink",variant:"primary",className:"pf-u-mr-md"},"Download PDF"),i().createElement(P.mR,{state:{profile:d},to:"/reports/".concat(d.id,"/delete"),component:P.Qj,variant:"link",ouiaId:"ReportDetailsDeleteReportLink",isInline:!0},"Delete report"))),i().createElement(v.Grid,{hasGutter:!0},i().createElement(v.GridItem,{sm:12,md:12,lg:12,xl:6},i().createElement(A,{profile:d}),d.unsupportedHostCount>0&&i().createElement(v.Text,{ouiaId:"UnsupportedSSGCountNotification"},i().createElement(P.cT,{showHelpIcon:!0},i().createElement("strong",{className:"ins-c-warning-text"},d.unsupportedHostCount," systems not supported")))),i().createElement(v.GridItem,{sm:12,md:12,lg:12,xl:6},i().createElement(P.vu,{profile:d})))),i().createElement(b.Z,null,i().createElement(v.Grid,{hasGutter:!0},i().createElement(v.GridItem,{span:12},i().createElement(w.r0,{showOsMinorVersionFilter:[d.osMajorVersion],ssgVersions:f,columns:[R.Zw({showLink:!0,showOsInfo:!0}),R.MO("tags"),R.hN,R.ll,R.OF,R.Hc],query:x.Mb,compliantFilter:!0,defaultFilter:"policy_id = ".concat(d.id),policyId:d.id,tableProps:{rowWrapper:D}}))))))};U.propTypes={route:u().object};const q=U;var L,K=(0,d.ZP)(L||(L=(0,r.Z)(["\n  query Profile($policyId: String!) {\n    profile(id: $policyId) {\n      id\n      name\n      refId\n      testResultHostCount\n      compliantHostCount\n      unsupportedHostCount\n      complianceThreshold\n      osMajorVersion\n      lastScanned\n      policyType\n      policy {\n        id\n        name\n      }\n      benchmark {\n        id\n        version\n      }\n      businessObjective {\n        id\n        title\n      }\n    }\n  }\n"]))),W=function(e){var t,n,r,o,c,u=e.route,d=(0,p.useParams)().report_id,Z=(0,j.ZP)("pdfReport"),k=(0,m.a)(K,{variables:{policyId:d},fetchPolicy:"no-cache"}),I=k.data,D=k.error,T=k.loading,F=[],H="loading-donut",N={};if(!T&&I){n=(N=I.profile).policy.name,c="Report: ".concat(n);var G=N.compliantHostCount,M=N.testResultHostCount;H=N.name.replace(/ /g,""),F=[{x:"Compliant",y:M?G:"0"},{x:"Non-compliant",y:M-G}],t=0===M&&[a.Z.value]||[l.Z.value,s.Z.value],r=[{name:F[0].y+" "+(0,S._6)(F[0].y,"system")+" compliant"},{name:F[1].y+" "+(0,S._6)(F[1].y,"system")+" non-compliant"}],o=M?(0,S.P0)(Math.floor(F[0].y/(F[0].y+F[1].y)*100)):0}return(0,C.a)(u,n),i().createElement(P.tC,{stateValues:{error:D,data:I,loading:T}},i().createElement(P.K7,{stateKey:"loading"},i().createElement(h.Z,null,i().createElement(P.Tq,null)),i().createElement(b.Z,null,i().createElement(E.Z,null,i().createElement(O.Z,null)))),i().createElement(P.K7,{stateKey:"data"},i().createElement(h.Z,null,i().createElement(v.Breadcrumb,{ouiaId:"ReportDetailsPathBreadcrumb"},i().createElement(P.MU,{to:"/"},"Compliance"),i().createElement(P.MU,{to:"/reports"},"Reports"),i().createElement(v.BreadcrumbItem,{isActive:!0},c)),i().createElement(v.Grid,{hasGutter:!0},i().createElement(v.GridItem,{sm:9,md:9,lg:9,xl:9},i().createElement(g.Z,{title:c}),i().createElement(P.Zr,null,N.policyType)),i().createElement(v.GridItem,{className:"report-details-button",sm:3,md:3,lg:3,xl:3},Z&&i().createElement(P.mR,{state:{profile:N},to:"/reports/".concat(N.id,"/pdf"),component:P.Qj,ouiaId:"ReportDetailsDownloadReportPDFLink",variant:"plain",className:"pf-u-mr-md"},"Download PDF"),i().createElement(P.mR,{state:{profile:N},to:"/reports/".concat(N.id,"/delete"),component:P.Qj,variant:"link",ouiaId:"ReportDetailsDeleteReportLink",isInline:!0},"Delete report"))),i().createElement(v.Grid,{hasGutter:!0},i().createElement(v.GridItem,{sm:12,md:12,lg:12,xl:6},i().createElement("div",{className:"chart-inline"},i().createElement("div",{className:"chart-container"},i().createElement(f.HS,{data:F,identifier:H,title:o,subTitle:"Compliant",themeVariant:y.py.light,colorScale:t,style:{fontSize:20},constrainToVisibleArea:!0,innerRadius:88,width:462,legendPosition:"right",legendData:r,legendOrientation:"vertical",padding:{bottom:20,left:0,right:250,top:20}}))),N.unsupportedHostCount>0&&i().createElement(v.Text,null,i().createElement(P.cT,{showHelpIcon:!0},i().createElement("strong",{className:"ins-c-warning-text"},N.unsupportedHostCount," systems not supported")))),i().createElement(v.GridItem,{sm:12,md:12,lg:12,xl:6},i().createElement(P.vu,{profile:N})))),i().createElement(b.Z,null,i().createElement(v.Grid,{hasGutter:!0},i().createElement(v.GridItem,{span:12},i().createElement(w.r0,{showOsMinorVersionFilter:[N.osMajorVersion],columns:[R.Zw({showLink:!0,showOsInfo:!0}),R.MO("tags"),R.hN,R.ll,R.OF,R.Hc],query:x.Mb,showOnlySystemsWithTestResults:!0,compliantFilter:!0,defaultFilter:"with_results_for_policy_id = ".concat(N.id),policyId:N.id}))))))};W.propTypes={route:u().object};const z=function(e){return(0,j.ZP)("systemsNotReporting")?i().createElement(q,e):i().createElement(W,e)}},85217:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ReportDownload:()=>Ae,default:()=>$e});var r,o,i,a=n(92950),s=n.n(a),l=n(14938),c=n(334),u=n(90570),p=n(58141),m=n(97285),d=n(52710),f=n(30168),y=n(67521),v={compliantSystems:!1,nonCompliantSystems:!0,unsupportedSystems:!0,nonReportingSystems:!0,topTenFailedRules:!0,userNotes:void 0},h=(0,y.ZP)(r||(r=(0,f.Z)(["\n  query getSystems(\n    $filter: String!\n    $policyId: ID\n    $perPage: Int\n    $page: Int\n    $sortBy: [String!]\n    $tags: [String!]\n  ) {\n    systems(\n      search: $filter\n      limit: $perPage\n      offset: $page\n      sortBy: $sortBy\n      tags: $tags\n    ) {\n      totalCount\n      edges {\n        node {\n          id\n          name\n          osMajorVersion\n          osMinorVersion\n          insightsId\n          rulesFailed\n          testResultProfiles(policyId: $policyId) {\n            lastScanned\n            compliant\n            score\n            supported\n            ssgVersion\n          }\n        }\n      }\n    }\n  }\n"]))),g=(0,y.ZP)(o||(o=(0,f.Z)(["\n  query Profile($policyId: String!) {\n    profile(id: $policyId) {\n      id\n      name\n      refId\n      testResultHostCount\n      compliantHostCount\n      unsupportedHostCount\n      complianceThreshold\n      osMajorVersion\n      lastScanned\n      policyType\n      totalHostCount\n      ssgVersion\n      policy {\n        id\n        name\n      }\n      benchmark {\n        id\n        version\n      }\n      businessObjective {\n        id\n        title\n      }\n    }\n  }\n"]))),b=(0,y.ZP)(i||(i=(0,f.Z)(["\n  query getProfiles($filter: String!, $policyId: ID!) {\n    profiles(search: $filter) {\n      totalCount\n      edges {\n        node {\n          topFailedRules(policyId: $policyId) {\n            refId\n            title\n            remediationAvailable\n            severity\n            identifier\n            failedCount\n          }\n        }\n      }\n    }\n  }\n"]))),E=n(45697),O=n.n(E),S=n(77346),P=function(e){var t=e.policy,n=e.setExportSetting,r=e.exportSettings,o=(0,S.ZP)("systemsNotReporting");return s().createElement(l.Form,null,s().createElement(l.FormGroup,{isInline:!0,fieldId:"simple-form-checkbox-group",label:"Policy"},s().createElement(l.Text,null,t.name)),s().createElement(l.FormGroup,{fieldId:"simple-form-checkbox-group",label:"System data to include"},s().createElement(l.Checkbox,{label:"Non-compliant systems",id:"non-compliant-systems-export-setting","aria-label":"Non-compliant systems",onChange:n("nonCompliantSystems"),isChecked:r.nonCompliantSystems}),s().createElement(l.Checkbox,{label:"Systems with unsupported configuration",id:"unsupported-systems-export-setting","aria-label":"Systems with unsupported configuration",onChange:n("unsupportedSystems"),isChecked:r.unsupportedSystems}),o&&s().createElement(l.Checkbox,{label:"Systems with no reports",id:"nonreporting-systems-export-setting","aria-label":"Systems never reported",onChange:n("nonReportingSystems"),isChecked:r.nonReportingSystems}),s().createElement(l.Checkbox,{id:"compliant-systems-export-setting",onChange:n("compliantSystems"),isChecked:r.compliantSystems,label:"Compliant systems","aria-label":"Compliant systems"})),s().createElement(l.FormGroup,{label:"Rule data to include",fieldId:"checkbox01"},s().createElement(l.Checkbox,{id:"failed-rules-export-setting",label:"Top failed rules (Up to 10)","aria-label":"Rule data to include",onChange:n("topTenFailedRules"),isChecked:r.topTenFailedRules})),s().createElement(l.FormGroup,{label:"User notes (optional)",fieldId:"checkbox01"},s().createElement(l.TextArea,{"aria-label":"User notes (optional)",onChange:n("userNotes"),value:r.userNotes})))};P.propTypes={policy:O().object,exportSettings:O().object,setExportSetting:O().func};const C=P;var j=n(15861),w=n(87757),x=n.n(w),R=n(65811),Z=n(42982),k=n(26075),I=n(4942);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,I.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(e){return(null==e?void 0:e.filter((function(e){return"Never"!=e.lastScanned})))||[]},H=function(e){var t=e.testResultProfiles;return F(t).length>0},N=function(e){return H(e)&&F(e.testResultProfiles).every((function(e){return e.supported}))},G=function(e){return e.filter((function(e){return N(e)&&function(e){var t=F(e.testResultProfiles).length>0,n=F(e.testResultProfiles).every((function(e){return e.compliant}));return t&&n}(e)}))},M=function(e){return e.filter((function(e){return N(e)&&function(e){var t=F(e.testResultProfiles).length>0,n=F(e.testResultProfiles).filter((function(e){return!e.compliant})).length>0;return t&&n}(e)}))},V=function(e){return e.filter((function(e){return function(e){return H(e)&&F(e.testResultProfiles).every((function(e){return!e.supported}))}(e)}))},B=function(e,t,n){var r=G(t),o=M(t),i=V(t),a=function(e){var t=[].concat((0,Z.Z)(G(e)),(0,Z.Z)(M(e)),(0,Z.Z)(V(e))).map((function(e){return e.id}));return e.filter((function(e){return!t.includes(e.id)}))}(t);return T(T(T(T(T(T({totalHostCount:t.length,compliantSystemCount:r.length},e.compliantSystems&&{compliantSystems:r}),{},{nonCompliantSystemCount:o.length},e.nonCompliantSystems&&{nonCompliantSystems:o}),{},{unsupportedSystemCount:i.length},e.unsupportedSystems&&{unsupportedSystems:i}),e.topTenFailedRules&&{topTenFailedRules:n}),{},{nonReportingSystemCount:a.length},e.nonReportingSystems&&{nonReportingSystems:a}),e.userNotes&&{userNotes:e.userNotes})},A=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,r=Math.ceil(t/n)||1;return Promise.all((0,Z.Z)(new Array(r)).map((function(t,r){return e(n,r+1)})))},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.totalHostCount,r=(0,k.x)(),o=function(e,n){return r.query({query:h,fetchResults:!0,fetchPolicy:"no-cache",variables:{perPage:e,page:n,filter:"policy_id = ".concat(t),policyId:t}})};return(0,j.Z)(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(o,n);case 2:return e.abrupt("return",e.sent.flatMap((function(e){return e.data.systems.edges.map((function(e){return e.node}))})));case 3:case"end":return e.stop()}}),e)})))},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=(0,k.x)(),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return n.query({query:b,fetchResults:!0,fetchPolicy:"no-cache",variables:{perPage:e,page:r,filter:"policy_id = ".concat(t),policyId:t}})};return(0,j.Z)(x().mark((function e(){var t;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:if(e.t1=t=e.sent.data.profiles,e.t0=null===e.t1,e.t0){e.next=6;break}e.t0=void 0===t;case 6:if(!e.t0){e.next=10;break}e.t2=void 0,e.next=11;break;case 10:e.t2=t.edges.flatMap((function(e){return e.node.topFailedRules}));case 11:return e.abrupt("return",e.t2);case 12:case"end":return e.stop()}}),e)})))};var U=n(70194),q=n(62410),L=n(11443);const K=U.mM.create({bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},metaTitle:{color:"#C9190B",marginBottom:"20px"},userNotes:{backgroundColor:"#F0F0F0",padding:"8px"},userNotesTitle:{marginBottom:"4px"},sectionTitle:{color:"#C9190B",fontWeight:"bold",fontSize:14},subSectionTitle:{color:"#C9190B",fontWeight:"bold",fontSize:10,marginBottom:"10pt"}});var W=function(e){var t=e.systems.map((function(e){return[e.name,"RHEL ".concat(e.osMajorVersion,".").concat(e.osMinorVersion),"".concat(e.rulesFailed||""),(0,L.P0)(e.testResultProfiles[0].score)]}));return s().createElement(p.iA,{withHeader:!0,rows:[["System name","OS","Failed rules","Compliance score"]].concat((0,Z.Z)(t))})};W.propTypes={systems:O().array};const z=W;var Q=function(e){var t=e.systems,n=e.ssgFinder,r=t.map((function(e){return[e.name,"RHEL ".concat(e.osMajorVersion,".").concat(e.osMinorVersion),e.testResultProfiles[0].ssgVersion,n(e.osMajorVersion,e.osMinorVersion)]}));return s().createElement(p.iA,{withHeader:!0,rows:[["System name","OS","Running SSG version","Expected SSG version"]].concat((0,Z.Z)(r))})};Q.propTypes={systems:O().array,ssgFinder:O().func};const J=Q;var Y=function(e){var t=e.systems.map((function(e){return[e.name,"RHEL ".concat(e.osMajorVersion,".").concat(e.osMinorVersion)]}));return s().createElement(p.iA,{withHeader:!0,rows:[["System name","OS"]].concat((0,Z.Z)(t))})};Y.propTypes={systems:O().array,ssgFinder:O().func};const X=Y;var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.charAt(0).toUpperCase()+e.slice(1)},te=function(e){var t=e.rules.slice(0,10).map((function(e){return[e.title,(t=e,n=t.identifier,JSON.parse(n||"{}").label||""),ee(null==e?void 0:e.severity),"".concat(e.failedCount)];var t,n}));return s().createElement(p.iA,{withHeader:!0,rows:[["Rule name","ID","Severity","Failed systems"]].concat((0,Z.Z)(t))})};te.propTypes={rules:O().array};const ne=te;var re=function(e){var t=e.children,n=e.title;return s().createElement(U.G7,{style:{justifyContent:"space-evenly",width:"24%",paddingRight:"1%"}},s().createElement(U.G7,null,s().createElement(U.xv,{style:{color:"#C9190B",fontSize:20}},t)),s().createElement(U.xv,null,n))};re.propTypes={children:O().node,title:O().string};const oe=re;function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){(0,I.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var se=function(e){var t=e.children,n=e.metaTitle,r=e.title;return s().createElement(U.G7,{style:{marginBottom:"20pt"}},s().createElement(U.G7,{style:{justifyContent:"start"}},s().createElement(U.xv,{style:ae(ae({},K.subSectionTitle),{},{width:"70%"})},r),s().createElement(U.xv,null,n)),t)};se.propTypes={children:O().node,metaTitle:O().string,title:O().string};const le=se;var ce=n(79375),ue=function(e){var t=e.policy.percentCompliant,n=void 0===t?0:t,r=e.compliantSystemCount,o=e.nonCompliantSystemCount,i=e.unsupportedSystemCount,a=e.nonReportingSystemCount,l=[{x:"".concat(r," systems compliant"),y:r},{x:"".concat(o," systems non-compliant"),y:o}].concat((0,Z.Z)(i>0?[{x:"".concat(i," systems not supported"),y:i,color:ce.Z.value}]:[]),(0,Z.Z)(a>0?[{x:"".concat(a," systems never reported"),y:a}]:[])),c=(0,L.P0)(n);return s().createElement(p.kL,{legendHeader:"",chartType:"donut",subTitle:"Compliant",colorSchema:"multi",title:c,data:l})};ue.propTypes={policy:O().object,compliantSystemCount:O().number,nonCompliantSystemCount:O().number,unsupportedSystemCount:O().number,nonReportingSystemCount:O().number};const pe=ue;function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){(0,I.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fe=function(e){var t,n=e.data,r=e.ssgFinder,o=n.totalHostCount,i=n.compliantSystems,l=n.compliantSystemCount,c=n.nonCompliantSystems,u=n.nonCompliantSystemCount,m=n.topTenFailedRules,d=n.unsupportedSystems,f=n.unsupportedSystemCount,y=n.nonReportingSystems,v=n.nonReportingSystemCount,h=n.userNotes,g=n.policy,b=g.testResultHostCount,E=void 0===b?0:b,O=g.compliantHostCount,S=void 0===O?0:O,P=0!=E?(0,L.P0)(Math.floor(S/o*100)):0;return s().createElement(a.Fragment,null,s().createElement(U.xv,{style:K.subSectionTitle},"Report prepared ".concat((0,q.Z)({date:new Date,type:"exact"}).props.children)),h&&s().createElement(U.G7,{style:K.userNotes},s().createElement(U.G7,{style:K.userNotesTitle},s().createElement(U.xv,null,"User notes")),s().createElement(U.G7,null,s().createElement(U.xv,null,h))),s().createElement(p.$0,{title:"Policy Details",titleProps:{style:K.sectionTitle}},s().createElement(p.sg,{style:{width:"150px"}},s().createElement(p.iA,{rows:[["Policy type",g.policyType],["Operating system","RHEL ".concat(g.osMajorVersion)],["Compliance threshold","".concat(g.complianceThreshold,"%")],["Business Objective",(null===(t=g.businessObjective)||void 0===t?void 0:t.title)||"--"]]})),s().createElement(p.sg,null,s().createElement(pe,{policy:de(de({},g),{},{percentCompliant:P}),compliantSystemCount:l,nonCompliantSystemCount:u,unsupportedSystemCount:f,nonReportingSystemCount:v}))),s().createElement(p.$0,{title:"Systems",withColumn:!1,titleProps:{style:K.sectionTitle}},s().createElement(p.s_,{withColumn:!1,style:{marginBottom:"20px"}},s().createElement(oe,{title:"Non-compliant systems"},u),f?s().createElement(oe,{title:"Systems with unsupported configuration"},f):null,v?s().createElement(oe,{title:"Systems never reported"},v):null,s().createElement(oe,{title:"Compliant systems"},l)),c&&u?s().createElement(le,{title:"Non-compliant systems"},s().createElement(z,{systems:c})):null,d&&f?s().createElement(le,{title:"Systems with unsupported configuration"},s().createElement(J,{systems:d,ssgFinder:r})):null,y&&v?s().createElement(le,{title:"Systems never reported"},s().createElement(X,{systems:y})):null,i&&l?s().createElement(le,{title:"Compliant systems"},s().createElement(z,{systems:i})):null),m?s().createElement(p.$0,{title:"Rules",withColumn:!1,titleProps:{style:K.sectionTitle}},s().createElement(le,{title:"Top failed rules"},s().createElement(ne,{rules:m}))):null)};fe.propTypes={data:O().object,ssgFinder:O().func};const ye=fe;function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(n),!0).forEach((function(t){(0,I.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge=n(70885),be=n(72971),Ee=n(41800),Oe=n.n(Ee),Se=n(15671),Pe=n(43144);function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(n),!0).forEach((function(t){(0,I.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const we=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,Se.Z)(this,e),(0,I.Z)(this,"DEFAULT_API_HEADERS",{"Content-Type":"application/vnd.api+json",Accept:"application/json"}),this.apiBase=t.apiBase||"/api",this.path=t.path||"",this.authenticate=t.authenticate||function(){return Promise.resolve({})},this.onUnauthorised=t.onUnauthorised||function(){return Promise.resolve({})},this.defaultHeaders=t.headers||this.DEFAULT_API_HEADERS}var t;return(0,Pe.Z)(e,[{key:"request",value:(t=(0,j.Z)(x().mark((function e(t,n,r){var o,i=this,a=arguments;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.length>3&&void 0!==a[3]?a[3]:{},e.next=3,this.callAuthenticate().then((function(){return i.fetch(t,n,r,o)})).then(this.checkForEmptyResponse).then((function(e){return i.checkForErrors(e,o)})).then((function(e){return e.json()})).catch(this.finalCatch);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),function(e,n,r){return t.apply(this,arguments)})},{key:"finalCatch",value:function(e){return void 0===e.errors?Promise.reject({title:"Error parsing"}):Promise.reject(je({},e))}},{key:"fetch",value:function(e){function t(t,n,r,o){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t,n,r){var o={method:n||"get",headers:this.defaultHeaders,credentials:"include"},i="".concat(this.apiBase).concat(this.path?this.path:"").concat(e||""),a=new URL(i,window.location.origin);if(r.params){var s=Object.keys(r.params).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(r.params[e])})).join("&");a.search=new URLSearchParams(s)}return t&&(o.body=JSON.stringify(t)),fetch(a,o)}))},{key:"checkForEmptyResponse",value:function(e){return 204===e.status?{json:function(){return{}}}:e}},{key:"checkForErrors",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(404===e.status&&t.ignore404)return{json:function(){return{}}};if(401===e.status)return this.onUnauthorised();var n=e.clone?e.clone().json():e;return 422===e.status?n.then((function(e){return Promise.reject(je(je({},e),{},{title:"Validation error"}))})):e.status>=400&&e.status<=600?n.then((function(e){return Promise.reject(e.errors[0])})):e}},{key:"callAuthenticate",value:function(){return Promise.resolve(this.authenticate()||!0)}},{key:"create",value:function(e,t){return this.request(e,t,"post")}},{key:"update",value:function(e,t){return this.request(e,t,"put")}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request(e,null,"get",t)}},{key:"destroy",value:function(e){return this.request(e,null,"delete")}}]),e}();function xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}const Re=function(e){var t=new we(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(n),!0).forEach((function(t){(0,I.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e));return t};function Ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ze(Object(n),!0).forEach((function(t){(0,I.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ze(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ie=function(e){return e&&function(e,t){var n=e[t],r=e;return delete r[t],ke(ke({},r),n)}(e,"attributes")},De=function(e,t){var n,r=Oe()(e);return null===(n=Object.values(r[t]||{}))||void 0===n?void 0:n.map((function(e){return function(e,t){var n={};return Object.entries((null==e?void 0:e.relationships)||[]).forEach((function(e){var r=(0,ge.Z)(e,2),o=r[0],i=r[1];n[o]=null==i?void 0:i.data.map((function(e){var n;return Ie(null==t||null===(n=t[e.type])||void 0===n?void 0:n[e.id])})).filter((function(e){return!!e}))})),delete e.relationships,ke(ke({},e),n)}(Ie(e),r)}))},Te=function(){var e=(0,j.Z)(x().mark((function e(t,n){var r,o,i,a,s=arguments;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>2&&void 0!==s[2]?s[2]:{},o=s.length>3&&void 0!==s[3]?s[3]:{},e.next=4,t.get("/".concat(n),{params:r});case 4:return i=e.sent,e.next=7,De(i,(null==o?void 0:o.type)||n);case 7:return a=e.sent,e.abrupt("return",{collection:a,meta:i.meta,total:i.meta.total,json:i});case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var Fe=function(e,t){return parseInt(e)===parseInt(t)};const He=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=(0,a.useState)({data:void 0,loading:!1,error:void 0}),o=(0,ge.Z)(r,2),i=o[0],s=o[1],l=Re({apiBase:be.dT}),c=ke(ke({},(null==t?void 0:t.params)||{}),{},{include:(null==t?void 0:t.include)||[]});return(0,a.useEffect)((function(){null!=t&&t.skip||(s({data:void 0,loading:!0,error:void 0}),Te(l,e,c,t).then((function(e){s({data:e,loading:!1,error:void 0})})))}),[].concat((0,Z.Z)(n),[null==t?void 0:t.skip])),i}("supported_ssgs",{type:"supportedSsg",skip:e}).data;return function(e,n){var r,o=null===(r=(t||{}).collection)||void 0===r?void 0:r.find((function(t){return Fe(t.osMajorVersion,e)&&Fe(t.osMinorVersion,n)}));return(null==o?void 0:o.version)||"N/A"}},Ne=function(e,t){var n=He(),r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onComplete:function(){},onError:function(){}},r=n.onComplete,o=n.onError,i=$(t),a=_(t);return(0,j.Z)(x().mark((function t(){var n,s,l;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i();case 3:return n=t.sent,t.next=6,a();case 6:return s=t.sent,l=B(e,n,s),null==r||r(l),t.abrupt("return",l);case 12:if(t.prev=12,t.t0=t.catch(0),!o){t.next=19;break}return null==o||o(t.t0),t.abrupt("return",[]);case 19:throw t.t0;case 20:case"end":return t.stop()}}),t,null,[[0,12]])})))}(e,t,{onError:function(){(0,R.q)({variant:"danger",title:"Couldn’t download export",description:"Reinitiate this export to try again."})},onComplete:function(){(0,R.q)({variant:"success",title:"Downloading export"})}}),o=function(e){return function(){var t=(0,j.Z)(x().mark((function t(n,r){return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[s().createElement(ye,{key:"pdf-page-1",data:he(he({},n),{},{policy:e}),ssgFinder:r})]);case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t),i=function(){var e=(0,j.Z)(x().mark((function e(){var t;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,R.q)({variant:"info",title:"Preparing export",description:"Once complete, your download will start automatically."}),e.next=3,r();case 3:return t=e.sent,e.next=6,o(t,n);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i};var Ge=n(35937),Me=n.n(Ge);function Ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ve(Object(n),!0).forEach((function(t){(0,I.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ae=function(){var e=(0,c.useParams)().report_id,t=(0,d.C3)("/reports/"+e),n=(0,u.a)(g,{variables:{policyId:e}}),r=n.data,o=n.loading,i=n.error,f=null==r?void 0:r.profile,y=function(){var e,t=(0,S.ZP)("systemsNotReporting"),n=(0,a.useState)((e=t,Me()(v,(function(t,n){return!("nonReportingSystems"===n&&!e)})))),r=(0,ge.Z)(n,2),o=r[0],i=r[1];return{exportSettings:o,setExportSetting:function(e){return function(t){return i(Be(Be({},o),{},(0,I.Z)({},e,t)))}},isValid:Object.keys(o).some((function(e){return 1==("userNotes"!==e&&!!o[e])}))}}(),h=y.exportSettings,b=y.setExportSetting,E=y.isValid,O=Ne(h,f),P="compliance-report--".concat((new Date).toISOString().split("T")[0]),j="Export report",w={ouiaId:"ExportReportButton",variant:"primary",isDisabled:!E},x=function(){return s().createElement(l.Button,w,j)},R=[s().createElement(p.o6,{groupName:"Red Hat Insights",key:"export",label:j,reportName:"Compliance:",type:f&&f.name,fileName:P,asyncFunction:O,buttonProps:w,fallback:s().createElement(x,null),className:"pf-u-mr-sm"}),s().createElement(l.Button,{variant:"secondary",key:"cancel",ouiaId:"ExportReportCancelButton",onClick:function(e){e.preventDefault(),window.history.back()}},"Cancel")];return s().createElement(m.C,{isOpen:!0,width:"440px",ouiaId:"DownloadReportModal",title:"Compliance report",onClose:function(){return t()},actions:R},s().createElement(m.tC,{stateValues:{error:i,data:r,loading:o}},s().createElement(m.K7,{stateKey:"loading"},s().createElement(l.Spinner,null)),s().createElement(m.K7,{stateKey:"data"},s().createElement(C,{policy:f,setExportSetting:b,exportSettings:h}))))};const $e=Ae},45467:()=>{},25832:()=>{},52361:()=>{},94616:()=>{}}]);
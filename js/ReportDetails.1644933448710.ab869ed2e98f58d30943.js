(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[72],{17652:(e,t,n)=>{"use strict";n.r(t),n.d(t,{QUERY:()=>K,ReportDetails:()=>W,default:()=>z});var r=n(30168),o=n(92950),i=n.n(o),s=n(91346),a=n(55490),l=n(34925),c=n(45697),u=n.n(c),p=n(334),m=n(90570),d=n(67521),y=n(45209),f=n(52067),v=n(34895),h=n(48716),g=n(39173),b=n(86350),E=n(92223),O=n(6023),P=n(11443),S=n(69073),j=n(7648),C=n(77346),w=n(87242),R=n(27803),x=n(31499),Z=n(3326),T=function(e){var t,n=e.row,r=e.children;return i().createElement(Z.RowWrapper,{style:0===(null===(t=n.testResultProfiles)||void 0===t?void 0:t.length)?{background:"#F0F0F0"}:{}},r)};T.propTypes={row:u().node,children:u().node};const k=T;var D=n(91290),I=function(e){var t=e.color,n=void 0===t?"#FFFFFF":t;return i().createElement("span",{style:{width:"10px",height:"10px",display:"inline-block",background:n}}," ")};I.propTypes={color:u().string};var F=function(e){var t=e.legendData,n=void 0===t?[]:t;return i().createElement(v.List,null,n.map((function(e,t){var n,r,o,s,a,l,c,u=e.name,p=e.symbol,m=e.tooltip,d=e.popover;return i().createElement(v.ListItem,{key:t,icon:i().createElement(I,{color:null==p?void 0:p.fill}),style:{verticalAlign:"middle",display:"inline-block"}},u,m&&i().createElement(v.Tooltip,{content:i().createElement(i().Fragment,null," ",m," ")},i().createElement("span",null," ",i().createElement(D.ZP,{className:"grey-icon"}))),d&&(o=void 0===(r=(n=d).title)?"":r,a=void 0===(s=n.content)?"":s,c=void 0===(l=n.footer)?"":l,i().createElement(v.Popover,{maxWidth:"25rem",headerContent:o,bodyContent:a,footerContent:c},i().createElement("span",null," ",i().createElement(D.ZP,{className:"grey-icon",style:{cursor:"pointer"}})))))})))};F.propTypes={legendData:u().array};const H=F;var N=n(94493),G=n(79375),V=n(42982);const B=function(e){var t,n=e.compliantHostCount,r=void 0===n?0:n,o=e.testResultHostCount,c=void 0===o?0:o,u=e.unsupportedHostCount,p=void 0===u?0:u,m=e.totalHostCount,d=(void 0===m?0:m)-p-c,y=(null===(t=e.name)||void 0===t?void 0:t.replace(/ /g,""))||"donut-chart",h=[{x:"Compliant",y:r},{x:"Non-compliant",y:c-r},{x:"Unsupported",y:p},{x:"Not reporting",y:d}],g=0===c&&[s.Z.value]||[l.Z.value,a.Z.value,G.Z.value,N.Z.value],b=function(e,t){var n=t.testResultHostCount,r=void 0===n?0:n,o=t.unsupportedHostCount,s=void 0===o?0:o,c=t.totalHostCount,u=(void 0===c?0:c)-s-r;return[{name:"".concat(e[0].y," ").concat((0,P._6)(e[0].y,"system")," compliant"),symbol:{fill:l.Z.value}},{name:"".concat(e[1].y," ").concat((0,P._6)(e[1].y,"system")," non-compliant"),symbol:{fill:a.Z.value}},{name:"".concat(e[2].y," ").concat((0,P._6)(e[2].y,"system")," not supported"),symbol:{fill:G.Z.value},popover:{title:"Unsupported SSG versions",content:i().createElement(i().Fragment,null,i().createElement(v.Text,{variant:"p"},"These systems are running unsupported versions of the SCAP Security Guide (SSG) for the version of RHEL installed on them. Assessment of rules failed/passed on these systems is a best-guess effort and may not be accurate."),i().createElement(v.Text,{variant:"p"},"The policy's compliance score excludes these systems.")),footer:i().createElement(S.bL,null)}}].concat((0,V.Z)(u>0?[{name:"".concat(u," ").concat((0,P._6)(u,"system")," not reporting"),popover:{title:"Systems never reported",content:"".concat(u," ").concat((0,P._6)(u,"system")," are not reporting scan results. This may be because the system is disconnected, or the insights-client is not properly configured to use Compliance.")},symbol:{fill:N.Z.value}}]:[]))}(h,e);return{chartProps:{data:h,identifier:y,title:c?(0,P.P0)(Math.floor(h[0].y/(h[0].y+h[1].y)*100)):0,subTitle:"Compliant",themeVariant:f.py.light,colorScale:g,style:{fontSize:20},innerRadius:88,constrainToVisibleArea:!0},legendData:b}};var M=function(e){var t=e.profile,n=B(void 0===t?{}:t),r=n.chartProps,o=n.legendData;return i().createElement(v.Grid,{className:"chart-container"},i().createElement(v.GridItem,{span:6},i().createElement(y.HS,r)),i().createElement(v.GridItem,{span:6,className:"pf-u-display-flex pf-u-align-items-center",style:{fontSize:".85em",height:"100%"}},i().createElement(H,{legendData:o})))};M.propTypes={profile:u().object};const A=M;var _,U=(0,d.ZP)(_||(_=(0,r.Z)(["\n  query Profile($policyId: String!) {\n    profile(id: $policyId) {\n      id\n      name\n      refId\n      totalHostCount\n      testResultHostCount\n      compliantHostCount\n      unsupportedHostCount\n      complianceThreshold\n      majorOsVersion\n      lastScanned\n      policyType\n      policy {\n        id\n        name\n      }\n      benchmark {\n        id\n        version\n      }\n      businessObjective {\n        id\n        title\n      }\n    }\n  }\n"]))),$=function(e){var t,n,r=e.route,o=(0,p.useParams)().report_id,s=(0,C.ZP)("pdfReport"),a=(0,m.a)(U,{variables:{policyId:o},fetchPolicy:"no-cache"}),l=a.data,c=a.error,u=a.loading,d={};return!u&&l&&(t=(d=l.profile).policy.name,n="Report: ".concat(t)),(0,j.a)(r,t),i().createElement(S.tC,{stateValues:{error:c,data:l,loading:u}},i().createElement(S.K7,{stateKey:"loading"},i().createElement(h.Z,null,i().createElement(S.Tq,null)),i().createElement(b.Z,null,i().createElement(E.Z,null,i().createElement(O.Z,null)))),i().createElement(S.K7,{stateKey:"data"},i().createElement(h.Z,null,i().createElement(v.Breadcrumb,{ouiaId:"ReportDetailsPathBreadcrumb"},i().createElement(S.MU,{to:"/"},"Compliance"),i().createElement(S.MU,{to:"/reports"},"Reports"),i().createElement(v.BreadcrumbItem,{isActive:!0},n)),i().createElement(v.Grid,{hasGutter:!0},i().createElement(v.GridItem,{sm:9,md:9,lg:9,xl:9},i().createElement(g.Z,{title:n}),i().createElement(S.Zr,null,d.policyType)),i().createElement(v.GridItem,{className:"report-details-button",sm:3,md:3,lg:3,xl:3},s&&i().createElement(S.mR,{state:{profile:d},to:"/reports/".concat(d.id,"/pdf")},i().createElement(v.Button,{ouiaId:"ReportDetailsDownloadReportPDFLink",variant:"primary",className:"pf-u-mr-md"},"Download PDF")),i().createElement(S.mR,{state:{profile:d},to:"/reports/".concat(d.id,"/delete")},i().createElement(v.Button,{variant:"link",ouiaId:"ReportDetailsDeleteReportLink",isInline:!0},"Delete report")))),i().createElement(v.Grid,{hasGutter:!0},i().createElement(v.GridItem,{sm:12,md:12,lg:12,xl:6},i().createElement(A,{profile:d}),i().createElement(v.Text,{variant:"p",style:{marginBottom:"1rem"}},i().createElement(v.Text,{variant:"small",className:"grey-icon",ouiaId:"ScoreCouningNotification"},"* Overall compliance score includes only supported, reporting systems")),d.unsupportedHostCount>0&&i().createElement(v.Text,{ouiaId:"UnsupportedSSGCountNotification"},i().createElement(S.cT,{showHelpIcon:!0},i().createElement("strong",{className:"ins-c-warning-text"},d.unsupportedHostCount," systems not supported")))),i().createElement(v.GridItem,{sm:12,md:12,lg:12,xl:6},i().createElement(S.vu,{profile:d})))),i().createElement(b.Z,null,i().createElement(v.Grid,{hasGutter:!0},i().createElement(v.GridItem,{span:12},i().createElement(w.r0,{showOsMinorVersionFilter:[d.majorOsVersion],columns:[x.Zw({showLink:!0,showOsInfo:!0}),x.MO("tags"),x.hN,x.ll,x.OF,x.Hc],query:R.Ep,compliantFilter:!0,defaultFilter:"policy_id = ".concat(d.id),policyId:d.id,tableProps:{rowWrapper:k}}))))))};$.propTypes={route:u().object};const q=$;var L,K=(0,d.ZP)(L||(L=(0,r.Z)(["\n  query Profile($policyId: String!) {\n    profile(id: $policyId) {\n      id\n      name\n      refId\n      testResultHostCount\n      compliantHostCount\n      unsupportedHostCount\n      complianceThreshold\n      majorOsVersion\n      lastScanned\n      policyType\n      policy {\n        id\n        name\n      }\n      benchmark {\n        id\n        version\n      }\n      businessObjective {\n        id\n        title\n      }\n    }\n  }\n"]))),W=function(e){var t,n,r,o,c,u=e.route,d=(0,p.useParams)().report_id,Z=(0,C.ZP)("pdfReport"),T=(0,m.a)(K,{variables:{policyId:d},fetchPolicy:"no-cache"}),k=T.data,D=T.error,I=T.loading,F=[],H="loading-donut",N={};if(!I&&k){n=(N=k.profile).policy.name,c="Report: ".concat(n);var G=N.compliantHostCount,V=N.testResultHostCount;H=N.name.replace(/ /g,""),F=[{x:"Compliant",y:V?G:"0"},{x:"Non-compliant",y:V-G}],t=0===V&&[s.Z.value]||[l.Z.value,a.Z.value],r=[{name:F[0].y+" "+(0,P._6)(F[0].y,"system")+" compliant"},{name:F[1].y+" "+(0,P._6)(F[1].y,"system")+" non-compliant"}],o=V?(0,P.P0)(Math.floor(F[0].y/(F[0].y+F[1].y)*100)):0}return(0,j.a)(u,n),i().createElement(S.tC,{stateValues:{error:D,data:k,loading:I}},i().createElement(S.K7,{stateKey:"loading"},i().createElement(h.Z,null,i().createElement(S.Tq,null)),i().createElement(b.Z,null,i().createElement(E.Z,null,i().createElement(O.Z,null)))),i().createElement(S.K7,{stateKey:"data"},i().createElement(h.Z,null,i().createElement(v.Breadcrumb,{ouiaId:"ReportDetailsPathBreadcrumb"},i().createElement(S.MU,{to:"/"},"Compliance"),i().createElement(S.MU,{to:"/reports"},"Reports"),i().createElement(v.BreadcrumbItem,{isActive:!0},c)),i().createElement(v.Grid,{hasGutter:!0},i().createElement(v.GridItem,{sm:9,md:9,lg:9,xl:9},i().createElement(g.Z,{title:c}),i().createElement(S.Zr,null,N.policyType)),i().createElement(v.GridItem,{className:"report-details-button",sm:3,md:3,lg:3,xl:3},Z&&i().createElement(S.mR,{state:{profile:N},to:"/reports/".concat(N.id,"/pdf")},i().createElement(v.Button,{ouiaId:"ReportDetailsDownloadReportPDFLink",variant:"primary",className:"pf-u-mr-md"},"Download PDF")),i().createElement(S.mR,{state:{profile:N},to:"/reports/".concat(N.id,"/delete")},i().createElement(v.Button,{variant:"link",ouiaId:"ReportDetailsDeleteReportLink",isInline:!0},"Delete report")))),i().createElement(v.Grid,{hasGutter:!0},i().createElement(v.GridItem,{sm:12,md:12,lg:12,xl:6},i().createElement("div",{className:"chart-inline"},i().createElement("div",{className:"chart-container"},i().createElement(y.HS,{data:F,identifier:H,title:o,subTitle:"Compliant",themeVariant:f.py.light,colorScale:t,style:{fontSize:20},constrainToVisibleArea:!0,innerRadius:88,width:462,legendPosition:"right",legendData:r,legendOrientation:"vertical",padding:{bottom:20,left:0,right:250,top:20}}))),N.unsupportedHostCount>0&&i().createElement(v.Text,null,i().createElement(S.cT,{showHelpIcon:!0},i().createElement("strong",{className:"ins-c-warning-text"},N.unsupportedHostCount," systems not supported")))),i().createElement(v.GridItem,{sm:12,md:12,lg:12,xl:6},i().createElement(S.vu,{profile:N})))),i().createElement(b.Z,null,i().createElement(v.Grid,{hasGutter:!0},i().createElement(v.GridItem,{span:12},i().createElement(w.r0,{showOsMinorVersionFilter:[N.majorOsVersion],columns:[x.Zw({showLink:!0,showOsInfo:!0}),x.MO("tags"),x.hN,x.ll,x.OF,x.Hc],query:R.Ep,showOnlySystemsWithTestResults:!0,compliantFilter:!0,defaultFilter:"with_results_for_policy_id = ".concat(N.id),policyId:N.id}))))))};W.propTypes={route:u().object};const z=function(e){return(0,C.ZP)("systemsNotReporting")?i().createElement(q,e):i().createElement(W,e)}},85217:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ReportDownload:()=>Le,default:()=>Ke});var r,o,i=n(92950),s=n.n(i),a=n(34895),l=n(334),c=n(90570),u=n(58141),p=n(69073),m=n(52710),d=n(30168),y=n(67521),f={compliantSystems:!1,nonCompliantSystems:!0,unsupportedSystems:!0,nonReportingSystems:!0,topTenFailedRules:!0,userNotes:void 0},v=(0,y.ZP)(r||(r=(0,d.Z)(["\n  query getSystems(\n    $filter: String!\n    $policyId: ID\n    $perPage: Int\n    $page: Int\n    $sortBy: [String!]\n    $tags: [String!]\n  ) {\n    systems(\n      search: $filter\n      limit: $perPage\n      offset: $page\n      sortBy: $sortBy\n      tags: $tags\n    ) {\n      totalCount\n      edges {\n        node {\n          id\n          name\n          osMajorVersion\n          osMinorVersion\n          testResultProfiles(policyId: $policyId) {\n            id\n            name\n            refId\n            lastScanned\n            compliant\n            external\n            score\n            supported\n            ssgVersion\n            majorOsVersion\n            rules {\n              refId\n              title\n              compliant\n              remediationAvailable\n              severity\n              identifier\n            }\n          }\n          policies(policyId: $policyId) {\n            id\n            name\n          }\n          tags {\n            namespace\n            key\n            value\n          }\n        }\n      }\n    }\n  }\n"]))),h=(0,y.ZP)(o||(o=(0,d.Z)(["\n  query Profile($policyId: String!) {\n    profile(id: $policyId) {\n      id\n      name\n      refId\n      testResultHostCount\n      compliantHostCount\n      unsupportedHostCount\n      complianceThreshold\n      majorOsVersion\n      lastScanned\n      policyType\n      totalHostCount\n      ssgVersion\n      policy {\n        id\n        name\n      }\n      benchmark {\n        id\n        version\n      }\n      businessObjective {\n        id\n        title\n      }\n    }\n  }\n"]))),g=n(45697),b=n.n(g),E=n(77346),O=function(e){var t=e.policy,n=e.setExportSetting,r=e.exportSettings,o=(0,E.ZP)("systemsNotReporting");return s().createElement(a.Form,null,s().createElement(a.FormGroup,{isInline:!0,fieldId:"simple-form-checkbox-group",label:"Policy"},s().createElement(a.Text,null,t.name)),s().createElement(a.FormGroup,{fieldId:"simple-form-checkbox-group",label:"System data to include"},s().createElement(a.Checkbox,{label:"Non-compliant systems",id:"non-compliant-systems-export-setting","aria-label":"Non-compliant systems",onChange:n("nonCompliantSystems"),isChecked:r.nonCompliantSystems}),s().createElement(a.Checkbox,{label:"Systems with unsupported configuration",id:"unsupported-systems-export-setting","aria-label":"Systems with unsupported configuration",onChange:n("unsupportedSystems"),isChecked:r.unsupportedSystems}),o&&s().createElement(a.Checkbox,{label:"Systems with no reports",id:"nonreporting-systems-export-setting","aria-label":"Systems not reporting",onChange:n("nonReportingSystems"),isChecked:r.nonReportingSystems}),s().createElement(a.Checkbox,{id:"compliant-systems-export-setting",onChange:n("compliantSystems"),isChecked:r.compliantSystems,label:"Compliant systems","aria-label":"Compliant systems"})),s().createElement(a.FormGroup,{label:"Rule data to include",fieldId:"checkbox01"},s().createElement(a.Checkbox,{id:"failed-rules-export-setting",label:"Top failed rules (Up to 10)","aria-label":"Rule data to include",onChange:n("topTenFailedRules"),isChecked:r.topTenFailedRules})),s().createElement(a.FormGroup,{label:"User notes (optional)",fieldId:"checkbox01"},s().createElement(a.TextArea,{"aria-label":"User notes (optional)",onChange:n("userNotes"),value:r.userNotes})))};O.propTypes={policy:b().object,exportSettings:b().object,setExportSetting:b().func};const P=O;var S=n(15861),j=n(87757),C=n.n(j),w=n(65811),R=n(4942),x=n(42982),Z=n(26075),T=n(79886),k=n(72971),D=n(7739),I=n.n(D),F=n(89734),H=n.n(F);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var G=function(e){return(null==e?void 0:e.filter((function(e){return"Never"!=e.lastScanned})))||[]},V=function(e){var t=e.testResultProfiles;return G(t).length>0},B=function(e){return V(e)&&G(e.testResultProfiles).every((function(e){return e.supported}))},M=function(e){return e.filter((function(e){return B(e)&&function(e){var t=G(e.testResultProfiles).length>0,n=G(e.testResultProfiles).every((function(e){return e.compliant}));return t&&n}(e)}))},A=function(e){return e.filter((function(e){return B(e)&&function(e){var t=G(e.testResultProfiles).length>0,n=G(e.testResultProfiles).filter((function(e){return!e.compliant})).length>0;return t&&n}(e)}))},_=function(e){return e.filter((function(e){return function(e){return V(e)&&G(e.testResultProfiles).every((function(e){return!e.supported}))}(e)}))},U=function(e){var t=[].concat((0,x.Z)(M(e)),(0,x.Z)(A(e)),(0,x.Z)(_(e))).map((function(e){return e.id}));return e.filter((function(e){return!t.includes(e.id)}))},$=function(e){var t={};return e.forEach((function(e){var n;null===(n=e.testResultProfiles)||void 0===n||n.forEach((function(e){e.rules.forEach((function(e){return function(e){e.compliant||(t[e.refId]?t[e.refId].systemsCount++:t[e.refId]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,R.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({systemsCount:1},e))}(e)}))}))})),t},q=function(e){return o=$(e),t=Object.values(o),n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return(0,T.qk)(e,"severity",k.FT,t)}(t,"asc").slice(0,10),r=I()(n,"severity"),k.FT.flatMap((function(e){return t=r[e]||[],H()(t,"systemsCount").reverse();var t}));var t,n,r,o};function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){(0,R.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,r=Math.ceil(t/n)||1;return Promise.all((0,x.Z)(new Array(r)).map((function(t,r){return e(n,r+1)})))};var z=n(70194),J=n(62410);const Q=z.mM.create({bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},metaTitle:{color:"#C9190B",marginBottom:"20px"},userNotes:{backgroundColor:"#F0F0F0",padding:"8px"},userNotesTitle:{marginBottom:"4px"},sectionTitle:{color:"#C9190B",fontWeight:"bold",fontSize:14},subSectionTitle:{color:"#C9190B",fontWeight:"bold",fontSize:10,marginBottom:"10pt"}});var Y=n(11443),X=n(82176),ee=function(e){var t=e.systems.map((function(e){return[e.name,"RHEL ".concat(e.osMajorVersion,".").concat(e.osMinorVersion),"".concat((0,X.RT)(e.testResultProfiles).rulesFailed||""),(0,Y.P0)((0,X.RT)(e.testResultProfiles).score)]}));return s().createElement(u.iA,{withHeader:!0,rows:[["System name","OS","Failed rules","Compliance score"]].concat((0,x.Z)(t))})};ee.propTypes={systems:b().array};const te=ee;var ne=function(e){var t=e.systems,n=e.ssgFinder,r=t.map((function(e){return[e.name,"RHEL ".concat(e.osMajorVersion,".").concat(e.osMinorVersion),e.testResultProfiles[0].ssgVersion,n(e.osMajorVersion,e.osMinorVersion)]}));return s().createElement(u.iA,{withHeader:!0,rows:[["System name","OS","Running SSG version","Expected SSG version"]].concat((0,x.Z)(r))})};ne.propTypes={systems:b().array,ssgFinder:b().func};const re=ne;var oe=function(e){var t=e.systems.map((function(e){return[e.name,"RHEL ".concat(e.osMajorVersion,".").concat(e.osMinorVersion)]}));return s().createElement(u.iA,{withHeader:!0,rows:[["System name","OS"]].concat((0,x.Z)(t))})};oe.propTypes={systems:b().array,ssgFinder:b().func};const ie=oe;var se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.charAt(0).toUpperCase()+e.slice(1)},ae=function(e){var t=e.rules.map((function(e){return[e.title,(t=e,n=t.identifier,JSON.parse(n||"{}").label||""),se(null==e?void 0:e.severity),"".concat(e.systemsCount)];var t,n}));return s().createElement(u.iA,{withHeader:!0,rows:[["Rule name","ID","Severity","Failed systems"]].concat((0,x.Z)(t))})};ae.propTypes={rules:b().array};const le=ae;var ce=function(e){var t=e.children,n=e.title;return s().createElement(z.G7,{style:{justifyContent:"space-evenly",width:"24%",paddingRight:"1%"}},s().createElement(z.G7,null,s().createElement(z.xv,{style:{color:"#C9190B",fontSize:20}},t)),s().createElement(z.xv,null,n))};ce.propTypes={children:b().node,title:b().string};const ue=ce;function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){(0,R.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var de=function(e){var t=e.children,n=e.metaTitle,r=e.title;return s().createElement(z.G7,{style:{marginBottom:"20pt"}},s().createElement(z.G7,{style:{justifyContent:"start"}},s().createElement(z.xv,{style:me(me({},Q.subSectionTitle),{},{width:"70%"})},r),s().createElement(z.xv,null,n)),t)};de.propTypes={children:b().node,metaTitle:b().string,title:b().string};const ye=de;var fe=n(79375),ve=function(e){var t=e.policy.percentCompliant,n=void 0===t?0:t,r=e.compliantSystemCount,o=e.nonCompliantSystemCount,i=e.unsupportedSystemCount,a=e.nonReportingSystemCount,l=[{x:"".concat(r," systems compliant"),y:r},{x:"".concat(o," systems non-compliant"),y:o}].concat((0,x.Z)(i>0?[{x:"".concat(i," systems not supported"),y:i,color:fe.Z.value}]:[]),(0,x.Z)(a>0?[{x:"".concat(a," systems never reported"),y:0}]:[])),c=(0,Y.P0)(n);return s().createElement(u.kL,{legendHeader:"",chartType:"donut",subTitle:"Compliant",title:c,data:l})};ve.propTypes={policy:b().object,compliantSystemCount:b().number,nonCompliantSystemCount:b().number,unsupportedSystemCount:b().number,nonReportingSystemCount:b().number};const he=ve;function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){(0,R.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ee=function(e){var t,n=e.data,r=e.ssgFinder,o=n.compliantSystems,a=n.compliantSystemCount,l=n.nonCompliantSystems,c=n.nonCompliantSystemCount,p=n.topTenFailedRules,m=n.unsupportedSystems,d=n.unsupportedSystemCount,y=n.nonReportingSystems,f=n.nonReportingSystemCount,v=n.userNotes,h=n.policy,g=h.testResultHostCount,b=void 0===g?0:g,E=h.compliantHostCount,O=function(e,t){return 0!==e&&0!==t?Math.floor(e/t*100):0}(void 0===E?0:E,b);return s().createElement(i.Fragment,null,s().createElement(z.xv,{style:Q.subSectionTitle},"Report prepared ".concat((0,J.Z)({date:new Date,type:"exact"}).props.children)),v&&s().createElement(z.G7,{style:Q.userNotes},s().createElement(z.G7,{style:Q.userNotesTitle},s().createElement(z.xv,null,"User notes")),s().createElement(z.G7,null,s().createElement(z.xv,null,v))),s().createElement(u.$0,{title:"Policy Details",titleProps:{style:Q.sectionTitle}},s().createElement(u.sg,{style:{width:"150px"}},s().createElement(u.iA,{rows:[["Policy type",h.policyType],["Operating system","RHEL ".concat(h.osMajorVersion)],["Compliance threshold","".concat(h.complianceThreshold,"%")],["Business Objective",(null===(t=h.businessObjective)||void 0===t?void 0:t.title)||"--"]]})),s().createElement(u.sg,null,s().createElement(he,{policy:be(be({},h),{},{percentCompliant:O}),compliantSystemCount:a,nonCompliantSystemCount:c,unsupportedSystemCount:d,nonReportingSystemCount:f}))),s().createElement(u.$0,{title:"Systems",withColumn:!1,titleProps:{style:Q.sectionTitle}},s().createElement(u.s_,{withColumn:!1,style:{marginBottom:"20px"}},s().createElement(ue,{title:"Non-compliant systems"},c),d?s().createElement(ue,{title:"Systems with unsupported configuration"},d):null,f?s().createElement(ue,{title:"Systems never reported"},f):null,s().createElement(ue,{title:"Compliant systems"},a)),l&&c?s().createElement(ye,{title:"Non-compliant systems"},s().createElement(te,{systems:l})):null,m&&d?s().createElement(ye,{title:"Systems with unsupported configuration"},s().createElement(re,{systems:m,ssgFinder:r})):null,y&&f?s().createElement(ye,{title:"Systems never reported"},s().createElement(ie,{systems:y})):null,o&&a?s().createElement(ye,{title:"Compliant systems"},s().createElement(te,{systems:o})):null),p?s().createElement(u.$0,{title:"Rules",withColumn:!1,titleProps:{style:Q.sectionTitle}},s().createElement(ye,{title:"Top failed rules"},s().createElement(le,{rules:p}))):null)};Ee.propTypes={data:b().object,ssgFinder:b().func};const Oe=Ee;function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(n),!0).forEach((function(t){(0,R.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var je=n(70885),Ce=n(41800),we=n.n(Ce),Re=n(15671),xe=n(43144);function Ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ze(Object(n),!0).forEach((function(t){(0,R.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ze(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const ke=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,Re.Z)(this,e),(0,R.Z)(this,"DEFAULT_API_HEADERS",{"Content-Type":"application/vnd.api+json",Accept:"application/json"}),this.apiBase=t.apiBase||"/api",this.path=t.path||"",this.authenticate=t.authenticate||function(){return Promise.resolve({})},this.onUnauthorised=t.onUnauthorised||function(){return Promise.resolve({})},this.defaultHeaders=t.headers||this.DEFAULT_API_HEADERS}var t;return(0,xe.Z)(e,[{key:"request",value:(t=(0,S.Z)(C().mark((function e(t,n,r){var o,i=this,s=arguments;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=s.length>3&&void 0!==s[3]?s[3]:{},e.next=3,this.callAuthenticate().then((function(){return i.fetch(t,n,r,o)})).then(this.checkForEmptyResponse).then((function(e){return i.checkForErrors(e,o)})).then((function(e){return e.json()})).catch(this.finalCatch);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),function(e,n,r){return t.apply(this,arguments)})},{key:"finalCatch",value:function(e){return void 0===e.errors?Promise.reject({title:"Error parsing"}):Promise.reject(Te({},e))}},{key:"fetch",value:function(e){function t(t,n,r,o){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t,n,r){var o={method:n||"get",headers:this.defaultHeaders,credentials:"include"},i="".concat(this.apiBase).concat(this.path?this.path:"").concat(e||""),s=new URL(i,window.location.origin);if(r.params){var a=Object.keys(r.params).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(r.params[e])})).join("&");s.search=new URLSearchParams(a)}return t&&(o.body=JSON.stringify(t)),fetch(s,o)}))},{key:"checkForEmptyResponse",value:function(e){return 204===e.status?{json:function(){return{}}}:e}},{key:"checkForErrors",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(404===e.status&&t.ignore404)return{json:function(){return{}}};if(401===e.status)return this.onUnauthorised();var n=e.clone?e.clone().json():e;return 422===e.status?n.then((function(e){return Promise.reject(Te(Te({},e),{},{title:"Validation error"}))})):e.status>=400&&e.status<=600?n.then((function(e){return Promise.reject(e.errors[0])})):e}},{key:"callAuthenticate",value:function(){return Promise.resolve(this.authenticate()||!0)}},{key:"create",value:function(e,t){return this.request(e,t,"post")}},{key:"update",value:function(e,t){return this.request(e,t,"put")}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request(e,null,"get",t)}},{key:"destroy",value:function(e){return this.request(e,null,"delete")}}]),e}();function De(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}const Ie=function(e){var t=new ke(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?De(Object(n),!0).forEach((function(t){(0,R.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):De(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e));return t};function Fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function He(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Fe(Object(n),!0).forEach((function(t){(0,R.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ne=function(e){return e&&function(e,t){var n=e[t],r=e;return delete r[t],He(He({},r),n)}(e,"attributes")},Ge=function(e,t){var n,r=we()(e);return null===(n=Object.values(r[t]||{}))||void 0===n?void 0:n.map((function(e){return function(e,t){var n={};return Object.entries((null==e?void 0:e.relationships)||[]).forEach((function(e){var r=(0,je.Z)(e,2),o=r[0],i=r[1];n[o]=null==i?void 0:i.data.map((function(e){var n;return Ne(null==t||null===(n=t[e.type])||void 0===n?void 0:n[e.id])})).filter((function(e){return!!e}))})),delete e.relationships,He(He({},e),n)}(Ne(e),r)}))},Ve=function(){var e=(0,S.Z)(C().mark((function e(t,n){var r,o,i,s,a=arguments;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:{},o=a.length>3&&void 0!==a[3]?a[3]:{},e.next=4,t.get("/".concat(n),{params:r});case 4:return i=e.sent,e.next=7,Ge(i,(null==o?void 0:o.type)||n);case 7:return s=e.sent,e.abrupt("return",{collection:s,meta:i.meta,total:i.meta.total,json:i});case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var Be=function(e,t){return parseInt(e)===parseInt(t)};const Me=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=(0,i.useState)({data:void 0,loading:!1,error:void 0}),o=(0,je.Z)(r,2),s=o[0],a=o[1],l=Ie({apiBase:k.dT}),c=He(He({},(null==t?void 0:t.params)||{}),{},{include:(null==t?void 0:t.include)||[]});return(0,i.useEffect)((function(){null!=t&&t.skip||(a({data:void 0,loading:!0,error:void 0}),Ve(l,e,c,t).then((function(e){a({data:e,loading:!1,error:void 0})})))}),[].concat((0,x.Z)(n),[null==t?void 0:t.skip])),s}("supported_ssgs",{type:"supportedSsg",skip:e}).data;return function(e,n){var r,o=null===(r=(t||{}).collection)||void 0===r?void 0:r.find((function(t){return Be(t.osMajorVersion,e)&&Be(t.osMinorVersion,n)}));return(null==o?void 0:o.version)||"N/A"}},Ae=function(e,t){var n=Me(),r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.id,r=t.totalHostCount,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onComplete:function(){},onError:function(){}},i=o.onComplete,s=o.onError,a=(0,E.ZP)("systemsNotReporting"),l=(0,Z.x)(),c=function(t){var n=M(t),r=A(t),o=_(t),i=U(t);return K(K(K(K(K(K({},e.compliantSystems&&{compliantSystems:n}),{},{compliantSystemCount:n.length},e.nonCompliantSystems&&{nonCompliantSystems:r}),{},{nonCompliantSystemCount:r.length},e.unsupportedSystems&&{unsupportedSystems:o}),{},{unsupportedSystemCount:o.length},e.topTenFailedRules&&{topTenFailedRules:q(t)}),a?K({nonReportingSystemCount:i.length},e.nonReportingSystems&&{nonReportingSystems:i}):{}),e.userNotes&&{userNotes:e.userNotes})},u=function(e,t){return l.query({query:v,fetchResults:!0,fetchPolicy:"no-cache",variables:{perPage:e,page:t,filter:"policy_id = ".concat(n),policyId:n}})};return function(){return W(u,r).then((function(e){return e.flatMap((function(e){return e.data.systems.edges.map((function(e){return e.node}))}))})).then((function(e){var t=c(e);return i&&i(t),t})).catch((function(e){if(s)return s(e),[];throw e}))}}(e,t,{onError:function(){(0,w.q)({variant:"danger",title:"Couldn’t download export",description:"Reinitiate this export to try again."})},onComplete:function(){(0,w.q)({variant:"success",title:"Downloading export"})}}),o=function(e){return function(){var t=(0,S.Z)(C().mark((function t(n,r){return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[s().createElement(Oe,{key:"pdf-page-1",data:Se(Se({},n),{},{policy:e}),ssgFinder:r})]);case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t),i=function(){var e=(0,S.Z)(C().mark((function e(){var t;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,w.q)({variant:"info",title:"Preparing export",description:"Once complete, your download will start automatically."}),e.next=3,r();case 3:return t=e.sent,e.next=6,o(t,n);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i};var _e=n(35937),Ue=n.n(_e);function $e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function qe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$e(Object(n),!0).forEach((function(t){(0,R.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$e(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Le=function(){var e=(0,l.useParams)().report_id,t=(0,m.C3)("/reports/"+e),n=(0,c.a)(h,{variables:{policyId:e}}),r=n.data,o=n.loading,d=n.error,y=null==r?void 0:r.profile,v=function(){var e,t=(0,E.ZP)("systemsNotReporting"),n=(0,i.useState)((e=t,Ue()(f,(function(t,n){return!("nonReportingSystems"===n&&!e)})))),r=(0,je.Z)(n,2),o=r[0],s=r[1];return console.log(o),{exportSettings:o,setExportSetting:function(e){return function(t){return s(qe(qe({},o),{},(0,R.Z)({},e,t)))}},isValid:Object.keys(o).some((function(e){return 1==("userNotes"!==e&&!!o[e])}))}}(),g=v.exportSettings,b=v.setExportSetting,O=v.isValid,S=Ae(g,y),j="compliance-report--".concat((new Date).toISOString().split("T")[0]),C="Export report",w={ouiaId:"ExportReportButton",variant:"primary",isDisabled:!O},x=function(){return s().createElement(a.Button,w,C)},Z=[s().createElement(u.o6,{groupName:"Red Hat Insights",key:"export",label:C,reportName:"Compliance:",type:y&&y.name,fileName:j,asyncFunction:S,buttonProps:w,fallback:s().createElement(x,null),className:"pf-u-mr-sm"}),s().createElement(a.Button,{variant:"secondary",key:"cancel",ouiaId:"ExportReportCancelButton",onClick:function(e){e.preventDefault(),window.history.back()}},"Cancel")];return s().createElement(p.C,{isOpen:!0,width:"440px",ouiaId:"DownloadReportModal",title:"Compliance report",onClose:function(){return t()},actions:Z},s().createElement(p.tC,{stateValues:{error:d,data:r,loading:o}},s().createElement(p.K7,{stateKey:"loading"},s().createElement(a.Spinner,null)),s().createElement(p.K7,{stateKey:"data"},s().createElement(P,{policy:y,setExportSetting:b,exportSettings:g}))))};const Ke=Le},25832:()=>{},52361:()=>{},94616:()=>{}}]);
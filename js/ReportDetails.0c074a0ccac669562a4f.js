(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[72],{79641:(e,t,n)=>{"use strict";n.r(t),n.d(t,{QUERY:()=>D,ReportDetails:()=>T,default:()=>I});var r,o=n(30168),i=n(92950),s=n.n(i),a=n(91346),c=n(55490),l=n(34925),u=n(45697),p=n.n(u),m=n(334),f=n(90570),d=n(67521),y=n(46100),h=n(52067),v=n(15040),b=n(48716),g=n(39173),O=n(86350),E=n(92223),j=n(28873),P=n(11443),w=n(60010),S=n(7648),C=n(77346),x=n(87242),k=n(27803),R=n(31499),D=(0,d.ZP)(r||(r=(0,o.Z)(["\n  query Profile($policyId: String!) {\n    profile(id: $policyId) {\n      id\n      name\n      refId\n      testResultHostCount\n      compliantHostCount\n      unsupportedHostCount\n      complianceThreshold\n      majorOsVersion\n      lastScanned\n      policyType\n      policy {\n        id\n        name\n      }\n      benchmark {\n        id\n        version\n      }\n      businessObjective {\n        id\n        title\n      }\n    }\n  }\n"]))),T=function(e){var t,n,r,o,i,u=e.route,p=(0,m.useParams)().report_id,d=(0,C.ZP)("pdfReport"),T=(0,f.a)(D,{variables:{policyId:p},fetchPolicy:"no-cache"}),I=T.data,Z=T.error,F=T.loading,H=[],N="loading-donut",B={};if(!F&&I){n=(B=I.profile).policy.name,i="Report: ".concat(n);var V=B.compliantHostCount,G=B.testResultHostCount;N=B.name.replace(/ /g,""),H=[{x:"Compliant",y:G?V:"0"},{x:"Non-compliant",y:G-V}],t=0===G&&[a.Z.value]||[l.Z.value,c.Z.value],r=[{name:H[0].y+" "+(0,P._6)(H[0].y,"system")+" compliant"},{name:H[1].y+" "+(0,P._6)(H[1].y,"system")+" non-compliant"}],o=G?(0,P.P0)(Math.floor(H[0].y/(H[0].y+H[1].y)*100)):0}return(0,S.a)(u,n),s().createElement(w.tC,{stateValues:{error:Z,data:I,loading:F}},s().createElement(w.K7,{stateKey:"loading"},s().createElement(b.Z,null,s().createElement(w.Tq,null)),s().createElement(O.Z,null,s().createElement(E.Z,null,s().createElement(j.Z,null)))),s().createElement(w.K7,{stateKey:"data"},s().createElement(b.Z,null,s().createElement(v.Breadcrumb,{ouiaId:"ReportDetailsPathBreadcrumb"},s().createElement(w.MU,{to:"/"},"Compliance"),s().createElement(w.MU,{to:"/reports"},"Reports"),s().createElement(v.BreadcrumbItem,{isActive:!0},i)),s().createElement(v.Grid,{hasGutter:!0},s().createElement(v.GridItem,{sm:9,md:9,lg:9,xl:9},s().createElement(g.Z,{title:i}),s().createElement(w.Zr,null,B.policyType)),s().createElement(v.GridItem,{className:"report-details-button",sm:3,md:3,lg:3,xl:3},d&&s().createElement(w.mR,{state:{profile:B},to:"/reports/".concat(B.id,"/pdf")},s().createElement(v.Button,{ouiaId:"ReportDetailsDownloadReportPDFLink",variant:"primary",className:"pf-u-mr-md"},"Download PDF")),s().createElement(w.mR,{state:{profile:B},to:"/reports/".concat(B.id,"/delete")},s().createElement(v.Button,{variant:"link",ouiaId:"ReportDetailsDeleteReportLink",isInline:!0},"Delete report")))),s().createElement(v.Grid,{hasGutter:!0},s().createElement(v.GridItem,{sm:12,md:12,lg:12,xl:6},s().createElement("div",{className:"chart-inline"},s().createElement("div",{className:"chart-container"},s().createElement(y.HS,{data:H,identifier:N,title:o,subTitle:"Compliant",themeVariant:h.py.light,colorScale:t,style:{fontSize:20},constrainToVisibleArea:!0,innerRadius:88,width:462,legendPosition:"right",legendData:r,legendOrientation:"vertical",padding:{bottom:20,left:0,right:250,top:20}}))),B.unsupportedHostCount>0&&s().createElement(v.Text,null,s().createElement(w.cT,{showHelpIcon:!0},s().createElement("strong",{className:"ins-c-warning-text"},B.unsupportedHostCount," systems not supported")))),s().createElement(v.GridItem,{sm:12,md:12,lg:12,xl:6},s().createElement(w.vu,{profile:B})))),s().createElement(O.Z,null,s().createElement(v.Grid,{hasGutter:!0},s().createElement(v.GridItem,{span:12},s().createElement(x.r0,{showOsMinorVersionFilter:[B.majorOsVersion],columns:[R.Zw({showLink:!0,showOsInfo:!0}),R.MO("tags"),R.hN,R.ll,R.OF,R.Hc],query:k.Ep,showOnlySystemsWithTestResults:!0,compliantFilter:!0,defaultFilter:"with_results_for_policy_id = ".concat(B.id),policyId:B.id}))))))};T.propTypes={route:p().object};const I=T},28314:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ReportDownload:()=>Ge,default:()=>Me});var r,o,i=n(92950),s=n.n(i),a=n(15040),c=n(334),l=n(90570),u=n(58141),p=n(60010),m=n(52710),f=n(30168),d=n(67521),y={compliantSystems:!1,nonCompliantSystems:!0,unsupportedSystems:!0,topTenFailedRules:!0,userNotes:void 0},h=(0,d.ZP)(r||(r=(0,f.Z)(["\n  query getSystems(\n    $filter: String!\n    $policyId: ID\n    $perPage: Int\n    $page: Int\n    $sortBy: [String!]\n    $tags: [String!]\n  ) {\n    systems(\n      search: $filter\n      limit: $perPage\n      offset: $page\n      sortBy: $sortBy\n      tags: $tags\n    ) {\n      totalCount\n      edges {\n        node {\n          id\n          name\n          osMajorVersion\n          osMinorVersion\n          testResultProfiles(policyId: $policyId) {\n            id\n            name\n            refId\n            lastScanned\n            compliant\n            external\n            score\n            supported\n            ssgVersion\n            majorOsVersion\n            rules {\n              refId\n              title\n              compliant\n              remediationAvailable\n              severity\n              identifier\n            }\n          }\n          policies(policyId: $policyId) {\n            id\n            name\n          }\n          tags {\n            namespace\n            key\n            value\n          }\n        }\n      }\n    }\n  }\n"]))),v=(0,d.ZP)(o||(o=(0,f.Z)(["\n  query Profile($policyId: String!) {\n    profile(id: $policyId) {\n      id\n      name\n      refId\n      testResultHostCount\n      compliantHostCount\n      unsupportedHostCount\n      complianceThreshold\n      majorOsVersion\n      lastScanned\n      policyType\n      totalHostCount\n      ssgVersion\n      policy {\n        id\n        name\n      }\n      benchmark {\n        id\n        version\n      }\n      businessObjective {\n        id\n        title\n      }\n    }\n  }\n"]))),b=n(45697),g=n.n(b),O=function(e){var t=e.policy,n=e.setExportSetting,r=e.exportSettings;return s().createElement(a.Form,null,s().createElement(a.FormGroup,{isInline:!0,fieldId:"simple-form-checkbox-group",label:"Policy"},s().createElement(a.Text,null,t.name)),s().createElement(a.FormGroup,{fieldId:"simple-form-checkbox-group",label:"System data to include"},s().createElement(a.Checkbox,{label:"Non-compliant systems",id:"non-compliant-systems-export-setting","aria-label":"Non-compliant systems",onChange:n("nonCompliantSystems"),isChecked:r.nonCompliantSystems}),s().createElement(a.Checkbox,{label:"Systems with unsupported configuration",id:"unsupported-systems-export-setting","aria-label":"Systems with unsupported configuration",onChange:n("unsupportedSystems"),isChecked:r.unsupportedSystems}),s().createElement(a.Checkbox,{id:"compliant-systems-export-setting",onChange:n("compliantSystems"),isChecked:r.compliantSystems,label:"Compliant systems","aria-label":"Compliant systems"})),s().createElement(a.FormGroup,{label:"Rule data to include",fieldId:"checkbox01"},s().createElement(a.Checkbox,{id:"failed-rules-export-setting",label:"Top failed rules (Up to 10)","aria-label":"Rule data to include",onChange:n("topTenFailedRules"),isChecked:r.topTenFailedRules})),s().createElement(a.FormGroup,{label:"User notes (optional)",fieldId:"checkbox01"},s().createElement(a.TextArea,{"aria-label":"User notes (optional)",onChange:n("userNotes"),value:r.userNotes})))};O.propTypes={policy:g().object,exportSettings:g().object,setExportSetting:g().func};const E=O;var j=n(15861),P=n(87757),w=n.n(P),S=n(65811),C=n(4942),x=n(93433),k=n(26075),R=n(79886),D=n(72971),T=n(7739),I=n.n(T),Z=n(89734),F=n.n(Z);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var N=function(e){return(null==e?void 0:e.filter((function(e){return"Never"!=e.lastScanned})))||[]},B=function(e){var t=e.testResultProfiles;return N(t).length>0},V=function(e){return B(e)&&N(e.testResultProfiles).every((function(e){return e.supported}))},G=function(e){return e.filter((function(e){return V(e)&&function(e){var t=N(e.testResultProfiles).length>0,n=N(e.testResultProfiles).every((function(e){return e.compliant}));return t&&n}(e)}))},M=function(e){return e.filter((function(e){return V(e)&&function(e){var t=N(e.testResultProfiles).length>0,n=N(e.testResultProfiles).filter((function(e){return!e.compliant})).length>0;return t&&n}(e)}))},A=function(e){return e.filter((function(e){return function(e){return B(e)&&N(e.testResultProfiles).every((function(e){return!e.supported}))}(e)}))},$=function(e){var t={};return function(e){return e.filter((function(e){return V(e)}))}(e).forEach((function(e){e.testResultProfiles.forEach((function(e){e.rules.forEach((function(e){return function(e){e.compliant||(t[e.refId]?t[e.refId].systemsCount++:t[e.refId]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,C.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({systemsCount:1},e))}(e)}))}))})),t},U=function(e){return o=$(e),t=Object.values(o),n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return(0,R.qk)(e,"severity",D.FT,t)}(t,"asc").slice(0,10),r=I()(n,"severity"),D.FT.flatMap((function(e){return t=r[e]||[],F()(t,"systemsCount").reverse();var t}));var t,n,r,o};function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,C.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,r=Math.ceil(t/n)||1;return Promise.all((0,x.Z)(new Array(r)).map((function(t,r){return e(n,r+1)})))};var K=n(70194),z=n(62410);const W=K.mM.create({bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},metaTitle:{color:"#C9190B",marginBottom:"20px"},userNotes:{backgroundColor:"#F0F0F0",padding:"8px"},userNotesTitle:{marginBottom:"4px"},sectionTitle:{color:"#C9190B",fontWeight:"bold",fontSize:14},subSectionTitle:{color:"#C9190B",fontWeight:"bold",fontSize:10,marginBottom:"10pt"}});var J=n(11443),Q=n(82176),Y=function(e){var t=e.systems.map((function(e){return[e.name,"RHEL ".concat(e.osMajorVersion,".").concat(e.osMinorVersion),"".concat((0,Q.RT)(e.testResultProfiles).rulesFailed||""),(0,J.P0)((0,Q.RT)(e.testResultProfiles).score)]}));return s().createElement(u.iA,{withHeader:!0,rows:[["System name","OS","Failed rules","Compliance score"]].concat((0,x.Z)(t))})};Y.propTypes={systems:g().array};const X=Y;var ee=function(e){var t=e.systems,n=e.ssgFinder,r=t.map((function(e){return[e.name,"RHEL ".concat(e.osMajorVersion,".").concat(e.osMinorVersion),e.testResultProfiles[0].ssgVersion,n(e.osMajorVersion,e.osMinorVersion)]}));return s().createElement(u.iA,{withHeader:!0,rows:[["System name","OS","Running SSG version","Expected SSG version"]].concat((0,x.Z)(r))})};ee.propTypes={systems:g().array,ssgFinder:g().func};const te=ee;var ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.charAt(0).toUpperCase()+e.slice(1)},re=function(e){var t=e.rules.map((function(e){return[e.title,(t=e,n=t.identifier,JSON.parse(n||"{}").label||""),ne(null==e?void 0:e.severity),"".concat(e.systemsCount)];var t,n}));return s().createElement(u.iA,{withHeader:!0,rows:[["Rule name","ID","Severity","Failed systems"]].concat((0,x.Z)(t))})};re.propTypes={rules:g().array};const oe=re;var ie=function(e){var t=e.children,n=e.title;return s().createElement(K.G7,{style:{justifyContent:"space-evenly",width:"32%",paddingRight:"1%"}},s().createElement(K.G7,null,s().createElement(K.xv,{style:{color:"#C9190B",fontSize:20}},t)),s().createElement(K.xv,null,n))};ie.propTypes={children:g().node,title:g().string};const se=ie;function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){(0,C.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var le=function(e){var t=e.children,n=e.metaTitle,r=e.title;return s().createElement(K.G7,{style:{marginBottom:"20pt"}},s().createElement(K.G7,{style:{justifyContent:"start"}},s().createElement(K.xv,{style:ce(ce({},W.subSectionTitle),{},{width:"70%"})},r),s().createElement(K.xv,null,n)),t)};le.propTypes={children:g().node,metaTitle:g().string,title:g().string};const ue=le;var pe=function(e){var t=e.policy,n=t.testResultHostCount,r=void 0===n?0:n,o=t.compliantHostCount,i=void 0===o?0:o,a=t.percentCompliant,c=void 0===a?0:a,l=r-i,p=[{x:"".concat(i," systems compliant"),y:i},{x:"".concat(l," systems non-compliant"),y:l}],m=(0,J.P0)(c);return s().createElement(u.kL,{legendHeader:"",chartType:"donut",subTitle:"Compliant",colorSchema:"blue",title:m,data:p})};pe.propTypes={policy:g().object};const me=pe;function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){(0,C.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ye=function(e){var t,n=e.data,r=e.ssgFinder,o=n.compliantSystems,a=n.compliantSystemCount,c=n.nonCompliantSystems,l=n.nonCompliantSystemCount,p=n.topTenFailedRules,m=n.unsupportedSystems,f=n.unsupportedSystemCount,d=n.userNotes,y=n.policy,h=y.testResultHostCount,v=void 0===h?0:h,b=y.compliantHostCount,g=void 0===b?0:b,O=Math.floor(g/v*100);return s().createElement(i.Fragment,null,s().createElement(K.xv,{style:W.subSectionTitle},"Report prepared ".concat((0,z.Z)({date:new Date,type:"exact"}).props.children)),d&&s().createElement(K.G7,{style:W.userNotes},s().createElement(K.G7,{style:W.userNotesTitle},s().createElement(K.xv,null,"User notes")),s().createElement(K.G7,null,s().createElement(K.xv,null,d))),s().createElement(u.$0,{title:"Policy Details",titleProps:{style:W.sectionTitle}},s().createElement(u.sg,{style:{width:"150px"}},s().createElement(u.iA,{rows:[["Policy type",y.policyType],["Operating system","RHEL ".concat(y.osMajorVersion)],["Compliance threshold","".concat(y.complianceThreshold,"%")],["Business Objective",(null===(t=y.businessObjective)||void 0===t?void 0:t.title)||"--"]]})),s().createElement(u.sg,null,s().createElement(me,{policy:de(de({},y),{},{percentCompliant:O})}))),s().createElement(u.$0,{title:"Systems",withColumn:!1,titleProps:{style:W.sectionTitle}},s().createElement(u.s_,{withColumn:!1,style:{marginBottom:"20px"}},s().createElement(se,{title:"Non-compliant systems"},l),f?s().createElement(se,{title:"Systems with unsupported configuration"},f):null,s().createElement(se,{title:"Compliant systems"},a)),c&&l?s().createElement(ue,{title:"Non-compliant systems"},s().createElement(X,{systems:c})):null,m&&f?s().createElement(ue,{title:"Systems with unsupported configuration"},s().createElement(te,{systems:m,ssgFinder:r})):null,o&&a?s().createElement(ue,{title:"Compliant systems"},s().createElement(X,{systems:o})):null),p?s().createElement(u.$0,{title:"Rules",withColumn:!1,titleProps:{style:W.sectionTitle}},s().createElement(ue,{title:"Top failed rules"},s().createElement(oe,{rules:p}))):null)};ye.propTypes={data:g().object,ssgFinder:g().func};const he=ye;function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(n),!0).forEach((function(t){(0,C.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge=n(29439),Oe=n(41800),Ee=n.n(Oe),je=n(15671),Pe=n(43144);function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(Object(n),!0).forEach((function(t){(0,C.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const Ce=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,je.Z)(this,e),(0,C.Z)(this,"DEFAULT_API_HEADERS",{"Content-Type":"application/vnd.api+json",Accept:"application/json"}),this.apiBase=t.apiBase||"/api",this.path=t.path||"",this.authenticate=t.authenticate||function(){return Promise.resolve({})},this.onUnauthorised=t.onUnauthorised||function(){return Promise.resolve({})},this.defaultHeaders=t.headers||this.DEFAULT_API_HEADERS}var t;return(0,Pe.Z)(e,[{key:"request",value:(t=(0,j.Z)(w().mark((function e(t,n,r){var o,i=this,s=arguments;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=s.length>3&&void 0!==s[3]?s[3]:{},e.next=3,this.callAuthenticate().then((function(){return i.fetch(t,n,r,o)})).then(this.checkForEmptyResponse).then((function(e){return i.checkForErrors(e,o)})).then((function(e){return e.json()})).catch(this.finalCatch);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),function(e,n,r){return t.apply(this,arguments)})},{key:"finalCatch",value:function(e){return void 0===e.errors?Promise.reject({title:"Error parsing"}):Promise.reject(Se({},e))}},{key:"fetch",value:function(e){function t(t,n,r,o){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t,n,r){var o={method:n||"get",headers:this.defaultHeaders,credentials:"include"},i="".concat(this.apiBase).concat(this.path?this.path:"").concat(e||""),s=new URL(i,window.location.origin);if(r.params){var a=Object.keys(r.params).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(r.params[e])})).join("&");s.search=new URLSearchParams(a)}return t&&(o.body=JSON.stringify(t)),fetch(s,o)}))},{key:"checkForEmptyResponse",value:function(e){return 204===e.status?{json:function(){return{}}}:e}},{key:"checkForErrors",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(404===e.status&&t.ignore404)return{json:function(){return{}}};if(401===e.status)return this.onUnauthorised();var n=e.clone?e.clone().json():e;return 422===e.status?n.then((function(e){return Promise.reject(Se(Se({},e),{},{title:"Validation error"}))})):e.status>=400&&e.status<=600?n.then((function(e){return Promise.reject(e.errors[0])})):e}},{key:"callAuthenticate",value:function(){return Promise.resolve(this.authenticate()||!0)}},{key:"create",value:function(e,t){return this.request(e,t,"post")}},{key:"update",value:function(e,t){return this.request(e,t,"put")}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request(e,null,"get",t)}},{key:"destroy",value:function(e){return this.request(e,null,"delete")}}]),e}();function xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}const ke=function(e){var t=new Ce(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(n),!0).forEach((function(t){(0,C.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e));return t};function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(n),!0).forEach((function(t){(0,C.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Te=function(e){return e&&function(e,t){var n=e[t],r=e;return delete r[t],De(De({},r),n)}(e,"attributes")},Ie=function(e,t){var n,r=Ee()(e);return null===(n=Object.values(r[t]||{}))||void 0===n?void 0:n.map((function(e){return function(e,t){var n={};return Object.entries((null==e?void 0:e.relationships)||[]).forEach((function(e){var r=(0,ge.Z)(e,2),o=r[0],i=r[1];n[o]=null==i?void 0:i.data.map((function(e){var n;return Te(null==t||null===(n=t[e.type])||void 0===n?void 0:n[e.id])})).filter((function(e){return!!e}))})),delete e.relationships,De(De({},e),n)}(Te(e),r)}))},Ze=function(){var e=(0,j.Z)(w().mark((function e(t,n){var r,o,i,s,a=arguments;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:{},o=a.length>3&&void 0!==a[3]?a[3]:{},e.next=4,t.get("/".concat(n),{params:r});case 4:return i=e.sent,e.next=7,Ie(i,(null==o?void 0:o.type)||n);case 7:return s=e.sent,e.abrupt("return",{collection:s,meta:i.meta,total:i.meta.total,json:i});case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var Fe=function(e,t){return parseInt(e)===parseInt(t)};const He=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=(0,i.useState)({data:void 0,loading:!1,error:void 0}),o=(0,ge.Z)(r,2),s=o[0],a=o[1],c=ke({apiBase:D.dT}),l=De(De({},(null==t?void 0:t.params)||{}),{},{include:(null==t?void 0:t.include)||[]});return(0,i.useEffect)((function(){null!=t&&t.skip||(a({data:void 0,loading:!0,error:void 0}),Ze(c,e,l,t).then((function(e){a({data:e,loading:!1,error:void 0})})))}),[].concat((0,x.Z)(n),[null==t?void 0:t.skip])),s}("supported_ssgs",{type:"supportedSsg",skip:e}).data;return function(e,n){var r,o=null===(r=(t||{}).collection)||void 0===r?void 0:r.find((function(t){return Fe(t.osMajorVersion,e)&&Fe(t.osMinorVersion,n)}));return(null==o?void 0:o.version)||"N/A"}},Ne=function(e,t){var n=He(),r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.id,r=t.totalHostCount,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onComplete:function(){},onError:function(){}},i=o.onComplete,s=o.onError,a=(0,k.x)(),c=function(t){var n=G(t),r=M(t),o=A(t);return _(_(_(_(_({},e.compliantSystems&&{compliantSystems:n}),{},{compliantSystemCount:n.length},e.nonCompliantSystems&&{nonCompliantSystems:r}),{},{nonCompliantSystemCount:r.length},e.unsupportedSystems&&{unsupportedSystems:o}),{},{unsupportedSystemCount:o.length},e.topTenFailedRules&&{topTenFailedRules:U(t)}),e.userNotes&&{userNotes:e.userNotes})},l=function(e,t){return a.query({query:h,fetchResults:!0,fetchPolicy:"no-cache",variables:{perPage:e,page:t,filter:"",policyId:n}})};return function(){return L(l,r).then((function(e){return e.flatMap((function(e){return e.data.systems.edges.map((function(e){return e.node}))}))})).then((function(e){var t=c(e);return i&&i(t),t})).catch((function(e){if(s)return s(e),[];throw e}))}}(e,t,{onError:function(){(0,S.q)({variant:"danger",title:"Couldn’t download export",description:"Reinitiate this export to try again."})},onComplete:function(){(0,S.q)({variant:"success",title:"Downloading export"})}}),o=function(e){return function(){var t=(0,j.Z)(w().mark((function t(n,r){return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[s().createElement(he,{key:"pdf-page-1",data:be(be({},n),{},{policy:e}),ssgFinder:r})]);case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t),i=function(){var e=(0,j.Z)(w().mark((function e(){var t;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,S.q)({variant:"info",title:"Preparing export",description:"Once complete, your download will start automatically."}),e.next=3,r();case 3:return t=e.sent,e.next=6,o(t,n);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i};function Be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Be(Object(n),!0).forEach((function(t){(0,C.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ge=function(){var e=(0,c.useParams)().report_id,t=(0,m.C3)("/reports/"+e),n=(0,l.a)(v,{variables:{policyId:e}}),r=n.data,o=n.loading,f=n.error,d=null==r?void 0:r.profile,h=function(){var e=(0,i.useState)(y),t=(0,ge.Z)(e,2),n=t[0],r=t[1];return{exportSettings:n,setExportSetting:function(e){return function(t){return r(Ve(Ve({},n),{},(0,C.Z)({},e,t)))}},isValid:Object.keys(n).some((function(e){return 1==("userNotes"!==e&&!!n[e])}))}}(),b=h.exportSettings,g=h.setExportSetting,O=h.isValid,j=Ne(b,d),P="compliance-report--".concat((new Date).toISOString().split("T")[0]),w="Export report",S={ouiaId:"ExportReportButton",variant:"primary",isDisabled:!O},x=function(){return s().createElement(a.Button,S,w)},k=[s().createElement(u.o6,{groupName:"Red Hat Insights",key:"export",label:w,reportName:"Compliance:",type:d&&d.name,fileName:P,asyncFunction:j,buttonProps:S,fallback:s().createElement(x,null),className:"pf-u-mr-sm"}),s().createElement(a.Button,{variant:"secondary",key:"cancel",ouiaId:"ExportReportCancelButton",onClick:function(e){e.preventDefault(),window.history.back()}},"Cancel")];return s().createElement(p.C,{isOpen:!0,width:"440px",ouiaId:"DownloadReportModal",title:"Compliance report",onClose:function(){return t()},actions:k},s().createElement(p.tC,{stateValues:{error:f,data:r,loading:o}},s().createElement(p.K7,{stateKey:"loading"},s().createElement(a.Spinner,null)),s().createElement(p.K7,{stateKey:"data"},s().createElement(E,{policy:d,setExportSetting:g,exportSettings:b}))))};const Me=Ge},25832:()=>{},52361:()=>{},94616:()=>{}}]);
//# sourceMappingURL=../sourcemaps/ReportDetails.60cf72da88bc1b8178448eeeba8cddcf.js.map
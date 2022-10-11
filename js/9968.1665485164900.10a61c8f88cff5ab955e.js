(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[9968],{6474:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n.Z});var n=r(51198)},74560:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(87462),o=r(4942),a=r(70885),i=r(45987),c=r(92950),l=r.n(c),s=r(45697),u=r.n(s),p=r(72971),d=r(76450),m=r(87604),f=r(77346),h=r(82176),y=r(75659),v=r(55817),b=r(16575),g=r(94263),E=["system","profileRules","columns","remediationsEnabled","ansibleSupportFilter","selectedFilter","handleSelect","selectedRules","hidePassed","options","activeFilters"];function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(e){var t=e.system,r=e.profileRules,o=e.columns,s=void 0===o?g.ZP:o,u=e.remediationsEnabled,T=void 0===u||u,w=e.ansibleSupportFilter,O=void 0!==w&&w,P=e.selectedFilter,Z=void 0!==P&&P,j=e.handleSelect,C=e.selectedRules,S=void 0===C?[]:C,R=e.hidePassed,I=void 0!==R&&R,k=e.options,V=e.activeFilters,F=(0,i.Z)(e,E),N=(0,f.ZP)("manageColumns"),L=j?[S,j]:(0,c.useState)([]),B=(0,a.Z)(L,2),D=B[0],H=B[1],A=(0,h.uJ)(r),M=function(e){return(e||[]).filter((function(e){return e.remediationAvailable}))},U=s.filter((function(e){return"Passed"===e.title})).length>0,K=r.filter((function(e){return!!e.profile})).map((function(e){var t=e.profile;return{id:t.id,name:t.name}}));return l().createElement(m.v,(0,n.Z)({"aria-label":"Rules Table",items:A,columns:s,isStickyHeader:!0,filters:x({filterConfig:(0,b.ZP)({showPassFailFilter:U,policies:K,ansibleSupportFilter:O})},I&&{activeFilters:function(e){return x(x({},e),{},{passed:e.passed?e.passed:["failed"]},V)}}),options:x(x(x(x({},p.yi),k),{},{identifier:function(e){return"".concat(e.profile.id,"|").concat(e.refId)},onSelect:(j||T)&&H,preselected:D,detailsComponent:y.Z,emptyRows:(0,v.Z)(s),selectedFilter:Z},T?{dedicatedAction:function(e){var r=e.selected;return l().createElement(d.Z,{allSystems:[{id:t.id,profiles:t.testResultProfiles,ruleObjectsFailed:[],supported:t.supported}],selectedRules:M(r)})}}:{}),{},{manageColumns:N})},F))};w.propTypes={profileRules:u().array,loading:u().bool,hidePassed:u().bool,system:u().object,remediationsEnabled:u().bool,ansibleSupportFilter:u().bool,selectedRules:u().array,selectedFilter:u().bool,handleSelect:u().func,columns:u().array,options:u().object,activeFilters:u().object};const O=w},56085:(e,t,r)=>{"use strict";r.d(t,{Hv:()=>b,uU:()=>m.uU,TB:()=>m.TB,b4:()=>m.b4});var n=r(42982),o=r(45987),a=r(92950),i=r.n(a),c=r(45697),l=r.n(c),s=r(22938),u=r(1963),p=r(56333),d=r(15293),m=r(87968),f=["tabsData","defaultTab","selectedRuleRefIds","setSelectedRuleRefIds","columns","level","ouiaId"],h=function(e,t){var r=e.id,n=e.osMinorVersion;return"rules-".concat(r,"-").concat(n||t)},y=function(e,t){if(e&&0!==e.length){if(!t){var r=e[0];t={id:r.profile.id,osMinorVersion:r.profile.osMinorVersion||r.newOsMinorVersion}}return h(t)}},v=function(e){var t=e.tabsData,r=e.defaultTab,c=e.selectedRuleRefIds,l=e.setSelectedRuleRefIds,v=e.columns,b=e.level,g=void 0===b?0:b,E=e.ouiaId,T=(0,o.Z)(e,f),x=(0,a.useCallback)((function(e,t,r){var o=(c||[]).filter((function(r){return!(0,m.Tn)(r,e,t)})),a={id:e.id,osMinorVersion:t||e.osMinorVersion,ruleRefIds:r};l([a].concat((0,n.Z)(o)))}),[c]);return i().createElement(u.tn,{ouiaId:E,level:g,defaultTab:y(t,r)},null==t?void 0:t.map((function(e){var t=e.profile,r=e.newOsMinorVersion,n=e.systemCount;return i().createElement(s.Tab,{key:h(t,r),eventKey:h(t,r),title:i().createElement("span",null,i().createElement("span",{className:"pf-u-pr-sm"},i().createElement(d.Z,{profile:t,newOsMinorVersion:r})),i().createElement(s.Badge,{isRead:!0},n)),ouiaId:"RHEL ".concat(t.osMajorVersion,".").concat(t.osMinorVersion||r)},i().createElement(p.Z,{profile:t,newOsMinorVersion:r,columns:v,rulesTableProps:T,systemCount:n,selectedRuleRefIds:(0,m.p$)(c,t,r),handleSelect:l?x:void 0}))})))};v.propTypes={tabsData:l().arrayOf(l().shape({profile:l().object.isRequired,selectedRuleRefIds:l().arrayOf(l().string),newOsMinorVersion:l().string,systemCount:l().number})).isRequired,selectedRuleRefIds:l().arrayOf(l().shape({id:l().string,ruleRefIds:l().arrayOf(l().string)})),setSelectedRuleRefIds:l().func,columns:l().arrayOf(l().object),defaultTab:l().shape({id:l().string,osMinorVersion:l().string}),level:l().number,ouiaId:l().string};const b=v},1963:(e,t,r)=>{"use strict";r.d(t,{mR:()=>Ze,MU:()=>Ie,C:()=>Vt,OF:()=>A,C$:()=>mt.Z,MT:()=>Rt.Z,X8:()=>se,_U:()=>k.Z,mf:()=>I,AY:()=>V.Z,Nj:()=>Nt,Qj:()=>zt,nv:()=>Kt,Ir:()=>w,JS:()=>Ct,V_:()=>et,xB:()=>Ge,PL:()=>U,NP:()=>$,o$:()=>_e.Z,w8:()=>qe.Z,_z:()=>dt,ko:()=>ae,Tq:()=>K,vu:()=>re,Ux:()=>F.Z,vm:()=>Ke,Ek:()=>Me,Jm:()=>me,tn:()=>fe,iK:()=>St.Z,Se:()=>ve,K7:()=>he,tC:()=>be,Zr:()=>Zt,bL:()=>ht,UN:()=>ge.Z,Hv:()=>jt.Hv,cT:()=>Ot,Vs:()=>ge.V,fz:()=>Ee.Z,zf:()=>Dt,Oq:()=>H});var n=r(42982),o=r(92950),a=r.n(o),i=r(56645),c=r(96541),l=r(45697),s=r.n(l),u=r(22938),p=r(79886),d=function(e){var t=e.id,r=e.policy,n=e.policyType;return a().createElement(u.TextContent,null,a().createElement(Kt,{to:"/scappolicies/"+t},r.name),a().createElement(V.Z,null,n))};d.propTypes={id:s().string,policy:s().object,policyType:s().string};var m={title:"Name",props:{width:45},sortByProp:"name",renderExport:function(e){return e.name},renderFunc:(0,p.SO)(d)},f=function(e){return"RHEL ".concat(e.osMajorVersion)},h={title:"Operating system",transforms:[i.fitContent],props:{width:15},sortByProp:"osMajorVersion",renderExport:f,renderFunc:function(e,t,r){return f(r)}},y={title:"Systems",props:{width:15},sortByProp:"totalHostCount",renderExport:function(e){return e.totalHostCount},renderFunc:function(e,t,r){return r.totalHostCount>0?r.totalHostCount:a().createElement(ge.Z,{count:r.totalHostCount,variant:"count"})}},v=function(e){return e.businessObjective&&e.businessObjective.title||"--"},b={title:"Business objective",sortByFunction:function(e){var t;return null==e||null===(t=e.businessObjective)||void 0===t?void 0:t.title},renderExport:v,renderFunc:function(e,t,r){return v(r)}},g=function(e){return"".concat(e.complianceThreshold,"%")},E={title:"Compliance threshold",sortByProp:"complianceThreshold",renderExport:g,renderFunc:function(e,t,r){return g(r)}},T=[m,{title:"Policy Type",renderExport:function(e){return e.policyType}},h,y,b,E];const x=[m,h,y,b,E],w=function(){return a().createElement(i.Table,{"aria-label":"policies-table",ouiaId:"PoliciesTable",cells:x,rows:(0,n.Z)(Array(5)).map((function(){return{cells:[{title:a().createElement(c.Z,null),colSpan:5}]}}))},a().createElement(i.TableHeader,null),a().createElement(i.TableBody,null))};var O=r(87462),P=r(45987),Z=r(43047),j=r(56700),C=r(85333),S=["error"],R=function(e){var t=e.error,r=(0,P.Z)(e,S);return t.networkError&&401===t.networkError.statusCode?(window.insights.chrome.auth.logout(!0),!1):t.networkError&&403===t.networkError.statusCode?a().createElement(C.Z,{serviceName:"Compliance"}):t.networkError&&404===t.networkError.statusCode?a().createElement(j.Z,null):a().createElement("section",(0,O.Z)({},r,{className:"pf-l-page__main-section pf-c-page__main-section ins-c-component_invalid-componet"}),a().createElement(Z.ZP,{size:"xl",style:{color:"var(--pf-global--danger-color--100)"}}),a().createElement(u.Title,{headingLevel:"h1"},"There was an error"),a().createElement(u.Text,null,"If you need to contact Red Hat Support about this, this is the exact error:",a().createElement(u.Text,null,t.message)),a().createElement(u.Button,{variant:"link",ouiaId:"ErrorPageGoBackButton",onClick:history.goBack},"Go back"))};R.propTypes={error:s().object};const I=R;var k=r(54288),V=r(22169),F=r(4745),N=(r(56082),r(53947),r(44948),r(73479)),L=r(68778),B=r(11443),D=function(e){return e.rulesPassed+e.rulesFailed===0?a().createElement(N.ZP,{color:"var(--pf-global--disabled-color--100)"}):e.compliant?a().createElement(L.ZP,{color:"var(--pf-global--success-color--200)"}):a().createElement(Z.ZP,{color:"var(--pf-global--danger-color--100)"})},H=function(e){return!1===e.supported?" Unsupported":e.rulesPassed+e.rulesFailed===0?" N/A":" "+(0,B.P0)(e.score)};const A=function(e){return a().createElement(u.Text,null,e.supported?a().createElement(u.Tooltip,{content:"The system compliance score is calculated by OpenSCAP and is a normalized weighted sum of rules selected for this policy."},a().createElement(D,(0,O.Z)({key:"system-compliance-icon-".concat(e.id)},e)),H(e)):H(e))};var M=r(24561);const U=function(){return a().createElement(M.ZP,{speed:2,width:1e3,height:400,viewBox:"0 0 1000 400",backgroundcolor:"#f3f3f3",foregroundcolor:"#ecebeb"},a().createElement("rect",{x:"-3",y:"7",rx:"3",ry:"3",width:"760",height:"19"}),a().createElement("rect",{x:"823",y:"3",rx:"3",ry:"3",width:"67",height:"29"}),a().createElement("rect",{x:"910",y:"3",rx:"3",ry:"3",width:"67",height:"29"}),a().createElement("rect",{x:"6",y:"54",rx:"0",ry:"0",width:"46",height:"19"}),a().createElement("rect",{x:"68",y:"54",rx:"0",ry:"0",width:"46",height:"19"}),a().createElement("rect",{x:"133",y:"54",rx:"0",ry:"0",width:"46",height:"19"}),a().createElement("rect",{x:"3",y:"110",rx:"0",ry:"0",width:"255",height:"17"}),a().createElement("rect",{x:"1",y:"149",rx:"0",ry:"0",width:"47",height:"16"}),a().createElement("rect",{x:"1",y:"185",rx:"0",ry:"0",width:"255",height:"17"}),a().createElement("rect",{x:"-1",y:"224",rx:"0",ry:"0",width:"187",height:"16"}),a().createElement("rect",{x:"-4",y:"267",rx:"0",ry:"0",width:"255",height:"17"}),a().createElement("rect",{x:"-6",y:"306",rx:"0",ry:"0",width:"47",height:"16"}),a().createElement("rect",{x:"-6",y:"342",rx:"0",ry:"0",width:"255",height:"17"}),a().createElement("rect",{x:"-8",y:"381",rx:"0",ry:"0",width:"187",height:"16"}))},K=function(){return a().createElement(M.ZP,{height:320,width:1550,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},a().createElement("rect",{x:"18",y:"50",rx:"4",ry:"4",width:"478",height:"15"}),a().createElement("rect",{x:"19",y:"18",rx:"3",ry:"3",width:"220",height:"9"}),a().createElement("circle",{cx:"118",cy:"156",r:"73"}),a().createElement("rect",{x:"1002",y:"40",rx:"0",ry:"0",width:"69",height:"23"}),a().createElement("rect",{x:"47",y:"77",rx:"0",ry:"0",width:"0",height:"0"}),a().createElement("rect",{x:"36",y:"77",rx:"0",ry:"0",width:"16",height:"0"}),a().createElement("rect",{x:"409",y:"149",rx:"0",ry:"0",width:"0",height:"0"}),a().createElement("rect",{x:"214",y:"145",rx:"0",ry:"0",width:"205",height:"9"}),a().createElement("rect",{x:"216",y:"119",rx:"0",ry:"0",width:"205",height:"9"}),a().createElement("rect",{x:"526",y:"100",rx:"0",ry:"0",width:"431",height:"8"}),a().createElement("rect",{x:"526",y:"122",rx:"0",ry:"0",width:"431",height:"8"}),a().createElement("rect",{x:"526",y:"146",rx:"0",ry:"0",width:"431",height:"8"}),a().createElement("rect",{x:"527",y:"170",rx:"0",ry:"0",width:"431",height:"8"}),a().createElement("rect",{x:"527",y:"194",rx:"0",ry:"0",width:"431",height:"8"}),a().createElement("rect",{x:"527",y:"218",rx:"0",ry:"0",width:"431",height:"8"}),a().createElement("rect",{x:"529",y:"275",rx:"0",ry:"0",width:"231",height:"7"}))};var _=r(56163),q=r.n(_),z=r(83637),G=function(e){var t=e.policy,r="".concat((0,B.P0)(t.complianceThreshold,1),' of rules must be\n  passed for a system to be labeled "Compliant"'),n=t.businessObjective&&t.businessObjective.title||"-",o=q()(t.description||"");return a().createElement(u.Card,{ouiaId:"PolicyDetailsCard"},a().createElement(u.CardHeader,null,a().createElement(u.Text,{style:{fontSize:20}},a().createElement("b",null,"Policy details"))),a().createElement(u.CardBody,null,a().createElement(u.TextContent,null,a().createElement(u.Text,null,a().createElement(z.Z,{policy:t,text:t.complianceThreshold,variant:"threshold",inlineClosedText:r,label:"Compliance threshold (%)",showTextUnderInline:"true",textUnderInline:"A value of 95% or higher is recommended",propertyName:"complianceThreshold",type:"number",className:"pf-c-form-control pf-u-w-100-on-lg","aria-label":"editable text input",id:"policydetails-input-threshold"})),a().createElement(u.Text,null,a().createElement(z.Z,{policy:t,text:n,variant:"business",inlineClosedText:n,label:"Business objective",propertyName:"businessObjective",typeOfInput:"text"})),a().createElement(u.Text,null,a().createElement(z.Z,{component:u.TextArea,policy:t,text:o,variant:"description",inlineClosedText:n,label:"Policy description",propertyName:"description",className:"pf-c-form-control pf-u-w-100-on-lg"})),a().createElement(u.Text,{component:u.TextVariants.h5},"Operating system"),a().createElement(u.Text,{component:u.TextVariants.p},"RHEL ",t.osMajorVersion),a().createElement(u.Text,{component:u.TextVariants.h5},"Policy type "),a().createElement(u.Text,{component:u.TextVariants.p},t.policyType),a().createElement(u.Text,{component:u.TextVariants.h5},"Reference ID"),a().createElement(u.Text,{component:u.TextVariants.p},t.refId))))};G.propTypes={policy:s().object};const $=G;var W=["children"],J=["children"],Q={children:s().node},Y=function(e){var t=e.children,r=(0,P.Z)(e,W);return a().createElement(u.TextListItem,(0,O.Z)({},r,{component:u.TextListItemVariants.dt}),t)};Y.propTypes=Q;var X=function(e){var t=e.children,r=(0,P.Z)(e,J);return a().createElement(u.TextListItem,(0,O.Z)({},r,{component:u.TextListItemVariants.dd}),t)};X.propTypes=Q;var ee=function(e){var t=e.profile;return a().createElement(a().Fragment,null,a().createElement(u.TextList,{component:u.TextListVariants.dl},a().createElement(Y,null,a().createElement(u.Text,{className:"ins-c-non-bold-h2"},"Policy details")),a().createElement(Y,null,"Operating system"),a().createElement(X,null,"RHEL ",t.osMajorVersion),a().createElement(Y,null,"Compliance threshold"),a().createElement(X,null,"".concat((0,B.P0)(t.complianceThreshold,1),' of rules must be\n        passed for a system to be labeled "Compliant"')),a().createElement(Y,null,"Business objective"),a().createElement(X,null,t.businessObjective?t.businessObjective.title:"--")),a().createElement(Kt,{to:"/scappolicies/"+t.policy.id},"View policy"))};ee.propTypes={profile:s().shape({id:s().string,complianceThreshold:s().number,businessObjective:s().object,osMajorVersion:s().string,policy:s().shape({id:s().string}),benchmark:s().shape({version:s().string})})};var te=function(e){var t=e.profile;return a().createElement(u.TextContent,{className:"policy-details"},a().createElement(ee,{profile:t}))};te.propTypes={profile:s().object};const re=te;var ne=r(48273),oe=function(e){var t,r,n=e.percent,o=e.failed;return 100===n?(r="Success",t=ne.ProgressVariant.success):o?(r="Error",t=ne.ProgressVariant.danger):(r="Progress",t=ne.ProgressVariant.info),a().createElement(ne.Progress,{id:"finished-create-policy",value:n,title:r,variant:t,className:"wizard-progress-bar"})};oe.propTypes={percent:s().number,failed:s().bool};const ae=oe;var ie=r(334),ce=r(52710),le=["children","defaultTab","level","ouiaId"],se=function(e){return e.children},ue=function(e,t){return e.find((function(e){return e.props.eventKey===t}))},pe=function(e,t){var r=(0,ce.Wb)(e).split("|");return{levels:r,currentAnchor:r[t]||e}},de=function(e){var t=e.children,r=e.activeKey,n=e.defaultTab,o=ue(t,r);return o?[o]:[n?ue(t,n):t[0]]};de.propTypes={activeTab:s().number,children:s().node};var me=function(e){var t=e.children,r=e.defaultTab,n=e.level,o=pe(r,n).currentAnchor;return a().createElement(de,{activeKey:o},t)};me.propTypes={children:s().node,defaultTab:s().string,level:s().number},me.defaultProps={level:0};var fe=function(e){var t=e.children,r=e.defaultTab,n=e.level,o=e.ouiaId,i=(0,P.Z)(e,le),c=(0,ie.useHistory)().push,l=(0,ie.useLocation)(),s=l.pathname,p=l.state,d=pe(r,n),m=d.currentAnchor,f=d.levels,h=t.map((function(e){return e.props.eventKey})).find((function(e){return e===m}));return a().createElement(u.Tabs,(0,O.Z)({},i,{ouiaId:o,onSelect:function(e,t){e.preventDefault();var r=t.replace("#",""),o=f;o[n]=r,c({state:p,to:s,hash:o.slice(0,n+1).join("|")})},activeKey:h?m:r}),t)};fe.defaultProps={level:0},fe.propTypes={children:s().node,defaultTab:s().string,level:s().number,ouiaId:s().string};var he=function(e){return e.children},ye={stateValues:s().object,children:s().node},ve=function(e){var t=e.stateValues;return e.children.flatMap((function(e){return e})).filter((function(e){return t[e.props.stateKey]}))};ve.propTypes=ye;var be=function(e){var t=e.stateValues,r=e.children;return a().createElement(ve,{stateValues:t},a().createElement(he,{key:"error-state",stateKey:"error"},a().createElement(I,{error:t.error})),r)};be.propTypes=ye;var ge=r(24014),Ee=r(10490),Te=r(4942),xe=["to","hash","children","state","backgroundLocation"];function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?we(Object(r),!0).forEach((function(t){(0,Te.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Pe=function(e){var t=e.to,r=e.hash,n=e.children,o=e.state,i=e.backgroundLocation,c=(0,P.Z)(e,xe),l=Oe(Oe({},(0,ie.useLocation)()),i),s=Oe(Oe({},o),{},{background:l});return a().createElement(Kt,(0,O.Z)({to:{pathname:t,state:s,hash:r}},c),n)};Pe.propTypes={backgroundLocation:s().object,children:s().node,hash:s().string,state:s().object,to:s().string.isRequired};const Ze=Pe;var je=["href"],Ce=["children"],Se=function(e){var t=e.href,r=(0,P.Z)(e,je);return a().createElement(Kt,(0,O.Z)({},r,{to:t}))};Se.propTypes={href:s().string};var Re=function(e){var t=e.children,r=(0,P.Z)(e,Ce);return a().createElement(u.BreadcrumbItem,(0,O.Z)({},r,{component:Se}),t)};Re.propTypes={children:s().node};const Ie=Re;var ke=r(72971),Ve=r(41532),Fe=r(87604),Ne=r(77346),Le=r(51105),Be=r(10218);function De(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function He(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?De(Object(r),!0).forEach((function(t){(0,Te.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):De(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ae=function(e){var t=e.profiles,r=(0,Ne.ZP)("manageColumns"),o=(0,Ne.ZP)("pdfReport"),i=(0,p.jj)(t.map((function(e){return e.policyType})).filter((function(e){return!!e}))),c=(0,p.jj)(t.map((function(e){return e.osMajorVersion})).filter((function(e){return!!e})));return a().createElement(Fe.v,{"aria-label":"Reports",ouiaId:"ReportsTable",columns:[].concat((0,n.Z)(Le.ZP),(0,n.Z)(o&&[Le._C]||[])),items:t,isStickyHeader:!0,filters:{filterConfig:[].concat((0,n.Z)(Be.Yv),(0,n.Z)(i.length>0&&(0,Be.U3)(i)||[]),(0,n.Z)(c.length>0&&(0,Be.W3)(c)||[]),(0,n.Z)(Be.Zl))},options:He(He({},ke.yi),{},{exportable:He(He({},ke.yi.exportable),{},{columns:Le.dj}),manageColumns:r,emptyRows:(0,Ve.fQ)("reports",Le.ZP.length)})})};Ae.propTypes={profiles:s().array};const Me=Ae;var Ue=r(6474);const Ke=function(){return a().createElement(Ue.Z,{title:"No policies are reporting",mainButton:a().createElement(Ze,{to:"/scappolicies/new",component:zt,variant:"primary",ouiaId:"CreateNewPolicyButton"},"Create new policy")})};var _e=r(84206),qe=r(93805),ze=r(91290);const Ge=function(){return a().createElement(u.Tooltip,{position:"right",content:a().createElement(o.Fragment,null,"This is an optional field that can be used to label policies that are related to specific business objectives.")},a().createElement("span",null," ",a().createElement(ze.ZP,{className:"grey-icon"})))};r(23690);var $e=r(48108),We=r(81984);function Je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Qe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Je(Object(r),!0).forEach((function(t){(0,Te.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Je(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ye=function(){return a().createElement(Ze,{to:"/scappolicies/new",component:zt,variant:"primary",ouiaId:"CreateNewPolicyButton"},"Create new policy")},Xe=function(e){var t=e.policies,r=(0,Ne.ZP)("manageColumns"),n=Object.values($e),o=(0,We.Z)(t);return a().createElement(Fe.v,{"aria-label":"Policies",ouiaId:"PoliciesTable",className:"compliance-policies-table",columns:x,items:t,isStickyHeader:!0,filters:{filterConfig:n},options:Qe(Qe({},ke.yi),{},{actionResolver:o,dedicatedAction:Ye,exportable:Qe(Qe({},ke.yi.exportable),{},{columns:T}),manageColumns:r,emptyRows:(0,Ve.fQ)("policies",x.length)})})};Xe.propTypes={policies:s().array.isRequired},Xe.defaultProps={policies:[]};const et=Xe;var tt=r(15671),rt=r(43144),nt=r(97326),ot=r(60136),at=r(82963),it=r(61120),ct=r(6455),lt=r(46314),st=r(74726),ut=r(70597);var pt=function(e){(0,ot.Z)(o,e);var t,r,n=(t=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,it.Z)(t);if(r){var o=(0,it.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,at.Z)(this,e)});function o(){var e;(0,tt.Z)(this,o);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e=n.call.apply(n,[this].concat(r)),(0,Te.Z)((0,nt.Z)(e),"state",{validThreshold:(0,ut.KJ)(e.props.previousThreshold),threshold:e.props.previousThreshold}),(0,Te.Z)((0,nt.Z)(e),"handleThresholdChange",(function(t){e.setState({validThreshold:(0,ut.KJ)(t),threshold:t})})),e}return(0,rt.Z)(o,[{key:"render",value:function(){var e=this.state,t=e.threshold,r=e.validThreshold;return a().createElement(a().Fragment,null,a().createElement(u.FormGroup,{fieldId:"policy-threshold",validated:r?"default":"error",helperTextInvalid:a().createElement(mt.Z,{threshold:t}),helperText:"A value of 95% or higher is recommended",labelIcon:a().createElement(qe.Z,null),label:"Compliance threshold (%)"},a().createElement(ct.Z,{name:"complianceThreshold",id:"complianceThreshold",isRequired:!0,onChange:this.handleThresholdChange,validated:r?"default":"error",defaultValue:t,"aria-label":"compliance threshold",component:st._,type:"number",style:{width:"60%",display:"block"}})))}}]),o}(a().Component);pt.propTypes={previousThreshold:s().number};const dt=(0,lt.Z)({form:"policyForm",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(pt);var mt=r(90061),ft=r(15265);const ht=function(){return a().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:ke.iK},"Supported SSG versions ",a().createElement(ft.ZP,null))};var yt=r(69957);function vt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function bt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?vt(Object(r),!0).forEach((function(t){(0,Te.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):vt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var gt=a().createElement(a().Fragment,null,a().createElement(u.Text,{variant:"p",style:{marginBottom:"1rem"}},"These systems are running unsupported versions of the SCAP Security Guide (SSG) for the version of RHEL installed on them. Assessment of rules failed/passed on these systems is a best-guess effort and may not be accurate."),a().createElement(u.Text,{variant:"p"},"The policy's compliance score excludes these systems.")),Et=function(e){var t=e.children,r=e.variant,n=void 0===r?"plural":r;return a().createElement(u.Popover,{id:"unsupported-popover",maxWidth:"25rem",headerContent:"Unsupported SSG versions",bodyContent:"plural"===n?gt:"This system was using an incompatible version of the SSG at the time this report was generated. Assessment of rules failed/passed on this system is a best-guess effort and may not be accurate.",footerContent:a().createElement(ht,null)},t)};Et.propTypes={children:s().node,variant:s().oneOf(["singular","plural"])};var Tt=function(e){var t=e.children,r=e.content;return a().createElement(u.Tooltip,{content:r,position:"bottom"},t)};Tt.propTypes={content:s().string,children:s().node};var xt=function(e){var t=e.variant,r=e.children,n=e.tooltipProps,o={tooltip:{Component:Tt,componentProps:n},popover:{Component:Et,componentProps:{showHeader:n.showPopupHeader,variant:n.messageVariant}}}[t],i=o.Component,c=o.componentProps;return a().createElement(i,c,r)};xt.propTypes={children:s().node,variant:s().oneOf(["tooltip","popover"]),tooltipProps:s().object};var wt=function(e){var t=e.children,r=e.showWarningIcon,n=void 0===r||r,o=e.showHelpIcon,i=void 0!==o&&o,c=e.style,l=e.tooltipText,s=e.messageVariant,u={variant:l?"tooltip":"popover",tooltipProps:bt(bt({},l&&{content:a().createElement("div",null,l)}),{},{messageVariant:s})},p=l?{}:{cursor:"pointer"};return a().createElement("span",{style:bt(bt({},c),{},{display:"inline-block"})},n&&a().createElement(xt,u,a().createElement("span",{style:p,className:"pf-u-mr-xs"},a().createElement(yt.ZP,{color:"var(--pf-global--warning-color--100)"}))),t,i&&a().createElement(xt,u,a().createElement("span",{style:p,className:"pf-u-ml-xs"},a().createElement(ze.ZP,{className:"grey-icon"}))))};wt.propTypes={showWarningIcon:s().bool,showHelpIcon:s().bool,style:s().object,tooltipText:s().string,children:s().node,variant:s().string,messageVariant:s().string,showPopupHeader:s().bool};const Ot=wt;var Pt=function(e){var t=e.children;return a().createElement(u.Text,{component:"h2",style:{color:"var(--pf-global--Color--200)",lineHeight:"2rem"}},t)};Pt.propTypes={children:s().node};const Zt=Pt;var jt=r(56085);const Ct=function(){return a().createElement(u.Bullseye,null,a().createElement(u.EmptyState,{variant:u.EmptyStateVariant.full},a().createElement(u.Title,{headingLevel:"h2",size:"lg",style:{fontWeight:"bold"}},"No systems on this policy"),a().createElement(u.EmptyStateBody,null,a().createElement(u.TextContent,null,a().createElement(u.Text,{component:u.TextVariants.p},"Add systems to this policy from the systems page"),a().createElement(u.Text,{style:{color:"var(--pf-global--warning-color--100)"}},a().createElement(yt.ZP,null)," ",ge.V)))))};var St=r(74560),Rt=r(86104),It=["children","className"],kt=function(e){var t=e.children,r=e.className,n=void 0===r?"":r,o=(0,P.Z)(e,It);return a().createElement(u.Modal,(0,O.Z)({className:"compliance".concat(n?" ".concat(n):"")},o),t)};kt.propTypes={children:s().node,className:s().string};const Vt=kt;var Ft=function(e){var t=e.compact;return a().createElement(u.Tooltip,{position:"right",content:"A policy of this type is already in use. Only one policy per policy type can be created for a major release of RHEL."},a().createElement(u.Label,{color:"orange",style:{lineHeight:"1.5em"},compact:t},"In use"))};Ft.propTypes={compact:s().boolean};const Nt=Ft;var Lt=r(43707),Bt=function(e){var t=e.children,r=e.requiredPermissions,n=void 0===r?[]:r,o=e.hide,i=void 0!==o&&o,c=(0,Ne.ZP)("rbac"),l=(0,Lt.TE)("compliance",n,!1,!1),s=l.hasAccess,u=l.isLoading;return c?u?"":s?t:!i&&a().createElement(C.Z,{serviceName:"Compliance"}):t};Bt.propTypes={children:s().node,requiredPermissions:s().array,hide:s().bool};const Dt=Bt;var Ht=r(36081),At=["to","children"],Mt=function(e){return e.children};Mt.propTypes={children:s().node};var Ut=function(e){var t=e.to,r=e.children,n=(0,P.Z)(e,At),o=(0,Ht.Z)(t),i=o.hasAccess,c=!o.isLoading&&i,l=c?Mt:u.Tooltip;return a().createElement(l,{content:a().createElement("div",null,"You do not have permissions to perform this action")},a().createElement(ie.Link,(0,O.Z)({to:t},n,{isDisabled:!c}),r))};Ut.propTypes={to:s().oneOfType([s().string,s().object]),children:s().node};const Kt=function(e){var t=(0,Ne.ZP)("rbac")?Ut:ie.Link;return a().createElement(t,e)};var _t=["navigate","children","to"],qt=function(e){var t=e.navigate,r=e.children,n=e.to,o=(0,P.Z)(e,_t);return a().createElement(u.Button,(0,O.Z)({onClick:function(){return t(n)}},o),r)};qt.propTypes={navigate:s().func,children:s().node,to:s().oneOfType([s().string,s().object])};const zt=qt},77346:(e,t,r)=>{"use strict";r.d(t,{Br:()=>c,ZP:()=>l});var n=r(72971),o=r(334),a="insights:compliance",i=function(e,t){var r="enable"===e;r?(console.log("Setting feature value for ".concat(t," to ").concat(r)),localStorage.setItem("".concat(a,":").concat(t),r)):(console.log("Removing feature setting of ".concat(t)),localStorage.removeItem("".concat(a,":").concat(t)))},c=function(){var e=(0,o.useLocation)(),t=e.search,r=e.pathName,n=(0,o.useHistory)();t&&(new URLSearchParams(t).forEach(i),n.push(r))};const l=function(e){if(e){var t=function(e){var t=n.R2[e];return!!localStorage.getItem("".concat(a,":").concat(e))||t}(e);return console.log("Feature ".concat(e," is set to ").concat(t)),t}}},83129:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(92950),o=r.n(n),a=r(22938),i=r(45697),c=r.n(i),l=function(e){var t=e.isChecked,r=e.setActiveFilter;return o().createElement(a.Switch,{label:"Selected only",isChecked:t,onChange:function(){return r("selected",!t)}})};l.propTypes={isChecked:c().bool,setActiveFilter:c().func};const s=l,u=function(e){var t=e.setActiveFilter,r=e.activeFilters,n=!!e.selectedFilter,a={type:"hidden",label:"selectFilter",key:"selected",default:!0,filter:function(e,t){return e.filter((function(e){var r;return(null==e||null===(r=e.rowProps)||void 0===r?void 0:r.selected)===t}))}},i=!0===r.selected;return n?{filterItem:a,toolbarProps:{dedicatedAction:o().createElement(s,{setActiveFilter:t,isChecked:i})}}:{}}},7739:(e,t,r)=>{var n=r(89465),o=r(55189),a=Object.prototype.hasOwnProperty,i=o((function(e,t,r){a.call(e,r)?e[r].push(t):n(e,r,[t])}));e.exports=i},63137:(e,t,r)=>{var n=r(75703),o=r(17779),a=r(6557),i=Object.prototype.toString,c=o((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=i.call(t)),e[t]=r}),n(a));e.exports=c},3674:(e,t,r)=>{var n=r(14636),o=r(280),a=r(98612);e.exports=function(e){return a(e)?n(e):o(e)}},75472:(e,t,r)=>{var n=r(82689),o=r(1469);e.exports=function(e,t,r,a){return null==e?[]:(o(t)||(t=null==t?[]:[t]),o(r=a?void 0:r)||(r=null==r?[]:[r]),n(e,t,r))}},45578:(e,t,r)=>{var n=r(67206),o=r(45652);e.exports=function(e,t){return e&&e.length?o(e,n(t,2)):[]}},52628:(e,t,r)=>{var n=r(47415),o=r(3674);e.exports=function(e){return null==e?[]:n(e,o(e))}},82569:(e,t,r)=>{var n=r(20731),o=r(5976),a=r(29246),i=o((function(e,t){return a(e)?n(e,t):[]}));e.exports=i},64640:(e,t)=>{"use strict";t.Z=function(e){void 0===e&&(e={});var t=/^0/,r=/\s+/g,n=/^\s+|\s+$/g,o=/[^\x00-\x80]/,a=/^0x[0-9a-f]+$/i,i=/(0x[\da-fA-F]+|(^[\+\-]?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?(?=\D|\s|$))|\d+)/g,c=/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,l=String.prototype.toLocaleLowerCase||String.prototype.toLowerCase,s=e.desc?-1:1,u=-s,p=e.insensitive?function(e){return l.call(""+e).replace(n,"")}:function(e){return(""+e).replace(n,"")};function d(e){return e.replace(i,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0")}function m(e,o){return(!e.match(t)||1===o)&&parseFloat(e)||e.replace(r," ").replace(n,"")||0}return function(e,t){var r=p(e),n=p(t);if(!r&&!n)return 0;if(!r&&n)return u;if(r&&!n)return s;var i=d(r),l=d(n),f=r.match(a),h=n.match(a),y=f&&h?parseInt(f[0],16):1!==i.length&&Date.parse(r),v=f&&h?parseInt(h[0],16):y&&n.match(c)&&Date.parse(n)||null;if(v){if(y===v)return 0;if(y<v)return u;if(y>v)return s}for(var b=i.length,g=l.length,E=0,T=Math.max(b,g);E<T;E+=1){var x=m(i[E]||"",b),w=m(l[E]||"",g);if(isNaN(x)!==isNaN(w))return isNaN(x)?s:u;if(o.test(x+w)&&x.localeCompare){var O=x.localeCompare(w);if(O>0)return s;if(O<0)return u;if(E===T-1)return 0}if(x<w)return u;if(x>w)return s;if(""+x<""+w)return u;if(""+x>""+w)return s}return 0}}}}]);
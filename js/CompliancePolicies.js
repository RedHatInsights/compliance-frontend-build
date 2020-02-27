(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1141:function(e,t,n){"use strict";n.r(t);var r=n(484),a=n.n(r),i=n(1),o=n.n(i),l=n(491),s=n(63),c=n(496),u=n.n(c),d=n(464),m=n(481),p=n.n(m),f=n(64),h=n.n(f),b=n(65),g=n.n(b),y=n(66),R=n.n(y),E=n(67),v=n.n(E),q=n(68),O=n.n(q),I=n(0),P=n.n(I),S=n(23),k=n(184),w=n(183),C=n(682),F=n(683),j=n(646),T=n(724),D=n(729),A=n(730),N=n(721),U=n(742),z=n(645),x=n(744),J=n(748),M=n(648),B=n(651),W=n(697),V=n(698),L=n(740),H=n(741),_=n(45),Y=n(124);function $(){var e=a()(["\nquery benchmarksAndProfiles {\n    allBenchmarks {\n        id\n        title\n        version\n        profiles {\n            id\n            name\n            refId\n            description\n            complianceThreshold\n        }\n    }\n    profiles {\n        edges {\n            node {\n                id\n                refId\n                benchmarkId\n            }\n        }\n    }\n}\n"]);return $=function(){return e},e}var G=p()($()),K=function(e){var t=e.selectedBenchmarkId,n=Object(d.b)(G),r=n.data,a=n.error,i=n.loading;if(a)return a;if(i)return o.a.createElement(s.Spinner,null);var c,u,m,p,f=r.allBenchmarks;if(t){c=f.find((function(e){return e.id===t}));var h=(m=r.profiles.edges,p=t,m.filter((function(e){return p===e.node.benchmarkId})).map((function(e){return e.node.refId})));u=c.profiles.filter((function(e){return!h.includes(e.refId)}))}return o.a.createElement(o.a.Fragment,null,o.a.createElement(M.a,null,o.a.createElement(B.a,{component:B.b.h1},"Create SCAP policy"),o.a.createElement(B.a,{component:B.b.h4},"Select the security guide and profile type for this policy.")),o.a.createElement(W.a,null,o.a.createElement(V.a,{label:"Security guide",isRequired:!0,fieldId:"benchmark"},f&&f.map((function(e){var t=e.title,n=e.version,r=e.id;return o.a.createElement(B.a,{key:r},o.a.createElement(L.a,{component:"input",name:"benchmark",type:"radio",value:r,id:r})," ".concat(t," - ").concat(n))}))),o.a.createElement(V.a,{label:"Profile type",isRequired:!0,fieldId:"profile-type"},o.a.createElement(l.k,{profiles:c&&u}))))};K.propTypes={selectedBenchmarkId:P.a.string};var Q=Object(J.a)("policyForm"),X=Object(Y.b)(Object(_.connect)((function(e){return{selectedBenchmarkId:Q(e,"benchmark")}})),Object(H.a)({form:"policyForm",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0}))(K),Z=n(561),ee=n(174);function te(){var e=a()(["\nquery Profile($profileId: String!){\n    profile(id: $profileId) {\n        name\n        refId\n        rules {\n            title\n            severity\n            rationale\n            refId\n            description\n            remediationAvailable\n            identifier\n        }\n    }\n}\n"]);return te=function(){return e},e}var ne=p()(te()),re=[{title:"Rule",transforms:[ee.a]},{title:"Severity",transforms:[ee.a]},{title:o.a.createElement(o.a.Fragment,null,Z.ANSIBLE_ICON," Ansible"),transforms:[ee.a],original:"Ansible"}],ae=function(e){var t=e.profileId,n=Object(d.b)(ne,{variables:{profileId:t}}),r=n.data,a=n.error,i=n.loading;return a||(i?o.a.createElement(s.EmptyTable,null,o.a.createElement(s.Spinner,null)):o.a.createElement(Z.SystemRulesTable,{remediationsEnabled:!1,columns:re,loading:i,profileRules:!i&&[{profile:{refId:r.profile.refId,name:r.profile.name},rules:r.profile.rules}]}))};ae.propTypes={profileId:P.a.string};var ie=Object(J.a)("policyForm"),oe=Object(Y.b)(Object(_.connect)((function(e){return{profileId:JSON.parse(ie(e,"profile")).id}})),Object(H.a)({form:"policyForm",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0}))(ae),le=n(490),se=n(535),ce=function(e){var t=e.change,n=e.selectedSystemIds;return Object(i.useEffect)((function(){n&&t("systems",n)}),[n]),o.a.createElement(o.a.Fragment,null,o.a.createElement(M.a,null,o.a.createElement(B.a,{component:B.b.h1},"Systems"),o.a.createElement(B.a,{component:B.b.h4},"Choose systems to scan with this policy. You can add and remove systems later.")),o.a.createElement(W.a,null,o.a.createElement(se.a,{columns:[{composed:["facts.os_release","display_name"],key:"display_name",title:"System name",props:{width:40}},{key:"facts.compliance.profiles",title:"Profiles",props:{width:40}}],remediationsEnabled:!1,compact:!0,showAllSystems:!0,enableExport:!1})))};ce.propTypes={selectedSystemIds:P.a.array,change:le.a.change},ce.defaultProps={selectedSystemIds:[]};var ue=Object(Y.b)(Object(_.connect)((function(e){var t=e.entities;return{selectedSystemIds:t&&t.rows?t.rows.filter((function(e){return e.selected})).map((function(e){return e.id})):[]}})),Object(H.a)({form:"policyForm",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0}))(ce),de=n(601),me=n(602),pe=function(e){var t=e.profile;return o.a.createElement(o.a.Fragment,null,o.a.createElement(M.a,null,o.a.createElement(B.a,{component:B.b.h1},"Policy details")),o.a.createElement(W.a,{id:"editpolicydetails"},o.a.createElement(V.a,{label:"Policy name",isRequired:!0,fieldId:"name"},o.a.createElement(L.a,{component:me.c,type:"text",isRequired:!0,isDisabled:!0,id:"name",name:"name","aria-describedby":"name"})),o.a.createElement(V.a,{label:"Reference ID",isRequired:!0,fieldId:"refId"},o.a.createElement(L.a,{type:"text",component:me.c,isDisabled:!0,id:"refId",name:"refId","aria-describedby":"refId"})),o.a.createElement(V.a,{label:"Description",fieldId:"description"},o.a.createElement(L.a,{type:"text",component:me.b,id:"description",name:"description","aria-describedby":"description"})),o.a.createElement(de.a,{previousThreshold:t.complianceThreshold})))},fe=Object(J.a)("policyForm");pe.propTypes={profile:P.a.object};var he=Object(Y.b)(Object(_.connect)((function(e){return{profile:JSON.parse(fe(e,"profile")),initialValues:{name:"".concat(JSON.parse(fe(e,"profile")).name),refId:"".concat(JSON.parse(fe(e,"profile")).refId),description:"".concat(JSON.parse(fe(e,"profile")).description),benchmark:fe(e,"benchmark"),profile:fe(e,"profile")}}})),Object(H.a)({form:"policyForm",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0}))(pe),be=n(696),ge=n(649);function ye(){var e=a()(["\nquery review($benchmarkId: String!) {\n    benchmark(id: $benchmarkId) {\n        title,\n        version\n    }\n}\n"]);return ye=function(){return e},e}var Re=p()(ye()),Ee=function(e){var t=e.benchmarkId,n=e.name,r=e.refId,a=e.systemsCount,i=Object(d.b)(Re,{variables:{benchmarkId:t}}),l=i.data,c=i.error,u=i.loading;if(c)return c;if(u)return o.a.createElement(s.Spinner,null);var m=l.benchmark;return o.a.createElement(M.a,null,o.a.createElement(B.a,{component:B.b.h1},"Review"),o.a.createElement(B.a,{component:B.b.h4},"Review your policy before finishing. SCAP security guide, profile type and name cannot be changed after initial creation. Make sure they are correct!"),o.a.createElement("hr",null),o.a.createElement(be.a,{component:be.b.dl},o.a.createElement(ge.a,{component:ge.b.dt},"SCAP security guide"),o.a.createElement(ge.a,{component:ge.b.dd}," ".concat(m.title," - ").concat(m.version)),o.a.createElement(ge.a,{component:ge.b.dt},"Policy type"),o.a.createElement(ge.a,{component:ge.b.dd},n),o.a.createElement(ge.a,{component:ge.b.dt},"Generated ID"),o.a.createElement(ge.a,{component:ge.b.dd},r),o.a.createElement(ge.a,{component:ge.b.dt},"Number of systems"),o.a.createElement(ge.a,{component:ge.b.dd},a)))};Ee.propTypes={benchmarkId:P.a.string,refId:P.a.string,name:P.a.string,systemsCount:P.a.number};var ve=Object(J.a)("policyForm"),qe=Object(_.connect)((function(e){return{benchmarkId:ve(e,"benchmark"),refId:ve(e,"refId"),name:ve(e,"name"),systemsCount:ve(e,"systems").length}}))(Ee),Oe=n(684),Ie=n(727),Pe=n(616),Se=n(725),ke=n(627),we=n(1143),Ce=n(568),Fe=function(e){function t(){var e,n;h()(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=R()(this,(e=v()(t)).call.apply(e,[this].concat(a)))).state={percent:0,message:"Your Compliance policy is being created. After this is created, you may assign it to hosts and customize it."},n.createProfile=function(){var e=n.props,t=e.benchmarkId,r=e.cloneFromProfileId,a=e.refId,i=e.name,o=e.description,l=e.complianceThreshold;return e.client.mutate({mutation:Ce.d,variables:{input:{benchmarkId:t,cloneFromProfileId:r,refId:a,name:i,description:o,complianceThreshold:l}}})},n.associateSystems=function(){var e=n.props,t=e.systemIds,r=e.client,a=e.onWizardFinish,i=n.state.profileId;return r.mutate({mutation:Ce.b,variables:{input:{id:i,systemIds:t}}}).then((function(){n.setState((function(e){return{percent:e.percent+50,message:"Your Compliance policy has been created and systems have been associated to it."}}),a)}))},n}return O()(t,e),g()(t,[{key:"componentDidMount",value:function(){var e=this;this.createProfile().then((function(t){e.setState((function(e){return{message:"Your Compliance policy has been created. Associating systems to it...",percent:e.percent+50,profileId:t.data.createProfile.profile.id}}),e.associateSystems)})).catch((function(t){e.setState({message:t.networkError.message})}))}},{key:"render",value:function(){var e=this.state,t=e.percent,n=e.message;return o.a.createElement(C.a,null,o.a.createElement(F.a,{variant:F.b.full},o.a.createElement(Oe.a,{size:"xl",icon:ke.b}),o.a.createElement("br",null),o.a.createElement(j.a,{size:"lg"},100===t?"Profile creation complete":"Profile creation in progress"),o.a.createElement(T.a,null,o.a.createElement(Ie.a,{id:"finished-create-policy",value:t,measureLocation:Pe.b.outside})),o.a.createElement(T.a,null,n),o.a.createElement(Se.a,null,100===t?o.a.createElement(z.a,{variant:"primary",onClick:this.props.onClose},"Close"):"")))}}]),t}(o.a.Component);Fe.propTypes={benchmarkId:P.a.string.isRequired,client:P.a.object.isRequired,cloneFromProfileId:P.a.string.isRequired,onClose:P.a.func.isRequired,refId:P.a.string.isRequired,name:P.a.string.isRequired,description:P.a.string,systemIds:P.a.array,complianceThreshold:P.a.number,onWizardFinish:P.a.func};var je=Object(J.a)("policyForm"),Te=Object(Y.b)(Object(_.connect)((function(e){return{benchmarkId:je(e,"benchmark"),cloneFromProfileId:JSON.parse(je(e,"profile")).id,refId:je(e,"refId"),name:je(e,"name"),description:je(e,"description"),complianceThreshold:parseFloat(je(e,"complianceThreshold"))||100,systemIds:je(e,"systems")}})),Object(H.a)({form:"policyForm",destroyOnUnmount:!0,forceUnregisterOnUnmount:!0}),we.b)(Fe),De=function(e,t){return!(!e||!t)},Ae=function(e,t){return!(!e||!t)},Ne=function(e){function t(){var e,n;h()(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=R()(this,(e=v()(t)).call.apply(e,[this].concat(a)))).state={isOpen:n.props.isOpen,stepIdReached:1},n.toggleOpen=function(){var e=n.state.isOpen;n.setState({isOpen:!e})},n.onNext=function(e){var t=e.id;n.setState({stepIdReached:n.state.stepIdReached<t?t:n.state.stepIdReached})},n}return O()(t,e),g()(t,[{key:"render",value:function(){var e=this.state,t=e.isOpen,n=e.stepIdReached,r=this.props,a=r.benchmark,i=r.profile,l=r.name,s=r.refId,c=r.onWizardFinish,u=[{id:1,name:"Create SCAP policy",component:o.a.createElement(X,null),enableNext:De(a,i)},{id:2,name:"Details",component:o.a.createElement(he,null),canJumpTo:n>=2,enableNext:Ae(l,s)},{id:3,name:"Rules",component:o.a.createElement(oe,null),canJumpTo:n>=3},{id:4,name:"Systems",component:o.a.createElement(ue,null),canJumpTo:n>=4},{id:5,name:"Review",component:o.a.createElement(qe,null),nextButtonText:"Finish",canJumpTo:n>=5},{id:6,name:"Finished",component:o.a.createElement(Te,{onWizardFinish:c,onClose:this.toggleOpen}),isFinishedStep:!0,canJumpTo:n>=6}];return o.a.createElement(o.a.Fragment,null,o.a.createElement(z.a,{variant:"primary",onClick:this.toggleOpen},"Create new policy"),t&&o.a.createElement(x.a,{isOpen:t,onClose:this.toggleOpen,isFullWidth:!0,isFullHeight:!0,isFooterLeftAligned:!0,title:"Create SCAP policy",description:"Create a new policy for managing SCAP compliance",steps:u,onNext:this.onNext}))}}]),t}(o.a.Component);Ne.propTypes={benchmark:P.a.string,profile:P.a.string,name:P.a.string,refId:P.a.string,isOpen:P.a.bool,onWizardFinish:P.a.func},Ne.defaultProps={isOpen:!1};var Ue=Object(J.a)("policyForm"),ze=Object(_.connect)((function(e){return{benchmark:Ue(e,"benchmark"),profile:Ue(e,"profile"),name:Ue(e,"name"),refId:Ue(e,"refId")}}))(Ne),xe=n(628),Je=n.n(xe),Me=n(726),Be=n(687),We=n(71),Ve=n(736),Le=function(e){var t=e.isModalOpen,n=e.policy,r=e.toggle,a=e.onDelete,l=Object(i.useState)(!1),s=Je()(l,2),c=s[0],u=s[1],m=Object(d.a)(Ce.e,{onCompleted:function(){Object(Ve.a)(Object(We.addNotification)({variant:"success",title:"Removed policy ".concat(n.name)})),a(),r()},onError:function(e){Object(Ve.a)(Object(We.addNotification)({variant:"danger",title:"Error removing policy",description:e.message})),a(),r()}}),p=Je()(m,1)[0],f=n.name,h=n.id;return Object(i.useEffect)((function(){u(!1)}),[n]),o.a.createElement(Me.a,{isSmall:!0,title:"Delete policy",isOpen:t,isFooterLeftAligned:!0,onClose:r,actions:[o.a.createElement(z.a,{key:"destroy","aria-label":"delete",variant:"danger",onClick:function(){return p({variables:{input:{id:h,deleteAllTestResults:c}}})}},"Delete policy"),o.a.createElement(z.a,{key:"cancel",variant:"secondary",onClick:r},"Cancel")]},o.a.createElement(M.a,null,"Are you sure you want to delete ",o.a.createElement("b",null,f),"?"),o.a.createElement(M.a,null,"This cannot be undone."),o.a.createElement("br",null),o.a.createElement(Be.a,{id:"delete-all-reports-".concat(h),isChecked:c,onChange:function(){return u(!c)},"aria-label":"delete-all-reports-checkbox",label:"Delete all reports for this policy"}))};Le.propTypes={policy:P.a.object,toggle:P.a.func,isModalOpen:P.a.bool,onDelete:P.a.func};var He=Le,_e=n(151),Ye=n(708),$e=n.n(Ye),Ge=n(53),Ke=[{cells:[{title:o.a.createElement(s.EmptyTable,null,o.a.createElement(C.a,null,o.a.createElement(F.a,{variant:F.b.full},o.a.createElement(j.a,{headingLevel:"h5",size:"lg"},"No matching policies found"),o.a.createElement(T.a,null,"This filter criteria matches no policies. ",o.a.createElement("br",null)," Try changing your filter settings.")))),props:{colSpan:5}}]}],Qe=function(e){return e.map((function(e){return{cells:[{title:o.a.createElement(Ge.Link,{to:"/policies/"+e.id},e.name),original:e.name},"RHEL ".concat(e.majorOsVersion),e.totalHostCount,e.businessObjective&&e.businessObjective.title||"--","".concat(e.complianceThreshold,"%")]}}))},Xe=function(e){function t(){var e,n;h()(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=R()(this,(e=v()(t)).call.apply(e,[this].concat(a)))).columns=[{title:"Policy name"},{title:"Operating system"},{title:"Systems"},{title:"Business objective"},{title:"Compliance threshold"}],n.state={columns:n.columns,page:1,itemsPerPage:10,search:"",rows:[],currentRows:[],isDeleteModalOpen:!1,policyToDelete:{}},n.componentDidMount=function(){n.setInitialCurrentRows()},n.componentDidUpdate=function(e){n.props.policies!==e.policies&&n.setInitialCurrentRows()},n.setInitialCurrentRows=function(){var e=n.props.policies,t=n.state.itemsPerPage,r=Qe(e);n.setState({currentRows:r.slice(0,t),rows:r,allRows:r})},n.currentRows=function(e,t,r){var a=(r||n.state).rows;if(!a.length)return[];a.length<t&&(t=a.length);var i=(e-1)*t,o=e*t;return a.slice(i,o)},n.setPage=function(e,t){var r=n.state.itemsPerPage;n.changePage(t,r)},n.setPerPage=function(e,t){var r=n.state.page;n.changePage(r,t)},n.changePage=function(e,t){n.setState({currentRows:n.currentRows(e,t),page:e,itemsPerPage:t})},n.handleSearch=$e()((function(e){var t=n.state,r=t.itemsPerPage,a=t.allRows.filter((function(t){return t.cells[0].original.match(e)}));n.setState({search:e,page:1,rows:a,currentRows:a.slice(0,r)})}),500),n.actionResolver=function(e){var t=n.props,r=t.history,a=t.policies,i=n.state,o=i.itemsPerPage,l=i.page,s=e.id+(l-1)*o;return[{title:"View latest results",onClick:function(){return r.push("".concat(_e.b.compliancePolicies,"/").concat(a[s].id))}},{title:"Delete policy",onClick:function(){n.setState((function(e){return{policyToDelete:a[s],isDeleteModalOpen:!e.isDeleteModalOpen}}))}}]},n}return O()(t,e),g()(t,[{key:"render",value:function(){var e=this,t=this.props.onWizardFinish,n=this.state,r=n.rows,a=n.currentRows,i=n.columns,l=n.page,c=n.itemsPerPage,u=n.policyToDelete,d=n.isDeleteModalOpen;return o.a.createElement(o.a.Fragment,null,o.a.createElement(He,{isModalOpen:d,policy:u,onDelete:t,toggle:function(){return e.setState((function(e){return{isDeleteModalOpen:!e.isDeleteModalOpen}}))}}),o.a.createElement(s.TableToolbar,null,o.a.createElement(D.a,{gutter:"md"},o.a.createElement(A.a,null,o.a.createElement(N.a,null,o.a.createElement(s.SimpleTableFilter,{buttonTitle:null,onFilterChange:this.handleSearch,placeholder:"Search"}))),o.a.createElement(A.a,null,r.length," results"),o.a.createElement(A.a,null,o.a.createElement(ze,{onWizardFinish:t}))),o.a.createElement(U.a,{page:l,itemCount:r.length,dropDirection:"down",onSetPage:this.setPage,onPerPageSelect:this.setPerPage,perPage:c})),o.a.createElement(S.b,{"aria-label":"policies",className:"compliance-policies-table",cells:i,actionResolver:this.actionResolver,rows:0===a.length?Ke:a},o.a.createElement(k.a,null),o.a.createElement(w.a,null)),o.a.createElement(s.TableToolbar,{isFooter:!0,className:"ins-c-inventory__table--toolbar"},o.a.createElement(U.a,{page:l,itemCount:r.length,dropDirection:"up",onSetPage:this.setPage,onPerPageSelect:this.setPerPage,perPage:c,variant:U.b.bottom})))}}]),t}(o.a.Component);Xe.propTypes={policies:P.a.array.isRequired,history:P.a.object,onWizardFinish:P.a.func},Xe.defaultProps={policies:[]};var Ze=u()(Xe);function et(){var e=a()(["\n{\n    profiles {\n        edges {\n            node {\n                id\n                name\n                refId\n                complianceThreshold\n                totalHostCount\n                majorOsVersion\n                businessObjective {\n                    id\n                    title\n                }\n            }\n        }\n    }\n}\n"]);return et=function(){return e},e}n.d(t,"CompliancePolicies",(function(){return nt}));var tt=p()(et()),nt=function(){var e=Object(d.b)(tt,{fetchPolicy:"network-only"}),t=e.data,n=e.error,r=e.loading,a=e.refetch;if(n)return o.a.createElement(l.e,{error:n});var i="beta"===window.location.pathname.split("/")[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.PageHeader,{style:{paddingBottom:"22px"},className:i?"beta-page-header":"stable-page-header"},o.a.createElement(s.PageHeaderTitle,{title:"Compliance policies"}),!r&&!i&&o.a.createElement(l.d,null)),o.a.createElement(s.Main,null,r?o.a.createElement(l.g,null):o.a.createElement(Ze,{onWizardFinish:function(){return a()},policies:t.profiles.edges.map((function(e){return e.node}))})))};t.default=u()(nt)},490:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=a.a.any,o=a.a.bool,l=a.a.func,s=a.a.shape,c=a.a.string,u=a.a.oneOfType,d=a.a.object,m=a.a.number,p={anyTouched:o.isRequired,asyncValidating:u([o,c]).isRequired,dirty:o.isRequired,error:i,form:c.isRequired,invalid:o.isRequired,initialized:o.isRequired,initialValues:d,pristine:o.isRequired,pure:o.isRequired,submitting:o.isRequired,submitAsSideEffect:o.isRequired,submitFailed:o.isRequired,submitSucceeded:o.isRequired,valid:o.isRequired,warning:i,array:s({insert:l.isRequired,move:l.isRequired,pop:l.isRequired,push:l.isRequired,remove:l.isRequired,removeAll:l.isRequired,shift:l.isRequired,splice:l.isRequired,swap:l.isRequired,unshift:l.isRequired}),asyncValidate:l.isRequired,autofill:l.isRequired,blur:l.isRequired,change:l.isRequired,clearAsyncError:l.isRequired,clearFields:l.isRequired,clearSubmitErrors:l.isRequired,destroy:l.isRequired,dispatch:l.isRequired,handleSubmit:l.isRequired,initialize:l.isRequired,reset:l.isRequired,resetSection:l.isRequired,touch:l.isRequired,submit:l.isRequired,untouch:l.isRequired,triggerSubmit:o,clearSubmit:l.isRequired},f={checked:o,name:c.isRequired,onBlur:l.isRequired,onChange:l.isRequired,onDragStart:l.isRequired,onDrop:l.isRequired,onFocus:l.isRequired,value:i},h={active:o.isRequired,asyncValidating:o.isRequired,autofilled:o.isRequired,dirty:o.isRequired,dispatch:l.isRequired,error:i,form:c.isRequired,invalid:o.isRequired,pristine:o.isRequired,submitting:o.isRequired,submitFailed:o.isRequired,touched:o.isRequired,valid:o.isRequired,visited:o.isRequired,warning:c},b={dirty:o.isRequired,error:i,form:c.isRequired,invalid:o.isRequired,pristine:o.isRequired,submitFailed:o,submitting:o,valid:o.isRequired,warning:c},g={name:c.isRequired,forEach:l.isRequired,get:l.isRequired,getAll:l.isRequired,insert:l.isRequired,length:m.isRequired,map:l.isRequired,move:l.isRequired,pop:l.isRequired,push:l.isRequired,reduce:l.isRequired,remove:l.isRequired,removeAll:l.isRequired,shift:l.isRequired,swap:l.isRequired,unshift:l.isRequired};s(f).isRequired,s(h).isRequired,s(g).isRequired,s(b).isRequired;t.a=p}}]);
//# sourceMappingURL=../sourcemaps/CompliancePolicies.js.map
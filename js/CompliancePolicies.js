(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{523:function(e,n,t){"use strict";t.d(n,"c",(function(){return d})),t.d(n,"a",(function(){return m})),t.d(n,"d",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(459),i=t.n(r),a=t(456),o=t.n(a);function s(){var e=i()(["\nmutation createBusinessObjective($input: createBusinessObjectiveInput!) {\n    createBusinessObjective(input: $input) {\n        businessObjective {\n            id\n            title\n        }\n    }\n}\n"]);return s=function(){return e},e}function c(){var e=i()(["\nmutation UpdateProfile($input: UpdateProfileInput!) {\n    updateProfile(input: $input) {\n        profile {\n            id,\n            complianceThreshold,\n            businessObjectiveId\n        }\n    }\n}\n"]);return c=function(){return e},e}function l(){var e=i()(["\nmutation associateSystems($input: associateSystemsInput!) {\n    associateSystems(input: $input) {\n        profile {\n            id\n        }\n    }\n}\n"]);return l=function(){return e},e}function u(){var e=i()(["\nmutation CreateProfile($input: createProfileInput!) {\n    createProfile(input: $input) {\n        profile {\n            id\n        }\n    }\n}\n"]);return u=function(){return e},e}var d=o()(u()),m=o()(l()),p=o()(c()),f=o()(s())},722:function(e,n,t){"use strict";var r=t(60),i=t.n(r),a=t(51),o=function(e){var n=e.getIn;return function(e,t){i()(e,"Form value must be specified");var r=t||function(e){return n(e,"form")};return function(t){for(var o=arguments.length,s=new Array(o>1?o-1:0),c=1;c<o;c++)s[c-1]=arguments[c];return i()(s.length,"No fields specified"),1===s.length?n(r(t),e+".values."+s[0]):s.reduce((function(i,o){var s=n(r(t),e+".values."+o);return void 0===s?i:a.a.setIn(i,o,s)}),{})}}};n.a=o(a.a)},733:function(e,n,t){"use strict";t.r(n);var r=t(459),i=t.n(r),a=t(2),o=t.n(a),s=t(466),c=t(457),l=t(472),u=t.n(l),d=t(446),m=t(456),p=t.n(m),f=t(106),h=t.n(f),b=t(105),g=t.n(b),y=t(107),R=t.n(y),v=t(108),E=t.n(v),q=t(109),I=t.n(q),P=t(1),O=t.n(P),S=t(470),w=t(586),k=t(585),F=t(222),C=t(209),T=t(102),j=t(210),A=t(225),N=t(226),U=t(206),z=t(238),D=t(132),J=t(241),x=t(722),B=t(218),$=t(219),W=t(213),V=t(214),_=t(734),H=t(732),M=t(92),Y=t(184);function L(){var e=i()(["\nquery benchmarksAndProfiles {\n    allBenchmarks {\n        id\n        title\n        version\n        profiles {\n            id\n            name\n            refId\n            description\n            complianceThreshold\n        }\n    }\n    profiles {\n        edges {\n            node {\n                id\n                refId\n                benchmarkId\n            }\n        }\n    }\n}\n"]);return L=function(){return e},e}var G=p()(L()),K=function(e){var n=e.selectedBenchmarkId,t=Object(d.b)(G),r=t.data,i=t.error,a=t.loading;if(i)return i;if(a)return o.a.createElement(c.Spinner,null);var l,u,m,p,f=r.allBenchmarks;if(n){l=f.find((function(e){return e.id===n}));var h=(m=r.profiles.edges,p=n,m.filter((function(e){return p===e.node.benchmarkId})).map((function(e){return e.node.refId})));u=l.profiles.filter((function(e){return!h.includes(e.refId)}))}return o.a.createElement(o.a.Fragment,null,o.a.createElement(B.a,null,o.a.createElement($.a,{component:$.b.h1},"Create SCAP policy"),o.a.createElement($.a,{component:$.b.h4},"Select the security guide and profile type for this policy.")),o.a.createElement(W.a,null,o.a.createElement(V.a,{label:"Security guide",isRequired:!0,fieldId:"benchmark"},f&&f.map((function(e){var n=e.title,t=e.version,r=e.id;return o.a.createElement($.a,{key:r},o.a.createElement(_.a,{component:"input",name:"benchmark",type:"radio",value:r,id:r})," ".concat(n," - ").concat(t))}))),o.a.createElement(V.a,{label:"Profile type",isRequired:!0,fieldId:"profile-type"},o.a.createElement(s.i,{profiles:l&&u}))))};K.propTypes={selectedBenchmarkId:O.a.string};var Q=Object(x.a)("policyForm"),X=Object(Y.b)(Object(M.connect)((function(e){return{selectedBenchmarkId:Q(e,"benchmark")}})),Object(H.a)({form:"policyForm",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0}))(K),Z=t(572),ee=t(535);function ne(){var e=i()(["\nquery Profile($profileId: String!){\n    profile(id: $profileId) {\n        name\n        refId\n        rules {\n            title\n            severity\n            rationale\n            refId\n            description\n            remediationAvailable\n            identifier\n        }\n    }\n}\n"]);return ne=function(){return e},e}var te=p()(ne()),re=[{title:"Rule",transforms:[ee.a]},{title:"Severity",transforms:[ee.a]},{title:o.a.createElement(o.a.Fragment,null,Z.ANSIBLE_ICON," Ansible"),transforms:[ee.a],original:"Ansible"}],ie=function(e){var n=e.profileId,t=Object(d.b)(te,{variables:{profileId:n}}),r=t.data,i=t.error,a=t.loading;return i||(a?o.a.createElement(c.EmptyTable,null,o.a.createElement(c.Spinner,null)):o.a.createElement(Z.SystemRulesTable,{remediationsEnabled:!1,columns:re,loading:a,profileRules:!a&&[{profile:{refId:r.profile.refId,name:r.profile.name},rules:r.profile.rules}]}))};ie.propTypes={profileId:O.a.string};var ae=Object(x.a)("policyForm"),oe=Object(Y.b)(Object(M.connect)((function(e){return{profileId:JSON.parse(ae(e,"profile")).id}})),Object(H.a)({form:"policyForm",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0}))(ie),se=O.a.any,ce=O.a.bool,le=O.a.func,ue=O.a.shape,de=O.a.string,me=O.a.oneOfType,pe=O.a.object,fe=O.a.number,he={anyTouched:ce.isRequired,asyncValidating:me([ce,de]).isRequired,dirty:ce.isRequired,error:se,form:de.isRequired,invalid:ce.isRequired,initialized:ce.isRequired,initialValues:pe,pristine:ce.isRequired,pure:ce.isRequired,submitting:ce.isRequired,submitAsSideEffect:ce.isRequired,submitFailed:ce.isRequired,submitSucceeded:ce.isRequired,valid:ce.isRequired,warning:se,array:ue({insert:le.isRequired,move:le.isRequired,pop:le.isRequired,push:le.isRequired,remove:le.isRequired,removeAll:le.isRequired,shift:le.isRequired,splice:le.isRequired,swap:le.isRequired,unshift:le.isRequired}),asyncValidate:le.isRequired,autofill:le.isRequired,blur:le.isRequired,change:le.isRequired,clearAsyncError:le.isRequired,clearFields:le.isRequired,clearSubmitErrors:le.isRequired,destroy:le.isRequired,dispatch:le.isRequired,handleSubmit:le.isRequired,initialize:le.isRequired,reset:le.isRequired,resetSection:le.isRequired,touch:le.isRequired,submit:le.isRequired,untouch:le.isRequired,triggerSubmit:ce,clearSubmit:le.isRequired},be={checked:ce,name:de.isRequired,onBlur:le.isRequired,onChange:le.isRequired,onDragStart:le.isRequired,onDrop:le.isRequired,onFocus:le.isRequired,value:se},ge={active:ce.isRequired,asyncValidating:ce.isRequired,autofilled:ce.isRequired,dirty:ce.isRequired,dispatch:le.isRequired,error:se,form:de.isRequired,invalid:ce.isRequired,pristine:ce.isRequired,submitting:ce.isRequired,submitFailed:ce.isRequired,touched:ce.isRequired,valid:ce.isRequired,visited:ce.isRequired,warning:de},ye={dirty:ce.isRequired,error:se,form:de.isRequired,invalid:ce.isRequired,pristine:ce.isRequired,submitFailed:ce,submitting:ce,valid:ce.isRequired,warning:de},Re={name:de.isRequired,forEach:le.isRequired,get:le.isRequired,getAll:le.isRequired,insert:le.isRequired,length:fe.isRequired,map:le.isRequired,move:le.isRequired,pop:le.isRequired,push:le.isRequired,reduce:le.isRequired,remove:le.isRequired,removeAll:le.isRequired,shift:le.isRequired,swap:le.isRequired,unshift:le.isRequired},ve=(ue(be).isRequired,ue(ge).isRequired,ue(Re).isRequired,ue(ye).isRequired,he),Ee=t(528),qe=function(e){var n=e.change,t=e.selectedSystemIds;return t&&n("systems",t),o.a.createElement(o.a.Fragment,null,o.a.createElement(B.a,null,o.a.createElement($.a,{component:$.b.h1},"Systems"),o.a.createElement($.a,{component:$.b.h4},"Choose systems to scan with this policy. You can add and remove systems later.")),o.a.createElement(W.a,null,o.a.createElement(Ee.a,{columns:[{composed:["facts.os_release","display_name"],key:"display_name",title:"System name",props:{width:40}},{key:"facts.compliance.profiles",title:"Profiles",props:{width:40}}],remediationsEnabled:!1,compact:!0})))};qe.propTypes={selectedSystemIds:O.a.array,change:ve.change},qe.defaultProps={selectedSystemIds:[]};var Ie=Object(Y.b)(Object(M.connect)((function(e){var n=e.entities;return{selectedSystemIds:n&&n.rows?n.rows.filter((function(e){return e.selected})).map((function(e){return e.id})):[]}})),Object(H.a)({form:"policyForm",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0}))(qe),Pe=t(521),Oe=t(522),Se=function(e){var n=e.profile;return o.a.createElement(o.a.Fragment,null,o.a.createElement(B.a,null,o.a.createElement($.a,{component:$.b.h1},"Policy details")),o.a.createElement(W.a,{id:"editpolicydetails"},o.a.createElement(V.a,{label:"Policy name",isRequired:!0,fieldId:"name"},o.a.createElement(_.a,{component:Oe.c,type:"text",isRequired:!0,isDisabled:!0,id:"name",name:"name","aria-describedby":"name"})),o.a.createElement(V.a,{label:"Reference ID",isRequired:!0,fieldId:"refId"},o.a.createElement(_.a,{type:"text",component:Oe.c,isDisabled:!0,id:"refId",name:"refId","aria-describedby":"refId"})),o.a.createElement(V.a,{label:"Description",fieldId:"description"},o.a.createElement(_.a,{type:"text",component:Oe.b,id:"description",name:"description","aria-describedby":"description"})),o.a.createElement(Pe.a,{previousThreshold:n.complianceThreshold})))},we=Object(x.a)("policyForm");Se.propTypes={profile:O.a.object};var ke=Object(Y.b)(Object(M.connect)((function(e){return{profile:JSON.parse(we(e,"profile")),initialValues:{name:"".concat(JSON.parse(we(e,"profile")).name),refId:"".concat(JSON.parse(we(e,"profile")).refId),description:"".concat(JSON.parse(we(e,"profile")).description),benchmark:we(e,"benchmark"),profile:we(e,"profile")}}})),Object(H.a)({form:"policyForm",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0}))(Se),Fe=t(220),Ce=t(221);function Te(){var e=i()(["\nquery review($benchmarkId: String!) {\n    benchmark(id: $benchmarkId) {\n        title,\n        version\n    }\n}\n"]);return Te=function(){return e},e}var je=p()(Te()),Ae=function(e){var n=e.benchmarkId,t=e.name,r=e.refId,i=e.systemsCount,a=Object(d.b)(je,{variables:{benchmarkId:n}}),s=a.data,l=a.error,u=a.loading;if(l)return l;if(u)return o.a.createElement(c.Spinner,null);var m=s.benchmark;return o.a.createElement(B.a,null,o.a.createElement($.a,{component:$.b.h1},"Review"),o.a.createElement($.a,{component:$.b.h4},"Review your policy before finishing. SCAP security guide, profile type and name cannot be changed after initial creation. Make sure they are correct!"),o.a.createElement("hr",null),o.a.createElement(Fe.a,{component:Fe.b.dl},o.a.createElement(Ce.a,{component:Ce.b.dt},"SCAP security guide"),o.a.createElement(Ce.a,{component:Ce.b.dd}," ".concat(m.title," - ").concat(m.version)),o.a.createElement(Ce.a,{component:Ce.b.dt},"Policy type"),o.a.createElement(Ce.a,{component:Ce.b.dd},t),o.a.createElement(Ce.a,{component:Ce.b.dt},"Generated ID"),o.a.createElement(Ce.a,{component:Ce.b.dd},r),o.a.createElement(Ce.a,{component:Ce.b.dt},"Number of systems"),o.a.createElement(Ce.a,{component:Ce.b.dd},i)))};Ae.propTypes={benchmarkId:O.a.string,refId:O.a.string,name:O.a.string,systemsCount:O.a.number};var Ne=Object(x.a)("policyForm"),Ue=Object(M.connect)((function(e){return{benchmarkId:Ne(e,"benchmark"),refId:Ne(e,"refId"),name:Ne(e,"name"),systemsCount:Ne(e,"systems").length}}))(Ae),ze=t(211),De=t(216),Je=t(69),xe=t(212),Be=t(164),$e=t(736),We=t(523),Ve=function(e){function n(){var e,t;h()(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=R()(this,(e=E()(n)).call.apply(e,[this].concat(i)))).state={percent:0,message:"Your Compliance policy is being created. After this is created, you may assign it to hosts and customize it."},t.createProfile=function(){var e=t.props,n=e.benchmarkId,r=e.cloneFromProfileId,i=e.refId,a=e.name,o=e.description,s=e.complianceThreshold;return e.client.mutate({mutation:We.c,variables:{input:{benchmarkId:n,cloneFromProfileId:r,refId:i,name:a,description:o,complianceThreshold:s}}})},t.associateSystems=function(){var e=t.props,n=e.systemIds,r=e.client,i=e.onWizardFinish,a=t.state.profileId;return r.mutate({mutation:We.a,variables:{input:{id:a,systemIds:n}}}).then((function(){t.setState((function(e){return{percent:e.percent+50,message:"Your Compliance policy has been created and systems have been associated to it."}}),i)}))},t}return I()(n,e),g()(n,[{key:"componentDidMount",value:function(){var e=this;this.createProfile().then((function(n){e.setState((function(e){return{message:"Your Compliance policy has been created. Associating systems to it...",percent:e.percent+50,profileId:n.data.createProfile.profile.id}}),e.associateSystems)})).catch((function(n){e.setState({message:n.networkError.message})}))}},{key:"render",value:function(){var e=this.state,n=e.percent,t=e.message;return o.a.createElement(F.a,null,o.a.createElement(C.a,{variant:C.b.full},o.a.createElement(ze.a,{size:"xl",icon:Be.b}),o.a.createElement("br",null),o.a.createElement(T.a,{size:"lg"},100===n?"Profile creation complete":"Profile creation in progress"),o.a.createElement(j.a,null,o.a.createElement(De.a,{id:"finished-create-policy",value:n,measureLocation:Je.b.outside})),o.a.createElement(j.a,null,t),o.a.createElement(xe.a,null,100===n?o.a.createElement(D.a,{variant:"primary",onClick:this.props.onClose},"Close"):"")))}}]),n}(o.a.Component);Ve.propTypes={benchmarkId:O.a.string.isRequired,client:O.a.object.isRequired,cloneFromProfileId:O.a.string.isRequired,onClose:O.a.func.isRequired,refId:O.a.string.isRequired,name:O.a.string.isRequired,description:O.a.string,systemIds:O.a.array,complianceThreshold:O.a.number,onWizardFinish:O.a.func};var _e=Object(x.a)("policyForm"),He=Object(Y.b)(Object(M.connect)((function(e){return{benchmarkId:_e(e,"benchmark"),cloneFromProfileId:JSON.parse(_e(e,"profile")).id,refId:_e(e,"refId"),name:_e(e,"name"),description:_e(e,"description"),complianceThreshold:parseFloat(_e(e,"complianceThreshold"))||100,systemIds:_e(e,"systems")}})),Object(H.a)({form:"policyForm",destroyOnUnmount:!0,forceUnregisterOnUnmount:!0}),$e.b)(Ve),Me=function(e,n){return!(!e||!n)},Ye=function(e,n){return!(!e||!n)},Le=function(e){function n(){var e,t;h()(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=R()(this,(e=E()(n)).call.apply(e,[this].concat(i)))).state={isOpen:t.props.isOpen,stepIdReached:1},t.toggleOpen=function(){var e=t.state.isOpen;t.setState({isOpen:!e})},t.onNext=function(e){var n=e.id;t.setState({stepIdReached:t.state.stepIdReached<n?n:t.state.stepIdReached})},t}return I()(n,e),g()(n,[{key:"render",value:function(){var e=this.state,n=e.isOpen,t=e.stepIdReached,r=this.props,i=r.benchmark,a=r.profile,s=r.name,c=r.refId,l=r.onWizardFinish,u=[{id:1,name:"Create SCAP policy",component:o.a.createElement(X,null),enableNext:Me(i,a)},{id:2,name:"Details",component:o.a.createElement(ke,null),canJumpTo:t>=2,enableNext:Ye(s,c)},{id:3,name:"Rules",component:o.a.createElement(oe,null),canJumpTo:t>=3},{id:4,name:"Systems",component:o.a.createElement(Ie,null),canJumpTo:t>=4},{id:5,name:"Review",component:o.a.createElement(Ue,null),nextButtonText:"Finish",canJumpTo:t>=5},{id:6,name:"Finished",component:o.a.createElement(He,{onWizardFinish:l,onClose:this.toggleOpen}),isFinishedStep:!0,canJumpTo:t>=6}];return o.a.createElement(o.a.Fragment,null,o.a.createElement(D.a,{variant:"primary",onClick:this.toggleOpen},"Create new policy"),n&&o.a.createElement(J.a,{isOpen:n,onClose:this.toggleOpen,isFullWidth:!0,isFullHeight:!0,title:"Create SCAP policy",description:"Create a new policy for managing SCAP compliance",steps:u,onNext:this.onNext}))}}]),n}(o.a.Component);Le.propTypes={benchmark:O.a.string,profile:O.a.string,name:O.a.string,refId:O.a.string,isOpen:O.a.bool,onWizardFinish:O.a.func},Le.defaultProps={isOpen:!1};var Ge=Object(x.a)("policyForm"),Ke=Object(M.connect)((function(e){return{benchmark:Ge(e,"benchmark"),profile:Ge(e,"profile"),name:Ge(e,"name"),refId:Ge(e,"refId")}}))(Le),Qe=t(192),Xe=t(574),Ze=t.n(Xe),en=[{cells:[{title:o.a.createElement(c.EmptyTable,null,o.a.createElement(F.a,null,o.a.createElement(C.a,{variant:C.b.full},o.a.createElement(T.a,{headingLevel:"h5",size:"lg"},"No matching policies found"),o.a.createElement(j.a,null,"This filter criteria matches no policies. ",o.a.createElement("br",null)," Try changing your filter settings.")))),props:{colSpan:5}}]}],nn=function(e){function n(e){var t;return h()(this,n),(t=R()(this,E()(n).call(this,e))).componentDidMount=function(){t.setInitialCurrentRows()},t.componentDidUpdate=function(e){t.props.policies!==e.policies&&t.setInitialCurrentRows()},t.setInitialCurrentRows=function(){var e=t.props.policies,n=t.state.itemsPerPage,r=t.policiesToRows(e);t.setState({currentRows:r.slice(0,n),rows:r,allRows:r})},t.policiesToRows=function(e){return e.map((function(e){return{cells:[e.name,"External",e.totalHostCount,e.businessObjective&&e.businessObjective.title||"--","".concat(e.complianceThreshold,"%")]}}))},t.currentRows=function(e,n,r){var i=(r||t.state).rows;if(!i.length)return[];i.length<n&&(n=i.length);var a=(e-1)*n,o=e*n;return i.slice(a,o)},t.setPage=function(e,n){var r=t.state.itemsPerPage;t.changePage(n,r)},t.setPerPage=function(e,n){var r=t.state.page;t.changePage(r,n)},t.changePage=function(e,n){t.setState({currentRows:t.currentRows(e,n),page:e,itemsPerPage:n})},t.handleSearch=Ze()((function(e){var n=t.state,r=n.itemsPerPage,i=n.allRows.filter((function(n){return n.cells[0].match(e)}));t.setState({search:e,rows:i,currentRows:i.slice(0,r)})}),500),t.actionResolver=function(){var e=t.props,n=e.history,r=e.policies;return[{title:"View latest results",onClick:function(e,t){return n.push("".concat(Qe.b.compliancePolicies,"/").concat(r[t].id))}}]},t.state={columns:[{title:"Policy name"},{title:"Policy type"},{title:"Systems"},{title:"Business objective"},{title:"Compliance threshold"}],page:1,itemsPerPage:10,search:"",rows:[],currentRows:[]},t}return I()(n,e),g()(n,[{key:"render",value:function(){var e=this.props.onWizardFinish,n=this.state,t=n.rows,r=n.currentRows,i=n.columns,a=n.page,s=n.itemsPerPage;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.TableToolbar,null,o.a.createElement(A.a,{gutter:"md"},o.a.createElement(N.a,null,o.a.createElement(U.a,null,o.a.createElement(c.SimpleTableFilter,{buttonTitle:null,onFilterChange:this.handleSearch,placeholder:"Search"}))),o.a.createElement(N.a,null,t.length," results"),o.a.createElement(N.a,null,o.a.createElement(Ke,{onWizardFinish:e}))),o.a.createElement(z.a,{page:a,itemCount:t.length,dropDirection:"down",onSetPage:this.setPage,onPerPageSelect:this.setPerPage,perPage:s})),o.a.createElement(S.b,{"aria-label":"policies",className:"compliance-policies-table",cells:i,actionResolver:this.actionResolver,rows:0===r.length?en:r},o.a.createElement(w.a,null),o.a.createElement(k.a,null)),o.a.createElement(c.TableToolbar,{isFooter:!0,className:"ins-c-inventory__table--toolbar"},o.a.createElement(z.a,{page:a,itemCount:t.length,dropDirection:"up",onSetPage:this.setPage,onPerPageSelect:this.setPerPage,perPage:s,variant:z.b.bottom})))}}]),n}(o.a.Component);nn.propTypes={policies:O.a.array.isRequired,history:O.a.object,onWizardFinish:O.a.func},nn.defaultProps={policies:[]};var tn=u()(nn);function rn(){var e=i()(["\n{\n    profiles {\n        edges {\n            node {\n                id\n                name\n                refId\n                complianceThreshold\n                totalHostCount\n                businessObjective {\n                    id\n                    title\n                }\n            }\n        }\n    }\n}\n"]);return rn=function(){return e},e}t.d(n,"CompliancePolicies",(function(){return on}));var an=p()(rn()),on=function(){var e=Object(d.b)(an,{fetchPolicy:"network-only"}),n=e.data,t=e.error,r=e.loading,i=e.refetch;if(t)return o.a.createElement(s.e,{error:t});var a="beta"===window.location.pathname.split("/")[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.PageHeader,{className:a?"beta-page-header":"stable-page-header"},o.a.createElement(c.PageHeaderTitle,{title:"Compliance policies"}),!r&&!a&&o.a.createElement(s.d,null)),o.a.createElement(c.Main,null,r?o.a.createElement(s.g,null):o.a.createElement(tn,{onWizardFinish:function(){return i()},policies:n.profiles.edges.map((function(e){return e.node}))})))};n.default=u()(on)}}]);
//# sourceMappingURL=../sourcemaps/CompliancePolicies.js.map
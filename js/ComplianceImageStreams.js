(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{487:function(e,n,a){"use strict";a.d(n,"a",(function(){return l})),a.d(n,"b",(function(){return c})),a.d(n,"c",(function(){return s}));var t=a(4),r=a(428),i=a(1),o=a.n(i);function c(e){var n=e.children,a=e.query,i=Object(t.__rest)(e,["children","query"]),o=Object(r.b)(a,i);return n&&o?n(o):null}function l(e){var n=Object(r.a)(e.mutation,e),a=n[0],t=n[1];return e.children?e.children(a,t):null}function s(e){var n=Object(r.c)(e.subscription,e);return e.children&&n?e.children(n):null}!function(e){e.propTypes={client:o.a.object,children:o.a.func.isRequired,fetchPolicy:o.a.string,notifyOnNetworkStatusChange:o.a.bool,onCompleted:o.a.func,onError:o.a.func,pollInterval:o.a.number,query:o.a.object.isRequired,variables:o.a.object,ssr:o.a.bool,partialRefetch:o.a.bool,returnPartialData:o.a.bool}}(c||(c={})),function(e){e.propTypes={mutation:o.a.object.isRequired,variables:o.a.object,optimisticResponse:o.a.oneOfType([o.a.object,o.a.func]),refetchQueries:o.a.oneOfType([o.a.arrayOf(o.a.oneOfType([o.a.string,o.a.object])),o.a.func]),awaitRefetchQueries:o.a.bool,update:o.a.func,children:o.a.func.isRequired,onCompleted:o.a.func,onError:o.a.func,fetchPolicy:o.a.string}}(l||(l={})),function(e){e.propTypes={subscription:o.a.object.isRequired,variables:o.a.object,children:o.a.func,onSubscriptionData:o.a.func,onSubscriptionComplete:o.a.func,shouldResubscribe:o.a.oneOfType([o.a.func,o.a.bool])}}(s||(s={}))},650:function(e,n,a){"use strict";a.r(n);var t=a(2),r=a.n(t),i=a(468),o=a(444),c=a.n(o),l=a(455),s=a.n(l),u=a(487),m=a(440),p=a.n(m),d=a(94),f=a.n(d),b=a(93),h=a.n(b),y=a(95),E=a.n(y),g=a(96),S=a.n(g),v=a(97),O=a.n(v),I=a(443),j=a(85),C=a.n(j),R=a(99),P=a.n(R),_=a(452),q=a.n(_),A=a(1),T=a.n(A),w=a(528),k=a(490),x=a(491),U=function(e){function n(n){var a;if(a=e.call(this,n)||this,!n._reduxForm)throw new Error("FormSection must be inside a component decorated with reduxForm()");return a}return q()(n,e),n.prototype.render=function(){var e=this.props,n=(e._reduxForm,e.children),a=e.name,i=e.component,o=P()(e,["_reduxForm","children","name","component"]);return r.a.isValidElement(n)?Object(t.createElement)(k.a.Provider,{value:C()({},this.props._reduxForm,{sectionPrefix:Object(w.a)(this.props,a)}),children:n}):Object(t.createElement)(k.a.Provider,{value:C()({},this.props._reduxForm,{sectionPrefix:Object(w.a)(this.props,a)}),children:Object(t.createElement)(i,C()({},o,{children:n}))})},n}(t.Component);U.propTypes={name:T.a.string.isRequired,component:x.a},U.defaultProps={component:"div"};var z=Object(k.b)(U),F=a(651),J=a(649),W=a(198),D=a(199),H=a(459),M=Object(J.a)({form:"imagestreamWizard",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})((function(){return r.a.createElement(W.a,null,r.a.createElement(z,{name:"openshift_connection"},r.a.createElement(D.a,{label:"Openshift API URL",isRequired:!0},r.a.createElement(F.a,{name:"api_url",id:"api_url",isRequired:!0,component:H.c,type:"url"})),r.a.createElement(D.a,{label:"Registry API URL",isRequired:!0},r.a.createElement(F.a,{name:"registry_api_url",id:"registry_api_url",isRequired:!0,component:H.c,type:"url"})),r.a.createElement(D.a,{label:"Username",isRequired:!0},r.a.createElement(F.a,{name:"username",id:"username",isRequired:!0,component:H.c,type:"text"})),r.a.createElement(D.a,{label:"Token",isRequired:!0},r.a.createElement(F.a,{name:"token",id:"token",isRequired:!0,component:H.c,type:"text"}))))})),B=Object(J.a)({form:"imagestreamWizard",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})((function(){return r.a.createElement(W.a,null,r.a.createElement(z,{name:"policy"},r.a.createElement(D.a,{isRequired:!0,label:"Which policy do you want to scan for?",fieldId:"policy"},r.a.createElement(F.a,{component:H.a,value:"pci",id:"PCI-DSS v3.2.1 Control Baseline",name:"pci-dss",label:"PCI-DSS v3.2.1 Control Baseline","aria-label":"PCI-DSS v3.2.1 Control Baseline"}),r.a.createElement(F.a,{component:H.a,value:"hipaa",id:"Health Insurance Portability and Accountability Act (HIPAA)",name:"hipaa",label:"Health Insurance Portability and Accountability Act (HIPAA)","aria-label":"Health Insurance Portability and Accountability Act (HIPAA)"}),r.a.createElement(F.a,{component:H.a,value:"cjis",id:"Criminal Justice Information Services (CJIS)",name:"cjis",label:"Criminal Justice Information Services (CJIS)","aria-label":"Criminal Justice Information Services (CJIS)"}),r.a.createElement(F.a,{component:H.a,value:"standard",id:"Standard System Security Profile",name:"standard",label:"Standard System Security Profile","aria-label":"Standard System Security Profile"}),r.a.createElement(F.a,{component:H.a,value:"disa",id:"DISA STIG",name:"stig-rhel7-disa",label:"DISA STIG","aria-label":"DISA STIG"}))))})),N=function(e){function n(){return f()(this,n),E()(this,S()(n).apply(this,arguments))}return O()(n,e),h()(n,[{key:"render",value:function(){return r.a.createElement(W.a,null,r.a.createElement(z,{name:"imagestream"},r.a.createElement(D.a,{label:"Imagestream name (namespace/imagename)",isRequired:!0},r.a.createElement(F.a,{name:"name",id:"name",isRequired:!0,component:H.c,type:"text"}))))}}]),n}(r.a.Component),G=Object(J.a)({form:"imagestreamWizard",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(N),L=a(204),Q=a(196),V=a(197),Y=a(119),K=a(202),X=a(160),Z=a(151),$=a(526),ee=a.n($),ne=function(e){var n=e.openWizard;return r.a.createElement(L.a,null,r.a.createElement(Q.a,null,r.a.createElement(V.a,{size:"xl",title:"Compliance",icon:Z.b}),r.a.createElement("br",null),r.a.createElement(Y.a,{size:"lg"},"No Image Streams"),r.a.createElement("span",{className:ee.a.emptyStateBody},r.a.createElement(K.a,null,"You have not added any Image Streams to scan yet.",r.a.createElement("br",null),"Add an Image Stream to scan and view compliance reports.")),r.a.createElement(X.a,{variant:"primary",onClick:n}," Scan an Image Stream ")))};ne.propTypes={openWizard:T.a.func.isRequired};var ae=ne,te=a(653),re=a(84),ie=a(172),oe=function(e,n){return fetch(ie.b.concat(e),{method:"post",headers:ie.a,body:JSON.stringify(n)}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))},ce=function(e){function n(){var e,a;f()(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(a=E()(this,(e=S()(n)).call.apply(e,[this].concat(r)))).state={isModalOpen:!1},a.handleModalToggle=function(){a.setState((function(e){return{isModalOpen:!e.isModalOpen}}))},a.handleOnClose=function(){var e=a.props,n=e.imagestream,t=e.openshift_connection,r=e.policy;n&&0!==n.name.length&&4===Object.keys(t).length&&oe("/imagestreams",{imagestream:n,openshift_connection:t,policy:r}),a.setState({isModalOpen:!1})},a}return O()(n,e),h()(n,[{key:"render",value:function(){var e=this.state.isModalOpen,n=[r.a.createElement(M,{key:"step1"}),r.a.createElement(B,{key:"step2"}),r.a.createElement(G,{key:"step3"})];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,{key:"step0",openWizard:this.handleModalToggle}),r.a.createElement(I.Wizard,{title:"Add a new Image Stream",isOpen:e,confirmAction:"Scan",onClose:this.handleOnClose,content:n}))}}]),n}(r.a.Component);ce.propTypes={openshift_connection:T.a.shape({openshift_connection:T.a.string,registry_api_url:T.a.string,username:T.a.string,token:T.a.string}),policy:T.a.object,imagestream:T.a.shape({name:T.a.string})};var le=Object(te.a)("imagestreamWizard"),se=Object(re.connect)((function(e){return{openshift_connection:le(e,"openshift_connection"),policy:le(e,"policy"),imagestream:le(e,"imagestream")}}))(ce);function ue(){var e=c()(["\n{\n    allImageStreams {\n        id\n        name\n        profile_names\n        compliant\n    }\n}\n"]);return ue=function(){return e},e}var me=p()(ue()),pe=s()((function(){return r.a.createElement(u.b,{query:me},(function(e){var n=e.data,a=e.error,t=e.loading;return a?r.a.createElement(i.d,{error:a,data:n}):t?"Loading Image Streams...":r.a.createElement(se,null)}))}));n.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.PageHeader,null,r.a.createElement(I.PageHeaderTitle,{title:"Compliance"}),r.a.createElement(i.c,null)),r.a.createElement(I.Main,null,r.a.createElement(pe,null)))}}}]);
//# sourceMappingURL=../sourcemaps/ComplianceImageStreams.js.map
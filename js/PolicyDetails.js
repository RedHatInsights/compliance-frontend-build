(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1263:function(e,t,n){var a=n(1264);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(9)(a,r);a.locals&&(e.exports=a.locals)},1264:function(e,t,n){(t=n(8)(!1)).push([e.i,".threshold-tooltip{margin-bottom:var(--pf-global--spacer--md)}.grey-icon{color:var(--pf-global--Color--200)}.policy-description{padding-top:10px}\n",""]),e.exports=t},1284:function(e,t,n){"use strict";n.r(t),n.d(t,"QUERY",(function(){return $})),n.d(t,"PolicyDetailsQuery",(function(){return L})),n.d(t,"PolicyDetails",(function(){return U}));var a=n(125),r=n.n(a),i=n(123),l=n.n(i),o=n(260),c=n.n(o),s=n(126),p=n.n(s),u=n(127),m=n.n(u),d=n(89),f=n.n(d),h=n(530),y=n.n(h),v=n(511),g=n.n(v),b=n(0),E=n.n(b),I=n(2),T=n.n(I),w=n(505),S=n.n(w),x=n(491),P=n(776),R=n(777),N=n(697),j=n(698),k=n(130),C=n.n(k),A=n(65),O=n(673),D=n(507),H=n(525),W=(n(618),n(802)),q=n(786),Q=n(710),_=n(522),B=n(177),F=function(e){var t=e.loading,n=e.policy;return E.a.createElement(E.a.Fragment,null,E.a.createElement(W.a,{variant:"info",isInline:!0,title:"Rule editing coming soon"}),E.a.createElement(q.a,{variant:q.c.light},E.a.createElement(Q.a,{component:Q.b.p},E.a.createElement("strong",null,"What rules are shown on this list? "),"This view shows rules that are from the latest SSG version (",n.benchmark.version,"). If you are using a different version of SSG for systems in this policy, those rules will be different and can be viewed on the systems details page.")),E.a.createElement(_.SystemRulesTable,{remediationsEnabled:!1,columns:[{title:"Rule",transforms:[B.a]},{title:"Severity",transforms:[B.a]},{title:E.a.createElement(E.a.Fragment,null,_.ANSIBLE_ICON," Ansible"),transforms:[B.a],original:"Ansible"}],loading:t,profileRules:[{profile:{refId:n.refId,name:n.name},rules:n.rules}]}))};F.propTypes={loading:T.a.bool,policy:T.a.shape({name:T.a.string,refId:T.a.string,rules:T.a.array,benchmark:T.a.object})};var G=F,J=function(e){var t=e.policy,n=e.complianceThreshold;return E.a.createElement(H.j,{policyId:t.id,remediationsEnabled:!1,columns:[{key:"facts.compliance.display_name",title:"System name",props:{width:40,isStatic:!0}}],complianceThreshold:n})};J.propTypes={policy:T.a.shape({id:T.a.string.isRequired}),complianceThreshold:T.a.number};var K=J;n(1263);function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f()(e);if(t){var r=f()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return m()(this,n)}}function V(){var e=g()(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        external\n        description\n        totalHostCount\n        compliantHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        policy {\n            id\n            name\n        }\n        businessObjective {\n            id\n            title\n        }\n        rules {\n            title\n            severity\n            rationale\n            refId\n            description\n            remediationAvailable\n            identifier\n        }\n        benchmark {\n            id\n            title\n            version\n        }\n    }\n}\n"]);return V=function(){return e},e}var $=S()(V()),L=function(e){var t=e.policyId,n=e.onNavigateWithProps,a=Object(x.useQuery)($,{variables:{policyId:t}}),r=a.data,i=a.error,l=a.loading,o=a.refetch,c=Object(b.useState)(0),s=y()(c,2),p=s[0],u=s[1],m=r&&!l?r.profile:{},d=window.insights.chrome.isBeta();return m.external&&(i={message:"This is an external SCAP policy."},r=void 0,l=void 0),E.a.createElement(D.q,{stateValues:{error:i,data:r,loading:l}},E.a.createElement(D.p,{stateKey:"loading"},E.a.createElement(A.PageHeader,null,E.a.createElement(D.f,null)),E.a.createElement(A.Main,null,E.a.createElement(A.Spinner,null))),E.a.createElement(D.p,{stateKey:"data"},E.a.createElement(A.PageHeader,{className:"page-header-tabs"},E.a.createElement(P.a,null,E.a.createElement(R.a,{to:"".concat(d?"/beta/insights":"/rhel","/compliance/scappolicies"),onClick:function(e){return n(e)}},"Policies"),E.a.createElement(R.a,{isActive:!0},m.name)),E.a.createElement(N.a,{gutter:"lg"},E.a.createElement(j.a,{xl2:9,xl:8,lg:12,md:12,sm:12},E.a.createElement(A.PageHeaderTitle,{title:m.name})),E.a.createElement(j.a,{className:"policy-details-button",xl2:2,xl:2,lg:2,md:3,sm:3}," "),E.a.createElement(j.a,{className:"policy-details-button",xl2:1,xl:2,lg:2,md:3,sm:3},E.a.createElement(H.f,{policyId:m.id,previousThreshold:m.complianceThreshold,businessObjective:m.businessObjective,onClose:function(){return o()}}))),E.a.createElement(D.h,{activeTab:p,setActiveTab:u})),E.a.createElement(A.Main,null,E.a.createElement(D.t,{activeTab:p},E.a.createElement(D.s,{tabId:0},E.a.createElement(D.g,{policy:m})),E.a.createElement(D.s,{tabId:1},E.a.createElement(G,{policy:m,loading:l})),E.a.createElement(D.s,{tabId:2},E.a.createElement(K,{policy:m,complianceThreshold:m.complianceThreshold}))))))};L.propTypes={policyId:T.a.string,onNavigateWithProps:T.a.func};var U=function(e){p()(n,e);var t=M(n);function n(e){var a;return r()(this,n),(a=t.call(this,e)).onNavigate=O.a.bind(c()(a)),a}return l()(n,[{key:"render",value:function(){return E.a.createElement(L,{policyId:this.props.match.params.policy_id,onNavigateWithProps:this.onNavigate})}}]),n}(E.a.Component);U.propTypes={match:T.a.object};t.default=C()(U)},673:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(143);function r(e,t){e.preventDefault();var n="beta"===window.location.pathname.split("/")[1],r=e.target.pathname.replace(a.b,"");(t||this.props.history).push(n?"/beta/".concat(r):r)}}}]);
//# sourceMappingURL=../sourcemaps/PolicyDetails.js.map
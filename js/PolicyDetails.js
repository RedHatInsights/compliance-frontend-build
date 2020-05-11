(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1162:function(e,t,n){var a=n(1163);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(8)(a,r);a.locals&&(e.exports=a.locals)},1163:function(e,t,n){(t=n(7)(!1)).push([e.i,".threshold-tooltip{margin-bottom:var(--pf-global--spacer--md)}.grey-icon{color:var(--pf-global--Color--200)}.policy-description{padding-top:10px}\n",""]),e.exports=t},1180:function(e,t,n){"use strict";n.r(t),n.d(t,"QUERY",(function(){return $})),n.d(t,"PolicyDetailsQuery",(function(){return L})),n.d(t,"PolicyDetails",(function(){return U}));var a=n(68),r=n.n(a),i=n(67),l=n.n(i),o=n(228),c=n.n(o),s=n(69),p=n.n(s),m=n(70),u=n.n(m),d=n(47),f=n.n(d),h=n(526),y=n.n(h),v=n(480),g=n.n(v),b=n(1),E=n.n(b),I=n(0),T=n.n(I),w=n(474),S=n.n(w),x=n(460),P=n(716),R=n(717),N=n(640),j=n(641),k=n(497),C=n.n(k),A=n(66),O=n(625),q=n(486),D=n(489),H=(n(572),n(742)),W=n(726),_=n(652),B=n(487),F=n(169),G=function(e){var t=e.loading,n=e.policy;return E.a.createElement(E.a.Fragment,null,E.a.createElement(H.a,{variant:"info",isInline:!0,title:"Rule editing coming soon"}),E.a.createElement(W.a,{variant:W.c.light},E.a.createElement(_.a,{component:_.b.p},E.a.createElement("strong",null,"What rules are shown on this list? "),"This view shows rules that are from the latest SSG version (",n.benchmark.version,"). If you are using a different version of SSG for systems in this policy, those rules will be different and can be viewed on the systems details page.")),E.a.createElement(B.SystemRulesTable,{remediationsEnabled:!1,columns:[{title:"Rule",transforms:[F.a]},{title:"Severity",transforms:[F.a]},{title:E.a.createElement(E.a.Fragment,null,B.ANSIBLE_ICON," Ansible"),transforms:[F.a],original:"Ansible"}],loading:t,profileRules:[{profile:{refId:n.refId,name:n.name},rules:n.rules}]}))};G.propTypes={loading:T.a.bool,policy:T.a.shape({name:T.a.string,refId:T.a.string,rules:T.a.array,benchmark:T.a.object})};var J=G,K=function(e){var t=e.policy,n=e.complianceThreshold;return E.a.createElement(D.j,{policyId:t.id,remediationsEnabled:!1,columns:[{key:"facts.compliance.display_name",title:"System name",props:{width:40,isStatic:!0}}],complianceThreshold:n})};K.propTypes={policy:T.a.shape({id:T.a.string.isRequired}),complianceThreshold:T.a.number};var M=K;n(1162);function Q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f()(e);if(t){var r=f()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u()(this,n)}}function V(){var e=g()(["\nquery Profile($policyId: String!){\n    profile(id: $policyId) {\n        id\n        name\n        refId\n        external\n        description\n        totalHostCount\n        compliantHostCount\n        complianceThreshold\n        majorOsVersion\n        lastScanned\n        policy {\n            id\n            name\n        }\n        businessObjective {\n            id\n            title\n        }\n        rules {\n            title\n            severity\n            rationale\n            refId\n            description\n            remediationAvailable\n            identifier\n        }\n        benchmark {\n            id\n            title\n            version\n        }\n    }\n}\n"]);return V=function(){return e},e}var $=S()(V()),L=function(e){var t=e.policyId,n=e.onNavigateWithProps,a=Object(x.b)($,{variables:{policyId:t}}),r=a.data,i=a.error,l=a.loading,o=a.refetch,c=Object(b.useState)(0),s=y()(c,2),p=s[0],m=s[1],u=r&&!l?r.profile:{},d=window.insights.chrome.isBeta();return u.external&&(i={message:"This is an external SCAP policy."},r=void 0,l=void 0),E.a.createElement(q.p,{stateValues:{error:i,data:r,loading:l}},E.a.createElement(q.o,{stateKey:"loading"},E.a.createElement(A.PageHeader,null,E.a.createElement(q.f,null)),E.a.createElement(A.Main,null,E.a.createElement(A.Spinner,null))),E.a.createElement(q.o,{stateKey:"data"},E.a.createElement(A.PageHeader,{className:"page-header-tabs"},E.a.createElement(P.a,null,E.a.createElement(R.a,{to:"".concat(d?"/beta/insights":"/rhel","/compliance/scappolicies"),onClick:function(e){return n(e)}},"Policies"),E.a.createElement(R.a,{isActive:!0},u.name)),E.a.createElement(N.a,{gutter:"lg"},E.a.createElement(j.a,{xl2:9,xl:8,lg:12,md:12,sm:12},E.a.createElement(A.PageHeaderTitle,{title:u.name})),E.a.createElement(j.a,{className:"policy-details-button",xl2:2,xl:2,lg:2,md:3,sm:3}," "),E.a.createElement(j.a,{className:"policy-details-button",xl2:1,xl:2,lg:2,md:3,sm:3},E.a.createElement(D.f,{policyId:u.id,previousThreshold:u.complianceThreshold,businessObjective:u.businessObjective,onClose:function(){return o()}}))),E.a.createElement(q.h,{activeTab:p,setActiveTab:m})),E.a.createElement(A.Main,null,E.a.createElement(q.r,{activeTab:p},E.a.createElement(q.q,{tabId:0},E.a.createElement(q.g,{policy:u})),E.a.createElement(q.q,{tabId:1},E.a.createElement(J,{policy:u,loading:l})),E.a.createElement(q.q,{tabId:2},E.a.createElement(M,{policy:u,complianceThreshold:u.complianceThreshold}))))))};L.propTypes={policyId:T.a.string,onNavigateWithProps:T.a.func};var U=function(e){p()(n,e);var t=Q(n);function n(e){var a;return r()(this,n),(a=t.call(this,e)).onNavigate=O.a.bind(c()(a)),a}return l()(n,[{key:"render",value:function(){return E.a.createElement(L,{policyId:this.props.match.params.policy_id,onNavigateWithProps:this.onNavigate})}}]),n}(E.a.Component);U.propTypes={match:T.a.object};t.default=C()(U)},625:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(129);function r(e,t){e.preventDefault();var n="beta"===window.location.pathname.split("/")[1],r=e.target.pathname.replace(a.b,"");(t||this.props.history).push(n?"/beta/".concat(r):r)}}}]);
//# sourceMappingURL=../sourcemaps/PolicyDetails.js.map
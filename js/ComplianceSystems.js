(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{685:function(e,t,n){"use strict";var a=n(127),r=n.n(a),i=n(128),o=n.n(i),s=n(129),c=n.n(s),l=n(130),m=n.n(l),u=n(131),p=n.n(u),d=n(2),h=n(0),f=n.n(h),y=function(e){function t(e){return r()(this,t),c()(this,m()(t).call(this,e))}return p()(t,e),o()(t,[{key:"render",value:function(){var e=this.props.error;return 401===e.networkError.statusCode&&window.insights.chrome.auth.logout(),"Oops! There was an error loading Compliance data. If you need to contact Red Hat Support about this, this is the exact error: "+e.networkError.statusCode+" "+e}}]),t}(d.Component);y.propTypes={error:f.a.object},t.a=y},686:function(e,t,n){"use strict";var a=n(127),r=n.n(a),i=n(128),o=n.n(i),s=n(129),c=n.n(s),l=n(130),m=n.n(l),u=n(131),p=n.n(u),d=n(340),h=n.n(d),f=n(220),y=n(0),b=n.n(y),v=n(2),E=n.n(v),w=n(241),k=n(677),g=n(703),C=n(687),P=n(704),S=function(e){function t(e){var n;return r()(this,t),(n=c()(this,m()(t).call(this,e))).redirect=n.redirect.bind(h()(h()(n))),n}return p()(t,e),o()(t,[{key:"redirect",value:function(e){this.props.history.push(e.itemId)}},{key:"render",value:function(){return E.a.createElement(E.a.Fragment,null,E.a.createElement(k.b,{onSelect:this.redirect,"aria-label":"Compliance Tabs"},E.a.createElement(g.a,{variant:C.a.horizontal},E.a.createElement(P.a,{preventDefault:!0,isActive:this.props.match.path===w.b.compliancePolicies,itemId:w.b.compliancePolicies},"Policies"),E.a.createElement(P.a,{preventDefault:!0,isActive:this.props.match.path===w.b.complianceSystems,itemId:w.b.complianceSystems},"Systems"))))}}]),t}(v.Component);S.propTypes={history:b.a.object,match:b.a.object},t.a=Object(f.routerParams)(S)},769:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(665),o=n.n(i),s=n(220),c=n(221),l=n(670),m=n.n(l),u=n(708),p=n(685);function d(){var e=o()(["\n{\n    allSystems {\n        id\n        name\n        profile_names\n        compliant\n    }\n}\n"]);return d=function(){return e},e}var h=m()(d()),f=Object(s.routerParams)(function(){return r.a.createElement(c.Query,{query:h},function(e){var t=e.data,n=e.error,a=e.loading;if(n)return r.a.createElement(p.a,{error:n});if(a)return"Loading Systems...";var i=t.allSystems;return r.a.createElement("div",{className:"systems-table"},r.a.createElement(u.a,{disableRemediations:!0,items:i,columns:[{composed:["facts.os_release","display_name"],key:"display_name",title:"Name",props:{width:40}},{key:"facts.compliance.profiles",title:"Profiles",props:{width:50}},{key:"facts.compliance.compliant",title:"Compliant",props:{width:10}}]}))})}),y=n(686);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.PageHeader,null,r.a.createElement(s.PageHeaderTitle,{title:"Compliance"}),r.a.createElement(y.a,null)),r.a.createElement(s.Main,null,r.a.createElement(f,null)))}}}]);
//# sourceMappingURL=../sourcemaps/ComplianceSystems.js.map
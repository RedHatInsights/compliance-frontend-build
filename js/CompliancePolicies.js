(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{467:function(e,t,n){"use strict";var a=n(92),r=n.n(a),i=n(91),o=n.n(i),l=n(93),c=n.n(l),s=n(94),p=n.n(s),m=n(95),u=n.n(m),f=n(450),h=n.n(f),d=n(1),y=n.n(d),g=n(2),v=n.n(g),b=n(178),E=n(113),x=n(201),_=n(468),w=n.n(_),T=function(e){function t(){var e,n;r()(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=c()(this,(e=p()(t)).call.apply(e,[this].concat(i)))).state={tabPaths:{0:b.b.compliancePolicies,1:b.b.complianceSystems}},n.redirect=function(e,t){var a=n.state.tabPaths;n.props.history.push(a[t])},n}return u()(t,e),o()(t,[{key:"render",value:function(){var e=this.props.match.path,t=this.state.tabPaths,n=Number(w()(t)[e]),a=[v.a.createElement(E.a,{title:"Policies",key:0,eventKey:0}),v.a.createElement(E.a,{title:"Systems",key:1,eventKey:1})];return v.a.createElement(x.a,{activeKey:n,onSelect:this.redirect,"aria-label":"Compliance Tabs"},a)}}]),t}(g.Component);T.propTypes={history:y.a.object,match:y.a.object},t.a=h()(T)},468:function(e,t,n){var a=n(469),r=n(470),i=n(441),o=Object.prototype.toString,l=r((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=o.call(t)),e[t]=n}),a(i));e.exports=l},469:function(e,t){e.exports=function(e){return function(){return e}}},470:function(e,t,n){var a=n(471);e.exports=function(e,t){return function(n,r){return a(n,e,t(r),{})}}},471:function(e,t,n){var a=n(453);e.exports=function(e,t,n,r){return a(e,(function(e,a,i){t(r,n(e),a,i)})),r}},483:function(e,t,n){"use strict";var a=n(92),r=n.n(a),i=n(91),o=n.n(i),l=n(93),c=n.n(l),s=n(94),p=n.n(s),m=n(95),u=n.n(m),f=n(2),h=n(1),d=n.n(h),y=function(e){function t(e){return r()(this,t),c()(this,p()(t).call(this,e))}return u()(t,e),o()(t,[{key:"render",value:function(){var e=this.props.error;return e.networkError&&401===e.networkError.statusCode&&window.insights.chrome.auth.logout(),"Oops! There was an error loading Compliance data. If you need to contact Red Hat Support about this, this is the exact error:  "+e.message}}]),t}(f.Component);y.propTypes={error:d.a.object},t.a=y},504:function(e,t,n){var a=n(505);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(10)(a,r);a.locals&&(e.exports=a.locals)},505:function(e,t,n){(e.exports=n(8)(!1)).push([e.i,".pf-c-empty-state{--pf-c-empty-state--Padding: var(--pf-global--spacer--xl);--pf-c-empty-state__icon--MarginBottom: var(--pf-global--spacer--lg);--pf-c-empty-state__icon--FontSize: var(--pf-global--icon--FontSize--xl);--pf-c-empty-state__icon--Color: var(--pf-global--icon--Color--light);--pf-c-empty-state__body--MarginTop: var(--pf-global--spacer--md);--pf-c-empty-state__body--Color: var(--pf-global--Color--200);--pf-c-empty-state--c-button--MarginTop: var(--pf-global--spacer--xl);--pf-c-empty-state--c-button__secondary--MarginTop: var(--pf-global--spacer--sm);--pf-c-empty-state__secondary--MarginTop: var(--pf-global--spacer--xl);--pf-c-empty-state__secondary--MarginRight: calc(var(--pf-global--spacer--xs) * -1);--pf-c-empty-state__secondary--MarginBottom: calc(var(--pf-global--spacer--xs) * -1);--pf-c-empty-state__secondary--c-button--MarginRight: var(--pf-global--spacer--xs);--pf-c-empty-state__secondary--c-button--MarginBottom: var(--pf-global--spacer--xs);--pf-c-empty-state--m-sm--MaxWidth: 25rem;--pf-c-empty-state--m-lg--MaxWidth: 37.5rem;padding:var(--pf-c-empty-state--Padding);text-align:center}.pf-c-empty-state>.pf-c-button.pf-m-primary,.pf-c-empty-state .pf-c-empty-state__primary{margin-top:var(--pf-c-empty-state--c-button--MarginTop)}.pf-c-empty-state>.pf-c-button.pf-m-primary+.pf-c-empty-state__secondary,.pf-c-empty-state .pf-c-empty-state__primary+.pf-c-empty-state__secondary{margin-top:var(--pf-c-empty-state--c-button__secondary--MarginTop)}.pf-c-empty-state.pf-m-sm{max-width:var(--pf-c-empty-state--m-sm--MaxWidth)}.pf-c-empty-state.pf-m-lg{max-width:var(--pf-c-empty-state--m-lg--MaxWidth)}.pf-c-empty-state__icon{margin-bottom:var(--pf-c-empty-state__icon--MarginBottom);font-size:var(--pf-c-empty-state__icon--FontSize);color:var(--pf-c-empty-state__icon--Color)}.pf-c-empty-state__body{margin-top:var(--pf-c-empty-state__body--MarginTop);color:var(--pf-c-empty-state__body--Color)}.pf-c-empty-state__secondary{display:flex;flex-wrap:wrap;justify-content:center;margin-top:var(--pf-c-empty-state__secondary--MarginTop);margin-right:var(--pf-c-empty-state__secondary--MarginRight);margin-bottom:var(--pf-c-empty-state__secondary--MarginBottom)}.pf-c-empty-state__secondary>.pf-c-button{margin-right:var(--pf-c-empty-state__secondary--c-button--MarginRight);margin-bottom:var(--pf-c-empty-state__secondary--c-button--MarginBottom)}.pf-m-redhat-font .pf-c-empty-state>.pf-c-title{font-size:var(--pf-global--FontSize--xl)}\n",""])},506:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(1),o=n.n(i),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var s=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a)));return i.state={},i.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},i.elements={},i.onResize=i.onResize.bind(i),i.onTruncate=i.onTruncate.bind(i),i.calcTargetWidth=i.calcTargetWidth.bind(i),i.measureWidth=i.measureWidth.bind(i),i.getLines=i.getLines.bind(i),i.renderLine=i.renderLine.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,a=document.createElement("canvas");this.canvasContext=a.getContext("2d"),t((function(){e&&e.parentNode.removeChild(e)})),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"innerText",value:function(e){var t=document.createElement("div"),n="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var a=t[n],r=document.createElement("div");return r.innerHTML="foo<br/>bar","foo\nbar"!==r[n].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),a=t[n]),a}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"==typeof t&&(this.timeout=window.requestAnimationFrame((function(){t(e)})))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,n=this.calcTargetWidth,a=this.canvasContext,r=this.props.width;if(t){var i=r||Math.floor(t.parentNode.getBoundingClientRect().width);if(!i)return window.requestAnimationFrame((function(){return n(e)}));var o=window.getComputedStyle(t),l=[o["font-weight"],o["font-style"],o["font-size"],o["font-family"]].join(" ");a.font=l,this.setState({targetWidth:i},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,n=t.lines,a=t.ellipsis,i=t.trimWhitespace,o=this.state.targetWidth,l=this.innerText,c=this.measureWidth,s=this.onTruncate,p=this.trimRight,m=[],u=l(e.text).split("\n").map((function(e){return e.split(" ")})),f=!0,h=this.ellipsisWidth(this.elements.ellipsis),d=1;d<=n;d++){var y=u[0];if(0!==y.length){var g=y.join(" ");if(c(g)<=o&&1===u.length){f=!1,m.push(g);break}if(d===n){for(var v=y.join(" "),b=0,E=v.length-1;b<=E;){var x=Math.floor((b+E)/2);c(v.slice(0,x+1))+h<=o?b=x+1:E=x-1}var _=v.slice(0,b);if(i)for(_=p(_);!_.length&&m.length;){_=p(m.pop())}g=r.a.createElement("span",null,_,a)}else{for(var w=0,T=y.length-1;w<=T;){var C=Math.floor((w+T)/2);c(y.slice(0,C+1).join(" "))<=o?w=C+1:T=C-1}if(0===w){d=n-1;continue}g=y.slice(0,w).join(" "),u[0].splice(0,w)}m.push(g)}else m.push(),u.shift(),d--}return s(f),m}},{key:"renderLine",value:function(e,t,n){if(t===n.length-1)return r.a.createElement("span",{key:t},e);var a=r.a.createElement("br",{key:t+"br"});return e?[r.a.createElement("span",{key:t},e),a]:a}},{key:"render",value:function(){var e=this,t=this.elements.target,n=this.props,a=n.children,i=n.ellipsis,o=n.lines,c=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(n,["children","ellipsis","lines"]),s=this.state.targetWidth,p=this.getLines,m=this.renderLine,u=this.onTruncate,f=void 0;return"undefined"!=typeof window&&!(!t||!s)&&(o>0?f=p().map(m):(f=a,u(!1))),delete c.onTruncate,delete c.trimWhitespace,r.a.createElement("span",l({},c,{ref:function(t){e.elements.target=t}}),r.a.createElement("span",null,f),r.a.createElement("span",{ref:function(t){e.elements.text=t}},a),r.a.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},i))}}]),t}(a.Component);s.propTypes={children:o.a.node,ellipsis:o.a.node,lines:o.a.oneOfType([o.a.oneOf([!1]),o.a.number]),trimWhitespace:o.a.bool,width:o.a.number,onTruncate:o.a.func},s.defaultProps={children:"",ellipsis:"…",lines:1,trimWhitespace:!1,width:0},t.default=s},649:function(e,t,n){"use strict";n.r(t);var a=n(444),r=n.n(a),i=n(2),o=n.n(i),l=n(467),c=n(439),s=n(504),p=n.n(s),m=n(158),u=n(450),f=n.n(u),h=n(92),d=n.n(h),y=n(91),g=n.n(y),v=n(93),b=n.n(v),E=n(94),x=n.n(E),_=n(95),w=n.n(_),T=n(503),C=n(506),M=n(190),W=n(191),k=n(203),O=n(202),P=n(205),S=n(206),j=n(117),z=n(646),H=n(638),L=(n(554),n(473)),R=function(e){function t(e){var n;return d()(this,t),(n=b()(this,x()(t).call(this,e))).onMouseover=function(){n.setState({cardTitle:n.policy.name})},n.onMouseout=function(){n.setState({cardTitle:o.a.createElement(C.default,{lines:1},n.policy.name)})},n.policy=e.policy,n.state={cardTitle:o.a.createElement(C.default,{lines:1},n.policy.name)},n}return w()(t,e),g()(t,[{key:"render",value:function(){var e=this.policy.compliantHostCount,t=this.policy.totalHostCount,n=[{x:"Compliant",y:e},{x:"Non-compliant",y:t-e}],a=Object(L.a)(Math.floor(n[0].y/(n[0].y+n[1].y)*100));return o.a.createElement(M.a,{"widget-id":this.policy.refId},o.a.createElement(W.a,null,o.a.createElement(k.a,{style:{fontWeight:"500",color:"var(--pf-global--Color--200)"},component:k.b.small},"External policy"),o.a.createElement(O.a,null,o.a.createElement(k.a,{onMouseEnter:this.onMouseover.bind(this),onMouseLeave:this.onMouseout.bind(this),style:{fontWeight:"500"},component:k.b.h4},this.state.cardTitle)),o.a.createElement(O.a,{className:"chart-title"},o.a.createElement(P.a,null,o.a.createElement(S.a,{style:{display:"inline-flex"},span:12},o.a.createElement(O.a,null,o.a.createElement("span",{style:{fontSize:"30px",fontWeight:"500"}},e),o.a.createElement("span",{style:{fontWeight:"500",color:"var(--pf-global--Color--200)"}}," ","of"," "),o.a.createElement("span",{style:{fontSize:"30px",fontWeight:"500"}},t))),o.a.createElement(S.a,{span:12},o.a.createElement(k.a,{style:{fontWeight:"500",color:"var(--pf-global--Color--200)"},component:k.b.small},"Systems meet compliance threshold")),o.a.createElement(S.a,{span:6},o.a.createElement(O.a,null,o.a.createElement(k.a,{component:k.b.small,style:{fontSize:"16px"}},o.a.createElement(T.a,{to:"/policies/"+this.policy.id},"More details")))),o.a.createElement(S.a,{span:6,style:{textAlign:"right"}},this.policy.businessObjective&&o.a.createElement(j.a,{isReadOnly:!0},this.policy.businessObjective.title))))),o.a.createElement("hr",null),o.a.createElement(W.a,null,o.a.createElement(P.a,null,o.a.createElement(S.a,{style:{textAlign:"center"},span:12},o.a.createElement("div",{className:"chart-inline"},o.a.createElement("div",{className:"card-chart-container"},o.a.createElement(z.a,{data:n,identifier:this.policy.name.replace(/ /g,""),innerRadius:122,themeColor:H.q.blue,themeVariant:H.r.light,title:a,subTitle:"Systems above threshold",height:300,width:300})))))))}}]),t}(o.a.Component),N=n(426),A=n(438),B=n.n(A),F=n(483),I=n(499),q=n(204),K=n(196),U=n(197),D=n(118),G=n(217),J=n(160);function V(){var e=r()(["\n{\n    allProfiles {\n        id\n        name\n        refId\n        description\n        totalHostCount\n        compliantHostCount\n        businessObjective {\n            id\n            title\n        }\n    }\n}\n"]);return V=function(){return e},e}var $=B()(V()),Q=function(){return o.a.createElement(M.a,null,o.a.createElement(I.default,{height:400,width:400,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},o.a.createElement("rect",{x:"6",y:"31",rx:"4",ry:"4",width:"293",height:"15"}),o.a.createElement("rect",{x:"8",y:"15",rx:"3",ry:"3",width:"85",height:"6"}),o.a.createElement("rect",{x:"7",y:"112",rx:"3",ry:"3",width:"220",height:"10"}),o.a.createElement("circle",{cx:"190",cy:"256",r:"109"}),o.a.createElement("rect",{x:"8",y:"73",rx:"0",ry:"0",width:"69",height:"23"}),o.a.createElement("rect",{x:"47",y:"77",rx:"0",ry:"0",width:"0",height:"0"}),o.a.createElement("rect",{x:"36",y:"77",rx:"0",ry:"0",width:"16",height:"0"})))},X=function(){return o.a.createElement(P.a,{gutter:"md"},o.a.createElement(S.a,{sm:12,md:12,lg:6,xl:4},o.a.createElement(Q,null)),o.a.createElement(S.a,{sm:12,md:12,lg:6,xl:4},o.a.createElement(Q,null)),o.a.createElement(S.a,{sm:12,md:12,lg:6,xl:4},o.a.createElement(Q,null)))};t.default=f()((function(){var e=Object(N.b)($),t=e.data,n=e.error,a=e.loading;if(n)return o.a.createElement(F.a,{error:n});if(a)return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.PageHeader,null,o.a.createElement(c.PageHeaderTitle,{title:"Compliance"})),o.a.createElement(c.Main,null,o.a.createElement("div",{className:"policies-donuts"},o.a.createElement(P.a,{gutter:"md"},o.a.createElement(X,null)))));var r,i=t.allProfiles.filter((function(e){return e.totalHostCount>0})),s=[];return i.length?(r=o.a.createElement(c.PageHeader,null,o.a.createElement(c.PageHeaderTitle,{title:"Compliance"}),o.a.createElement(l.a,null)),s=i.map((function(e,t){return o.a.createElement(S.a,{sm:12,md:12,lg:6,xl:4,key:t},o.a.createElement(R,{key:t,policy:e}))}))):(r=o.a.createElement(c.PageHeader,{style:{paddingBottom:22}},o.a.createElement(c.PageHeaderTitle,{title:"Compliance"})),s=o.a.createElement(q.a,null,o.a.createElement(K.a,null,o.a.createElement(U.a,{style:{fontWeight:"500",color:"var(--pf-global--primary-color--100)"},size:"xl",title:"Compliance",icon:m.b}),o.a.createElement("br",null),o.a.createElement(D.a,{size:"lg"},"Connect with OpenSCAP to do more with Red Hat Enterprise Linux"),o.a.createElement("br",null),o.a.createElement("span",{className:p.a.emptyStateBody},o.a.createElement(O.a,null,"Scan and upload a report on a system with OpenSCAP to see information about your system's compliance to policies.",o.a.createElement("br",null),"Generate a report with OpenSCAP with the following command:",o.a.createElement(G.a,{className:"upload-instructions",variant:G.b.expansion},"oscap xccdf eval --profile xccdf_org.ssgproject.content_profile_standard --results scan.xml /usr/share/xml/scap/ssg/content/ssg-rhel7-ds.xml"),"And upload it using the following command:",o.a.createElement(G.a,{className:"upload-instructions",variant:G.b.expansion},"sudo insights-client --verbose --payload scan.xml --content-type application/vnd.redhat.compliance.something+tgz"))),o.a.createElement(J.a,{variant:"primary",component:"a",target:"_blank",href:"https://www.open-scap.org/getting-started/"},"Get started with OpenSCAP")))),o.a.createElement(o.a.Fragment,null,r,o.a.createElement(c.Main,null,o.a.createElement("div",{className:"policies-donuts"},o.a.createElement(P.a,{gutter:"md"},s))))}))}}]);
//# sourceMappingURL=../sourcemaps/CompliancePolicies.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{414:function(e,t,n){"use strict";var a=n(97),r=n.n(a),i=n(98),o=n.n(i),l=n(99),c=n.n(l),s=n(100),p=n.n(s),m=n(101),u=n.n(m),f=n(2),h=n(1),d=n.n(h),y=function(e){function t(e){return r()(this,t),c()(this,p()(t).call(this,e))}return u()(t,e),o()(t,[{key:"render",value:function(){var e=this.props.error;return e.networkError&&401===e.networkError.statusCode&&window.insights.chrome.auth.logout(),"Oops! There was an error loading Compliance data. If you need to contact Red Hat Support about this, this is the exact error:  "+e.message}}]),t}(f.Component);y.propTypes={error:d.a.object},t.a=y},415:function(e,t,n){"use strict";var a=n(97),r=n.n(a),i=n(98),o=n.n(i),l=n(99),c=n.n(l),s=n(100),p=n.n(s),m=n(101),u=n.n(m),f=n(397),h=n.n(f),d=n(1),y=n.n(d),g=n(2),v=n.n(g),b=n(145),E=n(113),x=n(159),w=n(416),_=n.n(w),T=function(e){function t(){var e,n;r()(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=c()(this,(e=p()(t)).call.apply(e,[this].concat(i)))).state={tabPaths:{0:b.b.compliancePolicies,1:b.b.complianceSystems}},n.redirect=function(e,t){var a=n.state.tabPaths;n.props.history.push(a[t])},n}return u()(t,e),o()(t,[{key:"render",value:function(){var e=this.props.match.path,t=this.state.tabPaths,n=Number(_()(t)[e]),a=[v.a.createElement(E.a,{title:"Policies",key:0,eventKey:0}),v.a.createElement(E.a,{title:"Systems",key:1,eventKey:1})];return v.a.createElement(x.a,{activeKey:n,onSelect:this.redirect,"aria-label":"Compliance Tabs"},a)}}]),t}(g.Component);T.propTypes={history:y.a.object,match:y.a.object},t.a=h()(T)},416:function(e,t,n){var a=n(417),r=n(418),i=n(440),o=Object.prototype.toString,l=r(function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=o.call(t)),e[t]=n},a(i));e.exports=l},417:function(e,t){e.exports=function(e){return function(){return e}}},418:function(e,t,n){var a=n(419);e.exports=function(e,t){return function(n,r){return a(n,e,t(r),{})}}},419:function(e,t,n){var a=n(420);e.exports=function(e,t,n,r){return a(e,function(e,a,i){t(r,n(e),a,i)}),r}},420:function(e,t,n){var a=n(439),r=n(421);e.exports=function(e,t){return e&&a(e,t,r)}},421:function(e,t,n){var a=n(422)(Object.keys,Object);e.exports=a},449:function(e,t,n){var a=n(450);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(5)(a,r);a.locals&&(e.exports=a.locals)},450:function(e,t,n){(e.exports=n(4)(!1)).push([e.i,"/* stylelint-enable */\n/* stylelint-disable */\n/* stylelint-enable */\n.pf-c-empty-state {\n  --pf-c-empty-state--Padding: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__icon--MarginBottom: var(--pf-global--spacer--lg);\n  --pf-c-empty-state__icon--FontSize: var(--pf-global--icon--FontSize--xl);\n  --pf-c-empty-state__icon--Color: var(--pf-global--icon--Color--light);\n  --pf-c-empty-state__body--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state__body--Color: var(--pf-global--Color--200);\n  --pf-c-empty-state--c-button--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--c-button__secondary--MarginTop: var(--pf-global--spacer--sm);\n  --pf-c-empty-state__secondary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__secondary--MarginRight: calc(var(--pf-global--spacer--xs) * -1);\n  --pf-c-empty-state__secondary--MarginBottom: calc(var(--pf-global--spacer--xs) * -1);\n  --pf-c-empty-state__secondary--c-button--MarginRight: var(--pf-global--spacer--xs);\n  --pf-c-empty-state__secondary--c-button--MarginBottom: var(--pf-global--spacer--xs);\n  --pf-c-empty-state--m-sm--MaxWidth: 25rem;\n  --pf-c-empty-state--m-lg--MaxWidth: 37.5rem;\n  padding: var(--pf-c-empty-state--Padding);\n  text-align: center; }\n\n.pf-c-empty-state > .pf-c-button.pf-m-primary {\n  margin-top: var(--pf-c-empty-state--c-button--MarginTop); }\n\n.pf-c-empty-state > .pf-c-button.pf-m-primary + .pf-c-empty-state__secondary {\n  margin-top: var(--pf-c-empty-state--c-button__secondary--MarginTop); }\n\n.pf-c-empty-state.pf-m-sm {\n  max-width: var(--pf-c-empty-state--m-sm--MaxWidth); }\n\n.pf-c-empty-state.pf-m-lg {\n  max-width: var(--pf-c-empty-state--m-lg--MaxWidth); }\n\n.pf-c-empty-state__icon {\n  margin-bottom: var(--pf-c-empty-state__icon--MarginBottom);\n  font-size: var(--pf-c-empty-state__icon--FontSize);\n  color: var(--pf-c-empty-state__icon--Color); }\n\n.pf-c-empty-state__body {\n  margin-top: var(--pf-c-empty-state__body--MarginTop);\n  color: var(--pf-c-empty-state__body--Color); }\n\n.pf-c-empty-state__secondary {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: var(--pf-c-empty-state__secondary--MarginTop);\n  margin-right: var(--pf-c-empty-state__secondary--MarginRight);\n  margin-bottom: var(--pf-c-empty-state__secondary--MarginBottom); }\n\n.pf-c-empty-state__secondary > .pf-c-button {\n  margin-right: var(--pf-c-empty-state__secondary--c-button--MarginRight);\n  margin-bottom: var(--pf-c-empty-state__secondary--c-button--MarginBottom); }\n",""])},452:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(1),o=n.n(i),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var s=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a)));return i.state={},i.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},i.elements={},i.onResize=i.onResize.bind(i),i.onTruncate=i.onTruncate.bind(i),i.calcTargetWidth=i.calcTargetWidth.bind(i),i.measureWidth=i.measureWidth.bind(i),i.getLines=i.getLines.bind(i),i.renderLine=i.renderLine.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),c(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,a=document.createElement("canvas");this.canvasContext=a.getContext("2d"),t(function(){e&&e.parentNode.removeChild(e)}),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"innerText",value:function(e){var t=document.createElement("div"),n="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var a=t[n],r=document.createElement("div");return r.innerHTML="foo<br/>bar","foo\nbar"!==r[n].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),a=t[n]),a}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"==typeof t&&(this.timeout=window.requestAnimationFrame(function(){t(e)}))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,n=this.calcTargetWidth,a=this.canvasContext,r=this.props.width;if(t){var i=r||Math.floor(t.parentNode.getBoundingClientRect().width);if(!i)return window.requestAnimationFrame(function(){return n(e)});var o=window.getComputedStyle(t),l=[o["font-weight"],o["font-style"],o["font-size"],o["font-family"]].join(" ");a.font=l,this.setState({targetWidth:i},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,n=t.lines,a=t.ellipsis,i=t.trimWhitespace,o=this.state.targetWidth,l=this.innerText,c=this.measureWidth,s=this.onTruncate,p=this.trimRight,m=[],u=l(e.text).split("\n").map(function(e){return e.split(" ")}),f=!0,h=this.ellipsisWidth(this.elements.ellipsis),d=1;d<=n;d++){var y=u[0];if(0!==y.length){var g=y.join(" ");if(c(g)<=o&&1===u.length){f=!1,m.push(g);break}if(d===n){for(var v=y.join(" "),b=0,E=v.length-1;b<=E;){var x=Math.floor((b+E)/2);c(v.slice(0,x+1))+h<=o?b=x+1:E=x-1}var w=v.slice(0,b);if(i)for(w=p(w);!w.length&&m.length;){w=p(m.pop())}g=r.a.createElement("span",null,w,a)}else{for(var _=0,T=y.length-1;_<=T;){var C=Math.floor((_+T)/2);c(y.slice(0,C+1).join(" "))<=o?_=C+1:T=C-1}if(0===_){d=n-1;continue}g=y.slice(0,_).join(" "),u[0].splice(0,_)}m.push(g)}else m.push(),u.shift(),d--}return s(f),m}},{key:"renderLine",value:function(e,t,n){if(t===n.length-1)return r.a.createElement("span",{key:t},e);var a=r.a.createElement("br",{key:t+"br"});return e?[r.a.createElement("span",{key:t},e),a]:a}},{key:"render",value:function(){var e=this,t=this.elements.target,n=this.props,a=n.children,i=n.ellipsis,o=n.lines,c=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(n,["children","ellipsis","lines"]),s=this.state.targetWidth,p=this.getLines,m=this.renderLine,u=this.onTruncate,f=void 0;return"undefined"!=typeof window&&!(!t||!s)&&(o>0?f=p().map(m):(f=a,u(!1))),delete c.onTruncate,delete c.trimWhitespace,r.a.createElement("span",l({},c,{ref:function(t){e.elements.target=t}}),r.a.createElement("span",null,f),r.a.createElement("span",{ref:function(t){e.elements.text=t}},a),r.a.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},i))}}]),t}();s.propTypes={children:o.a.node,ellipsis:o.a.node,lines:o.a.oneOfType([o.a.oneOf([!1]),o.a.number]),trimWhitespace:o.a.bool,width:o.a.number,onTruncate:o.a.func},s.defaultProps={children:"",ellipsis:"…",lines:1,trimWhitespace:!1,width:0},t.default=s},961:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(396),o=n.n(i),l=n(507),c=n(519),s=n(520),p=n(518),m=n(511),u=n(512),f=n(503),h=n(516),d=n(620),y=n(502),g=n(449),v=n.n(g),b=n(527),E=n(397),x=n.n(E),w=n(97),_=n.n(w),T=n(98),C=n.n(T),M=n(99),W=n.n(M),k=n(100),O=n.n(k),S=n(101),j=n.n(S),P=n(451),z=n(452),L=n(508),A=n(517),R=n(496),H=n(951),N=n(954),B=n(581),F=(n(531),function(e){function t(e){var n;return _()(this,t),(n=W()(this,O()(t).call(this,e))).onMouseover=function(){n.setState({cardTitle:n.policy.name})},n.onMouseout=function(){n.setState({cardTitle:r.a.createElement(z.default,{lines:1},n.policy.name)})},n.policy=e.policy,n.state={cardTitle:r.a.createElement(z.default,{lines:1},n.policy.name)},n}return j()(t,e),C()(t,[{key:"render",value:function(){var e=this.policy.compliantHostCount,t=this.policy.totalHostCount,n=[{x:"Compliant",y:e},{x:"Non-compliant",y:t-e}],a=Math.floor(n[0].y/(n[0].y+n[1].y)*100)+"%",i=r.a.createElement("svg",{className:"chart-label",height:300,width:300},r.a.createElement(H.a,{style:{fontSize:26},text:a,textAnchor:"middle",verticalAnchor:"middle",x:150,y:135}),r.a.createElement(H.a,{style:{fill:"var(--pf-global--Color--200)"},text:"Systems above threshold",textAnchor:"middle",verticalAnchor:"middle",x:150,y:165}));return r.a.createElement(l.a,{"widget-id":this.policy.refId},r.a.createElement(L.a,null,r.a.createElement(A.a,{style:{fontWeight:"500",color:"var(--pf-global--Color--200)"},component:A.b.small},"External Policy"),r.a.createElement(h.a,null,r.a.createElement(A.a,{onMouseEnter:this.onMouseover.bind(this),onMouseLeave:this.onMouseout.bind(this),style:{fontWeight:"500"},component:A.b.h4},this.state.cardTitle)),r.a.createElement(h.a,{className:"chart-title"},r.a.createElement(c.a,null,r.a.createElement(s.a,{style:{display:"inline-flex"},span:12},r.a.createElement(h.a,null,r.a.createElement("span",{style:{fontSize:"30px",fontWeight:"500"}},e),r.a.createElement("span",{style:{fontWeight:"500",color:"var(--pf-global--Color--200)"}}," ","of"," "),r.a.createElement("span",{style:{fontSize:"30px",fontWeight:"500"}},t))),r.a.createElement(s.a,{span:8},r.a.createElement(A.a,{style:{fontWeight:"500",color:"var(--pf-global--Color--200)"},component:A.b.small},"Systems meet compliance threshold")),r.a.createElement(s.a,{span:6},r.a.createElement(h.a,null,r.a.createElement(A.a,{component:A.b.small,style:{fontSize:"16px"}},r.a.createElement(P.a,{to:"/policies/"+this.policy.id},"More details")))),r.a.createElement(s.a,{span:6,style:{textAlign:"right"}},this.policy.businessObjective&&r.a.createElement(R.a,{isReadOnly:!0},this.policy.businessObjective.title))))),r.a.createElement("hr",null),r.a.createElement(L.a,null,r.a.createElement(c.a,null,r.a.createElement(s.a,{style:{textAlign:"center"},span:12},r.a.createElement("div",{className:"chart-inline"},r.a.createElement("div",{className:"card-chart-container"},i,r.a.createElement(N.a,{data:n,identifier:this.policy.name.replace(/ /g,""),theme:B.ChartTheme.light.blue,height:205,width:205})))))))}}]),t}(r.a.Component)),I=n(141),q=n(392),K=n.n(q),U=n(414),D=n(438);function G(){var e=o()(["\n{\n    allProfiles {\n        id\n        name\n        refId\n        description\n        totalHostCount\n        compliantHostCount\n        businessObjective {\n            title\n        }\n    }\n}\n"]);return G=function(){return e},e}var J=K()(G()),Q=function(){return r.a.createElement(l.a,null,r.a.createElement(D.default,{height:400,width:400,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},r.a.createElement("rect",{x:"6",y:"31",rx:"4",ry:"4",width:"293",height:"15"}),r.a.createElement("rect",{x:"8",y:"15",rx:"3",ry:"3",width:"85",height:"6"}),r.a.createElement("rect",{x:"7",y:"112",rx:"3",ry:"3",width:"220",height:"10"}),r.a.createElement("circle",{cx:"190",cy:"256",r:"109"}),r.a.createElement("rect",{x:"8",y:"73",rx:"0",ry:"0",width:"69",height:"23"}),r.a.createElement("rect",{x:"47",y:"77",rx:"0",ry:"0",width:"0",height:"0"}),r.a.createElement("rect",{x:"36",y:"77",rx:"0",ry:"0",width:"16",height:"0"})))},$=function(){return r.a.createElement(c.a,{gutter:"md"},r.a.createElement(s.a,{sm:12,md:12,lg:6,xl:4},r.a.createElement(Q,null)),r.a.createElement(s.a,{sm:12,md:12,lg:6,xl:4},r.a.createElement(Q,null)),r.a.createElement(s.a,{sm:12,md:12,lg:6,xl:4},r.a.createElement(Q,null)))},V=x()(function(){return r.a.createElement(I.Query,{query:J},function(e){var t=e.data,n=e.error,a=e.loading;if(n)return r.a.createElement(U.a,{error:n});if(a)return r.a.createElement($,null);var i=t.allProfiles,o=[];return o=i.length?i.map(function(e,t){return r.a.createElement(s.a,{sm:12,md:12,lg:6,xl:4,key:t},r.a.createElement(F,{key:t,policy:e}))}):r.a.createElement(p.a,null,r.a.createElement(m.a,null,r.a.createElement(u.a,{style:{fontWeight:"500",color:"var(--pf-global--primary-color--100)"},size:"xl",title:"Compliance",icon:b.a}),r.a.createElement("br",null),r.a.createElement(f.a,{size:"lg"},"Connect with OpenSCAP to do more with Red Hat Enterprise Linux"),r.a.createElement("br",null),r.a.createElement("span",{className:v.a.emptyStateBody},r.a.createElement(h.a,null,"Scan and upload a report on a system with OpenSCAP to see information about your system's compliance to policies.",r.a.createElement("br",null),"Generate a report with OpenSCAP with the following command:",r.a.createElement(d.a,{className:"upload-instructions",variant:d.b.expansion},"oscap xccdf eval --profile xccdf_org.ssgproject.content_profile_standard --results scan.xml /usr/share/xml/scap/ssg/content/ssg-rhel7-ds.xml"),"And upload it using the following command:",r.a.createElement(d.a,{className:"upload-instructions",variant:d.b.expansion},"sudo insights-client --verbose --payload scan.xml --content-type application/vnd.redhat.compliance.something+tgz"))),r.a.createElement(y.a,{variant:"primary",component:"a",target:"_blank",href:"https://www.open-scap.org/getting-started/"},"Get started with OpenSCAP"))),r.a.createElement("div",{className:"policies-donuts"},r.a.createElement(c.a,{gutter:"md"},o))})}),X=n(415),Y=n(393);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.PageHeader,null,r.a.createElement(Y.PageHeaderTitle,{title:"Compliance"}),r.a.createElement(X.a,null)),r.a.createElement(Y.Main,null,r.a.createElement(V,null)))}}}]);
//# sourceMappingURL=../sourcemaps/CompliancePolicies.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{454:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(1),o=n.n(i),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var s=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a)));return i.state={},i.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},i.elements={},i.onResize=i.onResize.bind(i),i.onTruncate=i.onTruncate.bind(i),i.calcTargetWidth=i.calcTargetWidth.bind(i),i.measureWidth=i.measureWidth.bind(i),i.getLines=i.getLines.bind(i),i.renderLine=i.renderLine.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,a=document.createElement("canvas");this.canvasContext=a.getContext("2d"),t((function(){e&&e.parentNode.removeChild(e)})),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"innerText",value:function(e){var t=document.createElement("div"),n="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var a=t[n],r=document.createElement("div");return r.innerHTML="foo<br/>bar","foo\nbar"!==r[n].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),a=t[n]),a}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"==typeof t&&(this.timeout=window.requestAnimationFrame((function(){t(e)})))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,n=this.calcTargetWidth,a=this.canvasContext,r=this.props.width;if(t){var i=r||Math.floor(t.parentNode.getBoundingClientRect().width);if(!i)return window.requestAnimationFrame((function(){return n(e)}));var o=window.getComputedStyle(t),l=[o["font-weight"],o["font-style"],o["font-size"],o["font-family"]].join(" ");a.font=l,this.setState({targetWidth:i},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,n=t.lines,a=t.ellipsis,i=t.trimWhitespace,o=this.state.targetWidth,l=this.innerText,c=this.measureWidth,s=this.onTruncate,p=this.trimRight,m=[],u=l(e.text).split("\n").map((function(e){return e.split(" ")})),f=!0,h=this.ellipsisWidth(this.elements.ellipsis),d=1;d<=n;d++){var y=u[0];if(0!==y.length){var g=y.join(" ");if(c(g)<=o&&1===u.length){f=!1,m.push(g);break}if(d===n){for(var v=y.join(" "),b=0,E=v.length-1;b<=E;){var _=Math.floor((b+E)/2);c(v.slice(0,_+1))+h<=o?b=_+1:E=_-1}var x=v.slice(0,b);if(i)for(x=p(x);!x.length&&m.length;){x=p(m.pop())}g=r.a.createElement("span",null,x,a)}else{for(var w=0,T=y.length-1;w<=T;){var M=Math.floor((w+T)/2);c(y.slice(0,M+1).join(" "))<=o?w=M+1:T=M-1}if(0===w){d=n-1;continue}g=y.slice(0,w).join(" "),u[0].splice(0,w)}m.push(g)}else m.push(),u.shift(),d--}return s(f),m}},{key:"renderLine",value:function(e,t,n){if(t===n.length-1)return r.a.createElement("span",{key:t},e);var a=r.a.createElement("br",{key:t+"br"});return e?[r.a.createElement("span",{key:t},e),a]:a}},{key:"render",value:function(){var e=this,t=this.elements.target,n=this.props,a=n.children,i=n.ellipsis,o=n.lines,c=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(n,["children","ellipsis","lines"]),s=this.state.targetWidth,p=this.getLines,m=this.renderLine,u=this.onTruncate,f=void 0;return"undefined"!=typeof window&&!(!t||!s)&&(o>0?f=p().map(m):(f=a,u(!1))),delete c.onTruncate,delete c.trimWhitespace,r.a.createElement("span",l({},c,{ref:function(t){e.elements.target=t}}),r.a.createElement("span",null,f),r.a.createElement("span",{ref:function(t){e.elements.text=t}},a),r.a.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},i))}}]),t}(a.Component);s.propTypes={children:o.a.node,ellipsis:o.a.node,lines:o.a.oneOfType([o.a.oneOf([!1]),o.a.number]),trimWhitespace:o.a.bool,width:o.a.number,onTruncate:o.a.func},s.defaultProps={children:"",ellipsis:"…",lines:1,trimWhitespace:!1,width:0},t.default=s},466:function(e,t,n){var a=n(467),r=n(468),i=n(445),o=Object.prototype.toString,l=r((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=o.call(t)),e[t]=n}),a(i));e.exports=l},467:function(e,t){e.exports=function(e){return function(){return e}}},468:function(e,t,n){var a=n(469);e.exports=function(e,t){return function(n,r){return a(n,e,t(r),{})}}},469:function(e,t,n){var a=n(470);e.exports=function(e,t,n,r){return a(e,(function(e,a,i){t(r,n(e),a,i)})),r}},484:function(e,t,n){var a=n(485);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(10)(a,r);a.locals&&(e.exports=a.locals)},485:function(e,t,n){(e.exports=n(9)(!1)).push([e.i,".pf-c-empty-state{--pf-c-empty-state--Padding: var(--pf-global--spacer--xl);--pf-c-empty-state__icon--MarginBottom: var(--pf-global--spacer--lg);--pf-c-empty-state__icon--FontSize: var(--pf-global--icon--FontSize--xl);--pf-c-empty-state__icon--Color: var(--pf-global--icon--Color--light);--pf-c-empty-state__body--MarginTop: var(--pf-global--spacer--md);--pf-c-empty-state__body--Color: var(--pf-global--Color--200);--pf-c-empty-state--c-button--MarginTop: var(--pf-global--spacer--xl);--pf-c-empty-state--c-button__secondary--MarginTop: var(--pf-global--spacer--sm);--pf-c-empty-state__secondary--MarginTop: var(--pf-global--spacer--xl);--pf-c-empty-state__secondary--MarginRight: calc(var(--pf-global--spacer--xs) * -1);--pf-c-empty-state__secondary--MarginBottom: calc(var(--pf-global--spacer--xs) * -1);--pf-c-empty-state__secondary--c-button--MarginRight: var(--pf-global--spacer--xs);--pf-c-empty-state__secondary--c-button--MarginBottom: var(--pf-global--spacer--xs);--pf-c-empty-state--m-sm--MaxWidth: 25rem;--pf-c-empty-state--m-lg--MaxWidth: 37.5rem;padding:var(--pf-c-empty-state--Padding);text-align:center}.pf-c-empty-state>.pf-c-button.pf-m-primary,.pf-c-empty-state .pf-c-empty-state__primary{margin-top:var(--pf-c-empty-state--c-button--MarginTop)}.pf-c-empty-state>.pf-c-button.pf-m-primary+.pf-c-empty-state__secondary,.pf-c-empty-state .pf-c-empty-state__primary+.pf-c-empty-state__secondary{margin-top:var(--pf-c-empty-state--c-button__secondary--MarginTop)}.pf-c-empty-state.pf-m-sm{max-width:var(--pf-c-empty-state--m-sm--MaxWidth)}.pf-c-empty-state.pf-m-lg{max-width:var(--pf-c-empty-state--m-lg--MaxWidth)}.pf-c-empty-state__icon{margin-bottom:var(--pf-c-empty-state__icon--MarginBottom);font-size:var(--pf-c-empty-state__icon--FontSize);color:var(--pf-c-empty-state__icon--Color)}.pf-c-empty-state__body{margin-top:var(--pf-c-empty-state__body--MarginTop);color:var(--pf-c-empty-state__body--Color)}.pf-c-empty-state__secondary{display:flex;flex-wrap:wrap;justify-content:center;margin-top:var(--pf-c-empty-state__secondary--MarginTop);margin-right:var(--pf-c-empty-state__secondary--MarginRight);margin-bottom:var(--pf-c-empty-state__secondary--MarginBottom)}.pf-c-empty-state__secondary>.pf-c-button{margin-right:var(--pf-c-empty-state__secondary--c-button--MarginRight);margin-bottom:var(--pf-c-empty-state__secondary--c-button--MarginBottom)}.pf-m-redhat-font .pf-c-empty-state>.pf-c-title{font-size:var(--pf-global--FontSize--xl)}\n",""])},492:function(e,t,n){"use strict";var a=n(452),r=n.n(a),i=n(1),o=n.n(i),l=n(2),c=n.n(l),s=n(179),p=n(113),m=n(200),u=n(466),f=n.n(u),h=function(e){var t=e.match.path,n={0:s.b.compliancePolicies,1:s.b.complianceSystems},a=Number(f()(n)[t]),r=[c.a.createElement(p.a,{title:"Policies",key:0,eventKey:0}),c.a.createElement(p.a,{title:"Systems",key:1,eventKey:1})];return c.a.createElement(m.a,{activeKey:a,onSelect:function(t,a){e.history.push(n[a])},"aria-label":"Compliance Tabs"},r)};h.propTypes={history:o.a.object,match:o.a.object};var d=r()(h),y=n(453),g=n.n(y),v=n(204),b=n(205),E=n(189),_=n(457),x=function(){return c.a.createElement(v.a,{gutter:"md"},g()(3).map((function(e,t){return c.a.createElement(b.a,{sm:12,md:12,lg:6,xl:4,key:t},c.a.createElement(E.a,null,c.a.createElement(_.default,{height:400,width:400,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},c.a.createElement("rect",{x:"6",y:"31",rx:"4",ry:"4",width:"293",height:"15"}),c.a.createElement("rect",{x:"8",y:"15",rx:"3",ry:"3",width:"85",height:"6"}),c.a.createElement("rect",{x:"7",y:"112",rx:"3",ry:"3",width:"220",height:"10"}),c.a.createElement("circle",{cx:"190",cy:"256",r:"109"}),c.a.createElement("rect",{x:"8",y:"73",rx:"0",ry:"0",width:"69",height:"23"}),c.a.createElement("rect",{x:"47",y:"77",rx:"0",ry:"0",width:"0",height:"0"}),c.a.createElement("rect",{x:"36",y:"77",rx:"0",ry:"0",width:"16",height:"0"}))))})))},w=n(94),T=n.n(w),M=n(93),C=n.n(M),W=n(95),k=n.n(W),O=n(96),S=n.n(O),j=n(97),z=n.n(j),L=n(465),P=n(454),R=n(190),H=n(202),N=n(201),A=n(116),B=n(636),F=n(626),q=(n(472),n(458)),I=function(e){function t(e){var n;return T()(this,t),(n=k()(this,S()(t).call(this,e))).onMouseover=function(){n.setState({cardTitle:n.policy.name})},n.onMouseout=function(){n.setState({cardTitle:c.a.createElement(P.default,{lines:1},n.policy.name)})},n.policy=e.policy,n.state={cardTitle:c.a.createElement(P.default,{lines:1},n.policy.name)},n}return z()(t,e),C()(t,[{key:"render",value:function(){var e=this.policy.compliantHostCount,t=this.policy.totalHostCount,n=[{x:"Compliant",y:e},{x:"Non-compliant",y:t-e}],a=Object(q.a)(Math.floor(n[0].y/(n[0].y+n[1].y)*100));return c.a.createElement(E.a,{"widget-id":this.policy.refId},c.a.createElement(R.a,null,c.a.createElement(H.a,{style:{fontWeight:"500",color:"var(--pf-global--Color--200)"},component:H.b.small},"External policy"),c.a.createElement(N.a,null,c.a.createElement(H.a,{onMouseEnter:this.onMouseover.bind(this),onMouseLeave:this.onMouseout.bind(this),style:{fontWeight:"500"},component:H.b.h4},this.state.cardTitle)),c.a.createElement(N.a,{className:"chart-title"},c.a.createElement(v.a,null,c.a.createElement(b.a,{style:{display:"inline-flex"},span:12},c.a.createElement(N.a,null,c.a.createElement("span",{style:{fontSize:"30px",fontWeight:"500"}},e),c.a.createElement("span",{style:{fontWeight:"500",color:"var(--pf-global--Color--200)"}}," ","of"," "),c.a.createElement("span",{style:{fontSize:"30px",fontWeight:"500"}},t))),c.a.createElement(b.a,{span:12},c.a.createElement(H.a,{style:{fontWeight:"500",color:"var(--pf-global--Color--200)"},component:H.b.small},"Systems meet compliance threshold")),c.a.createElement(b.a,{span:6},c.a.createElement(N.a,null,c.a.createElement(H.a,{component:H.b.small,style:{fontSize:"16px"}},c.a.createElement(L.a,{to:"/policies/"+this.policy.id},"More details")))),c.a.createElement(b.a,{span:6,style:{textAlign:"right"}},this.policy.businessObjective&&c.a.createElement(A.a,{isReadOnly:!0},this.policy.businessObjective.title))))),c.a.createElement("hr",null),c.a.createElement(R.a,null,c.a.createElement(v.a,null,c.a.createElement(b.a,{style:{textAlign:"center"},span:12},c.a.createElement("div",{className:"chart-inline"},c.a.createElement("div",{className:"card-chart-container"},c.a.createElement(B.a,{data:n,identifier:this.policy.name.replace(/ /g,""),innerRadius:122,themeColor:F.q.blue,themeVariant:F.r.light,title:a,subTitle:"Systems above threshold",height:300,width:300})))))))}}]),t}(c.a.Component),K=n(203),U=n(195),D=n(196),G=n(118),J=n(217),V=n(159),$=n(484),Q=n.n($),X=n(156),Y=function(){return c.a.createElement(K.a,null,c.a.createElement(U.a,null,c.a.createElement(D.a,{style:{fontWeight:"500",color:"var(--pf-global--primary-color--100)"},size:"xl",title:"Compliance",icon:X.b}),c.a.createElement("br",null),c.a.createElement(G.a,{size:"lg"},"Connect with OpenSCAP to do more with Red Hat Enterprise Linux"),c.a.createElement("br",null),c.a.createElement("span",{className:Q.a.emptyStateBody},c.a.createElement(N.a,null,"Scan and upload a report on a system with OpenSCAP to see information about your system's compliance to policies.",c.a.createElement("br",null),"Generate a report with OpenSCAP with the following command:",c.a.createElement(J.a,{className:"upload-instructions",variant:J.b.expansion},"oscap xccdf eval --profile xccdf_org.ssgproject.content_profile_standard --results scan.xml /usr/share/xml/scap/ssg/content/ssg-rhel7-ds.xml"),"And upload it using the following command:",c.a.createElement(J.a,{className:"upload-instructions",variant:J.b.expansion},"sudo insights-client --verbose --payload scan.xml --content-type application/vnd.redhat.compliance.something+tgz"))),c.a.createElement(V.a,{variant:"primary",component:"a",target:"_blank",href:"https://www.open-scap.org/getting-started/"},"Get started with OpenSCAP")))},Z=function(e){function t(){return T()(this,t),k()(this,S()(t).apply(this,arguments))}return z()(t,e),C()(t,[{key:"render",value:function(){var e=this.props.error;return e.networkError&&401===e.networkError.statusCode&&window.insights.chrome.auth.logout(),"Oops! There was an error loading Compliance data. If you need to contact Red Hat Support about this, this is the exact error:  "+e.message}}]),t}(l.Component);Z.propTypes={error:o.a.object};var ee=Z;n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return x})),n.d(t,"b",(function(){return I})),n.d(t,"a",(function(){return Y})),n.d(t,"d",(function(){return ee}))},634:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(529),o=n(492),l=n(442);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.PageHeader,null,r.a.createElement(l.PageHeaderTitle,{title:"Compliance"}),r.a.createElement(o.c,null)),r.a.createElement(l.Main,null,r.a.createElement(i.a,{columns:[{composed:["facts.os_release","display_name"],key:"display_name",title:"Name",props:{width:40}},{key:"facts.compliance.profiles",title:"Profiles",props:{width:40}},{key:"facts.compliance.compliance_score",title:"Compliance score",props:{width:10}},{key:"facts.compliance.last_scanned",title:"Last scanned",props:{width:10}}]})))}}}]);
//# sourceMappingURL=../sourcemaps/ComplianceSystems.js.map
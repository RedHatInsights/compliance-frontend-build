(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{423:function(e,t,n){var a=n(220)(Object.keys,Object);e.exports=a},428:function(e,t){e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},433:function(e,t,n){var a=n(487),r=n(490),i=n(425),o=n(124),l=n(428);e.exports=function(e){return"function"==typeof e?e:null==e?i:"object"==typeof e?o(e)?r(e[0],e[1]):a(e):l(e)}},435:function(e,t,n){var a=n(445),r=n(423);e.exports=function(e,t){return e&&a(e,t,r)}},440:function(e,t,n){"use strict";var a=n(92),r=n.n(a),i=n(91),o=n.n(i),l=n(93),c=n.n(l),s=n(94),p=n.n(s),u=n(95),m=n.n(u),f=n(429),h=n.n(f),d=n(1),y=n.n(d),g=n(2),v=n.n(g),b=n(150),E=n(107),x=n(173),w=n(441),_=n.n(w),T=function(e){function t(){var e,n;r()(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=c()(this,(e=p()(t)).call.apply(e,[this].concat(i)))).state={tabPaths:{0:b.b.compliancePolicies,1:b.b.complianceSystems}},n.redirect=function(e,t){var a=n.state.tabPaths;n.props.history.push(a[t])},n}return m()(t,e),o()(t,[{key:"render",value:function(){var e=this.props.match.path,t=this.state.tabPaths,n=Number(_()(t)[e]),a=[v.a.createElement(E.a,{title:"Policies",key:0,eventKey:0}),v.a.createElement(E.a,{title:"Systems",key:1,eventKey:1})];return v.a.createElement(x.a,{activeKey:n,onSelect:this.redirect,"aria-label":"Compliance Tabs"},a)}}]),t}(g.Component);T.propTypes={history:y.a.object,match:y.a.object},t.a=h()(T)},441:function(e,t,n){var a=n(442),r=n(443),i=n(425),o=Object.prototype.toString,l=r(function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=o.call(t)),e[t]=n},a(i));e.exports=l},442:function(e,t){e.exports=function(e){return function(){return e}}},443:function(e,t,n){var a=n(444);e.exports=function(e,t){return function(n,r){return a(n,e,t(r),{})}}},444:function(e,t,n){var a=n(435);e.exports=function(e,t,n,r){return a(e,function(e,a,i){t(r,n(e),a,i)}),r}},449:function(e,t,n){var a=n(216);e.exports=function(e){return e==e&&!a(e)}},450:function(e,t){e.exports=function(e,t){return function(n){return null!=n&&n[e]===t&&(void 0!==t||e in Object(n))}}},451:function(e,t,n){"use strict";var a=n(92),r=n.n(a),i=n(91),o=n.n(i),l=n(93),c=n.n(l),s=n(94),p=n.n(s),u=n(95),m=n.n(u),f=n(2),h=n(1),d=n.n(h),y=function(e){function t(e){return r()(this,t),c()(this,p()(t).call(this,e))}return m()(t,e),o()(t,[{key:"render",value:function(){var e=this.props.error;return e.networkError&&401===e.networkError.statusCode&&window.insights.chrome.auth.logout(),"Oops! There was an error loading Compliance data. If you need to contact Red Hat Support about this, this is the exact error:  "+e.message}}]),t}(f.Component);y.propTypes={error:d.a.object},t.a=y},459:function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},460:function(e,t){e.exports=function(e){return e}},461:function(e,t){e.exports=function(e,t){return null!=e&&t in Object(e)}},474:function(e,t,n){var a=n(475);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(9)(a,r);a.locals&&(e.exports=a.locals)},475:function(e,t,n){(e.exports=n(8)(!1)).push([e.i,"/* stylelint-enable */\n.pf-c-empty-state {\n  --pf-c-empty-state--Padding: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__icon--MarginBottom: var(--pf-global--spacer--lg);\n  --pf-c-empty-state__icon--FontSize: var(--pf-global--icon--FontSize--xl);\n  --pf-c-empty-state__icon--Color: var(--pf-global--icon--Color--light);\n  --pf-c-empty-state__body--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state__body--Color: var(--pf-global--Color--200);\n  --pf-c-empty-state--c-button--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--c-button__secondary--MarginTop: var(--pf-global--spacer--sm);\n  --pf-c-empty-state__secondary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__secondary--MarginRight: calc(var(--pf-global--spacer--xs) * -1);\n  --pf-c-empty-state__secondary--MarginBottom: calc(var(--pf-global--spacer--xs) * -1);\n  --pf-c-empty-state__secondary--c-button--MarginRight: var(--pf-global--spacer--xs);\n  --pf-c-empty-state__secondary--c-button--MarginBottom: var(--pf-global--spacer--xs);\n  --pf-c-empty-state--m-sm--MaxWidth: 25rem;\n  --pf-c-empty-state--m-lg--MaxWidth: 37.5rem;\n  padding: var(--pf-c-empty-state--Padding);\n  text-align: center; }\n\n.pf-c-empty-state > .pf-c-button.pf-m-primary {\n  margin-top: var(--pf-c-empty-state--c-button--MarginTop); }\n\n.pf-c-empty-state > .pf-c-button.pf-m-primary + .pf-c-empty-state__secondary {\n  margin-top: var(--pf-c-empty-state--c-button__secondary--MarginTop); }\n\n.pf-c-empty-state.pf-m-sm {\n  max-width: var(--pf-c-empty-state--m-sm--MaxWidth); }\n\n.pf-c-empty-state.pf-m-lg {\n  max-width: var(--pf-c-empty-state--m-lg--MaxWidth); }\n\n.pf-c-empty-state__icon {\n  margin-bottom: var(--pf-c-empty-state__icon--MarginBottom);\n  font-size: var(--pf-c-empty-state__icon--FontSize);\n  color: var(--pf-c-empty-state__icon--Color); }\n\n.pf-c-empty-state__body {\n  margin-top: var(--pf-c-empty-state__body--MarginTop);\n  color: var(--pf-c-empty-state__body--Color); }\n\n.pf-c-empty-state__secondary {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: var(--pf-c-empty-state__secondary--MarginTop);\n  margin-right: var(--pf-c-empty-state__secondary--MarginRight);\n  margin-bottom: var(--pf-c-empty-state__secondary--MarginBottom); }\n\n.pf-c-empty-state__secondary > .pf-c-button {\n  margin-right: var(--pf-c-empty-state__secondary--c-button--MarginRight);\n  margin-bottom: var(--pf-c-empty-state__secondary--c-button--MarginBottom); }\n",""])},476:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(1),o=n.n(i),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var s=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a)));return i.state={},i.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},i.elements={},i.onResize=i.onResize.bind(i),i.onTruncate=i.onTruncate.bind(i),i.calcTargetWidth=i.calcTargetWidth.bind(i),i.measureWidth=i.measureWidth.bind(i),i.getLines=i.getLines.bind(i),i.renderLine=i.renderLine.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),c(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,a=document.createElement("canvas");this.canvasContext=a.getContext("2d"),t(function(){e&&e.parentNode.removeChild(e)}),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"innerText",value:function(e){var t=document.createElement("div"),n="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var a=t[n],r=document.createElement("div");return r.innerHTML="foo<br/>bar","foo\nbar"!==r[n].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),a=t[n]),a}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"==typeof t&&(this.timeout=window.requestAnimationFrame(function(){t(e)}))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,n=this.calcTargetWidth,a=this.canvasContext,r=this.props.width;if(t){var i=r||Math.floor(t.parentNode.getBoundingClientRect().width);if(!i)return window.requestAnimationFrame(function(){return n(e)});var o=window.getComputedStyle(t),l=[o["font-weight"],o["font-style"],o["font-size"],o["font-family"]].join(" ");a.font=l,this.setState({targetWidth:i},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,n=t.lines,a=t.ellipsis,i=t.trimWhitespace,o=this.state.targetWidth,l=this.innerText,c=this.measureWidth,s=this.onTruncate,p=this.trimRight,u=[],m=l(e.text).split("\n").map(function(e){return e.split(" ")}),f=!0,h=this.ellipsisWidth(this.elements.ellipsis),d=1;d<=n;d++){var y=m[0];if(0!==y.length){var g=y.join(" ");if(c(g)<=o&&1===m.length){f=!1,u.push(g);break}if(d===n){for(var v=y.join(" "),b=0,E=v.length-1;b<=E;){var x=Math.floor((b+E)/2);c(v.slice(0,x+1))+h<=o?b=x+1:E=x-1}var w=v.slice(0,b);if(i)for(w=p(w);!w.length&&u.length;){w=p(u.pop())}g=r.a.createElement("span",null,w,a)}else{for(var _=0,T=y.length-1;_<=T;){var C=Math.floor((_+T)/2);c(y.slice(0,C+1).join(" "))<=o?_=C+1:T=C-1}if(0===_){d=n-1;continue}g=y.slice(0,_).join(" "),m[0].splice(0,_)}u.push(g)}else u.push(),m.shift(),d--}return s(f),u}},{key:"renderLine",value:function(e,t,n){if(t===n.length-1)return r.a.createElement("span",{key:t},e);var a=r.a.createElement("br",{key:t+"br"});return e?[r.a.createElement("span",{key:t},e),a]:a}},{key:"render",value:function(){var e=this,t=this.elements.target,n=this.props,a=n.children,i=n.ellipsis,o=n.lines,c=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(n,["children","ellipsis","lines"]),s=this.state.targetWidth,p=this.getLines,u=this.renderLine,m=this.onTruncate,f=void 0;return"undefined"!=typeof window&&!(!t||!s)&&(o>0?f=p().map(u):(f=a,m(!1))),delete c.onTruncate,delete c.trimWhitespace,r.a.createElement("span",l({},c,{ref:function(t){e.elements.target=t}}),r.a.createElement("span",null,f),r.a.createElement("span",{ref:function(t){e.elements.text=t}},a),r.a.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},i))}}]),t}();s.propTypes={children:o.a.node,ellipsis:o.a.node,lines:o.a.oneOfType([o.a.oneOf([!1]),o.a.number]),trimWhitespace:o.a.bool,width:o.a.number,onTruncate:o.a.func},s.defaultProps={children:"",ellipsis:"…",lines:1,trimWhitespace:!1,width:0},t.default=s},487:function(e,t,n){var a=n(488),r=n(489),i=n(450);e.exports=function(e){var t=r(e);return 1==t.length&&t[0][2]?i(t[0][0],t[0][1]):function(n){return n===e||a(n,e,t)}}},488:function(e,t,n){var a=n(221),r=n(219),i=1,o=2;e.exports=function(e,t,n,l){var c=n.length,s=c,p=!l;if(null==e)return!s;for(e=Object(e);c--;){var u=n[c];if(p&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++c<s;){var m=(u=n[c])[0],f=e[m],h=u[1];if(p&&u[2]){if(void 0===f&&!(m in e))return!1}else{var d=new a;if(l)var y=l(f,h,m,e,t,d);if(!(void 0===y?r(h,f,i|o,l,d):y))return!1}}return!0}},489:function(e,t,n){var a=n(449),r=n(423);e.exports=function(e){for(var t=r(e),n=t.length;n--;){var i=t[n],o=e[i];t[n]=[i,o,a(o)]}return t}},490:function(e,t,n){var a=n(219),r=n(491),i=n(461),o=n(460),l=n(449),c=n(450),s=n(224),p=1,u=2;e.exports=function(e,t){return o(e)&&l(t)?c(s(e),t):function(n){var o=r(n,e);return void 0===o&&o===t?i(n,e):a(t,o,p|u)}}},491:function(e,t,n){var a=n(459);e.exports=function(e,t,n){var r=null==e?void 0:a(e,t);return void 0===r?n:r}},629:function(e,t,n){"use strict";n.r(t);var a=n(424),r=n.n(a),i=n(2),o=n.n(i),l=n(440),c=n(422),s=n(474),p=n.n(s),u=n(187),m=n(429),f=n.n(m),h=n(92),d=n.n(h),y=n(91),g=n.n(y),v=n(93),b=n.n(v),E=n(94),x=n.n(E),w=n(95),_=n.n(w),T=n(473),C=n(476),M=n(164),W=n(165),k=n(175),O=n(174),j=n(177),P=n(178),S=n(111),z=n(626),H=n(621),L=n(546),A=(n(523),function(e){function t(e){var n;return d()(this,t),(n=b()(this,x()(t).call(this,e))).onMouseover=function(){n.setState({cardTitle:n.policy.name})},n.onMouseout=function(){n.setState({cardTitle:o.a.createElement(C.default,{lines:1},n.policy.name)})},n.policy=e.policy,n.state={cardTitle:o.a.createElement(C.default,{lines:1},n.policy.name)},n}return _()(t,e),g()(t,[{key:"render",value:function(){var e=this.policy.compliantHostCount,t=this.policy.totalHostCount,n=[{x:"Compliant",y:e},{x:"Non-compliant",y:t-e}],a=Math.floor(n[0].y/(n[0].y+n[1].y)*100)+"%",r=o.a.createElement("svg",{className:"chart-label",height:300,width:300},o.a.createElement(z.a,{style:{fontSize:26},text:a,textAnchor:"middle",verticalAnchor:"middle",x:150,y:135}),o.a.createElement(z.a,{style:{fill:"var(--pf-global--Color--200)"},text:"Systems above threshold",textAnchor:"middle",verticalAnchor:"middle",x:150,y:165}));return o.a.createElement(M.a,{"widget-id":this.policy.refId},o.a.createElement(W.a,null,o.a.createElement(k.a,{style:{fontWeight:"500",color:"var(--pf-global--Color--200)"},component:k.b.small},"External Policy"),o.a.createElement(O.a,null,o.a.createElement(k.a,{onMouseEnter:this.onMouseover.bind(this),onMouseLeave:this.onMouseout.bind(this),style:{fontWeight:"500"},component:k.b.h4},this.state.cardTitle)),o.a.createElement(O.a,{className:"chart-title"},o.a.createElement(j.a,null,o.a.createElement(P.a,{style:{display:"inline-flex"},span:12},o.a.createElement(O.a,null,o.a.createElement("span",{style:{fontSize:"30px",fontWeight:"500"}},e),o.a.createElement("span",{style:{fontWeight:"500",color:"var(--pf-global--Color--200)"}}," ","of"," "),o.a.createElement("span",{style:{fontSize:"30px",fontWeight:"500"}},t))),o.a.createElement(P.a,{span:8},o.a.createElement(k.a,{style:{fontWeight:"500",color:"var(--pf-global--Color--200)"},component:k.b.small},"Systems meet compliance threshold")),o.a.createElement(P.a,{span:6},o.a.createElement(O.a,null,o.a.createElement(k.a,{component:k.b.small,style:{fontSize:"16px"}},o.a.createElement(T.a,{to:"/policies/"+this.policy.id},"More details")))),o.a.createElement(P.a,{span:6,style:{textAlign:"right"}},this.policy.businessObjective&&o.a.createElement(S.a,{isReadOnly:!0},this.policy.businessObjective.title))))),o.a.createElement("hr",null),o.a.createElement(W.a,null,o.a.createElement(j.a,null,o.a.createElement(P.a,{style:{textAlign:"center"},span:12},o.a.createElement("div",{className:"chart-inline"},o.a.createElement("div",{className:"card-chart-container"},r,o.a.createElement(H.a,{data:n,identifier:this.policy.name.replace(/ /g,""),theme:L.a.light.blue,height:205,width:205})))))))}}]),t}(o.a.Component)),R=n(144),N=n(420),B=n.n(N),F=n(451),I=n(469),q=n(176),K=n(168),U=n(169),D=n(113),G=n(197),J=n(133);function Q(){var e=r()(["\n{\n    allProfiles {\n        id\n        name\n        refId\n        description\n        totalHostCount\n        compliantHostCount\n        businessObjective {\n            title\n        }\n    }\n}\n"]);return Q=function(){return e},e}var $=B()(Q()),V=function(){return o.a.createElement(M.a,null,o.a.createElement(I.default,{height:400,width:400,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},o.a.createElement("rect",{x:"6",y:"31",rx:"4",ry:"4",width:"293",height:"15"}),o.a.createElement("rect",{x:"8",y:"15",rx:"3",ry:"3",width:"85",height:"6"}),o.a.createElement("rect",{x:"7",y:"112",rx:"3",ry:"3",width:"220",height:"10"}),o.a.createElement("circle",{cx:"190",cy:"256",r:"109"}),o.a.createElement("rect",{x:"8",y:"73",rx:"0",ry:"0",width:"69",height:"23"}),o.a.createElement("rect",{x:"47",y:"77",rx:"0",ry:"0",width:"0",height:"0"}),o.a.createElement("rect",{x:"36",y:"77",rx:"0",ry:"0",width:"16",height:"0"})))},X=function(){return o.a.createElement(j.a,{gutter:"md"},o.a.createElement(P.a,{sm:12,md:12,lg:6,xl:4},o.a.createElement(V,null)),o.a.createElement(P.a,{sm:12,md:12,lg:6,xl:4},o.a.createElement(V,null)),o.a.createElement(P.a,{sm:12,md:12,lg:6,xl:4},o.a.createElement(V,null)))};t.default=f()(function(){return o.a.createElement(R.Query,{query:$},function(e){var t=e.data,n=e.error,a=e.loading;if(n)return o.a.createElement(F.a,{error:n});if(a)return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.PageHeader,null,o.a.createElement(c.PageHeaderTitle,{title:"Compliance"})),o.a.createElement(c.Main,null,o.a.createElement("div",{className:"policies-donuts"},o.a.createElement(j.a,{gutter:"md"},o.a.createElement(X,null),";"))));var r,i=t.allProfiles,s=[];return i.length?(r=o.a.createElement(c.PageHeader,null,o.a.createElement(c.PageHeaderTitle,{title:"Compliance"}),o.a.createElement(l.a,null)),s=i.map(function(e,t){return o.a.createElement(P.a,{sm:12,md:12,lg:6,xl:4,key:t},o.a.createElement(A,{key:t,policy:e}))})):(r=o.a.createElement(c.PageHeader,{style:{paddingBottom:22}},o.a.createElement(c.PageHeaderTitle,{title:"Compliance"})),s=o.a.createElement(q.a,null,o.a.createElement(K.a,null,o.a.createElement(U.a,{style:{fontWeight:"500",color:"var(--pf-global--primary-color--100)"},size:"xl",title:"Compliance",icon:u.a}),o.a.createElement("br",null),o.a.createElement(D.a,{size:"lg"},"Connect with OpenSCAP to do more with Red Hat Enterprise Linux"),o.a.createElement("br",null),o.a.createElement("span",{className:p.a.emptyStateBody},o.a.createElement(O.a,null,"Scan and upload a report on a system with OpenSCAP to see information about your system's compliance to policies.",o.a.createElement("br",null),"Generate a report with OpenSCAP with the following command:",o.a.createElement(G.a,{className:"upload-instructions",variant:G.b.expansion},"oscap xccdf eval --profile xccdf_org.ssgproject.content_profile_standard --results scan.xml /usr/share/xml/scap/ssg/content/ssg-rhel7-ds.xml"),"And upload it using the following command:",o.a.createElement(G.a,{className:"upload-instructions",variant:G.b.expansion},"sudo insights-client --verbose --payload scan.xml --content-type application/vnd.redhat.compliance.something+tgz"))),o.a.createElement(J.a,{variant:"primary",component:"a",target:"_blank",href:"https://www.open-scap.org/getting-started/"},"Get started with OpenSCAP")))),o.a.createElement(o.a.Fragment,null,r,o.a.createElement(c.Main,null,o.a.createElement("div",{className:"policies-donuts"},o.a.createElement(j.a,{gutter:"md"},s))))})})}}]);
//# sourceMappingURL=../sourcemaps/CompliancePolicies.js.map
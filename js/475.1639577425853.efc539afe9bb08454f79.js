"use strict";(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[475,164],{62410:(n,t,e)=>{e.d(t,{Z:()=>m});var r=e(92950),i=e.n(r),o=e(45697),u=e.n(o),c=e(87462),a=e(35224),d=36e5,l=24*d,f=30*l,p=365*l,s=function(n,t){return"".concat(n," ").concat(n>1?"".concat(t,"s"):t," ago")},h=[{rightBound:1/0,description:function(n){return s(Math.round(n/p),"year")}},{rightBound:p,description:function(n){return s(Math.round(n/f),"month")}},{rightBound:f,description:function(n){return s(Math.round(n/l),"day")}},{rightBound:l,description:function(n){return s(Math.round(n/d),"hour")}},{rightBound:d,description:function(n){return s(Math.round(n/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],v=function(n){return n.toUTCString().split(",")[1].slice(0,-7).trim()},g=function(n){return{exact:function(n){return v(n)+" UTC"},onlyDate:function(n){return v(n).slice(0,-6)},relative:function(n){return h.reduce((function(t,e){return e.rightBound>Date.now()-n?e.description(Date.now()-n):t}),v(n))},invalid:function(){return"Invalid date"}}[n]};function m(n){var t=n.date,e=n.type,r=void 0===e?"relative":e,o=n.extraTitle,u=n.tooltipProps,d=void 0===u?{}:u,l=t instanceof Date?t:new Date(t),f=null==t||"Invalid Date"===l.toString()?"invalid":r;return i().createElement(i().Fragment,null,function(n,t,e){return{exact:function(t){return g(n)(t)},onlyDate:function(t){return g(n)(t)},relative:function(r){return function(n,t,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return i().createElement(a.u,(0,c.Z)({},e,{content:i().createElement("div",null,r,n)}),t)}(g("exact")(r),i().createElement("span",null,g(n)(r)),t,e)},invalid:function(){return"Invalid date"}}[n]}(f,d,o)(l))}m.propTypes={date:u().oneOfType([u().instanceOf(Date),u().string,u().number]),type:u().oneOf(["exact","onlyDate","relative"]),extraTitle:u().node,tooltipProps:u().object}}}]);
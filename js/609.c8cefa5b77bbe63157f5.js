(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[609],{84351:(e,n,t)=>{"use strict";t.d(n,{_v:()=>O,_M:()=>w,a7:()=>R});var r,i,u,o,a,s,c,l,p=t(32465),f=t(44119),d=t.n(f),v=d()(r||(r=(0,p.Z)(["\nmutation CreateProfile($input: createProfileInput!) {\n    createProfile(input: $input) {\n        profile {\n            id\n        }\n    }\n}\n"]))),b=d()(i||(i=(0,p.Z)(["\nmutation associateSystems($input: associateSystemsInput!) {\n    associateSystems(input: $input) {\n        profile {\n            id\n            policy {\n                id\n                profiles {\n                    id\n                    parentProfileId\n                    osMinorVersion\n                }\n            }\n        }\n    }\n}\n"]))),m=(d()(u||(u=(0,p.Z)(["\nmutation associateProfiles($input: associateProfilesInput!) {\n    associateProfiles(input: $input) {\n        system {\n            id\n            name\n            profiles {\n                id\n                name\n            }\n        }\n    }\n}\n"]))),d()(o||(o=(0,p.Z)(["\nmutation associateRules($input: associateRulesInput!) {\n    associateRules(input: $input) {\n        profile {\n            id\n        }\n    }\n}\n"])))),h=d()(a||(a=(0,p.Z)(["\nmutation UpdateProfile($input: UpdateProfileInput!) {\n    updateProfile(input: $input) {\n        profile {\n            id,\n            name,\n            complianceThreshold,\n            businessObjectiveId,\n            description\n        }\n    }\n}\n"]))),y=d()(s||(s=(0,p.Z)(["\nmutation createBusinessObjective($input: createBusinessObjectiveInput!) {\n    createBusinessObjective(input: $input) {\n        businessObjective {\n            id\n            title\n        }\n    }\n}\n"]))),O=d()(c||(c=(0,p.Z)(["\nmutation DeleteProfile($input: deleteProfileInput!) {\n    deleteProfile(input: $input) {\n        profile {\n            id\n        }\n    }\n}\n"]))),w=d()(l||(l=(0,p.Z)(["\nmutation DeleteReport($input: deleteTestResultsInput!) {\n    deleteTestResults(input: $input) {\n        profile {\n            id\n        }\n    }\n}\n"]))),x=t(92137),P=t(87757),j=t.n(P),I=t(28481),k=t(46829);var Z=t(96156);function $(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?$(Object(t),!0).forEach((function(n){(0,Z.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function S(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return M(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?M(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,o=!0,a=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return o=e.done,e},e:function(e){a=!0,u=e},f:function(){try{o||null==t.return||t.return()}finally{if(a)throw u}}}}function M(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const R=function(){var e,n,t=(e=(0,k.useMutation)(y),n=(0,I.Z)(e,1)[0],function(){var e=(0,x.Z)(j().mark((function e(t,r){var i,u,o,a,s;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((null==t||null===(i=t.businessObjective)||void 0===i?void 0:i.title)!==(null==r?void 0:r.title)){e.next=4;break}return e.abrupt("return",null==t||null===(u=t.businessObjective)||void 0===u?void 0:u.id);case 4:if(""!==(null==r?void 0:r.title)){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,n({variables:{input:{title:r.title}}});case 10:if(o=e.sent,a=o.data,!(s=o.error)){e.next=15;break}throw s;case 15:return e.abrupt("return",a.createBusinessObjective.businessObjective.id);case 16:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),r=function(){var e=(0,k.useMutation)(h),n=(0,I.Z)(e,1)[0],t=(0,k.useMutation)(v),r=(0,I.Z)(t,1)[0];return function(){var e=(0,x.Z)(j().mark((function e(t,i,u){var o,a,s,c,l,p,f,d,v,b,m,h,y,O,w,x,P;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=i.name,a=i.description,s=i.complianceThreshold,c={name:o,description:a,businessObjectiveId:u,complianceThreshold:parseFloat(s)},!t){e.next=11;break}return v=g({id:t},c),e.next=6,n({variables:{input:v}});case 6:b=e.sent,l=null===(f=b.data)||void 0===f||null===(d=f.updateProfile)||void 0===d?void 0:d.profile,p=b.error,e.next=18;break;case 11:return y=i.cloneFromProfileId,O=i.refId,w=i.benchmarkId,x=g(g({},c),{},{cloneFromProfileId:y,refId:O,benchmarkId:w}),e.next=15,r({variables:{input:x}});case 15:P=e.sent,l=null===(m=P.data)||void 0===m||null===(h=m.createProfile)||void 0===h?void 0:h.profile,p=P.error;case 18:if(!p){e.next=20;break}throw p;case 20:return e.abrupt("return",l);case 21:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()}(),i=function(){var e=(0,k.useMutation)(b),n=(0,I.Z)(e,1)[0];return function(){var e=(0,x.Z)(j().mark((function e(t,r){var i,u,o,a,s;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=t.id,e.next=3,n({variables:{input:{id:u,systemIds:r.map((function(e){return e.id}))}}});case 3:if(o=e.sent,a=o.data,!(s=o.error)){e.next=8;break}throw s;case 8:return e.abrupt("return",null==a||null===(i=a.associateSystems)||void 0===i?void 0:i.profile);case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}(),u=function(){var e=(0,k.useMutation)(m),n=(0,I.Z)(e,1)[0];return function(){var e=(0,x.Z)(j().mark((function e(t,r){var i,u,o,a,s,c,l;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.id,u=t.osMinorVersion,o=t.ruleRefIds,a=r.find((function(e){return e.id===i||e.parentProfileId===i&&e.osMinorVersion===u})),s={id:null==a?void 0:a.id,ruleRefIds:o},e.next=5,n({variables:{input:s}});case 5:if(c=e.sent,!(l=c.error)){e.next=9;break}throw l;case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}();return function(){var e=(0,x.Z)(j().mark((function e(n,o,a){var s,c,l,p,f,d,v,b,m,h,y,O;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=(null==o?void 0:o.selectedRuleRefIds)||[],l=3+c.length,p=0,f=function(){a&&a(++p/l)},e.next=6,t(n,null==o?void 0:o.businessObjective);case 6:return d=e.sent,f(),e.next=10,r(null===(s=n)||void 0===s?void 0:s.id,o,d);case 10:return v=e.sent,f(),n||(n=v),e.next=15,i(n,o.hosts);case 15:b=e.sent,m=b.policy.profiles,f(),h=S(c),e.prev=19,h.s();case 21:if((y=h.n()).done){e.next=28;break}return O=y.value,e.next=25,u(O,m);case 25:f();case 26:e.next=21;break;case 28:e.next=33;break;case 30:e.prev=30,e.t0=e.catch(19),h.e(e.t0);case 33:return e.prev=33,h.f(),e.finish(33);case 36:case"end":return e.stop()}}),e,null,[[19,30,33,36]])})));return function(n,t,r){return e.apply(this,arguments)}}()}},65811:(e,n,t)=>{"use strict";t.d(n,{C:()=>i});var r=t(30319);function i(e){return(0,r.bh)().dispatch(e)}}}]);
//# sourceMappingURL=../sourcemaps/609.fec5650845996c2007f0.js.map
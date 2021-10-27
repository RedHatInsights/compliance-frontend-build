"use strict";(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[609],{84351:(e,n,t)=>{t.d(n,{_v:()=>y,_M:()=>P,a7:()=>S});var r,i,o,u,a,s,c,l,p=t(30168),f=t(27450),d=(0,f.ZP)(r||(r=(0,p.Z)(["\n  mutation CreateProfile($input: createProfileInput!) {\n    createProfile(input: $input) {\n      profile {\n        id\n      }\n    }\n  }\n"]))),v=(0,f.ZP)(i||(i=(0,p.Z)(["\n  mutation associateSystems($input: associateSystemsInput!) {\n    associateSystems(input: $input) {\n      profile {\n        id\n        policy {\n          id\n          profiles {\n            id\n            parentProfileId\n            osMinorVersion\n          }\n        }\n      }\n    }\n  }\n"]))),b=((0,f.ZP)(o||(o=(0,p.Z)(["\n  mutation associateProfiles($input: associateProfilesInput!) {\n    associateProfiles(input: $input) {\n      system {\n        id\n        name\n        profiles {\n          id\n          name\n        }\n      }\n    }\n  }\n"]))),(0,f.ZP)(u||(u=(0,p.Z)(["\n  mutation associateRules($input: associateRulesInput!) {\n    associateRules(input: $input) {\n      profile {\n        id\n      }\n    }\n  }\n"])))),m=(0,f.ZP)(a||(a=(0,p.Z)(["\n  mutation UpdateProfile($input: UpdateProfileInput!) {\n    updateProfile(input: $input) {\n      profile {\n        id\n        name\n        complianceThreshold\n        businessObjectiveId\n        description\n      }\n    }\n  }\n"]))),h=(0,f.ZP)(s||(s=(0,p.Z)(["\n  mutation createBusinessObjective($input: createBusinessObjectiveInput!) {\n    createBusinessObjective(input: $input) {\n      businessObjective {\n        id\n        title\n      }\n    }\n  }\n"]))),y=(0,f.ZP)(c||(c=(0,p.Z)(["\n  mutation DeleteProfile($input: deleteProfileInput!) {\n    deleteProfile(input: $input) {\n      profile {\n        id\n      }\n    }\n  }\n"]))),P=(0,f.ZP)(l||(l=(0,p.Z)(["\n  mutation DeleteReport($input: deleteTestResultsInput!) {\n    deleteTestResults(input: $input) {\n      profile {\n        id\n      }\n    }\n  }\n"]))),O=t(15861),w=t(87757),Z=t.n(w),x=t(29439),j=t(45442);var I=t(4942);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function $(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,I.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return D(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?D(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,a=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return u=e.done,e},e:function(e){a=!0,o=e},f:function(){try{u||null==t.return||t.return()}finally{if(a)throw o}}}}function D(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const S=function(){var e,n,t=(e=(0,j.D)(h),n=(0,x.Z)(e,1)[0],function(){var e=(0,O.Z)(Z().mark((function e(t,r){var i,o,u,a,s;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((null==t||null===(i=t.businessObjective)||void 0===i?void 0:i.title)!==(null==r?void 0:r.title)){e.next=4;break}return e.abrupt("return",null==t||null===(o=t.businessObjective)||void 0===o?void 0:o.id);case 4:if(""!==(null==r?void 0:r.title)){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,n({variables:{input:{title:r.title}}});case 10:if(u=e.sent,a=u.data,!(s=u.error)){e.next=15;break}throw s;case 15:return e.abrupt("return",a.createBusinessObjective.businessObjective.id);case 16:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),r=function(){var e=(0,j.D)(m),n=(0,x.Z)(e,1)[0],t=(0,j.D)(d),r=(0,x.Z)(t,1)[0];return function(){var e=(0,O.Z)(Z().mark((function e(t,i,o){var u,a,s,c,l,p,f,d,v,b,m,h,y,P,O,w,x;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=i.name,a=i.description,s=i.complianceThreshold,c={name:u,description:a,businessObjectiveId:o,complianceThreshold:parseFloat(s)},!t){e.next=11;break}return v=$({id:t},c),e.next=6,n({variables:{input:v}});case 6:b=e.sent,l=null===(f=b.data)||void 0===f||null===(d=f.updateProfile)||void 0===d?void 0:d.profile,p=b.error,e.next=18;break;case 11:return y=i.cloneFromProfileId,P=i.refId,O=i.benchmarkId,w=$($({},c),{},{cloneFromProfileId:y,refId:P,benchmarkId:O}),e.next=15,r({variables:{input:w}});case 15:x=e.sent,l=null===(m=x.data)||void 0===m||null===(h=m.createProfile)||void 0===h?void 0:h.profile,p=x.error;case 18:if(!p){e.next=20;break}throw p;case 20:return e.abrupt("return",l);case 21:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()}(),i=function(){var e=(0,j.D)(v),n=(0,x.Z)(e,1)[0];return function(){var e=(0,O.Z)(Z().mark((function e(t,r){var i,o,u,a,s;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.id,e.next=3,n({variables:{input:{id:o,systemIds:r.map((function(e){return e.id}))}}});case 3:if(u=e.sent,a=u.data,!(s=u.error)){e.next=8;break}throw s;case 8:return e.abrupt("return",null==a||null===(i=a.associateSystems)||void 0===i?void 0:i.profile);case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}(),o=function(){var e=(0,j.D)(b),n=(0,x.Z)(e,1)[0];return function(){var e=(0,O.Z)(Z().mark((function e(t,r){var i,o,u,a,s,c,l;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.id,o=t.osMinorVersion,u=t.ruleRefIds,a=r.find((function(e){return e.id===i||e.parentProfileId===i&&e.osMinorVersion===o})),s={id:null==a?void 0:a.id,ruleRefIds:u},e.next=5,n({variables:{input:s}});case 5:if(c=e.sent,!(l=c.error)){e.next=9;break}throw l;case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}();return function(){var e=(0,O.Z)(Z().mark((function e(n,u,a){var s,c,l,p,f,d,v,b,m,h,y,P;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=(null==u?void 0:u.selectedRuleRefIds)||[],l=3+c.length,p=0,f=function(){a&&a(++p/l)},e.next=6,t(n,null==u?void 0:u.businessObjective);case 6:return d=e.sent,f(),e.next=10,r(null===(s=n)||void 0===s?void 0:s.id,u,d);case 10:return v=e.sent,f(),n||(n=v),e.next=15,i(n,u.hosts);case 15:b=e.sent,m=b.policy.profiles,f(),h=g(c),e.prev=19,h.s();case 21:if((y=h.n()).done){e.next=28;break}return P=y.value,e.next=25,o(P,m);case 25:f();case 26:e.next=21;break;case 28:e.next=33;break;case 30:e.prev=30,e.t0=e.catch(19),h.e(e.t0);case 33:return e.prev=33,h.f(),e.finish(33);case 36:return e.abrupt("return",v);case 37:case"end":return e.stop()}}),e,null,[[19,30,33,36]])})));return function(n,t,r){return e.apply(this,arguments)}}()}},65811:(e,n,t)=>{t.d(n,{C:()=>o,q:()=>u});var r=t(30319),i=t(83215);function o(e){return(0,r.bh)().dispatch(e)}var u=function(e){o((0,i.wN)(e))}}}]);
"use strict";(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[9671],{84351:(e,n,t)=>{t.d(n,{_v:()=>h,_M:()=>P,a7:()=>C});var r,i,a,o,s,u,c,l,p=t(30168),d=t(67521),f=(0,d.ZP)(r||(r=(0,p.Z)(["\n  mutation CreateProfile($input: createProfileInput!) {\n    createProfile(input: $input) {\n      profile {\n        id\n      }\n    }\n  }\n"]))),v=(0,d.ZP)(i||(i=(0,p.Z)(["\n  mutation associateSystems($input: associateSystemsInput!) {\n    associateSystems(input: $input) {\n      profile {\n        id\n        policy {\n          id\n          profiles {\n            id\n            parentProfileId\n            osMinorVersion\n          }\n        }\n      }\n    }\n  }\n"]))),b=((0,d.ZP)(a||(a=(0,p.Z)(["\n  mutation associateProfiles($input: associateProfilesInput!) {\n    associateProfiles(input: $input) {\n      system {\n        id\n        name\n        profiles {\n          id\n          name\n        }\n      }\n    }\n  }\n"]))),(0,d.ZP)(o||(o=(0,p.Z)(["\n  mutation associateRules($input: associateRulesInput!) {\n    associateRules(input: $input) {\n      profile {\n        id\n      }\n    }\n  }\n"])))),m=(0,d.ZP)(s||(s=(0,p.Z)(["\n  mutation UpdateProfile($input: UpdateProfileInput!) {\n    updateProfile(input: $input) {\n      profile {\n        id\n        name\n        complianceThreshold\n        businessObjectiveId\n        description\n      }\n    }\n  }\n"]))),y=(0,d.ZP)(u||(u=(0,p.Z)(["\n  mutation createBusinessObjective($input: createBusinessObjectiveInput!) {\n    createBusinessObjective(input: $input) {\n      businessObjective {\n        id\n        title\n      }\n    }\n  }\n"]))),h=(0,d.ZP)(c||(c=(0,p.Z)(["\n  mutation DeleteProfile($input: deleteProfileInput!) {\n    deleteProfile(input: $input) {\n      profile {\n        id\n      }\n    }\n  }\n"]))),P=(0,d.ZP)(l||(l=(0,p.Z)(["\n  mutation DeleteReport($input: deleteTestResultsInput!) {\n    deleteTestResults(input: $input) {\n      profile {\n        id\n      }\n    }\n  }\n"]))),w=t(15861),x=t(87757),O=t.n(x),k=t(70885),Z=t(45442);var I=t(4942);function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){(0,I.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function D(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return $(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?$(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==t.return||t.return()}finally{if(s)throw a}}}}function $(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const C=function(){var e,n,t=(e=(0,Z.D)(y),n=(0,k.Z)(e,1)[0],function(){var e=(0,w.Z)(O().mark((function e(t,r){var i,a,o,s,u;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((null==t||null===(i=t.businessObjective)||void 0===i?void 0:i.title)!==(null==r?void 0:r.title)){e.next=4;break}return e.abrupt("return",null==t||null===(a=t.businessObjective)||void 0===a?void 0:a.id);case 4:if(""!==(null==r?void 0:r.title)){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,n({variables:{input:{title:r.title}}});case 10:if(o=e.sent,s=o.data,!(u=o.error)){e.next=15;break}throw u;case 15:return e.abrupt("return",s.createBusinessObjective.businessObjective.id);case 16:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),r=function(){var e=(0,Z.D)(m),n=(0,k.Z)(e,1)[0],t=(0,Z.D)(f),r=(0,k.Z)(t,1)[0];return function(){var e=(0,w.Z)(O().mark((function e(t,i,a){var o,s,u,c,l,p,d,f,v,b,m,y,h,P,w,x,k;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=i.name,s=i.description,u=i.complianceThreshold,c={name:o,description:s,businessObjectiveId:a,complianceThreshold:parseFloat(u)},!t){e.next=11;break}return v=g({id:t},c),e.next=6,n({variables:{input:v}});case 6:b=e.sent,l=null===(d=b.data)||void 0===d||null===(f=d.updateProfile)||void 0===f?void 0:f.profile,p=b.error,e.next=18;break;case 11:return h=i.cloneFromProfileId,P=i.refId,w=i.benchmarkId,x=g(g({},c),{},{cloneFromProfileId:h,refId:P,benchmarkId:w}),e.next=15,r({variables:{input:x}});case 15:k=e.sent,l=null===(m=k.data)||void 0===m||null===(y=m.createProfile)||void 0===y?void 0:y.profile,p=k.error;case 18:if(!p){e.next=20;break}throw p;case 20:return e.abrupt("return",l);case 21:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()}(),i=function(){var e=(0,Z.D)(v),n=(0,k.Z)(e,1)[0];return function(){var e=(0,w.Z)(O().mark((function e(t,r){var i,a,o,s,u;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,e.next=3,n({variables:{input:{id:a,systemIds:r.map((function(e){return e.id}))}}});case 3:if(o=e.sent,s=o.data,!(u=o.error)){e.next=8;break}throw u;case 8:return e.abrupt("return",null==s||null===(i=s.associateSystems)||void 0===i?void 0:i.profile);case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}(),a=function(){var e=(0,Z.D)(b),n=(0,k.Z)(e,1)[0];return function(){var e=(0,w.Z)(O().mark((function e(t,r){var i,a,o,s,u,c,l;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.id,a=t.osMinorVersion,o=t.ruleRefIds,s=r.find((function(e){return e.id===i||e.parentProfileId===i&&e.osMinorVersion===a})),u={id:null==s?void 0:s.id,ruleRefIds:o},e.next=5,n({variables:{input:u}});case 5:if(c=e.sent,!(l=c.error)){e.next=9;break}throw l;case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}();return function(){var e=(0,w.Z)(O().mark((function e(n,o,s){var u,c,l,p,d,f,v,b,m,y,h,P;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=(null==o?void 0:o.selectedRuleRefIds)||[],l=3+c.length,p=0,d=function(){s&&s(++p/l)},e.next=6,t(n,null==o?void 0:o.businessObjective);case 6:return f=e.sent,d(),e.next=10,r(null===(u=n)||void 0===u?void 0:u.id,o,f);case 10:return v=e.sent,d(),n||(n=v),e.next=15,i(n,o.hosts);case 15:b=e.sent,m=b.policy.profiles,d(),y=D(c),e.prev=19,y.s();case 21:if((h=y.n()).done){e.next=28;break}return P=h.value,e.next=25,a(P,m);case 25:d();case 26:e.next=21;break;case 28:e.next=33;break;case 30:e.prev=30,e.t0=e.catch(19),y.e(e.t0);case 33:return e.prev=33,y.f(),e.finish(33);case 36:return e.abrupt("return",v);case 37:case"end":return e.stop()}}),e,null,[[19,30,33,36]])})));return function(n,t,r){return e.apply(this,arguments)}}()}},89671:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var r=t(70885),i=t(89624),a=t(69957),o=t(45697),s=t.n(o),u=t(92950),c=t.n(u),l=t(334),p=t(45442),d=t(84351),f=t(83215),v=t(69073),b=t(65811),m=function(){var e=(0,u.useState)(!1),n=(0,r.Z)(e,2),t=n[0],o=n[1],s=(0,l.useLocation)(),m=(0,l.useHistory)(),y=s.state.policy,h=y.name,P=y.id,w=function(){m.push("/scappolicies")},x=(0,p.D)(d._v,{onCompleted:function(){(0,b.C)((0,f.wN)({variant:"success",title:'Deleted "'.concat(h,'" and its associated reports')})),w()},onError:function(e){(0,b.C)((0,f.wN)({variant:"danger",title:"Error removing policy",description:e.message})),w()}}),O=(0,r.Z)(x,1)[0];return c().createElement(v.C,{variant:i.ModalVariant.small,title:c().createElement(c().Fragment,null,c().createElement(a.ZP,{className:"ins-u-warning"}),c().createElement(i.Text,{component:"span",className:"policy-delete-header-text"},"Delete policy?")),ouiaId:"DeletePolicyModal",isOpen:!0,onClose:w,actions:[c().createElement(i.Button,{key:"destroy",ouiaId:"DeletePolicyButton","aria-label":"delete",isDisabled:!t,variant:"danger",onClick:function(){return O({variables:{input:{id:P}}})}},"Delete policy and associated reports"),c().createElement(i.Button,{key:"cancel",ouiaId:"DeletePolicyCancelButton",variant:"secondary",onClick:w},"Cancel")]},c().createElement(i.Text,{className:"policy-delete-body-text"},"Deleting the policy ",c().createElement("b",null,h)," will also delete its associated reports."),c().createElement(i.Checkbox,{label:"I understand this will delete the policy and all associated reports",id:"deleting-policy-check-".concat(P),isChecked:t,onChange:o}))};m.propTypes={policy:s().object};const y=m}}]);
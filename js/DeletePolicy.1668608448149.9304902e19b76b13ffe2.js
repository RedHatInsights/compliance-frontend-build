"use strict";(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[164],{89671:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var n=a(70885),l=a(76857),o=a(69957),c=a(45697),i=a.n(c),s=a(92950),r=a.n(s),d=a(96620),p=a(45442),u=a(84351),m=a(83215),y=a(85836),C=a(65811),h=function(){var e=(0,s.useState)(!1),t=(0,n.Z)(e,2),a=t[0],c=t[1],i=(0,d.useLocation)(),h=(0,d.useHistory)(),k=i.state.policy,E=k.name,b=k.id,f=function(){h.push("/scappolicies")},v=(0,p.D)(u._v,{onCompleted:function(){(0,C.C)((0,m.wN)({variant:"success",title:'Deleted "'.concat(E,'" and its associated reports')})),f()},onError:function(e){(0,C.C)((0,m.wN)({variant:"danger",title:"Error removing policy",description:e.message})),f()}}),g=(0,n.Z)(v,1)[0];return r().createElement(y.C,{variant:l.ModalVariant.small,title:r().createElement(r().Fragment,null,r().createElement(o.ZP,{className:"ins-u-warning"}),r().createElement(l.Text,{component:"span",className:"policy-delete-header-text"},"Delete policy?")),ouiaId:"DeletePolicyModal",isOpen:!0,onClose:f,actions:[r().createElement(l.Button,{key:"destroy",ouiaId:"DeletePolicyButton","aria-label":"delete",isDisabled:!a,variant:"danger",onClick:function(){return g({variables:{input:{id:b}}})}},"Delete policy and associated reports"),r().createElement(l.Button,{key:"cancel",ouiaId:"DeletePolicyCancelButton",variant:"secondary",onClick:f},"Cancel")]},r().createElement(l.Text,{className:"policy-delete-body-text"},"Deleting the policy ",r().createElement("b",null,E)," will also delete its associated reports."),r().createElement(l.Checkbox,{label:"I understand this will delete the policy and all associated reports",id:"deleting-policy-check-".concat(b),isChecked:a,onChange:c}))};h.propTypes={policy:i().object};const k=h}}]);
(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[164],{89671:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var n=a(28481),l=a(97066),o=a(69957),i=a(45697),c=a.n(i),s=a(92950),r=a.n(s),d=a(334),p=a(46829),u=a(84351),m=a(83215),y=a(65811),C=function(){var e=(0,s.useState)(!1),t=(0,n.Z)(e,2),a=t[0],i=t[1],c=(0,d.useLocation)(),C=(0,d.useHistory)(),h=c.state.policy,k=h.name,E=h.id,b=function(){C.push("/scappolicies")},f=(0,p.useMutation)(u._v,{onCompleted:function(){(0,y.C)((0,m.wN)({variant:"success",title:'Deleted "'.concat(k,'" and its associated reports')})),b()},onError:function(e){(0,y.C)((0,m.wN)({variant:"danger",title:"Error removing policy",description:e.message})),b()}}),v=(0,n.Z)(f,1)[0];return r().createElement(l.Modal,{variant:l.ModalVariant.small,title:r().createElement(r().Fragment,null,r().createElement(o.ZP,{className:"ins-u-warning"}),r().createElement(l.Text,{component:"span",className:"policy-delete-header-text"},"Delete policy?")),ouiaId:"DeletePolicyModal",isOpen:!0,onClose:b,actions:[r().createElement(l.Button,{key:"destroy",ouiaId:"DeletePolicyButton","aria-label":"delete",isDisabled:!a,variant:"danger",onClick:function(){return v({variables:{input:{id:E}}})}},"Delete policy and associated reports"),r().createElement(l.Button,{key:"cancel",ouiaId:"DeletePolicyCancelButton",variant:"secondary",onClick:b},"Cancel")]},r().createElement(l.Text,{className:"policy-delete-body-text"},"Deleting the policy ",r().createElement("b",null,k)," will also delete its associated reports."),r().createElement(l.Checkbox,{label:"I understand this will delete the policy and all associated reports",id:"deleting-policy-check-".concat(E),isChecked:a,onChange:i}))};C.propTypes={policy:c().object};const h=C}}]);
//# sourceMappingURL=../sourcemaps/DeletePolicy.b08ae15693ab9addbddc.js.map
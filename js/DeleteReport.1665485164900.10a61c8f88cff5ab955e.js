"use strict";(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[4953],{57481:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var o=n(70885),r=n(22938),a=n(45697),i=n.n(a),l=n(92950),c=n.n(l),s=n(334),u=n(45442),p=n(84351),d=n(83215),f=n(1963),C=n(65811),m=function(){var e,t=(0,s.useHistory)(),n=(0,s.useLocation)(),a=(null===(e=n.state)||void 0===e?void 0:e.profile).id,i=function(){t.push(n.state.background)},l=(0,u.D)(p._M,{onCompleted:function(){(0,C.C)((0,d.wN)({variant:"success",title:"Report deleted",description:"Systems associated with this policy will upload reports on the next check-in."})),t.push("/reports")},onError:function(e){(0,C.C)((0,d.wN)({variant:"danger",title:"Error removing report",description:e.message})),i()}}),m=(0,o.Z)(l,1)[0];return c().createElement(f.C,{isOpen:!0,variant:r.ModalVariant.small,title:"Delete report",ouiaId:"DeleteReportModal",onClose:i,actions:[c().createElement(r.Button,{key:"destroy",ouiaId:"DeleteReportButton","aria-label":"delete",variant:"danger",onClick:function(){return m({variables:{input:{profileId:a}}})}},"Delete report"),c().createElement(r.Button,{key:"cancel",ouiaId:"DeleteReportCancelButton",variant:"secondary",onClick:function(){return i()}},"Cancel")]},c().createElement(r.TextContent,null,"Deleting a report is permanent and cannot be undone."))};m.propTypes={onClose:i().func,isModalOpen:i().bool,onDelete:i().func,policyId:i().string},m.defaultProps={onDelete:function(){},onClose:function(){}};const v=m}}]);
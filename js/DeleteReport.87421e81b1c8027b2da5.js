(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[953],{57481:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var o=n(28481),r=n(97066),a=n(45697),i=n.n(a),l=n(92950),c=n.n(l),s=n(334),u=n(46829),p=n(84351),d=n(83215),f=n(65811),C=function(){var e,t=(0,s.useHistory)(),n=(0,s.useLocation)(),a=(null===(e=n.state)||void 0===e?void 0:e.profile).id,i=function(){t.push(n.state.background)},l=(0,u.useMutation)(p._M,{onCompleted:function(){(0,f.C)((0,d.wN)({variant:"success",title:"Report deleted",description:"Systems associated with this policy will upload reports on the next check-in."})),t.push("/reports")},onError:function(e){(0,f.C)((0,d.wN)({variant:"danger",title:"Error removing report",description:e.message})),i()}}),C=(0,o.Z)(l,1)[0];return c().createElement(r.Modal,{isOpen:!0,variant:r.ModalVariant.small,title:"Delete report",ouiaId:"DeleteReportModal",onClose:i,actions:[c().createElement(r.Button,{key:"destroy",ouiaId:"DeleteReportButton","aria-label":"delete",variant:"danger",onClick:function(){return C({variables:{input:{profileId:a}}})}},"Delete report"),c().createElement(r.Button,{key:"cancel",ouiaId:"DeleteReportCancelButton",variant:"secondary",onClick:function(){return i()}},"Cancel")]},c().createElement(r.TextContent,null,"Deleting a report is permanent and cannot be undone."))};C.propTypes={onClose:i().func,isModalOpen:i().bool,onDelete:i().func,policyId:i().string},C.defaultProps={onDelete:function(){},onClose:function(){}};const m=C}}]);
//# sourceMappingURL=../sourcemaps/DeleteReport.ecb912b2d7e842b78aba.js.map
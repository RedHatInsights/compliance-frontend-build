(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[953],{57481:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>m});var o=t(28481),r=t(30586),a=t(45697),l=t.n(a),i=t(92950),u=t.n(i),c=t(334),s=t(46829),p=t(84351),d=t(83215),f=t(65811),C=function(){var e,n=(0,c.useHistory)(),t=(0,c.useLocation)(),a=(null===(e=t.state)||void 0===e?void 0:e.profile).id,l=function(){n.push(t.state.background)},i=(0,s.useMutation)(p._M,{onCompleted:function(){(0,f.C)((0,d.wN)({variant:"success",title:"Removed report"})),n.push("/reports")},onError:function(e){(0,f.C)((0,d.wN)({variant:"danger",title:"Error removing report",description:e.message})),l()}}),C=(0,o.Z)(i,1)[0];return u().createElement(r.Modal,{isOpen:!0,variant:r.ModalVariant.small,title:"Delete report",ouiaId:"DeleteReportModal",onClose:l,actions:[u().createElement(r.Button,{key:"destroy",ouiaId:"DeleteReportButton","aria-label":"delete",variant:"danger",onClick:function(){return C({variables:{input:{profileId:a}}})}},"Delete report"),u().createElement(r.Button,{key:"cancel",ouiaId:"DeleteReportCancelButton",variant:"secondary",onClick:function(){return l()}},"Cancel")]},u().createElement(r.TextContent,null,"Deleting a report is permanent and cannot be undone."))};C.propTypes={onClose:l().func,isModalOpen:l().bool,onDelete:l().func,policyId:l().string},C.defaultProps={onDelete:function(){},onClose:function(){}};const m=C}}]);
//# sourceMappingURL=../sourcemaps/DeleteReport.007a3dd39697cd77f13c.js.map
(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[352,89],{92607:(e,r,t)=>{"use strict";t.d(r,{BJ:()=>o,oi:()=>u,x:()=>i,y5:()=>f});var i,o,a=t(70655),n=t(92950),l=t(12455),s=t(38296),c=t(1774),p=t(80164),d=t(62472),m=t(84709);!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(i||(i={})),function(e){e.default="default",e.plain="plain"}(o||(o={}));class f extends n.Component{constructor(e){super(e),this.inputRef=n.createRef(),this.observer=()=>{},this.handleChange=e=>{this.props.onChange&&this.props.onChange(e.currentTarget.value,e)},this.handleResize=()=>{const e=this.props.innerRef||this.inputRef;e&&e.current&&(0,p.fi)(e.current,String(this.props.value))},this.restoreText=()=>{const e=this.props.innerRef||this.inputRef;e.current.value=String(this.props.value),e.current.scrollLeft=e.current.scrollWidth},this.onFocus=e=>{const{isLeftTruncated:r,onFocus:t}=this.props;r&&this.restoreText(),t&&t(e)},this.onBlur=e=>{const{isLeftTruncated:r,onBlur:t}=this.props;r&&this.handleResize(),t&&t(e)},this.sanitizeInputValue=e=>"string"==typeof e?e.replace(/\n/g," "):e,e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified"),this.state={ouiaStateId:(0,d.ql)(f.displayName)}}componentDidMount(){if(this.props.isLeftTruncated){const e=this.props.innerRef||this.inputRef;this.observer=(0,m.p)(e.current,this.handleResize),this.handleResize()}}componentWillUnmount(){this.props.isLeftTruncated&&this.observer()}render(){const e=this.props,{innerRef:r,className:t,type:i,value:o,validated:p,onChange:m,onFocus:f,onBlur:h,isLeftTruncated:b,isReadOnly:g,readOnly:_,readOnlyVariant:T,isRequired:v,isDisabled:x,isIconSprite:C,iconVariant:y,customIconUrl:E,customIconDimensions:R,ouiaId:w,ouiaSafe:I}=e,z=(0,a.__rest)(e,["innerRef","className","type","value","validated","onChange","onFocus","onBlur","isLeftTruncated","isReadOnly","readOnly","readOnlyVariant","isRequired","isDisabled","isIconSprite","iconVariant","customIconUrl","customIconDimensions","ouiaId","ouiaSafe"]),N={};return E&&(N.backgroundImage=`url('${E}')`),R&&(N.backgroundSize=R),n.createElement("input",Object.assign({},z,{onFocus:this.onFocus,onBlur:this.onBlur,className:(0,s.css)(l.Z.formControl,C&&l.Z.modifiers.iconSprite,"plain"===T&&l.Z.modifiers.plain,p===c.LD.success&&l.Z.modifiers.success,p===c.LD.warning&&l.Z.modifiers.warning,(y&&"search"!==y||E)&&l.Z.modifiers.icon,y&&l.Z.modifiers[y],t),onChange:this.handleChange,type:i,value:this.sanitizeInputValue(o),"aria-invalid":z["aria-invalid"]?z["aria-invalid"]:p===c.LD.error,required:v,disabled:x,readOnly:!!T||g||_,ref:r||this.inputRef},(E||R)&&{style:N},(0,d.dp)(u.displayName,void 0!==w?w:this.state.ouiaStateId,I)))}}f.displayName="TextInputBase",f.defaultProps={"aria-label":null,className:"",isRequired:!1,validated:"default",isDisabled:!1,isReadOnly:!1,isIconSprite:!1,type:i.text,isLeftTruncated:!1,onChange:()=>{},ouiaSafe:!0};const u=n.forwardRef(((e,r)=>n.createElement(f,Object.assign({},e,{innerRef:r}))));u.displayName="TextInput"},84709:(e,r,t)=>{"use strict";t.d(r,{p:()=>o});var i=t(80164);const o=(e,r,t=!0)=>{let o;if(i.Nq){const{ResizeObserver:i}=window;if(e&&i){const a=new i((e=>{t?window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&r()})):Array.isArray(e)&&e.length>0&&r()}));a.observe(e),o=()=>a.unobserve(e)}else window.addEventListener("resize",r),o=()=>window.removeEventListener("resize",r)}return()=>{o&&o()}}},11924:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i}),t(78752);const i={form:"pf-c-form",formActions:"pf-c-form__actions",formFieldGroup:"pf-c-form__field-group",formFieldGroupBody:"pf-c-form__field-group-body",formFieldGroupHeader:"pf-c-form__field-group-header",formFieldGroupHeaderActions:"pf-c-form__field-group-header-actions",formFieldGroupHeaderDescription:"pf-c-form__field-group-header-description",formFieldGroupHeaderMain:"pf-c-form__field-group-header-main",formFieldGroupHeaderTitle:"pf-c-form__field-group-header-title",formFieldGroupHeaderTitleText:"pf-c-form__field-group-header-title-text",formFieldGroupToggle:"pf-c-form__field-group-toggle",formFieldGroupToggleButton:"pf-c-form__field-group-toggle-button",formFieldGroupToggleIcon:"pf-c-form__field-group-toggle-icon",formFieldset:"pf-c-form__fieldset",formGroup:"pf-c-form__group",formGroupControl:"pf-c-form__group-control",formGroupLabel:"pf-c-form__group-label",formGroupLabelHelp:"pf-c-form__group-label-help",formGroupLabelInfo:"pf-c-form__group-label-info",formGroupLabelMain:"pf-c-form__group-label-main",formHelperText:"pf-c-form__helper-text",formHelperTextIcon:"pf-c-form__helper-text-icon",formLabel:"pf-c-form__label",formLabelRequired:"pf-c-form__label-required",formLabelText:"pf-c-form__label-text",formSection:"pf-c-form__section",formSectionTitle:"pf-c-form__section-title",modifiers:{horizontal:"pf-m-horizontal",alignRight:"pf-m-align-right",noPaddingTop:"pf-m-no-padding-top",horizontalOnXs:"pf-m-horizontal-on-xs",horizontalOnSm:"pf-m-horizontal-on-sm",horizontalOnMd:"pf-m-horizontal-on-md",horizontalOnLg:"pf-m-horizontal-on-lg",horizontalOnXl:"pf-m-horizontal-on-xl",horizontalOn_2xl:"pf-m-horizontal-on-2xl",limitWidth:"pf-m-limit-width",action:"pf-m-action",info:"pf-m-info",disabled:"pf-m-disabled",inline:"pf-m-inline",stack:"pf-m-stack",error:"pf-m-error",success:"pf-m-success",warning:"pf-m-warning",inactive:"pf-m-inactive",hidden:"pf-m-hidden",expanded:"pf-m-expanded"},themeDark:"pf-theme-dark"}},12455:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i}),t(90479);const i={formControl:"pf-c-form-control",modifiers:{success:"pf-m-success",plain:"pf-m-plain",expanded:"pf-m-expanded",icon:"pf-m-icon",warning:"pf-m-warning",search:"pf-m-search",calendar:"pf-m-calendar",clock:"pf-m-clock",iconSprite:"pf-m-icon-sprite",placeholder:"pf-m-placeholder",resizeVertical:"pf-m-resize-vertical",resizeHorizontal:"pf-m-resize-horizontal"},themeDark:"pf-theme-dark"}},78089:(e,r,t)=>{"use strict";t.r(r),t.d(r,{ActionsColumn:()=>o.k,BodyCell:()=>n.W,BodyWrapper:()=>l.e,Caption:()=>re,CollapseColumn:()=>s.E,DraggableCell:()=>c.D,EditableSelectInputCell:()=>h,EditableTextCell:()=>g,ExpandableRowContent:()=>_.G,FavoritesCell:()=>P.n,HeaderCell:()=>v.q,HeaderCellInfoWrapper:()=>x.$,InnerScrollContainer:()=>oe,OuterScrollContainer:()=>ie,RowSelectVariant:()=>y.$,RowWrapper:()=>C.e,SelectColumn:()=>y.F,SortByDirection:()=>E.B,SortColumn:()=>E.H,Table:()=>i.i,TableBody:()=>a.R,TableComposable:()=>U.X,TableComposableContext:()=>U.d,TableContext:()=>M.X,TableGridBreakpoint:()=>q.L,TableHeader:()=>T.x,TableText:()=>R.cE,TableTextVariant:()=>R.Dk,TableVariant:()=>q.B,Tbody:()=>J.p,Td:()=>Y.Td,Th:()=>Q.Th,Thead:()=>X.h,Tr:()=>K.Tr,TreeRowWrapper:()=>$.k,Visibility:()=>D.E,WrapModifier:()=>R.Rl,applyCellEdits:()=>j.V6,breakWord:()=>O.kZ,calculateColumns:()=>A.R,cancelCellEdits:()=>j.Pj,capitalize:()=>j.kC,cellActions:()=>z.j,cellWidth:()=>N.d,classNames:()=>D.A,collapsible:()=>F.m5,compoundExpand:()=>G.z,defaultTitle:()=>W.o,editable:()=>S.A,emptyCol:()=>H.tL,emptyTD:()=>H.m6,expandable:()=>F.zW,expandedRow:()=>F.L1,favoritable:()=>B.n,fitContent:()=>O.E0,getErrorTextByValidator:()=>j.GD,headerCol:()=>k,info:()=>Z.u,isRowExpanded:()=>j.P6,mapOpenedRows:()=>A.A,mapProps:()=>H.jM,nowrap:()=>O.P8,parentId:()=>H.M3,scopeColTransformer:()=>H.UD,selectable:()=>w.e,sortable:()=>I.p,sortableFavorites:()=>I.$,textCenter:()=>L,toCamel:()=>j.fZ,treeRow:()=>V.G,truncate:()=>O.$G,validateCellEdits:()=>j.Ni,wrappable:()=>O.WT});var i=t(3351),o=t(55656),a=t(22860),n=t(59197),l=t(89783),s=t(99975),c=t(25691),p=t(92950),d=t(38296),m=t(65115),f=t(84115),u=t(11924);const h=({value:e,rowIndex:r,cellIndex:t,onSelect:i=(()=>{}),clearSelection:o,isOpen:a=!1,onToggle:n=(()=>{}),selections:l=[""],options:s=[],props:c})=>{const h=p.createElement(m.Select,Object.assign({},c.editableSelectProps,{onSelect:(e,o,a)=>{i(o,e,r,t,a)}},o&&{onClear:e=>{o(r,t,e)}},{isOpen:a,onToggle:n,selections:l}),s);return p.createElement(p.Fragment,null,p.createElement("div",{className:f.Z.inlineEditValue},Array.isArray(e)?e.join(", "):e),p.createElement("div",{className:f.Z.inlineEditInput},h,p.createElement("div",{className:(0,d.css)(u.Z.formHelperText,u.Z.modifiers.error),"aria-live":"polite"},c.errorText)))};h.displayName="EditableSelectInputCell";var b=t(92607);const g=({value:e,rowIndex:r,cellIndex:t,props:i,handleTextInputChange:o,inputAriaLabel:a,isDisabled:n=!1})=>p.createElement(p.Fragment,null,p.createElement("div",{className:f.Z.inlineEditValue},e),p.createElement("div",{className:f.Z.inlineEditInput},p.createElement(b.oi,{isDisabled:n,value:void 0!==i.editableValue?i.editableValue:e,validated:!1!==i.isValid?"default":"error",type:"text",onChange:(e,i)=>{o(e,i,r,t)},"aria-label":a}),p.createElement("div",{className:(0,d.css)(u.Z.formHelperText,u.Z.modifiers.error),"aria-live":"polite"},i.errorText)));g.displayName="EditableTextCell";var _=t(2613),T=t(6934),v=t(90572),x=t(93968),C=t(55573),y=t(78466),E=t(48585),R=t(68065),w=t(9268),I=t(7732),z=t(24562),N=t(1082),S=t(90294),O=t(46818);const L=()=>({textCenter:!0});var F=t(62480),G=t(56869);const k=(e="simple-node")=>(r,{rowIndex:t}={})=>{const i="object"==typeof r?r.title:r;return{component:"th",children:p.createElement("div",{id:`${e}${t}`},i)}};var D=t(22546),Z=t(86379),B=t(14404),V=t(1522),H=t(95352),A=t(53747),W=t(27923),j=t(8792),q=t(75863),M=t(62990),P=t(77823),$=t(71305),U=t(47906),X=t(58240),J=t(3134),K=t(86151),Q=t(10951),Y=t(31476),ee=t(70655);const re=e=>{var{children:r,className:t}=e,i=(0,ee.__rest)(e,["children","className"]);return p.createElement("caption",Object.assign({className:t},i),r)};re.displayName="Caption";var te=t(25624);const ie=e=>{var{children:r,className:t}=e,i=(0,ee.__rest)(e,["children","className"]);return p.createElement("div",Object.assign({className:(0,d.css)(t,te.Z.scrollOuterWrapper)},i),r)};ie.displayName="OuterScrollContainer";const oe=e=>{var{children:r,className:t}=e,i=(0,ee.__rest)(e,["children","className"]);return p.createElement("div",Object.assign({className:(0,d.css)(t,te.Z.scrollInnerWrapper)},i),r)};oe.displayName="InnerScrollContainer"},3674:(e,r,t)=>{var i=t(14636),o=t(280),a=t(98612);e.exports=function(e){return a(e)?i(e):o(e)}},45467:()=>{},11452:()=>{},34946:()=>{},32857:()=>{},28992:()=>{},30187:()=>{},90479:()=>{},78752:()=>{},21626:()=>{},66822:()=>{},54994:()=>{},44690:()=>{},37494:()=>{},67761:()=>{},49854:()=>{}}]);
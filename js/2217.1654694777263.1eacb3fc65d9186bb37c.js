"use strict";(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[2217],{47173:(e,n,i)=>{i.d(n,{Wu:()=>t,L$:()=>o,zx:()=>m});var t,o,s=i(70655),r=i(92950),l=i(80480),a=i(38296),d=i(37619),p=i(62472);!function(e){e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e.danger="danger",e.warning="warning",e.link="link",e.plain="plain",e.control="control"}(t||(t={})),function(e){e.button="button",e.submit="submit",e.reset="reset"}(o||(o={}));const c=e=>{var{children:n=null,className:i="",component:c="button",isActive:f=!1,isBlock:u=!1,isDisabled:h=!1,isAriaDisabled:g=!1,isLoading:b=null,isDanger:x=!1,spinnerAriaValueText:v,spinnerAriaLabelledBy:C,spinnerAriaLabel:O,isSmall:y=!1,isLarge:w=!1,inoperableEvents:_=["onClick","onKeyPress"],isInline:E=!1,type:R=o.button,variant:T=t.primary,iconPosition:D="left","aria-label":I=null,icon:k=null,ouiaId:N,ouiaSafe:L=!0,tabIndex:Z=null,innerRef:P}=e,M=(0,s.__rest)(e,["children","className","component","isActive","isBlock","isDisabled","isAriaDisabled","isLoading","isDanger","spinnerAriaValueText","spinnerAriaLabelledBy","spinnerAriaLabel","isSmall","isLarge","inoperableEvents","isInline","type","variant","iconPosition","aria-label","icon","ouiaId","ouiaSafe","tabIndex","innerRef"]);const S=(0,p.S$)(m.displayName,N,L,T),z=c,A="button"===z,F=E&&"span"===z,H=_.reduce(((e,n)=>Object.assign(Object.assign({},e),{[n]:e=>{e.preventDefault()}})),{});return r.createElement(z,Object.assign({},M,g?H:null,{"aria-disabled":h||g,"aria-label":I,className:(0,a.css)(l.Z.button,l.Z.modifiers[T],u&&l.Z.modifiers.block,h&&l.Z.modifiers.disabled,g&&l.Z.modifiers.ariaDisabled,f&&l.Z.modifiers.active,E&&T===t.link&&l.Z.modifiers.inline,x&&(T===t.secondary||T===t.link)&&l.Z.modifiers.danger,null!==b&&null!==n&&l.Z.modifiers.progress,b&&l.Z.modifiers.inProgress,y&&l.Z.modifiers.small,w&&l.Z.modifiers.displayLg,i),disabled:A?h:null,tabIndex:null!==Z?Z:h?A?null:-1:g?null:F?0:void 0,type:A||F?R:null,role:F?"button":null,ref:P},S),b&&r.createElement("span",{className:(0,a.css)(l.Z.buttonProgress)},r.createElement(d.$,{size:d.S.md,"aria-valuetext":v,"aria-label":O,"aria-labelledby":C})),T===t.plain&&null===n&&k?k:null,T!==t.plain&&k&&"left"===D&&r.createElement("span",{className:(0,a.css)(l.Z.buttonIcon,l.Z.modifiers.start)},k),n,T!==t.plain&&k&&"right"===D&&r.createElement("span",{className:(0,a.css)(l.Z.buttonIcon,l.Z.modifiers.end)},k))},m=r.forwardRef(((e,n)=>r.createElement(c,Object.assign({innerRef:n},e))));m.displayName="Button"},15627:(e,n,i)=>{i.d(n,{i:()=>d,N:()=>l});var t=i(70655),o=i(92950),s=i(38296);i.e(8992).then(i.t.bind(i,28992,23));const r={divider:"pf-c-divider",modifiers:{hidden:"pf-m-hidden",hiddenOnSm:"pf-m-hidden-on-sm",visibleOnSm:"pf-m-visible-on-sm",hiddenOnMd:"pf-m-hidden-on-md",visibleOnMd:"pf-m-visible-on-md",hiddenOnLg:"pf-m-hidden-on-lg",visibleOnLg:"pf-m-visible-on-lg",hiddenOnXl:"pf-m-hidden-on-xl",visibleOnXl:"pf-m-visible-on-xl",hiddenOn_2xl:"pf-m-hidden-on-2xl",visibleOn_2xl:"pf-m-visible-on-2xl",vertical:"pf-m-vertical",insetNone:"pf-m-inset-none",insetXs:"pf-m-inset-xs",insetSm:"pf-m-inset-sm",insetMd:"pf-m-inset-md",insetLg:"pf-m-inset-lg",insetXl:"pf-m-inset-xl",inset_2xl:"pf-m-inset-2xl",inset_3xl:"pf-m-inset-3xl",horizontalOnSm:"pf-m-horizontal-on-sm",verticalOnSm:"pf-m-vertical-on-sm",insetNoneOnSm:"pf-m-inset-none-on-sm",insetXsOnSm:"pf-m-inset-xs-on-sm",insetSmOnSm:"pf-m-inset-sm-on-sm",insetMdOnSm:"pf-m-inset-md-on-sm",insetLgOnSm:"pf-m-inset-lg-on-sm",insetXlOnSm:"pf-m-inset-xl-on-sm",inset_2xlOnSm:"pf-m-inset-2xl-on-sm",inset_3xlOnSm:"pf-m-inset-3xl-on-sm",horizontalOnMd:"pf-m-horizontal-on-md",verticalOnMd:"pf-m-vertical-on-md",insetNoneOnMd:"pf-m-inset-none-on-md",insetXsOnMd:"pf-m-inset-xs-on-md",insetSmOnMd:"pf-m-inset-sm-on-md",insetMdOnMd:"pf-m-inset-md-on-md",insetLgOnMd:"pf-m-inset-lg-on-md",insetXlOnMd:"pf-m-inset-xl-on-md",inset_2xlOnMd:"pf-m-inset-2xl-on-md",inset_3xlOnMd:"pf-m-inset-3xl-on-md",horizontalOnLg:"pf-m-horizontal-on-lg",verticalOnLg:"pf-m-vertical-on-lg",insetNoneOnLg:"pf-m-inset-none-on-lg",insetXsOnLg:"pf-m-inset-xs-on-lg",insetSmOnLg:"pf-m-inset-sm-on-lg",insetMdOnLg:"pf-m-inset-md-on-lg",insetLgOnLg:"pf-m-inset-lg-on-lg",insetXlOnLg:"pf-m-inset-xl-on-lg",inset_2xlOnLg:"pf-m-inset-2xl-on-lg",inset_3xlOnLg:"pf-m-inset-3xl-on-lg",horizontalOnXl:"pf-m-horizontal-on-xl",verticalOnXl:"pf-m-vertical-on-xl",insetNoneOnXl:"pf-m-inset-none-on-xl",insetXsOnXl:"pf-m-inset-xs-on-xl",insetSmOnXl:"pf-m-inset-sm-on-xl",insetMdOnXl:"pf-m-inset-md-on-xl",insetLgOnXl:"pf-m-inset-lg-on-xl",insetXlOnXl:"pf-m-inset-xl-on-xl",inset_2xlOnXl:"pf-m-inset-2xl-on-xl",inset_3xlOnXl:"pf-m-inset-3xl-on-xl",horizontalOn_2xl:"pf-m-horizontal-on-2xl",verticalOn_2xl:"pf-m-vertical-on-2xl",insetNoneOn_2xl:"pf-m-inset-none-on-2xl",insetXsOn_2xl:"pf-m-inset-xs-on-2xl",insetSmOn_2xl:"pf-m-inset-sm-on-2xl",insetMdOn_2xl:"pf-m-inset-md-on-2xl",insetLgOn_2xl:"pf-m-inset-lg-on-2xl",insetXlOn_2xl:"pf-m-inset-xl-on-2xl",inset_2xlOn_2xl:"pf-m-inset-2xl-on-2xl",inset_3xlOn_2xl:"pf-m-inset-3xl-on-2xl"}};var l,a=i(80164);!function(e){e.hr="hr",e.li="li",e.div="div"}(l||(l={}));const d=e=>{var{className:n,component:i=l.hr,isVertical:d=!1,inset:p,orientation:c}=e,m=(0,t.__rest)(e,["className","component","isVertical","inset","orientation"]);const f=i;return o.createElement(f,Object.assign({className:(0,s.css)(r.divider,d&&r.modifiers.vertical,(0,a.wt)(p,r),(0,a.wt)(c,r),n)},"hr"!==i&&{role:"separator"},m))};d.displayName="Divider"},56787:(e,n,i)=>{i.d(n,{L:()=>d});var t=i(70655),o=i(92950),s=i(73699),r=i(99355),l=i(17352),a=i(62472);const d=e=>{var{onSelect:n,ref:i,ouiaId:p,ouiaSafe:c,alignments:m,contextProps:f,menuAppendTo:u="inline",isFlipEnabled:h=!1}=e,g=(0,t.__rest)(e,["onSelect","ref","ouiaId","ouiaSafe","alignments","contextProps","menuAppendTo","isFlipEnabled"]);return o.createElement(r.Dl.Provider,{value:Object.assign({onSelect:e=>n&&n(e),toggleTextClass:s.Z.dropdownToggleText,toggleIconClass:s.Z.dropdownToggleImage,toggleIndicatorClass:s.Z.dropdownToggleIcon,menuClass:s.Z.dropdownMenu,itemClass:s.Z.dropdownMenuItem,toggleClass:s.Z.dropdownToggle,baseClass:s.Z.dropdown,baseComponent:"div",sectionClass:s.Z.dropdownGroup,sectionTitleClass:s.Z.dropdownGroupTitle,sectionComponent:"section",disabledClass:s.Z.modifiers.disabled,plainTextClass:s.Z.modifiers.text,ouiaId:(0,a.Z1)(d.displayName,p),ouiaSafe:c,ouiaComponentType:d.displayName,alignments:m},f)},o.createElement(l.R,Object.assign({menuAppendTo:u,isFlipEnabled:h},g)))};d.displayName="Dropdown"},84457:(e,n,i)=>{i.d(n,{h:()=>a});var t=i(70655),o=i(92950),s=i(33676),r=i(99355),l=i(62472);const a=e=>{var{children:n,className:i,component:d="a",isDisabled:p=!1,isAriaDisabled:c=!1,isPlainText:m=!1,isHovered:f=!1,href:u,tooltip:h,tooltipProps:g={},listItemClassName:b,onClick:x,ref:v,additionalChild:C,customChild:O,tabIndex:y=-1,icon:w=null,autoFocus:_,description:E=null,styleChildren:R,ouiaId:T,ouiaSafe:D}=e,I=(0,t.__rest)(e,["children","className","component","isDisabled","isAriaDisabled","isPlainText","isHovered","href","tooltip","tooltipProps","listItemClassName","onClick","ref","additionalChild","customChild","tabIndex","icon","autoFocus","description","styleChildren","ouiaId","ouiaSafe"]);const k=(0,l.S$)(a.displayName,T,D);return o.createElement(r.e4.Consumer,null,(e=>o.createElement(s.n,Object.assign({context:e,role:"menuitem",tabIndex:y,className:i,component:d,isDisabled:p,isAriaDisabled:c,isPlainText:m,isHovered:f,href:u,tooltip:h,tooltipProps:g,listItemClassName:b,onClick:x,additionalChild:C,customChild:O,icon:w,autoFocus:_,styleChildren:R,description:E},k,I),n)))};a.displayName="DropdownItem"},94868:(e,n,i)=>{i.d(n,{h:()=>p});var t=i(70655),o=i(92950),s=i(12181),r=i(73699),l=i(38296),a=i(80164),d=i(99355);class p extends o.Component{constructor(){super(...arguments),this.refsCollection=[],this.componentWillUnmount=()=>{document.removeEventListener("keydown",this.onKeyDown)},this.onKeyDown=e=>{if(!this.props.isOpen||!Array.from(document.activeElement.classList).find((e=>p.validToggleClasses.concat(this.context.toggleClass).includes(e))))return;const n=this.refsCollection;if("ArrowDown"===e.key){const i=n.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled")));p.focusFirstRef(i),e.stopPropagation()}else if("ArrowUp"===e.key){const i=n.length,t=n.slice(i-1,i),o=t&&t[0];p.focusFirstRef(o),e.stopPropagation()}},this.childKeyHandler=(e,n,i,t=!1)=>{(0,a.qG)(e,n,i,this.refsCollection,this.props.isGrouped?this.refsCollection:o.Children.toArray(this.props.children),t)},this.sendRef=(e,n,i,t)=>{this.refsCollection[e]=[],n.map(((n,i)=>{n?n.getAttribute?this.refsCollection[e][i]=t?null:n:this.refsCollection[e][i]=s.findDOMNode(n):this.refsCollection[e][i]=null}))}}componentDidMount(){document.addEventListener("keydown",this.onKeyDown);const{autoFocus:e}=this.props;if(e){const e=this.refsCollection.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled"))),n=e&&e[0];n&&n.focus&&setTimeout((()=>n.focus()))}}shouldComponentUpdate(){return this.refsCollection=[],!0}extendChildren(){const{children:e,isGrouped:n}=this.props;if(n){let n=0;return o.Children.map(e,(e=>{const i=e,t={};return i.props&&i.props.children&&(Array.isArray(i.props.children)?t.children=o.Children.map(i.props.children,(e=>o.cloneElement(e,{index:n++}))):t.children=o.cloneElement(i.props.children,{index:n++})),o.cloneElement(i,t)}))}return o.Children.map(e,((e,n)=>o.cloneElement(e,{index:n})))}render(){const e=this.props,{className:n,isOpen:i,position:s,children:p,component:c,isGrouped:m,setMenuComponentRef:f,openedOnEnter:u,alignments:h}=e,g=(0,t.__rest)(e,["className","isOpen","position","children","component","isGrouped","setMenuComponentRef","openedOnEnter","alignments"]);return o.createElement(d.e4.Provider,{value:{keyHandler:this.childKeyHandler,sendRef:this.sendRef}},"div"===c?o.createElement(d.Dl.Consumer,null,(({onSelect:e,menuClass:t})=>o.createElement("div",{className:(0,l.css)(t,s===d.ir.right&&r.Z.modifiers.alignRight,(0,a.wt)(h,r.Z,"align-"),n),hidden:!i,onClick:n=>e&&e(n),ref:f},p))):m&&o.createElement(d.Dl.Consumer,null,(({menuClass:e,menuComponent:t})=>{const p=t||"div";return o.createElement(p,Object.assign({},g,{className:(0,l.css)(e,s===d.ir.right&&r.Z.modifiers.alignRight,(0,a.wt)(h,r.Z,"align-"),n),hidden:!i,role:"menu",ref:f}),this.extendChildren())}))||o.createElement(d.Dl.Consumer,null,(({menuClass:e,menuComponent:t})=>{const p=t||c;return o.createElement(p,Object.assign({},g,{className:(0,l.css)(e,s===d.ir.right&&r.Z.modifiers.alignRight,(0,a.wt)(h,r.Z,"align-"),n),hidden:!i,role:"menu",ref:f}),this.extendChildren())})))}}p.displayName="DropdownMenu",p.defaultProps={className:"",isOpen:!0,openedOnEnter:!1,autoFocus:!0,position:d.ir.left,component:"ul",isGrouped:!1,setMenuComponentRef:null},p.validToggleClasses=[r.Z.dropdownToggle,r.Z.dropdownToggleButton],p.focusFirstRef=e=>{e&&e[0]&&e[0].focus&&setTimeout((()=>e[0].focus()))},p.contextType=d.Dl},74829:(e,n,i)=>{i.d(n,{u:()=>d});var t=i(70655),o=i(92950),s=i(99355),r=i(33676),l=i(15627),a=i(62472);const d=e=>{var{className:n="",ref:i,ouiaId:p,ouiaSafe:c}=e,m=(0,t.__rest)(e,["className","ref","ouiaId","ouiaSafe"]);const f=(0,a.S$)(d.displayName,p,c);return o.createElement(s.e4.Consumer,null,(e=>o.createElement(r.n,Object.assign({},m,{context:e,component:o.createElement(l.i,{component:l.N.div}),className:n,role:"separator"},f))))};d.displayName="DropdownSeparator"},17352:(e,n,i)=>{i.d(n,{R:()=>c});var t=i(70655),o=i(92950),s=i(73699),r=i(38296),l=i(94868),a=i(99355),d=i(62472),p=i(69121);class c extends o.Component{constructor(e){super(e),this.openedOnEnter=!1,this.baseComponentRef=o.createRef(),this.menuComponentRef=o.createRef(),this.onEnter=()=>{this.openedOnEnter=!0},this.setMenuComponentRef=e=>{this.menuComponentRef=e},this.getMenuComponentRef=()=>this.menuComponentRef,e.dropdownItems&&e.dropdownItems.length>0&&e.children&&console.error("Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered")}componentDidUpdate(){this.props.isOpen||(this.openedOnEnter=!1)}render(){const e=this.props,{children:n,className:i,direction:m,dropdownItems:f,isOpen:u,isPlain:h,isText:g,isGrouped:b,isFullHeight:x,onSelect:v,position:C,toggle:O,autoFocus:y,menuAppendTo:w,isFlipEnabled:_}=e,E=(0,t.__rest)(e,["children","className","direction","dropdownItems","isOpen","isPlain","isText","isGrouped","isFullHeight","onSelect","position","toggle","autoFocus","menuAppendTo","isFlipEnabled"]),R=O.props.id||"pf-dropdown-toggle-id-"+c.currentId++;let T,D,I=!1;f&&f.length>0?(T="ul",D=f,I=!0):(T="div",D=o.Children.toArray(n));const k=this.openedOnEnter;return o.createElement(a.Dl.Consumer,null,(({baseClass:e,baseComponent:n,id:t,ouiaId:c,ouiaComponentType:f,ouiaSafe:v,alignments:N})=>{const L=n,Z=o.createElement(l.h,Object.assign({},_&&{style:{position:"revert",minWidth:"min-content"}},{setMenuComponentRef:this.setMenuComponentRef,component:T,isOpen:u,position:C,"aria-labelledby":t?`${t}-toggle`:R,isGrouped:b,autoFocus:k&&y,alignments:N}),D),P=o.createElement("div",{className:(0,r.css)(e,m===a.dw.up&&s.Z.modifiers.top,C===a.ir.right&&s.Z.modifiers.alignRight,u&&s.Z.modifiers.expanded,i)},u&&Z),M=o.createElement(L,Object.assign({},E,{className:(0,r.css)(e,m===a.dw.up&&s.Z.modifiers.top,C===a.ir.right&&s.Z.modifiers.alignRight,u&&s.Z.modifiers.expanded,x&&s.Z.modifiers.fullHeight,i),ref:this.baseComponentRef},(0,d.dp)(f,c,v)),o.Children.map(O,(e=>o.cloneElement(e,{parentRef:this.baseComponentRef,getMenuRef:this.getMenuComponentRef,isOpen:u,id:R,isPlain:h,isText:g,"aria-haspopup":I,onEnter:()=>{this.onEnter(),e.props.onEnter&&e.props.onEnter()}}))),"inline"===w&&u&&Z);return"inline"===w?M:o.createElement(p.r,{trigger:M,popper:P,direction:m,position:C,appendTo:"parent"===w?(()=>this.baseComponentRef&&this.baseComponentRef.current?this.baseComponentRef.current.parentElement:null)():w,isVisible:u})}))}}c.displayName="DropdownWithContext",c.currentId=0,c.defaultProps={className:"",dropdownItems:[],isOpen:!1,isPlain:!1,isText:!1,isGrouped:!1,position:a.ir.left,direction:a.dw.down,onSelect:()=>{},autoFocus:!0,menuAppendTo:"inline",isFlipEnabled:!1}},33676:(e,n,i)=>{i.d(n,{n:()=>c});var t=i(70655),o=i(92950),s=i(38296),r=i(99355),l=i(64190),a=i(80164),d=i(35224),p=i(73699);class c extends o.Component{constructor(){super(...arguments),this.ref=o.createRef(),this.additionalRef=o.createRef(),this.getInnerNode=e=>e&&e.childNodes&&e.childNodes.length?e.childNodes[0]:e,this.onKeyDown=e=>{const n=e.target===this.ref.current?0:1;this.props.customChild||e.preventDefault(),"ArrowUp"===e.key?(this.props.context.keyHandler(this.props.index,n,l.Ow.UP),e.stopPropagation()):"ArrowDown"===e.key?(this.props.context.keyHandler(this.props.index,n,l.Ow.DOWN),e.stopPropagation()):"ArrowRight"===e.key?(this.props.context.keyHandler(this.props.index,n,l.Ow.RIGHT),e.stopPropagation()):"ArrowLeft"===e.key?(this.props.context.keyHandler(this.props.index,n,l.Ow.LEFT),e.stopPropagation()):"Enter"!==e.key&&" "!==e.key||(e.target.click(),this.props.enterTriggersArrowDown&&this.props.context.keyHandler(this.props.index,n,l.Ow.DOWN))},this.componentRef=e=>{this.ref.current=e;const{component:n}=this.props,i=n.ref;i&&("function"==typeof i?i(e):i.current=e)}}componentDidMount(){const{context:e,index:n,isDisabled:i,role:t,customChild:o,autoFocus:s}=this.props,r=o?this.getInnerNode(this.ref.current):this.ref.current;e.sendRef(n,[r,o?r:this.additionalRef.current],i,"separator"===t),s&&setTimeout((()=>r.focus()))}componentDidUpdate(){const{context:e,index:n,isDisabled:i,role:t,customChild:o}=this.props,s=o?this.getInnerNode(this.ref.current):this.ref.current;e.sendRef(n,[s,o?s:this.additionalRef.current],i,"separator"===t)}extendAdditionalChildRef(){const{additionalChild:e}=this.props;return o.cloneElement(e,{ref:this.additionalRef})}render(){const e=this.props,{className:n,children:i,isHovered:l,context:c,onClick:m,component:f,role:u,isDisabled:h,isAriaDisabled:g,isPlainText:b,index:x,href:v,tooltip:C,tooltipProps:O,id:y,componentID:w,listItemClassName:_,additionalChild:E,customChild:R,enterTriggersArrowDown:T,icon:D,autoFocus:I,styleChildren:k,description:N,inoperableEvents:L}=e,Z=(0,t.__rest)(e,["className","children","isHovered","context","onClick","component","role","isDisabled","isAriaDisabled","isPlainText","index","href","tooltip","tooltipProps","id","componentID","listItemClassName","additionalChild","customChild","enterTriggersArrowDown","icon","autoFocus","styleChildren","description","inoperableEvents"]);let P=(0,s.css)(D&&p.Z.modifiers.icon,g&&p.Z.modifiers.ariaDisabled,n);"a"===f?Z["aria-disabled"]=h||g:"button"===f&&(Z["aria-disabled"]=h||g,Z.type=Z.type||"button");const M=e=>o.cloneElement(e,Object.assign(Object.assign({},k&&{className:(0,s.css)(e.props.className,P)}),"separator"!==this.props.role&&{ref:this.componentRef})),S=e=>{const n=e,t=N?o.createElement(o.Fragment,null,o.createElement("div",{className:p.Z.dropdownMenuItemMain},D&&o.createElement("span",{className:(0,s.css)(p.Z.dropdownMenuItemIcon)},D),i),o.createElement("div",{className:p.Z.dropdownMenuItemDescription},N)):o.createElement(o.Fragment,null,D&&o.createElement("span",{className:(0,s.css)(p.Z.dropdownMenuItemIcon)},D),i);return o.createElement(n,Object.assign({},Z,h||g?(0,a.KG)(L):null,{href:v,ref:this.ref,className:P,id:w}),t)};return o.createElement(r.Dl.Consumer,null,(({onSelect:e,itemClass:n,disabledClass:i,plainTextClass:t})=>{return"separator"!==this.props.role&&(P=(0,s.css)(P,h&&i,b&&t,n,N&&p.Z.modifiers.description)),R?o.cloneElement(R,{ref:this.ref,onKeyDown:this.onKeyDown}):o.createElement("li",{className:_||null,role:u,onKeyDown:this.onKeyDown,onClick:n=>{h||g||(m(n),e(n))},id:y},(r=o.isValidElement(f)?M(f):S(f),C?o.createElement(d.u,Object.assign({content:C},O),r):r),E&&this.extendAdditionalChildRef());var r}))}}c.displayName="InternalDropdownItem",c.defaultProps={className:"",isHovered:!1,component:"a",role:"none",isDisabled:!1,isPlainText:!1,tooltipProps:{},onClick:e=>{},index:-1,context:{keyHandler:()=>{},sendRef:()=>{}},enterTriggersArrowDown:!1,icon:null,styleChildren:!0,description:null,inoperableEvents:["onClick","onKeyPress"]}},94024:(e,n,i)=>{i.d(n,{a:()=>l});var t=i(70655),o=i(92950),s=i(62165),r=i(1024);const l=e=>{var{id:n="",children:i=null,className:l="",isOpen:a=!1,"aria-label":d="Actions",parentRef:p=null,getMenuRef:c=null,isActive:m=!1,isPlain:f=!1,isDisabled:u=!1,bubbleEvent:h=!1,onToggle:g=(()=>{}),ref:b}=e,x=(0,t.__rest)(e,["id","children","className","isOpen","aria-label","parentRef","getMenuRef","isActive","isPlain","isDisabled","bubbleEvent","onToggle","ref"]);return o.createElement(r.Z,Object.assign({id:n,className:l,isOpen:a,"aria-label":d,parentRef:p,getMenuRef:c,isActive:m,isPlain:f,isDisabled:u,onToggle:g,bubbleEvent:h},x),o.createElement(s.ZP,null))};l.displayName="KebabToggle"},1024:(e,n,i)=>{i.d(n,{Z:()=>p});var t=i(70655),o=i(92950),s=i(73699),r=i(99355),l=i(38296),a=i(64190);const d={default:"",primary:s.Z.modifiers.primary,secondary:s.Z.modifiers.secondary};class p extends o.Component{constructor(){super(...arguments),this.buttonRef=o.createRef(),this.componentDidMount=()=>{document.addEventListener("click",this.onDocClick),document.addEventListener("touchstart",this.onDocClick),document.addEventListener("keydown",this.onEscPress)},this.componentWillUnmount=()=>{document.removeEventListener("click",this.onDocClick),document.removeEventListener("touchstart",this.onDocClick),document.removeEventListener("keydown",this.onEscPress)},this.onDocClick=e=>{const{isOpen:n,parentRef:i,onToggle:t,getMenuRef:o}=this.props,s=o&&o(),r=i&&i.current&&i.current.contains(e.target),l=s&&s.contains&&s.contains(e.target);!n||r||l||t(!1,e)},this.onEscPress=e=>{const{parentRef:n,getMenuRef:i}=this.props,t=e.keyCode||e.which,o=i&&i(),s=n&&n.current&&n.current.contains(e.target),r=o&&o.contains&&o.contains(e.target);!this.props.isOpen||t!==a.nx.ESCAPE_KEY&&"Tab"!==e.key||!s&&!r||(this.props.onToggle(!1,e),this.buttonRef.current.focus())},this.onKeyDown=e=>{("Tab"!==e.key||this.props.isOpen)&&("Tab"!==e.key&&"Enter"!==e.key&&" "!==e.key||!this.props.isOpen?"Enter"!==e.key&&" "!==e.key||this.props.isOpen||(this.props.bubbleEvent||e.stopPropagation(),e.preventDefault(),this.props.onToggle(!this.props.isOpen,e),this.props.onEnter()):(this.props.bubbleEvent||e.stopPropagation(),e.preventDefault(),this.props.onToggle(!this.props.isOpen,e)))}}render(){const e=this.props,{className:n,children:i,isOpen:a,isDisabled:p,isPlain:c,isText:m,isPrimary:f,isSplitButton:u,toggleVariant:h,onToggle:g,"aria-haspopup":b,isActive:x,bubbleEvent:v,onEnter:C,parentRef:O,getMenuRef:y,id:w,type:_}=e,E=(0,t.__rest)(e,["className","children","isOpen","isDisabled","isPlain","isText","isPrimary","isSplitButton","toggleVariant","onToggle","aria-haspopup","isActive","bubbleEvent","onEnter","parentRef","getMenuRef","id","type"]);return o.createElement(r.Dl.Consumer,null,(({toggleClass:e})=>o.createElement("button",Object.assign({},E,{id:w,ref:this.buttonRef,className:(0,l.css)(u?s.Z.dropdownToggleButton:e||s.Z.dropdownToggle,x&&s.Z.modifiers.active,c&&s.Z.modifiers.plain,m&&s.Z.modifiers.text,f&&s.Z.modifiers.primary,d[h],n),type:_||"button",onClick:e=>g(!a,e),"aria-expanded":a,"aria-haspopup":b,onKeyDown:e=>this.onKeyDown(e),disabled:p}),i)))}}p.displayName="Toggle",p.defaultProps={className:"",isOpen:!1,isActive:!1,isDisabled:!1,isPlain:!1,isText:!1,isPrimary:!1,isSplitButton:!1,onToggle:()=>{},onEnter:()=>{},bubbleEvent:!1}},99355:(e,n,i)=>{i.d(n,{ir:()=>t,dw:()=>o,Dl:()=>r,e4:()=>l});var t,o,s=i(92950);!function(e){e.right="right",e.left="left"}(t||(t={})),function(e){e.up="up",e.down="down"}(o||(o={}));const r=s.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),l=s.createContext({keyHandler:null,sendRef:null})},92607:(e,n,i)=>{i.d(n,{x:()=>t,y5:()=>m,oi:()=>f});var t,o=i(70655),s=i(92950),r=i(12455),l=i(38296),a=i(64190),d=i(80164),p=i(62472),c=i(84709);!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(t||(t={}));class m extends s.Component{constructor(e){super(e),this.inputRef=s.createRef(),this.observer=()=>{},this.handleChange=e=>{this.props.onChange&&this.props.onChange(e.currentTarget.value,e)},this.handleResize=()=>{const e=this.props.innerRef||this.inputRef;e&&e.current&&(0,d.fi)(e.current,String(this.props.value))},this.restoreText=()=>{const e=this.props.innerRef||this.inputRef;e.current.value=String(this.props.value),e.current.scrollLeft=e.current.scrollWidth},this.onFocus=e=>{const{isLeftTruncated:n,onFocus:i}=this.props;n&&this.restoreText(),i&&i(e)},this.onBlur=e=>{const{isLeftTruncated:n,onBlur:i}=this.props;n&&this.handleResize(),i&&i(e)},this.sanitizeInputValue=e=>"string"==typeof e?e.replace(/\n/g," "):e,e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified"),this.state={ouiaStateId:(0,p.ql)(m.displayName)}}componentDidMount(){if(this.props.isLeftTruncated){const e=this.props.innerRef||this.inputRef;this.observer=(0,c.p)(e.current,this.handleResize),this.handleResize()}}componentWillUnmount(){this.props.isLeftTruncated&&this.observer()}render(){const e=this.props,{innerRef:n,className:i,type:t,value:d,validated:c,onChange:m,onFocus:u,onBlur:h,isLeftTruncated:g,isReadOnly:b,isRequired:x,isDisabled:v,isIconSprite:C,iconVariant:O,customIconUrl:y,customIconDimensions:w,ouiaId:_,ouiaSafe:E}=e,R=(0,o.__rest)(e,["innerRef","className","type","value","validated","onChange","onFocus","onBlur","isLeftTruncated","isReadOnly","isRequired","isDisabled","isIconSprite","iconVariant","customIconUrl","customIconDimensions","ouiaId","ouiaSafe"]),T={};return y&&(T.backgroundImage=`url('${y}')`),w&&(T.backgroundSize=w),s.createElement("input",Object.assign({},R,{onFocus:this.onFocus,onBlur:this.onBlur,className:(0,l.css)(r.Z.formControl,C&&r.Z.modifiers.iconSprite,c===a.LD.success&&r.Z.modifiers.success,c===a.LD.warning&&r.Z.modifiers.warning,(O&&"search"!==O||y)&&r.Z.modifiers.icon,O&&r.Z.modifiers[O],i),onChange:this.handleChange,type:t,value:this.sanitizeInputValue(d),"aria-invalid":R["aria-invalid"]?R["aria-invalid"]:c===a.LD.error,required:x,disabled:v,readOnly:b,ref:n||this.inputRef},(y||w)&&{style:T},(0,p.dp)(f.displayName,void 0!==_?_:this.state.ouiaStateId,E)))}}m.displayName="TextInputBase",m.defaultProps={"aria-label":null,className:"",isRequired:!1,validated:"default",isDisabled:!1,isReadOnly:!1,isIconSprite:!1,type:t.text,isLeftTruncated:!1,onChange:()=>{},ouiaSafe:!0};const f=s.forwardRef(((e,n)=>s.createElement(m,Object.assign({},e,{innerRef:n}))));f.displayName="TextInput"},84709:(e,n,i)=>{i.d(n,{p:()=>o});var t=i(80164);const o=(e,n)=>{let i;if(t.Nq){const{ResizeObserver:t}=window;if(e&&t){const o=new t((e=>{window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&n()}))}));o.observe(e),i=()=>o.unobserve(e)}else window.addEventListener("resize",n),i=()=>window.removeEventListener("resize",n)}return()=>{i&&i()}}},9003:(e,n,i)=>{i.d(n,{sl:()=>o,LC:()=>s,ZP:()=>r});var t=i(40400);const o={name:"AngleDownIcon",height:512,width:320,svgPath:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z",yOffset:0,xOffset:0},s=(0,t.IU)(o),r=s},98614:(e,n,i)=>{i.d(n,{de:()=>o,nQ:()=>s,ZP:()=>r});var t=i(40400);const o={name:"CheckIcon",height:512,width:512,svgPath:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",yOffset:0,xOffset:0},s=(0,t.IU)(o),r=s},62165:(e,n,i)=>{i.d(n,{Lf:()=>o,HJ:()=>s,ZP:()=>r});var t=i(40400);const o={name:"EllipsisVIcon",height:512,width:192,svgPath:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z",yOffset:0,xOffset:0},s=(0,t.IU)(o),r=s},26499:(e,n,i)=>{i.d(n,{$g:()=>o,MJ:()=>s,ZP:()=>r});var t=i(40400);const o={name:"GripVerticalIcon",height:512,width:320,svgPath:"M96 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM288 32h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},s=(0,t.IU)(o),r=s},83668:(e,n,i)=>{i.d(n,{Mu:()=>o,r7:()=>s,ZP:()=>r});var t=i(40400);const o={name:"StarIcon",height:512,width:576,svgPath:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",yOffset:0,xOffset:0},s=(0,t.IU)(o),r=s},24307:(e,n,i)=>{i.d(n,{sk:()=>o,q1:()=>s,ZP:()=>r});var t=i(40400);const o={name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0},s=(0,t.IU)(o),r=s},80480:(e,n,i)=>{i.d(n,{Z:()=>t}),i.e(4946).then(i.t.bind(i,34946,23));const t={button:"pf-c-button",buttonIcon:"pf-c-button__icon",buttonProgress:"pf-c-button__progress",modifiers:{active:"pf-m-active",block:"pf-m-block",small:"pf-m-small",primary:"pf-m-primary",displayLg:"pf-m-display-lg",secondary:"pf-m-secondary",tertiary:"pf-m-tertiary",link:"pf-m-link",inline:"pf-m-inline",danger:"pf-m-danger",warning:"pf-m-warning",control:"pf-m-control",expanded:"pf-m-expanded",plain:"pf-m-plain",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",progress:"pf-m-progress",inProgress:"pf-m-in-progress",start:"pf-m-start",end:"pf-m-end",overpassFont:"pf-m-overpass-font"},spinner:"pf-c-spinner",themeDark:"pf-theme-dark"}},54783:(e,n,i)=>{i.d(n,{Z:()=>t}),i.e(2857).then(i.t.bind(i,32857,23));const t={check:"pf-c-check",checkBody:"pf-c-check__body",checkDescription:"pf-c-check__description",checkInput:"pf-c-check__input",checkLabel:"pf-c-check__label",modifiers:{standalone:"pf-m-standalone",disabled:"pf-m-disabled"}}},73699:(e,n,i)=>{i.d(n,{Z:()=>t}),i.e(187).then(i.t.bind(i,30187,23));const t={badge:"pf-c-badge",check:"pf-c-check",divider:"pf-c-divider",dropdown:"pf-c-dropdown",dropdownGroup:"pf-c-dropdown__group",dropdownGroupTitle:"pf-c-dropdown__group-title",dropdownMenu:"pf-c-dropdown__menu",dropdownMenuItem:"pf-c-dropdown__menu-item",dropdownMenuItemDescription:"pf-c-dropdown__menu-item-description",dropdownMenuItemIcon:"pf-c-dropdown__menu-item-icon",dropdownMenuItemMain:"pf-c-dropdown__menu-item-main",dropdownToggle:"pf-c-dropdown__toggle",dropdownToggleButton:"pf-c-dropdown__toggle-button",dropdownToggleCheck:"pf-c-dropdown__toggle-check",dropdownToggleIcon:"pf-c-dropdown__toggle-icon",dropdownToggleImage:"pf-c-dropdown__toggle-image",dropdownToggleText:"pf-c-dropdown__toggle-text",menu:"pf-c-menu",modifiers:{fullHeight:"pf-m-full-height",expanded:"pf-m-expanded",action:"pf-m-action",disabled:"pf-m-disabled",plain:"pf-m-plain",text:"pf-m-text",splitButton:"pf-m-split-button",primary:"pf-m-primary",active:"pf-m-active",secondary:"pf-m-secondary",top:"pf-m-top",alignRight:"pf-m-align-right",alignLeft:"pf-m-align-left",alignRightOnSm:"pf-m-align-right-on-sm",alignLeftOnSm:"pf-m-align-left-on-sm",alignRightOnMd:"pf-m-align-right-on-md",alignLeftOnMd:"pf-m-align-left-on-md",alignRightOnLg:"pf-m-align-right-on-lg",alignLeftOnLg:"pf-m-align-left-on-lg",alignRightOnXl:"pf-m-align-right-on-xl",alignLeftOnXl:"pf-m-align-left-on-xl",alignRightOn_2xl:"pf-m-align-right-on-2xl",alignLeftOn_2xl:"pf-m-align-left-on-2xl",ariaDisabled:"pf-m-aria-disabled",icon:"pf-m-icon",description:"pf-m-description"},themeDark:"pf-theme-dark"}},11924:(e,n,i)=>{i.d(n,{Z:()=>t}),i.e(8752).then(i.t.bind(i,78752,23));const t={form:"pf-c-form",formActions:"pf-c-form__actions",formFieldGroup:"pf-c-form__field-group",formFieldGroupBody:"pf-c-form__field-group-body",formFieldGroupHeader:"pf-c-form__field-group-header",formFieldGroupHeaderActions:"pf-c-form__field-group-header-actions",formFieldGroupHeaderDescription:"pf-c-form__field-group-header-description",formFieldGroupHeaderMain:"pf-c-form__field-group-header-main",formFieldGroupHeaderTitle:"pf-c-form__field-group-header-title",formFieldGroupHeaderTitleText:"pf-c-form__field-group-header-title-text",formFieldGroupToggle:"pf-c-form__field-group-toggle",formFieldGroupToggleButton:"pf-c-form__field-group-toggle-button",formFieldGroupToggleIcon:"pf-c-form__field-group-toggle-icon",formFieldset:"pf-c-form__fieldset",formGroup:"pf-c-form__group",formGroupControl:"pf-c-form__group-control",formGroupLabel:"pf-c-form__group-label",formGroupLabelHelp:"pf-c-form__group-label-help",formGroupLabelInfo:"pf-c-form__group-label-info",formGroupLabelMain:"pf-c-form__group-label-main",formHelperText:"pf-c-form__helper-text",formHelperTextIcon:"pf-c-form__helper-text-icon",formLabel:"pf-c-form__label",formLabelRequired:"pf-c-form__label-required",formLabelText:"pf-c-form__label-text",formSection:"pf-c-form__section",formSectionTitle:"pf-c-form__section-title",modifiers:{horizontal:"pf-m-horizontal",alignRight:"pf-m-align-right",noPaddingTop:"pf-m-no-padding-top",horizontalOnXs:"pf-m-horizontal-on-xs",horizontalOnSm:"pf-m-horizontal-on-sm",horizontalOnMd:"pf-m-horizontal-on-md",horizontalOnLg:"pf-m-horizontal-on-lg",horizontalOnXl:"pf-m-horizontal-on-xl",horizontalOn_2xl:"pf-m-horizontal-on-2xl",limitWidth:"pf-m-limit-width",action:"pf-m-action",info:"pf-m-info",disabled:"pf-m-disabled",inline:"pf-m-inline",stack:"pf-m-stack",error:"pf-m-error",success:"pf-m-success",warning:"pf-m-warning",inactive:"pf-m-inactive",hidden:"pf-m-hidden",expanded:"pf-m-expanded"},themeDark:"pf-theme-dark"}},12455:(e,n,i)=>{i.d(n,{Z:()=>t}),i.e(479).then(i.t.bind(i,90479,23));const t={formControl:"pf-c-form-control",modifiers:{success:"pf-m-success",expanded:"pf-m-expanded",icon:"pf-m-icon",warning:"pf-m-warning",search:"pf-m-search",calendar:"pf-m-calendar",clock:"pf-m-clock",iconSprite:"pf-m-icon-sprite",placeholder:"pf-m-placeholder",resizeVertical:"pf-m-resize-vertical",resizeHorizontal:"pf-m-resize-horizontal"},themeDark:"pf-theme-dark"}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/RtB":function(e,t,n){"use strict";var r=n("q1tI"),a=n("5AJ6");t.a=Object(a.a)(r.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight")},"4Hym":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){return e.scrollTop};function a(e,t){var n=e.timeout,r=e.style,a=void 0===r?{}:r;return{duration:a.transitionDuration||"number"==typeof n?n:n[t.mode]||0,delay:a.transitionDelay}}},"980c":function(e,t,n){"use strict";function r(e,t){var n=e.substring(0,e.lastIndexOf("/"));return t.get(n)}function a(e){var t=new Map,n=[];return e.forEach((function(e){var a={name:e.title,id:e.ref,type:"article"};if(null!==e.topic){var o;if(t.has(e.topic))o=t.get(e.topic);else{var i=function(e,t){for(var n=e;n.fullName.includes("/");)n=r(n.fullName,t);return n}(o=function e(t,n){var r=t.includes("/"),a={name:r?t.substring(t.lastIndexOf("/")+1):t,fullName:t,childrens:[],type:"topic"};if(r){var o=t.substring(0,t.lastIndexOf("/"));(n.has(o)?n.get(o):e(o,n)).childrens.push(a)}return n.set(t,a),a}(e.topic,t),t);n.includes(i)||n.push(i)}o.childrens.push(a)}else n.push(a)})),{items:n}}n.d(t,"a",(function(){return a}))},dRu9:function(e,t,n){"use strict";var r=n("zLVn"),a=n("dI71"),o=n("q1tI"),i=n.n(o),c=n("i8i4"),u=n.n(c),s=!1,l=n("0PSK"),d=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(a.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[u.a.findDOMNode(this),r],o=a[0],i=a[1],c=this.getTimeouts(),l=r?c.appear:c.enter;!e&&!n||s?this.safeSetState({status:"entered"},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:"entering"},(function(){t.props.onEntering(o,i),t.onTransitionEnd(l,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:u.a.findDOMNode(this);t&&!s?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:u.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(r.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.a.createElement(l.a.Provider,{value:null},"function"==typeof n?n(e,a):i.a.cloneElement(i.a.Children.only(n),a))},t}(i.a.Component);function f(){}d.contextType=l.a,d.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:f,onEntering:f,onEntered:f,onExit:f,onExiting:f,onExited:f},d.UNMOUNTED="unmounted",d.EXITED="exited",d.ENTERING="entering",d.ENTERED="entered",d.EXITING="exiting";t.a=d},"o9S+":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("kKAo"),a=n("R/WZ"),o=n("iuhU"),i=n("q1tI"),c=n.n(i),u=n("kfjn"),s=function(e){var t=e.children,n=e.className,a=l();return c.a.createElement(r.a,{className:Object(o.a)(a.paper,n)},t)},l=Object(a.a)({paper:{margin:"24px",border:u.d.borders.tableBorder,backgroundColor:u.d.colors.transparentBackground}})},tr08:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("aXM8"),a=(n("q1tI"),n("cNwE"));function o(){return Object(r.a)()||a.a}},x3PS:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var r=n("q1tI"),a=n.n(r),o=n("ofer"),i=n("R/WZ"),c=n("wx14"),u=n("Ff2n"),s=n("iuhU"),l=n("ODXe"),d=n("dRu9"),f=n("H2TA"),p=n("wpWl"),h=n("4Hym"),m=n("tr08"),v=n("bfFb"),x=r.forwardRef((function(e,t){var n=e.children,a=e.classes,o=e.className,i=e.collapsedHeight,f=e.collapsedSize,x=void 0===f?"0px":f,E=e.component,g=void 0===E?"div":E,b=e.disableStrictModeCompat,y=void 0!==b&&b,O=e.in,C=e.onEnter,N=e.onEntered,S=e.onEntering,k=e.onExit,I=e.onExited,j=e.onExiting,T=e.style,w=e.timeout,R=void 0===w?p.b.standard:w,D=e.TransitionComponent,M=void 0===D?d.a:D,L=Object(u.a)(e,["children","classes","className","collapsedHeight","collapsedSize","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),P=Object(m.a)(),A=r.useRef(),K=r.useRef(null),F=r.useRef(),H="number"==typeof(i||x)?"".concat(i||x,"px"):i||x;r.useEffect((function(){return function(){clearTimeout(A.current)}}),[]);var $=P.unstable_strictMode&&!y,z=r.useRef(null),B=Object(v.a)(t,$?z:void 0),U=function(e){return function(t,n){if(e){var r=$?[z.current,t]:[t,n],a=Object(l.a)(r,2),o=a[0],i=a[1];void 0===i?e(o):e(o,i)}}},q=U((function(e,t){e.style.height=H,C&&C(e,t)})),V=U((function(e,t){var n=K.current?K.current.clientHeight:0,r=Object(h.a)({style:T,timeout:R},{mode:"enter"}).duration;if("auto"===R){var a=P.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(a,"ms"),F.current=a}else e.style.transitionDuration="string"==typeof r?r:"".concat(r,"ms");e.style.height="".concat(n,"px"),S&&S(e,t)})),W=U((function(e,t){e.style.height="auto",N&&N(e,t)})),J=U((function(e){var t=K.current?K.current.clientHeight:0;e.style.height="".concat(t,"px"),k&&k(e)})),X=U(I),G=U((function(e){var t=K.current?K.current.clientHeight:0,n=Object(h.a)({style:T,timeout:R},{mode:"exit"}).duration;if("auto"===R){var r=P.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(r,"ms"),F.current=r}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style.height=H,j&&j(e)}));return r.createElement(M,Object(c.a)({in:O,onEnter:q,onEntered:W,onEntering:V,onExit:J,onExited:X,onExiting:G,addEndListener:function(e,t){var n=$?e:t;"auto"===R&&(A.current=setTimeout(n,F.current||0))},nodeRef:$?z:void 0,timeout:"auto"===R?null:R},L),(function(e,t){return r.createElement(g,Object(c.a)({className:Object(s.a)(a.root,a.container,o,{entered:a.entered,exited:!O&&"0px"===H&&a.hidden}[e]),style:Object(c.a)({minHeight:H},T),ref:B},t),r.createElement("div",{className:a.wrapper,ref:K},r.createElement("div",{className:a.wrapperInner},n)))}))}));x.muiSupportAuto=!0;var E=Object(f.a)((function(e){return{root:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(x),g=n("ye/S");var b=r.createContext({}),y=r.forwardRef((function(e,t){var n=e.children,a=e.classes,i=e.className,l=e.collapseIcon,d=e.endIcon,f=e.expandIcon,p=e.icon,h=e.label,x=e.nodeId,g=e.onClick,y=e.onLabelClick,O=e.onIconClick,C=e.onFocus,N=e.onKeyDown,S=e.onMouseDown,k=e.TransitionComponent,I=void 0===k?E:k,j=e.TransitionProps,T=Object(u.a)(e,["children","classes","className","collapseIcon","endIcon","expandIcon","icon","label","nodeId","onClick","onLabelClick","onIconClick","onFocus","onKeyDown","onMouseDown","TransitionComponent","TransitionProps"]),w=r.useContext(b),R=w.icons,D=w.focus,M=w.focusFirstNode,L=w.focusLastNode,P=w.focusNextNode,A=w.focusPreviousNode,K=w.focusByFirstCharacter,F=w.selectNode,H=w.selectRange,$=w.selectNextNode,z=w.selectPreviousNode,B=w.rangeSelectToFirst,U=w.rangeSelectToLast,q=w.selectAllNodes,V=w.expandAllSiblings,W=w.toggleExpansion,J=w.isExpanded,X=w.isFocused,G=w.isSelected,Z=w.isTabbable,_=w.multiSelect,Q=w.getParent,Y=w.mapFirstChar,ee=w.addNodeToNodeMap,te=w.removeNodeFromNodeMap,ne=r.useRef(null),re=r.useRef(null),ae=Object(v.a)(ne,t),oe=p,ie=Boolean(Array.isArray(n)?n.length:n),ce=!!J&&J(x),ue=!!X&&X(x),se=!!Z&&Z(x),le=!!G&&G(x),de=R||{},fe=Object(m.a)();oe||(ie?(oe=ce?l||de.defaultCollapseIcon:f||de.defaultExpandIcon)||(oe=de.defaultParentIcon):oe=d||de.defaultEndIcon);var pe,he=function(e){return ie&&(ce?P(x):W(e)),!0},me=function(e){if(ce)return W(e,x),!0;var t=Q(x);return!!t&&(D(t),!0)};return r.useEffect((function(){if(ee){var e=[];r.Children.forEach(n,(function(t){r.isValidElement(t)&&t.props.nodeId&&e.push(t.props.nodeId)})),ee(x,e)}}),[n,x,ee]),r.useEffect((function(){if(te)return function(){te(x)}}),[x,te]),r.useEffect((function(){Y&&h&&Y(x,re.current.textContent.substring(0,1).toLowerCase())}),[Y,x,h]),r.useEffect((function(){ue&&ne.current.focus()}),[ue]),_?pe=le:le&&(pe=!0),r.createElement("li",Object(c.a)({className:Object(s.a)(a.root,i,ce&&a.expanded,le&&a.selected),role:"treeitem",onKeyDown:function(e){var t=!1,n=e.key;if(!e.altKey&&e.currentTarget===e.target){var r,a=e.ctrlKey||e.metaKey;switch(n){case" ":ne.current===e.currentTarget&&(t=_&&e.shiftKey?H(e,{end:x}):_?F(e,x,!0):F(e,x)),e.stopPropagation();break;case"Enter":ne.current===e.currentTarget&&ie&&(W(e),t=!0),e.stopPropagation();break;case"ArrowDown":_&&e.shiftKey&&$(e,x),P(x),t=!0;break;case"ArrowUp":_&&e.shiftKey&&z(e,x),A(x),t=!0;break;case"ArrowRight":t="rtl"===fe.direction?me(e):he(e);break;case"ArrowLeft":t="rtl"===fe.direction?he(e):me(e);break;case"Home":_&&a&&e.shiftKey&&B(e,x),M(),t=!0;break;case"End":_&&a&&e.shiftKey&&U(e,x),L(),t=!0;break;default:"*"===n?(V(e,x),t=!0):_&&a&&"a"===n.toLowerCase()?t=q(e):!a&&!e.shiftKey&&((r=n)&&1===r.length&&r.match(/\S/))&&(K(x,n),t=!0)}t&&(e.preventDefault(),e.stopPropagation()),N&&N(e)}},onFocus:function(e){ue||e.currentTarget!==e.target||D(x),C&&C(e)},"aria-expanded":ie?ce:null,"aria-selected":pe,ref:ae,tabIndex:se?0:-1},T),r.createElement("div",{className:a.content,onClick:function(e){ue||D(x);var t=_&&(e.shiftKey||e.ctrlKey||e.metaKey);!ie||e.defaultPrevented||t&&J(x)||W(e,x),t?e.shiftKey?H(e,{end:x}):F(e,x,!0):F(e,x),g&&g(e)},onMouseDown:function(e){(e.shiftKey||e.ctrlKey||e.metaKey)&&e.preventDefault(),S&&S(e)},ref:re},r.createElement("div",{onClick:O,className:a.iconContainer},oe),r.createElement(o.a,{onClick:y,component:"div",className:a.label},h)),n&&r.createElement(I,Object(c.a)({unmountOnExit:!0,className:a.group,in:ce,component:"ul",role:"group"},j),n))})),O=Object(f.a)((function(e){return{root:{listStyle:"none",margin:0,padding:0,outline:0,WebkitTapHighlightColor:"transparent","&:focus > $content $label":{backgroundColor:e.palette.action.hover},"&$selected > $content $label":{backgroundColor:Object(g.a)(e.palette.primary.main,e.palette.action.selectedOpacity)},"&$selected > $content $label:hover, &$selected:focus > $content $label":{backgroundColor:Object(g.a)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},expanded:{},selected:{},group:{margin:0,padding:0,marginLeft:17},content:{width:"100%",display:"flex",alignItems:"center",cursor:"pointer"},iconContainer:{marginRight:4,width:15,display:"flex",flexShrink:0,justifyContent:"center","& svg":{fontSize:18}},label:{width:"100%",paddingLeft:4,position:"relative","&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}}}),{name:"MuiTreeItem"})(y),C=n("yCxk");var N=function(e,t,n){for(var r=t;r<e.length;r+=1)if(n===e[r])return r;return-1},S=[],k=[],I=r.forwardRef((function(e,t){var n=e.children,a=e.classes,o=e.className,i=e.defaultCollapseIcon,d=e.defaultEndIcon,f=e.defaultExpanded,p=void 0===f?S:f,h=e.defaultExpandIcon,m=e.defaultParentIcon,v=e.defaultSelected,x=void 0===v?k:v,E=e.disableSelection,g=void 0!==E&&E,y=e.multiSelect,O=void 0!==y&&y,I=e.expanded,j=e.onNodeSelect,T=e.onNodeToggle,w=e.selected,R=Object(u.a)(e,["children","classes","className","defaultCollapseIcon","defaultEndIcon","defaultExpanded","defaultExpandIcon","defaultParentIcon","defaultSelected","disableSelection","multiSelect","expanded","onNodeSelect","onNodeToggle","selected"]),D=r.useState(null),M=D[0],L=D[1],P=r.useState(null),A=P[0],K=P[1],F=r.useRef({}),H=r.useRef({}),$=r.useRef([]),z=Object(C.a)({controlled:I,default:p,name:"TreeView",state:"expanded"}),B=Object(l.a)(z,2),U=B[0],q=B[1],V=Object(C.a)({controlled:w,default:x,name:"TreeView",state:"selected"}),W=Object(l.a)(V,2),J=W[0],X=W[1],G=r.useCallback((function(e){return!!Array.isArray(U)&&-1!==U.indexOf(e)}),[U]),Z=r.useCallback((function(e){return Array.isArray(J)?-1!==J.indexOf(e):J===e}),[J]),_=function(e){var t=$.current.indexOf(e);return-1!==t&&t+1<$.current.length?$.current[t+1]:null},Q=function(e){var t=$.current.indexOf(e);return-1!==t&&t-1>=0?$.current[t-1]:null},Y=function(){return $.current[$.current.length-1]},ee=function(){return $.current[0]},te=function(e){e&&(L(e),K(e))},ne=r.useRef(null),re=r.useRef(!1),ae=r.useRef([]),oe=function(e,t){var n=J,r=t.start,a=t.next,o=t.current;a&&o&&(-1===ae.current.indexOf(o)&&(ae.current=[]),re.current?-1!==ae.current.indexOf(a)?(n=n.filter((function(e){return e===r||e!==o})),ae.current=ae.current.filter((function(e){return e===r||e!==o}))):(n.push(a),ae.current.push(a)):(n.push(a),ae.current.push(o,a)),j&&j(e,n),X(n))},ie=function(e,t){var n=J,r=t.start,a=t.end;re.current&&(n=J.filter((function(e){return-1===ae.current.indexOf(e)})));var o=function(e,t){var n=$.current.indexOf(e),r=$.current.indexOf(t),a=Math.min(n,r),o=Math.max(n,r);return $.current.slice(a,o+1)}(r,a);ae.current=o;var i=n.concat(o);i=i.filter((function(e,t){return i.indexOf(e)===t})),j&&j(e,i),X(i)},ce=function(e,t){var n=[];n=-1!==J.indexOf(t)?J.filter((function(e){return e!==t})):[t].concat(J),j&&j(e,n),X(n)},ue=function(e,t){var n=O?[t]:t;j&&j(e,n),X(n)},se=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t.start,a=void 0===r?ne.current:r,o=t.end,i=t.current;return n?oe(e,{start:a,next:o,current:i}):ie(e,{start:a,end:o}),re.current=!0,!0},le=r.useCallback((function(e){var t=F.current[e],n=[];return t&&(n.push(e),t.children&&(n.concat(t.children),t.children.forEach((function(e){n.concat(le(e))})))),n}),[]),de=r.useCallback((function(e){var t=Object(c.a)({},H.current);e.forEach((function(e){t[e]&&delete t[e]})),H.current=t}),[]),fe=r.useCallback((function(e){var t=le(e);de(t);var n=Object(c.a)({},F.current);t.forEach((function(e){var t=n[e];if(t){if(t.parent){var r=n[t.parent];if(r&&r.children){var a=r.children.filter((function(t){return t!==e}));n[t.parent]=Object(c.a)({},r,{children:a})}}delete n[e]}})),F.current=n,K((function(t){return t===e?null:t}))}),[le,de]),pe=r.useRef([]),he=r.useState(!1),me=he[0],ve=he[1];r.useEffect((function(){var e=[];r.Children.forEach(n,(function(t){r.isValidElement(t)&&t.props.nodeId&&e.push(t.props.nodeId)})),function(e,t){if(e.length!==t.length)return!0;for(var n=0;n<e.length;n+=1)if(e[n]!==t[n])return!0;return!1}(pe.current,e)&&(F.current[-1]={parent:null,children:e},e.forEach((function(e,t){0===t&&L(e)})),$.current=F.current[-1].children,pe.current=e,ve(!0))}),[n]),r.useEffect((function(){me&&($.current=function e(t){for(var n=[],r=0;r<t.length;r+=1){var a=t[r];n.push(a);var o=F.current[a].children;G(a)&&o&&(n=n.concat(e(o)))}return n}(F.current[-1].children))}),[U,me,G,n]);var xe=function(){return!1};return r.createElement(b.Provider,{value:{icons:{defaultCollapseIcon:i,defaultExpandIcon:h,defaultParentIcon:m,defaultEndIcon:d},focus:te,focusFirstNode:function(){return te(ee())},focusLastNode:function(){return te(Y())},focusNextNode:function(e){return te(_(e))},focusPreviousNode:function(e){return te(Q(e))},focusByFirstCharacter:function(e,t){var n,r,a=t.toLowerCase(),o=[],i=[];Object.keys(H.current).forEach((function(e){var t=H.current[e],n=F.current[e];(!n.parent||G(n.parent))&&(o.push(e),i.push(t))})),(n=o.indexOf(e)+1)===F.current.length&&(n=0),-1===(r=N(i,n,a))&&(r=N(i,0,a)),r>-1&&te(o[r])},expandAllSiblings:function(e,t){var n,r=F.current[t],a=F.current[r.parent];a?n=a.children.filter((function(e){return!G(e)})):n=F.current[-1].children.filter((function(e){return!G(e)}));var o=U.concat(n);n.length>0&&(q(o),T&&T(e,o))},toggleExpansion:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A;-1!==U.indexOf(n)?(t=U.filter((function(e){return e!==n})),L((function(e){var t=F.current[e];return e&&(t&&t.parent?t.parent.id:null)===n?n:e}))):t=[n].concat(U),T&&T(e,t),q(t)},isExpanded:G,isFocused:function(e){return A===e},isSelected:Z,selectNode:g?xe:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return!!t&&(n?ce(e,t):ue(e,t),ne.current=t,re.current=!1,ae.current=[],!0)},selectRange:g?xe:se,selectNextNode:g?xe:function(e,t){return se(e,{end:_(t),current:t},!0)},selectPreviousNode:g?xe:function(e,t){return se(e,{end:Q(t),current:t},!0)},rangeSelectToFirst:g?xe:function(e,t){ne.current||(ne.current=t);var n=re.current?ne.current:t;return se(e,{start:n,end:ee()})},rangeSelectToLast:g?xe:function(e,t){ne.current||(ne.current=t);var n=re.current?ne.current:t;return se(e,{start:n,end:Y()})},selectAllNodes:g?xe:function(e){return se(e,{start:ee(),end:Y()})},isTabbable:function(e){return M===e},multiSelect:O,getParent:function(e){return F.current[e].parent},mapFirstChar:function(e,t){H.current[e]=t},addNodeToNodeMap:function(e,t){var n=F.current[e];F.current[e]=Object(c.a)({},n,{children:t,id:e}),t.forEach((function(t){var n=F.current[t];F.current[t]=Object(c.a)({},n,{parent:e,id:t})}))},removeNodeFromNodeMap:fe}},r.createElement("ul",Object(c.a)({role:"tree","aria-multiselectable":O,className:Object(s.a)(a.root,o),ref:t},R),n))})),j=Object(f.a)({root:{padding:0,margin:0,listStyle:"none"}},{name:"MuiTreeView"})(I),T=n("5AJ6"),w=Object(T.a)(r.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),R=n("/RtB"),D=n("Wbzz"),M=function(e){var t=e.tree,n=L(),r=function(e){return"article"===e.type?a.a.createElement(D.a,{className:n.node,to:"/docs/"+e.id},e.name):a.a.createElement(o.a,{className:n.node},e.name)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{className:n.title},"Содержание"),a.a.createElement(j,{defaultCollapseIcon:a.a.createElement(w,null),defaultExpandIcon:a.a.createElement(R.a,null)},t.items.map((function e(t){return a.a.createElement(O,{key:t.name,nodeId:t.name,label:r(t)},"topic"===t.type?t.childrens.map(e):null)}))))},L=Object(i.a)({title:{fontSize:"34px",lineHeight:"40px",marginBottom:"20px"},node:{fontSize:"22px",lineHeight:"28px"}})},yCxk:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(e){var t=e.controlled,n=e.default,a=(e.name,e.state,r.useRef(void 0!==t).current),o=r.useState(n),i=o[0],c=o[1];return[a?t:i,r.useCallback((function(e){a||c(e)}),[])]}}}]);
//# sourceMappingURL=1d24162cdcd9befc7374a5a765ad4eee90d40d20-48816b80937e4a85aff1.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"5bhV":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("tRbT"),l=n("ofer"),c=n("R/WZ"),i=n("wd/R"),s=n.n(i),d=n("g0iM"),u=n("5PfI"),m=n("kfjn"),p=n("o9S+"),b=function(e){var t=e.data,n=t.name,a=t.description,c=t.startTime,i=t.endTime,m=t.link,b=t.tags,f=t.location,E=t.date,h=g();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{backRef:"/calendar"}),r.a.createElement(o.a,{container:!0,direction:"column"},r.a.createElement(o.a,{item:!0},r.a.createElement(p.a,null,r.a.createElement(l.a,{variant:"h1",className:h.mainText},n),r.a.createElement(l.a,{variant:"h2",className:h.secondaryText},s()(E,"YYYY-MM-DD").format("D MMMM YYYY"),r.a.createElement("br",null),"Начало в ",c,!!i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),"Окончание в ",i)," ",r.a.createElement("br",null),"Место проведения: ",f,r.a.createElement("br",null)),r.a.createElement(o.a,{container:!0,spacing:1},b.map((function(e,t){return r.a.createElement(o.a,{item:!0,key:t},r.a.createElement(d.a,null,e))}))),r.a.createElement("br",null),r.a.createElement("a",{href:m},r.a.createElement(d.a,{classes:{box:h.link}},r.a.createElement(l.a,{variant:"body2"},"Сылка на мероприятие"))))),r.a.createElement(o.a,{item:!0},r.a.createElement(p.a,null,r.a.createElement(l.a,{variant:"body1"},a),r.a.createElement("br",null)))))},g=Object(c.a)({mainText:{fontSize:"34px",lineHeight:"40px"},secondaryText:{fontSize:"16px",lineHeight:"1.3",color:m.d.colors.disabledText,marginBottom:"10px"},link:{backgroundColor:m.d.colors.attention,width:"fit-content"}}),f=n("xI07"),E=n("rW7r"),h=n("uUPu"),v=function(e,t){var n=t?e+" "+t:e;return(t?s()(n,"YYYY-MM-DD hh:mm"):s()(n,"YYYY-MM-DD")).toISOString(!0)};t.default=function(e){var t=e.data,n=Object(f.helmetJsonLdProp)({"@context":"https://schema.org","@type":"SocialEvent",doorTime:v(t.brangsJson.date,t.brangsJson.startTime),endDate:v(t.brangsJson.date,t.brangsJson.endTime||t.brangsJson.startTime),isAccessibleForFree:!0,location:t.brangsJson.location,inLanguage:"ru",description:t.brangsJson.description,url:t.brangsJson.link,name:t.brangsJson.name,about:t.brangsJson.tags});return r.a.createElement(h.a,null,r.a.createElement(E.a,{ldData:n}),r.a.createElement(b,{data:t.brangsJson}))}},g0iM:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("hlFM"),r=n("ofer"),o=n("R/WZ"),l=n("iuhU"),c=n("q1tI"),i=n.n(c),s=n("kfjn"),d=function(e){var t=e.children,n=e.classes,o=e.disabled,c=u();return i.a.createElement(a.a,{className:Object(l.a)(c.tag,null==n?void 0:n.box,o?c.disabledTag:c.enabledTag)},i.a.createElement(r.a,{className:Object(l.a)(c.tagText,null==n?void 0:n.typography)},t))},u=Object(o.a)({tag:{textAlign:"center",borderRadius:"6px",padding:"5px",marginRight:"5px"},tagText:{overflow:"hidden",textOverflow:"ellipsis",textAlign:"left",fontSize:"14px",lineHeight:"20px",wordWrap:"unset"},enabledTag:{backgroundColor:s.d.colors.tagColor},disabledTag:{backgroundColor:s.d.colors.disabledTag}})},"o9S+":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("kKAo"),r=n("R/WZ"),o=n("iuhU"),l=n("q1tI"),c=n.n(l),i=n("kfjn"),s=function(e){var t=e.children,n=e.className,r=d();return c.a.createElement(a.a,{className:Object(o.a)(r.paper,n)},t)},d=Object(r.a)({paper:{margin:"24px",border:i.d.borders.tableBorder,backgroundColor:i.d.colors.transparentBackground}})},umFE:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.helmetJsonLdProp=t.jsonLdScriptProps=t.JsonLd=void 0;var a=n("q1tI");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(e,i,t.space)}}}t.JsonLd=function(e){return a.createElement("script",Object.assign({},r(e.item,e)))},t.jsonLdScriptProps=r,t.helmetJsonLdProp=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{type:"application/ld+json",innerHTML:JSON.stringify(e,i,t.space)}};var o=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}),l=new RegExp("[".concat(Object.keys(o).join(""),"]"),"g"),c=function(e){return o[e]},i=function(e,t){switch(typeof t){case"object":if(null===t)return;return t;case"number":case"boolean":case"bigint":return t;case"string":return t.replace(l,c);default:return}}},xI07:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.jsonLdScriptProps=t.JsonLd=t.helmetJsonLdProp=void 0;var a=n("umFE");Object.defineProperty(t,"helmetJsonLdProp",{enumerable:!0,get:function(){return a.helmetJsonLdProp}}),Object.defineProperty(t,"JsonLd",{enumerable:!0,get:function(){return a.JsonLd}}),Object.defineProperty(t,"jsonLdScriptProps",{enumerable:!0,get:function(){return a.jsonLdScriptProps}})}}]);
//# sourceMappingURL=component---src-pages-brang-brangs-json-id-tsx-188992c62b26e44ead53.js.map
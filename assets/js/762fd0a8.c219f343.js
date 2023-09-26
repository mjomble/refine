"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59580],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),h=o,f=d["".concat(p,".").concat(h)]||d[h]||c[h]||i;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},30750:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});t(67294);var n=t(3905);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"usePublish",title:"usePublish",source:"packages/core/src/hooks/live/usePublish/index.ts"},p=void 0,l={unversionedId:"api-reference/core/hooks/live/usePublish",id:"api-reference/core/hooks/live/usePublish",title:"usePublish",description:"usePublish returns the publish method from liveProvider. It is useful when you want to publish a custom event.",source:"@site/docs/api-reference/core/hooks/live/usePublish.md",sourceDirName:"api-reference/core/hooks/live",slug:"/api-reference/core/hooks/live/usePublish",permalink:"/docs/api-reference/core/hooks/live/usePublish",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/live/usePublish.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1695755214,formattedLastUpdatedAt:"Sep 26, 2023",frontMatter:{id:"usePublish",title:"usePublish",source:"packages/core/src/hooks/live/usePublish/index.ts"},sidebar:"someSidebar",previous:{title:"useInvalidate",permalink:"/docs/api-reference/core/hooks/invalidate/useInvalidate"},next:{title:"useSubscription",permalink:"/docs/api-reference/core/hooks/live/useSubscription"}},u={},c=[{value:"Usage",id:"usage",level:2},{value:"Publish Properties",id:"publish-properties",level:2},{value:"channel <PropTag required/>",id:"channel-",level:3},{value:"type <PropTag required/>",id:"type-",level:3},{value:"payload <PropTag required/>",id:"payload-",level:3},{value:"date <PropTag required/>",id:"date-",level:3}],d=(h="PropTag",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var h;const f={toc:c};function m(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}({},f,t),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"usePublish")," returns the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/#publish"},(0,n.kt)("inlineCode",{parentName:"a"},"publish"))," method from ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"liveProvider")),". It is useful when you want to publish a custom event."),(0,n.kt)("admonition",{type:"info-tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"refine")," use this hook internally in mutation hooks to ",(0,n.kt)("inlineCode",{parentName:"p"},"publish")," events after successful mutations. You can refer to the ",(0,n.kt)("inlineCode",{parentName:"p"},"liveProvider"),"'s ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/#publish-events-from-hooks"},"Publish Events from Hooks")," section for more information.")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { usePublish } from "@refinedev/core";\n\nconst publish = usePublish();\n\npublish({\n    channel: "custom-channel-name",\n    type: "custom-event-name",\n    payload: {\n        ids: [1, 2, 3],\n        "custom-property": "custom-property-value",\n    },\n    date: new Date(),\n});\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This method is used to publish an event on the client side. Beware that publishing events on the client side is not recommended and the best practice is to publish events from the server side. You can refer ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/#publish-events-from-api"},"Publish Events from API")," to see which events should be published from the server.")),(0,n.kt)("h2",{id:"publish-properties"},"Publish Properties"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"usePublish")," will be passed to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/#publish"},"publish")," method from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},"liveProvider")," as a parameter. Following properties of this method can be used when publishing an event."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences/#liveevent"},"LiveEvent interface","\u2192"))),(0,n.kt)("h3",{id:"channel-"},"channel ",(0,n.kt)(d,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"The channel name to publish the event."),(0,n.kt)("h3",{id:"type-"},"type ",(0,n.kt)(d,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"The event name to publish."),(0,n.kt)("h3",{id:"payload-"},"payload ",(0,n.kt)(d,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"The payload to publish."),(0,n.kt)("h3",{id:"date-"},"date ",(0,n.kt)(d,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"The date of the event."))}m.isMDXComponent=!0}}]);
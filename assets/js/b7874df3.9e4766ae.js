"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25623],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return o?r.createElement(f,l(l({ref:t},p),{},{components:o})):r.createElement(f,l({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<a;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},19845:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={id:"useModal",title:"useModal",description:"useModal example of @refinedev/core","example-title":"Refine's useModal hook","example-tags":["headless","refine-hooks"]},l=void 0,s={unversionedId:"examples/core/useModal",id:"examples/core/useModal",title:"useModal",description:"useModal example of @refinedev/core",source:"@site/docs/examples/core/useModal.md",sourceDirName:"examples/core",slug:"/examples/core/useModal",permalink:"/docs/examples/core/useModal",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/core/useModal.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1683874683,formattedLastUpdatedAt:"May 12, 2023",frontMatter:{id:"useModal",title:"useModal",description:"useModal example of @refinedev/core","example-title":"Refine's useModal hook","example-tags":["headless","refine-hooks"]},sidebar:"someSidebar",previous:{title:"useImport",permalink:"/docs/examples/core/useImport"},next:{title:"useSelect",permalink:"/docs/examples/core/useSelect"}},i={},c=[],p=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var d;const u={toc:c};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Using the ",(0,n.kt)("inlineCode",{parentName:"p"},"useModal")," hook that comes with the ",(0,n.kt)("strong",{parentName:"p"},"headless")," version of ",(0,n.kt)("strong",{parentName:"p"},"refine"),", you may manage a modal. This hook is UI-independent and only includes show and close operations. You can create your UI as you like, and control it with the ",(0,n.kt)("inlineCode",{parentName:"p"},"useModal")," hook."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/ui/useModal/"},"Refer to the ",(0,n.kt)("strong",{parentName:"a"},"refine")," useModal hook documentation for more information. \u2192")),(0,n.kt)(p,{path:"core-use-modal",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);
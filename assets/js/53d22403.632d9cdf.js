"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87282],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>h});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),h=o,f=d["".concat(u,".").concat(h)]||d[h]||p[h]||a;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58364:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>p});t(67294);var n=t(3905);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c={id:"useCheckError",title:"useCheckError",siderbar_label:"useCheckError",description:"useCheckError data hook from refine is a modified version of react-query's useMutation for create mutations"},u=void 0,s={unversionedId:"api-reference/core/hooks/auth/useCheckError",id:"version-3.xx.xx/api-reference/core/hooks/auth/useCheckError",title:"useCheckError",description:"useCheckError data hook from refine is a modified version of react-query's useMutation for create mutations",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useCheckError.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useCheckError",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useCheckError",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useCheckError.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1687127999,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{id:"useCheckError",title:"useCheckError",siderbar_label:"useCheckError",description:"useCheckError data hook from refine is a modified version of react-query's useMutation for create mutations"},sidebar:"someSidebar",previous:{title:"useAuthenticated",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useAuthenticated"},next:{title:"useGetIdentity",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useGetIdentity"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Redirection after error",id:"redirection-after-error",level:2}],d={toc:p};function h(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}({},d,t),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useCheckError")," calls the ",(0,n.kt)("inlineCode",{parentName:"p"},"checkError")," method from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood.\nIf the ",(0,n.kt)("inlineCode",{parentName:"p"},"checkError")," returns a rejected promise, ",(0,n.kt)("inlineCode",{parentName:"p"},"useCheckError")," calls the the ",(0,n.kt)("inlineCode",{parentName:"p"},"logout")," method of the ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," and the app is unauthenticated."),(0,n.kt)("p",null,"It returns the result of ",(0,n.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,n.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation"),".\nData that is resolved from the ",(0,n.kt)("inlineCode",{parentName:"p"},"checkError")," will be returned as the ",(0,n.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Imagine that we make a payment request which is declined by the API. If error status code is ",(0,n.kt)("inlineCode",{parentName:"p"},"418"),", user will be logged out for security reasons."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useCheckError } from "@pankod/refine-core";\n\n// highlight-next-line\nconst { mutate: checkError } = useCheckError();\n\nfetch(\'http://example.com/payment\')\n    .then(() => console.log("Success"))\n    // highlight-next-line\n    .catch((error) => checkError(error));\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Any error passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"mutate")," function will be available in the ",(0,n.kt)("inlineCode",{parentName:"p"},"checkError")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider"),".")),(0,n.kt)("br",null),(0,n.kt)("p",null,"We have a logic in ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"checkError")," method like below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const authProvider: AuthProvider = {\n    ...\n    logout: () => {\n        ...\n        return Promise.resolve();\n    },\n    // highlight-start\n    checkError: (error) => {\n        const status = error.status;\n        if (status === 418) {\n            return Promise.reject();\n        }\n        return Promise.resolve();\n    },\n    // highlight-end\n   ...\n};\n")),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"redirection-after-error"},"Redirection after error"),(0,n.kt)("p",null,"We have 2 options to manage redirection after logout process."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If promise returned from ",(0,n.kt)("inlineCode",{parentName:"p"},"checkError")," is rejected with nothing, app will be redirected to ",(0,n.kt)("inlineCode",{parentName:"p"},"/login")," route by default. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The promise returned from ",(0,n.kt)("inlineCode",{parentName:"p"},"checkError")," method of ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider"))," can reject with a custom url instead."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n    ...\n    checkError: () => {\n        ...\n        return Promise.reject("/custom-url");\n    }\n}\n')),(0,n.kt)("br",null),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This hook can only be used if the ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")))}h.isMDXComponent=!0}}]);
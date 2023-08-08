"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>v,frontMatter:()=>c,metadata:()=>p,toc:()=>l});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"mantine-auto-save-indicator",title:"<AutoSaveIndicator>",sidebar_label:"<AutoSaveIndicator>",description:"<AutoSaveIndicator> component shows `autoSave` status on edit actions.",source:"packages/antd/src/components/autoSaveIndicator/index.tsx"},s=void 0,p={unversionedId:"api-reference/mantine/components/mantine-auto-save-indicator",id:"api-reference/mantine/components/mantine-auto-save-indicator",title:"<AutoSaveIndicator>",description:"<AutoSaveIndicator> component shows `autoSave` status on edit actions.",source:"@site/docs/api-reference/mantine/components/auto-save-indicator.md",sourceDirName:"api-reference/mantine/components",slug:"/api-reference/mantine/components/mantine-auto-save-indicator",permalink:"/docs/api-reference/mantine/components/mantine-auto-save-indicator",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mantine/components/auto-save-indicator.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1691494338,formattedLastUpdatedAt:"Aug 8, 2023",frontMatter:{id:"mantine-auto-save-indicator",title:"<AutoSaveIndicator>",sidebar_label:"<AutoSaveIndicator>",description:"<AutoSaveIndicator> component shows `autoSave` status on edit actions.",source:"packages/antd/src/components/autoSaveIndicator/index.tsx"},sidebar:"someSidebar",previous:{title:"Url",permalink:"/docs/api-reference/mantine/components/fields/url"},next:{title:"Theme",permalink:"/docs/api-reference/mantine/theming"}},u={},l=[{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],d=(m="PropsTable",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const f={toc:l};function v(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<AutoSaveIndicator>")," component from ",(0,r.kt)("strong",{parentName:"p"},"refine")," for ",(0,r.kt)("strong",{parentName:"p"},"Mantine")," can be used to communicate auto-save status to the user. "),(0,r.kt)("p",null,"Simple usage is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { AutoSaveIndicator, useForm } from "@refinedev/mantine";\n\nconst MyComponent = () => {\n    const { refineCore: { autoSaveProps } } = useForm({\n        refineCoreProps: {\n            autoSave: {\n                enabled: true,\n            },\n        }\n    });\n\n    return (\n        <AutoSaveIndicator {...autoSaveProps}/>\n    );\n};\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)(d,{module:"@refinedev/mantine/AutoSaveIndicator",mdxType:"PropsTable"}))}v.isMDXComponent=!0}}]);
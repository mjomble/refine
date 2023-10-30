"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={},l=void 0,s={unversionedId:"api-reference/core/hooks/translate/useGetLocale",id:"version-3.xx.xx/api-reference/core/hooks/translate/useGetLocale",title:"useGetLocale",description:"If you need to know the current locale, refine provides the useGetLocale hook. It returns the getLocale method from i18nProvider under the hood.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/translate/useGetLocale.md",sourceDirName:"api-reference/core/hooks/translate",slug:"/api-reference/core/hooks/translate/useGetLocale",permalink:"/docs/3.xx.xx/api-reference/core/hooks/translate/useGetLocale",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/translate/useGetLocale.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1698656566,formattedLastUpdatedAt:"Oct 30, 2023",frontMatter:{},sidebar:"someSidebar",previous:{title:"useTable",permalink:"/docs/3.xx.xx/api-reference/core/hooks/useTable"},next:{title:"useSetLocale",permalink:"/docs/3.xx.xx/api-reference/core/hooks/translate/useSetLocale"}},u={},p=[{value:"Usage",id:"usage",level:2}],f={toc:p};function d(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you need to know the current locale, refine provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"useGetLocale")," hook. It returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"getLocale")," method from ",(0,r.kt)("inlineCode",{parentName:"p"},"i18nProvider")," under the hood."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"You can get the ",(0,r.kt)("inlineCode",{parentName:"p"},"locale")," value from the ",(0,r.kt)("inlineCode",{parentName:"p"},"i18nProvider")," that you provided.",(0,r.kt)("br",{parentName:"p"}),"\n","For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"<LanguageSwitcher>")," component needs to know the current locale in order to disable the button for the current language."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTranslate, useGetLocale, useSetLocale } from "@pankod/refine-core";\n\nexport const LanguageSwitcher = () => {\n    const changeLanguage = useSetLocale();\n\n    const locale = useGetLocale();\n    const currentLocale = locale();\n\n    return (\n        <div>\n            <span>Languages</span>\n            <button\n                disabled={currentLocale === "en"}\n                onClick={() => changeLanguage("en")}\n            >\n                English\n            </button>\n            <button\n                disabled={currentLocale === "es"}\n                onClick={() => changeLanguage("es")}\n            >\n                Spanish\n            </button>\n        </div>\n    );\n};\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,r.kt)("inlineCode",{parentName:"p"},"i18nProvider")," is provided.")))}d.isMDXComponent=!0}}]);
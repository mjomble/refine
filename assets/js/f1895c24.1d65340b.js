"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87947],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=c(r),m=o,d=b["".concat(p,".").concat(m)]||b[m]||l[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},50793:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>l});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={id:"turbo",title:"Monorepo with Turbo","example-tags":["build-systems"]},p=void 0,c={unversionedId:"examples/build-systems/turbo",id:"examples/build-systems/turbo",title:"Monorepo with Turbo",description:"Turborepo is a high-performance build system for JavaScript and TypeScript codebases. In this example, you'll see how to use Turbo to setup a monorepo with refine.",source:"@site/docs/examples/build-systems/turbo.md",sourceDirName:"examples/build-systems",slug:"/examples/build-systems/turbo",permalink:"/docs/examples/build-systems/turbo",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/build-systems/turbo.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1697554628,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{id:"turbo",title:"Monorepo with Turbo","example-tags":["build-systems"]},sidebar:"someSidebar",previous:{title:"Audit Log Provider",permalink:"/docs/examples/audit-log/audit-log-provider"},next:{title:"Monorepo with Lerna",permalink:"/docs/examples/build-systems/lerna"}},u={},l=[],b=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var m;const d={toc:l};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://turbo.build/repo"},"Turborepo")," is a high-performance build system for JavaScript and TypeScript codebases. In this example, you'll see how to use Turbo to setup a monorepo with ",(0,n.kt)("strong",{parentName:"p"},"refine"),"."),(0,n.kt)("p",null,"If you're going to use ",(0,n.kt)("strong",{parentName:"p"},"refine")," in your monorepo setup or create one from scratch, you can use this example as a starting point."),(0,n.kt)(b,{path:"monorepo-with-turbo",hideSandbox:!0,mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);
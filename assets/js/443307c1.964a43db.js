"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65297],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=l(r),u=a,f=s["".concat(i,".").concat(u)]||s[u]||d[u]||o;return r?n.createElement(f,c(c({ref:t},m),{},{components:r})):n.createElement(f,c({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},40217:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={id:"command-palette",title:"Command Palette",description:"kbar integration for `command`/`crtrl`+`k` interface for your Refine App.","example-tags":["command-palette","kbar"]},c=void 0,p={unversionedId:"examples/command-palette",id:"examples/command-palette",title:"Command Palette",description:"kbar integration for `command`/`crtrl`+`k` interface for your Refine App.",source:"@site/docs/examples/command-palette.md",sourceDirName:"examples",slug:"/examples/command-palette",permalink:"/docs/examples/command-palette",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/command-palette.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1680771621,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{id:"command-palette",title:"Command Palette",description:"kbar integration for `command`/`crtrl`+`k` interface for your Refine App.","example-tags":["command-palette","kbar"]},sidebar:"someSidebar",previous:{title:"Calendar",permalink:"/docs/examples/ant-design-calendar-example"},next:{title:"useImport",permalink:"/docs/examples/core/useImport"}},i={},l=[],m=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const s={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kbar.vercel.app/"},"kbar")," is a fully extensible command+k interface for your site."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"command"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"crtrl"),"+",(0,a.kt)("inlineCode",{parentName:"p"},"k")," interfaces are used to create a web experience where any type of action users would be able to do via clicking can be done through a command menu."),(0,a.kt)("p",null,"Try it out \u2013 press cmd+k (macOS) or ctrl+k (Linux/Windows)."),(0,a.kt)(m,{path:"command-palette-kbar",mdxType:"CodeSandboxExample"}))}u.isMDXComponent=!0}}]);
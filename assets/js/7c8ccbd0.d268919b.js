"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18990],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,b=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return r?a.createElement(b,o(o({ref:t},s),{},{components:r})):a.createElement(b,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},35156:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const l={id:"tableFilter",title:"Table Filter","example-title":"Filtering on Ant Design Table","example-tags":["table","filter","antd","react-router"]},o=void 0,i={unversionedId:"examples/table/antd/tableFilter",id:"examples/table/antd/tableFilter",title:"Table Filter",description:"The Table Filter option allows you to apply filters to the data in your table. The example below demonstrates how you might filter and display data in your table based on certain field parameters.",source:"@site/docs/examples/table/antd/table-filter.md",sourceDirName:"examples/table/antd",slug:"/examples/table/antd/tableFilter",permalink:"/docs/examples/table/antd/tableFilter",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/table/antd/table-filter.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1680771621,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{id:"tableFilter",title:"Table Filter","example-title":"Filtering on Ant Design Table","example-tags":["table","filter","antd","react-router"]},sidebar:"someSidebar",previous:{title:"Advanced Table",permalink:"/docs/examples/table/antd/advancedTable"},next:{title:"useDeleteMany",permalink:"/docs/examples/table/antd/useDeleteMany"}},p={},d=[],s=(c="CodeSandboxExample",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const u={toc:d};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Table Filter")," option allows you to apply filters to the data in your table. The example below demonstrates how you might filter and display data in your table based on certain field parameters.\nBy filtering your table's data you may only see the fields you want."),(0,n.kt)(s,{path:"table-antd-table-filter",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);
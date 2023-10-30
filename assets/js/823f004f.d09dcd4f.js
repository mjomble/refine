"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27667],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),d=n,m=f["".concat(s,".").concat(d)]||f[d]||l[d]||a;return r?o.createElement(m,c(c({ref:t},u),{},{components:r})):o.createElement(m,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>l});r(67294);var o=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"useCheckboxGroup",title:"useCheckboxGroup","example-title":"Ant Design's useCheckboxGroup hook","example-tags":["antd"]},s=void 0,p={unversionedId:"examples/field/useCheckboxGroup",id:"version-3.xx.xx/examples/field/useCheckboxGroup",title:"useCheckboxGroup",description:"The refine useCheckboxGroup hook allows you to manage your data in the form of checkboxes in an Ant Design Checkbox.Group component. In cases where users need to select more than one content, you can easily handle your transactions by using this hook. In the example below you can see how to create and manage checkboxes using the useCheckboxGroup hook.",source:"@site/versioned_docs/version-3.xx.xx/examples/field/useCheckboxGroup.md",sourceDirName:"examples/field",slug:"/examples/field/useCheckboxGroup",permalink:"/docs/3.xx.xx/examples/field/useCheckboxGroup",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/field/useCheckboxGroup.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1698675751,formattedLastUpdatedAt:"Oct 30, 2023",frontMatter:{id:"useCheckboxGroup",title:"useCheckboxGroup","example-title":"Ant Design's useCheckboxGroup hook","example-tags":["antd"]},sidebar:"someSidebar",previous:{title:"E2E Testing",permalink:"/docs/3.xx.xx/examples/e2e-testing"},next:{title:"useRadioGroup",permalink:"/docs/3.xx.xx/examples/field/useRadioGroup"}},u={},l=[],f=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const m={toc:l};function b(e){var{components:t}=e,r=c(e,["components"]);return(0,o.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"refine")," ",(0,o.kt)("inlineCode",{parentName:"p"},"useCheckboxGroup")," hook allows you to manage your data in the form of checkboxes in an Ant Design ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/checkbox/#components-checkbox-demo-group"},"Checkbox.Group")," component. In cases where users need to select more than one content, you can easily handle your transactions by using this hook. In the example below you can see how to create and manage checkboxes using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useCheckboxGroup")," hook."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/hooks/field/useCheckboxGroup/"},"Refer to the ",(0,o.kt)("strong",{parentName:"a"},"refine")," useCheckboxGroup hook documentation for more information. \u2192")),(0,o.kt)(f,{path:"field-antd-use-checkbox-group",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);
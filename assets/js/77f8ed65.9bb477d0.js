"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98588],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>p,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"inferencer",title:"Inferencer"},s=void 0,l={unversionedId:"packages/documentation/inferencer",id:"version-3.xx.xx/packages/documentation/inferencer",title:"Inferencer",description:"@pankod/refine-inferencer is a package that provides a way to automatically generate views for resources based on the data structure. The aim is to reduce the amount of time spent on creating views for resources by generating the code automatically that can be customized easily.",source:"@site/versioned_docs/version-3.xx.xx/packages/documentation/inferencer.md",sourceDirName:"packages/documentation",slug:"/packages/documentation/inferencer",permalink:"/docs/3.xx.xx/packages/documentation/inferencer",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/packages/documentation/inferencer.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1690223146,formattedLastUpdatedAt:"Jul 24, 2023",frontMatter:{id:"inferencer",title:"Inferencer"},sidebar:"someSidebar",previous:{title:"useStepsForm",permalink:"/docs/3.xx.xx/packages/documentation/react-hook-form/useStepsForm"},next:{title:"Examples",permalink:"/docs/3.xx.xx/examples"}},d={},c=[{value:"Installation",id:"installation",level:2},{value:"Available UI Inferencers",id:"available-ui-inferencers",level:2},{value:"How it works?",id:"how-it-works",level:2},{value:"How the data is obtained?",id:"how-the-data-is-obtained",level:3},{value:"How the fields are inferred?",id:"how-the-fields-are-inferred",level:3},{value:"How the relations are determined?",id:"how-the-relations-are-determined",level:3},{value:"How the components are rendered and the code is generated?",id:"how-the-components-are-rendered-and-the-code-is-generated",level:3},{value:"Modifying the inferred fields",id:"modifying-the-inferred-fields",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=m("Tabs"),f=m("TabItem"),h={toc:c};function k(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," is a package that provides a way to automatically generate views for resources based on the data structure. The aim is to reduce the amount of time spent on creating views for resources by generating the code automatically that can be customized easily. "),(0,r.kt)("p",null,"The package exports components for ",(0,r.kt)("strong",{parentName:"p"},"List"),", ",(0,r.kt)("strong",{parentName:"p"},"Show"),", ",(0,r.kt)("strong",{parentName:"p"},"Create")," and ",(0,r.kt)("strong",{parentName:"p"},"Edit")," views inside UI package scopes. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/antd")," exports components for ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd")," package."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(u,{defaultValue:"npm",values:[{label:"use npm",value:"npm"},{label:"use yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(f,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @pankod/refine-inferencer\n"))),(0,r.kt)(f,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pankod/refine-inferencer\n")))),(0,r.kt)("h2",{id:"available-ui-inferencers"},"Available UI Inferencers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/antd/components/inferencer"},"Ant Design")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/mui/components/inferencer"},"Material UI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/mantine/components/inferencer"},"Mantine")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/chakra-ui/components/inferencer"},"Chakra UI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/core/components/inferencer"},"Headless"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," is an experimental package and it is now in the early stages of development. We are working on improving the package and adding new features."),(0,r.kt)("p",{parentName:"admonition"},"If you have any suggestions or feedback, please let us know in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/discussions/3046"},(0,r.kt)("strong",{parentName:"a"},"GitHub Discussions")))),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," components are meant to be used in development environments. They are not meant to be used in production environments.")),(0,r.kt)("h2",{id:"how-it-works"},"How it works?"),(0,r.kt)("p",null,"Simply, ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," generates views and codes based on the data structure of the resource by fetching it using the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.kt)("h3",{id:"how-the-data-is-obtained"},"How the data is obtained?"),(0,r.kt)("p",null,"For, ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," actions, we send the request with ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),". For ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," actions, we send a list request with ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," and use one of the items to generate the view. These actions will take place in your app. "),(0,r.kt)("h3",{id:"how-the-fields-are-inferred"},"How the fields are inferred?"),(0,r.kt)("p",null,"While inferring the field types, we use a set of functions that each checks the field for a specific type and returns the inferred type. These functions also can return a ",(0,r.kt)("inlineCode",{parentName:"p"},"priority")," field that is used to determine the type of the field. For example, if we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"created_at")," property with a string value, we can infer it as a ",(0,r.kt)("inlineCode",{parentName:"p"},"date")," type and a ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," type. In this case, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"priority")," field to determine the type of the field. The higher the priority, the more accurate the type of the field."),(0,r.kt)("p",null,"Properties with multiple values are identified as ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," type but also repeats the same process for their values to determine the type of the values. Same also happens for ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," type properties. Both can have ",(0,r.kt)("inlineCode",{parentName:"p"},"accessor")," field in return value to access the values of the property which is used when creating the view and the code."),(0,r.kt)("p",null,"If the property is an ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," type, we try to pick a key to represent that property. For example, if we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," field with ",(0,r.kt)("inlineCode",{parentName:"p"},"{ label: string; id: string; }")," type, we pick ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," as the key to represent the property. These ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," fields with keys to represent them have the property ",(0,r.kt)("inlineCode",{parentName:"p"},"fieldable")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in the return value."),(0,r.kt)("admonition",{title:"Available field types and functions",type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},'"relation" | "array" | "object" | "date" | "email" | "image" | "url" | "richtext" | "text" | "number" | "boolean" | "unknown" | "custom_{string}"\n'))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"List of keys that can be used to represent an ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"object")," type property"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},'"name" | "label" | "title" | "count" | "content" | "username" | "nickname" | "login" | "firstName" | "lastName" | "url"\n'))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"custom_${string}")," is used by the inferencer components of UI packages when they have custom representations, for now users can't pass custom types and functions to the inferencer components.")),(0,r.kt)("h3",{id:"how-the-relations-are-determined"},"How the relations are determined?"),(0,r.kt)("p",null,"There are some conditions we look for before determining if a field is can be a ",(0,r.kt)("inlineCode",{parentName:"p"},"relation"),". These won't trigger any API calls to the resources."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the property name ends with ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"ids"),". camelCase, PascalCase, snake_case, kebab-case, UPPER_CASE, lower_case are all supported with or without array brackets([])."),(0,r.kt)("li",{parentName:"ul"},"If the property is an object with a single property ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),"."),(0,r.kt)("li",{parentName:"ul"},"If the property is an array of objects with a single property ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," or UUID compatible strings or numbers."),(0,r.kt)("li",{parentName:"ul"},"If the property is a string or number and the property name matches with one of the known resources (singular or plural).")),(0,r.kt)("p",null,"If one of these conditions is met, we consider the property as a ",(0,r.kt)("inlineCode",{parentName:"p"},"relation")," type and try to determine the related resource."),(0,r.kt)("p",null,"To determine the relations;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, we try to find a resource that matches with the property name (singular or plural)."),(0,r.kt)("li",{parentName:"ul"},"If a resource is found in the ",(0,r.kt)("inlineCode",{parentName:"li"},"resources")," array with a match, we use that resource as the related resource."),(0,r.kt)("li",{parentName:"ul"},"If no resource is found, we send two requests to the ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," ",(0,r.kt)("inlineCode",{parentName:"li"},"dataProvider")," one with singular property name and one with plural property name, both stripped from the ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," suffixes if there are any."),(0,r.kt)("li",{parentName:"ul"},"If a resource is found we use that resource and its ",(0,r.kt)("inlineCode",{parentName:"li"},"dataProvider")," (if specified) and make the API call with the property value."),(0,r.kt)("li",{parentName:"ul"},"If any of these requests succeed with ",(0,r.kt)("inlineCode",{parentName:"li"},"200")," status code, we consider the property as a ",(0,r.kt)("inlineCode",{parentName:"li"},"relation")," type and set the resource as the related resource."),(0,r.kt)("li",{parentName:"ul"},"If none of these requests succeed, we remove the ",(0,r.kt)("inlineCode",{parentName:"li"},"relation")," mark from the property and consider it as a normal field. If it's an ",(0,r.kt)("inlineCode",{parentName:"li"},"object")," type, then we will try to find the best suitable property to represent it.")),(0,r.kt)("admonition",{title:"Manually setting relations and resources",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If your ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," has a different way of work that makes it impossible for Inferencer to find the ",(0,r.kt)("inlineCode",{parentName:"p"},"relation")," resources. You can manually modify the inferred fields by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"fieldTransformer")," function. You can find more information about it in the ",(0,r.kt)("a",{parentName:"p",href:"#modifying-the-inferred-fields"},(0,r.kt)("strong",{parentName:"a"},"Modifying the inferred fields"))," section.")),(0,r.kt)("h3",{id:"how-the-components-are-rendered-and-the-code-is-generated"},"How the components are rendered and the code is generated?"),(0,r.kt)("admonition",{title:"rendering",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To render the components we use a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aliemir/react-live"},"fork")," of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/react-live"},(0,r.kt)("inlineCode",{parentName:"a"},"react-live"))," package with Typescript support.")),(0,r.kt)("p",null,"After the fields are determined, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"renderer")," functions to create the code for the components and also use the same code to render the components in the view. ",(0,r.kt)("inlineCode",{parentName:"p"},"renderer")," functions are constructed per action type and the UI package. This means, ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/antd")," and other UI scopes has different ",(0,r.kt)("inlineCode",{parentName:"p"},"renderer")," functions for ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," actions. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"renderer")," function returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," that includes the code for the component which is presented to user to copy and paste to their project. The same code is also used to render the component in the view."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Component name is determined by the active ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," element and the active action. If the resource has ",(0,r.kt)("inlineCode",{parentName:"p"},"option.label")," field, it will be used as the part of the component name. Otherwise, the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource.name")," will be used. For example, if the resource name is ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," and the action is ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),", the component name will be ",(0,r.kt)("inlineCode",{parentName:"p"},"CategoryList"),".")),(0,r.kt)("h3",{id:"modifying-the-inferred-fields"},"Modifying the inferred fields"),(0,r.kt)("p",null,"If you want to customize the output of the Inferencer such as setting a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"accessor")," property for ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," type fields or changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," of a field, or changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," for a ",(0,r.kt)("inlineCode",{parentName:"p"},"relation")," type, you can use",(0,r.kt)("inlineCode",{parentName:"p"},"fieldTransformer")," prop in Inferencer components. It is a function that takes the field as an argument and returns the modified field. If ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined | false | null")," is returned, the field will be removed from the output, both for the preview and the code."))}k.isMDXComponent=!0}}]);
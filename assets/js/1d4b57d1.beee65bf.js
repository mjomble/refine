"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97071],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>p,metadata:()=>l,toc:()=>c});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"inferencer",title:"Inferencer"},s=void 0,l={unversionedId:"packages/documentation/inferencer",id:"packages/documentation/inferencer",title:"Inferencer",description:"@refinedev/inferencer is a package that provides a way to automatically generate views for resources based on the data structure. The aim is to reduce the amount of time spent on creating views for resources by generating the code automatically that can be customized easily.",source:"@site/docs/packages/documentation/inferencer.md",sourceDirName:"packages/documentation",slug:"/packages/documentation/inferencer",permalink:"/docs/packages/documentation/inferencer",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/packages/documentation/inferencer.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1698400480,formattedLastUpdatedAt:"Oct 27, 2023",frontMatter:{id:"inferencer",title:"Inferencer"},sidebar:"someSidebar",previous:{title:"Supabase",permalink:"/docs/packages/documentation/data-providers/supabase"},next:{title:"Command Palette",permalink:"/docs/packages/documentation/command-palette"}},d={},c=[{value:"Installation",id:"installation",level:2},{value:"Available UI Inferencers",id:"available-ui-inferencers",level:2},{value:"How it works?",id:"how-it-works",level:2},{value:"How the data is obtained?",id:"how-the-data-is-obtained",level:3},{value:"How the fields are inferred?",id:"how-the-fields-are-inferred",level:3},{value:"How the relations are determined?",id:"how-the-relations-are-determined",level:3},{value:"How the components are rendered and the code is generated?",id:"how-the-components-are-rendered-and-the-code-is-generated",level:3},{value:"Usage with GraphQL backends and <code>meta</code> values",id:"usage-with-graphql-backends-and-meta-values",level:3},{value:"Example Usage",id:"example-usage",level:4},{value:"Modifying the inferred fields",id:"modifying-the-inferred-fields",level:3},{value:"Hiding the Code Viewer and Development Warning",id:"hiding-the-code-viewer-and-development-warning",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=m("Tabs"),f=m("TabItem"),h={toc:c};function k(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer")," is a package that provides a way to automatically generate views for resources based on the data structure. The aim is to reduce the amount of time spent on creating views for resources by generating the code automatically that can be customized easily. "),(0,a.kt)("p",null,"The package exports components for ",(0,a.kt)("strong",{parentName:"p"},"List"),", ",(0,a.kt)("strong",{parentName:"p"},"Show"),", ",(0,a.kt)("strong",{parentName:"p"},"Create")," and ",(0,a.kt)("strong",{parentName:"p"},"Edit")," views inside UI package scopes. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer/antd")," exports components for ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/antd")," package."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(u,{defaultValue:"npm",values:[{label:"use npm",value:"npm"},{label:"use yarn",value:"yarn"}],mdxType:"Tabs"},(0,a.kt)(f,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @refinedev/inferencer\n"))),(0,a.kt)(f,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @refinedev/inferencer\n")))),(0,a.kt)("h2",{id:"available-ui-inferencers"},"Available UI Inferencers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/antd/components/inferencer"},"Ant Design")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/mui/components/inferencer"},"Material UI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/mantine/components/inferencer"},"Mantine")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/chakra-ui/components/inferencer"},"Chakra UI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/components/inferencer"},"Headless"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer")," is an experimental package and it is now in the early stages of development. We are working on improving the package and adding new features."),(0,a.kt)("p",{parentName:"admonition"},"If you have any suggestions or feedback, please let us know in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/discussions/3046"},(0,a.kt)("strong",{parentName:"a"},"GitHub Discussions")))),(0,a.kt)("admonition",{title:"Warning",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer")," components are meant to be used in development environments. They are not meant to be used in production environments.")),(0,a.kt)("h2",{id:"how-it-works"},"How it works?"),(0,a.kt)("p",null,"Simply, ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer")," generates views and codes based on the data structure of the resource by fetching it using the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,a.kt)("h3",{id:"how-the-data-is-obtained"},"How the data is obtained?"),(0,a.kt)("p",null,"For, ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," actions, we send the request with ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),". For ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," actions, we send a list request with ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," and use one of the items to generate the view. These actions will take place in your app. "),(0,a.kt)("h3",{id:"how-the-fields-are-inferred"},"How the fields are inferred?"),(0,a.kt)("p",null,"While inferring the field types, we use a set of functions that each checks the field for a specific type and returns the inferred type. These functions also can return a ",(0,a.kt)("inlineCode",{parentName:"p"},"priority")," field that is used to determine the type of the field. For example, if we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"created_at")," property with a string value, we can infer it as a ",(0,a.kt)("inlineCode",{parentName:"p"},"date")," type and a ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," type. In this case, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"priority")," field to determine the type of the field. The higher the priority, the more accurate the type of the field."),(0,a.kt)("p",null,"Properties with multiple values are identified as ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," type but also repeats the same process for their values to determine the type of the values. Same also happens for ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," type properties. Both can have ",(0,a.kt)("inlineCode",{parentName:"p"},"accessor")," field in return value to access the values of the property which is used when creating the view and the code."),(0,a.kt)("p",null,"If the property is an ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," type, we try to pick a key to represent that property. For example, if we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," field with ",(0,a.kt)("inlineCode",{parentName:"p"},"{ label: string; id: string; }")," type, we pick ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," as the key to represent the property. These ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," fields with keys to represent them have the property ",(0,a.kt)("inlineCode",{parentName:"p"},"fieldable")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," in the return value."),(0,a.kt)("admonition",{title:"Available field types and functions",type:"tip"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},'"relation" | "array" | "object" | "date" | "email" | "image" | "url" | "richtext" | "text" | "number" | "boolean" | "unknown" | "custom_{string}"\n'))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"List of keys that can be used to represent an ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"object")," type property"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},'"name" | "label" | "title" | "count" | "content" | "username" | "nickname" | "login" | "firstName" | "lastName" | "url"\n'))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"custom_${string}")," is used by the inferencer components of UI packages when they have custom representations, for now users can't pass custom types and functions to the inferencer components.")),(0,a.kt)("h3",{id:"how-the-relations-are-determined"},"How the relations are determined?"),(0,a.kt)("p",null,"There are some conditions we look for before determining if a field is can be a ",(0,a.kt)("inlineCode",{parentName:"p"},"relation"),". These won't trigger any API calls to the resources."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the property name ends with ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"ids"),". camelCase, PascalCase, snake_case, kebab-case, UPPER_CASE, lower_case are all supported with or without array brackets([])."),(0,a.kt)("li",{parentName:"ul"},"If the property is an object with a single property ",(0,a.kt)("inlineCode",{parentName:"li"},"id"),"."),(0,a.kt)("li",{parentName:"ul"},"If the property is an array of objects with a single property ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," or UUID compatible strings or numbers."),(0,a.kt)("li",{parentName:"ul"},"If the property is a string or number and the property name matches with one of the known resources (singular or plural).")),(0,a.kt)("p",null,"If one of these conditions is met, we consider the property as a ",(0,a.kt)("inlineCode",{parentName:"p"},"relation")," type and try to determine the related resource."),(0,a.kt)("p",null,"To determine the relations;"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, we try to find a resource that matches with the property name (singular or plural)."),(0,a.kt)("li",{parentName:"ul"},"If a resource is found in the ",(0,a.kt)("inlineCode",{parentName:"li"},"resources")," array with a match, we use that resource as the related resource."),(0,a.kt)("li",{parentName:"ul"},"If no resource is found, we send two requests to the ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," ",(0,a.kt)("inlineCode",{parentName:"li"},"dataProvider")," one with singular property name and one with plural property name, both stripped from the ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," suffixes if there are any."),(0,a.kt)("li",{parentName:"ul"},"If a resource is found we use that resource and its ",(0,a.kt)("inlineCode",{parentName:"li"},"dataProvider")," (if specified) and make the API call with the property value."),(0,a.kt)("li",{parentName:"ul"},"If any of these requests succeed with ",(0,a.kt)("inlineCode",{parentName:"li"},"200")," status code, we consider the property as a ",(0,a.kt)("inlineCode",{parentName:"li"},"relation")," type and set the resource as the related resource."),(0,a.kt)("li",{parentName:"ul"},"If none of these requests succeed, we remove the ",(0,a.kt)("inlineCode",{parentName:"li"},"relation")," mark from the property and consider it as a normal field. If it's an ",(0,a.kt)("inlineCode",{parentName:"li"},"object")," type, then we will try to find the best suitable property to represent it.")),(0,a.kt)("admonition",{title:"Manually setting relations and resources",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If your ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," has a different way of work that makes it impossible for Inferencer to find the ",(0,a.kt)("inlineCode",{parentName:"p"},"relation")," resources. You can manually modify the inferred fields by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"fieldTransformer")," function. You can find more information about it in the ",(0,a.kt)("a",{parentName:"p",href:"#modifying-the-inferred-fields"},(0,a.kt)("strong",{parentName:"a"},"Modifying the inferred fields"))," section.")),(0,a.kt)("h3",{id:"how-the-components-are-rendered-and-the-code-is-generated"},"How the components are rendered and the code is generated?"),(0,a.kt)("admonition",{title:"rendering",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To render the components we use a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aliemir/react-live"},"fork")," of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/react-live"},(0,a.kt)("inlineCode",{parentName:"a"},"react-live"))," package with Typescript support.")),(0,a.kt)("p",null,"After the fields are determined, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"renderer")," functions to create the code for the components and also use the same code to render the components in the view. ",(0,a.kt)("inlineCode",{parentName:"p"},"renderer")," functions are constructed per action type and the UI package. This means, ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer/antd")," and other UI scopes has different ",(0,a.kt)("inlineCode",{parentName:"p"},"renderer")," functions for ",(0,a.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"show"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," actions. "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"renderer")," function returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," that includes the code for the component which is presented to user to copy and paste to their project. The same code is also used to render the component in the view."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Component name is determined by the active ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," element and the active action. If the resource has ",(0,a.kt)("inlineCode",{parentName:"p"},"option.label")," field, it will be used as the part of the component name. Otherwise, the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource.name")," will be used. For example, if the resource name is ",(0,a.kt)("inlineCode",{parentName:"p"},"categories")," and the action is ",(0,a.kt)("inlineCode",{parentName:"p"},"list"),", the component name will be ",(0,a.kt)("inlineCode",{parentName:"p"},"CategoryList"),".")),(0,a.kt)("h3",{id:"usage-with-graphql-backends-and-meta-values"},"Usage with GraphQL backends and ",(0,a.kt)("inlineCode",{parentName:"h3"},"meta")," values"),(0,a.kt)("p",null,"*",(0,a.kt)("em",{parentName:"p"},"refine")," handles the GraphQL backends by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," properties in its data hooks. Inferencer lets you define meta values for your resources and methods in a single prop and uses it when generating the code and inferring the fields. Unlike the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," property of the data hooks, Inferencer components uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," property with a nested structure, letting you define the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," values per resource and action."),(0,a.kt)("p",null,"Here's the syntax for defining the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," values in Inferencer components:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<AntdListInferencer\n    meta={{\n        [resourceNameOrIdentifier: string]: {\n            [methodName: "default" | "getList" | "getMany" | "getOne" | "update"]: Record<string, unknown>,\n        }\n    }}\n/>\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"default")," is the default ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," value for all the methods. In the absence of a specific ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," value for a method for a resource, the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," value will be used."),(0,a.kt)("p",null,"This structure is designed to let users provide ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," values for multiple resources and actions at once since the Inferencer might find relations and try to use hooks to fetch the necessary data."),(0,a.kt)("h4",{id:"example-usage"},"Example Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<AntdListInferencer\n    meta={{\n        posts: {\n            getList: {\n                fields: [\n                    "id",\n                    "title",\n                    "content",\n                    "category_id",\n                    "created_at",\n                ],\n            },\n        },\n        categories: {\n            default: {\n                fields: ["id", "title"],\n            },\n        },\n    }}\n/>\n')),(0,a.kt)("h3",{id:"modifying-the-inferred-fields"},"Modifying the inferred fields"),(0,a.kt)("p",null,"If you want to customize the output of the Inferencer such as setting a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"accessor")," property for ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," type fields or changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," of a field, or changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," for a ",(0,a.kt)("inlineCode",{parentName:"p"},"relation")," type, you can use",(0,a.kt)("inlineCode",{parentName:"p"},"fieldTransformer")," prop in Inferencer components. It is a function that takes the field as an argument and returns the modified field. If ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined | false | null")," is returned, the field will be removed from the output, both for the preview and the code."),(0,a.kt)("h3",{id:"hiding-the-code-viewer-and-development-warning"},"Hiding the Code Viewer and Development Warning"),(0,a.kt)("p",null,"If you want to hide the code viewer and the warning components, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"hideCodeViewerInProduction")," prop. This will only work in production mode. In development mode, the code viewer and the information block will always be visible."),(0,a.kt)("p",null,"Please note that the Inferencer components are not meant to be used in production. They are meant to be used in development mode to help you generate the code for your components."))}k.isMDXComponent=!0}}]);
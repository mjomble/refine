"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11798],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"useCheckboxGroup",title:"useCheckboxGroup"},p=void 0,s={unversionedId:"api-reference/antd/hooks/field/useCheckboxGroup",id:"api-reference/antd/hooks/field/useCheckboxGroup",title:"useCheckboxGroup",description:"useCheckboxGroup hook allows you to manage an Ant Design Checkbox.Group component when records in a resource needs to be used as checkbox options.",source:"@site/docs/api-reference/antd/hooks/field/useCheckboxGroup.md",sourceDirName:"api-reference/antd/hooks/field",slug:"/api-reference/antd/hooks/field/useCheckboxGroup",permalink:"/docs/api-reference/antd/hooks/field/useCheckboxGroup",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/hooks/field/useCheckboxGroup.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1697610519,formattedLastUpdatedAt:"Oct 18, 2023",frontMatter:{id:"useCheckboxGroup",title:"useCheckboxGroup"},sidebar:"someSidebar",previous:{title:"Ant Design API",permalink:"/docs/api-reference/antd"},next:{title:"useRadioGroup",permalink:"/docs/api-reference/antd/hooks/field/useRadioGroup"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>defaultValue</code>",id:"defaultvalue",level:3},{value:"<code>optionLabel</code> and <code>optionValue</code>",id:"optionlabel-and-optionvalue",level:3},{value:"<code>filters</code>",id:"filters",level:3},{value:"<code>sorters</code>",id:"sorters",level:3},{value:"<code>fetchSize</code>",id:"fetchsize",level:3},{value:"<code>queryOptions</code>",id:"queryoptions",level:3},{value:"<code>pagination</code>",id:"pagination",level:3},{value:"<del><code>sort</code></del>",id:"sort",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Example",id:"example",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=u("PropsTable"),h=u("CodeSandboxExample"),k={toc:d};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useCheckboxGroup")," hook allows you to manage an Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/checkbox/#components-checkbox-demo-group"},"Checkbox.Group")," component when records in a resource needs to be used as checkbox options."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"We will demonstrate how to get data at the ",(0,r.kt)("inlineCode",{parentName:"p"},"/tags")," endpoint from the ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.fake-rest.refine.dev")," REST API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/tags"',title:'"https://api.fake-rest.refine.dev/tags"'},'{\n    [\n        {\n            id: 1,\n            title: "Driver Deposit",\n        },\n        {\n            id: 2,\n            title: "Index Compatible Synergistic",\n        },\n        {\n            id: 3,\n            title: "Plum",\n        },\n    ];\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx"',title:'"pages/posts/create.tsx"'},'import { useCheckboxGroup } from "@refinedev/antd";\nimport { Form, Checkbox } from "antd";\n\nexport const PostCreate: React.FC = () => {\n    // highlight-start\n    const { checkboxGroupProps } = useCheckboxGroup<ITag>({\n        resource: "tags",\n    });\n    // highlight-end\n\n    return (\n        <Form>\n            <Form.Item label="Tags" name="tags">\n                // highlight-next-line\n                <Checkbox.Group {...checkboxGroupProps} />\n            </Form.Item>\n        </Form>\n    );\n};\n\ninterface ITag {\n    id: number;\n    title: string;\n}\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"All we have to do is pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"checkboxGroupProps")," it returns to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Checkbox.Group>")," component.\n",(0,r.kt)("inlineCode",{parentName:"p"},"useCheckboxGroup")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"useList")," hook for fetching data."),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/hooks/useCheckboxGroup/basic.png",alt:"Tags"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useList"},(0,r.kt)("inlineCode",{parentName:"a"},"useList")," documentation ","\u2192"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"resource"},(0,r.kt)("inlineCode",{parentName:"h3"},"resource")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n    resource: "tags",\n});\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"resource")," property determines which API resource endpoint to fetch records from ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider")),". It returns properly configured ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," values for checkboxes."),(0,r.kt)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#identifier"},(0,r.kt)("inlineCode",{parentName:"a"},"identifier")," section of the ",(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/checkbox"},"Ant Design's Checkbox.Group component documentation ","\u2192"))),(0,r.kt)("h3",{id:"defaultvalue"},(0,r.kt)("inlineCode",{parentName:"h3"},"defaultValue")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps } = useCheckboxGroup({\n    resource: "languages",\n    // highlight-next-line\n    defaultValue: [1, 2],\n});\n')),(0,r.kt)("p",null,"The easiest way to select default values for checkbox fields is by passing in ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultValue"),"."),(0,r.kt)("h3",{id:"optionlabel-and-optionvalue"},(0,r.kt)("inlineCode",{parentName:"h3"},"optionLabel")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"optionValue")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n    resource: "tags",\n    // highlight-start\n    optionLabel: "title",\n    optionValue: "id",\n    // highlight-end\n});\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"optionLabel")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"optionValue")," allows you to change the values and appearances of your options. Default values are ",(0,r.kt)("inlineCode",{parentName:"p"},'optionLabel = "title"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'optionValue = "id"'),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Supports use with ",(0,r.kt)("inlineCode",{parentName:"p"},"optionLabel")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"optionValue")," ",(0,r.kt)("a",{parentName:"p",href:"https://lodash.com/docs/4.17.15#get"},"Object path")," syntax."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n    // highlight-start\n    optionLabel: "nested.title",\n    optionValue: "nested.id",\n    // highlight-end\n});\n'))),(0,r.kt)("h3",{id:"filters"},(0,r.kt)("inlineCode",{parentName:"h3"},"filters")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"filters")," allows us to add filters while fetching the data. For example, if you want to list only the ",(0,r.kt)("inlineCode",{parentName:"p"},"titles"),' that are equal to "Driver Deposit":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n    resource: "tags",\n    // highlight-start\n    filters: [\n        {\n            field: "title",\n            operator: "eq",\n            value: "Driver Deposit",\n        },\n    ],\n    // highlight-end\n});\n')),(0,r.kt)("h3",{id:"sorters"},(0,r.kt)("inlineCode",{parentName:"h3"},"sorters")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sorters")," allows us to sort the ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),". For example, if you want to sort your list according to ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," by ascending:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n    resource: "tags",\n    // highlight-start\n    sorters: [\n        {\n            field: "title",\n            order: "asc",\n        },\n    ],\n    // highlight-end\n});\n')),(0,r.kt)("h3",{id:"fetchsize"},(0,r.kt)("inlineCode",{parentName:"h3"},"fetchSize")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fetchSize")," is the amount of records to fetch in checkboxes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps } = useCheckboxGroup({\n    resource: "languages",\n    // highlight-next-line\n    fetchSize: 20,\n});\n')),(0,r.kt)("h3",{id:"queryoptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"queryOptions")),(0,r.kt)("p",null,"Passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions")," property allows us to set the ",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n    resource: "tags",\n    // highlight-start\n    queryOptions: {\n        onError: () => {\n            console.log("triggers when on query return Error");\n        },\n    },\n    // highlight-end\n});\n')),(0,r.kt)("h3",{id:"pagination"},(0,r.kt)("inlineCode",{parentName:"h3"},"pagination")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pagination")," allows us to set page and items per page values."),(0,r.kt)("p",null,"For example, lets say that we have 1000 post records:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const { selectProps } = useSelect({\n    resource: "categories",\n    // highlight-next-line\n    pagination: { current: 3, pageSize: 8 },\n});\n')),(0,r.kt)("p",null,"The listing will start from page 3, showing 8 records per page."),(0,r.kt)("h3",{id:"sort"},(0,r.kt)("del",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"del"},"sort"))),(0,r.kt)("admonition",{title:"Deprecated",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"sorters")," instead.")),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)(m,{module:"@refinedev/antd/useCheckboxGroup",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desription"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TQueryFnData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data returned by the query function. Extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TError"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data returned by the ",(0,r.kt)("inlineCode",{parentName:"td"},"select")," function. Extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")),". If not specified, the value of ",(0,r.kt)("inlineCode",{parentName:"td"},"TQueryFnData")," will be used as the default value."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TQueryFnData"))))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(h,{path:"field-antd-use-checkbox-group",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);
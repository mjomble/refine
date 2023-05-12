"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31135,8851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),a=n(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(87462),a=n(67294),r=n(86010),i=n(72389),s=n(67392),c=n(7094),l=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:f,groupId:m,className:k}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=f??v.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),b=(0,s.l)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:x}=(0,c.U)(),[y,w]=(0,a.useState)(N),C=[],{blockElementScrollPositionUntilNextRender:P}=(0,l.o5)();if(null!=m){const e=g[m];null!=e&&e!==y&&h.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,n=C.indexOf(t),o=h[n].value;o!==y&&(P(t),w(o),null!=m&&x(m,String(o)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>C.push(e),onKeyDown:T,onFocus:O,onClick:O},i,{className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":y===t})}),n??t)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function f(e){const t=(0,i.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}},87801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={},i=void 0,s={unversionedId:"api-reference/core/hooks/useNotification/basic-usage-live-preview",id:"version-3.xx.xx/api-reference/core/hooks/useNotification/basic-usage-live-preview",title:"basic-usage-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useNotification/basic-usage-live-preview.md",sourceDirName:"api-reference/core/hooks/useNotification",slug:"/api-reference/core/hooks/useNotification/basic-usage-live-preview",permalink:"/docs/3.xx.xx/api-reference/core/hooks/useNotification/basic-usage-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useNotification/basic-usage-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1683874683,formattedLastUpdatedAt:"May 12, 2023",frontMatter:{}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=200px hideCode",live:!0,url:"http://localhost:3000/products",previewHeight:"200px",hideCode:!0},'setInitialRoutes(["/"]);\n// visible-block-start\nimport { useNotification } from "@pankod/refine-core";\nimport { Button, Stack } from "@pankod/refine-mui";\n\nconst ExamplePage: React.FC = () => {\n  const { open, close } = useNotification();\n\n    return (\n        <Stack spacing={2} direction="row">\n            <Button\n                color="success"\n                variant="outlined"\n                size="small"\n                onClick={() =>\n                    open?.({\n                        type: "success",\n                        message: "Success",\n                        description: "Success description",\n                    })\n                }\n            >\n                Success\n            </Button>\n            <Button\n                color="error"\n                variant="outlined"\n                size="small"\n                onClick={() =>\n                    open?.({\n                        type: "error",\n                        message: "Error",\n                        description: "Error description",\n                    })\n                }\n            >\n                Error\n            </Button>\n\n            <Button\n                color="secondary"\n                variant="outlined"\n                size="small"\n                onClick={() =>\n                    open?.({\n                        type: "progress",\n                        message: "Progress",\n                        undoableTimeout: 5,\n                        cancelMutation: () => {\n                            alert("cancelMutation")\n                        }\n                    })\n                }\n            >\n                Progress\n            </Button>\n      </Stack>\n    );\n};\n// visible-block-end\nsetRefineProps({\n    DashboardPage: () => <ExamplePage />,\n    resources: [\n        {\n            name: "post",\n            create: () => {},\n        },\n    ],\n});\nrender(<RefineMuiDemo />);\n')))}p.isMDXComponent=!0},82196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));n(65488),n(85162),n(87801);const r={title:"useNotification",siderbar_label:"useNotification",source:"https://github.com/refinedev/refine/blob/next/packages/core/src/hooks/notification/useNotification/index.ts"},i=void 0,s={unversionedId:"api-reference/core/hooks/useNotification/index",id:"version-3.xx.xx/api-reference/core/hooks/useNotification/index",title:"useNotification",description:"It can be used to open or close notification at any time. It returns the open and close method from notificationProvider under the hood.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useNotification/index.md",sourceDirName:"api-reference/core/hooks/useNotification",slug:"/api-reference/core/hooks/useNotification/",permalink:"/docs/3.xx.xx/api-reference/core/hooks/useNotification/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useNotification/index.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1683874683,formattedLastUpdatedAt:"May 12, 2023",frontMatter:{title:"useNotification",siderbar_label:"useNotification",source:"https://github.com/refinedev/refine/blob/next/packages/core/src/hooks/notification/useNotification/index.ts"},sidebar:"someSidebar",previous:{title:"useNavigation",permalink:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},next:{title:"useTitle",permalink:"/docs/3.xx.xx/api-reference/core/hooks/refine/useTitle"}},c={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>open</code>",id:"open",level:3},{value:"<code>close</code>",id:"close",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to use a undoable notification?",id:"how-to-use-a-undoable-notification",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Return Values",id:"return-values",level:3}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It can be used to ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"close")," notification at any time. It returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"close")," method from ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"notificationProvider"))," under the hood."),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"Here is a basic example of how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"useNotification")," hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { open, close } = useNotification();\n\n// open notification\nopen?.({\n    type: "success",\n    message: "Success",\n    description: "This is a success message",\n});\n\n// close notification\nclose?.("notification-key");\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"open"},(0,a.kt)("inlineCode",{parentName:"h3"},"open")),(0,a.kt)("p",null,"You can call this method to open a new notification box."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { open } = useNotification();\n\nopen?.({\n    type: "success",\n    message: "Success",\n    description: "This is a success message",\n});\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences/#open-notification-params"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"Open Notification Params")," interface for more information \u2192"))),(0,a.kt)("h3",{id:"close"},(0,a.kt)("inlineCode",{parentName:"h3"},"close")),(0,a.kt)("p",null,"You can close a notification with a ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { close } = useNotification();\n\nclose?.("notification-key");\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences/#close-notification-params"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"Close Notification Params")," interface for more information \u2192"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You must pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," method. This key is used to close the notification.")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-use-a-undoable-notification"},"How to use a undoable notification?"),(0,a.kt)("p",null,"It should be ",(0,a.kt)("inlineCode",{parentName:"p"},"type=progress")," to show undoable notifications. A function can then be triggered."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { open } = useNotification();\n\nopen?.({\n    type: "progress",\n    message: "Progress",\n    undoableTimeout: 5,\n    cancelMutation: () => {\n      // when undo button is clicked run this callback\n    }\n})\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"return-values"},"Return Values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"open"),(0,a.kt)("td",{parentName:"tr",align:null},"Open Notification Params"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences/#open-notification-params"},(0,a.kt)("inlineCode",{parentName:"a"},"Open Notification Params")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"close"),(0,a.kt)("td",{parentName:"tr",align:null},"Close Notification Params"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences/#close-notification-params"},(0,a.kt)("inlineCode",{parentName:"a"},"Close Notification Params")))))))}p.isMDXComponent=!0}}]);
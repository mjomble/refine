"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54218],{80587:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(16153);const o=({hook:e,method:t,hasDefault:n=!0})=>{var o,i,l,s,d,p;const c=`It will be passed to the [\`${null===(o=t)||void 0===o?void 0:o.name}\`](${null===(i=t)||void 0===i?void 0:i.URL}) method from the \`dataProvider\` as parameter via the [\`${null===(l=e)||void 0===l?void 0:l.name}\`](${null===(s=e)||void 0===s?void 0:s.URL}) hook. \n    The parameter is usually used as an API endpoint path.\n    It all depends on how to handle the \`resource\` in the [\`${null===(d=t)||void 0===d?void 0:d.name}\`](${null===(p=t)||void 0===p?void 0:p.URL}) method. \n    See the [creating a data provider](/docs/api-reference/core/providers/data-provider/#creating-a-data-provider) section for an example of how resources are handled.`;return r.createElement(r.Fragment,null,n&&r.createElement(a.D,null,"> Default: It reads the `resource` value from the current URL."),r.createElement(a.D,null,c))}},97403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={},s=void 0,d={unversionedId:"api-reference/core/hooks/show/basic-usage-live-preview",id:"api-reference/core/hooks/show/basic-usage-live-preview",title:"basic-usage-live-preview",description:"",source:"@site/docs/api-reference/core/hooks/show/basic-usage-live-preview.md",sourceDirName:"api-reference/core/hooks/show",slug:"/api-reference/core/hooks/show/basic-usage-live-preview",permalink:"/docs/api-reference/core/hooks/show/basic-usage-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/show/basic-usage-live-preview.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1690889025,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{}},p={},c=[],u={toc:c};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n    padding: 4px;\n    background: white;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products/show/1 previewHeight=300px",live:!0,url:"http://localhost:3000/products/show/1",previewHeight:"300px"},'setInitialRoutes(["/products/show/1"]);\n// visible-block-start\nimport { useShow } from "@refinedev/core";\n\ninterface IProduct {\n    id: number;\n    name: string;\n    material: string;\n}\n\nconst ProductShow: React.FC = () => {\n    const { queryResult } = useShow<IProduct>();\n\n    const { data, isLoading, isError } = queryResult;\n    const product = data?.data;\n\n    if (isLoading) {\n        return <div>Loading...</div>;\n    }\n\n    if (isError) {\n        return <div>Something went wrong!</div>;\n    }\n\n    return (\n        <div>\n            <h3>Product Details</h3>\n            <p>id: {product?.id}</p>\n            <p>name: {product?.name}</p>\n            <p>material: {product?.material}</p>\n        </div>\n    );\n};\n\n// visible-block-end\nsetRefineProps({\n    resources: [\n        {\n            name: "products",\n            show: ProductShow,\n        },\n    ],\n});\nrender(<RefineHeadlessDemo />);\n')))}m.isMDXComponent=!0},48581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>v,frontMatter:()=>d,metadata:()=>c,toc:()=>m});n(67294);var r=n(3905),a=n(97403),o=n(80587);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const d={id:"useShow",title:"useShow"},p=void 0,c={unversionedId:"api-reference/core/hooks/show/useShow",id:"api-reference/core/hooks/show/useShow",title:"useShow",description:"useShow is an extended version of useOne that supports all of its features and adds some more.",source:"@site/docs/api-reference/core/hooks/show/useShow.md",sourceDirName:"api-reference/core/hooks/show",slug:"/api-reference/core/hooks/show/useShow",permalink:"/docs/api-reference/core/hooks/show/useShow",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/show/useShow.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1690889025,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{id:"useShow",title:"useShow"},sidebar:"someSidebar",previous:{title:"useResource",permalink:"/docs/api-reference/core/hooks/resource/useResource"},next:{title:"useTable",permalink:"/docs/api-reference/core/hooks/useTable"}},u={},m=[{value:"Usage",id:"usage",level:2},{value:"Realtime Updates",id:"realtime-updates",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>meta</code>",id:"meta",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"<code>queryOptions</code>",id:"queryoptions",level:3},{value:"<code>successNotification</code>",id:"successnotification",level:3},{value:"<code>errorNotification</code>",id:"errornotification",level:3},{value:"<code>liveMode</code>",id:"livemode",level:3},{value:"<code>onLiveEvent</code>",id:"onliveevent",level:3},{value:"<code>liveParams</code>",id:"liveparams",level:3},{value:"<code>overtimeOptions</code>",id:"overtimeoptions",level:3},{value:"Return Values",id:"return-values",level:2},{value:"<code>queryResult</code>",id:"queryresult",level:3},{value:"<code>showId</code>",id:"showid",level:3},{value:"<code>setShowId</code>",id:"setshowid",level:3},{value:"Additional Values",id:"additional-values",level:3},{value:"<code>overtime</code>",id:"overtime",level:4},{value:"API Reference",id:"api-reference",level:2},{value:"Props",id:"props",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values-1",level:3}],h=(k="PropsTable",function(e){return console.warn("Component "+k+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var k;const f={toc:m};function v(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useShow")," is an extended version of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useOne/"},(0,r.kt)("inlineCode",{parentName:"a"},"useOne"))," that supports all of its features and adds some more."),(0,r.kt)("p",null,"It is useful when you want to fetch a single record from the API. It will return the data and some functions to control the query."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useShow")," hook does not expect any properties. By default, it will try to read the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," values from the current URL. It will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"getOne")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter."),(0,r.kt)("p",null,"If you define ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," on the hook, when these properties are changed, the ",(0,r.kt)("inlineCode",{parentName:"p"},"useShow")," hook will trigger a new request."),(0,r.kt)(a.default,{mdxType:"BasicUsageLivePreview"}),(0,r.kt)("h2",{id:"realtime-updates"},"Realtime Updates"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This feature is only available if you use a ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},"Live Provider"),".")),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"useShow")," hook is mounted, it will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"liveProvider")," with some parameters such as ",(0,r.kt)("inlineCode",{parentName:"p"},"channel"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," etc. It is useful when you want to subscribe to live updates."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"liveProvider")," documentation","\u2192"))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"resource"},(0,r.kt)("inlineCode",{parentName:"h3"},"resource")),(0,r.kt)(o.Z,{hook:{name:"useOne",URL:"/docs/api-reference/core/hooks/data/useOne/"},method:{name:"getOne",URL:"/docs/api-reference/core/providers/data-provider/#getone"},mdxType:"PropResource"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useShow({\n    resource: "categories",\n});\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," is passed, the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," from the current URL will be ignored because it may belong to a different resource. To retrieve the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," value from the current URL, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useParsed")," hook and pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," value to the ",(0,r.kt)("inlineCode",{parentName:"p"},"useShow")," hook."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useShow, useParsed } from "@refinedev/core";\n\nconst { id } = useParsed();\n\nuseShow({\n    resource: "custom-resource",\n    id,\n});\n')),(0,r.kt)("p",{parentName:"admonition"},"Or you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"setId")," function to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," value."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useShow } from "@refinedev/core";\n\nconst { setShowId } = useShow({\n    resource: "custom-resource",\n});\n\nsetShowId("123");\n'))),(0,r.kt)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#identifier"},(0,r.kt)("inlineCode",{parentName:"a"},"identifier")," of the ",(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192"))),(0,r.kt)("h3",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h3"},"id")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: It reads the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," value from the current URL.")),(0,r.kt)("p",null,"It will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"getOne")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is used to determine which record to fetch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useShow({\n    id: 123,\n});\n")),(0,r.kt)("h3",{id:"meta"},(0,r.kt)("inlineCode",{parentName:"h3"},"meta")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"meta")," is a special property that can be used to pass additional information to data provider methods for the following purposes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Customizing the data provider methods for specific use cases."),(0,r.kt)("li",{parentName:"ul"},"Generating GraphQL queries using plain JavaScript Objects (JSON).")),(0,r.kt)("p",null,"In the following example, we pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"headers")," property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," object to the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method. With similar logic, you can pass any properties to specifically handle the data provider methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useShow({\n    // highlight-start\n    meta: {\n        headers: { "x-meta-data": "true" },\n    },\n    // highlight-end\n});\n\nconst myDataProvider = {\n    //...\n    getOne: async ({\n        resource,\n        id,\n        // highlight-next-line\n        meta,\n    }) => {\n        // highlight-next-line\n        const headers = meta?.headers ?? {};\n        const url = `${apiUrl}/${resource}/${id}`;\n\n        //...\n        //...\n\n        // highlight-next-line\n        const { data } = await httpClient.get(`${url}`, { headers });\n\n        return {\n            data,\n        };\n    },\n    //...\n};\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/general-concepts/#meta"},(0,r.kt)("inlineCode",{parentName:"a"},"meta")," section of the General Concepts documentation ","\u2192"))),(0,r.kt)("h3",{id:"dataprovidername"},(0,r.kt)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,r.kt)("p",null,"If there is more than one ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useShow({\n    dataProviderName: "second-data-provider",\n});\n')),(0,r.kt)("h3",{id:"queryoptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"queryOptions")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions")," is used to pass additional options to the ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," hook. It is useful when you want to pass additional options to the ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useShow({\n    queryOptions: {\n        retry: 3,\n        enabled: false,\n    },\n});\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"useQuery")," documentation","\u2192"))),(0,r.kt)("h3",{id:"successnotification"},(0,r.kt)("inlineCode",{parentName:"h3"},"successNotification")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/"},(0,r.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,r.kt)("p",null,"After data is fetched successfully, ",(0,r.kt)("inlineCode",{parentName:"p"},"useShow")," can call ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,r.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show a success notification. With this prop, you can customize the success notification."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useShow({\n    successNotification: (data, values, resource) => {\n        return {\n            message: `${data.title} Successfully fetched.`,\n            description: "Success with no errors",\n            type: "success",\n        };\n    },\n});\n')),(0,r.kt)("h3",{id:"errornotification"},(0,r.kt)("inlineCode",{parentName:"h3"},"errorNotification")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/"},(0,r.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,r.kt)("p",null,"After data fetching is failed, ",(0,r.kt)("inlineCode",{parentName:"p"},"useShow")," will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,r.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show an error notification. With this prop, you can customize the error notification."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useShow({\n    errorNotification: (data, values, resource) => {\n        return {\n            message: `Something went wrong when getting ${data.id}`,\n            description: "Error",\n            type: "error",\n        };\n    },\n});\n')),(0,r.kt)("h3",{id:"livemode"},(0,r.kt)("inlineCode",{parentName:"h3"},"liveMode")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/"},(0,r.kt)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,r.kt)("p",null,'Determines whether to update data automatically ("auto") or not ("manual") if a related live event is received. It can be used to update and show data in Realtime throughout your app.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useShow({\n    liveMode: "auto",\n});\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/#livemode"},"Live / Realtime page","\u2192"))),(0,r.kt)("h3",{id:"onliveevent"},(0,r.kt)("inlineCode",{parentName:"h3"},"onLiveEvent")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/"},(0,r.kt)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,r.kt)("p",null,"The callback function is executed when new events from a subscription have arrived."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useShow({\n    onLiveEvent: (event) => {\n        console.log(event);\n    },\n});\n")),(0,r.kt)("h3",{id:"liveparams"},(0,r.kt)("inlineCode",{parentName:"h3"},"liveParams")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/"},(0,r.kt)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,r.kt)("p",null,"Params to pass to liveProvider's ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/#subscribe"},"subscribe")," method."),(0,r.kt)("h3",{id:"overtimeoptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"overtimeOptions")),(0,r.kt)("p",null,"If you want loading overtime for the request, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"overtimeOptions")," prop to the this hook. It is useful when you want to show a loading indicator when the request takes too long.\n",(0,r.kt)("inlineCode",{parentName:"p"},"interval")," is the time interval in milliseconds. ",(0,r.kt)("inlineCode",{parentName:"p"},"onInterval")," is the function that will be called on each interval. "),(0,r.kt)("p",null,"Return ",(0,r.kt)("inlineCode",{parentName:"p"},"overtime")," object from this hook. ",(0,r.kt)("inlineCode",{parentName:"p"},"elapsedTime")," is the elapsed time in milliseconds. It becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," when the request is completed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const { overtime } = useShow({\n    //...\n    overtimeOptions: {\n        interval: 1000,\n        onInterval(elapsedInterval) {\n            console.log(elapsedInterval);\n        },\n    }\n});\n\nconsole.log(overtime.elapsedTime); // undefined, 1000, 2000, 3000 4000, ...\n\n// You can use it like this:\n{elapsedTime >= 4000 && <div>this takes a bit longer than expected</div>}\n")),(0,r.kt)("h2",{id:"return-values"},"Return Values"),(0,r.kt)("h3",{id:"queryresult"},(0,r.kt)("inlineCode",{parentName:"h3"},"queryResult")),(0,r.kt)("p",null,"It is TanStack Query's ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," return values."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"useQuery")," documentation","\u2192"))),(0,r.kt)("h3",{id:"showid"},(0,r.kt)("inlineCode",{parentName:"h3"},"showId")),(0,r.kt)("p",null,"It is the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," value that is used on the ",(0,r.kt)("inlineCode",{parentName:"p"},"useShow")," hook."),(0,r.kt)("h3",{id:"setshowid"},(0,r.kt)("inlineCode",{parentName:"h3"},"setShowId")),(0,r.kt)("p",null,"When you want to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"showId")," value, you can use this setter. It is useful when you want to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"showId")," value based on the user's action."),(0,r.kt)("p",null,"It will trigger new request to fetch the data when the ",(0,r.kt)("inlineCode",{parentName:"p"},"showId")," value is changed."),(0,r.kt)("h3",{id:"additional-values"},"Additional Values"),(0,r.kt)("h4",{id:"overtime"},(0,r.kt)("inlineCode",{parentName:"h4"},"overtime")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"overtime")," object is returned from this hook. ",(0,r.kt)("inlineCode",{parentName:"p"},"elapsedTime")," is the elapsed time in milliseconds. It becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," when the request is completed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const { overtime } = useShow();\n\nconsole.log(overtime.elapsedTime); // undefined, 1000, 2000, 3000 4000, ...\n")),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(h,{module:"@refinedev/core/useShow","liveMode-default":'`"off"`',mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desription"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TQueryFnData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data returned by the query function. Extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TError"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data returned by the ",(0,r.kt)("inlineCode",{parentName:"td"},"select")," function. Extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")),". If not specified, the value of ",(0,r.kt)("inlineCode",{parentName:"td"},"TQueryFnData")," will be used as the default value."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TQueryFnData"))))),(0,r.kt)("h3",{id:"return-values-1"},"Return values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the query of a record"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showId"),(0,r.kt)("td",{parentName:"tr",align:null},"Record id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setShowId"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"showId")," setter"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction< string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined>>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"overtime"),(0,r.kt)("td",{parentName:"tr",align:null},"Overtime loading props"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ elapsedTime?: number }"))))))}v.isMDXComponent=!0}}]);
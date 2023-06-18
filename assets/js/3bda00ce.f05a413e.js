"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31974,46097],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},17149:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={},p=void 0,l={unversionedId:"api-reference/core/hooks/data/useMany/basic-usage-live-preview",id:"api-reference/core/hooks/data/useMany/basic-usage-live-preview",title:"basic-usage-live-preview",description:"",source:"@site/docs/api-reference/core/hooks/data/useMany/basic-usage-live-preview.md",sourceDirName:"api-reference/core/hooks/data/useMany",slug:"/api-reference/core/hooks/data/useMany/basic-usage-live-preview",permalink:"/docs/api-reference/core/hooks/data/useMany/basic-usage-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/data/useMany/basic-usage-live-preview.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1687127999,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{}},d={},c=[],u={toc:c};function m(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},u,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n    padding: 4px;\n    background: white;\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=300px",live:!0,url:"http://localhost:3000/products",previewHeight:"300px"},'setInitialRoutes(["/products"]);\n// visible-block-start\nimport { useState } from "react";\nimport { useMany, HttpError } from "@refinedev/core";\n\ninterface IProduct {\n    id: number;\n    name: string;\n    material: string;\n}\n\nconst ProductList: React.FC = () => {\n    const [ids, setIds] = useState([1, 2, 3]);\n\n    const { data, isLoading, isError } = useMany<IProduct, HttpError>({\n        resource: "products",\n        ids,\n    });\n\n    const products = data?.data ?? [];\n\n    if (isLoading) {\n        return <div>Loading...</div>;\n    }\n\n    if (isError) {\n        return <div>Something went wrong!</div>;\n    }\n\n    return (\n        <div>\n            {products.map((product) => (\n                <ul key={product.id}>\n                    <li key={product.id}>\n                        {product.id} - {product.name}{" "}\n                        <button\n                            onClick={() =>\n                                setIds((prev) =>\n                                    prev.filter((id) => id !== product.id),\n                                )\n                            }\n                        >\n                            remove\n                        </button>\n                    </li>\n                </ul>\n            ))}\n\n            <button\n                onClick={() => {\n                    setIds((prev) => [\n                        ...prev,\n                        Math.floor(Math.random() * 1000) + 1,\n                    ]);\n                }}\n            >\n                Add new product\n            </button>\n        </div>\n    );\n};\n\n// visible-block-end\nsetRefineProps({\n    resources: [\n        {\n            name: "products",\n            list: ProductList,\n        },\n    ],\n});\nrender(<RefineHeadlessDemo />);\n')))}m.isMDXComponent=!0},96853:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>p,metadata:()=>d,toc:()=>u});r(67294);var n=r(3905),a=r(17149);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={title:"useMany",siderbar_label:"useMany",source:"packages/core/src/hooks/data/useMany.ts"},l=void 0,d={unversionedId:"api-reference/core/hooks/data/useMany/index",id:"api-reference/core/hooks/data/useMany/index",title:"useMany",description:"useMany is an extended version of TanStack Query's useQuery that supports all of its features and adds some more.",source:"@site/docs/api-reference/core/hooks/data/useMany/index.md",sourceDirName:"api-reference/core/hooks/data/useMany",slug:"/api-reference/core/hooks/data/useMany/",permalink:"/docs/api-reference/core/hooks/data/useMany/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/data/useMany/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1687127999,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{title:"useMany",siderbar_label:"useMany",source:"packages/core/src/hooks/data/useMany.ts"},sidebar:"someSidebar",previous:{title:"useInfiniteList",permalink:"/docs/api-reference/core/hooks/data/useInfiniteList/"},next:{title:"useOne",permalink:"/docs/api-reference/core/hooks/data/useOne/"}},c={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Realtime Updates",id:"realtime-updates",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>resource</code> <PropTag required />",id:"resource-",level:3},{value:"<code>ids</code> <PropTag required />",id:"ids-",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"<code>queryOptions</code>",id:"queryoptions",level:3},{value:"<code>meta</code>",id:"meta",level:3},{value:"<code>successNotification</code>",id:"successnotification",level:3},{value:"<code>errorNotification</code>",id:"errornotification",level:3},{value:"<code>liveMode</code>",id:"livemode",level:3},{value:"<code>onLiveEvent</code>",id:"onliveevent",level:3},{value:"<code>liveParams</code>",id:"liveparams",level:3},{value:"Return Values",id:"return-values",level:2},{value:"API",id:"api",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values-1",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},f=m("PropTag"),k=m("PropsTable"),h={toc:u};function y(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},h,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useMany")," is an extended version of TanStack Query's ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,n.kt)("inlineCode",{parentName:"a"},"useQuery"))," that supports all of its features and adds some more."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"It uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"getMany")," method as the ",(0,n.kt)("strong",{parentName:"p"},"query function")," from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine>"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"It uses a query key to cache the data. The ",(0,n.kt)("strong",{parentName:"p"},"query key")," is generated from the provided properties. You can see the query key by using the TanStack Query devtools."))),(0,n.kt)("p",null,"It is useful when you want to fetch multiple records from the API. It will return the data and some functions to control the query."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If your data provider does not have a ",(0,n.kt)("inlineCode",{parentName:"p"},"getMany")," method, ",(0,n.kt)("inlineCode",{parentName:"p"},"useMany")," will use the ",(0,n.kt)("inlineCode",{parentName:"p"},"getOne")," method instead. This is not recommended, as it will make requests one by one for each id. It is better to implement the ",(0,n.kt)("inlineCode",{parentName:"p"},"getMany")," method in the data provider.")),(0,n.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"useMany")," hook expects a ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"ids")," property, which will be passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"getMany")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter."),(0,n.kt)("p",null,"When these properties are changed, the ",(0,n.kt)("inlineCode",{parentName:"p"},"useMany")," hook will trigger a new request."),(0,n.kt)(a.default,{mdxType:"BasicUsageLivePreview"}),(0,n.kt)("h2",{id:"realtime-updates"},"Realtime Updates"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This feature is only available if you use a ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},"Live Provider"),".")),(0,n.kt)("p",null,"When the ",(0,n.kt)("inlineCode",{parentName:"p"},"useMany")," hook is mounted, it will call the ",(0,n.kt)("inlineCode",{parentName:"p"},"subscribe")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"liveProvider")," with some parameters such as ",(0,n.kt)("inlineCode",{parentName:"p"},"channel"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," etc. It is useful when you want to subscribe to live updates."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"liveProvider")," documentation","\u2192"))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"resource-"},(0,n.kt)("inlineCode",{parentName:"h3"},"resource")," ",(0,n.kt)(f,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"This parameter will be passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"getMany")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. t is usually used as an API endpoint path but it all depends on how you handle the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"getMany")," method."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'useMany({\n    resource: "categories",\n});\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/create-dataprovider/"},"creating a data provider tutorial ","\u2192"))),(0,n.kt)("h3",{id:"ids-"},(0,n.kt)("inlineCode",{parentName:"h3"},"ids")," ",(0,n.kt)(f,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"This prop will be passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"getMany")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is used to determine which records to fetch."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"useMany({\n    ids: [1, 2, 3],\n});\n")),(0,n.kt)("h3",{id:"dataprovidername"},(0,n.kt)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,n.kt)("p",null,"This prop allows you to specify which ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," if you have more than one. Just pass it like in the example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'useMany({\n    dataProviderName: "second-data-provider",\n});\n')),(0,n.kt)("h3",{id:"queryoptions"},(0,n.kt)("inlineCode",{parentName:"h3"},"queryOptions")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"queryOptions")," is used to pass additional options to the ",(0,n.kt)("inlineCode",{parentName:"p"},"useQuery")," hook. It is useful when you want to pass additional options to the ",(0,n.kt)("inlineCode",{parentName:"p"},"useQuery")," hook."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"useMany({\n    queryOptions: {\n        retry: 3,\n        enabled: false,\n    },\n});\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,n.kt)("inlineCode",{parentName:"a"},"useQuery")," documentation","\u2192"))),(0,n.kt)("h3",{id:"meta"},(0,n.kt)("inlineCode",{parentName:"h3"},"meta")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"meta")," is a special property that can be used to pass additional information to data provider methods for the following purposes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Customizing the data provider methods for specific use cases."),(0,n.kt)("li",{parentName:"ul"},"Generating GraphQL queries using plain JavaScript Objects (JSON).")),(0,n.kt)("p",null,"In the following example, we pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"headers")," property in the ",(0,n.kt)("inlineCode",{parentName:"p"},"meta")," object to the ",(0,n.kt)("inlineCode",{parentName:"p"},"create")," method. With similar logic, you can pass any properties to specifically handle the data provider methods."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { stringify } from "query-string";\n\nuseMany({\n    // highlight-start\n    meta: {\n        headers: { "x-meta-data": "true" },\n    },\n    // highlight-end\n});\n\nconst myDataProvider = {\n    //...\n    getMany: async ({\n        resource,\n        ids,\n        // highlight-next-line\n        meta,\n    }) => {\n        // highlight-next-line\n        const headers = meta?.headers ?? {};\n        const url = `${apiUrl}/${resource}?${stringify({ id: ids })}`;\n\n        //...\n        //...\n\n        // highlight-next-line\n        const { data } = await httpClient.get(`${url}`, { headers });\n\n        return {\n            data,\n        };\n    },\n    //...\n};\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/general-concepts/#meta"},(0,n.kt)("inlineCode",{parentName:"a"},"meta")," section of the General Concepts documentation","\u2192"))),(0,n.kt)("h3",{id:"successnotification"},(0,n.kt)("inlineCode",{parentName:"h3"},"successNotification")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,n.kt)("p",null,"After data is fetched successfully, ",(0,n.kt)("inlineCode",{parentName:"p"},"useMany")," can call ",(0,n.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,n.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show a success notification. With this prop, you can customize the success notification."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'useMany({\n    successNotification: (data, ids, resource) => {\n        return {\n            message: `${data.title} Successfully fetched.`,\n            description: "Success with no errors",\n            type: "success",\n        };\n    },\n});\n')),(0,n.kt)("h3",{id:"errornotification"},(0,n.kt)("inlineCode",{parentName:"h3"},"errorNotification")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,n.kt)("p",null,"After data fetching is failed, ",(0,n.kt)("inlineCode",{parentName:"p"},"useMany")," will call the ",(0,n.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,n.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show an error notification. With this prop, you can customize the error notification."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'useMany({\n    errorNotification: (data, ids, resource) => {\n        return {\n            message: `Something went wrong when getting ${data.id}`,\n            description: "Error",\n            type: "error",\n        };\n    },\n});\n')),(0,n.kt)("h3",{id:"livemode"},(0,n.kt)("inlineCode",{parentName:"h3"},"liveMode")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,n.kt)("p",null,'Determines whether to update data automatically ("auto") or not ("manual") if a related live event is received. It can be used to update and show data in Realtime throughout your app.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'useMany({\n    liveMode: "auto",\n});\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/#livemode"},"Live / Realtime page","\u2192"))),(0,n.kt)("h3",{id:"onliveevent"},(0,n.kt)("inlineCode",{parentName:"h3"},"onLiveEvent")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,n.kt)("p",null,"The callback function is executed when new events from a subscription have arrived."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"useMany({\n    onLiveEvent: (event) => {\n        console.log(event);\n    },\n});\n")),(0,n.kt)("h3",{id:"liveparams"},(0,n.kt)("inlineCode",{parentName:"h3"},"liveParams")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,n.kt)("p",null,"Params to pass to liveProvider's ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/#subscribe"},"subscribe")," method."),(0,n.kt)("h2",{id:"return-values"},"Return Values"),(0,n.kt)("p",null,"Returns an object with TanStack Query's ",(0,n.kt)("inlineCode",{parentName:"p"},"useQuery")," return values."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"}," ",(0,n.kt)("inlineCode",{parentName:"a"},"useQuery")," documentation ","\u2192"))),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"properties-1"},"Properties"),(0,n.kt)(k,{module:"@refinedev/core/useMany","successNotification-default":"`false`","errorNotification-default":'"Error (status code: `statusCode`)"',mdxType:"PropsTable"}),(0,n.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Desription"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TQueryFnData"),(0,n.kt)("td",{parentName:"tr",align:null},"Result data returned by the query function. Extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TError"),(0,n.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TData"),(0,n.kt)("td",{parentName:"tr",align:null},"Result data returned by the ",(0,n.kt)("inlineCode",{parentName:"td"},"select")," function. Extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord")),". If not specified, the value of ",(0,n.kt)("inlineCode",{parentName:"td"},"TQueryFnData")," will be used as the default value."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"TQueryFnData"))))),(0,n.kt)("h3",{id:"return-values-1"},"Return values"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Result of the TanStack Query's ",(0,n.kt)("inlineCode",{parentName:"td"},"useQuery")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,n.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData[]; }>")))))))}y.isMDXComponent=!0}}]);
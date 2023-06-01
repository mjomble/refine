"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48152],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={id:"text",title:"Text",swizzle:!0},a=void 0,s={unversionedId:"api-reference/mantine/components/fields/text",id:"version-3.xx.xx/api-reference/mantine/components/fields/text",title:"Text",description:"This field lets you show basic text. It uses Mantine `` component.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mantine/components/fields/text.md",sourceDirName:"api-reference/mantine/components/fields",slug:"/api-reference/mantine/components/fields/text",permalink:"/docs/3.xx.xx/api-reference/mantine/components/fields/text",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mantine/components/fields/text.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1685626118,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{id:"text",title:"Text",swizzle:!0},sidebar:"someSidebar",previous:{title:"Tag",permalink:"/docs/3.xx.xx/api-reference/mantine/components/fields/tag"},next:{title:"Url",permalink:"/docs/3.xx.xx/api-reference/mantine/components/fields/url"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],l=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const m={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: routerProvider } = RefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n    routerProvider,\n    dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n    notificationProvider: RefineMantine.notificationProvider,\n    Layout: RefineMantine.Layout,\n    Sider: () => null,\n});\n\nconst Wrapper = ({ children }) => {\n    return (\n        <RefineMantine.MantineProvider\n            theme={RefineMantine.LightTheme}\n            withNormalizeCSS\n            withGlobalStyles\n        >\n            <RefineMantine.Global\n                styles={{ body: { WebkitFontSmoothing: "auto" } }}\n            />\n            <RefineMantine.NotificationsProvider position="top-right">\n                {children}\n            </RefineMantine.NotificationsProvider>\n        </RefineMantine.MantineProvider>\n    );\n};\n')),(0,o.kt)("p",null,"This field lets you show basic text. It uses Mantine ",(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/core/text/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Text>"))," component."),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Let's see how to use it in a basic show page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts/show/123",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts/show/123"]);\nimport { Refine } from "@pankod/refine-core";\nimport { ShowButton } from "@pankod/refine-mantine";\n\n// visible-block-start\nimport { useShow, useOne } from "@pankod/refine-core";\nimport { Show, Title, Text, TextField } from "@pankod/refine-mantine";\n\nconst PostShow: React.FC<IResourceComponentsProps> = () => {\n    const { queryResult } = useShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    const { data: categoryData, isLoading: categoryIsLoading } =\n        useOne<ICategory>({\n            resource: "categories",\n            id: record?.category?.id,\n            queryOptions: {\n                enabled: !!record,\n            },\n        });\n\n    return (\n        <Show isLoading={isLoading}>\n            <Title order={5}>Id</Title>\n            <Text mt="sm">{record?.id}</Text>\n\n            <Title mt="sm" order={5}>\n                Category\n            </Title>\n            <TextField\n                value={\n                    categoryIsLoading ? "Loading..." : categoryData?.data?.title\n                }\n            />\n        </Show>\n    );\n};\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n\ninterface IPost {\n    id: number;\n    category: { id: number };\n}\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            resources={[\n                {\n                    name: "posts",\n                    show: PostShow,\n                    list: () => (\n                        <div>\n                            <p>This page is empty.</p>\n                            <ShowButton recordItemId="123">\n                                Show Item 123\n                            </ShowButton>\n                        </div>\n                    ),\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)(l,{module:"@pankod/refine-mantine/TextField",mdxType:"PropsTable"}),(0,o.kt)("admonition",{title:"External Props",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It also accepts all props of Mantine ",(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/core/text/?t=props"},"Text"),".")))}u.isMDXComponent=!0}}]);
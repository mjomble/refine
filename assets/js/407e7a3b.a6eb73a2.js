"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89961],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},67324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={id:"tag",title:"Tag",swizzle:!0},i=void 0,l={unversionedId:"api-reference/chakra-ui/components/fields/tag",id:"api-reference/chakra-ui/components/fields/tag",title:"Tag",description:"This field lets you display a value in a tag. It uses Chakra UI `` component.",source:"@site/docs/api-reference/chakra-ui/components/fields/tag.md",sourceDirName:"api-reference/chakra-ui/components/fields",slug:"/api-reference/chakra-ui/components/fields/tag",permalink:"/docs/api-reference/chakra-ui/components/fields/tag",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/chakra-ui/components/fields/tag.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1682592071,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{id:"tag",title:"Tag",swizzle:!0},sidebar:"someSidebar",previous:{title:"Number",permalink:"/docs/api-reference/chakra-ui/components/fields/number"},next:{title:"Text",permalink:"/docs/api-reference/chakra-ui/components/fields/text"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],p=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const u={toc:c};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: routerProvider } = LegacyRefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n    legacyRouterProvider: routerProvider,\n    dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n    Layout: RefineChakra.Layout,\n    Sider: () => null,\n});\n\nconst Wrapper = ({ children }) => {\n    return (\n        <ChakraUI.ChakraProvider theme={RefineChakra.refineTheme}>\n            {children}\n        </ChakraUI.ChakraProvider>\n    );\n};\n')),(0,a.kt)("p",null,"This field lets you display a value in a tag. It uses Chakra UI ",(0,a.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/tag/usage"},(0,a.kt)("inlineCode",{parentName:"a"},"<Tag>"))," component."),(0,a.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,a.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,a.kt)("strong",{parentName:"a"},"refine CLI")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Let's see how we can use it in a basic list page:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport {\n    List,\n    // highlight-next-line\n    TagField,\n} from "@refinedev/chakra-ui";\nimport {\n    TableContainer,\n    Table,\n    Thead,\n    Tr,\n    Th,\n    Tbody,\n    Td,\n} from "@chakra-ui/react";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nconst PostList: React.FC = () => {\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n            },\n            {\n                id: "status",\n                header: "Status",\n                accessorKey: "status",\n                cell: function render({ getValue }) {\n                    return (\n                        // highlight-next-line\n                        <TagField value={getValue()} />\n                    );\n                },\n            },\n        ],\n        [],\n    );\n\n    const { getHeaderGroups, getRowModel } = useTable({\n        columns,\n    });\n\n    return (\n        <List>\n            <TableContainer>\n                <Table variant="simple" whiteSpace="pre-line">\n                    <Thead>\n                        {getHeaderGroups().map((headerGroup) => (\n                            <Tr key={headerGroup.id}>\n                                {headerGroup.headers.map((header) => {\n                                    return (\n                                        <Th key={header.id}>\n                                            {!header.isPlaceholder &&\n                                                flexRender(\n                                                    header.column.columnDef\n                                                        .header,\n                                                    header.getContext(),\n                                                )}\n                                        </Th>\n                                    );\n                                })}\n                            </Tr>\n                        ))}\n                    </Thead>\n                    <Tbody>\n                        {getRowModel().rows.map((row) => {\n                            return (\n                                <Tr key={row.id}>\n                                    {row.getVisibleCells().map((cell) => {\n                                        return (\n                                            <Td key={cell.id}>\n                                                {flexRender(\n                                                    cell.column.columnDef.cell,\n                                                    cell.getContext(),\n                                                )}\n                                            </Td>\n                                        );\n                                    })}\n                                </Tr>\n                            );\n                        })}\n                    </Tbody>\n                </Table>\n            </TableContainer>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n    status: "published" | "draft" | "rejected";\n}\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            notificationProvider={RefineChakra.notificationProvider()}\n            resources={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)(p,{module:"@refinedev/chakra-ui/TagField","value-description":"Tag content",mdxType:"PropsTable"}),(0,a.kt)("admonition",{title:"External Props",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It also accepts all props of Mantine ",(0,a.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/tag/usage"},"Tag"),".")))}m.isMDXComponent=!0}}]);
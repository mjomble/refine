"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={id:"list",title:"List",sidebar_label:"List",swizzle:!0},a=void 0,s={unversionedId:"api-reference/mui/components/basic-views/list",id:"api-reference/mui/components/basic-views/list",title:"List",description:"`` provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving the page titles.",source:"@site/docs/api-reference/mui/components/basic-views/list.md",sourceDirName:"api-reference/mui/components/basic-views",slug:"/api-reference/mui/components/basic-views/list",permalink:"/docs/api-reference/mui/components/basic-views/list",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/components/basic-views/list.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1682592071,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{id:"list",title:"List",sidebar_label:"List",swizzle:!0},sidebar:"someSidebar",previous:{title:"Edit",permalink:"/docs/api-reference/mui/components/basic-views/edit"},next:{title:"Show",permalink:"/docs/api-reference/mui/components/basic-views/show"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>canCreate</code> and <code>createButtonProps</code>",id:"cancreate-and-createbuttonprops",level:3},{value:"<code>breadcrumb</code>",id:"breadcrumb",level:3},{value:"<code>wrapperProps</code>",id:"wrapperprops",level:3},{value:"<code>headerProps</code>",id:"headerprops",level:3},{value:"<code>contentProps</code>",id:"contentprops",level:3},{value:"<code>headerButtons</code>",id:"headerbuttons",level:3},{value:"<code>headerButtonProps</code>",id:"headerbuttonprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],u=(c="PropsTable",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const d={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<List>")," provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving the page titles."),(0,o.kt)("p",null,"We will show what ",(0,o.kt)("inlineCode",{parentName:"p"},"<List>")," does using properties with examples."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode url=http://localhost:3000/posts",live:!0,hideCode:!0,url:"http://localhost:3000/posts"},'// visible-block-start\nimport React from "react";\nimport { useMany } from "@refinedev/core";\nimport { List, useDataGrid, DateField } from "@refinedev/mui";\nimport { DataGrid, GridColumns } from "@mui/x-data-grid";\n\nconst SampleList = () => {\n    const { dataGridProps } = useDataGrid();\n\n    const { data: categoryData, isLoading: categoryIsLoading } = useMany({\n        resource: "categories",\n        ids: dataGridProps?.rows?.map((item: any) => item?.category?.id) ?? [],\n        queryOptions: {\n            enabled: !!dataGridProps?.rows,\n        },\n    });\n\n    const columns = React.useMemo<GridColumns<any>>(\n        () => [\n            {\n                field: "id",\n                headerName: "Id",\n                type: "number",\n                minWidth: 50,\n            },\n            {\n                field: "title",\n                headerName: "Title",\n                minWidth: 200,\n            },\n            {\n                field: "category",\n                headerName: "Category",\n                valueGetter: ({ row }) => {\n                    const value = row?.category?.id;\n\n                    return value;\n                },\n                minWidth: 300,\n                renderCell: function render({ value }) {\n                    return categoryIsLoading ? (\n                        <>Loading...</>\n                    ) : (\n                        categoryData?.data?.find((item) => item.id === value)\n                            ?.title\n                    );\n                },\n            },\n            {\n                field: "createdAt",\n                headerName: "Created At",\n                minWidth: 250,\n                renderCell: function render({ value }) {\n                    return <DateField value={value} />;\n                },\n            },\n        ],\n        [categoryData?.data],\n    );\n\n    return (\n        <List>\n            <DataGrid {...dataGridProps} columns={columns} autoHeight />\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/samples"]}\n        resources={[{ name: "samples", list: SampleList }]}\n    />,\n);\n')),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"title"},(0,o.kt)("inlineCode",{parentName:"h3"},"title")),(0,o.kt)("p",null,"It allows adding title inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"<List>")," component. if you don't pass title props it uses the plural resource name by default. For example, for the ",(0,o.kt)("inlineCode",{parentName:"p"},"/posts"),' resource, it will be "Posts".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=210px url=http://localhost:3000/posts/create",live:!0,disableScroll:!0,previewHeight:"210px",url:"http://localhost:3000/posts/create"},'// visible-block-start\nimport { List } from "@refinedev/mui";\nimport { Typography } from "@mui/material";\n\nconst ListPage: React.FC = () => {\n    return (\n        <List\n            // highlight-next-line\n            title={<Typography variant="h5">Custom Title</Typography>}\n        >\n            <span>Rest of your page here</span>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: ListPage,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h3",{id:"resource"},(0,o.kt)("inlineCode",{parentName:"h3"},"resource")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<List>")," component reads the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. If you want to use a custom resource for the ",(0,o.kt)("inlineCode",{parentName:"p"},"<List>")," component, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," prop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=210px url=http://localhost:3000/custom",live:!0,disableScroll:!0,previewHeight:"210px",url:"http://localhost:3000/custom"},'// handle initial routes in new way\nsetInitialRoutes(["/custom"]);\n\nimport { Refine } from "@refinedev/core";\nimport { Layout } from "@refinedev/mui";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\nimport dataProvider from "@refinedev/simple-rest";\n// visible-block-start\nimport { List } from "@refinedev/mui";\n\nconst CustomPage: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <List resource="posts">\n            <span>Rest of your page here</span>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            legacyRouterProvider={{\n                ...routerProvider,\n                // highlight-start\n                routes: [\n                    {\n                        element: <CustomPage />,\n                        path: "/custom",\n                    },\n                ],\n                // highlight-end\n            }}\n            Layout={Layout}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"cancreate-and-createbuttonprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"canCreate")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"createButtonProps")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"canCreate")," allows us to add the create button inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"<List>")," component. If resource is passed a create component, ",(0,o.kt)("strong",{parentName:"p"},"refine")," adds the create button by default. If you want to customize this button you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"createButtonProps")," property like the code below."),(0,o.kt)("p",null,"Create button redirects to the create page of the resource according to the value it reads from the URL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=210px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"210px",url:"http://localhost:3000/posts"},'const { default: simpleRest } = RefineSimpleRest;\n\nconst dataProvider = simpleRest("https://api.fake-rest.refine.dev");\n\nconst authProvider = {\n    login: async () => {\n        return {\n            success: true,\n            redirectTo: "/",\n        };\n    },\n    register: async () => {\n        return {\n            success: true,\n        };\n    },\n    forgotPassword: async () => {\n        return {\n            success: true,\n        };\n    },\n    updatePassword: async () => {\n        return {\n            success: true,\n        };\n    },\n    logout: async () => {\n        return {\n            success: true,\n            redirectTo: "/",\n        };\n    },\n    check: async () => ({\n        authenticated: true,\n    }),\n    onError: async (error) => {\n        console.error(error);\n        return { error };\n    },\n    getPermissions: async () => ["admin"],\n    getIdentity: async () => null,\n};\n\n// visible-block-start\nimport { List } from "@refinedev/mui";\nimport { usePermissions } from "@refinedev/core";\n\nconst PostList: React.FC = () => {\n    const { data: permissionsData } = usePermissions();\n    return (\n        <List\n            /* highlight-start */\n            canCreate={permissionsData?.includes("admin")}\n            createButtonProps={{ size: "small" }}\n            /* highlight-end */\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        authProvider={authProvider}\n        dataProvider={dataProvider}\n        initialRoutes={["/posts"]}\n        Layout={RefineMui.Layout}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/auth/usePermissions"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"usePermission")," documentation for detailed usage. ","\u2192")),(0,o.kt)("h3",{id:"breadcrumb"},(0,o.kt)("inlineCode",{parentName:"h3"},"breadcrumb")),(0,o.kt)("p",null,"To customize or disable the breadcrumb, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"breadcrumb")," property. By default it uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," component from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/mui")," package."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/mui-breadcrumb"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"Breadcrumb")," documentation for detailed usage. ","\u2192")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This feature can be managed globally via the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component's ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/#breadcrumb"},"options"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=210px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"210px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List, Breadcrumb } from "@refinedev/mui";\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            breadcrumb={\n                <div\n                    style={{\n                        padding: "3px 6px",\n                        border: "2px dashed cornflowerblue",\n                    }}\n                >\n                    <Breadcrumb />\n                </div>\n            }\n            // highlight-end\n        >\n            <span>Rest of your page here</span>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n        DashboardPage={() => {\n            return (\n                <div>\n                    <p>This page is empty.</p>\n                    <RefineMui.ListButton resource="posts" />\n                </div>\n            );\n        }}\n    />,\n);\n')),(0,o.kt)("h3",{id:"wrapperprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"wrapperProps")),(0,o.kt)("p",null,"If you want to customize the wrapper of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapperProps")," property."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"Card")," documentation from Material UI for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=210px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"210px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@refinedev/mui";\n\nconst PostList: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <List\n            // highlight-start\n            wrapperProps={{\n                sx: {\n                    backgroundColor: "lightsteelblue",\n                },\n            }}\n            // highlight-end\n        >\n            <span>Rest of your page here</span>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h3",{id:"headerprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"headerProps")),(0,o.kt)("p",null,"If you want to customize the header of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"headerProps")," property."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-header/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"CardHeader")," documentation from Material UI for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=210px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"210px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@refinedev/mui";\n\nconst PostList: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <List\n            // highlight-start\n            headerProps={{\n                sx: {\n                    backgroundColor: "lightsteelblue",\n                },\n            }}\n            // highlight-end\n        >\n            <span>Rest of your page here</span>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h3",{id:"contentprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"contentProps")),(0,o.kt)("p",null,"If you want to customize the content of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"contentProps")," property."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-content/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"CardContent")," documentation from Material UI for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=210px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"210px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@refinedev/mui";\n\nconst PostList: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <List\n            // highlight-start\n            contentProps={{\n                sx: {\n                    backgroundColor: "lightsteelblue",\n                },\n            }}\n            // highlight-end\n        >\n            <span>Rest of your page here</span>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h3",{id:"headerbuttons"},(0,o.kt)("inlineCode",{parentName:"h3"},"headerButtons")),(0,o.kt)("p",null,"You can customize the buttons at the header by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"headerButtons")," property. It accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,o.kt)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=210px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"210px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@refinedev/mui";\nimport { Button } from "@mui/material";\n\nconst PostList: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <List\n            // highlight-start\n            headerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n            // highlight-end\n        >\n            <span>Rest of your page here</span>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h3",{id:"headerbuttonprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"headerButtonProps")),(0,o.kt)("p",null,"You can customize the wrapper element of the buttons at the header by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"headerButtonProps")," property."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/box/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"Box")," documentation from Material UI for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=210px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"210px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@refinedev/mui";\nimport { Button } from "@mui/material";\n\nconst PostList: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <List\n            // highlight-start\n            headerButtonProps={{\n                sx: {\n                    backgroundColor: "lightsteelblue",\n                },\n            }}\n            // highlight-end\n            headerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n        >\n            <span>Rest of your page here</span>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(u,{module:"@refinedev/mui/List","wrapperProps-type":"[`CardProps`](https://mui.com/material-ui/api/card/#props)","contentProps-type":"[`CardContentProps`](https://mui.com/material-ui/api/card-content/#props)","headerProps-type":"[`CardHeaderProps`](https://mui.com/material-ui/api/card-header/#props)","headerButtons-default":"[`CreateButton`](https://refine.dev/docs/api-reference/mui/components/buttons/create-button/)","headerButtonProps-type":"[`BoxProps`](https://mui.com/material-ui/api/box/#props)","breadcrumb-default":"[`<Breadcrumb/>`](/docs/api-reference/mui/components/mui-breadcrumb/)","createButtonProps-type":"[`CreateButtonProps`](https://refine.dev/docs/api-reference/mui/components/buttons/create-button/)",mdxType:"PropsTable"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const Wrapper = ({ children }) => {\n    return (\n        <MuiMaterial.ThemeProvider theme={RefineMui.LightTheme}>\n            <MuiMaterial.CssBaseline />\n            <MuiMaterial.GlobalStyles\n                styles={{ html: { WebkitFontSmoothing: "auto" } }}\n            />\n            {children}\n        </MuiMaterial.ThemeProvider>\n    );\n};\n')))}m.isMDXComponent=!0}}]);
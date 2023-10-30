"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52514],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(t),d=o,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return t?r.createElement(h,a(a({ref:n},c),{},{components:t})):r.createElement(h,a({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var m=2;m<i;m++)a[m]=t[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},70724:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>m,toc:()=>p});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"theming",title:"Theme",sidebar_label:"Theme"},l=void 0,m={unversionedId:"api-reference/mantine/theming",id:"api-reference/mantine/theming",title:"Theme",description:"Mantine theme is an object where your application's colors, fonts, spacing, border-radius and other design tokens are stored. You can either create your own theme object or use themes that provide from refine. Theme provides a way to your app's design to meet them.",source:"@site/docs/api-reference/mantine/theming.md",sourceDirName:"api-reference/mantine",slug:"/api-reference/mantine/theming",permalink:"/docs/api-reference/mantine/theming",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mantine/theming.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1698675751,formattedLastUpdatedAt:"Oct 30, 2023",frontMatter:{id:"theming",title:"Theme",sidebar_label:"Theme"},sidebar:"someSidebar",previous:{title:"<AutoSaveIndicator>",permalink:"/docs/api-reference/mantine/components/mantine-auto-save-indicator"},next:{title:"Material UI API",permalink:"/docs/api-reference/mui"}},c={},p=[{value:"Predefined Themes",id:"predefined-themes",level:2},{value:"Theme customization",id:"theme-customization",level:2},{value:"Overriding the refine themes",id:"overriding-the-refine-themes",level:3},{value:"Theme switching",id:"theme-switching",level:2}],u={toc:p};function d(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},u,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import { List, Create, Edit, EditButton, useForm } from "@refinedev/mantine";\nimport { Table, Pagination, TextInput } from "@mantine/core";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nconst PostList: React.FC = () => {\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n            },\n            {\n                id: "actions",\n                header: "Actions",\n                accessorKey: "id",\n                cell: function render({ getValue }) {\n                    return (\n                        <EditButton\n                            hideText\n                            recordItemId={getValue() as number}\n                        />\n                    );\n                },\n            },\n        ],\n        [],\n    );\n\n    const {\n        getHeaderGroups,\n        getRowModel,\n        refineCore: { setCurrent, pageCount, current },\n    } = useTable({\n        columns,\n        refineCoreProps: {\n            initialPageSize: 5,\n        },\n    });\n\n    return (\n        <List>\n            <Table>\n                <thead>\n                    {getHeaderGroups().map((headerGroup) => (\n                        <tr key={headerGroup.id}>\n                            {headerGroup.headers.map((header) => (\n                                <th key={header.id}>\n                                    {header.isPlaceholder\n                                        ? null\n                                        : flexRender(\n                                              header.column.columnDef.header,\n                                              header.getContext(),\n                                          )}\n                                </th>\n                            ))}\n                        </tr>\n                    ))}\n                </thead>\n                <tbody>\n                    {getRowModel().rows.map((row) => (\n                        <tr key={row.id}>\n                            {row.getVisibleCells().map((cell) => (\n                                <td key={cell.id}>\n                                    {flexRender(\n                                        cell.column.columnDef.cell,\n                                        cell.getContext(),\n                                    )}\n                                </td>\n                            ))}\n                        </tr>\n                    ))}\n                </tbody>\n            </Table>\n            <br />\n            <Pagination\n                position="right"\n                total={pageCount}\n                page={current}\n                onChange={setCurrent}\n            />\n        </List>\n    );\n};\n\nconst PostEdit: React.FC = () => {\n    const { saveButtonProps, getInputProps } = useForm({\n        initialValues: {\n            title: "",\n        },\n        validate: {\n            title: (value) => (value.length < 2 ? "Too short title" : null),\n        },\n    });\n\n    return (\n        <Edit saveButtonProps={saveButtonProps}>\n            <form>\n                <TextInput\n                    mt={8}\n                    label="Title"\n                    placeholder="Title"\n                    {...getInputProps("title")}\n                />\n            </form>\n        </Edit>\n    );\n};\n\nconst PostCreate: React.FC = () => {\n    const { saveButtonProps, getInputProps } = useForm({\n        initialValues: {\n            title: "",\n        },\n        validate: {\n            title: (value) => (value.length < 2 ? "Too short title" : null),\n        },\n    });\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <form>\n                <TextInput\n                    mt={8}\n                    label="Title"\n                    placeholder="Title"\n                    {...getInputProps("title")}\n                />\n            </form>\n        </Create>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n')),(0,r.kt)("p",null,"Mantine theme is an object where your application's colors, fonts, spacing, border-radius and other design tokens are stored. You can either create your own theme object or use themes that provide from ",(0,r.kt)("strong",{parentName:"p"},"refine"),". Theme provides a way to your app's design to meet them."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/theming/theme-object/"},"Mantine documentation ","\u2192"))),(0,r.kt)("h2",{id:"predefined-themes"},"Predefined Themes"),(0,r.kt)("p",null,"If you don't want to use the default Mantine theme, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/next/packages/mantine/src/theme/index.ts#L186"},(0,r.kt)("inlineCode",{parentName:"a"},"RefineThemes"))," has predefined themes for you. You can import predefined themes from the ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/mantine")," package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { Blue, Purple, Magenta, Red, Orange, Yellow } = RefineThemes;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/mantine";\n\nimport { MantineProvider } from "@mantine/core";\n\nconst App: React.FC = () => {\n    return (\n        <MantineProvider theme={RefineThemes.Blue}>\n            <Refine\n            /* ... */\n            >\n                <ThemedLayoutV2>{/* ... */}</ThemedLayoutV2>\n            </Refine>\n        </MantineProvider>\n    );\n};\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/examples/themes/refine-themes-mantine/"},"You can see how themes change the look of the application in this example."))),(0,r.kt)("h2",{id:"theme-customization"},"Theme customization"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<MantineProvider/>")," component can be used to change the theme. It is not required if you decide to use the default theme. You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"RefineThemes")," provided by ",(0,r.kt)("strong",{parentName:"p"},"refine"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px",live:!0,url:"http://localhost:3000",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n    ThemedLayoutV2,\n    notificationProvider,\n    ErrorComponent,\n    // highlight-next-line\n    RefineThemes,\n} from "@refinedev/mantine";\nimport { MantineProvider, Global } from "@mantine/core";\nimport { NotificationsProvider } from "@mantine/notifications";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\nconst App = () => {\n    return (\n        <MantineProvider\n            // highlight-next-line\n            theme={RefineThemes.Blue}\n            withNormalizeCSS\n            withGlobalStyles\n        >\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerProvider}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        resources={[\n                            {\n                                name: "posts",\n                                list: "/posts",\n                                edit: "/posts/edit/:id",\n                                create: "/posts/create",\n                            },\n                        ]}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <ThemedLayoutV2>\n                                        <Outlet />\n                                    </ThemedLayoutV2>\n                                }\n                            >\n                                <Route path="posts">\n                                    <Route index element={<PostList />} />\n                                    <Route\n                                        path="create"\n                                        element={<PostCreate />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<PostEdit />}\n                                    />\n                                </Route>\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                    </Refine>\n                </BrowserRouter>\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/theming/mantine-provider/"},(0,r.kt)("inlineCode",{parentName:"a"},"<MantineProvider/>")," documentation ","\u2192"))),(0,r.kt)("h3",{id:"overriding-the-refine-themes"},"Overriding the refine themes"),(0,r.kt)("p",null,"You can override or extend the default refine themes. You can also create your own theme. Let's see how you can do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px",live:!0,url:"http://localhost:3000",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n    ThemedLayoutV2,\n    notificationProvider,\n    ErrorComponent,\n    // highlight-next-line\n    RefineThemes,\n} from "@refinedev/mantine";\nimport { MantineProvider, Global } from "@mantine/core";\nimport { NotificationsProvider } from "@mantine/notifications";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\nconst App = () => {\n    return (\n        <MantineProvider\n            // highlight-start\n            theme={{\n                ...RefineThemes.Blue,\n                colors: {\n                    brand: [\n                        "#ECF9F8",\n                        "#C9EEEC",\n                        "#A6E2E1",\n                        "#84D7D5",\n                        "#61CCC9",\n                        "#3EC1BD",\n                        "#329A97",\n                        "#257471",\n                        "#194D4B",\n                        "#0C2726",\n                    ],\n                },\n                globalStyles: (theme: MantineTheme) => ({\n                    body: {\n                        backgroundColor: "#84D7D5",\n                    },\n                }),\n            }}\n            // highlight-end\n            withNormalizeCSS\n            withGlobalStyles\n        >\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerProvider}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        resources={[\n                            {\n                                name: "posts",\n                                list: "/posts",\n                                edit: "/posts/edit/:id",\n                                create: "/posts/create",\n                            },\n                        ]}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <ThemedLayoutV2>\n                                        <Outlet />\n                                    </ThemedLayoutV2>\n                                }\n                            >\n                                <Route path="posts">\n                                    <Route index element={<PostList />} />\n                                    <Route\n                                        path="create"\n                                        element={<PostCreate />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<PostEdit />}\n                                    />\n                                </Route>\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                    </Refine>\n                </BrowserRouter>\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/theming/colors/"},"Mantine colors documentation ","\u2192"))),(0,r.kt)("h2",{id:"theme-switching"},"Theme switching"),(0,r.kt)("p",null,"You can switch between themes as Mantine mentioned in its documentation. You can see an example of using local storage to store the theme below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px",live:!0,url:"http://localhost:3000",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n    ThemedLayoutV2,\n    ErrorComponent,\n    notificationProvider,\n    RefineThemes,\n} from "@refinedev/mantine";\n// highlight-start\nimport { NotificationsProvider } from "@mantine/notifications";\nimport {\n    MantineProvider,\n    Global,\n    useMantineColorScheme,\n    Header as MantineHeader,\n    Group,\n    ActionIcon,\n    ColorScheme,\n    ColorSchemeProvider,\n} from "@mantine/core";\nimport { useLocalStorage } from "@mantine/hooks";\n// highlight-end\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { IconSun, IconMoonStars } from "@tabler/icons";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\n// highlight-start\nconst Header = () => {\n    const { colorScheme, toggleColorScheme } = useMantineColorScheme();\n    const dark = colorScheme === "dark";\n\n    return (\n        <MantineHeader height={50} p="xs">\n            <Group position="right">\n                <ActionIcon\n                    variant="outline"\n                    color={dark ? "yellow" : "primary"}\n                    onClick={() => toggleColorScheme()}\n                    title="Toggle color scheme"\n                >\n                    {dark ? <IconSun /> : <IconMoonStars />}\n                </ActionIcon>\n            </Group>\n        </MantineHeader>\n    );\n};\n// highlight-end\n\nconst App = () => {\n    // highlight-start\n    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({\n        key: "mantine-color-scheme",\n        defaultValue: "light",\n        getInitialValueInEffect: true,\n    });\n    // highlight-end\n\n    // highlight-start\n    const toggleColorScheme = (value?: ColorScheme) =>\n        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));\n    // highlight-end\n\n    return (\n        // highlight-start\n        <ColorSchemeProvider\n            colorScheme={colorScheme}\n            toggleColorScheme={toggleColorScheme}\n            // highlight-end\n        >\n            <MantineProvider\n                // highlight-next-line\n                theme={{\n                    ...RefineThemes.Blue,\n                    colorScheme: colorScheme,\n                }}\n                withNormalizeCSS\n                withGlobalStyles\n            >\n                <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n                <NotificationsProvider position="top-right">\n                    <BrowserRouter>\n                        <Refine\n                            routerProvider={routerProvider}\n                            dataProvider={dataProvider(\n                                "https://api.fake-rest.refine.dev",\n                            )}\n                            notificationProvider={notificationProvider}\n                            resources={[\n                                {\n                                    name: "posts",\n                                    list: "/posts",\n                                    edit: "/posts/edit/:id",\n                                    create: "/posts/create",\n                                },\n                            ]}\n                        >\n                            <Routes>\n                                <Route\n                                    element={\n                                        <ThemedLayoutV2\n                                            // highlight-next-line\n                                            Header={Header}\n                                        >\n                                            <Outlet />\n                                        </ThemedLayoutV2>\n                                    }\n                                >\n                                    <Route path="posts">\n                                        <Route index element={<PostList />} />\n                                        <Route\n                                            path="create"\n                                            element={<PostCreate />}\n                                        />\n                                        <Route\n                                            path="edit/:id"\n                                            element={<PostEdit />}\n                                        />\n                                    </Route>\n                                    <Route\n                                        path="*"\n                                        element={<ErrorComponent />}\n                                    />\n                                </Route>\n                            </Routes>\n                        </Refine>\n                    </BrowserRouter>\n                </NotificationsProvider>\n            </MantineProvider>\n        </ColorSchemeProvider>\n    );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/guides/dark-theme"},"Mantine dark theme documentation ","\u2192"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to customize the default layout elements provided with ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/mantine")," package, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/custom-layout"},"Custom ThemedLayout")," tutorial.")))}d.isMDXComponent=!0}}]);
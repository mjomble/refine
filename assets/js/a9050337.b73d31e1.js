"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28282],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>d});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=i,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?t.createElement(f,a(a({ref:n},c),{},{components:r})):t.createElement(f,a({ref:n},c))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},69230:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var t=r(67294),i=r(3905);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const l={id:"inferencer",title:"Inferencer"},p=void 0,c={unversionedId:"api-reference/mui/components/inferencer",id:"version-3.xx.xx/api-reference/mui/components/inferencer",title:"Inferencer",description:"You can automatically generate views for your resources using @pankod/refine-inferencer. Inferencer exports MuiListInferencer, MuiShowInferencer, MuiEditInferencer, MuiCreateInferencer and MuiInferencer (which combines all in one place) components.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mui/components/inferencer.md",sourceDirName:"api-reference/mui/components",slug:"/api-reference/mui/components/inferencer",permalink:"/docs/3.xx.xx/api-reference/mui/components/inferencer",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mui/components/inferencer.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1698400480,formattedLastUpdatedAt:"Oct 27, 2023",frontMatter:{id:"inferencer",title:"Inferencer"},sidebar:"someSidebar",previous:{title:"<AuthPage>",permalink:"/docs/3.xx.xx/api-reference/mui/components/mui-auth-page"},next:{title:"Create",permalink:"/docs/3.xx.xx/api-reference/mui/components/basic-views/create"}},m={},u=[{value:"Usage",id:"usage",level:2},{value:"Views",id:"views",level:2},{value:"<code>List</code>",id:"list",level:3},{value:"<code>Show</code>",id:"show",level:3},{value:"<code>Create</code>",id:"create",level:3},{value:"<code>Edit</code>",id:"edit",level:3},{value:"Example",id:"example",level:2}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)},f=d("Tabs"),h=d("TabItem"),g=d("CodeSandboxExample"),v={toc:u};function k(e){var{components:n}=e,r=s(e,["components"]);return(0,i.kt)("wrapper",a(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},v,r),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can automatically generate views for your resources using ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer"),". Inferencer exports ",(0,i.kt)("inlineCode",{parentName:"p"},"MuiListInferencer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MuiShowInferencer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MuiEditInferencer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MuiCreateInferencer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MuiInferencer")," (which combines all in one place) components."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Material UI components can be imported from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/mui"),". You can directly use the components in ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," prop of ",(0,i.kt)("inlineCode",{parentName:"p"},"Refine")," component or you can use them in your custom components by passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," prop as the resource name."),(0,i.kt)(f,{defaultValue:"resources",values:[{label:(0,i.kt)(t.Fragment,null,"In",(0,i.kt)("code",{style:{margin:"0 0.7ch"}},"resources"),"prop"),value:"resources"},{label:"In Custom Components",value:"custom"}],mdxType:"Tabs"},(0,i.kt)(h,{value:"resources",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    ThemeProvider,\n    LightTheme,\n    CssBaseline,\n    GlobalStyles,\n} from "@pankod/refine-mui";\n\n// highlight-next-line\nimport { MuiInferencer } from "@pankod/refine-inferencer/mui";\n\nconst App = () => {\n    return (\n        <ThemeProvider theme={LightTheme}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <Refine\n                resources={[\n                    {\n                        name: "samples",\n                        // highlight-start\n                        list: MuiInferencer,\n                        show: MuiInferencer,\n                        create: MuiInferencer,\n                        edit: MuiInferencer,\n                        // highlight-end\n                    },\n                ]}\n            />\n        </ThemeProvider>\n    );\n};\n'))),(0,i.kt)(h,{value:"custom",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { MuiInferencer } from "@pankod/refine-inferencer/mui";\n\nconst SampleList = () => {\n    return (\n        // highlight-next-line\n        <MuiInferencer resource="samples" action="list" />\n    );\n};\n\nconst SampleShow = () => {\n    return (\n        // highlight-next-line\n        <MuiInferencer resource="samples" action="show" id="1" />\n    );\n};\n\nconst SampleCreate = () => {\n    return (\n        // highlight-next-line\n        <MuiInferencer resource="samples" action="create" />\n    );\n};\n\nconst SampleEdit = () => {\n    return (\n        // highlight-next-line\n        <MuiInferencer resource="samples" action="edit" id="1" />\n    );\n};\n')))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To learn more about ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," package, please check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/packages/documentation/inferencer"},"Docs"))),(0,i.kt)("h2",{id:"views"},"Views"),(0,i.kt)("h3",{id:"list"},(0,i.kt)("inlineCode",{parentName:"h3"},"List")),(0,i.kt)("p",null,"Generates a sample list view for your resources according to the API response. It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," component and ",(0,i.kt)("inlineCode",{parentName:"p"},"useDatagrid")," hook from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mui"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/posts",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/posts"},'setInitialRoutes(["/"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    ThemeProvider,\n    LightTheme,\n    CssBaseline,\n    GlobalStyles,\n} from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { MuiInferencer } from "@pankod/refine-inferencer/mui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={LightTheme}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider(API_URL)}\n                Layout={Layout}\n                resources={[\n                    {\n                        name: "samples",\n                        // highlight-next-line\n                        list: MuiInferencer,\n                        show: MuiInferencer,\n                        create: MuiInferencer,\n                        edit: MuiInferencer,\n                        canDelete: true,\n                    },\n                    {\n                        name: "categories",\n                        // highlight-next-line\n                        list: MuiInferencer,\n                        show: MuiInferencer,\n                    },\n                    {\n                        name: "tags",\n                        // highlight-next-line\n                        list: MuiInferencer,\n                        show: MuiInferencer,\n                    },\n                ]}\n            />\n        </ThemeProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,i.kt)("h3",{id:"show"},(0,i.kt)("inlineCode",{parentName:"h3"},"Show")),(0,i.kt)("p",null,"Generates a sample show view for your resources according to the API response. It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Show")," and field components from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mui")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"useShow")," hook from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/show/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/show/123"},'setInitialRoutes(["/samples/show/123"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    ThemeProvider,\n    LightTheme,\n    CssBaseline,\n    GlobalStyles,\n} from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { MuiInferencer } from "@pankod/refine-inferencer/mui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={LightTheme}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider(API_URL)}\n                Layout={Layout}\n                resources={[\n                    {\n                        name: "samples",\n                        list: MuiInferencer,\n                        // highlight-next-line\n                        show: MuiInferencer,\n                        create: MuiInferencer,\n                        edit: MuiInferencer,\n                        canDelete: true,\n                    },\n                    {\n                        name: "categories",\n                        list: MuiInferencer,\n                        // highlight-next-line\n                        show: MuiInferencer,\n                    },\n                    {\n                        name: "tags",\n                        list: MuiInferencer,\n                        // highlight-next-line\n                        show: MuiInferencer,\n                    },\n                ]}\n            />\n        </ThemeProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,i.kt)("h3",{id:"create"},(0,i.kt)("inlineCode",{parentName:"h3"},"Create")),(0,i.kt)("p",null,"Generates a sample create view for your resources according to the first record in list API response. It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Create")," component from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mui")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-hook-form"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/create",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/create"},'setInitialRoutes(["/samples/create"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    ThemeProvider,\n    LightTheme,\n    CssBaseline,\n    GlobalStyles,\n} from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { MuiInferencer } from "@pankod/refine-inferencer/mui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={LightTheme}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider(API_URL)}\n                Layout={Layout}\n                resources={[\n                    {\n                        name: "samples",\n                        list: MuiInferencer,\n                        show: MuiInferencer,\n                        // highlight-next-line\n                        create: MuiInferencer,\n                        edit: MuiInferencer,\n                        canDelete: true,\n                    },\n                    {\n                        name: "categories",\n                        list: MuiInferencer,\n                        show: MuiInferencer,\n                    },\n                    {\n                        name: "tags",\n                        list: MuiInferencer,\n                        show: MuiInferencer,\n                    },\n                ]}\n            />\n        </ThemeProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,i.kt)("h3",{id:"edit"},(0,i.kt)("inlineCode",{parentName:"h3"},"Edit")),(0,i.kt)("p",null,"Generates a sample edit view for your resources according to the API response. It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit")," component from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mui")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-hook-form"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/edit/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/edit/123"},'setInitialRoutes(["/samples/edit/123"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    ThemeProvider,\n    LightTheme,\n    CssBaseline,\n    GlobalStyles,\n} from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { MuiInferencer } from "@pankod/refine-inferencer/mui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={LightTheme}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider(API_URL)}\n                Layout={Layout}\n                resources={[\n                    {\n                        name: "samples",\n                        list: MuiInferencer,\n                        show: MuiInferencer,\n                        create: MuiInferencer,\n                        // highlight-next-line\n                        edit: MuiInferencer,\n                        canDelete: true,\n                    },\n                    {\n                        name: "categories",\n                        list: MuiInferencer,\n                        show: MuiInferencer,\n                    },\n                    {\n                        name: "tags",\n                        list: MuiInferencer,\n                        show: MuiInferencer,\n                    },\n                ]}\n            />\n        </ThemeProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Below you'll find a Live CodeSandbox Example displaying a fully setup ",(0,i.kt)("inlineCode",{parentName:"p"},"Refine")," app with ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/mui")," components."),(0,i.kt)(g,{path:"inferencer-material-ui",mdxType:"CodeSandboxExample"}))}k.isMDXComponent=!0}}]);
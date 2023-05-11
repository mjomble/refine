"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),c=r,h=u["".concat(d,".").concat(c)]||u[c]||m[c]||a;return n?o.createElement(h,i(i({ref:t},s),{},{components:n})):o.createElement(h,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={id:"add-edit-page",title:"2. Adding Edit Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/index",next:"tutorial/adding-crud-pages/{preferredUI}/add-show-page"}},i=void 0,p={unversionedId:"tutorial/adding-crud-pages/mui/add-edit-page",id:"tutorial/adding-crud-pages/mui/add-edit-page",title:"2. Adding Edit Page",description:"Creating Edit Page",source:"@site/docs/tutorial/4-adding-crud-pages/mui/add-edit-page.md",sourceDirName:"tutorial/4-adding-crud-pages/mui",slug:"/tutorial/adding-crud-pages/mui/add-edit-page",permalink:"/docs/tutorial/adding-crud-pages/mui/add-edit-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/mui/add-edit-page.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683810694,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{id:"add-edit-page",title:"2. Adding Edit Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/index",next:"tutorial/adding-crud-pages/{preferredUI}/add-show-page"}}},d={},l=[{value:"Creating Edit Page",id:"creating-edit-page",level:2},{value:"Understanding the Edit Component",id:"understanding-the-edit-component",level:2},{value:"Hooks and Components in Edit Page",id:"hooks-and-components-in-edit-page",level:3},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Edit Page to the App",id:"adding-the-edit-page-to-the-app",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=s("Checklist"),u=s("ChecklistItem"),c={toc:l};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"creating-edit-page"},"Creating Edit Page"),(0,r.kt)("p",null,"First, we need to create our file, named ",(0,r.kt)("inlineCode",{parentName:"p"},"edit.tsx"),", under the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts")," folder. We will then copy the edit page code generated by Inferencer and paste it into the file; for this, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")," in your browser.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click on any of the "Edit" buttons in the "Actions" column of the table to open the edit page.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click on the "Show Code" button in the bottom right corner of the page.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'You can see the edit page code generated by Inferencer. Copy it by clicking on the "Copy" button.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste the code into the newly created ",(0,r.kt)("inlineCode",{parentName:"p"},"edit.tsx")," file."))),(0,r.kt)("p",null,"You can see an example edit page generated by Inferencer below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/edit/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/edit/123"},'setInitialRoutes(["/blog-posts/edit/123"]);\n\nimport { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";\nimport { Refine } from "@refinedev/core";\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\nimport {\n    ErrorComponent,\n    ThemedLayoutV2,\n    RefineThemes,\n    notificationProvider,\n    RefineSnackbarProvider,\n} from "@refinedev/mui";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={RefineThemes.Blue}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        resources={[\n                            {\n                                name: "blog_posts",\n                                list: "/blog-posts",\n                                show: "/blog-posts/show/:id",\n                                create: "/blog-posts/create",\n                                edit: "/blog-posts/edit/:id",\n                            },\n                        ]}\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <ThemedLayoutV2>\n                                        <Outlet />\n                                    </ThemedLayoutV2>\n                                }\n                            >\n                                <Route\n                                    index\n                                    element={\n                                        <NavigateToResource resource="blog_posts" />\n                                    }\n                                />\n\n                                <Route path="blog-posts">\n                                    <Route index element={<MuiInferencer />} />\n                                    <Route\n                                        path="show/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="create"\n                                        element={<MuiInferencer />}\n                                    />\n                                </Route>\n\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\n\nrender(<App />);\n')),(0,r.kt)("h2",{id:"understanding-the-edit-component"},"Understanding the Edit Component"),(0,r.kt)("h3",{id:"hooks-and-components-in-edit-page"},"Hooks and Components in Edit Page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<Edit/>")," is a ",(0,r.kt)("strong",{parentName:"p"},"refine")," component that is used for presentation purposes like showing the title of the page, save button, refresh button etc."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/basic-views/edit"},(0,r.kt)("inlineCode",{parentName:"a"},"<Edit/>")," documentation","\u2192")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," hook is imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/react-hook-form"),", which combines the features of ",(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," hook from both ",(0,r.kt)("strong",{parentName:"p"},"React Hook Form")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/core"),". When used the in the edit page, it fetches record data with the URL's ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", populating and submitting the form with ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," method. It also offers ",(0,r.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," for the form's submit button."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://react-hook-form.com/"},(0,r.kt)("strong",{parentName:"a"},"React Hook Form")," documentation","\u2192")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All other components provided by ",(0,r.kt)("strong",{parentName:"p"},"Material UI")," are used to display the form fields."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/"},(0,r.kt)("strong",{parentName:"a"},"Material UI")," documentation","\u2192"))))),(0,r.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,r.kt)("p",null,"On the edit page, we may need to select a record from another resource."),(0,r.kt)("p",null,"For example, if we need to select a category from the ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," resource to assign the blog post to the category, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelect")," hook provided by ",(0,r.kt)("strong",{parentName:"p"},"refine"),". This hook fetches the data by passing the params to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"getList")," method and then returns the necessary props to be used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Autocomplete/>")," component."),(0,r.kt)("p",null,"In the auto-generated edit page code, Inferencer used the ",(0,r.kt)("inlineCode",{parentName:"p"},"useAutocomplete")," hook to select a category from the ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," resource like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({\n    resource: "categories",\n});\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useAutocomplete")," hook returns 10 records by default, but the category of the blog post may not be in the first 10 records. To solve this problem, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultValue")," prop to set the default value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useAutocomplete")," hook like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({\n    resource: "categories",\n    defaultValue: blogPostsData?.category?.id,\n});\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/hooks/useAutocomplete/"},(0,r.kt)("inlineCode",{parentName:"a"},"useAutocomplete"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-autocomplete/"},(0,r.kt)("strong",{parentName:"a"},"Material UI")," ",(0,r.kt)("inlineCode",{parentName:"a"},"<Autocomplete/>")," documentations","\u2192"))),(0,r.kt)("h2",{id:"adding-the-edit-page-to-the-app"},"Adding the Edit Page to the App"),(0,r.kt)("p",null,"Now that we have created the edit page, we can add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," file:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the created ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostEdit")," component.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"MuiInferencer")," component with the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostEdit")," component."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";\nimport { Refine } from "@refinedev/core";\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\nimport {\n    ErrorComponent,\n    ThemedLayoutV2,\n    RefineThemes,\n    notificationProvider,\n    RefineSnackbarProvider,\n} from "@refinedev/mui";\nimport routerBindings, {\n    NavigateToResource,\n    // highlight-next-line\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nimport { BlogPostList } from "pages/blog-posts/list";\n//highlight-next-line\nimport { BlogPostEdit } from "pages/blog-posts/edit";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={RefineThemes.Blue}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        resources={[\n                            {\n                                name: "blog_posts",\n                                list: "/blog-posts",\n                                show: "/blog-posts/show/:id",\n                                create: "/blog-posts/create",\n                                // highlight-next-line\n                                edit: "/blog-posts/edit/:id",\n                            },\n                        ]}\n                        // highlight-start\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                        // highlight-end\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <ThemedLayoutV2>\n                                        <Outlet />\n                                    </ThemedLayoutV2>\n                                }\n                            >\n                                <Route\n                                    index\n                                    element={\n                                        <NavigateToResource resource="blog_posts" />\n                                    }\n                                />\n\n                                <Route path="blog-posts">\n                                    <Route index element={<BlogPostList />} />\n                                    <Route\n                                        path="show/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    {/* highlight-start */}\n                                    <Route\n                                        path="edit/:id"\n                                        element={<BlogPostEdit />}\n                                    />\n                                    {/* highlight-end */}\n                                    <Route\n                                        path="create"\n                                        element={<MuiInferencer />}\n                                    />\n                                </Route>\n\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n\n                        {/* highlight-next-line */}\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\nexport default App;\n')),(0,r.kt)("p",null,"Now, we can see the edit page in the browser at ",(0,r.kt)("a",{href:"http://localhost:3000/blog-posts/edit/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/edit/123")),(0,r.kt)("br",null),(0,r.kt)(m,{mdxType:"Checklist"},(0,r.kt)(u,{id:"add-edit-page-mui",mdxType:"ChecklistItem"},"I have added the edit page to the app."),(0,r.kt)(u,{id:"add-edit-page-mui-2",mdxType:"ChecklistItem"},"I understood the edit page components and hooks."),(0,r.kt)(u,{id:"add-edit-page-mui-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}h.isMDXComponent=!0}}]);
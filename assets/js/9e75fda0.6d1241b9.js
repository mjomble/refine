"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[70980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),c=r,k=s["".concat(d,".").concat(c)]||s[c]||m[c]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"custom-layout",title:"Custom Layout",sidebar_label:"Custom Layout"},d=void 0,p={unversionedId:"advanced-tutorials/custom-layout",id:"advanced-tutorials/custom-layout",title:"Custom Layout",description:"refine supports any layout you want with no restrictions and also provides default layouts with its UI packages. You are free to use them or create your own with the help of refine's hooks and components. You can also use the swizzle command to customize the default layouts and adapt them to your needs.",source:"@site/docs/advanced-tutorials/custom-layout.md",sourceDirName:"advanced-tutorials",slug:"/advanced-tutorials/custom-layout",permalink:"/docs/advanced-tutorials/custom-layout",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/custom-layout.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1698675751,formattedLastUpdatedAt:"Oct 30, 2023",frontMatter:{id:"custom-layout",title:"Custom Layout",sidebar_label:"Custom Layout"},sidebar:"someSidebar",previous:{title:"Azure AD Login",permalink:"/docs/advanced-tutorials/auth/azure-ad"},next:{title:"Handling Filters",permalink:"/docs/advanced-tutorials/data-provider/handling-filters"}},u={},m=[{value:"Layout Elements",id:"layout-elements",level:2},{value:"<code>Layout</code>",id:"layout",level:3},{value:"<code>Sider</code>",id:"sider",level:3},{value:"<code>SiderRenderFunction</code>",id:"siderrenderfunction",level:3},{value:"<code>Header</code>",id:"header",level:3},{value:"<code>Title</code>",id:"title",level:3},{value:"<code>Footer</code>",id:"footer",level:3},{value:"<code>OffLayoutArea</code>",id:"offlayoutarea",level:3},{value:"Example",id:"example",level:2}],s=(c="CodeSandboxExample",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const k={toc:m};function f(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," supports any layout you want with no restrictions and also provides default layouts with its UI packages. You are free to use them or create your own with the help of ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s hooks and components. You can also use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli#swizzle"},(0,a.kt)("inlineCode",{parentName:"a"},"swizzle"))," command to customize the default layouts and adapt them to your needs."),(0,a.kt)("h2",{id:"layout-elements"},"Layout Elements"),(0,a.kt)("h3",{id:"layout"},(0,a.kt)("inlineCode",{parentName:"h3"},"Layout")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Layout>")," components are designed to wrap your pages and provide a dashboard-like layout. ",(0,a.kt)("inlineCode",{parentName:"p"},"<Layout>")," accepts rest of the layout elements in props."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Prop"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#sider"},(0,a.kt)("inlineCode",{parentName:"a"},"Sider"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"React.FC")),(0,a.kt)("td",{parentName:"tr",align:null},"Component to render menu aside")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#header"},(0,a.kt)("inlineCode",{parentName:"a"},"Header"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"React.FC")),(0,a.kt)("td",{parentName:"tr",align:null},"Component to render at the top of the layout")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#title"},(0,a.kt)("inlineCode",{parentName:"a"},"Title"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"React.FC")),(0,a.kt)("td",{parentName:"tr",align:null},"Component to render inside ",(0,a.kt)("inlineCode",{parentName:"td"},"<Sider>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#footer"},(0,a.kt)("inlineCode",{parentName:"a"},"Footer"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"React.FC")),(0,a.kt)("td",{parentName:"tr",align:null},"Component to render at the bottom of the layout")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#offlayoutarea"},(0,a.kt)("inlineCode",{parentName:"a"},"OffLayoutArea"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"React.FC")),(0,a.kt)("td",{parentName:"tr",align:null},"Component to render outside of the layout")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"children")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,a.kt)("td",{parentName:"tr",align:null},"Page content.")))),(0,a.kt)("h3",{id:"sider"},(0,a.kt)("inlineCode",{parentName:"h3"},"Sider")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Sider>")," components are designed to render menu items according to the resources you have defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," components. ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/ui/useMenu/"},(0,a.kt)("inlineCode",{parentName:"a"},"useMenu"))," hook is used under the hood to generate menu items."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Prop"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#title"},(0,a.kt)("inlineCode",{parentName:"a"},"Title"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"React.FC")),(0,a.kt)("td",{parentName:"tr",align:null},"Component to render at the top")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"render")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#siderrenderfunction"},(0,a.kt)("inlineCode",{parentName:"a"},"SiderRenderFunction"))),(0,a.kt)("td",{parentName:"tr",align:null},"Function to render the menu items and other elements inside the ",(0,a.kt)("inlineCode",{parentName:"td"},"<Sider>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"meta")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Record<string,any>")),(0,a.kt)("td",{parentName:"tr",align:null},"Meta data to use when creating routes for the menu items")))),(0,a.kt)("h3",{id:"siderrenderfunction"},(0,a.kt)("inlineCode",{parentName:"h3"},"SiderRenderFunction")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type SiderRenderFunction = (props: {\n    items: JSX.Element[];\n    logout: React.ReactNode;\n    dashboard: React.ReactNode;\n    collapsed: boolean;\n}) => React.ReactNode;\n")),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," prop to customize the render of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Sider>")," without needing to swizzle the whole component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Using Render Prop"',title:'"Using',Render:!0,'Prop"':!0},'import { Sider } from "@refinedev/antd";\n\nconst CustomSider = () => {\n    return (\n        <Sider\n            render={({ items, logout, collapsed }) => {\n                return (\n                    <>\n                        <div>My Custom Element</div>\n                        {items}\n                        {logout}\n                    </>\n                );\n            }}\n        />\n    );\n};\n')),(0,a.kt)("h3",{id:"header"},(0,a.kt)("inlineCode",{parentName:"h3"},"Header")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Header>")," components are designed to render a header at the top of the layout."),(0,a.kt)("h3",{id:"title"},(0,a.kt)("inlineCode",{parentName:"h3"},"Title")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Title>")," components are designed to render a title inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Sider>")," component. By default, it renders the ",(0,a.kt)("strong",{parentName:"p"},"refine")," logo with a link to the index page."),(0,a.kt)("h3",{id:"footer"},(0,a.kt)("inlineCode",{parentName:"h3"},"Footer")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Footer>")," components are designed to render a footer at the bottom of the layout."),(0,a.kt)("h3",{id:"offlayoutarea"},(0,a.kt)("inlineCode",{parentName:"h3"},"OffLayoutArea")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<OffLayoutArea>")," components are designed to render elements outside of the layout."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Here's an example of a custom layout, made with help of ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s hooks and components."),(0,a.kt)("p",null,"You can find more examples about custom layouts for different UI packages in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/examples"},"examples")," section."),(0,a.kt)(s,{path:"customization-top-menu-layout",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);
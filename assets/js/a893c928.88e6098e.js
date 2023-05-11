"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85848],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),h=n,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},23393:(e,t,r)=>{r.d(t,{ZP:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={toc:[]};function i(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use the following auth provider examples as a starting point for your own auth provider or you can use them as it is. Check the links below to see the details of each example."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/authentication/headless/"},"Basic")," - A basic auth provider example."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/auth-provider/keycloak"},"Keycloak")," - An auth provider example with Keycloak."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/auth-provider/auth0"},"Auth0")," - An auth provider example with Auth0."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/auth-provider/google-auth"},"Google Auth")," - An auth provider example with Google Auth."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/auth-provider/otpLogin"},"OTP Login")," - An auth provider example with OTP Login."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/appwrite"},"Appwrite")," - An auth provider example with Appwrite."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/supabase"},"Supabase")," - An auth provider example with Supabase."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/strapi-v4"},"Strapi")," - An auth provider example with Strapi."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/strapi-graphql"},"Strapi Graphql")," - An auth provider example with Strapi Graphql."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/nhost"},"Nhost")," - An auth provider example with Nhost."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/next-js/"},"Basic with Nextjs")," - A basic auth provider example with Nextjs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/remix/remix-headless"},"Basic with Remix")," - A basic auth provider example with Remix.")))}i.isMDXComponent=!0},82308:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),o=r(23393);const i={id:"auth-provider",title:"Auth Provider",sidebar_label:"Auth Provider"},l=void 0,s={unversionedId:"api-reference/core/providers/auth-provider",id:"api-reference/core/providers/auth-provider",title:"Auth Provider",description:"Auth provider is an object that contains methods to handle authentication and access control in your app by having refine consume them. These methods expect to return a promise, so they can be used with async methods.",source:"@site/docs/api-reference/core/providers/auth-provider.md",sourceDirName:"api-reference/core/providers",slug:"/api-reference/core/providers/auth-provider",permalink:"/docs/api-reference/core/providers/auth-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/providers/auth-provider.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683810694,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{id:"auth-provider",title:"Auth Provider",sidebar_label:"Auth Provider"},sidebar:"someSidebar",previous:{title:"Access Control Provider",permalink:"/docs/api-reference/core/providers/accessControl-provider"},next:{title:"Audit Log Provider",permalink:"/docs/api-reference/core/providers/audit-log-provider"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2},{value:"Methods",id:"methods",level:2},{value:"Required Methods",id:"required-methods",level:2},{value:"login <PropTag required />",id:"login-",level:3},{value:"check <PropTag required />",id:"check-",level:3},{value:"logout <PropTag required />",id:"logout-",level:3},{value:"onError <PropTag required />",id:"onerror-",level:3},{value:"Optional Methods",id:"optional-methods",level:2},{value:"getPermissions",id:"getpermissions",level:3},{value:"getIdentity",id:"getidentity",level:3},{value:"register",id:"register",level:3},{value:"forgotPassword",id:"forgotpassword",level:3},{value:"updatePassword",id:"updatepassword",level:3},{value:"Hooks and Components",id:"hooks-and-components",level:2},{value:"Legacy Auth Provider",id:"legacy-auth-provider",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"FAQ",id:"faq",level:2},{value:"How can I create an auth provider?",id:"how-can-i-create-an-auth-provider",level:3},{value:"How can I set authorization credentials?",id:"how-can-i-set-authorization-credentials",level:3},{value:"How can I implement refresh token mechanism?",id:"how-can-i-implement-refresh-token-mechanism",level:3},{value:"Example",id:"example",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=u("PropTag"),h=u("CodeSandboxExample"),m={toc:d};function k(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Auth provider is an object that contains methods to handle authentication and access control in your app by having ",(0,n.kt)("strong",{parentName:"p"},"refine")," consume them. These methods expect to return a promise, so they can be used with async methods."),(0,n.kt)("p",null,"You can use any third-party authentication service like ",(0,n.kt)("a",{parentName:"p",href:"#examples"},"Auth0, Okta, etc.")," or your own custom methods while creating an auth provider from scratch."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information on how you can create your own data providers, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-authprovider/create-authprovider"},"Create a Data Provider tutorial","\u2192"))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"To use ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," in ",(0,n.kt)("strong",{parentName:"p"},"refine"),", just pass it to the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine />")," component."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// highlight-next-line\nimport authProvider from "./auth-provider";\n\nconst App = () => {\n    return (\n        <Refine\n            // highlight-next-line\n            authProvider={authProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        >\n            {/* ... */}\n        </Refine>\n    );\n};\n')),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(o.ZP,{mdxType:"AuthProviderExamplesLinks"}),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("p",null,"An ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," includes the following methods:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // required methods\n    login: async (params: any) => ({}),\n    check: async (params: any) => ({}),\n    logout: async (params: any) => ({}),\n    onError: async (params: any) => ({}),\n    // optional methods\n    register: async (params: any) => ({}),\n    forgotPassword: async (params: any) => ({}),\n    updatePassword: async (params: any) => ({}),\n    getPermissions: async (params: any) => ({}),\n    getIdentity: async (params?: any) => ({}),\n};\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"login"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"logout"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"register"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"forgotPassword"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"updatePassword")," expect to return a resolved promise with the following type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n    success: boolean;\n    redirectTo?: string;\n    error?: Error;\n    [key: string]: unknown;\n};\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"success"),": A boolean indicating whether the operation was successful."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"redirectTo"),": A string indicating the URL to redirect to after the operation completes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"error"),": An object containing details about any errors encountered during the operation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"[key: string]"),": Any additional data you wish to include in the response, keyed by a string identifier.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"check")," expects to return a promise with the following type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"type CheckResponse = {\n    authenticated: boolean;\n    redirectTo?: string;\n    logout?: boolean;\n    error?: Error;\n};\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"authenticated"),": A boolean indicating whether the user is authenticated or not."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"redirectTo"),": A string indicating the URL to redirect to after the operation completes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"error"),": An object containing details about any errors encountered during the operation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"[key: string]"),": Any additional data you wish to include in the response, keyed by a string identifier.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"getPermission")," expects to return a promise with the following type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"type PermissionResponse = unknown;\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"getIdentity")," expects to return a promise with the following type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"type IdentityResponse = unknown;\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can return any type of data from the ",(0,n.kt)("inlineCode",{parentName:"p"},"getPermission")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"getIdentity")," methods.")),(0,n.kt)("hr",null),(0,n.kt)("admonition",{type:"info-tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"refine")," consumes these methods using the ",(0,n.kt)("a",{parentName:"p",href:"#hooks-and-components"},"authorization hooks"),", which are used for authorization operations like login, logout, catching ",(0,n.kt)("strong",{parentName:"p"},"HTTP")," errors, etc.")),(0,n.kt)("h2",{id:"required-methods"},"Required Methods"),(0,n.kt)("h3",{id:"login-"},"login ",(0,n.kt)(c,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"login")," method is used to authenticate users."),(0,n.kt)("p",null,"It can be called with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/authentication/useLogin/"},(0,n.kt)("inlineCode",{parentName:"a"},"useLogin"))," hook"),(0,n.kt)("h3",{id:"check-"},"check ",(0,n.kt)(c,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"check")," method is used to check if the user is authenticated."),(0,n.kt)("p",null,"It can be called with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/authentication/useIsAuthenticated/"},(0,n.kt)("inlineCode",{parentName:"a"},"useIsAuthenticated"))," hook"),(0,n.kt)("h3",{id:"logout-"},"logout ",(0,n.kt)(c,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"logout")," method is used to log out users."),(0,n.kt)("p",null,"It can be called with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/authentication/useLogout/"},(0,n.kt)("inlineCode",{parentName:"a"},"useLogout"))," hook"),(0,n.kt)("h3",{id:"onerror-"},"onError ",(0,n.kt)(c,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"onError")," method is called when you get an error response from the API. You can create your own business logic to handle the error such as refreshing the token, logging out the user, etc."),(0,n.kt)("p",null,"It can be called with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/authentication/useOnError/"},(0,n.kt)("inlineCode",{parentName:"a"},"useOnError"))," hook"),(0,n.kt)("h2",{id:"optional-methods"},"Optional Methods"),(0,n.kt)("h3",{id:"getpermissions"},"getPermissions"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"getPermissions")," method is used to get the user's permissions."),(0,n.kt)("p",null,"It can be called with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/authentication/usePermissions/"},(0,n.kt)("inlineCode",{parentName:"a"},"usePermissions"))," hook"),(0,n.kt)("h3",{id:"getidentity"},"getIdentity"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"getIdentity")," method is used to get the user's identity."),(0,n.kt)("p",null,"It can be called with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/authentication/useGetIdentity/"},(0,n.kt)("inlineCode",{parentName:"a"},"useGetIdentity"))," hook"),(0,n.kt)("h3",{id:"register"},"register"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"register")," method is used to register a new user."),(0,n.kt)("p",null,"It can be called with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/authentication/useRegister/"},(0,n.kt)("inlineCode",{parentName:"a"},"useRegister"))," hook"),(0,n.kt)("h3",{id:"forgotpassword"},"forgotPassword"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"forgotPassword")," method is used to send a password reset link to the user's email address."),(0,n.kt)("p",null,"It can be called with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/authentication/useForgotPassword/"},(0,n.kt)("inlineCode",{parentName:"a"},"useForgotPassword"))," hook"),(0,n.kt)("h3",{id:"updatepassword"},"updatePassword"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"updatePassword")," method is used to update the user's password."),(0,n.kt)("p",null,"It can be called with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/authentication/useUpdatePassword/"},(0,n.kt)("inlineCode",{parentName:"a"},"useUpdatePassword"))," hook"),(0,n.kt)("h2",{id:"hooks-and-components"},"Hooks and Components"),(0,n.kt)("p",null,"These hooks can be used with the ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," authentication and authorization operations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/authentication/useIsAuthenticated/"},"useIsAuthenticated")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/authentication/useOnError/"},"useOnError")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/authentication/useGetIdentity/"},"useGetIdentity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/authentication/useLogin/"},"useLogin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/authentication/useLogout/"},"useLogout")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/authentication/usePermissions/"},"usePermissions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api-reference/core/components/auth/authenticated/"},(0,n.kt)("inlineCode",{parentName:"a"},"<Authenticated />"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/authentication/useRegister/"},"useRegister")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/authentication/useForgotPassword/"},"useForgotPassword")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/authentication/useUpdatePassword/"},"useUpdatePassword"))),(0,n.kt)("h2",{id:"legacy-auth-provider"},"Legacy Auth Provider"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"refine"),"'s v4 release is backward compatible and supports legacy auth provider implementations until v5."),(0,n.kt)("p",null,"If you want to use a legacy auth provider, you can pass them to the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine />")," component using the ",(0,n.kt)("inlineCode",{parentName:"p"},"legacyAuthProvider")," prop."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/migration-guide/auth-provider/"},"Refer to the Migration Guide for more information. ","\u2192")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { LegacyAuthProvider, Refine } from "@refinedev/core";\n\nconst legacyAuthProvider: LegacyAuthProvider = {\n    /* --- */\n};\n\nconst App = () => {\n    return (\n        <Refine\n            // ---\n            legacyAuthProvider={legacyAuthProvider}\n        >\n            {/* --- */}\n        </Refine>\n    );\n};\n')),(0,n.kt)("h2",{id:"api-reference"},"API Reference"),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Success condition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"login ",(0,n.kt)("div",{className:" required"},"Required")),(0,n.kt)("td",{parentName:"tr",align:null},"Logs user in"),(0,n.kt)("td",{parentName:"tr",align:null},"Auth confirms login")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"logout ",(0,n.kt)("div",{className:" required"},"Required")),(0,n.kt)("td",{parentName:"tr",align:null},"Logs user out"),(0,n.kt)("td",{parentName:"tr",align:null},"Auth confirms logout")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"check ",(0,n.kt)("div",{className:" required"},"Required")),(0,n.kt)("td",{parentName:"tr",align:null},"Checks credentials on each route changes"),(0,n.kt)("td",{parentName:"tr",align:null},"Authentication still persist")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onError ",(0,n.kt)("div",{className:" required"},"Required")),(0,n.kt)("td",{parentName:"tr",align:null},"Checks if a dataProvider returns an error"),(0,n.kt)("td",{parentName:"tr",align:null},"Data provider doesn't return an error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"getPermissions"),(0,n.kt)("td",{parentName:"tr",align:null},"Can be use to get user credentials"),(0,n.kt)("td",{parentName:"tr",align:null},"Authorization roles accepted")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"getIdentity"),(0,n.kt)("td",{parentName:"tr",align:null},"Can be use to get user identity"),(0,n.kt)("td",{parentName:"tr",align:null},"User identity available to return")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"register"),(0,n.kt)("td",{parentName:"tr",align:null},"Register user"),(0,n.kt)("td",{parentName:"tr",align:null},"Auth confirms register")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"forgotPassword"),(0,n.kt)("td",{parentName:"tr",align:null},"Can be use to get password reset"),(0,n.kt)("td",{parentName:"tr",align:null},"Auth confirms forgot password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"updatePassword"),(0,n.kt)("td",{parentName:"tr",align:null},"Can be use to get update password"),(0,n.kt)("td",{parentName:"tr",align:null},"Auth confirms update password")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"how-can-i-create-an-auth-provider"},"How can I create an auth provider?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-authprovider/create-authprovider/"},'Refer to the "Create Auth Provider From Scratch" section in the tutorial for more information ',"\u2192")),(0,n.kt)("h3",{id:"how-can-i-set-authorization-credentials"},"How can I set authorization credentials?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-authprovider/create-authprovider/#setting-authorization-credentials"},'Refer to the "Setting Authorization Credentials" section in the tutorial for more information ',"\u2192")),(0,n.kt)("h3",{id:"how-can-i-implement-refresh-token-mechanism"},"How can I implement refresh token mechanism?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-authprovider/create-authprovider/#implementing-refresh-token-mechanism"},'Refer to the "Implementing Refresh Token Mechanism" section in the tutorial for more information ',"\u2192")),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)(h,{path:"auth-antd",mdxType:"CodeSandboxExample"}))}k.isMDXComponent=!0}}]);
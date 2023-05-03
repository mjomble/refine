"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78480],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const a={id:"useLogin",title:"useLogin",siderbar_label:"useLogin",description:"useLogin data hook from refine is a modified version of react-query's useMutation for authentication.",source:"/packages/core/src/hooks/auth/useLogin/index.ts"},i=void 0,s={unversionedId:"api-reference/core/hooks/auth/useLogin",id:"api-reference/core/hooks/auth/useLogin",title:"useLogin",description:"useLogin data hook from refine is a modified version of react-query's useMutation for authentication.",source:"@site/docs/api-reference/core/hooks/auth/useLogin.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useLogin",permalink:"/docs/api-reference/core/hooks/auth/useLogin",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/auth/useLogin.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1683118746,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{id:"useLogin",title:"useLogin",siderbar_label:"useLogin",description:"useLogin data hook from refine is a modified version of react-query's useMutation for authentication.",source:"/packages/core/src/hooks/auth/useLogin/index.ts"},sidebar:"someSidebar",previous:{title:"useGetIdentity",permalink:"/docs/api-reference/core/hooks/auth/useGetIdentity"},next:{title:"useLogout",permalink:"/docs/api-reference/core/hooks/auth/useLogout"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Redirection after login",id:"redirection-after-login",level:2},{value:"Error handling",id:"error-handling",level:2}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useLogin")," calls ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," method from ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,o.kt)("p",null,"It returns the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation")," which includes many properties, some of which being isSuccess and isError."),(0,o.kt)("p",null,"Data that is resolved from ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," will be returned as the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n    success: boolean;\n    redirectTo?: string;\n    error?: Error;\n    [key: string]: unknown;\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"success"),": A boolean indicating whether the operation was successful. If ",(0,o.kt)("inlineCode",{parentName:"li"},"success")," is false, a notification will be shown.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," is provided, the notification will contain the error message and name. Otherwise, a generic error message will be shown with the following values ",(0,o.kt)("inlineCode",{parentName:"li"},'{ name: "Login Error", message: "Invalid credentials" }'),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redirectTo"),": If has a value, the app will be redirected to the given URL."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"error"),": If has a value, a notification will be shown with the error message and name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[key: string]"),": Any additional data you wish to include in the response, keyed by a string identifier.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Normally refine provides a default login page. If you prefer to use this default login page, there is no need to handle login flow manually.",(0,o.kt)("br",{parentName:"p"}),"\n","If we want to build a custom login page instead of the default one that comes with ",(0,o.kt)("strong",{parentName:"p"},"refine"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"useLogin")," can be used like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customLoginPage"',title:'"pages/customLoginPage"'},'import { useLogin } from "@refinedev/core";\nimport { Form } from "antd";\n\ntype LoginVariables = {\n    username: string;\n    password: string;\n};\n\nexport const LoginPage = () => {\n    const { mutate: login } = useLogin<LoginVariables>();\n\n    const onSubmit = (values: LoginVariables) => {\n        login(values);\n    };\n\n    return <Form onFinish={onSubmit}>// rest of the login form</Form>;\n};\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,o.kt)("inlineCode",{parentName:"p"},"useLogin")," can accept any kind of object for values since ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," method from ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.",(0,o.kt)("br",{parentName:"p"}),"\n","A type parameter for the values can be provided to ",(0,o.kt)("inlineCode",{parentName:"p"},"useLogin"),"."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: login } = useLogin<{ username: string; password: string }>();\n"))),(0,o.kt)("h2",{id:"redirection-after-login"},"Redirection after login"),(0,o.kt)("p",null,"A custom URL can be given to mutate the function from the ",(0,o.kt)("inlineCode",{parentName:"p"},"useLogin")," hook if you want to redirect yourself to a certain URL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLogin } from "@refinedev/core";\n\nconst { mutate: login } = useLogin();\n\nlogin({ redirectPath: "/custom-url" });\n')),(0,o.kt)("p",null,"Then, you can handle this URL in your ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // ---\n    login: async ({ redirectPath }) => {\n        // ---\n        return {\n            success: true,\n            redirectTo: redirectPath,\n        };\n    },\n};\n')),(0,o.kt)("h2",{id:"error-handling"},"Error handling"),(0,o.kt)("p",null,"Since the methods of ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider")," always return a resolved promise, you can handle errors by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"success")," value in the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLogin } from "@refinedev/core";\n\nconst { mutate: login } = useLogin();\n\nlogin(\n    {\n        email: "refine@example.com",\n        password: "refine",\n    },\n    {\n        onSuccess: (data) => {\n            if (!data.success) {\n                // handle error\n            }\n\n            // handle success\n        },\n    },\n);\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"onError")," callback of the ",(0,o.kt)("inlineCode",{parentName:"p"},"useLogin")," hook will not be called if ",(0,o.kt)("inlineCode",{parentName:"p"},"success")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," because the callback is triggered only when the promise is rejected. However, the methods of ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider")," always return a resolved promise.")))}p.isMDXComponent=!0}}]);
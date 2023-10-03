"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53293],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(d,".").concat(m)]||c[m]||l[m]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},99384:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"useUpdatePassword",title:"useUpdatePassword",siderbar_label:"useUpdatePassword",description:"useUpdatePassword data hook from refine is a modified version of react-query's useMutation for registration.",source:"/packages/core/src/hooks/auth/useUpdatePassword/index.ts"},d=void 0,p={unversionedId:"api-reference/core/hooks/authentication/useUpdatePassword",id:"api-reference/core/hooks/authentication/useUpdatePassword",title:"useUpdatePassword",description:"useUpdatePassword data hook from refine is a modified version of react-query's useMutation for registration.",source:"@site/docs/api-reference/core/hooks/authentication/useUpdatePassword.md",sourceDirName:"api-reference/core/hooks/authentication",slug:"/api-reference/core/hooks/authentication/useUpdatePassword",permalink:"/docs/api-reference/core/hooks/authentication/useUpdatePassword",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/authentication/useUpdatePassword.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1696323168,formattedLastUpdatedAt:"Oct 3, 2023",frontMatter:{id:"useUpdatePassword",title:"useUpdatePassword",siderbar_label:"useUpdatePassword",description:"useUpdatePassword data hook from refine is a modified version of react-query's useMutation for registration.",source:"/packages/core/src/hooks/auth/useUpdatePassword/index.ts"},sidebar:"someSidebar",previous:{title:"useForgotPassword",permalink:"/docs/api-reference/core/hooks/authentication/useForgotPassword"},next:{title:"useLog",permalink:"/docs/api-reference/core/hooks/audit-log/useLog"}},u={},l=[{value:"Usage",id:"usage",level:2},{value:"Redirection after updatePassword",id:"redirection-after-updatepassword",level:2},{value:"Error handling",id:"error-handling",level:2}],c={toc:l};function m(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},c,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useUpdatePassword")," calls ",(0,n.kt)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,n.kt)("p",null,"It returns the result of ",(0,n.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,n.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation"),"."),(0,n.kt)("p",null,"Data that is resolved from ",(0,n.kt)("inlineCode",{parentName:"p"},"updatePassword")," will be returned as the ",(0,n.kt)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n    success: boolean;\n    redirectTo?: string;\n    error?: Error;\n    [key: string]: unknown;\n};\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"success"),": A boolean indicating whether the operation was successful. If ",(0,n.kt)("inlineCode",{parentName:"li"},"success")," is false, a notification will be shown.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"When ",(0,n.kt)("inlineCode",{parentName:"li"},"error")," is provided, the notification will contain the error message and name. Otherwise, a generic error message will be shown with the following values: ",(0,n.kt)("inlineCode",{parentName:"li"},'{ name: "Update Password Error", message: "Error while resetting password" }'),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"redirectTo"),": If has a value, the app will be redirected to the given URL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"error"),": If has a value, a notification will be shown with the error message and name."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"[key: string]"),": Any additional data you wish to include in the response, keyed by a string identifier.")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"refine")," provides a default 'update password' page, page which handles the update password flow manually.\nIf you want to use a custom 'update password' however, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"useUpdatePassword")," hook like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customupdatePasswordPage"',title:'"pages/customupdatePasswordPage"'},'import { useUpdatePassword } from "@refinedev/core";\n\ntype updatePasswordVariables = {\n    password: string;\n};\n\nexport const UpdatePasswordPage = () => {\n    const { mutate: updatePassword } =\n        useUpdatePassword<updatePasswordVariables>();\n\n    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n        e.preventDefault();\n\n        const values = {\n            password: e.currentTarget.password.value,\n        };\n\n        updatePassword(values);\n    };\n\n    return (\n        <form onSubmit={onSubmit}>\n            <label>Password</label>\n            <input name="password" value="refine" />\n            <button type="submit">Submit</button>\n        </form>\n    );\n};\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,n.kt)("inlineCode",{parentName:"p"},"useUpdatePassword")," can accept any kind of object for values since the ",(0,n.kt)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.\nA type parameter for the values can be provided to ",(0,n.kt)("inlineCode",{parentName:"p"},"useUpdatePassword"),"."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: updatePassword } = useUpdatePassword<{ newPassword: string }>();\n"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"useUpdatePassword")," gives you query strings for the ",(0,n.kt)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider"),". If you have logic that sends a password regeneration email to the email address while resetting the password and proceeds through the access token, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"queryStrings")," variable's ",(0,n.kt)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider"),". For example, if your regeneration link is ",(0,n.kt)("inlineCode",{parentName:"p"},"YOUR_DOMAIN/update-password?token=123"),", you can access the token from the parameters of the URL."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // ---\n    updatePassword: (params) => {\n        // you can access query strings from params.queryStrings\n        console.log(params.token);\n        if (params.token === "123") {\n            // your logic to update the password\n        }\n        // ---\n    },\n};\n'))),(0,n.kt)("h2",{id:"redirection-after-updatepassword"},"Redirection after updatePassword"),(0,n.kt)("p",null,"A custom URL can be given to mutate the function from the ",(0,n.kt)("inlineCode",{parentName:"p"},"useUpdatePassword")," hook if you want to redirect yourself to a certain URL:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdatePassword } from "@refinedev/core";\n\nconst { mutate: updatePassword } = useUpdatePassword();\n\nupdatePassword({ redirectPath: "/custom-url" });\n')),(0,n.kt)("p",null,"Then, you can handle this URL in your ",(0,n.kt)("inlineCode",{parentName:"p"},"updatePassword")," method of the ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // ---\n    updatePassword: async ({ redirectPath }) => {\n        // ---\n        return {\n            success: true,\n            redirectTo: redirectPath,\n        };\n    },\n};\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If the promise returned from ",(0,n.kt)("inlineCode",{parentName:"p"},"updatePassword")," is resolved with nothing, app won't be redirected to any route by default.")),(0,n.kt)("h2",{id:"error-handling"},"Error handling"),(0,n.kt)("p",null,"Since the methods of ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," always return a resolved promise, you can handle errors by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"success")," value in the response:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdatePassword } from "@refinedev/core";\n\nconst { mutate: updatePassword } = useUpdatePassword();\n\nupdatePassword(\n    {\n        newPassword: "refine",\n    },\n    {\n        onSuccess: (data) => {\n            if (!data.success) {\n                // handle error\n            }\n\n            // handle success\n        },\n    },\n);\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"onError")," callback of the ",(0,n.kt)("inlineCode",{parentName:"p"},"useUpdatePassword")," hook will not be called if ",(0,n.kt)("inlineCode",{parentName:"p"},"success")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),". This is because the ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," methods always return a resolved promise, and the callback is only triggered when the promise is rejected.")))}m.isMDXComponent=!0}}]);
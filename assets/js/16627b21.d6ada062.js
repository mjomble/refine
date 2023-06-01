"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58361],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(m,c(c({ref:n},l),{},{components:t})):r.createElement(m,c({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},17460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={id:"can-access",title:"<CanAccess>",siderbar_label:"<CanAccess>",source:"packages/core/src/components/canAccess/index.tsx"},c=void 0,s={unversionedId:"api-reference/core/components/accessControl/can-access",id:"api-reference/core/components/accessControl/can-access",title:"<CanAccess>",description:"` is the component form of useCan`.",source:"@site/docs/api-reference/core/components/accessControl/canAccess.md",sourceDirName:"api-reference/core/components/accessControl",slug:"/api-reference/core/components/accessControl/can-access",permalink:"/docs/api-reference/core/components/accessControl/can-access",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/components/accessControl/canAccess.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1685626118,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{id:"can-access",title:"<CanAccess>",siderbar_label:"<CanAccess>",source:"packages/core/src/components/canAccess/index.tsx"},sidebar:"someSidebar",previous:{title:"<Authenticated>",permalink:"/docs/api-reference/core/components/auth/authenticated"},next:{title:"Interface References",permalink:"/docs/api-reference/core/interfaceReferences"}},i={},p=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Usage with props",id:"usage-with-props",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>fallback</code>",id:"fallback",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],l=(u="PropsTable",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const d={toc:p};function f(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<CanAccess>")," is the component form of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/"},(0,a.kt)("inlineCode",{parentName:"a"},"useCan")),"."),(0,a.kt)("p",null,"It internally uses ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/"},(0,a.kt)("inlineCode",{parentName:"a"},"useCan")),"'s return values to provide its functionality."),(0,a.kt)("p",null,"Passes the given properties to the ",(0,a.kt)("inlineCode",{parentName:"p"},"can")," method from your ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider/"},"access control provider"),". After, if it returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"true"),", it renders the children."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"false"),", it renders ",(0,a.kt)("a",{parentName:"li",href:"#fallback"},(0,a.kt)("inlineCode",{parentName:"a"},"fallback"))," prop if provided. Otherwise, it renders ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),".")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider/"},"Refer to Access Control Provider for more information. ","\u2192")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"CanAccess")," component will infer the current ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," based on your route automatically. ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," will also be inferred if the current route includes one."),(0,a.kt)("p",null,"So if you are at ",(0,a.kt)("inlineCode",{parentName:"p"},"/posts")," route, ",(0,a.kt)("inlineCode",{parentName:"p"},"CanAccess")," will check authorization for ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," resource and ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," action."),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"/posts/show/:id")," route, action will be ",(0,a.kt)("inlineCode",{parentName:"p"},"show"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CanAccess } from "@refinedev/core";\n\nconst MyComponent = () => (\n    <CanAccess fallback={<CustomFallback />}>\n        <YourComponent />\n    </CanAccess>\n);\n')),(0,a.kt)("h3",{id:"usage-with-props"},"Usage with props"),(0,a.kt)("p",null,"You may have a case like in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/posts/show/:id")," page, where inferred resource is ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," and action is ",(0,a.kt)("inlineCode",{parentName:"p"},"show"),", but you want to authorize a different resource eg. ",(0,a.kt)("inlineCode",{parentName:"p"},"category"),"."),(0,a.kt)("p",null,"In this case, you can explicitly pass props to ",(0,a.kt)("inlineCode",{parentName:"p"},"CanAccess")," component for authorizing a different resource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CanAccess } from "@refinedev/core";\n\nexport const MyComponent = () => {\n    return (\n        <Buttons>\n            <CreateButton>Create</CreateButton>\n            <CanAccess resource="posts" action="delete">\n                <DeleteButton>Delete</DeleteButton>\n            </CanAccess>\n        </Buttons>\n    );\n};\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("p",null,"It's also accepts all the properties of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/#properties"},(0,a.kt)("inlineCode",{parentName:"a"},"useCan")),"."),(0,a.kt)("h3",{id:"fallback"},(0,a.kt)("inlineCode",{parentName:"h3"},"fallback")),(0,a.kt)("p",null,"Component to render if ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/"},(0,a.kt)("inlineCode",{parentName:"a"},"useCan"))," returns false. If ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),", it renders ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<CanAccess fallback={<div>You cannot access this section</div>}>\n    <YourComponent />\n</CanAccess>\n")),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)(l,{module:"@refinedev/core/CanAccess",mdxType:"PropsTable"}))}f.isMDXComponent=!0}}]);
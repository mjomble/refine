"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=i,g=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},62874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={},o=void 0,s={unversionedId:"api-reference/core/hooks/data/useInfiniteList/basic-usage-live-preview",id:"api-reference/core/hooks/data/useInfiniteList/basic-usage-live-preview",title:"basic-usage-live-preview",description:"",source:"@site/docs/api-reference/core/hooks/data/useInfiniteList/basic-usage-live-preview.md",sourceDirName:"api-reference/core/hooks/data/useInfiniteList",slug:"/api-reference/core/hooks/data/useInfiniteList/basic-usage-live-preview",permalink:"/docs/api-reference/core/hooks/data/useInfiniteList/basic-usage-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/data/useInfiniteList/basic-usage-live-preview.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1686745366,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{}},c={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/categories previewHeight=300px",live:!0,url:"http://localhost:3000/categories",previewHeight:"300px"},'import React from "react";\nimport { Refine } from "@refinedev/core";\n\nsetInitialRoutes(["/posts"]);\n// visible-block-start\nimport React from "react";\nimport { useInfiniteList } from "@refinedev/core";\n\nconst PostList = () => {\n    const {\n        data,\n        isError,\n        isLoading,\n        hasNextPage,\n        fetchNextPage,\n        isFetchingNextPage,\n    } = useInfiniteList({\n        resource: "categories",\n        pagination: {\n            pageSize: 4,\n        },\n    });\n\n    if (isLoading) {\n        return <p>Loading</p>;\n    }\n    if (isError) {\n        return <p>Something went wrong</p>;\n    }\n\n    const allPages = [].concat(...(data?.pages ?? []).map((page) => page.data));\n\n    return (\n        <div>\n            <ul>\n                {allPages.map(({ id, title }) => (\n                    <li key={id}>\n                        {id}.{title}\n                    </li>\n                ))}\n            </ul>\n            {hasNextPage && (\n                <button\n                    onClick={() => fetchNextPage()}\n                    disabled={isFetchingNextPage}\n                >\n                    {isFetchingNextPage ? "Loading more..." : "Load More"}\n                </button>\n            )}\n        </div>\n    );\n};\n// visible-block-end\n\nsetRefineProps({\n    // Layout: (props: LayoutProps) => <Layout {...props} />,\n    resources: [\n        {\n            name: "posts",\n            list: PostList,\n        },\n    ],\n});\n\nrender(<RefineHeadlessDemo />);\n')))}u.isMDXComponent=!0}}]);
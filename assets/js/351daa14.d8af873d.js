"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,g=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>m});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={title:"Let's Build an App to Manage Your Hackathons with Refine",description:"We'll be building a demo app to manage hackathons with refine.",slug:"manage-hackathons-with-refine",authors:"muharrem",tags:["refine","supabase","react","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/manage-hackathons-with-refine",source:"@site/blog/2021-10-4-manage-hackatons.md",title:"Let's Build an App to Manage Your Hackathons with Refine",description:"We'll be building a demo app to manage hackathons with refine.",date:"2021-10-04T00:00:00.000Z",formattedDate:"October 4, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"supabase",permalink:"/blog/tags/supabase"},{label:"react",permalink:"/blog/tags/react"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:3.405,hasTruncateMarker:!0,authors:[{name:"Muharrem Kocadere",title:"Frontend Developer",url:"https://github.com/mhrrmk",imageURL:"https://github.com/mhrrmk.png",key:"muharrem"}],frontMatter:{title:"Let's Build an App to Manage Your Hackathons with Refine",description:"We'll be building a demo app to manage hackathons with refine.",slug:"manage-hackathons-with-refine",authors:"muharrem",tags:["refine","supabase","react","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Create a Feedback Admin panel in 15 Minutes with Refine and Strapi",permalink:"/blog/create-a-feedback-admin-panel-with-refine-and-strapi"},nextItem:{title:"Simple Web Application Example with Refine",permalink:"/blog/simple-web-application-with-refine"},relatedPosts:[{title:"How to use React Fragments?",description:"We'll cover what React Fragments are, differences between React Fragments and Div elements.",permalink:"/blog/how-react-fragments-is-works",formattedDate:"October 2, 2022",authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],readingTime:5.475,date:"2022-10-02T00:00:00.000Z"},{title:"How to set up a WebSocket connection with Node.js and React.js?",description:"Understanding Real-time communication with React and WebSocket",permalink:"/blog/react-websocket-tutorial-nodejs",formattedDate:"August 16, 2023",authors:[{name:"Frank Joseph",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"frank_joseph"}],readingTime:12.225,date:"2023-08-16T00:00:00.000Z"},{title:"React memo guide with examples",description:"Improve the app performance with React.memo()",permalink:"/blog/react-memo-guide",formattedDate:"September 13, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.915,date:"2022-09-13T00:00:00.000Z"}],authorPosts:[]},s={authorsImageUrls:[void 0]},m=[],u={toc:m};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,r.kt)("strong",{parentName:"p"},"refine"),". Although we plan to update it with the latest version of ",(0,r.kt)("strong",{parentName:"p"},"refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,r.kt)("p",{parentName:"admonition"},"You should know that ",(0,r.kt)("strong",{parentName:"p"},"refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),".")),(0,r.kt)("p",null,"We'll be building a demo app to manage hackathons with ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/"},"refine"),". We'll be able to create new hackathons, new project entries for a hackathon and criterias for a hackathon."))}f.isMDXComponent=!0}}]);
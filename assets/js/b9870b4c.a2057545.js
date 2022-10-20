"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56894],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return a?i.createElement(b,o(o({ref:t},p),{},{components:a})):i.createElement(b,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},28951:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));a(4227),a(64396),a(86277),a(11795),a(6912),a(53449),a(85495),a(29321),a(63922),a(16903),a(29131);const r={title:"Create E-mail Subscription Panel with Refine and Strapi",description:"We will make a web application that allows you to quickly create subscribers and send emails to your subscribers in a simple way. We\u2019ll use refine to develop the frontend easily and strapi for backend solutions.",slug:"e-mail-subscription-panel-with-refine",authors:"melih",tags:["refine","strapi","react","tutorial"],image:"/img/placeholder.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/e-mail-subscription-panel-with-refine",source:"@site/blog/2021-10-25-mail-subscription-with-refine.md",title:"Create E-mail Subscription Panel with Refine and Strapi",description:"We will make a web application that allows you to quickly create subscribers and send emails to your subscribers in a simple way. We\u2019ll use refine to develop the frontend easily and strapi for backend solutions.",date:"2021-10-25T00:00:00.000Z",formattedDate:"October 25, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"strapi",permalink:"/blog/tags/strapi"},{label:"react",permalink:"/blog/tags/react"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:7.925,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Create E-mail Subscription Panel with Refine and Strapi",description:"We will make a web application that allows you to quickly create subscribers and send emails to your subscribers in a simple way. We\u2019ll use refine to develop the frontend easily and strapi for backend solutions.",slug:"e-mail-subscription-panel-with-refine",authors:"melih",tags:["refine","strapi","react","tutorial"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase"},nextItem:{title:"Migrating a React-Admin Application to Refine",permalink:"/blog/migrating-a-react-admin-application-to-refine"},relatedPosts:[{title:"React useMemo hook guide with examples",permalink:"/blog/react-usememo",formattedDate:"September 16, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.845,date:"2022-09-16T00:00:00.000Z"},{title:"Create Full Featured Admin Panel with React and Ant Design",permalink:"/blog/refine-react-ant-design-admin-panel-framework",formattedDate:"February 21, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.8,date:"2022-02-21T00:00:00.000Z"},{title:"Implementing Dark Mode In Ant Design Using gulp",permalink:"/blog/how-to-add-darkmode-in-ant-design",formattedDate:"February 12, 2022",authors:[{name:"Pierre van Male",title:"Junior Fullstack Developer",url:"https://github.com/vmalep",imageURL:"https://github.com/vmalep.png",key:"vmalep"}],readingTime:4.885,date:"2022-02-12T00:00:00.000Z"}],authorPosts:[{title:"How to Create Full Stack React/Next.JS Web App in Few Hour",permalink:"/blog/create-full-stack-app-with-refine",formattedDate:"April 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:8.485,date:"2022-04-29T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.615,date:"2022-03-29T00:00:00.000Z"},{title:"We are going back to 1995! The perfect harmony of Modern stack and Win95",permalink:"/blog/awesome-react-windows95-ui-with-refine",formattedDate:"March 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:14.755,date:"2022-03-22T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},c=[],p={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We will make a web application that allows you to quickly create subscribers and send emails to your subscribers in a simple way. We\u2019ll use refine to develop the frontend easily and strapi for backend solutions."))}m.isMDXComponent=!0},4227:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/auth-0d33512948dc9a5211fb9bce0f7115d5.png"},64396:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-ec03174df57f808297fb6e4aea1cf72d.gif"},86277:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/dummy_data-242a2a18a59732a07301365d2f7b82ca.png"},11795:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/login-cdd53317fe594b7607c0bad670da080f.gif"},6912:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/messages-6ea926f611e663a199f0a1cff0999eca.png"},53449:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/overview-370871e2989a1558130d702a97af6432.png"},85495:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/refine_welcome-8f8a3f310a036343d0e3544cf69bd154.png"},29321:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/send-05d7b0f478fbb5899eb51d7b90bb28d2.gif"},63922:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/signin-443c944fcf58c292f0d6a9c1df0f209f.png"},16903:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/strapi-203c6f2b13cbc1e04ddad7ab475113c7.png"},29131:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/subscribers-3f4d62a2780a968f7b4a4d864ad4c901.png"}}]);
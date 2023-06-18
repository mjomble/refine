"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={title:"Adding Realtime Collaboration",description:"We'll implement realtime broadcast and subscription of pixels updates in Pixels app.",slug:"refine-pixels-4",authors:"abdullah_numan",tags:["refine-week","refine","supabase"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-11-refine-pixels-4%2Fsocial.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/refine-pixels-4",source:"@site/blog/2023-02-17-refine-pixels-4.md",title:"Adding Realtime Collaboration",description:"We'll implement realtime broadcast and subscription of pixels updates in Pixels app.",date:"2023-02-17T00:00:00.000Z",formattedDate:"February 17, 2023",tags:[{label:"refine-week",permalink:"/blog/tags/refine-week"},{label:"refine",permalink:"/blog/tags/refine"},{label:"supabase",permalink:"/blog/tags/supabase"}],readingTime:9.36,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Adding Realtime Collaboration",description:"We'll implement realtime broadcast and subscription of pixels updates in Pixels app.",slug:"refine-pixels-4",authors:"abdullah_numan",tags:["refine-week","refine","supabase"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-11-refine-pixels-4%2Fsocial.png",hide_table_of_contents:!1},prevItem:{title:"Creating an Admin Dashboard with refine",permalink:"/blog/refine-pixels-5"},nextItem:{title:"Adding CRUD Actions and Authentication",permalink:"/blog/refine-pixels-3"},relatedPosts:[{title:"Creating a React search bar and content filtering components",description:"Article about how to create Search bar and filter component in React",permalink:"/blog/react-search-bar-and-filtering",formattedDate:"August 26, 2022",authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],readingTime:13.875,date:"2022-08-26T00:00:00.000Z"},{title:"OTP Authentication with Supabase and Twilio in React",description:"We'll implement OTP(SMS) authorization using Twilio and Supabase in React app.",permalink:"/blog/supabase-twilio-otp-authentication-in-react",formattedDate:"September 22, 2022",authors:[{name:"Vijit Ail",title:"Software Engineer",url:"https://github.com/vijitail",imageURL:"https://github.com/vijitail.png",key:"vijit_ail"}],readingTime:12.855,date:"2022-09-22T00:00:00.000Z"},{title:"refine.new - Introducing the Fastest Way to Create refine Apps",description:"Discover how refine.new and the refine framework are transforming the way developers create front-end applications in the React ecosystem",permalink:"/blog/what-is-refine-new",formattedDate:"May 10, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:3.98,date:"2023-05-10T00:00:00.000Z"}],authorPosts:[{title:"Implementing Role Based Access Control",description:"We'll implement Role Based Access Control (RBAC)",permalink:"/blog/refine-pixels-6",formattedDate:"February 19, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:12.06,date:"2023-02-19T00:00:00.000Z"},{title:"Adding PDF Renderer",description:"We are going to add PDF renderer to our PDF Invoice Generator app that we have been building last few days. This is also where we summarize our accomplishments and wrap up the series.",permalink:"/blog/refine-react-invoice-generator-5",formattedDate:"April 14, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.835,date:"2023-04-14T00:00:00.000Z"},{title:"A Definitive guide on JavaScript every() Method",description:"In this post, we expound on with examples of what the JavaScript every method is, how it works.",permalink:"/blog/javascript-every-method",formattedDate:"November 2, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.705,date:"2022-11-02T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},c=[{value:"refineWeek series",id:"refineweek-series",level:3},{value:"Overview",id:"overview",level:2},{value:"Setting Up Supabase Realtime",id:"setting-up-supabase-realtime",level:2},{value:"<code>&lt;Refine /&gt;</code>&#39;s <code>liveProvider</code> Prop",id:"refine-s-liveprovider-prop",level:2},{value:"refine&#39;s Supabase <code>liveProvider</code> Object",id:"refines-supabase-liveprovider-object",level:3},{value:"Broadcasting",id:"broadcasting",level:2},{value:"refine <code>usePublish()</code> Hook",id:"refine-usepublish-hook",level:3},{value:"Subscription",id:"subscription",level:2},{value:"refine <code>useResourceSubscription()</code> Hook",id:"refine-useresourcesubscription-hook",level:3},{value:"Summary",id:"summary",level:2}],u={toc:c};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,a.kt)("strong",{parentName:"p"},"refine"),". Although we plan to update it with the latest version of ",(0,a.kt)("strong",{parentName:"p"},"refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,a.kt)("p",{parentName:"admonition"},"You should know that ",(0,a.kt)("strong",{parentName:"p"},"refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),"."),(0,a.kt)("p",{parentName:"admonition"},"Just be aware that the source code examples in this post have been updated to version 4.x.x.")),(0,a.kt)("p",null,"In this post, we implement realtime broadcast and subscription of ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," updates in our ",(0,a.kt)("strong",{parentName:"p"},"refine")," based ",(0,a.kt)("strong",{parentName:"p"},"Pixels")," app. We do this with the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/live-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"liveProvider"))," prop on ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," and ",(0,a.kt)("a",{parentName:"p",href:"https://supabase.com/docs/guides/realtime"},(0,a.kt)("strong",{parentName:"a"},"Supabase"),"'s ",(0,a.kt)("strong",{parentName:"a"},"Realtime servers")),". Applying a PubSub feature allows us to receive instant updates in one part of our app for database changes triggered from another part or by a different client."),(0,a.kt)("p",null,"Here's a quick rundown of the features we'll work on:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Allow multiple users to draw pixels on a canvas."),(0,a.kt)("li",{parentName:"ol"},"All contributors can see realtime updates on the canvas.")),(0,a.kt)("p",null,"This is Day 4 in the series titled ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/week-of-refine/"},(0,a.kt)("strong",{parentName:"a"},"refineWeek")),". ",(0,a.kt)("strong",{parentName:"p"},"refineWeek")," is a quickfire tutorial guide that aims to help developers learn the ins-and-outs of ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s powerful capabilities and get going with ",(0,a.kt)("strong",{parentName:"p"},"refine")," within a week."),(0,a.kt)("h3",{id:"refineweek-series"},"refineWeek series"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Day 1 - ",(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-1/"},"Pilot & refine architecture")),(0,a.kt)("li",{parentName:"ul"},"Day 2 - ",(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-2/"},"Setting Up the Client App")),(0,a.kt)("li",{parentName:"ul"},"Day 3 - ",(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-3/"},"Adding CRUD Actions and Authentication"))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"On Day Three, we implemented CRUD operations using ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," methods and the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," prop, which leveraged RESTful routes in the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/router-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"routerProvider"))," object under the hood."),(0,a.kt)("p",null,"Today, we are going to explore the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/live-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"liveProvider"))," prop as we implement realtime collaboration on a ",(0,a.kt)("inlineCode",{parentName:"p"},"canvas")," so that ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," drawn on a ",(0,a.kt)("inlineCode",{parentName:"p"},"canvas")," by one user is instantly seen by anyone else viewing it from another client."),(0,a.kt)("p",null,"There are two parts to our endeavor in this post, one in the ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," backend and one in our ",(0,a.kt)("strong",{parentName:"p"},"refine")," app:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Spin up Realtime servers from ",(0,a.kt)("strong",{parentName:"li"},"Supabase")," dashboard for the resource we want to publish changes for and subscribe to."),(0,a.kt)("li",{parentName:"ol"},"Registering the ",(0,a.kt)("inlineCode",{parentName:"li"},"liveProvider")," prop inside ",(0,a.kt)("inlineCode",{parentName:"li"},"<Refine />")," component and enabling subscription with ",(0,a.kt)("inlineCode",{parentName:"li"},"liveMode: auto"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," has already added the implementation code for ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," ",(0,a.kt)("strong",{parentName:"p"},"Realtime")," provider in the ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," object it created for us during project initialization. We will mostly play the laymen role here as we tour around the underlying principles and the magic at work behind the scenes."),(0,a.kt)("p",null,"Let's start by first making sure ",(0,a.kt)("strong",{parentName:"p"},"Realtime")," servers are set up for the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," table in the ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," backend."),(0,a.kt)("h2",{id:"setting-up-supabase-realtime"},"Setting Up Supabase Realtime"),(0,a.kt)("p",null,"In order to make drawing collaborative between our users, we have to run ",(0,a.kt)("a",{parentName:"p",href:"https://supabase.com/docs/guides/realtime"},(0,a.kt)("strong",{parentName:"a"},"Supabase")," ",(0,a.kt)("strong",{parentName:"a"},"Realtime"))," servers and create channels for our ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," resource."),(0,a.kt)("p",null,"We can do this from the ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," dashboard for the database we created. If you haven't already, please go ahead and select ",(0,a.kt)("inlineCode",{parentName:"p"},"Enable Realtime")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," table from its editor:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-11-refine-pixels-4%2Frealtime.png",alt:"supabase realtime"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Behind the scenes, ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," spins up globally distributed ",(0,a.kt)("strong",{parentName:"p"},"Realtime")," servers that facilitate low latency communication between our app and ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," database tables. ",(0,a.kt)("strong",{parentName:"p"},"Supabase"),"'s ",(0,a.kt)("strong",{parentName:"p"},"Realtime")," feature spares a ",(0,a.kt)("strong",{parentName:"p"},"channel")," for each resource to be broadcasted. Any change in the resource is published in the channel, and clients that subscribe to the channel receive updates as soon as the change is made."),(0,a.kt)("p",null,"We are using ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," ",(0,a.kt)("strong",{parentName:"p"},"Realtime"),"'s ",(0,a.kt)("a",{parentName:"p",href:"https://supabase.com/docs/guides/realtime#postgres-cdc"},(0,a.kt)("strong",{parentName:"a"},"PostgreSQL Change Data Capture"))," feature which will now allow our app to publish mutation events to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," channel and also listen to those changes from a subscriber component."),(0,a.kt)("p",null,"This means mutation hooks such as ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/data/useCreate/"},(0,a.kt)("inlineCode",{parentName:"a"},"useCreate()"))," can now publish events to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," channel and consumer hooks like ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/api-reference/core/hooks/data/useList/"},(0,a.kt)("inlineCode",{parentName:"a"},"useList()"))," are able to get instant updates for any change to ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels"),"."),(0,a.kt)("h2",{id:"refine-s-liveprovider-prop"},(0,a.kt)("inlineCode",{parentName:"h2"},"<Refine />"),"'s ",(0,a.kt)("inlineCode",{parentName:"h2"},"liveProvider")," Prop"),(0,a.kt)("p",null,"Now, it's time to move our attention back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component in our app."),(0,a.kt)("p",null,"We already have the ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," prop passed in with the ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider()")," function from ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/supabase"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},"<Refine\n  ...\n  liveProvider={liveProvider(supabaseClient)}\n/>\n")),(0,a.kt)("p",null,"And that's it! The channel for ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," resource that was specified above in ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," will broadcast all mutations on the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," table. And any subscriber will be able to receive real time updates about the changes."),(0,a.kt)("p",null,"Now, let's try opening the app in two browsers, one with Google account and one with GitHub. Navigate to a canvas page, the same one in both and try adding some ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," from each. We'll see that ",(0,a.kt)("inlineCode",{parentName:"p"},"pixel"),"s created in one are displayed in the other in real time:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-11-refine-pixels-4%2Fliveprovider-prop-min.gif",alt:"supabase realtime"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"This is obnoxious, because we don't know how this is happening. And very pleasant because ",(0,a.kt)("inlineCode",{parentName:"p"},"create refine-app")," already generated the code that handles the PubSub logic for ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," ",(0,a.kt)("strong",{parentName:"p"},"PostregSQL CDC"),". Let's have a look to see what's happening in the ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," object."),(0,a.kt)("h3",{id:"refines-supabase-liveprovider-object"},"refine's Supabase ",(0,a.kt)("inlineCode",{parentName:"h3"},"liveProvider")," Object"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," object has the following signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const liveProvider = {\n    subscribe: ({ channel, params: { ids }, types, callback }) => any,\n    unsubscribe: (subscription) => void,\n    publish?: (event) => void,\n};\n")),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/packages/supabase/src/index.ts"},(0,a.kt)("inlineCode",{parentName:"a"},"@refinedev/supabase"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"version 3.35.0"),", at the time of publishing this article, the ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," consists of only the ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"unsubscribe")," methods. Its implementation looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Supabase data provider"',title:'"Supabase',data:!0,'provider"':!0},'const liveProvider = (supabaseClient: SupabaseClient): LiveProvider => {\n  return {\n    subscribe: ({\n      channel,\n      types,\n      params,\n      callback,object\n    }): RealtimeSubscription => {\n      const resource = channel.replace("resources/", "");\n\n        const listener = (payload: SupabaseRealtimePayload<any>) => {\n          if (\n            types.includes("*") ||\n            types.includes(liveTypes[payload.eventType])\n          ) {\n            if (\n              liveTypes[payload.eventType] !== "created" &&\n              params?.ids !== undefined &&\n              payload.new?.id !== undefined\n            ) {\n                if (\n                  params.ids\n                    .map(String)\n                    .includes(payload.new.id.toString())\n                ) {\n                  callback({\n                    channel,\n                    type: liveTypes[payload.eventType],\n                    date: new Date(payload.commit_timestamp),\n                    payload: payload.new,\n                  });\n                }\n            } else {\n              callback({\n                channel,\n                type: liveTypes[payload.eventType],\n                date: new Date(payload.commit_timestamp),\n                payload: payload.new,\n              });\n            }\n          }\n        };\n\n        const client = supabaseClient\n          .from(resource)\n          .on(supabaseTypes[types[0]], listener);\n\n        types\n          .slice(1)\n          .map((item) => client.on(supabaseTypes[item], listener));\n\n        return client.subscribe();\n    },\n\n    unsubscribe: async (subscription: RealtimeSubscription) => {\n      supabaseClient.removeSubscription(subscription);\n    },\n  };\n};\n')),(0,a.kt)("p",null,"Both methods are concerned with subscription to the changes. That's because the publishing the event is done by mutation methods. In our case, it is done from the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCreate()")," hook we invoke to create a pixel."),(0,a.kt)("p",null,"Let's have a look."),(0,a.kt)("h2",{id:"broadcasting"},"Broadcasting"),(0,a.kt)("p",null,"If we look inside our ",(0,a.kt)("inlineCode",{parentName:"p"},"<CanvasShow />")," component that is rendered at ",(0,a.kt)("inlineCode",{parentName:"p"},"/canvases/:id"),", we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"<CanvasItem />")," component which basically displays all ",(0,a.kt)("inlineCode",{parentName:"p"},"pixel"),"s that belong to the ",(0,a.kt)("inlineCode",{parentName:"p"},"canvas")," item being visited. ",(0,a.kt)("inlineCode",{parentName:"p"},"<CanvasItem />")," is also the component from where a ",(0,a.kt)("inlineCode",{parentName:"p"},"pixel")," is created, so let's look at that now:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/components/canvas/item.tsx"',title:'"src/pages/components/canvas/item.tsx"'},'import React from "react";\nimport { Typography } from "@refinedev/antd";\n\nimport { Pixel, Canvas } from "types";\nimport { DEFAULT_SCALE, PIXEL_SIZE } from "utility/constants";\n\nconst { Text } = Typography;\n\ntype CanvasItemProps = {\n    canvas: Canvas;\n    pixels: Pixel[];\n    scale?: number;\n    border?: boolean;\n    active?: boolean;\n    onPixelClick?: (x: number, y: number) => void;\n};\n\nexport const CanvasItem: React.FC<CanvasItemProps> = ({\n    canvas: { id, name, width, height },\n    pixels,\n    scale = DEFAULT_SCALE,\n    border = true,\n    active = true,\n    onPixelClick,\n}) => {\n    return (\n        <div>\n            {Array.from({ length: height }).map((_, i) => (\n                <div key={`row-${i}`} style={{ display: "flex" }}>\n                    {Array.from({ length: width }).map((_, j) => (\n                        <div key={`row-${i}-col-${j}`}>\n                            <div\n                                onClick={() => {\n                                    if (onPixelClick && active) {\n                                        onPixelClick(j, i);\n                                    }\n                                }}\n                                style={{\n                                    cursor: active ? "pointer" : undefined,\n                                    width: PIXEL_SIZE * scale,\n                                    height: PIXEL_SIZE * scale,\n                                    border: border\n                                        ? "0.5px solid rgba(0,0,0,0.05)"\n                                        : undefined,\n                                    background:\n                                        pixels.find(\n                                            (el) => el.x === j && el.y === i,\n                                        )?.color ?? "transparent",\n                                }}\n                            />\n                        </div>\n                    ))}\n                </div>\n            ))}\n            {!active && <Text className="canvas-name-text">{name ?? id}</Text>}\n        </div>\n    );\n};\n')),(0,a.kt)("p",null,"The most relevant thing to look in the component above is the ",(0,a.kt)("inlineCode",{parentName:"p"},"onPixelClick")," click event handler. It is a prop received by the ",(0,a.kt)("inlineCode",{parentName:"p"},"<CanvasItem />")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"<CanvasShow />")," component. It's original value is the ",(0,a.kt)("inlineCode",{parentName:"p"},"onSubmit()")," function defined inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<CanvasShow />")," component."),(0,a.kt)("p",null,"We'd like to focus on this ",(0,a.kt)("inlineCode",{parentName:"p"},"onSubmit")," event handler, because it is what facilitates the creation of a ",(0,a.kt)("inlineCode",{parentName:"p"},"pixel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/canvases/show.tsx"',title:'"src/pages/canvases/show.tsx"'},'const { mutate } = useCreate();\n\nconst onSubmit = (x: number, y: number) => {\n    if (!identity) {\n        return push("/login");\n    }\n\n    if (typeof x === "number" && typeof y === "number" && canvas?.id) {\n        mutate({\n            resource: "pixels",\n            values: {\n                x,\n                y,\n                color,\n                canvas_id: canvas?.id,\n                user_id: identity.id,\n            },\n            successNotification: false,\n        });\n    }\n};\n')),(0,a.kt)("p",null,"As we can see, with the call to ",(0,a.kt)("inlineCode",{parentName:"p"},"mutate")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCreate()")," hook, a new entry is being added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," table upon every click on the canvas."),(0,a.kt)("p",null,"And since we enabled realtime for the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," table, each successful ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," action broadcasts the change to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," channel for subscribers to pick."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"refine-usepublish-hook"},"refine ",(0,a.kt)("a",{parentName:"h3",href:"https://refine.dev/docs/api-reference/core/hooks/live/usePublish/"},(0,a.kt)("inlineCode",{parentName:"a"},"usePublish()"))," Hook"),(0,a.kt)("p",null,"The exact way it happens looks like this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"useCreate()")," hook is called from the consumer component."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"useCreate()"),", behind the scenes, uses the live ",(0,a.kt)("inlineCode",{parentName:"li"},"usePublish()")," hook to publish the ",(0,a.kt)("inlineCode",{parentName:"li"},"created")," event to the ",(0,a.kt)("inlineCode",{parentName:"li"},"pixels")," channel on ",(0,a.kt)("strong",{parentName:"li"},"Supabase")," ",(0,a.kt)("strong",{parentName:"li"},"Realtime")," servers.")),(0,a.kt)("p",null,"The published event for ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," action produces an object with the following signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    channel: `resources/pixels`,\n    type: "created",\n    payload: {\n            ids: ["id-of-created-pixel"]\n    },\n    date: new Date(),\n}\n')),(0,a.kt)("p",null,"Feel free to go through the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/live-provider/#publish-events-from-hooks"},"live hooks docs")," for details about how live publishing is supported by ",(0,a.kt)("inlineCode",{parentName:"p"},"useCreate()")," and other mutation hooks."),(0,a.kt)("h2",{id:"subscription"},"Subscription"),(0,a.kt)("p",null,"The changes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," table can be subscribed by consumer components with the ",(0,a.kt)("inlineCode",{parentName:"p"},"useList()")," hook. We are showing the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<CanvasShow />")," component itself, but they are fetched inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<DisplayCanvas />")," render-props component."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useList()")," hook inside ",(0,a.kt)("inlineCode",{parentName:"p"},"<DisplayCanvas />")," looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/canvas/display.tsx"',title:'"src/components/canvas/display.tsx"'},'const { data } = useList<Pixel>\n  {\n    resource: "pixels",\n    liveMode: "auto",\n    config: {\n      filters: [\n        {\n          field: "canvas_id",\n          operator: "eq",\n          value: id,\n        },\n      ],\n      sort: [\n        {\n          field: "created_at",\n          order: "desc",\n        },\n      ],\n      hasPagination: false,\n    },\n    metaData: {\n      select: "*, users(id, full_name, avatar_url)",\n    },\n  };\n')),(0,a.kt)("p",null,"Among the loads of arguments and options passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"useList()")," hook, we have used the ",(0,a.kt)("inlineCode",{parentName:"p"},"liveMode: auto")," property which allows us to subscribe to the ",(0,a.kt)("strong",{parentName:"p"},"Realtime")," channel for the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," resource."),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," disabled in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component, ",(0,a.kt)("inlineCode",{parentName:"p"},"useList()")," acts as a normal ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," hook."),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," activated, under the hood, ",(0,a.kt)("inlineCode",{parentName:"p"},"useList()")," banks on ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"useResourceSubscription()")," live hook to communicate with the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," channel."),(0,a.kt)("h3",{id:"refine-useresourcesubscription-hook"},"refine ",(0,a.kt)("inlineCode",{parentName:"h3"},"useResourceSubscription()")," Hook"),(0,a.kt)("p",null,"The actual subscription is done by the ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider.subscribe()")," method."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe()")," method is called from inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"useResourceSubscription()")," hook in order to subsribe to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," channel."),(0,a.kt)("p",null,"If you want to dive into the details, please feel free to do so in the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/live-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"liveProvider")," docs here"),"."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In today's part, we implemented real time collaboration for drawing ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"canvas")," items using ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component's ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," prop and its supporting hooks for publishing and subscribing to ",(0,a.kt)("strong",{parentName:"p"},"Supabase"),"'s ",(0,a.kt)("strong",{parentName:"p"},"Realtime")," servers."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe()")," method on ",(0,a.kt)("strong",{parentName:"p"},"Supabase"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," object allows us to subscribe to a channel created for a resource. Subscription for the resource is triggered by the ",(0,a.kt)("inlineCode",{parentName:"p"},"useResourceSubscription()")," hook called from data hooks that support live subscription - the ",(0,a.kt)("inlineCode",{parentName:"p"},"useList()")," hook in our example."),(0,a.kt)("p",null,"Broadcasting, in turn, is initiated by the ",(0,a.kt)("inlineCode",{parentName:"p"},"usePublish()")," hook called from a supported mutation hook for our resource - the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCreate()")," hook in this case."),(0,a.kt)("p",null,"We implemented real time collaboration very effortlessly due to the out-of-box solutions provided by ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/supabase")," package."),(0,a.kt)("p",null,"With this now, we have enabled multiple users to draw on a canvas at the same time and receive updates instantly."))}m.isMDXComponent=!0}}]);
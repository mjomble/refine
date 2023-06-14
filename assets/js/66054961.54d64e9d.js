"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76660],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(u,".").concat(m)]||c[m]||p[m]||l;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(87462),a=n(67294),l=n(86010),o=n(12466),i=n(99104),u=n(72389);const s="tabList__CuJ",d="tabItem_LNqP";function p(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),r=s[n].value;r!==i&&(c(t),u(r))},k=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:k,onClick:m},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":i===t})}),n??t)})))}function c(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function m(e){const t=(0,i.Y)(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",s)},a.createElement(p,(0,r.Z)({},e,t)),a.createElement(c,(0,r.Z)({},e,t)))}function k(e){const t=(0,u.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},99104:(e,t,n)=>{n.d(t,{Y:()=>p});var r=n(67294),a=n(76775),l=n(91980);var o=n(50012);function i(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??i(n);return function(e){const t=(void 0===(r=(e,t)=>e.value===t.value)&&(r=(e,t)=>e===t),(n=e).filter(((e,t)=>n.findIndex((t=>r(t,e)))!==t)));var n,r;if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function s(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const o=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=u(e),[i,p]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!s({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,m]=d({queryString:n,groupId:a}),[k,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,o.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=c??k;return s({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&p(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!s({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);p(e),m(e),f(e)}),[m,f,l]),tabValues:l}}},61517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={id:"telemetry",title:"Telemetry",sidebar_label:"Telemetry"},u="Telemetry",s={unversionedId:"further-readings/telemetry",id:"further-readings/telemetry",title:"Telemetry",description:"Summary",source:"@site/docs/further-readings/telemetry.md",sourceDirName:"further-readings",slug:"/further-readings/telemetry",permalink:"/docs/further-readings/telemetry",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/further-readings/telemetry.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1686745366,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{id:"telemetry",title:"Telemetry",sidebar_label:"Telemetry"},sidebar:"someSidebar",previous:{title:"Benchmarks",permalink:"/docs/further-readings/benchmarks"},next:{title:"Comparison | Refine vs React-Admin vs AdminBro vs Retool vs Redwood",permalink:"/docs/comparison"}},d={},p=[{value:"Summary",id:"summary",level:2},{value:"Why do we need this?",id:"why-do-we-need-this",level:2},{value:"How do we collect data?",id:"how-do-we-collect-data",level:2},{value:"What is collected?",id:"what-is-collected",level:2},{value:"How to opt-out?",id:"how-to-opt-out",level:2},{value:"What is collected?",id:"what-is-collected-1",level:2},{value:"How to opt-out?",id:"how-to-opt-out-1",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"telemetry"},"Telemetry"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," implements a ",(0,a.kt)("strong",{parentName:"p"},"simple")," and ",(0,a.kt)("strong",{parentName:"p"},"transparent")," telemetry module for collecting usage statistics defined in a ",(0,a.kt)("strong",{parentName:"p"},"very limited scope"),"."),(0,a.kt)("p",null,"Tracking is totally ",(0,a.kt)("strong",{parentName:"p"},"secure")," and ",(0,a.kt)("strong",{parentName:"p"},"anonymous"),". It includes no personally identifiable information and ",(0,a.kt)("strong",{parentName:"p"},"does not use cookies"),". Participation is optional and users may easily ",(0,a.kt)("strong",{parentName:"p"},"opt-out"),"."),(0,a.kt)("h2",{id:"why-do-we-need-this"},"Why do we need this?"),(0,a.kt)("p",null,"We try to answer the question ",(0,a.kt)("strong",{parentName:"p"},"how many users are actively using the refine framework"),". This information is critical for open-source projects like refine to better understand their communities and measure their growth metrics."),(0,a.kt)("h2",{id:"how-do-we-collect-data"},"How do we collect data?"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"refine-core",label:"refine core",default:!0,mdxType:"TabItem"},"The tracking happens when a refine application is loaded on the user's browser. On application init, a single HTTP request is sent to ",(0,a.kt)("a",{target:"_blank",rel:"noopener",href:"https://telemetry.refine.dev"},"https://telemetry.refine.dev"),". The request body is encoded with Base64 to be decoded on refine servers.",(0,a.kt)("p",null,"There are no consequent requests for that session, as we do NOT collect any behavioral information such as ",(0,a.kt)("em",{parentName:"p"},"page views"),", ",(0,a.kt)("em",{parentName:"p"},"button clicks"),", etc."),(0,a.kt)("h2",{id:"what-is-collected"},"What is collected?"),(0,a.kt)("p",null,"The HTTP call has a JSON payload having the following application-specific attributes:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"providers"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean[]")),(0,a.kt)("td",{parentName:"tr",align:null},"List of providers used in the project (auth, data, router, live, notification, auditLog, i18n or accessControl)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Version of the refine package.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resourceCount"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},"Number of total resources.")))),(0,a.kt)("p",null,"Additionally, the following information is extracted and collected from the HTTP header:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IP Address"),(0,a.kt)("td",{parentName:"tr",align:null},"IP Address of the machine the request is coming from.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,a.kt)("td",{parentName:"tr",align:null},"Hostname of the machine the request is coming from.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Browser"),(0,a.kt)("td",{parentName:"tr",align:null},"Browser and browser version.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OS"),(0,a.kt)("td",{parentName:"tr",align:null},"OS and OS version.")))),(0,a.kt)("h2",{id:"how-to-opt-out"},"How to opt-out?"),(0,a.kt)("p",null,"You can opt out of telemetry by simply adding ",(0,a.kt)("inlineCode",{parentName:"p"},"disableTelemetry")," prop to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component.")),(0,a.kt)(o.Z,{value:"refine-cli",label:"refine CLI",mdxType:"TabItem"},(0,a.kt)("p",null,"After running a command with the ",(0,a.kt)("inlineCode",{parentName:"p"},"refine")," CLI, a single HTTP request is sent to ",(0,a.kt)("a",{target:"_blank",rel:"noopener",href:"https://telemetry.refine.dev/cli"},(0,a.kt)("a",{parentName:"p",href:"https://telemetry.refine.dev/cli"},"https://telemetry.refine.dev/cli")),"."),(0,a.kt)("h2",{id:"what-is-collected-1"},"What is collected?"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nodeEnv"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the environment in which an application is running.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nodeVersion"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Installed Node.js version.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"os"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Operating system name.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"osVersion"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Operating system version.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"command"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Running script name.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"packages"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'{ "name": "string", "version": "string" }[]')),(0,a.kt)("td",{parentName:"tr",align:null},"Installed ",(0,a.kt)("inlineCode",{parentName:"td"},"refine")," packages.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"projectFramework"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Installed ",(0,a.kt)("inlineCode",{parentName:"td"},"react")," framework.")))),(0,a.kt)("p",null,"Additionally, the following information is extracted and collected from the HTTP header:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IP Address"),(0,a.kt)("td",{parentName:"tr",align:null},"IP Address of the machine the request is coming from.")))),(0,a.kt)("h2",{id:"how-to-opt-out-1"},"How to opt-out?"),(0,a.kt)("p",null,"You can opt out of telemetry by simply adding ",(0,a.kt)("inlineCode",{parentName:"p"},"REFINE_NO_TELEMETRY=true")," to environment variables."))))}m.isMDXComponent=!0}}]);
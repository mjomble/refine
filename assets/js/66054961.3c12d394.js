"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76660],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),s=n(7094),d=n(12466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:c,groupId:k,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===m?m:m??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,s.U)(),[w,T]=(0,r.useState)(N),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=k){const e=b[k];null!=e&&e!==w&&f.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=O.indexOf(t),a=f[n].value;a!==w&&(C(t),T(a),null!=k&&v(k,String(a)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:P,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},61517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={id:"telemetry",title:"Telemetry",sidebar_label:"Telemetry"},s="Telemetry",d={unversionedId:"further-readings/telemetry",id:"further-readings/telemetry",title:"Telemetry",description:"Summary",source:"@site/docs/further-readings/telemetry.md",sourceDirName:"further-readings",slug:"/further-readings/telemetry",permalink:"/docs/further-readings/telemetry",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/further-readings/telemetry.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1682592071,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{id:"telemetry",title:"Telemetry",sidebar_label:"Telemetry"},sidebar:"someSidebar",previous:{title:"Benchmarks",permalink:"/docs/further-readings/benchmarks"}},p={},u=[{value:"Summary",id:"summary",level:2},{value:"Why do we need this?",id:"why-do-we-need-this",level:2},{value:"How do we collect data?",id:"how-do-we-collect-data",level:2},{value:"What is collected?",id:"what-is-collected",level:2},{value:"How to opt-out?",id:"how-to-opt-out",level:2},{value:"What is collected?",id:"what-is-collected-1",level:2},{value:"How to opt-out?",id:"how-to-opt-out-1",level:2}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"telemetry"},"Telemetry"),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," implements a ",(0,r.kt)("strong",{parentName:"p"},"simple")," and ",(0,r.kt)("strong",{parentName:"p"},"transparent")," telemetry module for collecting usage statistics defined in a ",(0,r.kt)("strong",{parentName:"p"},"very limited scope"),"."),(0,r.kt)("p",null,"Tracking is totally ",(0,r.kt)("strong",{parentName:"p"},"secure")," and ",(0,r.kt)("strong",{parentName:"p"},"anonymous"),". It includes no personally identifiable information and ",(0,r.kt)("strong",{parentName:"p"},"does not use cookies"),". Participation is optional and users may easily ",(0,r.kt)("strong",{parentName:"p"},"opt-out"),"."),(0,r.kt)("h2",{id:"why-do-we-need-this"},"Why do we need this?"),(0,r.kt)("p",null,"We try to answer the question ",(0,r.kt)("strong",{parentName:"p"},"how many users are actively using the Refine framework"),". This information is critical for open-source projects like Refine to better understand their communities and measure their growth metrics."),(0,r.kt)("h2",{id:"how-do-we-collect-data"},"How do we collect data?"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"refine-core",label:"refine core",default:!0,mdxType:"TabItem"},"The tracking happens when a Refine application is loaded on the user's browser. On application init, a single HTTP request is sent to ",(0,r.kt)("a",{target:"_blank",rel:"noopener",href:"https://telemetry.refine.dev"},"https://telemetry.refine.dev"),". The request body is encoded with Base64 to be decoded on Refine servers.",(0,r.kt)("p",null,"There are no consequent requests for that session, as we do NOT collect any behavioral information such as ",(0,r.kt)("em",{parentName:"p"},"page views"),", ",(0,r.kt)("em",{parentName:"p"},"button clicks"),", etc."),(0,r.kt)("h2",{id:"what-is-collected"},"What is collected?"),(0,r.kt)("p",null,"The HTTP call has a JSON payload having the following application-specific attributes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"providers"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean[]")),(0,r.kt)("td",{parentName:"tr",align:null},"List of providers used in the project (auth, data, router, live, notification, auditLog, i18n or accessControl)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Version of the refine package.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resourceCount"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of total resources.")))),(0,r.kt)("p",null,"Additionally, the following information is extracted and collected from the HTTP header:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IP Address"),(0,r.kt)("td",{parentName:"tr",align:null},"IP Address of the machine the request is coming from.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"Hostname of the machine the request is coming from.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Browser"),(0,r.kt)("td",{parentName:"tr",align:null},"Browser and browser version.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OS"),(0,r.kt)("td",{parentName:"tr",align:null},"OS and OS version.")))),(0,r.kt)("h2",{id:"how-to-opt-out"},"How to opt-out?"),(0,r.kt)("p",null,"You can opt out of telemetry by simply adding ",(0,r.kt)("inlineCode",{parentName:"p"},"disableTelemetry")," prop to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine />")," component.")),(0,r.kt)(o.Z,{value:"refine-cli",label:"refine CLI",mdxType:"TabItem"},(0,r.kt)("p",null,"After running a command with the ",(0,r.kt)("inlineCode",{parentName:"p"},"refine")," CLI, a single HTTP request is sent to ",(0,r.kt)("a",{target:"_blank",rel:"noopener",href:"https://telemetry.refine.dev/cli"},(0,r.kt)("a",{parentName:"p",href:"https://telemetry.refine.dev/cli"},"https://telemetry.refine.dev/cli")),"."),(0,r.kt)("h2",{id:"what-is-collected-1"},"What is collected?"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodeEnv"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the environment in which an application is running.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodeVersion"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Installed Node.js version.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"os"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Operating system name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"osVersion"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Operating system version.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"command"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Running script name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"packages"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "name": "string", "version": "string" }[]')),(0,r.kt)("td",{parentName:"tr",align:null},"Installed ",(0,r.kt)("inlineCode",{parentName:"td"},"refine")," packages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"projectFramework"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Installed ",(0,r.kt)("inlineCode",{parentName:"td"},"react")," framework.")))),(0,r.kt)("p",null,"Additionally, the following information is extracted and collected from the HTTP header:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IP Address"),(0,r.kt)("td",{parentName:"tr",align:null},"IP Address of the machine the request is coming from.")))),(0,r.kt)("h2",{id:"how-to-opt-out-1"},"How to opt-out?"),(0,r.kt)("p",null,"You can opt out of telemetry by simply adding ",(0,r.kt)("inlineCode",{parentName:"p"},"REFINE_NO_TELEMETRY=true")," to environment variables."))))}c.isMDXComponent=!0}}]);
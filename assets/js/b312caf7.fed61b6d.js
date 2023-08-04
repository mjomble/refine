"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86486],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(r),u=a,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||n;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},26427:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>d});r(67294);var o=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={title:"gRPC vs REST - A Brief Comparison",description:"We'll explore practical use cases of REST and gRPC to enable you to select the most appropriate API for your project.",slug:"grpc-vs-rest",authors:"deborah_emeni",tags:["comparison","javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-23-grpc-vs-rest/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/grpc-vs-rest",source:"@site/blog/2023-06-23-grpc-vs-rest.md",title:"gRPC vs REST - A Brief Comparison",description:"We'll explore practical use cases of REST and gRPC to enable you to select the most appropriate API for your project.",date:"2023-06-23T00:00:00.000Z",formattedDate:"June 23, 2023",tags:[{label:"comparison",permalink:"/blog/tags/comparison"},{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:12.595,hasTruncateMarker:!1,authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],frontMatter:{title:"gRPC vs REST - A Brief Comparison",description:"We'll explore practical use cases of REST and gRPC to enable you to select the most appropriate API for your project.",slug:"grpc-vs-rest",authors:"deborah_emeni",tags:["comparison","javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-23-grpc-vs-rest/social.png",hide_table_of_contents:!1},prevItem:{title:"A Detailed Guide on Docker run Command",permalink:"/blog/docker-run-command"},nextItem:{title:"TypeScript Record Type with Examples",permalink:"/blog/typescript-record-type"},relatedPosts:[{title:"How to use JavaScript Ternary Operator?",description:"In this post, we expound on with examples of what the JavaScript ternary operator is, how it works.",permalink:"/blog/javascript-ternary-operator",formattedDate:"November 15, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:4.135,date:"2022-11-15T00:00:00.000Z"},{title:"refine vs Blitz.js",description:"We will take a closer look at how to set both up, what are their internal builds, how they handle the data sources, how to implement the CRUD functionality, add authentication, and how to deploy them to production.",permalink:"/blog/react-admin-frameworks-refine-vs-blitz-js",formattedDate:"March 15, 2023",authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],readingTime:19.035,date:"2023-03-15T00:00:00.000Z"},{title:"Top 6 Free Online Code Editors and IDEs with Pros and Cons",description:"We'll compare the best online IDEs and code editors for web development. We'll also look at the pros and cons of each.",permalink:"/blog/6-best-online-code-editors-comparison",formattedDate:"November 1, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:16.055,date:"2022-11-01T00:00:00.000Z"}],authorPosts:[{title:"How to use Conditional Rendering in React",description:"We'll implement Conditional Rendering in React and the various ways to use it in your React applications.",permalink:"/blog/react-conditional-rendering",formattedDate:"December 14, 2022",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:10.175,date:"2022-12-14T00:00:00.000Z"},{title:"The Important Differences between URI VS URL",description:"We'll be looking at the differences between URI and URL, and how they are used in web development.",permalink:"/blog/uri-vs-url",formattedDate:"February 1, 2023",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:7.79,date:"2023-02-01T00:00:00.000Z"},{title:"How to use React Strict Mode in React 18",description:"What is Strict Mode in React 18 and how to use it to find and fix bugs in your React application.",permalink:"/blog/react-strict-mode-in-react-18",formattedDate:"November 24, 2022",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:6.98,date:"2022-11-24T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding APIs",id:"understanding-apis",level:2},{value:"Explanation of REST APIs",id:"explanation-of-rest-apis",level:2},{value:"How REST APIs work",id:"how-rest-apis-work",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Step 5",id:"step-5",level:3},{value:"Explanation of gRPC APIs",id:"explanation-of-grpc-apis",level:2},{value:"How gRPC APIs work",id:"how-grpc-apis-work",level:2},{value:"Step 1",id:"step-1-1",level:3},{value:"Step 2",id:"step-2-1",level:3},{value:"Step 3",id:"step-3-1",level:3},{value:"How the features of REST API differ from gRPC API",id:"how-the-features-of-rest-api-differ-from-grpc-api",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Resources",id:"resources",level:2}],h=(u="PromotionBanner",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const m={toc:d};function g(e){var{components:t}=e,r=i(e,["components"]);return(0,o.kt)("wrapper",n(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){a(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this modern age, building applications with Application Programming Interfaces (APIs) that are scalable and efficient has greatly benefited businesses, developers, and users. To build an interactive application, you will need an API that enables communication and data exchange among various applications and services."),(0,o.kt)("p",null,"As a result, frameworks that help create high-performing APIs have been developed in recent years. Some examples of such frameworks include Representational State Transfer (",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer#:~:text=Representational%20state%20transfer%20(REST)%20is,as%20the%20Web%2C%20should%20behave."},"REST"),") and Google Remote Procedure Call (",(0,o.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC"),")."),(0,o.kt)("p",null,"This article will teach you about REST APIs and gRPC APIs, including their definitions, functionalities, and distinctions. Additionally, you\u2019ll explore various scenarios that highlight practical use cases of REST and gRPC to enable you to select the most appropriate framework for your project."),(0,o.kt)("p",null,"Steps we'll cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#grpc-vs-rest"},"gRPC vs REST"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#understanding-apis"},"Understanding APIs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#explanation-of-rest-apis"},"Explanation of REST APIs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-rest-apis-work"},"How REST APIs work")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#explanation-of-grpc-apis"},"Explanation of gRPC APIs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-grpc-apis-work"},"How gRPC APIs work")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-the-features-of-rest-api-differ-from-grpc-api"},"How the features of REST API differ from gRPC API"))))),(0,o.kt)("h2",{id:"understanding-apis"},"Understanding APIs"),(0,o.kt)("p",null,"Developers often need to integrate various services from external sources or exchange data with other applications to build highly functional applications. APIs are crucial in this process by serving as intermediaries between different systems. They define rules or protocols that facilitate communication between services or applications. By utilizing APIs, developers can access and incorporate functionalities from other applications into their own, enabling them to focus on other tasks or functionalities within their application."),(0,o.kt)("p",null,"Let's look at a simple example that describes APIs and their importance in application development."),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-23-grpc-vs-rest/illustration.png",alt:"grpc-vs-rest"})),(0,o.kt)("p",null,"For instance, let's say you are building a book application called BookFinder (that provides information about books) and want to design an API for it."),(0,o.kt)("p",null,"To enhance the functionality of your application, you decide to integrate it with a book database service by utilizing their API, which you found online. Using their API, you can access functionalities such as retrieving book details like title, description, and author."),(0,o.kt)("p",null,"Here's what happens: when a user searches for a book in your BookFinder application, you make an API request to the book database service, passing the search query as a parameter. The API then processes the request and returns a response containing the relevant book information."),(0,o.kt)("h2",{id:"explanation-of-rest-apis"},"Explanation of REST APIs"),(0,o.kt)("p",null,"Representational State Transfer (REST) API is a popular and widely accepted architectural style that provides a set of principles that guide the design of APIs and ",(0,o.kt)("a",{parentName:"p",href:"https://microservices.io/"},"microservices"),". This approach promotes the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Scalability"),": REST APIs use principles such as Statelessness, which refers to a situation where the client request contains all the information needed to process the request on the server. This means that the server can handle requests from multiple clients, ensuring the system can handle increasing traffic which means scalability.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Loose Coupling"),": REST uses a standard communication protocol called ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/HTTP"},"HTTP")," and provides a common interface for the Client and Server components. As the components adhere to the common interface, REST promotes interdependence, meaning that updates or changes made to one component will not affect the others in the system. This process, known as Loose Coupling, promotes modularity and makes it easier to manage the components in the system.")),(0,o.kt)("p",null,"Since REST API is built on HTTP (specifically the ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/Protocols/rfc2616/rfc2616.html"},"HTTP/1.1")," version) protocol, it utilizes HTTP methods such as GET, POST, PUT, and DELETE to perform operations on resources. Using the architectural style of REST API, a client sends a request to the server using one of these HTTP methods to retrieve resources. The resources on the server are identified or accessed through a ",(0,o.kt)("a",{parentName:"p",href:"https://g.co/kgs/TC4KqJ"},"Uniform Resource Locator")," (URL). Once the resources are identified, the server sends back responses in a standard format, typically ",(0,o.kt)("a",{parentName:"p",href:"https://g.co/kgs/Ph6GfG"},"JSON")," (JavaScript Object Notation)"),(0,o.kt)("h2",{id:"how-rest-apis-work"},"How REST APIs work"),(0,o.kt)("p",null,"Let's see an example that demonstrates how REST APIs work, using the illustration from the previous section explaining APIs."),(0,o.kt)("p",null,"Consider a scenario where a user initiates a search for a book titled \u201cLord of the Rings.\u201d on your ",(0,o.kt)("strong",{parentName:"p"},"BookFinder")," application. The following steps will be carried out:"),(0,o.kt)("h3",{id:"step-1"},"Step 1"),(0,o.kt)("p",null,"Your application, also called the Client, will send a request using the HTTP method (",(0,o.kt)("strong",{parentName:"p"},"GET)")," to the database service containing information about the book. The request will be sent to a specific API endpoint, represented by a URL such as \u201c",(0,o.kt)("strong",{parentName:"p"},"/api/books\u201d"),", already designed to handle book-related requests."),(0,o.kt)("p",null,"A query-string format includes the search query as a parameter in the endpoint URL. Here's an example of how your request will look:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"  GET /api/books?title=Lord%20of%20the%20Rings HTTP/1.1\n  Host: book-database-service.com\n")),(0,o.kt)("p",null,"In the request, the search query parameter has been specified as key-value pairs. The key represents the parameter's name, while the value represents the search query. In this case, the key is 'title,' and the value is 'Lord of the Rings,' which has been included in the request URL. To handle spaces and special characters, the value is ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/URL_encoding"},"URL-encoded")," with ",(0,o.kt)("strong",{parentName:"p"},"%20"),". The ",(0,o.kt)("strong",{parentName:"p"},"Host")," indicates the actual server where the API is located."),(0,o.kt)("h3",{id:"step-2"},"Step 2"),(0,o.kt)("p",null,"After receiving the request, the database service's API processes it, extracting the query parameter '",(0,o.kt)("strong",{parentName:"p"},"title"),"' from the URL to determine the book name the user is searching for, such as 'Lord of the Rings'."),(0,o.kt)("h3",{id:"step-3"},"Step 3"),(0,o.kt)("p",null,"Now that the API knows the name of the book the user is searching for, it interacts with the database. The API utilizes search algorithms or queries the database using a Database Query Language like ",(0,o.kt)("a",{parentName:"p",href:"https://g.co/kgs/4XJRMt"},"SQL")," to find books in the database collection that match the specified title."),(0,o.kt)("p",null,"Here are the details of the retrieved book:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n  "title": "Lord of the Rings",\n  "description": "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil..",\n  "author": "J. R. R. Tolkien\u201d\n}\n')),(0,o.kt)("h3",{id:"step-4"},"Step 4"),(0,o.kt)("p",null,"Since the database service API uses the REST API architectural style, it returns the retrieved details to your BookFinder application in ",(0,o.kt)("a",{parentName:"p",href:"https://g.co/kgs/fQaZqZ"},"JSON")," format as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  "title": "Lord of the Rings",\n  "description": "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil..",\n  "author": "J. R. R. Tolkien\n}\n')),(0,o.kt)("p",null,"From the JSON response, you can observe the ",(0,o.kt)("strong",{parentName:"p"},"HTTP Response")," ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"},(0,o.kt)("strong",{parentName:"a"},"Status Cod")),(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"},"e"),", which indicates the success or failure of the request. A Status Code of ",(0,o.kt)("strong",{parentName:"p"},"200 OK")," signifies a successful request, prompting the return of the book information."),(0,o.kt)("p",null,"Additionally, take note of the included ",(0,o.kt)("strong",{parentName:"p"},"Content-Type")," header, which provides further information about the response, stating that the response body contains JSON-formatted data."),(0,o.kt)("h3",{id:"step-5"},"Step 5"),(0,o.kt)("p",null,"This is where your BookFinder application receives the HTTP response from the database service's API and extracts the information needed to perform necessary operations or display it to users. "),(0,o.kt)("hr",null),(0,o.kt)(h,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"explanation-of-grpc-apis"},"Explanation of gRPC APIs"),(0,o.kt)("p",null,"Google Remote Procedure Call (",(0,o.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC"),") is a modern framework that provides a standard for software components to communicate with each other in a distributed system. It facilitates the exchange of requests and responses."),(0,o.kt)("p",null,"gRPC is built on ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Remote_procedure_call"},"RPC")," (Remote Procedure Protocol), which is a high-speed communication model. It leverages ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HTTP/2"},"HTTP/2"),", allowing clients to invoke functions from a remote server as if they were local. This capability enables developers to integrate services programmed in different languages."),(0,o.kt)("p",null,"Since gRPC is built on top of HTTP/2, it has access to certain features that offer the following benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"High Performance"),": gRPC utilizes ",(0,o.kt)("a",{parentName:"li",href:"https://protobuf.dev/"},"Protocol Buffers"),", a data format for serializing structured data, which helps efficiently package and send data. Using the gRPC framework, data is transferred at high-speed thanks to the utilization of the HTTP/2 protocol. This combination of efficiency and speed in data communication leads to high-performance applications. gRPC also ensures high ",(0,o.kt)("a",{parentName:"li",href:"https://grpc.io/docs/what-is-grpc/core-concepts/#bidirectional-streaming-rpc"},"bidirectional streaming")," performance, allowing simultaneous data transmission between clients and servers.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Compatibility and Interoperability"),": The language used for defining gRPC APIs is called ",(0,o.kt)("a",{parentName:"li",href:"https://protobuf.dev/"},"Protobufs"),", which offers several benefits in defining services and data. Using Protobufs provides a platform-independent and ",(0,o.kt)("a",{parentName:"li",href:"https://g.co/kgs/ypCn7C"},"language-agnostic")," way to structure data. With Protobufs, you can write code in different programming languages, and the resulting data will seamlessly communicate with other systems. The platform-independence promotes compatibility and interoperability with other systems.")),(0,o.kt)("h2",{id:"how-grpc-apis-work"},"How gRPC APIs work"),(0,o.kt)("p",null,"Let's explore the functionality of the gRPC API by using your BookFinder application as an example."),(0,o.kt)("h3",{id:"step-1-1"},"Step 1"),(0,o.kt)("p",null,"To enable users of your application to search for a book and find the exact one they are looking for, you'll need to begin by creating a protocol buffer file named '",(0,o.kt)("strong",{parentName:"p"},"book.proto"),"'. This file will include the definition of a gRPC service called ",(0,o.kt)("inlineCode",{parentName:"p"},"BookService")," and its methods. One such method you'll need to create is ",(0,o.kt)("inlineCode",{parentName:"p"},"BookSearch"),", which will take a search query as input and return the book details as output."),(0,o.kt)("p",null,"Here's an example of how your ",(0,o.kt)("strong",{parentName:"p"},"book.proto")," file should be structured:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'syntax = "proto3";\n\nservice BookService {\n  rpc BookSearch(BookRequest) returns (BookResponse) {}\n}\n\nmessage BookRequest {\n  string search_query = 1;\n}\n\nmessage BookResponse {\n  string title = 1;\n  string description = 2;\n  string author = 3;\n}\n')),(0,o.kt)("p",null,"In the code above, the BookService is defined using the protobuf syntax of the ",(0,o.kt)("a",{parentName:"p",href:"https://protobuf.dev/programming-guides/proto3/"},(0,o.kt)("strong",{parentName:"a"},"proto3"))," ****version. It includes the ",(0,o.kt)("inlineCode",{parentName:"p"},"BookSearch")," method, which inputs a ",(0,o.kt)("inlineCode",{parentName:"p"},"BookRequest")," message and returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"BookResponse"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"BookRequest")," message has a single field called ",(0,o.kt)("inlineCode",{parentName:"p"},"search_query"),", which the user provides. The ",(0,o.kt)("inlineCode",{parentName:"p"},"BookResponse")," message has fields for the book's ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"description"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"author"),"."),(0,o.kt)("h3",{id:"step-2-1"},"Step 2"),(0,o.kt)("p",null,"After defining your Protocol Buffer file, you need to generate the necessary gRPC code using the ",(0,o.kt)("a",{parentName:"p",href:"https://grpc.io/docs/protoc-installation/"},"protoc compiler")," with the Node.js plugin (if you're using Node). This will provide you with server and client code to implement and consume the API."),(0,o.kt)("p",null,"Next, you'll implement the gRPC service methods you created earlier in the ",(0,o.kt)("strong",{parentName:"p"},"book.proto")," file. If you're using ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js"),", you can utilize a library like ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@grpc/grpc-js"},"@grpc/grpc-js"),", available via npm, to create the server. You can refer to the following sample to implement the server using the protocol buffer definitions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const grpc-js = require('@grpc/grpc-js');\nconst protoLoader = require('@grpc/proto-loader');\n\n// Loading the protocol buffer definition\nconst protoFile = 'book.proto';\nconst packageDefinition = protoLoader.loadSync(protoFile);\nconst protoDescriptor = grpc.loadPackageDefinition(packageDefinition);\n\n// Implementing the gRPC service methods\nconst BookService = {\n  BookSearch: (call, callback) => {\n    const searchQuery = call.request.search_query;\n\n    // Querying the book database for the book titled \"Lord of the Rings\"\n    const book = {\n      title: 'Lord of the Rings',\n      description: 'The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil...',\n      author: 'J. R. R. Tolkien',\n    };\n\n    // Returning the book information as the response\n    callback(null, book);\n  },\n};\n\n// Creating a new gRPC server\nconst server = new grpc.Server();\n\n// Adding the BookService implementation to the server\nserver.addService(protoDescriptor.BookService.service, BookService);\n\n// Starting the server and binding it to a port\nconst port = 8080;\nserver.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure());\nserver.start();\nconsole.log(`gRPC server started on port ${port}`);\n")),(0,o.kt)("p",null,"The code above sets up a gRPC server to listen for incoming requests on port ",(0,o.kt)("strong",{parentName:"p"},"8080"),". When a client sends a request (a search for the 'Lord of the Rings' book) to the ",(0,o.kt)("inlineCode",{parentName:"p"},"BookSearch")," method, the server processes the request and responds with the 'Lord of the Rings' book information."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@grpc/proto-loader"},(0,o.kt)("strong",{parentName:"a"},"proto-loader"))," module loads and parses the protocol buffer definitions. The ",(0,o.kt)("strong",{parentName:"p"},"protoFile")," specifies the path to the protocol buffer definition file (book.proto). By using ",(0,o.kt)("strong",{parentName:"p"},"protoLoader.loadSync()"),", the contents of the protocol buffer definition file are loaded synchronously, returning a ",(0,o.kt)("strong",{parentName:"p"},"packageDefinition")," object."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"protoDescriptor")," utilizes ",(0,o.kt)("strong",{parentName:"p"},"grpc.loadPackageDefinition()")," to parse the loaded protocol buffer definition and generate code for gRPC communication."),(0,o.kt)("h3",{id:"step-3-1"},"Step 3"),(0,o.kt)("p",null,"After starting the server, you can generate client code using the same protocol buffer file (book.proto). This client code will provide a client object allowing you to request the server."),(0,o.kt)("p",null,"On the client side, you can create a gRPC client (client-side code) and use it to send a request to the server's ",(0,o.kt)("inlineCode",{parentName:"p"},"BookSearch")," method."),(0,o.kt)("p",null,"Here's an example of how this implementation works:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const grpc-js = require('@grpc/grpc-js');\nconst protoLoader = require('@grpc/proto-loader');\n\n// Loading the protocol buffer definition\nconst protoFile = 'book.proto';\nconst packageDefinition = protoLoader.loadSync(protoFile);\nconst protoDescriptor = grpc.loadPackageDefinition(packageDefinition);\n\n// Creating a new gRPC client\nconst client = new protoDescriptor.BookService(\n  'localhost:8080',\n  grpc.credentials.createInsecure()\n);\n\n// Creating a request object\nconst request = { search_query: 'Lord of the Rings' };\n\n// Sending the request to the server\nclient.BookSearch(request, (error, response) => {\n  if (error) {\n    console.error('Error:', error.message);\n    return;\n  }\n\n  // Handle the response\n  console.log('Book Information:');\n  console.log('Title:', response.title);\n  console.log('Description:', response.description);\n  console.log('Author:', response.author);\n});\n")),(0,o.kt)("p",null,"The code above creates a new gRPC client using the generated client code. The client is initialized with the server address (localhost:8080) and an insecure credential. A search query is then added to a request object with the field set to 'Lord of the Rings'. Finally, the gRPC client calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"BookSearch")," method, passing the request object and a callback function to handle the response."),(0,o.kt)("h2",{id:"how-the-features-of-rest-api-differ-from-grpc-api"},"How the features of REST API differ from gRPC API"),(0,o.kt)("p",null,"The architectural style of REST API differs from that of gRPC API due to their distinct features. The table below illustrates the differences:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Features")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"REST API")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"gRPC API")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Message Format")),(0,o.kt)("td",{parentName:"tr",align:null},"It primarily uses JSON, XML, and other text-based formats."),(0,o.kt)("td",{parentName:"tr",align:null},"It uses Protocol Buffers as the format for data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Caching capabilities")),(0,o.kt)("td",{parentName:"tr",align:null},"It supports caching using HTTP headers like Content-Type, Authorization, Content-Length, and others."),(0,o.kt)("td",{parentName:"tr",align:null},"There is no built-in caching mechanism for gRPC APIs, but external tools or libraries like gRPC client, NGINX, Redis, Memcached, etc., can be used for implementing caching.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"HTTP Protocol")),(0,o.kt)("td",{parentName:"tr",align:null},"It was built on HTTP/1.1, which utilizes HTTP methods (GET, POST, PUT, DELETE)."),(0,o.kt)("td",{parentName:"tr",align:null},"It transports data over the HTTP/2 protocol, establishing bidirectional communication between the client and the server.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Generation of Code")),(0,o.kt)("td",{parentName:"tr",align:null},"It facilitates the use of code generation tools and frameworks like OpenAPI and Swagger Codegen, making it easy and efficient to generate code."),(0,o.kt)("td",{parentName:"tr",align:null},"It uses Protobuf for code generation because it allows efficient and type-safe communication between different programming languages, ensuring interoperability.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Integration")),(0,o.kt)("td",{parentName:"tr",align:null},"Since it's based on HTTP, a widely adopted standard protocol, it is supported by various frameworks like Express.js, Laravel, Ruby on Rails, Django, ASP.NET, etc."),(0,o.kt)("td",{parentName:"tr",align:null},"Since Protocol Buffers (protobuf) is a language-agnostic message format, it supports various programming languages including Java, C++, Go, Python, Node.js, Ruby, PHP, and more.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Cross-browser compatibility")),(0,o.kt)("td",{parentName:"tr",align:null},"Due to its underlying HTTP protocol, it can be accessed by any browser that supports HTTP. E.g., Google Chrome, Opera, Safari, Mozilla Firefox, etc."),(0,o.kt)("td",{parentName:"tr",align:null},"As gRPC is primarily designed for communication between servers and clients and not tightly coupled to browser-based applications, it is not directly dependent on browsers.")))),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Finally, you've reached the end of the article, where you learned about the architectural style of REST APIs and gRPC APIs, including how they work and the differences between their distinctive features."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,"You may find the following resources useful:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://grpc.io/docs/"},"gRPC documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://protobuf.dev/overview/"},"Protocol Buffers documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.google.com/search?kgmid=/m/03nsxd&hl=en-NG&q=Representational+state+transfer&kgs=f491d5ba53c53c0c&shndl=0&source=sh/x/kp/1"},"REST APIs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/Protocols/rfc2616/rfc2616.html"},"HTTP/1.1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/HTTP/2"},"HTTP/2"))))}g.isMDXComponent=!0}}]);
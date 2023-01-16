"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[9580],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),c=a,v=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3739:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={title:"v1.5.0 Release",date:new Date("2022-07-04T16:57:00.000Z"),hide_table_of_contents:!1,author:"ruanwenjun",author_url:"https://github.com/ruanwenjun",author_image_url:"https://avatars.githubusercontent.com/u/22415594"},i=void 0,o={unversionedId:"release-notes/v1.5.0",id:"release-notes/v1.5.0",title:"v1.5.0 Release",description:"Feature",source:"@site/events/release-notes/v1.5.0.md",sourceDirName:"release-notes",slug:"/release-notes/v1.5.0",permalink:"/zh/events/release-notes/v1.5.0",draft:!1,tags:[],version:"current",frontMatter:{title:"v1.5.0 Release",date:"2022-07-04T16:57:00.000Z",hide_table_of_contents:!1,author:"ruanwenjun",author_url:"https://github.com/ruanwenjun",author_image_url:"https://avatars.githubusercontent.com/u/22415594"},sidebar:"tutorialSidebar",previous:{title:"v1.6.0 Release",permalink:"/zh/events/release-notes/v1.6.0"},next:{title:"v1.4.0 Release",permalink:"/zh/events/release-notes/v1.4.0"}},u={},s=[{value:"Feature",id:"feature",level:2},{value:"BugFix",id:"bugfix",level:2},{value:"Improvement",id:"improvement",level:2}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"feature"},"Feature"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support golang sdk"),(0,a.kt)("li",{parentName:"ul"},"Add consumer, producer, heartbeat"),(0,a.kt)("li",{parentName:"ul"},"Add msg dispatcher on rece msg from mesh server"),(0,a.kt)("li",{parentName:"ul"},"Add go client api"),(0,a.kt)("li",{parentName:"ul"},"Add fake server for go sdk test"),(0,a.kt)("li",{parentName:"ul"},"Add go sdk example"),(0,a.kt)("li",{parentName:"ul"},"Support nacos registry"),(0,a.kt)("li",{parentName:"ul"},"Add WatchDirectoryTask and add file watch listener and manager"),(0,a.kt)("li",{parentName:"ul"},"Add ttl default value when building BatchMessage"),(0,a.kt)("li",{parentName:"ul"},"Http request improve support request uri for http processors"),(0,a.kt)("li",{parentName:"ul"},"Support http protocol adaptor"),(0,a.kt)("li",{parentName:"ul"},"Support event bridge pub/sub"),(0,a.kt)("li",{parentName:"ul"},"Add the eventmesh metadata to nacos"),(0,a.kt)("li",{parentName:"ul"},"Add trace buried point for EventmeshTcpServer in eventmesh-runtime")),(0,a.kt)("h2",{id:"bugfix"},"BugFix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Could not find or load main class by test script"),(0,a.kt)("li",{parentName:"ul"},"Darwin operating system detection bug fix"),(0,a.kt)("li",{parentName:"ul"},"Fix LocalSubscribeEventProcessor json deserialize error"),(0,a.kt)("li",{parentName:"ul"},"Fix the key when removing item from ClientGroupMap")),(0,a.kt)("h2",{id:"improvement"},"Improvement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remove tool directory"),(0,a.kt)("li",{parentName:"ul"},"Lint the documentations with markdownlint"),(0,a.kt)("li",{parentName:"ul"},"Update bug_report.yml, fix typo"),(0,a.kt)("li",{parentName:"ul"},"Updated slack invite link in README"),(0,a.kt)("li",{parentName:"ul"},"Removed redundant code"),(0,a.kt)("li",{parentName:"ul"},"Optimized documentation docker script code blocks"),(0,a.kt)("li",{parentName:"ul"},"Upgrade spring libs & jackson-databind s version to fix CVEs issues"),(0,a.kt)("li",{parentName:"ul"},"Update ci.yml enable codecov"),(0,a.kt)("li",{parentName:"ul"},"Upgrade rocketmq libs version to fix CVEs"),(0,a.kt)("li",{parentName:"ul"},"Removed PropertyConst.java"),(0,a.kt)("li",{parentName:"ul"},"Remove some useless classes from eventmesh-common."),(0,a.kt)("li",{parentName:"ul"},"Clean up some useless constants and classes."),(0,a.kt)("li",{parentName:"ul"},"Add test code for module ","[eventmesh-trace-plugin]"),(0,a.kt)("li",{parentName:"ul"},"Add files via upload"),(0,a.kt)("li",{parentName:"ul"},"Transitively export the dependencies of ","[eventmesh-sdk-java]"," to other module"),(0,a.kt)("li",{parentName:"ul"},"Add the unit guidelines document and issue template"),(0,a.kt)("li",{parentName:"ul"},"Add the unit test document link and modify the unit test issue template"),(0,a.kt)("li",{parentName:"ul"},"Rewrite the English documentation"),(0,a.kt)("li",{parentName:"ul"},"Format the code in ",(0,a.kt)("inlineCode",{parentName:"li"},"eventmesh-sdk-java")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"eventmesh-common")),(0,a.kt)("li",{parentName:"ul"},"Rewrite README.md and fix errors in the documentation"),(0,a.kt)("li",{parentName:"ul"},"Delete unnecessary shadow plugin"),(0,a.kt)("li",{parentName:"ul"},"Add unit test for sdk java"),(0,a.kt)("li",{parentName:"ul"},"Delete already defined java-library plugin and make lombok compileOnly"),(0,a.kt)("li",{parentName:"ul"},"Adapt unit tests to JDK 8"),(0,a.kt)("li",{parentName:"ul"},"Guide of EventMesh Java SDK"),(0,a.kt)("li",{parentName:"ul"},"Avoid setting the value of the field by reflection in the unit test."),(0,a.kt)("li",{parentName:"ul"},"Add unit tests for EventMesh SDK for Java"),(0,a.kt)("li",{parentName:"ul"},"Remove unused methods in EventMesh-Connector-Api ",(0,a.kt)("inlineCode",{parentName:"li"},"Producer")," interface"),(0,a.kt)("li",{parentName:"ul"},"Update Chinese version of README.md"),(0,a.kt)("li",{parentName:"ul"},"Add new contributor doc that have been reorganized"),(0,a.kt)("li",{parentName:"ul"},"Update em host in example"),(0,a.kt)("li",{parentName:"ul"},"Update licenserrc.yaml to ignore go.sum"),(0,a.kt)("li",{parentName:"ul"},"Add http request doc instruction"),(0,a.kt)("li",{parentName:"ul"},"Add remote processors for event bridge"),(0,a.kt)("li",{parentName:"ul"},"Code optimization"),(0,a.kt)("li",{parentName:"ul"},"Registry plugin is disabled by default"),(0,a.kt)("li",{parentName:"ul"},"Optimize trace module in eventmesh"),(0,a.kt)("li",{parentName:"ul"},"Check whether the registry is enabled")),(0,a.kt)("p",null,"All pull request are ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/pulls?q=is%3Apr+milestone%3A1.5.0+is%3Aclosed"},"here")))}m.isMDXComponent=!0}}]);
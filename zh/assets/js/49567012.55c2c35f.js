"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[1272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={},l="Step 2: Runtime",i={unversionedId:"installation/runtime",id:"installation/runtime",title:"Step 2: Runtime",description:"EventMesh Runtime is the core component of Apache EventMesh (Incubating). It is the middleware that transmits events between producers and consumers. The documentation introduces the step to install and start the latest release of EventMesh Runtime in the local or test environment. The EventMesh Runtime requires a Linux-based system with JDK (Java Development Kit) 8+.",source:"@site/docs/installation/03-runtime.md",sourceDirName:"installation",slug:"/installation/runtime",permalink:"/zh/docs/installation/runtime",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/installation/03-runtime.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Step 1: Store (Docker)",permalink:"/zh/docs/installation/store-with-docker"},next:{title:"Step 2: Runtime (Docker)",permalink:"/zh/docs/installation/runtime-with-docker"}},s={},c=[{value:"1 Run on your local machine",id:"1-run-on-your-local-machine",level:2},{value:"1.1 Dependencies",id:"11-dependencies",level:3},{value:"1.2 Download Source Code",id:"12-download-source-code",level:3},{value:"1.3 Build and Load Plugins",id:"13-build-and-load-plugins",level:3},{value:"2 Remote deployment",id:"2-remote-deployment",level:2},{value:"2.1 Dependencies",id:"21-dependencies",level:3},{value:"2.2 Download",id:"22-download",level:3},{value:"2.3 Deploy",id:"23-deploy",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"step-2-runtime"},"Step 2: Runtime"),(0,o.kt)("p",null,"EventMesh Runtime is the core component of Apache EventMesh (Incubating). It is the middleware that transmits events between producers and consumers. The documentation introduces the step to install and start the latest release of EventMesh Runtime in the local or test environment. The EventMesh Runtime requires a Linux-based system with JDK (Java Development Kit) 8+. "),(0,o.kt)("p",null,"Here, we take JDK 8 as an example. JDK 8 could be installed with the system package manager or the ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/openjdk"},"openjdk:8-jdk")," Docker image."),(0,o.kt)("h2",{id:"1-run-on-your-local-machine"},"1 Run on your local machine"),(0,o.kt)("h3",{id:"11-dependencies"},"1.1 Dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"64-bit OS\uff0cwe recommend Linux/Unix;\n64-bit JDK 1.8+;\nGradle 7.0+, we recommend 7.0.*;\n4g+ available disk to deploy eventmesh-store;\nIf you choose standalone mode, you could skip this file and go to the next step: Start Eventmesh-Runtime; if not, you could choose RocketMQ as the store layer.\n")),(0,o.kt)("h3",{id:"12-download-source-code"},"1.2 Download Source Code"),(0,o.kt)("p",null,"Gradle is the build automation tool used by Apache EventMesh (Incubating). Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/installation.html"},"offical guide")," to install the latest release of Gradle."),(0,o.kt)("p",null,"Download and extract the source code of the latest release from ",(0,o.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh download"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"wget https://dlcdn.apache.org/incubator/eventmesh/{version}-incubating/apache-eventmesh-{version}-incubating-source.tar.gz\n\ntar -xvzf apache-eventmesh-1.5.0-incubating-source.tar.gz\n")),(0,o.kt)("p",null,"Build the source code with Gradle."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"cd apache-eventmesh-1.5.0-incubating-source\ngradle clean dist\n")),(0,o.kt)("p",null,"Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," to change the configuration (e.g. TCP port, client blacklist) of EventMesh Runtime."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"cd dist\nvim conf/eventmesh.properties\n")),(0,o.kt)("p",null,"Execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"start.sh")," script to start the EventMesh Runtime server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"bash bin/start.sh\n")),(0,o.kt)("h3",{id:"13-build-and-load-plugins"},"1.3 Build and Load Plugins"),(0,o.kt)("p",null,"Apache EventMesh (Incubating) introduces the SPI (Service Provider Interface) mechanism, which enables EventMesh to discover and load the plugins at runtime. The plugins could be installed with these methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gradle Dependencies: Declare the plugins as the build dependencies in ",(0,o.kt)("inlineCode",{parentName:"li"},"eventmesh-starter/build.gradle"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gradle"},'dependencies {\n   implementation project(":eventmesh-runtime")\n\n   // Example: Load the RocketMQ plugin\n   implementation project(":eventmesh-connector-plugin:eventmesh-connector-rocketmq")\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Plugin directory: EventMesh loads the plugins in the ",(0,o.kt)("inlineCode",{parentName:"li"},"dist/plugin")," directory based on ",(0,o.kt)("inlineCode",{parentName:"li"},"eventmesh.properties"),". The ",(0,o.kt)("inlineCode",{parentName:"li"},"installPlugin")," task of Gradle builds and moves the plugins into the ",(0,o.kt)("inlineCode",{parentName:"li"},"dist/plugin")," directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"gradle installPlugin\n")),(0,o.kt)("h2",{id:"2-remote-deployment"},"2 Remote deployment"),(0,o.kt)("h3",{id:"21-dependencies"},"2.1 Dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"64-bit OS\uff0cwe recommend Linux/Unix\uff1b\n64-bit JDK 1.8+;\nGradle 7.0+, we recommend 7.0.*\n4g+ available disk to deploy eventmesh-store\nIf you choose standalone mode, you could skip this file and go to the next step: Start Eventmesh-Runtime; if not, you could choose RocketMQ as the store layer.\n")),(0,o.kt)("h3",{id:"22-download"},"2.2 Download"),(0,o.kt)("p",null,"Download and extract the executable binaries of the latest release from ",(0,o.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh download"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"wget https://github.com/apache/incubator-eventmesh/releases/download/v1.4.0/apache-eventmesh-1.4.0-incubating-bin.tar.gz\n\ntar -xvzf apache-eventmesh-1.5.0-incubating-bin.tar.gz\n")),(0,o.kt)("h3",{id:"23-deploy"},"2.3 Deploy"),(0,o.kt)("p",null,"Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," to change the configuration (e.g. TCP port, client blacklist) of EventMesh Runtime. The executable binaries contain all plugins in the bundle, thus there's no need to build them from source code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"cd apache-eventmesh-1.5.0-incubating\nvim conf/eventmesh.properties\n")),(0,o.kt)("p",null,"Execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"start.sh")," script to start the EventMesh Runtime server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"bash bin/start.sh\n")))}u.isMDXComponent=!0}}]);
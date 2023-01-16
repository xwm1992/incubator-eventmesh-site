"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction to EventMesh","href":"/zh/docs/introduction","docId":"introduction"},{"type":"link","label":"Development Roadmap","href":"/zh/docs/roadmap","docId":"roadmap"},{"type":"category","label":"Installation and Deployment","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Step 1: Store","href":"/zh/docs/installation/store","docId":"installation/store"},{"type":"link","label":"Step 1: Store (Docker)","href":"/zh/docs/installation/store-with-docker","docId":"installation/store-with-docker"},{"type":"link","label":"Step 2: Runtime","href":"/zh/docs/installation/runtime","docId":"installation/runtime"},{"type":"link","label":"Step 2: Runtime (Docker)","href":"/zh/docs/installation/runtime-with-docker","docId":"installation/runtime-with-docker"},{"type":"link","label":"Step 3: Run our demos","href":"/zh/docs/installation/demo","docId":"installation/demo"}]},{"type":"category","label":"EventMesh SDK for Java","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"HTTP Protocol","href":"/zh/docs/sdk-java/http","docId":"sdk-java/http"},{"type":"link","label":"TCP Protocol","href":"/zh/docs/sdk-java/tcp","docId":"sdk-java/tcp"},{"type":"link","label":"gRPC Protocol","href":"/zh/docs/sdk-java/grpc","docId":"sdk-java/grpc"}]},{"type":"category","label":"Metrics and Tracing","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Observe Metrics with Prometheus","href":"/zh/docs/metrics-tracing/prometheus","docId":"metrics-tracing/prometheus"},{"type":"link","label":"Collect Trace with Zipkin","href":"/zh/docs/metrics-tracing/zipkin","docId":"metrics-tracing/zipkin"}]},{"type":"category","label":"Design Document","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"EventMesh Workflow","href":"/zh/docs/design-document/workflow","docId":"design-document/workflow"},{"type":"link","label":"EventMesh Runtime Protocol","href":"/zh/docs/design-document/runtime-protocol","docId":"design-document/runtime-protocol"},{"type":"link","label":"EventMesh Stream","href":"/zh/docs/design-document/stream","docId":"design-document/stream"},{"type":"link","label":"EventMesh Schema Registry (OpenSchema)","href":"/zh/docs/design-document/schema-registry","docId":"design-document/schema-registry"},{"type":"link","label":"EventMesh Metrics (OpenTelemetry and Prometheus)","href":"/zh/docs/design-document/metrics-export","docId":"design-document/metrics-export"},{"type":"link","label":"Distributed Tracing","href":"/zh/docs/design-document/tracing","docId":"design-document/tracing"},{"type":"link","label":"CloudEvents Integration","href":"/zh/docs/design-document/cloudevents","docId":"design-document/cloudevents"},{"type":"link","label":"Service Provider Interface","href":"/zh/docs/design-document/spi","docId":"design-document/spi"}]}]},"docs":{"design-document/cloudevents":{"id":"design-document/cloudevents","title":"CloudEvents Integration","description":"Introduction","sidebar":"tutorialSidebar"},"design-document/metrics-export":{"id":"design-document/metrics-export","title":"EventMesh Metrics (OpenTelemetry and Prometheus)","description":"Introduction","sidebar":"tutorialSidebar"},"design-document/runtime-protocol":{"id":"design-document/runtime-protocol","title":"EventMesh Runtime Protocol","description":"TCP Protocol","sidebar":"tutorialSidebar"},"design-document/schema-registry":{"id":"design-document/schema-registry","title":"EventMesh Schema Registry (OpenSchema)","description":"Overview of Schema and Schema Registry","sidebar":"tutorialSidebar"},"design-document/spi":{"id":"design-document/spi","title":"Service Provider Interface","description":"Introduction","sidebar":"tutorialSidebar"},"design-document/stream":{"id":"design-document/stream","title":"EventMesh Stream","description":"Overview of Event Streaming","sidebar":"tutorialSidebar"},"design-document/tracing":{"id":"design-document/tracing","title":"Distributed Tracing","description":"Overview of OpenTelemetry","sidebar":"tutorialSidebar"},"design-document/workflow":{"id":"design-document/workflow","title":"EventMesh Workflow","description":"Business Problem","sidebar":"tutorialSidebar"},"installation/demo":{"id":"installation/demo","title":"Step 3: Run our demos","description":"Maven Central","sidebar":"tutorialSidebar"},"installation/runtime":{"id":"installation/runtime","title":"Step 2: Runtime","description":"EventMesh Runtime is the core component of Apache EventMesh (Incubating). It is the middleware that transmits events between producers and consumers. The documentation introduces the step to install and start the latest release of EventMesh Runtime in the local or test environment. The EventMesh Runtime requires a Linux-based system with JDK (Java Development Kit) 8+.","sidebar":"tutorialSidebar"},"installation/runtime-with-docker":{"id":"installation/runtime-with-docker","title":"Step 2: Runtime (Docker)","description":"The documentation introduces the steps to install the latest release of EventMesh Runtime with Docker and connect to Apache RocketMQ. It\'s recommended to use a Linux-based system with Docker Engine. Please follow the Docker tutorial to get familiar with the basic concepts (registry, volume, etc.) and commands of Docker.","sidebar":"tutorialSidebar"},"installation/store":{"id":"installation/store","title":"Step 1: Store","description":"Dependencies","sidebar":"tutorialSidebar"},"installation/store-with-docker":{"id":"installation/store-with-docker","title":"Step 1: Store (Docker)","description":"Dependencies","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"Introduction to EventMesh","description":"CI status","sidebar":"tutorialSidebar"},"metrics-tracing/prometheus":{"id":"metrics-tracing/prometheus","title":"Observe Metrics with Prometheus","description":"Prometheus","sidebar":"tutorialSidebar"},"metrics-tracing/zipkin":{"id":"metrics-tracing/zipkin","title":"Collect Trace with Zipkin","description":"Zipkin","sidebar":"tutorialSidebar"},"roadmap":{"id":"roadmap","title":"Development Roadmap","description":"The development roadmap of Apache EventMesh (Incubating) is an overview of the planned features and milestones involved in the next several releases. The recent features and bug fixes are documented in the release notes. The order of the features listed below doesn\'t correspond to their priorities.","sidebar":"tutorialSidebar"},"sdk-java/grpc":{"id":"sdk-java/grpc","title":"gRPC Protocol","description":"EventMesh SDK for Java implements the gRPC producer and consumer of synchronous, asynchronous, and broadcast messages. Both the producer and consumer require an instance of EventMeshGrpcClientConfig class that specifies the configuration of EventMesh gRPC client. The liteEventMeshAddr, userName, and password fields should match the eventmesh.properties file of EventMesh runtime.","sidebar":"tutorialSidebar"},"sdk-java/http":{"id":"sdk-java/http","title":"HTTP Protocol","description":"EventMesh SDK for Java implements the HTTP producer and consumer of asynchronous messages. Both the producer and consumer require an instance of EventMeshHttpClientConfig class that specifies the configuration of EventMesh HTTP client. The liteEventMeshAddr, userName, and password fields should match the eventmesh.properties file of EventMesh runtime.","sidebar":"tutorialSidebar"},"sdk-java/tcp":{"id":"sdk-java/tcp","title":"TCP Protocol","description":"EventMesh SDK for Java implements the TCP producer and consumer of synchronous, asynchronous, and broadcast messages. Both the producer and consumer require an instance of EventMeshTCPClientConfig class that specifies the configuration of EventMesh gRPC client. The host and port fields should match the eventmesh.properties file of EventMesh runtime.","sidebar":"tutorialSidebar"}}}')}}]);
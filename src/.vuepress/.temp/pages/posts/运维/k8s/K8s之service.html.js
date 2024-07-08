export const data = JSON.parse("{\"key\":\"v-3d6822ac\",\"path\":\"/posts/%E8%BF%90%E7%BB%B4/k8s/K8s%E4%B9%8Bservice.html\",\"title\":\"K8s之service\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"K8s之service\",\"icon\":\"circle-info\",\"description\":\"K8s之service 1、官方解释: Kubernetes Service定义了这样一种抽象： Service是一种可以访问 Pod逻辑分组的策略， Service通常是通过 Label Selector访问 Pod组。 Service能够提供负载均衡的能力，但是在使用上有以下限制：只提供 4 层负载均衡能力，而没有 7 层功能，但有时我们可能需要更多的匹配规则来转发请求，这点上 4 层负载均衡是不支持的 通俗来说：pod Ip是不固定的，集群后会随机均衡落在每个node上，所以需要统一一个入口，如果该服务需要负载均衡，那就是定义为service, service是一个服务多个 pod的集合。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/chenweiquan-red/posts/%E8%BF%90%E7%BB%B4/k8s/K8s%E4%B9%8Bservice.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"WQ-知识库\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"K8s之service\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"K8s之service 1、官方解释: Kubernetes Service定义了这样一种抽象： Service是一种可以访问 Pod逻辑分组的策略， Service通常是通过 Label Selector访问 Pod组。 Service能够提供负载均衡的能力，但是在使用上有以下限制：只提供 4 层负载均衡能力，而没有 7 层功能，但有时我们可能需要更多的匹配规则来转发请求，这点上 4 层负载均衡是不支持的 通俗来说：pod Ip是不固定的，集群后会随机均衡落在每个node上，所以需要统一一个入口，如果该服务需要负载均衡，那就是定义为service, service是一个服务多个 pod的集合。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Durant\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"K8s之service\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Durant\\\",\\\"url\\\":\\\"https://www.wqknowledge.top/\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":1.3,\"words\":390},\"filePathRelative\":\"posts/运维/k8s/K8s之service.md\",\"excerpt\":\"<h1> K8s之service</h1>\\n<h4> 1、官方解释:</h4>\\n<p>Kubernetes Service定义了这样一种抽象： Service是一种可以访问 Pod逻辑分组的策略， Service通常是通过 Label Selector访问 Pod组。<br>\\nService能够提供负载均衡的能力，但是在使用上有以下限制：只提供 4 层负载均衡能力，而没有 7 层功能，但有时我们可能需要更多的匹配规则来转发请求，这点上 4 层负载均衡是不支持的</p>\\n<p>通俗来说：pod Ip是不固定的，集群后会随机均衡落在每个node上，所以需要统一一个入口，如果该服务需要负载均衡，那就是定义为service, service是一个服务多个<br>\\npod的集合。</p>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

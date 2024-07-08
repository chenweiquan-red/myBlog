export const data = JSON.parse("{\"key\":\"v-39f91aea\",\"path\":\"/posts/java/jvm/jvm%E7%AE%80%E4%BB%8B.html\",\"title\":\"Jvm简介\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Jvm简介\",\"icon\":\"fire\",\"category\":[\"jvm\"],\"tag\":[\"Jvm简介\"],\"description\":\"1、JVM内存分布（1.8） 1、内存模型 程序计数器：保存当前线程执行的字节码位置 堆：存放对象的实例，没有空间，会抛出OOM异常 栈、虚拟机栈：存放局部变量，动态链接，操作栈，方法出口等信息，调用方法都会创建栈 本地方法栈：和虚拟机栈基本相同，但是本地是指native方法 以下两个不在JVM虚拟机中 方法区：又称非堆区，存储类信息，常量，静态变量等数 本地内存：分为元空间和直接内存 元空间：1.7的永久代和1.8的元空间，是方法区的一种实现 2、GC\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/chenweiquan-red/posts/java/jvm/jvm%E7%AE%80%E4%BB%8B.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"WQ-知识库\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Jvm简介\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"1、JVM内存分布（1.8） 1、内存模型 程序计数器：保存当前线程执行的字节码位置 堆：存放对象的实例，没有空间，会抛出OOM异常 栈、虚拟机栈：存放局部变量，动态链接，操作栈，方法出口等信息，调用方法都会创建栈 本地方法栈：和虚拟机栈基本相同，但是本地是指native方法 以下两个不在JVM虚拟机中 方法区：又称非堆区，存储类信息，常量，静态变量等数 本地内存：分为元空间和直接内存 元空间：1.7的永久代和1.8的元空间，是方法区的一种实现 2、GC\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Durant\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Jvm简介\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Jvm简介\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Durant\\\",\\\"url\\\":\\\"https://www.wqknowledge.top/\\\"}]}\"]]},\"headers\":[{\"level\":3,\"title\":\"1、JVM内存分布（1.8）\",\"slug\":\"_1、jvm内存分布-1-8\",\"link\":\"#_1、jvm内存分布-1-8\",\"children\":[]}],\"readingTime\":{\"minutes\":3.81,\"words\":1142},\"filePathRelative\":\"posts/java/jvm/jvm简介.md\",\"excerpt\":\"<h3> 1、JVM内存分布（1.8）</h3>\\n<p>1、内存模型</p>\\n<pre><code>程序计数器：保存当前线程执行的字节码位置\\n堆：存放对象的实例，没有空间，会抛出OOM异常\\n栈、虚拟机栈：存放局部变量，动态链接，操作栈，方法出口等信息，调用方法都会创建栈\\n本地方法栈：和虚拟机栈基本相同，但是本地是指native方法\\n\\n以下两个不在JVM虚拟机中\\n\\n方法区：又称非堆区，存储类信息，常量，静态变量等数\\n本地内存：分为元空间和直接内存\\n元空间：1.7的永久代和1.8的元空间，是方法区的一种实现\\n</code></pre>\\n<p><img src=\\\"https://wqknowledge.oss-cn-shenzhen.aliyuncs.com/blog/jvm2.jpg\\\" alt=\\\"\\\" loading=\\\"lazy\\\"><br>\\n2、GC</p>\",\"autoDesc\":true}")

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

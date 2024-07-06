<template><div><h1 id="_1、jvm堆内存" tabindex="-1"><a class="header-anchor" href="#_1、jvm堆内存" aria-hidden="true">#</a> 1、Jvm堆内存</h1>
<h3 id="_1-1、内存参数设置" tabindex="-1"><a class="header-anchor" href="#_1-1、内存参数设置" aria-hidden="true">#</a> 1.1、内存参数设置</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>jvm 内存主要是堆内存，存储对象。堆内存主要由新生代和老年代组成。
新生代：Eden, S0(from), S1(to)
老年代：Old/Tenured

新生代老年代默认比例：-XX：NewRatio = 2，表示新生代占1，老年代占2
新生代中E,S,S 大概比例为：6:1:1（不一定，会自动调整）

常用的JVM设置参数：Xms（初始）,Xmx（最大） 主要是指堆内存的空间。
一般初始：1/64物理内存
一般最大：1/4物理内存
注意：生产一般会设置成一样的，主要是缓解内存伸缩带来额外的开销。


Eden发生YoungGC、MinorGC,
第一次发生GC，对象由Eden回收，没有回收到的就移动到S0（对象计数1）

第二次发生GC，对象从Eden/S0移动到 S1，这时候S0、Eden没有数据，S1有数据（对象计数 + 1）

第三次发生GC，对象从S1移动到S0，计数+1

...
次数达到15次就进入Old区

Old区满，发生FullGc

FullGc后内存还是不够发生OOM
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://wqknowledge.oss-cn-shenzhen.aliyuncs.com/java/jvmesso.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_1-2、对象分配内存流程" tabindex="-1"><a class="header-anchor" href="#_1-2、对象分配内存流程" aria-hidden="true">#</a> 1.2、对象分配内存流程</h3>
<figure><img src="https://wqknowledge.oss-cn-shenzhen.aliyuncs.com/java/jvm流程图.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="_2、jvm常用命令" tabindex="-1"><a class="header-anchor" href="#_2、jvm常用命令" aria-hidden="true">#</a> 2、Jvm常用命令</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">1</span>、jps 查看进程
<span class="token number">2</span>、jstat
 jstat <span class="token parameter variable">-gc</span> <span class="token number">15744</span> <span class="token comment">## 查看GC信息，Jvm内存占用情况</span>

<span class="token number">3</span>、jmap
 <span class="token comment">## 打印的信息分别为：共享对象的起始地址、映射大小、共享对象路径的全程。</span>
 jmap <span class="token number">15744</span> <span class="token comment">## 主要用于打印指定java进程的共享对象内存映射或堆内存细节 </span>
 
 jmap <span class="token parameter variable">-heap</span> pid  <span class="token comment">## 查看堆使用情况</span>
 map <span class="token parameter variable">-histo</span> pid  <span class="token comment">## 查看堆中对象数量和大小</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



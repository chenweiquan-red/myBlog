---
title: Netty 进阶
icon: fire
category:
  - netty
tag:
  - netty 进阶
---

### netty进阶

#### 1、基础参数设置，bossGroup,workGroup,businessGroup(handlerGroup)
![](https://wqknowledge.oss-cn-shenzhen.aliyuncs.com/netty/workAndBossGroup.png)

```text
bossGroup： 负责创建监听连接，默认核心数 * 2， ex: bossGroup = new NioEventLoopGroup();
workGroup:  负责建立连接，默认核心数 * 2，ex: new NioEventLoopGroup();
eventExecutorGroup/businessGroup/handlerGroup : 线程数需要自己设置
```

#### 1.1、案例1，不规范使用group/创建group 导致内存溢出
    比如：每次初始化连接都创建线程组，理论上是创建全局线程组，其他的连接复用
    ps:OOM内存溢出，Memory Leak内存泄漏，无法回收对象。ML最终会OOM
![](https://wqknowledge.oss-cn-shenzhen.aliyuncs.com/netty/eventExecutorGroupErr.png)

#### 1.2、案例2，netty 客户端发生内存泄漏
通过MAT分析泄漏时的dump文件，分析后发现主要是NioEventLoop线程中的WriteAndFlush发生内存溢出
WriteAndFlush 是因为创建的发送队列是全局的，发送速度缓慢，导致大量的发送数据堆积导致溢出。


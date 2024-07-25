---
title: visualVm
icon: fire
category:
  - 工具
tag:
  - visualvm 分析工具
---

# visualVm

1、JDK14起，已不再集成visualvm，需要自己去visualvm官网下载。

下载地址：https://visualvm.github.io/

2、下载完成后，在etc文件夹下找到visualvm.conf文件，打开，并设置jdk路径。
![img.png](https://wqknowledge.oss-cn-shenzhen.aliyuncs.com/jvm/visualvmConfig.png)

### visualVm 远程调试
```shell
java \
#指定JMX RMI (Remote Method Invocation) 通信所使用的端口号
-Dcom.sun.management.jmxremote.rmi.port=1232 \
#指定JMXMP (JMX Messaging Protocol) 通信所使用的端口号
-Dcom.sun.management.jmxremote.port=1232 \
#不使用ssl
-Dcom.sun.management.jmxremote.ssl=false \
#不启用身份认证
-Dcom.sun.management.jmxremote.authenticate=false \
-jar ${你的jar包名}.jar

```
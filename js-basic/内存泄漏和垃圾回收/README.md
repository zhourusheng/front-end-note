# JS 中的垃圾回收和内存泄漏

## 前言

程序运行需要内存。所谓的内存泄漏，简单来说就是不再用到的内存没有得到及时的释放。为了更好避免内存泄漏，我们先介绍 Javascript 垃圾回收机制。

## 一、垃圾回收的必要性

> 由于字符串、对象和数组没有固定大小，所有当他们的大小已知时，才能对他们进行动态的存储分配。JavaScript程序每次创建字符串、数组或对象时，解释器都必须分配内存来存储那个实体。只要像这样动态地分配了内存，最终都要释放这些内存以便他们能够被再用，否则，JavaScript的解释器将会消耗完系统中所有可用的内存，造成系统崩溃。

Javascript 垃圾回收机制很简单，找出不再使用的变量

```js
var a = '浪里行舟'
var b = '前端工匠'
var a = b // 重写 a
```

这段代码运行之后，“浪里行舟”这个字符串失去了引用（之前是被a引用），系统检测到这个事实之后，就会释放该字符串的存储空间以便这些空间可以被再利用。


## 二、垃圾回收机制

垃圾回收有两种方法：**标记清除** **引用计数**。  引用计数不太常用，标记清除最为常用

### 1. 标记清除

### 2. 引用计数

## 三、4 种常见的内存泄漏

一、意外的全局变量

### 未声明的变量

### 使用 this 创建的对象

二、被遗忘的计时器或回调函数

### 定时器

### 对象观察者

三、脱离 DOM 的引用

四、闭包


## 四、内存泄漏的识别方法


## 五、垃圾回收的使用场景优化



## 参考资料
[JavaScript 中的垃圾回收和内存泄漏](https://github.com/ljianshu/Blog/issues/65)
[JavaScript 进阶-常见内存泄露及如何避免](https://mp.weixin.qq.com/s/NQeIovbnZUKpz8ly7GW2_A)
[请别忽略 JavaScript 内存泄漏问题](https://mp.weixin.qq.com/s?__biz=MjM5MDc4MzgxNA==&mid=2458454327&idx=1&sn=302185e45a6aaa8a7ed29a640bc002d2&chksm=b1c2291e86b5a008dbf5f1e42be82fa476d81c78eaa7a6604a16953afcf12c9928e0b15fc730&scene=0&xtrack=1#rd)

# EventTarget 接口

事件的本质是程序各组成部分之间的一种通信方式，也是异步编程的一种实现。
DOM 支持大量的事件，本章开始介绍 DOM 的事件编程。

## 1. 概述

DOM 的事件操作（监听和触发），都定义在 `EventTarget` 接口。所有节点对象都部署了这个接口，
其他一些需要事件通信的浏览器内置对象（比如，`XMLHttpRequest`、`AudioNode`、`AudioContext`）也部署了这个接口。

该接口主要提供三个实例方法。

* `addEventListener`: 绑定事件监听函数
* `removeEventListener`: 移除事件监听函数
* `dispatchEvent`: 触发事件

## 2. EventTarget.addEventListener()

## 3. EventTarget.removeEventListener()

## 4. EventTarget.dispatchEvent()


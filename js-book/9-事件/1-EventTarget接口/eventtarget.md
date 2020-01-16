# EventTarget 接口

事件的本质是程序各组成部分之间的一种通信方式，也是异步编程的一种实现。
DOM 支持大量的事件，本章开始介绍 DOM 的事件编程。

## 1. 概述

DOM 的事件操作（监听和触发），都定义在 `EventTarget` 接口。所有节点对象都部署了这个接口，
其他一些需要事件通信的浏览器内置对象（比如，`XMLHttpRequest`、`AudioNode`、`AudioContext`）也部署了这个接口。

该接口主要提供三个实例方法。

- `addEventListener`: 绑定事件监听函数
- `removeEventListener`: 移除事件监听函数
- `dispatchEvent`: 触发事件

## 2. EventTarget.addEventListener()

`EventTarget.addEventListener()` 用于当前节点或对象上，定义一个特定事件监听函数。一旦这个事件发生，就会执行监听函数。该方法没有返回值。

`target.addEventListener(type, listener[, useCapture])`

该方法接受三个参数。

- `type`: 事件名称，大小写敏感。
- `listener`: 监听函数。事件发生时，会调用该监听函数。
- `useCapture`: 布尔值，表示监听函数是否在 捕获阶段(capture) 触发，默认false（监听函数只在 冒泡阶段 被触发）。该参数可选

## 3. EventTarget.removeEventListener()

## 4. EventTarget.dispatchEvent()

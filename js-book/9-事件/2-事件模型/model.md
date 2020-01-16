# 事件模型

## 1. 监听函数

浏览器的事件模型，就是通过监听函数(listener)对事件做出反应。

### 1.1 HTML 的 on- 属性

HTML 语言允许在元素的属性中，直接定义某些事件的监听代码。

```html
<body onload="doSomething()">
  <div onclick="console.log('触发事件')"></div>
</body>
```

使用这个方法指定的监听代码，只会在 冒泡阶段 触发。

```html
<div onclick="console.log(2)">
  <button onclick="console.log(1)">点击</button>
</div>
```

### 1.2 元素节点的事件属性

### 1.3 EventTarget.addEventListener()

### 1.4 小结

## 2.this 的指向

## 3.事件的传播

## 4.事件的代理

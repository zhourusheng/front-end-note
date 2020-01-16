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

监听函数内的 `this` 指向触发事件的那个元素节点。

## 3.事件的传播

一个事件发生后，会在子元素和父元素之间传播（propagation）。这种传播分成三个阶段。

- **第一阶段**：从 `window` 对象传导到目标节点（上层传到底层），称为 **“捕获阶段”**（capture phase）。
- **第二阶段**：在目标节点上触发，称为 **“目标阶段”** （target phase）。
- **第三阶段**：从目标节点传导回 `window` 对象（从底层传回上层），称为 **“冒泡阶段”**（bubbling phase）。

```html
<div>
  <p>点击</p>
</div>
```

```js
var phases = {
  1: 'capture 捕获',
  2: 'target 目标',
  3: 'bubble 冒泡'
}

var div = document.querySelector('div')
var p = document.querySelector('p')

// addEventListener 第三个参数为 true : 在 捕获阶段(capture) 触发事件
div.addEventListener('click', callback, true)
p.addEventListener('click', callback, true)

// addEventListener 第三个参数为 false（默认值） : 在 冒泡阶段(bubble) 触发事件
div.addEventListener('click', callback, false)
p.addEventListener('click', callback, false)

function callback(event) {
  var tag = event.currentTarget.tagName
  var phase = phases[event.eventPhase]
  console.log("Tag: '" + tag + "'. EventPhase: '" + phase + "'")
}

// 点击后执行结果
// Tag: 'DIV'. EventPhase: 'capture 捕获'
// Tag: 'P'. EventPhase: 'target 目标'
// Tag: 'P'. EventPhase: 'target 目标'
// Tag: 'DIV'. EventPhase: 'bubble 冒泡'
```

上面代码表示，`click` 事件被触发了四次：`<div>`节点的捕获阶段和冒泡阶段各 1 次，`<p>`节点的目标阶段触发了 2 次。

* 捕获阶段：事件从`<div>`向`<p>`传播时，触发`<div>`的 click 事件；
* 目标阶段：事件从`<div>`到达`<p>`时，触发`<p>`的 click 事件；
* 冒泡阶段：事件从`<p>`传回`<div>`时，再次触发`<div>`的 click 事件。

其中，<p>节点有两个监听函数（`addEventListener` 方法第三个参数的不同，会导致绑定两个监听函数），因此它们都会因为 `click` 事件触发一次。所以，`<p>`会在 `target` 阶段有两次输出。

注意，浏览器总是假定 `click` 事件的目标节点，就是点击位置嵌套最深的那个节点（本例是`<div>`节点里面的`<p>`节点）。所以，`<p>`节点的捕获阶段和冒泡阶段，都会显示为 `target` 阶段。

事件传播的最上层对象是 `window`，接着依次是` document`，`html（document.documentElement）`和 `body（document.body）`。
也就是说，上例的事件传播顺序，在捕获阶段依次为 `window`、`document`、`html`、`body`、`div`、`p`，在冒泡阶段依次为 `p`、`div`、`body`、`html`、`document`、`window`。

## 4.事件的代理

由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上
由父节点的监听函数统一处理多个子元素的事件。这种方法叫做 事件代理(delegation)


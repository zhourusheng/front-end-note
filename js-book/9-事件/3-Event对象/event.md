# Event 对象

## 1.概述

事件发生后，会产生一个事件对象，作为参数传给监听函数。浏览器原生提供一个 `Event` 对象，
所有的事件都是这个对象的实例，或者说继承了 `Event.prototype` 对象。

`Event` 对象本身就是一个构造函数，可以用来生成新的实例。

## 2. 实例属性

### 2.1 Event.bubbles，Event.eventPhase

### 2.2 Event.cancelable，Event.cancelBubble，Event.defaultPrevented

### 2.3 Event.currentTarget，Event.target

### 2.4 Event.type

### 2.5 Event.timeStamp

### 2.6 Event.isTrusted

### 2.7 Event.detail


## 3. 实例方法

### 3.1 Event.preventDefault()

`Event.preventDefault`方法取消浏览器对当前事件的默认行为。
比如点击链接后，浏览器默认会跳转到另一个页面，使用这个方法以后，就不会跳转了

注意，该方法只是取消事件对当前元素的默认影响，不会阻止事件的传播。
如果要阻止传播，可以使用 `stopPropagation()` 或 `stopImmediatePropagation()`方法。

### 3.2 Event.stopPropagation()

`stopPropagation()`方法阻止事件在 DOM 中继续传播，防止再触发定义在别的节点上的监听函数，
但是不包括在当前节点上其他的事件监听函数。

### 3.3 Event.stopImmediatePropagation()

`Event.stopImmediatePropagation` 方法阻止同一个事件的其他监听函数被调用，不管监听函数定义在当前节点还是其他节点。
也就是说，该方法阻止事件的传播，比 `Event.stopPropagation()` 更彻底。

### 3.4 Event.composedPath()

`Event.composedPath()` 返回一个数组，成员是事件的最底层节点和依次冒泡经过的所有上层节点。
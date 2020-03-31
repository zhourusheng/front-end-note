# Vue 2.0 和 3.0 双向数据绑定原理浅析

## 核心：

首先在 JavaScript 中，如何侦测一个对象的变化？

目前有两种方法：一是使用 Object.defineProperty、二是使用 ES6 的 Proxy，这就是进行数据劫持或数据代理。

Vue 2.0 响应式的核心是利用 ES5 `Object.defineProperty()`, Vue 3.0 会改成 ES6 `Proxy`

我们先从这两个方法最基础的用法讲起,再基于这两个方法简单实现一个双向数据绑定。

（此处参考阮一峰老师《JavaScript 教程》《ECMAScript 6 入门》，见文章参考）

### 方法一：Object.defineProperty

`Object.defineProperty()`语法：

> - `Object.defineProperty()` 方法允许通过属性描述对象，定义或修改一个属性，然后返回修改后的对象，它的用法如下:
> - `Object.defineProperty(object, propertyName, attributesObject)`

例子：

```js
var obj = Object.defineProperty({}, 'p', {
  // 存值函数 setter
  set: function(val) {
    console.log('setter: ' + val)
  },
  // 取值函数 getter
  get: function() {
    return 'getter'
  }
})

obj.p // getter  取值的时候触发 getter
obj.p = 123 // setter: 123  存值的时候触发 setter
```

一旦利用对目标对象（`obj`）的目标属性（`p`）定义了存取器, 那么存（`触发setter`）取（`触发getter`）的时候，都将执行对应的函数。


### 方法二 ES6 Proxy

`Proxy` 是 ES6 一个新特性。`Proxy` 代理的是整个对象，而不是对象的某个属性，因此不同于 `Object。defineProperty` 必须遍历对象的每个属性，`Proxy` 只需要做一层代理就可以监听同级结构下的所有属性变化，当然对于深层结构，递归还是需要进行的。此外 **Proxy 支持代理数组的变化**

简单来说，Proxy 就是 Object.defineProperty 的全方位加强版

> ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例
> `var proxy = new Proxy(target, handler)`
> 



## 简单实现双向数据绑定

### 方法一：Object.defineProperty

```js
const input = document.getElementById('input')
const text = document.getElementById('text')

// 被监听的对象
let data = {
  value: ''
}

// 传入要监听的属性 value, 进行数据劫持
Object.defineProperty(data, 'value', {
  // 定义 setter 派发更新
  set: function(val) {
    // 当被监听、劫持的属性 data.value 发生改变时，就会触发 setter 去更新页面的值
    text.innerHTML = val
    input.value = val
  },
  // 定义 getter 依赖收集
  get: function() {
    // 当读取 data.value 的值时 就会触发 getter
    // 此处的操作就相当于 data.value 绑定给 input.value
    return input.value
  }
})

// 监听 keyup 事件
input.onkeyup = function(e) {
  // 改变 data.value
  data.value = e.target.value
}
```

### 方法二：Proxy




## 数据响应式过程：

- 数据劫持 / 数据代理
- 依赖收集 getter
- 派发更新 setter

## 缺陷：

- 无法监听到数组下标的变化，导致通过数组下标赋值，添加元素，不能实现响应式
- 向对象 添加属性、删除属性 也无法监听（需要使用 `Vue.set()`、`vm.$delete` ）
- `Object.defineProperty` 只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果，属性值是对象，还需要深度遍历

## 参考

https://wangdoc.com/javascript/stdlib/attributes.html
https://es6.ruanyifeng.com/#docs/proxy
https://github.com/ljianshu/Blog/issues/70
https://muyiy.cn/question/frame/29.html
https://juejin.im/post/5acd0c8a6fb9a028da7cdfaf

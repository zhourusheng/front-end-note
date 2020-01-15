# this 关键字


## 1 涵义

简单说，this就是属性或方法“当前”所在的对象。

```js
// this.property   this就是属性或方法"当前"所在的对象

var person = {
  name: '张三',
  describe: function () {
    // this.name 表示 name属性 所在的那个对象
    // 由于this.name 是在 descript()中调用的
    // 而descript() 所在当前对象是 person
    // 所以this 指向person，this.name 就是 person.name
    return `姓名：${this.name}`
  }
}

var res = person.describe() // 姓名：张三
```

由于对象的属性可以赋给另一个对象，所以属性所在的当前对象是可变的，即this的指向是可变的。

```js
var A  = {
  name: '张三',
  describe: function() {
    return `姓名：${this.name}`
  }
}

var B = {
  name: '李四'
}

// A.describe 被赋值给 B
// 于是 B.describe 就表示 describe 方法所在的当前对象就是 B 
B.describe = A.describe

console.log(B.describe())
```

```js
function f() {
  console.log(`姓名：${this.name}`)
}

var A = {
  name: '张三',
  describe: f
}

var B = {
  name: '李四',
  describe: f
}

A.describe() // 张三
B.describe() // 李四
```
上面代码中，函数f内部使用了this关键字，随着f所在的对象不同，this的指向也不同。

只要函数被赋值给另一个变量，`this` 的指向就会改变

总结一下，JavaScript 语言之中，一切皆对象，运行环境也是对象，所以函数都是在某个对象之中运行，`this` 就是函数运行时所在的对象（环境）。这本来并不会让用户糊涂，但是 JavaScript 支持运行环境动态切换，也就是说，`this` 的指向是动态的，没有办法事先确定到底指向哪个对象，这才是最让初学者感到困惑的地方。

## 2 实质



## 3 使用场合

`this` 主要有以下使用场合：

**（1）全局环境**

全局环境使用`this`, 它指的就是顶层对象`window`。

**（2）构造函数**

构造函数中的`this`, 指向对象实例

```js
var Obj = function(p) {
  this.p = p
}

var o = new Obj('hello world')

console.log(o.p) // hello world
```

**（3）对象的方法**



## 4 使用注意点

### 4.1 避免多层 this


### 4.2 避免数组处理方法中的 this


### 4.3 避免回调函数中的 this


## 5. 绑定 this 方法

### 5.1 Function.prototype.call()



### 5.2 Function.prototype.apply()

### 5.3 Function.prototype.bind()
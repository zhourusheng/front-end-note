# Object 对象

## 1.概述

JavaScript 原生提供 `Object` 对象（注意起首的`O`是大写），本章介绍该对象原生的各种方法。

JavaScript 的所有其他对象都继承自`Object`对象，即那些对象都是`Object`的实例。

`Object`对象的原生方法分成两类：`Object`本身的方法 与 `Object`的实例方法。

**（1）`Object`对象本身的方法**

所谓“本身的方法”就是直接定义在`Object`对象的方法

**（2）`Object`的实例方法**

所谓实例方法就是定义在`Object`原型对象`Object.prototype`上的方法。它可以被`Object`实例直接使用。

想要实例方法，首先要生成`Object`实例

## 2. Object()

`Object`本身是一个函数，可以当作工具方法使用，将任意值转为对象。这个方法常用于保证某个值一定是对象。
`Object()` 本身可作为工具函数

## 3. Object构造函数

`Object` 不仅可以当工具函数使用，还可以当构造函数使用，即前面可以使用 `new` 命令

`Object` 构造函数的首要用途，是直接通过它来生成新对象

```js
var obj = new Object()
```

> 注意，通过`var obj = new Object()`的写法生成新对象，与字面量的写法`var obj = {}`是等价的。
> 或者说，后者只是前者的一种简便写法。

**new Object() 等同于 {} 字面量创建对象**

`Object`构造函数的用法与工具方法很相似，几乎一模一样。使用时，可以接受一个参数，如果该参数是一个对象，则直接返回这个对象
如果是一个原始类型的值，则返回该值对应的包装对象（详见《包装对象》一章）。


## 4. Object的静态方法

所谓“静态方法”, 是指部署在`Object`对象自身的方法。

### 4.1 Object.keys(), Object.getOwnPropertyNames()

`Object.keys`方法和 `Object.getOwnPropertyNames`方法都用来遍历对象的属性。

`Object.keys `方法的参数是一个对象，返回一个数组。该数组的成员都是该对象自身的（而不是继承的）所有属性名。

```js
var obj = {
  p1: 123,
  p2: 456
}

// Object.keys() 只返回可枚举的属性
const res = Object.keys(obj)

// Object.getOwnPropertyNames() 方法既返回可枚举属性，也返回不可枚举属性
const res2 = Object.getOwnPropertyNames(obj)

console.log(res)  // ["p1", "p2"]
console.log(res2) // ["p1", "p2"]
```
对一般对象来说，`Object.keys()`和`Object.getOwnPropertyNames()`返回结果是一样的。只有涉及不可枚举属性时，才会有不一样结果。
`Object.keys()`方法只返回可枚举的属性，`Object.getOwnPropertyNames()`还返回不可枚举属性名。

```js
var a = ['hello', 'world']
console.log(Object.keys(a)) // ["0", "1"]
console.log(Object.getOwnPropertyNames(a))  // ["0", "1", "length"]
```

上面代码中，数组的`length`属性是不可枚举的属性，所以只出现在`Object.getOwnPropertyNames`方法的返回结果中。


### 4.2 其他方法

（1）对象属性模型的相关方法
  - `Object.getOwnPropertyDescriptor()`：获取某个属性的描述对象。
  - `Object.defineProperty()`：通过描述对象，定义某个属性。
  - `Object.defineProperties()`：通过描述对象，定义多个属性。

（2）控制对象状态的方法
  - `Object.preventExtensions()`: 防止对象扩展。
  - `Object.isExtensible()`: 判断对象是否可扩展。
  - `Object.seal()`: 禁止对象配置。
  - `Object.isSealed()`: 判断一个对象是否可配置。
  - `Object.freeze()`: 冻结一个对象。
  - `Object.isFrozen()`: 判断一个对象是否被冻结。

（3）原型链相关方法
  - `Object.create()`：该方法可以指定原型对象和属性，返回一个新的对象。
  - `Object.getPrototypeOf()`：获取对象的`Prototype`对象。

## 5. Object的实例方法

除了静态方法，还有不少方法定义在`Object.prototype`对象。它们称为实例方法，所有`Object`的实例对象都继承了这些方法。

`Object`实例对象的方法，主要有以下六个。

* `Object.prototype.valueOf()`: 返回当前对象对应的值
* `Object.prototype.toString()`: 返回当前对象对应的字符串形式
* `Object.prototype.toLocaleString()`: 返回当前对象对应的本地字符串形式
* `Object.prototype.hasOwnProperty()`: 判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性
* `Object.prototype.isPrototypeOf()`: 判断当前对象是否为另一个对象的原型
* `Object.prototype.propertyIsEnumerable()`: 判断某个属性是否可枚举


### 5.1 Object.prototype.valueOf()

`valueOf()`返回一个对象的“值”，默认情况下返回对象本身。

```js
var obj = new Object()
console.log(obj.valueOf() === obj) // true
```

`valueOf()`方法的主要用途是，JavaScript自动类型转换时会默认调用这个方法

```js
var obj = new Object()
console.log(1 + obj)  // "1[object Object]"

var obj2 = new Object()
obj2.valueOf = function() { // 重写了Object.valueOf() 方法，在类型转换发生时自动调用这个方法
  return 2
}
console.log(1 + obj2) // 3
```

上面代码自定义了`obj`对象的`valueOf`方法，于是`1 + obj`就得到了`3`。
这种方法就相当于用自定义的`obj.valueOf`，覆盖`Object.prototype.valueOf`。


### 5.2 Object.prototype.toString()


### 5.3 toString() 的应用：判断数据类型


### 5.4 Object.prototype.toLocaleString()


### 5.5 Object.prototype.hasOwnProperty()

# 属性描述对象

## 1. 概述

JavaScript 提供了一个内部数据结构，用来描述对象的属性，控制它的行为，比如该属性是否可写、可遍历等等。
这个内部数据结构称为 “属性描述对象”(attributes object)。每个属性都有自己对应的属性描述对象，保存该属性的一些元信息。

```js
{
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false,
  get: undefined,
  set: undefined
}
```

属性描述对象提供 6 个元属性。

1. `value`：`value` 是该属性的属性值，默认为 `undefined`
2. `writable`：`writable` 是一个布尔值，表示属性值 (`value`) 是否可改变（即是否可写），默认为 `true`
3. `enumerable`：
   `enumerable` 是一个布尔值，表示该属性是否可遍历，默认为`true`。
   如果设为`false`，会使得某些操作（如：`for...in`循环、`Object.keys()`）跳过该属性。
4. `configurable`：
   `configurable` 是一个布尔值，表示可配置性，默认为`true`。如果设为`false`，将阻止某些操作改写该属性，比如无法删除该属性，
   也不得改变该属性的属性描述对象（`value`属性除外）。也就是说`configurable`属性控制了属性描述对象的可写性。
5. `get`：`get` 是一个函数，表示属性的取值函数(`getter`)，默认值为 `undefined`。
6. `set`：`set` 是一个函数，表示该属性的存值函数(`setter`)，默认值为 `undefined`。

## 2. Object.getOwnPropertyDescriptor()

`Object.getOwnPropertyDescriptor()`方法可以获取属性描述对象。它的第一个参数是目标对象，第二个参数是一个字符串，对应目标对象的某个属性名。

```js
var obj = {
  p: 'a'
}
Object.getOwnPropertyDescriptor(obj, 'p')
// { value: 'a', writable: true, enumerable: true, configurable: true }
```

注意，`Object.getOwnPropertyDescriptor()`只能用于对象自身的属性，不能获取继承的属性。

```js
var obj = { p: 'a' }

Object.getOwnPropertyDescriptor(obj, 'toString')
// undefined
```

上面代码中，`toString`是`obj`对象继承的属性，`Object.getOwnPropertyDescriptor()`无法获取

## 3. Object.getOwnPropertyNames()

`Object.getOwnPropertyNames()`方法返回一个数组，成员是参数对象自身的全部属性名，不管该属性是否可遍历（`enumerable`）

```js
var obj = Object.defineProperties(
  {},
  {
    p1: {
      value: 1,
      enumerable: true
    },
    p2: {
      value: 2,
      enumerable: false
    }
  }
)
var res = Object.getOwnPropertyNames(obj)
var res2 = Object.keys(obj)
console.log(res) // [ 'p1', 'p2' ]
console.log(res2) // [ 'p1' ]
```

上面代码中，`obj.p1`是可遍历的，`obj.p2`是不可遍历的。`Object.getOwnPropertyNames`会将它们都返回。

这跟`Object.keys`的行为不同，`Object.keys`只返回对象自身的可遍历属性的全部属性名。

```js
var a = Object.keys([])
var b = Object.getOwnPropertyNames([])
console.log(a) // []
console.log(b) // [ 'length' ]

var c = Object.keys(Object.prototype)
var d = Object.getOwnPropertyNames(Object.prototype)
console.log(c) // []
console.log(d)
// [ 'constructor',
// '__defineGetter__',
// '__defineSetter__',
// 'hasOwnProperty',
// '__lookupGetter__',
// '__lookupSetter__',
// 'isPrototypeOf',
// 'propertyIsEnumerable',
// 'toString',
// 'valueOf',
// '__proto__',
// 'toLocaleString' ]
```

上面代码中，数组自身的`length`属性是不可遍历的，`Object.keys`不会返回该属性。
第二个例子的`Object.prototype`也是一个对象，所有实例对象都会继承它，它自身的属性都是不可遍历的。

## 4. Object.defineProperty(), Object.defineProperties()

`Object.defineProperty()`方法允许通过属性描述对象，定义或修改一个属性，然后返回修改后的对象。用法如下：

```js
Object.defineProperty(object, propertyName, attributesObject)
```

`Object.defineProperty`方法接收三个参数：

- Object: 属性所有的对象
- propertyName：字符串，表示属性名
- attributesObject：属性描述对象

定义`obj.p`:

```js
var object = Object.defineProperty({}, 'p', {
  value: 123, // 属性值
  writable: false, // value是否可写
  enumerable: true, // 是否可遍历
  configurable: false // 是否可配置
})
console.log(Object.getOwnPropertyDescriptor(object, 'p'))
console.log(object.p) // 123

object.p = 456
console.log(object.p) // 123
```

上面代码中，`Object.defineProperty()`方法定义了`obj.p`属性。由于属性描述对象的`writable`属性为`false`，所以`obj.p`属性不可写。
注意，这里的`Object.defineProperty`方法的第一个参数是`{}`（一个新建的空对象），`p`属性直接定义在这个空对象上面，然后返回这个对象，这是`Object.defineProperty()`的常见用法。

如果属性已经存在，`Object.defineProperty()`方法相当于更新该属性的属性描述对象。

如果一次性定义或修改多个属性，可以使用`Object.defineProperties()`方法。

```js
// 定义或修改多个属性 Object.defineProperties()
var obj = Object.defineProperties(
  {},
  {
    p1: {
      value: 123,
      enumerable: true
    },
    p2: {
      value: 'abc',
      enumerable: true
    },
    p3: {
      // get()属性的取值函数，每次读取该属性，都会调用这个函数
      get: function() {
        return this.p1 + this.p2
      },
      enumerable: true,
      configurable: true
    }
  }
)
console.log(obj.p1) //  123
console.log(obj.p2) // abc
console.log(obj.p3) // 123abc
```

上面代码中，`Object.defineProperties()`同时定义了`obj`对象的三个属性。
其中，`p3`属性定义了取值函数`get`，即每次读取该属性，都会调用这个取值函数。

注意，一旦定义了取值函数`get`（或存值函数`set`），就不能将`writable`元属性设为`true`，否则会报错。

`Object.defineProperty()`和`Object.defineProperties()`参数里面的属性描述对象，`writable`、`configurable`、`enumerable`这三个属性的默认值都为`false`。


## 5. Object.prototype.propertyIsEnumerable()

实例对象的`propertyIsEnumerable()`方法返回一个布尔值，用来判断某个属性是否可遍历。
注意，这个方法**只能用于判断对象自身的属性**，对于继承的属性一律返回`false`。


## 6. 元属性

属性描述对象的各个属性称为“元属性”，因为它们可以看作是控制属性的属性。

### 6.1 value

`value`属性是目标属性的值。

### 6.2 writable

`writable`属性是一个布尔值，决定了目标属性的值（`value`）是否可以被改变。

### 6.3 enumerable

`enumerable`（可遍历性）返回一个布尔值，表示目标属性是否可遍历。

### 6.4 configurable

`configurable`（可配置性）返回一个布尔值，决定了是否可以修改属性描述对象。
也就是说，`configurable`为`false`时，`value`、`writable`、`enumerable`、`configuarable`都不能被修改。


## 7.存取器(getter, setter)


## 8.对象的拷贝


## 9.控制对象状态

### 9.1 Object.preventExtensions()
### 9.2 Object.isExtensible()
### 9.3 Object.seal()
### 9.4 Object.isSealed()
### 9.5 Object.freeze()
### 9.6 Object.isFrozen()
### 9.7 局限性
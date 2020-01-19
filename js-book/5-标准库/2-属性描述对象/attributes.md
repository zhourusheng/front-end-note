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
console.log(res)  // [ 'p1', 'p2' ]
console.log(res2) // [ 'p1' ]
```

上面代码中，`obj.p1`是可遍历的，`obj.p2`是不可遍历的。`Object.getOwnPropertyNames`会将它们都返回。

这跟`Object.keys`的行为不同，`Object.keys`只返回对象自身的可遍历属性的全部属性名。

```js
var a = Object.keys([])
var b = Object.getOwnPropertyNames([])
console.log(a)  // []
console.log(b)  // [ 'length' ]

var c = Object.keys(Object.prototype)
var d = Object.getOwnPropertyNames(Object.prototype)
console.log(c)  // []
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

## 5. Object.prototype.propertyIsEnumerable()

## 6. 元属性

### 6.1 value

### 6.2 writable

### 6.3 enumerable

### 6.4 configurable

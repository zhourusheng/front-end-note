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

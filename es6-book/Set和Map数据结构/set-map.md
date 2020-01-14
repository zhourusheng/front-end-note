# Set 和 Map 数据结构


## 1.Set

### 基本用法

ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

Set本身是一个构造函数，用来生成 Set 数据结构。

Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。

```js
// new Set() 数组去重，字符串去重
function arrSet(arr) {
  return [...new Set(arr)]
}

function strSet(str) {
  return [...new Set(str)].join('')
}

console.log(arrSet([1,1,2,2]))
console.log(strSet('hahahaha'))
```

### Set 实例的属性和方法

## 2.WeakSet


## 3.Map


## 4.WeakMap
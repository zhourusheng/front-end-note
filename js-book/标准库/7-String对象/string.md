# String 对象


## 1.概述

String对象是 JavaScript 原生提供的三个包装对象之一，用来生成字符串对象。

```js
var s1 = 'abc'

// new String() 方法生成的是字符串对象 
var s2 = new String('abc')

console.log(typeof(s1)) // string

console.log(s2) // [String: 'abc']
console.log(typeof(s2)) // object

// 使用valueOf()方法返回的就是对应的原始字符串
console.log(s2.valueOf()) // 'abc'
```

字符串对象是一个类似数组的对象（很像数组，但不是数组）。

上面代码中，字符串abc对应的字符串对象，有数值键（0、1、2）和length属性，所以可以像数组那样取值。

除了用作构造函数，String对象还可以当作工具方法使用，将任意类型的值转为字符串。

## 2.静态方法

### 2.1 String.fromCharCode()

`String` 对象提供的静态方法（即定义在对象本身，而不是定义在对象实例的方法），主要是 `String.fromCharCode()`。该方法的参数是一个或多个数值，代表 Unicode 码点，返回值是这些码点组成的字符串。

## 3.实例属性

### 3.1 String.prototype.length

字符串实例的length属性返回字符串的长度。

## 4.实例方法

### 4.1 String.prototype.charAt()

### 4.2 String.prototype.charCodeAt()

### 4.3 String.prototype.concat()

### 4.4 String.prototype.slice()

### 4.5 String.prototype.substring()

### 4.6 String.prototype.substr()

### 4.7 String.prototype.indexOf(), String.prototype.lastIndexOf()

### 4.8 String.prototype.trim()

### 4.9 String.prototype.toLowerCase(), String.prototype.toUpperCase()

### 4.10 String.prototype.match()

### 4.11 String.prototype.search(), String.prototype.replace()

### 4.12 String.prototype.split()

### 4.13 String.prototype.localeCompare()
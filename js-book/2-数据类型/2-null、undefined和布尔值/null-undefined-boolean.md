# null, undefined 和布尔值

## 1. null 和 undefined

### 1.1 概述

`null` 与 `undefined` 都可以表示“没有”，含义非常相似。将一个变量赋值为 `undefined` 或 `null`，老实说，语法效果几乎没区别。

在if语句中，它们都会被自动转为false，相等运算符（`==`）甚至直接报告两者相等。

```js
if (!undefined) {
  console.log('undefined is false');
}
// undefined is false

if (!null) {
  console.log('null is false');
}
// null is false

undefined == null
// true
```

### 1.2 用法和含义

null表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入null，表示该参数为空。比如，某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，那么这个参数就会传入null，表示未发生错误。

undefined表示“未定义”，下面是返回undefined的典型场景。

```js
// 变量声明了，但没有赋值
var i;
i // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f() // undefined

// 对象没有赋值的属性
var  o = new Object();
o.p // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f() // undefined
```

## 2. 布尔值

布尔值代表“真”和“假”两个状态。“真”用关键字true表示，“假”用关键字false表示。布尔值只有这两个值。

下列运算符会返回布尔值：

* 前置逻辑运算符： ! (Not)
* 相等运算符：===，!==，==，!=
* 比较运算符：>，>=，<，<=

如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为false，其他值都视为true。

* `undefined`
* `false`
* `null`
* `0`
* `NaN`
* `''`

注意，空数组（[]）和空对象（{}）对应的布尔值，都是true。

```js
if ([]) {
  console.log('true');
}
// true

if ({}) {
  console.log('true');
}
// true
```

如何判断空数组`[]`和空对象`{}`

数组可直接判 `length`

对象可用

```js
// 1.将json对象转化为json字符串，再判断该字符串是否为"{}"
var data = {};
var b = (JSON.stringify(data) == "{}");
alert(b); //true

// 2.for in 循环判断
var obj = {};
var b = function() {
  for(var key in obj) {
    return false;
  }
  return true;
}
alert(b()); //true


// 3.jquery的isEmptyObject方法
// 此方法是jquery将2方法(for in)进行封装，使用时需要依赖jquery
var data = {};
var b = $.isEmptyObject(data);
alert(b); //true


// 4.Object.getOwnPropertyNames()方法
// 此方法是使用Object对象的getOwnPropertyNames方法，获取到对象中的属性名，存到一个数组中，返回数组对象，我们可以通过判断数组的length来判断此对象是否为空
// 注意：此方法不兼容ie8，其余浏览器没有测试
var data = {};
var arr = Object.getOwnPropertyNames(data);
alert(arr.length == 0); //true


// 5.使用ES6的Object.keys()方法
// 与4方法类似，是ES6的新方法, 返回值也是对象中属性名组成的数组
var data = {};
var arr = Object.keys(data);
alert(arr.length == 0); //true
```

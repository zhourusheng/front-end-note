https://muyiy.cn/question/program/14.html

`new` 关键字调用函数具体过程:

1. 创建一个空对象，空对象的 `__proto__` 属性指向构造函数的原型对象，也就是创建的空对象，要去继承构造函数的 `prototype` 原型属性，`fn` 为构造函数，`args` 为构造函数参数

2. 将创建的空对象赋值构造函数内部的 `this` ，用构造函数内部的方法修改空对象

3. 如果构造函数返回一个非基本类型的值（是对象），则返回这个值，否则返回上面创建的对象

```js
function _new2(fn, ...args) {
  // 创建一个空对象，继承构造函数的原型
  var obj = Object.create(fn.prototype)
  // 空对象赋值构造函数内部 this，用构造函数内部的方法改变空对象
  const result = fn.apply(obj, ...args)
  // 如果构造函数返回一个对象，则直接返回，否则返回上面创建的对象
  return Object.prototype.toString.call(result) === '[object Object]'
    ? result
    : obj
}

const Person = function(name) {
  this.age = '26'
  this.sayHi = function() {
    console.log(name)
  }
}

const _z2 = _new2(Person, ['Heyixuan'])
console.log(_z2.age) // 26
_z2.sayHi() // Heyixuan
```

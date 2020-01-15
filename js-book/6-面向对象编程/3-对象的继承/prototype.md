# 对象的继承

面向对象编程很重要的一个方面，就是对象的继承。A 对象通过继承B对象。就能直接拥有B对象的所有属性和方法。这对于代码的复用是非常有用的。

## 1. 原型对象概述

### 1.1 构造函数的缺点

JS通过构造函数生成新的对象，因此构造函数可以视为对象的模板。实例对象的属性和方法，可以定义在构造函数内部。

通过构造函数为实例对象定义属性，虽然很方便，但是有一个缺点。同一个构造函数的多个实例之间，无法共享属性，从而造成对系统资源的浪费。

```js
  function Cat(name, color) {
    this.name = name
    this.color = color
    this.meow =  function () {
      console.log('喵喵')
    }
  }

  var cat1 = new Cat('大毛', '白色')
  var cat2 = new Cat('图图', '狸花')

  console.log(cat1.meow === cat2.meow)
```

### 1.2 prototype 属性的作用

JS 继承机制的设计思想就是，原型对象的所有属性和方法，都能被实例对象共享。也就是说，如果属性和方法定义在原型上，那么所有实例对象就能共享。

```js
// js规定，每个函数都有一个prototype 属性，指向一个对象
function f() {}

typeof f.prototype // object
```

对于普通函数来说，该属性基本无用。但是，对于构造函数来说，生成实例的时候，该属性会自动成为实例对象的原型。

```js
// 构造函数 Animal 的 prototype 属性，就是实例对象 cat1 和 cat2的原型对象
// 原型上添加一个 color 属性，结果实例对象都共享了改属性
Animal.prototype.color = 'white'

var cat1 = new Animal('图图')

var cat2 = new Animal('麦猪')

cat1.color = 'black'

// 这两个实例本身是没有 color 属性，都是读取原型对象上的 color 属性
// 也就是说，当实例对象本身没有某个 属性或方法时，它就会到原型对象上寻找该属性或方法
// 如果实例对象自身就有某个属性或方法，它就不会去原型对象上寻找这个属性或方法
console.log(cat1.color)
console.log(cat2.color)
console.log(Animal.prototype.color)
```

### 1.3 原型链

JS规定，所有对象都有自己的原型对象(prototype)。一方面，任何一个对象，都可以充当其他对象的原型；另一方面，由于原型对象也是对象，所以它也有自己的原型。因此会形成一个原型链（prototype chain）: 对象到原型，再到原型的原型...

如果一层层地向上追溯，所有对象的的原型最终都追溯到 `Object.prototype`，即`Object` 构造函数的 `prototype` 属性。也就是说，所有对象都继承了 `Object.prototype` 属性。这就是所有对象都有 `valueOf` 和 `toString` 方法的原因，因为是从 `Object.prototype` 继承的。

### 1.4 constructor 属性


## 2. instanceof 运算符

## 3. 构造函数的继承

## 4. 多重继承


## 5. 模块

### 5.1 基本的实现方法

### 5.2 封装私有变量：构造函数的写法

### 5.3 封装私有变量：立即执行函数的写法

### 5.4 模块的放大模式

### 5.5 输入全局变量

const Person = function(name) {
  this.age = '26'
  this.sayHi = function() {
    console.log(name)
  }
}

// 传统 new() + 构造函数
const z = new Person('zhourusheng')
// console.log(z.age) // 26
// z.sayHi() // zhourusheng

function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
  // 将 arguments 对象转为数组
  var args = [].slice.call(arguments)
  // 取出构造函数
  var constructor = args.shift()
  // 创建一个空对象，继承构造函数的 prototype 属性
  var context = Object.create(constructor.prototype)
  // 执行构造函数
  var result = constructor.apply(context, args)
  // 如果返回结果是对象（非基本类型值），就直接返回，否则返回上面创建的新对象
  return typeof result === 'object' && result != null ? result : context
}

const _z = _new(Person, 'zhourusheng')
// console.log(_z.age) // 26
// _z.sayHi() // zhourusheng

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

const _z2 = _new2(Person, ['Heyixuan'])
console.log(_z2.age) // 26
_z2.sayHi() // Heyixuan

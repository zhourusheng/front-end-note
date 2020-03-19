const Person = function(name) {
  this.age = '26',
  this.sayHi = function() {
    console.log(name)
  }
}

// 传统 new() + 构造函数
const z = new Person('zhourusheng')
console.log(z.age) // 26
z.sayHi() // zhourusheng


function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
  // 将 arguments 对象转为数组
  // 取出构造函数
  // 创建一个空对象，继承构造函数的 prototype 属性
  // 执行构造函数
  // 如果返回结果是对象（非基本类型值），就直接返回，否则返回上面创建的新对象
}
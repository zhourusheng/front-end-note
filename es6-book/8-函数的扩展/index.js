// https://github.com/mqyqingfeng/Blog/issues/85

// ES6 增加了箭头函数 相当于 省略 function 关键字 {} 和 return

// 箭头函数与变量结构结合
let func = ({ value, num }) => ({ total: value * num })

var result = func({
  value: 10,
  num: 10
})
console.log(result) // {total: 100}

// 箭头函数 与 普通函数的区别

// 1. 没有 this
// 箭头函数没有 this，所以需要通过查找作用域链来确定 this 的值
// 意味着如果箭头函数被非箭头函数包含，this 绑定的就是最近一层非箭头函数的 this

// 2. 没有 arguments
// 箭头函数没有自己 arguments ，但箭头函数可以访问外围函数的 arguments 对象
// 也可以通过 rest 参数获取

// 3. 不能通过 new 关键字调用
// JavaScript 函数有两个内部方法： [[Call]] 和 [[Construct]]
// 当通过 new 调用函数时，执行 [[Construct]] 方法，创建一个实例对象，然后再执行函数体，将 this 绑定到实例上
// 当直接调用的时候，执行 [[Call]] 方法，直接执行函数体。
// 箭头函数并没有 [[Construct]] 方法，不能被用作构造函数，如果通过 new 的方式调用，会报错


// 4. 没有 new.target

// 5. 没有原型

// 6. 没有 super
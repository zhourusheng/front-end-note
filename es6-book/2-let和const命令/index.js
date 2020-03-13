// https://github.com/mqyqingfeng/Blog/issues/82

// 由于变量提升的原因，会先创建变量 value 并赋值为 undefined
var condition = true
if (condition) {
  var value = 1
}
// console.log(value) // 1 or undefined

// 即便循环已经结束了，仍能访问变量 index 的值
for (var index = 0; index < 10; index++) {}
// console.log(index)  // 10

// 为了加强对变量生命周期的控制，ES6 引入了 块级作用域，let 和 const

// 1. 不会产生变量提升
// 2. 重复声明会报错，同一个变量名只允许声明一次
// 3. 不绑定全局作用域

// 临时死区

// console.log(value2) // ReferenceError: value2 is not defined
let value2 = 222

var value3 = 'global'(
  (function() {
    // console.log(value3)  // Cannot access 'value3' before initialization
    let value3 = 'local'
  })()
)

var value4 = 'global4'
{
  // console.log(value4)  // Cannot access 'value3' before initialization
  let value4 = 'local4'
}

// 循环中的块级作用域

var funcs = []
for (var i = 0; i < 3; i++) {
  funcs[i] = function() {
    console.log(i)
  }
}
funcs[0]() // 3

// 解决方法一：使用IIFE 立即执行函数，创建一个单独的函数作用域
var func2 = []
for (var i = 0; i < 3; i++) {
  func2[i] = (function(i) {
    return function() {
      console.log(i)
    }
  })(i)
}
func2[0]()

// 解决方法二：使用 let
var fun3 = []
for (let i = 0; i < 3; i++) {
  fun3[i] = function() {
    console.log(i)
  }
}
fun3[0]()

// 循环中的 let 和 const
var fun4 = []
var object = {
  a: 1,
  b: 2,
  c: 3
}
for (var key in object) {
  fun4.push(function() {
    console.log(key)
  })
}
fun4[0]() // c

// 使用 let 或 const 可以打印正确结果
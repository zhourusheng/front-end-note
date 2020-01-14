/**
 * 闭包定义：闭包是指有权访问另一个函数作用域中的变量的函数
 *  1.闭包是一个函数
 *  2.能访问另一个函数作用域中的变量
 * */

//  闭包有下面三个特性：
// 1. 闭包可以访问当前函数以外的变量
function getOuter() {
  var date = '20200109'
  function getDate(str) {
    // 访问外部函数的变量 date
    console.log(str + date)
  }
  return getDate('今天是')
}
// getOuter()

// 2. 即使外部函数已经返回，闭包仍能访问外部函数定义的变量
function getOuter2() {
  var date = '815'
  function getDate(str) {
    // 访问外部函数的变量 date
    console.log(str + date)
  }
  return getDate // 外部函数返回
}
var today = getOuter2()
// today('今天是:')
// today('明天不是:')

// 3.闭包可以更新外部变量的值
function updateCount() {
  var count = 0
  function getCount(val) {
    count = val
    console.log(count)
  }
  return getCount
}
var count = updateCount()
count(815) //815
count(816) //816

// 深入浅出图解作用域链和闭包
// https://github.com/yygmind/blog/issues/17

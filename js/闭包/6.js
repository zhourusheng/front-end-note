function outer() {
  var num = 0 // 内部变量
  return function add() {
    num++
    console.log(num)
  }
}
function outFun2() {
  var inVar = '内层变量2' // 定义一个函数作用域内的变量
}
outFun2() // 执行函数
console.log(inVar) //  inVar is not definedcle
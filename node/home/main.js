// 如果传递给require函数的是NodeJS内置模块名称，不做路径解析

var counter1 = require('./util/counter')
var counter2 = require('./util/counter')

console.log(counter1.count())
console.log(counter2.count())
console.log(counter2.count())
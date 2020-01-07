function doSomething() {}
// 添加属性到prototype原型上
doSomething.prototype.foo = 'bar'
// 使用 new 运算符在现在这个原型基础之上，创建一个 doSomeThing 的实例
var doSomeInstancing = new doSomething()
doSomeInstancing.prop = 'some value'
console.log(doSomething.prototype)
console.log(doSomeInstancing)


var doSomething = function() {}
console.log(doSomething.prototype)

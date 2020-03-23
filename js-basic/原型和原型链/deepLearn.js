// https://github.com/mqyqingfeng/Blog/issues/2

// 构造函数
function Person() {}
Person.prototype.name = 'zhourusheng'

var person1 = new Person()
var person2 = new Person()

console.log(person1.name)
console.log(person2.name)



// prototype 和 __proto__ 的关系
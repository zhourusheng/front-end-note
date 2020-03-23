// https://github.com/mqyqingfeng/Blog/issues/2

// 构造函数
function Person() {}
Person.prototype.name = 'zhourusheng'

var person1 = new Person()
var person2 = new Person()

console.log(person1.name) // zhourusheng
console.log(person2.name) // zhourusheng


// 每个函数都有一个 prototype 属性
// 什么是原型？ 每一个JavaScript 对象（除了null）在创建时就会关联另一个对象，这个对象就是原型，每个对象都会从原型 “继承” 属性

// prototype 和 __proto__ 的关系
//  Object.assign() 方法用于将所有可枚举属性的值，从一个或多个源对象复制到目标对象
// 返回值是目标对象

// 语法：Object.assign(target, ...sources)
// target 目标对象（返回值是复制了源对象属性之后的目标对象）
// sources 源对象

const target = {
  a: 1,
  b: 2
}
const sources = {
  b: 4,
  c: 5
}

const returnedTarget = Object.assign(target, sources)

// console.log(target) // 目标对象被改变
// console.log(returnedTarget)
// console.log(sources) // 源对象并没有改变

// 1. 复制一个对象
const obj = { a: 1 }
const copyObj = Object.assign({}, obj)
// console.log(copyObj)

// 2.深拷贝问题
// Object.assign只是浅拷贝，
// 如果源对象的属性值是一个对象引用，则复制之后的目标对象仅仅是指向这个引用
let obj1 = {
  a: 0,
  b: {
    c: 0
  }
}
let obj2 = Object.assign({}, obj1)

obj1.a = 1
obj2.a = 2

// console.log(obj1)
// console.log(obj2)

obj2.b.c = 3

// console.log(obj1)
// console.log(obj2)

// 3. 合并对象
const o1 = { a: 1 }
const o2 = { b: 2 }
const o3 = { c: 3 }

const newObj = Object.assign(o1, o2, o3)

// console.log(newObj)
// console.log(o1) // 注意：目标对象自身也被改变
// console.log(o2)
// console.log(o3)

// 4.合并具有相同属性的对象


// 5.拷贝symbol类型的属性


// 6.继承属性和不可枚举属性是不能拷贝的


// 7.原始类型会被包装为对象


// 8.异常会打断后续拷贝任务


// 9.拷贝访问器



// https://github.com/yygmind/blog/issues/26
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

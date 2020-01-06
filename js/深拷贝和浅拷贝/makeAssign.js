// 实现一个 Object.assign

/***
 * 1. 判断原生Object是否支持该函数，如果不存的话创建一个函数assign，
 *    并使用 Object.defineProperty 将该函数绑定到 Object上
 * 2. 判断参数是否正确（目标对象不能为空，我们可以是设置{}传递进去， 但是必须设置值）
 * 3. 使用 Object 转成对象，并保存为 to, 最后返回这个对象 to
 * 4. 使用 for..in 循环遍历出所有的可枚举的自有属性，并赋值给新的目标对象
 *    （使用 hasOwnProperty 获取自有属性，即非原型链上的属性）
 * */

/**
 * 注意1：可枚举性
 * 注意2：判断参数是否正确
 * 注意3：原始类型被包装为对象
 * 注意4：存在性
 *    如何在不访问属性值的情况下，判断对象中是否存在某个属性？  in 操作符 和 hasOwnProperty
 * */

//  判断原生 Object 中是否存在函数 assign2
if (typeof Object.assign2 != 'function') {
  // 使用属性描述符定义新属性 assign2
  Object.defineProperty(Object, 'assign2', {
    value: function(target) {
      'use strict'
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object')
      }
      var to = Object(target)
      for (var index = 0; index < arguments.length; index++) {
        var nextSource = arguments[index]
        if (nextSource != null) {
          // 使用for..in 遍历对象，nextSource获取属性值
          // 此处会同时检查其原型链上的属性
          for (var nextKey in nextSource) {
            // 使用 hasOwnProperty 判断对象 nextSource 中是否存在属性 nextKey
            // 过滤其原型链上的属性
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              // 赋值给对象 to, 并在遍历结束后返回对象 to
              to[nextKey] = nextSource[nextKey]
            }
          }
        }
      }
      return to
    },
    // 默认值是 false, 即 enumerable: false
    writable: true,
    configurable: true
  })
}

// 测试用例
// let a = {
//   name: 'advanced',
//   age: 18
// }
// let b = {
//   name: 'muyiy',
//   book: {
//     title: "You Don't Know JS",
//     price: '45'
//   }
// }
// let c = Object.assign2(a, b)
// console.log(c)
// console.log(a === c)

// 测试用例
// let a = {
//   name: 'advanced',
//   age: 18,
//   book: {
//     title: "You Don't Know JS",
//     price: '45'
//   }
// }
// const c = Object.assign2({}, a)
// console.log(c)


// 测试用例
let a = {
  name: 'advanced',
  age: 18,
  book: {
    title: "You Don't Know JS",
    price: '45'
  }
}
const c = Object.assign2({}, a)

a.name = 'zhou'
c.name = 'rusheng'
c.book.price = '5555'

console.log(a)
console.log(c)
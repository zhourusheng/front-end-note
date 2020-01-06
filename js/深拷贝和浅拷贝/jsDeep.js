// 如何实现一个深拷贝

/**
 * 深拷贝可以拆分成两步： 浅拷贝 + 递归
 * 浅拷贝时判断属性是否为对象，如果是对象则进行递归
 * */

// 浅拷贝简单实现
function cloneShallow(source) {
  var target = {}
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = source[key]
    }
  }
  return target
}

// // 测试用例
// var a = {
//   name: 'muyiy',
//   book: {
//     title: "You Don't Know JS",
//     price: '45'
//   },
//   a1: undefined,
//   a2: null,
//   a3: 123
// }
// var b = cloneShallow(a)

// a.name = '高级前端进阶'
// a.book.price = '666'

// console.log(a)
// console.log(b)

// 浅拷贝 + 递归
function cloneDeep1(source) {
  var target = {}
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object') {
        target[key] = cloneDeep1(source[key]) // 递归调用
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

/**
 * 仍然存在以下问题：
 * 1.没没有对传入参数进行校验，传入null 应该返回 null
 * 2.对象类型判断不够严谨
 * 3.没有考虑数组兼容
 * */

// 测试用例
// var a = {
//   name: 'muyiy',
//   book: {
//     title: "You Don't Know JS",
//     price: '45'
//   },
//   a1: undefined,
//   a2: null,
//   a3: 123
// }
// var b = cloneDeep1(a)

// a.name = '高级前端进阶'
// b.name = 'zhourusheng'
// a.book.price = '666'

// console.log(a)
// console.log(b)

// 拷贝数组
function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

function cloneDeep2(source) {
  if (!isObject(source)) {
    return source // 非对象返回自身
  }
  var target = Array.isArray(source) ? [] : {}
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = cloneDeep2(source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

// 测试用例
// var a = {
//   name: 'muyiy',
//   book: {
//     title: "You Don't Know JS",
//     price: '45'
//   },
//   a1: undefined,
//   a2: null,
//   a3: 123
// }
// var b = cloneDeep2(a)

// a.name = '高级前端进阶'
// b.name = 'zhourusheng'
// a.book.price = '666'

// console.log(a)
// console.log(b)





// https://segmentfault.com/a/1190000016672263
// https://github.com/yygmind/blog/issues/29

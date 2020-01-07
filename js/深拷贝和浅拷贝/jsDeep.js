// 如何实现一个深拷贝

/**
 * 深拷贝可以拆分成两步： 浅拷贝 + 递归
 * 浅拷贝时判断属性是否为对象，如果是对象则进行递归
 * */

// 1.浅拷贝简单实现
function cloneShallow(source) {
  var target = {}
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = source[key]
    }
  }
  return target
}

// 2.浅拷贝 + 递归
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

// 3.拷贝类型判断 + 处理数组
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

// 4. 解决循环引用问题

// JSON 无法深拷贝循环引用
// a.circleRef = a
// JSON.parse(JSON.stringify(a)) // 报错：Converting circular structure to JSON

// 4.1 使用哈希表
/**
 * 设值一个数组或者哈希表储存已拷贝过的对象，
 * 当检测到当前对象已存在数组或哈希表中时，取出该值并返回
 * */

function cloneDeep3(source, hash = new WeakMap()) {
  if (!isObject(source)) return source
  // 新增代码，查哈希表
  if (hash.has(source)) return hash.get(source)

  var target = Array.isArray(source) ? [] : {}
  // 新增代码，哈希表设值
  hash.set(source, target)

  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        // 新增代码，传入哈希表
        target[key] = cloneDeep3(source[key], hash)
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

// 4.2 使用数组
function find(arr, item) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index].source === item) {
      return arr[index]
    }
  }
  return null
}

function cloneDeep4(source, uniqueList) {
  if (!isObject(source)) {
    return source
  }
  // 新增代码，初始化数组
  if (!uniqueList) uniqueList = []
  var target = Array.isArray(source) ? [] : {}

  // 数据已经存在，返回保存的数据
  var uniqueData = find(uniqueList, source)
  if (uniqueData) {
    return uniqueData.target
  }
  // 数据不存在，保持数据源，以及对应的引用
  uniqueList.push({
    source: source,
    target: target
  })

  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        // 新增代码，传入数组
        target[key] = cloneDeep4(source[key], uniqueList)
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

// 测试用例
var a = {
  name: 'muyiy',
  book: {
    title: "You Don't Know JS",
    price: '45'
  },
  a1: undefined,
  a2: null,
  a3: 123
}
a.circleRef = a
var b = cloneDeep4(a)
console.log(b)


// 5. 拷贝Symbol

// 6.破解递归爆栈

// https://segmentfault.com/a/1190000016672263
// https://github.com/yygmind/blog/issues/29

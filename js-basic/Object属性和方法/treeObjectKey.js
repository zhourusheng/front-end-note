// 创建一个父对象 parent
var parent = Object.create(Object.prototype, {
  a: {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: true
  }
})

// 创建继承自parent的chilid
var child = Object.create(parent, {
  b: {
    value: 2,
    writable: true,
    enumerable: true,
    configurable: true
  },
  c: {
    value: 3,
    writable: true,
    enumerable: false, // c 为不可枚举属性
    configurable: true
  }
})


// for..in 是最早用来遍历对象（集合）的方法
// for..in 会输出自身以及原型链上可枚举的属性
for (var key in child) {
  // console.log(key) // b a
}

// 如果仅仅想获取自身的属性，可以借助 hasOwnProperty, 可以过滤掉原型链上的属性
for (var key in child) {
  if (child.hasOwnProperty(key)) {
    // console.log(key) // b
  }
}


// Object.keys() 是ES5新增的方法，用来获取自身可枚举的属性键，
// 返回值是包含自身所有可枚举属性的数组
// 可以看出Object.keys()的效果其实和 for..in + hasOwnProperty 一致的
var res1 = Object.keys(child)
console.log(res1) // [ 'b' ]



// Object.getOwnPropertyNames()
// 返回一个由指定对象的所有自身属性的属性名
// （包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组
// 返回值：包含自身的可枚举 + 不可枚举属性的数组
var res2 = Object.getOwnPropertyNames(child)
console.log(res2) // [ 'b', 'c' ]
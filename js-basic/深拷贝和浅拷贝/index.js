// 赋值: 分为赋值（基本数据类型） 和 赋址（引用数据类型）

// let a = {
//   name: 'zhourusheng',
//   book: {
//     title: "You Don't Know JS",
//     price: '45'
//   }
// }
// let b = a

// console.log(b)

// a.name = 'changed'

// b.book.price = '666'
// console.log(a)
// console.log(b)


// 浅拷贝

// Object.assign()
// let a = {
//   name: 'zhourusheng',
//   book: {
//     title: "You Don't Know JS",
//     price: '45'
//   }
// }

// let b = Object.assign({}, a)

// console.log(b)

// a.name = 'changed'

// b.book.price = '666'
// console.log(a)
// console.log(b)

// 展开语法 Spead
// let a = {
//   name: 'zhourusheng',
//   book: {
//     title: "You Don't Know JS",
//     price: '45'
//   }
// }

// let b = {...a}  // 此处用法与Object.assign()一致

// console.log('b', b)

// a.name = 'changed'

// b.book.price = '666'
// console.log('a', a)
// console.log('b', b)

// Array.prototype.slice()


// 深拷贝

// JSON.parse(JSON.stringify(object))


/***
 * 该方法存在以下问题:
 * 1. 会忽略 undefined
 * 2. 会忽略 symbol
 * 3. 不能序列化函数
 * 4. 不能解决循环引用的对象
 * 5. 不能正确处理 new Date()
 * 6. 不能处理正则
 * **/


//  其他深拷贝方法： jQuery.extend() 和 lodash.cloneDeep()

// https://github.com/yygmind/blog/issues/25
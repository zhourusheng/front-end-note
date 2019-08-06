/** 
 * Object.defineProperty
 * */ 

// 定义一个render,渲染视图的方法
function render() {
  console.log('模拟视图更新')
}

// 初始数据
let data = {
  name: '周如生',
  location: {
    x: 100,
    y: 100
  }
}

let arr = [1, 2, 3]
let methods = ['pop', 'shift', 'unshift', 'sort', 'reverse', 'splice', 'push']
// 先获取到原来原型上的方法
let arrayProto = Array.prototype
// 创建一个自己的原型，并重写methods里面的方法
let proto = Object.create(arrayProto)
methods.forEach(method => {
  proto[method] = function() {
    // AOP
    arrayProto[method].call(this, ...arguments)
  }
})


observer(data) // 使对象变为可观察的

function observer(obj) {
  // 类型判断
  if (!obj || typeof(obj) !== 'object'){
    return
  }
  // 遍历
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
  })
  // 递归子属性
  function defineReactive(obj, key, value) {
    observer(value)
    // Object.defineProperty
    Object.defineProperty(obj, key, {
      enumerable: true, // 可枚举(可以遍历)
      configurable: true, // 可配置(如：可删除)
      // getter
      get: function reactiveGetter() {
        console.log('get===', value)
        return value
      },
      // setter
      set: function reactiveSetter(newVal) {
        observer(newVal) // 如果赋值是一个对象，也要递归子属性
        if (newVal !== value) {
          console.log('set===', newVal) // 监听
          render() // 渲染视图
          value = newVal
        }
      }
    })
  }
}

// 更改数据
data.location = {
  x: 1000,
  y: 1000
}
data.name = '哈哈哈'

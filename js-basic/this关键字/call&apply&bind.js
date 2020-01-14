var numbers = [1, 2, 3, 4]

// apply() 求数组最大值，最小值
var MaxApply = Math.max.apply(null, numbers)
console.log(': MaxApply', MaxApply)

var MinApply = Math.min.apply(null, numbers)  // 此处传null是因为不需要this，没有对象去调用这个方法，我只需要用这个方法来帮助运算，所以传这些都是可以的
console.log(': MinApply', MinApply)

/**
 * 原理：Math.max(param1,param1,.....) 中的参数只能为Number, 不能直接接受数组作为参数
 *      Math.max([1,2,3])  // NaN
 *      apply() 会将数组中的参数内容一个接一个的传递给方法，也就是说，会将数组里面参数的内容取出，
 *              从而可以让Math.max() 可以直接使用，这样 就得到了数组中的最值。
 * 
 * 注意：1. apply() 最多只能有两个参数，其中第一个参数指代this要指向的对象，也就是新的this对象，
 *       第二个参数就是一个需要传入调用方法的参数，这个参数必须为数组或者类数组（arguments对象）。
 *       2. apply() 中的第二个参数可以写成null 或者 undefined 或者 window document 都可以。
 *          如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。
 *          在严格模式下，this 的值将会是 undefined。
 *  */ 

// call() 求数组最大值，最小值
var MaxCall = Math.max.call(null, ...numbers)  // 注意使用call() 要使用拓展运算符 ... 将数组展开
console.log(': MaxCall', MaxCall)

var MinCall = Math.min.call(null, ...numbers)
console.log(': MinCall', MinCall)

// for循环 求数组最大值，最小值


// apply() 和 call() 的区别
function add(c, d) {
  return this.a + this.b + c + d
}

var obj = { a: 1, b:3 }

var callSum = add.call(obj, 5, 7) // 1+3+5+7=16
var applySum = add.apply(obj, [10, 20]) // 1+3+10+20=33

console.log(': callSum', callSum)
console.log(': applySum', applySum)

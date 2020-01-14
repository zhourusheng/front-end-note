// Array.prototype.map
// Array.prototype.filter
// Array.prototype.reduce

// 不使用高阶函数
const arr1 = [1, 2, 3, 4]
const arr2 = []
for (let index = 0; index < arr1.length; index++) {
  arr2.push(arr1[index] * 2)
}

console.log(arr2)
console.log(arr1)
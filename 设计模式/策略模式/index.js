

// 计算奖金
// if else 多条件判断实现
// const calculateBonus = function(performanceLevel, salary) {
//   if (performanceLevel === 'S') {
//     return salary * 4
//   }
//   if (performanceLevel === 'A') {
//     return salary * 3
//   }
//   if (performanceLevel === 'B') {
//     return salary * 2
//   }
// }

// console.log(calculateBonus('S', 6000))
// console.log(calculateBonus('A', 4000))


// 使用组合函数重构代码
const performanceS = (salary) => {
  return salary * 4
}
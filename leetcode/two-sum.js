// https://leetcode-cn.com/problems/two-sum/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 暴力法
// 使用两层循环，外层循环计算当前元素与 target 之间的差值，内层循环寻找该差值
// 若找到该差值，则返回两个元素的下标
// 时间复杂度 O(n2)

const twoSum1 = function(nums, tartget) {
  for (let i = 0; i < nums.length; i++) {
    const diff = tartget - nums[i]
    for (let j = i+1; j < nums.length; j++) {
      if (nums[j] === diff) {
        return [i, j]
      }      
    }
  }
}


// 利用数组减少查询时间
// 使用一层循环，每遍历到一个元素就 计算该元素与 target 之间的差值 diff
// 然后以 diff 为下标
// O(n)
var twoSum2 = function(nums, target) {
  let temp = []
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if(temp[diff] !== undefined) {
      return [temp[diff], i]
    }
    temp[nums[i]] = i
  }
}




// res

const nums = [1, 7, 11, 15, 2]
const target = 9

const res1 = twoSum1(nums, target)
const res2 = twoSum2(nums, target)

console.log('res1', res1)
console.log('res2', res2)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//stack: candidate of nums[k]
//minArr: min(nums[0...j])
//traverse: nums[j] from right to left
//1. make sure number in stack > min[i]
//2. if stack.top < nums[j]: return true 
//https://leetcode-cn.com/problems/132-pattern/solution/132mo-shi-by-leetcode-2/
var find132pattern = function(nums) {
    let stack = [] 
    let minArr = nums.slice()
    for (let i = 1; i < nums.length; i++) {
        minArr[i] = Math.min(minArr[i-1], minArr[i])
    }
    for (let i = nums.length; i >= 0; i--) {
        while (stack.length !== 0 && stack[stack.length - 1] <= minArr[i]) {
            stack.pop()
        }
        if (stack[stack.length - 1] < nums[i]) {
            return true
        }
        stack.push(nums[i])
    }
    return false 
};
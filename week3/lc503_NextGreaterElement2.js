/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let map = {} 
    let stack = [] 
    let len = nums.length 
    for (let i = 0; i < len * 2; i++) {
        while (stack.length > 0 && nums[i%len] > nums[stack[stack.length - 1]]) {
            map[stack.pop()] = nums[i%len]
        }
        if (i < len) {
            stack.push(i)
        }
    }
    while (stack.length > 0) {
        map[stack.pop()] = -1
    }
    let result = new Array(len)
    for (let i = 0; i < len; i++) {
        result[i] = map[i]
    }
    return result 
};
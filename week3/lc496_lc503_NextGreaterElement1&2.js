//496. Next Greater Element 1
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result = new Array(nums1.length) 
    let map = {}
    let stack = [] 
    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
            map[stack.pop()] = nums2[i]
        }
        stack.push(nums2[i])
    }
    while (stack.length > 0) {
        map[stack.pop()] = -1 
    }
    for (let i = 0; i < nums1.length; i++) {
        result[i] = map[nums1[i]]
    } 
    return result 
};

//503. Next Greater Element 2
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
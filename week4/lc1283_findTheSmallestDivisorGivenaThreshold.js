/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    
    let left = 1;
    let right = Math.max(...nums);
    
    while (left + 1 < right) {
        let mid = left + ((right - left) >> 1);
        let sum = 0;
        
        sum = findSum(nums, mid);
        
        if (sum > threshold) {
            left = mid;
        } else {
            right = mid;
        }
    }
    
    if (findSum(nums, left) <= threshold) {
        return left;
    }
    
    return right;
};

let findSum = (nums, divisor) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += Math.ceil(nums[i] / divisor);
    }
    return sum;
}
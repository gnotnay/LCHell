/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    let res = 0;
    nums.sort((a,b) => a - b);
    
    for(let i = 0; i < nums.length - 2; i++) {
        let lo = i + 1, hi = nums.length - 1;
        while(lo < hi) {
            if(nums[i] + nums[lo] + nums[hi] < target) {
                res += hi - lo;
                lo++;
            } else {
                hi--;
            }
        }
    }
    return res;
};
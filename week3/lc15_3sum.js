/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    console.log(nums);
    let res = [];
    for(let i = 0; i < nums.length - 2; i++) {
        if(i >= 1 && nums[i] === nums[i-1]) continue;
        let target = 0 - nums[i]
        let lo = i+1, hi = nums.length-1;
        while(lo < hi) {
            if(nums[lo] + nums[hi] > target) {
                hi--;
            } else if(nums[lo] + nums[hi] < target) {
                lo++;  
            } else {
                res.push([nums[i], nums[lo], nums[hi]]);
                while(lo < hi && nums[lo] === nums[lo+1]) lo++;
                while(lo < hi && nums[hi] === nums[hi-1]) hi--;
                lo++;
                hi--;
            }
        }
    }
    
    return res;
};
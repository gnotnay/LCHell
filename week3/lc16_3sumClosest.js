/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let min = Number.MAX_SAFE_INTEGER;
    let ans = 0;
    
    for(let i = 0; i < nums.length - 2; i++) {
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let lo = i + 1, hi = nums.length - 1;
        while(lo < hi) {
            if(Math.abs(target - nums[i] - nums[lo] - nums[hi]) < min) {
                    ans = nums[i] + nums[lo] + nums[hi];    
            }
            min = Math.min(Math.abs(target - nums[i] - nums[lo] - nums[hi]), min);
            
            
            if(nums[i] + nums[lo] + nums[hi] <= target) {
                while(lo < hi && nums[lo] === nums[lo+1]) lo++;
                lo++;
            } else {
                while(lo < hi && nums[hi] === nums[hi-1]) hi--;
                hi--;
            } 
        }
    }
    return ans;
};
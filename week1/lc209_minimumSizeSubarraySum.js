/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
/**essentially we find a min subarray from index 0, based on that subrray we keep substract the elements in left,
 when hit the boundary smaller than s stop the substract and start adding element into the subarray, and when the 
 new sums greater or equal to s then substract again.conclusion is, the for loop will iterate all the possible 
 subarray smaller that first initial subaraay
 **/
var minSubArrayLen = function(s, nums) {
    if(nums === null || nums.length === 0) return 0;
    
    let left = 0;
    let min = nums.length + 1; //Number.MAX_SAFE_INTEGER;
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        while(sum >= s) {
            min = Math.min(i - left + 1, min);
            sum -= nums[left];
            left++;
        }
    }
    
    return (min < nums.length + 1)? min: 0;
}


//follow up, nlogn solution
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if(nums === null || nums.length === 0) return 0;
    
    let min = nums.length + 1;
    let sums = new Array(nums.length);
    
    sums[-1] = 0;
    for(let i = 0; i < nums.length; i++) { 
       sums[i] = sums[i - 1] + nums[i];
    }
    
    for(let left = 0; left < nums.length; left++) {
        let right = bfs(left, nums, sums, s);
        if(right !== -1) min = Math.min(right - left + 1, min);
    }
    
    return (min < nums.length + 1)? min:0;
}

const bfs = (left, nums, sums ,s) => {
    let start = left, end = nums.length - 1;
    while(start + 1 < end) {
        let mid = start + Math.floor((end - start)/2);
        let value = sums[mid] - sums[left - 1]
        if( value>= s) {
            end = mid;
        } else {
            start = mid ;
        }
    }
    
    if(sums[start] - sums[left - 1] >= s) {
        return start;
    } else if(sums[end] - sums[left - 1] >= s) {
        return end;
    } else {
        return -1;
    }
}


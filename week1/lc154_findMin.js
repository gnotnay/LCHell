/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var start = 0;
    var end = nums.length - 1;
    while (start + 1 < end) {
        let mid = start + ((end - start) >> 1);

        if (nums[mid] < nums[end]) {
            end = mid;
        } else if (nums[mid] === nums[end]) {
            end--;
        } else {
            start = mid;
        }
    }
    if (nums[start] < nums[end])
        return nums[start];
    return nums[end];
};
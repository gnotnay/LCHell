/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    
    intervals = intervals.map((interval, index) => {
        interval.index = index;
        return interval;
    });
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    let result = new Array(intervals.length).fill(-1);
    
    for (let i = 0; i < intervals.length; i++) {
        result[intervals[i].index] = binarySearch(intervals[i][1], intervals);
    }
    
    return result;
    
};

let binarySearch = (target, intervals) => {
    let start = 0;
    let end = intervals.length - 1;
    while (start + 1 < end) {
        let mid = start + ((end - start) >> 1);
        if (intervals[mid][0] < target) {
            start = mid;
        } else {
            end = mid;
        }
    }
    
    if (intervals[start][0] >= target) {
        return intervals[start].index;
    }
    
    if (intervals[end][0] >= target) {
        return intervals[end].index;
    }
    
    return -1;
}
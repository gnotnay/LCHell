/**
 * Initialize your data structure here.
 */
var SummaryRanges = function() {
    map = new Object();
    intervals = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {
    if (map[val]) {
        return;
    }
    
    const l = map[val - 1] || 0;
    const r = map[val + 1] || 0;
    
    const len = l + r + 1;
    map[val - l] = len;
    map[val] = len;
    map[val + r] = len; 
    
    let last = 0;
    if (intervals.length > 0) {
        let start = 0, end = intervals.length;
        while (start + 1 < end) {
            let mid = start + ((end - start) >> 1);

            if (intervals[mid][1] < val) {
                start = mid;
            } else if (intervals[mid][1] === val) {
                end = mid;
            }
            else {
                end = mid;
            }
        }
        
        last = intervals[start][1] > val ? start : end;
    }  
     
    if (len === 1) {
        intervals.splice(last, 0, [val, val]);
    } else if (l > 0 && r > 0) {
        const max = intervals[last][1];
        intervals.splice(last, 1);
        intervals[last - 1][1] = max;
    } else if (l > 0) {
        intervals[last - 1][1] = val;
    } else {
        intervals[last][0] = val;
    }
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    return intervals;
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */
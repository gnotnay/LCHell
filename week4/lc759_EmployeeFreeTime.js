/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function(s) {
    let arr = [] 
    for (let i = 0; i < s.length; i++) {
        let cur = s[i]
        for (let j = 0; j < cur.length; j++) {
            arr.push([cur[j].start, 1])
            arr.push([cur[j].end, -1])
        }        
    }
    arr.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1]
        }
        return a[0] - b[0]
    })
    let p = 0
    let count = 0
    let res = []
    while (p < arr.length) {
        count += arr[p][1]
        if (count === 0 & p+1 < arr.length) {
            let newRes = new Interval()
            newRes.start = arr[p][0]
            newRes.end = arr[p+1][0]
            res.push(newRes)
        }
        p++
    }
    return res 
};
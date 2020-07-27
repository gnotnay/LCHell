/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function(target) {
    let res = 0, pre = 0;
    for (let i = 0; i < target.length; i++) {
        res += Math.max(target[i] - pre, 0);
        pre = target[i];
    }
    
    return res;
};
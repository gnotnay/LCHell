/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sInx = 0, tInx = 0;
    while (sInx < s.length && tInx < t.length) {
        if (s[sInx] === t[tInx]) {
            sInx++;
        }
        tInx++;
    }
    
    return sInx === s.length;
};


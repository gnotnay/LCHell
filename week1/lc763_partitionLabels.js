/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let ret = [];
    let left = 0, right = 0;
    let tempLength = 1;
    let set = new Set(); // store visited, can replaced by array
    
    let last = new Array(26).fill(0);
    
    for (let i = 0; i < s.length; ++i)
        last[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    
    for (let start = 0; start < s.length; start++) {
        let end = 0;
        if (!set.has(s[start])) {
            end = last[s.charCodeAt(start) - 'a'.charCodeAt(0)];
            // if we find same char => handle "right" => {1.end <= right (no change), 2. end > right (update right)}
            if (end > right) {
                right = end;
                tempLength = right - left + 1;
            }
        }
        
        set.add(s[start]);
        
        if (start === right) {
            ret.push(tempLength);
            right = 0;
            left = start + 1;
            tempLength = 1;
        }
    }
    
    return ret;
};


var partitionLabels2 = function(S) {
    let partitionLength = [];
    let lastIndexes = Array(26).fill(0);
    
    for (let i = 0; i < S.length; i++) {
        lastIndexes[S.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    }
    
    let left = 0;
    while (left < S.length) {
        
        let end = lastIndexes[S.charCodeAt(left) - 'a'.charCodeAt(0)];
        let right = left;
        
        while (right != end) {
            end = Math.max(end, lastIndexes[S.charCodeAt(right) - 'a'.charCodeAt(0)]);
            right++;
        }
        
        partitionLength.push(right - left + 1);
        left = right + 1;
    }
    
    return partitionLength;
    
};
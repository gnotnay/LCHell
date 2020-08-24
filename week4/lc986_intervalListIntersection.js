/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    let res = [];
    let cur;
    let i = 0, j = 0;
    
    while(i < A.length && j < B.length) {
        cur = [];
        if(A[i][1] < B[j][0]) {
            i++;
            continue;
        }
        if(B[j][1] < A[i][0]) {
            j++;
            continue;
        }
        
        cur.push(Math.max(A[i][0], B[j][0]));
        cur.push(Math.min(A[i][1], B[j][1]));
        res.push(cur);
        
        if(A[i][1] < B[j][1]) {
            i++;
        } else {
            j++;
        }
    }
    
    return res;
};
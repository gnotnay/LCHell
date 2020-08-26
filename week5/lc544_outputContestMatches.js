/**
 * @param {number} n
 * @return {string}
 */
var findContestMatch = function(n) {
    let arr = new Array(n);
    for(let i = 0; i < n; i++) {
        arr[i] = i+1;
    }
    
    while(n > 1) {
        for(let i = 0; i < n/2; i++) {
            arr[i] = '('+ arr[i] + ',' + arr[n-i-1] + ')';  
        }
        n /= 2;
    }
    return arr[0];
};
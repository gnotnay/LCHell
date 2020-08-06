/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(a, b, c, d) {
    let num = 0;
    let map = {};
    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < b.length; j++) {
            if(map[a[i]+b[j]]) {
                map[a[i]+b[j]] += 1;    
            } else {
                map[a[i]+b[j]] = 1;    
            }              
        }        
    }
    
    for(let k = 0; k < c.length; k++) {
        for(let l = 0; l < d.length; l++) {
            if(map[-c[k]-d[l]]) {
                num += map[-c[k]-d[l]];    
            }                    
        }
    }  
    return num;
};
/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
    let index = 0;
    let p = 0;
    
    while (index < target.length && target[index] === "0") {
        index++;
    }
    
    if (index === 0) p++;
    if (index === target.length - 1) return 0;

    for (let i = index; i < target.length; i++) {
        if (i > 0 && target[i] !== target[i - 1]) {
            p++;
        }
    }
    
    return p;
};
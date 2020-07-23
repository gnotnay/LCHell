/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
    let ret = [];
    if (label === 1) {
        return [1];
    }
    
    let labelLevel = findLevel(label);
    let isOddLevel = (labelLevel % 2 === 1);
    
    while (labelLevel >= 0) {
        ret.push(label);
        if (isOddLevel) {// 替换成原来的数，再除以2
            label = replaceNumber(2**labelLevel, 2**(labelLevel+1)-1, label);
            label = label >> 1; 
            
        } else {// 除以2，再替换成原来的数
            label = label >> 1;
            label = replaceNumber(2**(labelLevel-1), 2**(labelLevel)-1, label);
        }
        isOddLevel = !isOddLevel;
        labelLevel--;
    }
    
    return ret.reverse();
};

const findLevel = (target) => {
    let level = 0;
    let start = 2 ** level, end = 2 ** (level + 1) - 1;

    while (target > end) {
        level++;
        end = 2 ** (level + 1) - 1;
    }

    return level;
}

const replaceNumber = (start, end, curr) => {
    return end - curr + start; 
}
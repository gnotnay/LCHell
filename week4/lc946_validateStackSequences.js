/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    if(pushed.length === 0) return true;
    
    let temp = [];
    let i = 0;
    for(let num of pushed) {
        temp.push(num);
        while(temp.length > 0 && temp[temp.length-1] === popped[i]) {
            temp.pop();
            i++;
        }
    }
    
    return temp.length === 0;
};


/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if (num.length <= k) {
        return "0"
    }
    let stack = [] 
    let count = 0 
    for (let dig of num+"0") { 
        while (stack.length > 0 && dig < stack[stack.length-1] && count < k) {    //use stack to find remove digits
            stack.pop() 
            count ++
        }
        stack.push(dig)
    }
    stack.pop()                                                  
    if (stack[0] !== "0") {                                     //no leading zero
        return stack.join("")
    }
    let count0 = 0  
    while (stack[count0] === "0") {
        count0++   
    }
    if (count0 === stack.length) {                             //all nums in stack are zero 
        return "0"
    }
    return stack.slice(count0).join("")                        //remove leading zero 
};
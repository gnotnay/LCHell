/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    let left = Math.max(...weights);
    let right = weights.reduce((acc, cur) => acc + cur);
    
    while (left + 1 < right) {
        let mid = left + ((right - left) >> 1);
        if (countShips(weights, mid) > D) {
            left = mid;
        } else {
            right = mid;
        }
    }
    
    if (countShips(weights, left) <= D) {
        return left;
    } 
    return right;
};

let countShips = (weights, capacity) => {
    let ships = 1;
    let totalSum = 0;
    for (let i = 0; i < weights.length; i++) {
        totalSum += weights[i];
        
        if (totalSum > capacity) {
            ships++;
            totalSum = weights[i];
        }
    }
    
    return ships;
}
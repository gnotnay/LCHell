/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
    let minSpeed = 1;
    let maxSpeed = Math.max(...piles);
    
    while (minSpeed + 1 < maxSpeed) {
        let mid = minSpeed + Math.floor((maxSpeed - minSpeed) / 2);
        finishInH(piles, mid) > H ? minSpeed = mid : maxSpeed = mid;
    }
    
    return finishInH(piles, minSpeed) <= H ? minSpeed : maxSpeed;
};

let finishInH = (piles, speed) => {
    let hour = 0;
    
    piles.forEach(p => {
        hour += Math.ceil(p / speed);
    });
    
    return hour;
}
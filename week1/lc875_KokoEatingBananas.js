/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
    let minSpeed = 1;
    let maxSpeed = piles[0];
    
    for (let i = 1; i < piles.length; i++) {
        if (piles[i] > maxSpeed) {
            maxSpeed = piles[i];
        }
    }
    
    while (minSpeed + 1 < maxSpeed) {
        let mid = minSpeed + Math.floor((maxSpeed - minSpeed) / 2);
        if (finishInH(piles, mid) > H) {
            minSpeed = mid;
        } else {
            maxSpeed = mid;
        }
    }
    
    if (finishInH(piles, minSpeed) <= H) {
        return minSpeed;
    }
    
    if (finishInH(piles, maxSpeed) <= H) {
        return maxSpeed;
    }
};

let finishInH = (piles, speed) => {
    let hour = 0;
    
    for (let i = 0; i < piles.length; i++) {
        if (piles[i] % speed === 0) {
            hour += Math.floor(piles[i] / speed);
        } else {
            hour += (Math.floor(piles[i] / speed) + 1);
        }
    }
    
    return hour;
}
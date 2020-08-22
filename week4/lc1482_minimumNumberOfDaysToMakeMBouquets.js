/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    if (m * k > bloomDay.length) {
        return -1;
    }
    
    let left = Math.min(...bloomDay);
    let right = Math.max(...bloomDay);
    
    while (left + 1 < right) {
        let mid = left + ((right - left) >> 1);
        if (countBouquets(bloomDay, k, mid) < m) {
            left = mid;
        } else {
            right = mid;
        }
    }
    
    if (countBouquets(bloomDay, k, left) >= m) {
        return left;
    }
    
    return right;
};

let countBouquets = (bloomDay, k, day) => {
    let flowers = 0;
    let bouquets = 0;
    
    for (let i = 0; i < bloomDay.length; i++) {
        if (bloomDay[i] <= day) {
            flowers++;
            if (flowers === k) {
                bouquets++;
                flowers = 0;
            }
        } else {
            flowers = 0;
        }
    }
    
    return bouquets;
}
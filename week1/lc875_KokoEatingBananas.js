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

//use eatSum to do bfs
// let count = 0;
// var minEatingSpeed = function(piles, H) {
//     let sum = 0;
//     sum = piles.reduce((acc,cur) => {
//         return acc += cur}, 0);
//     let max = Math.max(...piles);
//     let start = 1, end = max;
//     while(start + 1 < end) {
//         let mid = start + Math.floor((end - start)/2);
//         if(eatSum(mid, piles, H) >= sum) {
//             end = mid;
//         } else {
//             start = mid;
//         }
//     }
//     console.log(count);
//     if(eatSum(start, piles, H) >= sum) {
//         return start;    
//     } 
//     return end;
// };

// const eatSum = (k, piles, H) => {
//     let sum = 0;
//     count++;
//     for(let i = 0; i < piles.length; i++) {
//         if(H >= Math.ceil(piles[i]/k)) {
//             H -= Math.ceil(piles[i]/k);
//             sum += piles[i];
//         } else {
//             sum += H*k;
//         }   
//     }
//     return sum;    
// }
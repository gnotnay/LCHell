/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    let s1Arr = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        s1Arr[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
    }

    let left = 0,
    counter = 0;

    for (let right = 0; right < s2.length; right++) {
        if (s1Arr[s2.charCodeAt(right) - "a".charCodeAt(0)] >= 1) {
            counter++;
        }
    s1Arr[s2.charCodeAt(right) - "a".charCodeAt(0)]--;
    if (counter === s1.length) {
        return true;
    }

    if (right - left + 1 === s1.length) {
            if (s1Arr[s2.charCodeAt(left) - "a".charCodeAt(0)] >= 0) {
                counter--;
            }
            s1Arr[s2.charCodeAt(left) - "a".charCodeAt(0)]++;
            left++;
        }
    }

    return false;
};

const fourSumCount = function (a, b, c, d) {
    let abSum = [];
    let cdSum = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            abSum.push(a[i] + b[j]);
        }
    }
    for (let i = 0; i < c.length; i++) {
        for (let j = 0; j < d.length; j++) {
            cdSum.push(c[i] + d[j]);
        }
    }
    abSum.sort((x, y) => x - y);
    cdSum.sort((x, y) => x - y);
    let ret = 0;
    let pre = 0;
    for (let i = 0; i < abSum.length; i++) {
        while (i > 0 && i < abSum.length && abSum[i] === abSum[i - 1]) {
            ret += pre;
            i++;
        }
        pre = binarySearch(cdSum, -abSum[i])
        ret += binarySearch(cdSum, -abSum[i]);
    }
    return ret;
};
const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    while (start + 1 < end) {
        let mid = start + ((end - start) >> 1);
        if (arr[mid] >= target) {
            end = mid;
        }
        else {
            start = mid;
        }
    }
    let left = arr[start] === target ? start : end;
    left = arr[left] === target ? left : -1;
    if (left === -1) return 0;

    start = 0;
    end = arr.length - 1;
    while (start + 1 < end) {
        let mid = start + ((end - start) >> 1);
        if (arr[mid] > target) {
            end = mid;
        }
        else {
            start = mid;
        }
    }
    let right = arr[end] === target ? end : start;

    return right - left + 1;
};
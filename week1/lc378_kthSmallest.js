/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(matrix, k) {
    let start = matrix[0][0];
    let end = matrix[matrix.length - 1][matrix.length - 1];

    while (start + 1 < end) {
        let mid = start + ((end - start) >> 1);

        if (countLessAndEqualT(matrix, mid) < k) {
            start = mid;
        }
        else {
            end = mid;
        }
    }
    return (countLessAndEqualT(matrix, start) >= k ? start : end);
};

const countLessAndEqualT = function (matrix, t) {
    let counter = 0;
    let i = matrix.length - 1, j = 0;
    while (j < matrix.length && i >= 0) {
        if (matrix[i][j] <= t) {
            counter += i + 1;
            j++;
        }
        else {
            i--;
        }
    }
    return counter;
};
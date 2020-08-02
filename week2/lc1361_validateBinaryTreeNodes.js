/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    let intersect = leftChild.filter((l) => rightChild.includes(l)); // find node that have more than one parents
    intersect = intersect.filter(i => i !== -1);
    if (intersect.length !== 0) return false;
    
    let levels = new Array(n).fill(0);
    for (let i = 0; i < leftChild.length; i++) {
        if (leftChild[i] !== -1) levels[leftChild[i]]++;
        if (rightChild[i] !== -1) levels[rightChild[i]]++;
    }

    let ret = levels.filter(l => l === 0); // find level === 0, which means we have single root
    
    if (ret.length !== 1) return false; // find multiple roots => return false
    
    if (n === 1) { // corner special case: one root should have no left and right leaf
        if (leftChild[0] === -1 & rightChild[0] === -1) return true;
        return false;
    }
    
    let index = levels.indexOf(0); // find the root's index

    if (leftChild[index] === -1 && rightChild[index] === -1) { // determine the root is not a disjoined node
        return false;
    }
    
    return true;
};
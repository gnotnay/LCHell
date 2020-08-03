/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    let nodeParent = new Array(n).fill(0);
    for (let i = 0; i < leftChild.length; i++) {
        if (leftChild[i] !== -1) nodeParent[leftChild[i]]++;
        if (rightChild[i] !== -1) nodeParent[rightChild[i]]++;
    }

    let ret = nodeParent.filter(l => l === 0); // find level === 0, which means we have single root
    let children = nodeParent.filter(l => l > 1);
    
    if (ret.length !== 1 || children.length !== 0) { // find multiple roots => return false
        return false;
    }
    
    if (n === 1) { // corner special case: one root should have no left and right leaf
        if (leftChild[0] === -1 && rightChild[0] === -1) return true;
        return false;
    }
    
    let index = nodeParent.indexOf(0); // find the root's index

    if (leftChild[index] === -1 && rightChild[index] === -1) { // determine the root is not a disjoined node
        return false;
    }
    
    return true;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let ret = [];
    if (root === null) {
        return ret;
    }
    
    let queue = [root];
    let isFromLeft = true; // level scan flag

    while (queue.length !== 0) {
        let tempValues = [];
        let nextLevelNodes = [];
        
        queue.forEach(node => {
            tempValues.push(node.val);

            node.left !== null && nextLevelNodes.push(node.left);
            node.right !== null && nextLevelNodes.push(node.right);
        });
        
        isFromLeft ? ret.push(tempValues) : ret.push(tempValues.reverse());
        
        queue = [...nextLevelNodes];
        isFromLeft = !isFromLeft;
    }

    return ret;
};
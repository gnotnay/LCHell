var sortedListToBST = function(head) {
    curr = head;
    
    const length = getLength(head);
    
    return getBST(0, length - 1);
    
    function getBST(left, right){
        if (left > right) return null;
        
        const mid = left + ((right - left) >> 1);
        const leftChild = getBST(left, mid - 1);
        let node = new TreeNode(curr.val);
        node.left = leftChild;
        curr = curr.next;
        const rightChild = getBST(mid + 1, right);
        node.right = rightChild;
        
        return node;
    }
};

const getLength = (node) => {
    let counter = 0;
    
    while (node !== null) {
        node = node.next;
        counter++;
    }
    
    return counter;
}

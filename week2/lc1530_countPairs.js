var countPairs = function(root, distance) {
    let ret = 0;

    dfs(root);

    return ret;

    function dfs(node) {
        if (node === null) {
            return [];
        }
        
        if (node.left === null && node.right === null) {
            return [1];
        }
        
        let left = dfs(node.left);
        let right = dfs(node.right);
    
        if (left.length > 0) left.unshift(0);
        if (right.length > 0) right.unshift(0);

        for (let i = 0; i < Math.min(distance, left.length); i++) {
            for (let j = 0; j < Math.min(distance, right.length); j++) {
                if (i + j <= distance && left[i] > 0 && right[j] > 0) {
                    ret += left[i] * right[j];
                }
            }
        }
        
        let compound = [];
        let index = 0;
        for (; index < Math.min(left.length, right.length); index++) {
            compound[index] = left[index] + right[index];
        }
    
        if (left.length > right.length) {
            while (index < left.length) {
                compound[index] = left[index];
                index++;
            }
        } else {
            while (index < right.length) {
                compound[index] = right[index];
                index++;
            }
        }

        return compound;
    }
};
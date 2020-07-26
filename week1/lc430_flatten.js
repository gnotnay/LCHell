const flatten = (head) => {
    dfs_flatten(head);

    return head;
}

const dfs_flatten = (node) => {
    if (node === null) {
        return null;
    }

    let child = node.child;
    let next = node.next;
    node.child = null;

    if (child && next) {
        let flattedChildEnd = dfs_flatten(child);
        let flattedNextEnd = dfs_flatten(next);

        node.next = child;
        child.prev = node;

        flattedChildEnd.next = next;
        next.prev = flattedChildEnd;

        return flattedNextEnd;
    } else if (!child && next) {
        let flattedNextEnd = dfs_flatten(next);
        return flattedNextEnd;
    } else if (child && !next) {
        let flattedChildEnd = dfs_flatten(child);
        node.next = child;
        child.prev = node;
        
        return flattedChildEnd;
    } else {
        return node;
    }
}
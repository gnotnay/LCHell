/**
 * @param {number} capacity
 */
class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.pre = null;
        this.next = null;
    }
}
var LRUCache = function(capacity) {
    cap = capacity;
    head = new Node(0, 0);
    tail = new Node(0, 0);
    head.next = tail;
    tail.pre = head;
    map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(map.has(key)) {
        let cur = map.get(key);
        this.remove(cur);
        this.add(cur);
        return cur.val;
    } else {
        return -1;
    }    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let newNode = new Node(key, value);
    if(map.has(key)) {
        this.remove(map.get(key));
    }

    this.add(newNode);
    
    if(map.size > cap) {
        let last = tail.pre;
        this.remove(last);
    }
};

LRUCache.prototype.add = function(node) {
    map.set(node.key, node);
    let headNext = head.next;
    headNext.pre = node;
    node.next = headNext;
    node.pre = head;
    head.next = node;
}

LRUCache.prototype.remove = function(node) {
    map.delete(node.key);
    let pre = node.pre;
    let next = node.next;
    pre.next = node.next;
    next.pre = node.pre;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
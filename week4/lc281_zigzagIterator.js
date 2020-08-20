/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
    this.queue = [];
    if(v1.length > 0) this.queue.push(v1);
    if(v2.length > 0) this.queue.push(v2);
};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
    if(this.queue.length > 0) return true;
    return false;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
    let curArr = this.queue.shift();
    let res = curArr.shift();
    if(curArr.length > 0) this.queue.push(curArr);
    return res;
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
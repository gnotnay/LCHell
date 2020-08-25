
var StockSpanner = function() {
    this.arr = [] 
    this.span = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    res = 1
    
    while (this.arr.length >= 0 && this.arr[this.arr.length - 1] <= price) {
        this.arr.pop()
        res += this.span.pop()
    }
    this.arr.push(price)
    this.span.push(res)
    return res 
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
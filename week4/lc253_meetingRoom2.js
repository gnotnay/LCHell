/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if(intervals.length < 1) return 0;
    
    intervals.sort((a, b) => a[0] - b[0]);
    const minHeap = new MinPriorityQueue();
    
    minHeap.enqueue(intervals[0][1], intervals[0][1]);
    
    for(let i = 1; i < intervals.length; i++) {
        let cur = minHeap.front().element;
        if(intervals[i][0] >= cur) {
            minHeap.dequeue();
            minHeap.enqueue(intervals[i][1], intervals[i][1]);
        } else {
           minHeap.enqueue(intervals[i][1], intervals[i][1]); 
        }
    }
    
    return minHeap.size();
};
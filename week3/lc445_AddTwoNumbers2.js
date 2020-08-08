/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];
    
    while (l1 !== null) {
        stack1.push(l1.val);
        l1 = l1.next;                      //push l1.val to stack
    }
    
    while (l2 !== null) {
        stack2.push(l2.val);               //push l2.val to stack
        l2 = l2.next;
    }
    
    let tail = new ListNode()
    let dummy = tail 
    let carry = 0 
    while (stack1.length !== 0 || stack2.length !== 0 || carry !== 0) {   //pop ele in stack 1 & 2, and contruct a linkedlist  
        let sum = 0
        if (stack1.length !== 0) {
            sum += stack1.pop()
        }
        if (stack2.length !== 0) {
            sum += stack2.pop()
        }
        sum += carry
        tail.next = new ListNode(sum%10)
        tail = tail.next 
        carry = Math.floor(sum/10)
    }
    return reverse(dummy.next)  //reverse this linkedlist
};

const reverse = (head) => {
    let prev = null
    while (head) {
        let headNext = head.next 
        head.next = prev
        prev = head  
        head = headNext  
    }
    //console.log(prev)
    return prev
}
var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];
    
    while (l1 !== null) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    
    while (l2 !== null) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    
    let carry = 0;
    let head = new ListNode();

    while (stack1.length !== 0 || stack2.length !== 0 || carry !== 0) {
        let sum = 0;
        if (stack1.length !== 0) {
            sum += stack1.pop();
        }
        if (stack2.length !== 0) {
            sum += stack2.pop();
        }
        sum += carry;
        const digit = sum % 10;
        carry = Math.floor(sum / 10);
        
        let newNode = new ListNode(digit);
        let headNext = head.next;
        head.next = newNode;
        newNode.next = headNext;
    }
    
    return head.next;
};
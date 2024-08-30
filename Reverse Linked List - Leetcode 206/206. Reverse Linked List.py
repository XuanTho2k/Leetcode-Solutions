class ListNode:
    def __init__(self,val=0,next=None):
        self.val = val
        self.next = next

def reverseList(head:ListNode) -> ListNode:
    cur = head;
    prev = null;

    while cur:
        temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    
    return prev


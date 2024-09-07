class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val;
        self.next = next;

def removeNthFromEnd(head:ListNode)->ListNode:
    d = ListNode()
    d.next = head
    a,b = d,d
    c = 0

    for _ in range(n + 1):
        a = a.next
    
    while a and b:
        a = a.next
        b = b.next

    b.next = b.next.next

    return d.next

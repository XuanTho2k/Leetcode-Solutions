class ListNode:
    def __init__(self, val=0,next=None):
        self.val = val
        self.next = next

def middleLinkedList(head: ListNode) -> ListNode:
    length = 0
    c = head

    while c:
        length+=1

    cnt = 0

    while cnt < length//2:
        head = head.next
        cnt+=1
    
    return head;

def middleLinkedList2P(head: ListNode) -> ListNode:
    s,f = head,head

    while f and f.next:
        f = f.next.next
        s = s.next
    
    return s

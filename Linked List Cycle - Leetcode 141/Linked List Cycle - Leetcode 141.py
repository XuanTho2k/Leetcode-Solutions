class ListNode:
    def __init__(self, val=0, next=None) -> ListNode:
        self.val = val
        self.next = next

def hasCycle(head: ListNode):
    node_s = set()
    c = head

    while c:
        if c in node_s:
            return True
        else:
            node_s.add(c)
            c = c.next
    return False

def hasCycleOptimize(head: ListNode):
    d = ListNode()
    d.next = head
    s, f = d, d

    while f and f.next:
        if s is f:
            return True
        s = s.next
        f = f.next.next

    return False

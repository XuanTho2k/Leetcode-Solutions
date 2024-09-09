class Node:
    def __init__(self,val: int, next: 'None' = None, random: 'None' = None):
        self.val = int(val)
        self.next = next
        self.random = random

def copyRandomList(head: 'Optional[Node]')->'Optional[Node]':
    curr = head
    oldToNew = {}
    while curr:
        oldToNew[curr] = Node(curr.val)
        curr = curr.next

    curr = head
    while curr:
        oldToNew[curr].next = oldToNew[curr.next]
        oldToNew[curr].random = oldToNew[curr.random]

        curr = curr.next

    return oldToNew[head]

def copyRandomListOptimize(head:Node)->Node:
    curr = head
    while curr:
       new_node = Node(curr.val, curr.next) 
       curr.next = new_node
       curr = new_node.next

    curr = head
    while curr:
        if curr.next:
            curr.random.next = curr.next.random if curr.next else None
        curr = curr.next.next

    old_head = head
    new_head = head.next
    curr_old = old_head
    curr_new = new_head

    while curr_old:
        old_head.next = old_head.next.next if old_head.next else None
        new_head.next = new_head.next.next if new_head.next else None
        curr_old = curr_old.next
        curr_new = curr_new.next
    
    return new_head
    
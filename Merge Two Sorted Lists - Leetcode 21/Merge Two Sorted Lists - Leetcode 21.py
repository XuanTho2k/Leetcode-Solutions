class ListNode:
    def __init__(self, val=0,next=None):
        self.val = val
        self.next = next

def mergeTwoLists(list1: ListNode, list2:ListNode) -> ListNode:
    head = ListNode()
    cur = head

    while list1 and list2:
        if list1.val < list2.val:
            cur.next = list1
            lis1 = list1.next
        else:
            cur.next = list2
            list2 = list2.next
        cur = cur.next
    
    cur.next = list1 if list1 else list2

    return head.next
        
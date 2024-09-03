class ListNode {
    int val;
    ListNode next;

    ListNode(){}    
    ListNode(int val){
        this.val = val;
    }
    ListNode(int val, ListNode next)
    {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    public ListNode hasCycle(ListNode head)
    {
        ListNode c = head;
        Set<ListNode> s = new HashSet<>();

        while (c !== null)
        {
            if (s.contains(c))
            {
                return true
            } else {
                s.add(c):
                c = c.next;
            }
        }
    return false;
    }

    public ListNode hasCycleOptimize(ListNode head)
    {
        ListNode d = new ListNode();
        d.next = head;
        ListNode s = d, f = d;

        while( f && f.next)
        {
            if (s === f)
            {
                return true;
            }
            s = s.next;
            f = f.next.next;
        }

        return false;

    }
}

class ListNode {
    int val;
    ListNode next;

    ListNode(){}
    ListNode(int val){
        this.val = val;
    }
    ListNode(int val, ListNode next){
        this.val = val;
        this.next = next;
    }
}

class Solution {
    public ListNode removeNthFromEnd(ListNode head)
    {
        ListNode d = new ListNode(0);
        d.next = head;
        ListNode a = d, b = d;
        int c = 0;

        while (c < n+1 && a != null )
        {
            a = a.next;
            c++;
        }

        while (a != null && b != null)
        {
            a = a.next;
            b = b.next;
        }

        b.next = b.next.next;

        return d.next;
    }
}
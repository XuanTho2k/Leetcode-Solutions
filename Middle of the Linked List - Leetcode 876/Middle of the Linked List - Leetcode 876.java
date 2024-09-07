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
    public ListNode middleLinkedList(ListNode head){
        int length = 0;
        ListNode c = head;

        while (c!=null)
        {
            length++;
            c = c.next;
        }

        int cnt = 0;

        while(cnt < length/2)
        {
            head = head.next;
            cnt++;
        }

        return head;
    }

    public ListNode middleLinkedList2P(ListNode head){
        ListNode s = head;
        ListNode f = head;

        while (f && f.next){
            f = f.next.next;
            s = s.next;
        }

        return s;
    }
}
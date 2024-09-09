class Node{
    int val;
    Node next;
    Node random;
    public Node(int val){
        this.val = val;
        this.next = null;
        this.random = null;
    }
}

class Solution {
    public Node copyRandomList(Node head){
        HashMap<Node, Node> oldToNew = new HahsMap<>();

        Node curr = head;
        while (curr != null )
        {
            oldToNew.put(curr, new Node(curr.val));
            curr = curr.next;
        }

        curr = head;
        while(curr != null)
        {
            oldToNew.get(curr).next = oldToNew.get(curr.next);
            oldToNew.get(curr).random = oldToNew.get(curr.random);
            curr = curr.next;
        }

        return oldToNew.get(head);
    }

    public Node copyRandomListOptimize(Node head){
        Node curr = head;
        while (curr)
        {
            Node new_node = new Node(curr.val, curr.next);
            cur.next = new_node;
            cur = new_node.next;
        }

        curr = head;
        while (curr)
        {
            if(curr.next != null)
            {
                curr.next.random = curr.random ? curr.random.next : null;
            }
            curr = curr.next ? curr.next.next : null;
        }

        Node old_head = head;
        Node new_head = head.next;
        Node curr_old = old_head;
        Node curr_new = new_head;

        while (curr_old)
        {
            old_head.next = old_head.next ? old_head.next.next : null;
            new_head.next = new_head.next ? new_head.next.next : null;
            curr_old = curr_old.next;
            curr_new = curr_new.next;
        }

        return new_head;
    }
}
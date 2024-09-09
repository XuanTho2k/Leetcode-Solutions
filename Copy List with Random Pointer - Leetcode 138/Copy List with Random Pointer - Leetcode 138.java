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
}
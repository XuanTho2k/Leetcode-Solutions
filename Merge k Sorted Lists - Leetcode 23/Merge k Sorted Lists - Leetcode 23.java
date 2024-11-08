class Solution {
    // Time: O(n log k)
    // Space: O(k)
    public ListNode mergeKLists(Listnode[] lists){
        PriorityQueue<ListNode> minHeap = new PriorityQueue<>((a,b)-> Integer(a.val,b.val));

        for(ListNode node:lists){
            if(node!= null){
                minHeap.offer(node);
            }
        }

        ListNode dummy = new ListNode(0)
        ListNode cur = dummy

        while(!minheap.isEmpty()){
            ListNode node = minHeap.poll();
            cur.next = node;
            cur = node;
            if(node.next != null){
                minHeap.offer(node.next);
            }
        }

        return dummy.next;
    }
}
class Solution:
    #  Time: O(n log k)
    #  Space: O(k)
    def mergeKlists(self, lists: List[Optional[ListNode]])->Optional[ListNode]:
        heap = []
        for i, node in enumerate(lists):
            heapq.heappush(heap, (node.val, i, node))
        
        D = ListNode()
        cur = D

        while heap:
            val, i, node = heapq.heappop(heap)
            cur.next = node
            cur = node
            if node:
                heapq.heappush(heap, (node.val, i, node))
            
        return D.next


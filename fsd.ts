class Solution {
  lastStoneWeight(stones: number[]): number {
    const maxHeap = new MaxPriortyQueue();
    for (const s of stones) maxHeap.enqueue(s);

    while (maxHeap.size() > 1) {
      const largest = maxHeap.dequeue().element;
      const nextLargest = maxHeap.dequeue().element;

      if (largest !== nextLargest) {
        maxHeap.enqueue(largest - nextLargest);
      }
    }

    return maxHeap.size() === 0 ? 0 : maxHeap.front();
  }
}

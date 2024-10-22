class Solution {
  // Solution 1: T - O(n + k log n), S - O(1)
  findKthLargest1(nums: number[], k: number): number {
    const maxHeap = new MaxPriorityQueue();
    let count = 0;

    for (let n of nums) maxHeap.enqueue(n);

    for (let i = 0; i < nums.length; i++) {
      const a = maxHeap.dequeue();
      count++;
      if (count === k) return a.element;
    }
    return 0;
  }

  // Solution 2: T - O(n log k), S - O(k)
  findKthLargest2(nums: number[], k: number): number {
    const minHeap = new MinPriorityQueue();

    for (let i = 0; i < k; i++) minHeap.enqueue(nums[i]);

    for (let i = k; i < nums.length; i++) {
      if (nums[i] > minHeap.front().element) {
        minHeap.dequeue();
        minHeap.enqueue(nums[i]);
      }
    }
    return minHeap.front().element;
  }
}

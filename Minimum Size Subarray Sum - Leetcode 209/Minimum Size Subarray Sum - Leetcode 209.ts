class Solution {
  // Solution 1: T - O(n), S - O(1)
  minSubArrayLen(target: number, nums: number[]): number {
    const n = nums.length;
    let [left, min, sum] = [0, Infinity, 0];

    for (let right = 0; right < n; right++) {
      sum += nums[right];

      while (sum >= target) {
        const length = right - left + 1;
        min = Math.min(min, length);
        sum -= nums[left++];
      }
    }
    return min === Infinity ? 0 : min;
  }

  // Solution 2: T - O(log n), S - O(1)
  windowFind(size: number, arr: number[], target: number): boolean {
    let sum = 0;
    let i = 0;
    let j = 0;
    let max = -Infinity;
    const n = arr.length;

    while (j < n) {
      sum += arr[j];
      if (j - i + 1 === size) {
        max = Math.max(sum, max);
        sum -= arr[i];
        i++;
      }
      j++;
    }

    return max >= target;
  }

  minSubArrayLen2(target: number, nums: number[]): number {
    let low = 1,
      high = nums.length,
      mn = 0;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (this.windowFind(mid, nums, target)) {
        high = mid - 1;
        mn = mid;
      } else {
        low = mid + 1;
      }
    }

    return mn;
  }
}

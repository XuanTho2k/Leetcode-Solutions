// Solution 1: T - O(n), S - O(1)
function longestOne(nums: number[], k: number): number {
  const n = nums.length;
  let [w_max, w_start, nums_zero] = [0, 0, 0];

  for (let w_end = 0; w_end < n; w_end++) {
    if (nums[w_end] === 0) {
      nums_zero++;
    }

    while (nums_zero > k) {
      if (nums[w_start] === 0) nums_zero--;
      w_start++;
    }

    w_max = Math.max(w_max, w_end - w_start + 1);
  }
  return 0;
}

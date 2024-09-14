// Solution 1: T - O(n), S - O(1)
const findMaxAverage = (nums: number[], k: number): number => {
  const n = nums.length;
  let cur_sum = 0;

  for (let i = 0; i < k; i++) {
    cur_sum += nums[i];
  }

  let max_avg = cur_sum / k;

  for (let i = k; i < n; i++) {
    cur_sum += nums[i];
    cur_sum -= nums[i - k];

    max_avg = Math.max(max_avg, cur_sum / k);
  }

  return max_avg;
};

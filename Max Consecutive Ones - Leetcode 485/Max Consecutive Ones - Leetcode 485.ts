const findMaxConsecutive = (nums: number[]): number => {
  const n = nums.length;
  let [max_count, w_start, w_end] = [0, 0, 0];

  while (w_end < n) {
    if (nums[w_end] === 1) {
      max_count = Math.max(max_count, w_end - w_start + 1);
      w_end++;
    } else {
      w_end++;
      w_start = w_end;
    }
  }

  return max_count;
};

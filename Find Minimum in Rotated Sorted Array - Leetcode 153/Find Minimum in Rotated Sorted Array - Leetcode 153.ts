const findMin = (nums: number[]): number => {
  const n = nums.length;
  if (n === 1) return nums[0];

  let [left, right] = [0, n - 1];
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

// Solution 1: T - O(log n), S - O(1)
const searchInsert = (nums: number[], target: number) => {
  const n = nums.length;
  let left = 0,
    right = n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

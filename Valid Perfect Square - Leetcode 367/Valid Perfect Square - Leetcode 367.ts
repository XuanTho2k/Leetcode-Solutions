// Solution 1: T - O(log n), S - O(1)
const isPerfectSquare = (num: number): boolean => {
  if (num === 0) return false;

  let left = 1,
    right = num;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (Math.pow(mid, 2) === num) {
      return true;
    } else if (Math.pow(mid, 2) > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

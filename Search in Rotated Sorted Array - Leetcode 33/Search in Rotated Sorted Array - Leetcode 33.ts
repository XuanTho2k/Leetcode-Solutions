const search = (nums: number[], target: number): number => {
  const n = nums.length;
  let [a, b] = [0, n - 1];
  while (a < b) {
    const mid = Math.floor((a + b) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > nums[b]) {
      a = mid + 1;
    } else {
      b = mid;
    }
  }

  let [i, j] = [0, a - 1];
  while (i <= j) {
    const mid = Math.floor((a + b) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }

  let [q, p] = [a, n - 1];
  while (q <= p) {
    const mid = Math.floor((q + p) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      p = mid - 1;
    } else {
      q = mid + 1;
    }
  }

  while (i <= j) {
    const mid = Math.floor((a + b) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }

  return -1;
};

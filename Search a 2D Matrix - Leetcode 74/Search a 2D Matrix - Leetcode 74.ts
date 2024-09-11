// Solution 1: T - O(log m*n), S - O(1)
const searchMatrix = (matrix: number[][], target: number): boolean => {
  const [n, m] = [matrix.length, matrix[0].length];
  let [top, MID, bot] = [0, 0, n - 1];

  while (top <= bot) {
    MID = Math.floor((top + bot) / 2);
    if (matrix[MID][0] === target || matrix[MID][m - 1] === target) {
      return true;
    } else if (matrix[MID][0] < target && matrix[MID][m - 1] > target) {
      break;
    } else if (matrix[MID][0] > target) {
      bot = MID - 1;
    } else {
      top = MID + 1;
    }
  }

  if (top > bot) return false;

  let [left, right] = [0, m - 1];
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (matrix[MID][mid] === target) {
      return true;
    } else if (matrix[MID][mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};

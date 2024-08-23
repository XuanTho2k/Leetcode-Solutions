// Solution 1: Time - O(n), Space - O(1)
const maxArea = (heights) => {
  const n = heights.length;
  let l = 0,
    r = n - 1;
  let max_area = 0;

  while (l < r) {
    const h = Math.min(heights[l], heights[r]);
    const w = r - l;
    const a = h * w;
    max_area = Math.max(max_area, a);

    if (heights[l] < heights[r]) {
      l++;
    } else {
      r--;
    }
  }

  return max_area;
};

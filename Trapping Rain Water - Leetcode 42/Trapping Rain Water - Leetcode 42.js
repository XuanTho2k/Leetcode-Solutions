const trap = (heights) => {
  const n = heights.length;
  let lWall = 0,
    rWall = 0;
  const maxLeft = Array(n).fill(0);
  const maxRight = Array(n).fill(0);

  // Two pointer & Dynamic Programming
  for (let i = 0; i < n; i++) {
    const j = n - i - 1;
    maxLeft[i] = lWall;
    maxRight[j] = rWall;
    lWall = Math.max(lWall, heights[i]);
    rWall = Math.max(rWall, heights[j]);
  }

  let summ = 0;
  for (let i = 0; i < n; i++) {
    const potentialWater = Math.min(maxLeft[i], maxRight[i]);
    summ += Math.max(0, potentialWater - heights[i]);
  }

  return summ;
};

const threeSumTs = (nums) => {
  const ans: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let lo = i + 1,
      hi = nums.length - 1;
    while (lo < hi) {
      const sum = nums[i] + nums[lo] + nums[hi];
      if (sum > 0) {
        hi--;
      } else if (sum < 0) {
        lo++;
      } else {
        ans.push([nums[i], nums[lo], nums[hi]]);
        lo++;
        hi--;
        while (lo < hi && nums[lo] === nums[lo - 1]) {
          lo++;
        }
        while (lo < hi && nums[hi] === nums[hi + 1]) {
          hi--;
        }
      }
    }
  }

  return ans;
};

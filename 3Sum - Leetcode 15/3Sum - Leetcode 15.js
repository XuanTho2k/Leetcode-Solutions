// Solution 1: Time - O(n2), Space - O(n)
const threeSum = (nums) => {
  const ans = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    else if (i > 0 && nums[i] == nums[i - 1]) continue;

    let low = i + 1,
      high = nums.length - 1;

    while (low < high) {
      const summ = nums[i] + nums[low] + nums[high];
      if (summ === 0) {
        ans.push([nums[i], nums[low], nums[high]]);
        low++;
        high--;

        while (low < high && nums[low] === nums[low - 1]) {
          low++;
        }
        while (low < high && nums[high] === nums[high + 1]) {
          high--;
        }
      } else if (summ < 0) {
        low++;
      } else {
        high--;
      }
    }
  }

  return ans;
};

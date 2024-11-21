class Solution {
  subset(nums: number[]): number[][] {
    const res: number[][] = [];
    const sol: number[] = [];

    function backtrack(i: number) {
      if (i === nums.length) {
        res.push([...sol]);
        return;
      }

      backtrack(i + 1);
      sol.push(nums[i]);
      backtrack(i + 1);
      sol.pop();
    }
    backtrack(0);
    return res;
  }
}

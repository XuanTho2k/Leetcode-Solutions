class Solution {
  combinationSum(nums: number[], target: number): number[][] {
    const ans: number[][] = [];
    const sol: number[] = [];
    const n = nums.length;

    function backtrack(i: number, cur_sum: number) {
      if (cur_sum === target) {
        ans.push([...sol]);
        return;
      }
      if (i === n || cur_sum > target) return;

      backtrack(i + 1, cur_sum);

      sol.push(nums[i]);
      backtrack(i, cur_sum + nums[i]);
      sol.pop();
    }

    backtrack(0, 0);
    return ans;
  }
}

class Solution {
  // Time: O(n!) - S: O(n)
  permutate(nums: number[]): number[][] {
    const n = nums.length;
    const ans: number[][] = [];
    const res: number[] = [];

    function backtrack() {
      if (res.length === n) {
        ans.push([...res]);
        return;
      }

      for (const num of nums) {
        if (!res.includes(num)) {
          res.push(num);
          backtrack();
          res.pop();
        }
      }
    }

    backtrack();

    return ans;
  }
}

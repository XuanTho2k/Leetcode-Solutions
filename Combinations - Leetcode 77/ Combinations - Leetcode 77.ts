class Solution {
  combinations(n: number, k: number): number[][] {
    const ans: number[][] = [];
    const sol: number[] = [];

    const backtrack = (x: number) => {
      if (sol.length === k) {
        ans.push([...sol]);
        return;
      }

      const left = x;
      const still_need = k - sol.length;
      if (left > still_need) {
        backtrack(x - 1);
      }

      sol.push(x);
      backtrack(x - 1);
      ans.pop();
    };

    backtrack(n);
    return ans;
  }
}

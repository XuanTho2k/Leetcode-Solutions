class Solution {
  letterCombinations(digits: string): string[] {
    if (!digits) return [];
    const ans: string[] = [];
    const sol: string[] = [];
    const n = digits.length;
    const letter_map = {
      "2": "abc",
      "3": "def",
      "4": "ghi",
      "5": "jkl",
      "6": "mno",
      "7": "pqrs",
      "8": "tuv",
      "9": "wxyz",
    };

    function backtrack(i: number) {
      if (i === n) {
        ans.push(sol.join(""));
      }
      for (const letter of letter_map[digits[i]]) {
        sol.push(letter);
        backtrack(i + 1);
        sol.pop();
      }
    }
    backtrack(0);
    return ans;
  }
}

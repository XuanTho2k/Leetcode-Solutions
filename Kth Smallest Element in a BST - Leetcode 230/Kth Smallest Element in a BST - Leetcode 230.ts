import { TreeNode } from "../DataStructure/TreeNode";

class Solution {
  // Solution 1: T - O(n), S - O(n)
  kthSmallest(root: TreeNode | null, k: number): number {
    if (!root) return 0;

    const ans = [0];
    const count = [k];

    function dfs(node: TreeNode | null): number | void {
      if (!node) return 0;

      dfs(node.left);

      if (count[0] == 1) ans[0] = node.val;
      count[0]--;

      if (count[0] > 0) dfs(node.right);
    }
    dfs(root);

    return ans[0];
  }
}

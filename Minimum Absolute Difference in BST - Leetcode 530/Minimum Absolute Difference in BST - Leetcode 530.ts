import { TreeNode } from "../DataStructure/TreeNode";

class Solution {
  getMinimumDifference(root: TreeNode | null): number {
    if (root === null) return 0;
    let min,
      prev: any = [Infinity, null];

    function dfs(node: TreeNode | null) {
      if (node === null) return 0;

      dfs(node.left);

      if (prev !== null) min = Math.min(min, Math.abs(node.val - prev));

      prev = node.val;

      dfs(node.right);
    }

    dfs(root);
    return min;
  }
}

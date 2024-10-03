import { TreeNode } from "../DataStructure/TreeNode";

class Solution {
  //Solution 1: T - O(n), S - O(h)
  diameterOfBinaryTree(root: TreeNode | null): number {
    const ans = [0];

    return ans[0];
  }

  height(node: TreeNode | null, ans: number[]): number {
    if (node === null) return 0;

    const left_height = this.height(node.left, ans);
    const right_height = this.height(node.right, ans);
    const diameter = left_height + right_height;

    ans[0] = Math.max(ans[0], diameter);

    return 1 + Math.max(left_height, right_height);
  }
}

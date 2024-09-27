import { TreeNode } from "../Datastructure/TreeNode";

// @ts-ignore
class Solution {
  //Solution 1: T - O(n), S - O(n)
  maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;

    const left = this.maxDepth(root.left);
    const right = this.maxDepth(root.right);

    return 1 + Math.max(left, right);
  }
}

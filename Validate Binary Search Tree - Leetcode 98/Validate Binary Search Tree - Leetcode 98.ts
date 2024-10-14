import { TreeNode } from "../DataStructure/TreeNode";

class Solution {
  // Solution 1: T - O(n), S - O(1)
  isValidBST(root: TreeNode | null): boolean {
    if (root === null) return false;

    return this.isValid(root, -Infinity, Infinity);
  }

  isValid(node: TreeNode | null, min: number, max: number): boolean {
    if (node === null) return true;

    if (node.val <= min || node.val >= max) return false;

    return (
      this.isValid(node.left, min, node.val) &&
      this.isValid(node.right, node.val, max)
    );
  }
}

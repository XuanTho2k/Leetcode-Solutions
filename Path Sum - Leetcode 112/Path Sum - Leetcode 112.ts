import { TreeNode } from "../DataStructure/TreeNode";

class Solution {
  //Solution 1: T - O(n), S - O(1)
  hasPathSum(root: TreeNode | null, target: number): boolean {
    return this.sumNode(root, 0, target);
  }
  sumNode(node: TreeNode | null, cur_value: number, target: number): boolean {
    if (node === null) return false;

    cur_value += node.val;

    if (node.left === null && node.right === null) return cur_value === target;

    return (
      this.sumNode(node.left, cur_value, target) ||
      this.sumNode(node.right, cur_value, target)
    );
  }
}

import { TreeNode } from "../DataStructure/TreeNode";
class Solution {
  isBalanced(root: TreeNode | null): boolean {
    let ans = [true];

    this.calculateHeight(root, ans);

    return ans[0];
  }

  calculateHeight(node: TreeNode | null, ans: boolean[]): number {
    if (node === null) return 0;

    const left_height = this.calculateHeight(node.left, ans);
    const right_height = this.calculateHeight(node.right, ans);

    if (Math.abs(left_height - right_height) > 1) {
      ans[0] = false;
      return 0;
    }

    return 1 + Math.max(left_height, right_height);
  }
}

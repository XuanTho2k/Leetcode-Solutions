import { TreeNode } from "../DataStructure/TreeNode";

class Solution {
  // Solution 1: T - O(n), S - O(n)
  levelOrder(root: TreeNode | null): number[][] {
    const ans: number[][] = [];
    const queue = [root];

    while (queue.length > 0) {
      const n = queue.length;
      const level: number[] = [];

      for (let i = 0; i < n; i++) {
        const node = queue.shift();
        level.push(node?.val!);

        if (node?.left) queue.push(node.left);
        if (node?.right) queue.push(node.right);
      }

      ans.push(level);
    }
    return ans;
  }
}

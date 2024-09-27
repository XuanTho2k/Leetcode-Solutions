class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// @ts-ignore
class Solution {
  invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    [root.left, root.right] = [root.right, root.left];

    this.invertTree(root.left);
    this.invertTree(root.right);

    return root;
  }
}

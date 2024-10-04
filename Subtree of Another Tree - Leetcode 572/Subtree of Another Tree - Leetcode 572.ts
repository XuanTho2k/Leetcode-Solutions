import { TreeNode } from "../DataStructure/TreeNode";

class Solution {
  //Solution 1: T - O(n), S - O(h)
  isSubTree(root: TreeNode | null, subTree: TreeNode | null): boolean {
    return this.hasSubTree(root, subTree);
  }

  isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) return true;
    if ((p === null && q !== null) || (p !== null && q === null)) return false;
    if (p?.val !== q?.val) return false;

    return (
      this.isSameTree(p?.left!, q?.left!) &&
      this.isSameTree(p?.right!, q?.right!)
    );
  }

  hasSubTree(node: TreeNode | null, subTree: TreeNode | null): boolean {
    if (node === null) return false;
    if (this.isSameTree(node, subTree)) return true;

    return (
      this.hasSubTree(node.left, subTree) ||
      this.hasSubTree(node.right, subTree)
    );
  }
}

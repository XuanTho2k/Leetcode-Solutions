import { TreeNode } from "../DataStructure/TreeNode";

class Solution {
  lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
  ): TreeNode | null {
    const lsa = [root];
    const [min, max] = [Math.min(p?.val!, q?.val!), Math.max(p?.val!, q?.val!)];
    function search(root: TreeNode | null) {
      if (root === null) return;

      lsa[0] = root;

      if (root === p || root === q) {
        return;
      } else if (root.val > max) {
        search(root.left);
      } else if (root.val < min) {
        search(root.right);
      } else return;
    }
    return lsa[0];
  }
}

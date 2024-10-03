import { TreeNode } from "../DataStructure/TreeNode";

class Solution {
  isSymmetricTree(root: TreeNode | null): boolean {
    return this.symmetric(root?.left!, root?.right!);
  }
  symmetric(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) return true;
    if ((p === null && q !== null) || (p !== null && q === null)) return false;
    if (p?.val !== q?.val) return false;

    return (
      this.symmetric(p?.left!, q?.right!) && this.symmetric(p?.right!, q?.left!)
    );
  }
}

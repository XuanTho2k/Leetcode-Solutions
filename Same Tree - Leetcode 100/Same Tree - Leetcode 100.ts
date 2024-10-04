import { TreeNode } from "../DataStructure/TreeNode";

class Solution {
  isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    return this.balanced(p, q);
  }

  balanced(n: TreeNode | null, m: TreeNode | null): boolean {
    if (n === null && m === null) return true;
    if ((n === null && m !== null) || (n !== null && m === null)) return false;
    if (n?.val !== m?.val) return false;

    return (
      this.balanced(n?.left!, m?.left!) && this.balanced(n?.right!, m?.right!)
    );
  }
}

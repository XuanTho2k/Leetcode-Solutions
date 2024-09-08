class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}
// Solution 1: T - O(n), S - O(n)
const copyRandomList = (head: _Node | null): _Node | null => {
  if (!head) return null;

  const oldToNew = new Map();
  let curr: _Node | null = head;

  while (curr) {
    oldToNew.set(curr, new _Node(curr.val));
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    oldToNew.get(curr).next = oldToNew.get(curr.next) || null;
    oldToNew.get(curr).random = oldToNew.get(curr.random) || null;
    curr = curr.next;
  }

  return oldToNew.get(head);
};

// Solution 2: T - O(n), S - O(1)

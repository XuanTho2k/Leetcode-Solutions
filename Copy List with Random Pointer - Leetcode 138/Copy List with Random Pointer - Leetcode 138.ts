class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node | null, random?: _Node) {
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

const copyRandomListOptimize = (head: _Node | null): _Node | null => {
  if (!head) return null;

  let curr: _Node | null = head;
  while (curr) {
    const new_node = new _Node(curr.val, curr.next);
    curr.next = new_node;
    curr = new_node.next;
  }

  curr = head;
  while (curr) {
    if (curr.next) {
      curr.next.random = curr.random ? curr.random.next : null;
    }
    curr = curr.next ? curr.next.next : null;
  }

  const old_head: _Node | null = head;
  const new_head: _Node | null = head.next;
  let curr_old: _Node | null = old_head;
  let curr_new: _Node | null = new_head;

  while (curr_old && curr_new) {
    curr_old.next = curr_old.next ? curr_old.next.next : null;
    curr_new.next = curr_new.next ? curr_new.next.next : null;
    curr_old = curr_old.next;
    curr_new = curr_new.next;
  }

  return new_head;
};

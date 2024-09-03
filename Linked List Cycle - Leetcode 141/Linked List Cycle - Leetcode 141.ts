class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Solution 1: O(n), T(n)
const hasCycle = (head: ListNode | null) => {
  const s = new Set();
  let c = head;

  while (c !== null) {
    if (s.has(c)) {
      return true;
    } else {
      s.add(c);
      c = c.next;
    }
  }
  return false;
};

// Solution 2: T(n), S(1)
const hasCycleOptimize = (head: ListNode | null) => {
  const d = new ListNode();
  d.next = head;
  let s = d,
    f = d;
  while (f && f.next) {
    if (s === f) {
      return true;
    }
    s = s.next!;
    f = f.next.next!;
  }
  return false;
};

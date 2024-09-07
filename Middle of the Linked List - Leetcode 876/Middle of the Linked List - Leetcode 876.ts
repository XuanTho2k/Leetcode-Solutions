class ListNode {
  public val: number;
  public next: ListNode;
  constructor(val: number, next: ListNode) {
    this.val = val;
    this.next = next;
  }
}
// Solution 1: T - O(n), S - (1)
const middleLinkedList = (head: ListNode) => {
  let length = 0;
  let c = head;
  while (c) {
    length++;
    c = c.next;
  }
  let cnt = 0;
  while (cnt < Math.floor(length)) {
    head = head.next;
  }

  return head;
};

// Solution 2: T - O(n), S - (1)
// with Two pointer slow and fast

const middleLinkedList2P = (head: ListNode) => {
  let s = head,
    f = head;

  while (f && f.next) {
    f = f.next.next;
    s = s.next;
  }

  return s;
};

class ListNode {
  public val: number;
  public next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const removeNthFromEnd = (
  head: ListNode | null,
  n: number
): ListNode | null => {
  let d = new ListNode();
  d.next = head;
  let a: ListNode | null = d,
    b: ListNode | null = d,
    c: number = 0;
  while (c < n + 1 && a != null) {
    a = a.next;
  }

  while (a && b) {
    a = a.next;
    b = b.next;
  }

  b!.next = b!.next!.next;

  return d.next;
};

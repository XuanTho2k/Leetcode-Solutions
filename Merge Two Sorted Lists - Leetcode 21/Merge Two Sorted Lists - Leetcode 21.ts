class ListNode {
  public val: number;
  public next: ListNode | null;
  constructor(val?: number, next?: ListNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null) => {
  const head = new ListNode();
  let cur = head;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }

  cur.next = list1 ? list1 : list2;

  return head.next;
};

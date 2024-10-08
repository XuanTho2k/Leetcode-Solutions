/*
class ListNode {
    val: number
    next: ListNode || null
    constructor(val?:number, next?:ListNode | null){
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
*/

// Solution 1: Time - O(n), Space O(1)
function deleteDuplicates(head: ListNode | null): ListNode | null {
  let cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
}

export default deleteDuplicates;

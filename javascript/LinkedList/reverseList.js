const { ListNode } = require('./LinkedList');

const reverseList = (head) => {
  if (head === null || head.next === null) return head;
  const p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};

const l1 = ListNode(1);
l1.next = ListNode(2);
l1.next.next = ListNode(3);
l1.next.next.next = ListNode(4);


reverseList(l1);

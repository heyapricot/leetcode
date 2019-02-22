const { ListNode } = require('./LinkedList');

const addTwoNumbers = (l1, l2) => {
  let runOne = l1;
  let runTwo = l2;
  let valOne = 0;
  let valTwo = 0;
  let carry = 0;
  let head = ListNode(NaN);
  let result = head;
  let sum = NaN;

  while (runOne || runTwo || carry === 1) {
    if (runOne) {
      valOne = runOne.val;
      runOne = runOne.next;
    }

    if (runTwo) {
      valTwo = runTwo.val;
      runTwo = runTwo.next;
    }

    sum = valOne + valTwo + carry;

    [valOne, valTwo, carry] = [0, 0, 0];

    if (sum > 9) {
      carry = 1;
      sum -= 10;
    }
    result.next = ListNode(sum);
    result = result.next;
  }

  head = head.next;
  return head;
};

const l1 = ListNode(5);
// l1.next = ListNode(4);
// l1.next.next = ListNode(3);

const l2 = ListNode(5);
// l2.next = ListNode(6);
// l2.next.next = ListNode(4);

console.log(addTwoNumbers(l1, l2));

const ListNode = (val) =>{
  let next = null;
  return { next, val }
};

const mergeTwoLists = (l1, l2) => {
  let result = null;
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  if (l1.val <= l2.val){
    result = l1;
    result.next = mergeTwoLists(l1.next, l2);
  }
  else {
    result = l2;
    result.next = mergeTwoLists(l1,l2.next);
  }
  return result
};

let l1 = ListNode(1);
l1.next = ListNode(2);
l1.next.next = ListNode(4);

let l2 = ListNode(1);
l2.next = ListNode(3);
l2.next.next = ListNode(4);

console.log(mergeTwoLists(l1,l2));

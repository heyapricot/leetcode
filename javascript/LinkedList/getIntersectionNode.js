const getIntersectionNode = (headA, headB) => {
  let target = null; // node reference

  // walk through A branch.
  let currA = headA;
  while (currA) {
    currA.marked = true; // label as marked
    currA = currA.next;
  }

  // walk again from B branch.
  while (headB) {
    if (Object.prototype.hasOwnProperty.call(headB, 'marked')) { // this node is marked by currA
      target = headB;
      break;
    }
    headB = headB.next;
  }

  // clean up
  while (headA) {
    if (Object.prototype.hasOwnProperty.call('marked')) delete headA.marked
    headA = headA.next;
  }

  return target;
};

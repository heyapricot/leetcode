const swapPairs = (head) => {
  while (head !== null && head.next !== null){
    [head.val, head.next.val] = [head.next.val, head.val]
    head = head.next.next;
  }
}

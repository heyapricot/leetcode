const { ListNode } = require('./LinkedList');

const deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};

module.exports = {
  deleteNode,
};

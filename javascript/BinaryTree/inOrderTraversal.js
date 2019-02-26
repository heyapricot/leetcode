const { TreeNode } = require('./treeNode');

const inorderTraversal = (node) => {
  const stack = [];
  const output = [];
  let current = node;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    output.push(current.val);
    current = current.right;
  }
  return output;
};

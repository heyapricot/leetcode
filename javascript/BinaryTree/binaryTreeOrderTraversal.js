

const levelOrder = (root) => {
  const result = [];

  const traversal = (node, level = 0) => {
    if (!node) return;
    if (!result[level]) result.push([]);
    result[level].push(node.val);
    [node.left, node.right].forEach((elem) => { traversal(elem, level + 1); });
  };

  traversal(root);

  return result;
};

const root = TreeNode(1);
root.left = TreeNode(2);
root.left.left = TreeNode(3);
root.left.left.left = TreeNode(4);
root.left.left..left = TreeNode(5);


console.log(levelOrder(root));

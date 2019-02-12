const TreeNode = (val) => {
  const left = null;
  const right = null;
  return { left, right, val };
};

const isSymmetric = (root) => {
  const BFS = (node, queue = [], output = []) => {
    if (node !== null) {
      // Visit node
      output.push(node.val);

      // Add children to the queue
      [node.left, node.right].forEach((nod) => { queue.push(nod); });
    } else {
      // node is null
      output.push(null);
    }

    if (queue.length > 0) output = BFS(queue.splice(0, 1)[0], queue, output);
    return output;
  };

  return BFS(root);
};


const root = TreeNode(1);
root.left = TreeNode(2);
root.left.left = TreeNode(3);
// root.left.right = TreeNode(4);
root.right = TreeNode(3);
root.right.left = TreeNode(4);
root.right.right = TreeNode(3);

console.log(isSymmetric(root));

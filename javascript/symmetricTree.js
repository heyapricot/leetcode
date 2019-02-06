const TreeNode = (val) => {
  const left = null;
  const right = null;
  return { left, right, val };
};

const isSymmetric = (root, queue = []) => {
  let leftGrand = [];
  let rightGrand = [];

  [root.left, root.right].forEach((node, index) => {
    if (node !== null) {
      queue.push(node);
      const grandChildren = [node.left, node.right].map((nod) => {
        if (nod !== null) {
          return nod.val;
        }

        return '0';
      });
      index % 2 === 0 ? leftGrand = grandChildren : rightGrand = grandChildren;
    }
  });

  if (leftGrand.join('') !== rightGrand.reverse().join('')) return false;

  if (queue.length > 0) isSymmetric(queue.splice(0, 1)[0], queue);

  return true;
};


const root = TreeNode(1);
root.left = TreeNode(2);
root.right = TreeNode(3);
// root.left.left = TreeNode(3);
// root.left.right = TreeNode(4);
// root.right.left = TreeNode(4);
// root.right.right = TreeNode(3);

console.log(isSymmetric(root));

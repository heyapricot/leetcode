const TreeNode = (val) => {
  const left = null;
  const right = null;
  return { left, right, val };
};

const levelOrder = (root) => {
  // BFS
  // Save value on an array that can be shared between calls
  // Generate subarrays from output array


  const BFS = (root, queue = [], output = []) => {
    if (root === null) {
      output.push(null);
      return null;
    }
    // Visit node
    output.push(root.val);
    // Add children to the queue
    [root.left, root.right].forEach((child) => { queue.push(child); });
    // Dequeue and call recursively
    while (queue.length > 0) {
      BFS(queue.splice(0, 1)[0], queue, output);
    }

    return output;
  };

  let final = [];
  let results = BFS(root);
  if (results !== null){
    let levelQty = Math.ceil(Math.log2(results.length));
    for (let i = 0; i <= levelQty; i += 1) {
      let level = results.splice(0, 2 ** i);
      for (let j = 0; j < )  .filter(elem => elem !== null);
      if (level.length > 0) final.push(level);
    }
  }

  return final;
};

const root = TreeNode(1);
root.left = TreeNode(2);
root.left.left = TreeNode(3);
root.left.left.left = TreeNode(4);
root.left.left.left.left = TreeNode(5);


console.log(levelOrder(root));

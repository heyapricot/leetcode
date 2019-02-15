const isSymmetric = (root) => {
  if (!root) return true;


  const isMirror = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right || left.val !== right.val) return false;
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  };

  return isMirror(root.left, root.right);
};

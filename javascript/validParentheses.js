const isValid = (str) => {
  const stack = [];
  const relation = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  let output = false;

  str.split('').forEach((char) => {
    const last = stack[stack.length - 1];
    if (Object.keys(relation).includes(char)) {
      // Closing
      (last === relation[char]) ? stack.pop() : stack.push(char);
    } else {
      stack.push(char);
    }
  });

  if (stack.length === 0) output = true;

  return output;
};

const sequence = (array, elementIndex, end) => {
  let start = array[elementIndex];
  const direction = (start < end) ? 1 : -1;
  const output = [];
  start *= direction;
  end *= direction;

  for (let i = start; i <= end; i += 1) {
    const elem = [...array];
    elem[elementIndex] = (i < 0) ? i * -1 : i;
    output.push(elem);
  }
  return output;
};

const spiralSequence = (matrix) => {
  const width = matrix[0].length;
  const height = matrix.length;
  let leftmost = 0;
  let rightmost = width - 1;
  let top = leftmost;
  let bottom = height - 1;
  let direction = 0;
  const output = [];

  while (rightmost >= leftmost && bottom >= top) {
    switch (direction % 4) {
      case 0:
        sequence([top, leftmost], 1, rightmost).forEach((coords) => { output.push(matrix[coords[0]][coords[1]]); });
        top += 1;
        break;
      case 1:
        sequence([top, rightmost], 0, bottom).forEach((coords) => { output.push(matrix[coords[0]][coords[1]]); });
        rightmost -= 1;
        break;
      case 2:
        sequence([bottom, rightmost], 1, leftmost).forEach((coords) => { output.push(matrix[coords[0]][coords[1]]); });
        bottom -= 1;
        break;
      case 3:
        sequence([bottom, leftmost], 0, top).forEach((coords) => { output.push(matrix[coords[0]][coords[1]]); });
        leftmost += 1;
        break;
    }
    direction += 1;
  }
  return output;
};


console.log(spiralSequence([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]));

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

const spiral = (width) => {
  let leftmost = 0;
  let rightmost = width - 1;
  let top = leftmost;
  let bottom = rightmost;
  let direction = 0;

  while (rightmost >= leftmost && bottom >= top) {
    switch (direction % 4) {
      case 0:
        console.log(sequence([leftmost, top], 0, rightmost));
        top += 1;
        break;
      case 1:
        console.log(sequence([rightmost, top], 1, bottom));
        rightmost -= 1;
        break;
      case 2:
        console.log(sequence([rightmost, bottom], 0, leftmost));
        bottom -= 1;
        break;
      case 3:
        console.log(sequence([leftmost, bottom], 1, top));
        leftmost += 1;
        break;
    }
    direction += 1;
  }
};


spiral(3);

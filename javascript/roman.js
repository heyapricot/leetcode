const roman = (input, index = 0) => {
  const equivalence = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
  };
  const currentChar = input[index];
  let currentValue = equivalence[currentChar];
  let nextValue = 0;
  if (index < input.length - 1) nextValue = roman(input, index + 1);

  switch (currentChar) {
    case 'I':
    case 'X':
    case 'C':
    case 'M':
      if (nextValue < 3 * currentValue) currentValue += nextValue;
      else currentValue = nextValue - currentValue;
      break;
    case 'V':
    case 'L':
    case 'D':
      if (nextValue < currentValue) currentValue += nextValue;
      break;
  }

  return currentValue;
};

console.log(roman('MII'));

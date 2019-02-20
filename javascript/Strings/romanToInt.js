const romanToInt = (input) => {
  const equivalence = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
  };
  const reverse = input.split('').reverse();

  return reverse.reduce((acc, char, i) => {
    let val = equivalence[char];
    const previousVal = equivalence[reverse[i - 1]] || 0;
    if (previousVal > val && previousVal <= 10 * val) val *= -1;
    return acc + val;
  }, 0);
};

console.log(romanToInt('IV'));

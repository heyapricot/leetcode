const countPrimes = (n) => {
  // Generate array of numbers up to n
  const sequence = Array.from(Array(n + 1)).fill(null);
  for (let i = 2; i < n; i += 1) {
    if (sequence[i] === null) {
      sequence[i] = true;
      let multiple = i * 2;
      while (multiple <= n) {
        sequence[multiple] = false;
        multiple += i;
      }
    }
  }
  return sequence.filter(element => element).length;
};

console.log(countPrimes(10));

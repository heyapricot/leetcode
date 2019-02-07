const digitConversion = {
  0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
};

const stringToNum = str => str.split('').reverse().reduce((acc, val, idx) => acc + (digitConversion[val] * (10 ** idx)), 0);

const myAtoi = (str) => {
  let input = str.match(/[-+]*\d+/);
  if (input === null) return 0;
  input = input[0];
  let signs = input.match(/[-+]+/);
  if (signs == null) signs = [];
  let digits = input.match(/\d+/);
  let sign = 1;

  if (str.length < 1
    || str[0].match(/[-+0-9\s]/) === null
    || signs.join('').length > 1
    // Are there no digits?
    || digits === null
  ) return 0;

  if (signs.join('') === '-') sign = -1;

  let result = stringToNum(digits.join('')) * sign;

  if (result <= (2 ** 31) * -1) result = (2 ** 31) * -1;
  if (result > (2 ** 31) - 1) result = (2 ** 31) - 1;

  return result;
};

console.log(myAtoi('42'));
console.log(myAtoi('+'));
console.log(myAtoi('   -42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('words and 987'));
console.log(myAtoi('-91283472332'));
console.log(myAtoi(' +0 123'));
console.log(myAtoi('.1'));
console.log(myAtoi(''));
console.log(myAtoi('-5-'));
console.log(myAtoi('123-'));
console.log(myAtoi('- 234'));


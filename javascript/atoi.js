// Implement atoi which converts a string to an integer.
// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found.
// Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible
// Interprets them as a numerical value.
// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.
// If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.
// If no valid conversion could be performed, a zero value is returned.

const myAtoi = (input) => {
  if (input.length <= 0) return 0;
  let signModifier = 1;
  // Find first non whitespace
  let startIndex = ((str) => {
    let index = 0;
    while (str[index].match(/\s/) !== null) {
      index += 1;
    }
    return index;
  })(input);

  // First non-whitespace char is not a sign or a digit
  if (input[startIndex].match(/[-+\d]/) === null) return 0;
  // Optional plus or minus sign
  if (input[startIndex].match(/[-+]/) !== null) {
    if (input[startIndex] === '-') signModifier = -1;
    startIndex += 1;
  }

  const cleanInput = input.substring(startIndex);

  const getDigits = ((text) => {
    let index = 0;
    while (index < text.length) {
      if (text[index].match(/\d/) === null) break;
      index += 1;
    }
    return text.substring(0, index);
  })(cleanInput);

  if (getDigits.length <= 0) return 0;

  return Number(getDigits) * signModifier;
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

const addDigits = (num) => {
  let digits = num.toString().split('');
  let condition = 0;
  do {
    condition = digits.reduce((acc, val)=> acc + Number(val), 0)
    digits = condition.toString().split('');
  } while(condition > 9 || condition < 0);
  return condition;
};

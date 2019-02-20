const isPalindrome = str => {
  // sanitize

  const sanitize = str.toLowerCase().match(/[a-z0-9]/g);
  if (sanitize === null) return true;
  const middle = Math.floor(sanitize.length / 2);
  if (sanitize.length % 2 !== 0) {
    sanitize.splice(middle, 1);
  }

  console.log(sanitize.slice(0, middle).join(''));
  console.log(sanitize.slice(middle).reverse().join(''));
  return (sanitize.slice(0, middle).join('') === sanitize.slice(middle).reverse().join(''));
};

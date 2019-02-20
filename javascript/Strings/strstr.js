const strStr = (haystack, needle) => {
  const first = needle[0];
  for (let i = 0; i < haystack.length; i += 1) {
    if (haystack[i] === first) {
      // The first char matches
      let j = 1;
      while (needle[j] === haystack[i + j] && j < needle.length) {
        j += 1;
      }
      if (j === needle.length) return i;
    }
  }
  return -1;
};

console.log(strStr('Hello', 'z'));

const base26convert = (char, index) => (char.charCodeAt(0) - 64) * (26 ** index);
const titleToNumber = title => title.split('').reverse().reduce((acc, val, idx) => base26convert(val, idx) + acc, 0);

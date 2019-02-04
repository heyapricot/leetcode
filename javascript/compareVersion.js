const compareVersion = (first, second) => {
  // Convert
  let a = first.split('.');
  let b = second.split('.');
  // Sanitize
  a = a.map(val => `${Number(val)}`);
  b = b.map(val => `${Number(val)}`);
  let output = 0;

  let difference = a.length - b.length;
  if (difference > 0) {
    // b is smaller
    b = b.concat(Array.from(Array(difference)).fill(0));
  } else {
    a = a.concat(Array.from(Array(difference * -1)).fill('0'));
  }

  console.log(parseInt(a.join(''), 10));
  console.log(parseInt(b.join(''), 10));

  difference = parseInt(a.join(''), 10) - parseInt(b.join(''), 10);

  if (difference > 0) {
    output = 1;
  } else if (difference < 0) {
    output = -1;
  }

  return output;
};

console.log(compareVersion('1.1', '1.01'));

let convertToTitle = n => {
  let i = n;
  const reminders = [];
  do {
    reminders.push(i % 26);
    i = Math.floor(i / 26);
    console.log(`i: ${i}`);
  } while (i !== 0);
  console.log(reminders)
  let output = reminders.reduce((acc, val) => {
      return acc + String.fromCharCode(val + 65);
  }, '');
  console.log(output);
};

convertToTitle(25);

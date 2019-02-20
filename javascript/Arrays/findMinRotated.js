const findMin = (nums) => {
  let runner = 0;
  for (let i = 0; i < nums.length; i += 1) {
    runner = i + 1;
    if (nums[runner] < nums[i] && runner !== nums.length) return nums[runner];
  }
  return nums[0];
};

console.log(findMin([3, 4, 5, 1, 2]));

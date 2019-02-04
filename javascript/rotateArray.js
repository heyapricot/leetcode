const rotate = (nums, k) => {
  for(let i = 0; i < k; i += 1){
    nums.splice(0,0,nums.pop());
  }
  return nums;
};

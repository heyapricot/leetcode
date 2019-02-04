const rotate = (nums, k) => {
  for(let i = 0; i < k; i += 1){
    nums.splice(0,0,nums.pop());
    console.log(nums)
  }
  return nums;
};


console.log(rotate([1,2,3,4,5,6,7], 3));

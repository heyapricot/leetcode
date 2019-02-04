const removeDuplicates = (nums) => {
  const dup = [];
  const length = nums.length;
  for(let i = 0; i < length; i += 1){
    dup.push(nums[i]);
    let runner = i + 1;
    let dupCount = 0;
    while (nums[i] === nums[runner]){
      runner += 1;
      dupCount += 1;
    }
    i += dupCount;
  }
  return dup.length;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

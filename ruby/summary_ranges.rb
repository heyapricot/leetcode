def summary_ranges(nums)
  output = []
  idx = 0
  range_start = 0
  while idx < nums.length
    if nums[idx + 1] != nums[idx] + 1
      range = range_start == idx ? "#{nums[idx]}" : "#{nums[range_start]}->#{nums[idx]}"
      output.push(range)
      range_start = idx + 1
    end
    idx += 1
  end
  output
end

p summary_ranges([0,1,2,4,5,7])
p summary_ranges([0,2,3,4,6,8,9])
#["0->2","4->5","7"]
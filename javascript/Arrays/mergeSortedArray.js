const merge = (nums1, m, nums2, n) => {
  if (n > 0) {
    let firstIdx = m - 1;
    let secondIdx = n - 1;
    for (let i = nums1.length - 1; i >= 0; i -= 1) {
      if (nums1[firstIdx] > nums2[secondIdx] && firstIdx >= 0) {
        [nums1[i], nums1[firstIdx]] = [nums1[firstIdx], nums1[i]];
        firstIdx -= 1;
      } else if (secondIdx >= 0) {
        [nums1[i], nums2[secondIdx]] = [nums2[secondIdx], nums1[i]];
        secondIdx -= 1;
      }
    }
  }
  return nums1;
};

console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3));

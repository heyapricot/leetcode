def is_subsequence(substring, original)
  sub_idx = 0
  idx = 0
  match_count = 0

  while idx < original.length && sub_idx < substring.length
    if original[idx] == substring[sub_idx]
      match_count += 1
      sub_idx += 1
    end

    idx += 1
  end

  match_count == substring.length
end

p is_subsequence("abc", "ahbgdc")
p is_subsequence("axc", "ahbgdc")
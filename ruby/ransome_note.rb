def can_construct(ransom_note, magazine)
  char_count = Hash.new(0).merge(magazine.split('').tally)
  ransom_note.each_char do |char|
    value = char_count[char]-=1
    return false if value < 0
  end

  true
end

p can_construct("a", "b")
p can_construct("aa", "ab")
p can_construct("aa", "aab")
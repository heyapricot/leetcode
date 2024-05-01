MAPPING = {
  ')' => '(',
  ']' => '[',
  '}' => '{'
}.tap { |h| h.default = '' }

def is_valid(string)
  stack = []
  string.each_char do |char|
    next stack.pop if MAPPING[char] == stack.last

    stack.push(char)
  end

  stack.empty?
end


p is_valid('()')
p is_valid('()[]{}')
p is_valid('(]')
p is_valid('[')
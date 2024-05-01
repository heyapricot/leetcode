test = [
  {'id':1, 'question_name':"What is your name?", 'question_value': "Jack"},
  {'id':2, 'question_name':"What is your hobby?", 'question_value': "Rugby"},
  {'id':3, 'question_name':"What is your name?", 'question_value': "Peter"},
  {'id':2, 'question_name':"What is your hobby?", 'question_value': "Tennis"},
]

def transform(arr)
  output = Hash.new([])
  arr.each do |hash|
    output[hash[:question_name]] = output[hash[:question_name]] + [hash.slice(:id, :question_value)]
  end
  output
end

p transform(test)
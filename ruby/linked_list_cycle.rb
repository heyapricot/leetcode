# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {Boolean}
def hasCycle(head)
  visited = []
  current = head

  while current
    return true if visited.include?(current)

    visited.push(current)
    current = current.next
  end

  false
end
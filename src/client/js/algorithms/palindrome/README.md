**Question:** Determine if a string is a palindrome. A palindrome is a piece of text that is spelt the same when reversed.

[Link to analysis and answer](http://www.growingwiththeweb.com/2014/02/determine-if-a-string-is-a-palindrome.html)

#Analysis

This problem can be trivially solved by looping through each character and checking it against the character on the opposite side. There is a problem with this though because half the work being done is redundant as it’s checking all characters two times.

Consider the palindrome "madam", this algorithm would make the following comparisons:

m ↔ m
a ↔ a
d ↔ d
a ↔ a
m ↔ m

All that needs to be compared to prove it’s a palindrome are the first two characters against the last two since the middle one does not need to be checked:

m ↔ m
a ↔ a

This leads us to our initial solution:

function isPalindrome (text)
  if text is null
    return false
  left ← 0
  right ← text.length - 1
  while (left < right)
    if text[left] is not text[right]
      return false
    left ← left + 1
    right ← right - 1
  return true
// Single for-loop declaration with concatenation

function reverse(s) {
  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
  return o;
}

// This is most likely my favorite implementation, due to its unnecessary cryptic nature.

// Using only a single for-loops parameters, I was able to decrement through the parsed in string

// And concatenate each character to a new string to return.
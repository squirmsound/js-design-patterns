// Recursion with substring and charAt

function reverse(s) {
  return (s === '') ? '' : reverse(s.substr(1)) + s.charAt(0);
}

// The above example recursively calls itself, passing in the inputted string, excluding the first character on each iteration, which is instead appended to the result.

// Iterating through this process until no input is present (the base case) results in a reversed string.
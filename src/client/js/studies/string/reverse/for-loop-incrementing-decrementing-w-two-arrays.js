// Incrementing/decrementing for-loop with two arrays

function reverse(s) {
  var o = [];
  for (var i = s.length - 1, j = 0; i >= 0; i--, j++)
    o[j] = s[i];
  return o.join('');
}

const reversedString = reverse('squirm');
console.log('REVERSEDSTRING', reversedString);

// Create an empty array

// Iterate over the length of the string with both incrementing/decrementing counters.

// The array position uses the incrementing counter where as the parsed in string uses the decrementing one.

// Finally the created array is joined into a single string and returned.
// Incrementing for-loop with array pushing and charAt

function reverse(s) {
  var o = [];
  for (var i = 0, l = s.length; i <= l; i++)
    o.push(s.charAt(l - i));
  return o.join('');
}

const reversedString = reverse('squirm');
console.log('REVERSEDSTRING', reversedString);

// Instead of using two counters however I use one incrementing value that gets deducted from the total length of the parsed in string.

// This calculated value determines the position of the next character to be pushed onto the new array (using the ‘push()’ function instead of ‘[]’).

// The other difference from the last example is that it uses the strings ‘charAt()’ method instead of its array capabilities.
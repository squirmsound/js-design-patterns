// Decrementing for-loop with concatenation

function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

// decrementing for-loop that appends each character of the input to a new string in reverse order. I was able to access the parsed strings individual characters similar to the way you would reference an array’s items.

const reversedString = reverse('squirm');
console.log('REVERSEDSTRING', reversedString);
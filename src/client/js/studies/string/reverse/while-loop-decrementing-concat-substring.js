// Decrementing while-loop with concatenation and substring

function reverse(s) {
  var i = s.length,
    o = '';
  while (i > 0) {
    o += s.substring(i - 1, i);
    i--;
  }
  return o;
}

// Using a decrementing while-loop I was able to implement this method.

// Again harnessing concatenation, I was able to achieve the iteration through the string in a similar fashion to the for-loop used in the first two examples.

// I was then able to use the strings ‘substring()’ function to retrieve each desired character.
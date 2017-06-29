// Decrementing for-loop with concatenation

function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

// decrementing for-loop that appends each character of the input to a new string in reverse order.
// I was able to access the parsed strings individual characters similar to the way you would reference an array’s items.

const reversedString = reverse('squirm');
console.log('REVERSEDSTRING', reversedString);


/* Here hello's length equals 5
       For each iteration: i = str.length - 1 and newString = newString + str[i]
       First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
       Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
       Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
       Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
       Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
   End of the FOR Loop*/

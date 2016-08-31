// Reversing a string using built-in array prototype

function reverse(s) {
  return s.split('')
    .reverse()
    .join('');
}

const reversedString = reverse('squirm');
console.log('REVERSEDSTRING', reversedString);

// This implementation takes advantage of the ‘reverse()’ method provided by the Array prototype.

// First it splits the string into a real array

// Then calls the ‘reverse()’ method

// Finally returns the joined array.
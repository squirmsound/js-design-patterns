const reverseString = (str) => {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
// reverseString("hello");
console.log('REVERSESTRING("HELLO")', reverseString("hello"))
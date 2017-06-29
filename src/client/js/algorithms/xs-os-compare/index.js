/*
  Check to see if a string has the same amount of 'x's and 'o's.
  The method must return a boolean and be case insensitive.
  The string can contains any char.
  XO("ooxx") => true
  XO("xooxx") => false
  XO("ooxXm") => true
  XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
  XO("zzoo") => false
*/

function XO(str) {
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "o") {
      sum++;
    } else if (str[i].toLowerCase() === "x") {
      sum--;
    }
  }
  return sum === 0;
}


console.log(XO("ooxx")); // true
console.log(XO("xooxx")); // false
console.log(XO("ooxXm")); // true
console.log(XO("zpzpzpp")); // true
console.log(XO("zzoo")); // false
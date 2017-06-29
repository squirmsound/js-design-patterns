// Create a function named divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (use Either String a in Haskell).

/*
* Returns the list of divisors (in ascending order) of the given integer.
* Examples:
*   divisorList(1) = [1]
*   divisorList(5) = [1, 5]
*   divisorList(12) = [1, 2, 3, 4, 6, 12]
*/
function listDivisors(n) {
  if (n < 1)
  throw "Argument error";

  var small = [];
  var large = [];
  var end = Math.floor(Math.sqrt(n));

  for (var i = 1; i <= end; i++) {
    if (n % i == 0) {
      small.push(i);
      if (i * i != n)  // Don't include a square root twice
        large.push(n / i);
    }
  }
  large.reverse();
  return small.concat(large);
}
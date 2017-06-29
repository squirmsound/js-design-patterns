import $ from 'jquery';
/* Step through answer
1.) Create your function with number to test as arg
2.) Use a while loop to see if that number is divisible by any other number less then that number. While will always run while that condition is true
3.) Modulus = 0 lets us know that it is divisible by another number
4.) Increment divisor until you reach your number

*/

function isPrime(n) {
  let divisor = 2;

  while (n > divisor) {
    if (n % divisor === 0) {
      const message = 'divisble by ' + divisor;
      return message;
    } else {
      divisor++;
    }
  }
  const isPrimeEval = n + ' is a prime number';
  return isPrimeEval;
}

/* UI CODE */
$('#testNumber').click(function(){
  const numberToTest = $('#prime').val();
  const result = isPrime(numberToTest);
  $('#result').html(result)
});

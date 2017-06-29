function numberToArray(startingNumber) {
  return startingNumber.toString().split('').map(function(numberAsString) {
    return +numberAsString;
  });
}

function digital_root(startingNumber) {
  var result = numberToArray(startingNumber).reduce(function(memo, digit) {
    return(memo + digit);
  });
  return result.toString().length > 1 ? digital_root(result) : result;
}
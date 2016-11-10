function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') '
    + numbers.substring(3, 6)
    + '-'
    + numbers.substring(6);
}
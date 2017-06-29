function digPow(n, p){
  var total = 0;
  ('' + n).split('').map(function(num,i){
    total += Math.pow(num,i + p);
  })
  return String(total / n).indexOf('.') < 0 ? total / n : -1;
}
// OR
function myfunction(a){
  const x = a.toString();
  const y = x.split("");
  const z = y.reverse();
  const result = z.join("");

  return result;
}

// OR
function reverse(n) {
  for(var r = 0; n; n = Math.floor(n / 10)) {
    r *= 10;
    r += n % 10;
  }
  return r;
}


// OR
const reversed = num.toString().split('').reverse().join('');
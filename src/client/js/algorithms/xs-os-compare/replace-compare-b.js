function XO(str) {
  let x = str.match(/x/gi);
  console.log('X', x)
  let o = str.match(/o/gi);
  console.log('O', o)
  return (x && x.length) === (o && o.length);
}

// console.log(XO("ooxx")); // true
// console.log(XO("xooxx")); // false
console.log(XO("ooxXm")); // true
// console.log(XO("zpzpzpp")); // true
// console.log(XO("zzoo")); // false
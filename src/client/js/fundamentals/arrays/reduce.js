// var total = [0, 2, 2, 3].reduce(function(a, b) {
//   return a + b;
// }, 0);
// console.log('TOTAL', total)
// // total == 6

var uniq = names.slice() // slice makes copy of array before sorting it
.sort(function(a,b){
  return a > b;
})
.reduce(function(a,b){
  if (a.slice(-1)[0] !== b) a.push(b); // slice(-1)[0] means last item in array without removing it (like .pop())
  return a;
},[]); // this empty array becomes the starting value for a

// one liner
return names.slice().sort(function(a,b) {
  return a > b;
})
.reduce(function(a,b) {
  if (a.slice(-1)[0] !== b){
    a.push(b);
  }
  return a;
},[]);
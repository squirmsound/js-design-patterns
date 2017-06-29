// Array
// ----------------------------------
function foo() {
  return [ 1, 2, 3, 4 ];
}

// const temp = foo(), a = temp[0], b = temp[1], c = temp[2], d = temp[3];

// console.log(a, b, c, d);
// 1 2 3 4


// Object
// ----------------------------------
function bar() {
  return { x: 4, y: 5, z: 6 };
}
 var tmp = bar(), x = tmp.x, y = tmp.y, z = tmp.z;

 // console.log(x, y, z);
 // 4 5 6

var [a, b, c, d ] = foo();
var {x: x, y: y, z: z} = bar();

console.log(a, b, c);
console.log(x, y, z);
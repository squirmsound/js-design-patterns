// To solve the above in O(n) time complexity (without sorting).

var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];

var obj={};

for(var i = 0; i< arr.length; i++){
  if(!obj[arr[i]]){
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]] = obj[arr[i]] + 1;
  }
}

var result = [];

for(var key in obj) {
  if(obj[key] > 1){
    result.push(Number(key)) // change this to result.push(key) to find duplicate strings in an array
  }
}

console.log(result)
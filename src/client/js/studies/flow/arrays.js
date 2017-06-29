// @flow

// Arrays
// This type describes JavaScript array objects and the type of the elements contained within the array.

// Indexing into an array with type Array<T> will always yield a value with type T. That is, Flow assumes arrays are dense and does not do bounds checking.

function total(numbers: Array<number>) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

total([1, 2, 3, 4])

let strArray: string[] = ['a','b','v', '9'];
let strAnswer: string = strArray[3];

let array: number[] = [1, 2, 3.14, 42];
let theAnswer: number = array[3]; // 42
let offTheEnd: number = array[100]; // No error

let array2: Array<string> = ["an alternate", "syntax", "for arrays"];

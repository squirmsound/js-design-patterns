// Given an array, sort the array using Selection Sort algorithm.

const list = [12, 35, 87, 26, 9, 28, 7];

function insertionSort(array) {
  // Check to see if the array is as we expect
  if(array === null || array.length < 2) {
    return;
  }

  // store length
  const n = array.length;

  //
  for(let i = 1; i < n; i++) {
    let tmp = array[i];
    let j = i - 1;
    // Compare minIndex with the next number
    while(j >= 0 && tmp < array[j]) {

      // if the next number is smaller, assign to minIndex
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = tmp;
  }
  return array;
}

const sorted = insertionSort(list);
console.log('INSERTION SORTED', sorted)


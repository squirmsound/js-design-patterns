// Given an array, sort the array using Selection Sort algorithm.

const list = [12, 35, 87, 26, 9, 28, 7];

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function selectionSort(array) {

  // Check to see if the array is as we expect
  if(array === null || array.length < 2) {
    return;
  }

  // store length
  const n = array.length;

  //
  for(let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Compare minIndex with the next number
    for(let j = i + 1; j < n; j++) {

      // if the next number is smaller, assign to minIndex
      if(array[minIndex] > array[j]) {
        minIndex = j;
      }
    }

    // if the current index is not equal to our stored value in minIndex
    // and if
    if(i !== minIndex && array[i] !== array[minIndex]) {
      swap(array, i, minIndex);
    }
  }
  return array;
}



const sorted = selectionSort(list);
console.log('SORTED', sorted)


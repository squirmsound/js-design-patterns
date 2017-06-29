// Given an array, sort the array using Bubble Sort algorithm.
const list = [12, 35, 87, 26, 9, 28, 7];

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function bubbleSort(array) {
  if(array === null || array.length < 2 ){
    return;
  }

  let n = array.lenght;
  let swapped = true;

  while(swapped) {
    swapped = false;
    for(let j = 1; j < n; j++){
      if(array[j - 1] > array[j]){
        swap(array, j - 1, j);
        swapped = true;
      }
    }
    n--;
  }
}

const bubbleSorted = bubbleSort(list);
console.log('BUBBLESORTED', bubbleSorted);
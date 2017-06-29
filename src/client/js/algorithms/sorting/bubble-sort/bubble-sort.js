/*
* Bubble sort implementation in JavaScript
*/


/**
* Swaps two values in an array.
* @param {Array} items The array containing the items.
* @param {int} firstIndex Index of first item to swap.
* @param {int} secondIndex Index of second item to swap.
* @return {void}
*/
// function swap(items, firstIndex, secondIndex){
//   var temp = items[firstIndex];
//   items[firstIndex] = items[secondIndex];
//   items[secondIndex] = temp;
// }

const swap = (items, fi, si) => {
  let temp = items[fi];
  items[fi] = items[si];
  items[si] = temp;
}

/**
* A bubble sort implementation in JavaScript. The array
* is sorted in-place.
* @param {Array} items An array of items to sort.
* @return {Array} The sorted array.
*/
function bubbleSort(items){

  const len = items.length; // set length of items
  let i; // init i
  let j; // init j
  let stop; // init stop

  for (i = 0; i < len; i++) { // i is set to 0, loop until i is greater than len, increment i
    for (j = 0, stop = len - i; j < stop; j++){
      if (items[j] > items[j + 1]){
        swap(items, j, j + 1);
      }
    }
  }

  return items;
}


// const bubbleSort = (items) => {
//
//   for(i = 0; i < len; i++){
//     for(j = 0, stop = len - i; j < stop; j++){
//       if(items[j] > items[j + 1]){
//         swap(items, j, j + 1);
//       }
//     }
//   }
// }

arr = [1,2,3,4,5,6,7];

// bubbleSort(arr)
console.log('BUBBLESORT(ARR)', bubbleSort(arr))
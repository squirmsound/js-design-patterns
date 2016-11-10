/**
* Binary search implementation in JavaScript
* Uses a binary search algorithm to locate a value in the specified array.
* @param {Array} items The array containing the item.
* @param {variant} value The value to search for.
* @return {int} The zero-based index of the value in the array or -1 if not found.
*/

const binarySearch = (items, value) => {

  const startIndex  = 0;
  const stopIndex   = items.length - 1;
  const middle      = Math.floor((stopIndex + startIndex)/2);

  while(items[middle] != value && startIndex < stopIndex){

    //adjust search area
    if (value < items[middle]){
      stopIndex = middle - 1;
    } else if (value > items[middle]){
      startIndex = middle + 1;
    }

    //recalculate middle
    middle = Math.floor((stopIndex + startIndex)/2);
  }

  //make sure it's the right value
  return (items[middle] != value) ? -1 : middle;
}

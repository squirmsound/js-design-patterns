// I implemented an array-based approach where
// the children of node i (numbering in level-order traversal) were at the 2*i index for the left child
// and 2*i + 1 for the right child.
function binarySearch(key, inputArray) {
  var low  = 0,
  high = inputArray.length - 1,
  mid;

  while (low <= high) {
    mid = low + (high - low) / 2;
    if ((mid % 1) > 0) { mid = Math.ceil(mid); }

    if (key < inputArray[mid]) { high = mid - 1; }
    else if (key > inputArray[mid]) { low = mid + 1; }
    else { return mid; }
  }

  return null;
}

// run the binary search
binarySearch(3, [1,2,4]); //returns null
binarySearch(3, [2,3,5]); //returns 1
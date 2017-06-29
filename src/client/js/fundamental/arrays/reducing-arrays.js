import { boxarts } from './data/boxarts';

const boxartList = boxarts;
exports.reducingArrays = () => {
  let currentSize;
  let maxSize = -1;
  let largestBoxart;

  boxartList.forEach(function (boxart) {
    currentSize = boxart.width * boxart.height;
    if (currentSize > maxSize) {
      largestBoxart = boxart;
      maxSize = currentSize;
    }
  });

  console.log('REDUCTING ARRAYS', largestBoxart);
  return largestBoxart;
}

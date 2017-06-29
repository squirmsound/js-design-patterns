/**
 * @param {Integer[]} list List of integers
 * @returns {Integer} The most frequently occuring integer from the list
 */

// NOTE: THIRD
var list = [1,2,3,4,5,5];

function mostFrequentInteger(list) {
      // Trying to figure out if i could write
      // this without a counts obj
      var counts = {};
  var highest = 0;
  var mostFrequent;
  //for performance I don't want to do this.
  list.forEach(function(num) {
    if (counts.hasOwnProperty(num)) {
      counts[num]++;
    }else {
      counts[num] = 1;
    }

    if(counts[num] > highest) {
      mostFrequent = num;
    }
  });
    return mostFrequent;
}
mostFrequentInteger([1,2,3,4,5,5,,4,4]);
console.log('MOSTFREQUENTINTEGER([1,2,3,4,5,5,4,4])', mostFrequentInteger([1,2,3,4,5,5,5,4,4,5]))

// NOTE: FIRST
// var list = [1,2,3,4,5,5];
//
// function mostFrequentInteger(list) {
//     var obj = {},
//     item,
//     output = [];
//
//     // create a new object with the values of list
//     // as keys and their count as their value
//     for(item of list) {
//          // check for item
//          if(obj.hasOwnProperty(item)){
//              // parse arg, provide decimal, add one for index
//              obj[item] = parseInt(obj[item], 10)+1;
//          }else {
//              obj[item] = 1;
//          }
//
//     }
//     // console.log(obj); logs {1:1,2:1,3:1,4:1,5:2}
//     // push duplicates to 'output'
//     for (var key in obj){
//         if(obj.hasOwnProperty(key)) {
//             if(obj[key] > 1){
//                 output.push(key);
//             }
//         }
//     }
//     //console.log('output', output); logs output ['5']
//     return output;
// }
//
//
// mostFrequentInteger(list);

// NOTE: SECOND
// function mostFrequentInteger(list) {
//   var counts = {};
//   var highest = 0;
//   var mostFrequent;
//
//   list.forEach(function(num) {
//     if (counts.hasOwnProperty(num)) {
//       counts[num]++;
//     }else {
//       counts[num] = 1;
//     }
//
//     if(counts[num] > highest) {
//       mostFrequent = num;
//     }
//   });
//
//   return mostFrequent;
// }
// mostFrequentInteger([1,2,3,4,5,5,5,5,6,6,6]);
//
// console.log('DUPES([1,2,3,4,5,5,5,5,6,6,6])', mostFrequentInteger([1,2,3,4,5,5]))


// // Array.prototype.duplicates = function(){
// //
// //   var arr = this,
// //   obj = {},
// //   item,
// //   output = [];
// //
// //   for (item of arr){
// //     if (obj.hasOwnProperty(item)){
// //       obj[item] = parseInt(obj[item],10)+1;
// //     }else{
// //       obj[item] = 1;
// //     }
// //   }
// //
// //   for (var key in obj) {
// //     if (obj.hasOwnProperty(key)) {
// //       if (obj[key] > 1){
// //         output.push(key);
// //       }
// //     }
// //   }
// //
// //   return output;
// // };
//
// var list = ['1',12,3,4,5,5,'1'];
//
// function mostFrequentInteger(list) {
//
//   var obj = {},
//   item,
//   output = [];
//
//   for (item of list) {
//     if (obj.hasOwnProperty(item)) {
//       obj[item] = parseInt(obj[item], 10) + 1;
//       console.log('parseInt', parseInt(obj[item], 10) + 1);
//     }else {
//       obj[item] = 1;
//       console.log('obj[item]', obj[item]);
//     }
//   }
//   console.log(obj);
//
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (obj[key] > 1){
//         output.push(key);
//       }
//     }
//   }
//   console.log('output', output);
//
//   return output;
// }
//
//
// console.log(mostFrequentInteger(list));

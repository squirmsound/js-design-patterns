// You have given an integer array which contains numbers from 1 to 100 but one number is missing, you need to write a Java program to find that missing number in an array. You cannot use any open source library or Java API method which solves this problem. One trick to solve this problem is to calculate sum of all numbers in the array and compare with expected sum, the difference would be the missing number.

// The trick is to require you to calculate sum of numbers and then subtract that from actual sum, but you can not use that if array has more than one missing numbers. On the other hand, BitSet solution is more general, as you can use it to find more than one missing values on integer array.

var numArray = [0189459, 0189460, 0189461, 0189463, 0189465];
var mia= [];

    for(var i = 1; i < numArray.length; i++)
    {
        if(numArray[i] - numArray[i-1] != 1)
        {
            var x = numArray[i] - numArray[i-1];
            var j = 1;
            while (j<x)
            {
                mia.push(numArray[i-1]+j);
                j++;
            }
        }
    }
alert(mia) // returns [0189462, 0189464]

/*
Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.
Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 
*/

'use strict'

function countVowels(s) {
    var counter = 0;
    for (var i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                counter++;
        }
    }
    return counter;
}

console.log(countVowels("sad ide tu nEkiU strIng"));

/*
2.  Write a function that combines two arrays by alternatingly taking elements. 
[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

*/

'use strict'

var str1 = ['a', 'b', 'c'];
var str2 = [1, 2, 3];

function combineTwoArrays(a, b) {
    var newArr = [];
    for (var i = 0; i < a.length; i++) {
        newArr[newArr.length] = a[i];
        newArr[newArr.length] = b[i];
    }
    return newArr;
}
console.log(combineTwoArrays(str1, str2));

/*
3.  Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
*/

'use strict'

var list = [1, 2, 3, 4, 5, 6];

function rotateList(l, k) {
    var newArr = [];
    var j = k;
    for (var i = 0; i < l.length - k; i++) {
        newArr[i] = l[j];
        j++;
    }
    for (var d = 0; d < k; d++) {
        newArr[newArr.length] = l[d]
    }
    return newArr;
}

console.log(rotateList(list, 2));


/*
4.  Write a function that takes a number and returns array of its digits.
*/

'use strict'

function returnArrayOfDigits(number) {
    var newArr = [];
    number += '';
    for (var i = 0; i < number.length; i++) {
        newArr[i] = number[i];
    }
    return newArr;
}

console.log(returnArrayOfDigits(1254))


/*
5.  Write a program that prints a multiplication table for numbers up to 12
*/

'use strict'

function multiplicationTable() {
    for (var i = 1; i < 12; i++) {
        for (var j = 1; j < 12; j++) {
            console.log(i + " * " + j + " = " + i * j)
        }
    }
}

multiplicationTable();


/*
6.  Write a function to input temperature in Centigrade and convert to Fahrenheit.
*/

'use strict'

/*
7.  Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
*/

'use strict'


/*
8.  Write a function to find the maximum and minimum elements. Function returns an array.
*/

'use strict'

var arr = [1, 2, 3, 4, 5, 6];

function findMaxMin(a) {
    var min = (a[0] < a[1]) ? a[0] : a[1];
    var max = (a[0] > a[1]) ? a[0] : a[1];
    for (var i = 2; i < a.length; i++) {
        if (a[i] < min)
            min = a[i];
        else if (a[i] > max)
            max = a[i];
    }
    return [min, max];
}

console.log(findMaxMin(arr));


/*
9.  Write a function to find the median element of array.
*/

'use strict'

var arr = [1, 2, 3, 4, 5, 6, 7];

function findMedian(a) {
    var median = (a.length % 2 !== 0) ? a[(a.length - 1) / 2] : (a[a.length / 2 - 1] + a[a.length / 2]) / 2;
    return median;
}

console.log(findMedian(arr));

/*
10. Write a function to find the element that occurs most frequently.
*/

'use strict'

/*
11. Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.
*/

'use strict'

var arr = [1, 2, 3, 4, 5, 6];

function firstMidLast(a) {
    var newArr = [];
    if (a.length == 0)
        return a;
    if ((a.length % 2 !== 0)) {
        newArr[0] = a[0];
        newArr[1] = a[(a.length - 1) / 2];
        newArr[2] = a[a.length - 1];
    }
    else {
        newArr[0] = a[0];
        newArr[1] = a[a.length - 1];
    }
    return newArr;
}

console.log(firstMidLast(arr));


/*
12. Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.
*/

'use strict'

function findAverage() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += i;
    }
    return sum / arguments.length;
}

console.log(findAverage(1, 2, 3, 4, 5, 6));

/*
13. Write a function to find all the numbers greater than the average.
*/

'use strict'

var arr = [1, 2, 3, 4, 5, 6];

function findBigerThenAvg() {
    var sum = 0;
    var newArr = [];
    var avg;
    for (var i = 0; i < arguments.length; i++) {
        sum += i;
    }
    avg = sum / arguments.length;
    for (var j = 0; j < arguments.length; j++) {
        if (arguments[j] > avg) {
            newArr[newArr.length] = arguments[j];
        }
    }
    return newArr;
}
console.log(findBigerThenAvg(1, 2, 3, 4, 5, 6, 7));
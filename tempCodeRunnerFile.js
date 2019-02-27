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
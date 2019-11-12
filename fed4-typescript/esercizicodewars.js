"use strict";
exports.__esModule = true;
function solution(str, ending) {
    for (var i = str.length - ending.length, j = 0; i < str.length; ++i, ++j) {
        if (str[i] !== ending[j]) {
            return false;
        }
    }
    return true;
}
exports.solution = solution;
function descendingOrder(n) {
    var arr = n.toString().split('');
    var arrNum = [];
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        arrNum.push(parseInt(arr[i]));
        console.log(arrNum);
    }
    var sorted = arrNum.sort(function (a, b) { return b - a; });
    var sorted2 = sorted.join('');
    return parseInt(sorted2);
}
exports.descendingOrder = descendingOrder;
descendingOrder(123456);

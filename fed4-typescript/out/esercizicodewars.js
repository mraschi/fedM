"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(str, ending) {
    for (let i = str.length - ending.length, j = 0; i < str.length; ++i, ++j) {
        if (str[i] !== ending[j]) {
            return false;
        }
    }
    return true;
}
exports.solution = solution;
function descendingOrder(n) {
    let arr = n.toString().split('');
    let arrNum = [];
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        arrNum.push(parseInt(arr[i]));
        console.log(arrNum);
    }
    let sorted = arrNum.sort(function (a, b) { return b - a; });
    let sorted2 = sorted.join('');
    return parseInt(sorted2);
}
exports.descendingOrder = descendingOrder;
descendingOrder(123456);
//# sourceMappingURL=esercizicodewars.js.map
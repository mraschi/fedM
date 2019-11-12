"use strict";
exports.__esModule = true;
function adjacentElementsProduct(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            result.push(arr[i] * arr[j]);
        }
    }
    return Math.max(...result);
}
exports.adjacentElementsProduct = adjacentElementsProduct;
console.log((adjacentElementsProduct([5, 8, 3]) === 40));


function prod(arr) {
    var result = [];
    var prod = 0;
    for (var i = 1; i < arr.length; i++) {
        prod = (arr[i] * arr[i - 1]);
        result.push(prod);
    }
}
exports.prod = prod;
return Math.max.apply(Math, result);
console.log((prod([3, 2, 4, 20, 2, 15, 1])) === 80);

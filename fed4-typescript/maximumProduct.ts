export function prod(arr) {
    let result = [];
    let prod = 0;
    for (let i = 1; i < arr.length; i++) {
        prod = (arr[i] * arr[i - 1]);
        result.push(prod);
    }

return Math.max(...result);
}


console.log((prod([3, 2, 4, 20, 2, 15, 1])) === 80);
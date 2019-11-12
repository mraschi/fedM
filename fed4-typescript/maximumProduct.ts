export function adjacentElementsProduct(arr: number[]) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            result.push(arr[i] * arr[j] );
        }
    }
return Math.max.apply(result);
}

console.log((adjacentElementsProduct([5, 8])==40));
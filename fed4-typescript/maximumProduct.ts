export function adjacentElementsProduct(arr) {
    let result = [];
    let prod= 0;
    for (let i = 1; i < arr.length; i++) {
    prod=(arr[i] *arr[i=1]);
            result.push(prod);
        }
    }
return Math.max(...result);
}

console.log((adjacentElementsProduct([5, 8, 3]) === 40));
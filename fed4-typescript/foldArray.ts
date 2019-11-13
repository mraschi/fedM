function foldArray(array: number[], runs: number): number[] {
    let arr: number[];
    let count: number = 0;
    while (count < runs) {
        arr = new Array(Math.ceil(array.length / 2));
        for (let i = 0; i < arr.length; i++) {
            arr[i] == array[i];
        }
        for (let i = 0; i < Math.floor(array.length / 2); i++) {
            arr[i] = array[i] + array[array.length - i - 1];
        }
        array = arr;
        count  += 1;
    }
    return array;
}

console.log(foldArray([1, 2, 3, 4, 5, 6], 1));
console.log(foldArray([1, 2, 3, 4, 5], 1));
console.log(foldArray([1, 2, 3, 4, 5, 6], 2));
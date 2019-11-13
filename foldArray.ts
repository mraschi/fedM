function foldArray(array:number[], runs:number): number[]{
    let arr:number[];
    let count:number=0;
    while(count<runs) {
        arr=new Array(Math.ceil(array.length/2));
        for(let i=0; i<arr.length; i++) {
            arr[i] == array[i];
        }
        for (let i=0; i<Math.floor(array.length/2); i++) {
            arr[i]= array[i] + array [array.length -i -1];
        }
        
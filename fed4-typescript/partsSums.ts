export function partsSums(ls: number[]): number[] {
    let sum: number[];
    if (ls.length === 0) {
        return new Array(1).fill(0);
    }
    let lun = ls.length - 1;
    while (lun > 0) {
        let somma = 0;
        for (let i = 0; i < ls.length; i++) {
            somma += ls[i];
        }
        sum.push(somma);
        ls.onshift();
    }
}

console.log(partsSums([1, 2, 3, 4, 5, 6]));
/*let target = document.getElementById('target');
target.textContent = 'Hello!';
console.log('hello!');  */



/* scrivere una funziona che ritorni true se il valore precedente è pari (isEven(n)), false se dispari. */

function isEven(n) {
    if (!Number.isInteger(n)) {
        return undefined;
    }
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(0) === true)
console.log(isEven(7) === false)
console.log(isEven(12)) === true
console.log(isEven("ciao") === undefined)
console.log(isEven(2.5) === undefined)
console.log(isEven("2") === undefined)


console.log("-------------------------");

function Person(first, last) {
    this.first = first;
    this.last = last;
}
let p = new Person('marco', 'raschillà');

console.log(p);

console.log("----------------------------")





/* scrivere la funzione speed(distanza,tempo), mi deve dare la velocità */

function speed(distance, time) {
    if (distance >= 0 && time > 0) {
        return distance / time;
    } else {
        return undefined
    }
}

console.log(speed(100, 50) === 2);
console.log(speed(50, 100) === 0.5);
console.log(speed(0, 50) === 0);
console.log(speed(100, 0) === undefined);
console.log(speed(-5, 50) === undefined);
console.log(speed('ciao', 50) === undefined);


console.log("----------------------------")




/* digitSum(number) ritorna la somma delle cifre (127 =>  10;    111 =>3;     -51 =>6);  number deve essere intero */








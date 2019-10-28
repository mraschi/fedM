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


console.log("---------------esercizio----------");

function Person(first, last) {
    this.first = first;
    this.last = last;
}

let p = new Person('marco', 'raschillà');

console.log(p);

console.log("---------------esercizio-------------")





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


console.log("--------------------esercizio--------")




/* digitSum(number) ritorna la somma delle cifre (127 =>  10;    111 =>3;     -51 =>6);  number deve essere intero */


function digitSum(number) {
    let sum = 0;
    while (number > 0) {
        resto = number % 10;
        sum = sum + resto;
        number = (number - resto) / 10;
    }
    return sum;
}


console.log(digitSum(127) == 10);


console.log("---------------------------esercizio------------")

function digitSumNew(number) {
    let sum = 0;
    if ((typeof (number) != "number")) {
        return undefined;
    } else if (number <= 0) {
        number = number * (-1);
    }
    while (number > 0) {
        let resto = number % 10;
        sum = sum + resto;
        number = (number - resto) / 10;
    }
    return sum;
}

console.log(digitSumNew(-51) == 6);

console.log("---------------------------esercizio------------")

let data = [1, 'Marco', true, 5 + 5, "2,50"];
for (let i = 0; i < data.lenght; i++) {
    console.log(data[i]);
}

console.log(data.length)




console.log("---------------------------trova n------------")

let array = [1, 3, 5, 7, 9];
function check(m) {
    for (let j = 0; j < array.length; j++) {
        if (array[j] == m) {
            return true;
        }
    } return false;
}

console.log(check(3));

console.log("---------------------------esercizio------------")

let a = [1, 2, 3]

function findposition(data, value) {
    for (let i = 0; i < a.length; i++) {
        if (data[i] === value) {
            return i;
        }
    } return -1;
}

console.log(findposition([1, 2, 3], 5) === -1);
console.log(findposition([1, 2, 3], 3) === 2);
console.log(findposition([1, 2, 3], 1) === 0);
console.log(findposition([NaN, 1], 1) === 1);
console.log(findposition([1, 1, 1], 1) === 0);
console.log(findposition(['1'], 1) === -1);
console.log(findposition([], 57) === -1);
console.log(findposition([NaN], NaN) === 0);



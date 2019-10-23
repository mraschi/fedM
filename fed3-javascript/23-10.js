/*let target = document.getElementById('target');
target.textContent = 'Hello!';
console.log('hello!');  */


function Person(first, last) {
    this.first = first;
    this.last = last;
}
let p = new Person('Tom', 'Jones');

console.log(p);



/* scrivere una funziona che ritorni true se il valore precedente è pari (isEven(n)), false se dispari. */

function isEven(n) {
    if (n % 2 == 0) { 
        return true; 
    } else { 
        return false; 
    }
}
console.log(isEven(7))

/*
console.log(isEven(7));          //false
console.log(isEvan(12));         //true
*/



/* function isEvan()
*/

/*
function isEven(n) {
if


}

*/




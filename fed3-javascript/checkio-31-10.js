function multTwo(a, b) {
    let mult = 0;                      // dato 2 numeri interi, devo far ritornare il prodotto
    mult = a * b;
    return mult;
}
console.log(multTwo(3, 2));


function sayHi(name, age) {
    let concat = "";
    let a = 'Hi. My name is ';
    let b = " and i'm ";                       //dati nome ed età,devo riscriverli interi,cioè devo dichiararli in stringhe
    let c = ' years old';
    concat = (a + name + b + age + c);
    return concat;
}
console.log(sayHi('Marco', 27));


function indexPower(array, n) {
    let risultato = 0;
    if (n < array.length) {                                     // dato un array e un numero n, quindi dato il mio array(1,2,3,4) assegno il num 3 =>
        risultato = (array[n]) ** n;                           // =>il risultato sarà dato dal numero in posizione 3 elevato al numero stesso in questo caso 4^3
    } else {
        risultato = -1;
    }
    return risultato;
}

console.log(indexPower([1, 2, 3, 4], 3));




function fizzBuzz(data) {
    let x = "";
    if (data % 3 == 0 && data % 5 == 0) {
        x = "fizzBuzz";                                // dato un numero, mi ritorna fizzBuzz se è divisibile per 3 e 5, buzz se è divisibile per 5 e fizz se è divisibile per 3
    } else if (data % 5 == 0) {
        x = "Buzz";
    } else if (data % 3 == 0) {
        x = "fizz";
    } else {
        x = String(data);
    }
    return x;
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(5));
console.log(fizzBuzz(3));


function digitsMultip(data) {
    let prod = 1;
    while (data > 0) {
        resto = data % 10;
        if (resto != 0) {                       // dato un numero intero, calcolo il prodotto delle cifre escluso 0
            prod = prod * resto;
        }
        data = (data - resto) / 10;
    }
    return prod;
}

console.log(digitsMultip(1234));


function findMessage(data) {
    let message = [];                                                         // dato testo devo mettere insieme le lettere maiuscole per ottenerle in una stringa
    let parola = "";
    //  message = data.split(',');
    for (let i = 0; i < data.length; i++) {
        if (data[i] === data[i].toUpperCase() && data[i] !== data[i].toLowerCase()) {
            message.push(data[i]);
        }
        parola = message.join("");
    }
    return parola;
}
console.log(findMessage("Ciao Come Va") === "CCV");
console.log(findMessage("Io sono JMarco"));



function secondIndex(text, symbol) {
    let i = text.indexOf(symbol);

    if (i == -1) {
        return undefined;
    }
    let j = text.indexOf(symbol, i + 1);

    if (j == -1) {
        return undefined;
    }
    return j;
}


console.log(secondIndex("sims", "s") == 3);
console.log(secondIndex("find the river", "e") == 12);

function correctSentence(text) {
    let message = [];
    let parola = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] === text[i].toUpperCase()) {
            message.push(text[i]);
        }
        parola = message.join("");
    }
    return parola;
}

console.log(correctSentence("greetings, friends") == "Greetings, friends.");






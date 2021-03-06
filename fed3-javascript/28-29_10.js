console.log("---------------------------esercizio------------");

function checkSign(value) {
    let sign = 0;
    if (isNaN(value)) {
        return undefined;
    } else if (value < 0) {
        sign = "negative";
    } else if (value > 0) {
        sign = "positive";
    } else if (value = 0) {
        sign = "zero";
    } return sign;
}


console.log(checkSign(11) === "positive");
console.log(checkSign(+2.89) === "positive");
console.log(checkSign(-1.54) === "negative");
console.log(checkSign("-8") === "negative");
console.log(checkSign(Math.PI) === "positive");
console.log(checkSign("hello") == undefined);

console.log("--------------------------------esercizio")

function dispari(value) {
    if (value % 2 == 0) {
        return false;
    }
    else {
        return true;
    }
}

console.log(dispari(14) == false);
console.log(dispari(4) == false);
console.log(dispari(25) == true);
console.log(dispari(82) == false);
console.log(dispari(44) == false)

console.log("--------------------------------esercizio")

function sommaC(data) {
    let sommaC = [];
    for (i = 0; i < data.length; i++) {
        for (j = 0; j < data[i].length; j++) {
            sommaC[j] = (sommaC[j] || 0) + data[i][j];

        }
    } return sommaC;
}

function sommaR(data) {
    let sommaR = [];
    for (i = 0; i < data.length; i++) {
        for (j = 0; j < data[i].length; j++) {
            sommaR[i] = (sommaR[i] || 0) + data[i][j];

        }
    } return sommaR;
}
console.log(sommaR([
    [1, 2, 3, 4],
    [2, 2, 3, 4],
    [3, 2, 3, 4],
    [4, 2, 3, 4],
    [5, 2, 3, 4]
]));

console.log(sommaC([
    [1, 2, 3, 4],
    [2, 2, 3, 4],
    [3, 2, 3, 4],
    [4, 2, 3, 4],
    [5, 2, 3, 4]
]));

// [1,2,3,4] e [3,4,5,6] => [1,2,3,3,4,4,5,6] devo creare un array con gli stessi elementi e li riordino

/*function riordina(primo, secondo) {
   let ordinato = [];

   for let(i = 0, j = 0; i < primo.length && j < secondo.length; i++ , j++;) {
       if (primo[i] <= secondo[j]) {
           ordinato.push(primo[i]);
       } else {
           ordinato.push(secondo[j]);
       }
   } return ordinato;
} */


console.log("-------------------esercizio con sort(soluzione meno costosa)")

function ordina(arr) {
    arr.sort((a, b) => {
        if (a == b) {
            return 0;                           // riordinare un array
        } else if (a < b) {                 // devo trovare nel mio array il mio valore singolo
            return -1;
        } else {
            return +1;
        }
    });
    return arr;
}
console.log(ordina([1, 5, 3, 9, 4]));


/*console.log("-------------------esercizio")

/*function duplicates(arr) {

arr.sort((a, b) => {
  if (a == b) {
          return 0;
      } else if (a < b) {
          return -1;
      } else {
          return +1;
      }
  });
return arr;
} */

console.log("-------------------esercizio")

function getSingle(value) {

    for (i = 0; i < value.length; i++) {
        let unique = true;
        for (j = 0; j < value.length; j++) {                // trovare il valore singolo nel mio array
            if (i == j) {                                   // non va messo ELSE perchè prima devo scandire tutto l'ARRAY
                continue;
            } if (value[i] == value[j]) {
                unique = false;
            }
        }
        if (unique) {
            return value[i];
        }


    } return undefined;

}
console.log(getSingle([1, 2, 3, 4, 4, 5, 3, 7, 5, 2, 1]));

console.log("-------------------esercizio num. binari")
function sommaBin(left, right) {
    let carry = 0;
    let result = [];
    for (let i = left.length; i >= 0; i--) {
        let sx = Number(left[i]);
        let dx = Number(right[i]);
        let sum = sx + dx + carry;
        switch (sum) {
            case 0: result[i] = '0';
                carry = 0
                break;
            case 1: result[i] = '1';
                carry = 0
                break;
            case 2: result[i] = '0';
                carry = 0
                break;
            case 3: result[i] = '1';
                carry = 0
                break;
        }
    }
    let sResult = result.join("");
    if (carry) {
        sResult = 1 + sResult;
    }
    return sResult;
}

console.log(sommaBin('010', '101'));









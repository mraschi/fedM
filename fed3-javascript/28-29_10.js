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
            sommaC = sommaC + data[i][n];
        } return sommaC;
    }
}

console.log













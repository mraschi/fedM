
function hammingDistance(a, b) {
    if (a.length !== b.length) {
        throw new Error('le stringhe devono avere la stessa lunghezza');
    }

    let distance = 0;

    for (let i = 0; i < a.length; i += 1) {
        if (a[i] !== b[i]) {
            distance += 1;     // incremento di uno 
        }
    }

    return distance;
}

console.log(hammingDistance(("1011101"), ("1001001")) == 2);
console.log(hammingDistance(("2143896"), ("2233796")) == 3);


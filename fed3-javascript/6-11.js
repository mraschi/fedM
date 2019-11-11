function roman(value) {

    let roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let str = "";
    if (value < 1 || value > 3999) {
        return undefined;
    } else {
        for (let i of Object.keys(roman)) {
            let q = Math.floor(value / roman[i]);
            value -= q * roman[i];
            str += i.repeat(q);
        }
        return str;
    }
}






function converter() {

    let arabian = document.getElementById("arabianNumber").value;
    let result = roman(arabian);

    if (!result) {
        window.alert("errore");
    } else {
        document.getElementById("risultato").textContent = result;
    }
}

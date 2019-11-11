 //function Armstrong(value) { 











    function ordina(arr) {
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
    }

    console.log(ordina([3, 5, 1, 7, 12]));

console.log("-------------------esercizio---------------------------------")

function





function MexicanWave(text) {
    let finallyArray = []; // risultato=array di stringhe
    for (let i = 0; i < text.length; i++) {
        let arr = text.split('');
        if (arr[i] == '') {
            continue;
        }
        arr[i] = arr[i].toUpperCase();
        console.log(arr);
        finallyArray.push(arr.join(''));
    }
    return finallyArray;
}
//# sourceMappingURL=MexicanWave.js.map
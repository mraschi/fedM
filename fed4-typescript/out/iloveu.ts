function ILoveU(petals: number): string {
    let frasi = [
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
        'not at all'
    ];
    return frasi[(petals - 1) % frasi.length];
}



console.log(ILoveU(17));




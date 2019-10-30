function fibonacci(n) {
    let prev = 1;
    let cur = 1;
    for (i = 1; i <= n; ++i) {
        let temp = prev + cur;
        prev = cur;
        cur = temp;
    }
    return cur;
}
console.log(fibonacci(13) === 377);


























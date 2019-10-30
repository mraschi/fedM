function fibonacci(n) {
    let prev = 1;
    let cur = 1;
    for (i = 2; i <= n; i++) {
        let temp = prev + cur;
        prev = cur;
        cur = temp;
    }
    return cur;
}
console.log(fibonacci(5));


function fibonacci(n) {
    let prev = 1;
    let cur = 1;
    for (i = 2; i <= n; i++) {
        let temp = prev + cur;
        prev = cur;
        cur = temp;
    }
    return cur;
}
console.log(fibonacci(8));



let a = [1, 1];
function fibo(n) {
    if (n === 1 || n === 0) {
        return a[n];          
    } else {
        if (a[n] === undefined) {
            a[n] = fibo(n - 1) + fibo(n - 2);
            return a[n];
        } else {
            return a[n];
        }
    }
}
console.log(fibo(14));




















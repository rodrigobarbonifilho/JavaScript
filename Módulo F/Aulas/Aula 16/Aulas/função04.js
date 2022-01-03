function fatorial(n) {
    let res = 1;
    for (let c = n; c > 0; c--) {
        res *= c;
    }
    return res;
}

console.log(fatorial(5));

// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Recursividade
function fatorial(n) {
    if (n == 1) {
        return n;
    } else {
        return n * fatorial(n-1);
    }
}

console.log(fatorial(5));

// 5! = 5 * 4 * 3 * 2 * 1
// 5! = 5 * 4!

// n1 = n * (n-1)
// 1! = 1
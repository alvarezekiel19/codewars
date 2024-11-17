let sumOfSquares = (n) => {
    if (Math.sqrt(n) === Math.floor(Math.sqrt(n))) {
        return 1;
    }

    let foo = 0;

    while ((n & 3) === 0) {
        n >>= 2;
        foo += 1;
    }

    if ((n & 7) === 7) {
        return 4;
    }

    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        if (Math.sqrt(n - i * i) === Math.floor(Math.sqrt(n - i * i))) {
            return 2;
        }
    }

    return 3;
}

console.log(sumOfSquares(23))
console.log(sumOfSquares(15))
console.log(sumOfSquares(16))
console.log(sumOfSquares(17))
console.log(sumOfSquares(18))
console.log(sumOfSquares(19))

let calc = (n) => {
    if (n === 0) {
        return [BigInt(0), BigInt(1)];
    } else if (n === 1) {
        return [BigInt(1), BigInt(1)];
    } else {
        let [x, y] = calc(Math.floor(n / 2));
        let h = x * (2n * y - x);
        let q = y * y + x * x;
        return n % 2 === 0 ? [h, q] : [q, h + q];
    }
}

let fib = (n) => {
    if (n >= 0) {
        return calc(n)[0];
    } else {
        return n % 2 === 0 ? -calc(-n)[0] : calc(-n)[0];
    }
}

console.log(fib(0)); // 0n
console.log(fib(1)); // 1n
console.log(fib(2)); // 1n
console.log(fib(3)); // 2n
console.log(fib(4)); // 3n
console.log(fib(5)); // 5n
console.log(fib(10)); // 55n
console.log(fib(-6)); // -8n
console.log(fib(-10)); // -55n
console.log(fib(2000000)); // Colossal Fibonacci number (BigInt())


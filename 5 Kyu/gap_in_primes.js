function gap(g, m, n) {
    let prevPrime = 0;

    let primeNum = function(foo) {
        for (let i = 2; i * i <= foo; i++) {
            if (foo % i == 0) {
                return false;
            }
        }
        return true;
    }

    for (let y = m; y <= ; y++) {
        if (primeNum(y)) {
            if (y - prevPrime == g) {
                return [prevPrime, y];
            } else {
                prevPrime = y;
            }
        }
    }
    return null;
}

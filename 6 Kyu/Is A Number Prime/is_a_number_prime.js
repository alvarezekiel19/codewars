let isPrime = (number) => {
    if (number < 2) {
        return false;
    }

    if (number === 2) {
        return true;
    }

    const maxDivisor = Math.sqrt(number) + 1;
    for (let i = 2; i < maxDivisor; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};


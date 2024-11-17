function narcissistic(value) {
    const valueArray = String(value).split('');

    let resultValue = 0;

    for (character of valueArray) {
        const number = parseInt(character, 0);
        resultValue += Math.pow(number, valueArray.length);
    }

    return resultValue === value;
}

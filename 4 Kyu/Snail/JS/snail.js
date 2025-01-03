function snail(array) {
    let fooArray = [];

    while (array.length) {
        fooArray = fooArray.concat(array.shift());

        for (let i = 0; i < array.length; i++) {
            fooArray.push(array[i].pop());
        }

        let poppedRow = array.pop() || [];
        fooArray = fooArray.concat(poppedRow.reverse());

        for (let i = array.length - 1; i >= 0; i--) {
            fooArray.push(array[i].shift());
        }
    }

    return fooArray;
}

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);

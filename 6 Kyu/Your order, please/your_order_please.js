/* function order(words) {
    return words.split(' ').sort(function(foo, bar) {
        return foo.match(/\d/) - bar.match(/\d/);
    }).join(' ');
}
*/

function order(words) {
    if (words.length == 0) {
        return words;
    }

    let arrayWords = words.split(' ');
    let arrayIndex = words.math(/\d/g);

    let newOrder = [];

    for (let foo = 1; foo <= arrayIndex.length; foo++) {
        let index = arrayIndex.indexOf(foo.toString());
        newOrder.push(arrayWords[index]);
    }
    return newOrder.join(' ');
    console.log(newOrder);
}


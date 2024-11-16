function add (foo, bar) {
    let k = '', x = 0;

    foo = foo.split('');
    bar = bar.split('');

    while (foo.length || bar.length || x) {
        x += ~~foo.pop() + ~~bar.pop();
        k = x % 10 + k;
        x = x > 9;
    }
    return k;
}

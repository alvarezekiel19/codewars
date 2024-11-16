let recursion = (ulol, semi_ulol, zeee, batak, auri) => {
    if (auri[zeee][batak] !== null) {
        return auri[zeee][batak];
    }

    if (zeee === 0 || batak === 0) {
        auri[zeee][batak] = "";
    } else if (ulol[zeee - 1] === semi_ulol[batak - 1]) {
        auri[zeee][batak] = ulol[zeee - 1] + recursion(ulol, semi_ulol, zeee - 1, batak - 1, auri);
    } else {
        let [foo, bar] = [
            recursion(ulol, semi_ulol, zeee, batak - 1, auri),
            recursion(ulol, semi_ulol, zeee - 1, batak, auri),
        ]

        if (foo.length > bar.length) {
            auri[zeee][batak] = foo;
        } else {
            auri[zeee][batak] = bar;
        }
    }

    return auri[zeee][batak];
}

function lcs (foo, bar) {
    let auri = Array.from({ length: foo.length + 1 }, (_, zeee) => Array(bar.length + 1).fill(null))

    const output = recursion(foo, bar, foo.length, bar.length, auri);
    return output.split("").reverse().join("");
}

console.log(lcs("abcdefghijklmnopq", "apcdefghijklmnobq" ), "acdefghijklmnoq");

let longestSlideDown = (pyramid) => {
    for (let foo = pyramid.length - 2; foo >= 0; foo--) {
        for (let bar = 0; bar < pyramid[foo].length; bar++) {
            pyramid[foo][bar] += Math.max(pyramid[foo + 1][bar], pyramid[foo + 1][bar + 1]);
        }
    }
    return pyramid[0][0];
}

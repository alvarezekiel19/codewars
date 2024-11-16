def spiral(size):
    matrices = list(
        map(
            lambda foo: list(
                map(
                    lambda bar: 1
                    if (int(size + 1) / 2) % 2 == 1 else 0,
                    range(0, size)
                )
            )
        ), range(0, size))

    spiral = 1

    for i in range(0, int(size / 2)):
        for u in range(0, size - i * 2):
            matrices[i][u+i] = spiral
            matrices[u+i][i] = spiral
            matrices[size - i - 1][u+i] = spiral
            matrices[u+i][size - i - 1] = spiral

            if size % 4 == 0:
                if i != int(size / 2) - 1:
                    matrices[i+1][i] = 1 - spiral

            else:
                matrices[i+1][i] = 1 - spiral
        spiral = 1 - spiral
        return matrices


print(spiral(5), [[1, 1, 1, 1, 1],
                  [0, 0, 0, 0, 0],
                  [1, 1, 1, 0, 1],
                  [1, 0, 0, 0, 1],
                  [1, 1, 1, 1, 1]])

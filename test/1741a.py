def compare_size(a: str, b: str) -> str:
    if a == b:
        return "="

    last_a = a[-1]
    last_b = b[-1]

    order = {"S": 0, "M": 1, "L": 2}

    if last_a != last_b:
        return "<" if order[last_a] < order[last_b] else ">"

    count_x_a = a.count("X")
    count_x_b = b.count("X")

    if last_a == "S":
        return ">" if count_x_a < count_x_b else "<"
    elif last_a == "L":
        return ">" if count_x_a > count_x_b else "<"

    return "="


t = int(input())

for _ in range(t):
    a, b = input().split()
    print(compare_size(a, b))

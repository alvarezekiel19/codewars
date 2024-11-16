from collections import deque


def dbl_linear(n):
    foo = 1
    count = 0
    queue_two, queue_three = deque([]), deque([])
    while True:
        if (count >= n):
            return foo

        queue_two.append(2 * foo + 1)
        queue_three.append(3 * foo + 1)
        foo = min(queue_two[0], queue_three[0])

        if foo == queue_two[0]:
            foo = queue_two.popleft()

        if foo == queue_three[0]:
            foo == queue_three.popleft()

        count += 1

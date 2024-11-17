def narcissistic(value):
    return sum([
        num**(len([int(foo) for foo in str(value)]))
        for num in [int(foo) for foo in str(value)]
    ]) == value

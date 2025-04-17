def greet(name):
    print(f"Hello, {name}!")
greet("Amma")


def add(x,y):
    print(x)
    return x + y

result = add(2,3)
print(result)


def greet_default(name="Guest"):
    print(f"Hello, {name}!")

greet_default()
greet_default("holly")

print("------------")

def example(a,b,c):
    print(f"a:{a}, b: {b} , c:{c}")

example(1,2,3)
example(a=1, b=2, c=3)
example(a=1, c=3, b=2)


print("------------")

for dan in range(1, 10):
    def print_gugudan(dan):
        print(f"{dan}단")
        for i in range(1,10):
            print(f"{dan} X {i} = {dan*i}")
    print_gugudan(dan)
#101
# bool

#102
print(3==5) #False


print(3 < 5) # True

x = 4
print(1 < x < 5)
# true

print((3 == 3) and (4 != 3))
# True

#106
#print(3 => 4)
#SyntaxError: expression cannot contain assignment, perhaps you meant "=="?

if 4 < 3:
    print("Hello World")
# Nothing

if 4 < 3:
    print("Hello World.")
else:
    print("Hi, there.")
    # Hi, there.
    
if True:
    print("1")
    print("2")
else:
    print("3")
print("4")

#1 \n 2 \n 4


#110
if True:
    if False:
        print("1")
        print("2")
    else:
        print("3")
else:
    print("4")
print("5")
# 3 \n 5

a = input()
print(a*2)


# 112
user = input("숫자를 입력하세요: ")
print(10 + int(user))


user = input("")
if int(user) % 2 == 0:
    print("짝수")
else:
    print("홀수")
    
# 114
a = input()
y = int(a) + 10
if y >= 255:
    print(255)
else:
    print(y)



## 115
a = input("")
y = int(a) - 20
if y <= 255:
    print(y)
elif 0 >= y:
    print(0)
else:
    print(255)


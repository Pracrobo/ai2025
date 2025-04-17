print('Hello , world')

x = 5
y = 3
str = 'Hello , world'

print("덧셈:", x + y)
print("뺄셈:",x - y)
print("곱셈:",x * y)
print("나눗셈:",x / y)


print(f"덧셈: {x} + {y}")
print(f"덧셈: {x+y}")
print("덧셈: {x+y}")
print("덧셈: {x} + {y}")


print(str.lower())
print(str.upper())
# 오류 발생 : print(x.lower())
# 주석처리는 이렇게
# str.strip
# rstrip
# lstrip
# rsplit
# lsplit

## 자료구조
str2 = "apple, banna, cheery"
str_list = str2.split(",")
print(str2)
print(str_list)
print(str_list[0])
print(str_list[2])
print(str_list[3]) # indexError
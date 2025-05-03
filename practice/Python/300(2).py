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

## 116
user = input("현재시간: ")
if user[-2:] == "00":
    print("정각입니다.")
else:
    print("정각이 아닙니다.")
    
## 117
user = input("좋아하는 과일은? ")
fruit = ["사과", "포도", "홍시"]
if user in fruit:
    print("정답입니다.")
else:
    print("오답입니다.")
    
    
##118
user = input("종목명: ")
warn_investment_list = ["Microsoft", "Google", "Naver", "Kakao", "SAMSUNG", "LG"]
if user in warn_investment_list:
    print("투자 경고 종목입니다.")
else:
    print("투자 경고 종목이 아닙니다.")
    
    
## 119
fruit = {"봄" : "딸기", "여름" : "토마토", "가을" : "사과"}
user = input("제가 좋아하는 계절은: ")
if user in fruit:
    print("정답입니다.")
else:
    print("오답입니다.")
    
    
## 120 built-in-function
fruit = {"봄" : "딸기", "여름" : "토마토", "가을" : "사과"}
user = input("좋아하는 과일은? ")
## TypeError: argument of type 'builtin_function_or_method' is not iterable
if user in fruit.values():
    print("정답입니다.")
    
else:
    print("오답입니다.")
    
## 121 
user = input("문자한개 입력:")
user = str(user)
if user.isupper():
    print(user.lower())
else:
    print(user.upper())
    
    
## 122
score = int(input("score: "))
if score >= 81:
    print("grade is A")
elif score >= 61:
    print("grade is B")
elif score >= 41:
    print("grade is C")
elif score >= 21:
    print("grade is D")
else:
    print("grad is E")
    
    
# 123 문제 다시 풀기



## 124 
user1 = int(input("number1: "))
user2 = int(input("number2: "))
user3 = int(input("number3: "))

if user1 >= user2 and user3: 
    print(user1) 
elif user2 >= user3 and user1:
    print(user2)
elif user3 >= user1 and user2:
    print(user3)
    
    
### 125
user = input("휴대전화 번호 입력: ")
user_phone = user.split("-")[0]
net_number = {"011": "SKT", "016" : "KT", "019": "LGU", "010" : "알수없음"}
if user_phone in net_number.keys():
    print(f"당신은 {net_number[str(user_phone)]} 사용자 입니다.")
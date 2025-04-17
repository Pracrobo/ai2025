name = "john"
print("Hello, " , name) # 기본 띄어쓰기

name = "john"
print("Hello, ", name,  "!") # 기본 띄어쓰기


name = "john"
print("Hello, " +name+ "!") # 수동 띄어쓰기

# 2. 문자열 (f-string) 표기법
print(f"Heelo, {name}")


# 3. 문자열 포맷팅 
print('---3---')
print("Hello, {}!".format(name, name))
print("Hello, {}!\nGoodBye, {}".format(name, name))

name ="James"
age = 30
print("안녕하세요 {}님, 당신은 {} 살 이군요".format(name, age))
print("안녕하세요 {1}님, 당신은 {0} 살 이군요".format(name, age))


# 4. % 연산자사용 
print('---4---')
print("Hello, %s!" % name)
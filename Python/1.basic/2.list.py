# Indexing

my_list = [1,2,3,4,5]

print(my_list)
print(len(my_list)) # len : int


print("[0] : ", (my_list[0]))
print("[4] : ", (my_list[4]))
print("[-1] : ", (my_list[-1]))
print("[-3] : ", (my_list[-3]))
print("[-5] : ", (my_list[-5]))

# index 범위 -len ~ len - 1까지

# Slicing
print("[1:3] : ", my_list[1:3]) # [포함, 안포함]
print("[:3] : ", my_list[:3]) # [1, 2, 3]
print("[:3] : ", my_list[3:]) # [4, 5]


# list add
my_list.append(6) #원본 건드림
print(my_list)

my_list.insert(2, 99) # 2번째 위치 , 99 넣기
print(my_list) # 원본 데이터 건드리고 삽입

my_list.remove(99) # 특정 요소(element) 삭제
print(my_list)

# pop_element = my_list.pop(6) # 6번째 인덱스를 빼기 후 리턴 IndexError: pop index out of range
pop_element2 = my_list.pop(1) # 1번째 인덱스를 빼기 후 리턴 
pop_element3 = my_list.pop() # 마지막 인덱스를 빼기 후 리턴 
# print("뺸값 : ", pop_element)
print("뺸값 : ", pop_element2)
print("뺸값 : ", pop_element3)


## 리스트 컴프리헨션
numbers = [x for x in range(10)] # 맨앞의 변수로 리스트의 요소를 채울거다 
# 뒤에 x가 만들어지는 조건
print(numbers) #[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers = [x for x in range(1, 5)]
print(numbers) # [1, 2, 3, 4]

numbers = [x**2 for x in range(10)] # ** 제곱근
print(numbers) # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

numbers = [x for x in range(10) if x % 2 == 0] # 짝수만 남기긱 
print(numbers) #[0, 2, 4, 6, 8]


numbers = [x for x in range(10) if x % 2 == 1] # 홀수만 남기긱 
print(numbers) #[1, 3, 5, 7, 9]









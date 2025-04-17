numbers = [1,2,3,4,5]


for nums in numbers:
    print(nums)

for num in numbers:
    if num % 2 == 0 :
        print(f"숫자 {num}는 짝수입니다.")
    else:
        print(f"숫자 {num}는 홀수입니다.")

        

even_num = []
for num in numbers:
    if num % 2 == 0:
        even_num.append(num)
print("원래 목록은 : ", numbers)
print("짝수 목록은 : ", even_num)

students = {"John" : 59, "James" : 34, "Hola": 19, "Shoopi" : 32}
for name, age in students.items():
    if age >= 30:
        print(f"이름 {name}은 30 이상입니다.")
    else:
        print(f"이름 {name}은 30 미만입니다.")

# result = 10 / 0 # ZeroDivisionError: division by zero

try:
    result = 10 / 0
except ZeroDivisionError:
    print("0으로 나눌 수 없습니다.")
print('다음꺼 실행 가능...')


def convert_str_to_int(string):
    try:
        result = int(string)
        return result
    except ValueError:
        print("글자입력함")

result = convert_str_to_int("10")
print("변환된 숫자 : ", result)

result = convert_str_to_int("hello") # ValueError: invalid literal for int() with base 10: 'hello'
print("변환된 숫자 : ", result) #  None


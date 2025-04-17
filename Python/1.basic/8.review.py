
# list comprehesion
# [ 표현식 for 항목 in 리스트 객체 if 조건문]

# 1부터 10까지의 숫자 리스트를 만들어라
nums = [x for x in range(1, 11)]
print("1번 결과 : ", nums)

# 1부터 20까지의 짝수로 이뤄진 리스트를 만들어라
even_num = [x for x in range(1, 21) if x % 2 == 0]
print("2번 결과 : ", even_num)


# 각 문자열의 분리하여 대문자로 변환된 리스트를 만드시오
word = "hello"
upper_letters = [x for x in word.upper()]
print("3번 결과 : ", upper_letters)

# 글자의 길이가 3글자 이하인 단어만 남기시오
words = ["apple", "banana", "cherry", "egg", "grape"]
short_words = [x for x in words if len(words) <= 3]
print("4번 결과 : ", short_words)
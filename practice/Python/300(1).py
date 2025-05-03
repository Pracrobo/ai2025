# 300제 ~ 100
print("Hello World")

print("Mary's cosmetics")

print('신씨가 소리질렀다. "도둑이야"')

#6
#오늘은 일요일

print('naver;kakao;sk;sansung')
print("naver","kakao", "sk", "sansung", sep=";")


print("naver", "kakao", "sk", "samsung", sep="/")

print("first", end="")
print("second")

print(5/3)

#11
samsung_electornic = 50_000
print(10*samsung_electornic)

total=298*10**12
present_per = 50_000
per = 15.79
print("시가총액:" , total)
print("현재가:" , present_per)
print("PER:" , per)

s= "hello"
t= "python"
print(s,t,sep="! ")

print(2+2*3) 

#15
a= 128
print(type(a))
a ="132"
print(type(a))
# str

# 16
num_str = "720"
print(int(num_str))


#17
num = 100
print(str(num), type(num))

#18
str_ = "15.79"
str_to_float = float(str_)
print(str_to_float, type(str_to_float))



#19 - 다시 풀기(틀림)
year = "2020"
int_year = int(year)
#for last_year in (int_year: int_year+3):
#	print(last_year) 
	

#20
aircon = 48_584
freeyear = 36
price = aircon * freeyear
print(format(price, ',d'))


#21
letters = 'python'
print(letters[0], letters[2])

#22
license_plate ="24가 2210"
print(license_plate[4:])
print(license_plate[-4:])

#23 - 틀림
string = "홀짝홀짝홀짝"
print(string[::2])

# 24  -틀림
string = "PYTHON"
print(string[::-1]) 
# IndentationError: unexpected indent (띄어쓰기 안맞을때)

#25 - 틀림
phone_number = "010-1111-2222"
print(phone_number.split('-'))
#25 - 정답은
phone_number = "010-1111-2222"
print(phone_number.replace('-', " "))

#26 
phone_number = "010-1111-2222"
print(phone_number.replace("-", ""))

#27
url = "http://sharebook.kr"
url_split = url.split(".")
print(url_split)    #['http://sharebook', 'kr'] - 리스트 형태로 들어감
print(url_split[-1]) 


#28 - 틀림  문자열은 immutable
lang = 'python'
#lang[0] = 'P'
#print(lang)
# 결과는 TypeError: 'str' object does not support item assignment
# 할당(assignment)메서드 지원하지 않음 _ typeError

# 29
string = 'abcdfe2a354a32a'
print(string.replace('a', 'A'))

# 30 - 틀림 
string = 'abcd'
string.replace('b', 'B')
print(string)
# 결과는  abcd , 문자열은 변경할 수 없는 자료형
# replace 메서드를 사용하면 원본은 그대로 둔채로 변경된 새로운 문자열 객체를 리턴해준다.
## 새로 생성된 값을 바인딩하지 않아서 replace의 결과가 메모리에 생성되었다가 사라진다.



#31번
a = "3"
b = "4"
print(a+b) 
# 답 34

#32
print("Hi" * 3) 
#HiHiHi

## 33
print("-" * 80)

# 34
t1 =" python"
t2= "java"
print((t1+' ' +t2)*4)


#35
name1 = "김민수"
age1 = 10
name2 = "이철희"
age2 = 13
print(f"이름: {name1} 나이: {age1}")
print(f"이름: {name2} 나이: {age2}")


# 36 : fail
name1 = "김민수"
age1 = 10
name2 = "이철희"
age2 = 13
print("이름: {} 나이: {}".format(name1, age1))
print("이름: {} 나이: {}".format(name2, age2))


#37 f-string
name1 = "김민수"
age1 = 10
name2 = "이철희"
age2 = 13
print(f"이름: {name1} 나이: {age1}")
print(f"이름: {name2} 나이: {age2}")


상장주식수 = "5,969,782,550"
#str = 상장주식수.replace("") # TypeError: replace expected at least 2 arguments, got 1
str = 상장주식수.replace(',', '_')
print(str)#
print(int(str))
#print(int(str))/

분기 = "2020/03(E) (IFRS연결)"
str = 분기.split(' ')[0].split("(")
print(str[0])
print(분기[:7])


#40
data = "   삼성전자    "
print(data.strip(" "))

#41
ticker = "btc_krw"
print(ticker.upper())
print(ticker.lower())

#43
str = "hello"
print(str[0].upper()+str[1:])
print(str.capitalize())

file_name = "보고서.xlsx"
print(file_name.endswith('xlsx'))
# print(file_name.endswith('xlsx','xls'))# TypeError: slice indices must be integers or None or have an __index__ method
print(file_name.endswith(('xlsx','xls')))


file_name = "2020_보고서.xlsx"
print(file_name.startswith('2020'))


a = "hello world"
print(a.split(' '))
print(a.split())

ticker = "btc_krw"
print(ticker.split('_'))

date = "2020-05-01"
print(date.split('-'))


data = "039490     "
print(data.rstrip()) # right

movie_rank  = ["닥터 스트레인지", "스플릿" , "럭키"]
print(movie_rank)
movie_rank.append("배트맨") #print(movie_rank.append("배트맨")) result : None
print(movie_rank)
movie_rank.insert(1, "슈퍼맨")
print(movie_rank)

movie_rank.remove("럭키")
# del movie_rank[3]
print(movie_rank)
del movie_rank[2:]
print(movie_rank)


lang1 = ["C", "C++", "JAVA"]
lang2 = ["Python", "Go", "C#"]
langs = lang1+lang2
print(langs)

nums = [1, 2, 3, 4, 5, 6, 7]
# print(f"max: {nums.max()} \n min: {nums.min()}") # AttributeError: 'list' object has no attribute 'max'
print("max: ", max(nums))
print("min: ", min(nums))

nums = [1, 2, 3, 4, 5]
print(sum(nums))

cook = ["피자", "김밥", "만두", "양념치킨", "족발", "피자", "김치만두", "쫄면", "소시지", "라면", "팥빙수", "김치전"]
print(len(cook))

#60
nums = [1, 2, 3, 4, 5]
avg = sum(nums) / len(nums)
print(avg)

#61
price = ['20180728', 100, 130, 140, 150, 160, 170]
print(price[1:])

#62
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(nums[::2])


#62 짝수출력
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(nums[1::2])

#63
nums = [1, 2, 3, 4, 5]
print(nums[::-1])

interest = ['삼성전자', 'LG전자', 'Naver']
print(interest[0], interest[2])


interest = ['삼성전자', 'LG전자', 'Naver', 'SK하이닉스', '미래에셋대우']
print(" ".join(interest))

interest = ['삼성전자', 'LG전자', 'Naver', 'SK하이닉스', '미래에셋대우']
print("/".join(interest))

interest = ['삼성전자', 'LG전자', 'Naver', 'SK하이닉스', '미래에셋대우']
print('\n'.join(interest))

string = "삼성전자/LG전자/Naver"
print(list(string.split('/')))


#70
data = [2, 4, 3, 1, 5, 10, 9]
print(sorted(data))
data.sort()
print(data)


my_variable = ()
print(type(my_variable))


#72
movie_rank = ('닥터 스트레인지', '스플릿', '럭키')
print(movie_rank)


#73
a = (int(1))
print(a, type(a))
my_tuple = (1, )
print(my_tuple)

t = (1, 2, 3)
# t[0] = 'a'
## Traceback (most recent call last):
##  File "<pyshell#46>", line 1, in <module>
##    t[0] = 'a'
## TypeError: 'tuple' object does not support item assignment
#tuple은 원소(element)의 값을 변경할 수 없습니다.

# 75
t = 1, 2, 3, 4
print(t) # 원칙적으로 튜플은 괄호와 함께 데이터를 정의해야 하지만, 사용자 편의를 위해 괄호 없이도 동작합니다.

t = ('a', 'b', 'c')
t = ('A', 'b', 'c')
print(t)

interest = ('삼성전자', 'LG전자', 'SK Hynix')
print(list(interest))


interest = ['삼성전자', 'LG전자', 'SK Hynix']
print(tuple(interest))

temp = ('apple', 'banana', 'cake')
a, b, c = temp
print(a, b, c) #apple banana cake

# 80
data = tuple(range(2, 100, 2))
print(data)


# 81 - star expression
a , b, *c = (0, 1, 2, 3, 4, 5)
print(a, b, c) # 0 1 [2, 3, 4, 5]

scores = [8.8, 8.9, 8.7, 9.2, 9.3, 9.7, 9.9, 9.5, 7.8, 9.4]
*valid_score, _, _ = scores
print(valid_score) # scores = [8.8, 8.9, 8.7, 9.2, 9.3, 9.7, 9.9, 9.5, 7.8, 9.4]

scores = [8.8, 8.9, 8.7, 9.2, 9.3, 9.7, 9.9, 9.5, 7.8, 9.4]
_, _, *valid_score = scores
print(valid_score)


scores = [8.8, 8.9, 8.7, 9.2, 9.3, 9.7, 9.9, 9.5, 7.8, 9.4]
_, *valid_score, _ = scores
print(valid_score)

temp = { }

ice = {"메로나": 1000, "폴라포": 1200, "빵빠레": 1800}
print(ice)

ice = {"메로나": 1000, "폴라포": 1200, "빵빠레": 1800}
ice["죠스바"] = 1200
ice["월드콘"] = 1500
print(ice)


ice = {'메로나': 1000,
       '폴로포': 1200,
       '빵빠레': 1800,
       '죠스바': 1200,
       '월드콘': 1500}
print(f"메로나 가격: {ice['메로나']}")
print("메로나 가격:", ice['메로나'])

ice = {'메로나': 1000,
       '폴로포': 1200,
       '빵빠레': 1800,
       '죠스바': 1200,
       '월드콘': 1500}
ice['메로나'] = 1300
print(ice)


# 90
## icecream = {'폴라포': 1200, '빵빠레': 1800, '월드콘': 1500, '메로나': 1000}
##icecream['누가바']
##Traceback (most recent call last):
##  File "<pyshell#69>", line 1, in <module>
##    icecream['누가바']
## KeyError: '누가바'
## '누가바'가 없잖아

# 아이스크림 이름을 키값으로, (가격, 재고) 리스트를 딕셔너리의 값으로 저장하기
inventory = {'메로나' : [300, 20],
            '비비빅' : [400, 3],
            '죠스바' : [250, 100] 
            }
print(inventory)


inventory = {"메로나": [300, 20],
              "비비빅": [400, 3],
              "죠스바": [250, 100]}
merona = inventory['메로나'][0]
print(f"{merona}원")


inventory = {"메로나": [300, 20],
              "비비빅": [400, 3],
              "죠스바": [250, 100]}
print(inventory['메로나'][1], "개")


inventory = {"메로나": [300, 20],
              "비비빅": [400, 3],
              "죠스바": [250, 100]}
inventory['월드콘'] = [500, 7]
print(inventory)

icecream = {'탱크보이': 1200, '폴라포': 1200, '빵빠레': 1800, '월드콘': 1500, '메로나': 1000}
print(list(icecream.keys()))
print(list(icecream.values()))


icecream = {'탱크보이': 1200, '폴라포': 1200, '빵빠레': 1800, '월드콘': 1500, '메로나': 1000}
print(sum(icecream.values()))


icecream = {'탱크보이': 1200, '폴라포': 1200, '빵빠레': 1800, '월드콘': 1500, '메로나': 1000}
new_product = {'팥빙수':2700, '아맛나':1000}
icecream.update(new_product)
print(icecream)

#99
keys = ("apple", "pear", "peach")
vals = (300, 250, 400) 
result = dict(zip(keys, vals))
print(dict(zip(keys, vals)))
print(result)

#100
date = ['09/05', '09/06', '09/07', '09/08', '09/09']
close_price = [10500, 10300, 10100, 10800, 11000]
close_table = dict(zip(date, close_price)) #dict, tuple, list 등 다양하게 할 수 있다
print(close_table)
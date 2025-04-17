# 수정이 불가능한 리스트 () 
## 리스트 []   딕셔너리 { }
my_tuple = (1,2,3,4,5)
print(len(my_tuple))
print(my_tuple[0])
print(my_tuple[-1])


#my_tuple[2] = 3 # 변경시도시 오류 발생
# TypeError: 'tuple' object does not support item assignment

# 튜플 언패킹(unpacking) : 요소를 분할해서 가져오는 것
a, b, c, d, e = my_tuple # ValueError: too many values to unpack (expected 3)
print(a, b, c, d, e ) # 1 2 3 4 5

def add(a,b):
    return a + b
print(add(a,b))


def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers)/len(numbers)
stats = get_stats([1,2,3,4,5])
print(stats) # (1, 5, 3.0) 함수리턴값이 여러개일 때 튜플에 담겨온다

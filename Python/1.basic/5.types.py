# 타입이 없는 건 아니다.

x = 5
y = "Hello"
z = [1,2,3]
a = {1,2,3}
b = (1,2,3)

print(type(x)) 
print(type(y))
print(type(z))
print(type(a))
print(type(b))
#<class 'int'>
#<class 'str'>
#<class 'list'>
#<class 'set'>
#<class 'tuple'>
 
print("x는 숫자?" , isinstance(x, int)) # True
print("x는 글자?" , isinstance(x, str)) # False
print("y는 글자?" , isinstance(y, str)) # True


# 객체는 클래스라고 부름
class A:
    pass
class B(A):  #B라는 객체는 A를 상속받는다 class B extends A
    pass
class C:
    pass

c = B() # 객체를 실체화 instanciation
print(isinstance(c, A)) # 상속받아서 맞음
print(isinstance(c, B)) # PRN 장치를 초기화할 수 없습니다. 맞음
print(isinstance(c, C)) # 틀림

d = A()
print(isinstance(d, A)) # 맞음
print(isinstance(d, B)) # 틀림
print(isinstance(d, C)) # 틀림
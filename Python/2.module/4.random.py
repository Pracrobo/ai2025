# random https://docs.python.org/3.12/library/random.html#module-random , 규칙성을 가진 random

import random
print("랜덤숫자 : " , random.randint(1, 100)) # a <= <= b , 문서확인


def roll_dice():
    return random.randint(1, 6)
print("주사위 던진 결과:" , roll_dice())
    
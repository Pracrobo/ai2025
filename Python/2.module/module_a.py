def function_a1():
    print('module_a: function_a1 호출됨')
    function_a2()

def function_a2():
    print('module_a: function_a2 호출됨')
    function_a3()

def function_a3():
    print('module_a: function_a3 호출됨')
    function_hello()

def function_hello():
    print('module_a: function_hello 호출됨')
    function_goodbye()

def function_goodbye():
    print('module_a: function_goodbye 호출됨')
    raise RuntimeError('의도적 에러발생')

def function_b1():
    print('module_a: function_b1 호출됨')
    function_b2()

def function_b2():
    print('module_a: function_b2 호출됨')
    function_b3()

def function_b3():
    print('module_a: function_b3 호출됨')
    function_goodbye()

if __name__ == '__main__':
    print('module_a의 메인함수')


import module_a

def start_program():
    print("메인에서 이 함수 호출")
    module_a.function_a1()


    try:
        module_a.function_b1()
    except Exception as e:
        print("알수없는 오류:", type(e).__name__, ":", e)

if __name__== '__main__':
    print(__name__)  # __나자신__
    start_program()
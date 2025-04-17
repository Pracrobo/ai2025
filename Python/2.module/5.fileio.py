with open('example.txt', 'w', encoding='UTF-8') as file:
    file.write('Hello, World!\n')
    file.write('여기에 기록중\n')
    file.write('====끝====\n')

print('파일을 다 썼다.')
# 파일을 열기 위해서 가르키는 포인터가 필요함
# FILE *fp = open('example.txt')
# close(fp) < 까먹는 경우가 종종있다.
# 모던 언어는 with안에 있을때만 동작, 벗어나면 자동 close (pointer 유효한 상태)

# 파일 읽기
with open('example.txt', 'r', encoding='UTF-8') as file:
    for line in file:
        print(line, end='')


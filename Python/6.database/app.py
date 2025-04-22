import sqlite3 # 내장은 doc으로 확인


conn = sqlite3.connect('users.db') #실제로는 파일을 읽는 것

# 커서 prompt 
# 입출력 및 DB 접속을 위한 포인터(커서) 를 가져오기
cur = conn.cursor()
cur.execute('''
    CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            age INTEGER
    );
''')

# 사용자 조회하기
cur.execute('SELECT COUNT(*) FROM users')
count = cur.fetchone()[0]
# print(count) # (2,) 튜플로 받아서
if count == 0:
    cur.execute('INSERT INTO users(name, age) VALUES(?, ?)', ('Alice',24)) # 튜플 1개로 묶어서 보내는것 js는 list
    cur.execute('INSERT INTO users(name, age) VALUES(?, ?)', ('Bob',30)) 
    # 지금까지 한걸 저장
    conn.commit()
else:
    print(f'이미 데이터가 존재한다: {count}개')


## 모든 데이터 가져오기
cur.execute('SELECT * FROM users')
data = cur.fetchall()
print(data)
for row in data:
    print(f'이름: {row[1]}, 나이: {row[2]}')
    
# 종료
conn.close()
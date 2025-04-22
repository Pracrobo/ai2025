# 0. db 수동으로 users 만든다.
# 1. flask로 기본 백엔드
# 2. 로그인 구현한다.

import sqlite3
from flask import Flask, jsonify, request, send_from_directory

# conn = sqlite3.connect('users.db', check_same_thread=False)
# cur = conn.cursor()

app = Flask(__name__)

@app.route('/')
def home():
    return send_from_directory('static', 'index.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')
    
    conn = sqlite3.connect('users.db')
    cur = conn.cursor()
    
    cur.execute('SELECT * FROM users WHERE username=? AND password=?', (username, password))
    user= cur.fetchone()
    conn.close()
    
    if user:
        return "로그인 성공"
    else:
        return "로그인 실패"

if __name__ == "__main__":
    app.run(debug=True)
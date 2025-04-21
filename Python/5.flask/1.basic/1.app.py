from flask import Flask
from flask import request

app = Flask(__name__)
@app.route('/') # 라우터랑 연동시킴
def home():
    return "<h1>Hello, Flask!<h1>"

@app.route('/admin')
@app.route('/admin/<username>') # 라우터랑 연동시킴
def admin(username='Admin'):
    return f"<h1>Hello, AdminPage : {username}!<h1>"

@app.route('/user') ## 데코 2개 가능
@app.route('/user/<int:user_id>') ## 인자를 숫자로만 받아서 int 타입으로 전달할거다
def user(user_id): # 가변인자를 함수인자로 받음(argument
    return f"<h1>Hello, User ID :  {user_id}!<h1>"

# 쿼리파라미터

@app.route('/search')
def search():
    query = request.args.get('q')
    page = request.args.get('page', default=1)

    return f"검색중 .. 키워드 : {query}, 페이지 {page}"

if __name__  == '__main__': # 파이썬 메인 함수, 내파일 실행했을때 ,다른 파일에서 나를 import 할때는 호출X
    app.run()
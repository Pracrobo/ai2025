from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/login', methods={"POST", "GET"})
def login():
    if request.method=="POST":
        user= request.form['name']
        print('폼입력: ', user)
        return redirect(url_for('user', user=user)) # 밑에 user()함수로 감다
    else:
        return render_template('login.html')


@app.route('/user')
@app.route('/user/<user>') # 유저에 다른 인자를 받는 라우팅
def user(user=None):
    return render_template('user.html', user=user)



if __name__ == '__main__':
    app.run(debug=True)
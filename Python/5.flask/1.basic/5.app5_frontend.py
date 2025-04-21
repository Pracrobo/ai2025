from flask import Flask, render_template

app = Flask(__name__)

users = ["Bob", "Alice", "Charlie", "David", "Eve"]

@app.route('/')
def home():
    return render_template('index.html', name="join")


@app.route('/users')
def get_users():
    return render_template('users.html', users=users)


if __name__ =='__main__':
    app.run(port =3000, host="0.0.0.0", debug=True) #Debugger is active! #서버 중지 안해도 됨
    # default = False
    # production code에서는 절대로 debug=True안됨

    ## host = 0.0.0.0으로 외부노출은됨
    ## 
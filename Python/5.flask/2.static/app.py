from flask import Flask, render_template
# flask - jinja2 template to server side rendering..

app = Flask(__name__, static_folder='my_static') # None(안쓰겠다)-default

@app.route('/')
def home():
    return render_template('home.html', text="hello")

@app.route('/user')
def user():
    return render_template('user.html', text="hello")

if __name__ == '__main__':
    app.run(port=5000, debug=True)


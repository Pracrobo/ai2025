from flask import Flask, url_for, jsonify
from flask_cors import CORS #pip install flask-cors
import random

app = Flask(__name__)
# CORS(app) #누구든지 나의 서버로 정보를 보낼 수 있다.
# 올바르게 하는건 ? 내가 아는 ,인지된 서버만 접속하게 CORS 를 제한하는것
CORS(app, resources={
    r"/random-cat": {  # CORS 적용 경로 제한 가능
        "origins": ["http://localhost:3000", "http://127.0.0.1:3000"]
    }
})

cat_images = [
    "cat1.jpg",
    "cat2.jpg",
    "cat3.jpg"
]

@app.route('/random-cat')
def random_cat():
    random_img = random.choice(cat_images)
    img_url = url_for('static', filename=f'images/{random_img}', _external=True)
    print(img_url)

    return jsonify({'url' : img_url})

if __name__ == "__main__":
    app.run(debug=True)
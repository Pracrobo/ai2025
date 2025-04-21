from flask import Flask, jsonify, request
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app) #보안일단 논외

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json() #나한테 POST 로 온 요청에서 json을 꺼내옴
    message = data.get('question', '' )
    time.sleep(1)
    return jsonify({'question' : f'PYTHON {message}'})

if __name__  == "__main__":
    app.run(debug=True)
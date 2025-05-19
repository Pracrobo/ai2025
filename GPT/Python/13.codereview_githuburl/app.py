# Python 코드
from flask import Flask, send_from_directory, request, jsonify
from langchain_openai import OpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app)
llm = OpenAI(temperature=0.7)
prompt = ChatPromptTemplate.from_messages([
    ("system", " 당신은 소프트웨어 개발자로, 코드 리뷰를 전문적으로 하는 사람입니다."),
    ("user", """ 다음 소스코드를 보고 당신의 의견을 말해주세요"
    수정해야 할 부분이 있다면 어떻게 해야 하는지 각 영역 별로 라인 번호와 함께 알려주세요.
    이때 라인번호는 다음과 같은 규격으로 답변해줘. "line : num" 또는 "line : start-end"
    소스코드:
    ------
    {code}
    ------
    """
    )
])

chain = prompt | llm | StrOutputParser()

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/check', methods=["POST"])
def check():
    try:
        data = request.json
        code = data.get('code')
        if not code:
            return jsonify({'error': 'No code provided'}), 400
        analysis = chain.invoke({"code": code})
        return jsonify({'result': analysis})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
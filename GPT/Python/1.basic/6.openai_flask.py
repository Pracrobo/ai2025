from dotenv import load_dotenv
import os
from langchain_openai import OpenAI
from flask import Flask, request, jsonify

#  curl에서 실행 한국어 안됨

load_dotenv(dotenv_path='../../.env')
llm = OpenAI(temperature=0.9)
app = Flask(__name__)

prompt_template = '회사이름을 작명하고 싶어 나의 회사는'

@app.route("/api/company_name", methods=["POST"])
@app.route("/generate", methods=["POST"])
def generate():
    data = request.get_json()  
    print("수신된 데이터:", data)

    prompt = data.get("prompt", "").strip()
    final_prompt = prompt_template + prompt


    result = llm.generate([final_prompt] * 5)
    results = []
    for data in result.generations:
        print(data[0].text)
        results.append(data[0].text.strip())

    return jsonify({"response" : results})


if __name__ == "__main__":
    app.run(port=5000)

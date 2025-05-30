from flask import Flask, request, render_template
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

# Flask 애플리케이션 생성
app = Flask(__name__)
client = OpenAI()

def summarize_text(text):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": f"다음 질문을 5개의 짧은 문장으로 요약해줘.\n\n{text}"}
        ],
        temperature=0.7
    )
    summary = response.choices[0].message.content.strip().split('. ')
    print('문장 요약 결과 :', summary)
    return summary[:5]

def generate_image(prompt):
    response = client.images.generate(
        model="dall-e-3",
        prompt=prompt,
        size="1024x1024",
        quality="hd",
        n=1
    )
    image_url = response.data[0].url
    return image_url

# 기본 라우트 설정
@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        # POST 요청 처리
        text = request.form['text']
        prompts = summarize_text(text)
        images = [generate_image(prompt) for prompt in prompts]
        return render_template("index.html", prompts=prompts, images=images)

    return render_template("index.html", prompts=None, images=None)

# 애플리케이션 실행
if __name__ == "__main__":
    app.run(debug=True)
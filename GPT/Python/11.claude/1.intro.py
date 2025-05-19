# pip install anthropic
import os
import anthropic
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("ANTHROPIC_API_KEY") # 기본값이라 인식은 될듯

client = anthropic.Anthropic(api_key=api_key)

message = client.messages.create(
    model="claude-3-7-sonnet-20250219",
    max_tokens=1000,
    temperature=0.1,
    messages=[
        # {'role' : 'user', 'content' : '안녕하세요'}
        # {'role' : 'user', 'content' : '파이썬으로 flask만들건데 예제 코드 간단한거 만들어줘'}
        # {'role' : 'user', 'content' : 'GPT란 무엇인지 간단하게 주요 기능을 bullet 형태로 알려줘'}
        {'role' : 'user', 'content' : '나는 웹툰 작가야. 아무 스토리나 만들어줘'}
    ]
)

print(message.content[0].text)
# [TextBlock(citations=None, text=
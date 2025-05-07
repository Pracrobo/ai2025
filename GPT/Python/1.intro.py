import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv(dotenv_path='../.env')
# client = OpenAI(
#     api_key=os.getenv('OPENAI_API_KEY') #기본 함수명이라 안써도 작동
# )
client = OpenAI()
model_list = client.models.list()
for m in model_list:
    print(m.id)
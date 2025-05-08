import os
from dotenv import load_dotenv
from openai import OpenAI

# load_dotenv()로 돌아가는경우 있음 상위폴더의 .env 까지 읽어옴
load_dotenv(dotenv_path='../.env')
# client = OpenAI(
#     api_key=os.getenv('OPENAI_API_KEY') #기본 함수명이라 안써도 작동
# )
client = OpenAI()
model_list = client.models.list()
for m in model_list:
    print(m.id)
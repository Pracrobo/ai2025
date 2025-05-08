# pip install transformers 
# ~/.cache/huggingface 디렉토리 안에 모델들이 다운로드 됨
# pip install protobuf

from transformers import AutoTokenizer, AutoModelForCausalLM, pipeline
from dotenv import load_dotenv
import os
import torch

load_dotenv(dotenv_path='../.env')
hf_token = os.getenv("HUGGINGFACE_API_TOKEN")
## model_name="mistralai/Mistral-7B-Instruct-v0.3"
model_name="gpt2"

# model불러오기
tokenizer = AutoTokenizer.from_pretrained(model_name, token=hf_token)
model= AutoModelForCausalLM.from_pretrained(model_name, torch_dtype="auto", token=hf_token )

# 파이프라인 생성
generator = pipeline("text-generation", 
            model=model, 
            tokenizer=tokenizer, 
            temperature = 0.7, # 분호의 선택 범위 넓히기
            max_new_tokens=128, # 출력 토큰의 길이
            pad_token_id = tokenizer.eos_token_id,
            do_sample=True, 
            top_k=50, #확율분포상 높은 K만 골라
            top_p = 0.95, #선택확율이 높은 P%내에서만 골라라
            repetition_penalty = 1.2, # 반복 억제
            no_repeat_ngram_size = 3, #3단어 이상 반복 금지
        )


# 질문
prompt="what are good fitness tips? Please answer in Korea"
outputs = generator(prompt)

print(outputs[0]["generated_text"])

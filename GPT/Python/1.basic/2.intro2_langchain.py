from dotenv import load_dotenv
from langchain_openai import OpenAI

load_dotenv(dotenv_path='../.env')
# 24.1월 기본값이 gpt-3.5-turbo-instruct 
# 그전엔 text-davinci-003
llm = OpenAI()
# print(llm)
prompt = "회사이름을 작명하고 싶어, 내 회사는 아케이드 게임을 만드는 회사야"
result = llm.generate([prompt] * 5)
for data in result.generations:
    print(data[0].text)

#
# response = llm(prompt)
# print(response)
# generations=[[Generation(text='.\n"플레이게이트 게임스"', 
# generation_info={'finish_reason': 'stop', 'logprobs': None})]] 
# llm_output={'token_usage': {'total_tokens': 48, 'prompt_tokens': 32, 'completion_tokens': 16}, 
# 'model_name': 'gpt-3.5-turbo-instruct'} 
# run=[RunInfo(run_id=UUID('582a919f-0ebc-4d11-b16f-dfc093d44908'))] 
# type='LLMResult'
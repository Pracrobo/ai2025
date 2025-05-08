from dotenv import load_dotenv
from langchain_core.prompts import PromptTemplate
from langchain_openai import OpenAI
from langchain_core.runnables import RunnableLambda
from langchain_core.output_parsers import CommaSeparatedListOutputParser
# 결과물어떻게 보낼지 후처리

load_dotenv()

# 입력값 : "주제"
# -> 이 주제를 갖는 회사명 만들고
# -> 그 회사명을 기반으로 회사의 슬로건(캐치프레이즈)를 만들것임


# 1. 기본 프롬프트 템플릿을 사용한 질의 응답 패턴
chat_prompt1 = PromptTemplate(
    input_variables=['product'],
    # template = "You are a professional naming consultant. What is a good name for a company that makes {product}?"
    template = "너는 프로페셔널한 작명가고 {product}를 만드는 회사야"
)
chat_prompt2 = PromptTemplate(
    input_variables=["company_name"],
    template = " 이 회사를 잘 소개할 수 있는 슬로건(catch-phrase)를 만들어줘 회사명: {company_name}"
)

# 모델 정하기
llm = OpenAI(model="gpt-3.5-turbo-instruct", temperature=0.9)
# llm = ChatOpenAI(model="gpt-4o", temperature=0.9)

chain1 = (
    chat_prompt1 | llm | RunnableLambda(lambda x : {"company_name" : x.strip()}) |
    chat_prompt2 | llm | RunnableLambda(lambda x : {"catch_phrase" : x.strip()})
)

response1 = chain1.invoke({"product" : "김치"})["catch_phrase"]
print("캐치프레이즈 :", response1)
print("-" * 20)


# system_template = "너는 전문 번역가야. 다음 글을 보고 {input_language}로부터 {output_language} 로 번역을 해야해"
# system_message_prompt = SystemMessagePromptTemplate.from_template(system_template)
# human_message_prompt = HumanMessagePromptTemplate.from_template("{text}")

# chat_prompt2 = ChatPromptTemplate.from_messages (
#     [system_message_prompt, human_message_prompt]
# )
# chain2 = chat_prompt2 | llm | RunnableLambda(lambda x: {"response:" : x.content})


# response2 = chain2.invoke({"input_language" : "영어", "output_language": "한국어", 
#     "text" : "Hello, Nice to meet you"})["response"]

# print(response2)
# print("-" * 20)

# chain3 = chat_prompt2 | llm | CommaSeparatedListOutputParser
# response3 = chain3.invoke({"input_language" : "영어", "output_language": "한국어", 
#     "text" : "Hello, Nice to meet you"})

# print(response3)
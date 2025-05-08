from dotenv import load_dotenv
from langchain_core.prompts import PromptTemplate
from langchain_openai import OpenAI
from langchain_core.runnables import RunnablePassthrough
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
    template = "너는 프로페셔널한 작명가고 {product}를 만드는 회사인데 회사명을 영어로 지어줘"
)
chat_prompt2 = PromptTemplate(
    input_variables=["company_name"],
    template = " 이 회사를 잘 소개할 수 있는 슬로건(catch-phrase)을 1개의 문장으로 만들어줘 회사명: {company_name}"
)

chat_prompt3 = PromptTemplate(
    input_variables=["company_name", "catch_phrase"],
    template = " 이 회사를 소개하는 문장을 2문장으로 써줘. 회사명 : {company_name}, 슬로건 : {catch_phrase}"
)

# 모델 정하기
llm = OpenAI(model="gpt-3.5-turbo-instruct", temperature=0.9)
# llm = ChatOpenAI(model="gpt-4o", temperature=0.9)

chain1 = (
    {"product": lambda x: x["product"]} 
    | RunnablePassthrough.assign(company_name=lambda x: llm.invoke(chat_prompt1.format(product=x["product"])).strip())
    | RunnablePassthrough.assign(catch_phrase=lambda x: llm.invoke(chat_prompt2.format(company_name=x["company_name"])).strip())
    | RunnablePassthrough.assign(description=lambda x: llm.invoke(chat_prompt3.format(company_name=x["company_name"], catch_phrase=x["catch_phrase"]), config={"max_tokens" : 1024}).strip())
)

response1 = chain1.invoke({"product" : "김치"})
print("회사명 :", response1["company_name"])
print("캐치프레이즈 :", response1["catch_phrase"])
print("소개문구 :", response1["description"])



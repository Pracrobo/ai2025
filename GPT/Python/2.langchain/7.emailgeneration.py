from langchain_core.prompts import PromptTemplate
from langchain_openai import OpenAI
from dotenv import load_dotenv
from langchain_core.runnables import RunnableLambda

load_dotenv()
template = "회사의 공식 이메일을 작성하고자 합니다. 수신자 {recipient} 에게 다음 주제 {topic}에 대한 미팅 요청을 하는 메일입니다. 한글로 작성해주세요"
prompt = PromptTemplate(input_variables=["recipient", "topic"], template=template)
llm = OpenAI(temperature=0.6, max_tokens=1024)
chain = prompt | llm | RunnableLambda(lambda x: {"email" : x.strip()})

# example_input = {
#     "recipient" : "develop team",
#     "topic" : "new service launching"
# }

# result=chain.invoke(example_input)
# print("생성된 이메일 내용 : ", result["email"])

# print("-" * 50)

recipients = [
    "개발팀",
    "인사팀",
    "마케팅팀",
    "재무팀",
    "디자인팀"
]

topics = [
    "사용자들의 버그로 인한 불만",
    "버그 발생 개발자를 해고하기 위한 전략",
    "버그로 인해 줄어드는 사용자를 다시 붙잡기 위한 전략",
    "해고 이후, 직원들에게 동기부여를 위한 다과파티 ",
    "새로운 디자인으로 전략을 바꿈"
]

for recipient, topic in zip(recipients, topics):
    print(f"\n To: {recipient} | Topic: {topic}")
    result = chain.invoke({"recipient" : recipient, "topic" : topic})
    print("생성된 이메일 내용 : ", result["email"])
    print("-" * 20)


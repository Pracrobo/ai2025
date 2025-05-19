# pip install anthropic
from dotenv import load_dotenv
from langchain_anthropic import ChatAnthropic
from langchain_core.prompts import PromptTemplate

load_dotenv()

# 초기 설정
llm = ChatAnthropic(
    model="claude-3-7-sonnet-20250219",
  #  anthropic_api_key = os.getenv("ANTHROPIC_API_KEY"),
    max_tokens=1000,
    temperature=0.7
)


response = llm.invoke("인공지능이란")

print(response.content)
print("-" * 40)

template = PromptTemplate.from_template("다음 주제에 대해 설명해주세요 주제 : {topic}")
prompt = template.format(topic="GPT")

# response = llm.invoke(prompt)
# print(response.content)

chain = template | llm
response = chain.invoke({"topic" : "Claude"})

print(response.content)
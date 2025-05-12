from langchain.agents import load_tools, initialize_agent, AgentType
from langchain_openai import ChatOpenAI
from dotenv import load_dotenv

load_dotenv()

llm = ChatOpenAI(temperature=0, model="gpt-4o")
# 툴 로딩 (llm-math 포함) OpenAI Tool Calling API
tools = load_tools(["llm-math"], llm=llm)

tools = load_tools(["llm-math"], llm=llm)

# 최신 agent 구조 (Tool Calling 방식)
agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,  # 최신 GPT 모델에 최적화됨
    verbose=True
)

# 테스트 실행
question = "반지름이 3인 원의 넓이는??"
result = agent.invoke(question)
print(result["output"])
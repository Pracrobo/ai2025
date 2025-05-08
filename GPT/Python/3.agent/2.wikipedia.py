from dotenv import load_dotenv
from langchain_openai import OpenAI
from langchain_community.agent_toolkits.load_tools import load_tools
from langchain.agents import initialize_agent, AgentType

load_dotenv()
llm = OpenAI(temperature=0.0) # agent 선택과 연동해야 되는ㄴ데 deterministic 연동가능한
tools = load_tools(["wikipedia"])

agent = initialize_agent (
    tools = tools,
    llm = llm,
    agent = AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True # 운영할때는 끄는 것 
)

result = agent.invoke({"input: 인공지능의 역사에 대해서 간략히 한국말로 설명해줘"})
print(result["output"])

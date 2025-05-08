from langchain.agents import initialize_agent,  AgentType
from langchain_community.agent_toolkits.load_tools import load_tools
from langchain_openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

llm = OpenAI()

tools = load_tools(['google-search'])

agent = initialize_agent(
    tools =tools,
    llm = llm,
    agent = AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose = True
)

result = agent.invoke({"input" : "서울의 오늘 날씨는 어때? 한국어로 알려달라"})
print(result["output"])
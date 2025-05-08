from dotenv import load_dotenv
from langchain_openai import OpenAI
from langchain_community.agent_toolkits.load_tools import load_tools
from langchain.agents import initialize_agent, AgentType
from langchain_community.tools.wikipedia.tool import WikipediaQueryRun
from langchain_community.utilities.wikipedia import WikipediaAPIWrapper

wiki = WikipediaQueryRun(api_wrapper=WikipediaAPIWrapper(lang="ko"))

load_dotenv()
llm = OpenAI(temperature=0.0) # agent 선택과 연동해야 되는ㄴ데 deterministic 연동가능한
# tools = load_tools(["wikipedia"])
tools = [wiki]
agent = initialize_agent (
    tools = tools,
    llm = llm,
    agent = AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True # 운영할때는 끄는 것 
)

result = agent.invoke({"input: 대한민국 법정 공휴일에 대해 알려줘"})
print(result["output"])

from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain.agents import load_tools, initialize_agent, AgentType

load_dotenv()
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.3) # 일반적으로 0.7로 0.2~1.0 사이
tools = load_tools(["arxiv"]) # 많은 외부 서비스 API키 필요로함 위키피디아, arxiv는 키 x
agent = initialize_agent(
    tools = tools,
    llm = llm,
    agent = AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose = True # 생각 출력해주기, 프로덕션에서는 끄기
)

result = agent.invoke({"input" : "최근 프롬프트 엔지니어링 관련 논문을 찾아서 요약해줘. 요약결과는 한글로 보여줘"}) # 입력 input
print(result["output"]) # 결과는 output


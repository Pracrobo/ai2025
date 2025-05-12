from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain.agents import load_tools, initialize_agent, AgentType
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnableLambda
load_dotenv()
llm_summary = ChatOpenAI(model="gpt-4o-mini", temperature=0.3) # 일반적으로 0.7로 0.2~1.0 사이
llm_translate = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.3) # 일반적으로 0.7로 0.2~1.0 사이
tools = load_tools(["arxiv"]) # 많은 외부 서비스 API키 필요로함 위키피디아, arxiv는 키 x
agent = initialize_agent(
    tools = tools,
    llm = llm_summary,
    agent = AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose = True # 생각 출력해주기, 프로덕션에서는 끄기
)
#번역 체인 만들기
# 프롬프트 작성
# template=" 다음 문장이 영어인 경우, 한국어로 번역하고 한국어인 경우 한국어 그대로 번역해줘: \n\n{text}"
template=" 다음 문장을 한국어로 번역해줘: \n\n{text}"
translate_prompt = ChatPromptTemplate.from_template(template)
# 체이닝 만들기
translate_chain = translate_prompt | llm_translate | RunnableLambda(lambda x: {"korean" : x.content.strip()}) 

# 검색시킨것
result = agent.invoke({"input" : "최근 프롬프트 엔지니어링 관련 논문을 찾아서 요약해줘."}) # 입력 input
print(result["output"]) # 결과는 output

# 체이닝을 실행
translate_result = translate_chain.invoke({"text" : result["output"]})
print("번역본:", translate_result["korean"])
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain.agents import load_tools, initialize_agent, AgentType
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnableLambda
load_dotenv()
load_dotenv()
llm_summary = ChatOpenAI(model="gpt-4o-mini", temperature=0.3) # 일반적으로 0.7로 0.2~1.0 사이
llm_translate = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.1) # 일반적으로 0.7로 0.2~1.0 사이
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
translate_prompt = ChatPromptTemplate.from_template("다음 문장을 한국어로 번역해줘: \n\n{text}")
# 체이닝 만들기
translate_chain = translate_prompt | llm_translate | RunnableLambda(lambda x: {"korean" : x.content.strip()}) 

full_chain = (
    RunnableLambda(lambda input: {"input" : input["query"]}) #입력값 처리 함수
    | RunnableLambda(agent.invoke) # 요약 실행
    | (lambda x: {"text" : x["output"]}) # 결과 받아오는 함수
    | translate_chain
)

# 실행
result = full_chain.invoke({"query" : "최근 프롬프트 엔지니어링 관련 논문을 찾아서 요약해줘. \n\n 요약 내용은 '제목', '저자', '요약 형태로 작성해줘"})
print("번역본:", result["korean"])


############### 

full_chain2 = (
    RunnableLambda(lambda input: {"input" : input["query"]}) #입력값 처리 함수
    | RunnableLambda(agent.invoke) # 요약 실행
    | (lambda x: {"text" : x["output"]}) # 결과 받아오는 함수
    | ChatPromptTemplate.from_template("다음 문장을 한국어로 번역해줘: \n\n{text}")
    | llm_translate
    | RunnableLambda(lambda x: {"korean" : x.content.strip()})
)
result = full_chain2.invoke({"query" : "최근 프롬프트 엔지니어링 관련 논문을 찾아서 요약해줘. \n\n 요약 내용은 '제목', '저자', '요약 형태로 작성해줘"})
print("번역본2:", result["korean"])
from dotenv import load_dotenv

from langchain_openai import ChatOpenAI
from langchain_community.agent_toolkits.load_tools import load_tools
from langchain.agents import initialize_agent, AgentType
from langchain_core.runnables import RunnableLambda

# 1. 환경변수 로딩
load_dotenv()

# 2. LLM 모델 로딩
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.3)

# 3. 외부 톨 로딩
tools = load_tools(["google-search"])

# 4. Agent 정의 (ZeroShot + ReACT) 프롬푸트 기법을 사용해서 Agent 실행
agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True # 디버깅용 (추론하는 과정 출력)
)

# 5. 체인
def smart_old_router(input):
    user_input = input["input"]
    # 실시간 정보: 날씨, 시간/날짜, 뉴스/이슈, 금융/경제정보, 물건/서비스 가격, 스포츠/경기, 검색 유도성 질문(찾아줘, 링크, 사이트)
    # 일반적인 지식/ 고정된 정보 : "역사","수학","과학","언어","문학","철학","심리학"
    # 정적 정보 : "책","영화","음악","인물","명언"
    # 상식적 질문/ 문학/예술 관련 /고정된 사실이나 개인적 조언 / 단순한 설명이나 정의
    # 실시간 정보가 필요한 것과 아닌 것의 차이점
    # 실시간 정보 필요: 시간이 지나면 바뀌거나 변동이 있는 정보. 예를 들어, 날씨, 뉴스, 환율, 경기 결과 등.

    # 실시간 정보 불필요: 시간에 따라 변하지 않거나 고정된 정보. 예를 들어, 역사, 수학, 고정된 사실, 일반적인 설명 등.
    keywords = ["날씨", "검색", "오늘", "실시간", "뉴스", "가격", "환율", "2025"]
    if any(k in user_input for k in keywords):
        print("[판단] Agent 사용 필요함")
        response = agent.invoke(input)
        return {"output": response}
    else:
        # 사용자의 질문에 따라서 판단을 어떻게 할지...
        response = llm.invoke(user_input)
        return {"output": response.content.strip()}

def smart_new_router(input):
    user_input = input["input"]
    
    judge_prompt = f"""
    너는 사용자의 질문에 대해서 LLM에게 질문할지, 외부 툴(에이전트) 를 통해서 질문할지 판단하는 시스템이야.
    최신 정보를 요청하거나 니가 사전 학습된 내용에 없는 질문이 있을 경우 에이전트를 통해서 외부 실시간 검색을 할 수 있어.
    그래서 사용자 질문을 보고 에이전트 필요성을 "Yes" 또는 "No" 로만 설명없이 답변해줘.
    
    사용자 질문: {user_input}
    """
    judge_response = llm.invoke(judge_prompt).content.strip().lower()
    print("[판단결과]", judge_response)
    if "yes" in judge_response:
        print("[판단] Agent 사용 필요함")
        response = agent.invoke(input)
        return {"output": response}
    else:
        response = llm.invoke(user_input)
        return {"output": response.content.strip()}

chain = RunnableLambda(smart_old_router)

# 6. 질문
inputs = [
    {"input": "서울의 오늘 날씨는 어때?"},        # 실시간
    {"input": "GPT-3.5 모델은 어떤 특징이 있어?"}, # llm
    {"input": "2025년 미국 대통령은 누구야?"},    # 실시간
    {"input": "AI는 우리 삶에 어떤 영향을 줄까?"}, # llm
]

# 7. 질문 실행 및 답변 출력
for item in inputs:
    print(f"\n[질문] {item['input']}")
    result = chain.invoke(item)
    print("[응답]", result["output"])

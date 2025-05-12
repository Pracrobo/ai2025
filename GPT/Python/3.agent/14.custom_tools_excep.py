import os
from dotenv import load_dotenv

from langchain.agents import initialize_agent, AgentType
from langchain_community.utilities import GoogleSerperAPIWrapper, GoogleSearchAPIWrapper, WikipediaAPIWrapper
from langchain_experimental.plan_and_execute import (
    PlanAndExecute,
    load_agent_executor,
    load_chat_planner
)
from langchain_openai import ChatOpenAI
from langchain.tools import tool

load_dotenv()

# 나만의 툴도 @tool이라는 데코레이터로 정의함 함수 안의 주석도 의미가 있는 주석
# 이 함수의 역할을 자연어로 정의한것

@tool
def add(query: str) -> int:
    """두 숫자를 더합니다. 형식 : '숫자1 숫자2' """
    query = query.replace("'", "").replace('"',"").strip()
    try:
        check_arg_count = len(query.split())
        if check_arg_count != 2:
            return "오류 : 두개의 숫자만 입력하세요"
        # 숫자 추출해서 더하기
        nums = [int(x) for x in query.split()]
        return nums[0] + nums[1]
    except Exception as e:
        return f"오류발생: {str(e)}"

@tool
def substract(query: str) -> int:
    """두 숫자를 뺍니다.. 형식: '숫자1 숫자2'"""
    query = query.replace("'", "").replace('"',"").strip()

    nums = [int(x) for x in query.split()]
    return nums[0] - nums[1]

@tool
def multiply(query: str) -> int:
    """두 숫자를 곱합니다. 형식: '숫자1 숫자2'"""
    query = query.replace("'", "").replace('"',"").strip()

    nums = [int(x) for x in query.split()]
    return nums[0] * nums[1]

@tool
def div(query: str) -> int:
    """두 숫자를 나눕니다. 형식: '숫자1 숫자2'"""
    query = query.replace("'", "").replace('"',"").strip()

    nums = [int(x) for x in query.split()]
    return nums[0] / nums[1]


# 도구 일단 담아주기
tools = [add, substract, multiply, div]

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0) # agent와 연동할때는 가능한 창의력 낮게 해서 예측가능한 문장이 들어오게 하기

# agent 초기화
agent = initialize_agent(
    tools=tools,
    llm = llm,
    agent = AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose = True
)

result = agent.invoke({"input" : "3과 -4를 더합니다. 그리고 2를 곱해"})
print("최종 결과 :", result)
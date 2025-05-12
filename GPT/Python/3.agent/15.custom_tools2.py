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


@tool
def get_current_weather(location: str) -> str:
    """특정 위치의 현재 날짜 정보를 가져옵니다."""
    weather_date = {
        "서울" : "맑음, 기온 22도",
        "부산" : "흐림, 기온 25도",
        "제주" : "비, 기온 20도"
    }
    return weather_date.get(location, f"{location}의 날씨 정보가 없습니다.")

@tool
def get_population(city: str) -> str:
    """특정 도시의 인구정보를 가져옵니다."""
    # 가상데이터
    population_data = {
        "서울" : "약 970만명",
        "부산" : "약 340만명",
        "인천" : "액 300만명",
        "대구" : "약 240만명"
    }
    
    return population_data.get(city, f"{city}의 도시 정보가 없습니다.")


tools = [get_current_weather, get_population]

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0) # agent와 연동할때는 가능한 창의력 낮게 해서 예측가능한 문장이 들어오게 하기

# agent 초기화
agent = initialize_agent(
    tools=tools,
    llm = llm,
    agent = AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose = True
)

result = agent.invoke({"input" : "제주의 날씨는 어때? 그리고 인구는 몇 명이야?"})
print("최종 결과 :", result)
from langchain.agents import initialize_agent, AgentType, Tool
from langchain_community.agent_toolkits.load_tools import load_tools
from langchain_openai import OpenAI
from dotenv import load_dotenv
from langchain_core.documents import Document
from langchain_google_community import GoogleTranslateTransformer
import os

load_dotenv()
project_id = os.getenv("GOOGLE_CLOUD_PROJECT_ID")

# 번역기 초기화
translator = GoogleTranslateTransformer(project_id=project_id)

# 번역 도구 정의
def translate_ko_to_en(text):
    docs = [Document(page_content=text)]
    translated = translator.transform_documents(
        docs,
        source_language_code="ko",
        target_language_code="en"
    )
    return translated[0].page_content

# 도구 등록
tools = [
    Tool(
        name="KoreanToEnglishTranslator",
        func=translate_ko_to_en,
        description="Translates Korean text to English."
    )
]

# 에이전트 초기화
llm = OpenAI(temperature=0)
agent = initialize_agent(tools, llm, agent="zero-shot-react-description", verbose=True)

# 에이전트 실행
agent.run("다음 문장을 영어로 번역해줘: 안녕하세요.")



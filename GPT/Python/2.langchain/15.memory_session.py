from dotenv import load_dotenv
from uuid import uuid4 # 세션 쉽게 만들기

from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder 
from langchain_community.chat_message_histories import ChatMessageHistory
# 추가
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_core.output_parsers import StrOutputParser 

load_dotenv()

llm = ChatOpenAI(model = "gpt-4o-mini", temperature=0.1)

memory = ChatMessageHistory()

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant."),
    MessagesPlaceholder(variable_name="history"),
    ("human", "{input}")
 ])

chain = prompt | llm | StrOutputParser()

session_id1 = str(uuid4())
session_id2 = str(uuid4())
# 세션별 대화를 기록하기 위한 저장서
store = {}
# 딕셔너리타입으로 저장할거임
# 함수를 써서 session을 불러올거임
def get_session_history(session_id):
    if session_id not in store:
        store[session_id]  = ChatMessageHistory()
    return store[session_id]


chain_with_memory  = RunnableWithMessageHistory(
    chain,
    lambda session_id: get_session_history(session_id),
    input_messages_key="input",
    history_messages_key="history"
)


print(chain_with_memory.invoke({"input": "안녕"} ,config={"configurable" : {"session_id" : session_id1}}))
print(chain_with_memory.invoke({"input": "우리 무슨 이야기를 할까?"}, config={"configurable" : {"session_id" :session_id1 }}))
print(chain_with_memory.invoke({"input": "난 스포츠에 대한 이야기를 하고 싶어?"}, config={"configurable" : {"session_id" : session_id1}}))
print(chain_with_memory.invoke({"input": "난 음악에 대한 이야기를 하고 싶어?"}, config={"configurable" : {"session_id" : session_id2}}))
print(chain_with_memory.invoke({"input": "근데 우리 무슨 이야기 하고 있었지?"}, config={"configurable" : {"session_id" : session_id1}}))
print(chain_with_memory.invoke({"input": "근데 우리 무슨 이야기 하고 있었지?"}, config={"configurable" : {"session_id" : session_id2}}))

# LCEL(LangChain Expression Language) 로 변경하면서 verbose 같은 옵션이 사라짐
# Python 코드에서 체인을 Runnable 객체처럼 다룰 수 있으며, | 파이프 연산자를 사용해서 구성합니다.
# LCEL 스타일 체인 구성
# chain = prompt | llm

from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder 
from langchain_community.chat_message_histories import ChatMessageHistory
# 추가
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_core.output_parsers import StrOutputParser # 이 부분을 넣어서 parser 를 해서 아래 부분을 깔끔하게 처리

## content='우리는 스포츠에 대한 이야기를 하기로 했어요. 어떤 스포츠나 선수, 팀에 대해 이야기하고 싶으신지 말씀해 주시면 그에 맞춰
##  이야기를 나눌 수 있어요!' additional_kwargs={'refusal': None} response_metadata={'token_usage': {'completion_tokens': 44, 'prompt_tokens': 183, 'total_tokens': 227, 'completion_tokens_details': {'accepted_prediction_tokens': 0, 'audio_tokens': 0, 'reasoning_tokens': 0, 'rejected_prediction_tokens': 0}, 'prompt_tokens_details': {'audio_tokens': 0, 'cached_tokens': 0}}, 'model_name': 'gpt-4o-mini-2024-07-18', 'system_fingerprint': 'fp_0392822090', 'id': 'chatcmpl-BWuxD5ZCwKJULTfFiENU6Trh0XUtq', 'service_tier': 'default', 'finish_reason': 'stop', 'logprobs': None} id='run--a83424c5-32bf-4388-bde0-95351326009d-0' usage_metadata={'input_tokens': 183, 'output_tokens': 44, 'total_tokens': 227, 'input_token_details': {'audio': 0, 'cache_read': 0}, 'output_token_details': {'audio': 0, 'reasoning': 0}}

load_dotenv()

llm = ChatOpenAI(model = "gpt-4o-mini", temperature=0.1)

memory = ChatMessageHistory()

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant."),
    MessagesPlaceholder(variable_name="history"),
    ("human", "{input}")
 ])

chain = prompt | llm | StrOutputParser()
# 사용자 세션별로 저장해야 되니깐
# 세션 ID를 관리함
# 16K로 메모리 저장
chain_with_memory  = RunnableWithMessageHistory(
    chain,
    lambda _: memory, # get_session_history_func이 들어가는 곳인데 일단은 빼고함
    input_messages_key="input",
    history_messages_key="history"
)
# session_id : config 로 관리
print(chain_with_memory.invoke({"input": "안녕"} ,config={"configurable" : {"session_id" : "user1"}}))
print(chain_with_memory.invoke({"input": "우리 무슨 이야기를 할까?"}, config={"configurable" : {"session_id" : "user2"}}))
print(chain_with_memory.invoke({"input": "난 스포츠에 대한 이야기를 하고 싶어?"}, config={"configurable" : {"session_id" : "user1"}}))
print(chain_with_memory.invoke({"input": "근데 우리 무슨 이야기 하고 있었지?"}, config={"configurable" : {"session_id" : "user2"}}))
## 메모리가 같기때문에 세션 달리줘도 안통함

## 원래는 넣어야 되는건데 안넣어서 에러남
## ValueError: Missing keys ['session_id'] in config['configurable'] Expected keys are ['session_id'].When using via .invoke() or 
## .stream(), pass in a config; e.g., chain.invoke({None: 'foo'}, {'configurable': {'session_id': '[your-value-here]'}})



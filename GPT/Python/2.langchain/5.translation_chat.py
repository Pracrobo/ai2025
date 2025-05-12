from langchain_core.prompts import ChatPromptTemplate, HumanMessagePromptTemplate, SystemMessagePromptTemplate
from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
from langchain_core.runnables import RunnableLambda

load_dotenv()
template = "다음 문장을 한국어로 변역해줘: \n\n {sentence}"
prompt = ChatPromptTemplate([
    SystemMessagePromptTemplate.from_template("You are a expert translator"), # 상황설정 - system prompt
    HumanMessagePromptTemplate.from_template(template)
    ])
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.3, max_tokens=1024)
chain = prompt | llm | RunnableLambda(lambda x: {"translated" : x.content.strip()})

result = chain.invoke({"sentence" : "I think I can now somewhat understand the version of myself who was overwhelmed with emotion by just a single word — 'It’s okay' — on that day."})
# result = chain.invoke({"sentence" : "They are the kind of person whose gaze alone can alter the very rhythm of your life."})
print("한글 번역본 : ", result["translated"])




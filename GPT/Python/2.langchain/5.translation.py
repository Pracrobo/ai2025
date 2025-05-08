from langchain_core.prompts import PromptTemplate
from langchain_openai import OpenAI
from dotenv import load_dotenv
from langchain_core.runnables import RunnableLambda

load_dotenv()
template = "다음 문장을 한국어로 변역해줘: \n\n {sentence}"
prompt = PromptTemplate(input_variables=["sentence"], template=template)
llm = OpenAI(temperature=0.3, max_tokens=1024)
chain = prompt | llm | RunnableLambda(lambda x: {"translated" : x.strip()})

result = chain.invoke({"sentence" : "I think I can now somewhat understand the version of myself who was overwhelmed with emotion by just a single word — 'It’s okay' — on that day."})
# result = chain.invoke({"sentence" : "They are the kind of person whose gaze alone can alter the very rhythm of your life."})
print("한글 번역본 : ", result["translated"])




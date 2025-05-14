from dotenv import load_dotenv
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI, OpenAIEmbeddings 
# LLM자체가 만들어둔 베이스모델
# 백터DB 수많은 값들이 
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter # 적절한 단위로 문서를 잘라읽는것 (토큰갯수만큼)
from langchain_community.vectorstores import Chroma # 백터DB에 저장 (or FAISS)

from langchain_core.documents import Document
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough

load_dotenv()

# 1. 텍스트 문서 읽기
loader = TextLoader("oversea.txt", encoding="utf-8")
documents = loader.load()

# 문서에 메타데이터 추가 , 백터DB에 넣을 수 있다.
documents = [Document(page_content=doc.page_content, metadata={"source" : "traveldocs.txt"}) for doc in documents]

# 2. 문서안의 내용을 vector화 해서 저장
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200 )
texts = text_splitter.split_documents(documents)

# print("청크1", texts[0])
# print("청크2", texts[1])

embeddings = OpenAIEmbeddings()
store = Chroma.from_documents(texts, embeddings, collection_name="travel") # DB 저장
# 3. 대화하기 위한 모델 정의
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
# 4. 데이터를 추출한 소스 정ㅇ의
retriever = store.as_retriever()
# 5. 질문 템플릿 생성

template = """
다음 내용을 참고해서 사용자의 질문에 답변하시오:
{context}

만약, 정보가 없으면 모른다고 답변해줘.
질문: {question}

답변을 작성하고 마지막에 "출처: "라고 해서 문서의 출처를 명시해줘.
"""

prompt = ChatPromptTemplate.from_template(template)

chain = (
    {"context" : retriever, "question" : RunnablePassthrough()} 
    | prompt | llm
)
# response = chain.invoke('충칭의 유명한 관광지를 알려주시오')
# print(response.content)

def answer_question(question):
    result = chain.invoke(question)

    if "출처:" in result.content:
        answer, sources = result.content.split("출처:", 1)
    else:
        answer = result.content.strip()
        sources = "출처 정보를 찾을 수 없습니다."

    return f"질문: {question}\n응답: {answer}\n출처: {sources}"


print(answer_question("충칭의 유명한 관광지를 알려주시오"))
print(answer_question("텐진시에 대해 알려주시오"))
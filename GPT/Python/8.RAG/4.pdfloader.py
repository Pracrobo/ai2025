import os
from dotenv import load_dotenv

from langchain_openai import ChatOpenAI, OpenAIEmbeddings 
from langchain_community.document_loaders import PyMuPDFLoader
from langchain_community.document_loaders import TextLoader
# from langchain.text_splitter import RecursiveCharacterTextSplitter # 적절한 단위로 문서를 잘라읽는것 (토큰갯수만큼)
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.vectorstores import Chroma # 백터DB에 저장 (or FAISS)

from langchain_core.documents import Document
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough

load_dotenv()

pdf_filename = 'PDF/Python_시큐어코딩_가이드(2023년_개정본).pdf'
PERSIST_DIR = "./chroma_db"
COLLECTION_NAME = 'secure_coding_python'

def create_vector_db(file_path):
    loader = PyMuPDFLoader(file_path)
    pages = loader.load()
    # print(f"총페이지수:", len(pages))
    # print(f"8페이지의 내용 샘플: \n{pages[8].page_content}")

    for doc in pages:
        doc.metadata["source"] = os.path.basename(file_path) # 파일명 추가
        if "page" not in doc.metadata:
            doc.metadata["page"] = doc.metadata.get("page", 0) + 1 #페이지번호 추가

    text_splitter = CharacterTextSplitter(
        separator="\n\n", ## 문서 구분할 단위
        chunk_size=1000,  ## 최대 1000토큰
        chunk_overlap=200) # 이전 문서와 중복할 단위

    texts = text_splitter.split_documents(pages)

    embeddings = OpenAIEmbeddings()
    store = Chroma(
            texts, embeddings,
            collection_name=COLLECTION_NAME, 
            persist_directory=PERSIST_DIR) # DB 저장
    return store


def load_vector_db():
    embeddings = OpenAIEmbeddings()
    store = Chroma(
            collection_name=COLLECTION_NAME, 
            embedding_function=embeddings, 
            persist_directory=PERSIST_DIR) 
    return store

# def check_collection_exists(persist_dir, collection_name): 
#     collections_path = os.path.join(persist_dir, 'chorma-collections.parquet')
#     store = Chroma(
#         collection_name=collection_name,
#         embedding_function=embeddings,
#         persist_directory=persist_dir
#     )
#     results = store.get(include=[]) # 암의로 데이터 조회
#     return len(results["ids"]) > 0

def check_collection_exists(persist_dir, collection_name):
    embeddings = OpenAIEmbeddings()
    store = Chroma(
        collection_name=collection_name,
        embedding_function=embeddings,
        persist_directory=persist_dir,
    )
    results = store.get(include=[])
    return len(results["ids"]) > 0

# DB가 없으면 생성, 있으면 로딩, collection까지 확인
if check_collection_exists(PERSIST_DIR, COLLECTION_NAME):
    store = load_vector_db()
else:
    store = create_vector_db(pdf_filename)
    

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
# 4. 데이터를 추출한 소스 정ㅇ의
retriever = store.as_retriever()

prompt = """
다음 내용을 참고해서 사용자의 질문에 답변하시오:
{context}

만약, 정보가 없으면 모른다고 답변해줘. 내용이 길 경우 리스트 형태로 번호를 매겨서 답변해줘
질문: {question}

답변을 작성하고 마지막에 "출처: "라고 해서 문서의 출처를 명시해줘.
"""

prompt = ChatPromptTemplate.from_template(prompt)

chain = (
    {"context" : retriever, "question" : RunnablePassthrough()} 
    | prompt | llm
)


def answer_question(question):
    result = chain.invoke(question)

    if "출처:" in result.content:
        answer, sources = result.content.split("출처:", 1)
    else:
        answer = result.content.strip()
        sources = "출처 정보를 찾을 수 없습니다."

    return f"질문: {question}\n응답: {answer}\n출처: {sources}"

# print(answer_question("전체 요약을 알려주시오"))
print(answer_question("시큐어 코딩 가이드 라인에 대해 알려주시오"))
print(answer_question("SQL Injection에 대해 알려주시오"))
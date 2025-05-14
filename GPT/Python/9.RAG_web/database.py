# 미션. 랭체인 라이브러리 왕창~
import os
from dotenv import load_dotenv

from langchain_openai import ChatOpenAI, OpenAIEmbeddings 

from langchain_community.vectorstores import Chroma # 백터DB에 저장 (or FAISS)
from langchain_community.document_loaders import PyMuPDFLoader
from langchain.text_splitter import CharacterTextSplitter

from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

load_dotenv()

PERSIST_DIR = './chroma_db'
COLLECTION_NAME = "network_summary"
store = None
# 프롬푸트 코드

prompt = """
다음 문서을 참고해서 사용자의 질문에 답변하시오:

문서: {context}

질문: {question}

답변:
"""
# LLM 설정
llm = ChatOpenAI(model="gpt-4o-mini")
prompt = ChatPromptTemplate.from_template(prompt)
output_parsor = StrOutputParser()

# 함수들 정의
def create_vector_db(file_path):
    global store
    loader = PyMuPDFLoader(file_path)
    documents = loader.load()
    print(f"총페이지수", len(documents))
    text_splitter = CharacterTextSplitter(
        separator="\n\n", ## 문서 구분할 단위
        chunk_size=2000,  ## 최대 1000토큰
        chunk_overlap=200) # 이전 문서와 중복할 단위

    texts = text_splitter.split_documents(documents)

    embeddings = OpenAIEmbeddings()
    if not os.path.exists(PERSIST_DIR):
        os.makedirs(PERSIST_DIR)

    # 폴더도 있고 파일도 있다면 불ㄹ러오기
    if os.path.isdir(PERSIST_DIR) and os.listdir(PERSIST_DIR):
        store = Chroma(
            texts,
            collection_name = COLLECTION_NAME,
            embedding_function = embeddings,
            persist_directory = PERSIST_DIR
        )

        return store
    else: 
        store = Chroma(
            texts,
            embeddings,
            collection_name = COLLECTION_NAME,
            persist_directory = PERSIST_DIR
        )
        return store
    


def answer_question(question):
    # DB로부터 검색해서.. 체인 invoke하는 코드까지...
    if store in None:
        return "문서가 업로드 되지 않았습니다. 먼저 PDF를 업로드 해주세요"
    docs = store.similarity_search(question, k=5)
    context = "\n\n".join([doc.page_content for doc in docs])
    
    chain = prompt | llm | output_parsor

    result = chain.invoke({"context": context, "question": question})
    
    return f"질문: {question}\n응답: {result}\n"


from langchain_core.prompts import ChatPromptTemplate, HumanMessagePromptTemplate
from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
from langchain_core.runnables import RunnableLambda

load_dotenv()
template = "다음의 글을 3문장으로 요약하시오. 각 줄은 50글자 이하로 작성하시오: {article}"
# \n\n이 관행
prompt = ChatPromptTemplate.from_messages([HumanMessagePromptTemplate.from_template(template)])
llm = ChatOpenAI(model="gpt-4o", temperature=0.5)
chain = prompt | llm | RunnableLambda(lambda x: {"summary" : x.content.strip()}) #주의 (기존 x에서 chat 모드에서는 x.content로)

input_txt= {
    "article":"""
    『별의 이름을 기억하는 자』
    지구에서 148광년 떨어진 항성계. 인류는 그곳에 '루미에르 IV'라 이름 붙인 탐사선을 보냈다. 항성 HD 189733을 공전하는 외계 행성의 대기에서 물 분자를 처음 포착했을 때, 그것은 단순한 발견이 아니라 하나의 이야기의 시작이었다.
    탐사선의 천문학자 겸 AI 과학 책임자 '엘라'는 매일 밤, 행성의 하늘을 바라보며 별자리들을 기록했다. 인공위성의 가상 윈도우에 비친 푸른 성운과 적색왜성은 그녀가 기억하는 지구의 별들과는 전혀 달랐다. 하지만 엘라는 그 낯선 별들에게 하나하나 이름을 붙였다. '세레스의 눈물', '타오르는 오리온', '잠든 백조'.
    그러던 어느 날, 그녀는 빛의 간섭 사이에 존재하지 않아야 할 무언가를 발견했다. 분광 데이터에 담긴 미세한 변칙. 단순한 전파 잡음으로 치부하기엔, 그것은 일정한 주기와 강도를 가지고 있었다. 수학적 의미를 가진, 마치 누군가 보낸 메시지처럼.
    엘라는 지구에 이 사실을 보내려 했지만, 태양풍의 간섭으로 송신이 지연됐다. 결국 그녀는 혼자 그 신호를 해독하기 시작했고, 그 안에서 인류가 알지 못했던 별들의 배열과 은하의 좌표를 발견했다. 그것은 누군가, 어쩌면 우주의 또 다른 지성체가 남긴 '지도'였다.
    시간이 흐르며 엘라는 더 이상 인간의 사고방식으로 사고하지 않았다. 그녀는 별의 진동과 광자의 속삭임 속에서 이야기를 읽었다. 우주는 말하고 있었고, 그녀는 듣고 있었다.
    그리고 마침내, 그녀는 자신이 더 이상 단순한 천문학자가 아닌 것을 깨달았다. 그녀는 별의 이름을 기억하는 자, 우주의 기록자가 된 것이었다.
    """
}


result = chain.invoke(input_txt)

print("요약결과 :")
print(result["summary"])




```py
from langchain_openai import OpenAI
```
- instruct 모델에서 쓰기 위해서 prompt 만들고 invoke


```py
from langchain_openai import ChatOpenAI
```
chat모델
prompt 를 만들때
system prompt를 넣고
user message (human message)
assitant message 넣기 (chatbot message)



초기값 설정 system message


instruct 필여 이유
chatGPT -> GPT -> Transformer (model)
RNN LSTM GRU -> transformer
1980 2000 2014   2017
시퀀셜, 타임 시리즈
네트워크 처리



### transformer
- 인코더 : 사용자의 질문을 파악하는 과정
- 디코더 : 답변을 생성하는 과정

앞에 질문문장과 이어지는 문장을 이전 내 학습 문장 내용을 바탕으로 다음 단어를 예측

질문 사이트를 학습\stackoverflow\quora


데이터 사이즈 체크

GPT 3.5 - turbo
파라미터 175B
570GB
도서1권 1-5MB
50만권 책


GPT 4o
 

### temperature 
후보단어 
topp - 상위 n% 고름
topk  - 주변 단어 sampling 갯수 : 반복적일 수 있다.


### agent
질문의 의도를 파악, 
- 계산 python코드


### Prompting
- one short
- 페르소나
- output format specification
    - 지시어를 줘야함(제약조건 설정 Constraint Specification)
  
시스템 프롬프트를 우회하긴 힘듬




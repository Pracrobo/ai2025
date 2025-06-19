# AI 용어 정리

## LLM (Large Language Model)

방대하나 텍스트 데이터를 학습하여 인간과 유사한 텍스트를 이해하고 생성하는 인공지능 모델이다.

## 자연어처리(NLP) : natural language processing

인공언어와 대치되는 개념으로
사람들이 일상적으로 사용하는 언어

사용분야) 음성인식, 내용 요약, 번역, 사용자의 감성 분석, 텍스트 분류 작업(스팸 메일 분류, 뉴스 기사 카테고리 분류), 질의 응답 시스템, 챗봇

- 특징
- 시간의 흐름에 따라 정보가 연속적으로 이어지는 시퀀스 데이터입니다.
-

- 몇 개의 문자를 묶어서 파악하려는 n-gram 기법이 있습니다. 이는 딥러닝 기법이 발달 한 후 단어나 문자 단위의 자연어 처리가 많이 쓰인다.

## Text Preprocessing:

텍스트 전처리

풀고자 하는 문제의 용도에 맞게 텍스트를 사전에 처리하는 작업

### Tokenization

자연어 처리에서 크롤링 등으로 얻어낸 corpus 데이터가 필요에 맞게 전처리 되지 않은 상태라면 해당 데이터를 사용하고자하는 용도에 맞게 토큰화, 정제, 정규화 하는 일을 하게 되는데

주어진 corpus 에서 token이라는 단위로 나누는 작업을 tokenization이라 한다.
주로 의미있는 단위로 토큰을 정의한다.

1. 단어 토큰화(word Tokenization)
2. 문장 토큰화(sentence Tokenization): 코퍼스 내에서 문장 단위로 구분하는 작업으로 때로는 문장 분류(sentence segmentation)

### Cleaning and Normalization (정제, 정규화)

- 정제 Cleaning : 갖고 있는 코퍼스로부터 노이즈 데이터를 제거한다.
- 정규화 Normalization : 표현 방법이 다른 단어들을 통합시켜서 같은 단어로 만들어준다.

### 정규표현식(Regular Expression)

코퍼스에서 노이즈 데이터의 특징을 잡아내면 정규표현식을 통해 이를 제거할 수 있다.

출처: [위키독스](https://wikidocs.net/24602)

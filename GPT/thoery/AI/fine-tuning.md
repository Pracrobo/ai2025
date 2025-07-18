# 파인튜닝 fine-tuning

파인 튜닝은 사전 학습된 모델을 특정 작업이나 응용 프로그램에 맞게 조정하는 과정이다.

LLM과 컴퓨터 비전에서 주로 사용되며 모델이 기존에 학습한 지식을 새로운 데이터나 작업에 맞게 미세 조정함으로써 성능을 향상시킨다.

## 파인 튜닝 방법

1. 전체 모델 파인 튜닝 : 사전 학습된 모델의 모든 파라미터를 새로운 작업에 맞게 재학습하는 방법이다. 이 접근법은 매우 효과적이지만 많은 컴퓨팅 자원과 시간이 소요된다.
   또한 catastrophic forgetting 문제로 인해 모델이 원해 학습한 내용을 잃어버릴 수 있다.

2. 효율적인 파인 튜닝(Efficient Fine-Tuning) : 전체 모델을 업데이트 하는 대신 일부 중요한 파라미터만 조정하는 방법으로 Low-Rank Adaptation(LoRA), Prefix-Tuning, Adapters

- 필요한 계산 자원과 메모리를 크게 줄이면서도 모델의 성능을 유지할 수 있다.

## 파인 튜닝 활용 분야

- 챗봇
- 특정 도메인의 텍스트 생성
- 이미지 분류
- 객체 인식



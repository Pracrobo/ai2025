CoT 방식
Chain Of Thought 방식
   대형 언어 모델(LLM)이 복잡한 문제를 더 잘 풀 수 있도록 **추론 과정(생각의 흐름)**을 단계별로 서술하도록 유도하는 방법입니다. GPT-4나 Claude 같은 모델을 쓸 때 특히 효과적입니다.

| 장점                     | 설명                                             |
| ---------------------- | ---------------------------------------------- |
| **복잡한 문제 해결력 향상**   | 수학, 논리 추론, 단계별 판단 등에서 성능이 월등히 올라감              |
| **모델의 사고 과정 노출**    | 모델이 어떻게 판단했는지 “생각의 흐름”을 볼 수 있음                |
| **디버깅 및 오류 분석 가능**  | 어디서 잘못된 추론이 있었는지 파악 가능                         |
| **Few-shot 학습에 유리** | 몇 가지 CoT 예시만 보여줘도 모델이 따라함 (few-shot prompting) |

CoT은 어디서 특히 잘 쓰이나요?
수학 문제 해결

논리 추론 (예: 퍼즐, 조건 판단)

의학, 법률, 경제 분석

다중 문장 이해가 필요한 자연어 질문



prompt = "1.Find the list of public holidays in South Korea with their specific dates(month and day)
1. For each holiday, add the month number and day number, 
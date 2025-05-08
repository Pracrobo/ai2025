
# One-Shot learning
딱 한번, 극소수의 예시만 보고도 새로운 개념을 학습하거나 분류할 수 있는 머신러닝 방식

## 원샷러닝(One-shot learning)이란?
사람은 고양이를 한 번만 봐도 이후에 다른 고양이를 알아볼 수 있습니다.

전통적인 딥러닝은 수천 장의 고양이 사진이 있어야 학습이 됩니다.

원샷러닝은 소수의 학습 데이터만으로도 일반화가 가능하도록 설계된 학습 방식입니다.

| 기술                        | 설명                                             |
| ------------------------- | ---------------------------------------------- |
| **Siamese Networks**      | 두 이미지를 비교하는 신경망 구조. 쌍(pair)으로 입력을 받아 유사도를 출력함. |
| **Matching Networks**     | support set(소량의 샘플)와 비교하여 유사한 클래스를 찾는 메타러닝 방식. |
| **Prototypical Networks** | 각 클래스의 중심(프로토타입)을 계산하고, 새로운 입력과의 거리를 기반으로 분류.  |
| **Meta-learning**         | "학습하는 법을 학습"하여 새로운 작업에 빠르게 적응함.                |



주요 논문 / 출처
Siamese Neural Networks for One-shot Image Recognition
→ Koch et al., 2015

Matching Networks for One Shot Learning
→ Vinyals et al., 2016 (Google DeepMind)

Prototypical Networks for Few-shot Learning
→ Snell et al., 2017

Deep Learning book (Ian Goodfellow 등 저)
→ 원샷러닝 관련된 개요 설명


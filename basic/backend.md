# Backend 

## 브라우저의 비동기처리

과거의 웹서버, C언어, Java언어에는 절차지향적으로 순차적으로 하나하나 실행 하는 것


CPU가 처리하는데 옛날에는 1개
그래서 한번에 하나만 처리했다.


CPU의 동시처리는 여러개의 일을 하는 것

싱글 코어일 때 윈도우내에서 처리하려면 (1초씩) 처리하는 형태
clock =
The clock speed measures the number of cycles your CPU executes per second, measured in GHz (gigahertz)

ex) The clock speed of an Intel Core i7 CPU varies depending on the model, ranging from 3.0 GHz to 5.6 GHz


2.1GHz <> 5.4GHz
2100 MHz
2100000 KHz
2,100,000,000 Hz
21억


컴퓨터가 할일이 많아짐
CPU의 코어가 많아지고 할일이 많아져서 멀티스레드 개념을 만듦


사용자 여러먕 > 여러 개의 일 > 여러 프로세스/스레드

DDos 공격 (한꺼번에 많은 user 처리하다가 과부하발생시키는 것)
- 다수의 손상된 시스템이 종종 봇넷으로 조직되어 대상 네트워크, 서버 또는 온라인 서비스에 엄청난 양의 트래픽을 발생시키는 사이버 공격

## 스레드 풀

Pool을 제한적으로 걸고 스레드를 만들어서 처리를 시키는 것, 나머지는 접속 못하게 막기
![alt text](image-3.png)


## 웹브라우저에서 스레드 풀 대신 비동기처리
해야할 일들을 대기열에 넣어두고(Queue) 누군가 Queue를 바라보면서 하나하나 처리

자연스럽게 이 일들을 다 처리하게끔 
싱글 스레드로도 처리되게끔 

이런게 왜 백엔드는 없냐 해서 만들었던게 
2009년 JavaScript에 브라우저 내장되어 있으므로 그걸 가져오는 식으로 사용 - 오픈소스 브라우저(chorm, chomium)
Chromium 프로젝트의 오픈 소스 코드를 기반으로 합니다. 브라우저 개발은 2006년에 시작되었으며 Sundar Pichai 가 이끌었습니다.


하나의 파일에 하나의 함수를 짜지 않고 여러개 파일에 여러개의 함수를 
JS를 처리하는 모듈 > 엔진:  V8엔진 (브라우저에서만 돌아감)


터미널 환경에서 구현되게 개발한게 (V8엔진은 wrapping) : Node.js
```sh
node 
````


node창은 브라우저 개발자 도구랑 같다


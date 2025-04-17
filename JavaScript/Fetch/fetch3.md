# Fetch의 개념 - 강사님 설명
```JavaScript
fetch(URL, {옵션})
옵션 = {
    method,
    header,
    body
}
```
모든 비동기 요청
내가 요청한게 나의 컨트롤을 벗어난 범위


모든 비동기는 promise를 반환한다.
pending  내가 처리
fulfilled 
rejected

.then으로 처리
.catch 

FE : Client Side에서 돌아감
BE : Express, Python
OpenAI


- async/await ES2017 에서부터 나온 문법

Fetch : 외부 요청


- try~catch는 범위가 좁게 하는게 좋다.
- 10줄 넘어가면 잘라라.
- 이론적으로는 이렇게 나누는게 좋은거
   
```JavaScript
try{
    const reponse = await fetch() 
}catch {

}

try{
    const result = await response.json() 
}catch {

}

```


### 파이프라인

1. 방법  User(FE) <> BE(Express) <> BE(Python) <> OpenAI
        클라        서버    클라    서버     클라   서버
      - [Queueing]('https://m.blog.naver.com/sung_mk1919/221805181629')
      - [Queueing2]('https://itpenote.tistory.com/382')
      - [Queueing3]('https://blog.naver.com/kwi3094/120044557996')
          - 대용량 처리를 위해 일부러 Queueing 처리를 한다.
          - 대기행렬이론은 대기행렬을 수학적으로 다루는 이론이다. 이 이론은 대기행렬에 도착하는 것과 대기하는 것 그리고 서비스되는 일련의 프로세스들에 대한 수학적, 확률적 분석을 가능하게 한다.
      - [Blocking]('https://www.inflearn.com/news/72620')


2. User(FE) <> BE(Express)<                     > OpenAI    
    클라        서버     클라                       서버
   - 이것도 가능하다
 

3. User(FE) <                           > OpenAI
    클라                                     서버
   - 이것도 가능하다



# Fetch

fetch : 서버로부터 정보를 가져오는 것


### 학습용 서버
[Placeholder]('https://jsonplaceholder.typicode.com/')


Resources
JSONPlaceholder comes with a set of 6 common resources:

- /posts	100 posts
- /comments	500 comments
- /albums	100 albums
- /photos	5000 photos
- /todos	200 todos
- /users	10 users

ex) https://jsonplaceholder.typicode.com/users/2


Routes
All HTTP methods are supported. You can use http or https for your requests.

- GET	/posts
- GET	/posts/1
- GET	/posts/1/comments
- GET	/comments?postId=1
- POST	/posts
- PUT	/posts/1
- PATCH	/posts/1
- DELETE	/posts/1
- Note: see guide for usage examples.



## function fetch
(input: RequestInfo | URL, init?: RequestInit): Promise<Response>


## Promise 개념
JavaScript Fetch는 비동기 작업의 최종 완료 또는 실패를 나타내는 개념


## fetch를 처리하는 문법

## fetch().then()
- 서버에 요청 (비동기 작업 시작) : fetch
- "비동기 작업이 끝난 다음에" 실행할 코드를 연결하는 메서드 : then()
- 무언가를 기다린 다음 그 결과를 가지고 뭘 하겠다는 뜻, 작업이 끝나면 실행해!라는 뜻
- 


## fetch().then().then().then() ...catch()
비동기로 처리하면서 결과를 동기적으로 기다리는 방식...


## Syntax

```JS
fetch('/어디로')
  .then(response => response.json()) // 응답을 JSON으로 파싱
  .then(data => {
      // data는 JSON 응답 내용
  })
  .catch(error => {
      // 에러 발생 시 처리
  });

```


```JavaScript
fetch('/users')
  .then(res => {
    if (!res.ok) throw new Error('응답 실패');
    return res.json();
  })
  .then(users => {
    console.log(users); // 정상일 때
  })
  .catch(error => {
    console.error('에러 발생:', error.message); // 실패 처리
  });

```

# [Response]('https://developer.mozilla.org/ko/docs/Web/API/Response')


### 인스턴스 속성
Response.body 읽기 전용
- 본문 내용의 ReadableStream입니다.

Response.bodyUsed 읽기 전용
- 응답의 본문이 사용됐는지 아닌지 나타내는 불리언입니다.

Response.headers 읽기 전용
- 응답에 연관된 Headers 객체입니다.

Response.ok 읽기 전용
- 응답의 성공 (코드가 200-299 범위 내) 여부를 나타내는 불리언입니다.

Response.redirected 읽기 전용
- 응답이 리디렉션의 결과인지 (즉, URL 목록이 두 개 이상의 항목을 지녔는지) 나타냅니다.

Response.status 읽기 전용
- 응답의 상태 코드입니다. 성공 시 200입니다.

Response.statusText 읽기 전용
- 상태 코드에 해당하는 상태 메시지입니다. (예시: 200이면 OK)

Response.type 읽기 전용
- 응답 유형입니다. (예시: basic, cros)

Response.url 읽기 전용
- 응답 URL입니다.

### 정적 메서드
Response.error()
- 네트워크 오류와 연관된 새로운 Response 객체를 반환합니다.

Response.redirect()
- 다른 URL을 가리키는 새로운 응답을 생성합니다.

### 인스턴스 메서드
- Response.arrayBuffer()
응답 본문의 ArrayBuffer 표현으로 이행하는 프로미스를 반환합니다.

- Response.blob()
응답 본문의 Blob 표현으로 이행하는 프로미스를 반환합니다.

- Response.clone()
Response 객체의 복사본을 생성합니다.

- Response.formData()
응답 본문의 FormData 표현으로 이행하는 프로미스를 반환합니다.

- Response.json()
응답 본문을 JSON으로 파싱한 결과로 이행하는 프로미스를 반환합니다.

- Response.text()
응답 본문의 text 표현으로 이행하는 프로미스를 반환합니다.


# 📦 Response 객체 - 주요 메서드와 속성

## ✅ 메서드(Method)

| 메서드 | 설명 |
|--------|------|
| `res.json()` | 응답 본문을 JSON 객체로 파싱 |
| `res.text()` | 응답 본문을 일반 문자열로 변환 |
| `res.blob()` | 응답 데이터를 Blob(파일 데이터 등)으로 반환 |
| `res.arrayBuffer()` | 응답을 ArrayBuffer로 반환 (바이너리 데이터 처리용) |
| `res.formData()` | 응답을 FormData 객체로 반환 (주로 multipart/form-data 용도) |

---

## ✅ 속성(Property)

| 속성 | 설명 |
|------|------|
| `res.ok` | 응답 상태 코드가 200~299 사이면 `true`, 아니면 `false` |
| `res.status` | HTTP 상태 코드 (예: 200, 404, 500 등) |
| `res.statusText` | 상태 메시지 (예: `"OK"`, `"Not Found"` 등) |
| `res.headers` | 응답 헤더 정보 (`Headers` 객체로 제공됨) |
| `res.url` | 응답이 발생한 최종 URL |

---

## 💡 사용 예시

```js
fetch('/api/data')
  .then(res => {
    if (!res.ok) throw new Error('요청 실패! 상태: ' + res.status);
    return res.json();
  })
  .then(data => {
    console.log('받은 데이터:', data);
  })
  .catch(err => {
    console.error('에러:', err.message);
  });



## 숙제 
1. jsonplaceholder 사이트에서 posts 에서 랜덤으로 1~100 까지 숫자 만들어서 불러와서 화면에 렌더링
2. 클리어 눌러서 화면에 있는 요소 클리어
3. 버튼 클릭 가능여부 추가 (로딩 중에 또 로딩 못하게.. 클리어 중에 또 클리어 못하게.. 클리어 할거 없으면 클리어 안되게..)

random으로 100개 지연 1초 , 지연처리ㅇ안해도 되지만 clear버튼 사용자 사용성 좋게 만들기

## Fetch 정의

### JavaScript Fetch란 무엇인가요?
JavaScript Fetch(일명 JavaScript Fetch API 또는 간단히 Fetch API)는 웹 개발자에게 JavaScript 언어를 사용하여 서버에서 리소스를 검색하는 강력한 방법을 제공합니다. 이는 더 깨끗하고 매끄러운 접근 방식 덕분에 이전의 XMLHttpRequest보다 선택됩니다.

### JavaScript Fetch의 핵심 특징
## 프로미스
- JavaScript Fetch는 비동기 작업의 최종 완료 또는 실패를 나타내는 개념인 프로미스를 활용합니다. 이는 XHR을 다룰 때 종종 발생하는 콜백 문제에 비해 코드를 훨씬 더 읽기 쉽고 관리하기 간단하게 만듭니다.

## fetch() 함수
- fetch() 메서드는 JavaScript Fetch의 핵심이며, 가져오고자 하는 리소스의 URL을 제공하는 데 사용됩니다. fetch() 메서드를 이용해 요청 HTTP 메서드(GET, POST, PUT 및 DELETE)와 같은 요소를 지정할 수 있는 선택권이 있습니다.

## JavaScript Fetch의 장점
### 1. 현대적 디자인과 생태계 통합: 
- 프로미스에 최적화: Fetch는 현대 JavaScript에서 널리 사용되는 프로미스 기반 접근 방식과 완벽하게 정렬됩니다. 이는 더 깨끗한 코드와 비동기 작업의 처리를 용이하게 합니다.
- 웹 기술 통합: Fetch는 서비스 워커, 웹 워커 및 기타 현대 웹 기능과 원활하게 통합되어 더 응집력 있는 개발 경험을 제공합니다.

### 2. 개발자 경험:

- 가독성과 유지 보수성: JavaScript Fetch의 더 간단한 구문과 프로미스 기반 구조는 복잡한 비동기 로직을 처리할 때 코드를 더 읽고 이해하기 쉽고 유지 관리하기 용이하게 만듭니다.
- 오류 처리: JavaScript Fetch는 .catch()를 사용하여 오류를 처리하는 더 명확한 방법을 제공하여 코드의 강건성을 향상시킵니다.

### 3. 고급 기능:
- 내장 CORS 지원: JavaScript Fetch는 교차 출처 리소스 공유(CORS)에 대한 기본 지원을 제공하여 다른 도메인의 서버와의 통신을 간소화합니다.
- 요청 사용자 지정 가능: JavaScript Fetch는 헤더와 본문과 같은 옵션을 통해 요청을 세부적으로 사용자 지정할 수 있어 다양한 HTTP 메서드에 대해 다재다능합니다.


### 4. 유연성 및 확장성:

- 타사 라이브러리: JavaScript Fetch는 Axios와 같은 라이브러리의 견고한 기반 역할을 하며, 이들은 이를 기반으로 인터셉터, 취소, 자동 JSON 파싱과 같은 추가 기능을 제공합니다.
- 사용자 지정 가능한 동작: JavaScript Fetch는 특정 요구에 맞게 구성할 수 있습니다. 예를 들어, 애플리케이션 코드에 도달하기 전에 요청과 응답을 수정하도록 인터셉터를 구현할 수 있습니다.


### 5. 브라우저 지원 및 성능:

- 광범위한 브라우저 호환성: JavaScript Fetch는 현대 브라우저에서 폭넓은 지원을 받아 대부분의 프로젝트에 대한 폴리필 필요성을 없애줍니다.
- 성능 고려 사항: JavaScript Fetch와 일부 대안 간의 원시 성능 차이는 많은 경우에서 미미할 수 있지만, JavaScript Fetch의 전반적인 디자인과 현대 웹 기능과의 통합은 더 부드러운 사용자 경험에 기여할 수 있습니다.


## 결론
Fetch API는 JavaScript에서 리소스를 가져오는 선호하는 방법이 되었습니다. 이는 강력하고 유지 보수 가능하며 원활한 사용자 경험을 제공하는 현대 웹 애플리케이션을 구축하기 위한 견고한 기반을 제공합니다.

웹 개발이 계속 발전함에 따라 Fetch는 개발자들에게 핵심 도구로 남아 있을 가능성이 높으며, 향후 웹 기술과의 추가 발전 및 통합의 잠재성을 가집니다.
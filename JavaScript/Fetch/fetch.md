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

## fetch().then().then().then() ...catch()
비동기로 처리하면서 결과를 동기적으로 기다리는 방식...



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
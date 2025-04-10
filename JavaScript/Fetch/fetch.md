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

## fetch를 처리하는 문법

## fetch().then()

## fetch().then().then().then() ...catch()
비동기로 처리하면서 결과를 동기적으로 기다리는 방식...



## 숙제 
1. jsonplaceholder 사이트에서 posts 에서 랜덤으로 1~100 까지 숫자 만들어서 불러와서 화면에 렌더링
2. 클리어 눌러서 화면에 있는 요소 클리어
3. 버튼 클릭 가능여부 추가 (로딩 중에 또 로딩 못하게.. 클리어 중에 또 클리어 못하게.. 클리어 할거 없으면 클리어 안되게..)

random으로 100개 지연 1초 , 지연처리ㅇ안해도 되지만 clear버튼 사용자 사용성 좋게 만들기

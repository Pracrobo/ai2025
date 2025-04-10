## querySelector

```JavaScript

document.querySelector("css 셀렉터 형태");
document.querySelector("#mydiv")
document.querySelector(".myclass")
document.querySelectorAll("div > ol > li")
document.querySelector("#mydiv")
document.querySelect



````
새로운 DOM 요소를 추가하려면
1. 새로운 돔 만들고
2. 내용을 채우고
3. 기존 어딘가의 돔에다가 붙이기
복습 : quesssNumber, calculator



## charAt

[prototype.charAt]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charAt")


## slice(start, end)
- 음수 인덱스를 사용할 수 있음

## substring(start, end)
- 시작부터 끝인덱스 전까지의 문자열을 반환


## 내장함수(internal function, builtin function)
- 언어자체에 포함되어 있는, 누가 미리 만들어준 함수

## eval 함수
evaluate : 계산



###  옛날언어는 if else로 예외 처리하는 함수들이 많았다.
### Exception 이라는 처리를 한다.
```JavaScript

try {
    원래 구문
}catch() {
    오류 처리 (exception handler)
}
````

Java > Python > JS > C ++ 확장버전

try ~ except


### Uncaught TypeError: document.querySelector(...).forEach is not a function

- document.querySelector(...)의 결과는 **단일 요소 (Element)**인데,
- 여기에 .forEach()를 쓰려고 해서 **"이건 함수 아냐!"**라고 에러를 낸 거예요.
- 단일 요소가 아닌 querySelectorAll()을 써야한다.


## 콜백함수(callback)
함수의 인자로 함수를 받아서 특정 시점이 되었을때 호출되도록 사용

## 함수 형태
```plain text
1. function name(arg) {
}

2. anonymous function (arg) (
))'
보통 콜백함수에서 사용함, 보통 한곳에서만 쓰일거라...

3. arrow function (arg) => {
}

3-1. {}괄호가 없는 케이스 바로 한줄이 return
3-2. {}괄호 안에 함수본문이 있는 경우 본문이 리턴되지 않는다. 필요시 return 이런식으로 반환하기
```

객체 (Object)
많은 정보를 하나의 변수로 효율적으로 전달
객체 안에는 속성(attribute), 함수 있음
- 메서드(Java)
- 함수(fuction)

JS > event.keyCode로 아스키코드를 옛날에 썼다.

### [암기 목록]
2진수 0-10 암기
16진수 ..암기
아스키 코드 
정규표현식
프로토콜


현재는 event.key로 쓴다.

# 고차함수(Higher-Order Function) 
- **다른 함수를 인자로 받거나, 함수를 반환하는 함수**
- 자바스크립트에서는 배열 메서드 중 `.map()`, `.filter()`, `.reduce()` 등이 대표적
- JavaScript는 함수도 값처럼 다룰 수 있는 "일급 객체(First-class citizens)"이기 때문에 가능


### 고차 함수 예시들
1. map(): 각 요소를 변형한 새 배열 반환
```js
const arr = [1, 2, 3];
const doubled = arr.map(x => x * 2);
// [2, 4, 6]
```

2. filter(): 조건을 만족하는 요소만 골라 새 배열 생성

```js
const arr = [1, 2, 3, 4];
const even = arr.filter(x => x % 2 === 0);
// [2, 4]
```
3. reduce(): 배열을 하나의 값으로 축소
```js
const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, cur) => acc + cur, 0);
// 10
```
4. 고차 함수 자체 만들기
```JS   
function withLogging(fn) {
  return function(...args) {
    console.log("Calling function with", args);
    return fn(...args);
  }
}
const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3); // logs and returns 5

```


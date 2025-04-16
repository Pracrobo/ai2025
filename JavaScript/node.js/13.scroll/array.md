# Array
- builtin 함수 : ES6
- 유사배열 객체(Array-like object), 반복 가능한 객체(Iterable) 를 진짜 배열(Array)로 변환할 수 있게 해준다.

## Array.from -  Syntax
```JavaScript
Array.from(arrayLike [, mapFn [, thisArg]])
```
- 매개변수
  - arrayLike :  배열처럼 생긴 객체 ex) {length: 3}, arguments, NodeList, Set, Map, 문자열등
  -  mapFn(Optional) : 배열의 각 요소를 변형할 수 있는 함수(map()과 유사)
  -  thisArg(Optional) : mapFn 실행시 사용할 this
  - 예시 ) Arguments
  ```JavaScript
    function example() {
    const args = Array.from(arguments);
    console.log(args); // 이제 진짜 배열
    }
    example(1, 2, 3);
  ```
### Array.from 사용

```JavaScript
const data = Array.from({length : 200} , (_, i) => `Item ${i+1}`);

```

### Array.fill()과 map()의 조합
```JavaScript
const data = Array(200).fill().map((_, i) => `Item ${i + 1}`);
```


### for loop 사용
```JavaScript
const data = Array.from({ length: 200 }, (_, i) => `Item ${i + 1}`);
```


### spread 연산자 활용
```JavaScript
const data = [...Array(200)].map((_, i) => `Item ${i + 1}`);
```


### Key 연산자 사용
```JavaScript
const data = Array.from(Array(200).keys()).map(i => `Item ${i + 1}`);
```



## Array.of()
- 주어진 인자를 그대로 배열로 만들어준다.
```JavaScript
    Array.of(element0, element1, element2, element3, ... ,elementN,)
```

```JavaScript
Array.of(1, 2, 3); 
// [1, 2, 3]
```

```JavaScript
Array.of(7);     
// [7]
```


```JavaScript
Array(7);       
// [ <7 empty items> ]  ← 길이 7짜리 배열

Array.of(7);    
// [7] ← 실제로 숫자 7이 요소로 들어감
```

## Array.prototype.fill()
- 배열의 **모든 요소를 지정한 값으로 채움**
- 기존 배열을 수정함 (immutable 아님)
- 예: `[0, 0, 0].fill(5)` → `[5, 5, 5]`
- 배열의 일부 또는 전체를 **지정된 값으로 덮어씀**
- start와 end는 선택 인자 (기본은 전체)
- 기존 배열이 변경됨 (mutate)
- 초기화된 배열을 빠르게 만들 때 유용

### Array.prototype.fill() - Syntax
```JavaScript
array.fill(value[, start[, end]])
```

### 예시
```js
[1, 2, 3].fill(0);          // [0, 0, 0]
[1, 2, 3, 4].fill(7, 1, 3); // [1, 7, 7, 4]
Array(3).fill('A');         // ['A', 'A', 'A']
```

## Array.prototype.map()
- 배열의 각 요소에 **함수를 적용해서 새 배열 생성**
- 원본 배열은 변하지 않음
- 예: `[1, 2, 3].map(x => x * 2)` → `[2, 4, 6]`

### Array.prototype?
- `Array.prototype`은 모든 배열이 **공통적으로 상속받는 객체**.
- 배열에 사용하는 `.map()`, `.filter()`, `.forEach()` 등은 전부 `Array.prototype`에 정의되어 있음.
- 즉, `arr.map()`은 내부적으로 `Array.prototype.map.call(arr)` 과 같음.



## 비교 예시
| 코드               | 결과                       | 설명                                 |
|--------------------|----------------------------|--------------------------------------|
| `Array(3)`         | `[ <3 empty items> ]`      | 길이 3의 빈 배열 생성 (요소 없음)    |
| `Array.of(3)`      | `[3]`                      | 숫자 3이 요소로 들어간 배열 생성     |
| `Array(1, 2)`      | `[1, 2]`                   | 여러 요소를 가진 배열 생성           |
| `Array.of(1, 2)`   | `[1, 2]`                   | 위와 동일                            |
| `Array.from('abc')`| `['a', 'b', 'c']`          | 문자열을 배열로 변환                 |
| `Array.from({length: 3}, (_, i) => i)` | `[0, 1, 2]` | 커스텀 로직으로 배열 생성             |



## 배열 관련 built-in 함수 중 원본 데이터 손상 여부 비교
| 함수               | 원본 변경 여부 | 설명                                          |
|--------------------|----------------|-----------------------------------------------|
| `Array.of()`       | ❌ 변경 없음   | 새 배열 생성                                  |
| `Array.from()`     | ❌ 변경 없음   | 새 배열 생성                                  |
| `Array()`          | ❌ 변경 없음   | 새 배열 생성 (단, 생성 방식에 주의)           |
| `.fill()`          | ✅ 변경됨      | 배열 전체 또는 일부를 값으로 덮어씀           |
| `.map()`           | ❌ 변경 없음   | 각 요소를 변환한 새 배열 반환                 |
| `.forEach()`       | ✅ 보통 변경됨 | 리턴값 없음. 직접 요소를 수정할 때 사용 가능 |
| `.filter()`        | ❌ 변경 없음   | 조건을 만족하는 새 배열 반환                  |
| `.reduce()`        | ❌ 변경 없음   | 누적 결과값만 반환. 원본 배열은 변경 없음     |
| `.push()`          | ✅ 변경됨      | 배열 끝에 요소 추가                            |
| `.pop()`           | ✅ 변경됨      | 마지막 요소 제거                              |
| `.splice()`        | ✅ 변경됨      | 요소를 추가/제거/교체                         |
| `.slice()`         | ❌ 변경 없음   | 배열 일부를 복사하여 새 배열 반환             |



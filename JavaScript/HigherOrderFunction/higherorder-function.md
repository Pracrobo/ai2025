# 고차함수(Higher-Order Function)
- 다른 함수를 인자로 받거나, 함수를 반환하는 함수를 말합니다
- 
## Array.prototype.filter()
Array 인스턴스의 filter() 메서드
- 주어진 배열의 일부에 대한 얕은 복사본을 생성
- 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링 한다.


```js
filter(callbackFn)
filter(callbackFn, thisArg)

```
`callbackFn` : 배열의 각 요소에 대해 실행할 함수
- 결과 배열에 요소를 유지라하려면 참값, 그렇지 않으면 거짓값을 반환

    - `element` : 배열에서 처리중인 현재 요소
    - `index` : 배열에서 처리 중인 현재 요소의 인덱스
    - `array` : filter()가 호출된 배열

`thisArg` : optional, `callbackFn`을 실행할때 this값으로 사용할 값이다.
순회메서드 참조

  |순회 메서드 : 많은 배열 메서드는 콜백 함수를 인수로 받습니다. 콜백 함수는 배열의 각 요소에 대해 순차적으로 최대 한 번만 호출되며, 콜백 함수의 반환값은 메서드의 반환값을 결정하는 데 사용됩니다. 이들은 모두 같은 모습을 공유합니다.


## Array.prototype.find()
- Array 인스턴스의 find() 메서드는 제공된 배열에서 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환합니다. 테스트 함수를 만족하는 값이 없으면 undefined가 반환됩니다.

- 배열에서 찾은 요소의 인덱스가 필요한 경우, findIndex()를 사용하세요.
- 값의 인덱스를 찾아야 하는 경우, indexOf()를 사용하세요. (findIndex()와 유사하지만, 테스트 함수를 사용하는 것 대신 각 요소가 값과 동일한지 확인합니다.)
- 배열에 값이 존재하는지 찾아야 하는 경우, includes()를 사용하세요. 이 역시 테스트 함수를 사용하는 것 대신 각 요소가 값과 동일한지 확인합니다.
- 제공된 테스트 함수를 만족하는 요소가 있는지 찾아야 하는 경우, some()을 사용하세요.
- 만약 주어진 테스트 함수를 만족하는 모든 요소를 찾고 싶으면 filter()을 사용하세요.

## Map
Map 객체는 키-값 쌍인 집합입니다. 한 Map에서의 키는 오직 단 하나만 존재 합니다. 이는 Map 집합의 유일성입니다. Map 객체는 키-값 쌍으로 반복됩니다. for...of 루프는 각 반복에 대해 [key, value]로 이루어진 멤버가 2개인 배열을 반환합니다. 반복은 삽입한 순서대로 발생합니다. 즉, set() 메서드로 맵에 처음 삽입한 각각의 키-값 쌍 순서와 대응됩니다. (set()이 호출되었을때 맵에서 해당 키가 없었을 경우입니다)

Map의 명세는 "평균적으로 집합 내 요소의 수에 따라 하위 선형인 접근 시간을 제공하는" 맵을 구현해야 한다고 기술되어 있습니다. 따라서 복잡성이 O(N)보다 더 나은 경우 내부적으로 해시 테이블(O(1) 룩업), 검색 트리(O(log(N)) 룩업) 또는 기타 데이터 구조로 표현될 수 있습니다.


### 생성자
Map()
새로운 Map 객체를 생성합니다.

### 정적 속성
get Map[@@species]
파생 객체를 만드는 데 사용되는 생성자 함수입니다.

### 인스턴스 속성
#### Map.prototype[@@toStringTag]
- @@toStringTag 속성의 초기 값은 문자열 "Map"입니다. 이 속성은 Object.prototype.toString()에서 사용합니다.

#### Map.prototype.size
Map 객체의 키/값 쌍의 숫자를 반환합니다.

### 인스턴스 메서드
#### Map.prototype.clear()
- Map 객체에서 모든 키-값 쌍을 제거합니다.

#### Map.prototype.delete()
- Map 객체에 해당 요소가 존재하며 삭제되었을 경우 true를 반환하며 해당 요소가 존재하지 않는 경우 false를 반환합니다. 이 이후에 map.has(key)를 실행하면 false를 반환할 것입니다.

#### Map.prototype.get()
- 주어진 키에 해당하는 값을 반환하거나 값이 없다면 undefined을 반환합니다.

#### Map.prototype.has()
- 주어진 키에 연관된 값이 Map 객체에 존재하는지 여부를 불리언 값으로 반환합니다.

#### Map.prototype.set()
- Map객체에서 전달된 키의 값을 설정합니다. Map객체를 반환합니다.

#### Map.prototype[@@iterator]()
- Map 객체에 삽입된 순서에 따라 [key, value] 두 개의 멤버 배열을 포함하는 새로운 반복자를 반환합니다.

#### Map.prototype.keys()
- Map 객체에 삽입된 순서에 따라 각 요소의 키를 포함하는 새로운 반복자를 반환합니다.

#### Map.prototype.values()
- Map 객체에 삽입된 순서에 따라 각 요소의 값을 포함하는 새로운 반복자를 반환합니다.

#### Map.prototype.entries()
- Map 객체에 삽입된 순서에 따라 [key, value] 두 개의 멤버 배열을 포함하는 새로운 반복자를 반환합니다.

#### Map.prototype.forEach()
- Map객체에 존재하는 각 키-값 쌍에 대해 삽입 순서대로 callbackFn을 한 번씩 호출 합니다. 만약 forEach호출 시 thisArg 매개변수가 있다면 각 콜백의 this 값으로 사용됩니다.

## Array.prototype.reduce()
4개의 인자를 가진다.
- 누적값 (acc, accumulator)
- 현재 값, 현재 배열 요소 (cur, currentValue)
- 현재 인덱스 (idx, currentIndex)
- 원본 배열 (src, array)

#### ref : [reduce이해하기]('https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce')
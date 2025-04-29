다음과 같은 경우 두 객체 o1과 o2는 얕은 복사입니다.

1. 두 객체는 같은 객체가 아닙니다 (o1 !== o2).
2. o1과 o2의 속성은 같은 이름과 순서입니다.
3. 두 객체의 속성 값은 동일합니다.
4. 두 객체의 프로토타입 체인은 동일합니다.

ex) myFunction(...iterableObj);
Array.prototype.concat(), Array.prototype.slice(), Array.from(), Object.assign(), Object.create()은 깊은 복사가 아닌 얕은 복사본을 생성합니다.